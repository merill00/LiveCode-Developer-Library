script "model_GIT"
--> MetaData
-
license: GPLv3
name: model_GIT
type: model
version: 0.1


--> Props
-
getprop git_IsActive [pDontUseGit]
   put the effective filename of the stack_Object of the target into someFile
   if pDontUseGit is true then
      put git_FindDotGitFolder (someFile) into checkoutFolder -- slightly faster (2 ticks)
   else
      put git_GetCheckoutFolder (someFile) into checkoutFolder -- uses GIT to check things (3 ticks)
   end if
   return checkoutFolder is not empty
end git_IsActive

getprop git_WithinCheckoutFolder [pDontUseGit]
   -- checks the script file ???
   -- always in git?
   put the script_File of the target into someFile
   if pDontUseGit is true then
      put git_FindDotGitFolder (someFile) into checkoutFolder -- slightly faster (2 ticks)
   else
      put git_GetCheckoutFolder (someFile) into checkoutFolder -- uses GIT to check things (3 ticks)
   end if
   return checkoutFolder is not empty
end git_WithinCheckoutFolder

getprop git_CheckoutFolder
   put the mainstack_File of the target  into objectFile
   try
      put git_GetCheckoutFolder (objectFile) into repoRootFolder
   catch e
      put git_FindDotGitFolder (someFile) into checkoutFolder -- slightly faster (2 ticks)
   end try
   return repoRootFolder
end git_CheckoutFolder

getprop git_Project
   put the git_CheckoutFolder of the target into gitRootFolder
   put git_GetProjectArray() into gitProjectArray
   put gitProjectArray [gitRootFolder]["project name"] into projectName
   return projectName
end git_Project

function git_Version
   git_ExecuteShell "git --version"
   put word 3 of the result into someVersion
   return someVersion
end git_Version


--> Working On
-
function git_GetRootFolder
   put pref_GetValue ("gitRootFolder") into gitRootFolder
   if gitRootFolder is empty then put revEnvironmentUserPluginsPath() & "/" into gitRootFolder -- a default
   return gitRootFolder
end git_GetRootFolder

command git_SetRootFolder gitRootFolder
   folder_Format gitRootFolder
   pref_SetValue "gitRootFolder", gitRootFolder
   return the result
end git_SetRootFolder


--> Working On | Init
-
command git_AddIgnore gitRootFolder
   text_AddTrailing gitRootFolder, slash
   put ".DS_Store" into gitIgnoreText
   put gitIgnoreText into url ("file:" & gitRootFolder & ".gitignore")
end git_AddIgnore

command git_RemoveDsStore
   put "find . -name .DS_Store -print0 | xargs -0 git rm -f --ignore-unmatch" into someShell
end git_RemoveDsStore

command git_InitFolder gitRootFolder, pDontAdd
   put the defaultfolder into oDefault
   set the defaultfolder to gitRootFolder
   
   git_AddIgnore gitRootFolder
   
   put git_PathToCommandLine() into gitPath
   put gitPath & "git init" into someShell
   put shell(someShell) into shellResult
   
   lcw_Notify shellResult
   
   get word 1 to 5 of shellResult
   if it is not "Initialized empty Git repository in" and it is not "Reinitialized existing Git repository in" then
      lcw_Notify shellResult
      set the defaultfolder to oDefault
      exit to top
   end  if
   
   if pDontAdd is not true then
      git_AddEverything gitRootFolder
      put the result into shellResult
      if shellResult is not empty then
         lcw_Notify shellResult
         breakpoint
         -- exit to top
      end if
   end if
   
   git_SetRootFolder gitRootFolder
   git_AddRootFolderToIndex gitRootFolder
   
   set the defaultfolder to oDefault
   return gitRootFolder
end git_InitFolder


--> Git | Model | Folder
-
function git_GetCheckoutFolder pFolderOrFile
   -- see also "git_WithinCheckoutFolder"
   put the defaultFolder into oFolder
   if pFolderOrFile is empty then
      put the defaultFolder into pFolderOrFile
   else
      if there is a file pFolderOrFile then
         set the itemdelimiter to "/"
         delete item -1 of pFolderOrFile
      end if
      set the defaultFolder to pFolderOrFile
   end if
   
   put git_Version() into someVersion
   if someVersion begins with "1.7." then
      put "git rev-parse --show-toplevel" into someShell
      put git_PathToCommandLine() into gitPath
      shell_BashParamEscape gitPath
      put gitPath before someShell
      put shell (someShell) into shellResult
      
      set the itemdelimiter to ":"
      if item 1 of shellResult = "fatal" then
         set the defaultFolder to oFolder
         return empty
      end if
      
      put word 1 to -1 of shellResult & "/" into gitRootFolder
   else
      put "git rev-parse --show-cdup" into someShell
      put git_PathToCommandLine() into gitPath
      shell_BashParamEscape gitPath
      put gitPath before someShell
      put shell (someShell) into shellResult
      
      set the itemdelimiter to ":"
      if item 1 of shellResult = "fatal" then
         set the defaultFolder to oFolder
         return empty
      end if
      
      put word 1 to -1 of shellResult into someChars
      put the number of chars of someChars/3 into upCount
      
      set the itemdelimiter to "/"
      put -1 - upCount into minusItem
      put (item 1 to minusItem of pFolderOrFile) into gitRootFolder
      put "/" after gitRootFolder
   end if
   
   -- put git_FindDotGitFolder (someFile) into gitRootFolder -- an older verison could use
   
   set the defaultFolder to oFolder
   return gitRootFolder
