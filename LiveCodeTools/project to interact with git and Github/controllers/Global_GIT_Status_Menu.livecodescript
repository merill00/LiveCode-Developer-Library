script "Global_GIT_Status_Menu"
--> MetaData
-
license: GPLv3
name: Global_GIT_Status_Menu
type: controllers
version: 0.3


--> Menu | Props
-
local LocalArray

on menu_Init tObject
   put the display_View of tObject into displayView
   put displayView into LocalArray ["displayView"]
   put the title_Text of displayView into LocalArray ["projectName"]
   put the displayed_ScriptObject of displayView into LocalArray ["scriptObject"]
   put the displayed_GitCheckoutFolder of displayView into LocalArray ["gitFolder"]
   
   put github_ListOrgRepos() into LocalArray ["lcwRepoNames"]
end menu_Init


--> Display | Events
-
command mDoubleUp_GitLog indexView, someLine
   put LocalArray ["gitFolder"] into gitFolder
   
   switch word 1 of someLine
      case "commit"
         put word 2 of someLine into commitHash
         
         put commitHash & ":" & "lcw_GIT.livecode" into treeish
         put git_List (treeish, gitFolder)
         
         exit to top
         lcw_Answer merge ("Do you want to revert to checked out project [[commitHash]]?")
         
         breakpoint
         put "git checkout" && commitHash into someShell
         put git_ExecuteShellCommand (someShell, gitFolder) into shellResult
         refreshGitStatus
         break
      default
   end switch
end mDoubleUp_GitLog


--> Global | GIT | Status | Menu
-
on submenu_Init
   return "Global | GIT | Init | Menu"
end submenu_Init

on _
end _

on insert_Menu
   return "Global | GIT | Basics | Menu"
end insert_Menu

on _
end _

on submenu_Branch
   return "Global | GIT | Branch | Menu"
end submenu_Branch

on submenu_Stash
   return "Global | GIT | Stash | Menu"
end submenu_Stash

on submenu_Tag
   return "Global | GIT | Tag | Menu"
end submenu_Tag

on _
end _

on submenu_Git
   return "Global | GIT | Menu"
end submenu_Git

-- on submenu_GitFiles
return "Global | GIT | Files | Menu"
end submenu_GitFiles

on submenu_GitProjects
   return "Global | GIT | Folder | Menu"
end submenu_GitProjects

on submenu_GitSettings
   return "Global | GIT | Settings | Menu"
end submenu_GitSettings

on _
end _

on submenu_GitScript
   return "Global | GIT | Script | Menu"
end submenu_GitScript

on submenu_Gist
   return "Global | Gist | Menu"
end submenu_Gist

on submenu_Dev
   return "Dev | Menu"
end submenu_Dev


--> Dev | Menu
-
on menu_CompactGit
   put "git gc" into someShell
   put git_ExecuteShellCommand(someShell) into shellResult
   lcw_Notify shellResult, true
end menu_CompactGit

on menu_DisplayStatusReport arrayView
   put LocalArray ["gitFolder"] into gitFolder
   git_DisplayStatusLines gitFolder
end menu_DisplayStatusReport

on menu_DisplayCommitHistory arrayView
   put LocalArray ["gitFolder"] into gitFolder
   put git_CurrentBranchName (gitFolder) into branchName
   put git_ExecuteShellCommand ("git log", gitFolder) into commitHistory
   display_Lines commitHistory, "git log", "mDoubleUp_GitLog", branchName
   put the result into indexView
   set the title_Menu of indexView to "Global | Git | Log | Menu"
   set the line_Menu of indexView to "Global | Git | Line | Log | Menu"
end menu_DisplayCommitHistory

on menu_ListTrackedFiles
   -- lists all of the already committed files being tracked by your git repo.
   -- https://stackoverflow.com/questions/8533202/list-files-in-local-git-repo
   
   put LocalArray ["gitFolder"] into gitFolder
   --
   put "git ls-tree --full-tree -r HEAD" into someShell
   -- git_ExecuteShell someShell, gitFolder
   put shell_ExecuteAtRoot (someShell, gitFolder) into shellResult
   --
   display_Index shellResult, "git ls-tree"
end menu_ListTrackedFiles

on menu_ListCommits
   put LocalArray ["gitFolder"] into gitFolder
   put git_ListCommitHashes (gitFolder)
end menu_ListCommits

on _
end _

on menu_SelectProject displayView, gitProjectName
   breakpoint
   display_GitStatus gitProjectName
   
   put project_GetFolder (gitProjectName) into gitFolder
   
   put gitProjectName into LocalArray ["gitProjectName"]
   
   put the stack_Object of displayView into stackObject
   set the label of displayView to gitProjectName
end menu_SelectProject

on menu_DisplayGitProjectArray
   put git_GetProjectArray() into gitProjectArray
   display_Array gitProjectArray
end menu_DisplayGitProjectArray

on _
end _

on menu_ArrayViewScript displayView
   edit the script of displayView
end menu_ArrayViewScript

on menu_ArrayViewBehavior displayView
   put the behavior of displayView into bObject
   edit the script of bObject
end menu_ArrayViewBehavior


--> Global | GIT | Status | Menu | Props
-
getprop git_ProjectName
   put git_GetRootFolder() into gitFolder
   return gitFolder
   -- return LocalArray ["gitProjectName"]
end git_ProjectName

getprop git_ProjectNames
   put library_ListProjectNames() into projectNames
   return projectNames
end git_ProjectNames


--> Global | GIT | Status | Menu | Disabled
-
getprop disabled_Branch
   put LocalArray ["gitFolder"] into gitFolder
   if there is a folder gitFolder then
      return false
   else
      return true
   end if
end disabled_Branch

-- getprop disabled_Init
put LocalArray ["gitFolder"] into gitFolder
if there is a folder gitFolder then
   return false
else
   return true
end if
end disabled_Init


--> Private
-
private command refreshGitStatus
   put LocalArray ["projectName"] into projectName
   refresh_GitStatus projectName
   return true
   
   put LocalArray ["gitFolder"] into gitFolder
   display_GitFolderStatus gitFolder
end refreshGitStatus
