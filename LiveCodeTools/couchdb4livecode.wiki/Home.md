Daybed - A Library for Apache CouchDB 

There are 3 methods to use the Daybed library:
1. [[The Main functions|Main-functions]] which give access to all CouchDB commands.
2. [[The Quick functions|Quick-functions]] which allow for quick access to essential functions.
3. [[The Sync functions|Sync-functions]] which synchronizes local documents with a database designated for the user.

Note:  FastJSON has been appended to the library, and is used by default for JSON encoding and decoding.
*  The primary commands have "fast." prefixed to the commands to differentiate them from the built in commands (mergJSON).
*  I've modified the handling of numeric arrays so that order is maintained.
*  I've added code to "fill in the blanks" with null if a numeric array has numeric gaps. (Optional)
*  I've added local variables for "keep numeric" and "fill in the blanks" so they do not need to get passed back in as an argument.
*  The original is maintained by Bob Hall here: https://github.com/bhall2001/fastjson

I recommend using FastJSON over mergJSON because:

*  MergJSON only creates JSON arrays with numeric keys that go from 1 to N with no gaps. I'm experimenting with some commands to improve this, but for now it requires a few extra steps to work around.
*  I've had difficulties with MergJSON in Ubuntu standalones. (Sorry, I REALLY need to fill out bug report for this)
*  FastJSON is easier to use with Livecode-server. (No need to compile a stack and include the external)
