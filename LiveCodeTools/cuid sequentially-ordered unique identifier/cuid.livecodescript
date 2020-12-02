script "cuid"
constant BASE=36
constant BLOCK_SIZE=4
constant ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz"

local sDiscreteValues
local sFingerprint
local sCount

on libraryStack  
   _initCuid
end libraryStack

/*
initialize script local vars
*/
private command _initCuid
   # intialize counter
   put 0 into sCount
   
   # intialize descrete values
   put BASE ^ BLOCK_SIZE into sDiscreteValues
   
   # initialize fingerprint
   put _fingerprint() into sFingerprint
end _initCuid


/**
Generate a full-length cuid as a string

Example:
put cuid() into tCUID

Returns:
string
**/
function cuid
   local tLetter
   local tTimestamp
   local tRandom
   local tCount
   
   // ensure we've intialized
   if sFingerprint is empty then _initCuid
   
   put "c" into tLetter
   put _timestamp() into tTimeStamp
   put _counter() into tCount
   put _randomBlock() & _randomBlock() into tRandom
   
   return tLetter & tTimestamp & tCount & sFingerprint & tRandom
end cuid


/**
create a unique fingerprint from process id and hostname
**/

private function _fingerprint
   local tPID
   local tHostname
   local tHostnameHash
   local tPaddedPID
   local tPaddedHostname
   
   put processID() into tPID
   put hostName() into tHostname
   put _pad(_base10To36(tPid), 2) into tPaddedPID
   
   put 36 + length(tHostName) into tHostnameHash
   
   repeat for each char tChar in tHostName
      add nativeCharToNum(tChar) to tHostnameHash
   end repeat
   
   put _pad(_base10To36(tHostnameHash), 2) into tPaddedHostname
   
   return tPaddedPID & tPaddedHostname
end _fingerprint


/**
create timestamp cuid portion
**/
private function _timestamp
   return _pad(_base10to36(milliseconds()), 8)
end _timestamp


/**
generate a random block
**/
private function _randomBlock
   local tRandomNum
   
   put random(sDiscreteValues) into tRandomNum
   return _pad(_base10To36(tRandomNum), 4)
end _randomBlock


/**
return a padded substring with the given length

Example:
example

Parameters:
parameters

Returns:
string

**/
private function _pad tString, tLength
   return char -1*tLength to -1 of format("%08s", tString)
end _pad


/**
counter ensures same machine same time cuids don't collide
**/
private function _counter
   add 1 to sCount
   if sCount >= sDiscreteValues then
      put 0 into sCount
   end if
   
   return _pad(_base10To36(sCount), 4)
end _counter


/*
convert base 10 to base 36 number

parameters
pNum: integer: base 10 number to convert
*/
private function _base10To36 pNum
   
   if pNum is not an integer then throw "Error: pNum must be an integer in" && param(0)
   
   if pNum < (4294967295) then
      return toLower(baseConvert(pNum, 10, 36))
   end if
   
   # we have an integer bigger than baseConvert can handle so use
   # our "slow" but able to handle very large base 10 integers
   return _base36convert(pNum)
end _base10To36


/**
converts a given base 10 integer to base 36

Example:
put base36convert(123456) into tResult

Description:
Takes a base 10 integer and converts it to base 36. Function create to
solve limitations with Livecode baseConvert functions integer size.

Parameters:
pNum: integer: the base 10 number to convert

Returns:
integer: base 36 number
**/
private function _base36convert pNum
   
   if pNum is not an integer then throw "Error: pNum must be an integer in" && param(0)
   
   local tNum
   local tResult
   
   put pNum into tNum
   
   repeat forever
      put char ((tNum mod 36) + 1) of ALPHABET before tResult
      put tNum div 36 into tNum
      
      if tNum = 0 then exit repeat
   end repeat
   
   return tResult
end _base36convert


command test.cuid
   local tCuid
   
   put cuid() into tCuid
   
   put return & tCuid after message
   
   put return & "should start with a c" after message
   put return & (char 1 of tCuid = "c") after message
   
   put return & "should be 25 characters long" after message
   put return & (length(tCuid) = 25) after message
end test.cuid


command test.cuidLoad tCount
   local tStart, tFinish
   
   if tCount is empty or tCount is not an integer then put 10000 into tCount
   
   put milliseconds() into tStart
   repeat tCount times
      get cuid()
   end repeat
   put milliseconds() into tFinish
   
   put return & "cuid time:" && tFinish - tStart after message
   
   put milliseconds() into tStart
   repeat tCount times
      get uuid()
   end repeat
   put milliseconds() into tFinish
   
   put return & "uuid time:" && tFinish - tStart after message
end test.cuidLoad
