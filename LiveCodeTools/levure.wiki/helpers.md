## Introduction

In Levure a `helper` is a folder with a feature. A `helper` gathers up the UI, libraries, frontscripts, backscripts, externals, and extensions needed to add a feature to a Levure application into a single distributable folder. The developer creating the helper can easily organize the files needed to add the feature. The developers using the helper simply drop the helper folder into their Levure app to add the feature. Easy peasy lemon squeezy.

A good example of a `helper` is the preferences helper that ships with the framework. The `./framework/helpers/preferences` `helper` folder has both a library stack and an external. Both files work together in LiveCode to provide the feature. As an app developer you only have to think about adding the `preferences` helper folder to your project.

## Creating a helper

Helpers consist of a folder with a `helper.yml` file in it. The `helper.yml` file is a YAML file that specifies what the other files in the folder should be used for. Most helpers will be made up of one or more of the following components:

- ui
- libraries
- backscripts
- frontscripts
- behaviors
- externals
- extensions

In addition to the above components, a helper can specify that additional keys in the `app.yml` file are processed a certain way. The helper can also register a stack so that it will receive callback messages when an application is being packaged. The following two keys are available:

- register components
- packager callbacks stackfile

More on these two settings [below](#registering-components-with-levure).

A `helper.yml` file looks like this:

```
ui:
  - filename: [relative path to stack file]
    encrypt: [Optional parameter that can override the `encrypt stacks` setting for all stacks in the folder]
libraries:
  - filename: [relative path to stack file]
    encrypt: [Optional parameter that can override the `encrypt stacks` setting for all stacks in the folder]
    autoload: [set to false if you want the stack loaded into memory but not put in use]
frontscripts:
  - filename: [relative path to stack file]
    encrypt: [Optional parameter that can override the `encrypt stacks` setting for all stacks in the folder]
    autoload: [set to false if you want the stack loaded into memory but not inserted into front]
backscripts:
  - filename: [relative path to stack file]
    encrypt: [Optional parameter that can override the `encrypt stacks` setting for all stacks in the folder]
    autoload: [set to false if you want the stack loaded into memory but not inserted into back]
behaviors:
  - filename: [relative path to stack file]
    encrypt: Optional parameter that can override the `encrypt stacks` setting for all stacks in the folder.
externals:
  macos:
    - filename: [relative path to bundle]
      name: [name of external that appears in the externalPackages]
  windows:
    - filename: [relative path to dll]
      name: [name of external that appears in the externalPackages]
  linux:
    - filename: [relative path to library]
      name: [name of external that appears in the externalPackages]
extensions:
  - filename: [relative path to .lcm file]
    resource folder: [optional relative path to folder containing resources that extension relies on]
    source file: [optional relative path to .lcb file]
distribute: [set to false if the helper should not be packaged for distribution with the application]
build profiles filter: [comma delimited list of build profiles. If build profile is prefixed with `!` then the helper will not be packaged with that build profile (e.g. '!mac app store'). If the helper is not prefixed with `!` then the helper will be packaged with the build profile (e.g. mac app store). If this property is empty or not defined then the helper is packaged with all build profiles.]
```

If your helper includes an extension then you can also specify a `resource folder` for the extension. This is the folder where any resources that your widget loads will come from. For example, if you use `image from resource file mResource` in your widget LiveCode Builder code and it is a relative reference then the LiveCode engine will look in the resource folder.

## Adding new helpers to your application

Each `helper` is stored in the `helpers` folder that sits alongside the `app.yml` file in [your app folder](Your-App-Folder). The default `app.yml` file in a new project will automatically load any `helper` folders you place in the `helpers` folder.

## Customizing the `helpers` section of the `app.yml` file

You can customize how `helpers` are loaded by modifying the `helpers` section of the `app.yml` file. For example, you can point to `helpers` that are stored in other directories or change the encryption settings to be different than the encryption setting for the reset of the application.

```
# app.yml

helpers:
  - filename: [relative path to an individual `helper` folder]
    encrypt: true|false [optional parameter that can override the `encrypt stacks` setting for all stacks in the individual `helper` folder.]
  - folder: [relative path to a folder containing helper folders]
    encrypt: true|false [optional parameter that can override the `encrypt stacks` setting for all stacks in each `helper` folder.
```

## Registering components with Levure

Sometimes a helper may need to be configured using the `app.yml` file. As a helper developer you usually don't need to do anything special to read a property of the application. Just ask the user to add a key to the `app.yml` file and then read the value in your helper. Use the `levureAppHasProperty()` function to verify that the property has been configured and then use `levureAppGet()` to read the value. Here is an example from the `file_system` helper:

```
on libraryStack
  if the target is not me then pass libraryStack

  local tListA, tProtocol

  if levureAppHasProperty("url protocols") then
    put levureAppGet("url protocols") into tListA
    repeat for each key tProtocol in tListA
      if word 1 to -1 of line 1 of tProtocol is not empty and word 1 to -1 of line 1 of tListA[tProtocol] is not empty then
        fileSystemRegisterURLProtocol tProtocol, tListA[tProtocol]
      end if
    end repeat
  end if
end libraryStack
```

But what if your helper has more sophisticated needs? For example, what if your helper relies on YAML files to provide configuration information and those files should be parsed when the application is loaded? Or what if your helper needs to modify files that are in the `copy files` section of the `app.yml` file when packaging an application? In order to support such needs you can register components in the `helper.yml` file. Each registered component is configured using the following properties:

- key
- kind

The `key` property is the key in the `app.yml` file that will be registered. The `kind` property specifies how the `key` will be processed by Levure. Additional properties will be configured as well depending on the value of `kind`. `kind` can be set to one of the following values:

- ui
- files
- copy files

The table below contains a description of each `kind` as well as the properties that can be set.

| Kind | Description |
|:---- |:----------- |
| `ui` |  `key` will be treated like the Levure `ui` key. |
| `files` | `key` contains a list of files. Levure will resolve the full path to the file. The helper specifies a stack file in the helper folder that will receive the `loadRegisteredKeyFile` message when each file listed in the `files` section is loaded. The stack file is configured using the `callback stackfile` property. |
| `copy files` | `key` can be added to the `copy files` section of `app.yml`. It contains a list of files that will be copied during the appliation packaging process. Each file will be processed using a callback message and copied into the package folder. The `target platform` key specifies which platform the key applies to. Accepted values are `package folder`, `all platforms`, `android`, `ios`, `linux`, `macos`, and `windows`. The `destination` key specifies a folder to copy the files into. The `callback stackfile` specifies the name of a stack file in the helper folder that will receive callback messages.|

Let's look at some examples.

### `ui` example

Here is an example showing how to register a `ui` component. The example shows what goes in the `helper.yml` file as well as the `app.yml` file.

```
# helper.yml

register components:
  - key: templates
    kind: ui
    callback stackfile: template_levure_callbacks.livecodescript
```

```
# app.yml

templates:
  # Treat all folders in the ./templates folder as ui components
  - folder: ./templates
```

`ui` components can register a `callback stackfile`. In the example above a callback message will be sent to the `template_levure_callbacks.livecodescript` stack every time a folder from the `./templates` folder is copied during the packaging process. The callback message is `finalizePackagedUIAsset` and the build profile being packaged as well as the path to the folder that was copied are passed in as parameters. Here is an example that deletes a `behaviors` folder from each package component.

```
command finalizePackagedUIAsset pBuildProfile, pPackagedUIComponentFolder
  if there is a folder (pPackagedUIComponentFolder & "/behaviors") then
    revDeleteFolder pPackagedUIComponentFolder & "/behaviors"
  end if
end finalizePackagedUIAsset
```

### `files` example

Here is an example showing how to register a `files` component. The example shows what goes in the `helper.yml` file as well as the `app.yml` file.

```
# helper.yml

register components:
  - key: layouts
    kind: files
    callback stackfile: layout_levure_callbacks.livecodescript
```

```
# app.yml

layouts:
  - folder: layouts
    distribute: false
```

In this example a callback message will be sent to the `layout_levure_callbacks.livecodescript` stack every time a file from the `./layouts` folder is loaded at startup. The callback message is `loadRegisteredKeyFile` and the array representing the file is passed in. Here is an example that treats each file as a YAML file. The file contents are converted into an array and stores the array as a key of the `xFileA` parameter that was passed in.

```
# layout_levure_callbacks.livecodescript

command loadRegisteredKeyFile @xFileA
  put yamlFileToArray(xFileA["filename"]) into xFileA["data"]
  if the result is not empty then
    return "unable to read layout yaml file" && xFileA["filename"] && ":" && the result for error
  else
    return empty for value
  end if
end loadRegisteredKeyFile
```

With the YAML file having been converted to an array other helper scripts can acccess the `data` key.

```
# some_other_script.livecodescript

put levureAppGet("layouts") into tLayoutsA
repeat with i = 1 to the number of elements of tLayoutsA
  put tLayoutsA[i]["data"]["layout"]["name"] & "," after tKinds
end repeat
```

### `copy files` example

Here is an example showing how to register a `copy files` component. The example shows what goes in the `helper.yml` file as well as the `app.yml` file.

```
# helper.yml

register components:
  - key: app updater
    kind: copy files
    target platform: package folder
    destination: update
    callback stackfile: app_updater_packager.livecodescript
```

```
# app.yml

build profiles:
  all profiles:
    copy files:
      package folder:
        - filename: ../build files/psvince.dll
      app updater:
        - filename: ../build files/screensteps_appcast.xml
        - filename: ../build files/update.txt
```

In this example all build profiles will copy the `../build files/screensteps_appcast.xml` and `../build files/update.txt` files into an `update` folder inside of the package output folder. Each time a file is copied the `processCopyFilesFile` message will be sent to the `app_updater_packager.livecodescript` stack.

Here is an example of what the `processCopyFilesFile` message looks like. The first parmaeter is passed by reference and data within the file can be modified before it is saved to disk.

```
command processCopyFilesFile @xFiledata, pOutputFolder, pBuildProfile
  local tConfigA

  if levureAppHasProperty("app updater") then
    put levureAppGet("app updater") into tConfigA
    _replaceVariables xFiledata, pBuildProfile, tConfigA
  end if
end processCopyFilesFile
```

## Receiving callbacks when packaging an application

A helper can register to receive callback messages when an application is being packaged. This allows the helper to affect the packaging process. To receive callbacks you add the `packager callbacks stackfile` property to the `helper.yml` file. Here is an example:

```
# helper.yml

packager callbacks stackfile: inno_setup_packager.livecodescript
distribute: false
```

Note in the example that the `distribute` property has been set to false. If a `helper` only affects the packaging process and shouldn't be distributed with the application then set `distribute` to `false`.

Once registered, a stack will receive the following callbacks:

- finalizePackagedAssets
- finalizePackage
- packagingComplete

`finalizePackagedAssets` is sent right before the packager starts copying files and folders into the destination folder. The app array that will be packaged up with the application is passed in so that it can be modified. For example, if you have a helper that needs to add to the list of `behaviors` then the helper could use this callback to do that. You could also remove keys from the array. For example, your helper may use keys that are only applicable to the IDE and shouldn't be packaged.

`finalizePackage` is sent after the application files have been copied into the output folder but before any code signing or final operations have been performed.

`packagingComplete` is sent after the packager has finished doing all of it's work. If you want to automate building an installer for your application then this is the place to do it.

```
# app_updater_packager.livecodescript

command finalizePackagedAssets pBuildProfiles, @xAppA
  ...
end finalizePackagedAssets


command finalizePackage pBuildProfile, pOutputFolder
  ...
end finalizePackage


command packagingComplete pBuildProfile, pOutputFolder
  ...
end packagingComplete
```
