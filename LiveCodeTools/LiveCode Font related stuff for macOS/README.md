# LCMacFontStuff
LiveCode Font related stuff for macOS

FontTools.lcb

A LiveCode Builder library for Font related LCB handlers. 
Currently this has only one useful handler, GetFontURLs(), which returns a line-delimited URL list of the Fonts currently in use. The URLs include the file:// path URL as well as the Font's postscript name tacked on the the end of the path (seperated by the # character).



GetFontNames.livecode

Test LiveCode Stack showing a few examples of usage of FontTools.lcb. There's also some examples of using the built-in LiveCode Font functions.
