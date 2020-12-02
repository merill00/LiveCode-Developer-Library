- [errorDialog](#errorDialog)
- [levureAppFolder](#levureAppFolder)
- [levureAppGet](#levureAppGet)
- [levureAppGetConfig](#levureAppGetConfig)
- [levureAppGetENV](#levureAppGetENV)
>
- [levureAppHasProperty](#levureAppHasProperty)
- [levureApplicationDataFolder](#levureApplicationDataFolder)
- [levureApplicationState](#levureApplicationState)
- [levureAppPrintConfig](#levureAppPrintConfig)
- [levureAppSet](#levureAppSet)
>
- [levureAppStackFilename](#levureAppStackFilename)
- [levureAppStackName](#levureAppStackName)
- [levureBuildExtensions](#levureBuildExtensions)
- [levureBuildFolder](#levureBuildFolder)
- [levureBuildProfile](#levureBuildProfile)
>
- [levureBuildStandalonesForTesting](#levureBuildStandalonesForTesting)
- [levureExternalsLoadedInMemory](#levureExternalsLoadedInMemory)
- [levureFinishLoadingApplication](#levureFinishLoadingApplication)
- [levureFrameworkFilename](#levureFrameworkFilename)
- [levureFrameworkFolder](#levureFrameworkFolder)
>
- [levureGetUIStacks](#levureGetUIStacks)
- [levureInitializeAndRunApplication](#levureInitializeAndRunApplication)
- [levureInitializeFramework](#levureInitializeFramework)
- [levureIsHelperLoaded](#levureIsHelperLoaded)
- [levureLoadAppConfig](#levureLoadAppConfig)
>
- [levureLoadExternalEditorServer](#levureLoadExternalEditorServer)
- [levurePackageApplication](#levurePackageApplication)
- [levureRelativeAppFolderPath](#levureRelativeAppFolderPath)
- [levureReloadRegisteredKey](#levureReloadRegisteredKey)
- [levureRunApplication](#levureRunApplication)
>
- [levureShutdownApplication](#levureShutdownApplication)
- [levureStandaloneFilename](#levureStandaloneFilename)
- [levureStandaloneFolder](#levureStandaloneFolder)
- [levureStandaloneStackName](#levureStandaloneStackName)
- [levureVersion](#levureVersion)
>
- [packagerDidFinishBuildingStandaloneForTesting](#packagerDidFinishBuildingStandaloneForTesting)
- [packagerDidFinishPackagingApplication](#packagerDidFinishPackagingApplication)
- [yamlFileToArray](#yamlFileToArray)

<br>

## <a name="errorDialog"></a>errorDialog

**Type**: command

**Syntax**: `errorDialog <pError>`

**Summary**: Displays errors that occur in a standalone during initialization or cleanup.

**Description**:

If an error occurs in a standalone while the framework is loading or shutting down the application
then the error will be displayed and the application will quit. The assumption is that something
unexpected happened and you don't want your application lingering around in memory unable to quit.


<br>

## <a name="levureAppFolder"></a>levureAppFolder

**Type**: function

**Syntax**: `levureAppFolder()`

**Summary**: Returns path to the folder where the app.yml file is located.

**Returns**: Path to file

**Example**:
```
put levureAppFolder() into tAppFolder
```

<br>

## <a name="levureAppGet"></a>levureAppGet

**Type**: function

**Syntax**: `levureAppGet(<pProp>)`

**Summary**: Gets an app property.

**Returns**: Mixed as it depends on property value

**Description**:

This handler targets the internal array that was created when the app.yml file
was loaded.

If the property passed in does not exist then an error will be thrown.

**Example**:
```
put levureAppGet("multiple instances")

# Get a multi-dimensional value
put "preferences filename" into tLookupA[1]
put "shared" into tLookupA[2]
put "macos" into tLookupA[3]
put levureAppGet(tLookupA)
```

<br>

## <a name="levureAppGetConfig"></a>levureAppGetConfig

**Type**: function

**Syntax**: `levureAppGetConfig()`

**Summary**: Returns the internal array that was created when reading the `app.yml` file.

**Returns**: Array

**Example**:
```
put levureAppGetConfig() into tAppA
put tAppA["name"]
```

<br>

## <a name="levureAppGetENV"></a>levureAppGetENV

**Type**: function

**Syntax**: `levureAppGetENV()`

**Summary**: Returns an environmental variable stored in the `.env` file.

**Returns**: String

**Description**:

During development you can place an `.env` file alongside the `app.yml` file. The format is
a key=value pair, one per line. This function will return a key value.

Use the `.env` file to store values you don't want stored in a git repository. For example,
you should store the `password` used to password protect your application in the `.env` file.
As long as the `.env` file is not stored in your version control repository the password
will not be stored in the repository.

The Levure application packager will use this function to check for a password when packaging
your application.

**Example**:
```
# Assumes your .env file has a PASSWORD=VALUE line in it
put levureAppGetENV("password") into tPassword
```

<br>

## <a name="levureAppHasProperty"></a>levureAppHasProperty

**Type**: function

**Syntax**: `levureAppHasProperty(<pProp>)`

**Summary**: Use to check if a property name is among the keys in the application configuration array.

**Returns**: True/False

**Description**:

This handler targets the internal array that was created when the app.yml file was loaded. If it is possible
that an application property doesn't exist then use this function before calling `levureAppGet()` or
`levureAppSet`. Both handlers will throw an error if the target property doesn't exist.


<br>

## <a name="levureApplicationDataFolder"></a>levureApplicationDataFolder

**Type**: function

**Syntax**: `levureApplicationDataFolder(<pUserOrShared>)`

**Summary**: Returns the folder where application data is stored for the application.

**Returns**: Path to folder

**Parameters**:

| Name | Description |
|:---- |:----------- |
| `pUserOrShared` |  Pass in `shared` for the shared folder path. Pass in `user` for the user folder path. Default is `user`. |

**Description**:

This handler combines the standard folder where application data is stored
on the current system with the application data folder defined in the `app.yml` file.

**Example**:
```
put levureApplicationDataFolder("user") into tUserDataFolder
```

<br>

## <a name="levureApplicationState"></a>levureApplicationState

**Type**: function

**Syntax**: `levureApplicationState()`

**Summary**: Returns the current state of the application.

**Returns**: "loading", "running", "shutting down"

**Description**:

Returns a value of `loading`, `running`, or `shutting down`. These values reflect the
internal state of the Levure application.

While Levure is loading application files at startup
the state is `loading`.

When Levure has begun to shut down the application (e.g. the user quit the application) then
the state is `shutting down`.

In all other cases the state is `running`.

**Example**:
```
# In app.livecodescript
on appleEvent pClass, pId, pSender
  # don't process events if application isn't running
  if levureApplicationState() is not "running" then pass appleEvent

  ...
end appleEvent
```

<br>

## <a name="levureAppPrintConfig"></a>levureAppPrintConfig

**Type**: function

**Syntax**: `levureAppPrintConfig()`

**Summary**: Returns a text representation of the internal array that was created when reading the `app.yml` file.

**Returns**: Array

**Example**:
```
put levureAppPrintConfig()
```

<br>

## <a name="levureAppSet"></a>levureAppSet

**Type**: command

**Syntax**: `levureAppSet <pProp>,<pValue>`

**Summary**: Sets an app property for the life of the current session.

**Returns**: Empty

**Description**:

This handler targets the internal array that was created when the app.yml file
was loaded. The value will only be updated for the current session. The app.yml
file is not updated.

**Example**:
```
levureAppSet "multiple instances", true

# Set a multi-dimensional property
put "preferences filename" into tLookupA[1]
put "shared" into tLookupA[2]
put "macos" into tLookupA[3]
levureAppSet tLookupA, "com.mycompanyname.myapp-shared"
```

<br>

## <a name="levureAppStackFilename"></a>levureAppStackFilename

**Type**: function

**Syntax**: `levureAppStackFilename()`

**Summary**: Returns the filename of the `app` stack file.

**Returns**: Path to file

**Example**:
```
put levureAppStackFilename() into tAppStackFilename
```

<br>

## <a name="levureAppStackName"></a>levureAppStackName

**Type**: function

**Syntax**: `levureAppStackName()`

**Summary**: Returns the name of the `app` stack.

**Returns**: "app"

**Description**:

If you ever need to refer to the `app` stack by name you can call this function. It
saves you from hard coding `app` in your code.

**Example**:
```
dispatch "MyCustomMessage" to stack levureAppStackName()
```

<br>

## <a name="levureBuildExtensions"></a>levureBuildExtensions

**Type**: command

**Syntax**: `levureBuildExtensions `

**Summary**: Builds extensions configured in the app.yml file.

**Returns**: Error message

**Description**:

If the app.yml file includes references to the source code files (*.lcb) for extensions then
this command will compile the source code and update the .lcm file for the extension.

This command can be useful if you are running the application for the first time on a system
that doesn't have compiled versions of the extensions.

**Example**:
```
levureBuildExtensions
```

<br>

## <a name="levureBuildFolder"></a>levureBuildFolder

**Type**: function

**Syntax**: `levureBuildFolder()`

**Summary**: Returns the folder where the packager will place builds.

**Returns**: Path to folder

**Example**:
```
put levureBuildFolder() into tBuildFolder
launch document tBuildFolder & "/build.log"
```

<br>

## <a name="levureBuildProfile"></a>levureBuildProfile

**Type**: function

**Syntax**: `levureBuildProfile()`

**Summary**: Returns the name of the build profile used to package the version of the application that is running.

**Returns**: Build profile name

**Description**:

When you package an application you package a specific build profile. This handler
returns the name of the build profile that was used. When running in the IDE "development"
is returned.

**Example**:
```
put levureAppGet("version") into tVersionString
if the levureBuildProfile() is "beta" then
  put " (BETA)" after tVersionString
end if
```

<br>

## <a name="levureBuildStandalonesForTesting"></a>levureBuildStandalonesForTesting

**Type**: command

**Syntax**: `levureBuildStandalonesForTesting `

**Summary**: Builds a standalone that loads all of your development files when launched.

**Returns**: Error message

**Description**:

This handler will create standalone engines that can be used for testing on your target platforms.
A `test` folder will be created in the `builds` folder that is configured in your `app.yml` file.
The `test` folder will have executables for each desktop platform that you standalone.livecode stack
has been configured for in Standalone Settings.

None of the actual application stacks are bundled with the executables. When you launch any of
the executables the executable will load the files from your development folder. This allows you
to quickly test changes while running from a standalone.

The Levure packager will attempt to include the Remote Debugger
(available in LiveCode 9 and above for Business licenses) if it is available.

**Example**:
```
levureBuildStandalonesForTesting
```

<br>

## <a name="levureExternalsLoadedInMemory"></a>levureExternalsLoadedInMemory

**Type**: function

**Syntax**: `levureExternalsLoadedInMemory()`

**Summary**: Returns a list of externals that are loaded into memory and available in the message path.

**Returns**: CR delimited list of external package names

**Example**:
```
set the wholematches to true
put levureExternalsLoadedInMemory() into tExternals
put "revXML" among the lines of tExternals
```

<br>

## <a name="levureFinishLoadingApplication"></a>levureFinishLoadingApplication

**Type**: command

**Syntax**: `levureFinishLoadingApplication `

**Summary**: Finishes loading the application during the startup sequence.

**Returns**: Empty

**Description**:

This handler is called "in time" during the startup sequence. You will not call this handler
in your code.

<br>

## <a name="levureFrameworkFilename"></a>levureFrameworkFilename

**Type**: function

**Syntax**: `levureFrameworkFilename()`

**Summary**: Returns the path to the levureFramework.livecodescript file.

**Returns**: Path to stack file

**Example**:
```
put the levureFrameworkFilename() into tFile
```

<br>

## <a name="levureFrameworkFolder"></a>levureFrameworkFolder

**Type**: function

**Syntax**: `levureFrameworkFolder()`

**Summary**: Returns the path to the folder where the levureFramework.livecodescript file is located.

**Returns**: Path to folder

**Example**:
```
put the levureFrameworkFolder() into tFolder
```

<br>

## <a name="levureGetUIStacks"></a>levureGetUIStacks

**Type**: function

**Syntax**: `levureGetUIStacks()`

**Summary**: Returns an array of all `ui` category assets.

**Returns**: Numerically indexed array. "name", "filename", and "key". "key" is the key the UI assets is listed under in app.yml.

<br>

## <a name="levureInitializeAndRunApplication"></a>levureInitializeAndRunApplication

**Type**: command

**Syntax**: `levureInitializeAndRunApplication `

**Summary**: Initializes and runs the application.

**Returns**: Empty

**Description**:

This handler is used internally by the framework to initialize and run the application.

Typically you will never need to call this handler as it is called automatically at `startup`
when your application is running in a standalone or when you click the button in the
`standalone.livecode` stack.

**Example**:
```
# In this example "MyStandalone" is the name of the standalone.livecode stack
start using stack "MyStandalone"
dispatch "levureInitializeAndRunApplication" to stack "MyStandalone"
```

<br>

## <a name="levureInitializeFramework"></a>levureInitializeFramework

**Type**: command

**Syntax**: `levureInitializeFramework `

**Summary**: Initializes the application without running it.

**Returns**: Error message

**Description**:

This handler is used internally by the framework to load the configuration information, load
all helpers, libraries, frontscripts, backscripts, behaviors, and ui assets. The `PreloadApplication`
message will be dispatched to the `app` stack.

Typically you will never need to call this handler. If you need to troubleshoot something
without runing your application you can call this handler after opening the `standalone.livecode`
file in the IDE. See example.

**Example**:
```
# In this example "MyStandalone" is the name of the standalone.livecode stack
start using stack "MyStandalone"
dispatch "levureInitializeFramework" to stack "MyStandalone"
put levureAppGetConfig() into tA
put tA["version"]
```

<br>

## <a name="levureIsHelperLoaded"></a>levureIsHelperLoaded

**Type**: function

**Syntax**: `levureIsHelperLoaded(<pHelperFolderName>)`

**Summary**: Returns true if a helper is loaded.

**Returns**: True/False

**Parameters**:

| Name | Description |
|:---- |:----------- |
| `pHelperFolderName` |  The name of the helper folder. |

**Example**:
```
put levureIsHelperLoaded("preferences") into tUsePrefs
```

<br>

## <a name="levureLoadAppConfig"></a>levureLoadAppConfig

**Type**: command

**Syntax**: `levureLoadAppConfig <pBuildProfile>`

**Summary**: Loads the app configuration data into memory and resolves all file references in it.

**Returns**: Error message

**Parameters**:

| Name | Description |
|:---- |:----------- |
| `pBuildProfile` |  This will be used to filter out assets using the "build profiles filter" property of each asset. |

**Description**:

When calling this command in the IDE the app.yml file will be read into memory.
When calling this command in a standalone the configuration information is stored as a
custom property of the `app` stack.

The app.yml file can contain relative folder and file references. All relative references
will be resolved when calling this handler.

**Example**:
```
levureLoadAppConfig
answer levureAppGet("name")
```

<br>

## <a name="levureLoadExternalEditorServer"></a>levureLoadExternalEditorServer

**Type**: command

**Syntax**: `levureLoadExternalEditorServer <pPort>`

**Summary**: Starts the server that listens for changes to application stack scripts.

[pPort]: Pass in a port if you plan on having two different Levure applications open in two different instances of the IDE. Otherwise the default port should suffice.

**Returns**: Empty

**Description**:

This handler allows you to work on a Levure application in the IDE and edit all of your script only stacks using
an external editor. The handler loads a stack into the IDE that starts a server on the `localhost`. The server listens
for requests notifying the server that a script only stack has been updated. The server will then update the script
of the matching stack in memory.

This handler is typically called in the `InitializeApplication` message that is sent to the `app` stack.

Currently Sublime Text is the only editor that will work using this setup. If you have the LiveCode language module
installed for LiveCode then each time you save a LiveCode file in Sublime Text a request is sent to the server.

**Example**:
```
command InitializeApplication
  if the environment is "development" then
    levureLoadExternalEditorServer
  end if
end InitializeApplication
```

<br>

## <a name="levurePackageApplication"></a>levurePackageApplication

**Type**: command

**Syntax**: `levurePackageApplication <pBuildProfile>`

**Summary**: Packages up a levure application for distribution.

**Returns**: Error message

**Parameters**:

| Name | Description |
|:---- |:----------- |
| `pBuildProfile` |  The profile to build (e.g. `release` or `beta`). The profile must be defined in your `app.yml` file. |

**Description**:

When you are ready to package up your application for distribution to someone you call this handler.
The build profile that you pass in is the value that will be returned by `levureBuildProfile()` when
running the standalones.

When packaging the application stacks will be encrypted if A) the `encrypted stacks` property is true in the `app.yml`
file and B) a password can be located. The password can be stored in the `app.yml` file (not advisable if you store your
project in a version control system) or in the `.env` file that sits alongside the `app.yml` file (add a PASSWORD=VALUE line).

During the packaging process any properties defined in the `build profiles` > `all profiles` and `build profiles` > `pBuildProfile`
sections of your `app.yml` file will affect how the application is packaged. Below is a description of properties you can define.

The `packager callback stackfiles` property in `app.yml` points to a stack that will receive the `finalizePackagedAssets pBuildProfile, pBuildProfile, @xAppA`,
`finalizePackageForPlatform pBuildProfile, pPlatform, pAppFolder, pOutputFolder`, and `packagingComplete pBuildProfile, pOutputFolder` messages.

The `certificates` > `macos` > `name` property is the name of the certificate that the packager should use to sign your applications on macOS.
The packager will prefix the certificate with `Developer ID Application:` for apps being distributed outside of the Mac App Store
and with `3rd Party Mac Developer Application:` for apps being distributed through the Mac App Store, and with `Mac Developer:` for apps built
for testing Mac App Store applications. The packager assumes you are
distributing through the Mac App Store if the name of pBuildProfile is "mac app store" and for development if pBuildProfile is
"mac app store development".

The `copy files` property determines which files will be copied into the output folder.

**Example**:
```
levurePackageApplication "release"
```

<br>

## <a name="levureRelativeAppFolderPath"></a>levureRelativeAppFolderPath

**Type**: function

**Syntax**: `levureRelativeAppFolderPath()`

**Summary**: Returns the path to the folder where the app.yml file is located relative to the location where the standalone stack is located.

**Returns**: Relative path to folder

**Description**:

If standalone.livecode and app.yml are in the same directory then this function returns empty.

**Example**:
```
put levureRelativeAppFolderPath() into tRelativePath
```

<br>

## <a name="levureReloadRegisteredKey"></a>levureReloadRegisteredKey

**Type**: command

**Syntax**: `levureReloadRegisteredKey <pKey>`

**Summary**: Sends message to helpers that need to process a registered key.

**Returns**: error

**Description**:

Dispatches the `loadRegisteredKeyFile` message to the stack specified by the helper
in the `register component` > `callback stack` setting. The message allows the helper
to process the file in some way. For example, if the helper works with yaml files
then the helper can read the yaml files when this message is sent.

The helper can add data to the internal array by marking the parameter as being passed
by reference in the handler definition.

<br>

## <a name="levureRunApplication"></a>levureRunApplication

**Type**: command

**Syntax**: `levureRunApplication `

**Summary**: Begins running the application during the startup sequence.

**Returns**: Empty

**Description**:

This handler is called "in time" during the startup sequence. You will not call this handler
in your code.

<br>

## <a name="levureShutdownApplication"></a>levureShutdownApplication

**Type**: command

**Syntax**: `levureShutdownApplication `

**Summary**: Cleans up and shuts down the application when running in a standalone.

**Returns**: empty

**Description**:

You should not need to call this handler in your own code. The framework calls this handler
when the `shutdown` message is received. An auto updater would call this function as well
when unloading the application prior to update.

When this handler is called it will dispatch `PreShutdownApplication` to the `app` stack.

<br>

## <a name="levureStandaloneFilename"></a>levureStandaloneFilename

**Type**: function

**Syntax**: `levureStandaloneFilename()`

**Summary**: Returns the path of the application standalone.

**Returns**: Path to file

**Example**:
```
put levureStandaloneFilename() into tAppFilename
```

<br>

## <a name="levureStandaloneFolder"></a>levureStandaloneFolder

**Type**: function

**Syntax**: `levureStandaloneFolder()`

**Summary**: Returns the path to the folder the application standalone is in.

**Returns**: Path to folder

**Description**:

On OS X the path points to the folder where the application bundle is located,
not the actual executable file inside of the application bundle.

If called in the IDE this returns the path where the standalone.livecode stack file is located.

**Example**:
```
put levureStandaloneFolder() into tAppFolder
```

<br>

## <a name="levureStandaloneStackName"></a>levureStandaloneStackName

**Type**: function

**Syntax**: `levureStandaloneStackName()`

**Summary**: Returns the short name of the `standalone.livecode` stack.

**Returns**: Stack short name

**Example**:
```
put levureStandaloneStackName() into tStackName
```

<br>

## <a name="levureVersion"></a>levureVersion

**Type**: function

**Syntax**: `levureVersion()`

**Summary**: Returns the version of the Levure framework in use.

**Returns**: The version in format x.x.x.x

<br>

## <a name="packagerDidFinishBuildingStandaloneForTesting"></a>packagerDidFinishBuildingStandaloneForTesting

**Type**: command

**Syntax**: `packagerDidFinishBuildingStandaloneForTesting `

**Summary**: Message sent from the packager script.

**Description**:

Move along. Nothing to see here.


<br>

## <a name="packagerDidFinishPackagingApplication"></a>packagerDidFinishPackagingApplication

**Type**: command

**Syntax**: `packagerDidFinishPackagingApplication <pStandaloneStackFilename>,<pBuildProfile>`

**Summary**: Message sent from the packager script.

**Description**:

Move along. Nothing to see here.


<br>

## <a name="yamlFileToArray"></a>yamlFileToArray

**Type**: function

**Syntax**: `yamlFileToArray(<pFilename>)`

**Summary**: Converts a YAML file to an array.

**Returns**: <br>**the result**: Error message<br>**it**: Array

**Parameters**:

| Name | Description |
|:---- |:----------- |
| `pFilename` |  Path to YAML file. |

**Description**:

Converts a YAML file to an array. You must use the same spacing throughout the file for indentation.

Note that there are some limitations with regards to YAML that is supported:
1. Comments are not supported.
2. - is not supported

**Example**:
```
put yamlFileToArray(tFilename) into tYamlA
put the keys of tYamlA
```

