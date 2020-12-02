You can configure LiveCode Builder (LCB) library and widget extensions used by the application in `app.yml`. When configuring an extension you can point to both the filename and the source file for the extension. If you provide the source file then the framework can compile all of your extensions for you and place them in the specified location.

```
# app.yml

extensions:
  - filename: [relative path to .lcm extension file]
  - folder: [relative path to folder containing .lcm extensions]
```

In the following example the `filename` points to the actual extension module. The `source` points to the source file used to create the module. If you call `levureBuildExtensions` then the `animated_progress_dots.lcm` file will be recreated using the source file.

```
extensions:
  - filename: extensions/animated_progress_dots.lcm
    source: ../extensions_source/animated_progress_dots.lcb
```

If your extensions rely on any other modules then put the `.lci` files for the other modules in the same directory as the source file or in an `lci` subfolder.

If you have your extensions installed in your IDE user extensions folder and include those extensions when building your standalone then you don't have to worry about building the extensions with `levureBuildExtensions`. For someone who may be trying to run your application on a different computer without your same IDE setup this tool can build the modules and get them up and running right away.

## Targeting files in the LiveCode user extensions folder.

You can use the `[[USER_EXTENSIONS]]` variable in a any path to use the value returned by `revEnvironmentCustomizationPath()` in the IDE. This allows you to store commonly used resources in your LiveCode User Extension folder.

### Example:

```
helpers:
  - [[USER_EXTENSIONS]]/Helpers"
```
