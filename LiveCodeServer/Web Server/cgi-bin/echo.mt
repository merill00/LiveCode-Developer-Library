#!mc
# This MetaTalk script loops over all the environment variables
# set by the server when it runs a CGI application printing out
# its name and value.
on startup
# loop over all of the global variables, getting name and value
  repeat for each item i in the globals
   put i && "=" && value(i)& return after buffer
  end repeat
# write minimal set of HTTP headers to stdout
  read from stdin until empty
  put it after buffer
  put "Content-Type: text/plain" & cr
  put "Content-Length:" && the length of buffer & cr & cr
 replace cr with "<P>" in buffer 
  put buffer
 end startup


