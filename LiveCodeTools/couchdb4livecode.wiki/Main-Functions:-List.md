###Couch Functions (values for pFunk)

####Couch System Functions

* GET Function: slash
	* Returns the welcome message and version information

* GET Function: active\_tasks	
	* Obtains a list of the tasks running in the server

* GET Function: all\_dbs	
	* Returns a list of all the databases

* GET Function: config	
	* Obtains a list of the entire server configuration
   
* GET Function: config
	* Returns all the configuration values for the specified section
	* pOptions["section"] contains the section name

* GET Function: config
	* Returns a specific section/configuration value
	* pOptions["section"] contains the section name
	* pOptions["key"] contains the configuration key name

* PUT Function: config
	* Sets the specified configuration value
	* pOptions["section"] contains the section name
	* pOptions["key"] contains the configuration key name
	* pOptions["value"] contains the value that the key should be set to

* DELETE Function: config
	* Removes the current setting (dangerous if you don't know what you are doing)
	* pOptions["section"] contains the section name
	* pOptions["key"] contains the configuration key name

* GET Function: log	
	* Returns the server log file

* POST Function: restart	
	* Restarts the server

* GET Function: stats	
	* Returns server statistics
 	
* GET Function: uuids	
	* Generates a list of UUIDs from the server
     
####Couch Database Functions

* GET Function: db
	* Returns the database information

* POST Function: db
	* Creates a new document with generic ID if he had not specified
	* pOptions should contain the doc info

* PUT Function: db
	* Creates a new database

* DELETE Function: db
	* Deletes an existing database
 	
* GET Function: all\_docs	
	* Returns a built-in view of all documents in this database

* POST Function: all\_docs	
	* Returns certain rows from the built-in view of all documents
	* pDoc["keys"] should be a numbered list of the rows desired
      
* POST  Function: bulk\_docs	
	* Inserts or updates multiple documents in to the database in a single request
	* pDoc should be a numbered array with each number representing a single document

* GET Function: changes	
	* Returns changes for the given database

* POST Function: changes
	* Returns changes for the given database for certain document IDs
	* pDoc["doc\_ids"] should be a numbered list with desired documents
      
* POST Function: compact
	* Starts a compaction for the database

* POST Function: compactdesign
	* Starts a compaction for all the views in the selected design document
	* pDoc should be the name of the design document
      
* POST Function: ensure\_full\_commit
	* Makes sure all uncommitted changes are written and synchronized to the disk
      
* POST Function: purge
	* Purges some historical documents entirely from database history
	* pDoc should be an array, each key is an id number, under each key is a numbered list with rev numbers
     		* put "c3f2c12bc8c242826e1849097900091d" into tID
     		* put "4-dc8088c3be9d44b41f87ba1470064672" into tDoc[tID][1]
     		* put couch.post(purge,tURL,tDB,tDoc)   

* GET Function: revs\_limit
	* Returns the limit of historical revisions to store for a single document in the database

* PUT Function: revs\_limit
	* Sets the limit of historical revisions to store for a single document in the database
	* pDoc is a number

* GET Function: security
	* Returns the special security object for the database

* PUT Function: security
	* Sets the special security object for the database
	* pDoc should contain keys for admins and/or members with subkeyts for names and roles
	* for example:
     		* put "uber" into tDoc["admins"]["names"][1]
     		* put "admins" into tDoc["admins"]["roles"][1]
     		* put "user" into tDoc["members"]["names"][1]
     		* put "developer" into tDoc["members"]["roles"][1]
 	
####Couch Document Functions

* GET Function: doc
	* Returns the document
	* pDocID is the id of the doc to return

* PUT Function: doc
	* Creates a new document, or new version of an existing document

* DELETE Function: doc
	* Deletes the document
	* pDocID is the document ID
	* pParams["rev"] should be the most recent rev number

####Couch Design Doc Functions

* GET Function: design
	* Returns the design document
	* pDocID is the name of the design document

* PUT Function: design
	* Creates a new design document, or new version of an existing one
	* pDoc["\_id"] is the name of the design document (unlike regular docs, this must be included)
	* pDoc["language"] is the programming language being used (most likely javascript)
	* pDoc["views"] needs to contain a sub key for each view, and each view needs a subkey ["map"] the containts the view doc

* GET Function: designinfo
	* Returns view index information for the specified design document
	* pDocID is the view document name

* GET Function: view
	* Returns results for the specified stored view
	* pDocID is the name of the design document with a slash and then the view name