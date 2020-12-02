script "levureExternalEditorServer"
constant kDefaultPort = "61373"


command levureExternalEditorStartServer pPort
  local tError, tDefaultInterface

  if pPort is not an integer then put kDefaultPort into pPort

  put the defaultnetworkinterface into tDefaultInterface
  set the defaultnetworkinterface to "127.0.0.1"
	accept datagram connections on port pPort with message "messageReceived"
  put the result into tError

  set the defaultnetworkinterface to tDefaultInterface

  return tError for error
end levureExternalEditorStartServer



command messageReceived pSocket, pMsg
	  local tStackName, tFilename, tError

		-- put pMsg ------------------------ temp test
	  split pMsg by "&" and "="
	  put textDecode(urldecode(pMsg["stack"]), "utf8") into tStackName
	  put textDecode(urldecode(pMsg["filename"]), "utf8") into tFilename

	  if there is a stack tStackName and the filename of stack tStackName is tFilename then
	    try
	      local tOldPreserveVariables, tOldExplicitVariables, tDefaultStack

	      put the defaultStack into tDefaultStack
	      put the preserveVariables into tOldPreserveVariables

	      set the defaultStack to me
	      set the preserveVariables to true

	      lock messages
	      create button "CompileScript"

	      set the script of button "CompileScript" to (line 2 to -1 of url("file:" & tFilename))
	      put the result into tError

	      if tError is empty then
	        set the script of stack tStackName to the script of button "CompileScript"
	        -- write "success" to socket pSocket
					answer "Success!"
	      end if

	      delete button "CompileScript"
	      set the preserveVariables to tOldPreserveVariables
	      set the defaultStack to tDefaultStack
	      unlock messages
	    catch tError

	    end try

	    if tError is not empty then
	      write "error:" && tError to socket preserveVariables
	      beep
	      put tError
	      answer error "Error setting script of stack" && tStackName & "."
	    end if
	  else
	    -- write "file not found" to socket preserveVariables
			answer error "File not found!"
	  end if
end messageReceived
