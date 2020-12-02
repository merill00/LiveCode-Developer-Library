script "levureGenerateDocs"
# To generate API docs open this stack in the LiveCode IDE and run the following script:
# dispatch "generateDocs" to stack "levuregeneratedocs"
command generateDocs
  local tRootFolder, tDocFolder

  set the itemdelimiter to "/"
  put the effective filename of this stack into tRootFolder
  put item 1 to -2 of tRootFolder into tDocFolder
  put "levure" into item -2 to -1 of tRootFolder
  if there is not a folder tRootFolder then
    answer error "Could not find the `levure` repository:" && tRootFolder
    exit to top
  end if

  generateLevureAPIDocs tRootFolder, tDocFolder

  generateHelpersDocs tRootFolder, tDocFolder

  beep
end generateDocs


command generateLevureAPIDocs pRootFolder, pDocFolder
  local tFilename, tScript
  local tHandlerLinks, tContent

  put pRootFolder & "/framework/levure.livecodescript" into tFilename
  put textDecode(url ("binfile:" & tFilename), "utf8") into tScript

  _extractDocs tFilename, tScript, tContent, tHandlerLinks

  put textEncode(tHandlerLinks & cr & cr & "<br>" & cr & cr & tContent, "utf8") into URL("binfile:" & pDocFolder & "/Levure-API.md")
end generateLevureAPIDocs


private command generateHelpersDocs pRootFolder, pDocFolder
  local tHelperDocsFolder, tHelperDocFile
  local tHelperFolder, tHelpersFolder, tHelpers, tHelper
  local tFilename, tAPIDocs, tAPIHandlerLinks
  local tHandlerLinks, tContent, tLineNo

  put pDocFolder & "/helpers" into tHelperDocsFolder
  put pRootFolder & "/framework/helpers" into tHelpersFolder

  put files(tHelperDocsFolder) into tHelpers

  repeat for each line tHelperDocFile in tHelpers
    put tHelperDocsFolder & "/" & tHelperDocFile into tFilename
    put tHelperDocFile into tHelper

    replace "Helper-" with empty in tHelper
    replace ".md" with empty in tHelper

    put tHelpersFolder & "/" & tHelper into tHelperFolder

    if there is a folder tHelperFolder then
      put textDecode(url("binfile:" & tFilename), "utf8") into tContent

      # Get helper API docs
      extractAPIDocsFromHelperFolder tHelperFolder, tAPIDocs, tAPIHandlerLinks

      if tAPIDocs is not empty then
        # Look for `# [API](#api)`. If found then insert API
        put lineOffset("## API", tContent) into tLineNo
        if tLineNo > 0 then
          delete line tLineNo to -1 of tContent
        end if

        put "## API" & cr & cr & tAPIHandlerLinks & cr & cr & "<br>" & cr & cr & tAPIDocs after tContent

        put textEncode(tContent, "utf8") into url("binfile:" & tFilename)
      end if

      put textEncode("#" && tHelper & cr & cr & tContent, "utf8") into url("binfile:" & tHelperFolder & "/README.md")
    end if
  end repeat


  -- put pRootFolder & "/framework/levure.livecodescript" into tFilename
  -- put textDecode(url ("binfile:" & tFilename), "utf8") into tScript

  -- _extractDocs tFilename, tScript, tContent, tHandlerLinks

  -- put textEncode(tHandlerLinks & cr & cr & "<br>" & cr & cr & tContent, "utf8") into URL("binfile:" & pDocFolder & "/Levure-API.md")
end generateHelpersDocs


private command extractAPIDocsFromHelperFolder pHelperFolder, @rMarkdown, @rHandlerLinks
  local tFiles, tFile, tFilename
  local tScript, tHandlerLinks, tContent

  put empty into rMarkdown
  put empty into rHandlerLinks

  put files(pHelperFolder) into tFiles
  filter tFiles with "*.livecodescript"
  repeat for each line tFile in tFiles
    put pHelperFolder & "/" & tFile into tFilename
    put textDecode(url ("binfile:" & tFilename), "utf8") into tScript

    _extractDocs tFilename, tScript, tContent, tHandlerLinks

    if tHandlerLinks is not empty then
      put tHandlerLinks & cr after rHandlerLinks
      put tContent & cr & cr after rMarkdown
    end if
  end repeat

  return empty
