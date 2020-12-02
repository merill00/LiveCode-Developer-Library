script "com.alilloyd.widget.multiplechoicetwo.editor.selectedChoices.behavior"

on editorInitialize
   set the editorMinWidth of me to 300
   set the editorMaxWidth of me to 0
end editorInitialize

on editorUpdate
   set the selectedChoices of widget 1 of me to the editorValue of me
end editorUpdate

on editorResize
   lock screen
   lock messages
   set the rect of widget 1 of me to the rect of me
   unlock messages
   unlock screen
end editorResize

on selectionChanged
   set the editorValue of me to the selectedChoices of widget 1 of me
   updateProperty
end selectionChanged
