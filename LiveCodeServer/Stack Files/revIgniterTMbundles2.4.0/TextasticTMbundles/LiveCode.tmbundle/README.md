
# LiveCode TextMate Bundle (v. 1.0.0)

This bundle is meant to be used for editing LiveCode script only stacks. It sends an update  
notification over a datagram connection to LiveCode each time you save a livecodescript file  
in TextMate using the appropriate key equivalent (⌃⌘S). Use a stack in LiveCode accepting  
datagram connections to be notified about script updates.  

## Features

* Script error checking ("linting"), key equivalent is ⌃⇧V
* Update notification
* Collapsing Text Blocks (Foldings)
* Handler Pop-up
* Code Completion
* Snippets with Tab Stops and Placeholders
* TextMate Commands using the server engine (your PATH variable needs to include  
	the path to the LiveCode server directory)
* Indentation
* Paired Characters


## Requirements

* LiveCode Server version ≥ 6.6.0
You can download LiveCode Server at [https://downloads.livecode.com/livecode](https://downloads.livecode.com/livecode).  
Install it somewhere appropriate.


## Installation

* Download the zip from GitHub, unzip it
* Change the file name from "LiveCode.tmbundle-master" to "LiveCode.tmbundle"
* You can install the bundle by placing it in ~/Library/Application Support/TextMate/Bundles/.  
  The ~ character in this path refers to your home directory.  
* To use LiveCode specific TextMate **commands** and to enable **linting** add the  
	server directory to the PATH variable in TextMate settings like:  
  Variable Name:  
  PATH  
  Value:  
  $PATH:/opt/local/bin:/usr/local/bin:/usr/texbin:/Library/WebServer/CGI-Executables/LiveCodeServer/CommunityServer  
	Adjust the path to your needs.  
Add a variable "TM_livecode_explicit_vars" to TextMate settings and set it to "true" or "false".
	
**Please use the community version of the server engine and don't modify it's name: livecode-community-server.**  
 
As a start choose "LiveCode" from View > Theme and "LiveCode Server" from the language pop-up.  
See what happens if you type "com+" ( write a LiveCode handler) and hit tab consecutively.  

**Note:** If you use the [Levure Application Framework](https://github.com/trevordevore/levure), for update notifications to work you need  
to replace the Levure script "external_editor_server.livecodescript" in levure/utils/external_editor_server/  
of your  Levure project with the one included in the bundle.


### Update

Replace the appropriate file in ~/Library/Application Support/TextMate/Bundles/  
with the downloaded LiceCode.tmbundle file.  
  
  
## Linting
Use the key equivalent ⌃⇧V for script error checking.  
  
**Note:** The linter code adapted to TextMate was taken from the [LiveCode language package for Atom](https://github.com/peter-b/atom-language-livecode).  

### License
For the license terms see the `LICENSE.txt` file.  