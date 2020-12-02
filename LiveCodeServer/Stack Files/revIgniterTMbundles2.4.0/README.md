
# LiveCode Server and revIgniter TextMate Bundles (v. 2.4.0)

These bundles will help reduce time spent in building revIgniter web apps/sites considerably.  
Even if you don't use revIgniter and build your web apps/sites from scratch, the bundles  
serve you too.   
The revIgniter bundles are compatible with Sublime Text 2 and Atom, though the bundles'  
commands and file drop actions are not available. There is an Atom package provided by  
Dr. Peter Brett, so there is no need to convert the bundles by yourself.  
You can even use the bundles on iOS in Textastic in case you like to code on an iPad. Of   
course, the specific commands and file drop actions don't work with Textastic either,   
furthermore there is no code completion in Textastic.    

**Note: This version works with TextMate 2 and is not meant to be used with previous  
versions of TextMate.**  


## Features:

* Script error checking ("linting"), key equivalent is ⌃⇧V
* Collapsing Text Blocks (Foldings)
* Handler Pop-up
* Code Completion
* Snippets with Tab Stops and Placeholders (revIgniter and LiveCode Server)
* TextMate Commands using the server engine as well as file drop actions for Images,  
	CSS files, JavaScript files, Favicon .lc files (libraries, helpers, plugins, models,  
	custom config files) and .livecode stacks as well (your PATH variable needs to include  
	the path to the LiveCode server directory)
* Indentation
* Paired Characters
* Templates (for controllers, models, functions, commands, views)


## revIgniterBundles content:

* LiveCode.tmbundle
* livecodeServer.tmbundle
* revIgniter\_2\_1\_.tmbundle
* TextasticTMbundles


## Requirements:

