script "lib_DisplayControllers"
--> MetaData
-
license: GPLv3
name: lib_DisplayControllers
type: library
version: 0.2


--> Display | Events
-
command mDoubleUp_CheckRigControllers
   displayView, shortFile
   put the folder_Path of displayView into folderPath
   put server_GetURL() into serverURL
   put server_GetSshUser() into sshUser
   put server_GetSshKeyPath() into sshKeyPath
   --
   put shortFile
end mDoubleUp_CheckRigControllers


--> Display | Rig | Controller | Handlers
-
command display_ControllerHandlers controllerScript, pControllerShortFile, serverTLD
   server_LoadDetails "rest.livecode.world"
   --
   put rig_ListControllerFiles() into shortStackFiles
   display_Lines shortStackFiles, "Rig Controllers", "mDoubleUp_CheckRigControllers"
   put the result into displayView
   --
   put rig_GetFolder ("controllers") into folderPath
   set the folder_Path of displayView to folderPath
end display_ControllerHandlers

command display_RigControllerArray
   server_LoadDetails "rest.livecode.world"
   --
   put rig_FetchControllerPathArray() into controllerPathArray
   
   put "Global | Revigniter | Display | Controller | Menu" into treeMenuTitle
   put "Global | Revigniter | Display | Controller | Line | Menu" into lineMenuTitle
   put server_GetURL() into serverURL
   put serverURL & comma & "rig_FetchControllerPathArray()" into someTitle
   --
   display_Array controllerPathArray, someTitle, treeMenuTitle, lineMenuTitle
   put the result into arrayView
   return arrayView
end display_RigControllerArray


--> Display | Project | Controllers
-
command display_ProjectControllers homeStackName, pIndexView
   put project_ListControllerPaths (homeStackName) into controllerPaths
   put stack_PathsToNames (controllerPaths) into stackNames
   
   put empty into mUp
   put "mDouble_DisplayStack" into mDoubleUp
   put merge ("[[homeStackName]],Project Controllers") into someTitle
   put "Global | Controllers | Tree | Menu" into mTitle
   put "Global | Controllers | Tree | Line | Menu" into mLineTitle
   put empty into pDragCommand
   
   if exists (pIndexView) is false then
      display_Index stackNames, someTitle, mTitle, mLineTitle, mUp, mDoubleUp, pDragCommand, true
      put the result into displayView
      return displayView
   else
      lock screen
      set the view_Index of pIndexView to stackNames
      set the stack_Title of pIndexView to someTitle
      set the mouse_DoubleUpEvent of pIndexView to mDoubleUp
      set the title_Menu of pIndexView to mTitle
      set the line_Menu of pIndexView to mLineTitle
      unlock screen
      return pIndexView
   end if
end display_ProjectControllers

command display_Controllers pIndexView
   put env_ListControllerStackNames() into activeControllerStackNames
   
   put empty into mUp
   put "mDouble_DisplayStack" into mDoubleUp
   put "Active Controllers,Environment" into stackTitle
   
   put "Global | Environment | Menu" into mTitle
   put "Global | Project | Tree | Line | Menu" into mLineTitle
   
   if exists (pIndexView) is false then
      display_Index activeControllerStackNames, stackTitle, mTitle, mLineTitle, mUp, mDoubleUp
      put the result into displayView
      return displayView
   else
      lock screen
      set the view_Index of pIndexView to activeControllerStackNames
      set the stack_Title of pIndexView to stackTitle
      set the mouse_DoubleUpEvent of pIndexView to mDoubleUp
      set the title_Menu of pIndexView to mTitle
      set the line_Menu of pIndexView to mLineTitle
      unlock screen
      return pIndexView
   end if
end display_Controllers
