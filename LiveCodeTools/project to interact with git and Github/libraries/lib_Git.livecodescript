script "lib_Git"
--> MetaData
-
name: lib_Git
type: library
copyright: David Bovill
license: GPLv3
version: 0.81

/*
A library for working with GIT.
It has not been tested on unix (should work fine), or Windows machines (beware of line ending issues).
*/


--> Events
-
-- on saveStackRequest
repeat for each line stackName in the openStacks
   if word 1 to 2 of stackName = "Display Array" and the label of stack stackName = "Git Status" then
      put the long id of group 1 of cd 1 of stack stackName into displayView
      put the displayed_GitCheckoutFolder of displayView into gitCheckoutFolder
      
      send "display_GitFolderStatus gitCheckoutFolder" to displayView in 0 seconds -- so we save first 
   end if
end repeat
pass saveStackRequest
end saveStackRequest


--> Working On
-
function git_ListModifiedFiles gitFolder
   put git_GetStatusArray (gitFolder) into statusArray
   get statusArray ["Changes not staged for commit:"]["modified"]
   put keys(it) into modifiedFileList
   sort modifiedFileList
   return modifiedFileList
end git_ListModifiedFiles

function git_ListUntrackedFiles gitFolder
   put git_GetStatusArray (gitFolder) into statusArray
   get statusArray ["Untracked files:"]["files"]
   put keys(it) into untrackedFileList
   -- sort untrackedFileList
   return untrackedFileList
end git_ListUntrackedFiles

function git_GetStatusArray gitCheckoutFolder
   if there is not a folder gitCheckoutFolder then
      breakpoint
      return empty
   end if
   put git_FetchStatusTable (gitCheckoutFolder) into gitStatusTable
   put git_ConstructStatusArray (gitStatusTable) into statusArray
   array_StripEmptyKeys statusArray
   return statusArray
end git_GetStatusArray

function git_GetRemoteAddress gitFolder
   put git_GetRemote (gitFolder) into shellResult
   --
   put line 1 of shellResult into fetchLine
   put token 1 of fetchLine into originWord
   put word 2 of fetchLine into remoteFetchAddress
   -- put word 3 of fetchLine into fetchBit -- "(fetch)"
   
   switch originWord
      case "fatal"
         -- fatal: Not a git repository (or any of the parent directories): .git
         return empty
      default
         /*
         origin	git@github.com:LiveCodeWorld/lcw_GIT.git (fetch)
         origin	git@github.com:LiveCodeWorld/lcw_GIT.git (push)
         */
         
         -- just going to assume they are the same for now
         return remoteFetchAddress
   end switch
end git_GetRemoteAddress

function git_GetRemote gitFolder
   -- show url of remote branch
   -- https://stackoverflow.com/questions/8816107/how-can-i-retrieve-the-remote-git-address-of-a-repo
   if gitFolder is empty then
      breakpoint
      return empty
   end if
   put "git remote -v" into someShell
   put shell_ExecuteAtRoot (someShell, gitFolder) into shellResult
   return shellResult
end git_GetRemote

command git_AddFolderToRemote gitFolder, gitRemoteAddress
   -- gitRemoteAddress = githubProjectArray ["ssh_url"] 
   git_AddRemoteOrigin gitRemoteAddress, gitFolder
   put the result into shellResult
   -- fatal: remote origin already exists.
   if word 1 of shellResult = "fatal" then
      breakpoint
   end if
   --
   git_PushFirstFolder gitFolder
   put the result into pushResult
   /*
   error: src refspec master does not match any.
   error: failed to push some refs to 'git@github.com:LiveCodeWorld/lcw_Media.git'
   */
   return pushResult
end git_AddFolderToRemote

command git_SetRemoteOrigin gitRemoteAddress, gitFolder
   put "git remote set-url origin" && gitRemoteAddress into someShell
   git_ExecuteShell someShell, gitFolder
   return the result
end git_SetRemoteOrigin

command git_AddRemoteOrigin gitRemoteAddress, gitFolder
   put "git remote add origin" && gitRemoteAddress into someShell
   git_ExecuteShell someShell, gitFolder
   return the result
end git_AddRemoteOrigin

command git_PushFirstFolder gitFolder
   -- make shure remote origin is set with "git_AddRemoteOrigin"
   put "git push -u origin master" into someShell
   git_ExecuteShell someShell, gitFolder
   return the result
end git_PushFirstFolder

command git_DeleteFile someFile, pForce
   /*
   git rm Documentation/\*.txt
         Removes all *.txt files from the index that are under the Documentation directory and any of its subdirectories.
   
   Note that the asterisk * is quoted from the shell in this example; this lets git, and not the shell, expand the pathnames of files and subdirectories under the Documentation/ directory.
   
   git rm -f git-*.sh
   Because this example lets the shell expand the asterisk (i.e. you are listing the files explicitly), it does not remove subdir/git-foo.sh.
   */
   
   if pForce is true then
      put "git rm --force [[shortFile]]" into shellTemplate
   else
      put "git rm [[shortFile]]" into shellTemplate
   end if
   git_ExecuteMergedShell shellTemplate, someFile
   put the result into shellResult
   return shellResult
   
   if shellResult begins with "fatal: pathspec '" or shellResult begins with "error:" then
      -- fatal: pathspec 'opn_Plugins/opn_Text/colour/swatch/Beach' did not match any files
      -- assume it is untracked (could check before) ?
      if there is a file someFile then
         delete file someFile
      end if
      -- beep
   end if
   return shellResult
end git_DeleteFile


--> GIT | List
-
function git_HashInfo someHash, gitFolder  
   put "git cat-file" into someShell
   
   -- if hashType = "blob" then -- will return the data of the file (else describes tree)
   -- put git_HashType (someHash, gitFolder) into hashType
   -- put space & hashType after someShell
   put space & "commit" after someShell
   
   put space & someHash after someShell
   put git_ExecuteShellCommand (someShell, gitFolder) into hashInfo
   return hashInfo
end git_HashInfo

function git_HashType someHash, gitFolder
   put "git cat-file -t" into someShell
   put space & someHash after someShell
   
   put git_ExecuteShellCommand (someShell, gitFolder) into hashType
   return hashType
end git_HashType

function git_Show treeish, gitFolder
   -- see also "git_ExportFileRevision"   
   put "git show" && treeish into someShell
   put git_ExecuteShellCommand (someShell, gitFolder) into shellResult
   return shellResult
end git_Show

function git_ListCommitHashes gitFolder
   put "git rev-list --all" into someShell
   put git_ExecuteShellCommand (someShell, gitFolder) into shellResult
   return shellResult
end git_ListCommitHashes

function git_List treeish, gitFolder
   -- more or less same as "ls"
   /*
   returns something like:
   
   100644 blob 7f111638f983c6a775fbb7eaf12131390e1962f4	.gitignore
   100755 blob a20f8ec233c42d28d68a80b9608d789a22d9cd34	opn.rev
   040000 tree 5ccc83a953bdf3261bbee2b28fad8f9260ea92b1	opn_Plugins
   */
   put "git ls-tree" && treeish into someShell
   put git_ExecuteShellCommand (someShell, gitFolder) into shellResult
   return shellResult
