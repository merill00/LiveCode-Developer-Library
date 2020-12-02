script "Global_GIT_File_Menu"
--> MetaData
-
license: GPLv3
name: Global_GIT_File_Menu
type: controller
version: 0.1


--> Global | GIT | File | Menu
-
on menu_LaunchFile someFile
   launch document someFile
end menu_LaunchFile

on menu_RevealFile someFile
   finder_Reveal someFile
end menu_RevealFile

on _
end _

on menu_DisplayStackHistory someFile
   put the name of stack someFile into stackObject
   display_StackHistory stackObject
end menu_DisplayStackHistory

getprop disabled_DisplayStackHistory [someFile]
   return spotlight_GetFileKind (someFile) is not "Livecode Stack"
end disabled_DisplayStackHistory

on menu_GitRoot someFile
   put git_GetCheckoutFolder (someFile) -- into pGitRootFolder
end menu_GitRoot

on menu_FileKind someFile
   put spotlight_GetFileKind (someFile)
end menu_FileKind

on menu_FileInfo someFile
   put spotlight_GetFileInfo (someFile)
end menu_FileInfo

on _
end _

on menu_CompareWithHead someFile
   set the cursor to watch
   put git_ShowFileHead (someFile) into lastCommitedText
   -- put git_GetLastRevision (someFile, 1) into lastCommitedText
   put url ("binfile:" & someFile) into exportedScript
   terminal_Diff lastCommitedText, exportedScript, "git_LastCommit", "exported_Script"
end menu_CompareWithHead

on menu_ShowHistory someFile
   put someFile into pTitle
   display_GitFileHistory someFile, pTitle
end menu_ShowHistory

on menu_CopyFileList
   put menu_GetTargetObject() into treeField
   put the tree_Children of treeField
end menu_CopyFileList

on _
end _

on menu_AddFile someFile
   git_AddFile someFile
   if the result is not empty then display_Text the result
   git_RefreshDisplay
end menu_AddFile

on menu_CommitFile someFile
   git_CommitFile someFile
   put the result into shellResult
   git_RefreshDisplay
   if shellResult is not empty then display_Text shellResult
end menu_CommitFile

on menu_RemoveFile someFile, someBoolean
   git_DeleteFile someFile, someBoolean
   lcw_Notify the result
   git_RefreshDisplay "Git Status"
end menu_RemoveFile

on menu_Blame someFile
   put "git blame --" && kwote(someFile) into someShell
   put git_ExecuteShellCommand (someShell) into shellResult
   display_Text shellResult
end menu_Blame

on menu_Show someFile
   /*
   git show rev:path/to/file
   git show rev:path/to/directory
   git show rev
   
   git show v1.0.0
   Shows the tag v1.0.0, along with the object the tags points at.
   
   git show v1.0.0^{tree}
   Shows the tree pointed to by the tag v1.0.0.
   
   git show next~10:Documentation/README
   Shows the contents of the file Documentation/README as they were current in the 10th last commit of
   the branch next.
   
   git show master:Makefile master:t/Makefile
   Concatenates the contents of said Makefiles in the head of the branch master.
   */
   
   put "git show" && kwote(someFile) into someShell
   put git_ExecuteShellCommand(someShell) into shellResult
   display_Text shellResult
end menu_Show

on _
end _

on menu_ResetStaged someFile
   -- git reset -- frotz.c
   put menu_GetTargetObject() into treeField
   put the tree_SelectedIndex of treeField into someFile
   
   shell_BashParamEscape someFile
   put "git reset --" && someFile into someShell
   
   put git_ExecuteShellCommand (someShell) into shellResult
   
   git_RefreshDisplay "Git Status"
   if shellResult is not empty then display_Text shellResult
end menu_ResetStaged


--> GIT | Line | Menu | Props
-
getprop disabled_AddFile
   put menu_GetTargetObject() into treeField
   if the tree_IsLeaf of treeField is true then
      return false
   else
      return true
   end if
end disabled_AddFile

getprop disabled_CopyFileList
   put menu_GetTargetObject() into treeField
   if the tree_IsLeaf of treeField is true then
      return true
   else
      return false
   end if
end disabled_CopyFileList


--> Menu | Props
-
getprop menu_CheckTarget [fileOrFolder]
   if there is a file fileOrFolder then
      return true
   else if there is a folder fileOrFolder then
      return true
   else
      return false
   end if
end menu_CheckTarget

getprop menu_Target [mTitlePath]
   put the git_Tree of me into cardTree
   put the tree_SelectedIndex of cardTree into relPathLine
   set the itemdelimiter to ":"
   switch item 1 of relPathLine
      case "unmerged"
         delete item 1 of relPathLine
         put word 1 to -1 of relPathLine into shortFile
         return git_GetRootFolder() & shortFile
      case "new file"
         delete item 1 of relPathLine
         put word 1 to -1 of relPathLine into shortFile
         return git_GetRootFolder() & shortFile
      default
         return git_GetRootFolder() & relPathLine
   end switch
end menu_Target
