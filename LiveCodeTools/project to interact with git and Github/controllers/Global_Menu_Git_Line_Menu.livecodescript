script "Global_Menu_Git_Line_Menu"
--> MetaData
-
license: GPLv3
name: Global_Menu_Git_Line_Menu
type: controller
version: 0.1

--> Private
-
private command _GetSelectedObjects indexView, @cardObject, @oldGitStackPath
   put the selected_Index of indexView into mTitle
   
   put revEnvironmentUserPluginsPath() & "/opn_Plugins/opn_Libraries/" into oldLibFolder
   put oldLibFolder & "libOPN_GIT.rev" into oldGitStackPath
   put the menu_SubStackCard [mTitle] of stack oldGitStackPath into cardObject
   return cardObject
end _GetSelectedObjects


--> Global | Menu | Git | Line | Menu
-
on menu_EditCardMenu indexView
   _GetSelectedObjects indexView, cardObject, oldGitStackPath
   
   edit the script of cardObject
end menu_EditCardMenu

on menu_DeleteEmptyCardMenu indexView
   _GetSelectedObjects indexView, cardObject, oldGitStackPath
   
   delete cardObject
   -- save stack oldGitStackPath
   if exists (cardObject) is false then
      put the menu_CardNames of stack oldGitStackPath into mCards
      set the view_Index of indexView to mCards
      
      lcw_Notify "Deleted empty card menu!"
   else
      answer warning "Failed!"
      breakpoint
   end if
end menu_DeleteEmptyCardMenu

on _
end _

on menu_MakeGlobal indexView
   _GetSelectedObjects indexView, cardObject, oldGitStackPath
   put the script of cardObject into controllerScript
   
   breakpoint
   -- put the project_Name of stack oldGitStackPath into projectName
   put project_GetFolder ("lcw_Tools") into projectFolder
   
   put the menu_ScriptTitles of cardObject into mTitles
   filter mTitles with "Global | * | Menu" 
   put line 1 of mTitles into globalMenuTitle
   if globalMenuTitle is empty then
      answer warning "Can't find menu!"
      breakpoint 
      exit to top
   end if
   
   breakpoint
   project_CreateMenu projectFolder, globalMenuTitle
   put the result into controllerStackObject
   
   edit the script of controllerStackObject
end menu_MakeGlobal


--> Global | Menu | Git | Line | Menu | Props
-

--> Global | Menu | Git | Line | Menu | Disabled
-
getprop disabled_MakeGlobal [indexView]
   _GetSelectedObjects indexView, cardObject, oldGitStackPath   
   put the script of cardObject into cardScript
   if word 1 to -1 of cardScript is empty then
      return true
   else
      return false
   end if
end disabled_MakeGlobal

getprop disabled_DeleteEmptyCardMenu [indexView]
   _GetSelectedObjects indexView, cardObject, oldGitStackPath   
   put the script of cardObject into cardScript
   if word 1 to -1 of cardScript is empty then
      return false
   else
      return true
   end if
end disabled_DeleteEmptyCardMenu