end git_List


--> GIT | Stack
-
function git_GetStackData stackObject, commitHash 
   /*
   -- this also works
   put the git_StackTreeish [commitHash] of stackObject into treeish
   put "git show" && kwote (treeish) into someShell
   */
   
   put the filename of stackObject into someFile
   put "git show" && commitHash & ":[[shortFile]]" into shellTemplate
   
   git_ExecuteMergedShell shellTemplate, someFile
   put the result into stackData
   return stackData
end git_GetStackData

command git_RevertStack someObject, pCommitHash
   breakpoint
   -- you may want to ssave and commit first
   -- revert to the stack on disk discrding any changes to the loaded (in memory) version.
   
   put the stack_Name of someObject into stackName
   put the git_RelativeFile of stack stackName into relativePath
   
   git_CheckoutRevision relativePath, pCommitHash
   put the result into shellResult
   
   -- revert stack stackName 
   stack_RevertLoaded stackName
   
   put the result into revertedArray
   put pCommitHash into revertedArray ["commitHash"]
   put relativePath into revertedArray ["relativePath"]
   put stackName into revertedArray ["stackName"]
   return revertedArray
end git_RevertStack


--> GIT | Export
-
command git_ExportFileRevision someFile, commitHash, pToFile
   /*
   fatal: Path 'libraries/lib_Git.livecodescript' exists, but not 'lib_Git.livecodescript'.
   Did you mean '53195e09c611ab9ae89d62e996737dbb0e294334:libraries/lib_Git.livecodescript' aka '53195e09c611ab9ae89d62e996737dbb0e294334:./lib_Git.livecodescript'?
   */
   
   set the itemdelimiter to slash
   put item -1 of someFile into shortFile
   -- put someFile into someFolder
   -- put empty into item -1 of someFolder
   
   put checkout_FindRoot (someFile) into gitRootFolder
   file_SetRelativePath someFile, gitRootFolder
   
   if pToFile is empty then
      set the itemdelimiter to "/"
      put the tempName & "/" into tempFolder
      folder_CreateNested tempFolder
      put tempFolder & shortFile into pToFile
   end if
   
   shell_BashParamEscape someFile
   put "git show" && commitHash & ":" & someFile into someShell
   put space & ">" && kwote (pToFile) after someShell
   
   put git_ExecuteShellCommand (someShell, gitRootFolder) into shellResult 
   return pToFile
end git_ExportFileRevision

-- command git_AddFile someFile
set the itemdelimiter to slash
put item -1 of someFile into shortFile
put someFile into someFolder
put empty into item -1 of someFolder

put "git add" && kwote (shortFile) into someShell

put git_ExecuteShellCommand (someShell, someFolder) into shellResult
return shellResult
end git_AddFile

command git_AddFile someFile
   put "git add -- [[shortFile]]" into shellTemplate
   git_ExecuteMergedShell shellTemplate, someFile
   return the result
end git_AddFile

command git_RemoveFile someFile
   put "git rm -- [[shortFile]]" into shellTemplate
   git_ExecuteMergedShell shellTemplate, someFile
   return the result
end git_RemoveFile

command git_ExecuteMergedShell shellTemplate, someFile
   -- replace "{" with "[[" in shellTemplate
   -- replace "}" with "]]" in shellTemplate
   
   set the itemdelimiter to slash
   put item -1 of someFile into shortFile
   put someFile into someFolder
   put empty into item -1 of someFolder
   
   shell_BashParamEscape shortFile
   put merge (shellTemplate) into someShell
   
  put git_ExecuteShellCommand (someShell, someFolder) into shellResult
   return shellResult
end git_ExecuteMergedShell


--> Git | Commit
-
command git_CommitFile someFile, someComment, pVerbose
   set the itemdelimiter to slash
   put item -1 of someFile into shortFile
   put someFile into someFolder
   put empty into item -1 of someFolder
   shell_BashParamEscape shortFile
   
   put "git commit" into someShell
   if pVerbose is not false then put space & "-v" after someShell
   put space & "-m" && "'" & someComment & "'" after someShell
   put space & "-- " && shortFile after someShell
   
   put git_ExecuteShellCommand (someShell, someFolder) into shellResult
   return shellResult
end git_CommitFile

command git_CommitChanges someComment, gitCheckoutFolder
   git_Commit someComment, gitCheckoutFolder, true, true
   return the result   
end git_CommitChanges

command git_Commit someComment, gitCheckoutFolder, pAddAll, pViewDiff   
   if someComment is empty then
      ask "Give a comment to this commit..." with "lcw commit"
      if it is empty then exit to top
      put it into someComment
   end if
   
   put "git commit" into someShell
   if pAddAll is not false then put space & "-a" after someShell
   if pViewDiff is not false then put space & "-v" after someShell
   put space & "-m '" & someComment & "'" after someShell
   
   put git_ExecuteShellCommand (someShell, gitCheckoutFolder) into shellResult
   return shellResult
end git_Commit


--> Git | File
-
function git_GetFileLog someFile, pCommitHash, pLogFormat, pHowMany, pAllBranches
   -- was "git_FileLog"
   -- http://stackoverflow.com/questions/3701404/list-all-commits-for-a-specific-file
   
   set the itemdelimiter to slash
   put item -1 of someFile into shortFile
   put someFile into someFolder
   put empty into item -1 of someFolder
   
   put "git log --follow" into someShell
   if pAllBranches is true then put space & "--all" after someShell
   if pLogFormat is empty then put "oneline" into pLogFormat
   put space & "--pretty=" & pLogFormat after someShell
   if pHowMany is not empty then put space & "-n" & pHowMany after someShell
   if pCommitHash is not empty then put space & pCommitHash after someShell
   
   if shortFile is not empty then put space & "--" && kwote (shortFile, "'") after someShell
   
   put git_ExecuteShellCommand (someShell, someFolder) into simpleLog
   return simpleLog
end git_GetFileLog

function git_StackHashLog someFile, pCommitHash, pLogFormat, pHowMany, pAllBranches
   return git_GetFileLog (someFile, pCommitHash, pLogFormat, pHowMany, pAllBranches)
   
   /*
   -- old code
   if pLogFormat is empty then put "oneline" into pLogFormat
   
   set the itemdelimiter to slash
   put item -1 of someFile into shortFile
   put someFile into someFolder
   put empty into item -1 of someFolder
   
   put "git log" into someShell
   put space & "--pretty=" & pLogFormat after someShell
   
   -- if pHowMany is empty then put "1" into pHowMany
   if pHowMany is not empty then put space &  "-n" & pHowMany after someShell
   
   if pCommitHash is not empty then put space & pCommitHash after someShell
   if shortFile is not empty then
      put space & "--" && kwote (shortFile) after someShell
   end if
   
   put git_ExecuteShellCommand (someShell, someFolder) into logText
   return logText
   */
end git_StackHashLog

function git_FindRepos
   put git_FindInvisibleGitFolders() into gitFiles
   set the itemdelimiter to slash
   repeat for each line gitFile in gitFiles
      put empty into item -1 of gitFile
      put gitFile & CR after gitFolders
   end repeat
   delete char -1 of gitFolders
   return gitFolders