end extractAPIDocsFromHelperFolder


private command _extractDocs pFilename, pScript, @rMarkdown, @rHandlerLinks
  local tAPIData, tLibraryA
  local tElementsA, tEntriesA, tCounter

  dispatch "revDocsExtractDocBlocks" to stack "revDocsParser" with pScript, pFilename, tAPIData, tLibraryA

  local tHandlers, tHandler
  local i
  local tSummary, tReturns, tDescription, tExample, tParameters

  put the keys of tAPIData into tHandlers
  sort lines of tHandlers by each

  repeat for each line tHandler in tHandlers
    add 1 to tCounter

    if tCounter > 1 then put "<br>" & cr & cr after rMarkdown

    put empty into tSummary
    put empty into tReturns
    put empty into tDescription
    put empty into tExample
    put empty into tParameters

    dispatch function "revDocsExtractElements" to stack "revDocsParser" with tAPIData[tHandler]["comments"]
    put the result into tElementsA
    dispatch function "revDocsGroupElements" to stack "revDocsParser" with tElementsA
    put the result into tEntriesA

    if tCounter > 1 and tCounter mod 5 is 1 then
      put ">" & cr after rHandlerLinks
    end if
    put "- [" & tHandler & "](#" & tHandler & ")" & cr after rHandlerLinks

    put "##" && "<a name=" & quote & tHandler & quote & "></a>" & tHandler & cr & cr after rMarkdown
    put "**Type**:" && tAPIData[tHandler]["type"] & cr & cr after rMarkdown
    put "**Syntax**:" && "`" & tAPIData[tHandler]["syntax"][1] & "`" & cr & cr after rMarkdown

    repeat with i = 1 to the number of elements of tElementsA
      switch tElementsA[i]["name"]
      case "Summary"
        put "**" & tElementsA[i]["name"] & "**:" && tElementsA[i]["content"] into tSummary
        break

      case "Returns"
        put "**" & tElementsA[i]["name"] & "**:" && word 1 to -1 of tElementsA[i]["content"] into tReturns
        break

      case "it"
      case "the result"
        if tReturns is not empty then put "<br>" after tReturns
        put "**" & tElementsA[i]["name"] & "**:" && word 1 to -1 of tElementsA[i]["content"] after tReturns
        break

      case "Description"
        put "**" & tElementsA[i]["name"] & "**:" & cr & cr & tElementsA[i]["content"] into tDescription
        break

      case "Example"
        put "**" & tElementsA[i]["name"] & "**:" & cr & "```" & cr & tElementsA[i]["content"] & cr & "```" into tExample
        break

      default
        if tElementsA[i]["name"] is among the keys of tAPIData[tHandler]["params"] then
          put "| `" & tElementsA[i]["name"] & "` | " && tElementsA[i]["content"] && "|" & cr after tParameters
        end if
      end switch
    end repeat

    if tParameters is not empty then
      delete the last char of tParameters

      put "**Parameters**:" & cr & cr & \
            "| Name | Description |" & cr & \
            "|:---- |:----------- |" & cr before tParameters
    end if

    put tSummary & cr & cr after rMarkdown
    if tReturns is not empty then put tReturns & cr & cr after rMarkdown
    if tParameters is not empty then put tParameters & cr & cr after rMarkdown
    if tDescription is not empty then put tDescription & cr & cr after rMarkdown
    if tExample is not empty then put tExample & cr & cr after rMarkdown
  end repeat

  delete the last char of rHandlerLinks
  if the last char of rHandlerLinks is ">" then delete the last char of rHandlerLinks

  return empty
end _extractDocs


private function _esc pStr
  local tChar

  replace "<" with "&lt;" in pStr

  repeat for each char tChar in "\`*_{}[]()#+-.!"
    replace tChar with "\" & tChar in pStr
  end repeat

  return pStr
end _esc
