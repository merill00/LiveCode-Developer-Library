ICSLibrary

icsLib is a Livecode library for interpreting .ics files.
It is released under the MIT license.

Overview
-------

The library is intended to aid in reading ics (ical) files, created according to rfc5545.
The library includes a number of small utility functions, and two significant functions which provide all the main capabilities.

These allow you to import a ".ics" (aka ical) file, and build a calendar array of the data, and subsequently to "expand" a calendar 
to extract all events (and instances of events) which impact a specific "period of interest" in time. Note that since many calendars 
include open-ended recurring events, it is not possible to just "expand" a calendar - it MUST be for a limited time period.