end git_FindRepos

function git_FindInvisibleGitFolders
   -- very slow but works
   -- "Win32", "MacOS", "Linux", "iphone", "android", or "HTML5"
   switch the platform 
      case "macos" 
         -- put spotlight_FindFolders (".git", $HOME, true) into gitFiles -- can't find invisible folders
         put shell ("find $HOME -type d -name '.git' -print") into gitFiles
         break
      case "linux"
         put shell ("find $HOME -type d -name '.git' -print") into gitFiles
         break
      default
         -- use a Livecode directory crawler
         return empty
   end switch
   return gitFiles
end git_FindInvisibleGitFolders

command git_CloneAndReplaceFolder gitURL, someFolder
   set the cursor to watch
   set the itemdelimiter to slash
   put item -1 of someFolder into shortFolder
   
   if there is a folder someFolder then
      revDeleteFolder someFolder
   end if
   
   put someFolder into folderAbove
   delete item -1 of folderAbove
   folder_CreateNested folderAbove
   
   git_Clone gitURL, folderAbove, shortFolder
end git_CloneAndReplaceFolder

getprop git_RelativeFile [toWhat]
   put the stack_Object of the target into stackObject
   put the effective filename of stackObject into stackFile
   switch toWhat
      case "plugin folder"
         put revEnvironmentUserPluginsPath() & "/" into baseFolder
         break
      default -- case "checkout folder"
         put checkout_FindRoot (stackFile) into baseFolder
   end switch
   file_SetRelativePath stackFile, baseFolder
   return stackFile
end git_RelativeFile

function git_GetRelativeFile someFile
   put checkout_FindRoot (someFile) into baseFolder
   file_SetRelativePath someFile, baseFolder
   return someFile
end git_GetRelativeFile


--> Git | add
-
function git_UntrackedFiles
   put git_StatusArray() into someArray
   put someArray ["Untracked files:"] into untrackedFiles
   return untrackedFiles
end git_UntrackedFiles

command git_AddEverything someFolderInsideProject
   -- adds every file inside the git project
   -- you don't need to pass the root project folder (as you would with "git_AddFolder")
   -- does not seem to work with files marked as "Changes not staged for commit:"
   
   put "git add --all" into someShell
   put git_ExecuteShellCommand (someShell, someFolderInsideProject) into shellResult
   return shellResult
end git_AddEverything

command git_AddFolder folderToAdd
   -- this will work "cd to folder" then issue "git add ."
   put git_ExecuteShellCommand ("git add .", folderToAdd) into shellResult
   return shellResult
end git_AddFolder

command git_AddChanged someFile, pCheckoutFolder
   /*
   -u, --update
   Update only files that git already knows about, staging modified content for commit and marking
   deleted files for removal. This is similar to what "git commit -a" does in preparation for making a
   commit, except that the update is limited to paths specified on the command line. If no paths are
   specified, all tracked files in the current directory and its subdirectories are updated.
   */
   breakpoint
   -- not quite sure how / what this id doing
   
   put "git add --update" into someShell
   if someFile is not empty then
      shell_BashParamEscape someFile
      put space & "--" && someFile after someShell
   end if
   put git_ExecuteShellCommand (someShell, pCheckoutFolder) into shellResult
   return shellResult
end git_AddChanged


--> Git | Apply
-
function git_ApplyTestPatch gitUnifiedDiff, pGitRootFolder, pTestDirectory
   if pGitRootFolder is empty then put git_GetRootFolder() into pGitRootFolder
   if pTestDirectory is empty then
      put the tempName & "/" into pTestDirectory
      create folder pTestDirectory
   else
      folder_Format pTestDirectory
   end if
   
   -- finder_Reveal pTestDirectory
   
   put git_ConstructDiffArray (gitUnifiedDiff) into diffArray
   put diffArray ["header"]["original path"] into originalFile
   put diffArray ["header"]["new path"] into newFile
   
   set the itemdelimiter to "/"
   
   delete item 1 of originalFile
   put pGitRootFolder before originalFile
   delete item 1 of newFile
   put pGitRootFolder before newFile
   
   put item -1 of originalFile into originalShortFile
   put item -1 of newFile into newShortFile
   
   put pTestDirectory & "patch.txt" into patchFile
   put gitUnifiedDiff into url ("binfile:" & patchFile)
   -- put gitUnifiedDiff into url ("file:" & patchFile)
   
   put pTestDirectory & originalShortFile into originalTempFile
   put url ("binfile:" & originalFile) into url ("binfile:" & originalTempFile)
   -- put url ("file:" & originalFile) into url ("file:" & originalTempFile)
   
   shell_BashParamEscape patchFile
   shell_BashParamEscape pTestDirectory
   
   put the number of items of pGitRootFolder into pNum
   -- this works I think but complains of "patch unexpectedly ends in middle of line"
   -- put merge("patch --reverse --strip=[[pNum]] --directory=[[pTestDirectory]] --input=[[patchFile]] -o [[pUpdatedFile]]") into someShell
   put merge("patch --reverse --strip=[[pNum]] --directory=[[pTestDirectory]] --input=[[patchFile]]") into someShell
   
   -- put merge("git apply directory=[[pTestDirectory]] [[patchFile]]") into someShell
   -- put merge("git apply directory=[[pTestDirectory]] originalShortFile.patch") into someShell
   
   put shell (someShell) into shellResult
   
   put url ("file:" & originalTempFile) into reversePatchedResult
   
   put pTestDirectory & originalShortFile & ".orig" into originalBackupFile
   put url ("file:" & originalBackupFile) into originalBackupResult
   
   return reversePatchedResult
end git_ApplyTestPatch

command git_ApplyPatchFile patchFile, pOriginalFile, pUpdatedFile
   /*
   --directory=<root>
   Prepend <root> to all filenames. 
   If a "-p" argument was also passed, it is applied before prepending the new root.
   
   For example, a patch that talks about updating a/git-gui.sh to b/git-gui.sh 
   can be applied to the file in the working tree modules/git-gui/git-gui.sh 
   by running git apply --directory=modules/git-gui.
   */
   
   shell_BashParamEscape patchFile
   
   if pUpdatedFile is empty then
      put "-" into pUpdatedFile
   else
      shell_BashParamEscape pUpdatedFile
   end if
   
   if pOriginalFile is empty then
      put merge("patch [[pOriginalFile]] -i [[patchFile]]") into someShell
   else
      shell_BashParamEscape pUpdatedfile
      put merge("git apply directory=[[testDirectory]] [[patchFile]]") into someShell
      --directory=modules/git-gui
      end if
   put shell (someShell) into shellResult
   return shellResult
end git_ApplyPatchFile

