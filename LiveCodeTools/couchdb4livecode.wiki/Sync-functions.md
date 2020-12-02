The sync functions save all the data to a property set of an external/invisible stack for storge, and keeps the data in a property set on the main stack while the app is running.

The Sync commands:

**dbdb.local.newuser** _pURL pUser pPass pAuth pPrefix pOther pConflict pIDPrefix pApp_

This is the first command that needs to be run. It creates the save stack, saves all the necessary settings and creates the CouchDB user, user's database, installs the necessary design documents, and/or if there is already existing documents they are downloaded.
* pURL - the URL including port number of the CouchDB installation, e.g. http://127.0.0.1:5984
* pUser - User's username
* pPass - User's password
* pAuth - base64 encoded string for an administrator's username:password
* pPrefix - (optional) prefix of the database name, default: "user"
* pOther - (optional) array of other data to be saved in the user record (e.g. email address, secret question)
* pConflict - (optional) how to handle conflicting updated: server, local, or duplicate, default: "server"
   * server: server's copy wins conflict
   * local: local copy wins conflict
   * duplicate: both copies are saved, one with a modified name
* pIDPrefix - (optional) prefix for the id number of each document, default: "user"
* pApp - (optional) application name for searches, default: the same as pIDPrefix

**dbdb.stack.load** _pFileName pStackName pMainFolder pSubFolder pPropSet_

Should be put in the "openStack" handler.

Opens save stack in the background and copies its contents to the main stack.
* pFileName - file name to use for the save stack
* pStackName - name of the stack (for saving)
* pMainFolder - (optional) the main folder or specialFolder that the save stack will be saved in. Defaults:
   * Mac and Windows: defaults to "support"
   * iOS and Android: defaults to "document"
   * Linux and HTML5: defaults to "home"
* pSubFolder - (optional) a folder to be created in the main folder for the save file, defaults to the short name of the stack
* pPropSet - (optional) name for the property set to save the data (useful for using the same data file for multiple apps), default: "daybedDB"

**dbdb.stack.save** _pStackName pPropSet_

Should be put at least in the "closeStack".

Copies the user data from the main stack to the save stack and saves it.
* pStackName - name of the save stack
* pPropSet - the same as the one used in the load command (if applicable)

**dbdb.local.sync**

Begins the sync process between the data saved in the local stack and the user's CouchDB database.

**dbdb.local.setdoc** _pDoc_

Saves a document to the main property set and flags it as either new or changed.
pDoc - array containing the full document

**dbdb.local.deletedoc** _pDocID_

Loads and saves a document, flagging it as deleted.
pDocID - ID number of the document

**dbdb.local.getdoc** _pDocID_

Loads a document from the main property set.
pDocID - ID number of the document