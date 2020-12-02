The `levure/framework` folder contains the `levure.livecodescript` script-only stack which provides the primary framework functionality. The folder also contains a `helpers` folder which adds additional framework functionality.

* :open_file_folder: your_project_folder
  - :file_folder: app
  - :file_folder: builds
  - :open_file_folder: levure
    - :open_file_folder: framework
      - [levure.livecodescript](levure.livecodescript)
      - :file_folder: [helpers](framework-helpers)
    - :file_folder: packager
    - :file_folder: utils

You should not modify any code in the `levure/framework` folder. Its contents will be updated to the latest version whenever you update Levure in your project folder.

* [Learn about levure.livecodescript](levure.livecodescript)
* [Learn about framework helpers](framework-helpers)
* [Learn about updating Levure](Updating-Levure)
