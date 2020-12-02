Levure is an application development framework for LiveCode. It helps you organize, develop, and package your application for distribution. It is suitable for intermediate to advanced developers who want to develop cross-platform LiveCode applications.

Why should you build your application on top of Levure? Let's take a look.

### Levure provides a solid foundation for your application

- The framework provides the underlying infrastructure you need to create professional-grade applications on Mac, Windows, iOS, and Android platforms. It allows you to focus on making your application unique and valuable instead of spending time working on features common to many applications. Using the framework saves you time and makes you more productive.
- Includes helpers for adding preferences, managing application windows across sessions, logging, managing recently opened files, opening files and URLs, loading fonts, adding undo/redo, and message broadcasting within the application.

### Levure organizes your application into discrete parts using the file system

- Each library, user interface stack, front script, and back script is an individual file in the file system. Levure gathers everything up when you open your application in the LiveCode IDE.
- You can browse the contents of your application using your favorite file browser.
- You can add stacks and assets to your application by adding them to your application folder.

### Levure uses text-based YAML files for configuration

- The application configuration file is written in YAML (.yml). YAML files which are human readable and don't require you to open up the LiveCode IDE to peruse and edit them. Your file will look something [like this](https://github.com/trevordevore/levure/blob/master/utils/create_levure_app_files/app.yml).
- Define all files that will be packaged with your application for distribution using YAML. Easy to write. Easy to read.

### Levure is efficient when it comes to loading your user interface stacks

- User interface stacks are loaded on an as-needed basis.
- All user interface stacks can be referenced by name, no need to specify the file path.
- Set the destroyStack of your user interface stacks to `true` and they will be removed from memory when closed.

### Levure works with version control systems

- Configuration files are text based.
- Encourages you to use script only stacks for all application logic.
- The only place that traditional LiveCode binary stack files (which are unreadable by version control) need to be used is for the visual user interface. Each user interface stack is stored individually. Once the UI is designed in a binary stack using the LiveCode development environment, the scripts for the stack and its objects are attached as behaviors.
- Create a detailed history of changes made to your application using your favorite version control software. Every change to your code can be recorded and rolled back if necessary.
- Never accidentally save changes made to your code while debugging. Every change is seen by your version control software.
- Work on multiple features at the same time in isolated work areas using your version control software. Only bring the changes into your application when they are complete.
- Have multiple developers work on your project.

### Levure is extensible via Helpers

- A helper is a folder with a configuration file, stacks, externals, modules, and assets.
- A helper adds a specific feature to your application. Just drop the helper folder into your application folder and the new feature is available.
- A helper can make libraries, front scripts, back scripts, externals, modules, or user interface stacks available to your application. Anything that is needed in order to implement the feature can be a part of the helper folder.

## Try it out

Ready to try Levure out? Head over to the [Getting Started](Getting-Started) page.
