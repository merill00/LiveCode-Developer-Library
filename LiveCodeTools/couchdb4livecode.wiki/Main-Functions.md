###Main Functions:

###`couch.get(pFunk,pURL,pDB,pDocID,pParams,pOptions,pFormat)`
* The couch.get function retrives a document, multiple documents, or information.

###`couch.put(pFunk,pURL,pDB,pDoc,pParams,pOptions,pFormat)`
* The couch.put function inserts a value or a document into a database.

###`couch.post(pFunk,pURL,pDB,pDoc,pParams,pOptions,pFormat)`
* The couch.post function inserts multiple documents or values into a database.

###`couch.delete(pFunk,pURL,pDB,pDocID,pParams,pOptions,pFormat)`
* The couch.delete function deletes a document or database, or a config key.
	* Note: the database is really deleted, however the document can still be retrieved if the id and rev are known.

###Function Parameters

* **pFunk** (always required) Couch function being called; the leading underscore can be omitted, for example "all\_docs"
	* a list is included below of functions that have been tested
	* there are four categories of functions:  system, database, document, design document

* **pURL** (always required) the URL of the CouchDB installation, including "http://" and the port number if applicable
	* For example:   "http://192.168.23.42:5984/"
	* With username/password:    "http://admin:trustno1@192.168.23.42:5984/"

* **pDB** (required when acting on or retrieving from a database) - the name of the database being accessed
	* should be blank for system functions, must be included for database, document, and design document
		
* **pDocID**  (for get and delete functions) the document "\_id" being retrieved
	* should be blank for system and database functions, must be included for document and design document 
	* use the pDocID param to specify the name of a design document being called
		
* **pDoc** - (for put and post functions) array containing the data being converted into a document for the database
	* should be blank for system functions
	* required for document and design document (also used in a db function)

* **pParams** - an array with any OPTIONAL parameters, with the parameter as a key.
	* These parameters are specified in the CouchDB API
	* For example:  to download documents when running the \_all\_docs function, and limit the list to only 10 records:
		* `put true into pParams["include\_docs"]`
     	* `put 10 into pParams["limit"]`
	* Example, to include the revision number for a document
     	* `put "13-8j4f9438jf3498j98fy39d23d" into pParams["rev"]`

* **pOptions** - (optional) header options, including authentication, config values and return format
	* For Design Documents, use the following options:
		* pOptions["ddoc"]["func"] for the function being called (info, view, show, list, update)
		* pOptions["ddoc"]["name"] for the name of the specific function programmed in the ddoc
		* pOptions["ddoc"]["otherid"] and pOptions["ddoc"]["otherfunc"] for further extended URLs
	* For Authentication, use the following options:
		* pOptions["authtype"] for the type of authentication being used, valid values:
			* "login" - default value if blank, must be in the format username:password
			* "encoded" - base64 encoded version of username:password
			* "cookie" - cookie-based login
		* pOptions["authval"] with the login, encoded login or cookie value 
	* To set the return format:
		* pOptions["format"] with a valid format value (array, rawjson, prettyjson)
	* When setting \_config values:
		* pOptions["key"] with the key to be set
		* pOptions["value"] with the value to set it to
	* When PUTting an attachment (using the "attach" function):
		* pOptions["attachname"] with the file name to be used in CouchDB
		* pOptions["attachpath"] with the full path to the file being uploaded
		* pOptions["attachmode"] with "bin" or "text", "bin" will be used if left blank
		* pOptions["attachtype"] with the MIME content-type, for example "image/jpg" or "application/pdf"
			* If left blank, the script will attempt to fill in an applicable type
	* When PUTting an attachment (inline):
		* Repeat for each file to be included
		* `pOptions["attachments"][filename]["path"]` with the full file path of the file to be uploaded
		* `pOptions["attachments"][filename]["mime"]` with the MIME content-type of the file
		* `pOptions["attachments"][filename]["mode"]` with "bin" or "text", with "bin" used as default
	* When GETting an attachment:
		* pOptions["attachment"] with the file name in DB
		* pOptions["destination"] with the destination location (include filename)		
		
