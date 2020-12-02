script "main_behavior"
//>GLOBALS
global gAction, gContactA


on preOpenCard
     clearContactList
     syncDown
     if not cdb_result() then
          send "checkRefresh" to me in 3 secs
     else
          refreshContactList
     end if
end preOpenCard



private function _____MOUSE
end _____MOUSE
on mouseUp
     cs_postMaster_mouseUp
end mouseUp


on mouseDown
     cs_postMaster_mouseDown
end mouseDown


on rawKeyDown pKey
     cs_postMaster_rawKeyDown pKey
end rawKeyDown



private function _____CARD_CODE
end _____CARD_CODE
command cs_postMaster_mouseUp
     local tOwner
     
     if the short name of the target is "main" then exit cs_postMaster_mouseUp
     
     put the short name of the owner of the target into tOwner
     
     switch tOwner
          case "header"
               switch the short name of the target
                    case "add"
                         put "add" into gAction
                         go card "New_Edit" of stack "Contacts"
                         break
               end switch
               break
               
          case "CRUD"
               break
               
          case "Main"
               switch the short name of the target
                    case "Sync"
                         lock screen
                         clearContactList
                         syncDown
                         if not cdb_result() then
                              send "checkRefresh" to me in 3 secs
                         else
                              refreshContactList
                         end if
                         unlock screen
                         break
               end switch
               break
               
          default
               switch the short name owner of the owner of the target
                    case "contacts list"
                         if (the num of chars of (the short name of the owner of the target)) > 1 then
                              editContact the short name of the owner of the target
                              if gContactA is empty then
                                   answer "Error reading the contact"
                              else
                                   put "edit" into gAction
                                   go card "New_Edit" of stack "Contacts"
                              end if
                         end if
                         break
               end switch
               break
     end switch
end cs_postMaster_mouseUp


command cs_postMaster_mouseDown
     local tOwner
     
     if the short name of the target is "main" then exit cs_postMaster_mouseDown
     
     put the short name of the owner of the target into tOwner
     
     switch tOwner
          case "header"
               break
               
          case "CRUD"
               break
               
               
          default
               switch the short name owner of the owner of the target
                    case "contacts list"
                         if (the num of chars of (the short name of the owner of the target)) > 1 then
                              set the backgroundcolor of grc "contact backdrop" of the owner of the target to "#2AABE2"
                         end if
                         break
               end switch
               break
     end switch
end cs_postMaster_mouseDown


command cs_postMaster_rawKeyDown pKey
     switch pKey
          case 65309 // mousewheelup
               set the vscroll of grp "contacts list" of stack "Contacts" to the vscroll of grp "contacts list" of stack "Contacts" - 7
               break
          case 65308//mousewheeldown
               set the vscroll of grp "contacts list" of stack "Contacts" to the vscroll of grp "contacts list" of stack "Contacts" + 7
               break
     end switch
end cs_postMaster_rawKeyDown


command refreshContactList
     local tContactsA
     
     put getContacts() into tContactsA
     if tContactsA is empty then
          lock screen
          set the vis of grp "contacts list" of stack "Contacts" to false
          set the vis of grp "empty list" of stack "Contacts" to true
          unlock screen
     else
          lock screen
          set the vis of grp "empty list" of cd "main" of stack "Contacts" to false
          drawContactsUI tContactsA
          set the vis of grp "contacts list" of stack "Contacts" to true
          unlock screen
          if (the number of grps of grp "contacts list" of stack "Contacts") > 16 then
               set the vScrollbar of grp "contacts list" of stack "Contacts" to true
          else
               set the vScrollbar of grp "contacts list" of stack "Contacts" to false
          end if
     end if
end refreshContactList


function getContacts
     local tTable, tRecordIDs, tTarget, tOutputA, tContactsA
     
     //READ ALL CONTACTS USING '*' TO INDICATE ALL RECORDS IN TABLE
     put "*" into tRecordIDs
     
     //Specify the table
     put "people" into tTable
     
     //Specify the target (cloud or local)
     put "local" into tTarget
     
     //Read record
     put cdb_read(tTable,tRecordIDs,tTarget) into tOutputA
     
     //BUILD AN ARRAY THAT WILL BE USED TO MAKE CONTACTS LIST
     repeat for each key xContact in tOutputA
          if tOutputA[xContact]["firstName"] is empty and tOutputA[xContact]["lastName"] is empty then
               put tOutputA[xContact] into tContactsA["empty"][xContact]
          else if tOutputA[xContact]["lastName"] is empty then
               put tOutputA[xContact] into tContactsA[char 1 of tOutputA[xContact]["firstName"]][xContact]
          else
               put tOutputA[xContact] into tContactsA[char 1 of tOutputA[xContact]["lastName"]][xContact]
          end if
     end repeat
     
     return tContactsA
