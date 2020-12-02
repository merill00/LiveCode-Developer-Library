script "lib_GitDisplay"
--> MetaData
-
license: GPLv3
name: lib_GitDisplay
type: library
version: 0.2

/*
A library for working with GIT.
It has not been tested on unix (should work fine), or Windows machines (beware of line ending issues).
*/


--> Working on
-
getprop git_StatusMenuTitle
   -- utility for customising git array display
   -- not needed to be in a library
   -- but useful to study how to make flexible menus
   
   put "Global | GIT |" into mTitle
   put the hilited_Element of the target into commaPath
   put the selected_Value of the target into sValue
   if sValue is no an array then
      -- delete item -1 of commaPath
      put "File" into item -1 of commaPath
   end if
   repeat for each item someItem in commaPath
      put toupper (char 1 of someItem) into char 1 of someItem
      if char -1 of someItem = ":" then delete char -1 of someItem
      put space & someItem && "|" after mTitle
   end repeat
   put space & "Menu" after mTitle
   
   switch
      case menu_Exists (mTitle)
         return mTitle
      default
         put mTitle
         put the line_Menu of the target into mTitle
         return mTitle
   end switch
end git_StatusMenuTitle


--> Git | Display | Status | Events
-
on mDoubleUp_DisplayGitFile arrayView, shortFileOrFolder
   put the displayed_GitCheckoutFolder of arrayView into gitCheckoutFolder
   text_AddTrailing gitCheckoutFolder, slash
   put gitCheckoutFolder & shortFileOrFolder into fileOrFolder
   
   switch
      case there is a stack fileOrFolder
         if the scriptonly of stack fileOrFolder is true then
            edit the script of stack fileOrFolder
         else
            go to stack fileOrFolder
         end if
         break
      case there is a folder fileOrFolder
         finder_Reveal fileOrFolder
         break
      case there is a file fileOrFolder
         atom_DisplayFile fileOrFolder 
         break
   end switch
end mDoubleUp_DisplayGitFile


--> Git | Display | Refresh
-
command refresh_GitStatus projectName
   put display_FindView ("Git Status", projectName) into gitDisplayView
   if exists (gitDisplayView) then
      -- refresh git display
      put the git_CheckoutFolder of stack projectName into gitCheckoutFolder
      if there is not a folder gitCheckoutFolder then
         breakpoint
      end if
      put git_GetStatusArray (gitCheckoutFolder) into statusArray
      set the displayed_Array of gitDisplayView to statusArray
   end if
end refresh_GitStatus

command git_RefreshDisplay pTreeTitle
   -- this is now handled locally in each display
   -- look at this to dig out older code for files and log.
   breakpoint
   
   put the git_TreeField of me into gitTreeField
   if pTreeTitle is empty then put the title_Text of gitTreeField into pTreeTitle
   
   switch pTreeTitle
      case "Files in Repository"
         set the cursor to watch
         put git_ExecuteShellCommand ("git ls-files") into commitedFiles
         put file_IndexToOutline (commitedFiles, "outline") into someOutline
         set the tree_Display [pTreeTitle] of gitTreeField to someOutline
         break
      case "Log"
         put "git log --pretty=oneline" into someShell
         -- put space & "-n30" after someShell
         put git_ExecuteShellCommand(someShell) into simpleLog
         put git_LogLinkOutline(simpleLog) into someOutline
         set the tree_Display ["Log"] of gitTreeField to someOutline
         break
      default
         put git_FetchStatusTable() into gitStatusTable
         put git_ConstructStatusArray (gitStatusTable) into statusArray
         
         put statusArray ["gitStatusTable"] into gitStatusTable
         put statusArray ["gitTitle"] into gitTitle
         
         set the tree_Display [gitTitle] of gitTreeField to gitStatusTable
   end switch
   return someOutline
end git_RefreshDisplay


