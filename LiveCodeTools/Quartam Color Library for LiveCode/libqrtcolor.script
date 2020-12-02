/*
Quartam Color Library for LiveCode [libqrtcolor.livecode]
Copyright (C) 2011-2012 Quartam Software / Jan Schenkel

This program is free software; you can redistribute it and/or modify 
it under the terms of the GNU Lesser General Public License as 
published by the Free Software Foundation, either version 3 of the 
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, 
but WITHOUT ANY WARRANTY; without even the implied warranty of 
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the 
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License 
along with this program.  If not, see <http://www.gnu.org/licenses>.

You can be released from the requirements of the license by purchasing a 
commercial license.

For more information, please contact Quartam Software at this address:
licenses@quartam.com
*/

/*
ACKNOWLEDGEMENTS:
- Brighter/Darker algorithms adapted from: java.awt.Color
- Color conversion algorithms adapted from: http://www.easyrgb.com/index.php?X=MATH
- CSS Color Module Level 3 information from: http://www.w3.org/TR/css3-color/
- Perceived brightness algorithm adapted from: http://www.nbdtech.com/Blog/archive/2008/04/27/Calculating-the-Perceived-Brightness-of-a-Color.aspx
- RGB average text color algorithm adapted from: revDataGridLibrary > Behaviors > Data Grid script
*/


--> constants

constant kLibVersion = "1.0.1"
constant kLibDebugMode = "false"

-- arbitrary factor for deriving brighter and darker colors
-- as used in java.awt.Color#Brighter and java.awt.Color#Darker
constant kDeriveFactor = 0.7

-- comma-separated list of supported 'best text color' algorithms
constant kBestTextAlgorithms = "perceivedBrightness,rgbAverage"

--> script local variables

local sNamedColorsA

--> engine message handlers

on libraryStack
   if the target is me then
      qrtColor_ResetNamedColors
   end if
   pass libraryStack
end libraryStack

--> public commands and functions

function qrtColor_VersionNumber
   return kLibVersion
end qrtColor_VersionNumber

command qrtColor_ResetNamedColors
   put empty into sNamedColorsA
   p_qrtColor_LoadLiveCodeColors
   p_qrtColor_LoadCSS3Colors
   if the platform is "Win32" then
      p_qrtColor_LoadWindowsColors
   end if
end qrtColor_ResetNamedColors

command qrtColor_AddNamedColor pColorName, pRGBTriplet
   p_qrtColor_AssertRGBTriplet pRGBTriplet
   put pRGBTriplet into sNamedColorsA[pColorName]
end qrtColor_AddNamedColor

command qrtColor_RemoveNamedColor pColorName
   p_qrtColor_AssertColorName pColorName
   delete variable sNamedColorsA[pColorName]
end qrtColor_RemoveNamedColor

function qrtColor_NameToRGB pName
   p_qrtColor_AssertColorName pName
   return sNamedColorsA[pName]
end qrtColor_NameToRGB

function qrtColor_WebToRGB pWebColor
   p_qrtColor_AssertWebColor pWebColor
   return p_qrtColor_Hex2RGB(char 2 to 7 of pWebColor)
end qrtColor_WebToRGB

function qrtColor_RGBToWeb pRGBTriplet
   p_qrtColor_AssertRGBTriplet pRGBTriplet
   return "#" & p_qrtColor_RGB2Hex(pRGBTriplet)
end qrtColor_RGBToWeb

function qrtColor_HexToRGB pHexColor
   p_qrtColor_AssertHexColor pHexColor
   return p_qrtColor_Hex2RGB(char 3 to 8 of pHexColor)
end qrtColor_HexToRGB

function qrtColor_RGBToHex pRGBTriplet
   p_qrtColor_AssertRGBTriplet pRGBTriplet
   return "0x" & p_qrtColor_RGB2Hex(pRGBTriplet)
end qrtColor_RGBToHex

function qrtColor_HSLToRGB pHSLTriplet
   p_qrtColor_AssertHSLTriplet pHSLTriplet
   return p_qrtColor_HSL2RGB(pHSLTriplet)
end qrtColor_HSLToRGB

function qrtColor_RGBToHSL pRGBTriplet
   p_qrtColor_AssertRGBTriplet pRGBTriplet
   return p_qrtColor_RGB2HSL(pRGBTriplet)
end qrtColor_RGBToHSL

function qrtColor_HSVToRGB pHSVTriplet
   p_qrtColor_AssertHSVTriplet pHSVTriplet
   return p_qrtColor_HSV2RGB(pHSVTriplet)
end qrtColor_HSVToRGB

function qrtColor_RGBToHSV pRGBTriplet
   p_qrtColor_AssertRGBTriplet pRGBTriplet
   return p_qrtColor_RGB2HSV(pRGBTriplet)
end qrtColor_RGBToHSV

function qrtColor_CMYToRGB pCMYTriplet
   p_qrtColor_AssertCMYTriplet pCMYTriplet
   return p_qrtColor_CMY2RGB(pCMYTriplet)
end qrtColor_CMYToRGB

function qrtColor_RGBToCMY pRGBTriplet
   p_qrtColor_AssertRGBTriplet pRGBTriplet
   return p_qrtColor_RGB2CMY(pRGBTriplet)
end qrtColor_RGBToCMY

function qrtColor_CMYKToRGB pCMYKQuad
   p_qrtColor_AssertCMYKQuad pCMYKQuad
   return p_qrtColor_CMY2RGB(p_qrtColor_CMYK2CMY(pCMYKQuad))
end qrtColor_CMYKToRGB

function qrtColor_RGBToCMYK pRGBTriplet
   p_qrtColor_AssertRGBTriplet pRGBTriplet
   return p_qrtColor_CMY2CMYK(p_qrtColor_RGB2CMY(pRGBTriplet))
end qrtColor_RGBToCMYK

function qrtColor_BestTextColor pRGBTriplet, pAlgorithm
   p_qrtColor_AssertRGBTriplet pRGBTriplet
   p_qrtColor_AssertBestTextAlgorithm pAlgorithm
   return p_qrtColor_BestTextColor(pRGBTriplet, pAlgorithm)
end qrtColor_BestTextColor

function qrtColor_BrighterColor pRGBTriplet
   p_qrtColor_AssertRGBTriplet pRGBTriplet
   local tRed, tGreen, tBlue
   put item 1 of pRGBTriplet into tRed
   put item 2 of pRGBTriplet into tGreen
   put item 3 of pRGBTriplet into tBlue
   local tBrighterColor, tVarI
   put round(1/(1 - kDeriveFactor)) into tVarI
   if tRed = 0 and tGreen = 0 and tBlue = 0 then
      put tVarI & comma & tVarI & comma & tVarI into tBrighterColor
   else
      if tRed > 0 and tRed < tVarI then
         put tVarI into tRed
      end if
      if tGreen > 0 and tGreen < tVarI then
         put tVarI into tGreen
      end if
      if tBlue > 0 and tBlue < tVarI then
         put tVarI into tBlue
      end if
      put   min(round(tRed   / kDeriveFactor), 255) & comma & \
            min(round(tGreen / kDeriveFactor), 255) & comma & \
            min(round(tBlue  / kDeriveFactor), 255) \
            into tBrighterColor
   end if
   return tBrighterColor
end qrtColor_BrighterColor

function qrtColor_DarkerColor pRGBTriplet
   p_qrtColor_AssertRGBTriplet pRGBTriplet
   local tRed, tGreen, tBlue
   put item 1 of pRGBTriplet into tRed
   put item 2 of pRGBTriplet into tGreen
   put item 3 of pRGBTriplet into tBlue
   local tDarkerColor
   put   max(round(tRed   * kDeriveFactor), 0) & comma & \
         max(round(tGreen * kDeriveFactor), 0) & comma & \
         max(round(tBlue  * kDeriveFactor), 0) \
         into tDarkerColor
   return tDarkerColor
end qrtColor_DarkerColor

function qrtColor_DerivedColor pRGBTriplet, pLuminosityFactor
   p_qrtColor_AssertRGBTriplet pRGBTriplet
   p_qrtColor_AssertFactor "Luminosity factor", pLuminosityFactor
   local tHSLTriplet
   put p_qrtColor_RGB2HSL(pRGBTriplet) into tHSLTriplet
   local tLuminosity
   put item 3 of tHSLTriplet into tLuminosity
   multiply tLuminosity by pLuminosityFactor
   put max(min(tLuminosity, 1), 0) into item 3 of tHSLTriplet
   return p_qrtColor_HSL2RGB(tHSLTriplet)
end qrtColor_DerivedColor

function qrtColor_OffsetColor pRGBTriplet, pHueOffset, pSaturationOffset, pValueOffset
   p_qrtColor_AssertRGBTriplet pRGBTriplet
   p_qrtColor_AssertOffset "Hue offset", pHueOffset
   p_qrtColor_AssertOffset "Saturation offset", pSaturationOffset
   p_qrtColor_AssertOffset "Value offset", pValueOffset
   local tHSVTriplet
   put p_qrtColor_RGB2HSV(pRGBTriplet) into tHSVTriplet
   put max(min(((item 1 of tHSVTriplet) + pHueOffset       ), 1), 0) into item 1 of tHSVTriplet
   put max(min(((item 2 of tHSVTriplet) + pSaturationOffset), 1), 0) into item 2 of tHSVTriplet
   put max(min(((item 3 of tHSVTriplet) + pValueOffset     ), 1), 0) into item 3 of tHSVTriplet
   return p_qrtColor_HSV2RGB(tHSVTriplet)
end qrtColor_OffsetColor

function qrtColor_WindowsColor pColorName
   return p_qrtColor_WindowsColor(pColorName)
