script "Global_GIT_Menu"
--> MetaData
-
license: GPLv3
name: Global_GIT_Menu
type: controller
version: 0.2

/*
As the general git menu, this probably should not have a scriptObject as the menu_Target
becasue it will be displayed by the standard project menu interface.
Change to indexView or make it clever.
*/


--> Menu | Props
-
getprop menu_CheckTarget [scriptObject]
   if exists (scriptObject) is false then return false
   if project_IsActive ("lcw_GIT") is true then
      return true
   else
      return false
   end if 
end menu_CheckTarget


--> Global | GIT | Menu
-
on menu_DisplayGitStatus scriptObject
   display_GitStatus scriptObject
end menu_DisplayGitStatus

on menu_ShowStackLog scriptObject
   display_StackHistory scriptObject
end menu_ShowStackLog

on menu_StackHistory scriptObject
   display_StackHistory scriptObject
end menu_StackHistory

on _
end _

on menu_Search mTarget, menuChoice
   local pTreeMenuTitle, pTreeLineMenuTitle
   
   put the search_Term of me into searchTerm
   put lcw_Ask("Search log for string...", searchTerm) into searchTerm
   set the search_Term of me to searchTerm
   
   switch menuChoice
      case "Commit history"
         put git_SearchLog (searchTerm) into foundLog
         put git_LogLinkOutline (foundLog) into someOutline
         
         -- display_Lines foundLog
         put "git log --pretty=oneline -S:" && kwote(searchTerm) into someTitle
         display_Outline someOutline, someTitle, pTreeMenuTitle, pTreeLineMenuTitle
         put the result into treeView
         put the tree_Field of treeView into treeField
         set the menu_Controller ["Log | Menu"] of treeField to the long id of me
         break
      case "Search repository"
         put git_SearchRepository (searchTerm) into foundLog
         display_Lines foundLog
         put git_LogLinkOutline (foundLog) into someOutline
         put "git grep --text -i" && kwote(searchTerm) into someTitle
         display_Outline someOutline, someTitle, pTreeMenuTitle, pTreeLineMenuTitle
         put the result into treeView
         put the tree_Field of treeView into treeField
         set the menu_Controller ["Grep | Menu"] of treeField to the long id of me
         break
   end switch
end menu_Search

on _
end _

on menu_DisplayOldGitMenus
   put revEnvironmentUserPluginsPath() & "/opn_Plugins/opn_Libraries/" into oldLibFolder
   put oldLibFolder & "libOPN_GIT.rev" into stackPath
   put the menu_CardNames of stack stackPath into mCards
   
   display_Index mCards, "Old GIT Menus,libOPN_GIT", "Global | Menu | Global Cards | Menu", "Global | Menu | Git | Line | Menu", "mDouble_SubStackMenu"
   put the result into indexView
   set the displayed_StackPath of indexView to stackPath
end menu_DisplayOldGitMenus

on submenu_Dev
   return "Dev | Menu"
end submenu_Dev


--> Global | GIT | Menu | Props
-
getprop back_Nums
   return "1,2,3,4,5,6"
end back_Nums

on menu_OtherStackLog scriptObject, someName
   put the name of stack someName into stackObject
   display_StackHistory stackObject
end menu_OtherStackLog

getprop some_Names
   return stack_ListNames()
end some_Names

getprop search_Term
   return the uOPN ["search_Term"] of me
end search_Term

setprop search_Term searchTerm
   set the uOPN ["search_Term"] of me to searchTerm
end search_Term


--> Menu | Props
-

--> Dev | Menu
-

/*
Was "Global | Git | Line | Stack | Log | Menu"
*/

on _
end _

on menu_Gitk mTarget, menuChoice
   switch menuChoice
      case "gitk"
         put "gitk" into someShell
         break
      case "all branches"
         put "gitk --all" into someShell
         break
   end switch
   put git_ExecuteShellCommand(someShell) into shellResult
   return shellResult
end menu_Gitk

on menu_SaveAndCompactMemoryStacks
   stack_SaveLoaded
end menu_SaveAndCompactMemoryStacks


--> Dev | menu | Props
-
/*
Global | Git | Line | Stack | Log | Menu | Props
*/

getprop stack_Hashs [mTarget]
   put the git_RelativeFile of mTarget into relativePath
   return git_ReverseFileHashes (relativePath)
end stack_Hashs

getprop back_Hashs [mTarget]
   put the script_RelativeFile of mTarget into relativePath
   return git_ReverseFileHashes (relativePath)
end back_Hashs

getprop back_Nums
   return "0,-,1,2,3,4,5,6,7,8,9"
end back_Nums
