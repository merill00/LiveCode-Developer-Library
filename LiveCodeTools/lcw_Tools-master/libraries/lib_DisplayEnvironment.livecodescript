script "lib_DisplayEnvironment"
--> MetaData
-
license: GPLv3
name: lib_DisplayEnvironment
type: library
version: 0.6

/*
Here we gather all the handlers that make it easy to display handlers, stacks, projects, and the environment.
*/

--> Display | Events
-
on mDouble_DisplayStackDeps treeView, stackName
   if the optionkey is "Down" then breakpoint
   
   put the name of stack stackName into stackObject
   if the optionKey is "Down" then
      display_StackDeps stackObject
   end if
   edit the script of stackObject
   return true
end mDouble_DisplayStackDeps

on mDouble_DisplayProject targetObject, stackName
   if the optionkey is "Down" then breakpoint
   
   display_ProjectLibs stackName
end mDouble_DisplayProject

command mDouble_DisplayBehavior indexView, stackName
   if the optionkey is "Down" then breakpoint
   
   mDouble_DisplayStack indexView, stackName
end mDouble_DisplayBehavior


--> Working on
-
function display_FindView displayStackLabel, pDislayViewTitle
   put the openstacks into dStackNames
   repeat for each line dStackName in dStackNames
      if word 1 to 2 of dStackName is not "Display Index" then next repeat
      if the label of stack dStackName = displayStackLabel then
         put the long id of group 1 of stack dStackName into pIndexView
         if pDislayViewTitle is empty then
            return pIndexView
         else if the title_text of pIndexView = pDislayViewTitle then
            return pIndexView
         end if
      end if
   end repeat
   return empty
end display_FindView


--> Display | Project | List
-
command display_LcwProjectList pProjectNames
   -- was "display_LcwProjectList"
   if pProjectNames is empty then put library_ListProjectNames() into pProjectNames
   put "List of Projects,Environment" into pStackTitle
   
   put "mDouble_DisplayProject" into mDoubleUp
   put empty into mUp
   put "Global | Environment | Menu" into mTitle
   put "Global | Project | Tree | Line | Menu" into mLineTitle
   put empty into dragCommand
   
   put display_FindView ("Environment") into indexView
   if exists (indexView) is false then
      put empty into mUp
      display_Index pProjectNames, pStackTitle, mTitle, mLineTitle, mUp, mDoubleUp, dragCommand, true
      put the result into indexView
      set the field_Style of indexView to "display selected"
      set the selected_Index of indexView to env_ListProjects()
   else
      display_UpdateLcwProjectList indexView, pProjectNames, pStackTitle, mDoubleUp, mTitle, mLineTitle
   end if
   return indexView
end display_LcwProjectList

command display_UpdateLcwProjectList pIndexView, pProjectNames, pStackTitle, mDoubleUp, mTitle, mLineTitle
   -- Refactor: all these params are unecessary I think
   
   lock screen
   set the view_Index of pIndexView to pProjectNames
   set the stack_Title of pIndexView to pStackTitle
   set the mouse_DoubleUpEvent of pIndexView to mDoubleUp
   set the title_Menu of pIndexView to mTitle
   set the line_Menu of pIndexView to mLineTitle
   set the field_Style of pIndexView to "display selected"
   --
   set the selected_Index of pIndexView to env_ListProjects()
   unlock screen
   return pIndexView
end display_UpdateLcwProjectList
   
command display_LcwLibs pIndexView, pProjectNames
   put env_ListUsedStackNames (pProjectNames) into activeUsedStackNames
   sort activeUsedStackNames
   
   put empty into mUp
   put "mDouble_DisplayStackDeps" into mDoubleUp
   put "Active Libraries,Environment" into stackTitle
   
   put "Global | Environment | Menu" into mTitle
   put "Global | Project | Tree | Line | Menu" into mLineTitle
   put empty into dragCommand
   
   if exists (pIndexView) is false then
      display_Index activeUsedStackNames, stackTitle, mTitle, mLineTitle, mUp, mDoubleUp, dragCommand, true
      put the result into displayView
      return displayView
   else
      lock screen
      set the view_Index of pIndexView to activeUsedStackNames
      set the stack_Title of pIndexView to stackTitle
      set the mouse_DoubleUpEvent of pIndexView to mDoubleUp
      set the title_Menu of pIndexView to mTitle
      set the line_Menu of pIndexView to mLineTitle
      unlock screen
      return pIndexView
   end if
end display_LcwLibs


--> Display | Project | Libraries
-
command display_ProjectLibs homeStackNameOrPath, pGoHow
   -- was "display_Project"
   put "Model and Libraries" into displayStackLabel
   _SetHomeStackNameAndPath homeStackNameOrPath, indexView, homeStackName, homeStackPath
   
   put the project_UsedStackNames of stack homeStackPath into stackNames
   put display_FindView (displayStackLabel, homeStackName) into indexView
   
   -- let's see if it already exists
   if exists (indexView) is true then
      _UpdateProjectLibsDisplay indexView, stackNames, homeStackName
   else
      _DisplayProjectLibs homeStackName, displayStackLabel, stackNames
      put the result into indexView
   end if
   set the menu_Target of indexView to homeStackName
   --
   _GoHomeStack homeStackPath, pGoHow
   return indexView
