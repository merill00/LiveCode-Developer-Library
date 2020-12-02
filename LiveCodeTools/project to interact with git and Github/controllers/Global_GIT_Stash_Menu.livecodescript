script "Global_GIT_Stash_Menu"
--> MetaData
-
license: GPLv3
name: Global_GIT_Stash_Menu
type: controller
version: 0.2

/*
This menu provides and interface to git's stash functionailty.
It is designed to work with display views. Would be an interesting experiment to generalise that.

Use git stash when you want to record the current state of the working directory and the index, but want to go back to a clean working directory. 
The command saves your local modifications away and reverts the working directory to match the HEAD commit.

The modifications stashed away by this command can be:

*  listed with git stash list
*  inspected with git stash show, and 
*  restored (potentially on top of a different commit) with git stash apply. 

Calling git stash without any arguments is equivalent to git stash save. 
A stash is by default listed as "WIP on branchname …", but you can give a more descriptive message on the command line when you create one.

git stash list [<options>] 
git stash show [<stash>] 
git stash drop [-q|--quiet] [<stash>] 
git stash ( pop | apply ) [--index] [-q|--quiet] [<stash>] 
git stash branch <branchname> [<stash>] 
git stash [save [--patch] [-k|--[no-]keep-index] [-q|--quiet] [<message>]] 
git stash clear 
git stash create
*/


--> Menu | Props
-
local LocalArray

on menu_Init tObject
   put git_ListStashes() into LocalArray ["stashNames"]
   
   put the display_View of tObject into displayView
   put displayView into LocalArray ["displayView"]
   put the displayed_ScriptObject of displayView into LocalArray ["scriptObject"]
   put the displayed_GitCheckoutFolder of displayView into LocalArray ["gitCheckoutFolder"]
end menu_Init


--> Private
-
private command _doGit someShell, pDontRefresh
   put LocalArray ["gitCheckoutFolder"] into gitCheckoutFolder
   git_ExecuteShell someShell, gitCheckoutFolder
   put the result into shellResult
   if pDontRefresh is not true then
      refresh
   end if
   return shellResult
end _doGit

private command refresh
   put LocalArray ["displayView"] into displayView
   put LocalArray ["gitCheckoutFolder"] into gitCheckoutFolder
   display_GitFolderStatus gitCheckoutFolder, displayView
end refresh


--> Global | GIT | Stash | Menu
-
on menu_Stash
   _doGit "git stash"
end menu_Stash

on menu_PopStash arrayView
   _doGit "git stash pop", true
   put the result into poppedGitStatus
   
   put LocalArray ["gitCheckoutFolder"] into gitCheckoutFolder
   display_GitStatusTable poppedGitStatus, gitCheckoutFolder, arrayView
end menu_PopStash

on _
end _

on menu_ListStashContents displayView, stashName
   /*
   show [<stash>]
   
   Show the changes recorded in the stash as a diff between the stashed state and its original parent. 
   When no <stash> is given, shows the latest one. By default, the command shows the diffstat, 
   but it will accept any format known to git diff (e.g., git stash show -p stash@{1} to view the second most recent stash in patch form).
   */
   
   put "git stash show" into someShell
   -- put space & "-p " after someShell
   put space & "--numstat " after someShell
   put space & stashName after someShell
   
   _doGit someShell, true
   
   put git_ParseShowStash (the result) into someOutline
   display_Index someOutline, stashName, "Global | GIT | Stash | Menu", "Global | GIT | Stash | Line | Menu"
   -- display_Outline someOutline, stashName, "Global | GIT | Stash | Menu", "Global | GIT | Stash | Line | Menu", 2
end menu_ListStashContents

on menu_DropStash displayView, stashName
   /*
   drop [-q|--quiet] [<stash>]
   
   Remove a single stashed state from the stash list. 
   When no <stash> is given, it removes the latest one. i.e. stash@{0}, otherwise <stash> must a valid stash log reference of the form stash@{<revision>}.
   */
   
   breakpoint
   put "git stash drop" && stashName into someShell
   _doGit someShell
   
   put the result into gitResult
   display_Lines gitResult
end menu_DropStash

on menu_ClearStash
   breakpoint
   _doGit "git stash clear"
end menu_ClearStash

on _
end _

on menu_StashDocs
   launch url "http://www.kernel.org/pub/software/scm/git/docs/git-stash.html"
end menu_StashDocs

on submenu_Dev
   return "Dev | Menu"
end submenu_Dev


--> Global | GIT | Stash | Menu | Props
-
getprop stash_Names
   return LocalArray ["stashNames"]
end stash_Names


--> Global | GIT | Stash | Menu | Disabled
-
getprop disabled_ClearStash [mTarget]
   return LocalArray ["stashNames"] is empty
end disabled_ClearStash

getprop disabled_PopStash [mTarget]
   return LocalArray ["stashNames"] is empty
end disabled_PopStash

getprop disabled_ListStashContents [mTarget]
   return LocalArray ["stashNames"] is empty
end disabled_ListStashContents

getprop disabled_DropStash [mTarget]
   return LocalArray ["stashNames"] is empty
end disabled_DropStash


--> Dev | Menu
-
on menu_DisplayStashFile treeField
   breakpoint
   put the title_Text of treeField into stashName
   set the tree_Delimiter of treeField to tab
   set the itemdelimiter to tab
   get the tree_SelectedPath of treeField
   put item 1 of it into someTitle
   put item 2 of it into relpath
   shell_BashParamEscape relpath
   
   put merge("git show [[stashName]]:[[relpath]]") into someShell
   _doGit someShell
   put the result into theResult
   
   if someTitle = "Text" then
      display_Lines theResult
   else
      put git_GetRootFolder() into gitRootFolder
      put gitRootFolder & relpath into someFile
      
      -- set the itemdelimiter to "."
      if there is a stack someFile then
         put the name of stack someFile into stackObject
         git_DisplayTempStackRevision stackObject, stashName
      else
         breakPoint
      end if
   end if
end menu_DisplayStashFile

on menu_ReExportStash
   breakpoint
   put the stack_Array of stack "libOPN_Menus stash@{0}" into stackArray
   put "libOPN_Menus" into stackName
   put the name of stack stackName into stackArray ["@manifest"]["abbreviated object"]
   put stackName into stackArray ["@manifest"]["name"]
   put the git_RelativeFile of stack stackName into stackArray ["@manifest"]["filename"]
   -- display_Array stackArray
   stackArray_ExportAsFiles stackArray
end menu_ReExportStash

on menu_Reflog
   breakpoint
   put "git reflog" into someShell
   -- put " --all" after someShell
   
   _doGit someShell
   put the result into gitResult
   
   display_Lines gitResult
end menu_Reflog


--> Global | GIT | Stash | Menu | Deps
-
function git_ParseShowStash gitResult
   set the itemdelimiter to tab
   put "Text" & CR Into textOutline
   put "Binary" & CR Into binaryOutline
   repeat for each line someLine in gitResult
      put word 1 to -1 of item 1 of someLine into insertNum
      put word 1 to -1 of item 2 of someLine into deleteNum
      put word 1 to -1 of item 3 of someLine into relPath
      
      if insertNum is a number then
         put tab & relPath & CR after textOutline
      else
         put tab & relPath & CR after binaryOutline
      end if
   end repeat
   put textOutline & binaryOutline into someOutline
   put word 1 to -1 of someOutline into someOutline
   return someOutline
end git_ParseShowStash