end qrtColor_WindowsColor

function qrtColor_WindowsColors
   local tColorsA
   put qrtColor_WindowsColorsA() into tColorsA
   combine tColorsA using return and colon
   return tColorsA
end qrtColor_WindowsColors

function qrtColor_WindowsColorsA
   local tColorNames, tColorName, tColorsA
   put   "ActiveBorder,ActiveTitle,AppWorkspace,Background," & \
         "ButtonAlternateFace,ButtonDkShadow,ButtonFace,ButtonHilight," & \
         "ButtonLight,ButtonShadow,ButtonText,GradientActiveTitle," & \
         "GradientInactiveTitle,GrayText,Hilight,HilightText," & \
         "HotTrackingColor,InactiveBorder,InactiveTitle,InactiveTitleText," & \
         "InfoText,InfoWindow,Menu,Menubar," & \
         "MenuHilight,MenuText,Scrollbar,TitleText," & \
         "Window,WindowFrame,WindowText" into tColorNames
   repeat for each item tColorName in tColorNames
      put p_qrtColor_WindowsColor(tColorName) into tColorsA[tColorName]
   end repeat
   return tColorsA
end qrtColor_WindowsColorsA

--> private commands and functions

private command p_qrtColor_AssertBestTextAlgorithm pAlgorithm
   if pAlgorithm is not among the items of kBestTextAlgorithms then
      throw "BestTextAlgorithm: must be one of '" & kBestTextAlgorithms @ "'"
   end if
end p_qrtColor_AssertBestTextAlgorithm

private command p_qrtColor_AssertFactor pFactorName, @rFactorValue
   replace space with empty in rFactorValue
   local tIsPercentage
   put char -1 of rFactorValue is "%" into tIsPercentage
   if tIsPercentage then
      delete char -1 of rFactorValue
      if rFactorValue is a number then
         put (100 + rFactorValue) / 100 into rFactorValue
      end if
   end if
   if rFactorValue is not a number or rFactorValue < 0 then
      throw pFactorName & ": must be a positive number"
   end if
end p_qrtColor_AssertFactor

private command p_qrtColor_AssertOffset pOffsetName, pOffsetValue
   if pOffsetValue is not a number or abs(pOffsetValue) > 1 then
      throw pOffsetName & ": must be a number in the range [0.0-1.0]"
   end if
end p_qrtColor_AssertOffset

private command p_qrtColor_AssertColorName pName
   if sNamedColorsA[pName] is empty then
      throw "Color name: '" & pName & "' is not a valid color name"
   end if
end p_qrtColor_AssertColorName

private command p_qrtColor_AssertWebColor @rWebColor
   local tValidFlag
   if char 1 of rWebColor is not "#" then
      put false into tValidFlag
   else if the number of chars in rWebColor is not 4 and the number of chars in rWebColor is not 7 then
      put false into tValidFlag
   else
      -- expand the short form into the long form if necessary
      if the number of chars in rWebColor is 4 then
         repeat with tIndex = 3 down to 1
            put char (tIndex + 1) of rWebColor after char (tIndex + 1) of rWebColor
         end repeat 
      end if
      put p_qrtColor_IsHex(char 2 to 7 of rWebColor) into tValidFlag
   end if
   if tValidFlag is false then
      throw "Web color: must be of the form '#NNN' or '#NNNNNN' where each N is in the range '[0-9][A-F]'"
   end if
end p_qrtColor_AssertWebColor

private command p_qrtColor_AssertHexColor pHexColor
   local tValidFlag
   if char 1 to 2 of pHexColor is not "0x" then
      put false into tValidFlag
   else if the number of chars in pHexColor is not 8 then
      put false into tValidFlag
   else
      put p_qrtColor_IsHex(char 3 to 8 of pHexColor) into tValidFlag
   end if
   if tValidFlag is false then
      throw "Hex color: must be of the form '0xNNNNNN' where each N is in the range '[0-9][A-F]'"
   end if
end p_qrtColor_AssertHexColor

private command p_qrtColor_AssertCMYTriplet pCMYTriplet
   p_qrtColor_AssertTuple pCMYTriplet, "CMY color", 3, "number", 0.0, 1.0
end p_qrtColor_AssertCMYTriplet

private command p_qrtColor_AssertCMYKQuad pCMYKQuad
   p_qrtColor_AssertTuple pCMYKQuad, "CMYK color", 4, "number", 0.0, 1.0
end p_qrtColor_AssertCMYKQuad

private command p_qrtColor_AssertHSLTriplet pHSLTriplet
   p_qrtColor_AssertTuple pHSLTriplet, "HSL color", 3, "number", 0.0, 1.0
end p_qrtColor_AssertHSLTriplet

private command p_qrtColor_AssertHSVTriplet pHSVTriplet
   p_qrtColor_AssertTuple pHSVTriplet, "HSV color", 3, "number", 0.0, 1.0
end p_qrtColor_AssertHSVTriplet

private command p_qrtColor_AssertRGBTriplet pRGBTriplet
   p_qrtColor_AssertTuple pRGBTriplet, "RGB color", 3, "integer", 0, 255
end p_qrtColor_AssertRGBTriplet

private command p_qrtColor_AssertTuple pTuple, pTypeName, pItemCount, pDataType, pMinValue, pMaxValue
   local tValidFlag
   if the number of items in pTuple is not pItemCount then
      put false into tValidFlag
   else
      put true into tValidFlag
      repeat for each item tItem in pTuple
         if (pDataType is "integer" and (tItem is not an integer or tItem < pMinValue or tItem > pMaxValue)) \
               or (pDataType is "number" and (tItem is not a number or tItem < pMinValue or tItem > pMaxValue))
         then
            put false into tValidFlag
            exit repeat
         end if
      end repeat
   end if
   if tValidFlag is false then
      local tError
      put pTypeName & ": must be of the form '" into tError
      repeat with tIndex = 1 to pItemCount
         put "N," after tError
      end repeat
      put   "' where each N is a" && pDataType && \
            "in the range [" & pMinValue & "-" & pMaxValue & "]" \
            into char -1 of tError
      throw tError
   end if
end p_qrtColor_AssertTuple

private function p_qrtColor_IsHex pHex
   repeat for each char tChar in pHex
      if tChar is not in "0123456789ABCDEF" then return false
   end repeat
   return true
end p_qrtColor_IsHex

private function p_qrtColor_Hex2RGB pHex
   return baseConvert(char 1 to 2 of pHex, 16, 10) & comma & \
          baseConvert(char 3 to 4 of pHex, 16, 10) & comma & \
          baseConvert(char 5 to 6 of pHex, 16, 10)
end p_qrtColor_Hex2RGB

private function p_qrtColor_RGB2Hex pRGBTriplet
   return format("%02u%02u%02u", \
          baseConvert(item 1 of pRGBTriplet, 10, 16), \
          baseConvert(item 2 of pRGBTriplet, 10, 16), \
          baseConvert(item 3 of pRGBTriplet, 10, 16))
end p_qrtColor_RGB2Hex

private function p_qrtColor_HSL2RGB pHSLTriplet
   local tHue, tSaturation, tLuminosity
   put item 1 of pHSLTriplet into tHue
   put item 2 of pHSLTriplet into tSaturation
   put item 3 of pHSLTriplet into tLuminosity
   local tRed, tGreen, tBlue
   if tSaturation is 0 then
      put trunc(tLuminosity * 255) into tRed
      put tRed into tGreen
      put tRed into tBlue
   else
      local tVar1, tVar2
      if tLuminosity < 0.5 then
         put tLuminosity * (1 + tSaturation) into tVar2
      else
         put (tLuminosity + tSaturation) - (tSaturation * tLuminosity) into tVar2
      end if
      put 2 * tLuminosity - tVar2 into tVar1
      put trunc(255 * p_qrtColor_Hue2RGB(tVar1, tVar2, tHue + (1 / 3))) into tRed
      put trunc(255 * p_qrtColor_Hue2RGB(tVar1, tVar2, tHue          )) into tGreen
      put trunc(255 * p_qrtColor_Hue2RGB(tVar1, tVar2, tHue - (1 / 3))) into tBlue
   end if
   return tRed & comma & tGreen & comma & tBlue
end p_qrtColor_HSL2RGB

private function p_qrtColor_Hue2RGB pVar1, pVar2, pVarH
   if pVarH < 0 then add 1 to pVarH
   if pVarH > 1 then subtract 1 from pVarH
   if (6 * pVarH) < 1 then
      return pVar1 + (pVar2 - pVar1) * 6 * pVarH
   else if (2 * pVarH) < 1 then
      return pVar2
   else if (3 * pVarH) < 2 then
      return pVar1 + (pVar2 - pVar1) * ((2 / 3) - pVarH) * 6
   else
      return pVar1
   end if
end p_qrtColor_Hue2RGB

