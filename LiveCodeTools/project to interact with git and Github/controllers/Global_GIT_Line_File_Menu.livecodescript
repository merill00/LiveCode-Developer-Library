script "Global_GIT_Line_File_Menu"
--> MetaData
-
license: GPLv3
name: Global_GIT_Line_File_Menu
type: controller
version: 0.2


--> Variables
-
local LocalArray


--> Menu | Props
-
on menu_Init tObject
   get the hilited_Element of tObject
   put item 1 of it into LocalArray ["topKey"]
   
   put the display_View of tObject into displayView
   put displayView into LocalArray ["displayView"]
   put the displayed_ScriptObject of displayView into LocalArray ["scriptObject"]
   put the displayed_GitCheckoutFolder of displayView into LocalArray ["gitCheckoutFolder"]
   put the displayed_Array of displayView into LocalArray ["displayedArray"]
end menu_Init

getprop menu_Target [mTiltlePath]
   pass menu_Target
end menu_Target


--> Private
-
private command refresh
   put LocalArray ["displayView"] into displayView
   put LocalArray ["gitCheckoutFolder"] into gitCheckoutFolder
   display_GitFolderStatus gitCheckoutFolder, displayView
end refresh

private function _getFile arrayView
   put the selected_Value of arrayView into relativeFile
   put LocalArray ["gitCheckoutFolder"] into gitCheckoutFolder
   put gitCheckoutFolder & relativeFile into someFile
   return someFile
end _getFile


--> Global | GIT | Branch | File | Menu
-
on menu_TestBranch arrayView
   put LocalArray ["gitCheckoutFolder"] into gitCheckoutFolder
   put "git branch" into someShell
   put git_ExecuteShellCommand (someShell, gitCheckoutFolder) into branchNames
   put branchNames
end menu_TestBranch

on _
end _

on submenu_Branch
   return "Global | GIT | Branch | Menu"
end submenu_Branch



command git_CheckoutOurs someFile
   put "git checkout --theirs -- [[shortFile]]" into shellTemplate
   git_ExecuteMergedShell shellTemplate, someFile
   put the result into gitResult
   return gitResult
end git_CheckoutOurs

command git_CheckoutTheirs someFile
   put "git checkout --ours -- [[shortFile]]" into shellTemplate
   git_ExecuteMergedShell shellTemplate, someFile
   put the result into gitResult
   return gitResult
end git_CheckoutTheirs


--> Global | GIT | Unmerged paths | Both modified | File | Menu
-
on menu_AddOursToStage arrayView
   put _getFile (arrayView) into someFile
   
   git_AddFile someFile
   put the result into gitResult
   
   -- git_CheckoutOurs someFile
   --  put the result into gitResult
   
   if gitResult is not empty then display_Lines gitResult, shellTemplate
   refresh
end menu_AddOursToStage

on menu_CheckoutOurs arrayView
   put _getFile (arrayView) into someFile
   git_CheckoutOurs someFile
   put the result into gitResult
   
   if gitResult is not empty then display_Lines gitResult, shellTemplate
   refresh
end menu_CheckoutOurs

on menu_CheckoutTheirs arrayView
   put _getFile (arrayView) into someFile
   
   git_CheckoutTheirs someFile
   put the result into mergeResult
   display_Lines mergeResult, shellTemplate
   refresh
end menu_CheckoutTheirs

on _
end _

on menu_GoToTheirStack
   
end menu_GoToTheirStack

on _
end _

on insert_Edit
   return "Edit | Menu"
end insert_Edit


--> Global | GIT | Unmerged paths | Added by them | File | Menu
-
on menu_AddFileToStage arrayView
   put _getFile (arrayView) into someFile
   git_AddFile someFile
   put the result into addResult
   refresh
end menu_AddFileToStage

on menu_RemoveFileFromStage arrayView
   put _getFile (arrayView) into someFile
   git_RemoveFile someFile
   put the result into removeResult
   refresh
end menu_RemoveFileFromStage



--> Global | GIT | Unmerged Paths | Added By Us | File | Menu
-
on menu_CheckoutOurs arrayView
   set the cursor to watch
   put "git checkout --ours {shortFile}" into shellTemplate
   put _getFile (arrayView) into someFile
   git_ExecuteMergedShell shellTemplate, someFile
   refresh
end menu_CheckoutOurs

on menu_CheckoutTheirs arrayView
   put "git checkout --theirs {shortFile}" into shellTemplate
   put _getFile (arrayView) into someFile
   git_ExecuteMergedShell shellTemplate, someFile
   refresh
end menu_CheckoutTheirs

on _
end _

on menu_AddFileToStage arrayView
   put _getFile (arrayView) into someFile
   git_AddFile someFile
   put the result into addResult
   refresh
end menu_AddFileToStage

on menu_RemoveFileFromStage arrayView
   put the selected_Value of arrayView into relativeFile
   put relativeFile
end menu_RemoveFileFromStage

on _
end _

on insert_Edit
   return "Edit | Menu"
end insert_Edit


