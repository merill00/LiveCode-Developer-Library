script "Global_GIT_Untracked Files_Menu"
--> MetaData
-
license: GPLv3
name: Global_GIT_Untracked Files_Menu
type: controller
version: 0.1


--> Variables
-
local LocalArray


--> Menu | Props
-
on menu_Init tObject
   put the display_View of tObject into displayView
   put displayView into LocalArray ["displayView"]
   put the displayed_ScriptObject of displayView into LocalArray ["scriptObject"]
   put the displayed_GitCheckoutFolder of displayView into LocalArray ["gitFolder"]
end menu_Init


--> Private
-
private command refreshGitStatus
   put LocalArray ["displayView"] into displayView
   put LocalArray ["gitFolder"] into gitFolder
   display_GitFolderStatus gitFolder, displayView
end refreshGitStatus


--> Global | GIT | Untracked files | Files | Menu
-
on menu_AddAllUntracked arrayView
   set the cursor to watch
   put the displayed_GitCheckoutFolder of arrayView into gitFolder
   
   git_AddEverything gitFolder
   put the result into shellResult
   
   if shellResult is not empty then
      lcw_Notify shellResult
   end if
   refreshGitStatus
end menu_AddAllUntracked


--> Global | GIT | Untracked files | Menu
-
on menu_AddAllUntracked
   -- same as above
end menu_AddAllUntracked