--> Git | Display | Stack
-
command git_DisplayTempStackRevision someObject, commitHash
   put the stack_Object of someObject into stackObject
   put the effective filename of stackObject into thisFile
   
   put the short name of stack thisFile into oName
   
   if exists (stack thisFile) is false then
      answer warning "Stack does not exist!"
      breakpoint
      exit to top
   end if
   
   set lockmessages to true
   git_ExportFileRevision thisFile, commitHash
   put the result into toFile
   
   if exists (stack toFile) is false then
      answer warning "Revision Stack does not exist!"
      breakpoint
      
      put toFile into toFolder
      set the itemdelimiter to slash
      put empty into item -1 of toFolder
      finder_Reveal toFolder
      
      atom_DisplayFile toFile
      exit to top
   end if
   
   put "tempStackName" && oName into tempStackName
   put oName && commitHash into exportedRevisionName
   
   try
      set lockmessages to true
      set the name of stack thisFile to tempStackName -- not totally sure this is needed
      set the name of stack toFile to exportedRevisionName
      set the name of stack thisFile to oName -- not totally sure this is needed (maybe just keep it as it was). But tricky to debug.
      set lockmessages to false
      
      set the destroystack of stack toFile to true
      set the destroywindow of stack toFile to true     
   catch e
      set the name of stack thisFile to oName
      
      answer warning merge ("Problem opening versioned [[stackObject]]!")
      breakpoint
      put there is a file toFile into fileExists
      get url ("binfile:" & toFile)
      atom_DisplayFile toFile
      exit to top
   end try
   
   set the label of stack toFile to exportedRevisionName
   put the name of stack toFile into newStackObject
   go to stack toFile
end git_DisplayTempStackRevision

command git_DisplayTempStackFromTreeish commitHash, pToFile
   breakpoint
   git_ExportFileRevision relativePath, commitHash
   put the result into toFile
   
   set lockmessages to true
   put the name of stack toFile into oName
   set the name of stack toFile to (oName && treeish)
   go to stack toFile
   set lockmessages to false
   
   set the destroystack of stack toFile to true
   set the destroywindow of stack toFile to true
end git_DisplayTempStackFromTreeish


--> Display | GIT | Status
-
command display_GitStatus pScriptObject
   if pScriptObject is empty then put the long id of the target into pScriptObject
   put the git_CheckoutFolder of pScriptObject into gitCheckoutFolder
   
   display_GitFolderStatus gitCheckoutFolder
   put the result into arrayView
   return arrayView
end display_GitStatus

command display_GitProjectStatus projectName
   put project_GetFolder (projectName) into projectFolder
   if there is not a folder projectFolder then
      if projectFolder is not empty then put projectFolder
      answer warning merge ("Cannot locate a folder for project '[[projectName]]'!")
      breakpoint
      exit to top
   end if
   
   display_GitFolderStatus projectFolder
   put the result into displayView
   return displayView
end display_GitProjectStatus

command display_GitFolderStatus gitCheckoutFolder
   if there is not a folder gitCheckoutFolder then return empty
   put git_FetchStatusTable (gitCheckoutFolder) into gitStatusTable
   -- see "git_GetStatusArray (gitCheckoutFolder)"
   --
   display_GitStatusTable gitStatusTable, gitCheckoutFolder
   put the result into arrayView
   return arrayView
end display_GitFolderStatus

command display_GitStatusTable gitStatusTable, fileOrFolder
   -- can be called from anywhere inside a git repo
   put git_GetCheckoutFolder (fileOrFolder) into gitCheckoutFolder
   
   set the itemdelimiter to ":"
   if item 1 of gitStatusTable = "fatal" then
      -- fatal: Not a git repository (or any of the parent directories): .git
      answer warning gitStatusTable
      return empty
   end if
   
   -- let's find an existing displayView if it exists
   set the itemdelimiter to slash
   put item -1 of gitCheckoutFolder into gitShortFolder
   put display_FindView ("Git Status", gitShortFolder) into displayView
   set the itemdelimiter to comma
   
   -- see "git_GetStatusArray (gitCheckoutFolder)"
   put git_ConstructStatusArray (gitStatusTable) into statusArray
   array_StripEmptyKeys statusArray
   
   if exists (displayView) then
      set the displayed_Array of displayView to statusArray
   else
      put gitShortFolder && ",GIT Status" into someTitle
      
      put "mDoubleUp_DisplayGitFile" into mDoubleUpCommand
      
      display_Array statusArray, someTitle, "Global | GIT | Status | Menu", "Global | GIT | Line | File | Menu", empty, mDoubleUpCommand
      put the result into displayView   
      set the displayed_ScriptObject of displayView to scriptObject
      set the displayed_GitCheckoutFolder of displayView to gitCheckoutFolder
      
      put the script of displayView into oScript
      put git_ConstructDisplayStatusScript() into someScript
      put oScript & CR & CR & someScript into newScript
      set the script of displayView to newScript
   end if
   return displayView
end display_GitStatusTable

function git_ConstructDisplayStatusScript
   put "getprop menu_Title" into someScript
   put CR & "    if the kind of the target = 'com.livecode.widget.treeView' then return the git_StatusMenuTitle of the target" after someScript
   put CR & "    pass menu_Title" after someScript
   put CR & "end menu_Title" after someScript
   
   -- for some reason  = 'com.livecode.widget.treeView'  does nto work
   replace "'" with quote in someScript
   return someScript