function git_ConstructDiffArray unifiedDiff
   local diffArray, headerA, parentNum, oStartNum, oEndNum, nStartNum, nEndNum, pBitNum
   /*
   Chunk header format is modified to prevent people from accidentally feeding it to patch -p1. Combined diff format was created for review of merge commit changes, and was not meant for apply. The
   change is similar to the change in the extended index header:
   
   @@@ <from-file-range> <from-file-range> <to-file-range> @@@
   There are (number of parents + 1) @ characters in the chunk header for combined diff format.
   Unlike the traditional unified diff format, which shows two files A and B with a single column that has - (minus -- appears in A but removed in B), + (plus -- missing in A but added to B), or " " (space
   -- unchanged) prefix, this format compares two or more files file1, file2,... with one file X, and shows how X differs from each of fileN. One column for each of fileN is prepended to the output line to
   note how X's line is different from it.
   */
   
   -- @@ -1,16 +1,36 @@
   git_StripDiffHeader unifiedDiff, headerA
   put headerA into diffArray ["header"]
   repeat for each line someLine in unifiedDiff
      git_DeconstructAtLine someLine, parentNum, oStartNum, oEndNum, nStartNum, nEndNum
      if the result is true then
         if pBitNum is not empty then
            put patchChunk into diffArray ["data"][pBitNum]["patchChunk"]
            put empty into patchChunk
         end if
         add 1 to pBitNum
         put parentNum into diffArray ["data"][pBitNum]["parentNum"]
         put oStartNum into diffArray ["data"][pBitNum]["oStartNum"]
         put oEndNum into diffArray ["data"][pBitNum]["oEndNum"]
         put nStartNum into diffArray ["data"][pBitNum]["nStartNum"]
         put nEndNum into diffArray ["data"][pBitNum]["nEndNum"]
         -- put someLine & CR after patchChunk
      else
         put someLine & CR after patchChunk
      end if
   end repeat
   put patchChunk into diffArray ["data"][pBitNum]["patchChunk"]
   
   return diffArray
end git_ConstructDiffArray

private command git_DeconstructAtLine @someLine, @parentNum, @oStartNum, @oEndNum, @nStartNum, @nEndNum
   put word 1 of someLine into testFirst
   replace "@" with empty in testFirst
   if testFirst is not empty then return false -- a bug or problem in the format
   
   put word 1 of someLine into testFirst
   put wordoffset (testFirst, someLine, 1) into endWordNum
   if endWordNum = 0 then return false -- a bug or problem in the format
   
   -- first char is a space for some reason - thought it should be a CR (ie new line)??? 
   put word 1 to (endWordNum + 1) of someLine into diffBit
   delete char 1 to (the number of chars of diffBit) of someLine
   -- delete word 1 to (endWordNum + 1) of someLine
   
   -- it's OK - lets deconstruct
   put the number of chars of testFirst - 1 into parentNum
   
   -- put token 2 of diffBit into minusToken
   put token 3 of diffBit into oStartNum
   -- put token 4 of diffBit into firstComma
   put token 5 of diffBit into oEndNum
   
   -- put token 6 of diffBit into plusToken
   put token 7 of diffBit into nStartNum
   -- put token 8 of diffBit into secondComma
   put token 9 of diffBit into nEndNum
   return true
end git_DeconstructAtLine

private command git_DeconstructOtherLine @someLine, @diffArray
   switch char 1 of someLine
      case "+"
         -- an added line
         delete char 1 of someLine
         put someLine into diffArray ["added"]
         break
      case "-"
         -- an deleted line
         delete char 1 of someLine
         put someLine into diffArray ["deleted"]
         break
      case " "
         -- line not changed
         delete char 1 of someLine
         put someLine into diffArray ["unchanged"]
         break
   end switch
end git_DeconstructOtherLine

command git_StripDiffHeader @unifiedDiff, @headerA   
   /* -p option produces is slightly different from the traditional diff format.
   1.  It is preceded with a "git diff" header, that looks like this:  diff --git a/file1 b/file2
   The a/ and b/ filenames are the same unless rename/copy is involved.
   */
   
   put line 1 of unifiedDiff into diffCommand
   put diffCommand into headerA ["diff command"]
   delete line 1 of unifiedDiff
   
   /*
   2.  It is followed by one or more extended header lines:
   
   old mode <mode>
   new mode <mode>
   deleted file mode <mode>
   new file mode <mode>
   copy from <path>
   copy to <path>
   rename from <path>
   rename to <path>
   similarity index <number>
   dissimilarity index <number>
   index <hash>..<hash> <mode>
   */
   repeat
      put line 1 of unifiedDiff into someLine
      if word 1 of someLine = "---" then exit repeat
      
      put word 1 of someLine into gitProp
      put word 2 to -1 of someLine into gitValue
      put gitValue into headerA [gitProp]
      delete line 1 of unifiedDiff
      if unifiedDiff is empty then return false -- should not reach this!
   end repeat
   
   diff_StripHeader unifiedDiff, headerA
end git_StripDiffHeader


--> Diff
-
command diff_StripHeader @unifiedDiff, @headerA
   /*
   --- /path/to/original ''timestamp''
   +++ /path/to/new      ''timestamp''
   
   --- a/opn_Plugins/opn_Text/rev/object/libOPN_Menus/card_1560/script.txt
   +++ b/opn_Plugins/opn_Text/rev/object/libOPN_Menus/card_1560/script.txt
   */
   
   -- put word 1 line 1 of unifiedDiff into originalPath
   -- put word 2 line 1 of unifiedDiff into timeStamp
   put line 1 of unifiedDiff into originalPath
   delete word 1 of originalPath
   put originalPath into headerA ["original path"]
   
   put line 2 of unifiedDiff into newPath
   delete word 1 of newPath
   put newPath into headerA ["new path"]
   
   delete line 1 to 2 of unifiedDiff
end diff_StripHeader


--> Git | Script | Diff
-
getprop git_ScriptDiff [pStripGitHeaders]
   -- put the script_RelativeFile of the target into someFile
   put the script_File of the target into someFile
   put git_GetDiff (someFile, pStripGitHeaders) into unifiedDiff
   if word 1 to 3 of unifiedDiff = "fatal: ambiguous argument" then
      if file_IsWithinOpn (someFile) then
         git_AddFile someFile
         put git_GetDiff (someFile, pStripGitHeaders) into unifiedDiff
      end if
   end if
   return unifiedDiff
end git_ScriptDiff

function git_GetDiff someFile, pStripGitHeaders
   /*
   I use to git diff to generate patches that can be applied to remote server to update a project.
   Locally, I run:
   *    git diff --no-prefix HEAD~1 HEAD > example.patch
   Upload example.patch to remote server and run:
   *    patch --dry-run -p0 < example.patch
   If dry-run is successful, I run:
   *    patch -p0 < example.patch
   */
   
   put "git diff" into someShell
   put space & "-u" after someShell
   if pStripGitHeaders is true then put space & "--no-prefix" after someShell
   -- put space & "--text" after someShell  -- Treat all files as text.
   -- put space & "--ignore-space-at-eol" after someShell
   
   git_SetRelativePath someFile
   put space & someFile after someShell
   
   put git_ExecuteShellCommand (someShell) into shellResult
   -- text_UnixToMac shellResult
   return shellResult
end git_GetDiff


--> Git | Script | Revision
-
getprop git_RevisionScript [gitHashOrNum]
   put the script_RelativeFile of the target into objectFile
   put git_GetRevisionScript (objectFile, gitHashOrNum) into someScript
   return someScript
end git_RevisionScript

getprop git_LastCommit
   put the script_File of the target into someFile
   put git_ShowFileHead (someFile) into previousExport
   return previousExport
