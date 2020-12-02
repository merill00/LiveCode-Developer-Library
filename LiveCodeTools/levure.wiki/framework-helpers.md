The framework includes a number of helpers in the `levure/framework/helpers` folder that you can use in your application.  You should not modify the framework helpers. They will be updated to the latest versions whenever you [update Levure](Updating-Levure) in your project folder.

* :open_file_folder: your_application_project_folder
  - :file_folder: app
  - :file_folder: builds
  - :open_file_folder: levure
    - :open_file_folder: framework
      - levure.livecodescript
      - :open_file_folder: helpers
        - :file_folder: [broadcaster](helper-broadcaster)
        - :file_folder: [file_system](helper-file_system)
        - :file_folder: [font_loader](helper-font_loader)
        - :file_folder: [logger](helper-logger)
        - :file_folder: [preferences](helper-preferences)
        - :file_folder: [undo_manager](helper-undo_manager)
        - :file_folder: [window_manager](helper-window_manager)

## How to load a framework helper

To load a framework helper use the [[FRAMEWORK]] variable in `app.yml`.

For example, this entry in `app.yml` will load the `preferences` framework helper:

```
helpers:
  - filename: "[[FRAMEWORK]]/helpers/preferences"
```

Any helper included with the framework automatically has its `preload` flag set to true. That means the helper will be loaded before the `PreloadApplication` message is sent to the `app` stack.