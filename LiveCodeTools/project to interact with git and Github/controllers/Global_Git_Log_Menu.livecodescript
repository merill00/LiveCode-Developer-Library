script "Global_Git_Log_Menu"
--> MetaData
-
license: GPLv3
name: Global_Git_Log_Menu
type: controller
version: 0.1


--> Global | Git | Log | Menu
-
-- Global | Git | Log | Menu
on menu_CompareObjectScriptWithNow scriptObject
   -- put the displayed_Object of treeField into someObject
   --  put the tree_SelectedLink of treeField into commitHash
   put _getSelectedCommitHash() into commitHash
   
   put the script_File of scriptObject into relativeFile
   put the exported_Script of scriptObject into nowScript
   put git_HashRevision (relativeFile, cHash) into oldScript
   
   terminal_Diff nowScript, oldScript, "exported_Script", (char -6 to -1 of cHash & "_Script")
end menu_CompareObjectScriptWithNow

on menu_CompareObjectWithPrevious scriptObject
   -- put the displayed_Object of treeField into someObject
   -- put the tree_SelectedLink of treeField into cHash
   
   put _getSelectedCommitHash() into commitHash
   put the script_File of someObject into relativeFile
   
   -- Or between a particular version and 2 versions ago:
   -- $ git diff SHA1_HASH "master~2"
   
   put the tree_VisLineNum of treeField into vLineNum
   put (vLineNum - 1) into previousLineNum
   put the tree_SelectedLink [previousLineNum] of treeField into previousGitHash
   
   -- put the git_RevisionScript [gitHash] of someObject into oldScript
   -- put the git_RevisionScript [previousGitHash] of someObject into previousScript
   
   put git_HashRevision (relativeFile, cHash) into oldScript
   put git_HashRevision (relativeFile, previousGitHash) into previousScript
   
   terminal_Diff oldScript, previousScript, (cHash & "_script"), (previousGitHash & "_script")
end menu_CompareObjectWithPrevious

on _
end _

on submenu_Dev
   return "Dev | Menu"
end submenu_Dev


--> Global | Git | Log | Menu | Props
-
--> Global | Git | Log | Menu | Disabled
-
getprop disabled_CompareObjectScriptWithNow [treeField]
   put the displayed_Object of treeField into someObject
   return someObject is empty
end disabled_CompareObjectScriptWithNow


--> Menu | Props
-

--> Dev | Menu
-
