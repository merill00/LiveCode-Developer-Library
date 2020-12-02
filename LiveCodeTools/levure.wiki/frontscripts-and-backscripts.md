The `frontscripts` and `backscripts` folders in [your app folder](Your-App-Folder) are where you store frontscript and backscript script-only stacks for your application.

* Scripts in `frontscripts` are loaded using `insert script of <stack> into front`.
* Scripts in `backscripts` are loaded using `insert script of <stack> into back`.

## Contents

* [Adding frontscripts and backscripts](#adding-frontscripts-and-backscripts)
* [The frontscripts and backscripts sections in app.yml](#the-frontscripts-and-backscripts-sections-in-appyml)

## Adding frontscripts and backscripts

To add a frontscript or backscript to your application simply add the script-only stack to the `frontscripts` or `backscripts` folder. The next time you [load your application](Loading-an-Application-in-the-LiveCode-IDE) in the LiveCode IDE all stacks in the `frontscripts` folder will be loaded using `insert script of <stack> into front` and all stacks in the `backscripts` folder will be loaded using `insert script of <stack> into back`.

* :open_file_folder: app
  - :open_file_folder: frontscripts
    - my_frontscript.livecodescript
  - :open_file_folder: backscripts
    - my_backscript.livecodescript

If you add a subfolder to the `frontscripts` or `backscripts` folder then all stacks in the subfolder will also be loaded as frontscripts or backscripts when you open your application.

## The frontscripts and backscripts sections in app.yml

The `frontscripts` and `backscripts` sections in your `app.yml` file specify which stacks will be loaded as frontscripts and backscripts. By default, `app.yml` is configured to load all stacks in the `frontscripts` and `backscripts` folders and their subfolders:

```
# app.yml

frontscripts:
  - folder: ./frontscripts
backscripts:
  - folder: ./backscripts
```

If you wish, you can customize the `frontscripts` and `backscripts` sections to load stacks from other folders or to override the default encryption setting for some of your stacks.

### Examples

TODO: Give `app.yml` examples of:

* Loading a shared frontscripts folder

* Loading an individual shared frontscript stack

  ```
  frontscripts:
    - filename: ../../shared/my_frontscript.livecodescript
    - folder: ./frontscripts
  ```
* Overriding encryption for a frontscripts folder or subfolder

* Overriding encryption for an individual frontscript stack

  ```
  behaviors:
    - filename: ./frontscripts/my_unencrypted_frontscript.livecodescript
      encrypt: false
    - folder: ./frontscripts
  ```

```
# app.yml

frontscripts:
  - filename: [relative path to stack file within frontscripts folder]
    encrypt: true|false [optional parameter that can override the `encrypt stacks` setting for this stack]
  - folder: [relative path to a folder containing frontscript stack files]
    encrypt: true|false [optional parameter that can override the `encrypt stacks` setting for all stacks in the folder]
backscripts:
  - filename: [relative path to stack file within backscript folder]
    encrypt: true|false [optional parameter that can override the `encrypt stacks` setting for this stack]
  - folder: [relative path to a folder containing backscript stack files]
    encrypt: true|false [optional parameter that can override the `encrypt stacks` setting for all stacks in the folder]
```
