script "LiveCodeMultiSearchMainNavigationBarWidgetBehavior"
--IMPORTANT
--If adding a new Browser widget then make sure that the name of the widget 
--contains the same text as the new nav bar item
--e.g navebar item "Gist" is in Browser widget "Browser Gist"

on hiliteChanged
   
   local tSelected
   local tControlCount
   local tControl
   local tBrowserWidgetNames
   
   set the itemdel to comma
   
   --get number of controls of the current card and filter out those which are Browser widgets
   --and combine into a comma seperated items list
   
   put the number of controls of this card into tControlCount
   
   repeat with tControl = 1 to tControlCount
      
      if the name of control tControl contains "Browser" then
         put the name of control tControl & comma after tBrowserWidgetNames
      end if
      
   end repeat
   
   --remove trailing comma
   delete char -1 of tBrowserWidgetNames
   
   put the hilitedItemNames of me into tSelected
   
   
   --hide Browser widgets
   repeat with tBrowserSelected = 1 to the number of items of tBrowserWidgetNames
      
      set the visible of control item tBrowserSelected of tBrowserWidgetNames to false
      
   end repeat
   
   
   --action/display the selected Browser widget
   repeat with tBrowserSelected = 1 to the number of items of tBrowserWidgetNames
      
      if item tBrowserSelected of tBrowserWidgetNames contains tSelected then
         
         set the visible of control item tBrowserSelected of tBrowserWidgetNames to true
         
      end if
      
   end repeat
   
end hiliteChanged
