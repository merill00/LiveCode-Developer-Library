script "Global_GIT_Unmerged Paths_Menu"
--> MetaData
-
license: GPLv3
name: Global_GIT_Unmerged Paths_Menu
type: controller
version: 0.1

--> Variables
-
local LocalArray


--> Global | GIT | Unmerged paths | Deleted by us | File | Menu
-
on menu_RemoveOurFile arrayView
   put "git rm -- [[shortFile]]" into shellTemplate
   put _getFile (arrayView) into someFile
   git_ExecuteMergedShell shellTemplate, someFile
   put the result into mergeResult
   if mergeResult is not empty then
      display_Lines mergeResult, shellTemplate
   end if
   refresh
end menu_RemoveOurFile

-- on menu_CheckoutOurs arrayView
put "git checkout --ours -- [[shortFile]]" into shellTemplate
put _getFile (arrayView) into someFile
git_ExecuteMergedShell shellTemplate, someFile
put the result into mergeResult
if mergeResult is not empty then
   display_Lines mergeResult, shellTemplate
end if
refresh
end menu_CheckoutOurs


--> Global | GIT | Unmerged Paths | Menu
-
on menu_Documentation arrayView, whichDoc
   switch whichDoc
      case "Resolving merge conflicts"
         put "https://help.github.com/articles/resolving-a-merge-conflict-from-the-command-line/" into someURL
         break
      case "Resolving conflicts"
         put "https://githowto.com/resolving_conflicts" into someURL
         break
      case "Best visual merge tool"
         put "http://stackoverflow.com/questions/137102/whats-the-best-visual-merge-tool-for-git" into someURL
         break
      case "Video"
         put "https://www.youtube.com/watch?v=zz7NuSCH6II" into someURL
         break
   end switch

   launch url someURL
end menu_Documentation


--> Global | GIT | Unmerged paths | Both added | Menu
-
on menu_KeepAllOurs
   breakpoint
end menu_KeepAllOurs

on menu_KeepAllTheirs
   breakpoint
end menu_KeepAllTheirs


--> Global | GIT | Unmerged paths | Both added | File | Menu
-
on menu_DisplayThisBranchFile arrayView
   put _getFile (arrayView) into ourFile
   switch
      case there is a stack ourFile
         if the scriptonly of stack ourFile is true then
            edit the script of stack ourFile
         else
            go to stack ourFile
         end if
         break
      default
         atom_DisplayFile ourFile
   end switch
   go to stack ourFile
end menu_DisplayThisBranchFile

on menu_DisplayOtherBranchFile arrayView
   put _getFile (arrayView) into theirFile

   put LocalArray ["otherBranchName"] into otherBranchName
   put "master" into otherBranchName

   git_ExportFileFromBranch theirFile, otherBranchName
   put the result into exportedFile
   return exportedFile
end menu_DisplayOtherBranchFile

command git_ExportFileFromBranch someFile, branchName, pToFile
   /*
   git show branch:file
   -- http://stackoverflow.com/questions/7856416/view-a-file-in-a-different-git-branch-without-changing-branches
   */

   set the itemdelimiter to slash
   put item -1 of someFile into shortFile
   put someFile into someFolder
   put empty into item -1 of someFolder

   if pToFile is empty then
      set the itemdelimiter to "/"
      put the tempName & "/" into tempFolder
      folder_CreateNested tempFolder
      put tempFolder & shortFile into pToFile
   end if
   breakpoint
   shell_BashParamEscape shortFile
   put "git show" && shortFile & ":" & branchName into someShell
   -- put space & ">" && kwote (pToFile) after someShell

   put git_ExecuteShellCommand (someShell, someFolder) into shellResult
   if shellResult is not empty then
      put someShell
      display_Lines shellResult, "git_ExportFileFromBranch"
   end if
   return pToFile
end git_ExportFileFromBranch

on _
end _

on menu_KeepOurs
   -- http://stackoverflow.com/questions/9823692/resolving-a-both-added-merge-conflict-in-git

end menu_KeepOurs

on menu_KeepTheirs
   -- http://stackoverflow.com/questions/9823692/resolving-a-both-added-merge-conflict-in-git

end menu_KeepTheirs

on _
end _

on menu_Documentation arrayView, whichDoc
   switch whichDoc
      case "GitHUb workflow fromt eh commandline"
         put "http://www.jefferydurand.com/git/github/workflow/commandline/2015/08/26/quick-guide-to-github-team-workflow.html" into someURL
         break
   end switch
   launch url someURL
end menu_Documentation


--> Menu | Props
-
on menu_Init tObject
   put the array_View of tObject into arrayView
   put arrayView into LocalArray ["displayView"]
   
   put the displayed_GitCheckoutFolder of arrayView into LocalArray ["gitCheckoutFolder"]
   put the current_BranchName of arrayView into LocalArray ["currentBranchName"]
   put the other_BranchName of arrayView into LocalArray ["otherBranchName"]
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
