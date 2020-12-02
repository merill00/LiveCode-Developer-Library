{
			"id":"mediafoundation-1",
			"name":"mediafoundation",
			"display name":"mediafoundation",
			"library":"mediafoundation",
			"type":"library",
			"display syntax":[
				"mediafoundation"
			],
			"associations":["mediafoundation"],
			"edition":"Indy",
			"description":"Commands and functions for using the Media Foundation API on Windows\nto transcode and edit video."
		},{
			"id":"mediafoundation-2",
			"name":"mediafoundationcreatereader",
			"display name":"mediaFoundationCreateReader",
			"library":"mediafoundation",
			"type":"command",
			"syntax":[
				"mediaFoundationCreateReader <pFilePath>"
			],
			"display syntax":[
				"mediaFoundationCreateReader <i>pFilePath</i>"
			],
			"associations":["mediafoundation"],
			"summary":"Create a media file reader\nPlatform:desktop",
			"edition":"Indy",
			"OS":["windows"],
			"parameters":[{
				"name":"pFilePath",
				"type":"string",
				"refparam":"false",
				"description":"The path to a media file"
			}],
			"description":"Creates a reader for the specified file path.\n\n>**Note**:See the <mediaFoundationTranscode> documentation for a complete\n> example of using this handler.",
			"references":{
				"command":["mediaFoundationTranscode"]
			}
		},{
			"id":"mediafoundation-3",
			"name":"mediafoundationdeletevideoprocessor",
			"display name":"mediaFoundationDeleteVideoProcessor",
			"library":"mediafoundation",
			"type":"command",
			"syntax":[
				"mediaFoundationDeleteVideoProcessor <pVideoProcessorID>"
			],
			"display syntax":[
				"mediaFoundationDeleteVideoProcessor <i>pVideoProcessorID</i>"
			],
			"associations":["mediafoundation"],
			"summary":"Delete a video processor\nPlatform:desktop",
			"edition":"Indy",
			"OS":["windows"],
			"parameters":[{
				"name":"pVideoProcessorID",
				"type":"integer",
				"refparam":"false",
				"description":"A video processor ID"
			}],
			"description":"The video processor must already be created with <mediaFoundationCreateVideoProcessor>.\n\n>**Note**:See the <mediaFoundationTranscode> documentation for a complete\n> example of using this handler.",
			"references":{
				"command":["mediaFoundationTranscode","mediaFoundationCreateVideoProcessor"]
			}
		},{
			"id":"mediafoundation-4",
			"name":"mediafoundationreadernumberofstreams",
			"display name":"mediaFoundationReaderNumberOfStreams",
			"library":"mediafoundation",
			"type":"function",
			"syntax":[
				"mediaFoundationReaderNumberOfStreams(<pFilePath>)"
			],
			"display syntax":[
				"mediaFoundationReaderNumberOfStreams(<i>pFilePath</i>)"
			],
			"associations":["mediafoundation"],
			"summary":"Get the number of streams in the media file\nPlatform:desktop",
			"edition":"Indy",
			"OS":["windows"],
			"parameters":[{
				"name":"pFilePath",
				"type":"string",
				"refparam":"false",
				"description":"The path to a media file"
			}],
			"description":"The reader must already be created with <mediaFoundationCreateReader>.\n\n>**Note**:See the <mediaFoundationTranscode> documentation for a complete\n> example of using this handler.",
			"references":{
				"command":["mediaFoundationTranscode","mediaFoundationCreateReader"]
			}
		},{
			"id":"mediafoundation-5",
			"name":"mediafoundationaddstreamtowriter",
			"display name":"mediaFoundationAddStreamToWriter",
			"library":"mediafoundation",
			"type":"command",
			"syntax":[
				"mediaFoundationAddStreamToWriter <pFilePath>, <pMediaTypeID>"
			],
			"display syntax":[
				"mediaFoundationAddStreamToWriter <i>pFilePath</i>, <i>pMediaTypeID</i>"
			],
			"associations":["mediafoundation"],
			"summary":"Add a stream to a writer\nPlatform:desktop",
			"edition":"Indy",
			"OS":["windows"],
			"parameters":[{
				"name":"pFilePath",
				"type":"string",
				"refparam":"false",
				"description":"The path to a media file"
			},{
				"name":"pMediaTypeID",
				"type":"integer",
				"refparam":"false",
				"description":"A media type ID"
			}],
			"value":[{
				"name":"the result",
				"type":"integer",
				"description":"The index of the newly create stream or 0 if an error occurred"
			}],
			"description":"The writer must already be created with <mediaFoundationCreateWriter>.\n\n>**Note**:See the <mediaFoundationTranscode> documentation for a complete\n> example of using this handler.",
			"references":{
				"command":["mediaFoundationTranscode","mediaFoundationCreateWriter"]
			}
		},{
			"id":"mediafoundation-6",
			"name":"mediafoundationtranscode",
			"display name":"mediaFoundationTranscode",
			"library":"mediafoundation",
			"type":"command",
			"syntax":[
				"mediaFoundationTranscode <pReaderFilePath>, <pWriterFilePath>, <pVideoProcessorID>, [<pOffset>], [<pFrom>], [<pDuration>]"
			],
			"display syntax":[
				"mediaFoundationTranscode <i>pReaderFilePath</i>, <i>pWriterFilePath</i>, <i>pVideoProcessorID</i>, [<i>pOffset</i>], [<i>pFrom</i>], [<i>pDuration</i>]"
			],
			"associations":["mediafoundation"],
			"summary":"Transcode part or all of the media from from a reader to a writer\nPlatform:desktop",
			"edition":"Indy",
			"OS":["windows"],
			"parameters":[{
				"name":"pReaderFilePath",
				"type":"string",
				"refparam":"false",
				"description":"The path to a media file"
			},{
				"name":"pWriterFilePath",
				"type":"string",
				"refparam":"false",
				"description":"The path to a media file"
			},{
				"name":"pVideoProcessorID",
				"type":"integer",
				"refparam":"false",
				"description":"The ide of a video processor"
			},{
				"name":"pOffset",
				"type":"string",
				"refparam":"false",
				"description":"An offset to write to a writer that already has content up to the offset. 100 nanosecond units"
			},{
				"name":"pFrom",
				"type":"string",
				"refparam":"false",
				"description":"Seek to this time before starting to transcode. 100 nanosecond units"
			},{
				"name":"pDuration",
				"type":"string",
				"refparam":"false",
				"description":"The duration to trancode where 0 means the entire file from pFrom. 100 nanosecond units\n\nThe result (c-string):\nAn error string if an error occurred"
			}],
			"examples":[{
				"script":"constant kMFVideoInterlace_Progressive = 2\nconstant kMFVideoInterlace_FieldInterleavedUpperFirst = 3\nconstant kMFVideoInterlace_FieldInterleavedLowerFirst = 4\nconstant kMFVideoInterlace_FieldSingleUpper = 5\nconstant kMFVideoInterlace_FieldSingleLower = 6\nconstant kMFVideoInterlace_MixedInterlaceOrProgressive = 7\n\ncommand Transcode pReaderFilePath, pWriterFilePath\n   mediaFoundationCreateReader pReaderFilePath\n   mediaFoundationCreateWriter pWriterFilePath\n\n   mediaFoundationCreateMediaType\n   local tVideoMediaType\n   put the result into tVideoMediaType\n\n   mediaFoundationMediaTypeSetAttribute tVideoMediaType, \"major type\", \"media type video\"\n   mediaFoundationMediaTypeSetAttribute tVideoMediaType, \"subtype\", \"video format H264\"\n   mediaFoundationMediaTypeSetAttribute tVideoMediaType, \"video frame size\", \"400,300\"\n   mediaFoundationMediaTypeSetAttribute tVideoMediaType, \"video frame rate\", \"20000,1000\"\n   mediaFoundationMediaTypeSetAttribute tVideoMediaType, \"video avg bitrate\", 100000\n   mediaFoundationMediaTypeSetAttribute tVideoMediaType, \"video interlace mode\", kMFVideoInterlace_Progressive\n   mediaFoundationMediaTypeSetAttribute tVideoMediaType, \"video aspect ratio\", \"1,1\"\n\n   mediaFoundationCreateMediaType\n   local tAudioMediaType\n   put the result into tAudioMediaType\n\n   mediaFoundationMediaTypeSetAttribute tAudioMediaType, \"major type\", \"media type audio\"\n   mediaFoundationMediaTypeSetAttribute tAudioMediaType, \"subtype\", \"audio format AAC\"\n   mediaFoundationMediaTypeSetAttribute tAudioMediaType, \"audio bits per sample\", 16\n   mediaFoundationMediaTypeSetAttribute tAudioMediaType, \"audio samples per second\", 44100\n   mediaFoundationMediaTypeSetAttribute tAudioMediaType, \"audio num channels\", 2\n   mediaFoundationMediaTypeSetAttribute tAudioMediaType, \"audio avg bytes per second\", 16000\n   mediaFoundationMediaTypeSetAttribute tAudioMediaType, \"audio block alignment\", 1\n\n   local tStreamCount\n   put mediaFoundationReaderNumberOfStreams(pReaderFilePath) into tStreamCount\n\n   local tVideoProcessor\n   mediaFoundationCreateVideoProcessor\n   put the result into tVideoProcessor\n\n   repeat with tIndex = 1 to tStreamCount\n      local tMajorType\n      local tNativeMediaType\n      put mediaFoundationReaderStreamGetNativeMediaType(pReaderFilePath, tIndex) into tNativeMediaType\n      put mediaFoundationMediaTypeGetAttribute(tNativeMediaType, \"major type\") into tMajorType\n\n      mediaFoundationCreateMediaType\n      local tPartialMediaType\n      put the result into tPartialMediaType\n\n      mediaFoundationMediaTypeSetAttribute tPartialMediaType, \"major type\", tMajorType\n\n      local tFoundMatch\n      switch tMajorType\n         case \"media type video\"\n            local tSize\n            put mediaFoundationMediaTypeGetAttribute(tNativeMediaType, \"video frame size\") into tSize\n            mediaFoundationVideoProcessorSetSourceRect tVideoProcessor, 0,0,400,300\n            mediaFoundationVideoProcessorSetDestinationRect tVideoProcessor, 0,0,item 1 of tSize, item 2 of tSize\n\n            mediaFoundationAddStreamToWriter pWriterFilePath, tVideoMediaType\n            mediaFoundationDeleteMediaType tVideoMediaType\n\n            put false into tFoundMatch\n\n            local tInputMediaTypeIndex\n            put 0 into tInputMediaTypeIndex\n\n            local tAvailableInputMediaType\n            local tCurrentMediaType\n            repeat\n               add 1 to tInputMediaTypeIndex\n               put mediaFoundationVideoProcessorGetInputAvailableMediaType(tVideoProcessor, tInputMediaTypeIndex) \\\n                     into tAvailableInputMediaType\n               if tAvailableInputMediaType is 0 then\n                  exit repeat\n               end if\n\n               local tResult\n               mediaFoundationReaderStreamSetCurrentMediaType pReaderFilePath, tIndex, tAvailableInputMediaType\n               put the result into tResult\n               if tResult then\n                  put mediaFoundationReaderStreamGetCurrentMediaType(pReaderFilePath, tIndex) into tCurrentMediaType\n                  mediaFoundationVideoProcessorSetInputMediaType tVideoProcessor, tCurrentMediaType\n                  put the result into tResult\n                  if not tResult then\n                     mediaFoundationDeleteMediaType tCurrentMediaType\n                     next repeat\n                  end if\n                  mediaFoundationMediaTypeSetAttribute tCurrentMediaType, \"video frame size\", \"400,300\"\n\n                  mediaFoundationVideoProcessorSetOutputMediaType tVideoProcessor, tCurrentMediaType\n                  put the result into tResult\n                  if not tResult then\n                     mediaFoundationDeleteMediaType tCurrentMediaType\n                     next repeat\n                  end if\n\n                  mediaFoundationWriterStreamSetInputMediaType pWriterFilePath, tIndex, tCurrentMediaType\n                  put the result into tResult\n                  if not tResult then\n                     mediaFoundationDeleteMediaType tCurrentMediaType\n                     next repeat\n                  end if\n\n                  mediaFoundationDeleteMediaType tCurrentMediaType\n                  put true into tFoundMatch\n\n               end if\n\n               mediaFoundationDeleteMediaType tAvailableInputMediaType\n               if tFoundMatch then\n                  exit repeat\n               end if\n            end repeat\n\n            if not tFoundMatch then\n               exit repeat\n            end if\n            break\n         case \"media type audio\"\n            mediaFoundationAddStreamToWriter pWriterFilePath, tAudioMediaType\n            mediaFoundationDeleteMediaType tAudioMediaType\n\n            put false into tFoundMatch\n            repeat for each item tIntermediateFormat in \\\n                  \"audio format Float,audio format PCM\"\n               mediaFoundationMediaTypeSetAttribute tPartialMediaType, \"subtype\", tIntermediateFormat\n               mediaFoundationReaderStreamSetCurrentMediaType pReaderFilePath, tIndex, tPartialMediaType\n               if the result then\n                  put mediaFoundationReaderStreamGetCurrentMediaType(pReaderFilePath, tIndex) into tCurrentMediaType\n                  mediaFoundationWriterStreamSetInputMediaType pWriterFilePath, tIndex, tCurrentMediaType\n                  put the result into tResult\n                  mediaFoundationDeleteMediaType tCurrentMediaType\n                  if tResult then\n                     put true into tFoundMatch\n                     exit repeat\n                  end if\n               end if\n            end repeat\n            if not tFoundMatch then\n               exit repeat\n            end if\n            break\n         default\n\n      end switch\n\n      mediaFoundationDeleteMediaType tPartialMediaType\n      mediaFoundationDeleteMediaType tNativeMediaType\n   end repeat\n\n   if tFoundMatch then\n      mediaFoundationWriterBeginWriting pWriterFilePath\n      mediaFoundationTranscode pReaderFilePath, pWriterFilePath, tVideoProcessor, 0,0,0\n      mediaFoundationWriterFinalizeWriting pWriterFilePath\n   end if\n\n   mediaFoundationDeleteReader pReaderFilePath\n   mediaFoundationDeleteWriter pWriterFilePath\n   mediaFoundationDeleteVideoProcessor tVideoProcessor\nend Transcode\n\non mediaFoundationTranscoding pTimestamp\n   put pTimestamp\nend mediaFoundationTranscoding"
			},{
				"script":"constant kMFVideoInterlace_Progressive = 2\nconstant kMFVideoInterlace_FieldInterleavedUpperFirst = 3\nconstant kMFVideoInterlace_FieldInterleavedLowerFirst = 4\nconstant kMFVideoInterlace_FieldSingleUpper = 5\nconstant kMFVideoInterlace_FieldSingleLower = 6\nconstant kMFVideoInterlace_MixedInterlaceOrProgressive = 7\n\ncommand Concatenate pReader1FilePath, pReader2FilePAth, pWriterFilePath\n   mediaFoundationCreateReader pReader1FilePath\n   mediaFoundationCreateReader pReader2FilePath\n   mediaFoundationCreateWriter pWriterFilePath\n\n   mediaFoundationCreateMediaType\n   local tVideoMediaType\n   put the result into tVideoMediaType\n\n   mediaFoundationMediaTypeSetAttribute tVideoMediaType, \"major type\", \"media type video\"\n   mediaFoundationMediaTypeSetAttribute tVideoMediaType, \"subtype\", \"video format H264\"\n   mediaFoundationMediaTypeSetAttribute tVideoMediaType, \"video frame size\", \"400,300\"\n   mediaFoundationMediaTypeSetAttribute tVideoMediaType, \"video frame rate\", \"20000,1000\"\n   mediaFoundationMediaTypeSetAttribute tVideoMediaType, \"video avg bitrate\", 100000\n   mediaFoundationMediaTypeSetAttribute tVideoMediaType, \"video interlace mode\", kMFVideoInterlace_Progressive\n   mediaFoundationMediaTypeSetAttribute tVideoMediaType, \"video aspect ratio\", \"1,1\"\n\n   mediaFoundationCreateMediaType\n   local tAudioMediaType\n   put the result into tAudioMediaType\n\n   mediaFoundationMediaTypeSetAttribute tAudioMediaType, \"major type\", \"media type audio\"\n   mediaFoundationMediaTypeSetAttribute tAudioMediaType, \"subtype\", \"audio format AAC\"\n   mediaFoundationMediaTypeSetAttribute tAudioMediaType, \"audio bits per sample\", 16\n   mediaFoundationMediaTypeSetAttribute tAudioMediaType, \"audio samples per second\", 44100\n   mediaFoundationMediaTypeSetAttribute tAudioMediaType, \"audio num channels\", 2\n   mediaFoundationMediaTypeSetAttribute tAudioMediaType, \"audio avg bytes per second\", 16000\n   mediaFoundationMediaTypeSetAttribute tAudioMediaType, \"audio block alignment\", 1\n\n   local tStreamCount\n   put mediaFoundationReaderNumberOfStreams(pReader1FilePath) into tStreamCount\n\n   local tVideoProcessor\n   mediaFoundationCreateVideoProcessor\n   put the result into tVideoProcessor\n\n   repeat with tIndex = 1 to tStreamCount\n      local tMajorType\n      local tNativeMediaType\n      put mediaFoundationReaderStreamGetNativeMediaType(pReader1FilePath, tIndex) into tNativeMediaType\n      put mediaFoundationMediaTypeGetAttribute(tNativeMediaType, \"major type\") into tMajorType\n\n      mediaFoundationCreateMediaType\n      local tPartialMediaType\n      put the result into tPartialMediaType\n\n      mediaFoundationMediaTypeSetAttribute tPartialMediaType, \"major type\", tMajorType\n\n      local tFoundMatch\n      switch tMajorType\n         case \"media type video\"\n            local tSize\n            put mediaFoundationMediaTypeGetAttribute(tNativeMediaType, \"video frame size\") into tSize\n            mediaFoundationVideoProcessorSetSourceRect tVideoProcessor, 0,0,400,300\n            mediaFoundationVideoProcessorSetDestinationRect tVideoProcessor, 0,0,item 1 of tSize, item 2 of tSize\n\n            mediaFoundationAddStreamToWriter pWriterFilePath, tVideoMediaType\n            mediaFoundationDeleteMediaType tVideoMediaType\n\n            put false into tFoundMatch\n\n            local tInputMediaTypeIndex\n            put 0 into tInputMediaTypeIndex\n\n            local tAvailableInputMediaType\n            local tCurrentMediaType\n            repeat\n               add 1 to tInputMediaTypeIndex\n               put mediaFoundationVideoProcessorGetInputAvailableMediaType(tVideoProcessor, tInputMediaTypeIndex) \\\n                     into tAvailableInputMediaType\n               if tAvailableInputMediaType is 0 then\n                  exit repeat\n               end if\n\n               local tResult\n               mediaFoundationReaderStreamSetCurrentMediaType pReader1FilePath, tIndex, tAvailableInputMediaType\n               put the result into tResult\n               if tResult then\n                  mediaFoundationReaderStreamSetCurrentMediaType pReader2FilePath, tIndex, tAvailableInputMediaType\n                  put the result into tResult\n                  if not tResult then\n                     mediaFoundationDeleteMediaType tAvailableInputMediaType\n                     next repeat\n                  end if\n                  put mediaFoundationReaderStreamGetCurrentMediaType(pReader1FilePath, tIndex) into tCurrentMediaType\n                  mediaFoundationVideoProcessorSetInputMediaType tVideoProcessor, tCurrentMediaType\n                  put the result into tResult\n                  if not tResult then\n                     mediaFoundationDeleteMediaType tAvailableInputMediaType\n                     mediaFoundationDeleteMediaType tCurrentMediaType\n                     next repeat\n                  end if\n                  mediaFoundationMediaTypeSetAttribute tCurrentMediaType, \"video frame size\", \"400,300\"\n\n                  mediaFoundationVideoProcessorSetOutputMediaType tVideoProcessor, tCurrentMediaType\n                  put the result into tResult\n                  if not tResult then\n                     mediaFoundationDeleteMediaType tAvailableInputMediaType\n                     mediaFoundationDeleteMediaType tCurrentMediaType\n                     next repeat\n                  end if\n\n                  mediaFoundationWriterStreamSetInputMediaType pWriterFilePath, tIndex, tCurrentMediaType\n                  put the result into tResult\n                  if not tResult then\n                     mediaFoundationDeleteMediaType tAvailableInputMediaType\n                     mediaFoundationDeleteMediaType tCurrentMediaType\n                     next repeat\n                  end if\n\n                  mediaFoundationDeleteMediaType tCurrentMediaType\n                  put true into tFoundMatch\n\n               end if\n\n               mediaFoundationDeleteMediaType tAvailableInputMediaType\n               if tFoundMatch then\n                  exit repeat\n               end if\n            end repeat\n\n            if not tFoundMatch then\n               exit repeat\n            end if\n            break\n         case \"media type audio\"\n            mediaFoundationAddStreamToWriter pWriterFilePath, tAudioMediaType\n            mediaFoundationDeleteMediaType tAudioMediaType\n\n            put false into tFoundMatch\n            repeat for each item tIntermediateFormat in \\\n                  \"audio format Float,audio format PCM\"\n               mediaFoundationMediaTypeSetAttribute tPartialMediaType, \"subtype\", tIntermediateFormat\n               mediaFoundationReaderStreamSetCurrentMediaType pReader1FilePath, tIndex, tPartialMediaType\n               mediaFoundationReaderStreamSetCurrentMediaType pReader2FilePath, tIndex, tPartialMediaType\n               if the result then\n                  put mediaFoundationReaderStreamGetCurrentMediaType(pReader1FilePath, tIndex) into tCurrentMediaType\n                  mediaFoundationWriterStreamSetInputMediaType pWriterFilePath, tIndex, tCurrentMediaType\n                  put the result into tResult\n                  mediaFoundationDeleteMediaType tCurrentMediaType\n                  if tResult then\n                     put true into tFoundMatch\n                     exit repeat\n                  end if\n               end if\n            end repeat\n            if not tFoundMatch then\n               exit repeat\n            end if\n            break\n         default\n\n      end switch\n\n      mediaFoundationDeleteMediaType tPartialMediaType\n      mediaFoundationDeleteMediaType tNativeMediaType\n   end repeat\n\n   local tDuration\n   put mediaFoundationReaderDuration(pReader1FilePath) into tDuration\n\n   if tFoundMatch then\n      mediaFoundationWriterBeginWriting pWriterFilePath\n      mediaFoundationTranscode pReader1FilePath, pWriterFilePath, tVideoProcessor, 0,0,0\n      mediaFoundationTranscode pReader2FilePath, pWriterFilePath, tVideoProcessor, tDuration, 0, 0\n      mediaFoundationWriterFinalizeWriting pWriterFilePath\n   end if\n\n   mediaFoundationDeleteReader pReader1FilePath\n   mediaFoundationDeleteReader pReader2FilePath\n   mediaFoundationDeleteWriter pWriterFilePath\n   mediaFoundationDeleteVideoProcessor tVideoProcessor\nend Concatenate"
			}],
			"description":"The reader and writer must already be created with <mediaFoundationCreateReader> and\n<mediaFoundationCreateWriter>. If a video stream is to be transcoded then the video\nprocessor must already be created.\n\nWhile transcoding the <mediaFoundationTranscode> command will wait with messages and a\nprogress message mediaFoundationTranscoding will be sent to the caller with a single\nparameter of the timestamp of the current sample being processed.",
			"references":{
				"command":["mediaFoundationCreateWriter","mediaFoundationCreateReader","mediaFoundationCreateVideoProcessor"]
			}
		},{
			"id":"mediafoundation-7",
			"name":"mediafoundationreaderstreamsetcurrentmediatype",
			"display name":"mediaFoundationReaderStreamSetCurrentMediaType",
			"library":"mediafoundation",
			"type":"command",
			"syntax":[
				"mediaFoundationReaderStreamSetCurrentMediaType <pFilePath>, <pStreamIndex>, <pMediaTypeID>"
			],
			"display syntax":[
				"mediaFoundationReaderStreamSetCurrentMediaType <i>pFilePath</i>, <i>pStreamIndex</i>, <i>pMediaTypeID</i>"
			],
			"associations":["mediafoundation"],
			"summary":"Set the current media type of a reader stream.\nPlatform:desktop",
			"edition":"Indy",
			"OS":["windows"],
			"parameters":[{
				"name":"pFilePath",
				"type":"string",
				"refparam":"false",
				"description":"The path to a media file"
			},{
				"name":"pStreamIndex",
				"type":"integer",
				"refparam":"false",
				"description":"An integer between 1 and the number of streams"
			},{
				"name":"pMediaTypeID",
				"type":"integer",
				"refparam":"false",
				"description":"A media type ID"
			}],
			"value":[{
				"name":"the result",
				"type":"boolean",
				"description":"Returns true if successful"
			}],
			"description":"The reader must already be created with <mediaFoundationCreateReader>. The current media\ntype is the type that samples will be read as. The command will return false if the\nreader is unable to decode the stream into the requested media type.\n\n>**Note**:See the <mediaFoundationTranscode> documentation for a complete\n> example of using this handler.",
			"references":{
				"command":["mediaFoundationTranscode","mediaFoundationCreateReader"]
			}
		},{
			"id":"mediafoundation-8",
			"name":"mediafoundationmediatypegetattribute",
			"display name":"mediaFoundationMediaTypeGetAttribute",
			"library":"mediafoundation",
			"type":"function",
			"syntax":[
				"mediaFoundationMediaTypeGetAttribute(<pMediaTypeID>, <pAttribute>)"
			],
			"display syntax":[
				"mediaFoundationMediaTypeGetAttribute(<i>pMediaTypeID</i>, <i>pAttribute</i>)"
			],
			"associations":["mediafoundation"],
			"summary":"Get an attribute of a media type\nPlatform:desktop",
			"edition":"Indy",
			"OS":["windows"],
			"parameters":[{
				"name":"pMediaTypeID",
				"type":"integer",
				"refparam":"false",
				"description":"A media type ID"
			},{
				"name":"pAttribute",
				"type":"string",
				"refparam":"false",
				"description":"The name of the attribute"
			}],
			"description":"The media must already be created with <mediaFoundationCreateMediaType>\nor via another API that returns a media type ID. See the attribute\ndescription in the <mediaFoundationMediaTypeSetAttribute> API document.\n\n>**Note**:See the <mediaFoundationTranscode> documentation for a complete\n> example of using this handler.",
			"references":{
				"command":["mediaFoundationTranscode","mediaFoundationCreateMediaType"]
			}
		},{
			"id":"mediafoundation-9",
			"name":"mediafoundationreaderduration",
			"display name":"mediaFoundationReaderDuration",
			"library":"mediafoundation",
			"type":"function",
			"syntax":[
				"mediaFoundationReaderDuration(<pFilePath>)"
			],
			"display syntax":[
				"mediaFoundationReaderDuration(<i>pFilePath</i>)"
			],
			"associations":["mediafoundation"],
			"summary":"Get the duration of the media file.\nPlatform:desktop",
			"edition":"Indy",
			"OS":["windows"],
			"parameters":[{
				"name":"pFilePath",
				"type":"string",
				"refparam":"false",
				"description":"The path to a media file"
			}],
			"description":"The reader must already be created with <mediaFoundationCreateReader>. The\nvalue returned is in 100 nanosecond units.\n\n>**Note**:See the <mediaFoundationTranscode> documentation for a complete\n> example of using this handler.",
			"references":{
				"command":["mediaFoundationTranscode","mediaFoundationCreateReader"]
			}
		},{
			"id":"mediafoundation-10",
			"name":"mediafoundationcreatevideoprocessor",
			"display name":"mediaFoundationCreateVideoProcessor",
			"library":"mediafoundation",
			"type":"command",
			"syntax":[
				"mediaFoundationCreateVideoProcessor"
			],
			"display syntax":[
				"mediaFoundationCreateVideoProcessor"
			],
			"associations":["mediafoundation"],
			"summary":"Create a video processor\nPlatform:desktop",
			"edition":"Indy",
			"OS":["windows"],
			"value":[{
				"name":"the result",
				"type":"integer",
				"description":"A video processor ID"
			}],
			"description":"Create a video processor\n\n>**Note**:See the <mediaFoundationTranscode> documentation for a complete\n> example of using this handler.",
			"references":{
				"command":["mediaFoundationTranscode"]
			}
		},{
			"id":"mediafoundation-11",
			"name":"mediafoundationvideoprocessorgetinputavailablemediatype",
			"display name":"mediaFoundationVideoProcessorGetInputAvailableMediaType",
			"library":"mediafoundation",
			"type":"function",
			"syntax":[
				"mediaFoundationVideoProcessorGetInputAvailableMediaType(<pVideoProcessorID>, <pIndex>)"
			],
			"display syntax":[
				"mediaFoundationVideoProcessorGetInputAvailableMediaType(<i>pVideoProcessorID</i>, <i>pIndex</i>)"
			],
			"associations":["mediafoundation"],
			"summary":"Get an input media type that the video processor supports\nPlatform:desktop",
			"edition":"Indy",
			"OS":["windows"],
			"parameters":[{
				"name":"pVideoProcessorID",
				"type":"integer",
				"refparam":"false",
				"description":"A video processor ID"
			},{
				"name":"pIndex",
				"type":"integer",
				"refparam":"false",
				"description":"An index of the available media types"
			}],
			"description":"The video processor supports a number of input and output media\ntypes. To setup the pipeline for transcoding we must find an\na reader output media type that is supported by the video processor\nas an input media type and a writer input media type that is\nsupported by the video processor as an output media type.\n\nYou may keep requesting media types from this API until 0 is\nreturned instead of a media type ID.\n\n>**Note**:See the <mediaFoundationTranscode> documentation for a complete\n> example of using this handler.",
			"references":{
				"command":["mediaFoundationTranscode","mediaFoundationCreateVideoProcessor"]
			}
		},{
			"id":"mediafoundation-12",
			"name":"mediafoundationwriterstreamsetinputmediatype",
			"display name":"mediaFoundationWriterStreamSetInputMediaType",
			"library":"mediafoundation",
			"type":"command",
			"syntax":[
				"mediaFoundationWriterStreamSetInputMediaType <pFilePath>, <pStreamIndex>, <pMediaTypeID>"
			],
			"display syntax":[
				"mediaFoundationWriterStreamSetInputMediaType <i>pFilePath</i>, <i>pStreamIndex</i>, <i>pMediaTypeID</i>"
			],
			"associations":["mediafoundation"],
			"summary":"Set the input media type of a stream of a writer\nPlatform:desktop",
			"edition":"Indy",
			"OS":["windows"],
			"parameters":[{
				"name":"pFilePath",
				"type":"string",
				"refparam":"false",
				"description":"The path to a media file"
			},{
				"name":"pStreamIndex",
				"type":"integer",
				"refparam":"false",
				"description":"An integer between 1 and the number of streams"
			},{
				"name":"pMediaTypeID",
				"type":"integer",
				"refparam":"false",
				"description":"A media type ID"
			}],
			"value":[{
				"name":"the result",
				"type":"boolean",
				"description":"False if the writer does not support the input type"
			}],
			"description":"The writer must already be created with <mediaFoundationCreateWrite>r. This\ncommand sets the media type that the writer will expect the samples written\nto the stream to be in.\n\n>**Note**:See the <mediaFoundationTranscode> documentation for a complete\n> example of using this handler.",
			"references":{
				"command":["mediaFoundationTranscode","mediaFoundationCreateWriter"]
			}
		},{
			"id":"mediafoundation-13",
			"name":"mediafoundationvideoprocessorsetinputmediatype",
			"display name":"mediaFoundationVideoProcessorSetInputMediaType",
			"library":"mediafoundation",
			"type":"command",
			"syntax":[
				"mediaFoundationVideoProcessorSetInputMediaType <pVideoProcessorID>, <pMediaTypeID>"
			],
			"display syntax":[
				"mediaFoundationVideoProcessorSetInputMediaType <i>pVideoProcessorID</i>, <i>pMediaTypeID</i>"
			],
			"associations":["mediafoundation"],
			"summary":"Set the current input media type\nPlatform:desktop",
			"edition":"Indy",
			"OS":["windows"],
			"parameters":[{
				"name":"pVideoProcessorID",
				"type":"integer",
				"refparam":"false",
				"description":"A video processor ID"
			},{
				"name":"pMediaTypeID",
				"type":"integer",
				"refparam":"false",
				"description":"A media type ID"
			}],
			"value":[{
				"name":"the result",
				"type":"boolean",
				"description":"True if the video processor supports the input media type for the current input media type"
			}],
			"description":"To setup the pipeline for transcoding we must find an\na reader output media type that is supported by the video processor\nas an input media type and a writer input media type that is\nsupported by the video processor as an output media type.\n\n>**Note**:See the <mediaFoundationTranscode> documentation for a complete\n> example of using this handler.",
			"references":{
				"command":["mediaFoundationTranscode","mediaFoundationCreateVideoProcessor"]
			}
		},{
			"id":"mediafoundation-14",
			"name":"mediafoundationvideoprocessorsetsourcerect",
			"display name":"mediaFoundationVideoProcessorSetSourceRect",
			"library":"mediafoundation",
			"type":"command",
			"syntax":[
				"mediaFoundationVideoProcessorSetSourceRect <pVideoProcessorID>, <pLeft>, <pTop>, <pRight>, <pBottom>"
			],
			"display syntax":[
				"mediaFoundationVideoProcessorSetSourceRect <i>pVideoProcessorID</i>, <i>pLeft</i>, <i>pTop</i>, <i>pRight</i>, <i>pBottom</i>"
			],
			"associations":["mediafoundation"],
			"summary":"Set the source rect of the video processor\nPlatform:desktop",
			"edition":"Indy",
			"OS":["windows"],
			"parameters":[{
				"name":"pVideoProcessorID",
				"type":"integer",
				"refparam":"false",
				"description":"A video processor id"
			},{
				"name":"pLeft",
				"type":"integer",
				"refparam":"false",
				"description":"The left of the source rect"
			},{
				"name":"pTop",
				"type":"integer",
				"refparam":"false",
				"description":"The top of the source rect"
			},{
				"name":"pRight",
				"type":"integer",
				"refparam":"false",
				"description":"The right of the source rect"
			},{
				"name":"pBottom",
				"type":"integer",
				"refparam":"false",
				"description":"The bottom of the source rect\n\nThe result (c-string):\nAn error string if an error occured"
			}],
			"description":"Set the source and destination rect when transcoding video from\none frame size to another.\n\n>**Note**:See the <mediaFoundationTranscode> documentation for a complete\n> example of using this handler.",
			"references":{
				"command":["mediaFoundationTranscode","mediaFoundationCreateVideoProcessor"]
			}
		},{
			"id":"mediafoundation-15",
			"name":"mediafoundationvideoprocessorsetoutputmediatype",
			"display name":"mediaFoundationVideoProcessorSetOutputMediaType",
			"library":"mediafoundation",
			"type":"command",
			"syntax":[
				"mediaFoundationVideoProcessorSetOutputMediaType <pVideoProcessorID>, <pMediaTypeID>"
			],
			"display syntax":[
				"mediaFoundationVideoProcessorSetOutputMediaType <i>pVideoProcessorID</i>, <i>pMediaTypeID</i>"
			],
			"associations":["mediafoundation"],
			"summary":"Set the current output media type\nPlatform:desktop",
			"edition":"Indy",
			"OS":["windows"],
			"parameters":[{
				"name":"pVideoProcessorID",
				"type":"integer",
				"refparam":"false",
				"description":"A video processor ID"
			},{
				"name":"pMediaTypeID",
				"type":"integer",
				"refparam":"false",
				"description":"A media type ID"
			}],
			"value":[{
				"name":"the result",
				"type":"boolean",
				"description":"True if the video processor supports the output media type for the current input media type"
			}],
			"description":"To setup the pipeline for transcoding we must find an\na reader output media type that is supported by the video processor\nas an input media type and a writer input media type that is\nsupported by the video processor as an output media type.\n\n>**Note**:See the <mediaFoundationTranscode> documentation for a complete\n> example of using this handler.",
			"references":{
				"command":["mediaFoundationTranscode","mediaFoundationCreateVideoProcessor"]
			}
		},{
			"id":"mediafoundation-16",
			"name":"mediafoundationmediatypesetattribute",
			"display name":"mediaFoundationMediaTypeSetAttribute",
			"library":"mediafoundation",
			"type":"command",
			"syntax":[
				"mediaFoundationMediaTypeSetAttribute <pMediaTypeID>, <pAttribute>, <pValue>"
			],
			"display syntax":[
				"mediaFoundationMediaTypeSetAttribute <i>pMediaTypeID</i>, <i>pAttribute</i>, <i>pValue</i>"
			],
			"associations":["mediafoundation"],
			"summary":"Set an attribute of a media type\nPlatform:desktop",
			"edition":"Indy",
			"OS":["windows"],
			"parameters":[{
				"name":"pMediaTypeID",
				"type":"integer",
				"refparam":"false",
				"description":"A media type ID"
			},{
				"name":"pAttribute",
				"type":"string",
				"refparam":"false",
				"description":"The name of the attribute"
			},{
				"name":"pValue",
				"type":"string",
				"refparam":"false",
				"description":"The value to set the attribute to"
			}],
			"description":"The media must already be created with <mediaFoundationCreateMediaType>\nor via another API that returns a media type ID.\n\nThe following attributes are currently supported:\n\n- \"major type\": One of the following\n   - \"media type default\"\n   - \"media type audio\"\n   - \"media type video\"\n   - \"media type protected\"\n   - \"media type sami\"\n   - \"media type script\"\n   - \"media type image\"\n   - \"media type html\"\n   - \"media type binary\"\n   - \"media type file transfer\"\n   - \"media type stream\"\n- \"subtype\": One of the following:\n   - \"video format RGB32\"\n   - \"video format ARGB32\"\n   - \"video format RGB24\"\n   - \"video format RGB555\"\n   - \"video format RGB565\"\n   - \"video format RGB8\"\n   - \"video format AI44\"\n   - \"video format AYUV\"\n   - \"video format YUY2\"\n   - \"video format YVYU\"\n   - \"video format YVU9\"\n   - \"video format UYVY\"\n   - \"video format NV11\"\n   - \"video format NV12\"\n   - \"video format YV12\"\n   - \"video format I420\"\n   - \"video format IYUV\"\n   - \"video format Y210\"\n   - \"video format Y216\"\n   - \"video format Y410\"\n   - \"video format Y416\"\n   - \"video format Y41P\"\n   - \"video format Y41T\"\n   - \"video format Y42T\"\n   - \"video format P210\"\n   - \"video format P216\"\n   - \"video format P010\"\n   - \"video format P016\"\n   - \"video format v210\"\n   - \"video format v216\"\n   - \"video format v410\"\n   - \"video format MP43\"\n   - \"video format MP4S\"\n   - \"video format M4S2\"\n   - \"video format MP4V\"\n   - \"video format WMV1\"\n   - \"video format WMV2\"\n   - \"video format WMV3\"\n   - \"video format WVC1\"\n   - \"video format MSS1\"\n   - \"video format MSS2\"\n   - \"video format MPG1\"\n   - \"video format DVSL\"\n   - \"video format DVSD\"\n   - \"video format DVHD\"\n   - \"video format DV25\"\n   - \"video format DV50\"\n   - \"video format DVH1\"\n   - \"video format DVC\"\n   - \"video format H264\"\n   - \"video format MJPG\"\n   - \"video format 4200\"\n   - \"video format HEVC\"\n   - \"video format HEVC ES\"\n   - \"video format DVC\"\n   - \"video format MPEG2\"\n   - \"video format H264 ES\"\n   - \"audio format PCM\"\n   - \"audio format Float\"\n   - \"audio format DTS\"\n   - \"audio format Dolby AC3 SPDIF\"\n   - \"audio format DRM\"\n   - \"audio format WMAudioV8\"\n   - \"audio format WMAudioV9\"\n   - \"audio format WMAudio Lossless\"\n   - \"audio format WMASPDIF\"\n   - \"audio format MSP1\"\n   - \"audio format MP3\"\n   - \"audio format MPEG\"\n   - \"audio format AAC\"\n   - \"audio format ADTS\"\n   - \"audio format AMR NB\"\n   - \"audio format AMR WB\"\n   - \"audio format AMR WP\"\n   - \"audio format Dolby AC3\"\n   - \"audio format Dolby DDPlus\"\n- \"all samples independent\" (boolean): Specifies for a media type whether each sample is independent of the other samples in the stream.\n- \"fixed size samples\" (boolean): Specifies for a media type whether the samples have a fixed size\n- \"compressed\" (boolean): If this attribute is true, the media type is a compressed format. Otherwise, either the media type is uncompressed or the compression type is not known.\n- \"sample size\" (integer): Specifies the size of each sample, in bytes, in a media type.\n- \"audio num channels\" (integer): Number of audio channels in an audio media type.\n- \"audio samples per second\" (integer): Number of audio samples per second in an audio media type.\n- \"audio avg bytes per second\" (integer): Average number of bytes per second in an audio media type.\n- \"audio block alignment\" (integer): Block alignment, in bytes, for an audio media type. The block alignment is the minimum atomic unit of data for the audio format.\n- \"audio bits per sample\" (integer): Number of bits per audio sample in an audio media type.\n- \"audio valid bits per sample\" (integer): Number of valid bits of audio data in each audio sample.\n- \"audio samples per block\" (integer): Number of audio samples contained in one compressed block of audio data. This attribute can be used in compressed audio formats that have a fixed number of samples within each block.\n- \"audio channel mask\" (integer): In an audio media type, specifies the assignment of audio channels to speaker positions. The value of this attribute is a bitwise OR of the following flags:\n   - SPEAKER_FRONT_LEFT (0x1)\n   - SPEAKER_FRONT_RIGHT (0x2)\n   - SPEAKER_FRONT_CENTER (0x4)\n   - SPEAKER_LOW_FREQUENCY (0x8)\n   - SPEAKER_BACK_LEFT (0x10)\n   - SPEAKER_BACK_RIGHT (0x20)\n   - SPEAKER_FRONT_LEFT_OF_CENTER (0x40)\n   - SPEAKER_FRONT_RIGHT_OF_CENTER (0x80)\n   - SPEAKER_BACK_CENTER (0x100)\n   - SPEAKER_SIDE_LEFT (0x200)\n   - SPEAKER_SIDE_RIGHT (0x400)\n   - SPEAKER_TOP_CENTER (0x800)\n   - SPEAKER_TOP_FRONT_LEFT (0x1000)\n   - SPEAKER_TOP_FRONT_CENTER (0x2000)\n   - SPEAKER_TOP_FRONT_RIGHT (0x4000)\n   - SPEAKER_TOP_BACK_LEFT (0x8000)\n   - SPEAKER_TOP_BACK_CENTER (0x10000)\n   - SPEAKER_TOP_BACK_RIGHT (0x20000)\n- \"video frame size\": Width,height of a video frame, in pixels.\n- \"video frame rate\": The frame rate is expressed as a numertor,denomitator ratio. For example, if the frame rate is 30 frames per second (fps), the ratio is 30,1. If the frame rate is 29.97 fps, the ratio is 30000,1001.\n- \"video aspect ratio\": An X,Y pair\n- \"video avg bitrate\" (integer): Approximate data rate of the video stream, in bits per second, for a video media type.\n- \"video interlace mode\" (integer): Describes how the frames in a video media type are interlaced. Use the following constants for this property:\n\n      constant kMFVideoInterlace_Progressive = 2\n      constant kMFVideoInterlace_FieldInterleavedUpperFirst = 3\n      constant kMFVideoInterlace_FieldInterleavedLowerFirst = 4\n      constant kMFVideoInterlace_FieldSingleUpper = 5\n      constant kMFVideoInterlace_FieldSingleLower = 6\n      constant kMFVideoInterlace_MixedInterlaceOrProgressive = 7\n\n>**Note**:See the <mediaFoundationTranscode> documentation for a complete\n> example of using this handler.",
			"references":{
				"command":["mediaFoundationTranscode","mediaFoundationCreateMediaType"]
			}
		},{
			"id":"mediafoundation-17",
			"name":"mediafoundationreaderstreamgetcurrentmediatype",
			"display name":"mediaFoundationReaderStreamGetCurrentMediaType",
			"library":"mediafoundation",
			"type":"function",
			"syntax":[
				"mediaFoundationReaderStreamGetCurrentMediaType(<pFilePath>, <pStreamIndex>)"
			],
			"display syntax":[
				"mediaFoundationReaderStreamGetCurrentMediaType(<i>pFilePath</i>, <i>pStreamIndex</i>)"
			],
			"associations":["mediafoundation"],
			"summary":"Get the current media type of a reader stream.\nPlatform:desktop",
			"edition":"Indy",
			"OS":["windows"],
			"parameters":[{
				"name":"pFilePath",
				"type":"string",
				"refparam":"false",
				"description":"The path to a media file"
			},{
				"name":"pStreamIndex",
				"type":"integer",
				"refparam":"false",
				"description":"An integer between 1 and the number of streams"
			}],
			"description":"The reader must already be created with <mediaFoundationCreateReader>. Call\nmediaFoundationDeleteMediaType with the returned ID when your script no\nlonger needs to access the media type.\n\n>**Note**:See the <mediaFoundationTranscode> documentation for a complete\n> example of using this handler.",
			"references":{
				"command":["mediaFoundationTranscode","mediaFoundationCreateReader","mediaFoundationDeleteMediaType"]
			}
		},{
			"id":"mediafoundation-18",
			"name":"mediafoundationreaderstreamisselected",
			"display name":"mediaFoundationReaderStreamIsSelected",
			"library":"mediafoundation",
			"type":"function",
			"syntax":[
				"mediaFoundationReaderStreamIsSelected(<pFilePath>, <pStreamIndex>)"
			],
			"display syntax":[
				"mediaFoundationReaderStreamIsSelected(<i>pFilePath</i>, <i>pStreamIndex</i>)"
			],
			"associations":["mediafoundation"],
			"summary":"Query if the stream is selected\nPlatform:desktop",
			"edition":"Indy",
			"OS":["windows"],
			"parameters":[{
				"name":"pFilePath",
				"type":"string",
				"refparam":"false",
				"description":"The path to a media file"
			},{
				"name":"pStreamIndex",
				"type":"integer",
				"refparam":"false",
				"description":"An integer between 1 and the number of streams"
			}],
			"description":"The reader must already be created with <mediaFoundationCreateReader>. A \nselected stream will be included in the streams that are read from when\ntranscoding the file.\n\n>**Note**:See the <mediaFoundationTranscode> documentation for a complete\n> example of using this handler.",
			"references":{
				"command":["mediaFoundationTranscode","mediaFoundationCreateReader"]
			}
		},{
			"id":"mediafoundation-19",
			"name":"mediafoundationwriterbeginwriting",
			"display name":"mediaFoundationWriterBeginWriting",
			"library":"mediafoundation",
			"type":"command",
			"syntax":[
				"mediaFoundationWriterBeginWriting <pFilePath>"
			],
			"display syntax":[
				"mediaFoundationWriterBeginWriting <i>pFilePath</i>"
			],
			"associations":["mediafoundation"],
			"summary":"Begin writing to a media file\nPlatform:desktop",
			"edition":"Indy",
			"OS":["windows"],
			"parameters":[{
				"name":"pFilePath",
				"type":"string",
				"refparam":"false",
				"description":"The path to a media file\n\nThe result (c-string):\nAn error string if an error occurs"
			}],
			"description":"The writer must already be created with <mediaFoundationCreateWriter>.\n\n>**Note**:See the <mediaFoundationTranscode> documentation for a complete\n> example of using this handler.",
			"references":{
				"command":["mediaFoundationTranscode","mediaFoundationCreateWriter"]
			}
		},{
			"id":"mediafoundation-20",
			"name":"mediafoundationreaderstreamgetnativemediatype",
			"display name":"mediaFoundationReaderStreamGetNativeMediaType",
			"library":"mediafoundation",
			"type":"function",
			"syntax":[
				"mediaFoundationReaderStreamGetNativeMediaType(<pFilePath>, <pStreamIndex>)"
			],
			"display syntax":[
				"mediaFoundationReaderStreamGetNativeMediaType(<i>pFilePath</i>, <i>pStreamIndex</i>)"
			],
			"associations":["mediafoundation"],
			"summary":"Get the ID of the native media type of a reader stream\nPlatform:desktop",
			"edition":"Indy",
			"OS":["windows"],
			"parameters":[{
				"name":"pFilePath",
				"type":"string",
				"refparam":"false",
				"description":"The path to a media file"
			},{
				"name":"pStreamIndex",
				"type":"integer",
				"refparam":"false",
				"description":"An integer between 1 and the number of streams"
			}],
			"description":"The reader must already be created with <mediaFoundationCreateReader>. Call\n<mediaFoundationDeleteMediaType> with the returned ID when your script no\nlonger needs to access the media type.\n\n>**Note**:See the <mediaFoundationTranscode> documentation for a complete\n> example of using this handler.",
			"references":{
				"command":["mediaFoundationTranscode","mediaFoundationCreateReader","mediaFoundationDeleteMediaType"]
			}
		},{
			"id":"mediafoundation-21",
			"name":"mediafoundationdeletemediatype",
			"display name":"mediaFoundationDeleteMediaType",
			"library":"mediafoundation",
			"type":"command",
			"syntax":[
				"mediaFoundationDeleteMediaType <pMediaTypeID>"
			],
			"display syntax":[
				"mediaFoundationDeleteMediaType <i>pMediaTypeID</i>"
			],
			"associations":["mediafoundation"],
			"summary":"Delete a media tyoe\nPlatform:desktop",
			"edition":"Indy",
			"OS":["windows"],
			"parameters":[{
				"name":"pMediaTypeID",
				"type":"integer",
				"refparam":"false",
				"description":"A media type ID"
			}],
			"description":"The media type must already be created with the <mediaFoundationcreateMediaType> command\nor another API that returns a media type ID.\n\n>**Note**:See the <mediaFoundationTranscode> documentation for a complete\n> example of using this handler.",
			"references":{
				"command":["mediaFoundationTranscode","mediaFoundationCreateMediaType"]
			}
		},{
			"id":"mediafoundation-22",
			"name":"mediafoundationvideoprocessorgetoutputavailablemediatype",
			"display name":"mediaFoundationVideoProcessorGetOutputAvailableMediaType",
			"library":"mediafoundation",
			"type":"function",
			"syntax":[
				"mediaFoundationVideoProcessorGetOutputAvailableMediaType(<pVideoProcessorID>, <pIndex>)"
			],
			"display syntax":[
				"mediaFoundationVideoProcessorGetOutputAvailableMediaType(<i>pVideoProcessorID</i>, <i>pIndex</i>)"
			],
			"associations":["mediafoundation"],
			"summary":"Get an output media type that the video processor supports\nPlatform:desktop",
			"edition":"Indy",
			"OS":["windows"],
			"parameters":[{
				"name":"pVideoProcessorID",
				"type":"integer",
				"refparam":"false",
				"description":"A video processor ID"
			},{
				"name":"pIndex",
				"type":"integer",
				"refparam":"false",
				"description":"An index of the available media types"
			}],
			"description":"The video processor supports a number of input and output media\ntypes. To setup the pipeline for transcoding we must find an\na reader output media type that is supported by the video processor\nas an input media type and a writer input media type that is\nsupported by the video processor as an output media type.\n\nYou may keep requesting media types from this API until 0 is\nreturned instead of a media type ID.\n\n>**Note**:See the <mediaFoundationTranscode> documentation for a complete\n> example of using this handler.",
			"references":{
				"command":["mediaFoundationTranscode","mediaFoundationCreateVideoProcessor"]
			}
		},{
			"id":"mediafoundation-23",
			"name":"mediafoundationvideoprocessorgetoutputmediatype",
			"display name":"mediaFoundationVideoProcessorGetOutputMediaType",
			"library":"mediafoundation",
			"type":"function",
			"syntax":[
				"mediaFoundationVideoProcessorGetOutputMediaType(<pVideoProcessorID>)"
			],
			"display syntax":[
				"mediaFoundationVideoProcessorGetOutputMediaType(<i>pVideoProcessorID</i>)"
			],
			"associations":["mediafoundation"],
			"summary":"Get the current output media type\nPlatform:desktop",
			"edition":"Indy",
			"OS":["windows"],
			"parameters":[{
				"name":"pVideoProcessorID",
				"type":"integer",
				"refparam":"false",
				"description":"A video processor ID"
			}],
			"description":"To setup the pipeline for transcoding we must find an\na reader output media type that is supported by the video processor\nas an input media type and a writer input media type that is\nsupported by the video processor as an output media type.\n\nR>**Note**:See the <mediaFoundationTranscode> documentation for a complete\n> example of using this handler.",
			"references":{
				"command":["mediaFoundationTranscode","mediaFoundationCreateVideoProcessor"]
			}
		},{
			"id":"mediafoundation-24",
			"name":"mediafoundationwriterfinalizewriting",
			"display name":"mediaFoundationWriterFinalizeWriting",
			"library":"mediafoundation",
			"type":"command",
			"syntax":[
				"mediaFoundationWriterFinalizeWriting <pFilePath>"
			],
			"display syntax":[
				"mediaFoundationWriterFinalizeWriting <i>pFilePath</i>"
			],
			"associations":["mediafoundation"],
			"summary":"Finalize writing to a media file\nPlatform:desktop",
			"edition":"Indy",
			"OS":["windows"],
			"parameters":[{
				"name":"pFilePath",
				"type":"string",
				"refparam":"false",
				"description":"The path to a media file\n\nThe result (c-string):\nAn error string if an error occurs"
			}],
			"description":"The writer must already be created with <mediaFoundationCreateWriter>.\n\n>**Note**:See the <mediaFoundationTranscode> documentation for a complete\n> example of using this handler.",
			"references":{
				"command":["mediaFoundationTranscode","mediaFoundationCreateWriter"]
			}
		},{
			"id":"mediafoundation-25",
			"name":"mediafoundationreadersetstreamselection",
			"display name":"mediaFoundationReaderSetStreamSelection",
			"library":"mediafoundation",
			"type":"command",
			"syntax":[
				"mediaFoundationReaderSetStreamSelection <pFilePath>, <pStreamIndex>, <pSelected>"
			],
			"display syntax":[
				"mediaFoundationReaderSetStreamSelection <i>pFilePath</i>, <i>pStreamIndex</i>, <i>pSelected</i>"
			],
			"associations":["mediafoundation"],
			"summary":"Set the stream selection\nPlatform:desktop",
			"edition":"Indy",
			"OS":["windows"],
			"parameters":[{
				"name":"pFilePath",
				"type":"string",
				"refparam":"false",
				"description":"The path to a media file"
			},{
				"name":"pStreamIndex",
				"type":"integer",
				"refparam":"false",
				"description":"An integer between 1 and the number of streams"
			},{
				"name":"pSelected",
				"type":"boolean",
				"refparam":"false",
				"description":"The value to set the stream selection to"
			}],
			"description":"The reader must already be created with <mediaFoundationCreateReader>. \n\n>**Note**:See the <mediaFoundationTranscode> documentation for a complete\n> example of using this handler.",
			"references":{
				"command":["mediaFoundationTranscode","mediaFoundationCreateReader"]
			}
		},{
			"id":"mediafoundation-26",
			"name":"mediafoundationvideoprocessorsetdestinationrect",
			"display name":"mediaFoundationVideoProcessorSetDestinationRect",
			"library":"mediafoundation",
			"type":"command",
			"syntax":[
				"mediaFoundationVideoProcessorSetDestinationRect <pVideoProcessorID>, <pLeft>, <pTop>, <pRight>, <pBottom>"
			],
			"display syntax":[
				"mediaFoundationVideoProcessorSetDestinationRect <i>pVideoProcessorID</i>, <i>pLeft</i>, <i>pTop</i>, <i>pRight</i>, <i>pBottom</i>"
			],
			"associations":["mediafoundation"],
			"summary":"Set the destination rect of the video processor\nPlatform:windowsPlatform: desktop",
			"edition":"Indy",
			"OS":["windows"],
			"parameters":[{
				"name":"pVideoProcessorID",
				"type":"integer",
				"refparam":"false",
				"description":"A video processor id"
			},{
				"name":"pLeft",
				"type":"integer",
				"refparam":"false",
				"description":"The left of the destination rect"
			},{
				"name":"pTop",
				"type":"integer",
				"refparam":"false",
				"description":"The top of the destination rect"
			},{
				"name":"pRight",
				"type":"integer",
				"refparam":"false",
				"description":"The right of the destination rect"
			},{
				"name":"pBottom",
				"type":"integer",
				"refparam":"false",
				"description":"The bottom of the destination rect\n\nThe result (c-string):\nAn error string if an error occured"
			}],
			"description":"Set the source and destination rect when transcoding video from\none frame size to another.",
			"references":{
				"command":["mediaFoundationTranscode","mediaFoundationCreateVideoProcessor"]
			}
		},{
			"id":"mediafoundation-27",
			"name":"mediafoundationcreatewriter",
			"display name":"mediaFoundationCreateWriter",
			"library":"mediafoundation",
			"type":"command",
			"syntax":[
				"mediaFoundationCreateWriter <pFilePath>"
			],
			"display syntax":[
				"mediaFoundationCreateWriter <i>pFilePath</i>"
			],
			"associations":["mediafoundation"],
			"summary":"Create a media file writer.\nPlatform:desktop",
			"edition":"Indy",
			"OS":["windows"],
			"parameters":[{
				"name":"pFilePath",
				"type":"string",
				"refparam":"false",
				"description":"The path to a media file"
			}],
			"description":"The type of media container is determined by the file extension.\nFor example, file.mp4 will create an MP4 file.\n\n>**Note**:See the <mediaFoundationTranscode> documentation for a complete\n> example of using this handler.",
			"references":{
				"command":["mediaFoundationTranscode"]
			}
		},{
			"id":"mediafoundation-28",
			"name":"mediafoundationcreatemediatype",
			"display name":"mediaFoundationCreateMediaType",
			"library":"mediafoundation",
			"type":"command",
			"syntax":[
				"mediaFoundationCreateMediaType"
			],
			"display syntax":[
				"mediaFoundationCreateMediaType"
			],
			"associations":["mediafoundation"],
			"summary":"Create a media type\nPlatform:desktop",
			"edition":"Indy",
			"OS":["windows"],
			"value":[{
				"name":"the result",
				"type":"integer",
				"description":"A media type ID"
			}],
			"description":"Create a media type.\n\n>**Note**:See the <mediaFoundationTranscode> documentation for a complete\n> example of using this handler."
		},{
			"id":"mediafoundation-29",
			"name":"mediafoundationdeletewriter",
			"display name":"mediaFoundationDeleteWriter",
			"library":"mediafoundation",
			"type":"command",
			"syntax":[
				"mediaFoundationDeleteWriter <pFilePath>"
			],
			"display syntax":[
				"mediaFoundationDeleteWriter <i>pFilePath</i>"
			],
			"associations":["mediafoundation"],
			"summary":"Delete a media file writer.\nPlatform:desktop",
			"edition":"Indy",
			"OS":["windows"],
			"parameters":[{
				"name":"pFilePath",
				"type":"string",
				"refparam":"false",
				"description":"The path to a media file"
			}],
			"description":"The writer must already be created with <mediaFoundationCreateWriter>.\nthis command does not delete the file from disk.\n\n>**Note**:See the <mediaFoundationTranscode> documentation for a complete\n> example of using this handler.",
			"references":{
				"command":["mediaFoundationTranscode","mediaFoundationCreateWriter"]
			}
		},{
			"id":"mediafoundation-30",
			"name":"mediafoundationdeletereader",
			"display name":"mediaFoundationDeleteReader",
			"library":"mediafoundation",
			"type":"command",
			"syntax":[
				"mediaFoundationDeleteReader <pFilePath>"
			],
			"display syntax":[
				"mediaFoundationDeleteReader <i>pFilePath</i>"
			],
			"associations":["mediafoundation"],
			"summary":"Delete a media file reader\nPlatform:desktop",
			"edition":"Indy",
			"OS":["windows"],
			"parameters":[{
				"name":"pFilePath",
				"type":"string",
				"refparam":"false",
				"description":"The path to a media file\n"
			}],
			"description":"Deletes a reader for the specified file path\n\n>**Note**:See the <mediaFoundationTranscode> documentation for a complete\n> example of using this handler.",
			"references":{
				"command":["mediaFoundationTranscode"]
			}
		}