###Other Functions/Parameters

####`couch.getrev(pURL,pDB,pDocID,pOptions)`
This function returns the most recent revision number for the specified document.

####`couch.securedb(pFunk,pURL,pDB,pOptions,pAdminNames,pAdminRoles,pMemberNames,pMemberRoles)`
The couch.securedb function sets the "\_security" document for the specified database.
* pFunk - "set" (replace current security), "add" adds user/roles to existing security, "delete" removes user/roles from existing
* pAdminNames: sets the given names up with admin rights (read,write,delete all)
* pAdminRoles: sets the given user roles up with admin rights (read,write,delete all)
* pMemberNames: sets the given names up with member rights (read, write documents/read design documents)
* pMemberRoles: sets the given user roles up with member rights (read, write documents/read design documents)

####`couch.adduser(pURL,pUser,pPass,pOptions,pAddDB)`
The couch.adduser function inserts a new record into the "\_users" database, optionally creates a database for the user, and sets the new user as the admin and member (which makes that user the only one who can access it).
* pUsername: Username of the person signing up.
* pPassword: Password for the account
* pOptions["roles"]: can be used to assign the user to roles, must be in a numbered array
* pAddDB: if true, adds a database with the user's name and secures it
* Note:  only an admin can create a user

####`couch.peruserDB(pUsername)`
Requires "couchperuser" to be installed (https://github.com/etrepum/couchperuser)
The couch.peruserDB function returns the database name associated with the username specified.

###Authentication: 
if the CouchDB URL requires authentication, it can be achieved in one of two ways:

1. Include the username and password as part of the URL, for example:
	* "http://admin:passw0rd@192.168.0.42:5984/"

2. Use the pOptions parameter, and the script will encode the username and password into the httpheaders:
	* `put "admin:passw0rd" into pOptions["authval"]`
	* `put "login" into pOptions["authtype"]`

3. Use the pOptions parameter with a base 64 encoded username:password, which will be added to the httpheaders:
	* for example, put base64encode("username:password") will yield the string dXNlcm5hbWU6cGFzc3dvcmQ=
	* `put "dXNlcm5hbWU6cGFzc3dvcmQ=" into pOptions["authval"]`
	* `put "encoded" into pOptions["authtype"]`

4. Use cookies/sessions... 
	* First  get cookie by posting username and password to sessions
		* `put "admin" into pDoc["name"]     `
		* `put "passw0rd" into pDoc["password"]`
   	* `put couch.post("session",tURL,,pDoc) into theCookie`
	* Store it somewhere. For each subsequent call, send theCookie in pOptions
   	* `put theCookie into pOptions["authval"]`
		* `put "cookie" into pOptions["authtype"]`

###Adding Attachments
	* Files can be attached to documents inline or through the standalone API
	* In order to properly view a document online (e.g. - through a CouchApp) the proper MIME-Type needs to be specified
	* To use the standalone API:
		* Must specify the revision number in pParams["rev"]
		* Each attachment needs to be added seperately
		* Use these options: 
			* pOptions["attachname"] - name of the file as saved to the document
			* pOptions["attachpath"] - path to the file
			* pOptions["attachmode"] - binary or text
			* pOptions["attachtype"] - MIME type (will try to generate if blank)
	* To add documents inline:
		* Use the options" pOptions["attachments"] with a seperate key for each file
		* If the document exists, the entire document needs to be reuploaded

###Return Format
	* include pOptions["format"] with "array", "rawjson" or "prettyjson" for the return format
	* the stack can have a customProperty called "preferredFormat" which can be one of those three values,
	* if pOptions["format"] is blank, then "preferredFormat" will be used
	* if neither has a value, then "array" will be used

###To-Do List (Extra functions)
- Couch based message queueing system
- Daybed Toolbox
- More backendian services

