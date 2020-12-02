script "Global_Git_Pull_Menu"
--> MetaData
-
license: GPLv3
name: Global_Git_Pull_Menu
type: controller
version: 0.1


--> Global | Git | Pull | Menu
-
on menu_RevealProjectFolder indexView
   put the displayed_GitCheckoutFolder of indexView into gitFolder
   --  put the displayed_GitBranch of indexView into currentBranchName
   finder_Reveal gitFolder
end menu_RevealProjectFolder

on _
end _

on submenu_Dev
   return "Dev | Menu"
end submenu_Dev


--> Dev | Menu
-
on menu_ParsePullResult mTarget
   put the view_Text of mTarget into pullResult
   put git_ParsePullResult (pullResult) into changedFiles
   display_Lines changedFiles, "git pull result"
   put the result into indexView
   set the title_Menu of indexView to "Global | Git | Pull | Menu"
   set the line_Menu of indexView to "Global | Git | Pull | Line | Menu"
end menu_ParsePullResult


--> Menu | Props
-
getprop menu_Target [mTitlePath]
   switch
      case mTitlePath contains "Some|Path|To|Menu"
         break
      default
         pass menu_Target
   end switch
end menu_Target

getprop menu_CheckTarget [mTarget]
   return true
end menu_CheckTarget


--> Global | Git | Pull | Menu | Deps
-
function git_ParsePullResult pullResult
   -- beware deletions and insertiosn and non-binary things
   put line 1 to 4 of pullResult into pullHeader
   delete line 1 to 4 of pullResult
   put line -1 of pullResult into pullFooter
   delete line -1 of pullResult
   put word 1 of item 1 of pullFooter into changedFileNum
   put word 1 of item 2 of pullFooter into insertionNum
   put word 1 of item 1 of pullFooter into deletionNum
   
   put git_GetRootFolder() into rootFolder
   repeat for each line someLine in pullResult
      -- |  Bin 208584 -> 207138 bytes
      put word - 6 to -1 of someLine into binBit
      put word 1 to -7 of someLine into relativePath
      put rootFolder & relativePath & CR after changedFiles
   end repeat
   delete char -1 of changedFiles
   return changedFiles
end git_ParsePullResult