end display_ProjectLibs

command display_RefreshProjectLibs homeStackName
   put "Model and Libraries" into displayStackLabel
   put display_FindView (displayStackLabel, homeStackName) into indexView
   if exists (indexView) is false then
      breakpoint
      return empty
   end if
   
   put the project_UsedStackNames of stack homeStackName into projectLibNames
   _UpdateProjectLibsDisplay indexView, projectLibNames, homeStackName
   return indexView
end display_RefreshProjectLibs

private command _UpdateProjectLibsDisplay indexView, projectLibNames, homeStackName
   set the view_Index of indexView to projectLibNames
   go to stack homeStackName
   -- could do some fancy checking and display here
end _UpdateProjectLibsDisplay

private command _DisplayProjectLibs homeStackName, displayStackLabel, stackNames
   put empty into mUp
   put merge ("[[homeStackName]],[[displayStackLabel]]") into someTitle
   put project_ConstructMenuTitle (homeStackName) & tab & "submenu" after projectMenuTitles
   --
   put CR & "-" after projectMenuTitles
   put CR & "Global | Project | Display | Menu" & tab & "submenu" after projectMenuTitles
   put CR & "Global | Project | Create | Menu" & tab & "submenu" after projectMenuTitles
   put CR & "-" after projectMenuTitles
   put CR & "Global | Project | Tree | Menu" after projectMenuTitles
   
   display_Index stackNames, someTitle, projectMenuTitles, "Global | Project | Line | Menu", mUp, "mDouble_DisplayStackDeps"
   put the result into indexView
   set the multiple_Hilites of indexView to false
   --
   return indexView
end _DisplayProjectLibs

command display_ProjectStacks homeStackName, pIndexView
   put project_ListStackPaths (homeStackName) into stackPaths
   put stack_PathsToNames (stackPaths) into stackNames
   
   put merge ("[[homeStackName]],Project Stacks") into someTitle
   put "Global | Project | Stacks | Tree | Menu" into mTitle
   put "Global | Project | Stacks | Tree | Line | Menu" into mLineTitle
   display_Index stackNames, someTitle, mTitle, mLineTitle, mUp, "mDouble_DisplayStack"
   put the result into indexView
   return indexView
end display_ProjectStacks

command display_ProjectFrontScripts homeStackName, pIndexView
   put project_ListFrontScriptPaths (homeStackName) into stackPaths
   put stack_PathsToNames (stackPaths) into stackNames
   
   put merge ("[[homeStackName]],Project FrontScripts") into someTitle
   put "Global | Project | FrontScripts | Tree | Menu" into mTitle
   put "Global | Project | FrontScripts | Tree | Line | Menu" into mLineTitle
   display_Index stackNames, someTitle, mTitle, mLineTitle, mUp, "mDouble_DisplayStack"
   put the result into indexView
   return indexView
end display_ProjectFrontScripts

command display_ProjectBackScripts homeStackName, pIndexView
   put project_ListBackScriptPaths (homeStackName) into stackPaths
   put stack_PathsToNames (stackPaths) into stackNames
   
   put merge ("[[homeStackName]],Project BackScripts") into someTitle
   put "Global | Project | BackScripts | Tree | Menu" into mTitle
   put "Global | Project | BackScripts | Tree | Line | Menu" into mLineTitle
   display_Index stackNames, someTitle, mTitle, mLineTitle, mUp, "mDouble_DisplayStack"
   put the result into indexView
   return indexView
end display_ProjectBackScripts


--> Display | Environment
-
function project_ConstructMenuTitle homeStackName
   set the itemdelimiter to "_"
   put item -1 of homeStackName into menuBit
   put toupper (char 1 of menuBit) into char 1 of menuBit
   put "Global |" && menuBit && "| Menu" into gMenuTitle
   return gMenuTitle
end project_ConstructMenuTitle


--> Private
-
private command _GoHomeStack homeStackPath, pGoHow
   switch pGoHow
      case "edit"
         edit the script of stack homeStackPath
         break
      case "go"
         go to stack homeStackPath
         break
      case "start"
         project_Start homeStackName
      default
         if the scriptonly of stack homeStackPath is true then
            -- edit the script of stack homeStackPath
         else
            go to stack homeStackPath
         end if
   end switch
end _GoHomeStack

private command _SetHomeStackNameAndPath homeStackNameOrPath, indexView, @homeStackName, @homeStackPath
   set the itemdelimiter to slash
   
   if exists (stack homeStackName) is true then
      put the effective filename of stack homeStackNameOrPath into homeStackPath
      put the short name of stack homeStackNameOrPath into homeStackName
      return true
   end if
   
   if the number of items of homeStackNameOrPath > 1 then
      -- Assumes name, ie not handled yet?
      put homeStackNameOrPath into homeStackPath
      breakpoint
      exit to top
   end if
   
   -- let's search for it
   put homeStackNameOrPath into homeStackName
   put library_FetchProjectHomeStackPath (homeStackName) into homeStackPath
   if exists (stack homeStackPath) is false then
      put merge ("Cannot locate stack '[[homeStackName]]'") into someWarning
      dispatch "lcw_AnswerSheet" to indexView with someWarning 
      exit to top
   end if
   return false
end _SetHomeStackNameAndPath
