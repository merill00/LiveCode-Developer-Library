The `behaviors` folder in [your app folder](Your-App-Folder) is where you store behavior stacks for your application. Behavior stacks can be script-only stacks or binary stacks.

When a behavior stack is loaded into memory the `LoadBehavior` message is dispatched to it. This enables a script-only stack to set its own behavior which makes it possible to chain behaviors.

Note that script-only behavior stacks tied to specific objects in your user interface (UI) stacks do not go into this `behaviors` folder. They will go into `behaviors` folders within the UI stack folders in the `ui` folder, as documented [here](ui).

## Contents

* [Adding behaviors](#adding-behaviors)
* [The behaviors section in app.yml](#the-behaviors-section-in-appyml)

## Adding behaviors

To add a behavior to your application simply add the stack or script-only stack to the `behaviors` folder. The next time you [load your application](Loading-an-Application-in-the-LiveCode-IDE) in the LiveCode IDE all stacks in the `behaviors` folder will be loaded into memory and available globally for use as behaviors.

* :open_file_folder: app
  - :open_file_folder: behaviors
    - my_behavior.livecodescript

If you add a subfolder to the `behaviors` folder then all stacks and script-only stacks in the subfolder will also be loaded into memory when you open your application.

## The behaviors section in app.yml

The `behaviors` section in your `app.yml` file specifies which stacks will be loaded as behaviors. By default, `app.yml` is configured to load all stacks in the `behaviors` folder and its subfolders:

```
# app.yml

behaviors:
  - folder: ./behaviors
```

If you wish, you can customize the `behaviors` section to load stacks from other folders or to override the default encryption setting for some of your stacks.

### Examples

TODO: Give `app.yml` examples of:

* Loading a shared behaviors folder

* Loading an individual shared behavior stack

  ```
  behaviors:
    - filename: ../../shared/my_behavior.livecodescript
    - folder: ./behaviors
  ```
* Overriding encryption for a behaviors folder or subfolder

* Overriding encryption for an individual behavior stack

  ```
  behaviors:
    - filename: ./behaviors/my_unencrypted_behavior.livecodescript
      encrypt: false
    - folder: ./behaviors
  ```

```
# app.yml

behaviors:
  - filename: [relative path to stack file within behaviors folder]
    encrypt: true|false [optional parameter that can override the `encrypt stacks` setting for this stack]
  - folder: [relative path to a folder containing behavior stack files]
    encrypt: true|false [optional parameter that can override the `encrypt stacks` setting for all stacks in the folder]

```
