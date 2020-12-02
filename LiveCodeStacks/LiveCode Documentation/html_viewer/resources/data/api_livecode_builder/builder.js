{
			"id":"livecode_builder-1",
			"name":"listofstringparsedaslistofnumber",
			"display name":"ListOfStringParsedAsListOfNumber",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Operand> parsed as list of number"
			],
			"display syntax":[
				"<i>Operand</i> parsed as list of number"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Parses a list of strings as a list of numbers",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a list of strings."
			}],
			"examples":[{
				"script":"variable tListOfString as List\nvariable tListOfNum as List\nsplit \"1,2,3,4\" by \",\" into tListOfString\nput tListOfString parsed as list of number into tNum -- tListOfNum contains [ 1, 2, 3, 4 ]"
			},{
				"script":"variable tList as List\nput [\"1\", \"b\", \"3\"] parsed as list of number into tList\n\nvariable tElt as Number\nrepeat with tElt from 1 up to the number of elements in tList\n\tif tList[tElt] is nothing then\n\t\tput 0 into element tElt of tList\n\tend if\nend repeat\n\n// tList contains [ 1, 0, 3 ]"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"<Operand> parsed as a list of numbers."
			}],
			"description":"Use <ListOfStringParsedAsListOfNumber> when you want to interpret pieces of text numerically. If the input list contains elements which cannot be parsed as numbers, the corresponding element will be nothing.\n\n*Note:* It is an error if any element of <Operand> is not a string.\n"
		},{
			"id":"livecode_builder-2",
			"name":"plusunaryoperator",
			"display name":"PlusUnaryOperator",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"+ <Operand>"
			],
			"display syntax":[
				"+ <i>Operand</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Unary plus operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput +5 into tVar -- tVar contains 5"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The result of evaluating <Operand>."
			}],
			"description":"The unary plus operator is a no-op on the predefined numeric types.",
			"tags":["math"]
		},{
			"id":"livecode_builder-3",
			"name":"numberformattedasstring",
			"display name":"NumberFormattedAsString",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Operand> formatted as string"
			],
			"display syntax":[
				"<i>Operand</i> formatted as string"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Formats a numeric value as a string",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tString as String\nvariable tNum as Number\nput 5 into tNum\nput tNum formatted as string into tString -- tString contains \"5\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"<Operand> formatted as a string."
			}],
			"description":"Use <NumberFormattedAsString> when you want to manipulate a numeric value as text."
		},{
			"id":"livecode_builder-4",
			"name":"plusoperator",
			"display name":"PlusOperator",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Left> + <Right>"
			],
			"display syntax":[
				"<i>Left</i> + <i>Right</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Binary plus operator.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput 5 + 4 + 3 into tVar -- tVar contains 12"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The result of adding the numbers <Left> and <Right>."
			}],
			"description":"Binary plus operator.",
			"tags":["math"]
		},{
			"id":"livecode_builder-5",
			"name":"minusunaryoperator",
			"display name":"MinusUnaryOperator",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"- <Operand>"
			],
			"display syntax":[
				"- <i>Operand</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Unary minus operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput -(5 + 4) into tVar -- tVar contains -9"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The negated result of evaluating <Operand>."
			}],
			"description":"Unary minus operator.",
			"tags":["math"]
		},{
			"id":"livecode_builder-6",
			"name":"numberisgreaterthanorequaltonumber",
			"display name":"NumberIsGreaterThanOrEqualToNumber",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Left> &gt;= <Right>"
			],
			"display syntax":[
				"<i>Left</i> &gt;= <i>Right</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Greater than or equal to relation.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if <Left> is greater than or equal to <Right>, and false otherwise."
			}],
			"description":"Greater than or equal to relation."
		},{
			"id":"livecode_builder-7",
			"name":"addnumberto",
			"display name":"AddNumberTo",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"add <Value> to <Target>"
			],
			"display syntax":[
				"add <i>Value</i> to <i>Target</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Adds <Value> to <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a numeric container."
			},{
				"name":"Value",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"    variable tVar as Number\n    put 2 into tVar\n    add 10 to tVar -- tVar contains 12"
			}],
			"description":"Adds the number <Value> to <Target>.\n\n>*Note:* It is a syntax error if <Target> does not evaluate to a variable.",
			"tags":["math"]
		},{
			"id":"livecode_builder-8",
			"name":"subtractnumberfrom",
			"display name":"SubtractNumberFrom",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"subtract <Value> from <Target>"
			],
			"display syntax":[
				"subtract <i>Value</i> from <i>Target</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Subtracts <Value> from <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a numeric variable."
			},{
				"name":"Value",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as real\nput 10 into tVar\nsubtract 2.5 from tVar -- tVar contains 7.5"
			}],
			"description":"Subtracts the number <Value> from <Target>.\n\n>*Note:* It is a syntax error if <Target> does not evaluate to a variable.",
			"tags":["math"]
		},{
			"id":"livecode_builder-9",
			"name":"numberislessthannumber",
			"display name":"NumberIsLessThanNumber",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Left> &lt; <Right>"
			],
			"display syntax":[
				"<i>Left</i> &lt; <i>Right</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Less than relation.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if <Left> is less than <Right>, and false otherwise."
			}],
			"description":"Less than relation.",
			"tags":["math"]
		},{
			"id":"livecode_builder-10",
			"name":"numberisequaltonumber",
			"display name":"NumberIsEqualToNumber",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Left> = <Right>"
			],
			"display syntax":[
				"<i>Left</i> = <i>Right</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Equal to relation.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if <Left> is equal to <Right>, and false otherwise."
			}],
			"description":"Equal to relation.",
			"tags":["math"]
		},{
			"id":"livecode_builder-11",
			"name":"dividenumberby",
			"display name":"DivideNumberBy",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"divide <Target> by <Value>"
			],
			"display syntax":[
				"divide <i>Target</i> by <i>Value</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Divides <Target> by <Value>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a numeric variable."
			},{
				"name":"Value",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar\nput 3 into tVar\ndivide tVar by 2 -- tVar contains 1.5"
			}],
			"description":"Divides the number <Target> by <Value>.\n\n>*Note:* It is a syntax error if <Target> does not evaluate to a variable.",
			"tags":["math"]
		},{
			"id":"livecode_builder-12",
			"name":"numberislessthanorequaltonumber",
			"display name":"NumberIsLessThanOrEqualToNumber",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Left> &lt;= <Right>"
			],
			"display syntax":[
				"<i>Left</i> &lt;= <i>Right</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Less than or equal to relation.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if <Left> is less than or equal to <Right>, and false otherwise."
			}],
			"description":"Less than or equal to relation.",
			"tags":["math"]
		},{
			"id":"livecode_builder-13",
			"name":"overoperator",
			"display name":"OverOperator",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Left> / <Right>"
			],
			"display syntax":[
				"<i>Left</i> / <i>Right</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Binary division operator.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput 3 / 5 into tVar -- tVar contains 0.6"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The result of dividing the number <Left> by <Right>."
			}],
			"description":"Binary division operator.",
			"tags":["math"]
		},{
			"id":"livecode_builder-14",
			"name":"numberisnotnumber",
			"display name":"NumberIsNotNumber",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Left> is not <Right>"
			],
			"display syntax":[
				"<i>Left</i> is not <i>Right</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Determines if <Left> is not <Right>.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if <Left> is not equal to <Right>, and false otherwise."
			}],
			"description":"Returns the opposite of the <NumberIsNumber> operator.",
			"references":{
				"operator":["NumberIsNumber"]
			},
			"tags":["math"]
		},{
			"id":"livecode_builder-15",
			"name":"modoperator",
			"display name":"ModOperator",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Left> mod <Right>"
			],
			"display syntax":[
				"<i>Left</i> mod <i>Right</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Mod operator.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput 4^((7 - 1)/2) mod 7 into tVar -- tVar contains 1"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"<Left> mod <Right>."
			}],
			"description":"Returns the remainder on dividing <Left> by <Right>"
		},{
			"id":"livecode_builder-16",
			"name":"com.livecode.arithmetic",
			"display name":"com.livecode.arithmetic",
			"library":"livecode_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.arithmetic"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"This library consists of the basic arithmetic operations of standard library of LiveCode Builder.",
			"description":"This library consists of the basic arithmetic operations of standard library of LiveCode Builder."
		},{
			"id":"livecode_builder-17",
			"name":"parsestringasnumber",
			"display name":"ParseStringAsNumber",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"parse <Operand> as number"
			],
			"display syntax":[
				"parse <i>Operand</i> as number"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Parses a string as an number",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a string."
			}],
			"examples":[{
				"script":"variable tString as String\nput \"5.6\" into tString\nparse tString as number -- the result is 5.6"
			},{
				"script":"variable tResult as optional String\nvariable tNum as optional Number\n\nparse \"aaaa\" as number into tNum\n\nif tNum is nothing then\n\tput \"unable to parse string\" into tResult\nend if"
			}],
			"value":[{
				"name":"the result",
				"type":"",
				"description":"<Operand> parsed as a number, or nothing."
			}],
			"description":"Use <ParseStringAsNumber> when you want to interpret text numerically. The result is nothing if parsing was not possible."
		},{
			"id":"livecode_builder-18",
			"name":"parselistofstringaslistofnumber",
			"display name":"ParseListOfStringAsListOfNumber",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"parse <Operand> as list of number"
			],
			"display syntax":[
				"parse <i>Operand</i> as list of number"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Parses a list of strings as a list of numbers",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a list of strings."
			}],
			"examples":[{
				"script":"variable tListOfString as List\nvariable tListOfNum as List\nsplit \"1,2,3,4\" by \",\" into tListOfString\nparse tListOfString as list of number into tListOfNum\n-- tListOfNum contains [ 1, 2, 3, 4 ]"
			}],
			"value":[{
				"name":"the result",
				"type":"",
				"description":"<Operand> parsed as a list of numbers."
			}],
			"description":"Use <ParseListOfStringAsListOfNumber> when you want to interpret pieces of text numerically. If the input list contains elements which cannot be parsed as numbers, the corresponding element will be nothing.\n\n*Note:* It is an error if any element of <Operand> is not a string."
		},{
			"id":"livecode_builder-19",
			"name":"minusoperator",
			"display name":"MinusOperator",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Left> - <Right>"
			],
			"display syntax":[
				"<i>Left</i> - <i>Right</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Binary minus operator.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput 5 - 3 - 1 into tVar -- tVar contains 1"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The result of subtracting the number <Right> from <Left>."
			}],
			"description":"Binary minus operator.",
			"tags":["math"]
		},{
			"id":"livecode_builder-20",
			"name":"wrapoperator",
			"display name":"WrapOperator",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Left> wrap <Right>"
			],
			"display syntax":[
				"<i>Left</i> wrap <i>Right</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Wrap operator.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput 5 wrap 3 into tVar -- tVar contains 2"
			},{
				"script":"variable tVar as Number\nput -3 wrap 3 into tVar -- tVar contains -3"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"If x >= 0, then x wrap y returns ((x-1) mod abs(y)) + 1.\n\t\t\tIf x < 0, then x wrap y returns -((x-1) mod abs(y)) + 1."
			}],
			"description":"Use wrap to ensure the value of a variable stays within a specified range. For x,y > 0, \nsuccessive values of x wrap y cycle through the sequence 1, 2, ..., y."
		},{
			"id":"livecode_builder-21",
			"name":"numberisnumber",
			"display name":"NumberIsNumber",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Left> is <Right>"
			],
			"display syntax":[
				"<i>Left</i> is <i>Right</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Determines if <Left> is <Right>.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if <Left> is equal to <Right>, and false otherwise."
			}],
			"description":"Identical to the <NumberIsEqualToNumber> operator.",
			"references":{
				"operator":["NumberIsEqualToNumber"]
			},
			"tags":["math"]
		},{
			"id":"livecode_builder-22",
			"name":"formatnumberasstring",
			"display name":"FormatNumberAsString",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"format <Operand> as string"
			],
			"display syntax":[
				"format <i>Operand</i> as string"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Formats a numeric value as a string",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tNum as Number\nvariable tString as String\nput 5 into tNum\nformat tNum as string into tString\n-- tString contains \"5\""
			}],
			"value":[{
				"name":"the result",
				"type":"",
				"description":"<Operand> formatted as a string."
			}],
			"description":"Use <FormatNumberAsString> when you want to manipulate a numeric value as text."
		},{
			"id":"livecode_builder-23",
			"name":"timesoperator",
			"display name":"TimesOperator",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Left> * <Right>"
			],
			"display syntax":[
				"<i>Left</i> * <i>Right</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Binary multiplication operator.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput 3 * 5 into tVar -- tVar contains 15"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The result of multiplying the numbers <Left> and <Right>."
			}],
			"description":"Binary multiplication operator.",
			"tags":["math"]
		},{
			"id":"livecode_builder-24",
			"name":"stringparsedasnumber",
			"display name":"StringParsedAsNumber",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Operand> parsed as number"
			],
			"display syntax":[
				"<i>Operand</i> parsed as number"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Parses a string as an number",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a string."
			}],
			"examples":[{
				"script":"variable tString as String\nvariable tNum as optional Number\nput \"5.6\" into tString\nput tString parsed as number into tNum -- tNum contains 5.6"
			},{
				"script":"variable tNum as optional Number\nput \"aaaa\" parsed as number into tNum\n\nif tNum is nothing then\n\tput 0 into tNum\nend if\n\n// tNum contains 0"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"<Operand> parsed as a number, or nothing."
			}],
			"description":"Use <StringParsedAsNumber> when you want to interpret text numerically. nothing is returned if parsing was not possible."
		},{
			"id":"livecode_builder-25",
			"name":"numberisgreaterthannumber",
			"display name":"NumberIsGreaterThanNumber",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Left> &gt; <Right>"
			],
			"display syntax":[
				"<i>Left</i> &gt; <i>Right</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Greater than relation.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if <Left> is greater than <Right>, and false otherwise."
			}],
			"description":"Greater than relation."
		},{
			"id":"livecode_builder-26",
			"name":"multiplynumberby",
			"display name":"MultiplyNumberBy",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"multiply <Target> by <Value>"
			],
			"display syntax":[
				"multiply <i>Target</i> by <i>Value</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Multiplies <Target> by <Value>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a numeric variable."
			},{
				"name":"Value",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput 2 into tVar\nmultiply tVar by 2 -- tVar contains 4"
			}],
			"description":"Multiplies the number <Target> by <Value>.\n\n>*Note:* It is a syntax error if <Target> does not evaluate to a variable.",
			"tags":["math"]
		},{
			"id":"livecode_builder-27",
			"name":"commandname",
			"display name":"CommandName",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"the command name"
			],
			"display syntax":[
				"the command name"
			],
			"associations":["com.livecode.system"],
			"summary":"The command name",
			"examples":[{
				"script":"-- Program that only succeeds if it's run as the \"true\"\n-- command.\nvariable tCommand as String\nput the command name into tCommand\nif tCommand ends with \"true\" then\n\tquit with status 0\nelse\n\tquit with status 1\nend if"
			}],
			"description":"Evaluates to the name that was used to execute the program, possibly\nincluding path information.\n"
		},{
			"id":"livecode_builder-28",
			"name":"systemerrorcode",
			"display name":"SystemErrorCode",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"the system error code"
			],
			"display syntax":[
				"the system error code"
			],
			"associations":["com.livecode.system"],
			"summary":"The system error code.",
			"description":"Evaluates to the current platform-dependent system error code.\n\n- On Windows, returns the result of `GetLastError()`.\n\n- On other platforms, returns the current value of `errno`.\n\n> **Note:** The system error code may be modified or cleared by any\n> syntax that interacts with the operating system (e.g. by performing\n> input or output).  You should check the system error code as soon as\n> possible after any platform operation that might fail.",
			"tags":["system"]
		},{
			"id":"livecode_builder-29",
			"name":"operatingsystem",
			"display name":"OperatingSystem",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"the operating system"
			],
			"display syntax":[
				"the operating system"
			],
			"associations":["com.livecode.system"],
			"summary":"The operating system",
			"examples":[{
				"script":"if the operating system is \"linux\" then\n\t- Platform specific-code\nend if"
			}],
			"description":"Returns a string describing the operating system that LiveCode is\nrunning on.  The possible values are:\n\n* \"windows\" - 32-bit and 64-bit Windows\n* \"mac\" - Desktop OS X\n* \"ios\" - iOS (iPhone and iPad)\n* \"android\" - Android Linux devices\n* \"linux\" - All other Linux platforms",
			"tags":["system"]
		},{
			"id":"livecode_builder-30",
			"name":"resetsystemerror",
			"display name":"ResetSystemError",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"reset system error"
			],
			"display syntax":[
				"reset system error"
			],
			"associations":["com.livecode.system"],
			"summary":"Clear the system error code.",
			"description":"Reset the system error code to its platform-dependent default (\"no\nerror\") value.",
			"tags":["system"]
		},{
			"id":"livecode_builder-31",
			"name":"commandarguments",
			"display name":"CommandArguments",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"the command arguments"
			],
			"display syntax":[
				"the command arguments"
			],
			"associations":["com.livecode.system"],
			"summary":"The command arguments",
			"examples":[{
				"script":"-- Program that only succeeds if it's run as the \"true\"\n-- command.\nvariable tCommand as String\nput the command name into tCommand\nif tCommand ends with \"true\" then\n\tquit with status 0\nelse\n\tquit with status 1\nend if"
			}],
			"description":"Evaluates to a list of command-line arguments passed to the program.\nSome arguments may not be passed in if they are \"used up\" by the\nLiveCode run-time environment (for example, the LiveCode IDE will\ndetect and \"use\" the `-mmap` argument).\n\n> **Note:** No filename conversion is performed on command line\n> arguments, so some processing may be required before using a command\n> line argument with any of the file handling syntax provided by the\n> `com.livecode.file` module."
		},{
			"id":"livecode_builder-32",
			"name":"quitwithstatus",
			"display name":"QuitWithStatus",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"quit [ with status <Status> ]"
			],
			"display syntax":[
				"quit [ with status <i>Status</i> ]"
			],
			"associations":["com.livecode.system"],
			"summary":"Quit the application",
			"examples":[{
				"script":"-- Quit, indicating that the application ran successfully (code 0)\nquit\n\n-- Quit, with a specific error code\nquit with status 42"
			}],
			"description":"Exit the program immediately and unconditionally, returning a status\nnumber to the operating system.  If no status is provided, the default\nvalue of 0 is used.",
			"tags":["system"]
		},{
			"id":"livecode_builder-33",
			"name":"architecture",
			"display name":"Architecture",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"the architecture"
			],
			"display syntax":[
				"the architecture"
			],
			"associations":["com.livecode.system"],
			"summary":"The architecture",
			"examples":[{
				"script":"    if the architecture is \"x86_64\" then\n        -- Do something x86_64 specific\n    end if"
			}],
			"description":"Returns a string describing the instruction set architecture\nthat is being used by the machine LiveCode is running on.\nThe possible values are:\n\n* \"x86\" - 32-bit x86 builds\n* \"x86_64\" - 64-bit x86 builds\n* \"arm\" - 32-bit arm builds\n* \"arm64\" - 64-bit arm builds\n* \"js\" - Emscripten",
			"tags":["system"]
		},{
			"id":"livecode_builder-34",
			"name":"systemerrordescription",
			"display name":"SystemErrorDescription",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"the system error message"
			],
			"display syntax":[
				"the system error message"
			],
			"associations":["com.livecode.system"],
			"summary":"The system error description.",
			"description":"Evaluates to a string describing the current platform-dependent system\nerror code.\n\n> **Note:** The system error code may be modified or cleared by any\n> syntax that interacts with the operating system (e.g. by performing\n> input or output).  You should check the system error code as soon as\n> possible after any platform operation that might fail.",
			"tags":["system"]
		},{
			"id":"livecode_builder-35",
			"name":"com.livecode.system",
			"display name":"com.livecode.system",
			"library":"livecode_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.system"
			],
			"associations":["com.livecode.system"],
			"summary":"This library provides low-level system functionality for modular\nLiveCode programs.",
			"description":"This library provides low-level system functionality for modular\nLiveCode programs."
		},{
			"id":"livecode_builder-36",
			"name":"scriptobjectdoesnotexist",
			"display name":"ScriptObjectDoesNotExist",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Object> does not exist"
			],
			"display syntax":[
				"<i>Object</i> does not exist"
			],
			"associations":["com.livecode.engine"],
			"summary":"Tests the existence of a script object.",
			"parameters":[{
				"name":"Object",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a <ScriptObject>."
			}],
			"examples":[{
				"script":"variable tObject as ScriptObject\nresolve script object \"card 5 of this stack\"\nput the result into tObject\nif tObject does not exist then\n\tlog \"No such card\"\nend if"
			}],
			"value":[{
				"name":"the result",
				"type":"",
				"description":"True if the object <Object> exists, and false otherwise."
			}],
			"description":"Use to test the non-existence or otherwise of a script object, for example after attempting to resolve the object from a string using <ResolveScriptObject|resolve script object>",
			"references":{
				"statement":["ResolveScriptObject"]
			},
			"tags":["engine","script engine"]
		},{
			"id":"livecode_builder-37",
			"name":"myresourcesfolder",
			"display name":"MyResourcesFolder",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"my resources folder"
			],
			"display syntax":[
				"my resources folder"
			],
			"associations":["com.livecode.engine"],
			"summary":"Returns the resources folder for the current module",
			"examples":[{
				"script":"    -- Work out the filename of a file in the module's\n    -- resources folder.\n    variable tResourceFile as String\n    put my resources folder & \"/foobar.txt\" into tResourceFile"
			}],
			"description":"Returns the full path to the resources folder for the calling\nmodule. If there is no resources folder attached to the calling\nmodule, nothing is returned.",
			"tags":["engine","script engine"]
		},{
			"id":"livecode_builder-38",
			"name":"resolvefilepath",
			"display name":"ResolveFilePath",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"resolve file <FilePath> [ relative to <Object> ]"
			],
			"display syntax":[
				"resolve file <i>FilePath</i> [ relative to <i>Object</i> ]"
			],
			"associations":["com.livecode.engine"],
			"summary":"Resolves a file path relative to a script object.",
			"parameters":[{
				"name":"FilePath",
				"type":"",
				"refparam":"false",
				"description":"A string relative or full file path."
			},{
				"name":"Object",
				"type":"",
				"refparam":"false",
				"description":"The string describing the script object."
			}],
			"examples":[{
				"script":"variable tObject as ScriptObject\nresolve script object \"this stack\"\nput the result into tObject\nvariable tIconPath as String\nif tObject exists then\n    resolve file \"images/icon.png\" relative to tObject\n    put the result into tIconPath\nend if"
			}],
			"value":[{
				"name":"the result",
				"type":"",
				"description":"The resolved file path string."
			}],
			"description":"Use the <ResolveFilePath|resolve file path> statement to resolve a relative file\npath in LCB using the same file path resolution semantics used by LCS.\nIf no object is specified the file path will be resolved relative to either\n`the defaultStack` or if in a widget handler the stack the current widget is on.\n\n>*Note:* An error is thrown if this syntax is used in a context where access\nto script objects is not allowed.",
			"tags":["engine","script engine"]
		},{
			"id":"livecode_builder-39",
			"name":"ownerofscriptobject",
			"display name":"OwnerOfScriptObject",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the owner of <Object>"
			],
			"display syntax":[
				"the owner of <i>Object</i>"
			],
			"associations":["com.livecode.engine"],
			"summary":"Get the parent object of a script object.",
			"parameters":[{
				"name":"Object",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a <ScriptObject>."
			}],
			"examples":[{
				"script":"public handler MyName() returns String\n\tget property \"short name\" of my script object\n\treturn the result\nend handler\n\npublic handler OnMouseUp() returns nothing\n\t// Send a message to the widget's parent so it can handle the click\n\tsend \"widgetClicked\" to the owner of my script object with [ MyName() ]\nend handler"
			}],
			"value":[{
				"name":"the result",
				"type":"",
				"description":"The <ScriptObject> that is the owner of <Object>."
			}],
			"description":"Use to get the script object that contains a script object.\n\n>*Note:* An error is thrown if the script object does not exist.",
			"tags":["engine","script engine"]
		},{
			"id":"livecode_builder-40",
			"name":"scriptobject",
			"display name":"ScriptObject",
			"library":"livecode_builder",
			"type":"type",
			"syntax":[
				"ScriptObject"
			],
			"display syntax":[
				"ScriptObject"
			],
			"associations":["com.livecode.engine"],
			"summary":"An opaque type corresponding to a LiveCode script object.",
			"description":"Use the <ResolveScriptObject|resolve script object>, or <MyScriptObject|my script object> to obtain an object of type <ScriptObject>",
			"references":{
				"statement":["ResolveScriptObject"],
				"expression":["MyScriptObject"]
			},
			"tags":["engine","script engine"]
		},{
			"id":"livecode_builder-41",
			"name":"com.livecode.engine",
			"display name":"com.livecode.engine",
			"library":"livecode_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.engine"
			],
			"associations":["com.livecode.engine"],
			"summary":"This library provides operations for interacting with LiveCode Script from LiveCode Builder.",
			"description":"This library provides operations for interacting with LiveCode Script from LiveCode Builder."
		},{
			"id":"livecode_builder-42",
			"name":"theitemdelimiter",
			"display name":"TheItemDelimiter",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"the item delimiter"
			],
			"display syntax":[
				"the item delimiter"
			],
			"associations":["com.livecode.engine"],
			"summary":"Fetches the `itemDelimiter` property from script context",
			"examples":[{
				"script":"  -- Split a string into a list using the item delimiter\n   variable tItems\n   put \"alice,bob,eve\" into tItems\n   split tItems by the item delimiter\n   -- tItems is now a list: [\"alice\", \"bob\", \"eve\"]"
			}],
			"description":"Fetches the calling (script) handler's `itemDelimiter` property, or the comma\nchar if no script context is available.",
			"references":{
				"expression":["TheColumnDelimiter","TheLineDelimiter","TheRowDelimiter"]
			},
			"tags":["engine","script engine"]
		},{
			"id":"livecode_builder-43",
			"name":"keyisdown",
			"display name":"KeyIsDown",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"the ( shift |             command |             control |             alt |             option |             caps lock ) key is ( currently ) down"
			],
			"display syntax":[
				"the ( shift |             command |             control |             alt |             option |             caps lock ) key is ( currently ) down"
			],
			"associations":["com.livecode.engine"],
			"summary":"Returns true if the key is down",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The state of the key"
			}],
			"description":"Use 'the ... key is down' to determine if the key was down at the start of the\ncurrent event. Use 'the ... key is currently down' to determine if the key is\ndown at the time it is being checked.\n\nAs in script, command and control keys return the state of the same key on non-macOS\nsystems while on macOS they are separate keys. Additionally alt and option are\ndifferent names for the same key.",
			"tags":["engine"]
		},{
			"id":"livecode_builder-44",
			"name":"thecolumndelimiter",
			"display name":"TheColumnDelimiter",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"the column delimiter"
			],
			"display syntax":[
				"the column delimiter"
			],
			"associations":["com.livecode.engine"],
			"summary":"Fetches the `columnDelimiter` property from script context",
			"examples":[{
				"script":"   -- Split a string into a list using the column delimiter\n   variable tItems\n   put \"alice\\tbob\\teve\" into tItems\n   split tItems by the column delimiter\n   -- tItems is now a list: [\"alice\", \"bob\", \"eve\"]"
			}],
			"description":"Fetches the calling (script) handler's `columnDelimiter` property, or horizontal\ntab (U+0009) if no script context is available.",
			"references":{
				"expression":["TheRowDelimiter","TheItemDelimiter","TheLineDelimiter"]
			},
			"tags":["engine","script engine"]
		},{
			"id":"livecode_builder-45",
			"name":"thelinedelimiter",
			"display name":"TheLineDelimiter",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"the line delimiter"
			],
			"display syntax":[
				"the line delimiter"
			],
			"associations":["com.livecode.engine"],
			"summary":"Fetches the `lineDelimiter` property from script context",
			"examples":[{
				"script":"  -- Split a string into a list using the line delimiter\n   variable tItems\n   put \"alice\\nbob\\neve\" into tItems\n   split tItems by the line delimiter\n   -- tItems is now a list: [\"alice\", \"bob\", \"eve\"]"
			}],
			"description":"Fetches the calling (script) handler's `lineDelimiter` property, or linefeed\n(U+000A) if no script context is available.",
			"references":{
				"expression":["TheColumnDelimiter","TheItemDelimiter","TheRowDelimiter"]
			},
			"tags":["engine","script engine"]
		},{
			"id":"livecode_builder-46",
			"name":"childrenofscriptobject",
			"display name":"ChildrenOfScriptObject",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the children of <Object>"
			],
			"display syntax":[
				"the children of <i>Object</i>"
			],
			"associations":["com.livecode.engine"],
			"summary":"Get the child objects of a script object.",
			"parameters":[{
				"name":"Object",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a <ScriptObject>"
			}],
			"examples":[{
				"script":"public handler GetSiblings(in pObject as ScriptObject) returns List\n\t// Return the sibling objects of an object\n\treturn the children of the owner of pObject\nend handler"
			},{
				"script":"// Unset the highlight of all the controls in a group\nresolve script object \"group \\qcheckboxes\\q of this card\"\nvariable tObject\nrepeat for each element tObject in the children of the result\n\tset property \"hilite\" of tObject to false\nend repeat"
			}],
			"value":[{
				"name":"the result",
				"type":"",
				"description":"A list of <ScriptObject>s that are contained within <Object>."
			}],
			"description":"Use to get the script objects contained within a script object.\n\n>*Note:* An error is thrown if the script object does not exist.",
			"tags":["engine","script engine"]
		},{
			"id":"livecode_builder-47",
			"name":"sendtoscriptobject",
			"display name":"SendToScriptObject",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"send ( function | command ) <Message> [ to <Object> ] [ with <Arguments> ]"
			],
			"display syntax":[
				"send ( function | command ) <i>Message</i> [ to <i>Object</i> ] [ with <i>Arguments</i> ]"
			],
			"associations":["com.livecode.engine"],
			"summary":"Send a message to a script object.",
			"parameters":[{
				"name":"Message",
				"type":"",
				"refparam":"false",
				"description":"The message to dispatch."
			},{
				"name":"Object",
				"type":"",
				"refparam":"false",
				"description":"The script object to dispatch the message to."
			},{
				"name":"Arguments",
				"type":"",
				"refparam":"false",
				"description":"A list of arguments for the message."
			}],
			"examples":[{
				"script":"public handler OnMouseUp() returns nothing\n\t// Send a message to the script so it can handle it.\n\tsend \"buttonClicked\" to my script object\nend handler"
			},{
				"script":"// myScriptFunction takes three arguments and performs some kind of calculation\n\nvariable tObject as ScriptObject\nresolve script object \"this stack\"\nput the result into tObject\nsend function \"myScriptFunction\" to tObject with [ 2, 3, 4 ]\n\n// the result contains the return value of 'myScriptFunction'"
			}],
			"value":[{
				"name":"the result",
				"type":"",
				"description":"The result of the message dispatch"
			}],
			"description":"Sends a message to the given script object and waits for it to finish so that it\ncan return a value.\n\nIf no target object is specified, the message is sent to the widget's\nscript object (if used in a root widget module), or to the default stack\notherwise.\n\nAfter a send, 'the message was handled' predicate can be used to determine if the\nmessage passed through the message path untouched.\n\n>*Note:* An error is thrown if this syntax is used in a context where access\nto script objects is not allowed.",
			"tags":["engine","script engine"]
		},{
			"id":"livecode_builder-48",
			"name":"messagewasnothandled",
			"display name":"MessageWasNotHandled",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"the message was not handled"
			],
			"display syntax":[
				"the message was not handled"
			],
			"associations":["com.livecode.engine"],
			"summary":"Determines whether a message was handled",
			"examples":[{
				"script":"public handler OnMouseUp() returns nothing\n\tsend \"buttonClicked\" to my script object\n\tif the message was not handled then\n\t\tlog \"The message was not handled\"\n\tend if\nend handler"
			}],
			"description":"Determines if a dispatched message was handled by any script objects in the message path.",
			"tags":["engine","script engine"]
		},{
			"id":"livecode_builder-49",
			"name":"scriptobjectexists",
			"display name":"ScriptObjectExists",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Object> exists"
			],
			"display syntax":[
				"<i>Object</i> exists"
			],
			"associations":["com.livecode.engine"],
			"summary":"Tests the existence of a script object.",
			"parameters":[{
				"name":"Object",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a <ScriptObject>."
			}],
			"examples":[{
				"script":"variable tObject as ScriptObject\nresolve script object \"card 5 of this stack\"\nput the result into tObject\nif tObject exists then\n\tset property \"name\" of tObject to \"Card5\"\nelse\n\tlog \"No such card\"\nend if"
			}],
			"value":[{
				"name":"the result",
				"type":"",
				"description":"True if the object <Object> exists, and false otherwise."
			}],
			"description":"Use to test the existence or otherwise of a script object, for example after attempting to resolve the object from a string using <ResolveScriptObject | resolve script object>",
			"references":{
				"statement":["ResolveScriptObject"]
			},
			"tags":["engine","script engine"]
		},{
			"id":"livecode_builder-50",
			"name":"caller",
			"display name":"Caller",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"the caller"
			],
			"display syntax":[
				"the caller"
			],
			"associations":["com.livecode.engine"],
			"summary":"The caller's script object",
			"examples":[{
				"script":"public handler NotifyMe() returns nothing\n\tpost \"notify\" to the caller\nend handler"
			}],
			"description":"Returns the script object which called the handler at the beginning\nof the current chain of LiveCode Builder handler execution.",
			"tags":["engine","script engine"]
		},{
			"id":"livecode_builder-51",
			"name":"propertyofscriptobject",
			"display name":"PropertyOfScriptObject",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"property <Property> of <Object>"
			],
			"display syntax":[
				"property <i>Property</i> of <i>Object</i>"
			],
			"associations":["com.livecode.engine"],
			"summary":"The property of a script object.",
			"parameters":[{
				"name":"Property",
				"type":"",
				"refparam":"false",
				"description":"The name of the property to manipulate"
			},{
				"name":"Object",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a <ScriptObject>."
			}],
			"examples":[{
				"script":"public handler OnMouseUp() returns nothing\n\tset property \"name\" of my script object to \"Clicked Widget\"\nend handler"
			},{
				"script":"resolve script object \"this stack\"\nset property \"invisible\" of the result to true\n    get property \"script\" of my script object"
			}],
			"description":"Use to manipulate properties of a script object.\n\n>*Note:* An error is thrown if the script object does not exist.\n\n>*Note:* An error is thrown if this syntax is used in a context where access\nto script objects is not allowed.",
			"tags":["engine","script engine"]
		},{
			"id":"livecode_builder-52",
			"name":"therowdelimiter",
			"display name":"TheRowDelimiter",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"the row delimiter"
			],
			"display syntax":[
				"the row delimiter"
			],
			"associations":["com.livecode.engine"],
			"summary":"Fetches the `rowDelimiter` property from script context",
			"examples":[{
				"script":"  -- Split a string into a list using the row delimiter\n   variable tItems\n   put \"alice\\nbob\\neve\" into tItems\n   split tItems by the row delimiter\n   -- tItems is now a list: [\"alice\", \"bob\", \"eve\"]"
			}],
			"description":"Fetches the calling (script) handler's `rowDelimiter` property, or linefeed\n(U+000A) if no script context is available.",
			"references":{
				"expression":["TheColumnDelimiter","TheItemDelimiter","TheLineDelimiter"]
			},
			"tags":["engine","script engine"]
		},{
			"id":"livecode_builder-53",
			"name":"executescript",
			"display name":"ExecuteScript",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"execute script <Script> [ in <Object> ] [ with <Arguments> ]"
			],
			"display syntax":[
				"execute script <i>Script</i> [ in <i>Object</i> ] [ with <i>Arguments</i> ]"
			],
			"associations":["com.livecode.engine"],
			"summary":"Executes some LiveCode script.",
			"parameters":[{
				"name":"Script",
				"type":"",
				"refparam":"false",
				"description":"The script to execute."
			},{
				"name":"Object",
				"type":"",
				"refparam":"false",
				"description":"The object to execute the script in."
			},{
				"name":"Arguments",
				"type":"",
				"refparam":"false",
				"description":"A list of arguments for the script."
			}],
			"examples":[{
				"script":"public handler SnapshotMe() returns nothing\n\tvariable tVar as String\n\tget property \"number\" of my script object\n\tput the result formatted as string into tVar\n\n\t// Create a snapshot from the rect of the widget\n\texecute script \"import snapshot from rect (the rect of widget \" & tVar & \") of widget \" & tVar\nend handler"
			},{
				"script":"   public handler SnapshotMeAtSize(in pWidth as Integer, in pHeight as Integer) returns nothing\n\t\tvariable tVar as String\n\t\tget property \"number\" of my script object\n\t\tput the result formatted as string into tVar\n\n\t\t// Create a snapshot from the rect of the widget\n\t\texecute script \"import snapshot from me at size at size param(1),param(2)\" \\\n            with [ pWidth, pHeight ]\n\tend handler"
			}],
			"description":"Executes the given fragment of LiveCode script in the context of the target\nscript object. If no object is specified then execution occurs in the context of\n`this card of the defaultStack` in a library handler or the current widget\ninstance script object if in a widget handler.\n\nThe list of arguments is accessible from the script fragment using the\n`paramCount()` and `param()` functions.\n\n>*Note:* An error is thrown if this syntax is used in a context where access\nto script objects is not allowed.",
			"tags":["engine","script engine"]
		},{
			"id":"livecode_builder-54",
			"name":"log",
			"display name":"Log",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"log <Value> [ with <Arguments> ]"
			],
			"display syntax":[
				"log <i>Value</i> [ with <i>Arguments</i> ]"
			],
			"associations":["com.livecode.engine"],
			"summary":"Logs a value.",
			"parameters":[{
				"name":"Value",
				"type":"",
				"refparam":"false",
				"description":"The value to log."
			},{
				"name":"Arguments",
				"type":"",
				"refparam":"false",
				"description":"A list of arguments."
			}],
			"examples":[{
				"script":"variable tList as List\nget property \"name\" of my script object\npush the result onto tList\n\nget property \"id\" of my script object\npush the result onto tList\n\nlog \"Widget %@ has id %@\" with tList"
			},{
				"script":"variable tList as List\nput [1,2,3,4] into tList\nlog tList"
			}],
			"description":"The log command triggers a logChanged message with the \naccumulated log messages since the logChanged message \nwas last handled.\nThis can be handled in LiveCode Script, for example:\n\n    on logChanged pLog\n        write pLog to stdout\n    end logChanged\n\nIf using the 'with arguments' form, the <Value> must be a String.\nEach occurrence of %@ in the String is replaced by a string\nrepresentation of subsequent values in the <Arguments> List.",
			"tags":["engine","script engine"]
		},{
			"id":"livecode_builder-55",
			"name":"posttoscriptobject",
			"display name":"PostToScriptObject",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"post <Message> [ to <Object> ] [ with <Arguments> ]"
			],
			"display syntax":[
				"post <i>Message</i> [ to <i>Object</i> ] [ with <i>Arguments</i> ]"
			],
			"associations":["com.livecode.engine"],
			"summary":"Post a message to a script object.",
			"parameters":[{
				"name":"Message",
				"type":"",
				"refparam":"false",
				"description":"The message to dispatch."
			},{
				"name":"Object",
				"type":"",
				"refparam":"false",
				"description":"The script object to dispatch the message to."
			},{
				"name":"Arguments",
				"type":"",
				"refparam":"false",
				"description":"A list of arguments for the message."
			}],
			"examples":[{
				"script":"public handler OnMouseUp() returns nothing\n\t// Send a message to the script so it can handle it.\n\tpost \"buttonClicked\" to my script object\nend handler"
			}],
			"description":"Post a message to the given script object and returns immediately. Posting a message\nwill cause the message to be sent at the next wait point (usually when the current\nevent has finished being handled).\n\nIf no target object is specified, the message is posted to the widget's\nscript object (if used in a root widget module), or to the widget's\nparent (if used in a non-root widget module), or to the default stack\notherwise.",
			"tags":["engine","script engine"]
		},{
			"id":"livecode_builder-56",
			"name":"messagewashandled",
			"display name":"MessageWasHandled",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"the message was handled"
			],
			"display syntax":[
				"the message was handled"
			],
			"associations":["com.livecode.engine"],
			"summary":"Determines whether a message was handled",
			"examples":[{
				"script":"public handler OnMouseUp() returns nothing\n\tsend \"buttonClicked\" to my script object\n\tif the message was handled then\n\t\treturn\n\tend if\n\tlog \"The message was not handled\"\nend handler"
			}],
			"description":"Determines if a dispatched message was handled by any script objects in the message path.",
			"tags":["engine","script engine"]
		},{
			"id":"livecode_builder-57",
			"name":"numbertonsnumber",
			"display name":"NumberToNSNumber",
			"library":"livecode_builder",
			"type":"handler",
			"syntax":[
				"NumberToNSNumber(<pNumber>)"
			],
			"display syntax":[
				"NumberToNSNumber(<i>pNumber</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Convert a Number into an Objective-C number",
			"parameters":[{
				"name":"pNumber",
				"type":"",
				"refparam":"false",
				"description":"The Number to convert"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A Objective-C object of type NSNumber\n\nDescription\nUse <NumberToNSNumber> to convert a variable of type Number to an Objective-C\nnumber object (NSNumber)."
			}],
			"description":"Convert a Number into an Objective-C number"
		},{
			"id":"livecode_builder-58",
			"name":"listfromnsarray",
			"display name":"ListFromNSArray",
			"library":"livecode_builder",
			"type":"handler",
			"syntax":[
				"ListFromNSArray(<pObjcArray>)"
			],
			"display syntax":[
				"ListFromNSArray(<i>pObjcArray</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Convert a Objective-C array into a List",
			"parameters":[{
				"name":"pObjcNumber",
				"type":"",
				"refparam":"false",
				"description":"The NSArray to convert"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A Number value\n\nDescription\nUse <ListFromNSArray> to convert an Objective-C array object (NSArray) to\na variable of type List."
			}],
			"description":"Convert a Objective-C array into a List"
		},{
			"id":"livecode_builder-59",
			"name":"datatonsdata",
			"display name":"DataToNSData",
			"library":"livecode_builder",
			"type":"handler",
			"syntax":[
				"DataToNSData(<pData>)"
			],
			"display syntax":[
				"DataToNSData(<i>pData</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Convert a Data into an Objective-C data",
			"parameters":[{
				"name":"pData",
				"type":"",
				"refparam":"false",
				"description":"The Data to convert"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A Objective-C object of type NSData\n\nDescription\nUse <DataToNSData> to convert a variable of type Data to an Objective-C\ndata object (NSData)."
			}],
			"description":"Convert a Data into an Objective-C data"
		},{
			"id":"livecode_builder-60",
			"name":"createobjcinformaldelegatewithcontext",
			"display name":"CreateObjcInformalDelegateWithContext",
			"library":"livecode_builder",
			"type":"handler",
			"syntax":[
				"CreateObjcInformalDelegateWithContext(<pProtocol>,<pHandlerMapping>,<pContext>)"
			],
			"display syntax":[
				"CreateObjcInformalDelegateWithContext(<i>pProtocol</i>,<i>pHandlerMapping</i>,<i>pContext</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Create an Objective-C object with LCB implementations of methods of an informal protocol.",
			"parameters":[{
				"name":"pProtocol",
				"type":"",
				"refparam":"false",
				"description":"A list of foreign handlers which bind to protocol methods"
			},{
				"name":"pHandlerMapping",
				"type":"",
				"refparam":"false",
				"description":"A mapping from the protocol's selector names to LCB handlers"
			}],
			"examples":[{
				"script":"foreign handler Objc_NSPortMessageGetMsgId(in pMessage as ObjcId) returns UInt32 \\\n    binds to \"objc:NSPort.-msgid\"\n\nhandler HandlePortMessageCallback(in pPortIndex as Integer, in pMessage as ObjcId) returns nothing\n    post \"portMessage\" with [mPortList[pPortIndex][\"name\"], \\\n                             Objc_NSPortMessageGetMsgId(pMessage)]\nend handler\n\nforeign handler Objc_NSPortDelegateHandlePortMessage(in pTarget as ObjcId, in pPortMessage as ObjcId) returns nothing \\\n    binds to \"objc:.-handlePortMessage:\"\n\npublic handler GetNSPortDelegate(in pPortIndex as Integer)\n    return CreateObjcInformalDelegateWithContext([Objc_NSPortDelegateHandlePortMessage], \\\n                                                 { \"handlePortMessage:\": \\\n                                                   HandlePortMessageCalback }, \\\n                                                 pPortIndex)\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"An Objective-C object which calls the appropriate LCB handler\non receiving any of the specified selectors. "
			}],
			"description":"Use the <CreateObjcInformalDelegateWithContext> handler to create instances of \nObjective-C delegate classes with LCB implementations of protocol \nmethods, when the Protocol object cannot be found at runtime. This \noccurs for example when all of the protocol methods are optional. \n\nInstead of a protocol name (as with <CreateObjcDelegateWithContext>), \nthe <pProtocol> argument of <CreateObjcInformalDelegateWithContext> must \nbe a proper list of foreign handlers for each of the methods of the \nprotocol for which LCB callbacks are provided in the <pHandlerMapping> \narray.\n\nOnce created an informal delegate can be set in the usual way on an \ninstance of the appropriate class (by binding to `-setDelegate:`), \ntypically so that callbacks triggered by user interaction with a widget \ncan be handled in LCB.\n\nIf no context is required to be passed as a parameter to the callback,\nuse <CreateObjcInformalDelegate>.\n\nIf the protocol can be resolved at runtime, it is generally easier to \nuse the <CreateObjcDelegateWithContext> handler.",
			"references":{
				"handler":["CreateObjcDelegate","CreateObjcDelegateWithContext","CreateObjcInformalDelegate"]
			}
		},{
			"id":"livecode_builder-61",
			"name":"arrayfromnsdictionary",
			"display name":"ArrayFromNSDictionary",
			"library":"livecode_builder",
			"type":"handler",
			"syntax":[
				"ArrayFromNSDictionary(<pObjcArray>)"
			],
			"display syntax":[
				"ArrayFromNSDictionary(<i>pObjcArray</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Convert a Objective-C dictionary into a Array",
			"parameters":[{
				"name":"pObjcNumber",
				"type":"",
				"refparam":"false",
				"description":"The NSDictionary to convert"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"An Array value\n\nDescription\nUse <ArrayFromNSDictionary> to convert an Objective-C dictionary object (NSDictionary) to\na variable of type Array."
			}],
			"description":"Convert a Objective-C dictionary into a Array"
		},{
			"id":"livecode_builder-62",
			"name":"stringtonsstring",
			"display name":"StringToNSString",
			"library":"livecode_builder",
			"type":"handler",
			"syntax":[
				"StringToNSString(<pString>)"
			],
			"display syntax":[
				"StringToNSString(<i>pString</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Convert a String into an Objective-C string",
			"parameters":[{
				"name":"pString",
				"type":"",
				"refparam":"false",
				"description":"The String to convert"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A Objective-C object of type NSString\n\nDescription\nUse <StringToNSString> to convert a variable of type String to an Objective-C\nstring object (NSString)."
			}],
			"description":"Convert a String into an Objective-C string"
		},{
			"id":"livecode_builder-63",
			"name":"createobjcdelegate",
			"display name":"CreateObjcDelegate",
			"library":"livecode_builder",
			"type":"handler",
			"syntax":[
				"CreateObjcDelegate(<pProtocol>,<pHandlerMapping>)"
			],
			"display syntax":[
				"CreateObjcDelegate(<i>pProtocol</i>,<i>pHandlerMapping</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Create an Objective-C object with LCB implementations of methods of a protocol.",
			"parameters":[{
				"name":"pProtocol",
				"type":"",
				"refparam":"false",
				"description":"The name of the protocol"
			},{
				"name":"pHandlerMapping",
				"type":"",
				"refparam":"false",
				"description":"A mapping from the protocol's selector names to LCB handlers"
			}],
			"examples":[{
				"script":"handler ControlIsValidObjectCallback(in pControl as ObjcId, in pObject as ObjcId) returns CSChar\n    return 1\nend handler\n\npublic handler GetNSControlTextEditingDelegate() returns ObjcObject\n    return CreateObjcDelegate(\"NSControlTextEditingDelegate\", \\\n                              { \"control:isValidObject:\": \\\n                                ControlIsValidObjectCallback })\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"An Objective-C object which calls the appropriate LCB handler\non receiving any of the specified selectors. "
			}],
			"description":"Use the <CreateObjcDelegate> handler to create instances of Objective-C \ndelegate classes with LCB implementations of protocol methods. Once \ncreated these can be set in the usual way on an instance of the \nappropriate class (by binding to `-setDelegate:`), typically so that \ncallbacks triggered by user interaction with a widget can be handled in\nLCB.\n\nIf any context is required to be passed as a parameter to the callback,\nuse <CreateObjcDelegateWithContext>.\n\nSome protocols consist of purely optional methods. In this case the \ninformation about the protocol's methods are not available from the     \nobjective-c runtime API. In this situation <CreateObjcInformalDelegate> \nshould be used instead.",
			"references":{
				"handler":["CreateObjcDelegateWithContext","CreateObjcInformalDelegate","CreateObjcInformalDelegateWithContext"]
			}
		},{
			"id":"livecode_builder-64",
			"name":"createobjcdelegatewithcontext",
			"display name":"CreateObjcDelegateWithContext",
			"library":"livecode_builder",
			"type":"handler",
			"syntax":[
				"CreateObjcDelegateWithContext(<pProtocol>,<pHandlerMapping>,<pContext>)"
			],
			"display syntax":[
				"CreateObjcDelegateWithContext(<i>pProtocol</i>,<i>pHandlerMapping</i>,<i>pContext</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Create an Objective-C object with LCB implementations of methods of a protocol.",
			"parameters":[{
				"name":"pProtocol",
				"type":"",
				"refparam":"false",
				"description":"The name of the protocol"
			},{
				"name":"pHandlerMapping",
				"type":"",
				"refparam":"false",
				"description":"A mapping from the protocol's selector names to LCB handlers"
			},{
				"name":"pContext",
				"type":"",
				"refparam":"false",
				"description":"Any context required in the callback."
			}],
			"examples":[{
				"script":"handler NumberOfItemsInMenuCallback(in pContext as String, in pMenu as ObjcId) returns CLong\n    -- pContext is the tag for this menu\n    return the number of elements in mMenuArray[pContext]\nend handler\n\npublic handler GetNSMenuDelegate(in pMenuTag as String) returns ObjcObject\n    return CreateObjcDelegateWithContext(\"NSMenuDelegate\", \\\n                                           { \"numberOfItemsInMenu:\": \\\n                                           NumberOfItemsInMenuCallback }, \\\n                                           pMenuTag)\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"An Objective-C object which calls the appropriate LCB handler\non receiving any of the specified selectors. "
			}],
			"description":"Use the <CreateObjcDelegateWithContext> handler to create instances of \nObjective-C delegate classes with LCB implementations of protocol \nmethods. Once created these can be set in the usual way on an instance \nof the appropriate class (by binding to `-setDelegate:`), typically so \nthat callbacks triggered by user interaction with a widget can be\nhandled in LCB.\n\nIf no context is required to be passed as a parameter to the callback,\nuse <CreateObjcDelegate>.\n\nSome protocols consist of purely optional methods. In this case the \ninformation about the protocol's methods are not available from the     \nobjective-c runtime API. In this situation \n<CreateObjcInformalDelegateWithContext> should be used instead.",
			"references":{
				"handler":["CreateObjcDelegate","CreateObjcInformalDelegate","CreateObjcInformalDelegateWithContext"]
			}
		},{
			"id":"livecode_builder-65",
			"name":"pointertoobjcobject",
			"display name":"PointerToObjcObject",
			"library":"livecode_builder",
			"type":"handler",
			"syntax":[
				"PointerToObjcObject(<pPointer>)"
			],
			"display syntax":[
				"PointerToObjcObject(<i>pPointer</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Convert a Pointer into an ObjcObject",
			"parameters":[{
				"name":"pPointer",
				"type":"",
				"refparam":"false",
				"description":"The Pointer to convert"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"An ObjcObject wrapping the Pointer"
			}],
			"description":"Use <PointerToObjcObject> to convert a variable of type Pointer to one of type\nObjcObject."
		},{
			"id":"livecode_builder-66",
			"name":"listtonsarray",
			"display name":"ListToNSArray",
			"library":"livecode_builder",
			"type":"handler",
			"syntax":[
				"ListToNSArray(<pList>)"
			],
			"display syntax":[
				"ListToNSArray(<i>pList</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Convert a List into an Objective-C array",
			"parameters":[{
				"name":"pNumber",
				"type":"",
				"refparam":"false",
				"description":"The List to convert"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A Objective-C object of type NSArray\n\nDescription\nUse <ListToNSArray> to convert a variable of type List to an Objective-C\narray object (NSArray)."
			}],
			"description":"Convert a List into an Objective-C array"
		},{
			"id":"livecode_builder-67",
			"name":"pointerfromobjcobject",
			"display name":"PointerFromObjcObject",
			"library":"livecode_builder",
			"type":"handler",
			"syntax":[
				"PointerFromObjcObject(<pObjcObject>)"
			],
			"display syntax":[
				"PointerFromObjcObject(<i>pObjcObject</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Convert an ObjcObject into a Pointer",
			"parameters":[{
				"name":"pObjcObject",
				"type":"",
				"refparam":"false",
				"description":"The ObjcObject to convert"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The Pointer wrapped by the ObjcObject"
			}],
			"description":"Use <PointerFromObjcObject> to convert a variable of type ObjcObject to one of\ntype Pointer."
		},{
			"id":"livecode_builder-68",
			"name":"datafromnsdata",
			"display name":"DataFromNSData",
			"library":"livecode_builder",
			"type":"handler",
			"syntax":[
				"DataFromNSData(<pObjcData>)"
			],
			"display syntax":[
				"DataFromNSData(<i>pObjcData</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Convert a Objective-C data into a Data",
			"parameters":[{
				"name":"pObjcData",
				"type":"",
				"refparam":"false",
				"description":"The NSData to convert"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A Data value\n\nDescription\nUse <DataFromNSData> to convert an Objective-C data object (NSData) to\na variable of type Data.\n"
			}],
			"description":"Convert a Objective-C data into a Data"
		},{
			"id":"livecode_builder-69",
			"name":"arraytonsdictionary",
			"display name":"ArrayToNSDictionary",
			"library":"livecode_builder",
			"type":"handler",
			"syntax":[
				"ArrayToNSDictionary(<pArray>)"
			],
			"display syntax":[
				"ArrayToNSDictionary(<i>pArray</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Convert an Array into an Objective-C dictionary",
			"parameters":[{
				"name":"pNumber",
				"type":"",
				"refparam":"false",
				"description":"The Array to convert"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A Objective-C object of type NSDictionary\n\nDescription\nUse <ArrayToNSDictionary> to convert a variable of type Array to an Objective-C\ndictionary object (NSDictionary)."
			}],
			"description":"Convert an Array into an Objective-C dictionary"
		},{
			"id":"livecode_builder-70",
			"name":"createobjcinformaldelegate",
			"display name":"CreateObjcInformalDelegate",
			"library":"livecode_builder",
			"type":"handler",
			"syntax":[
				"CreateObjcInformalDelegate(<pProtocol>,<pHandlerMapping>)"
			],
			"display syntax":[
				"CreateObjcInformalDelegate(<i>pProtocol</i>,<i>pHandlerMapping</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Create an Objective-C object with LCB implementations of methods of an informal protocol.",
			"parameters":[{
				"name":"pProtocol",
				"type":"",
				"refparam":"false",
				"description":"A list of foreign handlers which bind to protocol methods"
			},{
				"name":"pHandlerMapping",
				"type":"",
				"refparam":"false",
				"description":"A mapping from the protocol's selector names to LCB handlers"
			}],
			"examples":[{
				"script":"foreign handler Objc_NSPortMessageGetMsgId(in pMessage as ObjcId) returns UInt32 \\\n    binds to \"objc:NSPort.-msgid\"\n\nhandler HandlePortMessageCallback(in pMessage as ObjcId) returns nothing\n    post \"portMessage\" with [Objc_NSPortMessageGetMsgId(pMessage)]\nend handler\n\nforeign handler Objc_NSPortDelegateHandlePortMessage(in pTarget as ObjcId, in pPortMessage as ObjcId) returns nothing \\\n    binds to \"objc:.-handlePortMessage:\"\n\npublic handler GetNSPortDelegate()\n    return CreateObjcInformalDelegate([Objc_NSPortDelegateHandlePortMessage], \\\n                                      { \"handlePortMessage:\": \\\n                                        HandlePortMessageCalback })\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"An Objective-C object which calls the appropriate LCB handler\non receiving any of the specified selectors. "
			}],
			"description":"Use the <CreateObjcInformalDelegate> handler to create instances of \nObjective-C delegate classes with LCB implementations of protocol \nmethods, when the Protocol object cannot be found at runtime. This \noccurs for example when all of the protocol methods are optional. \n\nInstead of a protocol name (as with <CreateObjcDelegate>), the \n<pProtocol> argument of <CreateObjcInformalDelegate> must be a proper \nlist of foreign handlers for each of the methods of the protocol for \nwhich LCB callbacks are provided in the <pHandlerMapping> array.\n\nOnce created an informal delegate can be set in the usual way on an \ninstance of the appropriate class (by binding to `-setDelegate:`), \ntypically so that callbacks triggered by user interaction with a widget \ncan be handled in LCB.\n\nIf any context is required to be passed as a parameter to the callback,\nuse <CreateObjcInformalDelegateWithContext>.\n\nIf the protocol can be resolved at runtime, it is generally easier to \nuse the <CreateObjcDelegate> handler.",
			"references":{
				"handler":["CreateObjcDelegate","CreateObjcDelegateWithContext","CreateObjcInformalDelegateWithContext"]
			}
		},{
			"id":"livecode_builder-71",
			"name":"com.livecode.objc",
			"display name":"com.livecode.objc",
			"library":"livecode_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.objc"
			],
			"associations":["com.livecode.objc"],
			"summary":"This module provides utility handlers for converting to and from Obj-C types.",
			"description":"This module provides utility handlers for converting to and from Obj-C types."
		},{
			"id":"livecode_builder-72",
			"name":"numberfromnsnumber",
			"display name":"NumberFromNSNumber",
			"library":"livecode_builder",
			"type":"handler",
			"syntax":[
				"NumberFromNSNumber(<pObjcNumber>)"
			],
			"display syntax":[
				"NumberFromNSNumber(<i>pObjcNumber</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Convert a Objective-C number into a Number",
			"parameters":[{
				"name":"pObjcNumber",
				"type":"",
				"refparam":"false",
				"description":"The NSNumber to convert"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A Number value\n\nDescription\nUse <NumberFromNSNumber> to convert an Objective-C number object (NSNumber) to\na variable of type Number."
			}],
			"description":"Convert a Objective-C number into a Number"
		},{
			"id":"livecode_builder-73",
			"name":"stringfromnsstring",
			"display name":"StringFromNSString",
			"library":"livecode_builder",
			"type":"handler",
			"syntax":[
				"StringFromNSString(<pObjcString>)"
			],
			"display syntax":[
				"StringFromNSString(<i>pObjcString</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Convert a Objective-C string into a String",
			"parameters":[{
				"name":"pObjcString",
				"type":"",
				"refparam":"false",
				"description":"The NSString to convert"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A String value\n\nDescription\nUse <StringFromNSString> to convert an Objective-C string object (NSString) to\na variable of type String."
			}],
			"description":"Convert a Objective-C string into a String"
		},{
			"id":"livecode_builder-74",
			"name":"firstelementof",
			"display name":"FirstElementOf",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the first element of <Target>"
			],
			"display syntax":[
				"the first element of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Designates the first element in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"description":"Either locates the first element for use as the target container of another operation, or evaluates the first element as the source of another operation.\n\n>*Note:* It is an error if <Target> is empty.",
			"tags":["lists"]
		},{
			"id":"livecode_builder-75",
			"name":"com.livecode.list",
			"display name":"com.livecode.list",
			"library":"livecode_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.list"
			],
			"associations":["com.livecode.list"],
			"summary":"This library consists of the operations on lists included in the standard library of LiveCode Builder.",
			"description":"This library consists of the operations on lists included in the standard library of LiveCode Builder."
		},{
			"id":"livecode_builder-76",
			"name":"repeatforeachelementinlist",
			"display name":"RepeatForEachElementInList",
			"library":"livecode_builder",
			"type":"iterator",
			"syntax":[
				"element <Iterand>"
			],
			"display syntax":[
				"element <i>Iterand</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Repeat over the elements of a list",
			"parameters":[{
				"name":"Iterand",
				"type":"",
				"refparam":"false",
				"description":"Any variable of appropriate type."
			}],
			"examples":[{
				"script":"    variable tList as List\n    put [1, 1, 2, 3, 5, 8, 13] into tList\n\n    variable tRelist as List\n    variable tElement as any\n    put the empty list into tRelist\n\n    repeat for each element tElement in tList\n        push tElement onto tRelist\n    end repeat\n\n    // tRelist is the same as tList"
			}],
			"description":"Use repeat for each to perform an operation on each element of a list. On each iteration, the Iterand will contain the next element of the list being iterated over.\n>*Note:* If <Iterand> is typed, then an error will be thrown if the list being iterated over contains any elements of a different type.",
			"tags":["lists","control structures"]
		},{
			"id":"livecode_builder-77",
			"name":"splicebeforeelementoflist",
			"display name":"SpliceBeforeElementOfList",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"splice <Source> before element <Index> of <Target>"
			],
			"display syntax":[
				"splice <i>Source</i> before element <i>Index</i> of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Inserts each of the elements of <Source> into <Target> before element at index <Index>.",
			"parameters":[{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			},{
				"name":"Index",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nput the empty list into tVar\n\nvariable tCount as Number\nput 2 into tCount\nrepeat 3 times\n\tpush tCount onto tVar\nend repeat\n\nvariable tVar2 as List\npush 1 onto tVar2\npush 5 onto tVar2\n\nsplice tVar before element 2 of tVar2 -- tVar2 contains the list [1,2,3,4,5]"
			}],
			"description":"Use the splice syntax to insert the elements of one list into another list. \n\n>*Note:* ```put tList before element 2 of tList2``` results in the insertion of tList **as an element**, i.e. tList2 becomes the list [element 1 of tList2,tList,element 2 of tList2, element 3 of tList2 ...]\n\n>*Note:* It is an error if <Index> is out of range.",
			"tags":["lists"]
		},{
			"id":"livecode_builder-78",
			"name":"listoffset",
			"display name":"ListOffset",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) offset of <Needle> in <Haystack>"
			],
			"display syntax":[
				"the ( first | last ) offset of <i>Needle</i> in <i>Haystack</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Find the first or last occurrence of <Needle> within <Haystack>\nTarget:An expression which evaluates to a list.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nvariable tOffset as Number\nput [\"a\", \"b\", \"c\", \"d\", \"b\", \"c\"]\nput the offset of [\"b\",\"c\"] in tVar into tOffset\n-- tOffset contains 2\n\nput the last offset of [\"b\", \"c\"] in tVar into tOffset\n-- tOffset contains 5"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the index from the start of <Haystack>."
			}],
			"description":"Use `the offset of` to find where a particular sub-list occurs within\na list.  <Haystack> is scanned for a sequence of elements that are\nequal to the elements of <Needle>, and the position of the start of\nthe sequence found is returned.  If neither the \"first offset\" nor\n\"last offset\" are specified, the index of the first matching sub-list\nfound is returned.  If no sub-list of <Haystack> is equal to <Needle>,\nthe return value is 0.",
			"tags":["lists"]
		},{
			"id":"livecode_builder-79",
			"name":"pushontolist",
			"display name":"PushOntoList",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"push <Value> onto ( front of | back of ) <Target>"
			],
			"display syntax":[
				"push <i>Value</i> onto ( front of | back of ) <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Pushes <Value> onto <Target>.",
			"parameters":[{
				"name":"Value",
				"type":"",
				"refparam":"false",
				"description":"Any expression."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nput the empty list into tVar\npush \"something\" onto tVar\npush \"something else\" onto front of tVar\n\nvariable tResult as String\nif tVar[1] is \"something else\" then\n\tput \"success\" into tResult\nend if"
			}],
			"description":"When <Value> is pushed onto <Target>, <Value> (by default) becomes the tail of the list, with an index one greater than the previous tail.\nUse the 'front of' variant to push onto the front of a list instead.",
			"tags":["lists"]
		},{
			"id":"livecode_builder-80",
			"name":"listindexafter",
			"display name":"ListIndexAfter",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) index of <Needle> after <After> in <Haystack>"
			],
			"display syntax":[
				"the ( first | last ) index of <i>Needle</i> after <i>After</i> in <i>Haystack</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Find the first or last occurrence of <Needle> within the tail of <Haystack>\nTarget:An expression which evaluates to a list.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to any value."
			},{
				"name":"After",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid index in Target."
			}],
			"examples":[{
				"script":"variable tVar as List\nvariable tOffset as Number\nput [\"a\", \"b\", \"c\", \"d\", \"b\"]\nput the index of \"b\" after 1 in tVar into tOffset\n--tOffset contains 2\n\nput the last index of \"b\" after 2 in tVar into tOffset\n--tOffset contains 5"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the index in <Haystack> relative to <After>."
			}],
			"description":"Use `the index ofâ¦ after` to find where particular elements occur\nwithin a list.  Starting from but not including the position <After>,\n<Haystack> is scanned for an element that is equal to <Needle>, and\nthe position of the element found is returned.  If no element of\n<Haystack> is equal to <Needle>, the return value is 0.",
			"tags":["lists"]
		},{
			"id":"livecode_builder-81",
			"name":"concatenatelists",
			"display name":"ConcatenateLists",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Left> & <Right>"
			],
			"display syntax":[
				"<i>Left</i> & <i>Right</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Concatenate two lists.\nLeftList:The List to go at the start of the resulting list.\nRightList:The List to go at the end of the resulting list.",
			"examples":[{
				"script":"variable tVar\nput [\"a\", \"b\"] & [\"c\", \"d\"] into tVar\n-- tVar contains [\"a\", \"b\", \"c\", \"d\"]"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A newly created List built from <LeftList> and <RightList>."
			}],
			"description":"Returns a newly-created list consisting of the elements of <LeftList>\nfollowed by the elements of <RightList>.",
			"tags":["lists"]
		},{
			"id":"livecode_builder-82",
			"name":"reverseelementsoflist",
			"display name":"ReverseElementsOfList",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"reverse <Target>"
			],
			"display syntax":[
				"reverse <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Reverse a list",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A list"
			}],
			"examples":[{
				"script":"variable tList\nput [1, 2, 3] into tList\nreverse tList\nexpect that tList is [3, 2, 1]"
			}],
			"description":"Reverses the order of elements in the <Target>.",
			"tags":["lists"]
		},{
			"id":"livecode_builder-83",
			"name":"deletesingletonelementof",
			"display name":"DeleteSingletonElementOf",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"delete element <Index> of <Target>"
			],
			"display syntax":[
				"delete element <i>Index</i> of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Deletes the element at index <Index> in <Target>.",
			"parameters":[{
				"name":"Index",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A list container."
			}],
			"description":"Removes the element at the given index from the list.\n\n>*Note:* It is an error if either <Index> is out of range.",
			"tags":["lists"]
		},{
			"id":"livecode_builder-84",
			"name":"singletonelementoflist",
			"display name":"SingletonElementOfList",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"element <Index> of <Target>"
			],
			"display syntax":[
				"element <i>Index</i> of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Designates the element at index <Index> in <Target>.",
			"parameters":[{
				"name":"Index",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nput [1,2,3] into tVar\nput \"A\" into element 1 of tVar -- tVar is [\"A\",2,3]\n\nvariable tNum as Number\nput element 2 of tVar into tNum -- tNum is 2"
			}],
			"description":"Either locates the element container at the given index for use as the target container of another operation, or evaluates the element at the given index as the source of another operation.\n\n>*Note:* It is an error if <Index> is out of range.",
			"tags":["lists"]
		},{
			"id":"livecode_builder-85",
			"name":"listendswithlist",
			"display name":"ListEndsWithList",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Source> ends with <Suffix>"
			],
			"display syntax":[
				"<i>Source</i> ends with <i>Suffix</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Determines whether <Source> ends with <Suffix>\nPrefix:An expression which evaluates to a list.",
			"parameters":[{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nput [1, 2, 3, 4, 5] into tVar\n\nvariable tEnds as Boolean\n// put tList ends with tList[5] into tEnds -- error: tList[5] is not a list \n\nput tList ends with element 1 to 5 of tList into tEnds -- tEnds is true"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Source> ends with <Suffix>."
			}],
			"description":"<Source> ends with <Suffix> if and only if the elements of <Suffix> occur as a final subsequence of the elements of <Source>.\n\n>*Note:* Since the empty list is a final subsequence of every list, every list ends with the empty list.",
			"tags":["lists"]
		},{
			"id":"livecode_builder-86",
			"name":"listindexbefore",
			"display name":"ListIndexBefore",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) index of <Needle> before <Before> in <Haystack>"
			],
			"display syntax":[
				"the ( first | last ) index of <i>Needle</i> before <i>Before</i> in <i>Haystack</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Find the first or last occurrence of <Needle> within the head of <Haystack>\nTarget:An expression which evaluates to a list.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to any value."
			},{
				"name":"Before",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid index in Target."
			}],
			"examples":[{
				"script":"variable tVar as List\nvariable tOffset as Number\nput [\"a\", \"b\", \"c\", \"d\", \"b\"]\nput the index of \"b\" before 2 in tVar into tOffset\n--tOffset contains 0\n\nput the first index of \"b\" before 5 in tVar into tOffset\n--tOffset contains 2"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the index in <Haystack>."
			}],
			"description":"Use `the index ofâ¦ before` to find where particular elements occur\nwithin a list.  <Haystack> is scanned for an element that is equal to\n<Needle>, stopping before the position <Before>, and the position of\nthe element found is returned.  If no element of <Haystack> is equal\nto <Needle>, the return value is 0.  If neither \"first\" nor \"last\" is\nspecified, the last matching element is found.",
			"tags":["lists"]
		},{
			"id":"livecode_builder-87",
			"name":"spliceintorangeoflist",
			"display name":"SpliceIntoRangeOfList",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"splice <Source> into element <Start> to <Finish> of <Target>"
			],
			"display syntax":[
				"splice <i>Source</i> into element <i>Start</i> to <i>Finish</i> of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Removes the elements of <Target> from <Start > to <Finish> and inserts each of the elements of\n                    <Source> into <Target> at <Start>.",
			"parameters":[{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			},{
				"name":"Start",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Finish",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nput the empty list into tVar\n\nvariable tCount as Number\nput 1 into tCount\nrepeat 3 times\n\tpush tCount onto tVar\nend repeat\n\nvariable tVar2 as List\npush \"these\" onto tVar2\npush \"are\" onto tVar2\npush \"unwanted\" onto tVar2\npush 4 onto tVar2\n\nsplice tVar into element 1 to 3 of tVar2 -- tVar2 contains the list [1,2,3,4]"
			}],
			"description":"Use the splice syntax to insert the elements of one list into another list. \n\n>*Note:* ```put tList into element 1 to 3 of tList2``` results in the removal of elements 1 to 3 of tList2 and the insertion of tList **as an element**, i.e. tList2 becomes the list [tList,element 4 of tList2, element 5 of tList2 ...]\n\n>*Note:* It is an error if either <Start> or <Finish> is out of range.",
			"tags":["lists"]
		},{
			"id":"livecode_builder-88",
			"name":"poplist",
			"display name":"PopList",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"pop ( front of | back of ) <Source>"
			],
			"display syntax":[
				"pop ( front of | back of ) <i>Source</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Pops the last element from <Source> into <Target>\nTarget:An expression which evaluates to a container.",
			"parameters":[{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nput the empty list into tVar\npush \"something\" onto tVar\npush \"something else\" onto tVar\n\nvariable tPopped as String\npop tVar into tPopped -- tPopped contains \"something else\""
			},{
				"script":"variable tList as List\nput [1,2,3] into tList\nvariable tNum as Number\npop front of tList into tNum -- tNum is 1, tList is [2,3]"
			}],
			"description":"When <Source> is popped into <Target>, the last element of the list <Source> is removed and put into the container <Target>.\nUse the 'front of' variant to pop from the front of a list instead.",
			"tags":["lists"]
		},{
			"id":"livecode_builder-89",
			"name":"headoflist",
			"display name":"HeadOfList",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the head of <Target>"
			],
			"display syntax":[
				"the head of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Returns the first element of <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nput the empty list into tVar\npush \"first element\" onto tVar\n\nvariable tResult as Boolean\nif the head of tVar is \"first element\" then\n\tput \"success\" into tResult\nend if"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The first element of <Target>"
			}],
			"description":"Returns the first element of the list <Target> without modifying <Target>.\n```\tthe head of tVar```\nis equivalent to using the <IndexedElementOfList> operator with index 1\n```\ttVar[1]```",
			"references":{
				"operator":["IndexedElementOfList"]
			},
			"tags":["lists"]
		},{
			"id":"livecode_builder-90",
			"name":"spliceintoelementoflist",
			"display name":"SpliceIntoElementOfList",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"splice <Source> into element <Index> of <Target>"
			],
			"display syntax":[
				"splice <i>Source</i> into element <i>Index</i> of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Removes the element of <Target> at <Index> and inserts each of the elements of <Source> into\n                    <Target> at <Index>.",
			"parameters":[{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			},{
				"name":"Index",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nput the empty list into tVar\n\nvariable tCount as Number\nput 1 into tCount\nrepeat 3 times\n\tpush tCount onto tVar\nend repeat\n\nvariable tVar2 as List\npush \"this is unwanted\" onto tVar2\npush 4 onto tVar2\n\nsplice tVar into element 1 of tVar2 -- tVar2 contains the list [1,2,3,4]"
			}],
			"description":"Use the splice syntax to insert the elements of one list into another list. \n\n>*Note:* ```put tList into element 1 of tList2``` results in the removal of element 1 of tList2 and the insertion of tList **as an element**, i.e. tList2 becomes the list [tList,element 2 of tList2, element 3 of tList2 ...]\n\n>*Note:* It is an error if <Index> is out of range.",
			"tags":["lists"]
		},{
			"id":"livecode_builder-91",
			"name":"listcontainselements",
			"display name":"ListContainsElements",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Target> contains <Needle>"
			],
			"display syntax":[
				"<i>Target</i> contains <i>Needle</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Determines if <Target> contains <Needle> as a subsequence.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"Any expression which evaluates to a list."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tList as List\nput [ \"a\", \"b\", \"c\", \"d\" ] into tList\n\nvariable tContains as Boolean\n\n// put tList contains tList[1] into tContains -- error: tList[1] is not a list \n\nput tList contains element 1 to 2 of tList into tContains -- tContains is true"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Target> contains <Needle>."
			}],
			"description":"<Target> contains <Needle> if and only if the elements of <Needle> occur as a subsequence of the elements of <Target>.\n\n>*Note:* Since \"\" is a subsequence of elements of every list, every list contains the empty list.",
			"tags":["lists"]
		},{
			"id":"livecode_builder-92",
			"name":"emptylist",
			"display name":"EmptyList",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"the empty list"
			],
			"display syntax":[
				"the empty list"
			],
			"associations":["com.livecode.list"],
			"summary":"Designates the list of length zero.",
			"examples":[{
				"script":"variable tVar as List\nvariable tCount as Number\nput the empty list into tVar\nput the number of elements in tVar into tCount -- tCount is 0"
			}],
			"description":"Use ```the empty list``` to initialise a list variable.",
			"tags":["lists"]
		},{
			"id":"livecode_builder-93",
			"name":"countelementsoflist",
			"display name":"CountElementsOfList",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the number of elements in <Target>"
			],
			"display syntax":[
				"the number of elements in <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Returns the number of elements in <Target>",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nput [1,2,3,4,5] into tVar\nvariable tNum as Number\nput the number of elements in tVar into tNum -- tNum is 5"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The number of elements in the list <Target>."
			}],
			"description":"Returns the number of elements in the list.",
			"tags":["lists"]
		},{
			"id":"livecode_builder-94",
			"name":"deleterangeelementof",
			"display name":"DeleteRangeElementOf",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"delete element <Start> to <Finish> of <Target>"
			],
			"display syntax":[
				"delete element <i>Start</i> to <i>Finish</i> of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Deletes the elements between indices <Start> and <Finish> in <Target>.",
			"parameters":[{
				"name":"Start",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Finish",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A list container."
			}],
			"description":"Removes the elements between the given indices from the list.\n\n>*Note:* It is an error if either <Start> or <Finish> are out of range.",
			"tags":["lists"]
		},{
			"id":"livecode_builder-95",
			"name":"indexedelementoflist",
			"display name":"IndexedElementOfList",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Target> [ <Index> ]"
			],
			"display syntax":[
				"<i>Target</i> [ <i>Index</i> ]"
			],
			"associations":["com.livecode.list"],
			"summary":"Designates the element at index <Index> in <Target>.\nSynonym:SingletonElementOf",
			"parameters":[{
				"name":"Index",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nput [1,2,3] into tVar\nput \"A\" into tVar[1] -- tVar is [\"A\",2,3]\n\nvariable tNum as Number\nput tVar[2] into tNum -- tNum is 2"
			}],
			"description":"Either locates the element container at the given index for use as the target container of another operation, or evaluates the element at the given index as the source of another operation.\n\n>*Note:* It is an error if <Index> is out of range.",
			"tags":["lists"]
		},{
			"id":"livecode_builder-96",
			"name":"tailoflist",
			"display name":"TailOfList",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the tail of <Target>"
			],
			"display syntax":[
				"the tail of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Returns the last element of <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nput the empty list into tVar\npush \"first element\" onto tVar\npush \"last element\" onto tVar\n\nvariable tResult as String\nif the tail of tVar is \"last element\" then\n\tput \"success\" into tResult\nend if"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The last element of <Target>"
			}],
			"description":"Returns the first element of the list <Target> without modifying <Target>.\n```\tthe tail of tVar```\nis equivalent to using the <IndexedElementOfList> operator with index -1\n```\ttVar[-1]```",
			"references":{
				"operator":["IndexedElementOfList"]
			},
			"tags":["lists"]
		},{
			"id":"livecode_builder-97",
			"name":"listislist",
			"display name":"ListIsList",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Left> is <Right>"
			],
			"display syntax":[
				"<i>Left</i> is <i>Right</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Determines whether <Left> and <Right> are equal or not.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tList as List\nput [\"a\", \"b\", \"c\"] into tList\nvariable tIs as Boolean\n\nput tList is [\"A\", \"b\", \"c\"] into tIs -- tIs is false\nput tList is element 1 to -1 of tList into tIs -- tIs is true"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Left> is identical to <Right>."
			}],
			"description":"Two lists are equal if each corresponding element is of comparable type, and if the default equality of that type holds between the elements.\nIn particular, this means that comparison between string elements is case sensitive.",
			"tags":["lists"]
		},{
			"id":"livecode_builder-98",
			"name":"listoffsetafter",
			"display name":"ListOffsetAfter",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) offset of <Needle> after <After> in <Haystack>"
			],
			"display syntax":[
				"the ( first | last ) offset of <i>Needle</i> after <i>After</i> in <i>Haystack</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Find the first or last occurrence of <Needle> within the tail of <Haystack>\nTarget:An expression which evaluates to a list.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to any list."
			},{
				"name":"After",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid index in Target."
			}],
			"examples":[{
				"script":"variable tVar as List\nvariable tOffset as Number\nput [\"a\", \"b\", \"c\", \"d\", \"b\", \"c\"]\nput the offset of [\"b\",\"c\"] after 1 in tVar into tOffset\n--tOffset contains 2\n\nput the last offset of [\"b\",\"c\"] after 1 in tVar into tOffset\n--tOffset contains 5"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the index in <Haystack> relative to <After>."
			}],
			"description":"Use `the offset ofâ¦ after` to find where a particular sub-list occurs\nwithin a list.  Starting from but not including the position <After>,\n<Haystack> is scanned for an sequence of elements that are equal to\nthe elements of <Needle>, and the position of the start of the\nsequence found is returned.  If neither the \"first offset\" nor \"last\noffset\" are specified, the position of the first matching sub-list\nfound is returned.  If no sub-list of <Haystack> starting after the\nposition <After> is equal to <Needle>, the return value is 0.",
			"tags":["lists"]
		},{
			"id":"livecode_builder-99",
			"name":"listindex",
			"display name":"ListIndex",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) index of <Needle> in <Haystack>"
			],
			"display syntax":[
				"the ( first | last ) index of <i>Needle</i> in <i>Haystack</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Find the first or last occurrence of <Needle> within <Haystack>\nTarget:An expression which evaluates to a list.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to any value."
			}],
			"examples":[{
				"script":"variable tVar as List\nvariable tOffset as Number\nput [\"a\", \"b\", \"c\", \"d\", \"b\"]\nput the index of \"b\" in tVar into tOffset\n-- tOffset contains 2\n\nput the last index of \"b\" in tVar into tOffset\n-- tOffset contains 5"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the index from the start of <Haystack>."
			}],
			"description":"Use `the index of` to find where particular elements occur within a\nlist.  <Haystack> is scanned for an element that is equal to <Needle>,\nand the position of the element found is returned.  If neither the\n\"first index\" nor \"last index\" are specified, the index of the first\nelement found is returned.  If no element of <Haystack> is equal to\n<Needle>, the return value is 0.",
			"tags":["lists"]
		},{
			"id":"livecode_builder-100",
			"name":"listoffsetbefore",
			"display name":"ListOffsetBefore",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) offset of <Needle> before <Before> in <Haystack>"
			],
			"display syntax":[
				"the ( first | last ) offset of <i>Needle</i> before <i>Before</i> in <i>Haystack</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Find the first or last occurrence of <Needle> within the head of <Haystack>\nTarget:An expression which evaluates to a List.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to List."
			},{
				"name":"Before",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid index in Target."
			}],
			"examples":[{
				"script":"variable tVar as List\nvariable tOffset as Number\nput [\"a\", \"b\", \"c\", \"d\", \"b\",\"c\"]\nput the offset of [\"b\",\"c\"] before 5 in tVar into tOffset\n--tOffset contains 2\n\nput the first offset of [\"b\",\"c\"] before 6 in tVar into tOffset\n--tOffset contains 2"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the index in <Haystack>."
			}],
			"description":"Use `the offset ofâ¦ before` to find where a particular sub-list occurs\nwithin a list.  <Haystack> is scanned for a sequence of elements that\nare equal to the elements of <Needle>, stopping before the position\n<Before>, and the position of the start of the sequence found is\nreturned.  If no sub-list of <Haystack> before the position <Before>\nis equal to <Needle>, the return value is 0.  If neither \"first\" nor\n\"last\" is specified, the last matching subsequence is found.",
			"tags":["lists"]
		},{
			"id":"livecode_builder-101",
			"name":"deletefirstelementof",
			"display name":"DeleteFirstElementOf",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"delete the first element of <Target>"
			],
			"display syntax":[
				"delete the first element of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Deletes the first element of <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A list container."
			}],
			"description":"Removes the first element of <Target>.\n\n>*Note:* It is an error if <Target> is the empty list.",
			"tags":["lists"]
		},{
			"id":"livecode_builder-102",
			"name":"spliceafterelementoflist",
			"display name":"SpliceAfterElementOfList",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"splice <Source> after element <Index> of <Target>"
			],
			"display syntax":[
				"splice <i>Source</i> after element <i>Index</i> of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Inserts each of the elements of <Source> into <Target> after element at index <Index>.",
			"parameters":[{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			},{
				"name":"Index",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nput the empty list into tVar\n\nvariable tCount as Number\nput 2 into tCount\nrepeat 3 times\n\tpush tCount onto tVar\nend repeat\n\nvariable tVar2 as List\npush 1 onto tVar2\npush 5 onto tVar2\n\nsplice tVar after element 1 of tVar2 -- tVar2 contains the list [1,2,3,4,5]"
			}],
			"description":"Use the splice syntax to insert the elements of one list into another list. \n\n>*Note:* ```put tList after element 1 of tList2``` results in the insertion of tList **as an element**, i.e. tList2 becomes the list [element 1 of tList2,tList,element 2 of tList2, element 3 of tList2 ...]\n\n>*Note:* It is an error if <Index> is out of range.",
			"tags":["lists"]
		},{
			"id":"livecode_builder-103",
			"name":"listbeginswithlist",
			"display name":"ListBeginsWithList",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Source> begins with <Prefix>"
			],
			"display syntax":[
				"<i>Source</i> begins with <i>Prefix</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Determines whether <Source> begins with <Prefix>",
			"parameters":[{
				"name":"Prefix",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			},{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nput [1, 2, 3, 4, 5] into tVar\n\nvariable tBegins as Boolean\n// put tList begins with tList[1] into tBegins -- error: tList[1] is not a list \n\nput tList begins with [1, 2] into tBegins -- tBegins is true"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Source> begins with <Prefix>."
			}],
			"description":"<Source> begins with <Prefix> if and only if the elements of <Prefix> occur as an initial subsequence of the elements of <Source>.\n\n>*Note:* Since the empty list is an initial subsequence of every list, every list begins with the empty list.",
			"tags":["lists"]
		},{
			"id":"livecode_builder-104",
			"name":"rangeelementsoflist",
			"display name":"RangeElementsOfList",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"element <Start> to <Finish> of <Target>"
			],
			"display syntax":[
				"element <i>Start</i> to <i>Finish</i> of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Designates the elements between indices <Start> and <Finish> in <Target>.",
			"parameters":[{
				"name":"Start",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Finish",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tList as List\nput [1,2,3] into tList\n\nput tList into element 1 to 2 of tList -- tList is [[1,2,3],3]"
			}],
			"description":"Either locates the element containers between the given indices for use as a list container for the target of another operation, or evaluates the elements between the given indices as a list.\n\n>*Note:* It is an error if either <Start> or <Finish> are out of range.\n\n>*Note:* If a list is the source of ``put tList into element 1 to 3 of tOtherList```, then tList is *not* inserted element-wise. The entire list is inserted as an element, so that element 1 of tOtherList is tList.",
			"tags":["lists"]
		},{
			"id":"livecode_builder-105",
			"name":"elementisinlist",
			"display name":"ElementIsInList",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Needle> is in <Target>"
			],
			"display syntax":[
				"<i>Needle</i> is in <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Determines if a given element is in <Target>",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"Any expression."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tList as List\nput [ \"a\", \"b\", \"c\", \"d\" ] into tList\n\nvariable tIsIn as Boolean\nput \"a\" is in tList into tIsIn -- tIsIn contains true"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Needle> can be found among the elements of <Target>."
			}],
			"description":"<Needle> must be an element of <Target> rather than a sublist, or contained within a list element of <Target>.",
			"tags":["lists"]
		},{
			"id":"livecode_builder-106",
			"name":"lastelementof",
			"display name":"LastElementOf",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the last element of <Target>"
			],
			"display syntax":[
				"the last element of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Designates the last element in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"description":"Either locates the first element for use as the target container of another operation, or evaluates the first element as the source of another operation.\n\n>*Note:* It is an error if <Target> is empty.",
			"tags":["lists"]
		},{
			"id":"livecode_builder-107",
			"name":"deletelastelementof",
			"display name":"DeleteLastElementOf",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"delete the last element of <Target>"
			],
			"display syntax":[
				"delete the last element of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Deletes the last element of <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A list container."
			}],
			"description":"Removes the last element of <Target>.\n\n>*Note:* It is an error if <Target> is the empty list.",
			"tags":["lists"]
		},{
			"id":"livecode_builder-108",
			"name":"listisnotlist",
			"display name":"ListIsNotList",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Left> is not <Right>"
			],
			"display syntax":[
				"<i>Left</i> is not <i>Right</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Determines whether <Left> and <Right> are equal or not.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tList as List\nput [\"a\", \"b\", \"c\"] into tList\nvariable tIsNot as Boolean\n\nput tList is not [\"A\", \"b\", \"c\"] into tIsNot -- tIs is true"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Left> is not identical to <Right>."
			}],
			"description":"Two lists are not equal if any corresponding elements are of non-comparable types, or if the default equality of that type does not holds between the elements.\nIn particular, this means that comparison between string elements is case sensitive.",
			"tags":["lists"]
		},{
			"id":"livecode_builder-109",
			"name":"lowercasestring",
			"display name":"LowercaseString",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the lower of <Source>"
			],
			"display syntax":[
				"the lower of <i>Source</i>"
			],
			"associations":["com.livecode.string"],
			"summary":"Lowercases <Source>.",
			"parameters":[{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"<Source> with each of its chars lowercased."
			}],
			"description":"Uppercase letters, including special characters with diacritical marks, are converted to the lowercase equivalents. All other characters, including lowercase letters, numbers, punctuation, and special characters with no upper or lower case, are left unchanged.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-110",
			"name":"putstringbefore",
			"display name":"PutStringBefore",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"put <Source> before <Target>"
			],
			"display syntax":[
				"put <i>Source</i> before <i>Target</i>"
			],
			"associations":["com.livecode.string"],
			"summary":"Prepends <Source> to <Target>.",
			"parameters":[{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string container."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"\" into tVar\nput \"abc\" before tVar -- tVar contains \"abc\"\nput \"lpha\" before char 2 of tVar\nput \"eti\" before char -1 of tVar -- tVar contains \"alphabetic\""
			}],
			"description":"Use to insert a string without replacement. Can be used either with a chunk expression to insert at a specified location, or without to prepend to the target string.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-111",
			"name":"stringisstring",
			"display name":"StringIsString",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Left> is <Right>"
			],
			"display syntax":[
				"<i>Left</i> is <i>Right</i>"
			],
			"associations":["com.livecode.string"],
			"summary":"Determines whether <Left> and <Right> are equal or not.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Left> is identical to <Right>."
			}],
			"description":"The ```is``` operator is case sensitive.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-112",
			"name":"emptystring",
			"display name":"EmptyString",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"the empty string"
			],
			"display syntax":[
				"the empty string"
			],
			"associations":["com.livecode.string"],
			"summary":"Designates the string of length zero.",
			"examples":[{
				"script":"variable tVar as String\nvariable tCount as Number\nput the empty string into tVar\nput the number of chars in tVar into tCount -- tCount is 0"
			}],
			"description":"Use ```the empty string``` to initialise a string variable. The empty string is synonymous with the string literal \"\"",
			"tags":["strings"]
		},{
			"id":"livecode_builder-113",
			"name":"stringisgreaterthanstring",
			"display name":"StringIsGreaterThanString",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Left> &gt; <Right>"
			],
			"display syntax":[
				"<i>Left</i> &gt; <i>Right</i>"
			],
			"associations":["com.livecode.string"],
			"summary":"Determines whether <Left> is greater than <Right> under a char by char comparison",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Left> is greater than <Right>."
			}],
			"description":"<Left> is greater than <Right> if and only if <Left> and <Right> are not equal, and the unicode codepoint of the first char in <Left> that is not equal to the corresponding char in <Right> is of greater value.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-114",
			"name":"uppercasestring",
			"display name":"UppercaseString",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the upper of <Source>"
			],
			"display syntax":[
				"the upper of <i>Source</i>"
			],
			"associations":["com.livecode.string"],
			"summary":"Uppercases <Source>.",
			"parameters":[{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"<Source> with each of its chars uppercased."
			}],
			"description":"Lowercase letters, including special characters with diacritical marks, are converted to the uppercase equivalents. All other characters, including uppercase letters, numbers, punctuation, and special characters with no upper or lower case, are left unchanged.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-115",
			"name":"putstringafter",
			"display name":"PutStringAfter",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"put <Source> after <Target>"
			],
			"display syntax":[
				"put <i>Source</i> after <i>Target</i>"
			],
			"associations":["com.livecode.string"],
			"summary":"Appends <Source> to <Target>.",
			"parameters":[{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string container."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"\" into tVar\nput \"rent\" after tVar -- tVar contains \"rent\"\nput \"placeme\" after char 2 of tVar -- tVar contains \"replacement\""
			}],
			"description":"Use to insert a string without replacement. Can be used either with a chunk expression to insert at a specified location, or without to append to the target string.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-116",
			"name":"stringislessthanstring",
			"display name":"StringIsLessThanString",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Left> &lt; <Right>"
			],
			"display syntax":[
				"<i>Left</i> &lt; <i>Right</i>"
			],
			"associations":["com.livecode.string"],
			"summary":"Determines whether <Left> is less than <Right> under a char by char comparison",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Left> is less than <Right>"
			}],
			"description":"<Left> is greater than <Right> if and only if <Left> and <Right> are not equal, and the unicode codepoint of the first char in <Left> that is not equal to the corresponding char in <Right> is of greater value.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-117",
			"name":"replacestring",
			"display name":"ReplaceString",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"replace <Pattern> with <Replacement> in <Target>"
			],
			"display syntax":[
				"replace <i>Pattern</i> with <i>Replacement</i> in <i>Target</i>"
			],
			"associations":["com.livecode.string"],
			"summary":"Replaces occurrences of <Pattern> within <Target> in <Replacement>\nSource:An expression which evaluates to a string.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string container."
			},{
				"name":"Replacement",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"variable tString as String\nput \"purple\" into tString\nreplace \"p\" with \"t\" in tString -- tString is \"turtle\""
			}],
			"description":"Replaces each occurrence of the string <Pattern> in <Target> with <Replacement>.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-118",
			"name":"stringisnotstring",
			"display name":"StringIsNotString",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Left> is not <Right>"
			],
			"display syntax":[
				"<i>Left</i> is not <i>Right</i>"
			],
			"associations":["com.livecode.string"],
			"summary":"Determines whether <Left> and <Right> are equal or not.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Left> is not identical to <Right>."
			}],
			"description":"The ```is not``` operator is case sensitive.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-119",
			"name":"com.livecode.string",
			"display name":"com.livecode.string",
			"library":"livecode_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.string"
			],
			"associations":["com.livecode.string"],
			"summary":"This library consists of the operations on strings included in the standard library of LiveCode Builder.",
			"description":"This library consists of the operations on strings included in the standard library of LiveCode Builder."
		},{
			"id":"livecode_builder-120",
			"name":"concatenatestringswithspace",
			"display name":"ConcatenateStringsWithSpace",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Left> && <Right>"
			],
			"display syntax":[
				"<i>Left</i> && <i>Right</i>"
			],
			"associations":["com.livecode.string"],
			"summary":"Concatenates <Left> and <Right> with a space between.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"This\" && \"is\" && \"a\" && \"sentence.\" into tVar -- tVar contains \"This is a sentence.\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The result of concatenating <Left> and <Right> with a space between."
			}],
			"description":"The result consists of the chars of <Left> followed by a space, and then the chars of <Right>.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-121",
			"name":"concatenatestrings",
			"display name":"ConcatenateStrings",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Left> & <Right>"
			],
			"display syntax":[
				"<i>Left</i> & <i>Right</i>"
			],
			"associations":["com.livecode.string"],
			"summary":"Concatenates <Left> and <Right>.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"car\" & \"pet\" into tVar -- tVar contains \"carpet\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The result of concatenating <Left> and <Right>."
			}],
			"description":"The result consists of the chars of <Left> followed by those of <Right>.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-122",
			"name":"com.livecode.assert",
			"display name":"com.livecode.assert",
			"library":"livecode_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.assert"
			],
			"associations":["com.livecode.assert"],
			"summary":"Sometimes there are restrictions about how some LCB code can be used\ncorrectly.  It may only be possible to make it work in a sensible way\nif is passed a particular range of values, or if the system is in a\nparticular state.  These are known as \"preconditions\" for the code.\n\nMany preconditions can be expressed via the LCB type system.  For\nexample, you can declare that the parameters passed to handler must be\nparticular types of value.  For example, when you write `in pName as\nString`, you are saying that the handler can only work when the\n`pName` parameter is a character string.  This is a precondition that\ncan be checked automatically by the LCB compiler and virtual machine.\n\nSome preconditions can't yet be automatically checked by LCB.  An\nexample would be a requirement that a string contains only ASCII\ncharacters, or that an array has a particular key.\n\nThis module provides syntax to assist with explicit precondition\nchecks.",
			"description":"Sometimes there are restrictions about how some LCB code can be used\ncorrectly.  It may only be possible to make it work in a sensible way\nif is passed a particular range of values, or if the system is in a\nparticular state.  These are known as \"preconditions\" for the code.\n\nMany preconditions can be expressed via the LCB type system.  For\nexample, you can declare that the parameters passed to handler must be\nparticular types of value.  For example, when you write `in pName as\nString`, you are saying that the handler can only work when the\n`pName` parameter is a character string.  This is a precondition that\ncan be checked automatically by the LCB compiler and virtual machine.\n\nSome preconditions can't yet be automatically checked by LCB.  An\nexample would be a requirement that a string contains only ASCII\ncharacters, or that an array has a particular key.\n\nThis module provides syntax to assist with explicit precondition\nchecks."
		},{
			"id":"livecode_builder-123",
			"name":"expectpreconditionwithreason",
			"display name":"ExpectPreconditionWithReason",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"expect [that] <Condition> because <Reason>"
			],
			"display syntax":[
				"expect [that] <i>Condition</i> because <i>Reason</i>"
			],
			"associations":["com.livecode.assert"],
			"summary":"Check a precondition, with a reason",
			"parameters":[{
				"name":"Condition",
				"type":"",
				"refparam":"false",
				"description":"Expression that must be true for code to work"
			},{
				"name":"Reason",
				"type":"",
				"refparam":"false",
				"description":"Description of the precondition"
			}],
			"examples":[{
				"script":"-- Draw a random variate from the Bernoulli distribution with\n-- parameter pParam.  A Bernoulli variate may be 0 or 1; the\n-- parameter pParam is the probability that the result is 1.\nhandler BernoulliVariate(in pParam as Number) returns Number\n\texpect (pParam >= 0 and pParam <= 1) \\\n\t\t because \"Bernoulli parameter must be a probability in [0,1]\"\n\tif (any number <= pParam) then\n\t\treturn 1\n\telse\n\t\treturn 0\n\tend if\nend handler"
			}],
			"description":"Use this statement at the start of a handler to check that necessary\npreconditions for the handler are satisfied.  For example, the handler\nmay require that its parameters have a particular structure or fall\nwithin a particular range, or may need the system to be in a specific\nstate.\n\nIf the <Condition> is false, an error will be thrown including the\n<Reason> for the check.",
			"references":{
				"statement":["ExpectPrecondition"]
			},
			"tags":["assertions"]
		},{
			"id":"livecode_builder-124",
			"name":"expectprecondition",
			"display name":"ExpectPrecondition",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"expect [that] <Condition>"
			],
			"display syntax":[
				"expect [that] <i>Condition</i>"
			],
			"associations":["com.livecode.assert"],
			"summary":"Check a precondition",
			"examples":[{
				"script":"handler BoxValue(in pValue as any) returns Array\n\treturn { \"__VALUE\": pValue }\nend handler\n\nhandler UnBoxValue(in pBox as Array) returns any\n\texpect that \"__VALUE\" is among the elements of pBox\n\treturn pBox[\"__VALUE\"]\nend handler"
			}],
			"description":"Use this statement at the start of a handler to check that necessary\npreconditions for the handler are satisfied.  For example, the handler\nmay require that its parameters have a particular structure or fall\nwithin a particular range, or may need the system to be in a specific\nstate.\n\nNote that if the <Condition> is false, this statement will throw an\nerror with the slightly-unhelpful message that \"assertion failed\".\nUsually, it will be more useful to use <ExpectsPreconditionWithReason>\ninstead.",
			"references":{
				"statement":["ExpectPreconditionWithReason"]
			},
			"tags":["assertions"]
		},{
			"id":"livecode_builder-125",
			"name":"putbytesafter",
			"display name":"PutBytesAfter",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"put <Source> after <Target>"
			],
			"display syntax":[
				"put <i>Source</i> after <i>Target</i>"
			],
			"associations":["com.livecode.binary"],
			"summary":"Appends <Source> bytes to <Target> bytes.",
			"parameters":[{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a binary container."
			}],
			"description":"Use to insert bytes into data without replacement. Can be used either with a chunk expression to insert at a specified location, or without to append to the target data.",
			"tags":["binary"]
		},{
			"id":"livecode_builder-126",
			"name":"putbytesbefore",
			"display name":"PutBytesBefore",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"put <Source> before <Target>"
			],
			"display syntax":[
				"put <i>Source</i> before <i>Target</i>"
			],
			"associations":["com.livecode.binary"],
			"summary":"Prepends <Source> bytes to <Target> bytes.",
			"parameters":[{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a binary container."
			}],
			"description":"Use to insert bytes into data without replacement. Can be used either with a chunk expression to insert at a specified location, or without to prepend to the target data.",
			"tags":["binary"]
		},{
			"id":"livecode_builder-127",
			"name":"emptydata",
			"display name":"EmptyData",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"the empty data"
			],
			"display syntax":[
				"the empty data"
			],
			"associations":["com.livecode.binary"],
			"summary":"Designates data of length 0.",
			"examples":[{
				"script":"variable tVar as Data\nvariable tCount as Number\nput the empty data into tVar\nput the number of bytes in tVar into tCount -- tCount is 0"
			}],
			"description":"Use ```the empty data``` to initialise a data variable.",
			"tags":["binary"]
		},{
			"id":"livecode_builder-128",
			"name":"dataislessthandata",
			"display name":"DataIsLessThanData",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Left> &lt; <Right>"
			],
			"display syntax":[
				"<i>Left</i> &lt; <i>Right</i>"
			],
			"associations":["com.livecode.binary"],
			"summary":"Determines whether <Left> is less than <Right> under a byte by byte comparison",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if <Left> is less than <Right>, and false otherwise."
			}],
			"description":"<Left> is less than <Right> if they are not equal, and the first byte in <Right> that is not equal to the corresponding byte in <Left> is of greater value.",
			"tags":["binary"]
		},{
			"id":"livecode_builder-129",
			"name":"concatenatebytes",
			"display name":"ConcatenateBytes",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Left> & <Right>"
			],
			"display syntax":[
				"<i>Left</i> & <i>Right</i>"
			],
			"associations":["com.livecode.binary"],
			"summary":"Concatenates <Left> and <Right>.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Binary data consisting of the value of the left hand expression with the value of the right hand expression appended to the end."
			}],
			"description":"The result consists of the bytes of <Left> followed by those of <Right>.",
			"tags":["binary"]
		},{
			"id":"livecode_builder-130",
			"name":"dataisnotdata",
			"display name":"DataIsNotData",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Left> is not <Right>"
			],
			"display syntax":[
				"<i>Left</i> is not <i>Right</i>"
			],
			"associations":["com.livecode.binary"],
			"summary":"Determines whether <Left> and <Right> are equal or not.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns false if the result of evaluating <Left> is the same as that of <Right>, and true otherwise."
			}],
			"description":"Performs a byte by byte comparison of <Left> and <Right>, returning true if there is any difference.",
			"tags":["binary"]
		},{
			"id":"livecode_builder-131",
			"name":"dataisdata",
			"display name":"DataIsData",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Left> is <Right>"
			],
			"display syntax":[
				"<i>Left</i> is <i>Right</i>"
			],
			"associations":["com.livecode.binary"],
			"summary":"Determines whether <Left> and <Right> are equal or not.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if the result of evaluating <Left> is the same as that of <Right>, and false otherwise."
			}],
			"description":"Performs a byte by byte comparison of <Left> and <Right>, returning false if there is any difference.",
			"tags":["binary"]
		},{
			"id":"livecode_builder-132",
			"name":"dataisgreaterthandata",
			"display name":"DataIsGreaterThanData",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Left> &gt; <Right>"
			],
			"display syntax":[
				"<i>Left</i> &gt; <i>Right</i>"
			],
			"associations":["com.livecode.binary"],
			"summary":"Determines whether <Left> is greater than <Right> under a byte by byte comparison",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if <Left> is greater than <Right>, and false otherwise."
			}],
			"description":"<Left> is greater than <Right> if they are not equal, and the first byte in <Left> that is not equal to the corresponding byte in <Right> is of greater value.",
			"tags":["binary"]
		},{
			"id":"livecode_builder-133",
			"name":"com.livecode.binary",
			"display name":"com.livecode.binary",
			"library":"livecode_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.binary"
			],
			"associations":["com.livecode.binary"],
			"summary":"This library consists of the operations on binary strings provided by the standard library of LiveCode Builder.",
			"description":"This library consists of the operations on binary strings provided by the standard library of LiveCode Builder."
		},{
			"id":"livecode_builder-134",
			"name":"effectpropertytype",
			"display name":"EffectPropertyType",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the type of <mEffect>"
			],
			"display syntax":[
				"the type of <i>mEffect</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The type of an effect.",
			"parameters":[{
				"name":"mEffect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an effect."
			}],
			"examples":[{
				"script":"// Create an outer shadow effect\nvariable tEffect as Effect\nput outer shadow effect into tEffect\n\n// Get the type of the effect, in this case it will be \"outer shadow\"\nvariable tType as String\nput the type of tEffect into tType"
			}],
			"description":"The type of <mEffect> as a string. Can be one of \"color overlay\", \"inner shadow\", \"outer shadow\", \"inner glow\", \"outer glow\".",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-135",
			"name":"canvasoperationfilltext",
			"display name":"CanvasOperationFillText",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"fill text <mText> at <mPoint> on <mCanvas>"
			],
			"display syntax":[
				"fill text <i>mText</i> at <i>mPoint</i> on <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Render filled text on a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			},{
				"name":"mText",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"mPoint",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			}],
			"examples":[{
				"script":"// Set the canvas font\nset the font of this canvas to font \"Helvetica\"\n\n// Draw the text\nfill text \"Widget Label\" at point [50,50] on this canvas"
			}],
			"description":"Renders <mText> at <mPoint> on <mCanvas> using the current font setting.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-136",
			"name":"gradientpropertyfrom",
			"display name":"GradientPropertyFrom",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the from of <mGradient>"
			],
			"display syntax":[
				"the from of <i>mGradient</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The from point of a gradient paint.",
			"parameters":[{
				"name":"mGradient",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a gradient."
			}],
			"examples":[{
				"script":"// Create new gradient paint\nvariable tGradient\nput linear gradient with ramp [gradient stop at 0 with color [0,0,0], gradient stop at 1 with color [1,1,1]] into tGradient\n\nvariable tRect\nput rectangle [ 20, 10, 120, 60 ] into tRect\n\n// Set the start point of the gradient to the center of tRect\nset the from of tGradient to point [(the left of tRect + the right of tRect) / 2, (the top of tRect + the bottom of tRect) / 2]"
			}],
			"description":"The from point of <mGradient> as a point. Defines the starting point from which to begin drawing the gradient.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-137",
			"name":"effectpropertydistance",
			"display name":"EffectPropertyDistance",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the distance of <mEffect>"
			],
			"display syntax":[
				"the distance of <i>mEffect</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The distance of an effect.",
			"parameters":[{
				"name":"mEffect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an effect."
			}],
			"examples":[{
				"script":"// Create an effect with distance 5\nvariable tProps as Array\nput the empty array into tProps\n\nput 5 into tProps[\"distance\"]\n\nvariable tEffect as Effect\nput outer shadow effect with properties tProps into tEffect\n\n// Set the effect distance\nset the distance of tEffect to 50"
			}],
			"description":"The distance of <mEffect> as a number. Distance applies to inner shadow, and outer shadow effect types",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-138",
			"name":"rectanglepropertytop",
			"display name":"RectanglePropertyTop",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the top of <mRect>"
			],
			"display syntax":[
				"the top of <i>mRect</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The top edge of a rectangle value.",
			"parameters":[{
				"name":"mRect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a rectangle."
			}],
			"examples":[{
				"script":"variable tRect\nput rectangle [50,100,150,200] into tRect\n\n// Store the top edge of the rectangle in a variable\nvariable tTop\nput the top of tRect into tTop\n\n// Move the rectangle vertically to a new position.\nset the top of tRect to 120"
			}],
			"description":"The location along the y-axis of the top edge of the rectangle.\n\n>*Note:* Setting the top of a rectangle will reposition it without altering the width or height.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-139",
			"name":"gradientpropertytransform",
			"display name":"GradientPropertyTransform",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the transform of <mGradient>"
			],
			"display syntax":[
				"the transform of <i>mGradient</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The transform of a gradient paint.",
			"parameters":[{
				"name":"mGradient",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a gradient."
			}],
			"examples":[{
				"script":"// Create new gradient paint\nvariable tGradient\nput radial gradient with ramp [gradient stop at 0 with color [0,0,0], gradient stop at 1 with color [1,1,1]] into tGradient\n\nvariable tRect\nput rectangle [ 20, 10, 120, 60 ] into tRect\n\n// Use the transform property to make the radial gradient spread out from the center of tRect\nvariable tTransform\nput the identity transform into tTransform\n\n// Offset transform to the center of tRect\ntranslate tTransform by [(the left of tRect + the right of tRect) / 2, (the top of tRect + the bottom of tRect) / 2]\n\n// Scale out to the right & bottom of tRect\nscale tTransform by [the width of tRect / 2, the height of tRect / 2]\n\n// Set the gradient transform\nset the transform of tGradient to tTransform"
			}],
			"description":"The transform of <mGradient> as a transform. This can be used to scale, position, and skew the gradient instead of setting the from, to, and via points.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-140",
			"name":"imagemakefromdata",
			"display name":"ImageMakeFromData",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"image from data <mData>"
			],
			"display syntax":[
				"image from data <i>mData</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new image.",
			"parameters":[{
				"name":"mData",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data"
			}],
			"examples":[{
				"script":"// Load image from a block of data\nvariable tData\nput the contents of file \"images/logo.png\" into tData\n\nvariable tImage\nput image from data tData into tImage"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new image decoded from the data provided."
			}],
			"description":"Creates a new image.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-141",
			"name":"fontmakewithsize",
			"display name":"FontMakeWithSize",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"font <mName>  at size <mSize>"
			],
			"display syntax":[
				"font <i>mName</i>  at size <i>mSize</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new instance of the named font.",
			"parameters":[{
				"name":"mName",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"mSize",
				"type":"",
				"refparam":"false",
				"description":"An Expression which evaluates to a number."
			}],
			"examples":[{
				"script":"// Create 20pt Arial font\nvariable tFont as Font\nput font \"Arial\" at size 20 into tFont"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new instance of the named font at size <mSize> points."
			}],
			"description":"Creates a new instance of the named font.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-142",
			"name":"pathmakewithellipse",
			"display name":"PathMakeWithEllipse",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"ellipse path centered at <mPoint> with radii <mRadii>"
			],
			"display syntax":[
				"ellipse path centered at <i>mPoint</i> with radii <i>mRadii</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new path.\nmCenter:An expression which evaluates to a point.",
			"parameters":[{
				"name":"mRadii",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of numbers."
			}],
			"examples":[{
				"script":"// Create an ellipse path\nvariable tPath as Path\nput ellipse path centered at point [100,100] with radii [100,75] into tPath"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new ellipse path."
			}],
			"description":"Creates a new path.\nmCenter:An expression which evaluates to a point.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-143",
			"name":"canvasoperationmoveto",
			"display name":"CanvasOperationMoveTo",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"move to <mPoint> on <mCanvas>"
			],
			"display syntax":[
				"move to <i>mPoint</i> on <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Move to a point on a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			},{
				"name":"mPoint",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			}],
			"examples":[{
				"script":"// move to a point on the canvas\nmove to point [0,50] on this canvas\n\n// add a line to the canvas path\nline to point [50,50] on this canvas\n\n// stroke the canvas path\nstroke this canvas"
			}],
			"description":"Moves to <mPoint> on the current path of <mCanvas>",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-144",
			"name":"effectpropertycolor",
			"display name":"EffectPropertyColor",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the color of <mEffect>"
			],
			"display syntax":[
				"the color of <i>mEffect</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The color of an effect.",
			"parameters":[{
				"name":"mEffect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an effect."
			}],
			"examples":[{
				"script":"// Create an effect with color \"black\"\nvariable tProps as Array\nput the empty array into tProps\n\nput color [0,0,0] into tProps[\"color\"]\n\nvariable tEffect as Effect\nput outer shadow effect with properties tProps into tEffect\n\n// Change effect color to green.\nset the color of tEffect to color [0,1,0]"
			}],
			"description":"The color of <mEffect> as a color.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-145",
			"name":"transformpropertyscale",
			"display name":"TransformPropertyScale",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the scale of <mTransform>"
			],
			"display syntax":[
				"the scale of <i>mTransform</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The scale component of a transform.",
			"parameters":[{
				"name":"mTransform",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a transform."
			}],
			"examples":[{
				"script":"variable tTransform\nput transform with matrix [0, 2, -2, 0, 50, 100] into tTransform\n\n// Store the old scale component\nvariable tScale\nput the scale of tTransform into tScale\n\n// Modify the scale by adding 1 to the x scale value\nset the scale of tTransform to [element 1 of tScale + 1, element 2 of tScale]"
			}],
			"description":"The scale of <mTransform> as a list of 2 numbers (the x and y scales)",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-146",
			"name":"patternmake",
			"display name":"PatternMake",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"pattern with <mImage>"
			],
			"display syntax":[
				"pattern with <i>mImage</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new pattern paint.",
			"parameters":[{
				"name":"mImage",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an image."
			}],
			"examples":[{
				"script":"// Load the pattern image.\nvariable tImage\nput image from file \"images/backgroundpattern.png\" into tImage\n\n// Create a new pattern based on the image\nvariable tPaint\nput pattern with tImage into tPaint"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new pattern paint based on <mImage>."
			}],
			"description":"Creates a new pattern paint.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-147",
			"name":"gradientpropertyrepeat",
			"display name":"GradientPropertyRepeat",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the repeat of <mGradient>"
			],
			"display syntax":[
				"the repeat of <i>mGradient</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The repeat count of a gradient paint.",
			"parameters":[{
				"name":"mGradient",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a gradient."
			}],
			"examples":[{
				"script":"// Create new gradient paint\nvariable tGradient\nput linear gradient with ramp [gradient stop at 0 with color [0,0,0], gradient stop at 1 with color [1,1,1]] into tGradient\n\n// Store the old gradient repeat count\nvariable tRepeat\nput the repeat of tGradient into tRepeat\n\n// Make the gradient repeat 3 times\nset the repeat of tGradient to 3"
			}],
			"description":"The repeat count of <mGradient> as a number. This determines how many times the ramp is repeated over the length of the gradient.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-148",
			"name":"gradientpropertywrap",
			"display name":"GradientPropertyWrap",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the wrap of <mGradient>"
			],
			"display syntax":[
				"the wrap of <i>mGradient</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The wrap of a gradient paint.",
			"parameters":[{
				"name":"mGradient",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a gradient."
			}],
			"examples":[{
				"script":"// Create new gradient paint\nvariable tGradient\nput linear gradient with ramp [gradient stop at 0 with color [0,0,0], gradient stop at 1 with color [1,1,1]] into tGradient\n\n// Toggle the wrapping of a gradient\nvariable tWrap\nput the wrap of tGradient into tWrap\nset the wrap of tGradient to not tWrap"
			}],
			"description":"The wrap of <mGradient> as a boolean. If wrap is true then the gradient ramp will be repeated continually outside the defined extent of the gradient.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-149",
			"name":"imagedensityproperty",
			"display name":"ImageDensityProperty",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the density of <mImage>"
			],
			"display syntax":[
				"the density of <i>mImage</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The density of an image.",
			"parameters":[{
				"name":"mImage",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an image."
			}],
			"examples":[{
				"script":"// Load an image from a file\nvariable tImage as Image\nput image from file \"images/logo.png\" into tImage\n\n// scale down image based on standard DPI of 72.\nvariable tScale as Number\nput (72 / the density of tImage) into tScale\nscale this canvas by [tScale, tScale]\ndraw tImage into rectangle [0,0,the width of tImage,the height of tImage] of this canvas"
			}],
			"description":"The image density in DPI (dots per inch)",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-150",
			"name":"pathoperationaddpath",
			"display name":"PathOperationAddPath",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"add <mSource> to <mDest>"
			],
			"display syntax":[
				"add <i>mSource</i> to <i>mDest</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Extend a path by adding another path.",
			"parameters":[{
				"name":"mSource",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a path."
			},{
				"name":"mDest",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a path."
			}],
			"examples":[{
				"script":"// Create a rectangle path\nvariable tPath as Path\nput rectangle path of rectangle [10,10,210,60] into tPath\n\n// Add another rectangle subpath to tPath\nadd rectangle path of rectangle [110,10,310,60] to tPath"
			}],
			"description":"Adds the path defined by <mSource> to <mDest>.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-151",
			"name":"pathoperationscale",
			"display name":"PathOperationScale",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"scale <mPath> by <mScale>"
			],
			"display syntax":[
				"scale <i>mPath</i> by <i>mScale</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Apply a scale to a path.",
			"parameters":[{
				"name":"mScale",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of numbers."
			},{
				"name":"mPath",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a path."
			}],
			"examples":[{
				"script":"// Create a rectangle path\nvariable tPath as Path\nput rectangle path of rectangle [10,10,210,60] into tPath\n\n// Scale the path\nscale tPath by [2,2]"
			}],
			"description":"Scales <mPath> by <mScale>.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-152",
			"name":"pathpropertyinstructions",
			"display name":"PathPropertyInstructions",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the instructions of <mPath>"
			],
			"display syntax":[
				"the instructions of <i>mPath</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The instructions of a path.",
			"parameters":[{
				"name":"mPath",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a path."
			}],
			"examples":[{
				"script":"// Create a rounded rectangle path\nvariable tPath as Path\nput rounded rectangle path of rectangle [10,10,210,60] with radius 15 into tPath\n\n// Get the instructions of the path\nvariable tPathData as String\nput the instructions of tPath into tPathData"
			}],
			"description":"A string containing the series of instructions and point arguments used to construct <mPath>.\n>*Note:* The format of the path instructions is the same as that used for SVG path data as defined here - http://www.w3.org/TR/SVG/paths.html#PathData",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-153",
			"name":"canvaspropertyopacity",
			"display name":"CanvasPropertyOpacity",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the opacity of <mCanvas>"
			],
			"display syntax":[
				"the opacity of <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The current opacity setting of a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// make subsequent drawing operations render with half transparency\nset the opacity of this canvas to 0.5"
			}],
			"description":"The opacity of drawing operations on <mCanvas>, as a number between 0 and 1.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-154",
			"name":"canvaspropertyfont",
			"display name":"CanvasPropertyFont",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the font of <mCanvas>"
			],
			"display syntax":[
				"the font of <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The current font of a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Use 20pt Arial for text drawing on canvas\nset the font of this canvas to font \"Arial\" at size 20"
			}],
			"description":"The font used when drawing text on <mCanvas> as a font.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-155",
			"name":"canvasoperationclosepath",
			"display name":"CanvasOperationClosePath",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"close path on <mCanvas>"
			],
			"display syntax":[
				"close path on <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Closes the current subpath of a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Begin a new subpath on the canvas\nmove to point [25, 50] on this canvas\n\n// Continue path with a curve through 25,100 to 50,100\ncurve through point [25,100] to point [50,100] on this canvas\n\n// Close the path\nclose path on this canvas\n\n// stroke the canvas path\nstroke this canvas"
			}],
			"description":"Adds a line from the previous point to the start of current subpath, signaling the end of the subpath.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-156",
			"name":"getpixeldataofcanvas",
			"display name":"GetPixelDataOfCanvas",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the pixel data of <Canvas>"
			],
			"display syntax":[
				"the pixel data of <i>Canvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Get the current contents of a canvas as raw pixel data",
			"parameters":[{
				"name":"Canvas",
				"type":"",
				"refparam":"false",
				"description":"The canvas to be examined."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The raw pixel values as binary data."
			}],
			"description":"Capture the current contents of the <Canvas> as raw pixel data in RGBA\nformat with 8 bits per colour component, i.e. 32 bits or 4 bytes per\npixel.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-157",
			"name":"canvasoperationscale",
			"display name":"CanvasOperationScale",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"scale <mCanvas> by <mScale>"
			],
			"display syntax":[
				"scale <i>mCanvas</i> by <i>mScale</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Apply a scale to a canvas.",
			"parameters":[{
				"name":"mScale",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of numbers."
			},{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Scale the canvas\nscale this canvas by [2,2]"
			}],
			"description":"Scales the transform of <mCanvas> by <mScale>.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-158",
			"name":"canvaspropertystippled",
			"display name":"CanvasPropertyStippled",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the stippled of <mCanvas>"
			],
			"display syntax":[
				"the stippled of <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The current stippled setting of a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Draw with stippled red paint on canvas\nset the paint of this canvas to solid paint with color [1,0,0]\nset the stippled of this canvas to true"
			}],
			"description":"A boolean value that determines whether or not stippling will be used when drawing with a solid color paint on <mCanvas>.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-159",
			"name":"colormake",
			"display name":"ColorMake",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"color <mColor>"
			],
			"display syntax":[
				"color <i>mColor</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new color value.",
			"parameters":[{
				"name":"mColor",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of 3 or 4 numbers, the red, green, blue, and (optional) alpha components of the color."
			}],
			"examples":[{
				"script":"variable tColor\n// Set tColor to opaque red\nput color [1.0, 0.0, 0.0] into tColor\n\n// Set tColor to partially transparent cyan\nput color [0.0, 1.0, 1.0, 0.75] into tColor"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new color with the given RGBA values."
			}],
			"description":">*Note:* The component value denotes the intensity of that component, expressed as a real number between 0 and 1. The alpha component represents the opacity of the color. If the alpha component is not specified then it is assumed to be 1 (fully opaque).",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-160",
			"name":"pathmakewithroundedrectanglewithradii",
			"display name":"PathMakeWithRoundedRectangleWithRadii",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"rounded rectangle path of <Rectangle> with radii <Radii>"
			],
			"display syntax":[
				"rounded rectangle path of <i>Rectangle</i> with radii <i>Radii</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Create a new rectangle path with elliptical corner rounding",
			"parameters":[{
				"name":"Rectangle",
				"type":"",
				"refparam":"false",
				"description":"A rectangle to create the path from"
			},{
				"name":"Radii",
				"type":"",
				"refparam":"false",
				"description":"A list of the horizontal radius and vertical radius for rounding"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A newly-created canvas path"
			}],
			"description":"Create a new rounded rectangle path based on <Rectangle>.\n\nThe <Radii> is a list of two numbers.  The first specifies the\nhorizontal rounding radius and the second specifies the vertical\nrounding radius.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-161",
			"name":"transformoperationtranslate",
			"display name":"TransformOperationTranslate",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"translate <mTransform> by <mTranslation>"
			],
			"display syntax":[
				"translate <i>mTransform</i> by <i>mTranslation</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Apply a translation to a transform.",
			"parameters":[{
				"name":"mTransform",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a transform."
			},{
				"name":"mTranslation",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of 2 numbers, the x and y offsets of the translation."
			}],
			"examples":[{
				"script":"// Create a new transform\nvariable tTransform\nput the identity transform into tTransform\n\nvariable tRect\nput rectangle [10, 20, 110, 170] into tRect\n\n// Translate the transform to the top-left of tRect\ntranslate tTransform by [the left of tRect, the top of tRect]"
			}],
			"description":"Apply a translation to <mTransform>. This is equivalent to concatenating <mTransform> with a new translation transform.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-162",
			"name":"imagepropertywidth",
			"display name":"ImagePropertyWidth",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the width of <mImage>"
			],
			"display syntax":[
				"the width of <i>mImage</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The width of an image.",
			"parameters":[{
				"name":"mImage",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an image."
			}],
			"examples":[{
				"script":"// Load an image from a file\nvariable tImage as Image\nput image from file \"images/logo.png\" into tImage\n\n// Get the image width\nvariable tWidth as Integer\nput the width of tImage into tWidth"
			}],
			"description":"The width of the image in pixels.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-163",
			"name":"canvasoperationlineto",
			"display name":"CanvasOperationLineTo",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"line to <mPoint> on <mCanvas>"
			],
			"display syntax":[
				"line to <i>mPoint</i> on <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Add a line to a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			},{
				"name":"mPoint",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			}],
			"examples":[{
				"script":"// move to a point on the canvas\nmove to point [0,50] on this canvas\n\n// add a line to the canvas path\nline to point [50,50] on this canvas\n\n// stroke the canvas path\nstroke this canvas"
			}],
			"description":"Adds a line to <mPoint> on the current path of <mCanvas>",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-164",
			"name":"pathmake",
			"display name":"PathMake",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"path <mInstructions>"
			],
			"display syntax":[
				"path <i>mInstructions</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new path.",
			"parameters":[{
				"name":"mInstructions",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"// Create a closed path with a line and some curves\nvariable tPath as Path\nput path \"M10,10 L50,100 Q100,100 100,50 C75,50 50,25 50,10z\" into tPath"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new path created from the instructions provided. The format of the path instructions is the same as that used for SVG path data as defined here - http://www.w3.org/TR/SVG/paths.html#PathData"
			}],
			"description":"Creates a new path.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-165",
			"name":"com.livecode.canvas",
			"display name":"com.livecode.canvas",
			"library":"livecode_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.canvas"
			],
			"associations":["com.livecode.canvas"],
			"summary":"This module specifies the syntax definitions and bindings for canvas drawing operations in modular LiveCode.",
			"description":"This module specifies the syntax definitions and bindings for canvas drawing operations in modular LiveCode."
		},{
			"id":"livecode_builder-166",
			"name":"effectpropertysource",
			"display name":"EffectPropertySource",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the source of <mEffect>"
			],
			"display syntax":[
				"the source of <i>mEffect</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The source of an effect.",
			"parameters":[{
				"name":"mEffect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an effect."
			}],
			"examples":[{
				"script":"// Create an effect with source set to \"center\"\nvariable tProps as Array\nput the empty array into tProps\n\nput \"center\" into tProps[\"source\"]\n\nvariable tEffect as Effect\nput inner glow effect with properties tProps into tEffect\n\n// Set the effect source to \"edge\"\nset the source of tEffect to \"edge\""
			}],
			"description":"The source of <mEffect> as a string. Can be one of \"center\" or \"edge\". Source applies to inner glow effects and determines where the glow extends from. Defaults to \"edge\".",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-167",
			"name":"pointpropertyy",
			"display name":"PointPropertyY",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the y of <mPoint>"
			],
			"display syntax":[
				"the y of <i>mPoint</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The y coordinate of a point value.",
			"parameters":[{
				"name":"mPoint",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			}],
			"examples":[{
				"script":"variable tPoint\nput point [50, 100] into tPoint\n\n// Store the y-coordinate of the point in a variable\nvariable tY\nput the y of tPoint into tY\n\n// Move the point 10 units downward.\nset the y of tPoint to (tY + 10)"
			}],
			"description":"The y coordinate of <mPoint>.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-168",
			"name":"thiscanvas",
			"display name":"ThisCanvas",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"this canvas"
			],
			"display syntax":[
				"this canvas"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The canvas used when drawing a widget.",
			"examples":[{
				"script":"// Draw the label centered on the rect of the widget\nset the paint of this canvas to solid paint with color [1,1,1]\nfill text \"Start\" at center of my rectangle on this canvas"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The target canvas for widget drawing operations."
			}],
			"description":"The canvas used when drawing a widget.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-169",
			"name":"fontpropertyitalic",
			"display name":"FontPropertyItalic",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the italic of <mFont>"
			],
			"display syntax":[
				"the italic of <i>mFont</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The italic setting of a font.",
			"parameters":[{
				"name":"mFont",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a font."
			}],
			"examples":[{
				"script":"// Create a font\nvariable tFont as Font\nput font \"Arial\" at size 20 into tFont\n\n// Set the font to italic\nset the italic of tFont to true"
			}],
			"description":"The italic flag of <mFont> as a boolean. If true, then <mFont> is italic.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-170",
			"name":"pathoperationmoveto",
			"display name":"PathOperationMoveTo",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"move to <mPoint> on <mPath>"
			],
			"display syntax":[
				"move to <i>mPoint</i> on <i>mPath</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Move to a new point on a path.",
			"parameters":[{
				"name":"mPath",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a path."
			},{
				"name":"mPoint",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			}],
			"examples":[{
				"script":"// Create a new empty path\nvariable tPath as Path\nput the empty path into tPath\n\n// Begin a new subpath of tPath\nmove to point [50, 50] on tPath\n\n// Add a line to tPath\nline to point [100, 50] on tPath\n\n// Begin a new subpath of tPath\nmove to point [50, 100] on tPath\n\n// Add a line to tPath\nline to point [100, 100] on tPath"
			}],
			"description":"Ends the current subpath and sets the starting point for new components of <mPath> to <mPoint>.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-171",
			"name":"transformoperationrotate",
			"display name":"TransformOperationRotate",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"rotate <mTransform> by <mRotation>"
			],
			"display syntax":[
				"rotate <i>mTransform</i> by <i>mRotation</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Apply a rotation to a transform.",
			"parameters":[{
				"name":"mTransform",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a transform."
			},{
				"name":"mRotation",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number of degrees."
			}],
			"examples":[{
				"script":"// Create a new transform\nvariable tTransform\nput the identity transform into tTransform\n\n// Rotate the transform by 90 degrees\nrotate tTransform by 90"
			}],
			"description":"Apply a rotation by <mRotation> degrees to <mTransform>. This is equivalent to concatenating <mTransform> with a new rotation transform.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-172",
			"name":"colorpropertyalpha",
			"display name":"ColorPropertyAlpha",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the alpha of <mColor>"
			],
			"display syntax":[
				"the alpha of <i>mColor</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The alpha component of a color value.",
			"parameters":[{
				"name":"mColor",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a color."
			}],
			"examples":[{
				"script":"variable tColor\nput color [0.75, 1.0, 0.5] into tColor\n\n// Store the old alpha value\nvariable tAlpha\nput the alpha of tColor into tAlpha\n\n// Make the color semi-transparent\nset the alpha of tColor to 0.5"
			}],
			"description":"The alpha component of <mColor>\n\n>*Note:* The alpha value represents the opacity of the color, expressed as a real number between 0 (fully transparent) and 1 (fully opaque).",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-173",
			"name":"patternpropertytransform",
			"display name":"PatternPropertyTransform",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the transform of <mPattern>"
			],
			"display syntax":[
				"the transform of <i>mPattern</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The transform of a pattern value.",
			"parameters":[{
				"name":"mPattern",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a pattern."
			}],
			"examples":[{
				"script":"// Create a new pattern paint from a scaled-down image file\nvariable tPattern\nput pattern with image from file \"images/pattern.png\" scaled by [0.5] into tPattern\n\n// Get the current transform\nvariable tTransform\nput the transform of tPattern into tTransform\n\n// Modify the transform by rotation\nrotate tTransform by tDegrees\n\n// Set the pattern to the modified transform\nset the transform of tPattern to tTransform"
			}],
			"description":"The transform of <mPattern>.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-174",
			"name":"transformoperationmultiply",
			"display name":"TransformOperationMultiply",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Left> * <Right>"
			],
			"display syntax":[
				"<i>Left</i> * <i>Right</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Multiply two transforms together.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a transform."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a transform."
			}],
			"examples":[{
				"script":"// Create a rotation transform\nvariable tRotate\nput transform with rotation by 45 into tRotate\n\n// Create a scale transform\nvariable tScale\nput transform with scale [2,3] into tScale\n\n// Create a translation transform\nvariable tTranslate\nput transform with translation [50,100] into tTranslate\n\n// Combine transforms by multiplying them together\nvariable tTransform\nput tTranslate * tRotate * tScale into tTransform"
			}],
			"description":"Returns the transform created by concatentating <Left> with <Right>\nNote:The order of the arguments is important when multiplying transforms. <Left> * <Right> can result in a different transform from <Right> * <Left> (in mathematical terms, transform multiplication is non-commutative).",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-175",
			"name":"gradientoperationtransform",
			"display name":"GradientOperationTransform",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"transform <mGradient> by <mTransform>"
			],
			"display syntax":[
				"transform <i>mGradient</i> by <i>mTransform</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Apply a transform to a gradient paint.",
			"parameters":[{
				"name":"mTransform",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a transform."
			},{
				"name":"mGradient",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a gradient."
			}],
			"examples":[{
				"script":"// Create new gradient paint\nvariable tGradient\nput linear gradient with ramp [gradient stop at 0 with color [0,0,0], gradient stop at 1 with color [1,1,1]] into tGradient\n\n// Scale the gradient with a transform\ntransform tGradient by transform with scale [2,2]"
			}],
			"description":"Concatenates the transform of <mGradient> with <mTransform>.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-176",
			"name":"canvasoperationmeasuretext",
			"display name":"CanvasOperationMeasureText",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"measure <mText> on <mCanvas>"
			],
			"display syntax":[
				"measure <i>mText</i> on <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Measure text when drawn to a canvas.",
			"parameters":[{
				"name":"mText",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Measure text drawn on the canvas\nvariable tBounds as Rectangle\nmeasure \"Sample text\" on this canvas\nput the result into tBounds"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The bounding box of <mText> when drawn at point 0,0 with the current font of <mCanvas>. Returns the bounds as a rectangle in the result."
			}],
			"description":"Measure text when drawn to a canvas.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-177",
			"name":"transformmakeidentity",
			"display name":"TransformMakeIdentity",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"the identity transform"
			],
			"display syntax":[
				"the identity transform"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The identity transform.",
			"examples":[{
				"script":"variable tTransform\nput the identity transform into tTransform"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new identity transform."
			}],
			"description":"The identity transform represents a coordinate transformation where the set of coordinates remain the same after it is applied. This can be useful when specifying that coordinates should not be altered, or as a starting point when combining transforms to produce a more complex one.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-178",
			"name":"rectanglepropertywidth",
			"display name":"RectanglePropertyWidth",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the width of <mRect>"
			],
			"display syntax":[
				"the width of <i>mRect</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The width of a rectangle value.",
			"parameters":[{
				"name":"mRect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a rectangle."
			}],
			"examples":[{
				"script":"variable tRect\nput rectangle [50,100,150,200] into tRect\n\n// Store the width of the rectangle in a variable\nvariable tWidth\nput the width of tRect into tWidth\n\n// Increase the width of the rectangle\nset the width of tRect to (tWidth + 10)"
			}],
			"description":"The width of the rectangle.\n\n>*Note:* Setting the width of a rectangle will resize it without moving the left edge, expanding or contracting from the right.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-179",
			"name":"effectmake",
			"display name":"EffectMake",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"<mType> effect"
			],
			"display syntax":[
				"<i>mType</i> effect"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new effect.",
			"parameters":[{
				"name":"mType",
				"type":"",
				"refparam":"false",
				"description":"One of color overlay, inner shadow, outer shadow, inner glow, outer glow."
			}],
			"examples":[{
				"script":"// Create an effect with default properties\nvariable tEffect as Effect\nput outer shadow effect into tEffect"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new effect of type <mType> with default property values."
			}],
			"description":"Creates a new effect.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-180",
			"name":"colorpropertygreen",
			"display name":"ColorPropertyGreen",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the green of <mColor>"
			],
			"display syntax":[
				"the green of <i>mColor</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The green component of a color value.",
			"parameters":[{
				"name":"mColor",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a color."
			}],
			"examples":[{
				"script":"variable tColor\nput color [0.75, 1.0, 0.5] into tColor\n\n// Store the old green value\nvariable tGreen\nput the green of tColor into tGreen\n\n// Remove any green component from the color\nset the green of tColor to 0"
			}],
			"description":"The green component of <mColor>\n\n>*Note:* The component value denotes the intensity of that component, expressed as a real number between 0 and 1.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-181",
			"name":"patternmakescaledby",
			"display name":"PatternMakeScaledBy",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"pattern with <mImage> scaled by <mScale>"
			],
			"display syntax":[
				"pattern with <i>mImage</i> scaled by <i>mScale</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new scaled pattern paint.",
			"parameters":[{
				"name":"mImage",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an image."
			},{
				"name":"mScale",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of 1 or 2 numbers, the x-axis scale and y-axis scale, or the uniform scale when only a single value is given."
			}],
			"examples":[{
				"script":"// Load the pattern image.\nvariable tImage\nput image from file \"images/backgroundpattern.png\" into tImage\n\n// Create a new pattern paint, scaling the image to half size\nvariable tPaint\nput pattern with tImage scaled by [0.5] into tPaint"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new pattern paint based on <mImage> with the specified scale applied."
			}],
			"description":"Creates a new scaled pattern paint.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-182",
			"name":"canvasoperationfill",
			"display name":"CanvasOperationFill",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"fill [ <mPath> on ] <mCanvas>"
			],
			"display syntax":[
				"fill [ <i>mPath</i> on ] <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Fill a path on a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			},{
				"name":"mPath",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a path."
			}],
			"examples":[{
				"script":"// Fill a circle path on the canvas\nfill circle path centered at point [100,100] with radius 50 on this canvas"
			},{
				"script":"// Add a path to the canvas\nmove to point [50,50] on this canvas\nline to point [50,100] on this canvas\nline to point [100,100] on this canvas\n\n// Fill the current canvas path\nfill this canvas"
			}],
			"description":"Fills the region bound by <mPath> with the current canvas paint. If mPath is not specified then the current canvas path will be closed and filled, then emptied from the canvas.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-183",
			"name":"imagepropertypixels",
			"display name":"ImagePropertyPixels",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the pixels of <mImage>"
			],
			"display syntax":[
				"the pixels of <i>mImage</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The pixel data of an image.",
			"parameters":[{
				"name":"mImage",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an image."
			}],
			"examples":[{
				"script":"// Load an image from a file\nvariable tImage as Image\nput image from file \"images/logo.png\" into tImage\n\n// Get the pixels of the image\nvariable tPixelData as Data\nput the pixels of tImage into tPixelData"
			}],
			"description":"The raw ARGB pixel data of the image.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-184",
			"name":"getpixelheightofcanvas",
			"display name":"GetPixelHeightOfCanvas",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the pixel height of <Canvas>"
			],
			"display syntax":[
				"the pixel height of <i>Canvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Get the height of a canvas in pixels.",
			"parameters":[{
				"name":"Canvas",
				"type":"",
				"refparam":"false",
				"description":"The canvas to be examined."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The height of the canvas, in pixels."
			}],
			"description":"Get the height of a canvas in pixels.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-185",
			"name":"pathoperationarcto",
			"display name":"PathOperationArcTo",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"arc through <mThrough> to <mTo> with radius <mRadius> on <mPath>"
			],
			"display syntax":[
				"arc through <i>mThrough</i> to <i>mTo</i> with radius <i>mRadius</i> on <i>mPath</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Adds an arc to a path.",
			"parameters":[{
				"name":"mThrough",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			},{
				"name":"mTo",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			},{
				"name":"mRadius",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			},{
				"name":"mPath",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a path."
			}],
			"examples":[{
				"script":"// Construct a path tracing out a rectangle with rounded bottom corners.\nvariable tPath\nput the empty path into tPath\n\n// Begin a new subpath\nmove to point [0, 0] on tPath\n\n// Continue path with an arc to the bottom edge\narc through point [0, my height] to point [25, my height] with radius 25 on tPath\n\n// Continue path with an arc to the right edge\narc through point [my width, my height] to point [my width, 0] with radius 25 on tPath\n\n// Close the path with a line back to the starting point\nclose path on tPath"
			}],
			"description":"Adds an arc between the points of a circle with radius <mRadius> tangent to the lines from the current point to <mThrough>, and from <mThrough> to <mTo>.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-186",
			"name":"gradientmakewithramp",
			"display name":"GradientMakeWithRamp",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<mType> gradient with ramp <mRamp>"
			],
			"display syntax":[
				"<i>mType</i> gradient with ramp <i>mRamp</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new gradient paint.",
			"parameters":[{
				"name":"mRamp",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of gradient stops."
			}],
			"examples":[{
				"script":"// List to hold gradient stops\nvariable tRamp\nput the empty list into tRamp\n\n// Set up gradient stops\npush gradient stop at 0 with color [1,0,0] onto tRamp\npush gradient stop at 0.5 with color [0,1,0,0.5] onto tRamp\npush gradient stop at 1 with color [0,0,1] onto tRamp\n\n// Create new gradient paint\nvariable tGradient\nput linear gradient with ramp tRamp into tGradient"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new gradient paint."
			}],
			"description":"Creates a new gradient paint.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-187",
			"name":"canvasoperationtransform",
			"display name":"CanvasOperationTransform",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"transform <mCanvas> by <mTransform>"
			],
			"display syntax":[
				"transform <i>mCanvas</i> by <i>mTransform</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Apply a transform to a canvas.",
			"parameters":[{
				"name":"mTransform",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a transform."
			},{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Scale the canvas with a transform\ntransform this canvas by transform with scale [2,2]"
			}],
			"description":"Concatenates the transform of <mCanvas> with <mTransform>.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-188",
			"name":"canvaspropertydashphase",
			"display name":"CanvasPropertyDashPhase",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the dash phase of <mCanvas>"
			],
			"display syntax":[
				"the dash phase of <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The current dash phase of a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Draw a rectangle with short, widely spaced dashes, offset to begin from the middle of the dash pattern\nset the dashes of this canvas to [10, 40]\nset the dash phase of this canvas to 25\nstroke rectangle path of rectangle [50, 50, 200, 200] on this canvas"
			}],
			"description":"The offset into the dashes at which to begin applying the dash pattern.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-189",
			"name":"canvasoperationbeginlayer",
			"display name":"CanvasOperationBeginLayer",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"begin layer [ with <mEffect> ] on <mCanvas>"
			],
			"display syntax":[
				"begin layer [ with <i>mEffect</i> ] on <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Begin a new drawing layer on a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			},{
				"name":"mEffect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an effect."
			}],
			"examples":[{
				"script":"// Draw two overlapping rectangles grouped with half transparency\nset the opacity of this canvas to 0.5\nbegin layer on this canvas\nfill rectangle path of rectangle path [50,50,100,100] on this canvas\nfill rectangle path of rectangle path [75,75,125,125] on this canvas\nend layer on this canvas"
			},{
				"script":"// Create an effect for the new layer\nvariable tEffect as Effect\nput outer shadow effect into tEffect\n\n// Draw rectangle with an effect applied\nbegin layer with tEffect on this canvas\nfill rectangle path of rectangle [50,50,100,100] on this canvas\nend layer on this canvas"
			}],
			"description":"Begins a new layer on <mCanvas> to group drawing operations for which the opacity, blend mode, and optional effect are to be applied to as a whole rather than individually.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-190",
			"name":"pathmakewithline",
			"display name":"PathMakeWithLine",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"line path from <mFrom> to <mTo>"
			],
			"display syntax":[
				"line path from <i>mFrom</i> to <i>mTo</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new path.",
			"parameters":[{
				"name":"mFrom",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			},{
				"name":"mTo",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			}],
			"examples":[{
				"script":"// Create a line path\nvariable tPath as Path\nput line path from point [50,100] to point [100,50] into tPath"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new line path."
			}],
			"description":"Creates a new path.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-191",
			"name":"fontoperationtextlayoutbounds",
			"display name":"FontOperationTextLayoutBounds",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the [ layout ] bounds of text <mText> with <mFont>"
			],
			"display syntax":[
				"the [ layout ] bounds of text <i>mText</i> with <i>mFont</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Measure text when drawn with a font.",
			"parameters":[{
				"name":"mText",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"mFont",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a font."
			}],
			"examples":[{
				"script":"// Set up tFont as size 18 Arial\nvariable tFont as Font\nput font \"Arial\" at size 18 into tFont\n\n// Measure text with tFont\nvariable tBounds as Rectangle\nput the bounds of text \"Sample text\" with tFont into tBounds"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The bounding box of <mText> when drawn at point 0,0 with font <mFont>. Returns the bounds as a rectangle."
			}],
			"description":"The layout bounds of the text, constructed from the ascent and descent values of the font, and the width of the text string.\n\n>*Note:* The layout bounds is used to position blocks of text relative to each other, so the text may overlap these bounds.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-192",
			"name":"canvaspropertyantialias",
			"display name":"CanvasPropertyAntialias",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the antialias of <mCanvas>"
			],
			"display syntax":[
				"the antialias of <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The current antialias setting of a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Disable antialiasing on the canvas\nset the antialias of this canvas to false"
			}],
			"description":"A boolean value which determines whether or not antialiasing will be used when rendering paths on <mCanvas>.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-193",
			"name":"transformpropertytranslation",
			"display name":"TransformPropertyTranslation",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the translation of <mTransform>"
			],
			"display syntax":[
				"the translation of <i>mTransform</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The translation component of a transform.",
			"parameters":[{
				"name":"mTransform",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a transform."
			}],
			"examples":[{
				"script":"variable tTransform\nput transform with matrix [0, 2, -2, 0, 50, 100] into tTransform\n\n// Store the old translation component\nvariable tTranslation\nput the translation of tTransform into tTranslation\n\n// Adjust the offset of the transformation\nset the translation of tTransform to [element 1 of tTranslation + 5, element 2 of tTranslation + 5]"
			}],
			"description":"The translation of <mTransform> as a list of 2 numbers (the x and y offset values).",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-194",
			"name":"gradientoperationrotate",
			"display name":"GradientOperationRotate",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"rotate <mGradient> by <mRotation>"
			],
			"display syntax":[
				"rotate <i>mGradient</i> by <i>mRotation</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Apply a rotation to a gradient paint.",
			"parameters":[{
				"name":"mRotation",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			},{
				"name":"mGradient",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a gradient."
			}],
			"examples":[{
				"script":"// Create new gradient paint\nvariable tGradient\nput linear gradient with ramp [gradient stop at 0 with color [0,0,0], gradient stop at 1 with color [1,1,1]] into tGradient\n\n// Rotate the gradient\nrotate tGradient by 45"
			}],
			"description":"Rotates the transform of <mGradient> by <mRotation> degrees.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-195",
			"name":"solidpaintmake",
			"display name":"SolidPaintMake",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"solid paint with <mColor>"
			],
			"display syntax":[
				"solid paint with <i>mColor</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new solid color paint.",
			"parameters":[{
				"name":"mColor",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a color."
			}],
			"examples":[{
				"script":"// Create a new green paint\nvariable tPaint\nput solid paint with color [0,1,0] into tPaint"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new paint using <mColor>."
			}],
			"description":"Creates a new solid color paint.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-196",
			"name":"solidpaintpropertycolor",
			"display name":"SolidPaintPropertyColor",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the color of <mSolid>"
			],
			"display syntax":[
				"the color of <i>mSolid</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The color of a solid paint value.\nmPaint:An expression which evaluates to a solid paint.",
			"examples":[{
				"script":"// Create a new green paint\nvariable tPaint\nput solid paint with color [0,1,0] into tPaint\n\n// Store the old color of tPaint\nvariable tColor\nput the color of tPaint into tColor\n\n// Set the color of tPaint to blue\nset the color of tPaint to color [0,0,1]"
			}],
			"description":"The color of <mPaint>.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-197",
			"name":"effectpropertysize",
			"display name":"EffectPropertySize",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the size of <mEffect>"
			],
			"display syntax":[
				"the size of <i>mEffect</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The size of an effect.",
			"parameters":[{
				"name":"mEffect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an effect."
			}],
			"examples":[{
				"script":"// Create an effect with size 5\nvariable tProps as Array\nput the empty array into tProps\n\nput 5 into tProps[\"size\"]\n\nvariable tEffect as Effect\nput outer shadow effect with properties tProps into tEffect\n\n// Set the effect size\nset the size of tEffect to 15"
			}],
			"description":"The size of <mEffect> as a number. Size applies to inner shadow, outer shadow, inner glow, and outer glow effect types",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-198",
			"name":"pathmakewitharc",
			"display name":"PathMakeWithArc",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"arc path centered at <mCenter> with [ radius <mRadius> | radii <mRadii> ] from <mStartAngle> to <mEndAngle>"
			],
			"display syntax":[
				"arc path centered at <i>mCenter</i> with [ radius <i>mRadius</i> | radii <i>mRadii</i> ] from <i>mStartAngle</i> to <i>mEndAngle</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new path.",
			"parameters":[{
				"name":"mCenter",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			},{
				"name":"mRadius",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			},{
				"name":"mRadii",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of numbers."
			},{
				"name":"mStartAngle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			},{
				"name":"mEndAngle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			}],
			"examples":[{
				"script":"// Create an elliptical arc path\nvariable tPath as Path\nput arc path centered at point [100,100] with radii [100,75] from 0 to 270 into tPath"
			},{
				"script":"// Create a circular arc path\nvariable tPath as Path\nput arc path centered at point [100,100] with radius 100 from 0 to 270 into tPath"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new arc path."
			}],
			"description":"Creates a new path.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-199",
			"name":"canvasoperationaddpath",
			"display name":"CanvasOperationAddPath",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"add <mPath> to <mCanvas>"
			],
			"display syntax":[
				"add <i>mPath</i> to <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Add a path to a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			},{
				"name":"mPath",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a path."
			}],
			"examples":[{
				"script":"// Add a path to the canvas\nadd rectangle path of rectangle [0,0,50,100] to this canvas\n\n// Fill the canvas path\nfill this canvas"
			}],
			"description":"Adds <mPath> to the current path of <mCanvas>",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-200",
			"name":"pathoperationclosepath",
			"display name":"PathOperationClosePath",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"close path on <mPath>"
			],
			"display syntax":[
				"close path on <i>mPath</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Closes the current subpath of a path.",
			"parameters":[{
				"name":"mPath",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a path."
			}],
			"examples":[{
				"script":"// Create a new empty path\nvariable tPath as Path\nput the empty path into tPath\n\n// Begin a new subpath of tPath\nmove to point [25, 50] on tPath\n\n// Continue path with a curve through 25,100 to 50,100\ncurve through [25,100] to [50,100] on tPath\n\n// Close the path\nclose path on tPath"
			}],
			"description":"Adds a line from the previous point to the start of current subpath, signaling the end of the subpath.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-201",
			"name":"patternmaketranslatedby",
			"display name":"PatternMakeTranslatedBy",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"pattern with <mImage> translated by <mTranslation>"
			],
			"display syntax":[
				"pattern with <i>mImage</i> translated by <i>mTranslation</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new translated pattern paint.",
			"parameters":[{
				"name":"mImage",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an image."
			},{
				"name":"mTranslation",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of 2 numbers, the x and y offsets of the translation."
			}],
			"examples":[{
				"script":"// Load the pattern image.\nvariable tImage\nput image from file \"images/backgroundpattern.png\" into tImage\n\n// Create a new pattern paint, offsetting the image to the top-left of tRect\nvariable tPaint\nvariable tRect\nput rectangle [20, 50, 120, 100] into tRect\nput pattern with tImage translated by [the left of tRect, the top of tRect] into tPaint"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new pattern paint based on <mImage> with the specified translation applied."
			}],
			"description":"Creates a new translated pattern paint.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-202",
			"name":"imagemakewithpixels",
			"display name":"ImageMakeWithPixels",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"image of size <mSize> with pixels <mPixels>"
			],
			"display syntax":[
				"image of size <i>mSize</i> with pixels <i>mPixels</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new image using raw pixel data.",
			"parameters":[{
				"name":"mSize",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of integers."
			},{
				"name":"mPixels",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data"
			}],
			"examples":[{
				"script":"// Read pixel data from file\nvariable tPixelData as Data\nput the contents of file \"image_argb_320x480.bin\" into tPixelData\n\n// Create image from pixel data\nvariable tImage as Image\nput image of size [320, 480] with pixels tPixelData into tImage"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new image of the given size, using the provided ARGB pixel data."
			}],
			"description":"Creates a new image using raw pixel data.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-203",
			"name":"gradientstoppropertyoffset",
			"display name":"GradientStopPropertyOffset",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the offset of <mStop>"
			],
			"display syntax":[
				"the offset of <i>mStop</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The offset of a gradient stop value.",
			"parameters":[{
				"name":"mStop",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a gradient stop."
			}],
			"examples":[{
				"script":"variable tStop\nput gradient stop at 0 with color [1,1,1] into tStop\n\n// Get the offset of a stop\nvariable tOffset\nput the offset of tStop into tOffset\n\n// Move the stop to a new offset\nset the offset of tStop to 0.75"
			}],
			"description":"The offset of <mStop>.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-204",
			"name":"pathmakewithsector",
			"display name":"PathMakeWithSector",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"sector path centered at <mCenter> with [ radius <mRadius> | radii <mRadii> ] from <mStartAngle> to <mEndAngle>"
			],
			"display syntax":[
				"sector path centered at <i>mCenter</i> with [ radius <i>mRadius</i> | radii <i>mRadii</i> ] from <i>mStartAngle</i> to <i>mEndAngle</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new path.",
			"parameters":[{
				"name":"mCenter",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			},{
				"name":"mRadius",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			},{
				"name":"mRadii",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of numbers."
			},{
				"name":"mStartAngle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			},{
				"name":"mEndAngle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			}],
			"examples":[{
				"script":"// Create an elliptical sector path\nvariable tPath as Path\nput sector path centered at point [100,100] with radii [100,75] from 0 to 270 into tPath"
			},{
				"script":"// Create a circular sector path\nvariable tPath as Path\nput sector path centered at point [100,100] with radius 100 from 0 to 270 into tPath"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new sector path."
			}],
			"description":"Creates a new path.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-205",
			"name":"colorpropertyblue",
			"display name":"ColorPropertyBlue",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the blue of <mColor>"
			],
			"display syntax":[
				"the blue of <i>mColor</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The blue component of a color value.",
			"parameters":[{
				"name":"mColor",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a color."
			}],
			"examples":[{
				"script":"variable tColor\nput color [0.75, 1.0, 0.5] into tColor\n\n// Store the old blue value\nvariable tBlue\nput the blue of tColor into tBlue\n\n// Set the blue component of the color to full intensity\nset the blue of tColor to 1"
			}],
			"description":"The blue component of <mColor>\n\n>*Note:* The component value denotes the intensity of that component, expressed as a real number between 0 and 1.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-206",
			"name":"patternmakerotatedby",
			"display name":"PatternMakeRotatedBy",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"pattern with <mImage> rotated by <mRotation>"
			],
			"display syntax":[
				"pattern with <i>mImage</i> rotated by <i>mRotation</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new rotated pattern paint.",
			"parameters":[{
				"name":"mImage",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an image."
			},{
				"name":"mRotation",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number of degrees."
			}],
			"examples":[{
				"script":"// Load the pattern image.\nvariable tImage\nput image from file \"images/backgroundpattern.png\" into tImage\n\n// Create a new pattern paint, rotating the image through 90 degrees\nvariable tPaint\nput pattern with tImage rotated by 90 into tPaint"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new pattern paint based on <mImage> with the specified rotation applied."
			}],
			"description":"Creates a new rotated pattern paint.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-207",
			"name":"pathpropertyboundingbox",
			"display name":"PathPropertyBoundingBox",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the bounding box of <mPath>"
			],
			"display syntax":[
				"the bounding box of <i>mPath</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The bounding box of a path.",
			"parameters":[{
				"name":"mPath",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a path."
			}],
			"examples":[{
				"script":"// Create a circle path\nvariable tPath as Path\nput circle path centered at point [100,100] with radius 50 into tPath\n\n// Get the bounds of the path\nvariable tBounds as Rectangle\nput the bounding box of tPath into tBounds"
			}],
			"description":"The smallest rectangle that competely encloses <mPath>.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-208",
			"name":"fontoperationtextimageboundsoncanvas",
			"display name":"FontOperationTextImageBoundsOnCanvas",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the image bounds of text <mText> on <mCanvas>"
			],
			"display syntax":[
				"the image bounds of text <i>mText</i> on <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Measure text precisely when drawn to a canvas.",
			"parameters":[{
				"name":"mText",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Set the canvas font\nset the font of this canvas to font \"Arial\" at size 18\n\nvariable tBounds as Rectangle\nput the image bounds of text \"Sample text\" on this canvas into tBounds"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The bounding box of <mText> when drawn at point 0,0 with the current font of <mCanvas>. Returns the bounds as a rectangle."
			}],
			"description":"The exact bounds of the text, which will fully enclose each character.\n\n>*Note:* This can be more time-consuming to compute than the layout bounds.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-209",
			"name":"imagemetadataproperty",
			"display name":"ImageMetadataProperty",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the metadata of <mImage>"
			],
			"display syntax":[
				"the metadata of <i>mImage</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"the metadata associated with an image.",
			"parameters":[{
				"name":"mImage",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an image."
			}],
			"examples":[{
				"script":"// Load an image from a file\nvariable tImage as Image\nput image from file \"images/logo.png\" into tImage\n\n// get the image metadata\nvariable tMetadata as Array\nput the metadata of tImage into tMetadata\n\n// get image density in DPI from the image metadata\nvariable tDPI as Number\nif \"density\" is among the keys of tMetadata then\n\tput tMetadata[\"density\"] into tDPI\nelse\n\tput 72 into tDPI\nend if"
			}],
			"description":"An array containing metadata associated with an image.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-210",
			"name":"pathoperationellipticarcto",
			"display name":"PathOperationEllipticArcTo",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"arc to <mEnd> with radii <mRadii> rotated by <mAngle> on <mPath>"
			],
			"display syntax":[
				"arc to <i>mEnd</i> with radii <i>mRadii</i> rotated by <i>mAngle</i> on <i>mPath</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Adds an arc to a path.",
			"parameters":[{
				"name":"mEnd",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			},{
				"name":"mRadii",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of numbers."
			},{
				"name":"mAngle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			},{
				"name":"mPath",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a path."
			}],
			"examples":[{
				"script":"// Construct a path tracing out a rectangle with rounded bottom corners.\nvariable tPath\nput the empty path into tPath\n\n// Begin a new subpath\nmove to point [0, 0] on tPath\n\n// Trace the left edge\nline to point [0, my height - 25] on tPath\n\n// Continue path with an arc to the bottom edge\narc to point [my height, 25] with radii [25, 25] rotated by 0 on tPath\n\n// Trace the bottom edge\nline to point [my width - 25, my height] on tPath\n\n// Continue path with an arc to the right edge\narc to point [my width, my height - 25] with radii [25, 25] rotated by 0 on tPath\n\n// Trace the right edge\nline to point [my width, 0] on tPath\n\n// Close the path with a line back to the starting point\nclose path on tPath"
			}],
			"description":"Adds an arc from the previous point to <mEnd> on <mPath>, following a section of an ellipse with the given radii & angle.\nAs there can be two different ellipses that match the parameters, and two potential arcs for each ellipse, this variation of \"arc to ...\" will select the arc that most closely matches the direction from the last point to the current position on <mPath>.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-211",
			"name":"canvasoperationdrawimage",
			"display name":"CanvasOperationDrawImage",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"draw [ from <mSrcRect> of ] <mImage> into <mDestRect> of <mCanvas>"
			],
			"display syntax":[
				"draw [ from <i>mSrcRect</i> of ] <i>mImage</i> into <i>mDestRect</i> of <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Draw an image on a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			},{
				"name":"mImage",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an image."
			},{
				"name":"mSrcRect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a rectangle."
			},{
				"name":"mDestRect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a rectangle."
			}],
			"examples":[{
				"script":"// Load an image from a file\nvariable tImage as Image\nput image from file \"images/logo.png\" into tImage\n\n// Draw the image on the canvas\ndraw tImage into rectangle [0,0,the width of tImage,the height of tImage] of this canvas"
			},{
				"script":"// Load an image from a file\nvariable tImage as Image\nput image from file \"images/logo.png\" into tImage\n\n// Draw a section of the image\ndraw from rectangle[0,0,16,16] of tImage into rectangle [0,0,16,16] of this canvas"
			}],
			"description":"Renders from <mSrcRect> (or the bounds, if not specified) of <mImage> into <mDestRect> of <mCanvas>. The canvas image resize quality determines how the image is scaled if necessary.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-212",
			"name":"gradientpropertymirror",
			"display name":"GradientPropertyMirror",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the mirror of <mGradient>"
			],
			"display syntax":[
				"the mirror of <i>mGradient</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The mirror of a gradient paint.",
			"parameters":[{
				"name":"mGradient",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a gradient."
			}],
			"examples":[{
				"script":"// Create new gradient paint\nvariable tGradient\nput linear gradient with ramp [gradient stop at 0 with color [0,0,0], gradient stop at 1 with color [1,1,1]] into tGradient\n\n// Toggle the mirroring of a gradient\nvariable tMirror\nput the mirror of tGradient into tMirror\nset the mirror of tGradient to not tMirror"
			}],
			"description":"The mirror of <mGradient> as a boolean. If mirror is true then the ramp will be reversed on each repeat.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-213",
			"name":"canvasoperationtranslate",
			"display name":"CanvasOperationTranslate",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"translate <mCanvas> by <mTranslation>"
			],
			"display syntax":[
				"translate <i>mCanvas</i> by <i>mTranslation</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Apply a translation to a canvas.",
			"parameters":[{
				"name":"mTranslation",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of numbers."
			},{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Translate the canvas\ntranslate this canvas by [50,100]"
			}],
			"description":"Translates the transform of <mCanvas> by <mTranslation>.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-214",
			"name":"canvaspropertymiterlimit",
			"display name":"CanvasPropertyMiterLimit",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the miter limit of <mCanvas>"
			],
			"display syntax":[
				"the miter limit of <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The current miter limit of a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Draw a right-angled triangle, setting the miter limit so only the right-angle corner is mitered.\nset the miter limit of this canvas to 1.5\nstroke polygon path with points [point [50,50], point [50,100], point [100,50]] on this canvas"
			}],
			"description":"The limit of miter joins as a number. Specifies how far miter joins can extend from the meeting point of two lines before a bevel join is used instead.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-215",
			"name":"gradientstopmake",
			"display name":"GradientStopMake",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"gradient stop at <mOffset> with <mColor>"
			],
			"display syntax":[
				"gradient stop at <i>mOffset</i> with <i>mColor</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new gradient stop.",
			"parameters":[{
				"name":"mOffset",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			},{
				"name":"mColor",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a color."
			}],
			"examples":[{
				"script":"// List to hold gradient stops\nvariable tRamp\nput the empty list into tRamp\n\n// First gradient stop is red at position 0\npush gradient stop at 0 with color [1,0,0] onto tRamp\n\n// Second stop is half-transparent green at position 0.5\npush gradient stop at 0.5 with color [0,1,0,0.5] onto tRamp\n\n// Third stop is blue at position 1\npush gradient stop at 1 with color [0,0,1] onto tRamp"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new gradient stop."
			}],
			"description":"Creates a new gradient stop.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-216",
			"name":"canvasoperationclippath",
			"display name":"CanvasOperationClipPath",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"clip to <mPath> on <mCanvas>"
			],
			"display syntax":[
				"clip to <i>mPath</i> on <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Clip to a path on a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			},{
				"name":"mPath",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a path."
			}],
			"examples":[{
				"script":"// Set the canvas clip\nclip to circle path centered at point [100,100] with radius 50 on this canvas\n\n// Fill rectangle path on canvas. only the region of the rectangle that falls within the canvas clip will be rendered.\nfill rectangle path of rectangle [25, 25, 75, 75] on this canvas"
			}],
			"description":"Modifies the clip of <mCanvas> by intersecting with <mRect>. Drawing operations on <mCanvas> will be confined to the clip region.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-217",
			"name":"canvaspropertypaint",
			"display name":"CanvasPropertyPaint",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the paint of <mCanvas>"
			],
			"display syntax":[
				"the paint of <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The current paint of a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Set canvas to paint with solid blue\nset the paint of this canvas to solid paint with color [0,0,1]"
			}],
			"description":"The paint used for fill / stroke operations on <mCanvas>.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-218",
			"name":"pointmake",
			"display name":"PointMake",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"point <mPoint>"
			],
			"display syntax":[
				"point <i>mPoint</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new point value.",
			"parameters":[{
				"name":"mPoint",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of 2 numbers, the x and y coordinates of the point."
			}],
			"examples":[{
				"script":"variable tPoint\nput point [50, 100] into tPoint"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new point with the given coordinates"
			}],
			"description":"Creates a new point value.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-219",
			"name":"pathmakewithcircle",
			"display name":"PathMakeWithCircle",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"circle path centered at <mCenter> with radius <mRadius>"
			],
			"display syntax":[
				"circle path centered at <i>mCenter</i> with radius <i>mRadius</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new path.",
			"parameters":[{
				"name":"mCenter",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			},{
				"name":"mRadius",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			}],
			"examples":[{
				"script":"// Create a circle path\nvariable tPath as Path\nput circle path centered at point [100,100] with radius 50 into tPath"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new circle path."
			}],
			"description":"Creates a new path.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-220",
			"name":"effectmakewithproperties",
			"display name":"EffectMakeWithProperties",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<mType> effect with properties <mProperties>"
			],
			"display syntax":[
				"<i>mType</i> effect with properties <i>mProperties</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new effect.",
			"parameters":[{
				"name":"mType",
				"type":"",
				"refparam":"false",
				"description":"One of color overlay, inner shadow, outer shadow, inner glow, outer glow."
			},{
				"name":"mProperties",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an array."
			}],
			"examples":[{
				"script":"// Create an effect from an array of properties\nvariable tProps as Array\nput the empty array into tProps\n\nput color [0,0,0] into tProps[\"color\"]\nput \"source over\" into tProps[\"blend mode\"]\nput 0 into tProps[\"spread\"]\nput 5 into tProps[\"size\"]\nput 5 into tProps[\"distance\"]\nput 60 into tProps[\"angle\"]\n\nvariable tEffect as Effect\nput outer shadow effect with properties tProps into tEffect"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new effect of type <mType> with properties read from <mProperties>."
			}],
			"description":"Creates a new effect.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-221",
			"name":"gradientoperationaddstop",
			"display name":"GradientOperationAddStop",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"add <mStop> to <mGradient>"
			],
			"display syntax":[
				"add <i>mStop</i> to <i>mGradient</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Add a new stop to the ramp of a gradient paint.",
			"parameters":[{
				"name":"mStop",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a gradient stop"
			},{
				"name":"mGradient",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a gradient."
			}],
			"examples":[{
				"script":"// Create new gradient paint with empty ramp\nvariable tGradient\nput linear gradient with ramp [] into tGradient\n\n// Add stops to the gradient\nadd gradient stop at 0 with color [0,0,0] to tGradient\nadd gradient stop at 1 with color [1,1,1] to tGradient"
			}],
			"description":"Appends the stop to the ramp of <mGradient>. The offset of the new gradient should not be before the offset of the last stop.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-222",
			"name":"transformmakewithmatrixaslist",
			"display name":"TransformMakeWithMatrixAsList",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"transform with matrix <mMatrix>"
			],
			"display syntax":[
				"transform with matrix <i>mMatrix</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new transform.\nmTranslation:An expression which evaluates to a list of 6 numbers, the a, b, c, d, tx and ty values of the transform matrix.",
			"examples":[{
				"script":"// Create combined rotate, scale, and translate transform\nvariable tTransform\nput transform with matrix [0, 2, -2, 0, 50, 100] into tTransform"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new translation transform."
			}],
			"description":"Creates a new transform.\nmTranslation:An expression which evaluates to a list of 6 numbers, the a, b, c, d, tx and ty values of the transform matrix.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-223",
			"name":"patternoperationscale",
			"display name":"PatternOperationScale",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"scale <mPattern> by <mScale>"
			],
			"display syntax":[
				"scale <i>mPattern</i> by <i>mScale</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Apply a scale to a pattern.",
			"parameters":[{
				"name":"mPattern",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a pattern."
			},{
				"name":"mScale",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of 1 or 2 numbers, the x-axis scale and y-axis scale, or the uniform scale when only a single value is given."
			}],
			"examples":[{
				"script":"// Create a new pattern paint from an image file\nvariable tPattern\nput pattern with image from file \"images/pattern.png\" into tPattern\n\n// Scale the pattern to twice the current width\nscale tPattern by [2,1]"
			}],
			"description":"Scales the transform of <mPattern> by <mScale>",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-224",
			"name":"fontpropertyname",
			"display name":"FontPropertyName",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the name of <mFont>"
			],
			"display syntax":[
				"the name of <i>mFont</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The name of a font.",
			"parameters":[{
				"name":"mFont",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a font."
			}],
			"examples":[{
				"script":"// Create a font\nvariable tFont as Font\nput font \"Arial\" at size 20 into tFont\n\n// Get the old font name\nvariable tFontName as String\nput the name of tFont into tName\n\n// Set the font to helvetica\nset the name of tFont to \"Helvetica\""
			}],
			"description":"The name of <mFont>.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-225",
			"name":"canvaspropertyimageresizequality",
			"display name":"CanvasPropertyImageResizeQuality",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the image resize quality of <mCanvas>"
			],
			"display syntax":[
				"the image resize quality of <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The current image resize quality of a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Use low (but faster) image resize algorithm to draw scaled images\nset the image resize quality of this canvas to \"low\""
			}],
			"description":"The image resize quality used when drawing scaled images and patterns on <mCanvas> as a string. Can be one of \"none\", \"low\", \"medium\", \"high\".",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-226",
			"name":"pathoperationcurvethrough",
			"display name":"PathOperationCurveThrough",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"curve through <mThroughA> [ then <mThroughB> ] to <mTo> on <mPath>"
			],
			"display syntax":[
				"curve through <i>mThroughA</i> [ then <i>mThroughB</i> ] to <i>mTo</i> on <i>mPath</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Adds a curve to a path.",
			"parameters":[{
				"name":"mThroughA",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			},{
				"name":"mThroughB",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			},{
				"name":"mTo",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			},{
				"name":"mPath",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a path."
			}],
			"examples":[{
				"script":"// Create a new empty path\nvariable tPath as Path\nput the empty path into tPath\n\n// Begin a new subpath of tPath\nmove to point [25, 50] on tPath\n\n// Continue path with a curve through 25,100 to 50,100\ncurve through point [25,100] to point [50,100] on tPath\n\n// Continue path with a curve through 50,75 then 50,50 to 50,100\ncurve through point [50,75] then point [50,50] to point [25,50] on tPath"
			}],
			"description":"Adds a curve from the previous point through one or two control points to <mTo> on <mPath>.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-227",
			"name":"gradientpropertyramp",
			"display name":"GradientPropertyRamp",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the ramp of <mGradient>"
			],
			"display syntax":[
				"the ramp of <i>mGradient</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The ramp of a gradient paint.",
			"parameters":[{
				"name":"mGradient",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a gradient."
			}],
			"examples":[{
				"script":"// Create new gradient paint\nvariable tGradient\nput linear gradient with ramp [gradient stop at 0 with color [0,0,0], gradient stop at 1 with color [1,1,1]] into tGradient\n\n// Get the gradient ramp\nvariable tRamp\nput the ramp of tGradient into tRamp\n\n// Change the color of the first stop\nset the color of element 1 of tRamp to color [1,0,0]\n\n// Set the new gradient ramp\nset the ramp of tGradient to tRamp"
			}],
			"description":"The ramp of <mGradient>. The ramp is a list of gradient stops that describes the color transitions along the length of the gradient",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-228",
			"name":"fontoperationtextlayoutboundsoncanvas",
			"display name":"FontOperationTextLayoutBoundsOnCanvas",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the [ layout ] bounds of text <mText> on <mCanvas>"
			],
			"display syntax":[
				"the [ layout ] bounds of text <i>mText</i> on <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Measure text when drawn to a canvas.",
			"parameters":[{
				"name":"mText",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Set the canvas font\nset the font of this canvas to font \"Arial\" at size 18\n\nvariable tBounds as Rectangle\nput the bounds of text \"Sample text\" on this canvas into tBounds"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The bounding box of <mText> when drawn at point 0,0 with the current font of <mCanvas>. Returns the bounds as a rectangle."
			}],
			"description":"The layout bounds of the text, constructed from the ascent and descent values of the font, and the width of the text string.\n\n>*Note:* The layout bounds is used to position blocks of text relative to each other, so the text may overlap these bounds.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-229",
			"name":"pathmakeempty",
			"display name":"PathMakeEmpty",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"the empty path"
			],
			"display syntax":[
				"the empty path"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new empty path.",
			"examples":[{
				"script":"// Initialize the path to empty\nvariable tPath as Path\nput the empty path into tPath\n\n// add a line to the path\nmove to point [0,50] on tPath\nline to point [100,50] on tPath"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"An empty path."
			}],
			"description":"Creates a new empty path.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-230",
			"name":"canvasoperationrestorestate",
			"display name":"CanvasOperationRestoreState",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"restore state of <mCanvas>"
			],
			"display syntax":[
				"restore state of <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Restore the previously saved state of a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Save the current canvas properties\nsave state of this canvas\n\n// Change various properties of the canvas\nset the paint of this canvas to solid paint with color [1,1,0,0.5]\nset the blend mode of this canvas to \"color dodge\"\nrotate this canvas by 30\nset the font of this canvas to font \"Helvetica\" with size 15\n\n// Restore the previous canvas properties\nrestore state of this canvas"
			}],
			"description":"Restores the properties of <mCanvas> from the top of the saved property stack.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-231",
			"name":"newcanvaswithsize",
			"display name":"NewCanvasWithSize",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"a new canvas with size <Size>"
			],
			"display syntax":[
				"a new canvas with size <i>Size</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Create a new canvas",
			"parameters":[{
				"name":"Size",
				"type":"",
				"refparam":"false",
				"description":"A list containing the width and height of the new canvas in pixels"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A newly-created canvas"
			}],
			"description":"Create and return a new temporary canvas of the specified pixel width\nand height.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-232",
			"name":"pathoperationellipticarctowithflags",
			"display name":"PathOperationEllipticArcToWithFlags",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"arc to <mEnd> with radii <mRadii> rotated by <mAngle> taking ( largest | smallest ) ( clockwise | anticlockwise ) route on <mPath>"
			],
			"display syntax":[
				"arc to <i>mEnd</i> with radii <i>mRadii</i> rotated by <i>mAngle</i> taking ( largest | smallest ) ( clockwise | anticlockwise ) route on <i>mPath</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Adds an arc to a path.",
			"parameters":[{
				"name":"mEnd",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			},{
				"name":"mRadii",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of numbers."
			},{
				"name":"mAngle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			},{
				"name":"mPath",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a path."
			}],
			"examples":[{
				"script":"variable tPath\nput the empty path into tPath\n\n// Begin a new subpath\nmove to point [25, 50] on tPath\n\n// Continue path with an arc to 50,25\narc to point [50, 25] with radii [25, 25] rotated by 0 taking smallest clockwise route on tPath\n\n// Begin a new subpath\nmove to point [75, 50] on tPath\n// Continue path with a large arc to 50,75\narc to point [50, 75] with radii [25, 25] rotated by 0 taking largest clockwise route on tPath"
			}],
			"description":"Adds an arc from the previous point to <mEnd> on <mPath>, following a section of an ellipse with the given radii & angle.\n  As there can be two different ellipses that match the parameters, and two potential arcs for each ellipse, the *largest*, *smallest*, *clockwise*, and *anticlockwise* options allow one arc to specified from the four potential arcs.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-233",
			"name":"gradientpropertyto",
			"display name":"GradientPropertyTo",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the to of <mGradient>"
			],
			"display syntax":[
				"the to of <i>mGradient</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The to point of a gradient paint.",
			"parameters":[{
				"name":"mGradient",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a gradient."
			}],
			"examples":[{
				"script":"// Create new gradient paint\nvariable tGradient\nput linear gradient with ramp [gradient stop at 0 with color [0,0,0], gradient stop at 1 with color [1,1,1]] into tGradient\n\nvariable tRect\nput rectangle [ 20, 10, 120, 60 ] into tRect\n\n// Set the end point of the gradient to the right of tRect\nset the from of tGradient to point [the right of tRect, (the top of tRect + the bottom of tRect) / 2]"
			}],
			"description":"The to point of <mGradient> as a point. Defines the end point when drawing the gradient.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-234",
			"name":"colorpropertyred",
			"display name":"ColorPropertyRed",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the red of <mColor>"
			],
			"display syntax":[
				"the red of <i>mColor</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The red component of a color value.",
			"parameters":[{
				"name":"mColor",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a color."
			}],
			"examples":[{
				"script":"variable tColor\nput color [0.75, 1.0, 0.5] into tColor\n\n// Store the old red value\nvariable tRed\nput the red of tColor into tRed\n\n// Invert the intensity of the red color component\nset the red of tColor to 1.0 - tRed"
			}],
			"description":"The red component of <mColor>\n\n>*Note:* The component value denotes the intensity of that component, expressed as a real number between 0 and 1.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-235",
			"name":"patternoperationrotate",
			"display name":"PatternOperationRotate",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"rotate <mPattern> by <mRotation>"
			],
			"display syntax":[
				"rotate <i>mPattern</i> by <i>mRotation</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Apply a rotation to a pattern.",
			"parameters":[{
				"name":"mPattern",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a pattern."
			},{
				"name":"mRotation",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number of degrees."
			}],
			"examples":[{
				"script":"// Create a new pattern paint from an image file\nvariable tPattern\nput pattern with image from file \"images/pattern.png\" into tPattern\n\n// Rotate the pattern through 30 degrees\nrotate tPattern by 30"
			}],
			"description":"Rotates the transform of <mPattern> by <mRotation>",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-236",
			"name":"fontmake",
			"display name":"FontMake",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"font <mName>"
			],
			"display syntax":[
				"font <i>mName</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new instance of the named font.",
			"parameters":[{
				"name":"mName",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"// Create Arial font\nvariable tFont as Font\nput font \"Arial\" into tFont"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new instance of the named font with the default size of 12pts."
			}],
			"description":"Creates a new instance of the named font.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-237",
			"name":"pathoperationtransform",
			"display name":"PathOperationTransform",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"transform <mPath> by <mTransform>"
			],
			"display syntax":[
				"transform <i>mPath</i> by <i>mTransform</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Apply a transform to a path.",
			"parameters":[{
				"name":"mTransform",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a transform."
			},{
				"name":"mPath",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a path."
			}],
			"examples":[{
				"script":"// Create a rectangle path\nvariable tPath as Path\nput rectangle path of rectangle [10,10,210,60] into tPath\n\n// Scale the path with a transform\ntransform tPath by transform with scale [2,2]"
			}],
			"description":"Transforms the points of <mPath> with <mTransform>.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-238",
			"name":"patternmaketransformed",
			"display name":"PatternMakeTransformed",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"pattern with <mImage> transformed by <mTransform>"
			],
			"display syntax":[
				"pattern with <i>mImage</i> transformed by <i>mTransform</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new transformed pattern paint.",
			"parameters":[{
				"name":"mImage",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an image."
			},{
				"name":"mTransform",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a transform."
			}],
			"examples":[{
				"script":"// Load the pattern image.\nvariable tImage\nput image from file \"images/backgroundpattern.png\" into tImage\n\n// Set up the pattern transform\nvariable tTransform\nput transform from matrix [0,2,-2,0,0,0] into tTransform\n\n// Create a new pattern paint, applying a transform to the image\nvariable tPaint\nput pattern with tImage transformed by tTransform into tPaint"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new pattern paint based on <mImage> with the specified transform applied."
			}],
			"description":"Creates a new transformed pattern paint.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-239",
			"name":"pathmakewithpoints",
			"display name":"PathMakeWithPoints",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"( polygon | polyline ) path with points <mPoints>"
			],
			"display syntax":[
				"( polygon | polyline ) path with points <i>mPoints</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new path.",
			"parameters":[{
				"name":"mPoints",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of points."
			}],
			"examples":[{
				"script":"// Create a polyline path\nvariable tPath as Path\nput polyline path with points [point [0,0], point [25,50], point [75,50], point [50,0]] into tPath"
			},{
				"script":"// Create a closed polygon path (rhombus)\nvariable tPath as Path\nput polygon path with points [point [0,0], point [25,50], point [75,50], point [50,0]] into tPath"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new polyline or polygon path. A polygon path will be closed with an additional line from the last point to the first."
			}],
			"description":"Creates a new path.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-240",
			"name":"canvaspropertycapstyle",
			"display name":"CanvasPropertyCapStyle",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the cap style of <mCanvas>"
			],
			"display syntax":[
				"the cap style of <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The current cap style of a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Draw a line with rounded ends.\nset the cap style of this canvas to \"round\"\nstroke line path from point [50,100] to point [100,50] on this canvas"
			}],
			"description":"Determines how to draw the end points of a path when stroking. Can be one of \"butt\", \"square\", or \"round\".",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-241",
			"name":"pathmakewithsegment",
			"display name":"PathMakeWithSegment",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"segment path centered at <mCenter> with [ radius <mRadius> | radii <mRadii> ] from <mStartAngle> to <mEndAngle>"
			],
			"display syntax":[
				"segment path centered at <i>mCenter</i> with [ radius <i>mRadius</i> | radii <i>mRadii</i> ] from <i>mStartAngle</i> to <i>mEndAngle</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new path.",
			"parameters":[{
				"name":"mCenter",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			},{
				"name":"mRadius",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			},{
				"name":"mRadii",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of numbers."
			},{
				"name":"mStartAngle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			},{
				"name":"mEndAngle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			}],
			"examples":[{
				"script":"// Create an elliptical segment path\nvariable tPath as Path\nput segment path centered at point [100,100] with radii [100,75] from 0 to 270 into tPath"
			},{
				"script":"// Create a circular segment path\nvariable tPath as Path\nput segment path centered at point [100,100] with radius 100 from 0 to 270 into tPath"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new segment path."
			}],
			"description":"Creates a new path.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-242",
			"name":"getpixelwidthofcanvas",
			"display name":"GetPixelWidthOfCanvas",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the pixel width of <Canvas>"
			],
			"display syntax":[
				"the pixel width of <i>Canvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Get the width of a canvas in pixels.",
			"parameters":[{
				"name":"Canvas",
				"type":"",
				"refparam":"false",
				"description":"The canvas to be examined."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The width of the canvas, in pixels."
			}],
			"description":"Get the width of a canvas in pixels.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-243",
			"name":"pathmakewithrectangle",
			"display name":"PathMakeWithRectangle",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"rectangle path of <mRect>"
			],
			"display syntax":[
				"rectangle path of <i>mRect</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new path.",
			"parameters":[{
				"name":"mRect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a rectangle."
			}],
			"examples":[{
				"script":"// Create a rectangle path\nvariable tPath as Path\nput rectangle path of rectangle [10,10,210,60] into tPath"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new rectangle path."
			}],
			"description":"Creates a new path.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-244",
			"name":"imagemakefromfile",
			"display name":"ImageMakeFromFile",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"image from file <mPath>"
			],
			"display syntax":[
				"image from file <i>mPath</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new image.",
			"parameters":[{
				"name":"mPath",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"// Load image from a file path\nvariable tImage\nput image from file \"images/logo.png\" into tImage"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new image loaded from the file path provided."
			}],
			"description":"If the file path is relative it will be resolved relative to\n`this card of the defaultStack` in a library handler or the current\nwidget instance script object if in a widget handler.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-245",
			"name":"gradientstoppropertycolor",
			"display name":"GradientStopPropertyColor",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the color of <mStop>"
			],
			"display syntax":[
				"the color of <i>mStop</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The color of a gradient stop value.",
			"parameters":[{
				"name":"mStop",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a gradient stop."
			}],
			"examples":[{
				"script":"variable tStop\nput gradient stop at 0 with color [1,1,1] into tStop\n\n// Get the color of a stop\nvariable tColor\nput the color of tStop into tColor\n\n// Set the stop color to red\nset the color of tStop to color [1,0,0]"
			}],
			"description":"The color of <mStop>.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-246",
			"name":"transformmaketranslation",
			"display name":"TransformMakeTranslation",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"transform with translation <mTranslation>"
			],
			"display syntax":[
				"transform with translation <i>mTranslation</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new translation transform.",
			"parameters":[{
				"name":"mTranslation",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of 2 numbers, the x and y offsets of the translation."
			}],
			"examples":[{
				"script":"// Create translation transform to offset coordinates by 50,100\nvariable tTransform\nput transform with translation [50,100] into tTransform"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new translation transform."
			}],
			"description":"Creates a new translation transform.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-247",
			"name":"transformoperationscale",
			"display name":"TransformOperationScale",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"scale <mTransform> by <mScale>"
			],
			"display syntax":[
				"scale <i>mTransform</i> by <i>mScale</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Apply a scale to a transform.",
			"parameters":[{
				"name":"mTransform",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a transform."
			},{
				"name":"mScale",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of 1 or 2 numbers, the x-axis scale and y-axis scale, or the uniform scale when only a single value is given."
			}],
			"examples":[{
				"script":"// Create a new transform\nvariable tTransform\nput the identity transform into tTransform\n\n// Apply a uniform scale to the transform\nscale tTransform by [0.5]\n\n// Apply a non-uniform scale to the transform\nscale tTransform by [2.2, 3]"
			}],
			"description":"Apply the given scale to <mTransform>. This is equivalent to concatenating <mTransform> with a new scale transform.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-248",
			"name":"canvasoperationclip",
			"display name":"CanvasOperationClip",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"clip to <mRect> on <mCanvas>"
			],
			"display syntax":[
				"clip to <i>mRect</i> on <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Clip to a rectangle on a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			},{
				"name":"mRect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a rectangle."
			}],
			"examples":[{
				"script":"// Set the canvas clip\nclip to rectangle [50,50,100,100] on this canvas\n\n// Fill rectangle path on canvas. only the region of the rectangle that falls within the canvas clip will be rendered.\nfill rectangle path of rectangle [25, 25, 75, 75] on this canvas"
			}],
			"description":"Modifies the clip of <mCanvas> by intersecting with <mRect>. Drawing operations on <mCanvas> will be confined to the clip region.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-249",
			"name":"pathoperationrotate",
			"display name":"PathOperationRotate",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"rotate <mPath> by <mRotation>"
			],
			"display syntax":[
				"rotate <i>mPath</i> by <i>mRotation</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Apply a rotation to a path.",
			"parameters":[{
				"name":"mRotation",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			},{
				"name":"mPath",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a path."
			}],
			"examples":[{
				"script":"// Create a rectangle path\nvariable tPath as Path\nput rectangle path of rectangle [10,10,210,60] into tPath\n\n// Rotate the path\nrotate tPath by 45"
			}],
			"description":"Rotates <mPath> by <mRotation> degrees.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-250",
			"name":"imagepropertyheight",
			"display name":"ImagePropertyHeight",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the height of <mImage>"
			],
			"display syntax":[
				"the height of <i>mImage</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The height of an image.",
			"parameters":[{
				"name":"mImage",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an image."
			}],
			"examples":[{
				"script":"// Load an image from a file\nvariable tImage as Image\nput image from file \"images/logo.png\" into tImage\n\n// Get the image height\nvariable tHeight as Integer\nput the height of tImage into tHeight"
			}],
			"description":"The height of the image in pixels.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-251",
			"name":"gradientoperationtranslate",
			"display name":"GradientOperationTranslate",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"translate <mGradient> by <mTranslation>"
			],
			"display syntax":[
				"translate <i>mGradient</i> by <i>mTranslation</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Apply a translation to a gradient paint.",
			"parameters":[{
				"name":"mTranslation",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of numbers."
			},{
				"name":"mGradient",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a gradient."
			}],
			"examples":[{
				"script":"// Create new gradient paint\nvariable tGradient\nput linear gradient with ramp [gradient stop at 0 with color [0,0,0], gradient stop at 1 with color [1,1,1]] into tGradient\n\n// Translate the gradient\ntranslate tGradient by [50,100]"
			}],
			"description":"Translates the transform of <mGradient> by <mTranslation>.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-252",
			"name":"patternoperationtransform",
			"display name":"PatternOperationTransform",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"transform <mPattern> by <mTransform>"
			],
			"display syntax":[
				"transform <i>mPattern</i> by <i>mTransform</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Apply a transform to a pattern.",
			"parameters":[{
				"name":"mPattern",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a pattern."
			},{
				"name":"mTransform",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a transform."
			}],
			"examples":[{
				"script":"// Create a new pattern paint from an image file\nvariable tPattern\nput pattern with image from file \"images/pattern.png\" into tPattern\n\n// Apply transform to the pattern.\ntransform tPattern by transform with matrix [0,2,-2,0,5,10]"
			}],
			"description":"Modifies the transform of <mPattern> by concatentation with <mTransform>",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-253",
			"name":"transformoperationconcat",
			"display name":"TransformOperationConcat",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"concat <mTransformA> with <mTransformB>"
			],
			"display syntax":[
				"concat <i>mTransformA</i> with <i>mTransformB</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Concatenate transform a with transform b.",
			"parameters":[{
				"name":"mTransformA",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a transform."
			},{
				"name":"mTransformB",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a transform."
			}],
			"examples":[{
				"script":"// Create a new scaling transform\nvariable tScale\nput transform with scale [5,10] into tScale\n\n// Create a new rotation transform\nvariable tRotation\nput transform with rotation by 30 into tRotation\n\nvariable tTransform\n\n// Create a transform representing a rotation followed by a scale\nput tScale into tTransform\nconcat tTransform with tRotation\n\n// Create a transform representing a scale followed by a rotation\nput tRotation into tTransform\nconcat tTransform with tScale"
			}],
			"description":"Concatenating transforms modifies the original transform to produce a single transform that is the equivalent of applying the new transform followed by the original. Changing the order of concatenation will result in a transform with different effects.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-254",
			"name":"fontpropertysize",
			"display name":"FontPropertySize",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the size of <mFont>"
			],
			"display syntax":[
				"the size of <i>mFont</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The size of a font.",
			"parameters":[{
				"name":"mFont",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a font."
			}],
			"examples":[{
				"script":"// Create a font\nvariable tFont as Font\nput font \"Arial\" at size 20 into tFont\n\n// Set the font size to 30pt\nset the size of tFont to 30"
			}],
			"description":"The size of <mFont> as a number of points.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-255",
			"name":"patternoperationtranslate",
			"display name":"PatternOperationTranslate",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"translate <mPattern> by <mTranslation>"
			],
			"display syntax":[
				"translate <i>mPattern</i> by <i>mTranslation</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Apply a translation to a pattern.",
			"parameters":[{
				"name":"mPattern",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a pattern."
			},{
				"name":"mTranslation",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of 2 numbers, the x and y offsets of the translation."
			}],
			"examples":[{
				"script":"// Create a new pattern paint from an image file\nvariable tPattern\nput pattern with image from file \"images/pattern.png\" into tPattern\n\n// Translate the pattern 20 units to the left.\ntranslate tPattern by [-20,0]"
			}],
			"description":"translates the transform of <mPattern> by <mTranslation>",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-256",
			"name":"gradientpropertyvia",
			"display name":"GradientPropertyVia",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the via of <mGradient>"
			],
			"display syntax":[
				"the via of <i>mGradient</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The via point of a gradient paint.",
			"parameters":[{
				"name":"mGradient",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a gradient."
			}],
			"examples":[{
				"script":"// Create new gradient paint\nvariable tGradient\nput linear gradient with ramp [gradient stop at 0 with color [0,0,0], gradient stop at 1 with color [1,1,1]] into tGradient\n\nvariable tRect\nput rectangle [ 20, 10, 120, 60 ] into tRect\n\n// Set the via of the gradient to the bottom of tRect\nset the via of tGradient to point [(the left of tRect + the right of tRect) / 2, the bottom of tRect]"
			}],
			"description":"The via point of <mGradient> as a point. This is used to skew and scale the gradient when drawing.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-257",
			"name":"canvaspropertyjoinstyle",
			"display name":"CanvasPropertyJoinStyle",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the join style of <mCanvas>"
			],
			"display syntax":[
				"the join style of <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The current join style of a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Draw a square with beveled corners.\nset the join style of this canvas to \"bevel\"\nstroke rectangle path of rectangle [25, 25, 75, 75] on this canvas"
			}],
			"description":"Determines how to draw the join between the lines of a path when stroking. Can be one of \"bevel\", \"round\", or \"miter\".",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-258",
			"name":"transformpropertyinverse",
			"display name":"TransformPropertyInverse",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the inverse of <mTransform>"
			],
			"display syntax":[
				"the inverse of <i>mTransform</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The inverse of a transform.",
			"parameters":[{
				"name":"mTransform",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a transform."
			}],
			"examples":[{
				"script":"variable tTransform\nput transform with matrix [0,2,-2,0,50,100] into tTransform\n\n// Get the inverse of the current transform\nvariable tInverse\nput the inverse of tTransform into tInverse\n\n// Combine the transform with its inverse to produce the identity transform\nconcat tTransform with tInverse"
			}],
			"description":"The inverse of <mTransform>\n\n>*Note:* The inverse of a transform matrix is the transform that reverses the effect of the original. Combining a transform with its inverse will produce the identity transform.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-259",
			"name":"transformmakerotation",
			"display name":"TransformMakeRotation",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"transform with rotation by <mRotation>"
			],
			"display syntax":[
				"transform with rotation by <i>mRotation</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new rotation transform value.",
			"parameters":[{
				"name":"mRotation",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number, the number of degrees of the rotation."
			}],
			"examples":[{
				"script":"// Create 30 degree rotation transform\nvariable tTransform\nput transform with rotation by 30 into tTransform"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new rotation transform."
			}],
			"description":"Creates a new rotation transform value.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-260",
			"name":"imagemakefromresourcefile",
			"display name":"ImageMakeFromResourceFile",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"image from resource file <mResource>"
			],
			"display syntax":[
				"image from resource file <i>mResource</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new image.",
			"parameters":[{
				"name":"mResource",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"// Load image from a bundled resource file\nvariable tImage\nput image from resource file \"images/logo.png\" into tImage"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new image decoded from the named module resource file."
			}],
			"description":"Creates a new image.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-261",
			"name":"effectpropertyblendmode",
			"display name":"EffectPropertyBlendMode",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the blend mode of <mEffect>"
			],
			"display syntax":[
				"the blend mode of <i>mEffect</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The blend mode of an effect.",
			"parameters":[{
				"name":"mEffect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an effect."
			}],
			"examples":[{
				"script":"// Create an effect with blend mode \"source over\"\nvariable tProps as Array\nput the empty array into tProps\n\nput \"source over\" into tProps[\"blend mode\"]\n\nvariable tEffect as Effect\nput outer shadow effect with properties tProps into tEffect\n\n// Use color dodge mode for effect\nset the blend mode of tEffect to \"color dodge\""
			}],
			"description":"The blend mode of <mEffect> as a string. Can be any one of:\n- clear\n- copy\n- source over\n- source in\n- source out\n- destination over\n- destination in\n- destination out\n- destination atop\n- xor\n- plus darker\n- plus lighter\n- multiply\n- screen\n- overlay\n- darken\n- lighten\n- color dodge\n- color burn\n- soft light\n- hard light\n- difference\n- exclusion\n- hue\n- saturation\n- color\n- luminosity",
			"references":{
				"operator":["CanvasPropertyBlendMode"]
			},
			"tags":["canvas"]
		},{
			"id":"livecode_builder-262",
			"name":"transformpropertymatrixaslist",
			"display name":"TransformPropertyMatrixAsList",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the matrix of <mTransform>"
			],
			"display syntax":[
				"the matrix of <i>mTransform</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The matrix values of a transform.",
			"parameters":[{
				"name":"mTransform",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a transform."
			}],
			"examples":[{
				"script":"variable tTransform\nput transform with translation [20,50] into tTransform\n\n// Get the current transform matrix\nvariable tMatrix\nput the matrix of tTransform into tMatrix\n\n// Directly set the components\nput 2.5 into element 1 of tMatrix\nput 0 into element 2 of tMatrix\nput 0 into element 3 of tMatrix\nput 2.5 into element 4 of tMatrix\n\n// Update the transform with the new values\nset the matrix of tTransform to tMatrix"
			}],
			"description":"The matrix values of <mTransform> as a list of 6 numbers.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-263",
			"name":"rectanglepropertyleft",
			"display name":"RectanglePropertyLeft",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the left of <mRect>"
			],
			"display syntax":[
				"the left of <i>mRect</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The left edge of a rectangle value.",
			"parameters":[{
				"name":"mRect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a rectangle."
			}],
			"examples":[{
				"script":"variable tRect\nput rectangle [50,100,150,200] into tRect\n\n// Store the left edge of the rectangle in a variable\nvariable tLeft\nput the left of tRect into tLeft\n\n// Move the rectangle horizontally to a new position.\nset the left of tRect to 20"
			}],
			"description":"The location along the x-axis of the left edge of the rectangle.\n\n>*Note:* Setting the left of a rectangle will reposition it without altering the width or height.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-264",
			"name":"canvasoperationstroke",
			"display name":"CanvasOperationStroke",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"stroke [ <mPath> on ] <mCanvas>"
			],
			"display syntax":[
				"stroke [ <i>mPath</i> on ] <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Stroke a path on a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			},{
				"name":"mPath",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a path."
			}],
			"examples":[{
				"script":"// Draw a circle path on the canvas\nstroke circle path centered at point [100,100] with radius 50 on this canvas"
			},{
				"script":"// Add a path to the canvas\nmove to point [50,50] on this canvas\nline to point [50,100] on this canvas\nline to point [100,100] on this canvas\n\n// Stroke the current canvas path\nstroke this canvas"
			}],
			"description":"Strokes <mPath> with the current canvas paint and stroke settings. If mPath is not specified then the current canvas path will be stroked, then emptied from the canvas.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-265",
			"name":"canvaspropertystrokewidth",
			"display name":"CanvasPropertyStrokeWidth",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the stroke width of <mCanvas>"
			],
			"display syntax":[
				"the stroke width of <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The current stroke width of a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Draw paths with line width 20\nset the stroke width of this canvas to 20"
			}],
			"description":"The width of lines used when stroking a path on <mCanvas> as a number.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-266",
			"name":"transformpropertyskew",
			"display name":"TransformPropertySkew",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the skew of <mTransform>"
			],
			"display syntax":[
				"the skew of <i>mTransform</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The skew component of a transform.",
			"parameters":[{
				"name":"mTransform",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a transform."
			}],
			"examples":[{
				"script":"variable tTransform\nput transform with matrix [0, 2, -2, 0, 50, 100] into tTransform\n\n// Store the old skew component\nvariable tSkew\nput the skew of tTransform into tSkew\n\n// Remove the skew\nset the skew of tTransform to [0,0]"
			}],
			"description":"The skew of <mTransform> as a list of 2 numbers (the x and y skew values).",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-267",
			"name":"pathoperationtranslate",
			"display name":"PathOperationTranslate",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"translate <mPath> by <mTranslation>"
			],
			"display syntax":[
				"translate <i>mPath</i> by <i>mTranslation</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Apply a translation to a path.",
			"parameters":[{
				"name":"mTranslation",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of numbers."
			},{
				"name":"mPath",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a path."
			}],
			"examples":[{
				"script":"// Create a rectangle path\nvariable tPath as Path\nput rectangle path of rectangle [10,10,210,60] into tPath\n\n// Translate the path\ntranslate tPath by [50,100]"
			}],
			"description":"Translates <mPath> by <mTranslation>.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-268",
			"name":"canvasoperationsavestate",
			"display name":"CanvasOperationSaveState",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"save state of <mCanvas>"
			],
			"display syntax":[
				"save state of <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Save the current state of a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Save the current canvas properties\nsave state of this canvas\n\n// Change various properties of the canvas\nset the paint of this canvas to solid paint with color [1,1,0,0.5]\nset the blend mode of this canvas to \"color dodge\"\nrotate this canvas by 30\nset the font of this canvas to font \"Helvetica\" with size 15\n\n// Restore the previous canvas properties\nrestore state of this canvas"
			}],
			"description":"Saves the current properties of <mCanvas> to the top of a stack so that they can be restored later.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-269",
			"name":"pathpropertysubpath",
			"display name":"PathPropertySubpath",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"subpath <mStart> [ to <mEnd> ] of <mPath>"
			],
			"display syntax":[
				"subpath <i>mStart</i> [ to <i>mEnd</i> ] of <i>mPath</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The subpaths of a path.",
			"parameters":[{
				"name":"mPath",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a path."
			},{
				"name":"mStart",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			},{
				"name":"mEnd",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			}],
			"examples":[{
				"script":"// Create a path with multiple subpaths\nvariable tPath as Path\nput path \"M50,50 L100,50 M100,100 L150,100 M150,150 L200,150\"\n\n// Split out the first subpath of a path\nvariable tSubPath as Path\nput subpath 1 of tPath into tSubPath\n\n// Store the remaining subpaths in the original path\nput subpath 2 to -1 of tPath into tPath"
			}],
			"description":"The subpaths of <mPath> in the range <mStart> to <mEnd>. Each subpath or range of subpaths is itself a path.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-270",
			"name":"canvaspropertyclippingbounds",
			"display name":"CanvasPropertyClippingBounds",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the clipping bounds of <mCanvas>"
			],
			"display syntax":[
				"the clipping bounds of <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The current clipping bounds of the canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Set the canvas clip\nclip to rectangle [50,50,100,100] on this canvas\n\n// Fill rectangle path on canvas, covering only the current clip region.\nvariable tBounds as Rectangle\nput the clipping bounds of this canvas into tBounds\nfill rectangle path of tBounds on this canvas"
			}],
			"description":"The clipping bounds of the canvas. Drawing operations on <mCanvas> will be confined to the clip region.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-271",
			"name":"transformmakeskew",
			"display name":"TransformMakeSkew",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"transform with skew <mSkew>"
			],
			"display syntax":[
				"transform with skew <i>mSkew</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new skewing transform value.\nmScale:An expression which evaluates to a list of 2 numbers, the x-axis skew and y-axis skew.",
			"examples":[{
				"script":"// Create skew transform\nvariable tTransform\nput transform with skew [1,0] into tTransform"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new skew transform."
			}],
			"description":"Creates a new skewing transform value.\nmScale:An expression which evaluates to a list of 2 numbers, the x-axis skew and y-axis skew.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-272",
			"name":"transformpropertyrotation",
			"display name":"TransformPropertyRotation",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the rotation of <mTransform>"
			],
			"display syntax":[
				"the rotation of <i>mTransform</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The rotation component of a transform.",
			"parameters":[{
				"name":"mTransform",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a transform."
			}],
			"examples":[{
				"script":"variable tTransform\nput transform with matrix [0, 2, -2, 0, 50, 100] into tTransform\n\n// Store the old rotation component\nvariable tRotation\nput the rotation of tTransform into tRotation\n\n// Double the rotation\nset the rotation of tTransform to tRotation * 2"
			}],
			"description":"The rotation of <mTransform> as a number of degrees.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-273",
			"name":"fontoperationtextimagebounds",
			"display name":"FontOperationTextImageBounds",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the image bounds of text <mText> with <mFont>"
			],
			"display syntax":[
				"the image bounds of text <i>mText</i> with <i>mFont</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Measure text precisely when drawn with a font.",
			"parameters":[{
				"name":"mText",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"mFont",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a font."
			}],
			"examples":[{
				"script":"// Set up tFont as size 18 Arial\nvariable tFont as Font\nput font \"Arial\" at size 18 into tFont\n\n// Measure text with tFont\nvariable tBounds as Rectangle\nput the image bounds of text \"Sample text\" with tFont into tBounds"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The bounding box of <mText> when drawn at point 0,0 with font <mFont>. Returns the bounds as a rectangle."
			}],
			"description":"The exact bounds of the text, which will fully enclose each character.\n\n>*Note:* This can be more time-consuming to compute than the layout bounds.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-274",
			"name":"canvaspropertyfillrule",
			"display name":"CanvasPropertyFillRule",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the fill rule of <mCanvas>"
			],
			"display syntax":[
				"the fill rule of <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The current fill rule of a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Set canvas fill rule to non-zero.\nset the fill rule of this canvas to \"non-zero\""
			}],
			"description":"The rule used to determine when to fill enclosed regions of a path. Can be \"even odd\" or \"non-zero\".",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-275",
			"name":"fontpropertybold",
			"display name":"FontPropertyBold",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the bold of <mFont>"
			],
			"display syntax":[
				"the bold of <i>mFont</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The bold setting of a font.",
			"parameters":[{
				"name":"mFont",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a font."
			}],
			"examples":[{
				"script":"// Create a font\nvariable tFont as Font\nput font \"Arial\" at size 20 into tFont\n\n// Set the font to bold\nset the bold of tFont to true"
			}],
			"description":"The bold flag of <mFont> as a boolean. If true, then <mFont> is bold.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-276",
			"name":"canvaspropertyblendmode",
			"display name":"CanvasPropertyBlendMode",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the blend mode of <mCanvas>"
			],
			"display syntax":[
				"the blend mode of <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The current blend mode of a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Use color dodge mode to draw on canvas\nset the blend mode of this canvas to \"color dodge\""
			}],
			"description":"The blend mode used for drawing operations on <mCanvas> as a string. Can be any one of:\n- clear\n- copy\n- source over\n- source in\n- source out\n- destination over\n- destination in\n- destination out\n- destination atop\n- xor\n- plus darker\n- plus lighter\n- multiply\n- screen\n- overlay\n- darken\n- lighten\n- color edge\n- color burn\n- soft light\n- hard light\n- difference\n- exclusion\n- hue\n- saturation\n- color\n- luminosity",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-277",
			"name":"effectpropertyangle",
			"display name":"EffectPropertyAngle",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the angle of <mEffect>"
			],
			"display syntax":[
				"the angle of <i>mEffect</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The angle of an effect.",
			"parameters":[{
				"name":"mEffect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an effect."
			}],
			"examples":[{
				"script":"// Create an effect with angle 60\nvariable tProps as Array\nput the empty array into tProps\n\nput 60 into tProps[\"angle\"]\n\nvariable tEffect as Effect\nput outer shadow effect with properties tProps into tEffect\n\n// Set the effect angle\nset the angle of tEffect to 30"
			}],
			"description":"The angle of <mEffect> as a number of degrees. Angle applies to inner shadow, and outer shadow effect types",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-278",
			"name":"fontmakewithstyle",
			"display name":"FontMakeWithStyle",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"font <mName> with ( bold  | italic  | bold italic  ) style"
			],
			"display syntax":[
				"font <i>mName</i> with ( bold  | italic  | bold italic  ) style"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new instance of the named font.",
			"parameters":[{
				"name":"mName",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"// Create italic Arial font\nvariable tFont as Font\nput font \"Arial\" with italic style into tFont"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new instance of the named font with style bold, italic, or bold italic, and the default size of 12pts."
			}],
			"description":"Creates a new instance of the named font.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-279",
			"name":"canvasoperationfilltextaligned",
			"display name":"CanvasOperationFillTextAligned",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"fill text <mText> at <mAlignment> of <mRect> on <mCanvas>"
			],
			"display syntax":[
				"fill text <i>mText</i> at <i>mAlignment</i> of <i>mRect</i> on <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Render filled text on a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			},{
				"name":"mText",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"mRect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a rectangle."
			}],
			"examples":[{
				"script":"// Set the canvas font\nset the font of this canvas to font \"Helvetica\"\n\n// Draw the text in the top-left corner of the target rectangle\nfill text \"Widget Label\" at top left of rectangle [50, 100, 250, 200] on this canvas"
			}],
			"description":"Renders <mText> aligned to the specified sides of <mRect> on <mCanvas> using the current font setting.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-280",
			"name":"canvasoperationendlayer",
			"display name":"CanvasOperationEndLayer",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"end layer on <mCanvas>"
			],
			"display syntax":[
				"end layer on <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"End the current drawing layer on a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Draw two overlapping rectangles grouped with half transparency\nset the opacity of this canvas to 0.5\nbegin layer on this canvas\nfill rectangle path of rectangle path [50,50,100,100] on this canvas\nfill rectangle path of rectangle path [75,75,125,125] on this canvas\nend layer on this canvas"
			},{
				"script":"// Create an effect for the new layer\nvariable tEffect as Effect\nput outer shadow effect into tEffect\n\n// Draw rectangle with an effect applied\nbegin layer with tEffect on this canvas\nfill rectangle path of rectangle [50,50,100,100] on this canvas\nend layer on this canvas"
			}],
			"description":"Ends the layer on <mCanvas>, rendering to the previous layer with the opacity, blend mode, and effect properties set when the layer began.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-281",
			"name":"effectpropertyknockout",
			"display name":"EffectPropertyKnockOut",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the knockout of <mEffect>"
			],
			"display syntax":[
				"the knockout of <i>mEffect</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The knockout of an effect.",
			"parameters":[{
				"name":"mEffect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an effect."
			}],
			"examples":[{
				"script":"// Create an effect with knockout set to false\nvariable tProps as Array\nput the empty array into tProps\n\nput false into tProps[\"knockout\"]\n\nvariable tEffect as Effect\nput outer shadow effect with properties tProps into tEffect\n\n// Set the effect knockout to true\nset the knockout of tEffect to true"
			}],
			"description":"The knockout setting of <mEffect> as a boolean. Knockout applies to outer shadow effects and determines whether or not the alpha channel of the source image is applied to the blurred shadow created by the effect. Defaults to true.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-282",
			"name":"gradientoperationscale",
			"display name":"GradientOperationScale",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"scale <mGradient> by <mScale>"
			],
			"display syntax":[
				"scale <i>mGradient</i> by <i>mScale</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Apply a scale to a gradient paint.",
			"parameters":[{
				"name":"mScale",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of numbers."
			},{
				"name":"mGradient",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a gradient."
			}],
			"examples":[{
				"script":"// Create new gradient paint\nvariable tGradient\nput linear gradient with ramp [gradient stop at 0 with color [0,0,0], gradient stop at 1 with color [1,1,1]] into tGradient\n\n// Scale the gradient\nscale tGradient by [2,2]"
			}],
			"description":"Scales the transform of <mGradient> by <mScale>.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-283",
			"name":"pathmakewithroundedrectanglewithradius",
			"display name":"PathMakeWithRoundedRectangleWithRadius",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"rounded rectangle path of <mRect> with radius <mRadius>"
			],
			"display syntax":[
				"rounded rectangle path of <i>mRect</i> with radius <i>mRadius</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new path.\nmRadii:An expression which evaluates to a list of numbers.",
			"parameters":[{
				"name":"mRect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a rectangle."
			},{
				"name":"mRadius",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			}],
			"examples":[{
				"script":"// Create a rounded rectangle path\nvariable tPath as Path\nput rounded rectangle path of rectangle [10,10,210,60] with radius 15 into tPath"
			},{
				"script":"// Create a rounded rectangle path with different horizontal & vertical radii\nvariable tPath as Path\nput rounded rectangle path of rectangle [10,10,210,60] with radii [10,5] into tPath"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new rounded rectangle path."
			}],
			"description":"Creates a new path.\nmRadii:An expression which evaluates to a list of numbers.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-284",
			"name":"canvaspropertydashes",
			"display name":"CanvasPropertyDashes",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the dashes of <mCanvas>"
			],
			"display syntax":[
				"the dashes of <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The current dashes of a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Draw a rectangle with short, widely spaced dashes\nset the dashes of this canvas to [10, 40]\nstroke rectangle path of rectangle [50, 50, 200, 200] on this canvas"
			}],
			"description":"The dashes as a list of numbers. The dashes specifies a sequence of lengths that alternately represent space and dash lengths when stroking a path.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-285",
			"name":"transformoperationskew",
			"display name":"TransformOperationSkew",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"skew <mTransform> by <mSkew>"
			],
			"display syntax":[
				"skew <i>mTransform</i> by <i>mSkew</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Apply a skew to a transform.",
			"parameters":[{
				"name":"mTransform",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a transform."
			},{
				"name":"mSkew",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of 2 numbers, the x-axis skew and y-axis skew."
			}],
			"examples":[{
				"script":"variable tTransform\n// Create a new transform\nput the identity transform into tTransform\n// Apply a skew to the transform\nskew tTransform by [1, 0]"
			}],
			"description":"Apply the given skew to <mTransform>",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-286",
			"name":"rectanglepropertybottom",
			"display name":"RectanglePropertyBottom",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the bottom of <mRect>"
			],
			"display syntax":[
				"the bottom of <i>mRect</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The bottom edge of a rectangle value.",
			"parameters":[{
				"name":"mRect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a rectangle."
			}],
			"examples":[{
				"script":"variable tRect\nput rectangle [50,100,150,200] into tRect\n\n// Store the bottom edge of the rectangle in a variable\nvariable tBottom\nput the bottom of tRect into tBottom\n\n// Move the rectangle vertically to a new position.\nset the bottom of tRect to (tBottom + 10)"
			}],
			"description":"The location along the y-axis of the bottom edge of the rectangle.\n\n>*Note:* Setting the bottom of a rectangle will reposition it without altering the width or height.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-287",
			"name":"fontmakewithstyleandsize",
			"display name":"FontMakeWithStyleAndSize",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"font <mName> with ( bold  | italic  | bold italic  ) style at size <mSize>"
			],
			"display syntax":[
				"font <i>mName</i> with ( bold  | italic  | bold italic  ) style at size <i>mSize</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new instance of the named font.",
			"parameters":[{
				"name":"mName",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"mSize",
				"type":"",
				"refparam":"false",
				"description":"An Expression which evaluates to a number."
			}],
			"examples":[{
				"script":"// Create 20pt bold Arial font\nvariable tFont as Font\nput font \"Arial\" with bold style at size 20 into tFont"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new instance of the named font with style bold, italic, or bold italic, at size <mSize> points."
			}],
			"description":"Creates a new instance of the named font.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-288",
			"name":"gradientpropertytype",
			"display name":"GradientPropertyType",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the type of <mGradient>"
			],
			"display syntax":[
				"the type of <i>mGradient</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The type of a gradient paint.",
			"parameters":[{
				"name":"mGradient",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a gradient."
			}],
			"examples":[{
				"script":"// Create new gradient paint\nvariable tGradient\nput linear gradient with ramp [gradient stop at 0 with color [0,0,0], gradient stop at 1 with color [1,1,1]] into tGradient\n\n// Store the old gradient type\nvariable tType\nput the type of tGradient into tType\n\n// Change the gradient type to radial\nset the type of tGradient to \"radial\""
			}],
			"description":"The type of <mGradient> as a string. This can be one of \"linear\", \"radial\", \"conical\", \"diamond\", \"spiral\", \"xy\", \"sqrtxy\".",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-289",
			"name":"rectanglepropertyheight",
			"display name":"RectanglePropertyHeight",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the height of <mRect>"
			],
			"display syntax":[
				"the height of <i>mRect</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The height of a rectangle value.",
			"parameters":[{
				"name":"mRect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a rectangle."
			}],
			"examples":[{
				"script":"variable tRect\nput rectangle [50,100,150,200] into tRect\n\n// Store the height of the rectangle in a variable\nvariable tHeight\nput the height of tRect into tHeight\n\n// Increase the height of the rectangle\nset the height of tRect to (tHeight + 10)"
			}],
			"description":"The height of the rectangle.\n\n>*Note:* Setting the height of a rectangle will resize it without moving the top edge, expanding or contracting from the bottom.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-290",
			"name":"canvasoperationrotate",
			"display name":"CanvasOperationRotate",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"rotate <mCanvas> by <mRotation>"
			],
			"display syntax":[
				"rotate <i>mCanvas</i> by <i>mRotation</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Apply a rotation to a canvas.",
			"parameters":[{
				"name":"mRotation",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			},{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Rotate the canvas\nrotate this canvas by 45"
			}],
			"description":"Rotates the transform of <mCanvas> by <mRotation> degrees.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-291",
			"name":"patternpropertyimage",
			"display name":"PatternPropertyImage",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the image of <mPattern>"
			],
			"display syntax":[
				"the image of <i>mPattern</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The image of a pattern value.",
			"parameters":[{
				"name":"mPattern",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a pattern."
			}],
			"examples":[{
				"script":"// Create a new pattern based on an image file\nvariable tPattern\nput pattern with image from file \"images/patternframe1.png\" into tPattern\n\n// Store the old image of tPattern\nvariable tImage\nput the image of tPattern into tImage\n\n// Set the pattern to draw the next image\nset the image of tPattern to image from file \"images/patternframe2.png\""
			}],
			"description":"The image of <mPattern>.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-292",
			"name":"rectanglepropertyright",
			"display name":"RectanglePropertyRight",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the right of <mRect>"
			],
			"display syntax":[
				"the right of <i>mRect</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The right edge of a rectangle value.",
			"parameters":[{
				"name":"mRect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a rectangle."
			}],
			"examples":[{
				"script":"variable tRect\nput rectangle [50,100,150,200] into tRect\n\n// Store the right edge of the rectangle in a variable\nvariable tRight\nput the right of tRect into tRight\n\n// Move the rectangle horizontally to a new position.\nset the right of tRect to (tRight + 10)"
			}],
			"description":"The location along the x-axis of the right edge of the rectangle.\n\n>*Note:* Setting the right of a rectangle will reposition it without altering the width or height.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-293",
			"name":"effectpropertyspread",
			"display name":"EffectPropertySpread",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the spread of <mEffect>"
			],
			"display syntax":[
				"the spread of <i>mEffect</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The spread of an effect.",
			"parameters":[{
				"name":"mEffect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an effect."
			}],
			"examples":[{
				"script":"// Create an effect with spread 0\nvariable tProps as Array\nput the empty array into tProps\n\nput 0 into tProps[\"spread\"]\n\nvariable tEffect as Effect\nput outer shadow effect with properties tProps into tEffect\n\n// Set the effect spread\nset the spread of tEffect to 0.1"
			}],
			"description":"The spread of <mEffect> as a number between 0 and 1. Spread applies to inner shadow, outer shadow, inner glow, and outer glow effect types",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-294",
			"name":"transformmakescale",
			"display name":"TransformMakeScale",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"transform with scale <mScale>"
			],
			"display syntax":[
				"transform with scale <i>mScale</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new scaling transform value.",
			"parameters":[{
				"name":"mScale",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of 1 or 2 numbers, the x-axis scale and y-axis scale, or the uniform scale when only a single value is given."
			}],
			"examples":[{
				"script":"// Create x2 uniformly scaling transform\nvariable tTransform\nput transform with scale [2] into tTransform\n\n// Create transform which only scales in the direction of the x axis\nput transform with scale [ 2, 1 ] into tTransform"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new scale transform."
			}],
			"description":"Creates a new scaling transform value.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-295",
			"name":"canvasoperationcurvethrough",
			"display name":"CanvasOperationCurveThrough",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"curve through <mThroughA> [ then <mThroughB> ] to <mPoint> on <mCanvas>"
			],
			"display syntax":[
				"curve through <i>mThroughA</i> [ then <i>mThroughB</i> ] to <i>mPoint</i> on <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Add a curve to a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			},{
				"name":"mThroughA",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			},{
				"name":"mThroughA",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			}],
			"examples":[{
				"script":"// Begin a new subpath on the canvas\nmove to point [25, 50] on this canvas\n\n// Continue path with a curve through 25,100 to 50,100\ncurve through point [25,100] to point [50,100] on this canvas\n\n// Continue path with a curve through 50,75 then 50,50 to 50,100\ncurve through point [50,75] then point [50,50] to point [25,50] on this canvas\n\n// stroke the canvas path\nstroke this canvas"
			}],
			"description":"Adds a curve through 1 or 2 points to <mPoint> on the current path of <mCanvas>",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-296",
			"name":"pathoperationlineto",
			"display name":"PathOperationLineTo",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"line to <mPoint> on <mPath>"
			],
			"display syntax":[
				"line to <i>mPoint</i> on <i>mPath</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Adds a line to a path.",
			"parameters":[{
				"name":"mPath",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a path."
			},{
				"name":"mPoint",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			}],
			"examples":[{
				"script":"// Create a new empty path\nvariable tPath as Path\nput the empty path into tPath\n\n// Begin a new subpath of tPath\nmove to point [25, 50] on tPath\n\n// Continue path with a line to 50,100\nline to [50,100] on tPath"
			}],
			"description":"Adds a line from the previous point to <mPoint> on <mPath>.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-297",
			"name":"pointpropertyx",
			"display name":"PointPropertyX",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the x of <mPoint>"
			],
			"display syntax":[
				"the x of <i>mPoint</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The x coordinate of a point value.",
			"parameters":[{
				"name":"mPoint",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			}],
			"examples":[{
				"script":"variable tPoint\nput point [50, 100] into tPoint\n\n// Store the x-coordinate of the point in a variable\nvariable tX\nput the x of tPoint into tX\n\n// Move the point 10 units to the right\nset the x of tPoint to (tX + 10)"
			}],
			"description":"The x coordinate of <mPoint>.",
			"tags":["canvas"]
		},{
			"id":"livecode_builder-298",
			"name":"reversecharsof",
			"display name":"ReverseCharsOf",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"reverse <Target>"
			],
			"display syntax":[
				"reverse <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Reverse a string",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A string"
			}],
			"examples":[{
				"script":"variable tString\nput \"abcdef\" into tString\nreverse tString\nexpect that tString is \"fedcba\""
			}],
			"description":"Reverses the order of characters in the <Target>.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-299",
			"name":"deletesingletoncharof",
			"display name":"DeleteSingletonCharOf",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"delete char <Index> of <Target>"
			],
			"display syntax":[
				"delete char <i>Index</i> of <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Deletes the char at index <Index> in <Target>.",
			"parameters":[{
				"name":"Index",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A string container."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"thorough\" into tVar\ndelete char 3 of tVar -- tVar contains \"through\""
			}],
			"description":"Replaces the char at the given index with the empty string.\n\n>*Note:* It is an error if <Index> is out of range.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-300",
			"name":"repeatforeachchar",
			"display name":"RepeatForEachChar",
			"library":"livecode_builder",
			"type":"iterator",
			"syntax":[
				"char <Iterand>"
			],
			"display syntax":[
				"char <i>Iterand</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Repeat over the chars of a string",
			"parameters":[{
				"name":"Iterand",
				"type":"",
				"refparam":"false",
				"description":"A string container."
			}],
			"examples":[{
				"script":"variable tChar as String\nvariable tSpaceCount as Number\nrepeat for each char tChar in \\\n\t\t\"the quick brown fox jumps over the lazy dog\"\n\tif tChar is \" \" then\n\t\tadd 1 to tSpaceCount\n\tend if\nend repeat\nexpect that tSpaceCount is 8"
			}],
			"description":"Use repeat for each to perform an operation on each char of a string. On each iteration, the <Iterand> will contain the next char of the string being iterated over.",
			"tags":["strings","control structures"]
		},{
			"id":"livecode_builder-301",
			"name":"deletelastcharof",
			"display name":"DeleteLastCharOf",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"delete the last char of <Target>"
			],
			"display syntax":[
				"delete the last char of <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Deletes the last char in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A string container."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"deadliness\" into tVar\ndelete the last char of tVar -- tVar contains \"deadlines\""
			}],
			"description":"Replaces the last char in <Target> with the empty string.\n\n>*Note:* It is an error if <Target> is the empty string.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-302",
			"name":"charoffset",
			"display name":"CharOffset",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) offset of <Needle> in <Target>"
			],
			"display syntax":[
				"the ( first | last ) offset of <i>Needle</i> in <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Finds the first or last occurrence of <Needle> within <Target>",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput the first offset of \"art\" in \"cartoon\" into tVar -- tVar contains 2"
			},{
				"script":"variable tVar as Number\nvariable tFilePath as String\nput \"/Users/user/Documents/file.txt\" into tFilePath\nput the last offset of \"/\" in tFilePath into tVar\n\nvariable tFileName as String\nput char 1 to tVar of tFilePath into tFileName -- tVar contains \"file.txt\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the offset of <Needle> in <Target>."
			}],
			"description":"The first (respectively last) offset of <Needle> in <Target> is number of chars between the first char of <Target> and the first (respectively last) occurrence of <Needle>. If neither first or last is specified, then the first offset is found. If <Needle> does not occur in <Target>, then the output is 0.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-303",
			"name":"stringbeginswithstring",
			"display name":"StringBeginsWithString",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Source> begins with <Prefix>"
			],
			"display syntax":[
				"<i>Source</i> begins with <i>Prefix</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Determines whether <Source> begins with <Prefix>",
			"parameters":[{
				"name":"Prefix",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"variable tVar as String\nvariable tResult as String\nput \"abcde\" into tVar\nif tVar begins with \"abc\" then\n\tput \"success\" into tResult\nend if\t"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Source> begins with <Prefix>."
			}],
			"description":"<Source> begins with <Prefix> if and only if the chars of <Prefix> occur as an initial subsequence of the chars of <Source>.\n\n>*Note:* Since \"\" is an initial substring of every string, every string begins with the empty string.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-304",
			"name":"newlinecharacter",
			"display name":"NewLineCharacter",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"newline"
			],
			"display syntax":[
				"newline"
			],
			"associations":["com.livecode.char"],
			"summary":"The new line character",
			"examples":[{
				"script":"variable tList as List\npush \"line 1\" onto tList\npush \"line 2\" onto tList\npush \"line 3\" onto tList\n\nvariable tLines as String\ncombine tList with newline into tLines -- tLines has 3 lines"
			}],
			"description":"Use the <newline> constant to add new lines to a string variable.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-305",
			"name":"deleterangecharof",
			"display name":"DeleteRangeCharOf",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"delete char <Start> to <Finish> of <Target>"
			],
			"display syntax":[
				"delete char <i>Start</i> to <i>Finish</i> of <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Deletes the chars between indices <Start> and <Finish> in <Target>.",
			"parameters":[{
				"name":"Start",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Finish",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A string container."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"surround\" into tVar\ndelete char 2 to 4 of tVar -- tVar contains \"sound\""
			}],
			"description":"Replaces the chars between the given indices with the empty string.\n\n>*Note:* It is an error if either <Start> or <Finish> are out of range.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-306",
			"name":"charisinstring",
			"display name":"CharIsInString",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Needle> is in <Source>"
			],
			"display syntax":[
				"<i>Needle</i> is in <i>Source</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Determines whether <Needle> is in <Target>.\nTarget:An expression which evaluates to a string.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a char."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if <Needle> is among the chars of <Target>, and false otherwise."
			}],
			"description":">*Note:* It is an error if <Needle> evaluates to a string consisting of more than one char.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-307",
			"name":"countcharsof",
			"display name":"CountCharsOf",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the number of chars in <Target>"
			],
			"display syntax":[
				"the number of chars in <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Counts the number of chars in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"variable tVar as Number\nvariable tSource as String\nput \"hello\" into tString\nput the number of chars in tString into tVar\n\nvariable tString as String\nput the empty string into tString\t\nrepeat tVar times\n\tput \"a\" after tString\nend repeat\n\n// tString contains \"aaaaa\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The number of chars in <Target>."
			}],
			"description":">*Note:* The number of chars returns the number of codeunits of the target string. It does not perform any grapheme boundary analysis.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-308",
			"name":"rangecharof",
			"display name":"RangeCharOf",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"char <Start> to <Finish> of <Target>"
			],
			"display syntax":[
				"char <i>Start</i> to <i>Finish</i> of <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Designates the chars between indices <Start> and <Finish> in <Target>.",
			"parameters":[{
				"name":"Start",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Finish",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"put tChars into char 5 to 10 of tString // Locates chars 5 to 10 of tString and replace them with tChars"
			},{
				"script":"get char 5 to 10 of tString // Evaluates chars 5 to 10"
			}],
			"description":"Either locates the chars between the given indices for use as the target container of another operation, or evaluates the chars at the given indices as the source of another operation.\n\n>*Note:* It is an error if either <Start> or <Finish> are out of range.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-309",
			"name":"com.livecode.char",
			"display name":"com.livecode.char",
			"library":"livecode_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.char"
			],
			"associations":["com.livecode.char"],
			"summary":"This library consists of the operations on chars included in the standard library of LiveCode Builder.",
			"description":"This library consists of the operations on chars included in the standard library of LiveCode Builder."
		},{
			"id":"livecode_builder-310",
			"name":"lastcharof",
			"display name":"LastCharOf",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the last char of <Target>"
			],
			"display syntax":[
				"the last char of <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Designates the last char in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"char\" into tVar\n\nvariable tLast as String\nput the last char of tVar into tLast -- tLast contains \"r\""
			}],
			"description":"Either locates the last char for use as the target container of another operation, or evaluates the last char as the source of another operation.\n\n>*Note:* It is an error if <Target> is empty.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-311",
			"name":"firstcharof",
			"display name":"FirstCharOf",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the first char of <Target>"
			],
			"display syntax":[
				"the first char of <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Designates the first char in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"char\" into tVar\n\nvariable tFirst as String\nput the first char of tVar into tFirst -- tFirst contains \"c\""
			}],
			"description":"Either locates the first char for use as the target container of another operation, or evaluates the first char as the source of another operation.\n\n>*Note:* It is an error if <Target> is empty.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-312",
			"name":"charoffsetafter",
			"display name":"CharOffsetAfter",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) offset of <Needle> after <After> in <Target>"
			],
			"display syntax":[
				"the ( first | last ) offset of <i>Needle</i> after <i>After</i> in <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Finds the first or last occurrence of <Needle> after a specified index in <Target>",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"After",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of Target."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput the offset of \"nse\" after 4 in \"nonsense\" into tVar -- tVar contains 2"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the offset of <Needle> after <After> in <Target>."
			}],
			"description":"The first (respectively last) offset of <Needle> in <Target> is number of chars between the first char of the substring of <Target> beginning at char <After> + 1, and the first (respectively last) occurrence of <Needle> in the substring. If neither first or last is specified, then the first offset is found. If <Needle> does not occur in the given substring of <Target>, then the output is 0.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-313",
			"name":"charoffsetbefore",
			"display name":"CharOffsetBefore",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) offset of <Needle> before <Before> in <Target>"
			],
			"display syntax":[
				"the ( first | last ) offset of <i>Needle</i> before <i>Before</i> in <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Finds the first or last occurrence of <Needle> before a specified index in <Target>.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Before",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of Target."
			}],
			"examples":[{
				"script":"variable tVar as Number\nvariable tLastDot as Number\nvariable tAddress as String\nvariable tTLD as String\nput \"http://www.livecode.com/index.html\" into tAddress\nput the last offset of \".\" in tAddress into tLastDot\nput the offset of \".\" before tLastDot in tAddress into tVar\nput char tVar + 1 to tVar + 3 of tAddress into tTLD -- tTLD contains \"com\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the offset of <Needle> before <Before> in <Target>."
			}],
			"description":"The first (respectively last) offset of <Needle> in <Target> is number of chars between the first char of <Target>, and the first (respectively last) occurrence of <Needle> in the substring of <Target> ending at char <Before> - 1. If neither first or last is specified, then the last offset is found. If <Needle> does not occur in the given substring of <Target>, then the output is 0.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-314",
			"name":"stringendswithstring",
			"display name":"StringEndsWithString",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Source> ends with <Suffix>"
			],
			"display syntax":[
				"<i>Source</i> ends with <i>Suffix</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Determines whether <Source> ends with <Suffix>",
			"parameters":[{
				"name":"Suffix",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"variable tVar as String\nvariable tResult as String\nput \"abcde\" into tVar\nif tVar ends with \"cde\" then\n\tput \"success\" into tResult\nend if\t"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Source> ends with <Suffix>."
			}],
			"description":"<Source> ends with <Suffix> if and only if the chars of <Suffix> occur as a final subsequence of the chars of <Source>.\n\n>*Note:* Since \"\" is a final substring of every string, every string ends with the empty string.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-315",
			"name":"codeofchar",
			"display name":"CodeOfChar",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the code of <Target>"
			],
			"display syntax":[
				"the code of <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Get the numeric value of a single char",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A string containing one character"
			}],
			"description":"Returns the Unicode codepoint index of a single character.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-316",
			"name":"singletoncharof",
			"display name":"SingletonCharOf",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"char <Index> of <Target>"
			],
			"display syntax":[
				"char <i>Index</i> of <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Designates the char at index <Index> in <Target>.",
			"parameters":[{
				"name":"Index",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"put the empty string into char 5 of tString // Locates char 5 and removes it from tString"
			},{
				"script":"get char 5 of tString // Evaluates char 5"
			}],
			"description":"Either locates the char at the given index for use as the target container of another operation, or evaluates the char at the given index as the source of another operation.\n\n>*Note:* It is an error if <Index> is out of range.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-317",
			"name":"containschars",
			"display name":"ContainsChars",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Source> contains <Needle>"
			],
			"display syntax":[
				"<i>Source</i> contains <i>Needle</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Determines whether <Source> contains <Needle>.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Source> contains <Needle>."
			}],
			"description":"<Source> contains <Needle> if and only if the chars of <Needle> occur as a subsequence of the chars of <Source>.\n\n>*Note:* Since \"\" is a substring of every string, every string contains the empty string.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-318",
			"name":"deletefirstcharof",
			"display name":"DeleteFirstCharOf",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"delete the first char of <Target>"
			],
			"display syntax":[
				"delete the first char of <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Deletes the first char in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A string container."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"seven\" into tVar\ndelete the first char of tVar -- tVar contains \"even\""
			}],
			"description":"Replaces the first char in <Target> with the empty string.\n\n>*Note:* It is an error if <Target> is the empty string.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-319",
			"name":"charwithcode",
			"display name":"CharWithCode",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the char with code <Index>"
			],
			"display syntax":[
				"the char with code <i>Index</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Create a 1-char string from a number",
			"parameters":[{
				"name":"Value",
				"type":"",
				"refparam":"false",
				"description":"A Unicode codepoint index"
			}],
			"description":"Returns a string containing one Unicode character created using the\ngiven value.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-320",
			"name":"com.livecode.date",
			"display name":"com.livecode.date",
			"library":"livecode_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.date"
			],
			"associations":["com.livecode.date"],
			"summary":"This library provides low-level system functionality for modular\nLiveCode programs.",
			"description":"This library provides low-level system functionality for modular\nLiveCode programs."
		},{
			"id":"livecode_builder-321",
			"name":"universaltime",
			"display name":"UniversalTime",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"the universal time"
			],
			"display syntax":[
				"the universal time"
			],
			"associations":["com.livecode.date"],
			"summary":"The seconds",
			"examples":[{
				"script":"variable tTime as real\nput the universal time into tTime"
			}],
			"description":"Returns the current universal time relative to the start of the UNIX epoch - 1st\nJanuary 1970 in seconds.",
			"tags":["date and time"]
		},{
			"id":"livecode_builder-322",
			"name":"localdate",
			"display name":"LocalDate",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"the local date"
			],
			"display syntax":[
				"the local date"
			],
			"associations":["com.livecode.date"],
			"summary":"The local Gregorian date",
			"examples":[{
				"script":"variable tDateTime as List\nput the local date into tDateTime\n\nvariable tDayOfMonth as Number\nput tDateTime[3] into tDayOfMonth"
			}],
			"description":"Returns the local date as a list of seven numeric components.  The\nelements of the list are:\n\n* The year\n* The month (1-12)\n* The day of the month (1-31, depending on the month)\n* The hour (0-23)\n* The minute (0-59)\n* The second (0-59)\n* The offset from UTC in seconds",
			"references":{
				"expression":["UniversalDate"]
			},
			"tags":["date and time"]
		},{
			"id":"livecode_builder-323",
			"name":"universaldate",
			"display name":"UniversalDate",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"the universal date"
			],
			"display syntax":[
				"the universal date"
			],
			"associations":["com.livecode.date"],
			"summary":"The UTC Gregorian date",
			"examples":[{
				"script":"variable tDateTime as List\nput the universal date into tDateTime\n\nvariable tMinuteOfHour as Number\nput tDateTime[5] into tMinuteOfHour"
			}],
			"description":"Returns the universal date (i.e. the current date in the UTC+00:00\ntime zone) as a list of seven numeric components.  The elements of the\nlist are the same as for <LocalDate>.",
			"references":{
				"expression":["LocalDate"]
			},
			"tags":["date and time"]
		},{
			"id":"livecode_builder-324",
			"name":"repeatwhile",
			"display name":"RepeatWhile",
			"library":"livecode_builder",
			"type":"control structure",
			"syntax":[
				"repeat while <Condition>\n\t<StatementList>\nend repeat"
			],
			"display syntax":[
				"repeat while <i>Condition</i>"
			],
			"associations":["com.livecode.language"],
			"summary":"Executes a list of statements while a condition continues to be true.",
			"parameters":[{
				"name":"Condition",
				"type":"bool",
				"refparam":"false",
				"description":"An expression which evaluates to a boolean."
			},{
				"name":"StatementList",
				"type":"",
				"refparam":"false",
				"description":"A set of statements."
			}],
			"description":"Use the repeat while <Condition> structure to execute a set of statements repeatedly, while the <Condition> continues to evaluate to true."
		},{
			"id":"livecode_builder-325",
			"name":"if",
			"display name":"If",
			"library":"livecode_builder",
			"type":"control structure",
			"syntax":[
				"if <IfCondition> then \n\t<IfStatementList> \n[else if <ElseCondition> then \n\t<ElseIfStatementList>] \n[else \n\t<ElseStatementList>]\nend if"
			],
			"display syntax":[
				"if <i>IfCondition</i> then "
			],
			"associations":["com.livecode.language"],
			"summary":"Executes a list of statements depending on the value of a condition.",
			"parameters":[{
				"name":"IfCondition",
				"type":"bool",
				"refparam":"false",
				"description":"An expression which evaluates to a boolean."
			},{
				"name":"IfStatementList",
				"type":"",
				"refparam":"false",
				"description":"A set of statements."
			},{
				"name":"ElseCondition",
				"type":"bool",
				"refparam":"false",
				"description":"An expression which evaluates to a boolean."
			},{
				"name":"ElseIfStatementList",
				"type":"",
				"refparam":"false",
				"description":"A set of statements."
			},{
				"name":"ElseStatementList",
				"type":"",
				"refparam":"false",
				"description":"A set of statements."
			}],
			"description":"Use the if control structure to execute a statement (or list of statements) only under certain circumstances. If <IfCondition> evaluates to true, the statements in <IfStatementList> are executed. For each condition <ElseCondition> such that none of the previous conditions evaluates to true, the condition is evaluated and the corresponding statements in <ElseIfStatementList> are executed. If none of the conditions evaluate to true, the statements in <ElseStatementList> are executed."
		},{
			"id":"livecode_builder-326",
			"name":"putinto",
			"display name":"PutInto",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"put <sourceValue> into <targetContainer>"
			],
			"display syntax":[
				"put <i>sourceValue</i> into <i>targetContainer</i>"
			],
			"associations":["com.livecode.language"],
			"summary":"Put a value into a container.",
			"parameters":[{
				"name":"sourceValue",
				"type":"any",
				"refparam":"false",
				"description":"The value to put into the <targetContainer>"
			},{
				"name":"targetContainer",
				"type":"any",
				"refparam":"false",
				"description":"A valid target for <sourceValue>"
			}],
			"description":"Assigns the result of evaluating <sourceValue> to <targetContainer>.\n>*Note:* It is a checked runtime error for the source value's type to not be compatible with the target expression's type."
		},{
			"id":"livecode_builder-327",
			"name":"throwerror",
			"display name":"ThrowError",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"throw <errorString>"
			],
			"display syntax":[
				"throw <i>errorString</i>"
			],
			"associations":["com.livecode.language"],
			"summary":"Causes an error to be raised.",
			"parameters":[{
				"name":"errorString",
				"type":"string",
				"refparam":"false",
				"description":"The error to throw."
			}],
			"examples":[{
				"script":"\tvariable tVar as optional number\n\tput \"Z\" parsed as string into tVar\n\tif tVar is not defined then\n\t\tthrow tVar && \"is not a number\n\tend if"
			}],
			"description":"The throw statement causes an error to be raised. This causes execution to terminate, and the error is passed back to environment.\n\nThe Error expression must be an expression that evaluates to a string.\nNote:There is currently no try / catch mechanism in LiveCode Builder, so throwing an error will cause the error to be raised in LiveCode Script in the appropriate context."
		},{
			"id":"livecode_builder-328",
			"name":"nextrepeat",
			"display name":"NextRepeat",
			"library":"livecode_builder",
			"type":"control structure",
			"syntax":[
				"next repeat"
			],
			"display syntax":[
				"next repeat"
			],
			"associations":["com.livecode.language"],
			"summary":"Begin the next iteration of a repeat loop.",
			"examples":[{
				"script":"\tvariable tList as list\n\tvariable tElement\n\tput [1, 2, 3, \"a\", 4, \"b\", 5] into tList\n\n\tvariable tSum as number\n\tput 0 into tSum\n\trepeat for each element tElement in tList\n\t\tif tElement is not a number then\n\t\t\tnext repeat\n\t\tend if\n\n\t\tadd tElement to tSum\n\tend repeat"
			}],
			"description":"Use <NextRepeat|next repeat> to skip to the next iteration of a repeat loop. This is particularly useful when operations are only to be performed on iterands which satisfy certain criteria."
		},{
			"id":"livecode_builder-329",
			"name":"theresult",
			"display name":"TheResult",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"the result"
			],
			"display syntax":[
				"the result"
			],
			"associations":["com.livecode.language"],
			"summary":"The result of the previous statement.",
			"examples":[{
				"script":"\tresolve script object \"this stack\"\n\tget property \"name\" of the result\n\tlog the result"
			},{
				"script":"\tget 20\n\tsubtract 1 from the result\n\tdivide the result by 2\n\tround the result\n\t-- the result is 10"
			}],
			"description":"Use <TheResult|the result> to obtain the return value of the previous (executed) non-control structure statement.\n>*Note:* Result expressions are not assignable.\n"
		},{
			"id":"livecode_builder-330",
			"name":"return",
			"display name":"Return",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"return [<returnValue>]"
			],
			"display syntax":[
				"return [<i>returnValue</i>]"
			],
			"associations":["com.livecode.language"],
			"summary":"Causes execution of the current handler to end, and control return to the caller.",
			"parameters":[{
				"name":"returnValue",
				"type":"any",
				"refparam":"false",
				"description":"The value to return"
			}],
			"description":"Use the return control structure to halt execution of the current handler, to return control to the caller, and optionally to return a value.\nNote:It is a checked runtime error for a value returned from a handler to not match the return type of the handler it is in."
		},{
			"id":"livecode_builder-331",
			"name":"exitrepeat",
			"display name":"ExitRepeat",
			"library":"livecode_builder",
			"type":"control structure",
			"syntax":[
				"exit repeat"
			],
			"display syntax":[
				"exit repeat"
			],
			"associations":["com.livecode.language"],
			"summary":"Exit a repeat loop.",
			"examples":[{
				"script":"\tpublic handler ListUpToSentinel(in pList as list, in pSentinel as string) as list\n\n\t\tvariable tElement\n\t\tvariable tNewList as list\n\t\tput the empty list into tNewList\n\n\t\trepeat for each element tElement in pList\n\t\t\tif tElement is a string and tElement is pSentinel then\n\t\t\t\texit repeat\n\t\t\tend if\n\t\t\tpush tElement onto tNewList\n\t\tend repeat\n\n\t\treturn tNewList\n\tend handler"
			}],
			"description":"Use <ExitRepeat|exit repeat> to exit a repeat loop, for example when a certain condition is met."
		},{
			"id":"livecode_builder-332",
			"name":"get",
			"display name":"Get",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"get <expression>"
			],
			"display syntax":[
				"get <i>expression</i>"
			],
			"associations":["com.livecode.language"],
			"summary":"Evaluate an expression and put it into the result.",
			"parameters":[{
				"name":"expression",
				"type":"",
				"refparam":"false",
				"description":"Any expression."
			}],
			"description":"The get statement evaluates the Value expression and returns it as the result of the statement. The value is subsequently available by using <TheResult|the result> expression.",
			"references":{
				"expression":["TheResult"]
			}
		},{
			"id":"livecode_builder-333",
			"name":"repeatforeach",
			"display name":"RepeatForEach",
			"library":"livecode_builder",
			"type":"control structure",
			"syntax":[
				"repeat for each <Iterator> in <Container>\n\t<StatementList>\nend repeat"
			],
			"display syntax":[
				"repeat for each <i>Iterator</i> in <i>Container</i>"
			],
			"associations":["com.livecode.language"],
			"summary":"Executes a list of statements until the <Iterator> is exhausted.",
			"parameters":[{
				"name":"Iterator",
				"type":"",
				"refparam":"false",
				"description":"Any iterator expression."
			},{
				"name":"Container",
				"type":"",
				"refparam":"false",
				"description":"The container over which to iterate."
			},{
				"name":"StatementList",
				"type":"",
				"refparam":"false",
				"description":"A set of statements."
			}],
			"examples":[{
				"script":"\tvariable tElement\n\tvariable tNumbers as list\n\tput the empty list into tNumbers\n\n\trepeat for each element tElement in [\"a\", 1, 2, 3, \"b\", \"c\", 4]\n\t\tif tElement is a number then\n\t\t\tpush tElement onto tNumbers\n\t\tend if\n\tend repeat\n\n\t// tNumbers contains [1, 2, 3, 4]"
			}],
			"description":"Use the repeat for each control structure to iterate though the chars of a string, bytes of data, elements of a list or array, or keys of an array.\n>*Note:* The variable which contains the iterand must be declared prior to being used in the repeat loop.",
			"references":{
				"iterator":["RepeatForEachChar","RepeatForEachByte","RepeatForEachKey","RepeatForEachElementInList","RepeatForEachElementInArray"]
			}
		},{
			"id":"livecode_builder-334",
			"name":"repeatuntil",
			"display name":"RepeatUntil",
			"library":"livecode_builder",
			"type":"control structure",
			"syntax":[
				"repeat until <Condition>\n\t<StatementList>\nend repeat"
			],
			"display syntax":[
				"repeat until <i>Condition</i>"
			],
			"associations":["com.livecode.language"],
			"summary":"Executes a list of statements until a condition becomes true.",
			"parameters":[{
				"name":"Condition",
				"type":"bool",
				"refparam":"false",
				"description":"An expression which evaluates to a boolean."
			},{
				"name":"StatementList",
				"type":"",
				"refparam":"false",
				"description":"A set of statements."
			}],
			"description":"Use the repeat until <Condition> structure to execute a set of statements repeatedly, until the <Condition> evaluates to true."
		},{
			"id":"livecode_builder-335",
			"name":"repeatforever",
			"display name":"RepeatForever",
			"library":"livecode_builder",
			"type":"control structure",
			"syntax":[
				"repeat forever\n\t<StatementList>\nend repeat"
			],
			"display syntax":[
				"repeat forever"
			],
			"associations":["com.livecode.language"],
			"summary":"Executes a list of statements continually.",
			"parameters":[{
				"name":"StatementList",
				"type":"",
				"refparam":"false",
				"description":"A set of statements."
			}],
			"examples":[{
				"script":"\tvariable tCount as number\n\tvariable tList as list\n\tput [ 1, 2, 3, 4, 5, 6, 7, 8, \"A\", 9, 10 ] into tList\n\tput 0 into tCount\n\trepeat forever\n\t\tif tList[tCount] is not a number then\n\t\t\texit repeat\n\t\tend if\n\t\tadd 1 to tCount\n\tend repeat\n\n\t// tCount is 8"
			}],
			"description":"Use the repeat forever structure to execute a set of statements until either an error is thrown, or exit repeat is executed."
		},{
			"id":"livecode_builder-336",
			"name":"repeatwith",
			"display name":"RepeatWith",
			"library":"livecode_builder",
			"type":"control structure",
			"syntax":[
				"repeat with <Counter> from <Start> ( up | down ) to <Finish> [ by <Step> ]\n\t<StatementList>\nend repeat"
			],
			"display syntax":[
				"repeat with <i>Counter</i> from <i>Start</i> ( up | down ) to <i>Finish</i> [ by <i>Step</i> ]"
			],
			"associations":["com.livecode.language"],
			"summary":"Executes a list of statements",
			"parameters":[{
				"name":"Counter",
				"type":"",
				"refparam":"false",
				"description":"A numeric variable."
			},{
				"name":"Start",
				"type":"number",
				"refparam":"false",
				"description":"The initial value of <Counter>"
			},{
				"name":"Finish",
				"type":"number",
				"refparam":"false",
				"description":"The boundary value of <Counter>"
			},{
				"name":"Step",
				"type":"number",
				"refparam":"false",
				"description":"The value by which to increase or decrease the <Counter>"
			},{
				"name":"StatementList",
				"type":"",
				"refparam":"false",
				"description":"A set of statements."
			}],
			"examples":[{
				"script":"\tpublic handler Factorial(in pOperand as integer) as number\n\t\tif pOperand < 1 then\n\t\t\treturn 0\n\t\tend if\n\n\t\tvariable tTotal as number\n\t\tput 1 into tTotal\n\n\t\tvariable tCounter as integer\n\t\trepeat with tCounter from 1 up to pOperand \n\t\t\tmultiply tTotal by tCounter\n\t\tend repeat\n\n\t\treturn tCounter\n\tend handler"
			}],
			"description":"Use the repeat with <Counter> structure to execute a set of statements until the value of <Counter> reaches or crosses (depending on iteration direction) the value of <Finish>. The counter is increased (or decreased) by <Step> on each iteration of the loop."
		},{
			"id":"livecode_builder-337",
			"name":"com.livecode.language",
			"display name":"com.livecode.language",
			"library":"livecode_builder",
			"type":"",
			"display syntax":[
				"com.livecode.language"
			],
			"associations":["com.livecode.language"]
		},{
			"id":"livecode_builder-338",
			"name":"repeattimes",
			"display name":"RepeatTimes",
			"library":"livecode_builder",
			"type":"control structure",
			"syntax":[
				"repeat <Count> times\n\t<StatementList>\nend repeat"
			],
			"display syntax":[
				"repeat <i>Count</i> times"
			],
			"associations":["com.livecode.language"],
			"summary":"Executes a list of statements a given number of times.",
			"parameters":[{
				"name":"Count",
				"type":"integer",
				"refparam":"false",
				"description":"An expression which evaluates to an integer."
			},{
				"name":"StatementList",
				"type":"",
				"refparam":"false",
				"description":"A set of statements."
			}],
			"examples":[{
				"script":"public handler TwoToThePower(in pOperand as integer) as number\n\n\tif pOperand is 0 then\n\t\treturn 1\n\tend if\t\n\n\tvariable tCount as number\n\tput the abs of pOperand into tCount\n\n\tvariable tResult as number\n\tput 1 into tResult\n\trepeat tCount times\n\t\tmultiply tResult by 2\n\tend repeat\n\n\tif pOperand < 0 then \n\t\treturn 1 / tResult\n\tend if\n\n\treturn tResult\nend handler"
			}],
			"description":"Use the repeat <Count> times structure to execute a set of statements a given number of times, when the statements executed do not rely on knowing which iteration the repeat loop is on."
		},{
			"id":"livecode_builder-339",
			"name":"setto",
			"display name":"SetTo",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"set <targetContainer> to <sourceValue>"
			],
			"display syntax":[
				"set <i>targetContainer</i> to <i>sourceValue</i>"
			],
			"associations":["com.livecode.language"],
			"summary":"Put a value into a container.",
			"parameters":[{
				"name":"targetContainer",
				"type":"any",
				"refparam":"false",
				"description":"A valid target for <sourceValue>"
			},{
				"name":"sourceValue",
				"type":"any",
				"refparam":"false",
				"description":"The value to put into the <targetContainer>"
			}],
			"description":"Assigns the result of evaluating <sourceValue> to <targetContainer>.\n>*Note:* It is a checked runtime error for the source value's type to not be compatible with the target expression's type."
		},{
			"id":"livecode_builder-340",
			"name":"absoperator",
			"display name":"AbsOperator",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the abs of <Operand>"
			],
			"display syntax":[
				"the abs of <i>Operand</i>"
			],
			"associations":["com.livecode.math"],
			"summary":"Absolute value operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput the trunc of 3.9 into tVar -- tVar contains 3"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The absolute value of <Operand>."
			}],
			"description":"The absolute value of <Operand> is the value of <Operand> if it is greater than or equal to 0, or the negation of the value of <Operand> if it is less than zero.",
			"tags":["math"]
		},{
			"id":"livecode_builder-341",
			"name":"baseelogoperator",
			"display name":"BaseELogOperator",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"ln(<Operand>)"
			],
			"display syntax":[
				"ln(<i>Operand</i>)"
			],
			"associations":["com.livecode.math"],
			"summary":"Natural log operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput ln(exp(3)) into tVar -- tVar contains approximately 3"
			}],
			"description":"Natural log operator.",
			"tags":["math"]
		},{
			"id":"livecode_builder-342",
			"name":"maxlistoperator",
			"display name":"MaxListOperator",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the maximum value of <ValueList>"
			],
			"display syntax":[
				"the maximum value of <i>ValueList</i>"
			],
			"associations":["com.livecode.math"],
			"summary":"Max operator.\nList:An expression that evaluates to a list.",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The maximum value attained by the elements of <List>."
			}],
			"description":">*Note:* It is an error if any element of <List> is non-numeric.",
			"tags":["math"]
		},{
			"id":"livecode_builder-343",
			"name":"baseconvert",
			"display name":"BaseConvert",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Operand> converted from base <Source> to base <Target>"
			],
			"display syntax":[
				"<i>Operand</i> converted from base <i>Source</i> to base <i>Target</i>"
			],
			"associations":["com.livecode.math"],
			"summary":"Converts the base of <Operand>",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a string."
			},{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to an integer."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to an integer."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A string representation <Operand> interpreted as a number in base <From>, converted to base <To>."
			}],
			"description":"Interprets a string in the desired source base and converts it to the desired target base, and returns a string representation.\n\n>*Note:* The source and destination bases must be integers between 2 and 32.",
			"tags":["math"]
		},{
			"id":"livecode_builder-344",
			"name":"minlistoperator",
			"display name":"MinListOperator",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the minimum value of <ValueList>"
			],
			"display syntax":[
				"the minimum value of <i>ValueList</i>"
			],
			"associations":["com.livecode.math"],
			"summary":"Min operator.\nList:An expression that evaluates to a list.",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The minimal value attained by the elements of <List>."
			}],
			"description":">*Note:* It is an error if any element of <List> is non-numeric.",
			"tags":["math"]
		},{
			"id":"livecode_builder-345",
			"name":"expoperator",
			"display name":"ExpOperator",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"exp(<Operand>)"
			],
			"display syntax":[
				"exp(<i>Operand</i>)"
			],
			"associations":["com.livecode.math"],
			"summary":"Exponentiation operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput the exp(ln(100)) into tVar -- tVar contains approximately 100"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"e to the power of <Operand>"
			}],
			"description":"Exponentiation operator.",
			"tags":["math"]
		},{
			"id":"livecode_builder-346",
			"name":"baseconvertto",
			"display name":"BaseConvertTo",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Operand> converted to base <Target>"
			],
			"display syntax":[
				"<i>Operand</i> converted to base <i>Target</i>"
			],
			"associations":["com.livecode.math"],
			"summary":"Converts the base of <Operand>",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to an integer."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to an integer."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A string representation of <Operand> in base <Target>."
			}],
			"description":"Converts a decimal into the desired base, and returns a string representation.\n\n>*Note:* The destination base must be an integer between 2 and 32.",
			"tags":["math"]
		},{
			"id":"livecode_builder-347",
			"name":"base10logoperator",
			"display name":"Base10LogOperator",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"log(<Operand>)"
			],
			"display syntax":[
				"log(<i>Operand</i>)"
			],
			"associations":["com.livecode.math"],
			"summary":"Base 10 log operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput the log of 10000 into tVar -- tVar contains 5"
			}],
			"description":"Base 10 log operator.",
			"tags":["math"]
		},{
			"id":"livecode_builder-348",
			"name":"squarerootoperator",
			"display name":"SquareRootOperator",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"sqrt(<Operand>)"
			],
			"display syntax":[
				"sqrt(<i>Operand</i>)"
			],
			"associations":["com.livecode.math"],
			"summary":"Square root operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput sqrt(9) into tVar -- tVar contains 3"
			},{
				"script":"variable tVar as Number\nput the square root of 4 into tVar -- tVar contains 2"
			}],
			"description":"The square root of a number is the number which must be\nsquared to obtain number : sqrt(number)^2 is equal to number.",
			"tags":["math"]
		},{
			"id":"livecode_builder-349",
			"name":"binaryarctanoperator",
			"display name":"BinaryArctanOperator",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"atan2(<yCoord>,<xCoord>)"
			],
			"display syntax":[
				"atan2(<i>yCoord</i>,<i>xCoord</i>)"
			],
			"associations":["com.livecode.math"],
			"summary":"Binary arctan operator.",
			"parameters":[{
				"name":"yCoord",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"xCoord",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"    variable tVar as Number\n    put atan2(-1,-1) into tVar --tVar contains â3Ï/4."
			},{
				"script":"    variable tVar as Number\n    put the binary arctangent of -1 and -1 into tVar --tVar contains â3Ï/4."
			}],
			"description":"The binary arctan operator returns the angle in radians between the x-axis and the line from the origin to the point (xCoord, yCoord).\nThe angle returned has absolute value less than pi: âÏ < arctan2(y, x) â¤ Ï.",
			"tags":["math"]
		},{
			"id":"livecode_builder-350",
			"name":"arcsinoperator",
			"display name":"ArcsinOperator",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"asin(<Operand>)"
			],
			"display syntax":[
				"asin(<i>Operand</i>)"
			],
			"associations":["com.livecode.math"],
			"summary":"Arcsin operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput the asin(-1) into tVar -- tVar contains -pi/2"
			},{
				"script":"variable tVar as Number\nput the arcsine of 1 into tVar -- tVar contains pi/2"
			}],
			"description":"The inverse of the sin operator.",
			"tags":["math"]
		},{
			"id":"livecode_builder-351",
			"name":"truncoperator",
			"display name":"TruncOperator",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the trunc of <Operand>"
			],
			"display syntax":[
				"the trunc of <i>Operand</i>"
			],
			"associations":["com.livecode.math"],
			"summary":"Truncation operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput the trunc of 3.9 into tVar -- tVar contains 3"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"<Operand> truncated."
			}],
			"description":"The trunc of <Operand> is the integer part of the decimal representation of <Operand>.",
			"tags":["math"]
		},{
			"id":"livecode_builder-352",
			"name":"com.livecode.math",
			"display name":"com.livecode.math",
			"library":"livecode_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.math"
			],
			"associations":["com.livecode.math"],
			"summary":"This library consists of the mathematical operations included in the standard library of LiveCode Builder.",
			"description":"This library consists of the mathematical operations included in the standard library of LiveCode Builder."
		},{
			"id":"livecode_builder-353",
			"name":"sinoperator",
			"display name":"SinOperator",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"sin(<Operand>)"
			],
			"display syntax":[
				"sin(<i>Operand</i>)"
			],
			"associations":["com.livecode.math"],
			"summary":"Sin operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput sin(pi / 2) into tVar -- tVar contains 1"
			},{
				"script":"variable tVar as Number\nput the sine of pi into tVar -- tVar contains 0"
			}],
			"description":"Sin operator.",
			"tags":["math"]
		},{
			"id":"livecode_builder-354",
			"name":"arctanoperator",
			"display name":"ArctanOperator",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"atan(<Operand>)"
			],
			"display syntax":[
				"atan(<i>Operand</i>)"
			],
			"associations":["com.livecode.math"],
			"summary":"Arctan operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput atan(-1) into tVar -- tVar contains -pi / 4"
			},{
				"script":"variable tVar as Number\nput the arctangent of 1 into tVar -- tVar contains pi / 4"
			}],
			"description":"The inverse of the tan operator.",
			"tags":["math"]
		},{
			"id":"livecode_builder-355",
			"name":"cosoperator",
			"display name":"CosOperator",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"cos(<Operand>)"
			],
			"display syntax":[
				"cos(<i>Operand</i>)"
			],
			"associations":["com.livecode.math"],
			"summary":"Cos operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput cos(pi) into tVar -- tVar contains -1"
			}],
			"description":"Cos operator.",
			"tags":["math"]
		},{
			"id":"livecode_builder-356",
			"name":"maxoperator",
			"display name":"MaxOperator",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the maximum of <Left> and <Right>"
			],
			"display syntax":[
				"the maximum of <i>Left</i> and <i>Right</i>"
			],
			"associations":["com.livecode.math"],
			"summary":"Max operator.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The value of <Left>, if it is greater than the value of <Right>, and the value of <Right> otherwise."
			}],
			"description":"Max operator.",
			"tags":["math"]
		},{
			"id":"livecode_builder-357",
			"name":"arccosoperator",
			"display name":"ArccosOperator",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"acos(<Operand>)"
			],
			"display syntax":[
				"acos(<i>Operand</i>)"
			],
			"associations":["com.livecode.math"],
			"summary":"Arccos operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput acos(0) into tVar -- tVar contains pi/2"
			},{
				"script":"variable tVar as Number\nput the arccosine of -1 into tVar -- tVar contains pi"
			}],
			"description":"The inverse of the cos operator.",
			"tags":["math"]
		},{
			"id":"livecode_builder-358",
			"name":"minoperator",
			"display name":"MinOperator",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the minimum of <Left> and <Right>"
			],
			"display syntax":[
				"the minimum of <i>Left</i> and <i>Right</i>"
			],
			"associations":["com.livecode.math"],
			"summary":"Min operator.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The value of <Left>, if it is less than the value of <Right>, and the value of <Right> otherwise."
			}],
			"description":"Min operator.",
			"tags":["math"]
		},{
			"id":"livecode_builder-359",
			"name":"randomnumber",
			"display name":"RandomNumber",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"any number"
			],
			"display syntax":[
				"any number"
			],
			"associations":["com.livecode.math"],
			"summary":"Generates a pseudo-random number.",
			"examples":[{
				"script":"variable tVar as Number\nput any number into tVar -- 0 <= tVar <= 1"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A real between 0.0 and 1.0."
			}],
			"description":"Generates a pseudo-random number.",
			"tags":["math"]
		},{
			"id":"livecode_builder-360",
			"name":"baseconvertfrom",
			"display name":"BaseConvertFrom",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Operand> converted from base <Source>"
			],
			"display syntax":[
				"<i>Operand</i> converted from base <i>Source</i>"
			],
			"associations":["com.livecode.math"],
			"summary":"Converts the base of <Operand>",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a string."
			},{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to an integer."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"<Operand> converted to base 10."
			}],
			"description":"Interprets a string in the desired base and converts it to decimal.\n\n>*Note:* The source base must be an integer between 2 and 32.",
			"tags":["math"]
		},{
			"id":"livecode_builder-361",
			"name":"powoperator",
			"display name":"PowOperator",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Left> ^ <Right>"
			],
			"display syntax":[
				"<i>Left</i> ^ <i>Right</i>"
			],
			"associations":["com.livecode.math"],
			"summary":"Binary exponentiation operation.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput 5^2 into tVar -- tVar contains 25"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The result of raising <Left> to the power <Right>."
			}],
			"description":"Binary exponentiation operation.",
			"tags":["math"]
		},{
			"id":"livecode_builder-362",
			"name":"tanoperator",
			"display name":"TanOperator",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"tan(<Operand>)"
			],
			"display syntax":[
				"tan(<i>Operand</i>)"
			],
			"associations":["com.livecode.math"],
			"summary":"Tan operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput the tan(pi) into tVar -- tVar contains 0"
			},{
				"script":"variable tVar as Number\nput the tangent of pi /4 into tVar -- tVar contains approximately 1"
			}],
			"description":"Tan operator.",
			"tags":["math"]
		},{
			"id":"livecode_builder-363",
			"name":"com.livecode.java",
			"display name":"com.livecode.java",
			"library":"livecode_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.java"
			],
			"associations":["com.livecode.java"],
			"summary":"This module provides utility handlers for converting to and from Java types.",
			"description":"> **Important:** This library is currently supported on Android, Mac and\n> Linux. Binding to java classes requires the availability of a Java \n> runtime and access to the appropriate libraries. On Mac, \n> the `JAVA_HOME` environment variable must be set to the path to your \n> Java installation (usually at \n> `/Library/Java/JavaVirtualMachines/jdk1.7.0_55.jdk/Contents/Home`). \n> On Linux, your `LD_LIBRARY_PATH` must be set to the folder containing \n> the `libjvm.so` library (usually at `${JAVA_HOME}/jre/lib/amd64/server`\n> on 64-bit Linux)."
		},{
			"id":"livecode_builder-364",
			"name":"stringfromjstring",
			"display name":"StringFromJString",
			"library":"livecode_builder",
			"type":"handler",
			"syntax":[
				"StringFromJString(<pObj>)"
			],
			"display syntax":[
				"StringFromJString(<i>pObj</i>)"
			],
			"associations":["com.livecode.java"],
			"summary":"Convert a java string into a String",
			"parameters":[{
				"name":"pObj",
				"type":"",
				"refparam":"false",
				"description":"The JString to convert"
			}],
			"examples":[{
				"script":"foreign handler JavaGetDefaultLocale() returns JObject binds to \"java:java.util.Locale>getDefault()Ljava/util/Locale;!static\"\nforeign handler JavaLocaleDisplayName(in pLocale as JObject) returns JObject binds to \"java:java.util.Locale>getDisplayName()Ljava/lang/String;\"\n\npublic handler GetDefaultLocaleDisplayName() returns String\n\tunsafe \n\t\tvariable tLocale as JObject\n\t\tput JavaGetDefaultLocale() into tLocale\n\n\t\tvariable tDisplay as JString\n\t\tput JavaLocaleDisplayName(tLocale) into tDisplay\n\n\t\treturn StringFromJString(tDisplay)\n\tend unsafe\nend handler"
			}],
			"description":"Use <StringFromJString> to convert an instance of the class java.lang.String\nto a variable of type String."
		},{
			"id":"livecode_builder-365",
			"name":"pointertojobject",
			"display name":"PointerToJObject",
			"library":"livecode_builder",
			"type":"handler",
			"syntax":[
				"PointerToJObject(<pPointer>)"
			],
			"display syntax":[
				"PointerToJObject(<i>pPointer</i>)"
			],
			"associations":["com.livecode.java"],
			"summary":"Convert a Pointer into a JObject",
			"parameters":[{
				"name":"pPointer",
				"type":"",
				"refparam":"false",
				"description":"The Pointer to convert"
			}],
			"examples":[{
				"script":"foreign handler _JNI_SetTextViewText(in pView as JObject, in pValue as JString) returns nothing binds to \"java:android.widget.TextView>setText(Ljava/lang/CharSequence;)V\"\n\n-- set the text of a view\nunsafe handler ViewSetText(in pString as String)\n\tvariable tViewPtr as Pointer\n\tput my native layer into tPointer\n\n\tvariable tView as JObject\n\tput PointerToJObject into tView\n\t_JNI_SetTextViewText(tView, StringToJString(pString))\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A JObject wrapping the jobject Pointer"
			}],
			"description":"Use <PointerToJObject> to convert a variable of type Pointer to one of \ntype JObject. \n\n> *Important:* Your application will likely crash if the underlying type\n> of the Pointer is not actually jobject."
		},{
			"id":"livecode_builder-366",
			"name":"stringtojstring",
			"display name":"StringToJString",
			"library":"livecode_builder",
			"type":"handler",
			"syntax":[
				"StringToJString(<pString>)"
			],
			"display syntax":[
				"StringToJString(<i>pString</i>)"
			],
			"associations":["com.livecode.java"],
			"summary":"Convert a String into a java string",
			"parameters":[{
				"name":"pString",
				"type":"",
				"refparam":"false",
				"description":"The String to convert"
			}],
			"examples":[{
				"script":"foreign handler CreateJavaCurrencyWithCode(in pString as JString) returns JObject binds to \"java:java.util.Currency>getInstance(Ljava/lang/String;)Ljava/util/Currency;!static\"\n\n-- Create a new Currency object\nvariable tCurrency as JObject\nunsafe\n\tvariable tCode as JString\n\tput StringToJString(\"AMD\") into tCode\n\n\tput CreateJavaCurrencyWithCode(tCode) into tCurrency\nend unsafe"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A JObject of type java.lang.String"
			}],
			"description":"Use <StringToJString> to convert a variable of type String to an instance\nof the class java.lang.String."
		},{
			"id":"livecode_builder-367",
			"name":"pointerfromjobject",
			"display name":"PointerFromJObject",
			"library":"livecode_builder",
			"type":"handler",
			"syntax":[
				"PointerFromJObject(<pObj>)"
			],
			"display syntax":[
				"PointerFromJObject(<i>pObj</i>)"
			],
			"associations":["com.livecode.java"],
			"summary":"Convert a JObject into a Pointer",
			"parameters":[{
				"name":"pObj",
				"type":"",
				"refparam":"false",
				"description":"The JObject to convert"
			}],
			"examples":[{
				"script":"handler SetNativeLayerToView(in pView as JObject)\n\tvariable tViewPtr as Pointer\n\tput PointerFromJObject(pView) into tViewPtr\n\tset my native layer to tViewPtr\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The jobject Pointer wrapped by the JObject type"
			}],
			"description":"Use <PointerFromJObject> to convert a variable of type JObject to one of\ntype Pointer, i.e. to extract the underlying jobject pointer from a JObject\n"
		},{
			"id":"livecode_builder-368",
			"name":"byteisindata",
			"display name":"ByteIsInData",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Needle> is in <Target>"
			],
			"display syntax":[
				"<i>Needle</i> is in <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Determines whether <Needle> is in <Target>.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a single byte of binary data."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if <Needle> is among the bytes of <Target>, and false otherwise."
			}],
			"description":">*Note:* It is an error if <Needle> evaluates to data consisting of more than one byte.",
			"tags":["binary"]
		},{
			"id":"livecode_builder-369",
			"name":"byteoffset",
			"display name":"ByteOffset",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) offset of <Needle> in <Target>"
			],
			"display syntax":[
				"the ( first | last ) offset of <i>Needle</i> in <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Finds the first or last occurrence of <Needle> within <Target>",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the offset of <Needle> in <Target>."
			}],
			"description":"The first (respectively last) offset of <Needle> in <Target> is number of bytes between the first byte of <Target> and the first (respectively last) occurrence of <Needle>. If neither first or last is specified, then the first offset is found. If <Needle> does not occur in <Target>, then the output is 0.",
			"tags":["binary"]
		},{
			"id":"livecode_builder-370",
			"name":"deletefirstbyteof",
			"display name":"DeleteFirstByteOf",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"delete the first byte of <Target>"
			],
			"display syntax":[
				"delete the first byte of <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Deletes the first byte in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A binary data container."
			}],
			"description":"Replaces the first byte in <Target> with the empty data.\n\n>*Note:* It is an error if <Target> is the empty data.",
			"tags":["binary"]
		},{
			"id":"livecode_builder-371",
			"name":"singletonbyteof",
			"display name":"SingletonByteOf",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"byte <Index> of <Target>"
			],
			"display syntax":[
				"byte <i>Index</i> of <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Designates the byte of data at index <Index> in <Target>.",
			"parameters":[{
				"name":"Index",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"description":"Either locates the byte at the given index for use as the target container of another operation, or evaluates the byte at the given index as the source of another operation.\n\n>*Note:* It is an error if <Index> is out of range.",
			"tags":["binary"]
		},{
			"id":"livecode_builder-372",
			"name":"deletesingletonbyteof",
			"display name":"DeleteSingletonByteOf",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"delete byte <Index> of <Target>"
			],
			"display syntax":[
				"delete byte <i>Index</i> of <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Deletes the byte of data at index <Index> in <Target>.",
			"parameters":[{
				"name":"Index",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A container of binary data."
			}],
			"description":"Replaces the byte at the given index with the empty data.\n\n>*Note:* It is an error if <Index> is out of range.",
			"tags":["binary"]
		},{
			"id":"livecode_builder-373",
			"name":"randombytes",
			"display name":"RandomBytes",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Count> random bytes"
			],
			"display syntax":[
				"<i>Count</i> random bytes"
			],
			"associations":["com.livecode.byte"],
			"summary":"Generate random data",
			"parameters":[{
				"name":"Count",
				"type":"",
				"refparam":"false",
				"description":"Expression evaluating to the number of bytes to generate"
			}],
			"description":"Generates the requested number of bytes of cryptographic-quality\nrandom data.",
			"tags":["binary","random"]
		},{
			"id":"livecode_builder-374",
			"name":"repeatforeachbyte",
			"display name":"RepeatForEachByte",
			"library":"livecode_builder",
			"type":"iterator",
			"syntax":[
				"byte <Iterand>"
			],
			"display syntax":[
				"byte <i>Iterand</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Repeat over the bytes of some data",
			"parameters":[{
				"name":"Iterand",
				"type":"",
				"refparam":"false",
				"description":"A container of binary data."
			}],
			"description":"Use repeat for each to perform an operation on each byte of some data. On each iteration, the <Iterand> will contain the next char of the string being iterated over.",
			"tags":["binary","control structures"]
		},{
			"id":"livecode_builder-375",
			"name":"deleterangebyteof",
			"display name":"DeleteRangeByteOf",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"delete byte <Start> to <Finish> of <Target>"
			],
			"display syntax":[
				"delete byte <i>Start</i> to <i>Finish</i> of <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Deletes the bytes of data between indices <Start> and <Finish> in <Target>.",
			"parameters":[{
				"name":"Start",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Finish",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A container of binary data."
			}],
			"description":"Replaces the bytes between the given indices with the empty data.\n\n>*Note:* It is an error if either <Start> or <Finish> are out of range.",
			"tags":["binary"]
		},{
			"id":"livecode_builder-376",
			"name":"bytewithcode",
			"display name":"ByteWithCode",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the byte with code <Value>"
			],
			"display syntax":[
				"the byte with code <i>Value</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Create a 1-byte data value from a number",
			"parameters":[{
				"name":"Value",
				"type":"",
				"refparam":"false",
				"description":"The value for the new data value"
			}],
			"description":"Returns a byte of binary data, created using the given value.  The\n<Value> must be between 0 and 255 (inclusive).",
			"tags":["binary"]
		},{
			"id":"livecode_builder-377",
			"name":"countbytesof",
			"display name":"CountBytesOf",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the number of bytes in <Target>"
			],
			"display syntax":[
				"the number of bytes in <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Counts the number of bytes in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The number of bytes in <Target>"
			}],
			"description":"Counts the number of bytes in <Target>.",
			"tags":["binary"]
		},{
			"id":"livecode_builder-378",
			"name":"byteoffsetafter",
			"display name":"ByteOffsetAfter",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) offset of <Needle> after <After> in <Target>"
			],
			"display syntax":[
				"the ( first | last ) offset of <i>Needle</i> after <i>After</i> in <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Finds the first or last occurrence of <Needle> after a specified index in <Target>",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"After",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of Target."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the offset of <Needle> after index <After> in <Target>."
			}],
			"description":"The first (respectively last) offset of <Needle> in <Target> is number of bytes between byte <After> of <Target> and the first (respectively last) occurrence of <Needle> after <After>. If neither first or last is specified, then the first offset is found. If <Needle> does not occur after <After> in <Target>, then the output is 0.",
			"tags":["binary"]
		},{
			"id":"livecode_builder-379",
			"name":"com.livecode.byte",
			"display name":"com.livecode.byte",
			"library":"livecode_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.byte"
			],
			"associations":["com.livecode.byte"],
			"summary":"This library consists of the operations on bytes included in the standard library of LiveCode Builder.",
			"description":"This library consists of the operations on bytes included in the standard library of LiveCode Builder."
		},{
			"id":"livecode_builder-380",
			"name":"beginswithbytes",
			"display name":"BeginsWithBytes",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Target> begins with <Needle>"
			],
			"display syntax":[
				"<i>Target</i> begins with <i>Needle</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Determines whether <Target> begins with <Needle>.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if the bytes of <Needle> occur as an initial subsequence of the bytes of <Target>, and false otherwise."
			}],
			"description":">*Note:* Since the empty data is an initial subsequence of every sequence of bytes, every sequence of bytes begins with the empty data.",
			"tags":["binary"]
		},{
			"id":"livecode_builder-381",
			"name":"endswithbytes",
			"display name":"EndsWithBytes",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Target> ends with <Needle>"
			],
			"display syntax":[
				"<i>Target</i> ends with <i>Needle</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Determines whether <Target> ends with <Needle>.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if the bytes of <Needle> occur as a final subsequence of the bytes of <Target>, and false otherwise."
			}],
			"description":">*Note:* Since the empty data is a final subsequence of every sequence of bytes, every sequence of bytes ends with the empty data.",
			"tags":["binary"]
		},{
			"id":"livecode_builder-382",
			"name":"containsbytes",
			"display name":"ContainsBytes",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Target> contains <Needle>"
			],
			"display syntax":[
				"<i>Target</i> contains <i>Needle</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Determines whether <Needle> contains <Target>.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if the bytes of <Needle> occur as a subsequence of the bytes of <Target>, and false otherwise."
			}],
			"description":">*Note:* Since the empty data is a subsequence of every sequence of bytes, every sequence of bytes contains the empty data.",
			"tags":["binary"]
		},{
			"id":"livecode_builder-383",
			"name":"lastbyteof",
			"display name":"LastByteOf",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the last byte of <Target>"
			],
			"display syntax":[
				"the last byte of <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Designates the first byte of data in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"description":"Either locates the first byte for use as the target container of another operation, or evaluates the first byte as the source of another operation.\n\n>*Note:* It is an error if <Target> is empty.",
			"tags":["binary"]
		},{
			"id":"livecode_builder-384",
			"name":"deletelastbyteof",
			"display name":"DeleteLastByteOf",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"delete the last byte of <Target>"
			],
			"display syntax":[
				"delete the last byte of <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Deletes the last byte in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A binary data container."
			}],
			"description":"Replaces the last byte in <Target> with the empty data.\n\n>*Note:* It is an error if <Target> is the empty data.",
			"tags":["binary"]
		},{
			"id":"livecode_builder-385",
			"name":"byteoffsetbefore",
			"display name":"ByteOffsetBefore",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) offset of <Needle> before <Before> in <Target>"
			],
			"display syntax":[
				"the ( first | last ) offset of <i>Needle</i> before <i>Before</i> in <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Finds the first or last occurrence of <Needle> before a specified index in <Target>.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Before",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of Target."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the offset of <Needle> before index <Before> in <Target>."
			}],
			"description":"The first (respectively last) offset of <Needle> in <Target> is number of bytes between the first byte of <Target> and the first (respectively last) occurrence of <Needle> before <Before>. If neither first or last is specified, then the last offset is found. If <Needle> does not occur before <Before> in <Target>, then the output is 0.",
			"tags":["binary"]
		},{
			"id":"livecode_builder-386",
			"name":"firstbyteof",
			"display name":"FirstByteOf",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the first byte of <Target>"
			],
			"display syntax":[
				"the first byte of <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Designates the first byte of data in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"description":"Either locates the first byte for use as the target container of another operation, or evaluates the first byte as the source of another operation.\n\n>*Note:* It is an error if <Target> is empty.",
			"tags":["binary"]
		},{
			"id":"livecode_builder-387",
			"name":"codeofbyte",
			"display name":"CodeOfByte",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the code of <Target>"
			],
			"display syntax":[
				"the code of <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Get the numeric value of a single byte.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A 1-byte binary data value."
			}],
			"description":"Returns the numeric representation of a single byte of binary data.",
			"tags":["binary"]
		},{
			"id":"livecode_builder-388",
			"name":"rangebyteof",
			"display name":"RangeByteOf",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"byte <Start> to <Finish> of <Target>"
			],
			"display syntax":[
				"byte <i>Start</i> to <i>Finish</i> of <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Designates the bytes of data between indices <Start> and <Finish> in <Target>.",
			"parameters":[{
				"name":"Start",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Finish",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"description":"Either locates the bytes between the given indices for use as the target container of another operation, or evaluates the bytes at the given indices as the source of another operation.\n\n>*Note:* It is an error if either <Start> or <Finish> are out of range.",
			"tags":["binary"]
		},{
			"id":"livecode_builder-389",
			"name":"reversebytesof",
			"display name":"ReverseBytesOf",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"reverse <Target>"
			],
			"display syntax":[
				"reverse <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Reverse binary data",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A binary data string"
			}],
			"examples":[{
				"script":"variable tForward\nput 5 random bytes into tForward\n\nvariable tReversed\nput tForward into tReversed\nreverse tReversed\n\nexpect that the first byte of tForward is the last byte of tReversed\nexpect that the last byte of tForward is the first byte of tReversed"
			}],
			"description":"Reverses the order of bytes in the <Target>.",
			"tags":["binary"]
		},{
			"id":"livecode_builder-390",
			"name":"countcodeunitsof",
			"display name":"CountCodeunitsOf",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the number of codeunits in <Target>"
			],
			"display syntax":[
				"the number of codeunits in <i>Target</i>"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"Counts the number of codeunits in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"variable tVar as Number\nvariable tSource as String\nput \"hello\" into tString\nput the number of codeunits in tString into tVar\n\nvariable tString as String\nput the empty string into tString\t\nrepeat tVar times\n\tput \"a\" after tString\nend repeat\n\n// tString contains \"aaaaa\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The number of codeunits in <Target>."
			}],
			"description":">*Note:* The number of codeunits returns the number of codeunits of the target string. It does not perform any grapheme boundary analysis.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-391",
			"name":"deletelastcodeunitof",
			"display name":"DeleteLastCodeunitOf",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"delete the last codeunit of <Target>"
			],
			"display syntax":[
				"delete the last codeunit of <i>Target</i>"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"Deletes the last codeunit in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A string container."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"deadliness\" into tVar\ndelete the last codeunit of tVar -- tVar contains \"deadlines\""
			}],
			"description":"Replaces the last codeunit in <Target> with the empty string.\n\n>*Note:* It is an error if <Target> is the empty string.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-392",
			"name":"repeatforeachcodeunit",
			"display name":"RepeatForEachCodeunit",
			"library":"livecode_builder",
			"type":"iterator",
			"syntax":[
				"codeunit <Iterand>"
			],
			"display syntax":[
				"codeunit <i>Iterand</i>"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"Repeat over the codeunits of a string",
			"parameters":[{
				"name":"Iterand",
				"type":"",
				"refparam":"false",
				"description":"A string container."
			}],
			"examples":[{
				"script":"variable tString as String\nput \"stressed\" into tString\n\nvariable tReversed as String\nvariable tCodeunit as String\nput \"\" into tReversed\nrepeat for each codeunit tCodeunit in tString\n\tput tCodeunit before tReversed\nend repeat\n\n    // tReversed is \"desserts\""
			}],
			"description":"Use repeat for each to perform an operation on each codeunit of a string. On each iteration, the <Iterand> will contain the next codeunit of the string being iterated over.",
			"tags":["strings","control structures"]
		},{
			"id":"livecode_builder-393",
			"name":"deletesingletoncodeunitof",
			"display name":"DeleteSingletonCodeunitOf",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"delete codeunit <Index> of <Target>"
			],
			"display syntax":[
				"delete codeunit <i>Index</i> of <i>Target</i>"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"Deletes the codeunit at index <Index> in <Target>.",
			"parameters":[{
				"name":"Index",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A string container."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"thorough\" into tVar\ndelete codeunit 3 of tVar -- tVar contains \"through\""
			}],
			"description":"Replaces the codeunit at the given index with the empty string.\n\n>*Note:* It is an error if <Index> is out of range.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-394",
			"name":"codeunitoffset",
			"display name":"CodeunitOffset",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) offset of codeunits <Needle> in <Target>"
			],
			"display syntax":[
				"the ( first | last ) offset of codeunits <i>Needle</i> in <i>Target</i>"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"Finds the first or last occurrence of <Needle> within <Target>",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput the first offset of codeunits \"art\" in \"cartoon\" into tVar -- tVar contains 2"
			},{
				"script":"variable tVar as Number\nvariable tFilePath as String\nput \"/Users/user/Documents/file.txt\" into tFilePath\nput the last offset of \"/\" in tFilePath into tVar\n\nvariable tFileName as String\nput codeunit 1 to tVar of tFilePath into tFileName -- tVar contains \"file.txt\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the offset of <Needle> in <Target>."
			}],
			"description":"The first (respectively last) offset of <Needle> in <Target> is number of codeunits between the first codeunit of <Target> and the first (respectively last) occurrence of <Needle>. If neither first or last is specified, then the first offset is found. If <Needle> does not occur in <Target>, then the output is 0.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-395",
			"name":"singletoncodeunitof",
			"display name":"SingletonCodeunitOf",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"codeunit <Index> of <Target>"
			],
			"display syntax":[
				"codeunit <i>Index</i> of <i>Target</i>"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"Designates the codeunit at index <Index> in <Target>.",
			"parameters":[{
				"name":"Index",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"put the empty string into codeunit 5 of tString // Locates codeunit 5 and removes it from tString"
			},{
				"script":"get codeunit 5 of tString // Evaluates codeunit 5"
			}],
			"description":"Either locates the codeunit at the given index for use as the target container of another operation, or evaluates the codeunit at the given index as the source of another operation.\n\n>*Note:* It is an error if <Index> is out of range.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-396",
			"name":"codeunitoffsetafter",
			"display name":"CodeunitOffsetAfter",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) offset of codeunits <Needle> after <After> in <Target>"
			],
			"display syntax":[
				"the ( first | last ) offset of codeunits <i>Needle</i> after <i>After</i> in <i>Target</i>"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"Finds the first or last occurrence of <Needle> after a specified index in <Target>",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"After",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of Target."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput the offset of codeunits \"nse\" after 4 in \"nonsense\" into tVar -- tVar contains 2"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the offset of <Needle> after <After> in <Target>."
			}],
			"description":"The first (respectively last) offset of <Needle> in <Target> is number of codeunits between the first codeunit of the substring of <Target> beginning at codeunit <After> + 1, and the first (respectively last) occurrence of <Needle> in the substring. If neither first or last is specified, then the first offset is found. If <Needle> does not occur in the given substring of <Target>, then the output is 0.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-397",
			"name":"lastcodeunitof",
			"display name":"LastCodeunitOf",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the last codeunit of <Target>"
			],
			"display syntax":[
				"the last codeunit of <i>Target</i>"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"Designates the last codeunit in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"codeunit\" into tVar\n\nvariable tLast as String\nput the last codeunit of tVar into tLast -- tLast contains \"r\""
			}],
			"description":"Either locates the last codeunit for use as the target container of another operation, or evaluates the last codeunit as the source of another operation.\n\n>*Note:* It is an error if <Target> is empty.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-398",
			"name":"deletefirstcodeunitof",
			"display name":"DeleteFirstCodeunitOf",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"delete the first codeunit of <Target>"
			],
			"display syntax":[
				"delete the first codeunit of <i>Target</i>"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"Deletes the first codeunit in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A string container."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"seven\" into tVar\ndelete the first codeunit of tVar -- tVar contains \"even\""
			}],
			"description":"Replaces the first codeunit in <Target> with the empty string.\n\n>*Note:* It is an error if <Target> is the empty string.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-399",
			"name":"codeunitoffsetbefore",
			"display name":"CodeunitOffsetBefore",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) offset of codeunits <Needle> before <Before> in <Target>"
			],
			"display syntax":[
				"the ( first | last ) offset of codeunits <i>Needle</i> before <i>Before</i> in <i>Target</i>"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"Finds the first or last occurrence of <Needle> before a specified index in <Target>.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Before",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of Target."
			}],
			"examples":[{
				"script":"variable tVar as Number\nvariable tLastDot as Number\nvariable tAddress as String\nvariable tTLD as String\nput \"http://www.livecode.com/index.html\" into tAddress\nput the last offset of \".\" in tAddress into tLastDot\nput the offset of \".\" before tLastDot in tAddress into tVar\nput codeunit tVar + 1 to tVar + 3 of tAddress into tTLD -- tTLD contains \"com\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the offset of <Needle> before <Before> in <Target>."
			}],
			"description":"The first (respectively last) offset of <Needle> in <Target> is number of codeunits between the first codeunit of <Target>, and the first (respectively last) occurrence of <Needle> in the substring of <Target> ending at codeunit <Before> - 1. If neither first or last is specified, then the last offset is found. If <Needle> does not occur in the given substring of <Target>, then the output is 0.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-400",
			"name":"rangecodeunitof",
			"display name":"RangeCodeunitOf",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"codeunit <Start> to <Finish> of <Target>"
			],
			"display syntax":[
				"codeunit <i>Start</i> to <i>Finish</i> of <i>Target</i>"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"Designates the codeunits between indices <Start> and <Finish> in <Target>.",
			"parameters":[{
				"name":"Start",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Finish",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"put tCodeunits into codeunit 5 to 10 of tString // Locates codeunits 5 to 10 of tString and replace them with tCodeunits"
			},{
				"script":"get codeunit 5 to 10 of tString // Evaluates codeunits 5 to 10"
			}],
			"description":"Either locates the codeunits between the given indices for use as the target container of another operation, or evaluates the codeunits at the given indices as the source of another operation.\n\n>*Note:* It is an error if either <Start> or <Finish> are out of range.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-401",
			"name":"com.livecode.codeunit",
			"display name":"com.livecode.codeunit",
			"library":"livecode_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.codeunit"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"This library consists of the operations on codeunits included in the standard library of LiveCode Builder.",
			"description":"This library consists of the operations on codeunits included in the standard library of LiveCode Builder."
		},{
			"id":"livecode_builder-402",
			"name":"deleterangecodeunitof",
			"display name":"DeleteRangeCodeunitOf",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"delete codeunit <Start> to <Finish> of <Target>"
			],
			"display syntax":[
				"delete codeunit <i>Start</i> to <i>Finish</i> of <i>Target</i>"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"Deletes the codeunits between indices <Start> and <Finish> in <Target>.",
			"parameters":[{
				"name":"Start",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Finish",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A string container."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"surround\" into tVar\ndelete codeunit 2 to 4 of tVar -- tVar contains \"sound\""
			}],
			"description":"Replaces the codeunits between the given indices with the empty string.\n\n>*Note:* It is an error if either <Start> or <Finish> are out of range.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-403",
			"name":"firstcodeunitof",
			"display name":"FirstCodeunitOf",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the first codeunit of <Target>"
			],
			"display syntax":[
				"the first codeunit of <i>Target</i>"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"Designates the first codeunit in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"codeunit\" into tVar\n\nvariable tFirst as String\nput the last codeunit of tVar into tFirst -- tFirst contains \"c\""
			}],
			"description":"Either locates the first codeunit for use as the target container of another operation, or evaluates the first codeunit as the source of another operation.\n\n>*Note:* It is an error if <Target> is empty.",
			"tags":["strings"]
		},{
			"id":"livecode_builder-404",
			"name":"onmouseup",
			"display name":"OnMouseUp",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnMouseUp"
			],
			"display syntax":[
				"OnMouseUp"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the user releases the mouse button.",
			"examples":[{
				"script":"public handler OnMouseUp() returns nothing\n    if the mouse position is not within my bounds then\n       return\n    end if\n\n    if the click button is 1 then\n       -- do primary button action\n    else\n       -- do secondary button action\n    end if\nend handler"
			}],
			"description":"The <OnMouseUp> message is sent when a mouse button is released.\n\n**Note:** A widget may receive the <OnMouseUp> message even if the\nmouse pointer isn't within the widget's bounds.",
			"references":{
				"expression":["TheClickButton","TheMouseLocation"]
			},
			"tags":["widget"]
		},{
			"id":"livecode_builder-405",
			"name":"ondragmove",
			"display name":"OnDragMove",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnDragMove"
			],
			"display syntax":[
				"OnDragMove"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when a dragged object is moved within the widget rect.",
			"description":"Sent when a dragged object is moved within the widget rect.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-406",
			"name":"theclickbutton",
			"display name":"TheClickButton",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"the ( current ) click button"
			],
			"display syntax":[
				"the ( current ) click button"
			],
			"associations":["com.livecode.widget"],
			"summary":"Determines the mouse button which started the mouse click.",
			"examples":[{
				"script":"    variable tButton as integer\n    put the click button into tButton\n\n    if tButton is 1 then\n        // do primary button action\n    else\n        // do secondary button action\n    end if"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The index of the mouse button which started the mouse click."
			}],
			"description":"Determines the mouse button which started the mouse click.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-407",
			"name":"mypaint",
			"display name":"MyPaint",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"my ( foreground |             background |             highlight |             border |             top |             bottom |             shadow |             focus ) paint"
			],
			"display syntax":[
				"my ( foreground |             background |             highlight |             border |             top |             bottom |             shadow |             focus ) paint"
			],
			"associations":["com.livecode.widget"],
			"summary":"Returns a particular paint of the widget.",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The current setting of the specified paint of the widget."
			}],
			"description":"Use 'my ... paint' to fetch the paint to use for the given theme\nproperty of the widget. The returned paint will either be a solid\ncolor, or a pattern depending on the effective color and pattern\nproperties of the widget's object.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-408",
			"name":"onparentpropertychanged",
			"display name":"OnParentPropertyChanged",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnParentPropertyChanged"
			],
			"display syntax":[
				"OnParentPropertyChanged"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when a property of the widget parent is changed.",
			"description":"Handle the <OnParentPropertyChanged> message when a widget property depends on the properties of a parent object.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-409",
			"name":"ondoubleclick",
			"display name":"OnDoubleClick",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnDoubleClick"
			],
			"display syntax":[
				"OnDoubleClick"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the widget is double-clicked.",
			"description":"Sent when the widget is double-clicked.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-410",
			"name":"mydisabled",
			"display name":"MyDisabled",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"my disabled"
			],
			"display syntax":[
				"my disabled"
			],
			"associations":["com.livecode.widget"],
			"summary":"Returns the disabled state of the widget.",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The disabled state of the widget."
			}],
			"description":"Returns the disabled state of the widget.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-411",
			"name":"onmousecancelhover",
			"display name":"OnMouseCancelHover",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnMouseCancelHover"
			],
			"display syntax":[
				"OnMouseCancelHover"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the mouse pointer continues to hover outside of the widget's rect.",
			"description":"Sent when the mouse pointer continues to hover outside of the widget's rect.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-412",
			"name":"ontimer",
			"display name":"OnTimer",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnTimer"
			],
			"display syntax":[
				"OnTimer"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when a timer message has been scheduled.",
			"examples":[{
				"script":"// Create a timer loop\npublic handler OnTimer()\n\t...\n\tschedule timer in 1 seconds\nend handler"
			}],
			"description":"Handle the <OnTimer> message to perform an action at a scheduled time.\n>*Note:* OnTimer messages are only sent whilst in browse tool mode. If a timer is\ndelivered whilst in pointer tool mode it will be deferred until browser tool mode is\nre-entered.",
			"references":{
				"statement":["ScheduleTimerIn"]
			},
			"tags":["widget"]
		},{
			"id":"livecode_builder-413",
			"name":"com.livecode.widget",
			"display name":"com.livecode.widget",
			"library":"livecode_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.widget"
			],
			"associations":["com.livecode.widget"],
			"summary":"This library consists of the operations on widgets provided by LiveCode Builder.",
			"description":"This library consists of the operations on widgets provided by LiveCode Builder."
		},{
			"id":"livecode_builder-414",
			"name":"propertyofwidget",
			"display name":"PropertyOfWidget",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"property <mName> of <mWidget>"
			],
			"display syntax":[
				"property <i>mName</i> of <i>mWidget</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"Manipulates a property implemented by a child widget.",
			"parameters":[{
				"name":"mName",
				"type":"",
				"refparam":"false",
				"description":"The name of a property declared by <mWidget>"
			},{
				"name":"mWidget",
				"type":"",
				"refparam":"false",
				"description":"The child widget object"
			}],
			"examples":[{
				"script":"variable tChild as Widget\nput a new widget \"com.livecode.widget.navbar\" into tChild\nplace tChild\n-- Initialise selected element of nav bar to 1\nset property \"selectedItem\" of tChild to 1"
			}],
			"description":"Use the <PropertyOfWidget> operator to get or set properties of a child widget that are not and of the built-in\nwidget properties.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-415",
			"name":"onlayerchanged",
			"display name":"OnLayerChanged",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnLayerChanged"
			],
			"display syntax":[
				"OnLayerChanged"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the widget layer is changed.",
			"description":"Sent when the widget layer is changed.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-416",
			"name":"onkeypress",
			"display name":"OnKeyPress",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnKeyPress <keyText>"
			],
			"display syntax":[
				"OnKeyPress <i>keyText</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when a key is pressed while the widget has focus.",
			"parameters":[{
				"name":"keyText",
				"type":"string",
				"refparam":"false",
				"description":"The key pressed"
			}],
			"description":"Sent when a key is pressed while the widget has focus.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-417",
			"name":"mypixelscale",
			"display name":"MyPixelScale",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"my pixel scale"
			],
			"display syntax":[
				"my pixel scale"
			],
			"associations":["com.livecode.widget"],
			"summary":"Returns the scaling factor of pixels for the widget",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The current scaling factor of pixels for the widget"
			}],
			"description":"Use the widget's pixel scale to calculate the size of an image to draw. For example,\nwhen drawing an image to `my bounds` create an image sized using\n`my width * my pixel scale, my height * my pixel scale` otherwise the image will be\nstretched to match the pixel scale. The pixel scale is a per-window/screen property\nso may change if the user moves a window to a new screen.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-418",
			"name":"theclicklocation",
			"display name":"TheClickLocation",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"the ( current ) click position"
			],
			"display syntax":[
				"the ( current ) click position"
			],
			"associations":["com.livecode.widget"],
			"summary":"Determines the location of a mouse click.",
			"examples":[{
				"script":"variable tClick as Point\nput the click position into tClick\n\nvariable tRect as Rectangle\nput my bounds into tRect\n\nif tClick is within tRect then\n\t// click was within widget bounds\nend if"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The location of the mouse pointer when it was clicked."
			}],
			"description":"Use the mouse location to obtain the location of the mouse pointer when it was last clicked. Use the 'current' form to obtain the asynchronous click position.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-419",
			"name":"onpaint",
			"display name":"OnPaint",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnPaint"
			],
			"display syntax":[
				"OnPaint"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the widget is to be drawn.",
			"examples":[{
				"script":"public handler OnPaint()\n\tvariable tCirclePath as Path\n\tput circle path centered at point [the width of my bounds/2,the height of my bounds/2] with radius (the width of my bounds/2) into tFacePath\n\tset the paint of this canvas to solid paint with color [1, 0, 1]\n\tfill tFacePath on this canvas\nend handler"
			}],
			"description":"Handle the <OnPaint> message to draw the widget when it needs to be updated.\n>*Note:* Access to most script object operations is not allowed whilst an OnPaint\nhandler is running.",
			"references":{
				"statement":["RedrawAll"]
			},
			"tags":["widget"]
		},{
			"id":"livecode_builder-420",
			"name":"popupwidget",
			"display name":"PopupWidget",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"popup widget <Kind> at <Location> [ with properties <Properties> ]"
			],
			"display syntax":[
				"popup widget <i>Kind</i> at <i>Location</i> [ with properties <i>Properties</i> ]"
			],
			"associations":["com.livecode.widget"],
			"summary":"Opens a widget within a popup window.",
			"parameters":[{
				"name":"Kind",
				"type":"",
				"refparam":"false",
				"description":"The unique identifier of the widget to use for the popup."
			},{
				"name":"Location",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a <Point> relative to the current widget. The topleft corner of the popup window will be placed here."
			},{
				"name":"Properties",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to an <array>. For each key of the array, the popup widget will be initialized by setting that property to the value for that key."
			}],
			"examples":[{
				"script":"private variable mColor as Color\n\npublic handler OnClick()\n\tvariable tProperties as Array\n\tput the empty array into tProperties\n\tput mColor into tProperties[\"currentColor\"]\n\n\tpopup widget \"com.livecode.widget.ColorPicker\" at the mouse position with properties tProperties\n\tif the result is not nothing then\n\t\tput the result into mColor\n\t\tredraw all\n\tend if\nend handler\n\npublic handler OnPaint()\n\t...\n\tset the paint of this canvas to solid paint with color mColor\n\t...\nend handler"
			}],
			"value":[{
				"name":"the result",
				"type":"",
				"description":"The result returned by the popup. If the popup is dismissed (by clicking outside the bounds of the popup) this value will be nothing."
			}],
			"description":"Use to display a widget within a popup window, for example as a tooltip or picker dialog.",
			"references":{
				"expression":["IsPoppedUp"],
				"statement":["ClosePopupWithResult"],
				"operator":["IsDefined"]
			},
			"tags":["widget"]
		},{
			"id":"livecode_builder-421",
			"name":"onfocusleave",
			"display name":"OnFocusLeave",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnFocusLeave"
			],
			"display syntax":[
				"OnFocusLeave"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the widget loses focus.",
			"description":"Sent when the widget loses focus.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-422",
			"name":"widgetlocationproperty",
			"display name":"WidgetLocationProperty",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the location of <mWidget>"
			],
			"display syntax":[
				"the location of <i>mWidget</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"Manipulates the location property of a child widget",
			"parameters":[{
				"name":"mWidget",
				"type":"",
				"refparam":"false",
				"description":"The child widget object"
			}],
			"examples":[{
				"script":"private variable mChild as Widget\n\npublic handler OnCreate() returns nothing\n    -- place the child widget at the center of this widget\n    variable tLoc as Point\n    put point [my width / 2, my height / 2] into tLoc\n    put a new widget \"com.livecode.widget.button\" into mChild\n    place mChild\n    set the location of mChild to tLoc\nend handler"
			}],
			"description":"Use the location property to set the location of a child widget relative to the top left of the parent.\nThe location property is of type com.livecode.canvas.Point.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-423",
			"name":"ondragenter",
			"display name":"OnDragEnter",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnDragEnter"
			],
			"display syntax":[
				"OnDragEnter"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when an object is dragged onto the widget rect.",
			"description":"Sent when an object is dragged onto the widget rect.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-424",
			"name":"mynativelayer",
			"display name":"MyNativeLayer",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"my native layer"
			],
			"display syntax":[
				"my native layer"
			],
			"associations":["com.livecode.widget"],
			"summary":"Get the current widget's native layer pointer",
			"value":[{
				"name":"return",
				"type":"",
				"description":"A platform-specific native layer pointer"
			}],
			"description":"Get the current widget's native layer pointer",
			"references":{
				"operator":["NativeLayerOfWidget"]
			},
			"tags":["widget","native layer"]
		},{
			"id":"livecode_builder-425",
			"name":"thiswidget",
			"display name":"ThisWidget",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"this widget"
			],
			"display syntax":[
				"this widget"
			],
			"associations":["com.livecode.widget"],
			"summary":"Returns the current widget.",
			"examples":[{
				"script":"-- In a widget\nprivate variable mSelf as Widget\npublic handler OnCreate() returns nothing\n\t-- Keep a reference to this widget\n\tput this widget into mSelf\n\n\t-- defined in separate module library\n\tSetEventCallback(EventCallback)\nend handler\n\n-- may be called from another module library\nprivate handler EventCallback() returns nothing\n\t-- update internal variables\n\n\t-- notify ide of changes\n\ttrigger all in mSelf\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A widget object."
			}],
			"description":"This widget evaluates to the current widget. This can be used to retain a\nreference for occasions where widget handlers may be called from another module,\nwhere the current widget may not be valid.\n\nThis is useful when LCB handlers within a widget module are used as\nasynchronous callback functions passed to foreign functions, as these may be\ncalled at a time when the widget is not the currently active widget. Using the\nreference prevents updates being seen as coming from the wrong widget.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-426",
			"name":"annotationofwidget",
			"display name":"AnnotationOfWidget",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"annotation <mName> of <mWidget>"
			],
			"display syntax":[
				"annotation <i>mName</i> of <i>mWidget</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"Manipulates an annotation of a child widget",
			"examples":[{
				"script":"-- variable storing the last child widget the mouse was over\nvariable mLastChild as String\n\npublic handler OnCreate() returns nothing\n    variable tChildWidget as Widget\n    variable tCount as Number\n    repeat with tCount from 1 up to 10\n        put a new widget \"com.livecode.widget.button\" into tChildWidget\n        set annotation \"Name\" of tChildWidget to (\"Child\" && tCount formatted as string)\n    end repeat\nend handler\n\npublic handler OnMouseEnter() returns nothing\n    if the target is not nothing then\n        put annotation \"Name\" of the target into mLastChild\n    end if\nend handler"
			}],
			"description":"An annotation is a named value assigned to a widget. They do not affect any intrinsic properties of the widget are are intended\nto be used to disambiguate widget objects returned from operators such as <TheTarget> or <MyChildren>.",
			"references":{
				"operator":["TheTarget","MyChildren"]
			},
			"tags":["widget"]
		},{
			"id":"livecode_builder-427",
			"name":"onsave",
			"display name":"OnSave",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnSave"
			],
			"display syntax":[
				"OnSave"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the widget is saved.",
			"description":"Handler the <OnSave> message to execute code when a stack containing the widget is saved.\n>*Note:* Access to most script object operations is not allowed whilst an <OnSave>\nhandler is running.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-428",
			"name":"nativelayerofwidget",
			"display name":"NativeLayerOfWidget",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"native layer of <Widget>"
			],
			"display syntax":[
				"native layer of <i>Widget</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"Get a widget's native layer pointer",
			"parameters":[{
				"name":"Widget",
				"type":"",
				"refparam":"false",
				"description":"The widget to examine"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A platform-specific native layer pointer"
			}],
			"description":"Get a widget's native layer pointer",
			"references":{
				"expression":["MyNativeLayer"]
			},
			"tags":["widget","native layer"]
		},{
			"id":"livecode_builder-429",
			"name":"widgetrectangleproperty",
			"display name":"WidgetRectangleProperty",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the rectangle of <mWidget>"
			],
			"display syntax":[
				"the rectangle of <i>mWidget</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"Manipulates the rectangle property of a child widget",
			"parameters":[{
				"name":"mWidget",
				"type":"",
				"refparam":"false",
				"description":"The child widget object"
			}],
			"examples":[{
				"script":"private variable mChild as Widget\n\npublic handler OnCreate() returns nothing\n    put a new widget \"com.livecode.widget.button\" into mChild\n    place mChild\nend handler\n\npublic handler OnGeometryChanged() returns nothing\n    -- ensure child widget rect is that of the parent\n    set the rectangle of mChild to my bounds\nend handler"
			}],
			"description":"Use the rectangle property to set the rectangle of a child widget.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-430",
			"name":"anewwidget",
			"display name":"ANewWidget",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"a new widget <mKind>"
			],
			"display syntax":[
				"a new widget <i>mKind</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"Create a widget object of the specified kind",
			"examples":[{
				"script":"variable tNavbar as Widget\nput a new widget \"com.livecode.widget.navbar\" into tNavbar"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A widget object."
			}],
			"description":"Create a new widget object of the specified kind. The widget can then be placed with the <PlaceWidget|place> statement.",
			"references":{
				"statement":["PlaceWidget"]
			},
			"tags":["widget"]
		},{
			"id":"livecode_builder-431",
			"name":"onmousescroll",
			"display name":"OnMouseScroll",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnMouseScroll"
			],
			"display syntax":[
				"OnMouseScroll"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the mouse wheel is scrolled within the widget's rect.",
			"description":"Sent when the mouse wheel is scrolled within the widget's rect.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-432",
			"name":"widgetenabledproperty",
			"display name":"WidgetEnabledProperty",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the enabled of <mWidget>"
			],
			"display syntax":[
				"the enabled of <i>mWidget</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"Manipulates the enabled property of a child widget",
			"parameters":[{
				"name":"mWidget",
				"type":"",
				"refparam":"false",
				"description":"The child widget object"
			}],
			"examples":[{
				"script":"private variable mChild as Widget\n\npublic handler OnCreate() returns nothing\n    put a new widget \"com.livecode.widget.button\" into mChild\n    place mChild\n    -- mChild is initially disabled\n    set the enabled of mChild to false\nend handler"
			}],
			"description":"Use the enabled property to control the disabled/enabled state of child widgets.\nThe child widget can change its appearance and behavior based on the result of the '<MyEnabled|my enabled>' expression.",
			"references":{
				"expression":["MyDisabled"]
			},
			"tags":["widget"]
		},{
			"id":"livecode_builder-433",
			"name":"ondestroy",
			"display name":"OnDestroy",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnDestroy"
			],
			"display syntax":[
				"OnDestroy"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the widget is deleted.",
			"description":"Handle the OnDestroy message to have the widget perform an action when it is deleted.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-434",
			"name":"ontouchstart",
			"display name":"OnTouchStart",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnTouchStart"
			],
			"display syntax":[
				"OnTouchStart"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the widget is the target for touch events and a touch is started.",
			"description":"The widget becomes the target for touch events when the first touch is\nwithin its rect. The widget remains the target for touch events until\nall touches end or are cancelled.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-435",
			"name":"onopen",
			"display name":"OnOpen",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnOpen"
			],
			"display syntax":[
				"OnOpen"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the card containing the widget becomes the current card.",
			"examples":[{
				"script":"public handler OnOpen()\n  \t\t-- Schedule a timer to perform an action every 5 seconds\n \t\t schedule timer in 5 seconds\nend handler"
			}],
			"description":"Handle the <OnOpen> message to have the widget perform an action when the card containing the widget becomes the current card, for example setting default values of instance variables.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-436",
			"name":"ondragstart",
			"display name":"OnDragStart",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnDragStart"
			],
			"display syntax":[
				"OnDragStart"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the widget begins to be dragged",
			"description":"Sent when the widget begins to be dragged",
			"tags":["widget"]
		},{
			"id":"livecode_builder-437",
			"name":"ontouchmove",
			"display name":"OnTouchMove",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnTouchMove"
			],
			"display syntax":[
				"OnTouchMove"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent to the target for touch events when a touch moves.",
			"description":"Sent to the target for touch events when a touch moves.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-438",
			"name":"themouselocation",
			"display name":"TheMouseLocation",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"the ( current ) mouse position"
			],
			"display syntax":[
				"the ( current ) mouse position"
			],
			"associations":["com.livecode.widget"],
			"summary":"Determines the location of the mouse pointer relative to the widget.",
			"examples":[{
				"script":"variable tPosition as Point\nput the mouse position into tPosition\n\nvariable tRect as Rectangle\nput my bounds into tRect\n\nif tPosition is within tRect then\n\t// mouse position is within the widget bounds\nend if"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The location of the mouse pointer."
			}],
			"description":"Use the 'current' form to obtain the asynchronous mouse position.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-439",
			"name":"ongeometrychanged",
			"display name":"OnGeometryChanged",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnGeometryChanged"
			],
			"display syntax":[
				"OnGeometryChanged"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the widget geometry changed.",
			"examples":[{
				"script":"private variable mLabel as String\n\npublic handler OnGeometryChanged()\n\tif my width is not my height then\n\t\tput \"Rectangle\" into mLabel\n\telse\n\t\tput \"Square\" into mLabel\n\tend if\n\tredraw all\t\nend handler"
			}],
			"description":"Handle the <OnGeometryChanged> message to perform specific actions that depend on the geometry of the widget, for example the locations on the canvas where parts of the widget are drawn.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-440",
			"name":"myname",
			"display name":"MyName",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"my name"
			],
			"display syntax":[
				"my name"
			],
			"associations":["com.livecode.widget"],
			"summary":"Returns the name of the widget's script object",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The name of the widget's script object"
			}],
			"description":"Returns the name of the widget's script object",
			"tags":["widget"]
		},{
			"id":"livecode_builder-441",
			"name":"onstartediting",
			"display name":"OnStartEditing",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnStartEditing"
			],
			"display syntax":[
				"OnStartEditing"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the pointer tool is selected.",
			"description":"Handle the <OnStartEditing> message to perform an action when the edit tool is selected.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-442",
			"name":"thetarget",
			"display name":"TheTarget",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"the target"
			],
			"display syntax":[
				"the target"
			],
			"associations":["com.livecode.widget"],
			"summary":"The child widget that started the current execution.",
			"examples":[{
				"script":"-- In the child widget\npublic handler OnMouseUp() returns nothing\n    -- handled in the parent\nend handler\n\n-- in the parent\npublic handler OnMouseUp() returns nothing\n    variable tComponent as optional Widget\n    put the target into tComponent\n    if tComponent is not nothing then\n        variable tName as String\n        put annotation \"Name\" of tComponent into tName\n        -- notify the parent or the script object which component was clicked\n        post \"componentClicked\" with [tName]\n    else\n        -- the mouseUp was not over a child widget\n    end if\nend handler"
			},{
				"script":"-- In the child widget\npublic handler OnClick() returns nothing\n    post \"componentClicked\"\nend handler\n\n-- In the parent widget\npublic handler OnComponentClicked() returns nothing\n    variable tComponent as optional Widget\n    put the target into tComponent\n    if tComponent is not nothing then\n        variable tName as String\n        put annotation \"Name\" of tComponent into tName\n        -- notify the parent or the script object which component was clicked\n        post \"componentClicked\" with [tName]\n    end if\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A widget object."
			}],
			"description":"The target evaluates to either the first widget object in a chain of event handlers (eg <OnMouseUp>)\nor the widget from which a message was <Post|posted>.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-443",
			"name":"thetouchids",
			"display name":"TheTouchIDs",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"the touch ids"
			],
			"display syntax":[
				"the touch ids"
			],
			"associations":["com.livecode.widget"],
			"summary":"The touch IDs",
			"examples":[{
				"script":"variable tIDs as optional List\nput the touch ids into tIDs\nif tIDs is not nothing then\n    variable tPosition as Point\n    put the position of touch tIDs[1] into tPosition\nend if"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The a list of currently active touch IDs"
			}],
			"description":"The touch IDs",
			"tags":["widget"]
		},{
			"id":"livecode_builder-444",
			"name":"onactionkeypress",
			"display name":"OnActionKeyPress",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnActionKeyPress <keyText>"
			],
			"display syntax":[
				"OnActionKeyPress <i>keyText</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when an action key is pressed while the widget has focus.",
			"parameters":[{
				"name":"keyText",
				"type":"string",
				"refparam":"false",
				"description":"The key pressed"
			}],
			"description":"Sent when an action key is pressed while the widget has focus.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-445",
			"name":"widgetfontproperty",
			"display name":"WidgetFontProperty",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the font of <Widget>"
			],
			"display syntax":[
				"the font of <i>Widget</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"The font of a widget",
			"parameters":[{
				"name":"Widget",
				"type":"",
				"refparam":"false",
				"description":"The widget to examine"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A font handle for the widget's effective font"
			}],
			"description":"Return a font which reflects the current (effective) settings of\n<Widget>'s LiveCode `textFont`, `textSize` and `textStyle` properties.",
			"references":{
				"expression":["MyFont"]
			},
			"tags":["widget"]
		},{
			"id":"livecode_builder-446",
			"name":"theclickcount",
			"display name":"TheClickCount",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"the ( current ) click count"
			],
			"display syntax":[
				"the ( current ) click count"
			],
			"associations":["com.livecode.widget"],
			"summary":"Determines the number of successive clicks within the click distance.",
			"examples":[{
				"script":"    variable tClickCount as integer\n    put the click count into tClickCount\n\n    if tClickCount is 1 then\n        // do single click action\n    else if tClickCount is 2 then\n        // do double click action\n    end if"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The number of clicks which have occurred since the initial click within the standard 'click distance' from the original point."
			}],
			"description":"Determines the number of successive clicks within the click distance.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-447",
			"name":"thetouchid",
			"display name":"TheTouchId",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"the touch id"
			],
			"display syntax":[
				"the touch id"
			],
			"associations":["com.livecode.widget"],
			"summary":"The id of the current touch",
			"examples":[{
				"script":"   variable tID as Number\n   put the touch id into tID\n\n   variable tPosition as Point\n   put the position of touch tID into tPosition"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"An integer id for the current touch"
			}],
			"description":"The id of the current touch",
			"tags":["widget"]
		},{
			"id":"livecode_builder-448",
			"name":"closepopupwithresult",
			"display name":"ClosePopupWithResult",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"close popup [ returning <Result> ]"
			],
			"display syntax":[
				"close popup [ returning <i>Result</i> ]"
			],
			"associations":["com.livecode.widget"],
			"summary":"Closes the current widget popup.",
			"parameters":[{
				"name":"Result",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to any type. The result of popping up this widget."
			}],
			"examples":[{
				"script":"variable mSelected\n\npublic handler OnClick()\n\tvariable tOption\n\tput getOptionAtPosition(the click position) into tOption\n\tif tOption is not empty then\n\t\tput tOption into mSelected\n\n\t\t// If this widget is being used as a popup then we close the popup and return a value to the caller\n\t\tif currently popped up then\n\t\t\tif mSelected is \"Cancel\" then\n\t\t\t\t// Dismiss the popup without returning a value - the result will be nothing\n\t\t\t\tclose popup\n\t\t\telse\n\t\t\t\t// Dismiss the popup - the result will be the value of mSelected\n\t\t\t\tclose popup returning mSelected\n\t\t\tend if\n\t\tend if\n\tend if\nend handler\n\nprivate handler getOptionAtPosition(in pPosition as Point) returns String\n\t// Return the name of the option at the given point\n\t...\nend handler"
			}],
			"description":"Use to close the current popup, and optionally set a return value for the <PopupWidget> statement that launched it.",
			"references":{
				"statement":["PopupWidget"],
				"expression":["IsPoppedUp"]
			},
			"tags":["widget"]
		},{
			"id":"livecode_builder-449",
			"name":"redrawall",
			"display name":"RedrawAll",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"redraw all"
			],
			"display syntax":[
				"redraw all"
			],
			"associations":["com.livecode.widget"],
			"summary":"Redraws the widget.",
			"examples":[{
				"script":"private variable mColor as Color\n\npublic handler OnClick()\n\tput color [ any number, any number, any number ] into mColor\n\tredraw all\nend handler\n\npublic handler OnPaint()\n\t...\n\tset the paint of this canvas to solid paint with color mColor\n\t...\nend handler"
			}],
			"description":"Use redraw all to redraw the widget, for example after setting a property which should trigger a change in appearance.",
			"references":{
				"message":["OnPaint"]
			},
			"tags":["widget"]
		},{
			"id":"livecode_builder-450",
			"name":"placewidget",
			"display name":"PlaceWidget",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"place <mWidget>"
			],
			"display syntax":[
				"place <i>mWidget</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"Add a child widget to the parent.",
			"parameters":[{
				"name":"mWidget",
				"type":"",
				"refparam":"false",
				"description":"The child widget object."
			}],
			"examples":[{
				"script":"variable tNavbar as Widget\nput a new widget \"com.livecode.widget.navbar\" into tNavbar\nplace tNavbar"
			}],
			"description":"Adds a the specified child object to the widget in which the place statement is used.\n<mWidget> will reside on the layer above all previously placed widgets.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-451",
			"name":"mychildren",
			"display name":"MyChildren",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"my children"
			],
			"display syntax":[
				"my children"
			],
			"associations":["com.livecode.widget"],
			"summary":"The currently placed child widgets of this widget.",
			"examples":[{
				"script":"public handler OnCreate() returns nothing\n    repeat 10 times\n        place a new widget \"com.livecode.widget.button\"\n    end repeat\nend handler\n\npublic handler OnGeometryChanged() returns nothing\n    variable tChildren as List\n    put my children into tChildren\n\n    variable tChild as Widget\n    variable tLeft as Number\n    put 0 into tLeft\n    -- arrange children from left to right\n    repeat for each element tChild in tChildren\n        set the rectangle of tChild to [tLeft, 0, tLeft + 50, my height]\n        add 50 to tLeft\n    end repeat\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A list of the child widgets of this widget."
			}],
			"description":"The list of widget objects returned by <MyChildren|my children> is in placement (i.e. layer) order.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-452",
			"name":"onmousemove",
			"display name":"OnMouseMove",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnMouseMove"
			],
			"display syntax":[
				"OnMouseMove"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the mouse pointer moves within the widget's rect.",
			"description":"Sent when the mouse pointer moves within the widget's rect.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-453",
			"name":"mywidth",
			"display name":"MyWidth",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"my width"
			],
			"display syntax":[
				"my width"
			],
			"associations":["com.livecode.widget"],
			"summary":"Returns the width of the widget.",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The width of the widget."
			}],
			"description":"Returns the width of the widget.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-454",
			"name":"onload",
			"display name":"OnLoad",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnLoad"
			],
			"display syntax":[
				"OnLoad"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the widget is loaded.",
			"description":"Handler the <OnLoade> message to execute code when a stack containing the widget is loaded, for example setting default values of instance variables.\n>*Note:* Access to most script object operations is not allowed whilst an <OnLoad>\nhandler is running.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-455",
			"name":"myheight",
			"display name":"MyHeight",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"my height"
			],
			"display syntax":[
				"my height"
			],
			"associations":["com.livecode.widget"],
			"summary":"Returns the height of the widget.",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The height of the widget."
			}],
			"description":"Returns the height of the widget.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-456",
			"name":"myscriptobject",
			"display name":"MyScriptObject",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"my script object"
			],
			"display syntax":[
				"my script object"
			],
			"associations":["com.livecode.widget"],
			"summary":"Returns the widget script object.",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The widget script object.\n"
			}],
			"description":"Returns the widget script object.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-457",
			"name":"ispoppedup",
			"display name":"IsPoppedUp",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"currently popped up"
			],
			"display syntax":[
				"currently popped up"
			],
			"associations":["com.livecode.widget"],
			"summary":"Tests if the current widget is in a popup window.\nResturns:True if the current widget is in a popup window, False otherwise.",
			"examples":[{
				"script":"variable mSelected\n\npublic handler OnClick()\n\tvariable tOption\n\tput getOptionAtPosition(the click position) into tOption\n\tif tOption is not empty then\n\t\tput tOption into mSelected\n\n\t\t// If this widget is being used as a popup then we close the popup and return a value to the caller\n\t\tif currently popped up then\n\t\t\tif mSelected is \"Cancel\" then\n\t\t\t\t// Dismiss the popup without returning a value - the result will be nothing\n\t\t\t\tclose popup\n\t\t\telse\n\t\t\t\t// Dismiss the popup - the result will be the value of mSelected\n\t\t\t\tclose popup returning mSelected\n\t\t\tend if\n\t\tend if\n\tend if\nend handler\n\nprivate handler getOptionAtPosition(in pPosition as Point) returns String\n\t// Return the name of the option at the given point\n\t...\nend handler"
			}],
			"description":"Use to determine if this widget is being displayed within a popup window.",
			"references":{
				"statement":["PopupWidget","ClosePopupWithResult"]
			},
			"tags":["widget"]
		},{
			"id":"livecode_builder-458",
			"name":"widgetheightproperty",
			"display name":"WidgetHeightProperty",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the height of <mWidget>"
			],
			"display syntax":[
				"the height of <i>mWidget</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"Manipulates the height property of a child widget",
			"parameters":[{
				"name":"mWidget",
				"type":"",
				"refparam":"false",
				"description":"The child widget object"
			}],
			"examples":[{
				"script":"private variable mChild as Widget\n\npublic handler OnCreate() returns nothing\n    put a new widget \"com.livecode.widget.button\" into mChild\n    place mChild\nend handler\n\npublic handler OnGeometryChanged() returns nothing\n    -- ensure child widget remains same height as parent\n    set the height of mChild to my height\nend handler"
			}],
			"description":"Use the height property to set the height of a child widget.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-459",
			"name":"onmousehover",
			"display name":"OnMouseHover",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnMouseHover"
			],
			"display syntax":[
				"OnMouseHover"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the mouse pointer hovers over the widget's rect.",
			"description":"Sent when the mouse pointer hovers over the widget's rect.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-460",
			"name":"onclose",
			"display name":"OnClose",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnClose"
			],
			"display syntax":[
				"OnClose"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when card containing the widget is navigated away from.",
			"examples":[{
				"script":"public handler OnClose()\n  \t\t-- Schedule a timer to perform an action every 5 seconds\n \t\t cancel timer\nend handler"
			}],
			"description":"Handle the <OnClose> message to have the widget perform an action when the card containing the widget is navigated away from.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-461",
			"name":"iseditmode",
			"display name":"IsEditMode",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"in edit mode"
			],
			"display syntax":[
				"in edit mode"
			],
			"associations":["com.livecode.widget"],
			"summary":"Determines whether the IDE is in edit mode.",
			"description":"Determines whether the IDE is in edit mode.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-462",
			"name":"oncreate",
			"display name":"OnCreate",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnCreate"
			],
			"display syntax":[
				"OnCreate"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the widget is created.",
			"examples":[{
				"script":"private variable mPrimaryColor as Color\nprivate variable mSecondaryColor as Color\n\npublic handler OnCreate()\n\tput color [ 0.5, 0.5, 1.0 ] into mPrimaryColor\n\tput color [ 0.0, 0.0, 1.0 ] into mSecondaryColor\nend handler"
			}],
			"description":"Handle the <OnCreate> message to have the widget perform an action when it is created, for example setting default values of instance variables.\n>*Note:* Access to most script object operations is not allowed whilst an <OnCreate>\nhandler is running.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-463",
			"name":"ondragfinish",
			"display name":"OnDragFinish",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnDragFinish"
			],
			"display syntax":[
				"OnDragFinish"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the widget finishes being dragged",
			"description":"Sent when the widget finishes being dragged",
			"tags":["widget"]
		},{
			"id":"livecode_builder-464",
			"name":"placewidgetat",
			"display name":"PlaceWidgetAt",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"place <mWidget> at ( bottom | top )"
			],
			"display syntax":[
				"place <i>mWidget</i> at ( bottom | top )"
			],
			"associations":["com.livecode.widget"],
			"summary":"Add a child widget to the parent on the top or bottom layer",
			"parameters":[{
				"name":"mWidget",
				"type":"",
				"refparam":"false",
				"description":"The child widget object."
			}],
			"examples":[{
				"script":"variable tNavbar as Widget\nput a new widget \"com.livecode.widget.navbar\" into tNavbar\nplace tNavbar at top"
			}],
			"description":"Adds a the specified child object to the widget in which the place statement is used.\nUsing the \"top\" (resp. \"bottom\") variant will cause <mWidget> to be placed on the layer above (resp. below) all previously placed widgets.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-465",
			"name":"ontouchfinish",
			"display name":"OnTouchFinish",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnTouchFinish"
			],
			"display syntax":[
				"OnTouchFinish"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent to the target for touch events when a touch event ends.",
			"description":"Sent to the target for touch events when a touch event ends.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-466",
			"name":"myfont",
			"display name":"MyFont",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"my font"
			],
			"display syntax":[
				"my font"
			],
			"associations":["com.livecode.widget"],
			"summary":"Returns the font of the widget.",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The font of the widget"
			}],
			"description":"Use to return a font which reflects the current (effective) settings of the\nwidget's textFont, textSize and textStyle properties.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-467",
			"name":"onvisibilitychanged",
			"display name":"OnVisibilityChanged",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnVisibilityChanged <isVisible>"
			],
			"display syntax":[
				"OnVisibilityChanged <i>isVisible</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the widget visibility changed.",
			"parameters":[{
				"name":"isVisible",
				"type":"bool",
				"refparam":"false",
				"description":"Whether the widget is now visible or not."
			}],
			"examples":[{
				"script":"private variable mAnimate as Boolean\n\npublic handler OnVisibilityChanged(in pVisible as Boolean)\n\tput pVisible into mAnimate\nend handler"
			}],
			"description":"Handle the <OnVisibilityChanged> message to execute code when the widget becomes visible or invisible.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-468",
			"name":"canceltimer",
			"display name":"CancelTimer",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"cancel timer"
			],
			"display syntax":[
				"cancel timer"
			],
			"associations":["com.livecode.widget"],
			"summary":"Cancels a timer.",
			"examples":[{
				"script":"// Cancel the timer when the widget is no longer on the current card.\npublic handler OnClose()\n\tcancel timer\nend handler"
			}],
			"description":"Use to cancel a timer scheduled by the <ScheduleTimerIn|schedule> statement.",
			"references":{
				"statement":["ScheduleTimerIn"],
				"message":["OnTimer"]
			},
			"tags":["widget"]
		},{
			"id":"livecode_builder-469",
			"name":"onfocusenter",
			"display name":"OnFocusEnter",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnFocusEnter"
			],
			"display syntax":[
				"OnFocusEnter"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the widget gains focus.",
			"description":"Sent when the widget gains focus.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-470",
			"name":"unplacewidget",
			"display name":"UnplaceWidget",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"unplace <mWidget>"
			],
			"display syntax":[
				"unplace <i>mWidget</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"Remove a child widget from the parent.",
			"parameters":[{
				"name":"mWidget",
				"type":"",
				"refparam":"false",
				"description":"The child widget object."
			}],
			"examples":[{
				"script":"-- Remove any child widgets that are clicked on\npublic handler OnMouseUp() returns nothing\n    if the target is not nothing then\n        unplace the target\n    end if\nend handler"
			}],
			"description":"Unplaces the child widget from the widget in which the unplace statement is used.\nThe widget is no longer drawn.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-471",
			"name":"onmodifierschanged",
			"display name":"OnModifiersChanged",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnModifiersChanged"
			],
			"display syntax":[
				"OnModifiersChanged"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the keyboard modifiers are changed.",
			"description":"Sent when the keyboard modifiers are changed.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-472",
			"name":"ispointnotwithinrect",
			"display name":"IsPointNotWithinRect",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Point> is not within <Rect>"
			],
			"display syntax":[
				"<i>Point</i> is not within <i>Rect</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"Determines whether a point is within a rectangle.",
			"parameters":[{
				"name":"Point",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a Point."
			},{
				"name":"Rect",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a Rectangle."
			}],
			"examples":[{
				"script":"variable tClick as Point\nput the click position into tClick\n\nvariable tRect as Rectangle\nput my bounds into tRect\n\nif tClick is not within tRect then\n\t// click was outside of widget bounds\nend if"
			}],
			"description":"Determines whether a point is within a rectangle.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-473",
			"name":"onmouseleave",
			"display name":"OnMouseLeave",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnMouseLeave"
			],
			"display syntax":[
				"OnMouseLeave"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the mouse pointer leaves the widget's rect.",
			"description":"Sent when the mouse pointer leaves the widget's rect.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-474",
			"name":"myrectangle",
			"display name":"MyRectangle",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"my rectangle"
			],
			"display syntax":[
				"my rectangle"
			],
			"associations":["com.livecode.widget"],
			"summary":"Returns the rectangle of the widget in the parent",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The rectangle of the widget in the parent"
			}],
			"description":"Returns the rectangle of the widget in the parent",
			"tags":["widget"]
		},{
			"id":"livecode_builder-475",
			"name":"onmousecancel",
			"display name":"OnMouseCancel",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnMouseCancel"
			],
			"display syntax":[
				"OnMouseCancel"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when something happens which should cause the previous mouse down\naction to be considered cancelled. For example, opening a popup during OnMouseDown.",
			"description":"Sent when something happens which should cause the previous mouse down\naction to be considered cancelled. For example, opening a popup during OnMouseDown.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-476",
			"name":"ispointwithinrect",
			"display name":"IsPointWithinRect",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Point> is within <Rect>"
			],
			"display syntax":[
				"<i>Point</i> is within <i>Rect</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"Determines whether a point is within a rectangle.",
			"parameters":[{
				"name":"Point",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a Point."
			},{
				"name":"Rect",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a Rectangle."
			}],
			"examples":[{
				"script":"variable tClick as Point\nput the click position into tClick\n\nvariable tRect as Rectangle\nput my bounds into tRect\n\nif tClick is within tRect then\n\t// click was within widget bounds\nend if"
			}],
			"description":"Determines whether a point is within a rectangle.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-477",
			"name":"ondragdrop",
			"display name":"OnDragDrop",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnDragDrop"
			],
			"display syntax":[
				"OnDragDrop"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when a dragged object is released within the widget rect.",
			"description":"Sent when a dragged object is released within the widget rect.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-478",
			"name":"widgetdisabledproperty",
			"display name":"WidgetDisabledProperty",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the disabled of <mWidget>"
			],
			"display syntax":[
				"the disabled of <i>mWidget</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"Manipulates the disabled property of a child widget",
			"parameters":[{
				"name":"mWidget",
				"type":"",
				"refparam":"false",
				"description":"The child widget object"
			}],
			"examples":[{
				"script":"private variable mChild as Widget\n\npublic handler OnCreate() returns nothing\n    put a new widget \"com.livecode.widget.button\" into mChild\n    place mChild\n    -- mChild is initially disabled\n    set the disabled of mChild to true\nend handler"
			}],
			"description":"Use the disabled property to control the disabled/enabled state of child widgets.\nThe child widget can change its appearance and behavior based on the result of the '<MyDiabled|my disabled>' expression.",
			"references":{
				"expression":["MyDisabled"]
			},
			"tags":["widget"]
		},{
			"id":"livecode_builder-479",
			"name":"onstopediting",
			"display name":"OnStopEditing",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnStopEditing"
			],
			"display syntax":[
				"OnStopEditing"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the browse tool is selected.",
			"description":"Handle the <OnStopEditing> message to perform an action when the browse tool is selected.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-480",
			"name":"onmousedown",
			"display name":"OnMouseDown",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnMouseDown"
			],
			"display syntax":[
				"OnMouseDown"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the mouse button is pushed within the widget's rect.",
			"description":"Sent when the mouse button is pushed within the widget's rect.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-481",
			"name":"onmousestillhover",
			"display name":"OnMouseStillHover",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnMouseStillHover"
			],
			"display syntax":[
				"OnMouseStillHover"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the mouse pointer continues to hover over the widget's rect.",
			"description":"Sent when the mouse pointer continues to hover over the widget's rect.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-482",
			"name":"onclick",
			"display name":"OnClick",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnClick"
			],
			"display syntax":[
				"OnClick"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the widget is clicked.",
			"description":"Sent when the widget is clicked.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-483",
			"name":"thetouchlocation",
			"display name":"TheTouchLocation",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"the touch position"
			],
			"display syntax":[
				"the touch position"
			],
			"associations":["com.livecode.widget"],
			"summary":"The location of the current touch",
			"examples":[{
				"script":"   variable tPosition as Point\n   put the touch position into tPosition\n\n   variable tRect as Rectangle\n   put my bounds into tRect\n\n   if tPosition is within tRect then\n      // touch position is within the widget bounds\n   end if"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The position of the current touch relative to the widget"
			}],
			"description":"The location of the current touch",
			"tags":["widget"]
		},{
			"id":"livecode_builder-484",
			"name":"onmouseenter",
			"display name":"OnMouseEnter",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnMouseEnter"
			],
			"display syntax":[
				"OnMouseEnter"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the mouse pointer enters the widget's rect.",
			"description":"Sent when the mouse pointer enters the widget's rect.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-485",
			"name":"onattach",
			"display name":"OnAttach",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnAttach"
			],
			"display syntax":[
				"OnAttach"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the widget is attached.",
			"description":"Sent when the widget is attached.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-486",
			"name":"thenumberoftouches",
			"display name":"TheNumberOfTouches",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"the number of touches"
			],
			"display syntax":[
				"the number of touches"
			],
			"associations":["com.livecode.widget"],
			"summary":"The number of touches",
			"examples":[{
				"script":"   if the number of touches is 2 then\n      // pinch gesture\n   end if"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The number of currently active touches"
			}],
			"description":"The number of touches",
			"tags":["widget"]
		},{
			"id":"livecode_builder-487",
			"name":"ondetach",
			"display name":"OnDetach",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnDetach"
			],
			"display syntax":[
				"OnDetach"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the widget is detached.",
			"description":"Sent when the widget is detached.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-488",
			"name":"ontouchcancel",
			"display name":"OnTouchCancel",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnTouchCancel"
			],
			"display syntax":[
				"OnTouchCancel"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent to the target for touch events when a touch event is cancelled.",
			"description":"Sent to the target for touch events when a touch event is cancelled.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-489",
			"name":"popupmenu",
			"display name":"PopupMenu",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"popup menu <mMenu> at <mAt>"
			],
			"display syntax":[
				"popup menu <i>mMenu</i> at <i>mAt</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"Displays a popup menu.\nMenu:An expression that evaluates to a string, which describes the menu items.\nLocation:An expression that evaluates to a <Point> relative to the current widget. The topleft corner of the popup window will be placed here.",
			"examples":[{
				"script":"private variable mFont as Font\n\npublic handler OnMouseDown()\n\tpopup menu \"Helvetica\\nTimes New Roman\\nArial\" at the mouse position\n\tif the result is not nothing then\n\t\tput font (the result) at size 20 into mFont\n\t\tredraw all\n\tend if\nend handler\n\npublic handler OnPaint()\n\t...\n\tset the font of this canvas to mFont\n\t...\nend handler"
			}],
			"value":[{
				"name":"the result",
				"type":"",
				"description":"The selected menu item. If the menu is dismissed (by clicking outside the bounds of the menu) this value will be nothing."
			}],
			"description":"Use to popup a menu at the specified location.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-490",
			"name":"triggerall",
			"display name":"TriggerAll",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"trigger all [ in <mWidget> ]"
			],
			"display syntax":[
				"trigger all [ in <i>mWidget</i> ]"
			],
			"associations":["com.livecode.widget"],
			"summary":"Causes all of a widget's property triggers to be fired.",
			"parameters":[{
				"name":"mWidget",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a widget."
			}],
			"examples":[{
				"script":"handler TextChangedCallback()\n        UpdateTextProperty()\n        trigger all\nend handler"
			},{
				"script":"private variable mSelf as Widget\nhandler TextChangedCallback()\n\tUpdateTextProperty()\n\ttrigger all in mSelf\nend handler"
			}],
			"description":"Use trigger all to cause all triggers for all a widget's properties to \nbe fired, for example when user action causes a native widget's \nproperties to change, to signal the property change to the IDE.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-491",
			"name":"mybounds",
			"display name":"MyBounds",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"my bounds"
			],
			"display syntax":[
				"my bounds"
			],
			"associations":["com.livecode.widget"],
			"summary":"Returns the bounds of the widget.",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The bounds of the widget."
			}],
			"description":"Returns the bounds of the widget.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-492",
			"name":"ondragleave",
			"display name":"OnDragLeave",
			"library":"livecode_builder",
			"type":"message",
			"syntax":[
				"OnDragLeave"
			],
			"display syntax":[
				"OnDragLeave"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when an object is dragged outside of the widget rect.",
			"description":"Sent when an object is dragged outside of the widget rect.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-493",
			"name":"myenabled",
			"display name":"MyEnabled",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"my enabled"
			],
			"display syntax":[
				"my enabled"
			],
			"associations":["com.livecode.widget"],
			"summary":"Returns the enabled state of the widget.",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The enabled state of the widget."
			}],
			"description":"Returns the enabled state of the widget.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-494",
			"name":"widgetwidthproperty",
			"display name":"WidgetWidthProperty",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the width of <mWidget>"
			],
			"display syntax":[
				"the width of <i>mWidget</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"Manipulates the height property of a child widget",
			"parameters":[{
				"name":"mWidget",
				"type":"",
				"refparam":"false",
				"description":"The child widget object"
			}],
			"examples":[{
				"script":"private variable mChild as Widget\n\npublic handler OnCreate() returns nothing\n    put a new widget \"com.livecode.widget.button\" into mChild\n    place mChild\nend handler\n\npublic handler OnGeometryChanged() returns nothing\n    -- ensure child widget remains half the width of the parent\n    set the width of mChild to my width / 2\nend handler"
			}],
			"description":"Use the width property to set the width of a child widget.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-495",
			"name":"placewidgetrelative",
			"display name":"PlaceWidgetRelative",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"place <mWidget> ( below | above ) <mOtherWidget>"
			],
			"display syntax":[
				"place <i>mWidget</i> ( below | above ) <i>mOtherWidget</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"Add a child widget to the parent on a layer relative to that of a previously placed child.",
			"parameters":[{
				"name":"mWidget",
				"type":"",
				"refparam":"false",
				"description":"The child widget object."
			},{
				"name":"mOtherWidget",
				"type":"",
				"refparam":"false",
				"description":"The child to place <mWidget> relative to."
			}],
			"examples":[{
				"script":"variable tNavbar as Widget\nput a new widget \"com.livecode.widget.navbar\" into tNavbar\nplace tNavbar\n\nvariable tTreeView as Widget\nput a new widget \"com.livecode.widget.treeView\" into tTreeView\nplace tTreeView below tNavbar"
			}],
			"description":"Adds a the specified child object to the widget in which the place statement is used. <mWidget> is placed either below or above\nthe layer on which <mOtherWidget> is placed, depending on which variant is used.",
			"tags":["widget"]
		},{
			"id":"livecode_builder-496",
			"name":"scheduletimerin",
			"display name":"ScheduleTimerIn",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"schedule timer in <Time> seconds"
			],
			"display syntax":[
				"schedule timer in <i>Time</i> seconds"
			],
			"associations":["com.livecode.widget"],
			"summary":"Schedules a timer.",
			"parameters":[{
				"name":"Time",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			}],
			"examples":[{
				"script":"// Create a timer loop\npublic handler OnTimer()\n\t...\n\tschedule timer in 1 seconds\nend handler"
			}],
			"description":"Scheduling a timer causes an <OnTimer> message to be sent to the widget in <Time> seconds.",
			"references":{
				"message":["OnTimer"]
			},
			"tags":["widget"]
		},{
			"id":"livecode_builder-497",
			"name":"thelocationoftouch",
			"display name":"TheLocationOfTouch",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the position of touch <Id>"
			],
			"display syntax":[
				"the position of touch <i>Id</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"The location of a specific touch",
			"examples":[{
				"script":"   variable tID as Number\n   put the touch id into tID\n\n   variable tPosition as Point\n   put the position of touch tID into tPosition"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The positon of a specific touch id relative to the widget"
			}],
			"description":"The location of a specific touch",
			"tags":["widget"]
		},{
			"id":"livecode_builder-498",
			"name":"unitplan",
			"display name":"UnitPlan",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"plan <Count> tests"
			],
			"display syntax":[
				"plan <i>Count</i> tests"
			],
			"associations":["com.livecode.unittest"],
			"summary":"Announce how many test results are expected from the unit test.",
			"examples":[{
				"script":"plan 3 tests"
			}],
			"description":"Log the number of unit test assertions which are expected to occur in the\ncurrent unit test.  This may be used by the test framework to flag an error if\ntoo few test results appear in the test result.  For example, this allows the\ntest framework to detect whether a unit test failed silently.\n\nUsing `plan _ tests` is optional, and a unit test is valid even if its omitted.",
			"tags":["unit tests","unit tests"]
		},{
			"id":"livecode_builder-499",
			"name":"unittestfailsdescription",
			"display name":"UnitTestFailsDescription",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"broken test <Description> when <Condition>"
			],
			"display syntax":[
				"broken test <i>Description</i> when <i>Condition</i>"
			],
			"associations":["com.livecode.unittest"],
			"summary":"Make a failing unit test assertion with a description",
			"parameters":[{
				"name":"Condition",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to `true` if the test is successful"
			}],
			"examples":[{
				"script":"broken test \"weird comparison\" when 1 > 2"
			}],
			"description":"Make a unit test assertion, in the expectation that it will fail. The test is\nconsidered to have passed if <Condition> is true.  The <Description> string is\na short message that summarises what the test is checking.\n\nIf the test fails, it will not cause a test suite failure; instead, an\n\"expected failure\" will be recorded.  If the test passes, an \"unexpected pass\"\nwill be recorded instead of a normal test pass.",
			"tags":["unit tests","unit tests"]
		},{
			"id":"livecode_builder-500",
			"name":"unittestfailsdescriptionandreason",
			"display name":"UnitTestFailsDescriptionAndReason",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"broken test <Description> when <Condition> because <Reason>"
			],
			"display syntax":[
				"broken test <i>Description</i> when <i>Condition</i> because <i>Reason</i>"
			],
			"associations":["com.livecode.unittest"],
			"summary":"Make a failing unit test assertion with a reason for brokenness",
			"parameters":[{
				"name":"Condition",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to `true` if the test is successful"
			},{
				"name":"Reason",
				"type":"",
				"refparam":"false",
				"description":"A short explanation of why the test is broken"
			}],
			"examples":[{
				"script":"broken test \"weird comparison\" when 1 > 2 because \"bug 12345\""
			}],
			"description":"Make a unit test assertion, in the expectation that it will fail. The test is\nconsidered to have passed if <Condition> is true.  The <Description> is a\nmessage that summarises the broken test, and the <Reason> explains why the test\nis broken (usually referencing a bug report).\n\nIf the test fails, it will not cause a test suite failure; instead, an\n\"expected failure\" will be recorded.  If the test passes, an \"unexpected pass\"\nwill be recorded instead of a normal test pass.",
			"tags":["unit tests","unit tests"]
		},{
			"id":"livecode_builder-501",
			"name":"unittestfailsreason",
			"display name":"UnitTestFailsReason",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"broken test <Condition> because <Reason>"
			],
			"display syntax":[
				"broken test <i>Condition</i> because <i>Reason</i>"
			],
			"associations":["com.livecode.unittest"],
			"summary":"Make a failing unit test assertion with a reason for brokenness",
			"parameters":[{
				"name":"Condition",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to `true` if the test is successful"
			},{
				"name":"Reason",
				"type":"",
				"refparam":"false",
				"description":"A short explanation of why the test is broken"
			}],
			"examples":[{
				"script":"broken test 1 > 2 because \"bug 12345\""
			}],
			"description":"Make a unit test assertion, in the expectation that it will fail. The test is\nconsidered to have passed if <Condition> is true.  The <Reason> is a shor\nmessage that describes why the test is broken (usually referencing a bug\nreport).\n\nIf the test fails, it will not cause a test suite failure; instead, an\n\"expected failure\" will be recorded.  If the test passes, an \"unexpected pass\"\nwill be recorded instead of a normal test pass.",
			"tags":["unit tests","unit tests"]
		},{
			"id":"livecode_builder-502",
			"name":"unittestfails",
			"display name":"UnitTestFails",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"broken test <Condition>"
			],
			"display syntax":[
				"broken test <i>Condition</i>"
			],
			"associations":["com.livecode.unittest"],
			"summary":"Make a failing unit test assertion",
			"examples":[{
				"script":"broken test 1 > 2"
			}],
			"description":"Make a unit test assertion, in the expectation that it will fail, and without\nproviding a description or reason.  It is usually more helpful to use\n<UnitTestFailsDescriptionAndReason>.",
			"references":{
				"statement":["UnitTestFailsDescriptionAndReason"]
			},
			"tags":["unit tests","unit tests"]
		},{
			"id":"livecode_builder-503",
			"name":"unittestskipdescriptionandreason",
			"display name":"UnitTestSkipDescriptionAndReason",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"skip test <Description> because <Reason>"
			],
			"display syntax":[
				"skip test <i>Description</i> because <i>Reason</i>"
			],
			"associations":["com.livecode.unittest"],
			"summary":"Record a skipped test with a test description and reason for skipping",
			"parameters":[{
				"name":"Reason",
				"type":"",
				"refparam":"false",
				"description":"A brief explanation of why the test was skipped"
			}],
			"examples":[{
				"script":"skip test \"open web socket\" because \"not implemented\""
			}],
			"description":"Record that a test was skipped.  The <Description> is a message that summarises\nthe test that was skipped, and the <Reason> explains why the test couldn't be\ndone.  For example, the feature being tested isn't supported by the platform\nthat the test is running on.",
			"tags":["unit tests","unit tests"]
		},{
			"id":"livecode_builder-504",
			"name":"unittestskip",
			"display name":"UnitTestSkip",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"skip test"
			],
			"display syntax":[
				"skip test"
			],
			"associations":["com.livecode.unittest"],
			"summary":"Record a skipped test",
			"description":"Record that a test was skipped, with no description or reason.  It is usually\nmore helpful to use <UnitTestSkipDescriptionAndReason>.",
			"references":{
				"statement":["UnitTestSkipDescriptionAndReason"]
			},
			"tags":["unit tests","unit tests"]
		},{
			"id":"livecode_builder-505",
			"name":"unittestskipreason",
			"display name":"UnitTestSkipReason",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"skip test because <Reason>"
			],
			"display syntax":[
				"skip test because <i>Reason</i>"
			],
			"associations":["com.livecode.unittest"],
			"summary":"Record a skipped test with a reason for skipping",
			"examples":[{
				"script":"skip test because \"not implemented\""
			}],
			"description":"Record that a test was skipped, including a reason for skipping the test.  The\n<Reason> is a short message that describes why the test has to be skipped.",
			"tags":["unit tests","unit tests"]
		},{
			"id":"livecode_builder-506",
			"name":"unitdiagnostic",
			"display name":"UnitDiagnostic",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"test diagnostic <Message>"
			],
			"display syntax":[
				"test diagnostic <i>Message</i>"
			],
			"associations":["com.livecode.unittest"],
			"summary":"Log unit test diagnostic message.",
			"examples":[{
				"script":"test diagnostic \"File access tests\""
			}],
			"description":"Log a message as a test diagnostic.  The <Message> may have multiple lines.\nYou may wish to log diagnostic messages to help make the test log easier to\nread by adding info about what's being tested, or add information when a test\nfails to help understand why the failure occurred.",
			"tags":["unit tests","unit tests"]
		},{
			"id":"livecode_builder-507",
			"name":"unittestskipdescription",
			"display name":"UnitTestSkipDescription",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"skip test <Description>"
			],
			"display syntax":[
				"skip test <i>Description</i>"
			],
			"associations":["com.livecode.unittest"],
			"summary":"Record a skipped test with a description",
			"examples":[{
				"script":"skip test \"open web socket\""
			}],
			"description":"Record that a test was skipped.  The <Description> string is a short message\nthat summarises the test that was skipped.",
			"tags":["unit tests","unit tests"]
		},{
			"id":"livecode_builder-508",
			"name":"com.livecode.unittest",
			"display name":"com.livecode.unittest",
			"library":"livecode_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.unittest"
			],
			"associations":["com.livecode.unittest"],
			"summary":"This library provides syntax for unit testing LiveCode Builder\nprograms.  It is used by the LiveCode Builder standard library's\ntestsuite.\n\nTo use this library, write your tests in a Builder source code file.\nEach group of tests should be a public handler with a name beginning\nwith `Test`.  If possible, use one test per handler.  Otherwise, add a\n`plan N tests` statement at the start of the handler.",
			"examples":[{
				"script":"public handler TestSelf()\n\tplan 10 tests\n\n\ttest diagnostic \"Normal tests\"\n\ttest 2 > 1\n\ttest \"Basic test\" when true\n\n\ttest diagnostic \"Skipped tests\"\n\tskip test\n\tskip test \"Skipped 2\"\n\tskip test because \"Not implemented\"\n\tskip test \"Skipped 4\" because \"Not supported on this platform\"\n\n\ttest diagnostic \"Tests which are expected to fail\"\n\tbroken test false\n\tbroken test \"Failed 2\" when false\n\tbroken test false because \"broken\"\n\tbroken test \"Failed 4\" when false because \"really broken\"\nend handler\n\nThe test results are output on standard output in TAP (Test Anything\nProtocol) format."
			}],
			"description":"This library provides syntax for unit testing LiveCode Builder\nprograms.  It is used by the LiveCode Builder standard library's\ntestsuite.\n\nTo use this library, write your tests in a Builder source code file.\nEach group of tests should be a public handler with a name beginning\nwith `Test`.  If possible, use one test per handler.  Otherwise, add a\n`plan N tests` statement at the start of the handler."
		},{
			"id":"livecode_builder-509",
			"name":"unittest",
			"display name":"UnitTest",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"test <Condition>"
			],
			"display syntax":[
				"test <i>Condition</i>"
			],
			"associations":["com.livecode.unittest"],
			"summary":"Make a unit test assertion",
			"examples":[{
				"script":"test 2 > 1"
			}],
			"description":"Make a basic unit test assertion, with no test description.  It is usually more\nhelpful to use <UnitTestDescription>.",
			"references":{
				"statement":["UnitTestDescription"]
			},
			"tags":["unit tests","unit tests"]
		},{
			"id":"livecode_builder-510",
			"name":"unittestdescription",
			"display name":"UnitTestDescription",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"test <Description> when <Condition>"
			],
			"display syntax":[
				"test <i>Description</i> when <i>Condition</i>"
			],
			"associations":["com.livecode.unittest"],
			"summary":"Make a unit test assertion with a description",
			"parameters":[{
				"name":"Condition",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to `true` if the test is successful"
			}],
			"examples":[{
				"script":"test \"integer greater than\" when 2 > 1"
			}],
			"description":"Make a unit test assertion.  The test is considered to have passed if\n<Condition> is true.  The <Description> string is a short message that\nsummarises what the test is checking.",
			"tags":["unit tests","unit tests"]
		},{
			"id":"livecode_builder-511",
			"name":"deletedirectory",
			"display name":"DeleteDirectory",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"delete directory <Directory>"
			],
			"display syntax":[
				"delete directory <i>Directory</i>"
			],
			"associations":["com.livecode.file"],
			"summary":"Delete a directory.",
			"parameters":[{
				"name":"Directory",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a filesystem path."
			}],
			"description":"Deletes a directory.  The directory must be empty.",
			"tags":["io","filesystem"]
		},{
			"id":"livecode_builder-512",
			"name":"com.livecode.file",
			"display name":"com.livecode.file",
			"library":"livecode_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.file"
			],
			"associations":["com.livecode.file"],
			"summary":"This module specifies the syntax definitions and bindings for\nfilesystem operations in LiveCode Builder.\n\n>*Note:* This module is currently experimental and unstable.  The\n>syntax is likely to change in future versions of LiveCode.",
			"description":"This module specifies the syntax definitions and bindings for\nfilesystem operations in LiveCode Builder.\n\n>*Note:* This module is currently experimental and unstable.  The\n>syntax is likely to change in future versions of LiveCode."
		},{
			"id":"livecode_builder-513",
			"name":"getdirectoryentries",
			"display name":"GetDirectoryEntries",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the entries of directory <Directory>"
			],
			"display syntax":[
				"the entries of directory <i>Directory</i>"
			],
			"associations":["com.livecode.file"],
			"summary":"List the contents of a directory.",
			"parameters":[{
				"name":"Directory",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a filesystem path."
			}],
			"description":"Returns a List containing the directory entries of a directory.  The\ndirectory must exist.",
			"tags":["io","filesystem"]
		},{
			"id":"livecode_builder-514",
			"name":"deletefile",
			"display name":"DeleteFile",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"delete file <File>"
			],
			"display syntax":[
				"delete file <i>File</i>"
			],
			"associations":["com.livecode.file"],
			"summary":"Delete a file from the filesystem.",
			"parameters":[{
				"name":"File",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a filesystem path."
			}],
			"description":"Deletes the specified file.  The file must exist.",
			"tags":["io","filesystem"]
		},{
			"id":"livecode_builder-515",
			"name":"createdirectory",
			"display name":"CreateDirectory",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"create directory <Directory>"
			],
			"display syntax":[
				"create directory <i>Directory</i>"
			],
			"associations":["com.livecode.file"],
			"summary":"Create a named directory.",
			"parameters":[{
				"name":"Directory",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a filesystem path."
			}],
			"description":"Creates a new, empty directory.  The directory must not already exist.",
			"tags":["io","filesystem"]
		},{
			"id":"livecode_builder-516",
			"name":"filecontents",
			"display name":"FileContents",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the contents of file <File>"
			],
			"display syntax":[
				"the contents of file <i>File</i>"
			],
			"associations":["com.livecode.file"],
			"summary":"The data stored in a file.",
			"parameters":[{
				"name":"File",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a filesystem path."
			}],
			"description":"The raw data stored in a file.\n\n>*Note:* Setting the contents of a file will replace the file with a\n>newly-created file with the new contents.",
			"tags":["io","filesystem"]
		},{
			"id":"livecode_builder-517",
			"name":"elementsofarray",
			"display name":"ElementsOfArray",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the elements of <Target>"
			],
			"display syntax":[
				"the elements of <i>Target</i>"
			],
			"associations":["com.livecode.array"],
			"summary":"Returns the elements of an array.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an array."
			}],
			"examples":[{
				"script":"variable tArray as Array\nput the empty array into tArray\nput 1 into tArray[\"key1\"]\nput 2 into tArray[\"key2\"]\nput 3 into tArray[\"key3\"]\n\nvariable tElements as List\nput the elements of tArray into tElements\nsort tElements in ascending numeric order\n\n// tElements is [1, 2, 3]"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A list whose elements are the elements of <Target>."
			}],
			"description":">*Note:* The resulting list is not necessarily ordered in any way. Use the <com.livecode.sort> library to sort the elements.",
			"references":{
				"library":["com.livecode.sort"]
			},
			"tags":["arrays"]
		},{
			"id":"livecode_builder-518",
			"name":"emptyarray",
			"display name":"EmptyArray",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"the empty array"
			],
			"display syntax":[
				"the empty array"
			],
			"associations":["com.livecode.array"],
			"summary":"Designates the array with no elements.",
			"examples":[{
				"script":"variable tVar as Array\nvariable tCount as Number\nput the empty array into tVar\nput the number of elements in tVar into tCount -- tCount is 0"
			}],
			"description":"Use ```the empty array``` to initialise an array variable.",
			"tags":["arrays"]
		},{
			"id":"livecode_builder-519",
			"name":"repeatforeachelementinarray",
			"display name":"RepeatForEachElementInArray",
			"library":"livecode_builder",
			"type":"iterator",
			"syntax":[
				"element <Iterand>"
			],
			"display syntax":[
				"element <i>Iterand</i>"
			],
			"associations":["com.livecode.array"],
			"summary":"Repeat over the elements of an array.",
			"parameters":[{
				"name":"Iterand",
				"type":"",
				"refparam":"false",
				"description":"Any variable of appropriate type."
			}],
			"examples":[{
				"script":"    variable tArray as Array\n    put the empty array into tArray\n    put 1 into tArray[\"key1\"]\n    put 2 into tArray[\"key2\"]\n    put 3 into tArray[\"key3\"]\n\n\tvariable tSum as Number\n\tput 0 into tSum\n\n    variable tElement\n    repeat for each element tElement in tArray\n        add tElement to tSum\n    end repeat\n\n    // tSum is 6"
			}],
			"description":"Use repeat for each element to iterate over the elements of an array in no particular order. On each iteration, the <Iterand> will contain the next element of the array being iterated over.\n\n>*Note:* If <Iterand> is typed, then an error will be thrown if the array being iterated over contains any elements of a different type.",
			"tags":["arrays"]
		},{
			"id":"livecode_builder-520",
			"name":"singletonelementofarray",
			"display name":"SingletonElementOfArray",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Target> [ <Key> ]"
			],
			"display syntax":[
				"<i>Target</i> [ <i>Key</i> ]"
			],
			"associations":["com.livecode.array"],
			"summary":"Designates the element with key <Key> in <Target>.\nIndex:An expression which evaluates to a string.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an array."
			}],
			"examples":[{
				"script":"variable tArray as Array\nput the empty array into tArray\nput \"value\" into tArray[\"key\"]\n\nvariable tVar as String\nput tArray[\"key\"] into tVar -- tVar contains \"value\""
			}],
			"description":"Either locates the element container with the given key for use as the target container of another operation, or evaluates the element with the given key as the source of another operation.",
			"tags":["arrays"]
		},{
			"id":"livecode_builder-521",
			"name":"deleteelementofarray",
			"display name":"DeleteElementOfArray",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"delete <Target> [ <Key> ]"
			],
			"display syntax":[
				"delete <i>Target</i> [ <i>Key</i> ]"
			],
			"associations":["com.livecode.array"],
			"summary":"Deletes the element with key <Key> in <Target>.\nIndex:An expression which evaluates to a string.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an array."
			}],
			"examples":[{
				"script":"variable tArray as Array\nput the empty array into tArray\nput \"value\" into tArray[\"key\"]\n\ndelete tArray[\"key\"] -- tArray is the empty array"
			}],
			"description":"Either locates the element container with the given key for use as the target container of another operation, or evaluates the element with the given key as the source of another operation.",
			"tags":["arrays"]
		},{
			"id":"livecode_builder-522",
			"name":"amongkeysofarray",
			"display name":"AmongKeysOfArray",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Needle> ( is not | is ) among the keys of <Target>"
			],
			"display syntax":[
				"<i>Needle</i> ( is not | is ) among the keys of <i>Target</i>"
			],
			"associations":["com.livecode.array"],
			"summary":"Determines if an array has a given key",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an integer, string, or list of integers."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an array."
			}],
			"examples":[{
				"script":"variable tArray as Array\nput \"value\" into tArray[\"key\"]\n\nvariable tIsAmong as Boolean\nput \"key\" is among the keys of tArray into tIsAmong -- tIsAmong is true"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Needle> can be found among the keys of <Target>."
			}],
			"description":"The keys of an array are case insensitive. Thus\n``` tVar is among the keys of tArray``` \nis not equivalent to \n``` tVar is in (the keys of tArray) ```\nas the latter <IsInList> operation *is* case sensitive.",
			"references":{
				"operator":["IsInList"]
			},
			"tags":["arrays"]
		},{
			"id":"livecode_builder-523",
			"name":"keysofarray",
			"display name":"KeysOfArray",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the keys of <Target>"
			],
			"display syntax":[
				"the keys of <i>Target</i>"
			],
			"associations":["com.livecode.array"],
			"summary":"Returns the keys of an array.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an array."
			}],
			"examples":[{
				"script":"variable tArray as Array\nput the empty array into tArray\nput \"value1\" into tArray[\"key1\"]\nput \"value2\" into tArray[\"key2\"]\nput \"value3\" into tArray[\"key3\"]\n\nvariable tKeys as List\nput the keys of tArray into tKeys\nsort tKeys in ascending order\n\nvariable tKeysString as String\ncombine tKeys with \",\" into tKeysString \n// tKeysString is \"key1,key2,key3\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A list whose elements are the keys of <Target>."
			}],
			"description":">*Note:* The resulting list is not necessarily ordered in any way. Use the <com.livecode.sort> library to sort the keys.",
			"references":{
				"library":["com.livecode.sort"]
			},
			"tags":["arrays"]
		},{
			"id":"livecode_builder-524",
			"name":"countelementsofarray",
			"display name":"CountElementsOfArray",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the number of elements in <Target>"
			],
			"display syntax":[
				"the number of elements in <i>Target</i>"
			],
			"associations":["com.livecode.array"],
			"summary":"Returns the number of elements in <Target>",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an array."
			}],
			"examples":[{
				"script":"variable tArray as Array\nput the empty array into tArray\nput 1 into tArray[\"key1\"]\nput 2 into tArray[\"key2\"]\nput 3 into tArray[\"key3\"]\n\nvariable tVar as Number\nput the number of elements in tArray into tVar -- tVar contains 3"
			}],
			"description":"The number of elements in tArray returns the number of key-value pairs stored in the array.",
			"tags":["arrays"]
		},{
			"id":"livecode_builder-525",
			"name":"amongelementsofarray",
			"display name":"AmongElementsOfArray",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Needle> ( is not | is ) among the elements of <Target>"
			],
			"display syntax":[
				"<i>Needle</i> ( is not | is ) among the elements of <i>Target</i>"
			],
			"associations":["com.livecode.array"],
			"summary":"Determines if an array contains a given element",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"Any expression."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an array."
			}],
			"examples":[{
				"script":"variable tArray as Array\nput \"value\" into tArray[\"key\"]\n\nvariable tIsAmong as Boolean\nput \"value\" is among the elements of tArray into tIsAmong -- tIsAmong is true"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Needle> can be found among the elements of <Target>."
			}],
			"description":"Elements are compared using the default comparison for that type. Thus for a string, ```tString```, \n```tString is among the elements of tArray``` \nis a case sensitive search.",
			"tags":["arrays"]
		},{
			"id":"livecode_builder-526",
			"name":"repeatforeachkey",
			"display name":"RepeatForEachKey",
			"library":"livecode_builder",
			"type":"iterator",
			"syntax":[
				"key <Iterand>"
			],
			"display syntax":[
				"key <i>Iterand</i>"
			],
			"associations":["com.livecode.array"],
			"summary":"Repeat over the keys of an array.",
			"parameters":[{
				"name":"Iterand",
				"type":"",
				"refparam":"false",
				"description":"A string container."
			}],
			"examples":[{
				"script":"    variable tArray as Array\n    put the empty array into tArray\n    put 1 into tArray[\"abc\"]\n    put 2 into tArray[\"def\"]\n    put 3 into tArray[\"ghi\"]\n\n\tvariable tString as String\n\tput \"\" into tString\n\n    variable tKey as String\n    repeat for each key tKey in tArray\n        put tKey after tString\n    end repeat\n\n    variable tBool as Boolean\n    put tString contains \"abc\" into tBool -- tBool is true"
			}],
			"description":"Use repeat for each key to iterate over the keys of an array in no particular order. On each iteration, the <Iterand> will contain the next key of the array being iterated over.",
			"tags":["arrays","control structures"]
		},{
			"id":"livecode_builder-527",
			"name":"com.livecode.array",
			"display name":"com.livecode.array",
			"library":"livecode_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.array"
			],
			"associations":["com.livecode.array"],
			"summary":"This library consists of the operations on arrays included in the standard library of LiveCode Builder.",
			"description":"This library consists of the operations on arrays included in the standard library of LiveCode Builder."
		},{
			"id":"livecode_builder-528",
			"name":"isnotnothing",
			"display name":"IsNotNothing",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Target> is not nothing"
			],
			"display syntax":[
				"<i>Target</i> is not nothing"
			],
			"associations":["com.livecode.type"],
			"summary":"Determines whether <Target> is nothing or not.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"Any expression"
			}],
			"examples":[{
				"script":"public handler CanBeNumber(in pString as String) returns Boolean\n    variable tNum as optional Number\n    put pString parsed as number into tNum\n    return tNum is not nothing\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns false if the given expression <Target> is nothing, and true otherwise."
			}],
			"description":"Use the <IsNotNothing> operator to test if operators or handlers have returned anything."
		},{
			"id":"livecode_builder-529",
			"name":"isnotempty",
			"display name":"IsNotEmpty",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Target> is not empty"
			],
			"display syntax":[
				"<i>Target</i> is not empty"
			],
			"associations":["com.livecode.type"],
			"summary":"Determines whether <Target> is empty or not.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"Any expression"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns false if the given expression <Target> evaluates to the empty value of that type, and true otherwise."
			}],
			"description":"Determines whether <Target> is empty or not."
		},{
			"id":"livecode_builder-530",
			"name":"isanumber",
			"display name":"IsANumber",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Target> is a number"
			],
			"display syntax":[
				"<i>Target</i> is a number"
			],
			"associations":["com.livecode.type"],
			"summary":"Determines whether <Target> is a number or not.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"Any expression"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if the given expression <Target> is a number, and false if not."
			}],
			"description":"Determines whether <Target> is a number or not."
		},{
			"id":"livecode_builder-531",
			"name":"isastring",
			"display name":"IsAString",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Target> is a string"
			],
			"display syntax":[
				"<i>Target</i> is a string"
			],
			"associations":["com.livecode.type"],
			"summary":"Determines whether <Target> is a string or not.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"Any expression"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if the given expression <Target> is a string, and false if not."
			}],
			"description":"Determines whether <Target> is a string or not."
		},{
			"id":"livecode_builder-532",
			"name":"isempty",
			"display name":"IsEmpty",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Target> is empty"
			],
			"display syntax":[
				"<i>Target</i> is empty"
			],
			"associations":["com.livecode.type"],
			"summary":"Determines whether <Target> is empty or not.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"Any expression"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if the given expression <Target> evaluates to the empty value of that type, and false otherwise."
			}],
			"description":"Determines whether <Target> is empty or not."
		},{
			"id":"livecode_builder-533",
			"name":"isnothing",
			"display name":"IsNothing",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Target> is nothing"
			],
			"display syntax":[
				"<i>Target</i> is nothing"
			],
			"associations":["com.livecode.type"],
			"summary":"Determines whether <Target> is nothing or not.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"Any expression"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if the given expression <Target> is nothing, and false otherwise."
			}],
			"description":"Use the <IsNothing> operator to test if operators or handlers have returned anything."
		},{
			"id":"livecode_builder-534",
			"name":"isalist",
			"display name":"IsAList",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Target> is a list"
			],
			"display syntax":[
				"<i>Target</i> is a list"
			],
			"associations":["com.livecode.type"],
			"summary":"Determines whether <Target> is a list or not.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"Any expression"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if the given expression <Target> is a list, and false if not."
			}],
			"description":"Determines whether <Target> is a list or not."
		},{
			"id":"livecode_builder-535",
			"name":"isaboolean",
			"display name":"IsABoolean",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Target> is a boolean"
			],
			"display syntax":[
				"<i>Target</i> is a boolean"
			],
			"associations":["com.livecode.type"],
			"summary":"Determines whether <Target> is a boolean or not.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"Any expression"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if the given expression <Target> is a boolean, and false if not."
			}],
			"description":"Determines whether <Target> is a boolean or not."
		},{
			"id":"livecode_builder-536",
			"name":"isadata",
			"display name":"IsAData",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Target> is a data"
			],
			"display syntax":[
				"<i>Target</i> is a data"
			],
			"associations":["com.livecode.type"],
			"summary":"Determines whether <Target> is data or not.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"Any expression"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if the given expression <Target> is data, and false if not."
			}],
			"description":"Determines whether <Target> is data or not."
		},{
			"id":"livecode_builder-537",
			"name":"isanarray",
			"display name":"IsAnArray",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Target> is an array"
			],
			"display syntax":[
				"<i>Target</i> is an array"
			],
			"associations":["com.livecode.type"],
			"summary":"Determines whether <Target> is an array or not.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"Any expression"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if the given expression <Target> is an array, and false if not.\n"
			}],
			"description":"Determines whether <Target> is an array or not."
		},{
			"id":"livecode_builder-538",
			"name":"com.livecode.type",
			"display name":"com.livecode.type",
			"library":"livecode_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.type"
			],
			"associations":["com.livecode.type"],
			"summary":"This library consists of the general operations on types provided by the standard library of LiveCode Builder.",
			"description":"This library consists of the general operations on types provided by the standard library of LiveCode Builder."
		},{
			"id":"livecode_builder-539",
			"name":"booleanisequaltoboolean",
			"display name":"BooleanIsEqualToBoolean",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Left> is <Right>"
			],
			"display syntax":[
				"<i>Left</i> is <i>Right</i>"
			],
			"associations":["com.livecode.logic"],
			"summary":"Determines whether <Left> and <Right> are equal or not.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a boolean value."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a boolean value."
			}],
			"examples":[{
				"script":"variable tBool is bool\nput true is true into tBool -- tBool is true"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Left> evaluates to the same value as <Right>."
			}],
			"description":"Determines whether <Left> and <Right> are equal or not.",
			"tags":["logic"]
		},{
			"id":"livecode_builder-540",
			"name":"booleanformattedasstring",
			"display name":"BooleanFormattedAsString",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Operand> formatted as string"
			],
			"display syntax":[
				"<i>Operand</i> formatted as string"
			],
			"associations":["com.livecode.logic"],
			"summary":"Formats a boolean value as a string",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a boolean value."
			}],
			"examples":[{
				"script":"variable tString as String\nvariable tBool as Boolean\nput (false is not not true) is false into tBool\nput tBool formatted as string into tString -- tString contains \"true\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"\"true\" or \"false\""
			}],
			"description":"Use <BooleanFormattedAsString> when you want to manipulate a boolean value as text."
		},{
			"id":"livecode_builder-541",
			"name":"logicnot",
			"display name":"LogicNot",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"not <Operand>"
			],
			"display syntax":[
				"not <i>Operand</i>"
			],
			"associations":["com.livecode.logic"],
			"summary":"Returns the boolean-logical value of the expression 'not <Operand>'",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a boolean value"
			}],
			"examples":[{
				"script":"variable tBool is bool\nput not not not not true into tBool is true"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"If the operand expression evaluates to true, the value of the expression is false.\n            Otherwise, the value of the expression is true."
			}],
			"description":"Returns the boolean-logical value of the expression 'not <Operand>'",
			"tags":["logic"]
		},{
			"id":"livecode_builder-542",
			"name":"booleanisnotequaltoboolean",
			"display name":"BooleanIsNotEqualToBoolean",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Left> is not <Right>"
			],
			"display syntax":[
				"<i>Left</i> is not <i>Right</i>"
			],
			"associations":["com.livecode.logic"],
			"summary":"Determines whether <Left> and <Right> are equal or not.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a boolean value."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a boolean value."
			}],
			"examples":[{
				"script":"variable tBool is bool\nput true is not false into tBool -- tBool is true"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Left> evaluates to the opposite boolean value as <Right>."
			}],
			"description":"Determines whether <Left> and <Right> are equal or not.",
			"tags":["logic"]
		},{
			"id":"livecode_builder-543",
			"name":"formatbooleanasstring",
			"display name":"FormatBooleanAsString",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"format <Operand> as string"
			],
			"display syntax":[
				"format <i>Operand</i> as string"
			],
			"associations":["com.livecode.logic"],
			"summary":"Formats a boolean value as a string",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a boolean value."
			}],
			"examples":[{
				"script":"variable tVar as String\nformat 1 = 0 as String into tVar\nput \"e\" into char 3 of tVar -- tVar is \"tree\""
			}],
			"value":[{
				"name":"the result",
				"type":"",
				"description":"\"true\" or \"false\""
			}],
			"description":"Use <FormatBooleanAsString> when you want to manipulate a boolean value as text."
		},{
			"id":"livecode_builder-544",
			"name":"stringparsedasboolean",
			"display name":"StringParsedAsBoolean",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Operand> parsed as boolean"
			],
			"display syntax":[
				"<i>Operand</i> parsed as boolean"
			],
			"associations":["com.livecode.logic"],
			"summary":"Parses a string as a boolean value",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a string."
			}],
			"examples":[{
				"script":"variable tString as String\nvariable tBool as optional Boolean\nput \"false\" into tString\nput tString parsed as boolean into tBool -- tBool contains false"
			},{
				"script":"variable tBool as optional Boolean\nput \"flase\" parsed as boolean into tBool -- tBool is nothing"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"true or false"
			}],
			"description":"Use <StringParsedAsBoolean> when you want to determine if a string contains \"true\" or \"false\"\n\n>*Note:* Only the strings \"true\" and \"false\" will parse to give a boolean value. Any other input will cause an error to be thrown."
		},{
			"id":"livecode_builder-545",
			"name":"parsestringasboolean",
			"display name":"ParseStringAsBoolean",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"parse <Operand> as boolean"
			],
			"display syntax":[
				"parse <i>Operand</i> as boolean"
			],
			"associations":["com.livecode.logic"],
			"summary":"Parses a string as a boolean value",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a string."
			}],
			"examples":[{
				"script":"variable tString as String\nvariable tBool as optional Boolean\ncombine [\"f\", \"a\", \"l\", \"s\" \"e\"] with \"\" into tString\nput tString parsed as boolean into tBool -- tBool contains false"
			},{
				"script":"variable tResult as String\nvariable tCheck as optional Boolean\nparse \"sdfsdf\" as boolean into tCheck\nif tCheck is nothing then\n\tput \"not a valid boolean\" into tResult\nend if"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"true or false"
			}],
			"description":"Use <StringParsedAsBoolean> when you want to determine if a string contains \"true\" or \"false\"\n\n>*Note:* Only the strings \"true\" and \"false\" will parse to give a boolean value. Any other input will cause an error to be thrown.\n"
		},{
			"id":"livecode_builder-546",
			"name":"com.livecode.logic",
			"display name":"com.livecode.logic",
			"library":"livecode_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.logic"
			],
			"associations":["com.livecode.logic"],
			"summary":"This library consists of the logical operations included in the standard library of LiveCode Builder.",
			"description":"This library consists of the logical operations included in the standard library of LiveCode Builder."
		},{
			"id":"livecode_builder-547",
			"name":"com.livecode.stream",
			"display name":"com.livecode.stream",
			"library":"livecode_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.stream"
			],
			"associations":["com.livecode.stream"],
			"summary":"This module specifies the syntax definitions and bindings for\nstream input and output operations in modular LiveCode.",
			"description":"This module specifies the syntax definitions and bindings for\nstream input and output operations in modular LiveCode."
		},{
			"id":"livecode_builder-548",
			"name":"writetostream",
			"display name":"WriteToStream",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"write <Buffer> to <Destination>"
			],
			"display syntax":[
				"write <i>Buffer</i> to <i>Destination</i>"
			],
			"associations":["com.livecode.stream"],
			"summary":"Write data to a stream.\nStream:An expression that evaluates to a stream.",
			"parameters":[{
				"name":"Buffer",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to binary data."
			}],
			"description":"Write some data to a stream.  If not all of the data can be written,\nfails with an error.\n\n>*Warning:* If the stream is able to accept only part of the data,\n>some streams will write that part of the data and discard the rest.\n>This may cause loss of data.",
			"tags":["io"]
		},{
			"id":"livecode_builder-549",
			"name":"defaulterrorstream",
			"display name":"DefaultErrorStream",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"the error stream"
			],
			"display syntax":[
				"the error stream"
			],
			"associations":["com.livecode.stream"],
			"summary":"Default error stream.",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The default error stream."
			}],
			"description":"The default error stream for diagnostic information.\n\nIn command-line programs, this is usually used to display error\nmessages.  In server programs, data output through this stream may be\nstored in the system log, depending on the server configuration.",
			"tags":["io"]
		},{
			"id":"livecode_builder-550",
			"name":"defaultoutputstream",
			"display name":"DefaultOutputStream",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"the output stream"
			],
			"display syntax":[
				"the output stream"
			],
			"associations":["com.livecode.stream"],
			"summary":"Default output stream.",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The default output stream."
			}],
			"description":"The default output stream for output from the program.\n\nIn command-line programs, this is usually used to output the results\nof running the program.  In CGI programs running on servers, this is\nusually used to output the data to be sent to the client.",
			"tags":["io"]
		},{
			"id":"livecode_builder-551",
			"name":"com.livecode.emscripten",
			"display name":"com.livecode.emscripten",
			"library":"livecode_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.emscripten"
			],
			"associations":["com.livecode.emscripten"],
			"summary":"This module provides utility handlers for converting to and from Emscripten types.",
			"description":"This module provides utility handlers for converting to and from Emscripten types."
		},{
			"id":"livecode_builder-552",
			"name":"evaljavascriptwitharguments",
			"display name":"EvalJavaScriptWithArguments",
			"library":"livecode_builder",
			"type":"handler",
			"syntax":[
				"EvalJavaScriptWithArguments(<pScript>,<pArgs>)"
			],
			"display syntax":[
				"EvalJavaScriptWithArguments(<i>pScript</i>,<i>pArgs</i>)"
			],
			"associations":["com.livecode.emscripten"],
			"summary":"Evaluate JavaScript code within the browser with arguments",
			"parameters":[{
				"name":"pScript",
				"type":"",
				"refparam":"false",
				"description":"The script to evaluate"
			},{
				"name":"pArgs",
				"type":"",
				"refparam":"false",
				"description":"The list of arguments to pass to the script"
			}],
			"examples":[{
				"script":"variable mButton as JSObject\n\npublic handler SetButtonText(in pText as String)\n\tEvalJavaScriptWithArguments(\"arguments[0].innerHTML = arguments[1]\", [mButton, pText])\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A value of any type"
			}],
			"description":"Use <EvalJavaScriptWithArguments> to get the result of running a block of JavaScript code, where you need to pass values to the script."
		},{
			"id":"livecode_builder-553",
			"name":"handlerasjsfunction",
			"display name":"HandlerAsJSFunction",
			"library":"livecode_builder",
			"type":"handler",
			"syntax":[
				"HandlerAsJSFunction(<pHandler>)"
			],
			"display syntax":[
				"HandlerAsJSFunction(<i>pHandler</i>)"
			],
			"associations":["com.livecode.emscripten"],
			"summary":"Wrap a LiveCode Builder handler within a JavaScript function, suitable for passing as an event handler.",
			"parameters":[{
				"name":"pHandler",
				"type":"",
				"refparam":"false",
				"description":"The handler to wrap"
			}],
			"examples":[{
				"script":"variable mButton as JSObject\nvariable mOnClickHandler as JSObject\n\nprivate handler OnJSClick(pEvent as JSObject) returns nothing\n\tSetLabel(\"Clicked!\")\nend handler\n\nprivate handler SetJSEventHandler(in pElement as JSObject, in pEvent as String, in pHandler as JSObject)\n\tEvalJavaScriptWithArguments(\"arguments[0].addEventListener(arguments[1], arguments[2]);\", [pElement, pEvent, pHandler])\nend handler\n\nprivate handler SetupEventHandler()\n\tput HandlerAsJSFunction(OnJSClick) into mOnClickHandler\n\tSetJSEventHandler(mButton, \"click\", mOnClickHandler)\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A JavaScript function object, wrapping the handler"
			}],
			"description":"Use <HandlerAsJSFunction> to convert a handler reference to a JavaScript function object reference."
		},{
			"id":"livecode_builder-554",
			"name":"pointertojsobject",
			"display name":"PointerToJSObject",
			"library":"livecode_builder",
			"type":"handler",
			"syntax":[
				"PointerToJSObject(<pPointer>)"
			],
			"display syntax":[
				"PointerToJSObject(<i>pPointer</i>)"
			],
			"associations":["com.livecode.emscripten"],
			"summary":"Convert a Pointer into a JavaScript object",
			"parameters":[{
				"name":"pPointer",
				"type":"",
				"refparam":"false",
				"description":"The Pointer to convert"
			}],
			"examples":[{
				"script":"variable mButtonPointer as Pointer\n\npublic handler SetButtonText(in pText as String)\n\tvariable tJSButton as JSObject\n\tput PointerToJSObject(mButtonPointer) into tJSButton\n\n\tEvalJavaScriptWithArguments(\"arguments[0].innerHTML = arguments[1]\", [tJSButton, pText])\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"An value of type JSObject"
			}],
			"description":"Use <PointerToJSObject> to convert a variable of type Pointer to a JavaScript object."
		},{
			"id":"livecode_builder-555",
			"name":"evaljavascript",
			"display name":"EvalJavaScript",
			"library":"livecode_builder",
			"type":"handler",
			"syntax":[
				"EvalJavaScript(<pScript>)"
			],
			"display syntax":[
				"EvalJavaScript(<i>pScript</i>)"
			],
			"associations":["com.livecode.emscripten"],
			"summary":"Evaluate JavaScript code within the browser",
			"parameters":[{
				"name":"pScript",
				"type":"",
				"refparam":"false",
				"description":"The script to evaluate"
			}],
			"examples":[{
				"script":"public handler GetInputText() returns String\n\treturn EvalJavaScript(\"document.getElementById('myText').value\")\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A value of any type"
			}],
			"description":"Use <EvalJavaScript> to get the result of running a block of JavaScript code\n"
		},{
			"id":"livecode_builder-556",
			"name":"sortlistdescending",
			"display name":"SortListDescending",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"sort <Target> in descending order"
			],
			"display syntax":[
				"sort <i>Target</i> in descending order"
			],
			"associations":["com.livecode.sort"],
			"summary":"Sorts <Target> in descending text order.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a list of strings."
			}],
			"examples":[{
				"script":"   \tvariable tTestList as List\n\tput [\"a\", \"b\", \"c\"] into tTestList\n\n    sort tTestList in descending order -- tTestList is [\"c\", \"b\", \"a\"]"
			}],
			"description":"Generic sort is performed by comparing the elements of a homogeneous list according to the default comparison function associated to the type of its elements.\n>*Note:* It is an error if <Target> is not homogeneous, i.e. if it contains any elements of differing type.",
			"tags":["sorting"]
		},{
			"id":"livecode_builder-557",
			"name":"sortlistascendingbinary",
			"display name":"SortListAscendingBinary",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"sort <Target> in ascending byte order"
			],
			"display syntax":[
				"sort <i>Target</i> in ascending byte order"
			],
			"associations":["com.livecode.sort"],
			"summary":"Sorts <Target> in ascending binary order.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a list of binary data."
			}],
			"description":"Binary sort is performed by comparing data elements on a byte by byte basis.\n>*Note:* It is an error if <Target> contains any elements of non-data type.",
			"tags":["sorting"]
		},{
			"id":"livecode_builder-558",
			"name":"sortlistdescendingtext",
			"display name":"SortListDescendingText",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"sort <Target> in descending text order"
			],
			"display syntax":[
				"sort <i>Target</i> in descending text order"
			],
			"associations":["com.livecode.sort"],
			"summary":"Sorts <Target> in descending text order.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a list of strings."
			}],
			"examples":[{
				"script":"    variable tTestList as List\n    put the empty list into tTestList\n\n    push \"abcd\" onto tTestList\n    push \"xyz\" onto tTestList\n\n    sort tTestList in descending text order -- tTestList is [\"xyz\", \"abcd\"]"
			}],
			"description":"Text sort is performed by comparing string elements on a codepoint by codepoint basis.\n>*Note:* It is an error if <Target> contains any elements of non-string type.",
			"tags":["sorting"]
		},{
			"id":"livecode_builder-559",
			"name":"sortlistascendingtext",
			"display name":"SortListAscendingText",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"sort <Target> in ascending text order"
			],
			"display syntax":[
				"sort <i>Target</i> in ascending text order"
			],
			"associations":["com.livecode.sort"],
			"summary":"Sorts <Target> in ascending text order.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a list of strings."
			}],
			"examples":[{
				"script":"    variable tTestList as List\n\n\tvariable tChar\n\trepeat for each char tChar in \"spoilage\"\n\t\tpush tChar onto tTestList\n\tend repeat\n\n    sort tTestList in ascending text order\n    variable tString as String\n    combine tTestList with \"\" into tString -- tString is \"aegilops\""
			}],
			"description":"Text sort is performed by comparing string elements on a codepoint by codepoint basis.\n>*Note:* It is an error if <Target> contains any elements of non-string type.",
			"tags":["sorting"]
		},{
			"id":"livecode_builder-560",
			"name":"sortlistascendingnumeric",
			"display name":"SortListAscendingNumeric",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"sort <Target> in ascending numeric order"
			],
			"display syntax":[
				"sort <i>Target</i> in ascending numeric order"
			],
			"associations":["com.livecode.sort"],
			"summary":"Sorts <Target> in ascending numeric order.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a list of numbers."
			}],
			"examples":[{
				"script":"    variable tTestList as List\n    put [3,4,5,1,2] into tTestList\n\n    sort tTestList in ascending numeric order -- tTestList is [1,2,3,4,5]"
			}],
			"description":"Numeric sort is performed by comparing numeric elements by cardinality.\n>*Note:* It is an error if <Target> contains any elements of non-numeric type.",
			"tags":["sorting"]
		},{
			"id":"livecode_builder-561",
			"name":"sortlistdescendingbinary",
			"display name":"SortListDescendingBinary",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"sort <Target> in descending byte order"
			],
			"display syntax":[
				"sort <i>Target</i> in descending byte order"
			],
			"associations":["com.livecode.sort"],
			"summary":"Sorts <Target> in descending binary order.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a list of binary data."
			}],
			"description":"Binary sort is performed by comparing data elements on a byte by byte basis.\n>*Note:* It is an error if <Target> contains any elements of non-data type.",
			"tags":["sorting"]
		},{
			"id":"livecode_builder-562",
			"name":"sortcompare",
			"display name":"SortCompare",
			"library":"livecode_builder",
			"type":"handler",
			"syntax":[
				"SortCompare(<pLeft>,<pRight>)"
			],
			"display syntax":[
				"SortCompare(<i>pLeft</i>,<i>pRight</i>)"
			],
			"associations":["com.livecode.sort"],
			"summary":"A handler type that can be used in the <SortListUsingHandler> command.",
			"parameters":[{
				"name":"pLeft",
				"type":"",
				"refparam":"false",
				"description":"The left hand value to compare."
			},{
				"name":"pRight",
				"type":"",
				"refparam":"false",
				"description":"The right hand value to compare."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"An integer less than 0 if pLeft is less than pRight with respect to the intended ordering,\nan integer greater than 0 if pLeft is greater than pRight with respect to the intended ordering,\nor 0 if pLeft is equal to pRight."
			}],
			"description":"Any handler of type <SortCompare> can be passed to <SortListUsingHandler> to sort a list. \nIt takes two arguments, and returns an integer based on the comparison.",
			"tags":["sorting"]
		},{
			"id":"livecode_builder-563",
			"name":"sortlistascending",
			"display name":"SortListAscending",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"sort <Target> [in ascending order]"
			],
			"display syntax":[
				"sort <i>Target</i> [in ascending order]"
			],
			"associations":["com.livecode.sort"],
			"summary":"Sorts <Target> in ascending order.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a list."
			}],
			"examples":[{
				"script":"    variable tTestList as List\n\tput [4,3,1,5,2] into tTestList\n\n    sort tTestList -- tTestList is [1,2,3,4,5]"
			}],
			"description":"Generic sort is performed by comparing the elements of a homogeneous list according to the default comparison function associated to the type of its elements.\n>*Note:* It is an error if <Target> is not homogeneous, i.e. if it contains any elements of differing type.",
			"tags":["sorting"]
		},{
			"id":"livecode_builder-564",
			"name":"sortlistdescendingnumeric",
			"display name":"SortListDescendingNumeric",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"sort <Target> in descending numeric order"
			],
			"display syntax":[
				"sort <i>Target</i> in descending numeric order"
			],
			"associations":["com.livecode.sort"],
			"summary":"Sorts <Target> in descending numeric order.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a list of numbers."
			}],
			"examples":[{
				"script":"    variable tTestList as List\n    put [3,4,5,1,2] into tTestList\n\n    sort tTestList in descending numeric order -- tTestList is [5,4,3,2,1]"
			}],
			"description":"Numeric sort is performed by comparing numeric elements by cardinality.\n>*Note:* It is an error if <Target> contains any elements of non-numeric type.",
			"tags":["sorting"]
		},{
			"id":"livecode_builder-565",
			"name":"com.livecode.sort",
			"display name":"com.livecode.sort",
			"library":"livecode_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.sort"
			],
			"associations":["com.livecode.sort"],
			"summary":"This library consists of the sorting operations provided by the standard library of LiveCode Builder.",
			"description":"This library consists of the sorting operations provided by the standard library of LiveCode Builder."
		},{
			"id":"livecode_builder-566",
			"name":"roundtonearest",
			"display name":"RoundToNearest",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"round <Target>"
			],
			"display syntax":[
				"round <i>Target</i>"
			],
			"associations":["com.livecode.mathfoundation"],
			"summary":"Rounds <Target> to the nearest integer.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a numeric container."
			}],
			"examples":[{
				"script":"variable tNum as Number\nput -5.5 into tNum\nround tNum -- tNum contains -6"
			}],
			"description":"Replaces <Target> with the greatest integer less than or equal to <Target>, or the least integer greater than or equal to <Target> depending on which is closest. If <Target> is exactly halfway between two integers, rounds to the one with greatest absolute value, i.e. away from 0.",
			"tags":["math"]
		},{
			"id":"livecode_builder-567",
			"name":"com.livecode.mathfoundation",
			"display name":"com.livecode.mathfoundation",
			"library":"livecode_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.mathfoundation"
			],
			"associations":["com.livecode.mathfoundation"],
			"summary":"This library consists of the foundational mathematical operations included in the standard library of LiveCode Builder.",
			"description":"This library consists of the foundational mathematical operations included in the standard library of LiveCode Builder."
		},{
			"id":"livecode_builder-568",
			"name":"ceiloperator",
			"display name":"CeilOperator",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the ceiling of <Target>"
			],
			"display syntax":[
				"the ceiling of <i>Target</i>"
			],
			"associations":["com.livecode.mathfoundation"],
			"summary":"Returns the ceiling of <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tNum as Number\nvariable tCeiling as Number\nput -5.5 into tNum\nput the ceiling of tNum into tCeiling -- tCeiling contains -5"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The ceiling of <Target>"
			}],
			"description":"The ceiling of <Target> is the least integer greater than or equal to <Target>.",
			"tags":["math"]
		},{
			"id":"livecode_builder-569",
			"name":"flooroperator",
			"display name":"FloorOperator",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the floor of <Target>"
			],
			"display syntax":[
				"the floor of <i>Target</i>"
			],
			"associations":["com.livecode.mathfoundation"],
			"summary":"Returns the floor of <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tNum as Number\nvariable tFloor as Number\nput -5.5 into tNum\nput the floor of tNum into tFloor -- tFloor contains -6"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The floor of <Target>"
			}],
			"description":"The floor of <Target> is the greatest integer less than or equal to <Target>.",
			"tags":["math"]
		},{
			"id":"livecode_builder-570",
			"name":"roundedtonearest",
			"display name":"RoundedToNearest",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"the rounded of <Target>"
			],
			"display syntax":[
				"the rounded of <i>Target</i>"
			],
			"associations":["com.livecode.mathfoundation"],
			"summary":"Rounds <Target> to the nearest integer.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tNum as Number\nvariable tRounded as Number\nput -5.5 into tNum\nput the rounded of tNum into tRounded -- tRounded contains -6"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The rounded value of <Target>"
			}],
			"description":"Return the greatest integer less than or equal to <Target>, or the least integer greater than or equal to <Target> depending on which is closest. If <Target> is exactly halfway between two integers, returns the one with greatest absolute value, i.e. away from 0.",
			"tags":["math"]
		},{
			"id":"livecode_builder-571",
			"name":"piconstant",
			"display name":"PiConstant",
			"library":"livecode_builder",
			"type":"expression",
			"syntax":[
				"pi"
			],
			"display syntax":[
				"pi"
			],
			"associations":["com.livecode.mathfoundation"],
			"summary":"The constant pi",
			"examples":[{
				"script":"variable tVar as Number\nput the cos of pi into tVar -- tVar contains -1"
			}],
			"description":"The ratio of a circle's circumference to its diameter.",
			"tags":["math"]
		},{
			"id":"livecode_builder-572",
			"name":"com.livecode.typeconvert",
			"display name":"com.livecode.typeconvert",
			"library":"livecode_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.typeconvert"
			],
			"associations":["com.livecode.typeconvert"],
			"summary":"This library consists of the operations for performing complex type conversion in LiveCode Builder.",
			"description":"This library consists of the operations for performing complex type conversion in LiveCode Builder."
		},{
			"id":"livecode_builder-573",
			"name":"stringsplitby",
			"display name":"StringSplitBy",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"split <Target> by <Delimiter>"
			],
			"display syntax":[
				"split <i>Target</i> by <i>Delimiter</i>"
			],
			"associations":["com.livecode.typeconvert"],
			"summary":"Splits the string in <Target> into a list of strings, using <Delimiter>\n                as the delimiter.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a string container."
			},{
				"name":"Delimiter",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a string."
			}],
			"examples":[{
				"script":"variable tVar as String\n    put \"first,second,third,fourth,fifth\" into tVar\n    variable tSplit as List\n    split tVar by \",\" into tSplit\n    put element 1 of tSplit into tFirstElement // tFirstElement contains \"first\""
			}],
			"value":[{
				"name":"the result",
				"type":"",
				"description":"The list of strings."
			}],
			"description":"Use the split command to convert a string representation of a list into a genuine (ordered) list.",
			"tags":["type conversion"]
		},{
			"id":"livecode_builder-574",
			"name":"combinelistwith",
			"display name":"CombineListWith",
			"library":"livecode_builder",
			"type":"statement",
			"syntax":[
				"combine <Target> with <Delimiter>"
			],
			"display syntax":[
				"combine <i>Target</i> with <i>Delimiter</i>"
			],
			"associations":["com.livecode.typeconvert"],
			"summary":"Combines the list of strings in <Target>, using <Delimiter>\n                as the delimiter. ",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a list container."
			},{
				"name":"Delimiter",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a string."
			}],
			"examples":[{
				"script":"variable tWords as List\nput [\"A\",\"List\",\"of\",\"words\"] into tWords\n\nvariable tString as String\ncombine tWords with \" \" into tString\n-- tString contains \"A List of words\""
			}],
			"value":[{
				"name":"the result",
				"type":"",
				"description":"The combined string."
			}],
			"description":"Use the combine command to convert a list into a string representation of the list.\n\n>*Note:* The list *must* consist entirely of string elements, otherwise the combine command will throw an error.",
			"tags":["type conversion"]
		},{
			"id":"livecode_builder-575",
			"name":"bitwiseshiftleft",
			"display name":"BitwiseShiftLeft",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Operand> shifted left by <Shift> bitwise"
			],
			"display syntax":[
				"<i>Operand</i> shifted left by <i>Shift</i> bitwise"
			],
			"associations":["com.livecode.bitwise"],
			"summary":"Shifts the bits of <Operand> left.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an integer."
			},{
				"name":"Shift",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an integer."
			}],
			"examples":[{
				"script":"variable tVar\nput 7 shifted left by 2 bitwise into tVar -- tVar contains 28"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The result of bit-shifting <Operand> left by <Shift> places."
			}],
			"description":"Shifts the bits of <Operand> left. Shifting the bits of <Operand> left\nby x is equivalent to multiplying by 2^x.",
			"tags":["bitwise operations"]
		},{
			"id":"livecode_builder-576",
			"name":"bitwiseor",
			"display name":"BitwiseOr",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Left> bitwise or <Right>"
			],
			"display syntax":[
				"<i>Left</i> bitwise or <i>Right</i>"
			],
			"associations":["com.livecode.bitwise"],
			"summary":"Performs a bitwise OR operation on the binary representations of <Left> and <Right>.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an integer."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an integer."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput 3 bitwise or 6 into tVar -- tVar contains 7"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The integer whose binary representation is the result of the bitwise OR operation."
			}],
			"description":"Each bit of <Left> bitwise or <Right> is 0 if and only if both the corresponding bit of the binary representation of <Left> and that of <Right> is 0. Otherwise it is 1.",
			"tags":["bitwise operations"]
		},{
			"id":"livecode_builder-577",
			"name":"bitwisexor",
			"display name":"BitwiseXor",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Left> bitwise xor <Right>"
			],
			"display syntax":[
				"<i>Left</i> bitwise xor <i>Right</i>"
			],
			"associations":["com.livecode.bitwise"],
			"summary":"Performs a bitwise XOR operation on the binary representations of <Left> and <Right>.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an integer."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an integer."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput 3 bitwise xor 6 into tVar -- tVar contains 5"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The integer whose binary representation is the result of the bitwise XOR operation."
			}],
			"description":"Each bit of <Left> bitwise xor <Right> is 1 if and only if exactly one of the corresponding bits of the binary representation of <Left> and that of <Right> is 1. Otherwise it is 0.",
			"tags":["bitwise operations"]
		},{
			"id":"livecode_builder-578",
			"name":"bitwisenot",
			"display name":"BitwiseNot",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"bitwise not <Operand>"
			],
			"display syntax":[
				"bitwise not <i>Operand</i>"
			],
			"associations":["com.livecode.bitwise"],
			"summary":"Performs a bitwise NOT operation on the binary representation of <Operand>.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an integer."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput bitwise not -5 into tVar -- tVar contains 4"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The integer whose binary representation is the result of the bitwise NOT operation."
			}],
			"description":"Bitwise not returns the complement of <Operand> as a signed two's\ncomplement integer, i.e. equivalent to -(x + 1).",
			"tags":["bitwise operations"]
		},{
			"id":"livecode_builder-579",
			"name":"bitwiseshiftright",
			"display name":"BitwiseShiftRight",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Operand> shifted right by <Shift> bitwise"
			],
			"display syntax":[
				"<i>Operand</i> shifted right by <i>Shift</i> bitwise"
			],
			"associations":["com.livecode.bitwise"],
			"summary":"Shifts the bits of <Operand> right.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an integer."
			},{
				"name":"Shift",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an integer."
			}],
			"examples":[{
				"script":"variable tVar\nput 7 shifted right by 2 bitwise into tVar -- tVar contains 1"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The result of bit-shifting <Operand> right by <Shift> places."
			}],
			"description":"Shifts the bits of <Operand> right. Shifting the bits of <Operand>\nright by x is equivalent to dividing by 2^x (rounding down)",
			"tags":["bitwise operations"]
		},{
			"id":"livecode_builder-580",
			"name":"bitwiseand",
			"display name":"BitwiseAnd",
			"library":"livecode_builder",
			"type":"operator",
			"syntax":[
				"<Left> bitwise and <Right>"
			],
			"display syntax":[
				"<i>Left</i> bitwise and <i>Right</i>"
			],
			"associations":["com.livecode.bitwise"],
			"summary":"Performs a bitwise AND operation on the binary representations of <Left> and <Right>.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an integer."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an integer."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput 3 bitwise and 6 into tVar -- tVar contains 2"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The integer whose binary representation is the result of the bitwise AND operation."
			}],
			"description":"Each bit of <Left> bitwise and <Right> is 1 if and only if both the corresponding bit of the binary representation of <Left> and that of <Right> is 1. Otherwise it is 0.",
			"tags":["bitwise operations"]
		},{
			"id":"livecode_builder-581",
			"name":"com.livecode.bitwise",
			"display name":"com.livecode.bitwise",
			"library":"livecode_builder",
			"type":"module",
			"display syntax":[
				"com.livecode.bitwise"
			],
			"associations":["com.livecode.bitwise"],
			"summary":"This module specifies the bitwise operations on integers included in the standard library of LiveCode Builder.",
			"description":"This module specifies the bitwise operations on integers included in the standard library of LiveCode Builder."
		}