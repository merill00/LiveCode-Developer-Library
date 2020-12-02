script "Global_GIT_Init_Menu"
--> MetaData
-
license: GPLv3
name: Global_GIT_Init_Menu
type: controller
version: 0.1

/*
This menu is for project displays. Typically an ndex_View with then menu_Target set to the project_Name.
*/


--> Menu | Props
-
/* mTarget should already be set by set the menu_Target of displayView to projectName */

local LocalArray

on menu_Init tObject
   -- put the display_View of tObject into displayView
   put the view_Object of tObject into displayView
   
   put displayView into LocalArray ["displayView"]
   put the title_Text of displayView into projectName
   put project_FolderFromName (projectName) into projectFolder
   -- put project_GetFolder (projectName) into gitRootFolder
   
   if there is a stack projectName then
      put the git_CheckoutFolder of stack projectName into gitFolder
      -- put there is a folder gitCheckoutFolder into gitIsActive
      put the git_IsActive of stack projectName into gitIsActive
      put gitIsActive into LocalArray ["gitIsActive"]
      put git_GetRemoteAddress (projectFolder) into remoteAddress
   end if
   
   put projectName into LocalArray ["projectName"]
   put projectFolder into LocalArray ["projectFolder"] -- should be the same as gitFolder
   put remoteAddress into LocalArray ["remoteAddress"]
   put gitFolder into LocalArray ["gitFolder"]
   
   put projectName & ".wiki" into wikiProjectName
   put library_FetchProjectFolder (wikiProjectName) into wikiFolder
   if there is a folder wikiFolder then
      put wikiFolder into LocalArray ["wikiFolder"]
   end if
   
   put github_ListOrgRepos() into lcwRepoNames
   put lcwRepoNames into LocalArray ["lcwRepoNames"]
   put projectName is among the lines of LocalArray ["lcwRepoNames"] into gitHubRepoExists
   put gitHubRepoExists into LocalArray ["gitHubRepoExists"]
end menu_Init

-- getprop menu_CheckTarget [projectName]
return true
end menu_CheckTarget


--> Global | GIT | Init | Menu
-
on menu_InitialiseGit projectName
   put LocalArray ["displayView"] into displayView
   put LocalArray ["projectFolder"] into projectFolder
   put LocalArray ["projectName"] into projectName
   --
   put merge ("Are you sure you want to initialise the project '[[projectName]]' with a git repo?") into someQuestion
   dispatch "lcw_AnswerSheet" to displayView with someQuestion
   --
   git_InitFolder projectFolder
   put the result into testGitRootFolder
   --
   if testGitRootFolder is not projectFolder then
      breakpoint
   end if
end menu_InitialiseGit

on _
end _

on menu_CreateGithubProject
   put LocalArray ["lcwRepoNames"] into lcwRepoNames
   put LocalArray ["projectName"] into projectName   -- "lcw_Git"
   put LocalArray ["gitFolder"] into gitFolder
   
   -- let's check to see if GitHub repo exists (Should be disabled)
   if projectName is among the lines of lcwRepoNames then
      answer warning "LiveCodeWorld repository already exists!"
      exit to top
   end if
   
   -- check to see if remote address already exists
   put git_GetRemoteAddress (gitFolder) into oldRemoteAddress
   if oldRemoteAddress begins with "git@github.com:LiveCodeWorld/" then
      -- not sure what to do???
      put oldRemoteAddress
      answer warning "LiveCodeWorld repository is already linked but remote repo does not exist! Unlink it first?"
      exit to top
   end if
   
   -- let's create it
   put lcw_Ask ("Give the new repo a name..", projectName) into repoName
   put lcw_Ask ("Give repo a description...", "A project to interact with git and Github.") into repoDescription
   breakpoint
   github_CreateProject repoName, gitFolder, repoDescription
   put the result into createResult
   
   -- not set remote
   menu_FixRemote projectName
end menu_CreateGithubProject

on menu_LaunchGithub displayView, lcwRepo
   -- put LocalArray ["shortFolder"] into lcwRepo -- lazy
   github_Launch lcwRepo
end menu_LaunchGithub

-- on menu_LaunchGithub
put LocalArray ["remoteAddress"] into remoteAddress
put github_FindRepoName (remoteAddress) into repoName
github_Launch repoName
end menu_LaunchGithub

on _
end _

on menu_AddProjectWiki projectName
   put projectName & ".wiki" into wikiProjectName
   
   answer folder "Select a folder containing a project..."
   put it into projectFolder
   if it is empty then exit to top
   if projectFolder ends with ".wiki" is false then
      answer warning "Not a GitHub wiki project"
      exit to top
   end if
   
   put projectFolder into projectArray ["projectFolder"]
   put "wiki" into projectArray ["projectType"]
   library_StoreProjectArray wikiProjectName, projectArray
   
   display_LcwProjectList
end menu_AddProjectWiki

