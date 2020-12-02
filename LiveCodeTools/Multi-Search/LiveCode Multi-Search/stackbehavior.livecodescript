script "LiveCodeMultiSearchStackBehavior"
--LiveCode Multi-Search - Andy piddock 11/2018
--v1.0.2

on preOpenSatck
   
   put empty into fld "Search" of group id 1032 of card "Main" of stack "LiveCode Multi-Search"
   
   --setup Navigation Bar - segmented control widget
   local tNumberList
   local tNamesList
   local tLabelsList
   
   set the itemCount of widget "NavigationBar" of card "Main" of stack "LiveCode Multi-Search" to 8
   
   put "100,100,100,100,100,100,100,100" into tNumberList
   put "LC Forum,Nabble Forum,StackOverflow,LC Dictionary,LC Lessons,GitHub,GitHub Gist,LC Wiki" into tNamesList
   put "LC Forum,Nabble Forum,StackOverflow,LC Dictionary,LC Lessons,GitHub,GitHub Gist,LC Wiki" into tLabelsList
   
   set the width of widget "NavigationBar" of card "Main" of stack "LiveCode Multi-Search" to the number of items of tNamesList * 100
   
   set the itemMinExtents of widget "NavigationBar" of card "Main" of stack "LiveCode Multi-Search" to tNumberList
   set the itemNames of widget "NavigationBar" of card "Main" of stack "LiveCode Multi-Search" to tNamesList
   set the itemLabels of widget "NavigationBar" of card "Main" of stack "LiveCode Multi-Search" to tLabelsList
   
   set the left of widget "NavigationBar" of card "Main" of stack "LiveCode Multi-Search" to the left of card "Main" of stack "LiveCode Multi-Search" +80
   
   emptyUrls
   
end preOpenSatck

--empty browser urls
on emptyUrls
   
   local tControlCount
   local tControl
   local tBrowserWidgetNames
   
   set the itemdel to comma
   
   --get number of controls of the current card and filter out those which are Browser widgets
   --and combine into a comma seperated items list
   
   put the number of controls of card "Main" of stack "LiveCode Multi-Search" into tControlCount
   
   repeat with tControl = 1 to tControlCount
      
      if the name of control tControl of card "Main" of stack "LiveCode Multi-Search" contains "Browser" then
         put the name of control tControl of card "Main" of stack "LiveCode Multi-Search" & comma after tBrowserWidgetNames
      end if
      
   end repeat
   
   --remove trailing comma
   delete char -1 of tBrowserWidgetNames
   
   
   --hide Browser widgets
   repeat with tBrowserSelected = 1 to the number of items of tBrowserWidgetNames
      
      set the url of control item tBrowserSelected of tBrowserWidgetNames of card "Main" of stack "LiveCode Multi-Search" to empty
      
   end repeat
   
   
end emptyUrls


on browserNavigateBegin pUrl
   set the visible of widget "Spinner" to true 
   put "searching / loading...." into fld "Status"
end browserNavigateBegin

on browserNavigateComplete pUrl
   set the visible of widget "Spinner" to false 
   put empty into fld "Status"   
end browserNavigateComplete
