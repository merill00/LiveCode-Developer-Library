script "model.contact"
/* 
PUBLIC API 
*/

function createNewContact pFieldsA
   put _getAllContactsFromFile() into tAllContactsA
   // below is a poor man unique id to be used as primary
   // key for the new contact. This is not the correct way
   // of doing this.
   put the millisecs & random(999) into tUniqueID
   // the code below checks to see if the key generated above
   // is in use and will keep generating keys until it generates something
   // that is not currently in use.
   repeat while the keys of  tAllContactsA[tUniqueID] is not empty
      put the millisecs & random(999) into tUniqueID
   end repeat
   put tUniqueID into pFieldsA["id"]
   put pFieldsA into tAllContactsA[tUniqueID]
   _writeContactsToFile tAllContactsA
   return tUniqueID
end createNewContact

function getAllContacts
   put _getAllContactsFromFile() into tAllContactsA
   return tAllContactsA
end getAllContacts

function getContactByID pID
   put _getAllContactsFromFile() into tAllContactsA
   return tAllContactsA[pID]
end getContactByID

function filterContactsByField pField, pValue
   put _getAllContactsFromFile() into tAllContactsA
   repeat for each key k in tAllContactsA
      if pValue is in tAllContactsA[k][pField] then
         put tAllContactsA[k] into tContactMatchesA[k]
      end if
   end repeat
   return tContactMatchesA
end filterContactsByField

command saveContact pContactA
   put _getAllContactsFromFile() into tAllContactsA
   put pContactA into tAllContactsA[pContactA["id"]]
   _writeContactsToFile tAllContactsA
end saveContact

command deleteContact pID
   put _getAllContactsFromFile() into tAllContactsA
   delete variable tAllContactsA[pID]
   _writeContactsToFile tAllContactsA
end deleteContact

command updateContactField pID, pField, pValue
   put getContactByID(pID) into tContactA
   put pValue into tContactA[pField]
   saveContact pID, tContactA
end updateContactField

/*
Private API
   
   */
   
private function _getAllContactsFromFile
   // We need to preserve the current default folder
   // The rest of the app may depend on it and we don't want
   // side effects bugs plaging us.
   put the defaultfolder into tCurrentDefaultFolder
   set the itemdel to "/"
   set the defaultfolder to item 1 to -2 of the effective filename of this stack
   if there is a file "mycontacts.data" then
      put url "binfile:mycontacts.data" into tFileContents
      put arraydecode(tFileContents) into tAllContentsA
   else
      put empty into tAllContentsA
   end if
   set the defaultfolder to tCurrentDefaultFolder
   return tAllContentsA
end _getAllContactsFromFile
      
private command _writeContactsToFile pAllContactsA
   // We need to preserve the current default folder
   // The rest of the app may depend on it and we don't want
   // side effects bugs plaging us.
   
   put the defaultfolder into tCurrentDefaultFolder
   set the itemdel to "/"
   set the defaultfolder to item 1 to -2 of the effective filename of this stack
   put arrayencode(pAllContactsA) into url "binfile:mycontacts.data"
   set the defaultfolder to tCurrentDefaultFolder
end _writeContactsToFile
   
