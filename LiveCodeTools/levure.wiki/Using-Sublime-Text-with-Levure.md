## Contents
* [Overview](#overview)
* [Get Sublime Text](#get-sublime-text)
* [Install LiveCode language package](#install-livecode-language-package)
* [Configure Sublime Text user settings](#configure-sublime-text-user-settings)
* [Install LiveCode linter](#install-livecode-linter)
* [Notifying LiveCode of script-only stack updates in Sublime Text](#notifying-livecode-of-script-only-stack-updates)

## Overview
With the introduction of text based script-only stacks in LiveCode, and the ability to use them for object behaviors as well as libraries, it is now practical to write, edit, and manage all LiveCode scripts with a text editor such as Sublime Text. This article describes how to set up Sublime Text as a LiveCode script editor. As of March 18, 2017 Sublime Text is the only text editor that will notify the Levure IDE plug-in when saving a script only stack so that the script can be updated in memory. This allows you to edit in the text editor while working on your Levure application in the IDE.

Levure provides support for Sublime Text in the following ways:

* A LiveCode language package
* A LiveCode linter
* Integration of Sublime Text with LiveCode

## Get Sublime Text

If you don't already have it, you can get Sublime Text [here](https://www.sublimetext.com/).

If you are setting up Sublime Text for the first time, you should also [install Package Control](https://packagecontrol.io/installation).

## Install LiveCode language package

The LiveCode package for Sublime Text adds syntax highlighting for LiveCode script files. It is intended for editing script-only stacks.

The package includes a number of snippets that provide auto-completion when creating new handlers, if-then statements, try/catch blocks, etc. Auto-complete is also provided for all keywords, properties, functions, and commands.

To install the LiveCode package in Sublime Text, use [Package Control](https://packagecontrol.io/installation). This ensures the plug-in will be updated when new versions are available.

To install via Package Control, do the following:

1. Within Sublime Text, bring up the [Command Palette](http://docs.sublimetext.info/en/sublime-text-3/extensibility/command_palette.html) and type `install`. Among the commands you should see `Package Control: Install Package`. If that command is not highlighted, use the keyboard or mouse to select it. There will be a pause of a few seconds while Package Control fetches the list of available packages.

2. When the packages list appears, type `livecode`. Among the entries you should see one starting with `LiveCode`. Click on the `LiveCode` entry or select it and press `Enter` with your keyboard to install the language package.

## Configure Sublime Text user settings

### Screencast

This screencast by Trevor DeVore shows you some settings you can change in your Sublime Text user preferences to improve your experience while editing and managing your LiveCode script files in a version control system such as Git.

* [Configuring Sublime Text User Settings when Working with LiveCode](https://www.youtube.com/watch?v=RkhrHdah0zY)

## Install LiveCode Linter

The linter plug-in for SublimeLinter provides an interface for checking syntax for LiveCode scripts in Sublime Text. The linter will be used with files that are using the “LiveCode” syntax in Sublime Text.

You can get the LiveCode linter and installation instructions here:

* [LiveCode linter for Sublime Text](https://github.com/trevordevore/sublimelinter-contrib-livecodelint)

## Notifying LiveCode of script only stack updates

**Important** - you should only work on one Levure-based application in Sublime Text and the LiveCode IDE at a time.

In order for Sublime Text to notify LiveCode that a script has been updated three things need to be in place:

1. The LiveCode language package for Sublime Text must be installed.
2. A Sublime Text project must exist and be configured to notify LiveCode (see below for an example).
3. The `levureLoadExternalEditorServer` command must be called within the LiveCode IDE.

With the above setup the LiveCode IDE will be acting as a server and Sublime Text will be a client. Whenever you save a LiveCode file in Sublime Text a request will be sent from Sublime Text (the client) to the LiveCode IDE (the server). A Levure application script running in the LiveCode IDE will find the stack that was updated in Sublime Text and update the script in the IDE.

A good place to call `levureLoadExternalEditorServer` is in the `InitializeApplication` command in the `app.livecodescript` stack file. For example:

```
command InitializeApplication
  # Listen for updates from Sublime Text
  if the environment is "development" then
    levureLoadExternalEditorServer
  end if
end InitializeApplication
```

### Example Sublime Text project settings

To send requests to a specified server and port whenever LiveCode files are saved, create a Sublime Text project for your folder tree. Once you have done that, edit the `.sublime-project file`. Here is an example. You will need to modify "MyProject" and possibly the port number that you are using.

```
{
    "folders":
    [
        {
            "folder_exclude_patterns":
            [
                "builds"
            ],
            "path": ".",
            "name": "MyProject",
        }
    ],
    "livecode":
    {
        "notify_on_save": true,
        "notify_server":
        {
            "host": "localhost",
            "port": 61373,
            "debug": false
        }
    }
}
```

### Screencast

This screencast by Trevor DeVore shows you how to configure a Sublime Text project to send a notification to a Levure application running in the LiveCode IDE every time you save a .livecodescript file.

* [Connecting a Sublime Text project to a Levure application running in LiveCode](https://www.youtube.com/watch?v=gkVo35Tb3ck)
