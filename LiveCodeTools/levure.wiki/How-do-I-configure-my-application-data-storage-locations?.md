The Levure Framework makes it easy to create and use application data folders for each of the platforms your application runs on.

The application data folder stores all app data files except those associated with the user’s documents. For example, you might use this directory to store app-created data files, configuration files, templates, or other fixed or modifiable resources that are managed by the app. An app might use this directory to store a modifiable copy of resources contained initially in the app’s bundle. A game might use this directory to store new levels purchased by the user and downloaded from a server.

## Contents

* [Set application data folder locations in app.yml](#set-application-data-folder-locations-in-appyml)
* [Examples](#examples)
* [Set macos and ios to the bundle identifier](#set-macos-and-ios-to-the-bundle-identifier)
* [Get the path with levureApplicationDataFolder](#get-the-path-with-levureapplicationdatafolder)

## Set application data folder locations in app.yml

You set your application data folder settings in `app.yml`:

```
application data folder:
  user:
    default:
    macos:
    windows:
    linux:
    ios:
    android:
  shared:
    default:
    macos:
    windows:
    linux:
```

## Examples

You can set a default application data folder for all platforms and then override it for specific platforms. So this:

```
application data folder:
  user:
    default: com.mycompany.myapplication
    macos:
    windows: My Application
    linux:
    ios:
    android:
```

Will cause your application to create and use these user application data folders:

| Platform | Application Data Folder |
| ---- | ----------- |
| Mac OS |  ~/Library/Application Support/com.mycompany.myapplication |
| Windows |  C:\\Users\\[user name]\\AppData\\Roaming\\My Application |
| iOS |  ~/Library/Application Support/com.mycompany.myapplication |
| Android |  ~/Documents/Application Support/com.mycompany.myapplication |

## Set macos and ios to the bundle identifier

For Mac OS and iOS, we recommend setting your application data folder to your application bundle identifier (`com.mycompany.myapplication`).

From the [Apple docs on "Application Support"](https://developer.apple.com/library/content/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileSystemOverview/FileSystemOverview.html#//apple_ref/doc/uid/TP40010672-CH2-SW1):

> All content in this (Application Support) directory should be placed in a custom subdirectory whose name is that of your app’s bundle identifier or your company.

## Get the path with levureApplicationDataFolder

While your application is running, you can get the full path of your user or shared application data folder by calling the function `levureApplicationDataFolder`.

```
put levureApplicationDataFolder("user") into tUserApplicationDataFolder
```

* [Learn about levureApplicationDataFolder](Levure-API#levureApplicationDataFolder)
