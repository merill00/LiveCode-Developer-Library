Once you have [created an application project](Creating-an-Application) with the Levure project creator you can start constructing your application in [your app folder](Your-App-Folder).

The Levure framework automatically loads stacks for you based on where the stack files are stored in your `app` folder and the settings in `app.yml`. Note that whenever you add, remove, or move files or folders around you will need to restart the LiveCode IDE and reload your application with `standalone.livecode` for the changes to take effect.

## Steps in constructing your application

* [Set application data folder in app.yml](#set-application-data-folder-in-appyml)
* [Set preferences filename in app.yml](#set-preferences-filename-in-appyml)
* [Add a user interface stack](#add-a-user-interface-stack)
* [Open a user interface stack when application launches](#open-a-user-interface-stack-when-application-launches)
* [Customize app.livecodescript](#customize-applivecodescript)
>
* [Add libraries, behaviors, frontscripts and backscripts](#add-libraries-behaviors-frontscripts-and-backscripts)
* [Add helpers](#add-helpers)
* [Add externals](#add-externals)
* [Add extensions](#add-extensions)
* [Add other assets](#add-other-assets)

## Set application data folder in app.yml

A common first step in constructing your application is to set the `application data folder` value in the `app.yml` file. This is required if you are using preferences in your application.

* [Learn about setting the application data folder](How-do-I-configure-my-application-data-storage-locations%3F)

## Set preferences filename in app.yml

After setting the `application data folder` you can set the `preferences filename` value in `app.yml`. If you leave this value blank your application will not support preferences.

Using preferences requires the `"[[FRAMEWORK]]/helpers/preferences"` helper.

* [Learn about setting up and managing preferences](Helper-preferences)

## Add a user interface stack

User interface (UI) stacks are visible binary LiveCode stacks that your user interacts with while running your application. Each UI stack and its associated behaviors is stored in its own folder within the `ui` folder in your `app` folder.

When you first create your application project with the Levure project creator, a sample UI stack is provided in the `sample_window` folder in the `app/ui` folder. Typically you will delete the `sample_window` folder and add your own UI stack folder(s) into the `ui` folder.

* [Learn about adding a user interface stack](ui)

## Open a user interface stack when application launches

To open a user interface stack when the application launches, edit your `app.livecodescript` script-only stack and add a `go stack ...` command to the `OpenApplication` handler.

Example:

```
script "app"
# This is the app.livecodescript script
...
on OpenApplication
  go stack "Document Editor"
end OpenApplication
...
````

## Customize app.livecodescript

In addition to opening a user interface stack, you will typically edit and customize `app.livecodescript` to perform other actions during your application startup and shutdown. For example, you might want to perform initialization operations during application startup and cleanup operations during application shutdown.

* [Learn about customizing app.livecodescript](app.livecodescript)

## Add libraries, behaviors, frontscripts and backscripts

You add libraries, behaviors, frontscripts and backscripts to your application simply by adding the script-only or binary stacks to the corresponding folder in your `app` folder. Library stacks go in the `app/libraries` folder, behaviors go in `app/behaviors`, frontscripts go in `app/frontscripts`, and backscripts go in `app/backscripts`.

The next time you open your application in the LiveCode IDE the stacks will be loaded correctly based on the folder they are in.

* [Learn about adding libraries](libraries)
* [Learn about adding behaviors](behaviors)
* [Learn about adding frontscripts and backscripts](frontscripts-and-backscripts)

## Add helpers

* [Learn about adding helpers](helpers)

## Add externals

* [Learn about adding externals](externals)

## Add extensions

* [Learn about adding extensions](extensions)

## Add other assets

* [Learn about including additional files and folders in your application builds](How-do-I-include-additional-files-and-folders-in-my-application-builds%3F)

<br>

__NEXT:__ [Packaging Your Application](packager)
