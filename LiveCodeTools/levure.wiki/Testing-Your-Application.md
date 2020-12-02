Levure offers a couple of ways to test your application. The nice thing about LiveCode is that you are actually testing your application while you work on it in the IDE. It is a good idea to test your application in simulators and as a standalone once in a while while developing, however.

## Contents

* [Testing in a standalone](#testing-in-a-standalone)
* [Testing in a simulator](#testing-in-a-simulator)
* [Testing on an Android device](#testing-on-an-android-device)

## Testing in a standalone

Levure can build standalones that can be used for testing your application on desktop platforms. The `levureBuildStandalonesForTesting` command will build standalones for the desktop platforms your application supports and place them in the `./builds/test` folder. The standalones don't have any of your application code in them, however. The standalones will load your application files from the `./app` folder. You can launch these test standalones at any point during development to see how your code works in a standalone.

## Testing in a simulator

To test your application in the Android or iOS simulator run the following commands in the message box:

```
levurePackageApplication "ios simulator"
```

```
levurePackageApplication "android simulator"
```

# Testing on an Android device

One way to test your application on an Android device is to build the APK file with the Levure packager and then install the APK file onto your device using `adb` in the Android platform tools.

Here are the steps:

1. Plug your USB debugging enabled Android device into your computer.

2. Open the `standalone.livecode` stack in a new instance of LiveCode. Do not click the "Open Application" button, we only want the standalone.

3. Make sure General, Inclusions, and Android panes in the Standalone Application Settings for `LevureStandalone` are filled in and Android is checked.

4. In the Message box, run the following:

   ```
   levurePackageApplication [build profile]
   ```

   Where [build profile] is "beta", "release", or some other build profile defined in `app.yml`.

   Levure will build an an Android APK file in your `builds` folder.

5. Locate where the Android SDK root is located on your computer. This is the folder referenced in Livecode > Preferences > Mobile Support > Android SDK.

   Open the command line terminal on your computer and change directories into the `platform-tools` folder in the SDK root:

   ```
   cd [path to Android SDK root]/platform-tools
   ```

   In the `platform-tools` folder there should be an `adb` executable. This is what you will use to install the `.apk` file in your `builds` folder onto your Android device.

6. In your terminal enter:

   ```
   ./adb install [path to the APK file in your builds folder]
   ```

   This will install your APK file as an application on your Android device ready for testing.

7. To uninstall your application, enter:

   ```
   ./adb uninstall [application identifier]
   ```

   Where [application identifier] is the Identifier you entered in the Android pane in the Standalone Settings.

Once you have entered your standalone settings and determined the file paths, this method is quick and easy. You build your Android application APK from `standalone.livecode` with one Levure command and then execute one line in your terminal to install the APK to your device.
