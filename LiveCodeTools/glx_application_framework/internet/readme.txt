Change log for GLX Application Framework version of libURL.

1.2
* The framework version of libURL has been moved to the stack glxappLibURL. If this stack is available in memory when the framework loads then it will be inserted into the backscripts. If the RunRev version of libURL is in the backscripts then it will be removed first. Make this stack a substack of your 'application' stack to make sure it is available when the framework looks for it.
* Cookie extraction code now uses the Location: value of the header as the URL when processing a URL with a 302 response from the server.
* Fixed some bugs in cookie extraction.
* Fixed some error reporting issues ('invalid host address' reported incorrectly sometimes).
* Fixed an issue with certificates and error reporting.