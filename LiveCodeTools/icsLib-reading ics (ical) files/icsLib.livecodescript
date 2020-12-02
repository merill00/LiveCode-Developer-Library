script "icsLib"
--  icsLib - Livecode library to interpret .ics (.ical) files.
--  Released under the MIT license.
--  You are free to use it in GPL or commercial/proprietary projects
--     provided you maintain the requirements of other licenses involved.

-- © 2013, 2018  Alex Tweedly    alex@tweedly.net

-- Code Contributions
-- If you want to contribute to icsLib's codebase and want your changes to be accepted into the library,
-- you will have to accept the licensing terms of the MIT license.

constant icsVersionMajor = 2
constant icsVersionMinor = 0


local sInitialized, sExceptions, sARFC5545PropertyTypes, sKAAllDaysAllowed
local sATimeZoneInfo, sTimeZoneInfo

constant KDOWNames = "SU,MO,TU,WE,TH,FR,SA"

function icsVersion
   if sInitialized is empty then
      return __icsInit__()
   else
      return sInitialized
   end if
end icsVersion

on libraryStack
   get __icsInit__()
end libraryStack


function __icsPrepareForRelease__
   get __icsInit__()
   --load the basic timezone info (from custom prop)
   --    a small subset of the current info from the  Olson database
   local temp
   put the uICSTimezoneInfo of me into temp
   
   -- NB must be last thing done in initialization, so everything else is
   --       set up, and we avoid recursion
   get icsParseICSData (temp, sATimeZoneInfo)
   
   set the uICSTZArray of me to arrayEncode(sATimeZoneInfo)
   return sInitialized
end __icsPrepareForRelease__

-- these are private functions  - should be in general library
private command pl pD
   put pD && cr after msg
end pl

private command dumpArray pArray, pIndent, pIndentString
   local tKeys, tError
   if pArray is an array then
      put the keys of pArray into tKeys
      sort lines of tKeys
      repeat for each line tKey in tKeys
         if pArray[tKey] is an array then
            pl pIndent & tKey & " = {" 
            dumpArray pArray[tKey], (pIndent & pIndentString), pIndentString
            pl pIndent & "}"
         else
            pl pIndent & tKey & " = " & pArray[tKey]
         end if
      end repeat
   end if
end dumpArray

private command plarray pS, pA
   pl pS & CR
   dumparray pA, "", "    "
end plarray


private function maxNumericKey pA
   -- given an array, with numeric keys, returns the max value of the keys
   local temp, tError
   put the keys of pA into temp
   replace CR with COMMA in temp
   try 
      put max(temp) into temp
   catch tError
      put empty into temp
   end try
   return temp
end maxNumericKey

private command _icsException pString
   if pString is not empty then
      put pString & CR after sExceptions
   end if
end _icsException


-- then the public available functions
function icsGetExceptions
   return sExceptions
end icsGetExceptions

function icsClearExceptions
  put empty into sExceptions
  return sExceptions
end icsClearExceptions


function  icsTimeAdjust @pWholeCalA, @pDateTimeItems, pTZID
   -- adjust pDateTimeItems appropriately by pTZID or default TZ
   -- return any exceptions
   local  tExceptions, tDiff, tSign
   
   if pTZID is empty then   -- try to use the default
      repeat for each item TZ in "X-WR-TIMEZONE,default_time_zone"
         put pWholeCalA[TZ] into pTZID
         if pTZID is not empty then exit repeat
      end repeat
   end if
   
   if pTZID is empty then
      -- make no adjustment, return an exception
      return "No TZ can be identified"
   end if
   local tTimeZone
   
   if NOT (pWholeCalA["time_zones"][pTZID] is an array) then
      -- try to use a built-in
      if NOT (sATimeZoneInfo["time_zones"][pTZID] is an array) then
         -- make no adjustment, return an exception
         return "TZ is undefined" && pTZID
      else
         put sATimeZoneInfo["time_zones"][pTZID] into tTimeZone
      end if
   else
      put pWholeCalA["time_zones"][pTZID] into tTimeZone
   end if
   
   -- figure out the offset from the date/time
   put tTimeZone["STANDARD"][1]["TZOFFSETTO"] into tDiff
   --   pl "timeadjust" && tDiff
   if NOT (tTimeZone["DAYLIGHT"][1] is an array) then
      -- no daylight saving defined!!
   else
      local tPrev, tAllDays, tDateTimeDecimal
      put tTimeZone["daylight_saving_dates"] into tAllDays
      put icsItems2DateTime(pDateTimeItems) into tDateTimeDecimal
      put item 4 of line 1 of tAllDays into tDiff
      repeat for each line L in tAllDays
         if tDateTimeDecimal  < item 2 of L then
            exit repeat
         end if
         put item 5 of L into tDiff
      end repeat
   end if
   if tDiff < 0 then 
      put -1 into tSign
   else 
      put 1 into tSign
   end if
   if char 1 of tDiff is not a number then delete char 1 of tDiff
   add tSign * (char 1 to 2 of tDiff) to item 4 of pDateTimeItems -- Hours
   add tSign * (char 3 to 4 of tDiff) to item 5 of pDateTimeItems -- Minutes
   convert pDateTimeItems to dateItems
   return empty
end icsTimeAdjust

function icsGetBuiltInTZAsCalendar
   return sATimeZoneInfo
end icsGetBuiltInTZAsCalendar

function  icsGetTZPeriodName @pWholeCalA, pDateTimeItems, pTZID
   --  Pass in (e.g.) the start_date_time of an event (i.e. date items in local time)
   -- return the name (e.g. CST, CDT, ...) for the given timezone and date/time
   local tPrev, tAllDays, tDateTimeDecimal, tZName
   
   if pTZID is empty then   -- use the default
      repeat for each item TZ in "X-WR-TIMEZONE,default_time_zone"
         put pWholeCalA[TZ] into pTZID
         if pTZID is not empty then exit repeat
      end repeat
   end if
   if pTZID is empty then
      -- make no adjustment, return an exception
      _icsException "No TZ can be identified"
   end if
   
   local tTimeZone
   if NOT (pWholeCalA["time_zones"][pTZID] is an array) then
      -- try to use a built-in
      if NOT (sATimeZoneInfo["time_zones"][pTZID] is an array) then
         -- make no adjustment, return an exception
         _icsException "TZ is undefined" && pTZID
      else
         put sATimeZoneInfo["time_zones"][pTZID] into tTimeZone
      end if
   else
      put pWholeCalA["time_zones"][pTZID] into tTimeZone
   end if
   
   put tTimeZone["daylight_saving_dates"] into tAllDays
   put icsItems2DateTime(pDateTimeItems) into tDateTimeDecimal
   local tPrevL
   put line 1 of tAllDays into tPrevL
   repeat for each line L in tAllDays
      if tDateTimeDecimal  < item 2 of L then
         exit repeat
      end if
      put L into tPrevL
   end repeat
   
   put tTimeZone[item 3 of tPrevL][1]["TZNAME"] into tZName 
   return tZName
end icsGetTZPeriodName

function icsDOWName pDate
   -- pDate is in dateitems format - return the NAME of the day
   convert pDate to dateItems
   return item (item 7 of pDate) of kDOWNames
end icsDOWName

function icsDOY pDate
   -- pDate is in dateitems format - return the day number within the year
   local tDate0101
   convert pDate to dateItems -- just to normalize it
   put pdate into tDate0101
   put 1 into item 2 of tDate0101
   put 1 into item 3 of tDate0101
   convert pdate to seconds
   convert tDate0101 to seconds
   return 1+(pDate-tDate0101) div (60*60*24)
end icsDOY

function icsISOCW pY, pM, pD
   local t
   put pY,pM,pD,12,0,0,0 into t
   convert t to dateItems
   convert t to seconds
   
   -- find a thursday
   local tD, tDI
   repeat with tD = 1 to 7
      put pY,1,tD,12,0,0,0 into tDI
      convert tDI to dateItems
      if item 7 of tDI = 5 then exit repeat
   end repeat
   subtract 3 from item 3 of tDI -- back to the Monday of that week
   put 0 into item 4 of tDI          -- in the morning !!
   convert tDI to dateItems  -- to have the first day of ISO week 1
   convert tDI to seconds
   
   return ( (t-tDI) div (24*60*60)) div 7 
end icsISOCW

function icsLastDayInMonth pY, pM
   -- returns the number of days in the specified month
   local t
   repeat with i = 28 to 32
      put pY,pM,i,12,0,0,0 into t
      convert t to dateitems
      if pM <> item 2 of t then exit repeat
   end repeat
   return i-1
end icsLastDayInMonth

function icsAddDays pDate, pCount
   -- take YYYYMMDD etc. date and add some days to it, return YYYYMMDD
   local tDateItems
   put icsDate2Items(pDate) into tDateItems
   add pCount to item 3 of tDateItems
   convert tDateItems to dateitems
   return icsItems2Date(tDateItems)
end icsAddDays

function icsDateItemsDelta p1, p2
   -- return the delta time in seconds FROM p1 TO p2
   -- i.e. positive if p2 is later than p1
   convert p1 to seconds
   convert p2 to seconds
   return p2 - p1
end icsDateItemsDelta

function icsDateTime2Items pDate
   -- converts a 15- or 16-character date-time into items
   --  i.e. expects floating or  UTC date-time
   local t
   if the number of chars in pDate < 15 or the number of chars in pDate > 16 then 
      return "1970,1,1,12,0,0,0"
   end if
   put pDate into t
   delete char 16 of t
   delete char 9 of t
   put comma before char 13 of t
   put comma before char 11 of t
   put comma before char 9 of t
   put comma before char 7 of t
   put comma before char 5 of t
   put ",0" after t
   return t
end icsDateTime2Items

function icsDate2Items pDate
   -- takes a YYYYMMDD and returns a dateitems format
   -- OR an YYYY-MM-DD and returns a dateitems format
   -- OR an DD-MM-YYYY - deal even with that
   local t
   switch  the number of chars in pDate 
      case 10 -- YYYY-MM-DD
         if char 3 of pDate = "-" then -- it's currently DD-MM-YYYY
            put char 7 to 10 of pDate & char 4 to 5 of pDate & char 1 to 2 of pDate into pDate
         else
            replace "-" with empty in pDate
         end if
         -- and fall through now that it's 8-char
      case  8 
         put ",12,0,0,0"after pDate
         put comma after char 6 of pDate
         put comma after char 4 of pDate
         break
      default
         put "2000,1,1,12,0,0,0" into pDate
   end switch
   convert pDate to dateitems
   return pdate
end icsDate2Items
  
function icsItems2Date p
   -- takes a dateitems format date and returns a YYYYMMDD  
   local t
   put format("%04d%02d%02d", item 1 of p, item 2 of p, item 3 of p) into t
   return t
end icsItems2Date 

function icsItems2DateTime p
   -- takes a dateitems format date and returns a YYYYMMDDTHHMMSS
   local t
   put format("%04d%02d%02d.%02d%02d%02d", item 1 of p, item 2 of p, item 3 of p, item 4 of p, item 5 of p, item 6 of p) into t
   return t
end icsItems2DateTime

function icsDate2DayNum pDate
   local tDateItems
   put icsDate2Items(pDate) into tDateItems
   return item 7 of tDateItems
end icsDate2DayNum



-- and then all the actual reading / expansion functions and sub-functions


private function _icsUnfold pData, @pALines, @pAOriginals, @pSplits
   -- given a string of text lines, returns a dense array of unfolded lines
   -- an array of "original line numbers" (i.e. line num of first line of output line)
   -- a CR/TAB list of event (VEVENT) limits
   
   local tLineNumber, tCurrent
   
   put empty into pALines
   put empty into pAOriginals
   put empty into pSplits
   
   put 0 into tLineNumber
   put 0 into tCurrent
   
   local L, LL
   repeat for each line LL in pData
      -- trim TRAILING white space
      put char 2 to -1 of ( word 1 to -1 of  ("X" & LL) ) into L
      
      add 1 to tLineNumber
      if char 1 of L = SPACE or char 1 of L = TAB then
         if tCurrent = 0 then put 1 into tCurrent
         put char 2 to -1 of L after pALines[tCurrent]
      else
         add 1 to tCurrent
         put L into pALines[tCurrent]
         put tLineNumber into pAOriginals[tCurrent]
         --         --         --         --         --         --         put CR & L after tResult
         --         --         put the number of chars in L && ">>" & L & "<<" &CR after msg
         if word 1 to -1 of L = "BEGIN:VEVENT" then put tCurrent & TAB after pSplits["event"]
         if word 1 to -1 of L = "END:VEVENT" then put tCurrent & CR after pSplits["event"]
         if word 1 to -1 of L = "BEGIN:VTIMEZONE" then put tCurrent & TAB after pSplits["timezone"]
         if word 1 to -1 of L = "END:VTIMEZONE" then put tCurrent & CR after pSplits["timezone"]
         
      end if
   end repeat
   return tCurrent
end _icsUnfold

private command _icsSplitLinePropParamVal pLine, @pProperty, @pParams, @pValues
   local tPropnParam
   set the itemDel to ":"
   
   if the number of items in (pLine & " ") < 2 then
      put empty into pProperty
      put empty into pParams
      put empty into pValues
      exit _icsSplitLinePropParamVal
   end if
   
   put item 2 to -1 of pLine into pValues
   
   if item 1 of pLine contains ";" then
      put item 1 of pLine into tPropnParam
      set the itemDel to ";"
      put item 1 of tPropnParam into pProperty
      put item 2 to -1 of tPropnParam into pParams
   else
      put item 1 of pLine into pProperty
      put empty into pParams
   end if
end _icsSplitLinePropParamVal