end git_LastCommit 

getprop git_LastScript [pBackNum]
   put the script_File of the target into relativeFile
   put git_GetLastRevision (relativeFile, pBackNum) into revisionScript
   return revisionScript
end git_LastScript

function git_GetLastRevision relativePath, gitHashOrNum
   /*
   drdave: “ is shell substitution operator. Shell runs the command inside and pastes its stdout over it and then runs the whole command.
   <drdave>	k
   <Ilari>	drdave: And that first one had one ' where there should have been `
   <drdave>	I'm going to need to pass an actual path somewhere - can you give us an example with a path in it?
   <Ilari>	drdave: For instance 'echo foo`echo bar`baz' prints 'foobarbaz'.
   <Ilari>	drdave: git show `git rev-list -1 HEAD -- builtin-mv.c`^:builtin-mv.c
   <drdave>	thanks.... will wrap my head round it :) Not quite got logic of shell substitution operator yet :)
   <Ilari>	drdave: There's also another substitution operator: '$()'. That one can also be nested (and presumably has some other differences as well).
   <drdave>	k
   <drdave>	How would git show `git rev-list -1 HEAD -- builtin-mv.c`^:builtin-mv.c be written long hand then
   <Ilari>	Quite useful to have nested substitutions when playing with commit-tree...
   <drdave>	true
   <drdave>	ah... think I'm getting it - its a sort of merge
   <wshimmy>	arg
   
   <Ilari>	drdave: On my git.git copy (bit out of date), the rev-list resolves to 5aed3c6ab834367292bd7a9b0894177a07afd910, 
   so the shell runs 'git show 5aed3c6ab834367292bd7a9b0894177a07afd910^:builtin-mv.c', 
   which is equivalent to 'git show c8ba6b1b199bf00f227e8fdad4adb5a2147c8160:builtin-mv.c', 
   which resolves to 'git show bce9959293e30925c4b16c40ac33a3f2e0474e30'
   
   <Gitbot>	[git 5aed3c6ab]: http://tinyurl.com/q8ac93 -- builtin-mv.c: check for unversionned files before looking at the destination.
   <drdave>	everything between `xxxxxx` gets run and subsitituted - then the outer shell command is run - something like that ?
   <Ilari>	drdave: Yes.
   */
   
   git_SetRelativePath relativePath
   
   if gitHashOrNum is empty then put 0 into gitHashOrNum
   if gitHashOrNum = 0 then
      put merge("git show HEAD:[[relativePath]]") into someShell
   else if gitHashOrNum = 1 then
      -- put git_GetLastCommitHash(relativePath) into lastCommitHash -- seems really slow
      put merge("git show `git rev-list -1 HEAD -- [[relativePath]]`^:[[relativePath]]") into someShell
   else if gitHashOrNum is a number and gitHashOrNum < 99 then
      put git_GetCommitFileHash (relativePath, gitHashOrNum) into someHash
      put merge("git show [[someHash]]:[[relativePath]]") into someShell
   else
      -- assume it is a hash
      put merge("git show [[gitHashOrNum]]:[[relativePath]]") into someShell
   end if
   
   /*
   put "git show" into someShell
   put space & "HEAD~" & pBackNum & ":" & kwote(relativePath) after someShell
   */
   
   -- display_Lines someShell
   put git_ExecuteShellCommand (someShell) into shellResult
   -- text_UnixToMac shellResult
   return shellResult
end git_GetLastRevision

function git_HashRevision relativePath, someHash
   git_SetRelativePath relativePath
   
   put merge("git show [[someHash]]:[[relativePath]]") into someShell
   put git_ExecuteShellCommand (someShell) into shellResult
   -- text_UnixToMac shellResult
   return shellResult
end git_HashRevision

function git_ShowFileHead someFile
   git_SetRelativePath someFile
   shell_BashParamEscape someFile
   put merge("git show HEAD:[[someFile]]") into someShell
   put git_ExecuteShellCommand (someShell) into shellResult
   -- text_UnixToMac shellResult
   return shellResult
end git_ShowFileHead

function git_GetRevisionScript relativePath, gitHashOrNum
   if gitHashOrNum is a number then
      return git_GetLastRevision (relativePath, gitHashOrNum)
   else if gitHashOrNum is empty then
      put empty into pGitHash
      put empty into pBeforeTipNum
   else
      put gitHashOrNum into pGitHash
      put empty into pBeforeTipNum
   end if
   
   put merge("git show") into someShell
   put space & git_ConstructFileRevision(relativePath, pGitHash, pBeforeTipNum) after someShell
   
   -- display_Lines someShell, "Shell command"
   put git_ExecuteShellCommand(someShell) into oldScript
   text_UnixToMac oldScript
   return oldScript
end git_GetRevisionScript

function git_ConstructFileRevision objectFile, pGitHash, pBeforeTipNum
   if pGitHash is not empty then
      return pGitHash & ":" & kwote(objectFile)
   else if pBeforeTipNum is a number then
      return kwote(objectFile) & "~" & pBeforeTipNum
   else
      return "master:" & kwote(objectFile)
   end if
end git_ConstructFileRevision

command git_SparseCheckOut
   /*
   is there a way to clone/pull only one directory from remote?
   not really possible
   after you fetch all of the history, then with some effort you can checkout only one directory look for sparse checkout if the latter interests you
      */
end git_SparseCheckOut


--> Git | Props
-
getprop script_CommitComment
   put the long id of the target into scriptObject
   put autoCommitComment (scriptObject) into commitComment
   return commitComment
end script_CommitComment

getprop git_FileIsTracked
   -- not sure the fastest way to do this
   -- timer_Start "git_FileIsTracked"
   put the git_CheckoutFolder of the target into checkoutFolder
   -- put git_GetFileLog (someFile) is empty into someBoolean -- takes about a second
   -- timer_Stop "git_FileIsTracked"
   return someBoolean
end git_FileIsTracked

setprop git_FileIsTracked someBoolean
   put the script_File of the target into someFile
   if someBoolean is true then
      git_AddFile someFile
   else
      -- can't undo it?
   end if
end git_FileIsTracked

getprop stack_IsLoaded
   put the stack_Object of the target into stackObject
   put stack_GetIsLoaded (stackObject) into someBoolean
   return someBoolean
end stack_IsLoaded

getprop stack_IsUsed
   put the stack_Name of the target into stackName
   put stack_GetIsUsed (stackName) into someBoolean
   return someBoolean
end stack_IsUsed

getprop git_MetaDataArray
   put the git_CommitHash of the target into commitHash
   put git_BlobHashInfo (commitHash) into logText
   put git_ExtractLogMetadataArray (logText) into metadataArray
   return metadataArray
end git_MetaDataArray

getprop git_LastLog
   put the long id of the target into someObject
   get git_GetRevisionHistory (empty, someObject)
   return it
end git_LastLog

getprop git_StackHashLog [commitHash]
   put the git_RelativeFile of the target into relativeFile
   put git_StackHashLog (relativeFile, commitHash) into gitLog
   return gitLog
end git_StackHashLog

getprop git_CommitHash [pBackNum]
   put the git_RelativeFile of the target into relativePath
   put git_GetCommitFileHash (relativePath, pBackNum) into commitHash
   return commitHash
