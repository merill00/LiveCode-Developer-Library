The preference.bundle external can be used by the framework to store preferences in the plist file that OS X creates for applications by default. It will work with sandboxed applications.

To use:

1) Add the external to your application using the plugin. The "External Package Name" when adding the external is "preferences".
2) Set the "Mac OS Preference File" property in the plugin to the value you use for the CFBundleIdentifier in your plist file. This is something like "com.mycompany.myproduct".

Make sure and save your changes by clicking the save button in the plugin.