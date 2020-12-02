To include additional files and folders in your application builds created using `levurePackageApplication`, for example database and media files, use the `copy files` section in `app.yml`. `copy files` is part of the `build profiles` section. This allows you to target the files and folders you want to copy in a very general or very specific way.

```
# app.yml

build profiles:
  all profiles:
    copy files:
      package folder:
      all platforms:
      macos:
      windows:
      linux:
      ios:
      android:
```

When packaging an application the folder structure you specify in the `copy files` instructions will be maintained in the packaged application. This allows you to use the same code for referencing your database, media, and other files regardless of whether you are running your app in the IDE or as a standalone application. For example, if you store your media files in an `assets` folder that sits alongside the `app.yml` file then you would reference those media files as follows:

```
put levureAppFolder() & "/assets/MyMediaFile.png" into tFilename
```

You would use the following `copy files` rule to make sure the `assets` folder is copied over.

```
build profiles:
  all profiles:
    copy files:
      all platforms:
        - filename: assets
```

IMPORTANT: Do not use the "Copy Files" pane in the LiveCode Standalone Application Settings, because it may not copy nested folders and subfolders properly. Always use the `copy files` section in `app.yml` to include additional files and folders in your builds.

## Examples

* [Include files in the root of app folder](#include-files-in-the-root-of-app-folder)
* [Include files in nested folders in app folder](#include-files-in-nested-folders-in-app-folder)
* [Include folders in the root of app folder](#include-folders-in-the-root-of-app-folder)
* [Include specific subfolders in nested folders in app folder](#include-specific-subfolders-in-nested-folders-in-app-folder)
* [Copy files into the folder where the application is being packaged](#copy-files-into-the-folder-where-the-application-is-being-packaged)

## Include files in the root of app folder

To copy specific files in the root of the `app` folder into the same relative location in the distribution build...

- :open_file_folder: app
  - app.yml
  - app.livecodescript
  - standalone.livecode
  - file_to_copy_1.ext
  - file_to_copy_2.ext

...put this in the `copy files` section in `app.yml`:

```
build profiles:
  all profiles:
    copy files:
      all platforms:
        - filename: ./file_to_copy_1.ext
        - filename: ./file_to_copy_2.ext
      macos:
      windows:
      linux:
      ios:
      android:
```

To copy specific files only on iOS and Android, do this:

```
build profiles:
  all profiles:
    copy files:
      all platforms:
      macos:
      windows:
      linux:
      ios:
        - filename: ./file_to_copy_1.ext
      android:
        - filename: ./file_to_copy_2.ext
```

## Include files in nested folders in app folder

To copy specific files in nested folders in the `app` folder into the same relative locations in the distribution build...

- :open_file_folder: app
  - app.yml
  - app.livecodescript
  - standalone.livecode
  - :open_file_folder: nested_folder_1
    - file_to_copy_1.ext
  - :open_file_folder: nested_folder_2
    - :open_file_folder: sub_folder
      - file_to_copy_2.ext

...put this in the `copy files` section in `app.yml`:

```
build profiles:
  all profiles:
    copy files:
      all platforms:
        - filename: ./nested_folder_1/file_to_copy_1.ext
          destination: ./nested_folder_1
        - filename: ./nested_folder_2/sub_folder/file_to_copy_2.ext
          destination: ./nested_folder_2/sub_folder
      macos:
      windows:
      linux:
      ios:
      android:
```

## Include folders in the root of app folder

To copy specific folders in the root of the app folder with all of their contents, including subfolders, into the same relative location in the distribution build...

- :open\_file\_folder: app
  - app.yml
  - app.livecodescript
  - standalone.livecode
  - :file_folder: folder_to_copy_1
  - :file_folder: folder_to_copy_2

...put this in the `copy files` section in `app.yml`:

```
build profiles:
  all profiles:
    copy files:
      all platforms:
        - filename: ./folder_to_copy_1
        - filename: ./folder_to_copy_2
      macos:
      windows:
      linux:
      ios:
      android:
```

## Include specific subfolders in nested folders in app folder

To copy specific subfolders in nested folders in the `app` folder into the same relative locations in the distribution build...

- :open_file_folder: app
  - app.yml
  - app.livecodescript
  - standalone.livecode
  - :open_file_folder: nested_folder
    - :file_folder: sub_folder_to_copy_1
    - :file_folder: sub_folder_to_copy_2
    - :file_folder: sub_folder_to_exclude

...put this in the `copy files` section in `app.yml`:

```
build profiles:
  all profiles:
    copy files:
      all platforms:
        - filename: ./nested_folder/sub_folder_to_copy_1
          destination: ./nested_folder
        - filename: ./nested_folder/sub_folder_to_copy_2
          destination: ./nested_folder
      macos:
      windows:
      linux:
      ios:
      android:
```

NOTE: The above settings will only copy `sub_folder_to_copy_1` and `sub_folder_to_copy_2` into the distribution build. The subfolder `sub_folder_to_exclude` will not be copied.

## Copy files into the folder where the application is being packaged

For situations where you need to copy files into the folder where the application is being packaged use the `package folder` section. This will place files one level above the folders where the operating system-specific builds are placed.

To copy specific files stored outside of the `app` folder into the target packaging folder...

- :open_file_folder: myapp
  - :open_file_folder: app
    - app.yml
    - app.livecodescript
    - standalone.livecode
  - :open_file_folder: build files
    - psvince.dll
    - MyApp.iss

...put this in the `copy files` section in `app.yml`:

```
build profiles:
  all profiles:
    copy files:
      package folder:
        - filename: ../build files/psvince.dll
        - filename: ../build files/MyApp.iss
```

The above example copies files for buildling a Windows installer using Inno Setup.
