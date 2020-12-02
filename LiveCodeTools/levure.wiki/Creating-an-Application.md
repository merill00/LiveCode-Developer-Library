You create a new application by using the Levure project creator, with or without Git.

1. Create a new folder for your application project.

2. In the LiveCode development environment, enter this command in the Message Box:

   ```
   go stack url "https://raw.githubusercontent.com/trevordevore/levure/master/utils/create-levure-application.livecode"
   ```

   The application project creator stack will download and open in LiveCode.

3. In the project creator stack, if you are managing your application project with Git then check the _Use Git_ box. If you are not using Git then leave _Use Git_ unchecked.

4. Click the _Create Levure Application_ button and select the folder you created in step 1.

Three folders will be created in your application project folder: `app`, `builds`, and ` levure`. Your project folder now looks like this:

* :open_file_folder: your_application_project_folder
  - :file_folder: app
  - :file_folder: builds
  - :file_folder: levure

### Screencast

[Watch a screencast](https://www.youtube.com/watch?v=MFm5LWDKZ_g) showing how to create an application.

### Your app folder

Your `app` folder is where you develop your application. The project creator provides you with an application skeleton to use as a starting point.

* [Learn about your app folder](Your-App-Folder)

### The builds folder

The `builds` folder is where Levure puts your application distribution builds.

* [Learn about your builds folder](Builds-Folder)

### The levure folder

The `levure` folder holds the Levure framework and framework helpers.

* [Learn about the levure folder](Levure-Folder)
* [Learn how to update the levure folder](Updating-Levure)

## If you checked the Use Git checkbox

If you checked the _Use Git_ checkbox then the project creator automatically performed some additional actions:

1. A new Git repository was created in your application project folder.

2. The `levure` folder was added as a Git submodule for easy updating.

3. A `.gitignore` file was added to the application project folder.

<br>

__NEXT:__ [Loading an Application in the LiveCode IDE](Loading-an-Application-in-the-LiveCode-IDE)