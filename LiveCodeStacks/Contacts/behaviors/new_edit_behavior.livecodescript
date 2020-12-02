script "new_edit_behavior"
//>GLOBALS
global gAction, gContactA


on preOpenCard
     switch gAction
          case "add"
               lock screen
               clearInputFields
               set the vis of button "Create" of cd "New_Edit" of stack "Contacts" to true
               set the vis of button "Cancel" of cd "New_Edit" of stack "Contacts" to true
               set the vis of button "Update" of cd "New_Edit" of stack "Contacts" to false
               set the vis of button "Delete" of cd "New_Edit" of stack "Contacts" to false
               set the vis of grc "contact backdrop" of cd "New_Edit" of stack "Contacts" to false
               set the text of fld "contact label" of cd "New_Edit" of stack "Contacts" to "New Contact"
               set the textColor of fld "contact label" of cd "New_Edit" of stack "Contacts" to "#737576"
               unlock screen
               break
               
          case "edit"
               lock screen
               clearInputFields
               set the vis of button "Create" of cd "New_Edit" of stack "Contacts" to false
               set the vis of button "Cancel" of cd "New_Edit" of stack "Contacts" to true
               set the vis of button "Update" of cd "New_Edit" of stack "Contacts" to true
               set the vis of button "Delete" of cd "New_Edit" of stack "Contacts" to true
               set the vis of grc "contact backdrop" of cd "New_Edit" of stack "Contacts" to true
               set the textColor of fld "contact label" of cd "New_Edit" of stack "Contacts" to "white"
               
               if gContactA[the keys of gContactA]["firstName"] is not empty and gContactA[the keys of gContactA]["lastName"] is not empty then
                    set the text of fld "contact label" of cd "New_Edit" of stack "Contacts" to toUpper(char 1 of gContactA[the keys of gContactA]["lastName"]) & toUpper(char 1 of gContactA[the keys of gContactA]["firstName"])
               else if gContactA[the keys of gContactA]["firstName"] is empty then
                    set the text of fld "contact label" of cd "New_Edit" of stack "Contacts" to toUpper(char 1 of gContactA[the keys of gContactA]["lastName"])
               else if gContactA[the keys of gContactA]["lastName"] is empty then
                    set the text of fld "contact label" of cd "New_Edit" of stack "Contacts" to toUpper(char 1 of gContactA[the keys of gContactA]["firstName"])
               else
                    set the text of fld "contact label" of cd "New_Edit" of stack "Contacts" to "N/A"
               end if
               
               put gContactA[the keys of gContactA]["firstName"] into fld "firstName field" of grp "firstName" of stack "Contacts"
               put gContactA[the keys of gContactA]["lastName"] into fld "lastName field" of grp "lastName" of stack "Contacts"
               put gContactA[the keys of gContactA]["dob"] into fld "dob field" of grp "dob" of stack "Contacts"
               put gContactA[the keys of gContactA]["phone"] into fld "phone field" of grp "phone" of stack "Contacts"
               put gContactA[the keys of gContactA]["email"] into fld "email field" of grp "email" of stack "Contacts"
               unlock screen
               break
     end switch
end preOpenCard



private function _____MOUSE
end _____MOUSE
on mouseUp
     cs_postMaster_mouseUp
end mouseUp



private function _____CARD_CODE
end _____CARD_CODE
command cs_postMaster_mouseUp
     local tOwner
     
     put the short name of the target into tOwner
     
     switch tOwner
          case "Create"
               createContact
               break
               
          case "Cancel"
               go cd "Main" of stack "Contacts"
               break
               
          case "Update"
               updateContact
               break
               
          case "Delete"
               deleteContact
               break
     end switch
end cs_postMaster_mouseUp



