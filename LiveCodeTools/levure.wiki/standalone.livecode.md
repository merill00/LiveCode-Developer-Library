The `standalone.livecode` file is in [your app folder](Your-App-Folder). This is is the binary "stub" stack you will build as an executable standalone using LiveCode. This is also the stack you will use to load your Levure application into the LiveCode IDE during development.

By default the `standalone.livecode` file has the stack name `LevureStandalone` when it is open in memory. If you like, you can rename `LevureStandalone` to something else. For example, you could rename it `MyAppStandalone` where `MyApp` is your application name.

Normally you will not modify any scripts or objects in the standalone stack. It is a bare launcher stack whose purpose is to load the `levure.livecodescript` framework as a behavior. After the framework script is loaded as a behavior it handles everything from there.

**Important note for HTML5:** If you are building for HTML5 then you will need to resize the LevureStandalone stack to be the size that you want your presentation to appear at in the web browser. LiveCode looks at the size of the stack being built as a standalone when determining the size of of the LiveCode app on the web page.

## Loading your application with the standalone

Whenever you are working with your application in the LiveCode IDE, you should always use the standalone to load your application by doing the following:

1. Open the `standalone.livecode` stack in the IDE.

2. With the __Browse__ tool active, click the _Open Application_ button. The Levure framework will initialize and run the application in the IDE and you can begin editing your stacks. To change what happens when your application launches you can modify the code in [app.livecodescript](https://github.com/trevordevore/levure/wiki/app.livecodescript).

## Building an executable with the standalone

You configure the standalone settings of this stack and build the executable using the LiveCode development environment, as described [here](http://lessons.livecode.com/m/4603/l/44282-building-standalone-applications).