end git_ConstructDisplayStatusScript

command git_DisplayStatusLines gitCheckoutFolder
   put git_FetchStatusTable (gitCheckoutFolder) into gitStatusTable
   set the itemdelimiter to slash
   put item -1 of gitCheckoutFolder into gitShortFolder
   put gitShortFolder & comma & "GIT Status" into someTitle
   display_Index gitStatusTable, someTitle, "Global | GIT | Status | Menu"
   return the result
end git_DisplayStatusLines


--> Display | GIT | Stack
-
command display_StackHistory someObject
   local logLinkArray
   
   put the stack_Object of someObject into stackObject
   put the filename of stackObject into stackPath
   put the git_CheckoutFolder of someObject into gitCheckoutFolder
   
   put git_GetFileLog (stackPath) into simpleLog
   git_ProcessSimpleLogLines simpleLog, logArray, orderedCommentLines
   
   put "Stack Log for:" && the name of stackObject into someTitle
   put comma & "GIT" after someTitle
   put empty into pExpandLevel
   
   -- display_Array logArray, someTitle, "Global | Git | Stack | History | Menu", "Global | Git | Line | Stack | Log | Menu"
   display_Index orderedCommentLines, someTitle, "Global | Git | Stack | History | Menu", "Global | Git | Line | Stack | Log | Menu"
   put the result into indexView
   
   set the log_Array of indexView to logArray
   set the displayed_Object of indexView to stackObject
   set the displayed_File of indexView to stackPath
   set the displayed_GitCheckoutFolder of indexView to gitCheckoutFolder
   
   return treeView
end display_StackHistory

function git_ConstructStatusArray gitStatusTable , pNoComments
   -- put line -1 of gitStatusTable into gitHint
   -- delete line -1 of gitStatusTable
   
   filter gitStatusTable without "#   *"
   filter gitStatusTable without "#"
   replace ("#" & tab & "modified:   ") with tab in gitStatusTable
   replace ("# ") with empty in gitStatusTable
   replace (CR & "#" & tab) with (CR & tab) in gitStatusTable
   
   put 1 into indexNum
   put empty into firstTitle
   put "Branch" into someHeader
   repeat for each line someLine in gitStatusTable
      put someHeader into gitArray [indexNum]["title"]
      put empty into gitArray [indexNum]["contents"][subTitle]
      put true into gitArray [indexNum]["isExpanded"]
      put empty into gitArray [indexNum]["contents"][gitHint]
      
      switch
         case char -1 of someLine = ":"
            -- a title
            put someLine into someHeader
            put empty into displayArray [someHeader]
            break
         case char 1 of someLine = tab
            -- a list of files
            delete char 1 of someLine
            set the itemdelimiter to ":"
            if the number of items of someLine = 2 then
               put item 1 of someLine into someAction
               put word 1 to -1 of item 2 of someLine into someFile
               put empty into displayArray [someHeader][someAction][someFile]
            else
               put empty into displayArray [someHeader]["files"][someLine]
            end if
            
            put empty into gitArray [indexNum]["contents"][someLine]
            break
         default
            -- a helpful comment line
            put word 1 to -1 of someLine into someComment
            if someComment is empty then next repeat
            
            put someComment into gitArray [indexNum]["title"]
            
            if pNoComments is false or someHeader is "Branch" then
               put empty into displayArray [someHeader][someComment]
            end if
      end switch
      
      add 1 to indexNum
   end repeat
   return displayArray
end git_ConstructStatusArray


--> GIT | Log | Array
-
-- function git_FileCommitHashArray someFile, pHowMany, pAllBranches
-- not used
put git_GetFileLog (someFile, pHowMany, pAllBranches) into simpleLog
put git_LogLinkArray (simpleLog) into commitHashArray
return commitHashArray
end git_FileCommitHashArray

function git_LogLinkArray simpleLog
   local logLinkArray
   git_ProcessSimpleLogLines simpleLog, logLinkArray, orderedCommentLines
   return logLinkArray
end git_LogLinkArray

command git_ProcessSimpleLogLines simpleLog, @logLinkArray, @orderedCommentLines
   put 0 into lineNum
   repeat for each line someLine in simpleLog
      add 1 to lineNum
      put word 1 of someLine into commitHash
      put word 2 to -1 of someLine into firstCommentLine
      put firstCommentLine & CR after orderedCommentLines
      put commitHash into logLinkArray [lineNum]["commitHash"]
      put firstCommentLine into logLinkArray [lineNum]["firstCommentLine"]
   end repeat
   delete char -1 of orderedCommentLines