* LiveCode Server version ≥ 6.6.0
You can download LiveCode Server at [https://downloads.livecode.com/livecode](https://downloads.livecode.com/livecode).  
Install it somewhere appropriate.


## Installation:

* You can install the bundles by placing them in ~/Library/Application Support/TextMate/Bundles/.  
  The ~ character in this path refers to your home directory.  
* To use revIgniter specific TextMate **commands** and to enable **File Drop Actions** and **linting** add the  
	server directory to the PATH variable in TextMate settings like:  
  Variable Name:  
  PATH  
  Value:  
  $PATH:/opt/local/bin:/usr/local/bin:/usr/texbin:/Library/WebServer/CGI-Executables/LiveCodeServer/CommunityServer  
	Adjust the path to your needs.  
	
**Please use the community version of the server engine and don't modify it's name: livecode-community-server.**  
  
**Note:** The revIgniter assetHelper needs to be loaded in your controller if you use **File Drop** with images.  

As a start choose "LiveCode Server" from the language pop-up. See what happens if you type "cont" ( build a revIgniter controller)  
and hit tab consecutively.


### Update:

Replace the appropriate files in ~/Library/Application Support/TextMate/Bundles/  
with the files of the downloaded revIgniterTMbundles folder.  


### Installation in Textastic:

* Please read the [Textastic iPad Manual](https://www.textasticapp.com/v7/manual/customization/custom_syntax_themes_templates.html) regarding adding syntax definitions to Textastic.  

* Move all the files in folder TextasticTMbundles to the #Textastic folder.  

* After installation restart Textastic.  

* In "Settings" choose "LiveCode" or "LiveCodeDark" as editor theme.  

* In "File Properties" choose "iRev (*.lc, *.iRev. *.livecodescript)" as syntax definition for LiveCode server files. Choose "LiveCode (*.livecodescript)" for script only stacks.  

* Make sure your server script code begins with "&lt;?lc" or "&lt;?rev" or "&lt;?livecode".  


##Linting:
Use the key equivalent ⌃⇧V for script error checking. Keep in mind that the linter will only check for errors in the file  
currently being edited. Include and require commands respectively are ignored.  
Linting script only stacks requires switching to the "LiveCode" bundle.  

**Note:** The linter code adapted to TextMate was taken from the [LiveCode language package for Atom](https://github.com/peter-b/atom-language-livecode).  


---

## Version History

**Version 2.4.0**  
September 25, 2019  

Added: Dark themes "revIgniterDark" and "LiveCodeDark"  

**Version 2.3.0**  
July 01, 2019  

Changed: This version respects all revIgniter modifications since version 2.0.3 up to version 2.1.0.  

**Version 2.2.0**  
March 11, 2019  

Added: LiveCode bundle, this bundle includes the complete LiveCode grammar.  
Added: Custom bundles for Textastic.
Changed: ".lc" is the default file extension.  
Changed: This version respects all revIgniter modifications since version 1.10.0 up to version 2.0.3.

**Version 2.1.0**  
September 25, 2018  

Added tab triggers for all FTP handlers, just type "ftp" and choose a handler.  
Added Snippets: "Devider", "Case", "NOTE", "FIXME", "TEMP", "BUG", "HACK",  
"TODO", "CHANGED".  
This version respects all revIgniter modifications since version 1.9.2 up to version 1.10.0.  

**Version 2.0.0**  
August 10, 2017  

Added script error checking ("linting").  
Added new indentation rules.  
Added a command (use ⌃H) to show a help file including this text.  
Added a command (use ⌃⇧H) to open the revIgniter User Guide.  
Added new snippet "config" which helps to write a library configuration file.  
Added syntax highlighting for scripts beginning with '&lt;?lc' or '&lt;?livecode'.  
Added environment variables settings.  
  
Changed (simplified) tab triggers. Now it is much easier to use tab triggers as  
for revIgniter handlers you just need to know the name of the corresponding library,  
helper and plugin respectively. For example to trigger the code of an asset handler  
just type "asset" and choose the handler.
  
Additionally changed (simplified) the following tab triggers:  
ricont -> cont  
rictr -> ctrl  
rimodel -> model  
ricom -> com  
rifunc -> func  
comexcept -> except  
comconfig -> config  
comlog -> log  
comstatus -> status  
comshow404 -> show404  
comshowerror -> showerror  
rictrv -> ctrlv  
arrayhelper -> array  
arrayel -> array  
arrayrand -> array  
arraykeys -> array  
arrayvalues -> array  
arraysplice -> array  
arrayimplode -> array  
arrayels -> array  
arraymerge -> array  

Tweaked the language grammar and fixed minor issues.  
Adjusted installation path info to the requirements of TextMate v2.0-rc.1 or higher.  

**Version 1.4.5**  
October 09, 2016  

This version respects all revIgniter modifications since version 1.8 up to version 1.9.2.  
Fixed collapsing text blocks.  
Completed the (server related only) list of functions, commands, keywords etc.  
up to LiveCode version 8.1.  

**Version 1.4.4**  
June 28, 2016  

Added a new TextMate command "rictrv" used to write controller boilerplate code. This  
command automatically generates the corresponding view file. For this to work you need to  
add the server engine directory to the PATH variable as described above. If you like to use  
your own template for the automatic generation of view files you can do so by adding a folder  
named "template" to your "views" folder and include your default view file named "template.lc".  
File drop actions for CSS files and JavaScript files now work with files located in modules  
folders too.  
Added file drop actions for .lc files (libraries, helpers, plugins, models, custom config files)  
and .livecode stacks as well.  

**Version 1.4.3**  
February 12, 2016  

This version respects all revIgniter modifications since version 1.7.3 up to version 1.8.

**Version 1.4.2**   
October 28, 2015  

Fixed snippet functionality which got screwed up with the previous version.  
Fixed "default" indentation in "switch" control structures.  

**Version 1.4.1**   
October 26, 2015  

This bundle version respects revIgniter modifications since version 1.6.22 up to version 1.7.3.  
Added syntax highlighting for mixed (LiveCode/HTML) code.  

**Version 1.4.0**   
April 22, 2015  

Completed the (server related only) list of functions, commands, keywords etc.  
up to LiveCode version 7.0. Furthermore this version respects revIgniter modifications  
since version 1.6 up to version 1.6.21.  
There is no need anymore to install a Revolution standalone engine in System root  
to enable Drag and Drop.  

**Version 1.3.0**   
November 07, 2013  
This version works with TextMate 2.

**Version 1.2.2**  
March 04, 2013  

This bundle is compatible with all revIgniter versions up to version 1.6.

**Version 1.2.1**  
December 18, 2011  

This version respects revIgniter modifications since version 1.5b up to version 1.5.2b.

**Version 1.2**  
September 09, 2011  

This version respects all revIgniter modifications since version 1.3.24b up to version 1.5.1b and  
is recommended for developing web applications using server engine version 4.6.3 or higher.  

**Version 1.1.3 beta**  
July 04, 2011  

This version respects all revIgniter modifications since version 1.3.10b up to version 1.3.24b.  

**Version 1.1.2 beta**  
September 20, 2010  

This version respects all revIgniter modifications since version 1.3.2b up to version 1.3.10b.  

**Version 1.1.1 beta**  
May 25, 2010  

This version follows revIgniter's new naming convention where all handlers and functions are  
prefixed with "rig" or "_rig".  

**Version 1.1 beta**  
May 14, 2010  

Added support for new jQuery library and date helper methods.  

**Version 1.0.2 beta**  
April 05, 2010  

Fixed start markers and stop markers in the language file of the iRev bundle.  

**Version 1.0.1 beta**  
March 26, 2010  

Fixed indentation and text block collapsing for the "on" control structure.  

**Version 1.0.0 beta**  
March 11, 2010  

Initial release.  

---

The revIgniter Bundle, the LiveCode Server (iRev) Bundle as well as the revIgniter framework are currently  
developed and maintained by Ralf Bitter (dimensionB Bitter u. Bitter GmbH), https://revigniter.com/.  