script "LiveCodeMultiSearchMainGroupid1039BackButtonBehavior"

on mouseUp pMouseButton
   local tBrowserActive
   put the hilitedItemNames of widget "NavigationBar" into tBrowserActive
   put "Browser " & tBrowserActive into tBrowserActive
   go back in widget tBrowserActive
end mouseUp
