script "Global_Git_Line_Stack_Log_Menu"
--> MetaData
-
license: GPLv3
name: Global_Git_Line_Stack_Log_Menu
type: controller
version: 0.2


--> Variables
-
local LocalArray


--> Global | Git | Line | Stack | Log | Menu
-
on menu_DisplayStackRevision stackObject
   put _getSelectedCommitHash() into commitHash
   
   git_DisplayTempStackRevision stackObject, commitHash
   
   -- here we should display some info about the closed stack
end menu_DisplayStackRevision

on _
end _

on menu_RevertStack stackObject
   put _getSelectedCommitHash() into commitHash
   
   breakpoint
   git_RevertStack stackObject, commitHash
end menu_RevertStack

on _
end _

on submenu_Dev
   return "Dev | Menu"
end submenu_Dev


--> Global | Git | Line | Stack | Log | Menu | Props
-
getprop stack_Hashs [mTarget]
   put the stack_RelativeFile of mTarget into relativePath
   return git_ReverseFileHashes (relativePath)
end stack_Hashs

getprop back_Hashs [mTarget]
   put the script_RelativeFile of mTarget into relativePath
   return git_ReverseFileHashes (relativePath)
end back_Hashs

getprop back_Nums
   return "0,-,1,2,3,4,5,6,7,8,9"
end back_Nums


--> Dev | Menu
-
on menu_DisplayCommitInfo stackObject
   put _getSelectedCommitHash() into commitHash
   put LocalArray ["gitCheckoutFolder"] into gitCheckoutFolder
   
   put git_HashInfo (commitHash, gitCheckoutFolder) into hashInfo   
   put "git show" && kwote (commitHash) into someShell
   display_Text hashInfo, someShell
end menu_DisplayCommitInfo

on menu_StackData stackObject
   put _getSelectedCommitHash() into commitHash
   
   put git_GetStackData (stackObject, commitHash) into stackData
   
   put the git_StackTreeish [commitHash] of stackObject into treeish
   put "git show" && kwote (treeish) into someShell
   put someShell & comma & "git_GetStackData ()" into someTitle
   display_Text stackData, someTitle
end menu_StackData

on menu_ListCommitInfo stackObject
   put _getSelectedCommitHash() into commitHash
   put LocalArray ["gitCheckoutFolder"] into gitCheckoutFolder
   
   put git_List (commitHash, gitCheckoutFolder) into logText
   
   put "git ls-tree" && commitHash into someShell
   display_Index logText, someShell
end menu_ListCommitInfo

on menu_StackHashLog stackObject
   -- a log of all the previous commits of a version specified by commitHash
   put _getSelectedCommitHash() into commitHash
   
   put the git_StackHashLog [commitHash] of stackObject into logText
   
   put "the git_StackHashLog [" & commitHash & "] of" && stackObject into someTitle
   display_Index logText, someTitle
end menu_StackHashLog

on _
end _

on menu_DiffStackBinaries stackObject
   -- put the tree_SelectedLink of treeField into commitHash
   -- put the displayed_Object of treeField into stackObject
   put _getSelectedCommitHash() into commitHash
   
   breakpoint
   
   put the effective filename of stackObject into stackPath   
   git_ExportFileRevision stackPath, commitHash
   put the result into toFile
   
   diff_Files thisFile, toFile
end menu_DiffStackBinaries


--> Menu | Props
-
on menu_Init tObject
   put the index_View of tObject into indexView
   put the hilited_Lines of indexView into lineNum
   put the displayed_GitCheckoutFolder of indexView into LocalArray ["gitCheckoutFolder"]
   
   put the log_Array of indexView into logArray
   put logArray [lineNum]["commitHash"] into commitHash
   
   put commitHash into LocalArray ["commitHash"]
   put indexView into LocalArray ["indexView"]
end menu_Init


--> Private
-
private function _getSelectedCommitHash
   return LocalArray ["commitHash"]
end _getSelectedCommitHash

private function _indexView
   return LocalArray ["indexView"]
end _indexView