private function p_qrtColor_HSV2RGB pHSVTriplet
   local tHue, tSaturation, tValue
   put item 1 of pHSVTriplet into tHue
   put item 2 of pHSVTriplet into tSaturation
   put item 3 of pHSVTriplet into tValue
   local tRed, tGreen, tBlue
   if tSaturation is 0 then
      put trunc(tValue * 255) into tRed
      put tRed into tGreen
      put tRed into tBlue
   else
      local tVar1, tVar2, tVar3, tVarH, tVarI
      put tHue * 6 into tVarH
      if tVarH is 6 then
         put 0 into tVarH
      end if
      put trunc(tVarH) into tVarI
      put tValue * (1 - tSaturation) into tVar1
      put tValue * (1 - tSaturation * (tVarH - tVarI)) into tVar2
      put tValue * (1 - tSaturation * (1 - (tVarH - tVarI))) into tVar3
      if tVarI is 0 then
         put tValue into tRed
         put tVar3 into tGreen
         put tVar1 into tBlue
      else if tVarI is 1 then
         put tVar2 into tRed
         put tValue into tGreen
         put tVar1 into tBlue
      else if tVarI is 2 then
         put tVar1 into tRed
         put tValue into tGreen
         put tVar3 into tBlue
      else if tVarI is 3 then
         put tVar1 into tRed
         put tVar2 into tGreen
         put tValue into tBlue
      else if tVarI is 4 then
         put tVar3 into tRed
         put tVar1 into tGreen
         put tValue into tBlue
      else
         put tValue into tRed
         put tVar1 into tGreen
         put tVar2 into tBlue
      end if
      put trunc(255 * tRed  ) into tRed
      put trunc(255 * tGreen) into tGreen
      put trunc(255 * tBlue ) into tBlue
   end if
   return tRed & comma & tGreen & comma & tBlue
end p_qrtColor_HSV2RGB

private function p_qrtColor_RGB2HSL pRGBTriplet
   local tRed, tGreen, tBlue
   put (item 1 of pRGBTriplet) / 255 into tRed
   put (item 2 of pRGBTriplet) / 255 into tGreen
   put (item 3 of pRGBTriplet) / 255 into tBlue
   local tMin, tMax, tDelta
   put min(tRed, tGreen, tBlue) into tMin
   put max(tRed, tGreen, tBlue) into tMax
   put tMax - tMin into tDelta
   local tHue, tSaturation, tLuminosity
   put (tMax + tMin) / 2 into tLuminosity
   if tDelta is 0 then
      -- grayscale, so no chromatic data
      put 0 into tHue
      put 0 into tSaturation
   else
      -- determine the chromatic data
      if tLuminosity < 0.5 then
         put tDelta / (tMax + tMin) into tSaturation
      else
         put tDelta / (2 - tMax - tMin) into tSaturation
      end if
      local tRedDelta, tGreenDelta, tBlueDelta
      put (((tMax - tRed  ) / 6) + (tMax / 2)) / tMax into tRedDelta
      put (((tMax - tGreen) / 6) + (tMax / 2)) / tMax into tGreenDelta
      put (((tMax - tBlue ) / 6) + (tMax / 2)) / tMax into tBlueDelta
      if tRed is tMax then
         put tBlueDelta - tGreenDelta into tHue
      else if tGreen is tMax then
         put (1 / 3) + tRedDelta - tBlueDelta into tHue
      else if tBlue is tMax then
         put (2 / 3) + tGreenDelta - tRedDelta into tHue
      end if
      if tHue < 0 then add 1 to tHue
      if tHue > 1 then subtract 1 from tHue
   end if
   return tHue & comma & tSaturation & comma & tLuminosity
end p_qrtColor_RGB2HSL

private function p_qrtColor_RGB2HSV pRGBTriplet
   local tRed, tGreen, tBlue
   put (item 1 of pRGBTriplet) / 255 into tRed
   put (item 2 of pRGBTriplet) / 255 into tGreen
   put (item 3 of pRGBTriplet) / 255 into tBlue
   local tMin, tMax, tDelta
   put min(tRed, tGreen, tBlue) into tMin
   put max(tRed, tGreen, tBlue) into tMax
   put tMax - tMin into tDelta
   local tHue, tSaturation, tValue
   put tMax into tValue
   if tDelta is 0 then
      -- grayscale, so no chromatic data
      put 0 into tHue
      put 0 into tSaturation
   else
      -- determine the chromatic data
      put tDelta / tMax into tSaturation
      local tRedDelta, tGreenDelta, tBlueDelta
      put (((tMax - tRed  ) / 6) + (tMax / 2)) / tMax into tRedDelta
      put (((tMax - tGreen) / 6) + (tMax / 2)) / tMax into tGreenDelta
      put (((tMax - tBlue ) / 6) + (tMax / 2)) / tMax into tBlueDelta
      if tRed is tMax then
         put tBlueDelta - tGreenDelta into tHue
      else if tGreen is tMax then
         put (1 / 3) + tRedDelta - tBlueDelta into tHue
      else if tBlue is tMax then
         put (2 / 3) + tGreenDelta - tRedDelta into tHue
      end if
      if tHue < 0 then add 1 to tHue
      if tHue > 1 then subtract 1 from tHue
   end if
   return tHue & comma & tSaturation & comma & tValue
end p_qrtColor_RGB2HSV

private function p_qrtColor_CMY2RGB pCMYTriplet
   local tCyan, tMagenta, tYellow
   put item 1 of pCMYTriplet into tCyan
   put item 2 of pCMYTriplet into tMagenta
   put item 3 of pCMYTriplet into tYellow
   local tRed, tGreen, tBlue
   put trunc((1 - tCyan   ) * 255) into tRed
   put trunc((1 - tMagenta) * 255) into tGreen
   put trunc((1 - tYellow ) * 255) into tBlue
   return tRed & comma & tGreen & comma & tBlue
end p_qrtColor_CMY2RGB

private function p_qrtColor_RGB2CMY pRGBTriplet
   local tRed, tGreen, tBlue
   put item 1 of pRGBTriplet into tRed
   put item 2 of pRGBTriplet into tGreen
   put item 3 of pRGBTriplet into tBlue
   local tCyan, tMagenta, tYellow
   put 1 - (tRed   / 255) into tCyan
   put 1 - (tGreen / 255) into tMagenta
   put 1 - (tBlue  / 255) into tYellow
   return tCyan & comma & tMagenta & comma & tYellow
end p_qrtColor_RGB2CMY

private function p_qrtColor_CMY2CMYK pCMYTriplet
   local tCyan, tMagenta, tYellow, tBlack
   put item 1 of pCMYTriplet into tCyan
   put item 2 of pCMYTriplet into tMagenta
   put item 3 of pCMYTriplet into tYellow
   put 1 into tBlack
   if tCyan < tBlack then
      put tCyan into tBlack
   end if
   if tMagenta < tBlack then
      put tMagenta into tBlack
   end if
   if tYellow < tBlack then
      put tYellow into tBlack
   end if
   if tBlack is 1 then
      put 0 into tCyan
      put 0 into tMagenta
      put 0 into tYellow
   else
      put (tCyan    - tBlack) / (1 - tBlack) into tCyan
      put (tMagenta - tBlack) / (1 - tBlack) into tMagenta
      put (tYellow  - tBlack) / (1 - tBlack) into tYellow
   end if
   return tCyan & comma & tMagenta & comma & tYellow & comma & tBlack
end p_qrtColor_CMY2CMYK

private function p_qrtColor_CMYK2CMY pCMYKQuad
   local tCyan, tMagenta, tYellow, tBlack
   put item 1 of pCMYKQuad into tCyan
   put item 2 of pCMYKQuad into tMagenta
   put item 3 of pCMYKQuad into tYellow
   put item 4 of pCMYKQuad into tBlack
   put (tCyan    * (1 - tBlack) + tBlack) into tCyan
   put (tMagenta * (1 - tBlack) + tBlack) into tMagenta
   put (tYellow  * (1 - tBlack) + tBlack) into tYellow
   return tCyan & comma & tMagenta & comma & tYellow
end p_qrtColor_CMYK2CMY

private function p_qrtColor_BestTextColor pRGBTriplet, pAlgorithm
   local tRed, tGreen, tBlue
   put item 1 of pRGBTriplet into tRed
   put item 2 of pRGBTriplet into tGreen
   put item 3 of pRGBTriplet into tBlue
   local tTextColor
   switch pAlgorithm
      case "rgbAverage"
         local tAverage
         put average(tRed, tGreen, tBlue) into tAverage
         if tAverage < 129 then
            put "white" into tTextColor
         else
            put "black" into tTextColor
         end if
         break
      case "perceivedBrightness"
         local tBrightness
         put sqrt(tRed ^ 2 * 0.241 + tGreen ^ 2 * 0.691 + tBlue ^ 2 * 0.068) into tBrightness
         if tBrightness < 130 then
            put "white" into tTextColor
         else
            put "black" into tTextColor
         end if
   end switch
   return sNamedColorsA[tTextColor]
end p_qrtColor_BestTextColor