private function _icsProcessSection  @pWholeCalA, @pSectionA, @pALines, pStart, pEnd
   -- process a section into pSectionA
   -- pWholeCalA is to passed to allow access to timezone info
   -- section can be any one of   VEVENT, VTIMEZONE, STANDARD, DAYLIGHT
   --      or VALARM - ignored !!
   -- data is in lines array pALines between pStart and pEnd
   -- add any error/warnings to through the exception scheme
   -- and return the value of the last line dealt with ?? WHY ??
   local tLineNumber, tA
   local tProperty, tParams, tValues
   local L, DT, tItemDel, temp
   
   if pEnd = -1 then
      -- can only be file full of VTIMEZONEs
      --      --      --      put the keys of pALines into pEnd
      --      --      --      replace CR with COMMA in pEnd
      --      --      --      put max(pEnd) into pEnd
      put maxNumericKey(pALines) into pEnd
   end if
   
   put empty into tA
   set the itemDel to ":"
   
   put pStart into tLineNumber
   repeat until tLineNumber >= pEnd
      --      put tLineNumber &CR after msg
      add 1 to tLineNumber
      put pALines[tLineNumber] into L
      if L is empty then next repeat
      
      _icsSplitLinePropParamVal L, tProperty, tParams, tValues
      
      if tProperty is among the lines of the keys of tA then
         if tProperty is among the items of  "dtstamp:uid:dtstart:class:created:description:geo:last-mod:" & \
               "location:organizer:priority:seq:status:summary:transp:url:recurid:dtend:duration" then
            _icsException "Property" && tProperty && "duplicated around line" && tLineNumber
            next repeat
         else
            -- a duplicate is ok - nothing special to do
         end if
      end if
      
      local tParamsA
      if tParams is not empty then
         put tParams into tParamsA
         split tParamsA by ":" and "="
      end if
      
      switch sARFC5545PropertyTypes[tProperty]
         case "DATE-TIME-LIST"
            put the itemDel into tItemDel
            set the itemDel to COMMA
            repeat for each item DT in tValues
               put tParams & ":" & DT &CR after tA[tProperty]
            end repeat
            set the itemDel to tItemDel
            break
         case "DATE-TIME"
         case "TEXT"
         case "INTEGER"
         case "PERIOD"
         case "DURATION"
         case "PERIOD"
         case "UTC-OFFSET"
         case "TZOFFSETTO"
         case "TZOFFSETFROM"
         case "URI"
         case "CAL-ADDRESS"
            if tProperty is among the items of "BEGIN:END" then
               -- no need to store it
            else
               put tParams & ":" & tValues &CR after tA[tProperty]
            end if
            break
         case "RECUR"
            put maxNumericKey(tA["recur_rule"])+1 into temp
            put tParams & ":" & tValues &CR after tA[tProperty][temp]
            split tValues by ";" and "="
            put tValues into tA["recur_rule"][temp]
            break
         default
            if tProperty begins with "X-" then
               -- it's an extension
            else
               _icsException "Unknown Property Type" && tProperty && tLineNumber
            end if
      end switch
      
      
      switch tProperty   -- the kind of statement
         case "DTSTART"
            if the number of chars in tValues > 8 then 
               put _icsDateTimeLoad(pWholeCalA, tParamsA, tValues) into tA["start_date_time"]
               -- and that may have changed the date
               put icsItems2Date(tA["start_date_time"]) into tA["start_date"]
            else 
               put char 1 to 8 of tValues into tA["start_date"]
               put true into tA["whole_day"]
            end if
            break
            
         case "DTEND"
            if the number of chars in tValues > 8 then 
               put _icsDateTimeLoad(pWholeCalA, tParamsA, tValues) into tA["end_date_time"]
               -- and that may have changed the date
               put icsItems2Date(tA["end_date_time"]) into tA["end_date"]
            else
               -- WHOLE DAY - adjust end date to be inclusive
               put char 1 to 8 of tValues into tA["end_date"]
               put icsAddDays(tA["end_date"], -1) into tA["end_date"]
            end if
            break
            
         case "DURATION"
            --            --            -- TODO put back in duration code when tested
            --            --            _icsException "Cannot yet do duration" && tLineNumber
            local tSign, tDur, tDelim, tTime
            local tDDays, tDHours, tDMins, tDSecs
            put 0 into tDDays
            put 0 into tDHours
            put 0 into tDMins
            put 0 into tDSecs
            put the itemDel into tDelim
            put tValues into tDur
            if char 1 of tDur is in "+-" then
               put char 1 of tDur into tSign
               delete char 1 of tDur
            end if
            put "1" after tSign
            if char 1 of tDur = "P" then  delete char 1 of tDur
            put empty into tTime
            if "T" is in tDur then
               set the itemDel to "T"
               put item 2 of tDur into tTime
               put item 1 of tDur into tDur
               set the itemDel to tDelim
            end if
            if "W" is in tDur then
               set the itemDel to "W"
               put item 1 of tDur * 7 into tDDays
            else
               if "D" is in tDur then 
                  set the itemDel to "D"
                  put item 1 of tDur into tDDays
               end if
               if "H" is in tTime then
                  set the itemDel to "H"
                  put item 1 of tTime into tDHours
                  put item 2 of tTime into tTime
               end if
               if "M" is in tTime then
                  set the itemDel to "M"
                  put item 1 of tTime into tDMins
                  put item 2 of tTime into tTime
               end if
               if "S" is in tTime then
                  set the itemDel to "S"
                  put item 1 of tTime into tDSecs
                  put item 2 of tTime into tTime
               end if
            end if
            set the itemDel to TDelim
            -- And add them all together
            put tSign &COMMA & tDDays &COMMA& tDHours &COMMA& tDMins &COMMA& tDSecs into tA["duration_date_time"]
            break
            
         case "RRULE"
            break
            
         case "RDATE"
            put the itemDel into tItemDel
            set the itemDel to COMMA
            repeat for each item DT in tValues
               
               if the number of chars in DT > 8 then 
                  put _icsDateTimeLoad(pWholeCalA, tParamsA, DT) & CR after tA["list_of_rdates"]
               else 
                  put char 1 to 8 of DT & CR after tA["list_of_rdates"]
               end if
            end repeat
            set the itemDel to tItemDel
            break
            
         case "EXDATE"
            put the itemDel into tItemDel
            set the itemDel to COMMA
            repeat for each item DT in tValues
               if the number of chars in DT > 8 then 
                  put _icsDateTimeLoad(pWholeCalA, tParamsA, DT) & COMMA after tA["list_of_exdates"]
               else 
                  put char 1 to 8 of DT & COMMA after tA["list_of_exdates"]
               end if
            end repeat
            set the itemDel to tItemDel
            break
            
         case "BEGIN" -- i.e. the begin for a sub-clause
            local tSubClauseType, tSubStart, tSubEnd
            put tValues into tSubClauseType
            put tLineNumber into tSubStart
            repeat until tLineNumber >= pEnd 
               add 1 to tLineNumber
               if item 1 of pALInes[tLineNumber] = "END" and \
                     item 2 of pALInes[tLineNumber] = tSubClauseType then
                  exit repeat
               end if
            end repeat
            put tLineNumber into tSubEnd
            --            put ":" & tSubClauseType & ":" & the itemDel & ":" & CR after msg
            switch tSubClauseType 
               case "VTIMEZONE"
               case "STANDARD"
               case "DAYLIGHT" 
                  local tSubA
                  put _icsProcessSection(pWholeCalA, tSubA, pALines, tSubStart, tSubEnd) into tLineNumber
                  if tSubClauseType = "VTIMEZONE" then
                     if tSubA["TZID"] is empty then put "unknown" into tSubA["TZID"]
                     if tSubA["TZID"] is among the keys of tA["time_zones"] then
                        _icsException "Duplicate timezone info" && tSubA["TZID"] && tLineNumber
                     else
                        _icsValidateTZ tSubA 
                        put tSubA into tA["time_zones"][tSubA["TZID"]]
                     end if
                  else
                     put maxNumericKey(tA[tSubClauseType]) + 1 into temp
                     put tSubA into tA[tSubClauseType][temp]
                  end if
                  break
               case "VALARM"
                  -- ignore without any error message
                  break
               default
                  _icsException "Unknown sub-section" && tSubClauseType
            end  switch
            break
            
         case "END" 
            if tValues = "VEVENT" then
               exit repeat
            else
               -- 'end' of something else ??
            end if
            break
            
         default -- unknown statement within an event
            put tValues into tA[tProperty]
            break
      end switch   -- switch on different stmts within an event
      
   end repeat
   
   put tA into pSectionA
   
   return tLineNumber
   
end _icsProcessSection

private function _icsProcessEvent @pCalA, @pALines, pStart, pEnd
   -- process an event into pCalA
   -- data is in lines array pALines between pStart and pEnd
   -- and return the value of the last line dealt with ?? WHY ??
   local tLineNumber, tAEvent
   local tProperty, tParams, tValues
   local L, DT, tItemDel
   
   put empty into tAEvent
   put _icsProcessSection(pCalA, tAevent, pALines, pStart, pEnd) into tLineNumber
   
   -- should validate
   _icsValidateEvent tAEvent, pStart
   
   add 1 to pCalA["event_count"]
   put tAEvent into pCalA["events"][pCalA["event_count"]]
   
   return tLineNumber
   
end _icsProcessEvent

private command _icsValidateEvent @pAEvent, pStart   
   -- Validate for
   --  VALIDATE no missing mandatory properties
   if pAEvent["UID"] is empty then
      _icsException "Missing UID" && pStart && pAEvent["SUMMARY"] 
   end if
   
   -- VALIDATE not both dtend and duration
   if pAEvent["end_date"] is not empty and pAEvent["DURATION"] is not empty then
      _icsException "Cannot have DURATION and DTEND" && pStart && pAEvent["SUMMARY"]
   end if
   
   -- VALIDATE end-date(time) after start date(time)
   local t1, t2
   if pAEvent["end_date"] is not empty and pAEvent["start_date"] is not empty then
      if pAEvent["start_date_time"] is empty then
         put icsDate2Items( pAEvent["start_date"]) into t1
      else
         put  pAEvent["start_date_time"]  into t1
      end if
      if pAEvent["end_date_time"] is empty then
         put icsDate2Items( pAEvent["end_date"] ) into t2
      else
         put  pAEvent["end_date_time"]  into t2
      end if
      if icsDateItemsDelta(t1, t2) < 0 then
         _icsException "Negative time" && pStart && pAEvent["SUMMARY"]
      end if
   end if
   
   if pAEvent["end_date"] is empty and pAEvent["DURATION"] is empty then
      put 0 into pAEvent["days_delta_to_end"]
   else
      if pAEvent["end_date"] is empty then
         local tItems, tSign, tTime
         put icsDate2Items(pAEvent["start_date"]) into tItems
         put pAEvent["duration_date_time"] into tTime
         put item 1 of tTime into tSign
         put item 2 to -1 of tTime into tTime
         if pAEvent["start_date_time"] is not empty then
            put pAEvent["start_date_time"] into tItems
            repeat with i = 1 to 4
               add tSign * (item i of tTime) to item (i+2) of tItems
               convert tItems to dateitems
            end repeat
            put tItems into paEvent["end_date_time"]
            put icsItems2Date(tItems) into paEvent["end_date"]
         else -- whole day event with no start TIME
            local tDDays
            if item 2 to -1 of tTime <> "0,0,0" then
               _icsException "Duration specifies hours/mins/secs for whole day event." && pAEvent["summary"]
            end if
            put item 1 of tTime into tDDays
            subtract 1 from tDDays -- whole day events are inclusive by day
            add tSign * tDDays to item 3 of tItems
            convert tItems to dateitems
            put icsItems2Date(tItems) into paEvent["end_date"]
         end if
      end if
      
      repeat with i = 1 to 10000 
         if icsAddDays(pAEvent["start_date"], i) > pAEvent["end_date"] then exit repeat
      end repeat
      put i-1 into pAEvent["days_delta_to_end"]
   end if
   
   repeat for each element tA in pAEvent["recur_rule"]
      if tA["INTERVAL"] is not empty then
         if tA["INTERVAL"] is not a number then
            _icsException "RRULE frequency must be a number" && pStart && pAEvent["SUMMARY"]
         end if
      end if
   end repeat
   
end _icsValidateEvent

