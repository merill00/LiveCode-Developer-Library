A Levure application employs at least four core files when it is running: three LiveCode stacks and a YAML text file named `app.yml`. Each core stack has a file name that you see in your application project folder and a stack name that is used when the stack is open in your application.

| File Name | Stack Name |
| -------- | ----------- |
| standalone.livecode | LevureStandalone |
| levure.livecodescript | LevureFramework |
| app.livecodescript | app |
| app.yml |   |

Let's look at each of these core files:

## LevureStandalone

`LevureStandalone` is the stack name of the standalone file you run to start your application. The standalone file can be either `standalone.livecode` in development or a standalone executable built from `standalone.livecode` in your packaged distribution build.

The purpose of `LevureStandalone` is to load the `LevureFramework` stack as a behavior. This is why you must always start a Levure application with the standalone. Once `LevureFramework` is loaded it takes over and handles the application startup from there.

**Important note for HTML5!** If you are building for HTML5 then you will need to resize the LevureStandalone stack to be the size that you want your presentation to appear at in the web browser. LiveCode looks at the size of the stack being built as a standalone when determining the size of of the LiveCode app on the web page.

* [Learn about LevureStandalone](standalone.livecode)

## LevureFramework

`LevureFramework` is the stack name of the `levure.livecodescript` script-only stack that has the primary framework functionality. When you start an application with the standalone, `LevureFramework` is opened as a behavior of `LevureStandalone` and is put into the message path as a global library with `start using`.

When `LevureFramework` is first loaded it reads the settings in the `app.yml` file into an array and uses that information to manage the startup of your application. The framework loads libraries, behaviors, frontscripts, backscripts, helpers, extensions, externals, and user interface stacks based on the settings in `app.yml`.

After startup, while your application is running, you interact with `LevureFramework` handlers and functions through the [Levure API](Levure-API).

* [Learn about LevureFramework](levure.livecodescript)

## app

`app` is the stack name of the `app.livecodescript` script-only stack that allows you to control the startup and shutdown operations for your application.

The `app` stack receives messages from `LevureFramework` during application startup and shutdown and has a handler for each message. You will edit the handlers in the `app` script to control when your application initialization and cleanup operations are called.

* [Learn about the app stack](app.livecodescript)

## app.yml

The `app.yml` file is a YAML text file where you specify all the configuration settings for your application. This file sits alongside the `standalone.livecode` and `app.livecodescript` stack files in [your app folder](Your-App-Folder). To modify this file for your application, you will use the text editor of your choice.

`LevureFramework` reads the settings in `app.yml` into an array when your application first starts up. `LevureFramework` then uses these settings when loading your application as well as when packaging your application for distribution.

In `app.yml` you specify your application UI stacks, libraries, helpers, backscripts, and frontscripts to be loaded. You can also specify any extensions and externals to be used and define settings for building and packaging your application distributions.

You can also add your own arbitrary custom settings to the `app.yml` file. Any settings you add will be available via the `levureAppGet()` function.

* [Learn about app.yml](app.yml)

<br>

__NEXT:__ [Updating Levure](Updating-Levure)
