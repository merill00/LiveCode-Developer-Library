QUARTAM PDF LIBRARY - RELEASE NOTES
===================================


New and noteworthy in version 1.1.5
-----------------------------------

- feature: support was added for alpha channels in PNG images


New and noteworthy in version 1.1.4
-----------------------------------

- feature: the supported text alignments have been extended with 'leftJustify', 'centerJustify' and 'rightJustify' for textflows that are more pleasing to the eye; 'justify' is still interpreted as full-justify

- bugfix: the qrtPDF_WriteTextTable command used an arbitrary line height, without taking into account the current font size or the document unit; this was corrected

- bugfix: colors specified using short-hand 'web' syntax (e.g. #BCD) would be rejected and you had to use the full-length 'web' syntax (e.g. #BBCCDD); this was corrected


New and noteworthy in version 1.1.3
-----------------------------------

- feature: colors can now be specified using 'hex' syntax (e.g. 0xFFFFFF) which can make it easier to apply color definitions as found in C or Java code

- bugfix: colors specified using 'web' syntax (e.g. #FFFFFF) would be rejected if any of the bytes were in the [A-F] range
-> the private command p_qrtPDF_AssertColorTriplet only accepted bytes in the [0-9] range; this logic error was corrected

- bugfix: drawing two or more different images in a PDF document would result in only the second image being added to the file
-> the private commands p_qrtPDF_LoadPNG and p_qrtPDF_LoadJPG were prematurely deleting the last character of the internal image file list; this logic error was corrected


New and noteworthy in version 1.1.2
-----------------------------------

- bugfix: clipping is now restored correctly when using automatic page breaks
-> the private command p_qrtPDF_ApplyClippingSet called the wrong clipping routines for some types of clippings it tried to restore; this logic error was corrected


New and noteworthy in version 1.1.1
-----------------------------------

- feature: the qrtPDF_WriteTextTable command was extended so that developers can set its border to 'none', 'frame' or 'grid' (default: 'grid')
-> use 'none' to draw no borders around the cells, 'frame' to only draw a border around the table instead of individual cells, or 'grid' to draw borders around each cell
-> the implementation is backwards-compatible with the older API

- bugfix: callback methods now work in LiveCode Server / On-Rev
-> due to the absence of controls in a LiveCode Server environment, no messages could be sent to an object; the library now works around this limitation

- bugfix: JPG images now work in LiveCode Server / On-Rev
-> this was caused by a bug in the 'seek relative in file' command in LiveCode Server; the library now works around this limitation

- bugfix: PNG images now work correctly
-> this was caused by a bug in the p_qrtPDF_LoadPNG handler, which used the wrong variable to determine the color space; this logic error was corrected


New and noteworthy in version 1.1.0
-----------------------------------

- Quartam PDF Library 1.1.0 is now a free / open source software (FOSS) project, available under the terms of the GNU Affero General Public License.
-> for more information, please visit our website: <http://www.quartam.com>

- New features include:
-> Transformations (scale, translate, rotate, skew, mirror)
-> Transparency and blendmodes
-> Gradients
-> Clipping
-> Text box fitting
-> Inserting pages (ideal for building a table of contents with bookmarks)
-> Compression
-> Support for named colors and web colors
-> Experimental support for including EPS files (Emulated PostScript)
