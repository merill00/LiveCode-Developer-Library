script "Global_Git_Diff_Raw_Menu"
--> MetaData
-
license: GPLv3
name: Global_Git_Diff_Raw_Menu
type: controller
version: 0.1

--> Variables
-
local LocalArray


--> Menu | Props
-
on menu_Init tObject
   put the array_View of tObject into arrayView
   put the displayed_GitCheckoutFolder of arrayView into LocalArray ["gitCheckoutFolder"]
   put the current_BranchName of arrayView into LocalArray ["currentBranchName"]
   put the other_BranchName of arrayView into LocalArray ["otherBranchName"]
end menu_Init


--> Global | Git | Diff | Raw | Line | Menu
-
on menu_RevertStack arrayView
   put item 1 of the hilited_Element of arrayView into thisBranchRelativePath

   put LocalArray ["gitCheckoutFolder"] into gitCheckoutFolder
   put LocalArray ["otherBranchName"] into otherBranchName

   put gitCheckoutFolder & thisBranchRelativePath into thisBranchStackPath

end menu_RevertStack


--> Global | Git | Diff | Raw | Menu
-
on menu_RevertOpenStacks arrayView
   put the displayed_GitCheckoutFolder of arrayView into gitCheckoutFolder
   -- put the openstacks into openStackNames
   put revLoadedStacks("all") into loadedStackNames

   put the displayed_Array of arrayView into displayedArray
   repeat for each key relativePath in displayedArray
      put gitCheckoutFolder & relativePath into thisBranchFile

      put displayedArray [relativePath]["dstPath"] into otherBranchRelativeFile
      if otherBranchRelativeFile is empty then
         put thisBranchFile into otherBranchFile
      else
         put gitCheckoutFolder & otherBranchRelativeFile into otherBranchFile
      end if

      if there is a stack thisBranchFile then
         put the short name of stack thisBranchFile into thisStackName
         if thisStackName is among the lines of loadedStackNames then
            put thisStackName & CR after stackNamesToRevert

            breakpoint
            revert stack thisStackName
         end if
      end if
   end repeat
   delete char -1 of stackNamesToRevert

   put stackNamesToRevert
end menu_RevertOpenStacks
