script "chart Behavior"

before resizeControl
   _Redraw
end resizeControl

before openControl
   _Redraw
end openControl

setProp uChartType pType
   _Redraw
   pass uChartType
end uChartType

setProp uChartData pData
   _Redraw
   pass uChartData
end uChartData

setProp uChartOptions pOptions
   _Redraw
   pass uChartOptions
end uChartOptions

local sRedrawMsg
private command _Redraw
   cancel sRedrawMsg
   send "_DoRedraw" to me in 0
   put the result into sRedrawMsg
end _Redraw

on _DoRedraw
   set the rect of widget "browser" of me to the rect of me
   local tHTML
   put the uTemplate of me into tHTML
   local tWidth, tHeight, tFontColor, tFontFamily, tFontSize, tFontStyle
   local tBackColor, tType, tData, tOptions
   put the width of me - 20 into tWidth
   put the height of me - 20 into tHeight
   put the effective textFont of me into tFontFamily
   put the effective textSize of me into tFontSize
   put _HexColor(the effective textColor of me) into tFontColor
   if the effective textStyle of me contains "italic" then
      put "italic" into tFontStyle
   else
      put "normal" into tFontStyle
   end if
   put _HexColor(the effective backColor of me) into tBackColor
   put the uChartType of me into tType
   put ArrayToJSON(the uChartData of me, "", true) into tData
   put ArrayToJSON(the uChartOptions of me, "", true) into tOptions
   delete char -2 to -1 of tOptions
   put merge(tHTML) into tHTML
   set the htmlText of widget "browser" of me to tHTML
end _DoRedraw

private function _HexColor pColor
   local tColor
   if the number of items of pColor < 3 then
      set the backColor of the templateGraphic to pColor
      set the backPixel of the templateGraphic to the effective backpixel of the templateGraphic
      put the backColor of the templateGraphic into tColor
      reset the templateGraphic
   else
      put pColor into tColor
   end if
   if the number of items of tColor is 4 then
      return format("#%02x%02x%02x%02x", item 1 of tColor, item 2 of tColor, item 3 of tColor, item 4 of tColor)
   else
      return format("#%02x%02x%02x", item 1 of tColor, item 2 of tColor, item 3 of tColor)
   end if
end _HexColor

