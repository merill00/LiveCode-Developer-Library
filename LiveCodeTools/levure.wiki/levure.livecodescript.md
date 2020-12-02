The `levure.livecodescript` script-only stack file provides the primary framework functionality. It has the stack name `levureFramework` when it is open in memory while your application is running.

You should not edit the `levure.livecodescript` file. You can keep it updated to the latest version by [updating the levure folder](Updating-Levure) in your application project folder.

The `levure.livecodescript` script plays a key role for your application in the following areas:

* [Application startup](#application-startup)
* [While your application is running](#while-your-application-is-running)
* [Application shutdown](#application-shutdown)
* [Packaging your application distribution builds](#packaging-your-application-distribution-builds)

## Application startup

When your application is started with the standalone, the `levure.livecodescript` file is opened and its `levureFramework` script is attached to the standalone stack or executable as a behavior. The `levureFramework` script is then placed into the message path with `start using` so the framework handlers are globally accessible throughout your application.

When `LevureFramework` is first loaded it manages the startup of your application by performing a series of actions:

1. Load the contents of the `app.yml` file into a script local array so its configuration settings are accessible to the framework.

2. Load `app.livecodescript` which has the stack name `app` from the folder containing the `app.yml` file.

3. Load any externals specified in `app.yml`.

4. Load helpers specified in `app.yml` whose `preload` property is true. Any helper included with the framework is preloaded. When a helper is loaded all extensions, libraries, backscripts, and frontscripts that make up a helper will be loaded. Any UI stacks in the helper are added to the list of stackFiles of the `app` stack.

5. Create application data folders as specified in `app.yml`.

6. Dispatch `PreloadApplication` message to the `app` stack.

7. Load remaining application assets as specified in `app.yml`. Extensions, libraries, backscripts, frontscripts are loaded into memory. UI stacks are added to list of stackFiles of the `app` stack.

8. Dispatch `InitializeApplication` message to `app` stack.

9. Dispatch `OpenApplication` message to `app` stack.

## While your application is running

After startup, while your application is running, you can call the `levureFramework` handlers and functions defined in the [Levure API](Levure-API).

## Application shutdown

When your application quits, `levureFramework` handles the LiveCode `shutdown` message and dispatches the `PreShutdownApplication` message to the `app` stack where you can perform any cleanup operations.

## Packaging your application distribution builds

When you [package your application for distribution](packager), you call the `levurePackageApplication` handler in `levureFramework` to invoke the packaging process.