private command _icsValidateTZ @pATZ, pStart
   local tInstances, tDays, temp
   local tAllDays, tAllInstances
   
   repeat for each key T in pATZ
      if T is not among the items of  "STANDARD,DAYLIGHT" then next repeat
      
      repeat for each key tNum in pATZ[T]
         -- Validate for
         
         -- must have a start date
         if pATZ[T][tNum]["start_date"] is empty then
            _icsException "Timezone missing a start date" && pStart
         end if
         
         -- VALIDATE no dtend and no duration
         --                  and fill in end_date == start_date (it's a trigger)
         if pATZ[T][tNum]["end_date"] is not empty then
            _icsException "Cannot have DTEND in timezone" && pStart
         else
            put pATZ[T][tNum]["start_date"] into pATZ[T][tNum]["end_date"]
            put 0 into pATZ[T][tNum]["days_delta_to_end"]
         end if
         
         if pATZ[T][tNum]["DURATION"] is not empty then
            _icsException "Cannot have DURATION in timezone" && pStart
         end if
         
         repeat for each element tA in pATZ[T][tNum]["recur_rule"]
            if tA["INTERVAL"] is not empty then
               if tA["INTERVAL"] is not a number then
                  _icsException "RRULE frequency must be a number" && pStart
               end if
            end if
         end repeat
         
         put empty into tDays
         put empty into tInstances
         put _icsFlattenRRULE(pATZ, pATZ[T][tNum], tDays, tInstances, "19700101", "20200101") into temp
         
         repeat for each line L in tDays
            put format("%s.%02d%02d,", L, item 4 of pATZ[T][tNum]["start_date_time"], item 5 of pATZ[T][tNum]["start_date_time"]) \
                  &  T & "," & pATZ[T][tNum]["TZOFFSETFROM"] &","& pATZ[T][tNum]["TZOFFSETTO"] &"," &t &"," &TNum &CR after tAllDays
         end repeat
      end repeat 
   end repeat
   
   sort lines of tAllDays numeric by item 2 of each
   
   local tPrev
   put item 4 of line 1 of tAllDays into tPrev
   repeat for each line L in tAllDays
      if tPrev <> item 4 of L then
         _icsException "Warning : Incomplete or bad timezone info for " && pATZ["TZID"] && tPrev && L
         exit repeat    -- only one warning needed
      else
         put item 5 of L into tPrev
      end if 
   end repeat
   put tAllDays into pATZ["daylight_saving_dates"]
   
end _icsValidateTZ


private function _icsProcessHeader @pCalA, @pALines, pStart, pEnd
   local tAHeader, tLineNumber
   
   put empty into tAHeader
   put _icsProcessSection(pCalA, tAHeader, pALines, pStart, pEnd) into tLineNumber
   
   repeat for each key K in tAHeader
      if K = "time_zones" then
         repeat for each key KTZ in tAHeader[K]
            put tAHeader[K][KTZ] into pCalA[K][KTZ]
         end repeat
      else
         put tAHeader[K] into pCalA[K]
      end if
   end repeat
   
   return pEnd
end _icsProcessHeader

private function _icsProcessTrailer @pCalA, @pALines, pStart, pEnd
   return pEnd
end _icsProcessTrailer

private function _icsProcessBetween @pCalA, @pALines, pStart, pEnd
   return pEnd
end _icsProcessBetween

private function _icsDateTimeLoad @pWholeCalA, pParamsA, pValues
   -- takes the params and values for a DATE-TIME
   -- interpret as floating, UTC or TZ-specified and return the
   -- adjusted time as dateitems
   local tResult, temp
   if pParamsA["VALUE"] = "DATE" then
      -- should be whole day only, so should not be here
      _icsException "Date-time has value=date and a time" && pValues
      return icsDate2Items(pValues)
   end if
   if the number of chars in pValues < 15 then
      _icsException "Incomplete date and time" && pValues
      return icsDate2Items(pValues)
   end if
   
   put icsDateTime2Items(pValues) into tResult
   if  the number of chars in pValues = 16 then
      -- should be a UTC time
      if char 16 of pValues = "Z" then
         -- it's a UTC - need offset
         put icsTimeAdjust(pWholeCalA, tResult, pParamsA["TZID"]) into temp
         if temp is not empty then
            _icsException temp
         end if
      else
         _icsException "Sixteen chars but not UTC" && pValues
      end if
   else
      -- 15 chars == floating value
      -- no adjustment needed
   end if
   
   return tResult
   
end _icsDateTimeLoad


function icsParseICSData pData, @pCalA, pDefaultTimeZone
   local tState, L, tEventNumber
   local tEventA  -- used to build up the items within an event
   local tLast
   local tLineCount
   
   if sInitialized = 0 then
      get __icsInit__()
   end if
   
   put empty into sExceptions
   
   --   if pData begins with "http" or pData begins with "file" then
   --      put URL pData into pData
   --   end if
   
   -- unfold the lines in the data
   local tALines, tAOriginals, tSplits
   put _icsUnfold(pData, tALines, tAOriginals, tSplits) into tLineCount
   
   put empty into pCalA
   
   if pDefaultTimeZone is not empty then
      put pDefaultTimeZone into pCalA["default_time_zone"]
   end if
   
   local tLineNumber
   put 1 into tLineNumber
   set the itemDel to TAB
   
   put _icsProcessHeader(pCalA, tALines, 1, item 1 of tSplits["event"]-1) into tLast
   
   repeat for each line L in tSplits["event"]
      if tLast < item 1 of L - 1 then 
         put _icsProcessBetween(pcalA, tALines, tLast+1, item 1 of L-1) into tLast
      end if
      put _icsProcessEvent(pCalA, tALines, item 1 of L, item 2 of L) into tLast
      put item 2 of L into tLast
   end repeat
   
   put _icsProcessTrailer(pCalA, tALines, tLast+1, tLineCount) into tLast
   return sExceptions
end icsParseICSData


function icsExpandCal pCalName, pCalA, @pDays, @pInstances, pStart, pEnd
   -- pStart, pEnd are in YYYYMMDD
   local tResult 
   local tDate
   local K, event, tStart, tEnd, tStartDate, tEndDate
   local tInstances, tDays, temp
   
   put empty into pDays
   put empty into pInstances
   put empty into sExceptions
   
   repeat for each key K in pCalA["events"] 
      put pCalA["events"][K] into event
      put empty into tInstances
      put empty into tDays
      
      if event["start_date"] is empty then
         _icsException "Event" && K && "has no start date set."
         next repeat
      end if
      
      if event["end_date"] is empty then
         if event["DURATION"] is empty then
            put event["start_date"] into event["end_date"]
         else
            put icsAddDays(event["start_date"], event["DURATION_days"]) into event["end_date"]
         end if
      end if
      
      put _icsFlattenRRULE(K, event, tDays, tInstances, pStart, pEnd) into temp
      
      put tDays after pDays
      put tInstances after pInstances
   end repeat
   return sExceptions
end icsExpandCal

private function _icsFlattenRRULE pID, pEvent, @pDays, @pInstances, pStart, pEnd
   -- flatten for any recur rules (RRULE)
   -- TODO EXRULE ??
   -- add in any instances from RDATES
   -- remove any in EXDATE
   -- pStart, pEnd are dates in YYYYMMDD
   
   local tDays
   local tInstances
   local rules
   
   if  NOT (pEvent["RRULE"] is an array) then
      -- single occurrence of this event - check all its days
      put pEvent["start_date"] & ":" & pEvent["end_date"] &CR after tInstances
   else
      local increment, check_dow, check_week, check_doy, check_setpos
      local make_dow_list, make_dom, make_week, dow, setposlist, list_dates
      local dates, dom_index, tmp_dates, count, Maxcount
      local days_step_size, weeks_step_size, month_step_size, year_step_size
      local event_start, event_end
      local years, months, days, wkst, step_size, weeks, doy
      local first_dom, last_dom, month_start, month_end
      
      local summary
      put pEvent["SUMMARY"] into summary
      
      local t_dow
      repeat for each key K in pEvent["recur_rule"]
         put pEvent["recur_rule"][K] into rules
         
         put "NONE" into         increment 
         put False into         check_dow 
         put False into         check_week 
         put False into         check_doy 
         put False into         check_setpos 
         put False into         make_dow_list 
         put False into         make_dom 
         put False into         make_week 
         put sKAAllDaysAllowed into         dow 
         --      put{'MO': [0],'TU': [0],"WE":[0],"TH":[0],"FR":[0],"SA":[0],"SU":[0]} into         dow 
         
         put empty into         setposlist 
         put empty into         list_dates 
         put empty into         dates 
         put empty into         dom_index 
         put empty into         tmp_dates 
         put 0 into         count 
         put 0 into         MaxCount 
         put 1 into         days_step_size 
         put 1  into         weeks_step_size 
         put 1 into         month_step_size 
         put 1 into         year_step_size 
         put pEvent["start_date"] into event_start 
         put pEnd into         event_end 
         
         put char 1 to 4 of event_start into         years 
         put char 5 to 6 of event_start into         months 
         put char 7 to 8 of event_start into         days 
         put icsISOCW(years,months,days) into         weeks 
         
         put "MO" into         wkst 
         put 1 into         step_size 
         
         put 1 into         first_dom 
         put 31 into         last_dom 
         
         put 1 into         month_start 
         put 12 into         month_end 
         
         put 1 into first_dom
         put 31 into last_dom
         put 1 into month_start
         put 12 into month_end
         
         if rules["FREQ"] is not empty then
            if rules["INTERVAL"] is not empty then put rules["INTERVAL"] into step_size
            switch rules["FREQ"] 
               case "YEARLY" 
                  put "YEAR" into increment
                  put step_size into year_step_size
                  break
               case "MONTHLY" 
                  put "MONTH" into increment
                  put step_size into month_step_size
                  break
               case "WEEKLY" 
                  put "WEEK" into increment
                  put True into make_week
                  put true into make_dom
                  put true into check_week
                  put char 7 to 8 of event_start into first_dom
                  put char 5 to 6 of event_start into month_start
                  put step_size into weeks_step_size
                  break
               case "DAILY" 
                  put "DAY" into increment
                  put true into make_dom
                  put char 7 to 8 of event_start into first_dom
                  put char 5 to 6 event_start into month_start
                  put step_size into days_step_size
                  break
               default
                  _icsException "Bad frequency value" && rules["FREQ"] && pID && summary 
            end switch
            if rules["COUNT"] is not empty then
               put rules["COUNT"] into Maxcount
            end if
            if rules["BYMONTH"] is not empty then
               put rules["BYMONTH"] into months
               -- AGT addition
               if rules["FREQ"] = "YEARLY" then
                  put true into make_dom
               end if
            end if
            if rules["BYWEEKNO"] is not empty then
               put rules["BYWEEKNO"] into weeks
               put true into check_week
            end if
            if rules["BYMONTHDAY"] is not empty then
               put rules["BYMONTHDAY"] into dom_index
               put true into make_dom
            end if
            local tIndex, tName
            if rules["BYDAY"] is not empty then
               --            put rules["BYDAY"] into dow
               put empty into dow
               repeat for each item t_dow in rules["BYDAY"]
                  put char 1 to -3 of t_dow into tIndex
                  if tIndex is empty then put 0 into tIndex
                  put char -2 to -1 of t_dow into tName
                  put tIndex & COMMA into dow[tName]
               end repeat
               put true into make_dow_list
               put true into check_dow
               if increment = "YEAR" and rules["BYMONTH"] is empty then
                  put _icsMakeList(1,12) into months
               end if
            end if
            if rules["BYYEARDAY"] is not empty then
               put rules["BYYEARDAY"] into doy
               put true into make_dom
               put true into check_doy
               put "DAY" into increment
            end if
            if rules["BYSETPOS"] is not empty then
               put true into check_setpos
               put true into make_dow_list
               put rules["BYSETPOS"] into setposlist
            end if
            if rules["WKST"] is not empty then
               put rules["WKST"] into wkst
            end if
         end if    -- end of the different "FREQ" checks
         
         if rules["UNTIL"] is not empty then
            put rules["UNTIL"] into event_end
         end if
         
         if make_dow_list then
            put _icsMakeList(1,31) into days
         end if
         
         
         --          ****** END OF CONFIGURATION, NOW RUNNING
         
         local lDay, tmp_days, dayfirst
         local cw, lcw
         local year, month, day
         
         put empty into lDay
         if month_step_size > 12 then
            put _icsMakeList(char 1 to 4 of event_start, char 1 to 4 of event_end, month_step_size div 12 +1) into years
         else
            put _icsMakeList(char 1 to 4 of event_start, char 1 to 4 of event_end, year_step_size) into years
         end if
         
         repeat for each line year in years
            if (increment="MONTH" or increment="Day" or increment="WEEK") and rules["BYMONTH"] is empty then
               
               -- AGT Addition !?
               if year = char 1 to 4 of event_end then 
                  put char 5 to 6 of event_end into month_end
               end if
               put _icsMakeList(month_start, month_end, month_step_size) into months
            end if
            local week0_num
            if make_week = true then
               put icsISOCW(year, month_start, first_dom, wkst) into week0_num
               put _icsMakeList(week0_num,53,weeks_step_size) into weeks
               
               if rules["BYDAY"] is empty then
                  --                        #if BYDAY not specified add the DOW from DTSTART
                  put empty into dow
                  put icsDOWName(year, month_start, first_dom) into t_dow
                  put "0," into dow[t_dow]
               end if
            end if
            repeat for each line month in months
               -- AGT Addition !?
               if year = char 1 to 4 of event_end and month = char 5 to 6 of event_end then 
                  put char 7 to 8 of event_end into last_dom
                  put _icsMakeList(first_dom, last_dom, days_step_size) into tmp_days
               end if
               
               if make_dom is true then
                  put icsLastDayInMonth(year, month) into last_dom
                  put _icsMakeList(first_dom, last_dom, days_step_size) into tmp_days
                  put empty into days
                  if dom_index is not empty then
                     repeat for each item index in dom_index
                        if index <= the number of lines in tmp_days then
                           put line index of tmp_days &CR after days
                        end if
                     end repeat
                  else
                     -- by default all day of month are considered
                     put _icsMakeList(first_dom, last_dom, days_step_size) into tmp_days
                     put tmp_days into days
                  end if
               end if
               put line 1 of days into dayfirst
               put icsISOCW(year, month, dayfirst, wkst) into cw
               put cw into lcw
               local good_date, t_date, last_good_date, tdate_dow
               repeat for each line day in days
                  --  HERE we start plodding through the days of the month and checking for all of them
                  --  if they exist (feb 29th), then if they are in the good week number, then if they have the right DOW (monday, ...)
                  --               put true into dateExist
                  put true into good_date
                  put year,month,day,12,0,0,0 into t_date
                  -- NB no need to check for invalid day for dayfirst, because the next check for
                  --       month = item 2 of t_date    will deal with that case anyway
                  --       [ because of the more robust way convert handles dateitem out of natural range ]
                  convert t_date to dateItems
                  if month = item 2 of t_date then  -- i.e. if date exists
                     if check_week is true then
                        -- TODO check why wkst in ISOCW
                        put icsISOCW(year,month,day) into cw
                        if cw is not among the lines of weeks and (cw>=lcw) then
                           -- check if cw is a good week number
                           --    if cw is not in the list need to make sure we haven't gone round the week number back to 1 while still same year
                           put false into good_date
                        else if lcw > cw then
                           --     #here is the case where the week numbering is back to 1 but we are still at the end of year
                           if "53" is among the lines of weeks then
                              put true into good_date
                           else
                              put false into good_date
                           end if
                        end if
                     end if
                     -- NO NEED TO DO
                     --                            if check_week == True:
                     --                                cw = self._isoCW(year,month,day,wkst)
                     --                                self._log("cw , y m d,wkst",[cw,year,month,day,wkst])
                     --                                if (cw not in weeks) and (cw>=lcw):
                     --                                    good_date = False
                     --                                    self._log("381 good date is false because cw not in weeks (last cw)",[cw,weeks,lcw])
                     --                                elif lcw>cw:
                     --                                #    #here is the case where the week numbering is back to 1 but we are still at the end of year
                     --                                    if 53 in weeks:
                     --                                        good_date = True
                     --                                    else:
                     --                                        good_date = False
                     --                                    self._log("460 corner case week number:good_date, cw, lcw,weeks",[good_date,cw, lcw, weeks])
                     
                     --                            #if check_dow==True:
                     put icsDOWName(t_date) into tdate_dow
                     if tdate_dow is not among the keys of dow then
                        put false into good_date
                     end if
                     
                     if check_doy then
                        if icsDOY(t_date) is among the items of doy then
                           put true into good_date
                        else
                           put false into good_date
                        end if
                     end if
                     
                     if good_date is true then
                        put cw into lcw
                        --                                #last good date is used for computing next starting date when rolling over
                        put t_date into last_good_date
                        -- LC doesn't need to deal with first and subsequent differently
                        put t_date & CR after lDay[tdate_dow]                        
                     end if -- good_date is true
                  end if    -- date exists
                  if increment = "DAY" then
                     put _icsSublist(lDay, dates, summary, dow, check_setpos, setposlist, list_dates) into list_dates
                     put empty into dates
                     put empty into lDay
                     put last_good_date into t_date
                     add days_step_size to item 3 of t_date
                     convert t_date to dateitems
                     if item 2 of t_date > month then
                        put item 3 of t_date into first_dom
                     else
                        if item 1 of t_date > year then
                           put item 3 of t_date into first_dom
                           put item 2 of t_date into month_start
                        end if
                     end if
                  end if
               end repeat -- for days
               if increment = "WEEK" then
                  put 1 into first_dom
               end if
               --                    if increment == "MONTH":
               --                        #enter here to empty the lday list and fill the list_dates
               --                        self._log("about to enter _sublist filtering on MONTH increment:\t lday,dates,dow,check_setpos_setposlit,list_dates\n",[lday,dates,summary,dow,check_setpos,setposlist,list_dates])
               --                        list_dates = self._sublist(lday,dates,summary,dow,check_setpos,setposlist,list_dates)
               --                        month_start = (months[-1]+month_step_size) % 12
               --                        dates = []
               --                        lday = {}
            end repeat   -- for months
            if increment = "YEAR" or increment = "WEEK" then
               put _icsSublist(lDay, dates, summary, dow, check_setpos, setposlist, list_dates) into list_dates
               put empty into dates
               put empty into lDay
               if increment = "WEEK" then
                  put last_good_date into t_date
                  
                  local maxDOW, minDOW, dwi, daysgap
                  put 0 into maxDOW
                  put 7 into minDOW
                  repeat for each key DW in dow
                     put itemOffset(DW, KDOWNames) into dwi
                     if dwi < minDOW then put dwi into minDOW
                     if dwi > maxDOW then put dwi into maxDOW
                  end repeat
                  put 7 - (maxDOW-minDOW) into daysgap
                  add 7 * (weeks_step_size - 1) to item 3 of t_date
                  add daysgap to item 3 of t_date
                  convert t_date to dateItems
                  if item 1 of t_date > year then
                     put item 3 of t_date into first_dom
                     put item 2 of t_date into month_start
                  end if
               end if
            end if
         end repeat -- for years
         set the itemDel to ":"
         local temp
         repeat for each line L in list_dates
            put icsItems2Date(item 1 of L) into temp
            put temp & ":" & icsAddDays(temp, pEvent["days_delta_to_end"]) & CR after tInstances
         end repeat
      end repeat -- each recur_rule
   end if -- if there are recur rules
   
   -- then handle the rules that are for the whole event
   -- add in any RDATES
   set the itemDel to COMMA
   repeat for each line DT in pEvent["list_of_rdates"]
      put icsItems2Date(DT) into temp
      if lineOffset(temp & ":", tInstances) = 0 then
         put temp & ":" & icsAddDays(temp, pEvent["days_delta_to_end"]) & CR after tInstances
      else
         -- already there - avoid duplicating it
      end if
   end repeat
   
   -- remove any in EXDATES
   repeat for each item DT in pEvent["list_of_exdates"]
      put icsItems2Date(DT) into temp
      put lineOffset(temp & ":", tInstances) into temp
      if temp > 0 then
         delete line temp of tInstances
      else
         -- not there 
      end if
   end repeat
   
   -- and then trim to relevant window
   set the itemDel to ":"
   repeat for each line L in tInstances
      put _icsOverlapDays(pID, pStart, pEnd, item 1 of L, item 2 of L) into tDays
      if tDays is not empty then
         put tDays after pDays
         put  pID & COMMA & item 1 of L  & COMMA & item 2 of L &CR after pInstances
      end if
   end repeat
   return the number of lines in pDays
end _icsFlattenRRULE

private function _icsSubList  lDay, dates, summary, dow, check_setpos, setposlist, list_dates
   local ttt
   repeat for each key dowi in lDay
      put dow[dowi] into ttt
      if 0 is among the items of ttt then
         repeat for each line tdate in lDay[dowi]
            put tdate &CR after dates
         end repeat
      else
         repeat for each item td in ttt
            put line td of lDay[dowi] &CR after dates
         end repeat
      end if
   end repeat
   put dates after list_dates
   return list_dates
   
end _icsSubList

private function _icsMakeList pA, pB, PDelta
   local tRes
   put empty into tRes
   if pB < pA or pDelta <= 0 then
      return pA &CR
   end if
   repeat while pA <= pB 
      put pA &CR after tRes
      add pDelta to pA
   end repeat
   return tRes
end _icsMakeList

private function _icsOverlapDays pK, pStart, pEnd, pEventStart, pEventEnd
   -- all dates passed as YYYYMMDD
   local tDate, tEnd, tRes
   put max(pStart, pEventStart) into tDate
   put min(pEnd, pEventEnd) into tEnd
   repeat while tDate <= tEnd
      put pK & COMMA & tDate &CR after tRes
      put icsAddDays(tDate, 1) into tDate
   end repeat
   return tRes
end _icsOverlapDays

function __icsInit__
   put empty into sExceptions
   
   put icsVersionMajor & "." & icsVersionMinor into sInitialized -- i.e. never 0
   
   -- load the RFC Property types
   put "CALSCALE:TEXT" &CR& \
         "METHOD:TEXT" &CR& \
         "PRODID:TEXT" &CR& \
         "VERSION:TEXT" &CR& \
         "ATTACH:URI" &CR& \
         "CATEGORIES:TEXT" &CR& \
         "CLASS:TEXT" &CR& \
         "COMMENT:TEXT" &CR& \
         "DESCRIPTION:TEXT" &CR& \
         "GEO:FLOAT" &CR& \
         "LOCATION:TEXT" &CR& \
         "PERCENT-COMPLETE:INTEGER" &CR& \
         "PRIORITY:INTEGER" &CR& \
         "RESOURCES:TEXT"&CR& \
         "STATUS:TEXT"&CR& \
         "SUMMARY:TEXT"&CR& \
         "COMPLETED:DATE-TIME"&CR& \
         "DTEND:DATE-TIME"&CR& \
         "DUE:DATE-TIME"&CR& \
         "DTSTART:DATE-TIME"&CR& \
         "DURATION:DURATION"&CR& \
         "FREEBUSY:PERIOD"&CR& \
         "TRANSP:TEXT"&CR& \
         "TZID:TEXT"&CR& \
         "TZNAME:TEXT"&CR& \
         "TZOFFSETFROM:UTC-OFFSET"&CR& \
         "TZOFFSETTO:TZOFFSETTO"&CR& \
         "TZURL:URI"&CR& \
         "ATTENDEE:CAL-ADDRESS" &CR& \
         "CONTACT:TEXT"&CR& \
         "ORGANIZER:CAL-ADDRESS"&CR& \
         "RECURRENCE-ID:DATE-TIME"&CR& \
         "RELATED-TO:TEXT"&CR& \
         "URL:URI"&CR& \
         "UID:TEXT"&CR& \
         "EXDATE:DATE-TIME-LIST"&CR& \
         "EXRULE:RECUR"&CR& \
         "RDATE:DATE-TIME-LIST"&CR& \
         "RRULE:RECUR"&CR& \
         "ACTION:TEXT"&CR& \
         "REPEAT:INTEGER"&CR& \
         "TRIGGER:DURATION"&CR& \
         "CREATED:DATE-TIME"&CR& \
         "DTSTAMP:DATE-TIME"&CR& \
         "LAST-MODIFIED:DATE-TIME"&CR& \
         "SEQUENCE:INTEGER"&CR& \
         "REQUEST-STATUS:TEXT"&CR& \
         "BEGIN:TEXT"&CR& \
         "END:TEXT"&CR into sARFC5545PropertyTypes
   split sARFC5545PropertyTypes by CR and ":"
   
   put "0," into sKAAllDaysAllowed["MO"]
   put "0," into sKAAllDaysAllowed["TU"]
   put "0," into sKAAllDaysAllowed["WE"]
   put "0," into sKAAllDaysAllowed["TH"]
   put "0," into sKAAllDaysAllowed["FR"]
   put "0," into sKAAllDaysAllowed["SA"]
   put "0," into sKAAllDaysAllowed["SU"]
   
   -- put arrayDecode(the uICSTZArray of me) into sATimeZoneInfo
   -- this is the info from file vtimesonzes.ics, built into a calendar Array,
   --    then arrayencoded() and then base64Encoded()
   -- here we reverse that process to give us basic timezone info to use as a basis for 
   -- interpreting other ICS files.
   local temp
   put \
         "BQAAAAEFAABQOnRpbWVfem9uZXMAAAAABgUAAAx5RXVyb3BlL0xvbmRvbgAAAAAEBQAAAaNT" & CR & \
         "VEFOREFSRAAAAAABBQAAAZAxAAAAAAoFAAAAWnJlY3VyX3J1bGUAAAAAAQUAAABFMQAAAAAD" & CR & \
         "AgAAABJCWU1PTlRIAAAAAAIxMAIAAAASQllEQVkAAAAABC0xU1UCAAAAE0ZSRVEAAAAABllF" & CR & \
         "QVJMWQAAAgAAABpUWk9GRlNFVEZST00AAAAABSswMTAwAwAAAB5kYXlzX2RlbHRhX3RvX2Vu" & CR & \
         "ZAAAAAAAAAAAAAIAAAAhRFRTVEFSVAAAAAAROjE5OTYxMDI3VDAyMDAwMAoCAAAAElRaTkFN" & CR & \
         "RQAAAAADR01UAgAAABhUWk9GRlNFVFRPAAAAAAUrMDAwMAIAAAAtc3RhcnRfZGF0ZV90aW1l" & CR & \
         "AAAAABUxOTk2LDEwLDI3LDAyLDAwLDAwLDAFAAAAPVJSVUxFAAAAAAECAAAALTEAAAAAIzpG" & CR & \
         "UkVRPVlFQVJMWTtCWU1PTlRIPTEwO0JZREFZPS0xU1UKAAIAAAAbc3RhcnRfZGF0ZQAAAAAI" & CR & \
         "MTk5NjEwMjcCAAAAGWVuZF9kYXRlAAAAAAgxOTk2MTAyNwAAAgAAABpUWklEAAAAAA1FdXJv" & CR & \
         "cGUvTG9uZG9uAgAACPpkYXlsaWdodF9zYXZpbmdfZGF0ZXMAAAAI3CwxOTgxMDMyOS4wMTAx" & CR & \
         "LERBWUxJR0hULCswMDAwLCswMTAwCiwxOTgyMDMyOC4wMTAxLERBWUxJR0hULCswMDAwLCsw" & CR & \
         "MTAwCiwxOTgzMDMyNy4wMTAxLERBWUxJR0hULCswMDAwLCswMTAwCiwxOTg0MDMyNS4wMTAx" & CR & \
         "LERBWUxJR0hULCswMDAwLCswMTAwCiwxOTg1MDMzMS4wMTAxLERBWUxJR0hULCswMDAwLCsw" & CR & \
         "MTAwCiwxOTg2MDMzMC4wMTAxLERBWUxJR0hULCswMDAwLCswMTAwCiwxOTg3MDMyOS4wMTAx" & CR & \
         "LERBWUxJR0hULCswMDAwLCswMTAwCiwxOTg4MDMyNy4wMTAxLERBWUxJR0hULCswMDAwLCsw" & CR & \
         "MTAwCiwxOTg5MDMyNi4wMTAxLERBWUxJR0hULCswMDAwLCswMTAwCiwxOTkwMDMyNS4wMTAx" & CR & \
         "LERBWUxJR0hULCswMDAwLCswMTAwCiwxOTkxMDMzMS4wMTAxLERBWUxJR0hULCswMDAwLCsw" & CR & \
         "MTAwCiwxOTkyMDMyOS4wMTAxLERBWUxJR0hULCswMDAwLCswMTAwCiwxOTkzMDMyOC4wMTAx" & CR & \
         "LERBWUxJR0hULCswMDAwLCswMTAwCiwxOTk0MDMyNy4wMTAxLERBWUxJR0hULCswMDAwLCsw" & CR & \
         "MTAwCiwxOTk1MDMyNi4wMTAxLERBWUxJR0hULCswMDAwLCswMTAwCiwxOTk2MDMzMS4wMTAx" & CR & \
         "LERBWUxJR0hULCswMDAwLCswMTAwCiwxOTk2MTAyNy4wMjAyLFNUQU5EQVJELCswMTAwLCsw" & CR & \
         "MDAwCiwxOTk3MDMzMC4wMTAxLERBWUxJR0hULCswMDAwLCswMTAwCiwxOTk3MTAyNi4wMjAy" & CR & \
         "LFNUQU5EQVJELCswMTAwLCswMDAwCiwxOTk4MDMyOS4wMTAxLERBWUxJR0hULCswMDAwLCsw" & CR & \
         "MTAwCiwxOTk4MTAyNS4wMjAyLFNUQU5EQVJELCswMTAwLCswMDAwCiwxOTk5MDMyOC4wMTAx" & CR & \
         "LERBWUxJR0hULCswMDAwLCswMTAwCiwxOTk5MTAzMS4wMjAyLFNUQU5EQVJELCswMTAwLCsw" & CR & \
         "MDAwCiwyMDAwMDMyNi4wMTAxLERBWUxJR0hULCswMDAwLCswMTAwCiwyMDAwMTAyOS4wMjAy" & CR & \
         "LFNUQU5EQVJELCswMTAwLCswMDAwCiwyMDAxMDMyNS4wMTAxLERBWUxJR0hULCswMDAwLCsw" & CR & \
         "MTAwCiwyMDAxMTAyOC4wMjAyLFNUQU5EQVJELCswMTAwLCswMDAwCiwyMDAyMDMzMS4wMTAx" & CR & \
         "LERBWUxJR0hULCswMDAwLCswMTAwCiwyMDAyMTAyNy4wMjAyLFNUQU5EQVJELCswMTAwLCsw" & CR & \
         "MDAwCiwyMDAzMDMzMC4wMTAxLERBWUxJR0hULCswMDAwLCswMTAwCiwyMDAzMTAyNi4wMjAy" & CR & \
         "LFNUQU5EQVJELCswMTAwLCswMDAwCiwyMDA0MDMyOC4wMTAxLERBWUxJR0hULCswMDAwLCsw" & CR & \
         "MTAwCiwyMDA0MTAzMS4wMjAyLFNUQU5EQVJELCswMTAwLCswMDAwCiwyMDA1MDMyNy4wMTAx" & CR & \
         "LERBWUxJR0hULCswMDAwLCswMTAwCiwyMDA1MTAzMC4wMjAyLFNUQU5EQVJELCswMTAwLCsw" & CR & \
         "MDAwCiwyMDA2MDMyNi4wMTAxLERBWUxJR0hULCswMDAwLCswMTAwCiwyMDA2MTAyOS4wMjAy" & CR & \
         "LFNUQU5EQVJELCswMTAwLCswMDAwCiwyMDA3MDMyNS4wMTAxLERBWUxJR0hULCswMDAwLCsw" & CR & \
         "MTAwCiwyMDA3MTAyOC4wMjAyLFNUQU5EQVJELCswMTAwLCswMDAwCiwyMDA4MDMzMC4wMTAx" & CR & \
         "LERBWUxJR0hULCswMDAwLCswMTAwCiwyMDA4MTAyNi4wMjAyLFNUQU5EQVJELCswMTAwLCsw" & CR & \
         "MDAwCiwyMDA5MDMyOS4wMTAxLERBWUxJR0hULCswMDAwLCswMTAwCiwyMDA5MTAyNS4wMjAy" & CR & \
         "LFNUQU5EQVJELCswMTAwLCswMDAwCiwyMDEwMDMyOC4wMTAxLERBWUxJR0hULCswMDAwLCsw" & CR & \
         "MTAwCiwyMDEwMTAzMS4wMjAyLFNUQU5EQVJELCswMTAwLCswMDAwCiwyMDExMDMyNy4wMTAx" & CR & \
         "LERBWUxJR0hULCswMDAwLCswMTAwCiwyMDExMTAzMC4wMjAyLFNUQU5EQVJELCswMTAwLCsw" & CR & \
         "MDAwCiwyMDEyMDMyNS4wMTAxLERBWUxJR0hULCswMDAwLCswMTAwCiwyMDEyMTAyOC4wMjAy" & CR & \
         "LFNUQU5EQVJELCswMTAwLCswMDAwCiwyMDEzMDMzMS4wMTAxLERBWUxJR0hULCswMDAwLCsw" & CR & \
         "MTAwCiwyMDEzMTAyNy4wMjAyLFNUQU5EQVJELCswMTAwLCswMDAwCiwyMDE0MDMzMC4wMTAx" & CR & \
         "LERBWUxJR0hULCswMDAwLCswMTAwCiwyMDE0MTAyNi4wMjAyLFNUQU5EQVJELCswMTAwLCsw" & CR & \
         "MDAwCiwyMDE1MDMyOS4wMTAxLERBWUxJR0hULCswMDAwLCswMTAwCiwyMDE1MTAyNS4wMjAy" & CR & \
         "LFNUQU5EQVJELCswMTAwLCswMDAwCiwyMDE2MDMyNy4wMTAxLERBWUxJR0hULCswMDAwLCsw" & CR & \
         "MTAwCiwyMDE2MTAzMC4wMjAyLFNUQU5EQVJELCswMTAwLCswMDAwCiwyMDE3MDMyNi4wMTAx" & CR & \
         "LERBWUxJR0hULCswMDAwLCswMTAwCiwyMDE3MTAyOS4wMjAyLFNUQU5EQVJELCswMTAwLCsw" & CR & \
         "MDAwCiwyMDE4MDMyNS4wMTAxLERBWUxJR0hULCswMDAwLCswMTAwCiwyMDE4MTAyOC4wMjAy" & CR & \
         "LFNUQU5EQVJELCswMTAwLCswMDAwCiwyMDE5MDMzMS4wMTAxLERBWUxJR0hULCswMDAwLCsw" & CR & \
         "MTAwCiwyMDE5MTAyNy4wMjAyLFNUQU5EQVJELCswMTAwLCswMDAwCgUAAAGnREFZTElHSFQA" & CR & \
         "AAAAAQUAAAGUMQAAAAAKBQAAAFlyZWN1cl9ydWxlAAAAAAEFAAAARDEAAAAAAwIAAAARQllN" & CR & \
         "T05USAAAAAABMwIAAAASQllEQVkAAAAABC0xU1UCAAAAE0ZSRVEAAAAABllFQVJMWQAAAgAA" & CR & \
         "ABpUWk9GRlNFVEZST00AAAAABSswMDAwAwAAAB5kYXlzX2RlbHRhX3RvX2VuZAAAAAAAAAAA" & CR & \
         "AAIAAAAhRFRTVEFSVAAAAAAROjE5ODEwMzI5VDAxMDAwMAoCAAAAGFRaTkFNRQAAAAAJR01U" & CR & \
         "KzAxOjAwAgAAABhUWk9GRlNFVFRPAAAAAAUrMDEwMAIAAAAtc3RhcnRfZGF0ZV90aW1lAAAA" & CR & \
         "ABUxOTgxLDAzLDI5LDAxLDAwLDAwLDAFAAAAPFJSVUxFAAAAAAECAAAALDEAAAAAIjpGUkVR" & CR & \
         "PVlFQVJMWTtCWU1PTlRIPTM7QllEQVk9LTFTVQoAAgAAABtzdGFydF9kYXRlAAAAAAgxOTgx" & CR & \
         "MDMyOQIAAAAZZW5kX2RhdGUAAAAACDE5ODEwMzI5AAAABQAAAatBbWVyaWNhL1Bob2VuaXgA" & CR & \
         "AAAABAUAAAEKU1RBTkRBUkQAAAAAAQUAAAD3MQAAAAAIAgAAABhUWk9GRlNFVFRPAAAAAAUt" & CR & \
         "MDcwMAIAAAAtc3RhcnRfZGF0ZV90aW1lAAAAABUxOTcwLDAxLDAxLDAwLDAwLDAwLDACAAAA" & CR & \
         "GlRaT0ZGU0VURlJPTQAAAAAFLTA3MDADAAAAHmRheXNfZGVsdGFfdG9fZW5kAAAAAAAAAAAA" & CR & \
         "AgAAABtzdGFydF9kYXRlAAAAAAgxOTcwMDEwMQIAAAAZZW5kX2RhdGUAAAAACDE5NzAwMTAx" & CR & \
         "AgAAACFEVFNUQVJUAAAAABE6MTk3MDAxMDFUMDAwMDAwCgIAAAASVFpOQU1FAAAAAANNU1QA" & CR & \
         "AAIAAAAmWC1MSUMtTE9DQVRJT04AAAAAD0FtZXJpY2EvUGhvZW5peAIAAAAcVFpJRAAAAAAP" & CR & \
         "QW1lcmljYS9QaG9lbml4AgAAAEJkYXlsaWdodF9zYXZpbmdfZGF0ZXMAAAAAJCwxOTcwMDEw" & CR & \
         "MS4wMDAwLFNUQU5EQVJELC0wNzAwLC0wNzAwCgAFAAAR2kFtZXJpY2EvTG9zX0FuZ2VsZXMA" & CR & \
         "AAAABQUAAAGhU1RBTkRBUkQAAAAAAQUAAAGOMQAAAAAKBQAAAFlyZWN1cl9ydWxlAAAAAAEF" & CR & \
         "AAAARDEAAAAAAwIAAAASQllNT05USAAAAAACMTECAAAAEUJZREFZAAAAAAMxU1UCAAAAE0ZS" & CR & \
         "RVEAAAAABllFQVJMWQAAAgAAABpUWk9GRlNFVEZST00AAAAABS0wNzAwAwAAAB5kYXlzX2Rl" & CR & \
         "bHRhX3RvX2VuZAAAAAAAAAAAAAIAAAAhRFRTVEFSVAAAAAAROjE5NzAxMTAxVDAyMDAwMAoC" & CR & \
         "AAAAElRaTkFNRQAAAAADUFNUAgAAABhUWk9GRlNFVFRPAAAAAAUtMDgwMAIAAAAtc3RhcnRf" & CR & \
         "ZGF0ZV90aW1lAAAAABUxOTcwLDExLDAxLDAyLDAwLDAwLDAFAAAAPFJSVUxFAAAAAAECAAAA" & CR & \
         "LDEAAAAAIjpGUkVRPVlFQVJMWTtCWU1PTlRIPTExO0JZREFZPTFTVQoAAgAAABtzdGFydF9k" & CR & \
         "YXRlAAAAAAgxOTcwMTEwMQIAAAAZZW5kX2RhdGUAAAAACDE5NzAxMTAxAAACAAAAKlgtTElD" & CR & \
         "LUxPQ0FUSU9OAAAAABNBbWVyaWNhL0xvc19BbmdlbGVzAgAAACBUWklEAAAAABNBbWVyaWNh" & CR & \
         "L0xvc19BbmdlbGVzAgAADi5kYXlsaWdodF9zYXZpbmdfZGF0ZXMAAAAOECwxOTcwMDMwOC4w" & CR & \
         "MjAyLERBWUxJR0hULC0wODAwLC0wNzAwCiwxOTcwMTEwMS4wMjAyLFNUQU5EQVJELC0wNzAw" & CR & \
         "LC0wODAwCiwxOTcxMDMxNC4wMjAyLERBWUxJR0hULC0wODAwLC0wNzAwCiwxOTcxMTEwNy4w" & CR & \
         "MjAyLFNUQU5EQVJELC0wNzAwLC0wODAwCiwxOTcyMDMxMi4wMjAyLERBWUxJR0hULC0wODAw" & CR & \
         "LC0wNzAwCiwxOTcyMTEwNS4wMjAyLFNUQU5EQVJELC0wNzAwLC0wODAwCiwxOTczMDMxMS4w" & CR & \
         "MjAyLERBWUxJR0hULC0wODAwLC0wNzAwCiwxOTczMTEwNC4wMjAyLFNUQU5EQVJELC0wNzAw" & CR & \
         "LC0wODAwCiwxOTc0MDMxMC4wMjAyLERBWUxJR0hULC0wODAwLC0wNzAwCiwxOTc0MTEwMy4w" & CR & \
         "MjAyLFNUQU5EQVJELC0wNzAwLC0wODAwCiwxOTc1MDMwOS4wMjAyLERBWUxJR0hULC0wODAw" & CR & \
         "LC0wNzAwCiwxOTc1MTEwMi4wMjAyLFNUQU5EQVJELC0wNzAwLC0wODAwCiwxOTc2MDMxNC4w" & CR & \
         "MjAyLERBWUxJR0hULC0wODAwLC0wNzAwCiwxOTc2MTEwNy4wMjAyLFNUQU5EQVJELC0wNzAw" & CR & \
         "LC0wODAwCiwxOTc3MDMxMy4wMjAyLERBWUxJR0hULC0wODAwLC0wNzAwCiwxOTc3MTEwNi4w" & CR & \
         "MjAyLFNUQU5EQVJELC0wNzAwLC0wODAwCiwxOTc4MDMxMi4wMjAyLERBWUxJR0hULC0wODAw" & CR & \
         "LC0wNzAwCiwxOTc4MTEwNS4wMjAyLFNUQU5EQVJELC0wNzAwLC0wODAwCiwxOTc5MDMxMS4w" & CR & \
         "MjAyLERBWUxJR0hULC0wODAwLC0wNzAwCiwxOTc5MTEwNC4wMjAyLFNUQU5EQVJELC0wNzAw" & CR & \
         "LC0wODAwCiwxOTgwMDMwOS4wMjAyLERBWUxJR0hULC0wODAwLC0wNzAwCiwxOTgwMTEwMi4w" & CR & \
         "MjAyLFNUQU5EQVJELC0wNzAwLC0wODAwCiwxOTgxMDMwOC4wMjAyLERBWUxJR0hULC0wODAw" & CR & \
         "LC0wNzAwCiwxOTgxMTEwMS4wMjAyLFNUQU5EQVJELC0wNzAwLC0wODAwCiwxOTgyMDMxNC4w" & CR & \
         "MjAyLERBWUxJR0hULC0wODAwLC0wNzAwCiwxOTgyMTEwNy4wMjAyLFNUQU5EQVJELC0wNzAw" & CR & \
         "LC0wODAwCiwxOTgzMDMxMy4wMjAyLERBWUxJR0hULC0wODAwLC0wNzAwCiwxOTgzMTEwNi4w" & CR & \
         "MjAyLFNUQU5EQVJELC0wNzAwLC0wODAwCiwxOTg0MDMxMS4wMjAyLERBWUxJR0hULC0wODAw" & CR & \
         "LC0wNzAwCiwxOTg0MTEwNC4wMjAyLFNUQU5EQVJELC0wNzAwLC0wODAwCiwxOTg1MDMxMC4w" & CR & \
         "MjAyLERBWUxJR0hULC0wODAwLC0wNzAwCiwxOTg1MTEwMy4wMjAyLFNUQU5EQVJELC0wNzAw" & CR & \
         "LC0wODAwCiwxOTg2MDMwOS4wMjAyLERBWUxJR0hULC0wODAwLC0wNzAwCiwxOTg2MTEwMi4w" & CR & \
         "MjAyLFNUQU5EQVJELC0wNzAwLC0wODAwCiwxOTg3MDMwOC4wMjAyLERBWUxJR0hULC0wODAw" & CR & \
         "LC0wNzAwCiwxOTg3MTEwMS4wMjAyLFNUQU5EQVJELC0wNzAwLC0wODAwCiwxOTg4MDMxMy4w" & CR & \
         "MjAyLERBWUxJR0hULC0wODAwLC0wNzAwCiwxOTg4MTEwNi4wMjAyLFNUQU5EQVJELC0wNzAw" & CR & \
         "LC0wODAwCiwxOTg5MDMxMi4wMjAyLERBWUxJR0hULC0wODAwLC0wNzAwCiwxOTg5MTEwNS4w" & CR & \
         "MjAyLFNUQU5EQVJELC0wNzAwLC0wODAwCiwxOTkwMDMxMS4wMjAyLERBWUxJR0hULC0wODAw" & CR & \
         "LC0wNzAwCiwxOTkwMTEwNC4wMjAyLFNUQU5EQVJELC0wNzAwLC0wODAwCiwxOTkxMDMxMC4w" & CR & \
         "MjAyLERBWUxJR0hULC0wODAwLC0wNzAwCiwxOTkxMTEwMy4wMjAyLFNUQU5EQVJELC0wNzAw" & CR & \
         "LC0wODAwCiwxOTkyMDMwOC4wMjAyLERBWUxJR0hULC0wODAwLC0wNzAwCiwxOTkyMTEwMS4w" & CR & \
         "MjAyLFNUQU5EQVJELC0wNzAwLC0wODAwCiwxOTkzMDMxNC4wMjAyLERBWUxJR0hULC0wODAw" & CR & \
         "LC0wNzAwCiwxOTkzMTEwNy4wMjAyLFNUQU5EQVJELC0wNzAwLC0wODAwCiwxOTk0MDMxMy4w" & CR & \
         "MjAyLERBWUxJR0hULC0wODAwLC0wNzAwCiwxOTk0MTEwNi4wMjAyLFNUQU5EQVJELC0wNzAw" & CR & \
         "LC0wODAwCiwxOTk1MDMxMi4wMjAyLERBWUxJR0hULC0wODAwLC0wNzAwCiwxOTk1MTEwNS4w" & CR & \
         "MjAyLFNUQU5EQVJELC0wNzAwLC0wODAwCiwxOTk2MDMxMC4wMjAyLERBWUxJR0hULC0wODAw" & CR & \
         "LC0wNzAwCiwxOTk2MTEwMy4wMjAyLFNUQU5EQVJELC0wNzAwLC0wODAwCiwxOTk3MDMwOS4w" & CR & \
         "MjAyLERBWUxJR0hULC0wODAwLC0wNzAwCiwxOTk3MTEwMi4wMjAyLFNUQU5EQVJELC0wNzAw" & CR & \
         "LC0wODAwCiwxOTk4MDMwOC4wMjAyLERBWUxJR0hULC0wODAwLC0wNzAwCiwxOTk4MTEwMS4w" & CR & \
         "MjAyLFNUQU5EQVJELC0wNzAwLC0wODAwCiwxOTk5MDMxNC4wMjAyLERBWUxJR0hULC0wODAw" & CR & \
         "LC0wNzAwCiwxOTk5MTEwNy4wMjAyLFNUQU5EQVJELC0wNzAwLC0wODAwCiwyMDAwMDMxMi4w" & CR & \
         "MjAyLERBWUxJR0hULC0wODAwLC0wNzAwCiwyMDAwMTEwNS4wMjAyLFNUQU5EQVJELC0wNzAw" & CR & \
         "LC0wODAwCiwyMDAxMDMxMS4wMjAyLERBWUxJR0hULC0wODAwLC0wNzAwCiwyMDAxMTEwNC4w" & CR & \
         "MjAyLFNUQU5EQVJELC0wNzAwLC0wODAwCiwyMDAyMDMxMC4wMjAyLERBWUxJR0hULC0wODAw" & CR & \
         "LC0wNzAwCiwyMDAyMTEwMy4wMjAyLFNUQU5EQVJELC0wNzAwLC0wODAwCiwyMDAzMDMwOS4w" & CR & \
         "MjAyLERBWUxJR0hULC0wODAwLC0wNzAwCiwyMDAzMTEwMi4wMjAyLFNUQU5EQVJELC0wNzAw" & CR & \
         "LC0wODAwCiwyMDA0MDMxNC4wMjAyLERBWUxJR0hULC0wODAwLC0wNzAwCiwyMDA0MTEwNy4w" & CR & \
         "MjAyLFNUQU5EQVJELC0wNzAwLC0wODAwCiwyMDA1MDMxMy4wMjAyLERBWUxJR0hULC0wODAw" & CR & \
         "LC0wNzAwCiwyMDA1MTEwNi4wMjAyLFNUQU5EQVJELC0wNzAwLC0wODAwCiwyMDA2MDMxMi4w" & CR & \
         "MjAyLERBWUxJR0hULC0wODAwLC0wNzAwCiwyMDA2MTEwNS4wMjAyLFNUQU5EQVJELC0wNzAw" & CR & \
         "LC0wODAwCiwyMDA3MDMxMS4wMjAyLERBWUxJR0hULC0wODAwLC0wNzAwCiwyMDA3MTEwNC4w" & CR & \
         "MjAyLFNUQU5EQVJELC0wNzAwLC0wODAwCiwyMDA4MDMwOS4wMjAyLERBWUxJR0hULC0wODAw" & CR & \
         "LC0wNzAwCiwyMDA4MTEwMi4wMjAyLFNUQU5EQVJELC0wNzAwLC0wODAwCiwyMDA5MDMwOC4w" & CR & \
         "MjAyLERBWUxJR0hULC0wODAwLC0wNzAwCiwyMDA5MTEwMS4wMjAyLFNUQU5EQVJELC0wNzAw" & CR & \
         "LC0wODAwCiwyMDEwMDMxNC4wMjAyLERBWUxJR0hULC0wODAwLC0wNzAwCiwyMDEwMTEwNy4w" & CR & \
         "MjAyLFNUQU5EQVJELC0wNzAwLC0wODAwCiwyMDExMDMxMy4wMjAyLERBWUxJR0hULC0wODAw" & CR & \
         "LC0wNzAwCiwyMDExMTEwNi4wMjAyLFNUQU5EQVJELC0wNzAwLC0wODAwCiwyMDEyMDMxMS4w" & CR & \
         "MjAyLERBWUxJR0hULC0wODAwLC0wNzAwCiwyMDEyMTEwNC4wMjAyLFNUQU5EQVJELC0wNzAw" & CR & \
         "LC0wODAwCiwyMDEzMDMxMC4wMjAyLERBWUxJR0hULC0wODAwLC0wNzAwCiwyMDEzMTEwMy4w" & CR & \
         "MjAyLFNUQU5EQVJELC0wNzAwLC0wODAwCiwyMDE0MDMwOS4wMjAyLERBWUxJR0hULC0wODAw" & CR & \
         "LC0wNzAwCiwyMDE0MTEwMi4wMjAyLFNUQU5EQVJELC0wNzAwLC0wODAwCiwyMDE1MDMwOC4w" & CR & \
         "MjAyLERBWUxJR0hULC0wODAwLC0wNzAwCiwyMDE1MTEwMS4wMjAyLFNUQU5EQVJELC0wNzAw" & CR & \
         "LC0wODAwCiwyMDE2MDMxMy4wMjAyLERBWUxJR0hULC0wODAwLC0wNzAwCiwyMDE2MTEwNi4w" & CR & \
         "MjAyLFNUQU5EQVJELC0wNzAwLC0wODAwCiwyMDE3MDMxMi4wMjAyLERBWUxJR0hULC0wODAw" & CR & \
         "LC0wNzAwCiwyMDE3MTEwNS4wMjAyLFNUQU5EQVJELC0wNzAwLC0wODAwCiwyMDE4MDMxMS4w" & CR & \
         "MjAyLERBWUxJR0hULC0wODAwLC0wNzAwCiwyMDE4MTEwNC4wMjAyLFNUQU5EQVJELC0wNzAw" & CR & \
         "LC0wODAwCiwyMDE5MDMxMC4wMjAyLERBWUxJR0hULC0wODAwLC0wNzAwCiwyMDE5MTEwMy4w" & CR & \
         "MjAyLFNUQU5EQVJELC0wNzAwLC0wODAwCgUAAAGfREFZTElHSFQAAAAAAQUAAAGMMQAAAAAK" & CR & \
         "BQAAAFhyZWN1cl9ydWxlAAAAAAEFAAAAQzEAAAAAAwIAAAARQllNT05USAAAAAABMwIAAAAR" & CR & \
         "QllEQVkAAAAAAzJTVQIAAAATRlJFUQAAAAAGWUVBUkxZAAACAAAAGlRaT0ZGU0VURlJPTQAA" & CR & \
         "AAAFLTA4MDADAAAAHmRheXNfZGVsdGFfdG9fZW5kAAAAAAAAAAAAAgAAACFEVFNUQVJUAAAA" & CR & \
         "ABE6MTk3MDAzMDhUMDIwMDAwCgIAAAASVFpOQU1FAAAAAANQRFQCAAAAGFRaT0ZGU0VUVE8A" & CR & \
         "AAAABS0wNzAwAgAAAC1zdGFydF9kYXRlX3RpbWUAAAAAFTE5NzAsMDMsMDgsMDIsMDAsMDAs" & CR & \
         "MAUAAAA7UlJVTEUAAAAAAQIAAAArMQAAAAAhOkZSRVE9WUVBUkxZO0JZTU9OVEg9MztCWURB" & CR & \
         "WT0yU1UKAAIAAAAbc3RhcnRfZGF0ZQAAAAAIMTk3MDAzMDgCAAAAGWVuZF9kYXRlAAAAAAgx" & CR & \
         "OTcwMDMwOAAAAAUAAAyDQXRsYW50aWMvQ2FuYXJ5AAAAAAQFAAABqVNUQU5EQVJEAAAAAAEF" & CR & \
         "AAABljEAAAAACgUAAABacmVjdXJfcnVsZQAAAAABBQAAAEUxAAAAAAMCAAAAEkJZTU9OVEgA" & CR & \
         "AAAAAjEwAgAAABJCWURBWQAAAAAELTFTVQIAAAATRlJFUQAAAAAGWUVBUkxZAAACAAAAGlRa" & CR & \
         "T0ZGU0VURlJPTQAAAAAFKzAxMDADAAAAHmRheXNfZGVsdGFfdG9fZW5kAAAAAAAAAAAAAgAA" & CR & \
         "ACFEVFNUQVJUAAAAABE6MTk5NjEwMjdUMDIwMDAwCgIAAAAYVFpOQU1FAAAAAAlHTVQrMDA6" & CR & \
         "MDACAAAAGFRaT0ZGU0VUVE8AAAAABSswMDAwAgAAAC1zdGFydF9kYXRlX3RpbWUAAAAAFTE5" & CR & \
         "OTYsMTAsMjcsMDIsMDAsMDAsMAUAAAA9UlJVTEUAAAAAAQIAAAAtMQAAAAAjOkZSRVE9WUVB" & CR & \
         "UkxZO0JZTU9OVEg9MTA7QllEQVk9LTFTVQoAAgAAABtzdGFydF9kYXRlAAAAAAgxOTk2MTAy" & CR & \
         "NwIAAAAZZW5kX2RhdGUAAAAACDE5OTYxMDI3AAACAAAAHFRaSUQAAAAAD0F0bGFudGljL0Nh" & CR & \
         "bmFyeQIAAAj6ZGF5bGlnaHRfc2F2aW5nX2RhdGVzAAAACNwsMTk4MTAzMjkuMDEwMSxEQVlM" & CR & \
         "SUdIVCwrMDAwMCwrMDEwMAosMTk4MjAzMjguMDEwMSxEQVlMSUdIVCwrMDAwMCwrMDEwMAos" & CR & \
         "MTk4MzAzMjcuMDEwMSxEQVlMSUdIVCwrMDAwMCwrMDEwMAosMTk4NDAzMjUuMDEwMSxEQVlM" & CR & \
         "SUdIVCwrMDAwMCwrMDEwMAosMTk4NTAzMzEuMDEwMSxEQVlMSUdIVCwrMDAwMCwrMDEwMAos" & CR & \
         "MTk4NjAzMzAuMDEwMSxEQVlMSUdIVCwrMDAwMCwrMDEwMAosMTk4NzAzMjkuMDEwMSxEQVlM" & CR & \
         "SUdIVCwrMDAwMCwrMDEwMAosMTk4ODAzMjcuMDEwMSxEQVlMSUdIVCwrMDAwMCwrMDEwMAos" & CR & \
         "MTk4OTAzMjYuMDEwMSxEQVlMSUdIVCwrMDAwMCwrMDEwMAosMTk5MDAzMjUuMDEwMSxEQVlM" & CR & \
         "SUdIVCwrMDAwMCwrMDEwMAosMTk5MTAzMzEuMDEwMSxEQVlMSUdIVCwrMDAwMCwrMDEwMAos" & CR & \
         "MTk5MjAzMjkuMDEwMSxEQVlMSUdIVCwrMDAwMCwrMDEwMAosMTk5MzAzMjguMDEwMSxEQVlM" & CR & \
         "SUdIVCwrMDAwMCwrMDEwMAosMTk5NDAzMjcuMDEwMSxEQVlMSUdIVCwrMDAwMCwrMDEwMAos" & CR & \
         "MTk5NTAzMjYuMDEwMSxEQVlMSUdIVCwrMDAwMCwrMDEwMAosMTk5NjAzMzEuMDEwMSxEQVlM" & CR & \
         "SUdIVCwrMDAwMCwrMDEwMAosMTk5NjEwMjcuMDIwMixTVEFOREFSRCwrMDEwMCwrMDAwMAos" & CR & \
         "MTk5NzAzMzAuMDEwMSxEQVlMSUdIVCwrMDAwMCwrMDEwMAosMTk5NzEwMjYuMDIwMixTVEFO" & CR & \
         "REFSRCwrMDEwMCwrMDAwMAosMTk5ODAzMjkuMDEwMSxEQVlMSUdIVCwrMDAwMCwrMDEwMAos" & CR & \
         "MTk5ODEwMjUuMDIwMixTVEFOREFSRCwrMDEwMCwrMDAwMAosMTk5OTAzMjguMDEwMSxEQVlM" & CR & \
         "SUdIVCwrMDAwMCwrMDEwMAosMTk5OTEwMzEuMDIwMixTVEFOREFSRCwrMDEwMCwrMDAwMAos" & CR & \
         "MjAwMDAzMjYuMDEwMSxEQVlMSUdIVCwrMDAwMCwrMDEwMAosMjAwMDEwMjkuMDIwMixTVEFO" & CR & \
         "REFSRCwrMDEwMCwrMDAwMAosMjAwMTAzMjUuMDEwMSxEQVlMSUdIVCwrMDAwMCwrMDEwMAos" & CR & \
         "MjAwMTEwMjguMDIwMixTVEFOREFSRCwrMDEwMCwrMDAwMAosMjAwMjAzMzEuMDEwMSxEQVlM" & CR & \
         "SUdIVCwrMDAwMCwrMDEwMAosMjAwMjEwMjcuMDIwMixTVEFOREFSRCwrMDEwMCwrMDAwMAos" & CR & \
         "MjAwMzAzMzAuMDEwMSxEQVlMSUdIVCwrMDAwMCwrMDEwMAosMjAwMzEwMjYuMDIwMixTVEFO" & CR & \
         "REFSRCwrMDEwMCwrMDAwMAosMjAwNDAzMjguMDEwMSxEQVlMSUdIVCwrMDAwMCwrMDEwMAos" & CR & \
         "MjAwNDEwMzEuMDIwMixTVEFOREFSRCwrMDEwMCwrMDAwMAosMjAwNTAzMjcuMDEwMSxEQVlM" & CR & \
         "SUdIVCwrMDAwMCwrMDEwMAosMjAwNTEwMzAuMDIwMixTVEFOREFSRCwrMDEwMCwrMDAwMAos" & CR & \
         "MjAwNjAzMjYuMDEwMSxEQVlMSUdIVCwrMDAwMCwrMDEwMAosMjAwNjEwMjkuMDIwMixTVEFO" & CR & \
         "REFSRCwrMDEwMCwrMDAwMAosMjAwNzAzMjUuMDEwMSxEQVlMSUdIVCwrMDAwMCwrMDEwMAos" & CR & \
         "MjAwNzEwMjguMDIwMixTVEFOREFSRCwrMDEwMCwrMDAwMAosMjAwODAzMzAuMDEwMSxEQVlM" & CR & \
         "SUdIVCwrMDAwMCwrMDEwMAosMjAwODEwMjYuMDIwMixTVEFOREFSRCwrMDEwMCwrMDAwMAos" & CR & \
         "MjAwOTAzMjkuMDEwMSxEQVlMSUdIVCwrMDAwMCwrMDEwMAosMjAwOTEwMjUuMDIwMixTVEFO" & CR & \
         "REFSRCwrMDEwMCwrMDAwMAosMjAxMDAzMjguMDEwMSxEQVlMSUdIVCwrMDAwMCwrMDEwMAos" & CR & \
         "MjAxMDEwMzEuMDIwMixTVEFOREFSRCwrMDEwMCwrMDAwMAosMjAxMTAzMjcuMDEwMSxEQVlM" & CR & \
         "SUdIVCwrMDAwMCwrMDEwMAosMjAxMTEwMzAuMDIwMixTVEFOREFSRCwrMDEwMCwrMDAwMAos" & CR & \
         "MjAxMjAzMjUuMDEwMSxEQVlMSUdIVCwrMDAwMCwrMDEwMAosMjAxMjEwMjguMDIwMixTVEFO" & CR & \
         "REFSRCwrMDEwMCwrMDAwMAosMjAxMzAzMzEuMDEwMSxEQVlMSUdIVCwrMDAwMCwrMDEwMAos" & CR & \
         "MjAxMzEwMjcuMDIwMixTVEFOREFSRCwrMDEwMCwrMDAwMAosMjAxNDAzMzAuMDEwMSxEQVlM" & CR & \
         "SUdIVCwrMDAwMCwrMDEwMAosMjAxNDEwMjYuMDIwMixTVEFOREFSRCwrMDEwMCwrMDAwMAos" & CR & \
         "MjAxNTAzMjkuMDEwMSxEQVlMSUdIVCwrMDAwMCwrMDEwMAosMjAxNTEwMjUuMDIwMixTVEFO" & CR & \
         "REFSRCwrMDEwMCwrMDAwMAosMjAxNjAzMjcuMDEwMSxEQVlMSUdIVCwrMDAwMCwrMDEwMAos" & CR & \
         "MjAxNjEwMzAuMDIwMixTVEFOREFSRCwrMDEwMCwrMDAwMAosMjAxNzAzMjYuMDEwMSxEQVlM" & CR & \
         "SUdIVCwrMDAwMCwrMDEwMAosMjAxNzEwMjkuMDIwMixTVEFOREFSRCwrMDEwMCwrMDAwMAos" & CR & \
         "MjAxODAzMjUuMDEwMSxEQVlMSUdIVCwrMDAwMCwrMDEwMAosMjAxODEwMjguMDIwMixTVEFO" & CR & \
         "REFSRCwrMDEwMCwrMDAwMAosMjAxOTAzMzEuMDEwMSxEQVlMSUdIVCwrMDAwMCwrMDEwMAos" & CR & \
         "MjAxOTEwMjcuMDIwMixTVEFOREFSRCwrMDEwMCwrMDAwMAoFAAABp0RBWUxJR0hUAAAAAAEF" & CR & \
         "AAABlDEAAAAACgUAAABZcmVjdXJfcnVsZQAAAAABBQAAAEQxAAAAAAMCAAAAEUJZTU9OVEgA" & CR & \
         "AAAAATMCAAAAEkJZREFZAAAAAAQtMVNVAgAAABNGUkVRAAAAAAZZRUFSTFkAAAIAAAAaVFpP" & CR & \
         "RkZTRVRGUk9NAAAAAAUrMDAwMAMAAAAeZGF5c19kZWx0YV90b19lbmQAAAAAAAAAAAACAAAA" & CR & \
         "IURUU1RBUlQAAAAAEToxOTgxMDMyOVQwMTAwMDAKAgAAABhUWk5BTUUAAAAACUdNVCswMTow" & CR & \
         "MAIAAAAYVFpPRkZTRVRUTwAAAAAFKzAxMDACAAAALXN0YXJ0X2RhdGVfdGltZQAAAAAVMTk4" & CR & \
         "MSwwMywyOSwwMSwwMCwwMCwwBQAAADxSUlVMRQAAAAABAgAAACwxAAAAACI6RlJFUT1ZRUFS" & CR & \
         "TFk7QllNT05USD0zO0JZREFZPS0xU1UKAAIAAAAbc3RhcnRfZGF0ZQAAAAAIMTk4MTAzMjkC" & CR & \
         "AAAAGWVuZF9kYXRlAAAAAAgxOTgxMDMyOQAAAAUAABHRQW1lcmljYS9OZXdfWW9yawAAAAAF" & CR & \
         "BQAAAaFTVEFOREFSRAAAAAABBQAAAY4xAAAAAAoFAAAAWXJlY3VyX3J1bGUAAAAAAQUAAABE" & CR & \
         "MQAAAAADAgAAABJCWU1PTlRIAAAAAAIxMQIAAAARQllEQVkAAAAAAzFTVQIAAAATRlJFUQAA" & CR & \
         "AAAGWUVBUkxZAAACAAAAGlRaT0ZGU0VURlJPTQAAAAAFLTA0MDADAAAAHmRheXNfZGVsdGFf" & CR & \
         "dG9fZW5kAAAAAAAAAAAAAgAAACFEVFNUQVJUAAAAABE6MTk3MDExMDFUMDIwMDAwCgIAAAAS" & CR & \
         "VFpOQU1FAAAAAANFU1QCAAAAGFRaT0ZGU0VUVE8AAAAABS0wNTAwAgAAAC1zdGFydF9kYXRl" & CR & \
         "X3RpbWUAAAAAFTE5NzAsMTEsMDEsMDIsMDAsMDAsMAUAAAA8UlJVTEUAAAAAAQIAAAAsMQAA" & CR & \
         "AAAiOkZSRVE9WUVBUkxZO0JZTU9OVEg9MTE7QllEQVk9MVNVCgACAAAAG3N0YXJ0X2RhdGUA" & CR & \
         "AAAACDE5NzAxMTAxAgAAABllbmRfZGF0ZQAAAAAIMTk3MDExMDEAAAIAAAAnWC1MSUMtTE9D" & CR & \
         "QVRJT04AAAAAEEFtZXJpY2EvTmV3X1lvcmsCAAAAHVRaSUQAAAAAEEFtZXJpY2EvTmV3X1lv" & CR & \
         "cmsCAAAOLmRheWxpZ2h0X3NhdmluZ19kYXRlcwAAAA4QLDE5NzAwMzA4LjAyMDIsREFZTElH" & CR & \
         "SFQsLTA1MDAsLTA0MDAKLDE5NzAxMTAxLjAyMDIsU1RBTkRBUkQsLTA0MDAsLTA1MDAKLDE5" & CR & \
         "NzEwMzE0LjAyMDIsREFZTElHSFQsLTA1MDAsLTA0MDAKLDE5NzExMTA3LjAyMDIsU1RBTkRB" & CR & \
         "UkQsLTA0MDAsLTA1MDAKLDE5NzIwMzEyLjAyMDIsREFZTElHSFQsLTA1MDAsLTA0MDAKLDE5" & CR & \
         "NzIxMTA1LjAyMDIsU1RBTkRBUkQsLTA0MDAsLTA1MDAKLDE5NzMwMzExLjAyMDIsREFZTElH" & CR & \
         "SFQsLTA1MDAsLTA0MDAKLDE5NzMxMTA0LjAyMDIsU1RBTkRBUkQsLTA0MDAsLTA1MDAKLDE5" & CR & \
         "NzQwMzEwLjAyMDIsREFZTElHSFQsLTA1MDAsLTA0MDAKLDE5NzQxMTAzLjAyMDIsU1RBTkRB" & CR & \
         "UkQsLTA0MDAsLTA1MDAKLDE5NzUwMzA5LjAyMDIsREFZTElHSFQsLTA1MDAsLTA0MDAKLDE5" & CR & \
         "NzUxMTAyLjAyMDIsU1RBTkRBUkQsLTA0MDAsLTA1MDAKLDE5NzYwMzE0LjAyMDIsREFZTElH" & CR & \
         "SFQsLTA1MDAsLTA0MDAKLDE5NzYxMTA3LjAyMDIsU1RBTkRBUkQsLTA0MDAsLTA1MDAKLDE5" & CR & \
         "NzcwMzEzLjAyMDIsREFZTElHSFQsLTA1MDAsLTA0MDAKLDE5NzcxMTA2LjAyMDIsU1RBTkRB" & CR & \
         "UkQsLTA0MDAsLTA1MDAKLDE5NzgwMzEyLjAyMDIsREFZTElHSFQsLTA1MDAsLTA0MDAKLDE5" & CR & \
         "NzgxMTA1LjAyMDIsU1RBTkRBUkQsLTA0MDAsLTA1MDAKLDE5NzkwMzExLjAyMDIsREFZTElH" & CR & \
         "SFQsLTA1MDAsLTA0MDAKLDE5NzkxMTA0LjAyMDIsU1RBTkRBUkQsLTA0MDAsLTA1MDAKLDE5" & CR & \
         "ODAwMzA5LjAyMDIsREFZTElHSFQsLTA1MDAsLTA0MDAKLDE5ODAxMTAyLjAyMDIsU1RBTkRB" & CR & \
         "UkQsLTA0MDAsLTA1MDAKLDE5ODEwMzA4LjAyMDIsREFZTElHSFQsLTA1MDAsLTA0MDAKLDE5" & CR & \
         "ODExMTAxLjAyMDIsU1RBTkRBUkQsLTA0MDAsLTA1MDAKLDE5ODIwMzE0LjAyMDIsREFZTElH" & CR & \
         "SFQsLTA1MDAsLTA0MDAKLDE5ODIxMTA3LjAyMDIsU1RBTkRBUkQsLTA0MDAsLTA1MDAKLDE5" & CR & \
         "ODMwMzEzLjAyMDIsREFZTElHSFQsLTA1MDAsLTA0MDAKLDE5ODMxMTA2LjAyMDIsU1RBTkRB" & CR & \
         "UkQsLTA0MDAsLTA1MDAKLDE5ODQwMzExLjAyMDIsREFZTElHSFQsLTA1MDAsLTA0MDAKLDE5" & CR & \
         "ODQxMTA0LjAyMDIsU1RBTkRBUkQsLTA0MDAsLTA1MDAKLDE5ODUwMzEwLjAyMDIsREFZTElH" & CR & \
         "SFQsLTA1MDAsLTA0MDAKLDE5ODUxMTAzLjAyMDIsU1RBTkRBUkQsLTA0MDAsLTA1MDAKLDE5" & CR & \
         "ODYwMzA5LjAyMDIsREFZTElHSFQsLTA1MDAsLTA0MDAKLDE5ODYxMTAyLjAyMDIsU1RBTkRB" & CR & \
         "UkQsLTA0MDAsLTA1MDAKLDE5ODcwMzA4LjAyMDIsREFZTElHSFQsLTA1MDAsLTA0MDAKLDE5" & CR & \
         "ODcxMTAxLjAyMDIsU1RBTkRBUkQsLTA0MDAsLTA1MDAKLDE5ODgwMzEzLjAyMDIsREFZTElH" & CR & \
         "SFQsLTA1MDAsLTA0MDAKLDE5ODgxMTA2LjAyMDIsU1RBTkRBUkQsLTA0MDAsLTA1MDAKLDE5" & CR & \
         "ODkwMzEyLjAyMDIsREFZTElHSFQsLTA1MDAsLTA0MDAKLDE5ODkxMTA1LjAyMDIsU1RBTkRB" & CR & \
         "UkQsLTA0MDAsLTA1MDAKLDE5OTAwMzExLjAyMDIsREFZTElHSFQsLTA1MDAsLTA0MDAKLDE5" & CR & \
         "OTAxMTA0LjAyMDIsU1RBTkRBUkQsLTA0MDAsLTA1MDAKLDE5OTEwMzEwLjAyMDIsREFZTElH" & CR & \
         "SFQsLTA1MDAsLTA0MDAKLDE5OTExMTAzLjAyMDIsU1RBTkRBUkQsLTA0MDAsLTA1MDAKLDE5" & CR & \
         "OTIwMzA4LjAyMDIsREFZTElHSFQsLTA1MDAsLTA0MDAKLDE5OTIxMTAxLjAyMDIsU1RBTkRB" & CR & \
         "UkQsLTA0MDAsLTA1MDAKLDE5OTMwMzE0LjAyMDIsREFZTElHSFQsLTA1MDAsLTA0MDAKLDE5" & CR & \
         "OTMxMTA3LjAyMDIsU1RBTkRBUkQsLTA0MDAsLTA1MDAKLDE5OTQwMzEzLjAyMDIsREFZTElH" & CR & \
         "SFQsLTA1MDAsLTA0MDAKLDE5OTQxMTA2LjAyMDIsU1RBTkRBUkQsLTA0MDAsLTA1MDAKLDE5" & CR & \
         "OTUwMzEyLjAyMDIsREFZTElHSFQsLTA1MDAsLTA0MDAKLDE5OTUxMTA1LjAyMDIsU1RBTkRB" & CR & \
         "UkQsLTA0MDAsLTA1MDAKLDE5OTYwMzEwLjAyMDIsREFZTElHSFQsLTA1MDAsLTA0MDAKLDE5" & CR & \
         "OTYxMTAzLjAyMDIsU1RBTkRBUkQsLTA0MDAsLTA1MDAKLDE5OTcwMzA5LjAyMDIsREFZTElH" & CR & \
         "SFQsLTA1MDAsLTA0MDAKLDE5OTcxMTAyLjAyMDIsU1RBTkRBUkQsLTA0MDAsLTA1MDAKLDE5" & CR & \
         "OTgwMzA4LjAyMDIsREFZTElHSFQsLTA1MDAsLTA0MDAKLDE5OTgxMTAxLjAyMDIsU1RBTkRB" & CR & \
         "UkQsLTA0MDAsLTA1MDAKLDE5OTkwMzE0LjAyMDIsREFZTElHSFQsLTA1MDAsLTA0MDAKLDE5" & CR & \
         "OTkxMTA3LjAyMDIsU1RBTkRBUkQsLTA0MDAsLTA1MDAKLDIwMDAwMzEyLjAyMDIsREFZTElH" & CR & \
         "SFQsLTA1MDAsLTA0MDAKLDIwMDAxMTA1LjAyMDIsU1RBTkRBUkQsLTA0MDAsLTA1MDAKLDIw" & CR & \
         "MDEwMzExLjAyMDIsREFZTElHSFQsLTA1MDAsLTA0MDAKLDIwMDExMTA0LjAyMDIsU1RBTkRB" & CR & \
         "UkQsLTA0MDAsLTA1MDAKLDIwMDIwMzEwLjAyMDIsREFZTElHSFQsLTA1MDAsLTA0MDAKLDIw" & CR & \
         "MDIxMTAzLjAyMDIsU1RBTkRBUkQsLTA0MDAsLTA1MDAKLDIwMDMwMzA5LjAyMDIsREFZTElH" & CR & \
         "SFQsLTA1MDAsLTA0MDAKLDIwMDMxMTAyLjAyMDIsU1RBTkRBUkQsLTA0MDAsLTA1MDAKLDIw" & CR & \
         "MDQwMzE0LjAyMDIsREFZTElHSFQsLTA1MDAsLTA0MDAKLDIwMDQxMTA3LjAyMDIsU1RBTkRB" & CR & \
         "UkQsLTA0MDAsLTA1MDAKLDIwMDUwMzEzLjAyMDIsREFZTElHSFQsLTA1MDAsLTA0MDAKLDIw" & CR & \
         "MDUxMTA2LjAyMDIsU1RBTkRBUkQsLTA0MDAsLTA1MDAKLDIwMDYwMzEyLjAyMDIsREFZTElH" & CR & \
         "SFQsLTA1MDAsLTA0MDAKLDIwMDYxMTA1LjAyMDIsU1RBTkRBUkQsLTA0MDAsLTA1MDAKLDIw" & CR & \
         "MDcwMzExLjAyMDIsREFZTElHSFQsLTA1MDAsLTA0MDAKLDIwMDcxMTA0LjAyMDIsU1RBTkRB" & CR & \
         "UkQsLTA0MDAsLTA1MDAKLDIwMDgwMzA5LjAyMDIsREFZTElHSFQsLTA1MDAsLTA0MDAKLDIw" & CR & \
         "MDgxMTAyLjAyMDIsU1RBTkRBUkQsLTA0MDAsLTA1MDAKLDIwMDkwMzA4LjAyMDIsREFZTElH" & CR & \
         "SFQsLTA1MDAsLTA0MDAKLDIwMDkxMTAxLjAyMDIsU1RBTkRBUkQsLTA0MDAsLTA1MDAKLDIw" & CR & \
         "MTAwMzE0LjAyMDIsREFZTElHSFQsLTA1MDAsLTA0MDAKLDIwMTAxMTA3LjAyMDIsU1RBTkRB" & CR & \
         "UkQsLTA0MDAsLTA1MDAKLDIwMTEwMzEzLjAyMDIsREFZTElHSFQsLTA1MDAsLTA0MDAKLDIw" & CR & \
         "MTExMTA2LjAyMDIsU1RBTkRBUkQsLTA0MDAsLTA1MDAKLDIwMTIwMzExLjAyMDIsREFZTElH" & CR & \
         "SFQsLTA1MDAsLTA0MDAKLDIwMTIxMTA0LjAyMDIsU1RBTkRBUkQsLTA0MDAsLTA1MDAKLDIw" & CR & \
         "MTMwMzEwLjAyMDIsREFZTElHSFQsLTA1MDAsLTA0MDAKLDIwMTMxMTAzLjAyMDIsU1RBTkRB" & CR & \
         "UkQsLTA0MDAsLTA1MDAKLDIwMTQwMzA5LjAyMDIsREFZTElHSFQsLTA1MDAsLTA0MDAKLDIw" & CR & \
         "MTQxMTAyLjAyMDIsU1RBTkRBUkQsLTA0MDAsLTA1MDAKLDIwMTUwMzA4LjAyMDIsREFZTElH" & CR & \
         "SFQsLTA1MDAsLTA0MDAKLDIwMTUxMTAxLjAyMDIsU1RBTkRBUkQsLTA0MDAsLTA1MDAKLDIw" & CR & \
         "MTYwMzEzLjAyMDIsREFZTElHSFQsLTA1MDAsLTA0MDAKLDIwMTYxMTA2LjAyMDIsU1RBTkRB" & CR & \
         "UkQsLTA0MDAsLTA1MDAKLDIwMTcwMzEyLjAyMDIsREFZTElHSFQsLTA1MDAsLTA0MDAKLDIw" & CR & \
         "MTcxMTA1LjAyMDIsU1RBTkRBUkQsLTA0MDAsLTA1MDAKLDIwMTgwMzExLjAyMDIsREFZTElH" & CR & \
         "SFQsLTA1MDAsLTA0MDAKLDIwMTgxMTA0LjAyMDIsU1RBTkRBUkQsLTA0MDAsLTA1MDAKLDIw" & CR & \
         "MTkwMzEwLjAyMDIsREFZTElHSFQsLTA1MDAsLTA0MDAKLDIwMTkxMTAzLjAyMDIsU1RBTkRB" & CR & \
         "UkQsLTA0MDAsLTA1MDAKBQAAAZ9EQVlMSUdIVAAAAAABBQAAAYwxAAAAAAoFAAAAWHJlY3Vy" & CR & \
         "X3J1bGUAAAAAAQUAAABDMQAAAAADAgAAABFCWU1PTlRIAAAAAAEzAgAAABFCWURBWQAAAAAD" & CR & \
         "MlNVAgAAABNGUkVRAAAAAAZZRUFSTFkAAAIAAAAaVFpPRkZTRVRGUk9NAAAAAAUtMDUwMAMA" & CR & \
         "AAAeZGF5c19kZWx0YV90b19lbmQAAAAAAAAAAAACAAAAIURUU1RBUlQAAAAAEToxOTcwMDMw" & CR & \
         "OFQwMjAwMDAKAgAAABJUWk5BTUUAAAAAA0VEVAIAAAAYVFpPRkZTRVRUTwAAAAAFLTA0MDAC" & CR & \
         "AAAALXN0YXJ0X2RhdGVfdGltZQAAAAAVMTk3MCwwMywwOCwwMiwwMCwwMCwwBQAAADtSUlVM" & CR & \
         "RQAAAAABAgAAACsxAAAAACE6RlJFUT1ZRUFSTFk7QllNT05USD0zO0JZREFZPTJTVQoAAgAA" & CR & \
         "ABtzdGFydF9kYXRlAAAAAAgxOTcwMDMwOAIAAAAZZW5kX2RhdGUAAAAACDE5NzAwMzA4AAAA" & CR & \
         "BQAAEc5BbWVyaWNhL0NoaWNhZ28AAAAABQUAAAGhU1RBTkRBUkQAAAAAAQUAAAGOMQAAAAAK" & CR & \
         "BQAAAFlyZWN1cl9ydWxlAAAAAAEFAAAARDEAAAAAAwIAAAASQllNT05USAAAAAACMTECAAAA" & CR & \
         "EUJZREFZAAAAAAMxU1UCAAAAE0ZSRVEAAAAABllFQVJMWQAAAgAAABpUWk9GRlNFVEZST00A" & CR & \
         "AAAABS0wNTAwAwAAAB5kYXlzX2RlbHRhX3RvX2VuZAAAAAAAAAAAAAIAAAAhRFRTVEFSVAAA" & CR & \
         "AAAROjE5NzAxMTAxVDAyMDAwMAoCAAAAElRaTkFNRQAAAAADQ1NUAgAAABhUWk9GRlNFVFRP" & CR & \
         "AAAAAAUtMDYwMAIAAAAtc3RhcnRfZGF0ZV90aW1lAAAAABUxOTcwLDExLDAxLDAyLDAwLDAw" & CR & \
         "LDAFAAAAPFJSVUxFAAAAAAECAAAALDEAAAAAIjpGUkVRPVlFQVJMWTtCWU1PTlRIPTExO0JZ" & CR & \
         "REFZPTFTVQoAAgAAABtzdGFydF9kYXRlAAAAAAgxOTcwMTEwMQIAAAAZZW5kX2RhdGUAAAAA" & CR & \
         "CDE5NzAxMTAxAAACAAAAJlgtTElDLUxPQ0FUSU9OAAAAAA9BbWVyaWNhL0NoaWNhZ28CAAAA" & CR & \
         "HFRaSUQAAAAAD0FtZXJpY2EvQ2hpY2FnbwIAAA4uZGF5bGlnaHRfc2F2aW5nX2RhdGVzAAAA" & CR & \
         "DhAsMTk3MDAzMDguMDIwMixEQVlMSUdIVCwtMDYwMCwtMDUwMAosMTk3MDExMDEuMDIwMixT" & CR & \
         "VEFOREFSRCwtMDUwMCwtMDYwMAosMTk3MTAzMTQuMDIwMixEQVlMSUdIVCwtMDYwMCwtMDUw" & CR & \
         "MAosMTk3MTExMDcuMDIwMixTVEFOREFSRCwtMDUwMCwtMDYwMAosMTk3MjAzMTIuMDIwMixE" & CR & \
         "QVlMSUdIVCwtMDYwMCwtMDUwMAosMTk3MjExMDUuMDIwMixTVEFOREFSRCwtMDUwMCwtMDYw" & CR & \
         "MAosMTk3MzAzMTEuMDIwMixEQVlMSUdIVCwtMDYwMCwtMDUwMAosMTk3MzExMDQuMDIwMixT" & CR & \
         "VEFOREFSRCwtMDUwMCwtMDYwMAosMTk3NDAzMTAuMDIwMixEQVlMSUdIVCwtMDYwMCwtMDUw" & CR & \
         "MAosMTk3NDExMDMuMDIwMixTVEFOREFSRCwtMDUwMCwtMDYwMAosMTk3NTAzMDkuMDIwMixE" & CR & \
         "QVlMSUdIVCwtMDYwMCwtMDUwMAosMTk3NTExMDIuMDIwMixTVEFOREFSRCwtMDUwMCwtMDYw" & CR & \
         "MAosMTk3NjAzMTQuMDIwMixEQVlMSUdIVCwtMDYwMCwtMDUwMAosMTk3NjExMDcuMDIwMixT" & CR & \
         "VEFOREFSRCwtMDUwMCwtMDYwMAosMTk3NzAzMTMuMDIwMixEQVlMSUdIVCwtMDYwMCwtMDUw" & CR & \
         "MAosMTk3NzExMDYuMDIwMixTVEFOREFSRCwtMDUwMCwtMDYwMAosMTk3ODAzMTIuMDIwMixE" & CR & \
         "QVlMSUdIVCwtMDYwMCwtMDUwMAosMTk3ODExMDUuMDIwMixTVEFOREFSRCwtMDUwMCwtMDYw" & CR & \
         "MAosMTk3OTAzMTEuMDIwMixEQVlMSUdIVCwtMDYwMCwtMDUwMAosMTk3OTExMDQuMDIwMixT" & CR & \
         "VEFOREFSRCwtMDUwMCwtMDYwMAosMTk4MDAzMDkuMDIwMixEQVlMSUdIVCwtMDYwMCwtMDUw" & CR & \
         "MAosMTk4MDExMDIuMDIwMixTVEFOREFSRCwtMDUwMCwtMDYwMAosMTk4MTAzMDguMDIwMixE" & CR & \
         "QVlMSUdIVCwtMDYwMCwtMDUwMAosMTk4MTExMDEuMDIwMixTVEFOREFSRCwtMDUwMCwtMDYw" & CR & \
         "MAosMTk4MjAzMTQuMDIwMixEQVlMSUdIVCwtMDYwMCwtMDUwMAosMTk4MjExMDcuMDIwMixT" & CR & \
         "VEFOREFSRCwtMDUwMCwtMDYwMAosMTk4MzAzMTMuMDIwMixEQVlMSUdIVCwtMDYwMCwtMDUw" & CR & \
         "MAosMTk4MzExMDYuMDIwMixTVEFOREFSRCwtMDUwMCwtMDYwMAosMTk4NDAzMTEuMDIwMixE" & CR & \
         "QVlMSUdIVCwtMDYwMCwtMDUwMAosMTk4NDExMDQuMDIwMixTVEFOREFSRCwtMDUwMCwtMDYw" & CR & \
         "MAosMTk4NTAzMTAuMDIwMixEQVlMSUdIVCwtMDYwMCwtMDUwMAosMTk4NTExMDMuMDIwMixT" & CR & \
         "VEFOREFSRCwtMDUwMCwtMDYwMAosMTk4NjAzMDkuMDIwMixEQVlMSUdIVCwtMDYwMCwtMDUw" & CR & \
         "MAosMTk4NjExMDIuMDIwMixTVEFOREFSRCwtMDUwMCwtMDYwMAosMTk4NzAzMDguMDIwMixE" & CR & \
         "QVlMSUdIVCwtMDYwMCwtMDUwMAosMTk4NzExMDEuMDIwMixTVEFOREFSRCwtMDUwMCwtMDYw" & CR & \
         "MAosMTk4ODAzMTMuMDIwMixEQVlMSUdIVCwtMDYwMCwtMDUwMAosMTk4ODExMDYuMDIwMixT" & CR & \
         "VEFOREFSRCwtMDUwMCwtMDYwMAosMTk4OTAzMTIuMDIwMixEQVlMSUdIVCwtMDYwMCwtMDUw" & CR & \
         "MAosMTk4OTExMDUuMDIwMixTVEFOREFSRCwtMDUwMCwtMDYwMAosMTk5MDAzMTEuMDIwMixE" & CR & \
         "QVlMSUdIVCwtMDYwMCwtMDUwMAosMTk5MDExMDQuMDIwMixTVEFOREFSRCwtMDUwMCwtMDYw" & CR & \
         "MAosMTk5MTAzMTAuMDIwMixEQVlMSUdIVCwtMDYwMCwtMDUwMAosMTk5MTExMDMuMDIwMixT" & CR & \
         "VEFOREFSRCwtMDUwMCwtMDYwMAosMTk5MjAzMDguMDIwMixEQVlMSUdIVCwtMDYwMCwtMDUw" & CR & \
         "MAosMTk5MjExMDEuMDIwMixTVEFOREFSRCwtMDUwMCwtMDYwMAosMTk5MzAzMTQuMDIwMixE" & CR & \
         "QVlMSUdIVCwtMDYwMCwtMDUwMAosMTk5MzExMDcuMDIwMixTVEFOREFSRCwtMDUwMCwtMDYw" & CR & \
         "MAosMTk5NDAzMTMuMDIwMixEQVlMSUdIVCwtMDYwMCwtMDUwMAosMTk5NDExMDYuMDIwMixT" & CR & \
         "VEFOREFSRCwtMDUwMCwtMDYwMAosMTk5NTAzMTIuMDIwMixEQVlMSUdIVCwtMDYwMCwtMDUw" & CR & \
         "MAosMTk5NTExMDUuMDIwMixTVEFOREFSRCwtMDUwMCwtMDYwMAosMTk5NjAzMTAuMDIwMixE" & CR & \
         "QVlMSUdIVCwtMDYwMCwtMDUwMAosMTk5NjExMDMuMDIwMixTVEFOREFSRCwtMDUwMCwtMDYw" & CR & \
         "MAosMTk5NzAzMDkuMDIwMixEQVlMSUdIVCwtMDYwMCwtMDUwMAosMTk5NzExMDIuMDIwMixT" & CR & \
         "VEFOREFSRCwtMDUwMCwtMDYwMAosMTk5ODAzMDguMDIwMixEQVlMSUdIVCwtMDYwMCwtMDUw" & CR & \
         "MAosMTk5ODExMDEuMDIwMixTVEFOREFSRCwtMDUwMCwtMDYwMAosMTk5OTAzMTQuMDIwMixE" & CR & \
         "QVlMSUdIVCwtMDYwMCwtMDUwMAosMTk5OTExMDcuMDIwMixTVEFOREFSRCwtMDUwMCwtMDYw" & CR & \
         "MAosMjAwMDAzMTIuMDIwMixEQVlMSUdIVCwtMDYwMCwtMDUwMAosMjAwMDExMDUuMDIwMixT" & CR & \
         "VEFOREFSRCwtMDUwMCwtMDYwMAosMjAwMTAzMTEuMDIwMixEQVlMSUdIVCwtMDYwMCwtMDUw" & CR & \
         "MAosMjAwMTExMDQuMDIwMixTVEFOREFSRCwtMDUwMCwtMDYwMAosMjAwMjAzMTAuMDIwMixE" & CR & \
         "QVlMSUdIVCwtMDYwMCwtMDUwMAosMjAwMjExMDMuMDIwMixTVEFOREFSRCwtMDUwMCwtMDYw" & CR & \
         "MAosMjAwMzAzMDkuMDIwMixEQVlMSUdIVCwtMDYwMCwtMDUwMAosMjAwMzExMDIuMDIwMixT" & CR & \
         "VEFOREFSRCwtMDUwMCwtMDYwMAosMjAwNDAzMTQuMDIwMixEQVlMSUdIVCwtMDYwMCwtMDUw" & CR & \
         "MAosMjAwNDExMDcuMDIwMixTVEFOREFSRCwtMDUwMCwtMDYwMAosMjAwNTAzMTMuMDIwMixE" & CR & \
         "QVlMSUdIVCwtMDYwMCwtMDUwMAosMjAwNTExMDYuMDIwMixTVEFOREFSRCwtMDUwMCwtMDYw" & CR & \
         "MAosMjAwNjAzMTIuMDIwMixEQVlMSUdIVCwtMDYwMCwtMDUwMAosMjAwNjExMDUuMDIwMixT" & CR & \
         "VEFOREFSRCwtMDUwMCwtMDYwMAosMjAwNzAzMTEuMDIwMixEQVlMSUdIVCwtMDYwMCwtMDUw" & CR & \
         "MAosMjAwNzExMDQuMDIwMixTVEFOREFSRCwtMDUwMCwtMDYwMAosMjAwODAzMDkuMDIwMixE" & CR & \
         "QVlMSUdIVCwtMDYwMCwtMDUwMAosMjAwODExMDIuMDIwMixTVEFOREFSRCwtMDUwMCwtMDYw" & CR & \
         "MAosMjAwOTAzMDguMDIwMixEQVlMSUdIVCwtMDYwMCwtMDUwMAosMjAwOTExMDEuMDIwMixT" & CR & \
         "VEFOREFSRCwtMDUwMCwtMDYwMAosMjAxMDAzMTQuMDIwMixEQVlMSUdIVCwtMDYwMCwtMDUw" & CR & \
         "MAosMjAxMDExMDcuMDIwMixTVEFOREFSRCwtMDUwMCwtMDYwMAosMjAxMTAzMTMuMDIwMixE" & CR & \
         "QVlMSUdIVCwtMDYwMCwtMDUwMAosMjAxMTExMDYuMDIwMixTVEFOREFSRCwtMDUwMCwtMDYw" & CR & \
         "MAosMjAxMjAzMTEuMDIwMixEQVlMSUdIVCwtMDYwMCwtMDUwMAosMjAxMjExMDQuMDIwMixT" & CR & \
         "VEFOREFSRCwtMDUwMCwtMDYwMAosMjAxMzAzMTAuMDIwMixEQVlMSUdIVCwtMDYwMCwtMDUw" & CR & \
         "MAosMjAxMzExMDMuMDIwMixTVEFOREFSRCwtMDUwMCwtMDYwMAosMjAxNDAzMDkuMDIwMixE" & CR & \
         "QVlMSUdIVCwtMDYwMCwtMDUwMAosMjAxNDExMDIuMDIwMixTVEFOREFSRCwtMDUwMCwtMDYw" & CR & \
         "MAosMjAxNTAzMDguMDIwMixEQVlMSUdIVCwtMDYwMCwtMDUwMAosMjAxNTExMDEuMDIwMixT" & CR & \
         "VEFOREFSRCwtMDUwMCwtMDYwMAosMjAxNjAzMTMuMDIwMixEQVlMSUdIVCwtMDYwMCwtMDUw" & CR & \
         "MAosMjAxNjExMDYuMDIwMixTVEFOREFSRCwtMDUwMCwtMDYwMAosMjAxNzAzMTIuMDIwMixE" & CR & \
         "QVlMSUdIVCwtMDYwMCwtMDUwMAosMjAxNzExMDUuMDIwMixTVEFOREFSRCwtMDUwMCwtMDYw" & CR & \
         "MAosMjAxODAzMTEuMDIwMixEQVlMSUdIVCwtMDYwMCwtMDUwMAosMjAxODExMDQuMDIwMixT" & CR & \
         "VEFOREFSRCwtMDUwMCwtMDYwMAosMjAxOTAzMTAuMDIwMixEQVlMSUdIVCwtMDYwMCwtMDUw" & CR & \
         "MAosMjAxOTExMDMuMDIwMixTVEFOREFSRCwtMDUwMCwtMDYwMAoFAAABn0RBWUxJR0hUAAAA" & CR & \
         "AAEFAAABjDEAAAAACgUAAABYcmVjdXJfcnVsZQAAAAABBQAAAEMxAAAAAAMCAAAAEUJZTU9O" & CR & \
         "VEgAAAAAATMCAAAAEUJZREFZAAAAAAMyU1UCAAAAE0ZSRVEAAAAABllFQVJMWQAAAgAAABpU" & CR & \
         "Wk9GRlNFVEZST00AAAAABS0wNjAwAwAAAB5kYXlzX2RlbHRhX3RvX2VuZAAAAAAAAAAAAAIA" & CR & \
         "AAAhRFRTVEFSVAAAAAAROjE5NzAwMzA4VDAyMDAwMAoCAAAAElRaTkFNRQAAAAADQ0RUAgAA" & CR & \
         "ABhUWk9GRlNFVFRPAAAAAAUtMDUwMAIAAAAtc3RhcnRfZGF0ZV90aW1lAAAAABUxOTcwLDAz" & CR & \
         "LDA4LDAyLDAwLDAwLDAFAAAAO1JSVUxFAAAAAAECAAAAKzEAAAAAITpGUkVRPVlFQVJMWTtC" & CR & \
         "WU1PTlRIPTM7QllEQVk9MlNVCgACAAAAG3N0YXJ0X2RhdGUAAAAACDE5NzAwMzA4AgAAABll" & CR & \
         "bmRfZGF0ZQAAAAAIMTk3MDAzMDgAAAAAAA==" & CR into temp
   local temp1
   put base64decode(temp) into temp1
   put arraydecode(temp1) into sATimeZoneInfo

   return sInitialized
end __icsInit__