private function p_qrtColor_WindowsColor pColorName
   local tColorRGB
   if the platform is "Win32" and "registryRead" is among the items of the securityPermissions then
      put queryRegistry("HKEY_CURRENT_USER\Control Panel\Colors\" & pColorName) into tColorRGB
      replace space with comma in tColorRGB
   end if
   return tColorRGB
end p_qrtColor_WindowsColor

private command p_qrtColor_LoadLiveCodeColors
   put "239,247,255" into sNamedColorsA["AliceBlue"]
   put "249,232,210" into sNamedColorsA["AntiqueWhite"]
   put "254,237,214" into sNamedColorsA["AntiqueWhite1"]
   put "235,219,197" into sNamedColorsA["AntiqueWhite2"]
   put "200,185,166" into sNamedColorsA["AntiqueWhite3"]
   put "139,131,120" into sNamedColorsA["AntiqueWhite4"]
   put "67,183,186" into sNamedColorsA["Aquamarine"]
   put "127,255,212" into sNamedColorsA["Aquamarine1"]
   put "118,238,198" into sNamedColorsA["Aquamarine2"]
   put "102,205,170" into sNamedColorsA["Aquamarine3"]
   put "65,124,100" into sNamedColorsA["Aquamarine4"]
   put "239,255,255" into sNamedColorsA["Azure"]
   put "239,255,255" into sNamedColorsA["Azure1"]
   put "222,236,236" into sNamedColorsA["Azure2"]
   put "188,199,199" into sNamedColorsA["Azure3"]
   put "122,125,125" into sNamedColorsA["Azure4"]
   put "245,243,215" into sNamedColorsA["Beige"]
   put "255,228,196" into sNamedColorsA["Bisque"]
   put "253,224,188" into sNamedColorsA["Bisque1"]
   put "234,208,174" into sNamedColorsA["Bisque2"]
   put "199,175,146" into sNamedColorsA["Bisque3"]
   put "129,110,89" into sNamedColorsA["Bisque4"]
   put "0,0,0" into sNamedColorsA["Black"]
   put "254,232,198" into sNamedColorsA["BlanchedAlmond"]
   put "0,0,255" into sNamedColorsA["Blue"]
   put "21,53,255" into sNamedColorsA["Blue1"]
   put "21,49,236" into sNamedColorsA["Blue2"]
   put "21,40,199" into sNamedColorsA["Blue3"]
   put "21,27,126" into sNamedColorsA["Blue4"]
   put "138,43,226" into sNamedColorsA["BlueViolet"]
   put "152,5,23" into sNamedColorsA["Brown"]
   put "246,53,38" into sNamedColorsA["Brown1"]
   put "228,45,23" into sNamedColorsA["Brown2"]
   put "194,34,23" into sNamedColorsA["Brown3"]
   put "126,5,23" into sNamedColorsA["Brown4"]
   put "216,175,121" into sNamedColorsA["Burlywood"]
   put "252,206,142" into sNamedColorsA["Burlywood1"]
   put "234,190,131" into sNamedColorsA["Burlywood2"]
   put "198,160,109" into sNamedColorsA["Burlywood3"]
   put "128,99,65" into sNamedColorsA["Burlywood4"]
   put "87,134,147" into sNamedColorsA["CadetBlue"]
   put "152,245,255" into sNamedColorsA["CadetBlue1"]
   put "142,226,236" into sNamedColorsA["CadetBlue2"]
   put "119,191,199" into sNamedColorsA["CadetBlue3"]
   put "76,120,126" into sNamedColorsA["CadetBlue4"]
   put "127,255,0" into sNamedColorsA["Chartreuse"]
   put "127,255,0" into sNamedColorsA["Chartreuse1"]
   put "118,238,0" into sNamedColorsA["Chartreuse2"]
   put "102,205,0" into sNamedColorsA["Chartreuse3"]
   put "67,124,23" into sNamedColorsA["Chartreuse4"]
   put "200,90,23" into sNamedColorsA["Chocolate"]
   put "248,114,23" into sNamedColorsA["Chocolate1"]
   put "229,103,23" into sNamedColorsA["Chocolate2"]
   put "195,86,23" into sNamedColorsA["Chocolate3"]
   put "126,49,23" into sNamedColorsA["Chocolate4"]
   put "247,101,65" into sNamedColorsA["Coral"]
   put "247,101,65" into sNamedColorsA["Coral1"]
   put "229,91,60" into sNamedColorsA["Coral2"]
   put "195,74,44" into sNamedColorsA["Coral3"]
   put "126,40,23" into sNamedColorsA["Coral4"]
   put "100,149,237" into sNamedColorsA["CornflowerBlue"]
   put "255,247,215" into sNamedColorsA["CornSilk"]
   put "255,247,215" into sNamedColorsA["CornSilk1"]
   put "236,229,198" into sNamedColorsA["CornSilk2"]
   put "200,194,167" into sNamedColorsA["CornSilk3"]
   put "129,122,104" into sNamedColorsA["CornSilk4"]
   put "0,255,255" into sNamedColorsA["Cyan"]
   put "87,254,255" into sNamedColorsA["Cyan1"]
   put "80,235,236" into sNamedColorsA["Cyan2"]
   put "70,199,199" into sNamedColorsA["Cyan3"]
   put "48,125,126" into sNamedColorsA["Cyan4"]
   put "0,0,139" into sNamedColorsA["DarkBlue"]
   put "0,139,139" into sNamedColorsA["DarkCyan"]
   put "175,120,23" into sNamedColorsA["DarkGoldenrod"]
   put "251,177,23" into sNamedColorsA["DarkGoldenrod1"]
   put "232,163,23" into sNamedColorsA["DarkGoldenrod2"]
   put "197,137,23" into sNamedColorsA["DarkGoldenrod3"]
   put "127,82,23" into sNamedColorsA["DarkGoldenrod4"]
   put "169,169,169" into sNamedColorsA["DarkGray"]
   put "0,100,0" into sNamedColorsA["DarkGreen"]
   put "183,173,89" into sNamedColorsA["DarkKhaki"]
   put "139,0,139" into sNamedColorsA["DarkMagenta"]
   put "74,65,23" into sNamedColorsA["DarkOliveGreen"]
   put "202,255,112" into sNamedColorsA["DarkOliveGreen1"]
   put "188,233,84" into sNamedColorsA["DarkOliveGreen2"]
   put "160,197,68" into sNamedColorsA["DarkOliveGreen3"]
   put "102,124,38" into sNamedColorsA["DarkOliveGreen4"]
   put "248,128,23" into sNamedColorsA["DarkOrange"]
   put "248,114,23" into sNamedColorsA["DarkOrange1"]
   put "229,103,23" into sNamedColorsA["DarkOrange2"]
   put "195,86,23" into sNamedColorsA["DarkOrange3"]
   put "126,49,23" into sNamedColorsA["DarkOrange4"]
   put "125,27,126" into sNamedColorsA["DarkOrchid"]
   put "176,65,255" into sNamedColorsA["DarkOrchid1"]
   put "162,59,236" into sNamedColorsA["DarkOrchid2"]
   put "139,49,199" into sNamedColorsA["DarkOrchid3"]
   put "104,34,139" into sNamedColorsA["DarkOrchid4"]
   put "139,0,0" into sNamedColorsA["DarkRed"]
   put "225,139,107" into sNamedColorsA["DarkSalmon"]
   put "139,179,129" into sNamedColorsA["DarkSeaGreen"]
   put "193,255,193" into sNamedColorsA["DarkSeaGreen1"]
   put "180,238,180" into sNamedColorsA["DarkSeaGreen2"]
   put "153,198,142" into sNamedColorsA["DarkSeaGreen3"]
   put "105,139,105" into sNamedColorsA["DarkSeaGreen4"]
   put "43,56,86" into sNamedColorsA["DarkSlateBlue"]
   put "37,56,60" into sNamedColorsA["DarkSlateGray"]
   put "151,255,255" into sNamedColorsA["DarkSlateGray1"]
   put "141,238,238" into sNamedColorsA["DarkSlateGray2"]
   put "120,199,199" into sNamedColorsA["DarkSlateGray3"]
   put "76,125,126" into sNamedColorsA["DarkSlateGray4"]
   put "59,156,156" into sNamedColorsA["DarkTurquoise"]
   put "132,45,206" into sNamedColorsA["DarkViolet"]
   put "245,40,135" into sNamedColorsA["DeepPink"]
   put "255,20,147" into sNamedColorsA["DeepPink1"]
   put "228,40,124" into sNamedColorsA["DeepPink2"]
   put "193,34,103" into sNamedColorsA["DeepPink3"]
   put "125,5,63" into sNamedColorsA["DeepPink4"]
   put "0,191,255" into sNamedColorsA["DeepSkyBlue"]
   put "59,185,255" into sNamedColorsA["DeepSkyBlue1"]
   put "0,178,238" into sNamedColorsA["DeepSkyBlue2"]
   put "0,154,205" into sNamedColorsA["DeepSkyBlue3"]
   put "0,104,139" into sNamedColorsA["DeepSkyBlue4"]
   put "70,62,65" into sNamedColorsA["DimGray"]
   put "21,137,255" into sNamedColorsA["DodgerBlue"]
   put "30,144,255" into sNamedColorsA["DodgerBlue1"]
   put "28,134,238" into sNamedColorsA["DodgerBlue2"]
   put "24,116,205" into sNamedColorsA["DodgerBlue3"]
   put "16,78,139" into sNamedColorsA["DodgerBlue4"]
   put "128,5,23" into sNamedColorsA["Firebrick"]
   put "246,40,23" into sNamedColorsA["Firebrick1"]
   put "228,34,23" into sNamedColorsA["Firebrick2"]
   put "193,27,23" into sNamedColorsA["Firebrick3"]
   put "126,5,23" into sNamedColorsA["Firebrick4"]
   put "255,249,238" into sNamedColorsA["FloralWhite"]
   put "34,139,34" into sNamedColorsA["ForestGreen"]
   put "216,217,215" into sNamedColorsA["Gainsboro"]
   put "247,247,255" into sNamedColorsA["GhostWhite"]
   put "212,160,23" into sNamedColorsA["Gold"]
   put "253,208,23" into sNamedColorsA["Gold1"]
   put "234,193,23" into sNamedColorsA["Gold2"]
   put "199,163,23" into sNamedColorsA["Gold3"]
   put "128,101,23" into sNamedColorsA["Gold4"]
   put "218,165,32" into sNamedColorsA["Goldenrod"]
   put "251,185,23" into sNamedColorsA["Goldenrod1"]
   put "233,171,23" into sNamedColorsA["Goldenrod2"]
   put "198,142,23" into sNamedColorsA["Goldenrod3"]
   put "128,88,23" into sNamedColorsA["Goldenrod4"]
   put "190,190,190" into sNamedColorsA["Gray"]
   put "0,0,0" into sNamedColorsA["Gray0"]
   put "21,5,23" into sNamedColorsA["Gray1"]
   put "21,5,23" into sNamedColorsA["Gray10"]
   put "255,255,255" into sNamedColorsA["Gray100"]
   put "21,5,23" into sNamedColorsA["Gray11"]
   put "21,5,23" into sNamedColorsA["Gray12"]
   put "21,5,23" into sNamedColorsA["Gray13"]
   put "21,5,23" into sNamedColorsA["Gray14"]
   put "21,5,23" into sNamedColorsA["Gray15"]
   put "21,5,23" into sNamedColorsA["Gray16"]
   put "21,5,23" into sNamedColorsA["Gray17"]
   put "37,5,23" into sNamedColorsA["Gray18"]
   put "37,5,23" into sNamedColorsA["Gray19"]
   put "21,5,23" into sNamedColorsA["Gray2"]
   put "37,5,23" into sNamedColorsA["Gray20"]
   put "43,27,23" into sNamedColorsA["Gray21"]
   put "43,27,23" into sNamedColorsA["Gray22"]
   put "48,34,23" into sNamedColorsA["Gray23"]
   put "48,34,38" into sNamedColorsA["Gray24"]
   put "52,40,38" into sNamedColorsA["Gray25"]
   put "52,40,44" into sNamedColorsA["Gray26"]
   put "56,45,44" into sNamedColorsA["Gray27"]
   put "59,49,49" into sNamedColorsA["Gray28"]
   put "62,53,53" into sNamedColorsA["Gray29"]
   put "21,5,23" into sNamedColorsA["Gray3"]
   put "65,56,57" into sNamedColorsA["Gray30"]
   put "65,56,60" into sNamedColorsA["Gray31"]
   put "70,62,63" into sNamedColorsA["Gray32"]
   put "70,62,65" into sNamedColorsA["Gray33"]
   put "74,67,68" into sNamedColorsA["Gray34"]
   put "76,70,70" into sNamedColorsA["Gray35"]
   put "78,72,72" into sNamedColorsA["Gray36"]
   put "80,74,75" into sNamedColorsA["Gray37"]
   put "84,78,79" into sNamedColorsA["Gray38"]
   put "86,80,81" into sNamedColorsA["Gray39"]
   put "10,10,10" into sNamedColorsA["Gray4"]
   put "102,102,102" into sNamedColorsA["Gray40"]
   put "105,105,105" into sNamedColorsA["Gray41"]
   put "107,107,107" into sNamedColorsA["Gray42"]
   put "110,110,110" into sNamedColorsA["Gray43"]
   put "100,96,96" into sNamedColorsA["Gray44"]
   put "102,99,98" into sNamedColorsA["Gray45"]
   put "105,101,101" into sNamedColorsA["Gray46"]
   put "109,105,104" into sNamedColorsA["Gray47"]
   put "110,106,107" into sNamedColorsA["Gray48"]
   put "114,110,109" into sNamedColorsA["Gray49"]
   put "13,13,13" into sNamedColorsA["Gray5"]
   put "116,113,112" into sNamedColorsA["Gray50"]
   put "120,116,115" into sNamedColorsA["Gray51"]
   put "122,119,119" into sNamedColorsA["Gray52"]
   put "124,121,121" into sNamedColorsA["Gray53"]
   put "128,125,124" into sNamedColorsA["Gray54"]
   put "130,128,126" into sNamedColorsA["Gray55"]
   put "133,131,129" into sNamedColorsA["Gray56"]
   put "135,133,131" into sNamedColorsA["Gray57"]
   put "139,137,135" into sNamedColorsA["Gray58"]
   put "141,139,137" into sNamedColorsA["Gray59"]
   put "15,15,15" into sNamedColorsA["Gray6"]
   put "143,142,141" into sNamedColorsA["Gray60"]
   put "147,145,144" into sNamedColorsA["Gray61"]
   put "149,148,146" into sNamedColorsA["Gray62"]
   put "153,151,149" into sNamedColorsA["Gray63"]
   put "154,153,152" into sNamedColorsA["Gray64"]
   put "158,156,155" into sNamedColorsA["Gray65"]
   put "160,159,157" into sNamedColorsA["Gray66"]
   put "163,162,160" into sNamedColorsA["Gray67"]
   put "165,164,163" into sNamedColorsA["Gray68"]
   put "169,168,166" into sNamedColorsA["Gray69"]
   put "18,18,18" into sNamedColorsA["Gray7"]
   put "172,171,169" into sNamedColorsA["Gray70"]
   put "174,173,172" into sNamedColorsA["Gray71"]
   put "177,177,175" into sNamedColorsA["Gray72"]
   put "179,179,177" into sNamedColorsA["Gray73"]
   put "183,182,180" into sNamedColorsA["Gray74"]
   put "185,184,182" into sNamedColorsA["Gray75"]
   put "188,187,186" into sNamedColorsA["Gray76"]
   put "190,190,188" into sNamedColorsA["Gray77"]
   put "193,193,191" into sNamedColorsA["Gray78"]
   put "195,196,194" into sNamedColorsA["Gray79"]
   put "20,20,20" into sNamedColorsA["Gray8"]
   put "199,199,197" into sNamedColorsA["Gray80"]
   put "202,202,201" into sNamedColorsA["Gray81"]
   put "204,204,203" into sNamedColorsA["Gray82"]
   put "208,207,207" into sNamedColorsA["Gray83"]
   put "210,210,209" into sNamedColorsA["Gray84"]
   put "213,213,212" into sNamedColorsA["Gray85"]
   put "215,215,215" into sNamedColorsA["Gray86"]
   put "219,219,217" into sNamedColorsA["Gray87"]
   put "221,221,220" into sNamedColorsA["Gray88"]
   put "224,224,224" into sNamedColorsA["Gray89"]
   put "21,5,23" into sNamedColorsA["Gray9"]
   put "226,227,225" into sNamedColorsA["Gray90"]
   put "229,230,228" into sNamedColorsA["Gray91"]
   put "232,233,232" into sNamedColorsA["Gray92"]
   put "235,235,234" into sNamedColorsA["Gray93"]
   put "238,238,238" into sNamedColorsA["Gray94"]
   put "240,241,240" into sNamedColorsA["Gray95"]
   put "244,244,243" into sNamedColorsA["Gray96"]
   put "246,246,245" into sNamedColorsA["Gray97"]
   put "249,249,250" into sNamedColorsA["Gray98"]
   put "251,251,251" into sNamedColorsA["Gray99"]
   put "0,255,0" into sNamedColorsA["Green"]
   put "95,251,23" into sNamedColorsA["Green1"]
   put "0,238,0" into sNamedColorsA["Green2"]
   put "0,205,0" into sNamedColorsA["Green3"]
   put "0,139,0" into sNamedColorsA["Green4"]
   put "173,255,47" into sNamedColorsA["GreenYellow"]
   put "240,254,238" into sNamedColorsA["Honeydew"]
   put "240,255,240" into sNamedColorsA["Honeydew1"]
   put "222,235,220" into sNamedColorsA["Honeydew2"]
   put "188,199,185" into sNamedColorsA["Honeydew3"]
   put "122,125,116" into sNamedColorsA["Honeydew4"]
   put "246,96,171" into sNamedColorsA["HotPink"]
   put "246,101,171" into sNamedColorsA["HotPink1"]
   put "228,94,157" into sNamedColorsA["HotPink2"]
   put "194,82,131" into sNamedColorsA["HotPink3"]
   put "125,34,82" into sNamedColorsA["HotPink4"]
   put "205,92,92" into sNamedColorsA["IndianRed"]
   put "247,93,89" into sNamedColorsA["IndianRed1"]
   put "229,84,81" into sNamedColorsA["IndianRed2"]
   put "194,70,65" into sNamedColorsA["IndianRed3"]
   put "126,34,23" into sNamedColorsA["IndianRed4"]
   put "255,255,238" into sNamedColorsA["Ivory"]
   put "255,255,238" into sNamedColorsA["Ivory1"]
   put "236,236,220" into sNamedColorsA["Ivory2"]
   put "201,199,185" into sNamedColorsA["Ivory3"]
   put "129,125,116" into sNamedColorsA["Ivory4"]
   put "173,169,110" into sNamedColorsA["Khaki"]
   put "255,243,128" into sNamedColorsA["Khaki1"]
   put "237,226,117" into sNamedColorsA["Khaki2"]
   put "201,190,98" into sNamedColorsA["Khaki3"]
   put "130,120,57" into sNamedColorsA["Khaki4"]
   put "227,228,250" into sNamedColorsA["Lavender"]
   put "253,238,244" into sNamedColorsA["LavenderBlush"]
   put "255,240,245" into sNamedColorsA["LavenderBlush1"]
   put "235,221,226" into sNamedColorsA["LavenderBlush2"]
   put "200,187,190" into sNamedColorsA["LavenderBlush3"]
   put "129,118,121" into sNamedColorsA["LavenderBlush4"]
   put "124,252,0" into sNamedColorsA["LawnGreen"]
   put "255,248,198" into sNamedColorsA["LemonChiffon"]
   put "255,250,205" into sNamedColorsA["LemonChiffon1"]
   put "238,233,191" into sNamedColorsA["LemonChiffon2"]
   put "205,201,165" into sNamedColorsA["LemonChiffon3"]
   put "139,137,112" into sNamedColorsA["LemonChiffon4"]
   put "173,216,230" into sNamedColorsA["LightBlue"]
   put "189,237,255" into sNamedColorsA["LightBlue1"]
   put "175,220,236" into sNamedColorsA["LightBlue2"]
   put "149,185,199" into sNamedColorsA["LightBlue3"]
   put "104,131,139" into sNamedColorsA["LightBlue4"]
   put "231,116,113" into sNamedColorsA["LightCoral"]
   put "224,255,255" into sNamedColorsA["LightCyan"]
   put "224,255,255" into sNamedColorsA["LightCyan1"]
   put "207,236,236" into sNamedColorsA["LightCyan2"]
   put "175,199,199" into sNamedColorsA["LightCyan3"]
   put "113,125,125" into sNamedColorsA["LightCyan4"]
   put "236,216,114" into sNamedColorsA["LightGoldenrod"]
   put "255,232,124" into sNamedColorsA["LightGoldenrod1"]
   put "236,214,114" into sNamedColorsA["LightGoldenrod2"]
   put "200,181,96" into sNamedColorsA["LightGoldenrod3"]
   put "129,115,57" into sNamedColorsA["LightGoldenrod4"]
   put "250,248,204" into sNamedColorsA["LightGoldenrodYellow"]
   put "160,159,157" into sNamedColorsA["LightGray"]
   put "144,238,144" into sNamedColorsA["LightGreen"]
   put "250,175,186" into sNamedColorsA["LightPink"]
   put "249,167,176" into sNamedColorsA["LightPink1"]
   put "231,153,163" into sNamedColorsA["LightPink2"]
   put "196,129,137" into sNamedColorsA["LightPink3"]
   put "127,78,82" into sNamedColorsA["LightPink4"]
   put "249,150,107" into sNamedColorsA["LightSalmon"]
   put "255,160,122" into sNamedColorsA["LightSalmon1"]
   put "231,138,97" into sNamedColorsA["LightSalmon2"]
   put "196,116,81" into sNamedColorsA["LightSalmon3"]
   put "127,70,44" into sNamedColorsA["LightSalmon4"]
   put "32,178,170" into sNamedColorsA["LightSeaGreen"]
   put "130,202,250" into sNamedColorsA["LightSkyBlue"]
   put "173,223,255" into sNamedColorsA["LightSkyBlue1"]
   put "160,207,236" into sNamedColorsA["LightSkyBlue2"]
   put "135,175,199" into sNamedColorsA["LightSkyBlue3"]
   put "86,109,126" into sNamedColorsA["LightSkyBlue4"]
   put "115,106,255" into sNamedColorsA["LightSlateBlue"]
   put "109,123,141" into sNamedColorsA["LightSlateGray"]
   put "114,143,206" into sNamedColorsA["LightSteelBlue"]
   put "198,222,255" into sNamedColorsA["LightSteelBlue1"]
   put "183,206,236" into sNamedColorsA["LightSteelBlue2"]
   put "154,173,199" into sNamedColorsA["LightSteelBlue3"]
   put "100,109,126" into sNamedColorsA["LightSteelBlue4"]
   put "255,254,220" into sNamedColorsA["LightYellow"]
   put "255,255,224" into sNamedColorsA["LightYellow1"]
   put "237,235,203" into sNamedColorsA["LightYellow2"]
   put "201,199,170" into sNamedColorsA["LightYellow3"]
   put "130,125,107" into sNamedColorsA["LightYellow4"]
   put "50,205,50" into sNamedColorsA["LimeGreen"]
   put "249,238,226" into sNamedColorsA["Linen"]
   put "244,62,255" into sNamedColorsA["Magenta"]
   put "255,0,255" into sNamedColorsA["Magenta1"]
   put "226,56,236" into sNamedColorsA["Magenta2"]
   put "192,49,199" into sNamedColorsA["Magenta3"]
   put "125,27,126" into sNamedColorsA["Magenta4"]
   put "129,5,65" into sNamedColorsA["Maroon"]
   put "245,53,170" into sNamedColorsA["Maroon1"]
   put "227,49,157" into sNamedColorsA["Maroon2"]
   put "193,34,131" into sNamedColorsA["Maroon3"]
   put "125,5,82" into sNamedColorsA["Maroon4"]
   put "102,205,170" into sNamedColorsA["MediumAquamarine"]
   put "0,0,205" into sNamedColorsA["MediumBlue"]
   put "52,114,53" into sNamedColorsA["MediumForestGreen"]
   put "204,185,84" into sNamedColorsA["MediumGoldenrod"]
   put "176,72,181" into sNamedColorsA["MediumOrchid"]
   put "212,98,255" into sNamedColorsA["MediumOrchid1"]
   put "196,90,236" into sNamedColorsA["MediumOrchid2"]
   put "167,74,199" into sNamedColorsA["MediumOrchid3"]
   put "106,40,126" into sNamedColorsA["MediumOrchid4"]
   put "132,103,215" into sNamedColorsA["MediumPurple"]
   put "171,130,255" into sNamedColorsA["MediumPurple1"]
   put "159,121,238" into sNamedColorsA["MediumPurple2"]
   put "137,104,205" into sNamedColorsA["MediumPurple3"]
   put "93,71,139" into sNamedColorsA["MediumPurple4"]
   put "48,103,84" into sNamedColorsA["MediumSeaGreen"]
   put "123,104,238" into sNamedColorsA["MediumSlateBlue"]
   put "0,250,154" into sNamedColorsA["MediumSpringGreen"]
   put "72,204,205" into sNamedColorsA["MediumTurquoise"]
   put "199,21,133" into sNamedColorsA["MediumVioletRed"]
   put "21,27,84" into sNamedColorsA["MidnightBlue"]
   put "245,255,249" into sNamedColorsA["MintCream"]
   put "253,225,221" into sNamedColorsA["MistyRose"]
   put "255,228,225" into sNamedColorsA["MistyRose1"]
   put "234,208,204" into sNamedColorsA["MistyRose2"]
   put "198,175,172" into sNamedColorsA["MistyRose3"]
   put "128,111,108" into sNamedColorsA["MistyRose4"]
   put "253,224,172" into sNamedColorsA["Moccasin"]
   put "253,218,163" into sNamedColorsA["NavajoWhite"]
   put "255,222,173" into sNamedColorsA["NavajoWhite1"]
   put "234,201,149" into sNamedColorsA["NavajoWhite2"]
   put "199,170,125" into sNamedColorsA["NavajoWhite3"]
   put "128,106,75" into sNamedColorsA["NavajoWhite4"]
   put "0,0,128" into sNamedColorsA["Navy"]
   put "0,0,128" into sNamedColorsA["NavyBlue"]
   put "252,243,226" into sNamedColorsA["OldLace"]
   put "101,128,23" into sNamedColorsA["OliveDrab"]
   put "192,255,62" into sNamedColorsA["OliveDrab1"]
   put "179,238,58" into sNamedColorsA["OliveDrab2"]
   put "153,197,23" into sNamedColorsA["OliveDrab3"]
   put "105,139,34" into sNamedColorsA["OliveDrab4"]
   put "248,122,23" into sNamedColorsA["Orange"]
   put "250,155,23" into sNamedColorsA["Orange1"]
   put "231,142,23" into sNamedColorsA["Orange2"]
   put "197,119,23" into sNamedColorsA["Orange3"]
   put "127,72,23" into sNamedColorsA["Orange4"]
   put "246,56,23" into sNamedColorsA["OrangeRed"]
   put "255,69,0" into sNamedColorsA["OrangeRed1"]
   put "228,49,23" into sNamedColorsA["OrangeRed2"]
   put "194,40,23" into sNamedColorsA["OrangeRed3"]
   put "126,5,23" into sNamedColorsA["OrangeRed4"]
   put "218,112,214" into sNamedColorsA["Orchid"]
   put "246,125,250" into sNamedColorsA["Orchid1"]
   put "228,115,231" into sNamedColorsA["Orchid2"]
   put "193,96,195" into sNamedColorsA["Orchid3"]
   put "125,56,124" into sNamedColorsA["Orchid4"]
   put "237,228,158" into sNamedColorsA["PaleGoldenrod"]
   put "121,216,103" into sNamedColorsA["PaleGreen"]
   put "154,255,154" into sNamedColorsA["PaleGreen1"]
   put "144,238,144" into sNamedColorsA["PaleGreen2"]
   put "124,205,124" into sNamedColorsA["PaleGreen3"]
   put "78,124,65" into sNamedColorsA["PaleGreen4"]
   put "174,235,236" into sNamedColorsA["PaleTurquoise"]
   put "187,255,255" into sNamedColorsA["PaleTurquoise1"]
   put "173,235,236" into sNamedColorsA["PaleTurquoise2"]
   put "146,199,199" into sNamedColorsA["PaleTurquoise3"]
   put "102,139,139" into sNamedColorsA["PaleTurquoise4"]
   put "209,101,135" into sNamedColorsA["PaleVioletRed"]
   put "247,120,161" into sNamedColorsA["PaleVioletRed1"]
   put "229,110,148" into sNamedColorsA["PaleVioletRed2"]
   put "194,90,124" into sNamedColorsA["PaleVioletRed3"]
   put "126,53,77" into sNamedColorsA["PaleVioletRed4"]
   put "254,236,207" into sNamedColorsA["PapayaWhip"]
   put "252,213,176" into sNamedColorsA["PeachPuff"]
   put "255,218,185" into sNamedColorsA["PeachPuff1"]
   put "234,197,163" into sNamedColorsA["PeachPuff2"]
   put "198,166,136" into sNamedColorsA["PeachPuff3"]
   put "128,103,82" into sNamedColorsA["PeachPuff4"]
   put "197,119,38" into sNamedColorsA["Peru"]
   put "250,175,190" into sNamedColorsA["Pink"]
   put "255,181,197" into sNamedColorsA["Pink1"]
   put "231,161,176" into sNamedColorsA["Pink2"]
   put "196,135,147" into sNamedColorsA["Pink3"]
   put "127,82,93" into sNamedColorsA["Pink4"]
   put "185,59,143" into sNamedColorsA["Plum"]
   put "249,183,255" into sNamedColorsA["Plum1"]
   put "230,169,236" into sNamedColorsA["Plum2"]
   put "195,142,199" into sNamedColorsA["Plum3"]
   put "126,88,126" into sNamedColorsA["Plum4"]
   put "173,220,227" into sNamedColorsA["PowderBlue"]
   put "142,53,239" into sNamedColorsA["Purple"]
   put "137,59,255" into sNamedColorsA["Purple1"]
   put "127,56,236" into sNamedColorsA["Purple2"]
   put "108,45,199" into sNamedColorsA["Purple3"]
   put "70,27,126" into sNamedColorsA["Purple4"]
   put "255,0,0" into sNamedColorsA["Red"]
   put "246,34,23" into sNamedColorsA["Red1"]
   put "228,27,23" into sNamedColorsA["Red2"]
   put "193,27,23" into sNamedColorsA["Red3"]
   put "126,5,23" into sNamedColorsA["Red4"]
   put "179,132,129" into sNamedColorsA["RosyBrown"]
   put "251,187,185" into sNamedColorsA["RosyBrown1"]
   put "232,173,170" into sNamedColorsA["RosyBrown2"]
   put "197,144,142" into sNamedColorsA["RosyBrown3"]
   put "127,90,88" into sNamedColorsA["RosyBrown4"]
   put "43,96,222" into sNamedColorsA["RoyalBlue"]
   put "48,110,255" into sNamedColorsA["RoyalBlue1"]
   put "43,101,236" into sNamedColorsA["RoyalBlue2"]
   put "37,84,199" into sNamedColorsA["RoyalBlue3"]
   put "21,49,126" into sNamedColorsA["RoyalBlue4"]
   put "126,49,23" into sNamedColorsA["SaddleBrown"]
   put "225,139,107" into sNamedColorsA["Salmon"]
   put "248,129,88" into sNamedColorsA["Salmon1"]
   put "230,116,81" into sNamedColorsA["Salmon2"]
   put "195,98,65" into sNamedColorsA["Salmon3"]
   put "126,56,23" into sNamedColorsA["Salmon4"]
   put "238,154,77" into sNamedColorsA["SandyBrown"]
   put "46,139,87" into sNamedColorsA["SeaGreen"]
   put "106,251,146" into sNamedColorsA["SeaGreen1"]
   put "100,233,134" into sNamedColorsA["SeaGreen2"]
   put "67,205,128" into sNamedColorsA["SeaGreen3"]
   put "46,139,87" into sNamedColorsA["SeaGreen4"]
   put "254,243,235" into sNamedColorsA["Seashell"]
   put "255,245,238" into sNamedColorsA["Seashell1"]
   put "238,229,222" into sNamedColorsA["Seashell2"]
   put "205,197,191" into sNamedColorsA["Seashell3"]
   put "139,134,130" into sNamedColorsA["Seashell4"]
   put "160,82,45" into sNamedColorsA["Sienna"]
   put "248,116,49" into sNamedColorsA["Sienna1"]
   put "230,108,44" into sNamedColorsA["Sienna2"]
   put "195,88,23" into sNamedColorsA["Sienna3"]
   put "126,53,23" into sNamedColorsA["Sienna4"]
   put "102,152,255" into sNamedColorsA["SkyBlue"]
   put "130,202,255" into sNamedColorsA["SkyBlue1"]
   put "121,186,236" into sNamedColorsA["SkyBlue2"]
   put "101,158,199" into sNamedColorsA["SkyBlue3"]
   put "65,98,126" into sNamedColorsA["SkyBlue4"]
   put "106,90,205" into sNamedColorsA["SlateBlue"]
   put "115,105,255" into sNamedColorsA["SlateBlue1"]
   put "105,96,236" into sNamedColorsA["SlateBlue2"]
   put "105,89,205" into sNamedColorsA["SlateBlue3"]
   put "52,45,126" into sNamedColorsA["SlateBlue4"]
   put "101,115,131" into sNamedColorsA["SlateGray"]
   put "194,223,255" into sNamedColorsA["SlateGray1"]
   put "180,207,236" into sNamedColorsA["SlateGray2"]
   put "152,175,199" into sNamedColorsA["SlateGray3"]
   put "108,123,139" into sNamedColorsA["SlateGray4"]
   put "255,249,250" into sNamedColorsA["Snow"]
   put "255,250,250" into sNamedColorsA["Snow1"]
   put "236,231,230" into sNamedColorsA["Snow2"]
   put "200,196,194" into sNamedColorsA["Snow3"]
   put "129,124,123" into sNamedColorsA["Snow4"]
   put "0,255,127" into sNamedColorsA["SpringGreen"]
   put "94,251,110" into sNamedColorsA["SpringGreen1"]
   put "0,238,118" into sNamedColorsA["SpringGreen2"]
   put "0,205,102" into sNamedColorsA["SpringGreen3"]
   put "0,139,69" into sNamedColorsA["SpringGreen4"]
   put "70,130,180" into sNamedColorsA["SteelBlue"]
   put "92,179,255" into sNamedColorsA["SteelBlue1"]
   put "86,165,236" into sNamedColorsA["SteelBlue2"]
   put "72,138,199" into sNamedColorsA["SteelBlue3"]
   put "43,84,126" into sNamedColorsA["SteelBlue4"]
   put "210,180,140" into sNamedColorsA["Tan"]
   put "250,155,60" into sNamedColorsA["Tan1"]
   put "231,142,53" into sNamedColorsA["Tan2"]
   put "197,119,38" into sNamedColorsA["Tan3"]
   put "127,72,23" into sNamedColorsA["Tan4"]
   put "210,185,211" into sNamedColorsA["Thistle"]
   put "252,223,255" into sNamedColorsA["Thistle1"]
   put "233,207,236" into sNamedColorsA["Thistle2"]
   put "198,174,199" into sNamedColorsA["Thistle3"]
   put "128,109,126" into sNamedColorsA["Thistle4"]
   put "247,84,49" into sNamedColorsA["Tomato"]
   put "255,99,71" into sNamedColorsA["Tomato1"]
   put "229,76,44" into sNamedColorsA["Tomato2"]
   put "194,62,23" into sNamedColorsA["Tomato3"]
   put "126,34,23" into sNamedColorsA["Tomato4"]
   put "21,5,23" into sNamedColorsA["Transparent"]
   put "64,224,208" into sNamedColorsA["Turquoise"]
   put "0,245,255" into sNamedColorsA["Turquoise1"]
   put "0,229,238" into sNamedColorsA["Turquoise2"]
   put "0,197,205" into sNamedColorsA["Turquoise3"]
   put "0,134,139" into sNamedColorsA["Turquoise4"]
   put "141,56,201" into sNamedColorsA["Violet"]
   put "208,32,144" into sNamedColorsA["VioletRed"]
   put "246,53,138" into sNamedColorsA["VioletRed1"]
   put "228,49,127" into sNamedColorsA["VioletRed2"]
   put "193,40,105" into sNamedColorsA["VioletRed3"]
   put "125,5,65" into sNamedColorsA["VioletRed4"]
   put "243,218,169" into sNamedColorsA["Wheat"]
   put "254,228,177" into sNamedColorsA["Wheat1"]
   put "235,211,163" into sNamedColorsA["Wheat2"]
   put "200,177,137" into sNamedColorsA["Wheat3"]
   put "129,111,84" into sNamedColorsA["Wheat4"]
   put "255,255,255" into sNamedColorsA["White"]
   put "244,244,243" into sNamedColorsA["WhiteSmoke"]
   put "255,255,0" into sNamedColorsA["Yellow"]
   put "255,255,0" into sNamedColorsA["Yellow1"]
   put "238,233,23" into sNamedColorsA["Yellow2"]
   put "202,197,23" into sNamedColorsA["Yellow3"]
   put "130,124,23" into sNamedColorsA["Yellow4"]
   put "154,205,50" into sNamedColorsA["YellowGreen"]
end p_qrtColor_LoadLiveCodeColors

private command p_qrtColor_LoadCSS3Colors
   put "240,248,255" into sNamedColorsA["css3.aliceblue"]
   put "250,235,215" into sNamedColorsA["css3.antiquewhite"]
   put "0,255,255" into sNamedColorsA["css3.aqua"]
   put "127,255,212" into sNamedColorsA["css3.aquamarine"]
   put "240,255,255" into sNamedColorsA["css3.azure"]
   put "245,245,220" into sNamedColorsA["css3.beige"]
   put "255,228,196" into sNamedColorsA["css3.bisque"]
   put "0,0,0" into sNamedColorsA["css3.black"]
   put "255,235,205" into sNamedColorsA["css3.blanchedalmond"]
   put "0,0,255" into sNamedColorsA["css3.blue"]
   put "138,43,226" into sNamedColorsA["css3.blueviolet"]
   put "165,42,42" into sNamedColorsA["css3.brown"]
   put "222,184,135" into sNamedColorsA["css3.burlywood"]
   put "95,158,160" into sNamedColorsA["css3.cadetblue"]
   put "127,255,0" into sNamedColorsA["css3.chartreuse"]
   put "210,105,30" into sNamedColorsA["css3.chocolate"]
   put "255,127,80" into sNamedColorsA["css3.coral"]
   put "100,149,237" into sNamedColorsA["css3.cornflowerblue"]
   put "255,248,220" into sNamedColorsA["css3.cornsilk"]
   put "220,20,60" into sNamedColorsA["css3.crimson"]
   put "0,255,255" into sNamedColorsA["css3.cyan"]
   put "0,0,139" into sNamedColorsA["css3.darkblue"]
   put "0,139,139" into sNamedColorsA["css3.darkcyan"]
   put "184,134,11" into sNamedColorsA["css3.darkgoldenrod"]
   put "169,169,169" into sNamedColorsA["css3.darkgray"]
   put "0,100,0" into sNamedColorsA["css3.darkgreen"]
   put "169,169,169" into sNamedColorsA["css3.darkgrey"]
   put "189,183,107" into sNamedColorsA["css3.darkkhaki"]
   put "139,0,139" into sNamedColorsA["css3.darkmagenta"]
   put "85,107,47" into sNamedColorsA["css3.darkolivegreen"]
   put "255,140,0" into sNamedColorsA["css3.darkorange"]
   put "153,50,204" into sNamedColorsA["css3.darkorchid"]
   put "139,0,0" into sNamedColorsA["css3.darkred"]
   put "233,150,122" into sNamedColorsA["css3.darksalmon"]
   put "143,188,143" into sNamedColorsA["css3.darkseagreen"]
   put "72,61,139" into sNamedColorsA["css3.darkslateblue"]
   put "47,79,79" into sNamedColorsA["css3.darkslategray"]
   put "47,79,79" into sNamedColorsA["css3.darkslategrey"]
   put "0,206,209" into sNamedColorsA["css3.darkturquoise"]
   put "148,0,211" into sNamedColorsA["css3.darkviolet"]
   put "255,20,147" into sNamedColorsA["css3.deeppink"]
   put "0,191,255" into sNamedColorsA["css3.deepskyblue"]
   put "105,105,105" into sNamedColorsA["css3.dimgray"]
   put "105,105,105" into sNamedColorsA["css3.dimgrey"]
   put "30,144,255" into sNamedColorsA["css3.dodgerblue"]
   put "178,34,34" into sNamedColorsA["css3.firebrick"]
   put "255,250,240" into sNamedColorsA["css3.floralwhite"]
   put "34,139,34" into sNamedColorsA["css3.forestgreen"]
   put "255,0,255" into sNamedColorsA["css3.fuchsia"]
   put "220,220,220" into sNamedColorsA["css3.gainsboro"]
   put "248,248,255" into sNamedColorsA["css3.ghostwhite"]
   put "255,215,0" into sNamedColorsA["css3.gold"]
   put "218,165,32" into sNamedColorsA["css3.goldenrod"]
   put "128,128,128" into sNamedColorsA["css3.gray"]
   put "0,128,0" into sNamedColorsA["css3.green"]
   put "173,255,47" into sNamedColorsA["css3.greenyellow"]
   put "128,128,128" into sNamedColorsA["css3.grey"]
   put "240,255,240" into sNamedColorsA["css3.honeydew"]
   put "255,105,180" into sNamedColorsA["css3.hotpink"]
   put "205,92,92" into sNamedColorsA["css3.indianred"]
   put "75,0,130" into sNamedColorsA["css3.indigo"]
   put "255,255,240" into sNamedColorsA["css3.ivory"]
   put "240,230,140" into sNamedColorsA["css3.khaki"]
   put "230,230,250" into sNamedColorsA["css3.lavender"]
   put "255,240,245" into sNamedColorsA["css3.lavenderblush"]
   put "124,252,0" into sNamedColorsA["css3.lawngreen"]
   put "255,250,205" into sNamedColorsA["css3.lemonchiffon"]
   put "173,216,230" into sNamedColorsA["css3.lightblue"]
   put "240,128,128" into sNamedColorsA["css3.lightcoral"]
   put "224,255,255" into sNamedColorsA["css3.lightcyan"]
   put "250,250,210" into sNamedColorsA["css3.lightgoldenrodyellow"]
   put "211,211,211" into sNamedColorsA["css3.lightgray"]
   put "144,238,144" into sNamedColorsA["css3.lightgreen"]
   put "211,211,211" into sNamedColorsA["css3.lightgrey"]
   put "255,182,193" into sNamedColorsA["css3.lightpink"]
   put "255,160,122" into sNamedColorsA["css3.lightsalmon"]
   put "32,178,170" into sNamedColorsA["css3.lightseagreen"]
   put "135,206,250" into sNamedColorsA["css3.lightskyblue"]
   put "119,136,153" into sNamedColorsA["css3.lightslategray"]
   put "119,136,153" into sNamedColorsA["css3.lightslategrey"]
   put "176,196,222" into sNamedColorsA["css3.lightsteelblue"]
   put "255,255,224" into sNamedColorsA["css3.lightyellow"]
   put "0,255,0" into sNamedColorsA["css3.lime"]
   put "50,205,50" into sNamedColorsA["css3.limegreen"]
   put "250,240,230" into sNamedColorsA["css3.linen"]
   put "255,0,255" into sNamedColorsA["css3.magenta"]
   put "128,0,0" into sNamedColorsA["css3.maroon"]
   put "102,205,170" into sNamedColorsA["css3.mediumaquamarine"]
   put "0,0,205" into sNamedColorsA["css3.mediumblue"]
   put "186,85,211" into sNamedColorsA["css3.mediumorchid"]
   put "147,112,219" into sNamedColorsA["css3.mediumpurple"]
   put "60,179,113" into sNamedColorsA["css3.mediumseagreen"]
   put "123,104,238" into sNamedColorsA["css3.mediumslateblue"]
   put "0,250,154" into sNamedColorsA["css3.mediumspringgreen"]
   put "72,209,204" into sNamedColorsA["css3.mediumturquoise"]
   put "199,21,133" into sNamedColorsA["css3.mediumvioletred"]
   put "25,25,112" into sNamedColorsA["css3.midnightblue"]
   put "245,255,250" into sNamedColorsA["css3.mintcream"]
   put "255,228,225" into sNamedColorsA["css3.mistyrose"]
   put "255,228,181" into sNamedColorsA["css3.moccasin"]
   put "255,222,173" into sNamedColorsA["css3.navajowhite"]
   put "0,0,128" into sNamedColorsA["css3.navy"]
   put "253,245,230" into sNamedColorsA["css3.oldlace"]
   put "128,128,0" into sNamedColorsA["css3.olive"]
   put "107,142,35" into sNamedColorsA["css3.olivedrab"]
   put "255,165,0" into sNamedColorsA["css3.orange"]
   put "255,69,0" into sNamedColorsA["css3.orangered"]
   put "218,112,214" into sNamedColorsA["css3.orchid"]
   put "238,232,170" into sNamedColorsA["css3.palegoldenrod"]
   put "152,251,152" into sNamedColorsA["css3.palegreen"]
   put "175,238,238" into sNamedColorsA["css3.paleturquoise"]
   put "219,112,147" into sNamedColorsA["css3.palevioletred"]
   put "255,239,213" into sNamedColorsA["css3.papayawhip"]
   put "255,218,185" into sNamedColorsA["css3.peachpuff"]
   put "205,133,63" into sNamedColorsA["css3.peru"]
   put "255,192,203" into sNamedColorsA["css3.pink"]
   put "221,160,221" into sNamedColorsA["css3.plum"]
   put "176,224,230" into sNamedColorsA["css3.powderblue"]
   put "128,0,128" into sNamedColorsA["css3.purple"]
   put "255,0,0" into sNamedColorsA["css3.red"]
   put "188,143,143" into sNamedColorsA["css3.rosybrown"]
   put "65,105,225" into sNamedColorsA["css3.royalblue"]
   put "139,69,19" into sNamedColorsA["css3.saddlebrown"]
   put "250,128,114" into sNamedColorsA["css3.salmon"]
   put "244,164,96" into sNamedColorsA["css3.sandybrown"]
   put "46,139,87" into sNamedColorsA["css3.seagreen"]
   put "255,245,238" into sNamedColorsA["css3.seashell"]
   put "160,82,45" into sNamedColorsA["css3.sienna"]
   put "192,192,192" into sNamedColorsA["css3.silver"]
   put "135,206,235" into sNamedColorsA["css3.skyblue"]
   put "106,90,205" into sNamedColorsA["css3.slateblue"]
   put "112,128,144" into sNamedColorsA["css3.slategray"]
   put "112,128,144" into sNamedColorsA["css3.slategrey"]
   put "255,250,250" into sNamedColorsA["css3.snow"]
   put "0,255,127" into sNamedColorsA["css3.springgreen"]
   put "70,130,180" into sNamedColorsA["css3.steelblue"]
   put "210,180,140" into sNamedColorsA["css3.tan"]
   put "0,128,128" into sNamedColorsA["css3.teal"]
   put "216,191,216" into sNamedColorsA["css3.thistle"]
   put "255,99,71" into sNamedColorsA["css3.tomato"]
   put "64,224,208" into sNamedColorsA["css3.turquoise"]
   put "238,130,238" into sNamedColorsA["css3.violet"]
   put "245,222,179" into sNamedColorsA["css3.wheat"]
   put "255,255,255" into sNamedColorsA["css3.white"]
   put "245,245,245" into sNamedColorsA["css3.whitesmoke"]
   put "255,255,0" into sNamedColorsA["css3.yellow"]
   put "154,205,50" into sNamedColorsA["css3.yellowgreen"]
end p_qrtColor_LoadCSS3Colors

private command p_qrtColor_LoadWindowsColors
   local tWindowsColorsA
   put qrtColor_WindowsColorsA() into tWindowsColorsA
   repeat for each key tKey in tWindowsColorsA
      put tWindowsColorsA[tKey] into sNamedColorsA["Windows." & tKey]
   end repeat
end p_qrtColor_LoadWindowsColors
