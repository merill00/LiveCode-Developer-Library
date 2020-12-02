The `levure/packager` folder contains the `packager.livecodescript` stack. This script uses the standalone settings of your the `standalone.livecode` stack and your application's `app.yml` configuration file to bring together all the necessary resources to package and build the final application ready for distribution.

* :open_file_folder: your_project_folder
  - :open_file_folder: app
      - app.yml
  - :file_folder: builds
  - :open_file_folder: levure
    - :open_file_folder: packager
      - packager.livecodescript

## Packaging an Application

**Important!** The *Files & Memory* > *If destroyStack is false, when closing the last stack in file:* preference in the LiveCode IDE is set to `ask` you may experience issues when packaging an application. You will need to change the preference to be `Close the file` or `Don’t close the file`.

Levure will package up an application for distribution. You need to do two things before packaging your application:

1. Configure the standalone settings for the `standalone.livecode` stack file using the File > Standalone Application Settings... menu option in the LiveCode IDE. Configure the settings for each of the platforms your application supports and select any inclusions you want the LiveCode standalone builder to include with your standalone.
2. Configure the `copy files` section of the `app.yml` file.

Once you have done those two things you can package your application. To package your application for a specific build profile call the following handler:

```
levurePackageApplication pBuildProfile
```

- Creates a folder named after the build profile in the `builds folder`.
- Within that folder a folder is created using the version and build number.
- The packaged applications will be placed in folders for each platform you build your application for.
- All applicable files listed in the `ui`, `libraries`, `behaviors`, `frontscripts`, `backscripts`, and `helpers` sections of the `app.yml` file will be copied over.
- Any files listed under a `helper` defined section in the `app.yml` that copies files. For example, the `font_loader` helper defines the `fonts` section. Any font file listed under this section is copied over.
- Any files in the `copy files` section of the `app.yml` file will be copied over. Variable replacement will be performed on any files.
- If you are building on OS X and have configured a `certificate name` then the app will be signed.
- If you are building for a profile named Mac App Store" then the app will be signed, zipped up, and prepared for upload to the Mac App Store.

In addition, when calling `levureBuildProfile()` in the packaged application `pBuildProfile` will be returned. This allows you to customize behavior in the application at run-time.

## The build profiles section in app.yml

Build profiles allow you to customize behavior. When packaging an application you can use build profiles to customize the files that are included in the packaged application. 

Here is an example of the `build profiles` section. The example defines the `development`, `beta`, and `release` profiles. 

```
# app.yml

...

build profiles:
  all profiles:
    packager callbacks stackfile: [relative path to LiveCode file that will be run post build]
    certificates:
      macos:
        name: [name of certificate to sign OS X applications with]
    copy files:
      all platforms:
        - filename: [relative path to file or folder that should be copied to build folder]
          destination: [relative destination folder without build folder]
        ...
      macos:
        ...
      windows:
        ...
      linux:
        ...
      ios:
        ...
      android:
        ...
  development:
  beta:
  release:

...
```

The above example doesn't define any behavior that is specific to the build profiles. Let's look at some scenarios where you would want to customize the files that are copied.

### Development

If you are working on experimental functionality and you send out builds to people testing then you can use the `development` build profile to add those files to your packaged application. The following snippet copies in an sftp export plugin that is being worked on.

```
development:
    copy files:
      all platforms:
        - filename: web plugins/sftp
```

### Mac App Store

An application that has been packaged for the Mac App Store requires an `.entitlements` file. The following snippet copies an entitlement file stored into the packaged application folder when packaging the application using the `mac app store` build profile. The entitlement file is located in a `packager resources/sandbox files/` folder that sites alongside the `app` folder.

```
build profiles:
  mac app store:
    copy files:
      - filename: ../packager resources/sandbox files/My App.entitlements
```

### copy files section

For more information on using the `copy files` section refer to the following documentation.

* [Learn about including additional files and folders in your application builds](How-do-I-include-additional-files-and-folders-in-my-application-builds%3F)

## Building executables for testing

The framework supports building stub executables that can be used to launch your app in a standalone environment for testing. By using the stub executables for testing, you can be working on your application in the IDE and instantly test your work running in a standalone.

* [Learn about testing your application](Testing-Your-Application)

## Version information

There are two properties you will deal with for versioning: `version` and `build`. `version` is in the [major].[minor].[revision] format. This is what you would display to users. `build` is an integer that you should increment each time you build your application. You can start the build number at 1 and then increment by one each time you package your application and send it to someone.

The build number is used to uniquely identify each update to your app using an integer. For Android it is assigned to the [`versionCode` property](https://developer.android.com/studio/publish/versioning.html). If you submit your application to the Mac App Store the value is used to identify each package in a ['release train'](https://developer.apple.com/library/content/technotes/tn2420/_index.html). It can also be used with the Sparkle framework to uniquely identify your application.
