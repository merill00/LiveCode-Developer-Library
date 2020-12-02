The `libraries` folder in [your app folder](Your-App-Folder) is where you store the library stacks for your application. Library stacks can be script-only stacks or binary stacks.

## Contents

* [Adding libraries](#adding-libraries)
* [The libraries section in app.yml](#the-libraries-section-in-appyml)

## Adding libraries

To add a library to your application simply add the stack or script-only stack to the `libraries` folder. The next time you [load your application](Loading-an-Application-in-the-LiveCode-IDE) in the LiveCode IDE all stacks in the `libraries` folder will be put in use with `start using` and all public handlers will be in the message path.

* :open_file_folder: app
  - :open_file_folder: libraries
    - my_common_handlers.livecodescript

If you add a subfolder to the `libraries` folder then all stacks and script-only stacks in the subfolder will also be loaded as libraries when you open your application.

## The libraries section in app.yml

The `libraries` section in your `app.yml` file specifies which stacks will be loaded as libraries. By default, `app.yml` is configured to load all stacks in the `libraries` folder and its subfolders as libraries:

```
# app.yml

libraries:
  - folder: ./libraries
```

If you wish, you can customize the `libraries` section to load library stacks from other folders or to override the default encryption setting for some of your libraries.

### Examples

TODO: Give `app.yml` examples of:

* Loading a shared libraries folder
* Loading an individual shared library stack

  ```
  libraries:
    - filename: ../../shared/mylibrary.livecodescript
    - folder: ./libraries
  ```
* Overriding encryption for a libraries folder or subfolder
* Overriding encryption for an individual library stack

```
# app.yml

libraries:
  - filename: [relative path to stack file within libraries folder]
    encrypt: true|false [optional parameter that can override the `encrypt stacks` setting for this stack]
  - folder: [relative path to a folder containing library stack files]
    encrypt: true|false [optional parameter that can override the `encrypt stacks` setting for all stacks in the folder]
```
