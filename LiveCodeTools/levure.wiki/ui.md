The `ui` folder in [your app folder](Your-App-Folder) is where you store the user interface (UI) stacks for your application along with their associated script-only behavior stacks.

UI stacks are always binary LiveCode stacks (`.livecode` extension) because they have visual objects that are displayed to the user. You must use the LiveCode IDE to edit the appearance of UI stacks. However, you can separate out the scripts for a UI stack into script-only behavior stacks (`.livecodescript` extension) so they can be edited with a text editor and managed with version control.

## Contents

* [Screencast](#screencast)
* [Adding UI stacks](#adding-ui-stacks)
* [Separating UI scripts into script-only behaviors](#separating-ui-scripts-into-script-only-behaviors)
* [Creating script-only behaviors with LiveCode 8.15 and above](#creating-script-only-behaviors-with-livecode-815-and-above)
* [The ui section in app.yml](#the-ui-section-in-appyml)

## Screencast

[Watch a screencast](https://www.youtube.com/watch?v=ooGdLJeyG3k) showing how to add UI stacks to your application.

## Adding UI stacks

To add user interface stacks to your application do the following:

1. Create a folder in the `ui` folder that describes the UI stack(s) you want to add.

2. Create one or more standard binary stacks in the LiveCode IDE and place them in the folder you just created.

The next time you open your application in the LiveCode IDE you can reference the UI stacks by stack name to open and display them.

For example, say you have a UI stack with file name `document_editor.livecode` and stack name `Document Editor`. The `ui` folder would look like this:

* :open_file_folder: app
  * :open_file_folder: ui
    - :open_file_folder: document_editor
      - document_editor.livecode

And you can open and display the stack by putting this line in a script:

```
go stack "Document Editor"
```

## Separating UI scripts into script-only behaviors

If you are using version control or prefer to edit your scripts with a text editor, then binary UI stacks present a problem because their embedded scripts are inaccessible outside the LiveCode IDE. The solution is to separate out the scripts for a UI stack into script-only behavior stacks.

After you have followed the instructions above to add a UI stack, take these additional steps to separate the scripts into script-only behaviors :

### 1. Create a behaviors folder in the UI stack folder

Create a `behaviors` folder inside of the folder you created for your UI stack, alongside the UI stack file.

* :open_file_folder: app
  * :open_file_folder: ui
    - :open_file_folder: document_editor
      - document_editor.livecode
      - :file_folder: behaviors

### 2. Create script-only stacks for UI stack scripts

For each script in the UI stack that you want to separate, create a script-only stack with the extension `.livecodescript` and store it in the `behaviors` folder created above. The script for each object in the UI stack goes into its own script-only stack. Stack, card, group, and other object scripts each go into separate script-only stacks.

For example, say we create a `document_editor.livecode` UI stack with no scripts and store it in a `document_editor` folder in the `ui` folder. Next we create script-only stacks containing the stack script and card script and store them in a `behaviors` folder. Our `document_editor` folder now looks like this:

* :open_file_folder: app
  * :open_file_folder: ui
    - :open_file_folder: document_editor
      - document_editor.livecode
      - :open_file_folder: behaviors
        - card.livecodescript
        - stack.livecodescript

It is up to you whether you separate all or some of the UI stack scripts into script-only stacks. The only reason for separating the scripts is to make them accessible to version control or a text editor. You might choose to only separate longer scripts like stack, card, and group scripts and leave short scripts for buttons and other controls embedded in the binary stack.

### 3. Add references to script-only stacks to stackFiles of UI stack

After creating your script-only stacks, the next step is to add their references to the `stackFiles` property of the UI stack. This makes the script-only stacks accessible to objects in the UI stack and allows the scripts to be loaded as behaviors of the objects.

To add script-only stack references using the LiveCode IDE, open the UI stack and then open the stack property inspector. Navigate to the __Stack Files__ tab and add the script-only stacks from the `behaviors` folder to the `stackfiles` property.

### 4. Assign the script-only stacks as behaviors

The final step is to assign each script-only stack as the behavior of its corresponding object in the UI stack. 

In the LiveCode IDE, you can use the property inspector for each object to set the behavior to the corresponding script-only stack.

You can also set the behaviors through scripting. In our example, say the stack name of the `document_editor.livecode` UI stack is "Document Editor", the stack name of `stack.livecodescript` is "Stack Script", and the stack name of `card.livecodescript` is "Card Script". We can set the behaviors like this:

```
set the behavior of stack "Document Editor" to stack "Stack Script"
set the behavior of card 1 of stack "Document Editor" to stack "Card Script"
```

Now when the `document_editor.livecode` UI stack is opened in the application, the stack and card scripts are automatically opened as behaviors of the stack and card objects.

While this is a bit of work to set up, you can now edit your scripts with a text editor outside the LiveCode IDE and track changes to your scripts using version control.

## Creating script-only behaviors with LiveCode 8.1.5 and above

In LiveCode 8.1.5 and above, the behaviors section in the property inspector has features to help perform the above operations for you. In particular, the features help with the process of converting scripts already embedded in existing stacks into script-only behaviors.

* [Screencast: Creating Script Only Behaviors with LiveCode 9](https://www.youtube.com/watch?v=eyggLzIbeSU)

## The ui section in app.yml

By default the `app.yml` file is configured to automatically load all UI stacks stored in folders in the `ui` folder.

```
# app.yml

ui:
  - folder: ./ui
```

### Loading a single UI stack folder

You can modify the `ui` section in `app.yml` to only load one UI stack folder instead of all of them. For example, if you only want to load the UI stack(s) in the `ui/document_editor` folder, do this:

```
ui:
  - folder: ./ui/document_editor
```

### Overriding encryption setting for UI stacks and folders

Another reason you might want to modify the `ui` section in `app.yml` is to override the global encryption setting for specific UI stacks or folders of UI stacks. (The global encryption setting for your application is set by the `encrypt stacks` value in `app.yml`.)

For example, if your application is encrypted with a password but you have a UI stack that you don't want to be password protected then you could do this:

```
ui:
  - filename: ./ui/document_editor/document_editor.livecode
    encrypt: false
  - folder: ./ui
```

The stack you target with `filename` will be added to the list of stack files first along with the encryption setting. Then the UI stack folders in the `ui` folder will be loaded. The framework will see that the `ui/document_editor/document_editor.livecode` stack file has already been loaded and will skip it when loading the stack files in the `ui` folder thus leaving it unencrypted.

```
# app.yml

ui:
  - filename: [relative path to a specific `ui` stack folder or a stack file within `ui` stack folder]
    encrypt: true|false [optional parameter that can override the `encrypt stacks` setting for this stack]
  - folder: [path to folder containing `ui` stack folders]
    encrypt: true|false [optional parameter that can override the `encrypt stacks` setting for all stacks in the folder]
```