script "LiveCodeMultiSearchMainGroupid1032SearchButtonBehavior"

on mouseUp pMouseButton
   
   local tSearch
   local tRep
   local tExtension
   
   repeat with tRep = 1 to the number of buttons of grp "extensions"
      if the hilite of button tRep of grp "extensions" is true then
         
         put "+extension:" & the short Name of button tRep of grp "extensions" after tExtension
         
      end if  
      
   end repeat
   
   local tSearchGist
   local tSearchLCForum
   local tSearchNabbleForum
   local tSearchStackOverflow
   local tSearchLCLessons
   local tSearchGitHub
   local tSearchLCDict
   
   --Gist
   put "https://gist.github.com/search?q=" & fld "Search" & tExtension & "&ref=opensearch" into tSearchGist
   set the url of widget "Browser GitHub Gist" to tSearchGist
   
   --LC Forum
   put "http://forums.livecode.com/search.php?keywords=" & fld "Search" into tSearchLCForum
   set the url of widget "Browser LC Forum" to tSearchLCForum
   
   --Nabble
   put "http://runtime-revolution.278305.n4.nabble.com/template/NamlServlet.jtp?macro=search_page&node=278305&query=" & fld "Search" into tSearchNabbleForum
   set the url of widget "Browser Nabble Forum" to tSearchNabbleForum
   
   --StackOverflow
   put "https://stackoverflow.com/search?q=%5Blivecode%5D+" & fld "Search" into tSearchStackOverflow
   set the url of widget "Browser StackOverflow" to tSearchStackOverflow
   
   --LC Lessons
   put "http://lessons.livecode.com/searches?&text=" & fld "Search" & "&commit=Search" into tSearchLCLessons
   set the url of widget "Browser LC Lessons" to tSearchLCLessons
   
   --GitHub
   put "https://github.com/search?q=livecode " & fld "Search" into tSearchGitHub
   set the url of widget "Browser GitHub" to tSearchGitHub
   
   --LC Dictionary
   put "http://2108.co.uk/LCDict/api.html?search=" & fld "Search" into tSearchLCDict
   set the url of widget "Browser LC Dictionary" to tSearchLCDict
   
   --LC Wiki
   put "http://livecode.wikia.com/wiki/Special:Search?query=" & fld "Search" into tSearchLCWiki
   set the url of widget "Browser LC Wiki" to tSearchLCWiki
   
   
end mouseUp