end git_ProcessSimpleLogLines


--> GIT | Log | Outline
-
/*
Old way of doing it. Probably better to use arrays.
*/

function git_FileLogOutline someFile, pHowMany, pAllBranches
   put git_GetFileLog (someFile, pHowMany, pAllBranches) into simpleLog
   put git_LogLinkOutline (simpleLog) into someOutline
   return someOutline
end git_FileLogOutline

function git_LogLinkOutline simpleLog
   repeat for each line someLine in simpleLog
      put word 1 of someLine into someHash
      put word 2 to -1 of someLine into firstCommentLine
      put html_ConstructNameLink (firstCommentLine, someHash) & CR after someOutline
   end repeat
   delete char -1 of someOutline
   return someOutline
end git_LogLinkOutline


--> Objects
-
private function _GitTreeView
   put the module_View of stack "View|Tree|GIT" into gitTreeView
   return gitTreeView
end _GitTreeView

getprop git_Tree
   return _GitTreeView()
end git_Tree

getprop git_TreeField
   put _GitTreeView() into gitTreeView
   return the tree_Field of gitTreeView
end git_TreeField


--> Display
-
command display_GitHkeyLog hKey, pDoubleUpThing, pStackLabel
   put hkey_HandlerFile (hKey) into handlerFile
   
   hkey_Deconstruct hKey, hName, hType, hObject, hNum
   put "History for" && kwote(handler_ConvertType (hType) && hName) into someTitle
   
   put handlerFile into gitRelativeFile
   git_SetRelativePath gitRelativeFile
   
   -- temp set gitRoot
   put git_GetRootFolder() into oRoot
   put git_GetCheckoutFolder (handlerFile) into tempRootFolder
   git_SetRootFolder tempRootFolder
   
   if pStackLabel is empty then put "Hkey Log" into pStackLabel
   put hKey into someTitle
   display_GitFileHistory gitRelativeFile, someTitle, pDoubleUpThing, pStackLabel
   
   put the result into treeView
   put the tree_Field of treeView into treeField
   
   lock messages
   set the displayed_Hkey of treeField to hKey
   set the displayed_Object of treeField to hObject
   set the displayed_File of treeField to handlerFile
   unlock messages
   
   -- reset git root
   git_SetRootFolder oRoot
   return treeView
end display_GitHkeyLog

command display_GitScriptLog someObject, pDoubleUpThing, pStackLabel
   put the script_File of someObject into someFile
   
   -- temp set gitRoot
   -- should maybe do this built in with all git file related handlers?
   put git_GetRootFolder() into oRoot
   put git_GetCheckoutFolder (someFile) into tempRootFolder
   git_SetRootFolder tempRootFolder
   
   if pStackLabel is empty then put "Script Log" into pStackLabel
   put the mobile_Name of someObject into someTitle
   
   git_SetRelativePath someFile
   display_GitFileHistory someFile, someTitle, pDoubleUpThing, pStackLabel
   put the result into treeView
   
   put the tree_Field of treeView into treeField
   set the displayed_Object of treeField to someObject
   
   -- reset git root
   git_SetRootFolder oRoot
   return tempRootFolder
end display_GitScriptLog

command display_GitFileHistory someFile, pTitle, pDoubleUpThing, pStackLabel
   put git_FileLogOutline (someFile) into someOutline
   display_LogOutline someOutline, someFile, pTitle, pDoubleUpThing, pStackLabel
   return the result
end display_GitFileHistory

command display_LogOutline someOutline, someFile, pTitle, pDoubleUpThing, pStackLabel
   put empty into pExpandLevel
   put false into pKeepHidden
   put "palette" into pStackStyle
   display_Outline someOutline, pTitle, "Global | Git | Log | Menu", "Global | Git | Line | Log | Menu", pExpandLevel, pKeepHidden, pStackStyle, pStackLabel
   
   put the result into treeView
   put the tree_Field of treeView into treeField
   
   set the displayed_File of treeField to someFile
   if exists (pDoubleUpThing) then 
      set the trigger_Object ["tree_MouseDoubleUp"] of treeField to pDoubleUpThing
   else if pDoubleUpThing is not empty then
      -- assume it is a trigger_Name
      set the trigger_Name ["mouseDoubleUp"] of treeField to pDoubleUpThing
   end if 
   return treeView
end display_LogOutline
