script "LiveCodeMultiSearchMainGroupid1039ForwardButtonBehavior"

on mouseUp pMouseButton
   local tBrowserActive
   put the hilitedItemNames of widget "NavigationBar" into tBrowserActive
   put "Browser " & tBrowserActive into tBrowserActive
   go forward in widget tBrowserActive
end mouseUp
