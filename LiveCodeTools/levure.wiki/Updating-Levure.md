Levure is an ongoing project so it is important to keep the copy used in your application project updated for bug fixes and improvements.

The Levure framework and utilities are entirely contained in the `levure` folder in your application project folder. The `levure` folder is a copy of the [Levure master on Github](https://github.com/trevordevore/levure). It is a good idea to keep your `levure` folder current with the latest version of the Levure master.

   * :open_file_folder: your_application_project_folder
     - :file_folder: app
     - :file_folder: builds
     - :file_folder: levure

How you update your `levure` folder depends on whether or not you are using Git.

## How to update Levure without Git

If you are updating without Git, the easiest way is to download a copy of the latest Levure master from Github and replace the entire `levure` folder in your application project folder.

1. Go to the Github project: [https://github.com/trevordevore/levure](https://github.com/trevordevore/levure).

2. Click the  _Clone or download_ button.

3. Click _Download ZIP_. The `levure-master.zip` file will be downloaded onto your computer.

4. Unzip `levure-master.zip` to get the `levure-master` folder.

5. Move the `levure-master` folder into your project folder.

6. Delete the old `levure` folder from your project folder.

7. Rename the `levure-master` folder to `levure`.

## How to update Levure with Git

If you are using Git, you can easily update your `levure` folder as a submodule. If you originally created your application project using the [Levure project creator](Creating-an-Application) with the _Use Git_ option checked, then your `levure` folder is already a submodule.

To update your `levure` folder to the latest Github master, open the Terminal application on your computer and change directories into the root of your project folder.

```
cd <the root of your application project folder>
```

Then update the `levure` submodule:

```
git submodule update --remote levure
```

Now the `levure` folder in your application project is synchronized with the Levure master on Github.