--> Global | GIT | Unmerged Paths | Both Deleted | File | Menu
-
on menu_About
   answer "Both deleted means..."
end menu_About

on menu_AddFileToStage arrayView
   put _getFile (arrayView) into someFile
   git_AddFile someFile
   refresh
end menu_AddFileToStage

on menu_RemoveFileFromStage arrayView
   put _getFile (arrayView) into someFile
   git_RemoveFile someFile
   put the result into removeResult
   refresh
end menu_RemoveFileFromStage

on _
end _

on insert_BothDeleted
   return "Edit | Menu"
end insert_BothDeleted


--> Global | GIT | Changes not staged for commit | Modified | Menu
-
on insert_ChangesNotStaged
   return "Global | GIT | Changes not staged for commit | Menu"
end insert_ChangesNotStaged


--> Global | GIT | Changes not staged for commit | Menu
-
on menu_CommitAllStaged arrayView
   put lcw_Ask ("Comment on this change...") into someComment
   put LocalArray ["gitCheckoutFolder"] into gitCheckoutFolder
   
   git_CommitChanges someComment, gitCheckoutFolder
   put the result into shellResult
   
   display_Lines shellResult, "git_CommitChanges"
   refresh
end menu_CommitAllStaged


--> Global | GIT | Changes not staged for commit | Modified | File | Menu
-
on menu_ReloadStack arrayView
   -- we are not (yet) checking for backscript and frontscript use
   put _getFile (arrayView) into someFile
   put the short name of stack someFile into stackName
   put stackName is among the lines of thestacksinuse into isUsed
   revert stack stackName
   if isUsed is true then start using stack stackName
end menu_ReloadStack

getprop disabled_ReloadStack [arrayView]
   put _getFile (arrayView) into someFile
   if exists (stack someFile) then
      put stack_ListEditedNames() into editedStacks
      put the short name of stack someFile into stackName
      if stackName is among the lines of editedStacks then
         -- let's not reload stacks that need saving first
         return true
      else
         return false
      end if
   else
      return true
   end if
end disabled_ReloadStack

on menu_AddFile arrayView
   put _getFile (arrayView) into someFile
   git_AddFile someFile
   refresh
end menu_AddFile

on menu_AddThenCommitFile arrayView
   -- just for fun
   put _getFile (arrayView) into someFile
   git_AddFile someFile
   git_CommitFile someFile
   refresh
end menu_AddThenCommitFile


--> Global | GIT | Changes to be committed | New file | File | Menu
-
on menu_CommitFile arrayView
   put lcw_Ask ("Comment on this change...") into someComment
   put _getFile (arrayView) into someFile
   
   put true into pVerbose -- for more info
   git_CommitFile someFile, someComment, pVerbose
   put the result into shellResult
   
   display_Lines shellResult, "git_CommitFile"
   refresh
end menu_CommitFile

on _
end _

on menu_RevealInFinder arrayView
   put _getFile (arrayView) into someFile
   finder_Reveal someFile
end menu_RevealInFinder


--> Global | GIT | Changes to be committed | Modified | File | Menu
-
on menu_CommitFile arrayView
   -- do above
end menu_CommitFile

on _
end _

on menu_RevealInFinder arrayView
   put _getFile (arrayView) into someFile
   finder_Reveal someFile
end menu_RevealInFinder


--> Global | GIT | Changes to be committed | Menu
-
on menu_CommitChanges arrayView
   put lcw_Ask ("Comment on this change...") into someComment
   put LocalArray ["gitCheckoutFolder"] into gitCheckoutFolder
   
   git_CommitChanges someComment, gitCheckoutFolder
   put the result into shellResult
   
   display_Lines shellResult, "git_CommitChanges"
   refresh
end menu_CommitChanges


--> Global | GIT | Changes to be committed | New file | Menu
-
on menu_CommitChanges arrayView
   -- do the above
end menu_CommitChanges


--> Global | GIT | Changes to be committed | Modified | Menu
-
on menu_CommitChanges arrayView
   -- do the above
end menu_CommitChanges


--> Global | GIT | Untracked files | Files | File | Menu
-
on menu_AddUntrackedFile arrayView
   put _getFile (arrayView) into someFile
   git_AddFile someFile
   refresh
end menu_AddUntrackedFile

on _
end _

on menu_EditScript arrayView
   put _getFile (arrayView) into someFile
   edit the script of stack someFile
end menu_EditScript


--> Global | GIT | Untracked files | Files | File | Menu | Disabled
-
getprop disabled_EditScript [arrayView]
   put _getFile (arrayView) into someFile
   if exists (stack someFile) then
      return false
   else
      return true
   end if
end disabled_EditScript

--> Global | GIT | Line | File | Menu
-
on menu_StageThenCommit arrayView
   put lcw_Ask ("Comment on this change...") into someComment
   put LocalArray ["gitCheckoutFolder"] into gitCheckoutFolder
   
   git_CommitChanges someComment, gitCheckoutFolder
   put the result into shellResult
   
   display_Lines shellResult, "git_CommitChanges"
   refresh