end git_CommitHash

getprop git_ScriptHash [pBackNum]
   -- will often be commited at the same time as the stack
   -- so often eqauls git_CommitHash
   
   put the script_RelativeFile of the target into relativePath
   put git_GetCommitFileHash (relativePath, pBackNum) into commitHash
   return commitHash
end git_ScriptHash

getprop git_ScriptFileLog
   put the script_File of the target into someFile
   put git_GetFileLog (someFile) into someLog
   return someLog
end git_ScriptFileLog

getprop git_GetFileLog
   put the stack_Name of the target into stackName
   put the effective filename of stack stackName into someFile
   put git_GetFileLog (someFile) into someLog
   return someLog
end git_GetFileLog

getprop git_BlobHash [commitHash]
   put the git_StackTreeish [commitHash] of the target into stackTreeish
   put git_BlobHashFromTreeish (stackTreeish) into blobHash
   return blobHash
end git_BlobHash

getprop git_StackTreeish [commitHash]
   put the git_RelativeFile of the target into relativePath
   if commitHash is empty then
      return relativePath
   else
      return commitHash & ":" & relativePath
   end if
end git_StackTreeish

getprop git_RevisionStack [gitHashOrNum]
   put the stack_Object of the target into stackObject
   put the filename of stackObject into someFile
   if someFile is empty then return empty
   
   put git_GetRootFolder() into baseFolder
   file_SetRelativePath someFile, baseFolder
   put git_GetLastRevision (someFile, gitHashOrNum) into binaryStackData
   return binaryStackData
end git_RevisionStack


--> Git
-
command git_Pull
   -- TO PULL A new BRANCH FROM A REMOTE REPOSITORY
   -- put merge("git pull origin [[remoteBranch]]:[[newLocalBranch]]") into someShell
   -- put "git pull" into someShell
   -- put "git pull origin master" into someShell
   put git_CurrentBranchName() into currentBranchName
   put "git pull origin" && kwote (currentBranchName) into someShell
   
   put git_ExecuteShellCommand (someShell) into shellResult
   display_Lines shellResult, someShell
   put the result into displayView
   set the menu_Title of displayView to "Global | Git | Pull | Menu"
end git_Pull

command git_CommitScriptFile scriptObject
   put the script of scriptObject into someScript
   put autoCommitComment (scriptObject) into pCommitComment
   if the optionkey is "Down" then
      put lcw_Ask ("Describe your changes...", pCommitComment, false) into pCommitComment
   end if
   file_CreateBinary someScript, scriptFile
   return scriptFile
end git_CommitScriptfile

command git_RestoreFile relativePath
   /*
   $ git checkout HEAD^ path/to/file
   replaces path/to/file by the contents it had in the commit HEAD^, 
   and also updates the index to match. It does not change branches.
   */
   
   put "git checkout HEAD^" && kwote(relativePath) into someShell
   
   git_SetFull
   put git_GetCheckoutFolder (someFile) into pGitRootFolder
   put git_ExecuteShellCommand (someShell, pGitRootFolder) into shellResult
   return shellResult
end git_RestoreFile

command git_CheckoutRevision relativePath, commitHash
   -- check out and old version of a file or entire folder
   -- put "git checkout" && commitHash && kwote(relativePath) into someShell
   put git_ConstructCheckoutCommand (relativePath, commitHash) into someShell
   put git_ExecuteShellCommand (someShell) into shellResult
   return shellResult
end git_CheckoutRevision

function git_ConstructCheckoutCommand relativePath, commitHash
   -- needs to be called from git root
   -- or relatveipath needs to be relative to current folder
   -- git checkout 0f3165fea876ebfa537e5a16f5c505a846e2c7ee -- opn_Plugins/opn_Text/rev/template/
   shell_BashParamEscape relativePath
   put "git checkout" && commitHash && "--" && relativePath into someShell
   return someShell
end git_ConstructCheckoutCommand


--> GIT | Stash
-
function git_ListStashes
   put git_StashArray() into stashArray
   return keys(stashArray)
end git_ListStashes

function git_StashArray
   /*
   List the stashes that you currently have. 
   Each stash is listed with its name (e.g. stash@{0} is the latest stash, stash@{1}  is the one before, etc.), 
   the name of the branch that was current when the stash was made, 
   and a short description of the commit the stash was based on.
   
   stash@{0}: WIP on submit: 6ebd0e2... Update git-stash documentation
   stash@{1}: On master: 9cc0589... Add git-stash
   
   The command takes options applicable to the git log command to control what is shown and how. See git-log(1).
   */
   
   git_ExecuteShell "git stash list"
   put the result into gitResult
   repeat for each line stashLine in gitResult
      set the itemdelimiter to ":"
      put item 1 of stashLine into stashName
      put word 1 to -1 of item 2 of stashLine into stashArray [stashName]["stashBranch"]
      put word 1 to -1 of item 2 of stashLine into stashArray [stashName]["stashComment"]
   end repeat
   return stashArray
end git_StashArray


--> GIT
-
function git_CurrentBranchName checkoutFolder
   put git_ExecuteShellCommand ("git branch", checkoutFolder) into shellResult
   repeat for each line someLine in shellResult
      if word 1 of someLine = "*" then
         return word 2 to -1 of someLine
      end if
   end repeat
   return empty
end git_CurrentBranchName

function git_SearchRepository grepString
   put "git grep --text -i" && kwote (grepString, "'") into someShell
   put git_ExecuteShellCommand (someShell) into shellResult
   return shellResult
end git_SearchRepository

function git_Searchlog @searchString
   /*
   -S<string>
   Look for differences that introduce or remove an instance of <string>. Note that this is different
   than the string simply appearing in diff output; see the pickaxe entry in gitdiffcore(7) for more
   details.
   */
   
   if searchString is empty then put lcw_Ask("Search log for string...") into searchString
   put "git log --pretty=oneline -S" & kwote(searchString, "'") into someShell
   -- display_Lines someShell
   set the cursor to watch
   put git_ExecuteShellCommand(someShell) into shellResult
   return shellResult
end git_Searchlog


--> GIT | Files
-
command git_RenameFile sourceFile, destFile
   -- will do folders as well
   put sourceFile into bashSourceFile
   shell_BashParamEscape bashSourceFile
   put destFile into bashDestFile
   shell_BashParamEscape bashDestFile
   
   put "git mv" into someShell
   put space & bashSourceFile after someShell
   put space & bashDestFile after someShell
   
   put git_ExecuteShellCommand(someShell) into shellResult
   
   if shellResult is not empty then lcw_Notify shellResult, true
   if shellResult begins with "fatal: " or shellResult begins with "error:" then
      -- assume it is untracked (could check before) ?
      if there is a file sourceFile and there is not a file destFile then
         rename file sourceFile to destFile
      end if
   end if
   return shellResult
end git_RenameFile