private function _____HELPERS
end _____HELPERS
command clearInputFields
     put empty into fld "firstName field" of grp "firstName" of stack "Contacts"
     put empty into fld "lastName field" of grp "lastName" of stack "Contacts"
     put empty into fld "dob field" of grp "dob" of stack "Contacts"
     put empty into fld "phone field" of grp "phone" of stack "Contacts"
     put empty into fld "email field" of grp "email" of stack "Contacts"
end clearInputFields


command createContact
     local tDataA, tTable, tTarget, tRecordID
     
     if fld "firstName field" of grp "firstName" of stack "Contacts" is empty and fld "lastName field" of grp "lastName" of stack "Contacts" is empty then
          answer "Please provide first name and/or last name of the new contact" with "OK"
          exit createContact
     end if
     
     //SET UP FOR CDB_CREATE
     //Input the values into each key
     put fld "firstName field" of grp "firstName" of stack "Contacts" into tDataA["firstName"]
     put fld "lastName field" of grp "lastName" of stack "Contacts" into tDataA["lastName"]
     put fld "dob field" of grp "dob" of stack "Contacts" into tDataA["dob"]
     put fld "phone field" of grp "phone" of stack "Contacts" into tDataA["phone"]
     put fld "email field" of grp "email" of stack "Contacts" into tDataA["email"]
     
     //Specify the table
     put "people" into tTable
     
     //Specify the target (cloud or local)
     put "local" into tTarget
     
     //Create the contact
     put cdb_create(tDataA,tTable,tTarget) into tRecordID
     
     //Sync to cloud
     syncUp tRecordID
     
     //RETURN TO LIST OF CONTACTS
     go cd "Main" of stack "Contacts"
end createContact


command updateContact
     local tDataA, tTable, tRecordID, tTarget
     
     put the keys of gContactA into tRecordID
     
     //SET UP FOR CDB_UPDATE
     
     //Specify the table
     put "people" into tTable
     
     //Specify the target (cloud or local)
     put "local" into tTarget
     
     //Input updated values into each key
     put fld "firstName field" of grp "firstName" of stack "Contacts" into tDataA["firstName"]
     put fld "lastName field" of grp "lastName" of stack "Contacts" into tDataA["lastName"]
     put fld "dob field" of grp "dob" of stack "Contacts" into tDataA["dob"]
     put fld "phone field" of grp "phone" of stack "Contacts" into tDataA["phone"]
     put fld "email field" of grp "email" of stack "Contacts" into tDataA["email"]
     
     //Update the contact
     cdb_update tDataA, tTable, tRecordID, tTarget
     
     //Sync to cloud to make sure we have all new and updated records available
     syncUp tRecordID
     
     //RETURN TO LIST OF CONTACTS
     go cd "Main" of stack "Contacts"
end updateContact


command deleteContact
     local tTable, tRecordIDs,tTarget
     
     put the keys of gContactA into tRecordIDs
     
     //SET UP FOR CDB_DELETE
     
     //Specify the table
     put "people" into tTable
     
     //Specify the target (cloud or local)
     put "local" into tTarget
     
     //Delete the contact locally
     cdb_delete tTable, tRecordIDs, tTarget
     
     //Delete the contact in the cloud
     put "cloud" into tTarget
     
     //DELETE RECORD
     cdb_delete tTable, tRecordIDs, tTarget
     
     //RETURN TO LIST OF CONTACTS
     go cd "Main" of stack "Contacts"
end deleteContact


command syncUp pRecordID
     local tTable, tSource, tAllowDeletes, tDetectCollisions
     
     //SET UP cdb_sync
     
     //Specify the table
     put "people" into tTable
     
     //Specify the source (cloud or local)
     put "local" into tSource
     
     //Specify what to do with deletes
     put false into tAllowDeletes
     
     //Specify what to do with collisions
     put false into tDetectCollisions
     
     //SYNC DATA FROM LOCAL TO CLOUD
     get cdb_sync(pRecordID,tTable,tSource,tAllowDeletes,tDetectCollisions)
end syncUp