end getContacts


command drawContactsUI pContactsA
     local tCountIndex, tKeys, tLastElement
     
     put the keys of pContactsA into tKeys
     sort tKeys ascending
     put 0 into tCountIndex
     repeat for each line xKey in tKeys
          if xKey is "empty" then next repeat
          add 1 to tCountIndex
          if tCountIndex is 1 then
               put "contacts list" into tLastElement
          end if
          drawIndex xKey, tLastElement
          put xKey into tLastElement
          repeat for each key xContact in pContactsA[xKey]
               drawContact pContactsA[xKey][xContact], tLastElement
               put xContact into tLastElement
          end repeat
     end repeat
end drawContactsUI


command drawIndex pName, pLastElement
     local tTemp
     
     copy grp "letter template" to grp "contacts list"
     put it into tTemp
     set the name of tTemp to pName
     set the vis of tTemp to true
     set the text of fld "letter field" of tTemp to pName
     if pLastElement is "contacts list" then
          set the top of tTemp to the top of grp pLastElement of stack "Contacts"
     else
          set the top of tTemp to the bottom of grp pLastElement of stack "Contacts" - 2
     end if
end drawIndex


command drawContact pContactA, pLastElement
     local tTemp
     
     copy grp "contact template" to grp "contacts list"
     put it into tTemp
     set the name of tTemp to pContactA["cdb"]["cdbRecordID"]
     set the vis of tTemp to true
     if pContactA["firstName"] is empty and pContactA["lastName"] is empty then
          set the text of fld "contact name" of tTemp to empty
     else if pContactA["lastName"] is empty then
          set the text of fld "contact name" of tTemp to pContactA["firstName"]
     else if pContactA["firstName"] is empty then
          set the text of fld "contact name" of tTemp to pContactA["lastName"]
     else
          set the text of fld "contact name" of tTemp to pContactA["lastName"] & " " & pContactA["firstName"]
     end if
     set the textstyle of word 1 of fld "contact name" of tTemp to "bold"
     set the top of tTemp to the bottom of grp pLastElement of stack "Contacts"
end drawContact


command clearContactList
     repeat for each line xLine in the childControlNames of grp "contacts list" of stack "Contacts"
          if xLine is "button" then next repeat
          delete grp xLine of grp "contacts list" of stack "Contacts"
     end repeat
end clearContactList


command editContact pRecordID
     local tTable, tRecordIDs, tTarget
     
     //Clear recent contact
     put empty into gContactA
     
     //SET UP FOR CDB_READ
     put pRecordID into tRecordIDs
     
     //Specify the table
     put "people" into tTable
     
     //Specify the target (cloud or local)
     put "local" into tTarget
     
     //Read the contact and put it into gContactA
     put cdb_read(tTable,tRecordIDs,tTarget) into gContactA
end editContact


command syncDown
     local tRecordID, tTable, tSource, tAllowDeletes, tDetectCollisions
     
     //Sync from cloud
     put "*" into tRecordID
     put "people" into tTable
     put "cloud" into tSource
     put false into tAllowDeletes
     put false into tDetectCollisions
     get cdb_sync(tRecordID,tTable,tSource,tAllowDeletes,tDetectCollisions)
end syncDown


command checkRefresh
     //this command gets called if sync down does not work. It will keep calling itself until cache is empty which means the data is up to date and it will redraw the ui
     local tTable, tTarget
     
     csi_cancelPendingMessages "checkRefresh"
     
     put "cdbCache" into tTable
     put "local" into tTarget
     if cdb_count(tTable, tTarget) > 0 then
          send "checkRefresh" to me in 3 secs
     else
          clearContactList
          refreshContactList
     end if
end checkRefresh