command git_RenameFolder sourceFolder, destFolder
   folder_Format sourceFolder
   folder_Format destFolder
   git_SetRelativePath sourceFolder
   git_SetRelativePath destFolder
   
   put "git mv" into someShell
   -- put space &  "-f" after someShell -- Force renaming or moving of a file even if the target exists
   -- put space &  "-n" after someShell -- Do nothing; only show what would happen
   
   -- put space & kwote (sourceFolder) after someShell
   -- put space & kwote (destFolder) after someShell
   put space & sourceFolder after someShell
   put space & destFolder after someShell
   
   put git_ExecuteShellCommand(someShell) into shellResult
   if shellResult is not empty then lcw_Notify shellResult, true
   return shellResult
end git_RenameFolder

command git_DeleteFolder someFolder, pForce
   /*
   git rm Documentation/\*.txt
   Removes all *.txt files from the index that are under the Documentation directory and any of its subdirectories.
   
   Note that the asterisk * is quoted from the shell in this example; this lets git, and not the shell, expand the pathnames of files and subdirectories under the Documentation/ directory.
   
   git rm -f git-*.sh
   Because this example lets the shell expand the asterisk (i.e. you are listing the files explicitly), it does not remove subdir/git-foo.sh.
   */
   
   if there is not a folder someFolder then return "Error, folder does not exists!"
   put someFolder into bashFolder
   shell_BashParamEscape bashFolder
   
   if pForce is true then
      put merge("git rm -fr -- [[bashFolder]]") into someShell
   else
      put merge("git rm -r -- [[bashFolder]]") into someShell
   end if
   put git_ExecuteShellCommand(someShell) into shellResult
   
   if shellResult begins with "fatal: pathspec '" or shellResult begins with "error:" then
      -- fatal: pathspec 'opn_Plugins/opn_Text/colour/swatch/Beach' did not match any files
      -- assume it is untracked (could check before) ?
      if there is a folder someFolder then
         -- delete folder someFolder
         revDeleteFolder someFolder
      end if
      -- beep
   end if
   
   return shellResult
end git_DeleteFolder

command git_DeleteInvisibleRepoFolder gitFolder
   put gitFolder & ".git" into invisibleRepoFolder
   if there is not a folder invisibleRepoFolder then
      breakpoint
      return empty
   end if
   
   breakpoint -- check it does not delete the whole project???
   revDeleteFolder invisibleRepoFolder
   return invisibleRepoFolder
end git_DeleteInvisibleRepoFolder
   
function git_ScriptFile shortFileBit
   put git_GetRootFolder() into rootFolder
   return repository_ConstructScriptPath(shortFileBit, rootFolder)
end git_ScriptFile

command git_NormalizeTreeish @treeish
   set the itemdelimiter to ":"
   put item 1 of treeish into someHash
   put item 2 of treeish into someFile
   if someFile is not empty then
      git_SetRelativePath someFile
      shell_BashParamEscape someFile
      put someFile into item 2 of treeish
   end if
end git_NormalizeTreeish


--> GIT | Hash
-
function git_GetLastCommitHash relativePath
   -- seems slow
   shell_BashParamEscape relativePath
   put merge("git rev-list -1 HEAD -- [[relativePath]]") into someShell
   put git_ExecuteShellCommand(someShell) into shellResult
   return shellResult
end git_GetLastCommitHash

function git_BlobHashFromTreeish treeish
   put "git rev-parse" into someShell
   put space & "--verify" after someShell
   put space & treeish after someShell
   put git_ExecuteShellCommand(someShell) into shellResult
   return shellResult
end git_BlobHashFromTreeish

function git_CommitLogEntry someHash
   -- needs to be a commit, or maybe a tree?
   put "git log --stat -n1" into someShell
   put space & someHash after someShell
   put git_ExecuteShellCommand(someShell) into logText
   return logText
end git_CommitLogEntry

function git_CommitedFiles commitHash, pHashOutline
   -- put merge("git diff --name-only [[commitHash]]^ [[commitHash]]") into someShell
   put "git show --name-status --format=%b" && commitHash into someShell
   put git_ExecuteShellCommand(someShell) into logText
   -- display_Lines logText
   
   repeat for each line relativeFile in logText
      put word 1 of relativeFile into modType
      if modType is among the items of "M,A,D" then
         delete word 1 of relativeFile
         if pHashOutline is true then
            put kwote(commitHash & ":" & relativeFile) into treeish
            put git_BlobHashFromTreeish (treeish) into blobHash
            put html_ConstructNameLink(relativeFile, blobHash) & CR after commitedFiles
         else
            put relativeFile & CR after commitedFiles
         end if
      end if
   end repeat
   delete char -1 of commitedFiles
   return commitedFiles
end git_CommitedFiles

function git_GetCommitFileHash relativePath, pBackNum
   if pBackNum is empty then put "1" into pBackNum
   put git_ReverseFileHashes (relativePath, pBackNum) into shellResult
   return line - 1 of shellResult
end git_GetCommitFileHash

function git_ListFiles
   put "git ls-files --stage" into someShell
   put git_ExecuteShellCommand(someShell) into shellResult
   return shellResult
end git_ListFiles

function git_ReverseFileHashes relativePath, pMaxNum
   if pMaxNum is empty then put "10" into pMaxNum
   put merge("git rev-list -[[pMaxNum]] HEAD --") && kwote(relativePath) into someShell
   put git_ExecuteShellCommand(someShell) into shellResult
   return shellResult
end git_ReverseFileHashes

command git_HardReset
   put "git reset --hard HEAD" into someShell
   put git_ExecuteShellCommand (someShell) into shellResult
   return shellResult
end git_HardReset


--> Git | Status
-
function git_StatusArray
   put git_StatusOutline() into someOutline
   put array_FromOutline (someOutline) into someArray
   return someArray
end git_StatusArray

function git_StatusOutline
   put git_FetchStatusTable() into gitTable
   put git_ConstructStatusOutline (gitTable) into someOutline
   return someOutline
end git_StatusOutline

function git_FetchStatusTable pCheckoutFolder
   git_ExecuteShell "git status", pCheckoutFolder
   return the result
end git_FetchStatusTable


--> Git | Log
-
function git_GetRevisionHistory gitHash, pObject, pShowDiff
   put "git log --stat -n1" into someShell
   if pShowDiff is not false then put space & "-p" after someShell
   -- put space & "--graph" after someShell
   
   if gitHash is not empty then put space & gitHash after someShell
   if pObject is not empty then
      put the script_RelativeFile of pObject into objectFile
      put space & kwote(objectFile) after someShell
   end if
   
   put git_ExecuteShellCommand(someShell) into logText
   return logText
end git_GetRevisionHistory

function git_LogFormats
   /*
   --pretty[=<format>]
   Pretty-print the contents of the commit logs in a given format, where <format> can be one of oneline,
   short, medium, full, fuller, email, raw and format:<string>. When omitted, the format defaults to
   medium.
   
   Note: you can specify the default pretty format in the repository configuration (see git-config(1)).
   */
   return "oneline,short,medium,full,fuller,email,raw"
end git_LogFormats

function git_ExtractLogMetadataArray logText
   set the itemdelimiter to ":"
   put word 2 of line 1 of logText into metadataArray ["commitHash"]
   put word 1 to -1 of item 2 of line 2 of logText into metadataArray ["commitAuthor"]
   put word 1 to -1 of item 2 of line 3 of logText into metadataArray ["commitDate"]
   
   return metadataArray