end git_GetCheckoutFolder


--> Git | Model
-
function git_GetProjectArray
   put lcw_FetchArray ("GitProjectArray.array") into gitProjectArray
   return gitProjectArray
end git_GetProjectArray

command git_SetProjectArray gitProjectArray
   lcw_StoreArray "GitProjectArray.array", gitProjectArray
end git_SetProjectArray


--> GIT | Model | Wrappers
-
command git_AddRootFolderToIndex gitRootFolder, pProjectName
   put git_GetCheckoutFolder (gitRootFolder) into gitRootFolder
   if gitRootFolder is empty then return "Error:  folder is not within a git repository"
   
   if pProjectName is empty then
      set the itemdelimiter to "/"
      put item -1 of gitRootFolder into pProjectName
   end if
   put git_GetProjectArray() into gitProjectArray
   put pProjectName into gitProjectArray [gitRootFolder]["project name"]
   git_SetProjectArray gitProjectArray
   return empty
end git_AddRootFolderToIndex

function git_ListProjectFolders
   put git_GetProjectArray() into gitProjectArray
   put keys(gitProjectArray) into folderIndex
   return folderIndex
end git_ListProjectFolders

command git_RemoveProject gitRootFolder
   put git_GetProjectArray() into gitProjectArray
   delete variable gitProjectArray [gitRootFolder]
   return keys(gitProjectArray)
end git_RemoveProject

function git_GetProject pGitRootFolder
   if pGitRootFolder is empty then put git_GetRootFolder() into pGitRootFolder
   put git_GetProjectArray() into gitProjectArray
   put gitProjectArray [gitRootFolder]["project name"] into projectName
   return projectName
end git_GetProject

command git_SetProject projectName
   put git_TranslateProjectName (projectName) into longGitFolder
   git_SetRootFolder longGitFolder
   return longGitFolder
end git_SetProject


--> Git | Files
-
command git_SetRelativePath @fileOrFolder
   if char 1 of fileOrFolder is not "/" then return false
   put git_GetRootFolder() into baseFolder
   file_SetRelativePath fileOrFolder, baseFolder
   shell_BashParamEscape fileOrFolder
   return true
end git_SetRelativePath

command git_SetFullPath @relativeFileOrFolder
   if char 1 of fileOrFolder is "/" then return false
   put git_GetRootFolder() into baseFolder
   put baseFolder & relativeFileOrFolder into relativeFileOrFolder
   return true
end git_SetFullPath

function git_LocalIgnoreFile
   put git_GetRootFolder() & ".gitignore" into ignoreFile
   return ignoreFile
end git_LocalIgnoreFile

function git_GlobalIgnoreFile
   put $HOME & "/.gitignore" into ignoreFile
   return ignoreFile
end git_GlobalIgnoreFile

function git_PathToCommandLine
   return empty
   
   put pref_GetValue ("gitPath") into gitPath
   return gitPath
   
   -- put "/opt/local/bin/" into gitPath
   return gitPath
end git_PathToCommandLine


--> GIT | Folders
-
function git_FindDotGitFolder someFile
   if someFile is empty then return false
   
   put someFile into folderAbove
   set the itemdelimiter to "/"
   put the directory into oDirectory
   repeat
      delete item -1 of folderAbove
      if folderAbove is empty then exit repeat
      
      set the directory to folderAbove
      put the folders into shortFolders
      if ".git" is among the lines of shortFolders then
         set the directory to oDirectory
         return folderAbove & "/.git"
      end if
   end repeat
   set the directory to oDirectory
   return empty
end git_FindDotGitFolder


--> Git | Model | Deps
-
function git_TranslateProjectName projectName
   put git_GetProjectArray() into gitProjectArray
   repeat for each key gitFolder in gitProjectArray
      if projectName = gitProjectArray [gitFolder]["project name"] then
         return gitFolder
      end if
   end repeat
   return empty
end git_TranslateProjectName
