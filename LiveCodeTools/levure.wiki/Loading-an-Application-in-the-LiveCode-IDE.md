After you have [created an application](Creating-an-Application), you can load it in the LiveCode IDE.

To load a Levure application in the LiveCode IDE, do the following:

1. Open the `standalone.livecode` stack in the `app` folder of your project folder.

2. Switch to the __Browse__ tool and click the _Open Application_ button. The Levure framework will be activated and the application will be loaded into the IDE. When the application loads [various messages](https://github.com/trevordevore/levure/wiki/app.livecodescript#handlers) will dispatched by the Levure framework which are handled in `app.livecodescript`. To change which UI stack is loaded when the application is launched change the `OpenApplication` handler.

You must always start your application with the standalone to ensure all the stacks in your application are properly loaded.

## Loading the sample application

After you create a new application project, before you make any changes to the `app` folder, you can load a minimal sample application with the standalone. When you open `standalone.livecode` and click the _Open Application_ button, the Sample Window stack opens.

To see the stacks that make up a basic Levure application, open your LiveCode Project Browser (__Tools > Project Browser__) and view the open stacks. The list of open stacks will look something like this:

* app
* Levure Sample Window Card Behavior
* LevureFramework
* LevureSampleWindow
* LevureStandalone

The two Sample Window stacks pertain to the user interface and will be replaced by your own UI stacks when you develop your application. The three remaining stacks are the core stacks found in every Levure application:

* app
* LevureFramework
* LevureStandalone

<br>

__NEXT:__ [Core Application Files](Core-Application-Files)