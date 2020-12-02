{
		"display name":"com.fmpromigrator.widget.buttonbar",
		"name":"com.fmpromigrator.widget.buttonbar",
		"author":"David Simpson",
		"doc":[{
			"id":"1",
			"name":"buttonclicked",
			"display name":"buttonClicked",
			"type":"message",
			"syntax":[
				"on buttonClicked nameOfButtonClicked"
			],
			"display syntax":[
				"on buttonClicked nameOfButtonClicked"
			],
			"associations":["com.fmpromigrator.widget.buttonbar"],
			"summary":"Sent when a button is clicked",
			"examples":[{
				"script":"on buttonClicked pButtonName\n   -- branch based upon name of clicked button\n   switch pButtonName\n      case \"first\"\n         break\n      case \"previous\"\n         break\n      case \"next\"\n         break\n      case \"last\"\n         break\n      default\n         -- do nothing if empty\n   end switch\nend buttonClicked"
			}],
			"description":"Handle the <buttonClicked> message in the widget's object script to respond to\na button click made by the user."
		},{
			"id":"2",
			"name":"showborder",
			"display name":"showBorder",
			"type":"property",
			"syntax":[
				"get the <showBorder> of <widget>",
				"set the <showBorder> of <widget> to {true | false}"
			],
			"display syntax":[
				"get the <i>showBorder</i> of <i>widget</i>"
			],
			"associations":["com.fmpromigrator.widget.buttonbar"],
			"summary":"Whether the dividing line at the top of the buttonbar is drawn or not",
			"description":"Use the <showBorder> property to determine whether the dividing line at the top\nof the buttonbar is drawn or not."
		},{
			"id":"3",
			"name":"itemicons",
			"display name":"itemIcons",
			"type":"property",
			"syntax":[
				"get the itemIcons of <widget>",
				"set the itemIcons of <widget> to <pIcons>"
			],
			"display syntax":[
				"get the itemIcons of <i>widget</i>"
			],
			"associations":["com.fmpromigrator.widget.buttonbar"],
			"summary":"The icons for the button items when not highlighted",
			"parameters":[{
				"name":"pIcons",
				"type":"",
				"refparam":"false",
				"description":"A comma delimited list of icon names."
			}],
			"description":"The icons of the button items of the widget.  Adding an item to the\n<itemIcons> causes a new button item to be created with the default label\nand name.\n\nEach icon name must be one of the predefined graphics provided by the \"IconSVG\"\nlibrary.  You can get a list of available predefined path names by running\n`put iconNames()` in the Message Box.\n\n**Note:** Removing an item from the <itemIcons> does not cause the\ncorresponding item to be removed from the button items, but merely resets\nit to the default icon."
		},{
			"id":"4",
			"name":"itemnames",
			"display name":"itemNames",
			"type":"property",
			"syntax":[
				"get the itemNames of <widget>",
				"set the itemNames of <widget> to <pNames>"
			],
			"display syntax":[
				"get the itemNames of <i>widget</i>"
			],
			"associations":["com.fmpromigrator.widget.buttonbar"],
			"summary":"The names of the button items",
			"parameters":[{
				"name":"pNames",
				"type":"",
				"refparam":"false",
				"description":"A comma delimited list of the button item names."
			}],
			"description":"The names of the button items of the widget.\n\nAdding an item to the <itemNames> of the buttonbar causes a new button item to\nbe created with the default icon and label. Removing an item from the\n<itemNames> causes the corresponding item to be removed from the button\nitems."
		},{
			"id":"5",
			"name":"opaque",
			"display name":"opaque",
			"type":"property",
			"syntax":[
				"get the <opaque> of <widget>",
				"set the <opaque> of <widget> to {true | false}"
			],
			"display syntax":[
				"get the <i>opaque</i> of <i>widget</i>"
			],
			"associations":["com.fmpromigrator.widget.buttonbar"],
			"summary":"Whether the background of the buttonbar is opaque",
			"description":"If the <opaque> property is `false`, the background of the buttonbar will be\ntransparent."
		},{
			"id":"6",
			"name":"itemstyle",
			"display name":"itemStyle",
			"type":"property",
			"syntax":[
				"get the itemStyle of <widget>",
				"set the itemStyle of <widget> to <pItemStyle>"
			],
			"display syntax":[
				"get the itemStyle of <i>widget</i>"
			],
			"associations":["com.fmpromigrator.widget.buttonbar"],
			"summary":"The display style of the widget",
			"parameters":[{
				"name":"pItemStyle",
				"type":"",
				"refparam":"false",
				"description":"The display style\n-\"icons\": display icons only\n-\"text\": display names only\n-\"both\": display icons and names"
			}],
			"description":"Use the <itemStyle> property to control which elements of the button items are displayed."
		},{
			"id":"7",
			"name":"desiredheight",
			"display name":"desiredHeight",
			"type":"property",
			"syntax":[
				"get the desiredHeight of <widget>"
			],
			"display syntax":[
				"get the desiredHeight of <i>widget</i>"
			],
			"associations":["com.fmpromigrator.widget.buttonbar"],
			"summary":"The height that the widget ought to be displayed at",
			"examples":[{
				"script":"create widget as \"com.fmpromigrator.widget.buttonbar\"\nset the height of it to the desiredHeight of it"
			}],
			"description":"Returns the height that the widget ought to be displayed at"
		},{
			"id":"8",
			"name":"editmode",
			"display name":"editMode",
			"type":"property",
			"syntax":[
				"get the editMode of <widget>",
				"set the editMode of <widget> to (true | false)"
			],
			"display syntax":[
				"get the editMode of <i>widget</i>"
			],
			"associations":["com.fmpromigrator.widget.buttonbar"],
			"summary":"Whether the widget is in edit mode or not",
			"description":"This is currently an experimental feature of the navigation bar, and allows the icons to\nbe changed by clicking on the outlined regions, and new items to be added with the add button."
		},{
			"id":"9",
			"name":"itemlabels",
			"display name":"itemLabels",
			"type":"property",
			"syntax":[
				"get the itemLabels of <widget>",
				"set the itemLabels of <widget> to <pLabels>"
			],
			"display syntax":[
				"get the itemLabels of <i>widget</i>"
			],
			"associations":["com.fmpromigrator.widget.buttonbar"],
			"summary":"The labels displayed for the navigation items",
			"parameters":[{
				"name":"pLabels",
				"type":"",
				"refparam":"false",
				"description":"A comma delimited list of labels."
			}],
			"description":"The display labels for button items of the widget. Adding an item to the\n<itemLabels> causes a new button item to be created with the default icon\nand name.\n\n**Note:** Removing an item from the <itemLabels> does not cause the\ncorresponding item to be removed from the button items, but merely resets\nit to the default label."
		},{
			"id":"10",
			"name":"hiliteditemicons",
			"display name":"hilitedItemIcons",
			"type":"property",
			"syntax":[
				"get the hilitedItemIcons of <widget>",
				"set the hilitedItemIcons of <widget> to <pIcons>"
			],
			"display syntax":[
				"get the hilitedItemIcons of <i>widget</i>"
			],
			"associations":["com.fmpromigrator.widget.buttonbar"],
			"summary":"The icons for the navigation items when pressed (hilited)",
			"parameters":[{
				"name":"pIcons",
				"type":"",
				"refparam":"false",
				"description":"A comma delimited list icon names."
			}],
			"description":"The icons for the button items of the widget to be shown when the buttons are\nin the pressed state.  Adding an item to the <hilitedItemIcons> causes a new button\nitem to be created with the default label and name.\n\nThe name of an icon must be one of the names returned by the iconNames() function of the com.livecode.library.iconSVG library.\n\nEach icon name must be one of the predefined graphics provided by the \"IconSVG\"\nlibrary.  You can get a list of available predefined path names by running\n`put iconNames()` in the Message Box.\n\n**Note:** Removing an item from the <hilitedItemIcons> does not cause the\ncorresponding item to be removed from the button items, but merely resets\nit to the default icon.",
			"references":{
				"property":["itemIcons"]
			}
		},{
			"id":"11",
			"name":"itemarray",
			"display name":"itemArray",
			"type":"property",
			"syntax":[
				"get the itemArray of <widget>",
				"set the itemArray of <widget> to <pButtonArray>"
			],
			"display syntax":[
				"get the itemArray of <i>widget</i>"
			],
			"associations":["com.fmpromigrator.widget.buttonbar"],
			"summary":"The <itemArray> is all the collective data of the icons and labels of the buttonbar",
			"parameters":[{
				"name":"pButtonArray",
				"type":"",
				"refparam":"false",
				"description":"An array containing all the buttonbar data:"
			}],
			"description":"The <itemArray> is a numerically keyed array, each element of which contains\nan array describing the label and icons of the navigation item at that index.\n\nThe structure of the <itemArray> is:\n\n```\n{ key (integer): The index of the navigation item\n\tvalue (array): The array containing the data for the item at this index\n\t{ key : \"label\"\n\t\tvalue (string): The label of this item\n\t\tkey : \"name\"\n\t\tvalue (string): The name of this item\n\t\tkey : \"icon_name\"\n\t\tvalue (string) : The name of the icon to display when the item is not highlighted\n\t\tkey : \"hilited_icon_name\"\n\t\tvalue (string) : The name of the icon to display when the item is highlighted\n\t}\n}\n```\n\nAny individual keys (\"label\", \"icon_name\", \"hilited_icon_name\") missing when\nsetting the <itemArray> will be added, and set to their defaults - \"circle\" for\nthe icons, and \"New Item\" for the label.\n\n**Note:** Setting the <ButtonArrayData> to a non-numerically keyed array will cause an\nerror to be thrown\n"
		},{
			"id":"12",
			"name":"com.fmpromigrator.widget.buttonbar",
			"display name":"com.fmpromigrator.widget.buttonbar",
			"type":"widget",
			"display syntax":[
				"com.fmpromigrator.widget.buttonbar"
			],
			"description":"This widget is a button bar.\n\nContributed by .com Solutions Inc.\nwww.FmProMigrator.com"
		}]
	}