end git_ExtractLogMetadataArray


--> GIT | Treeish
-
function git_ConstructTreeish relativePath, gitHashOrNum
   put merge("git show [[gitHashOrNum]]:[[relativePath]]") into someShell
   return someShell
end git_ConstructTreeish


--> GIT | Execute
-
function git_ExecuteShellCommand someShell, pCheckoutFolder
   git_ExecuteShell someShell, pCheckoutFolder
   return the result
end git_ExecuteShellCommand

command git_ExecuteShell someShell, pGitRootFolder
   put git_PathToCommandLine() into gitPath
   if pGitRootFolder is empty then put git_GetRootFolder() into pGitRootFolder
   put shell_ExecuteAtRoot (someShell, pGitRootFolder, gitPath) into shellResult
   return word 1 to -1 of shellResult
end git_ExecuteShell


--> GIT | Projects
-
command git_Clone gitURL, pNewRepoFolder, pFolderName
   put defaultfolder into oFolder
   if pNewRepoFolder is empty then
      answer folder "Choose Git Folder" with git_GetRootFolder()
      if the result is "Cancel" then exit to top
      put it into pNewRepoFolder
   else
      folder_CreateNested pNewRepoFolder
   end if
   
   set the defaultfolder to pNewRepoFolder   
   put "git clone" && gitURL into someShell
   if pFolderName is not empty then
      shell_BashParamEscape pFolderName
      put space && pFolderName after someShell
   end if
   put git_ExecuteShellCommand (someShell, pNewRepoFolder) into shellResult
   if shellResult is not empty then
      lcw_Notify shellResult, true
   end if
   set the defaultfolder to oFolder   
   return shellResult
end git_Clone

command git_CloneAndFetch gitURL, pNewRepoFolder
   /*
   Clones a repository into a newly created directory, creates remote-tracking branches for each branch in the cloned repository (visible
   using git branch -r), and creates and checks out an initial branch that is forked from the cloned repository's currently active branch.
   
   -- After the clone, a plain git fetch without arguments will update all the remote-tracking branches, and a git pull without arguments will
   in addition merge the remote master branch into the current master branch, if any (this is untrue when "--single-branch" is given; see
   below).
   
   This default configuration is achieved by creating references to the remote branch heads under refs/remotes/origin and by initializing
   remote.origin.url and remote.origin.fetch configuration variables.
   */
   
   git_Clone gitURL, pNewRepoFolder
   put the result into oFolders
   
   put the folders into nFolders
   put empty into clonedFolder
   repeat for each line testFolder in nFolders
      if testFolder is not among the lines of oFolders then
         # Changes the active directory in the prompt to the newly cloned "Spoon-Knife" directory
         -- cd Spoon-Knife
         put the defaultfolder & slash & testFolder & slash into clonedFolder
         set the defaultfolder to clonedFolder
         exit repeat
      end if
   end repeat
   if clonedFolder is empty then
      answer warning "Failed to find new cloned repository folder!"
      breakpoint
      -- exit to top
   end if
   
   # Assigns the original repository to a remote called "upstream"
   put "git remote add upstream" && gitURL into someShell
   put git_ExecuteShellCommand (someShell, clonedFolder) into shellResult
   if shellResult is not empty then
      display_Lines shellResult, "GIT error adding upstream remote"
      breakpoint
      -- exit to top
   end if
   
   # Pulls in changes not present in your local repository, without modifying your files
   put "git fetch upstream" into someShell
   put git_ExecuteShellCommand (someShell, clonedFolder) into shellResult
   if shellResult is not empty then
      display_Lines shellResult, "GIT fetching upstream remote"
      -- exit to top
   end if
end git_CloneAndFetch
   

--> Repo
-
function repo_FetchStatusOutline
   put url "http://www.rev-co.de/cgi-bin/git_Status.cgi" into someOutline
   return someOutline
end repo_FetchStatusOutline

function repository_ConstructScriptPath shortFileBit, rootFolder
   put rootFolder & "opn_Plugins/" into opnPluginsFolder
   put opnPluginsFolder & "opn_Text/rev/" into revTextFolder
   put revTextFolder & shortFileBit into scriptTextFile
   
   set the itemdelimiter to "/"
   if char -1 of scriptTextFile = "/" then
      put scriptTextFile into testFolder
   else
      put item 1 to -2 of scriptTextFile into testFolder
   end if
   folder_CreateNested testFolder
   
   return scriptTextFile
end repository_ConstructScriptPath

command repository_SetCommitComment @someComment
   if someComment is empty then
      ask "Give a comment to this commit..." with "auto opn commit"
      if it is empty then
         -- lcw_Notify "Sorry, I did not commit these changes as the comment was empty!"
         exit to top
      end if
      put it into someComment
   end if
end repository_SetCommitComment


--> Repository | Local | Event | Helpers
-
command repository_Add someFile, fileIsNew, pCommitComment
   -- file has been created or updated
   switch repository_GetType()
      case "svn"
         if fileIsNew is true then svn_Add someFile
         break
      case "git"
         if pCommitComment is empty then put "opn auto-commit" into pCommitComment
         
         -- if fileIsNew is true then git_AddFile someFile
         git_CommitFile someFile, pCommitComment
         break
   end switch
end repository_Add


--> Deps | File
-
command file_CreateBinary binaryText, pFile
   /*
   Rev uses unix style text internally (numToChar(10) for line endings)
   That is "fld "Text" contains numtochar(10) = true"
   
   If written to a file on a Mac, using URL "file:", they're automatically translated to Macs native numToChar(13).
   if using URL "binfile:", no translation happens, so numToChar(10) is preserved. 
   */
   
   if pFile is empty then
      put the tempname into pFile
   end if
   put folder_Above (pFile) into someFolder
   folder_CreateNested someFolder
   put binaryText into url ("binfile:" & pFile)
   return pFile
end file_CreateBinary

command file_CreateText someText, pFile
   if pFile is empty then
      put the tempname into pFile
   end if
   put folder_Above (pFile) into someFolder
   folder_CreateNested someFolder
   put someText into url ("file:" & pFile)
   return pFile
end file_CreateText

command file_Delete someFile
   -- could check if versioned and use built in repository commands to delete file
   delete file someFile
   return the result
end file_Delete

function file_IsWithinOpn someFile
   put library_PluginFolder() into rootFolder
   return someFile contains rootFolder
end file_IsWithinOpn

function file_IsVersioned someFile
   -- was "file_IsUnderSvn"
   switch repository_GetType() 
      case "svn"
         put svn_GetRootFolder() into rootFolder
         return someFile contains rootFolder
      case "git"
         put git_GetRootFolder() into rootFolder
         return someFile contains rootFolder
      default
         return false
   end switch
end file_IsVersioned


--> Private
-
private function autoCommitComment scriptObject, textLine
   put the internet date into someDate
   delete word -1 of someDate
   put someDate & ":  changed script" && the mobile_Name of scriptObject into someSuggestion
   put CR after someSuggestion
   put CR after someSuggestion
   
   if textLine is empty then put "OPN auto-commit" into textLine
   put textLine after someSuggestion
   return someSuggestion
end autoCommitComment

