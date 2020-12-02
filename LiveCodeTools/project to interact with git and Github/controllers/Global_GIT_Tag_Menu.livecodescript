script "Global_GIT_Tag_Menu"
--> MetaData
-
license: GPLv3
name: Global_GIT_Tag_Menu
type: controller
version: 0.1

--> Vairables
-
local LocalArray


--> Global | GIT | Tag | Menu
-
on menu_AddTag arrayView
   put LocalArray ["gitFolder"] into gitFolder
   
   put lcw_Ask ("What do you want to call this tag...") into tagName
   put lcw_Ask ("Describe this tag...") into tagMessage
   
   put "git tag -a" && kwote (tagName) into someShell
   put space & "-m" && kwote (tagMessage) after someShell
   
   put git_ExecuteShellCommand (someShell, gitFolder) into shellResult
   
   if shellResult is not empty then
      beep
      lcw_Notify shellResult
   end if
end menu_AddTag

on _
end _

on menu_ShowTaggedFiles arrayView, tagName
   put LocalArray ["gitFolder"] into gitFolder
   
   put "git show" && kwote (tagName) into someShell
   put "git ls-files" into someShell
   
   put git_ExecuteShellCommand (someShell, gitFolder) into shellResult
   display_Lines shellResult, someShell
end menu_ShowTaggedFiles


--> Global | GIT | Tag | Menu | Props
-
getprop tag_Names
   put LocalArray ["tagNames"] into tagNames
   return tagNames
end tag_Names


--> Global | GIT | Tag | Menu | Disabled
-
getprop disabled_ShowTaggedFiles [arrayView]
   put LocalArray ["tagNames"] into tagNames
   if tagNames is empty then
      return true
   else
      return false
   end if
end disabled_ShowTaggedFiles


--> Menu | Props
-
on menu_Init tObject
   put the array_View of tObject into arrayView
   put the displayed_GitCheckoutFolder of arrayView into gitFolder
   put git_ExecuteShellCommand ("git tag -l", gitFolder) into LocalArray ["tagNames"]
   put gitFolder into LocalArray ["gitFolder"]
end menu_Init