on menu_CreateLibraryPages projectName
   -- put projectName & ".wiki" into wikiProjectName
   -- put library_FetchProjectFolder (wikiProjectName) into wikiFolder
   put LocalArray ["wikiFolder"] into wikiFolder
   put LocalArray ["displayView"] into displayView
   put the view_Index of displayView into stackNames
   repeat for each line stackName in stackNames
      put wikiFolder & stackName & ".md" into wikiPageFile
      if there is a file wikiPageFile then
         breakpoint
      else
         put the github_WikiPage of stack stackName into wikiMarkdown
         put "file:" & wikiPageFile into someURL
         put wikiMarkdown into url someURL
      end if
   end repeat
end menu_CreateLibraryPages

on _
end _

on submenu_Dev
   return "Dev | Menu"
end submenu_Dev



--> Global | GIT | Init | Menu | Props
-
getprop lcw_Repo
   put LocalArray ["projectName"] into repoName -- lazy
   return repoName
end lcw_Repo

getprop lcw_Repos
   put LocalArray ["lcwRepoNames"] into lcwRepoNames
   sort lcwRepoNames
   return lcwRepoNames
end lcw_Repos


--> Global | GIT | Init | Menu | Disabled
-
getprop disabled_InitialiseGit
   if LocalArray ["gitIsActive"] is true then
      return "delete"
   else
      return false
   end if
end disabled_InitialiseGit

getprop disabled_GitStatus
   if LocalArray ["gitIsActive"] is true then
      return false
   else
      return "delete"
   end if
end disabled_GitStatus

getprop disabled_DisplayRemote
   if LocalArray ["gitIsActive"] is true then
      return false
   else
      return "delete"
   end if
end disabled_DisplayRemote

getprop disabled_FixRemote
   if LocalArray ["gitIsActive"] is true then
      return false
   else
      return "delete"
   end if
end disabled_FixRemote

getprop disabled_DeleteInvisibleGitFolder
   if LocalArray ["gitIsActive"] is true then
      return false
   else
      return true
   end if
end disabled_DeleteInvisibleGitFolder

getprop disabled_CreateGithubProject
   if LocalArray ["gitIsActive"] is false then return true
   if LocalArray ["gitHubRepoExists"] then
      return true
   else
      return false
   end if
end disabled_CreateGithubProject

getprop disabled_LaunchGithub [projectName]
   if LocalArray ["gitHubRepoExists"] then
      return false
   else
      return true
   end if
end disabled_LaunchGithub

getprop disabled_DisplayGithubInfo [projectName]
   if LocalArray ["gitHubRepoExists"] then
      return false
   else
      return true
   end if
end disabled_DisplayGithubInfo

getprop disabled_AddProjectWiki [projectName]
   if LocalArray ["gitHubRepoExists"] is false then return "true"
   
   -- put projectName & ".wiki" into wikiProjectName
   -- put library_FetchProjectFolder (wikiProjectName) into wikiFolder
   put LocalArray ["wikiFolder"] into wikiFolder
   if there is a folder wikiFolder then
      return "delete"
   else
      return false
   end if
end disabled_AddProjectWiki

getprop disabled_CreateLibraryPages [projectName]
   put LocalArray ["wikiFolder"] into wikiFolder
   if there is a folder wikiFolder then
      return false
   else
      return true
   end if
end disabled_CreateLibraryPages


--> Dev | Menu
-
on menu_GitStatus projectName
   display_GitProjectStatus projectName
end menu_GitStatus

on menu_FixRemote projectName
   put LocalArray ["gitFolder"] into gitFolder
   put merge ("git@github.com:LiveCodeWorld/[[projectName]].git") into newRemoteAddress
   put git_GetRemoteAddress (gitFolder) into oldRemoteAddress
   --
   put oldRemoteAddress
   put lcw_Ask ("Enter git remote address...", newRemoteAddress)into gitRemoteAddress
   --
   breakpoint
   -- git_SetRemoteOrigin gitRemoteAddress, gitFolder
   git_AddFolderToRemote gitFolder, gitRemoteAddress
   put the result into shellResult
   return shellResult
end menu_FixRemote

on menu_DisplayRemote
   put LocalArray ["gitFolder"] into gitFolder
   put git_GetRemoteAddress (gitFolder)
end menu_DisplayRemote

on menu_DisplayGithubInfo
   put LocalArray ["remoteAddress"] into remoteAddress
   put github_FindRepoName (remoteAddress) into repoName
   display_GitHubInfo repoName
end menu_DisplayGithubInfo

on _
end _

on menu_TestReadme
   put fedwiki_GitHubReadmePageJson ("lcw_Menus") into readmeJSON
   --
   display_FedwikiPageJson readmeJSON
end menu_TestReadme

on menu_DeleteInvisibleGitFolder arrayView
   put LocalArray ["gitFolder"] into gitFolder
   -- put the title_Text of displayView into LocalArray ["shortFolder"]
   set the itemdelimiter to slash
   put item -1 of gitFolder into projectName
   put merge ("Are you sure you want to remove the local git repository and all it's history of file changes from the local project '[[projectName]]'?") into someQuestion
   dispatch "lcw_AnswerSheet" to arrayView with someQuestion
   
   breakpoint -- be careful!
   git_DeleteInvisibleRepoFolder gitFolder
end menu_DeleteInvisibleGitFolder
