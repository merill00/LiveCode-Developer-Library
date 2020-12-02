Externals are often part of the LiveCode IDE and added to your standalones using the standalone builder settings. If your application uses custom externals that you would like to handle independently of the IDE then you can load them by creating a **helper**.

1. In the `app/helpers` folder create a folder named `externals`.
2. Place all of the externals required by your application in the `externals` folder.
3. Create a `helper.yml` file in the `externals` folder.
4. Configure the `helper.yml` file to load the externals.

Your folder structure should look something like this:

* :open_file_folder: app
  * :open_file_folder: helpers
    - :open_file_folder: externals
      - helper.yml
      - my_external.bundle
      - my_external.dll
      - my_external.so

The `helper.yml` file should look something like the example below. Note that the `name` property is the value from the external that appears in the `externalPackages` property when the external is loaded.

```
externals:
  macos:
    - filename: my_external.bundle
      name: my_external
  windows:
    - filename: my_external.dll
      name: my_external
  linux:
    - filename: my_external.so
      name: my_external
```

[Learn more](helpers) about `helpers` components
