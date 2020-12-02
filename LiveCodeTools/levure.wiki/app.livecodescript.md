The `app.livecodescript` script-only stack file must be located directly alongside the `app.yml` file in [your app folder](Your-App-Folder). The stack must be named `app` in memory.

The `app` stack receives messages from `LevureFramework` during application startup and shutdown and has a handler for each message. You will edit the handlers in the `app` script to control when your application initialization and cleanup operations are called.

The `app` stack is also put in use as a library stack during application startup. You can add your own public handlers to the `app` script and they will be accessible to any other script in your application. This is also a good location to handle messages like `shutdown` and `shutdownrequest`.

Although you can add your own handlers to the `app` script, you should not remove the pre-existing handlers listed below.

## Handlers

* [PreloadApplication](#preloadapplication)
* [InitializeApplication](#initializeapplication)
* [OpenApplication](#openapplication)
* [PreShutdownApplication](#preshutdownapplication)
* [ProcessURL](#processurl)
* [ProcessFiles](#processfiles)
* [Add a FirstRun command](#add-a-firstrun-command)

## PreloadApplication

The `PreloadApplication` handler is where you perform operations that need to happen before stacks, extensions, and externals in `app.yml` are loaded.

## InitializeApplication

The `InitializeApplication` handler is called after script-only stacks, extensions, and externals in `app.yml` are loaded. This is where you perform initialization operations before your UI stack is opened.

## OpenApplication

The `OpenApplication` handler is called after `InitializeApplication`. This is where you open the UI stack that will be presented to the end user first.

## PreShutdownApplication

The `PreShutdownApplication` handler is called right before the application quits. This is where you perform any cleanup operations.

## ProcessURL

The first parameter of the `ProcessURL` handler is a line delimited list of urls that your app has been requested to process. Requires the `"[[FRAMEWORK]]/helpers/files_and_urls"` helper.

## ProcessFiles

The first parameter of the `ProcessFiles` handler is a line delimited list of files that your application supports and that you should process. Requires the `"[[FRAMEWORK]]/helpers/files_and_urls"` helper.

## Add a FirstRun command

If your application has code that should only be executed the first time the application is run on a computer then you can add a `FirstRun` command. By checking to see if a preference has a value you can determine whether or not the application has been run before.

```
command InitializeApplication
  ...

  # If this the first time application has run on this computer, call FirstRun
  # This method requires the preferences framework helper to be loaded.
  if prefsGetPref("software build") is empty then
    FirstRun
    prefsSetPref "software build", levureAppGet("build")
  end if

  ...
end InitializeApplication

command FirstRun
  # Perform initialization operations only the first time application runs.
  ...
end FirstRun
```
