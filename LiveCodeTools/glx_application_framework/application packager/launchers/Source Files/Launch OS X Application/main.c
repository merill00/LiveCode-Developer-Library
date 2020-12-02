#include <ApplicationServices/ApplicationServices.h>
#include <stdio.h>
#include <stdlib.h>

int main (int argc, const char * argv[]) {
	CFURLRef url;
	OSStatus err = noErr;
	LSLaunchURLSpec launchSpec;
	int theWaitTime = 3;
		
	if (argc < 2 || argc > 3)
	{
		printf("path to executable required\n");
		return(1);
	}
	else
	{
		if (argc == 3)
		{
			theWaitTime  = atoi(argv[2]);
		}
		
		//err = daemon(0,0);
		if (err == noErr)
		{
			sleep(theWaitTime); // Give Application time to quit
			
			url = CFURLCreateWithFileSystemPath(NULL, 
						CFStringCreateWithCString(kCFAllocatorDefault, argv[1], kCFStringEncodingUTF8),
						kCFURLPOSIXPathStyle,
						FALSE
						);
			//CFStringRef myString = CFURLGetString(url);
			launchSpec.appURL = url;
			launchSpec.itemURLs = NULL;
			launchSpec.passThruParams = NULL;
			launchSpec.launchFlags = kLSLaunchDefaults;
			launchSpec.asyncRefCon = NULL;
			
		err = LSOpenFromURLSpec(&launchSpec, NULL);
		}
	
		if (err != noErr)
		{
			fprintf(stderr, "error launching application (%ld)\n", err);
			return(1);
		}
		else
		{
			return(0);
		}
	}
}