end menu_StageThenCommit

on submenu_Branch
   return "Global | GIT | Branch | Menu"
end submenu_Branch

on menu_AddUntrackedFile arrayView
   -- Untracked files:,files,controllers/Global_GIT_Menu.livecodescript,
   put the hilited_Element of arrayView into pathItems
   get item 3 to -1 of pathItems
   put word 1 of it into relativePath
   
   breakpoint
   put LocalArray ["gitCheckoutFolder"] into gitCheckoutFolder
   --  git_AddChanged relativePath, gitCheckoutFolder
   
   put gitCheckoutFolder & relativePath into someFileOrFolder
   git_AddFolder someFileOrFolder -- this will work "cd to folder" then issue "git add ."
   
   refresh
end menu_AddUntrackedFile

on menu_AddAllUntracked arrayView
   put LocalArray ["gitCheckoutFolder"] into gitCheckoutFolder
   set the cursor to watch
   
   git_AddEverything gitCheckoutFolder  
   put the result into shellResult
   
   if shellResult is not empty then
      lcw_Notify shellResult
   end if
   refresh
end menu_AddAllUntracked

on menu_ResetToLastCommit
   breakpoint
end menu_ResetToLastCommit

on _
end _

on menu_StashChanges
   breakpoint
end menu_StashChanges

on menu_StageAllChanges
   git_AddChanged
end menu_StageAllChanges

on _
end _

on submenu_Dev
   return "Dev | Menu"
end submenu_Dev


--> Global | GIT | Line | File | Menu | Props
-

--> Global | GIT | Line | File | Menu | Disabled
-
getprop disabled_ResetToLastCommit
   if LocalArray ["topKey"] = "Branch" then
      return "delete"
   else
      return false
   end if
end disabled_ResetToLastCommit

getprop disabled_RevertToLastCommit [arrayView]
   put the hilited_Element of arrayView into pathItems
   if LocalArray ["topKey"] = "Branch" or the number of items of pathItems < 3 then
      return "delete"
   else
      return false
   end if
end disabled_RevertToLastCommit

getprop disabled_StageAllChanges
   if LocalArray ["topKey"] = "Changes not staged for commit:" then
      return false
   else
      return "delete"
   end if
end disabled_StageAllChanges

getprop disabled_SwitchBranch [arrayView]
   if LocalArray ["topKey"] = "Branch" then
      return false
   else
      return "delete"
   end if
end disabled_SwitchBranch

getprop disabled_AddAllUntracked [arrayView]
   put the hilited_Element of arrayView into pathItems
   put LocalArray ["topKey"] into topKey
   put the number of items of pathItems into pathNum
   -- if topKey = "Untracked files:" and the number of items of pathItems < 3 then
   if topKey is among the items of "Untracked files:,Changes not staged for commit:" and pathNum <3 then
      return false
   else
      return "delete"
   end if
end disabled_AddAllUntracked

getprop disabled_AddUntrackedFile [arrayView]
   put the hilited_Element of arrayView into pathItems
   
   put LocalArray ["topKey"] into topKey
   put the number of items of pathItems into pathNum
   --  if topKey is among the items of "Untracked files:" and pathNum > 2 then
   if topKey is among the items of "Untracked files:,Changes not staged for commit:" and pathNum > 2 then
      return false
   else
      return "delete"
   end if
end disabled_AddUntrackedFile

getprop disabled_StashChanges
   if LocalArray ["topKey"] = "Changes to be committed:" then
      return false
   else
      return "delete"
   end if
end disabled_StashChanges

getprop disabled_StageThenCommit [arrayView]
   put LocalArray ["displayedArray"] into displayedArray
   put displayedArray ["Changes to be committed:"] into cArray
   put displayedArray ["Changes not staged for commit:"] into nsArray
   union cArray with nsArray
   if cArray is empty then return "delete"
   
   return false
   
   -- not sure of logic yet
   put LocalArray ["topKey"] into topKey
   if topKey = "Branch" or topKey = "Changes to be committed:" then
      return false
   else
      return "delete"
   end if
end disabled_StageThenCommit


--> Dev | Menu
-
on menu_Edit arrayView
   put the behavior of arrayView into bObject
   edit the script of bObject
end menu_Edit


--> Edit | Menu
-
on menu_GoToStack arrayView
   put _getFile (arrayView) into someFile
   go to stack someFile
end menu_GoToStack

on menu_EditFile arrayView
   put _getFile (arrayView) into someFile
   atom_DisplayFile someFile
end menu_EditFile


--> Edit | Menu | Disabled
-
getprop disabled_GoToStack [arrayView]
   put _getFile (arrayView) into someFile
   if exists (stack someFile) is true then
      return false
   else
      return "delete"
   end if
end disabled_GoToStack

getprop disabled_EditFile [arrayView]
   put _getFile (arrayView) into someFile
   switch
      case there is a stack someFile
         if the scriptonly of stack someFile is true then
            return false
         else
            return true
         end if
      case there is a file someFile
         return false
      default
         return true
   end switch
end disabled_EditFile
