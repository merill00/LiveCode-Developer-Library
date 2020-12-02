script "Global_Git_Stack_History_Menu"
--> MetaData
-
license: GPLv3
name: Global_Git_Stack_History_Menu
type: controller
version: 0.1


--> Global | Git | Stack | History | Menu
-
on menu_StackHistory scriptObject
   display_StackHistory scriptObject
end menu_StackHistory

on menu_DisplayGitStatus
   display_GitStatus
end menu_DisplayGitStatus

on _
end _

on menu_SetLineMenu scriptObject
   put menu_GetTargetObject() into tObject
   put the index_View of tObject into indexView
   set the line_Menu of indexView to "Global | Git | Line | Stack | Log | Menu"
   --  edit the script of the behavior of indexView
end menu_SetLineMenu


--> Global | Git | Stack | History | Menu | Props
-
--> Global | Git | Stack | History | Menu | Disabled
-
--> Dev | Menu
-

--> Menu | Props
-
getprop menu_CheckTarget [scriptObject]
   if exists (scriptObject) is false then return false
   put the stack_Object of scriptObject into stackObject
   put the filename of stackObject into someFile
   return there is a file someFile
end menu_CheckTarget
