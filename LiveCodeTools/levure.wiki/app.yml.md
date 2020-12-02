## Contents

* [Overview](#overview)
* [Formatting](#formatting)
* [Levure settings](#levure-settings)
* [Custom settings](#custom-settings)

## Overview

The `app.yml` file is a [YAML](https://en.wikipedia.org/wiki/YAML) text file where you specify the configuration settings for your application. This file sits alongside the `standalone.livecode` and `app.livecodescript` stack files in [your app folder](Your-App-Folder).

The `levure.livecodescript` (stack name `LevureFramework`) framework  uses the settings in `app.yml` when loading your application into the LiveCode IDE as well as when packaging your application for distribution.

In the `app.yml` file you can specify UI stacks, libraries, helpers, backscripts, and frontscripts to be loaded from any location on your computer, even the LiveCode User Extensions folder.

When your application is packaged into distribution builds, `app.yml` specifies the necessary resources that need to be brought together to build the final application.

## Formatting

1. Make sure you use 2 spaces for each indentation level in the YAML file. Do not use tabs.

2. You enter the value for a setting by typing one space after the colon and then the setting value. Normally you will not use quotes around your settings values.

   ```
   name: My Application
   version: 1.0.0
   ```

4. You can add comments using the hash mark (#) either at the front or end of a line. You can add also add blank lines. Make sure there are no spaces at the front of the blank lines.

   ```
   # app.yml
   
   # This is a comment.
   
   name: My Application # This is another comment
   version: 1.0.0
   ```

5. In some cases there is a category and a list of settings. List members are denoted by a leading hyphen.

   ```
   helpers:
     - folder: ./helpers
     - filename: "[[FRAMEWORK]]/helpers/preferences"
   ```

6. Although you will normally not use quotes around your settings values, the exception is when you use the `[[FRAMEWORK]]` or `[[USER EXTENSIONS]]` variables. You see this in the `helpers` example above.

   The `[[FRAMEWORK]]` variable references the folder where the `levureFramework.livecodescript` file is located.

   The `[[USER EXTENSIONS]]` variable references the LiveCode User Extensions folder returned by the LiveCode function `revEnvironmentCustomizationPath()`.

## Levure settings

Here is the list of settings that Levure looks for in the `app.yml` file. You will use a text editor to enter your settings values.

You can also add your own [custom settings](#custom-settings) to the `app.yml` file. Any settings you add will be available via the `levureAppGet()` function.

GENERAL
* [name](#name)
* [version](#version)
* [build](#build)
* [encrypt stacks](#encrypt-stacks)
* [multiple instances](#multiple-instances--relaunch-in-background-windows-only)
>
* [relaunch in background](#multiple-instances--relaunch-in-background-windows-only)
* [creator code](#creator-code)
* [application data folder](#application-data-folder)
* [preferences filename](#preferences-filename)

STACKS, HELPERS, AND EXTENSIONS
* [ui](ui#the-ui-section-in-appyml)
* [libraries](libraries)
* [behaviors](behaviors)
* [frontscripts](frontscripts-and-backscripts)
* [helpers](helpers#customizing-the-helpers-section-of-the-appyml-file)
* [extensions](extensions)

PACKAGING
* [build folder](#build-folder)
* [build profiles](packager#the-build-profiles-section-in-appyml)

<br>

### name

You set `name` to the name of your application.

```
name: My Application
```

The `name` setting is optional. You might use it to define a name you will use in your application's About section (retrieving it with `levureAppGet`). You might also think of it as a title or heading for the `app.yml`.

The `name` setting is not used in packaging your application builds. It does not override or replace any of the LiveCode IDE Standalone Application Settings.

### version

You set `version` to the version number of your application. The version format is `x[.x[.x]]`

```
version: 1.0.0
```

### build

You set `build` to the build number of your application. 

[Learn more about version and build information](https://github.com/trevordevore/levure/wiki/packager#version-information).

```
build: 5
```

### encrypt stacks

You set `encrypt stacks` to true or false.

```
encrypt stacks: false
```

If you set `encrypt stacks` to true, then you will need to create an `.env` file alongside the `app.yml` file with PASSWORD=YOUR_PASSWORD_HERE in it. If you are using version control, don't commit the `.env` file to your repository.

* [Learn about encrypting and unencrypting your application stacks](How-do-I-use-password-protection-for-my-application-stacks%3F)

### multiple instances / relaunch in background (Windows only)

Set `multiple instances` to `true` if you want your application to support multiple instances when it is relaunched. If `multiple instances` is `false` and you don't want the defaultStack to come forward when the user relaunches the application then set `relaunch in background` to true.

When the `relaunch` message is sent to the standalone and processed by the framework, a `RelaunchApplication` message will be dispatched to the `app` stack. If your application requires any special logic for bringing windows forward then it should be handled here. If any command line parameters are passed to `relaunch` then the `ProcessCommandLineParameters` message will be dispatched to the `app` stack as well.

### creator code

If you have a creator code for your application registered with Apple, set it here. Otherwise leave it blank.

```
creator code:
```

### application data folder

In the `application data folder` section you set your `user` and `shared` application data storage locations.

* [Learn about setting up your application data folder](How-do-I-configure-my-application-data-storage-locations%3F)

### preferences filename

In the `preferences filename` section you set your `user` and `shared` preferences file names.

* [Learn about setting up your preferences](Helper-preferences)

### build folder

You set `build folder` to the path to your distribution builds folder relative to your `app` folder. The default is `../builds`, which puts the folder next to your `app` and `levure` folders in your application project folder.
 
```
build folder: ../builds
```

## Custom settings

The settings defined in the `app.yml` file can be expanded beyond those listed above. For example, Helpers that you include with your application may use the `app.yml` file to store configuration information. You can also add properties specific to your application to the `app.yml` file. You can access the properties by using the `levureAppGet(pProp)` function. 

Note that if you try to access a property using `levureAppGet()` and that property is not defined in the `app.yml` file then an error will be thrown. Use `levureAppHasProperty()` to verify that a property is defined.