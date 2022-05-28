"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[89488],{603905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(202784);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),c=i,m=u["".concat(s,".").concat(c)]||u[c]||h[c]||r;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},531469:function(e,t,a){t.Z=a.p+"assets/images/data_explorer-856e58e1e8a02c2e396f3e08874ab601.gif"},597044:function(e,t,a){t.Z=a.p+"assets/images/data_table-0b9724a27c8c01255ab358ebd22b4ff8.gif"},99307:function(e,t,a){t.Z=a.p+"assets/images/data_table_toy_example-f5e3e65b6072c5257625cfb7dbc5cf6e.gif"},211475:function(e,t,a){a.r(t),a.d(t,{assets:function(){return f},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return b}});var n=a(603905),i=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&d(e,a,t[a]);if(l)for(var a of l(t))p.call(t,a)&&d(e,a,t[a]);return e};const u={id:"including-data",title:"Including Data",sidebar_label:"Including Data"},c=void 0,m={unversionedId:"tutorials/including-data",id:"tutorials/including-data",title:"Including Data",description:"Data Tables",source:"@site/docs/tutorials/including-data.md",sourceDirName:"tutorials",slug:"/tutorials/including-data",permalink:"/et/docs/tutorials/including-data",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tutorials/including-data.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1584925264,formattedLastUpdatedAt:"22.3.2020",frontMatter:{id:"including-data",title:"Including Data",sidebar_label:"Including Data"},sidebar:"docs",previous:{title:"Using Questions",permalink:"/et/docs/tutorials/question-components"},next:{title:"Examples",permalink:"/et/docs/tutorials/examples"}},f={},b=[{value:"Data Tables",id:"data-tables",level:2},{value:"JSON Format",id:"json-format",level:3},{value:"Converting Data to JSON",id:"converting-data-to-json",level:3},{value:"Data Explorer",id:"data-explorer",level:2},{value:"Data",id:"data",level:3},{value:"Variable Types",id:"variable-types",level:3},{value:"Toolbox",id:"toolbox",level:3},{value:"Statistics",id:"statistics",level:4},{value:"Tables",id:"tables",level:4},{value:"Plots",id:"plots",level:4},{value:"Tests",id:"tests",level:4},{value:"Models",id:"models",level:4},{value:"Transform",id:"transform",level:4},{value:"Customizing the Toolbox",id:"customizing-the-toolbox",level:4},{value:"Editor",id:"editor",level:3}],k={toc:b};function g(e){var t,i=e,{components:d}=i,u=((e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(i,["components"]);return(0,n.kt)("wrapper",(t=h(h({},k),u),r(t,o({components:d,mdxType:"MDXLayout"}))),(0,n.kt)("h2",h({},{id:"data-tables"}),"Data Tables"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"<DataTable/>")," tag in ISLE allows you to include a ",(0,n.kt)("a",h({parentName:"p"},{href:"https://isledocs.com/docs/data-table"}),"Data Table"),", which users can then explore. For example, here is a gif of an ISLE file that includes data on airline flights, and the resulting table as displayed to users:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Data Table",src:a(597044).Z,width:"1837",height:"687"})),(0,n.kt)("p",null,"The code shown here is"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{}),'---\ntitle: "Looking at Airline Flights"\nauthor: Ciaran\ndate: 17/07/2019\nrequire:\n    airlines: "./airlines.json"\n    airline_info: "./airline_info.json"\nstate:\n---\n\n<DataTable\n    data={airlines}\n    dataInfo={airline_info}\n/>\n')),(0,n.kt)("p",null,"Note that this piece of example code includes the preamble to the document, whereas in previous tutorials we've omitted the preamble. The preamble is included here because in this case the ",(0,n.kt)("inlineCode",{parentName:"p"},"<DataTable/>")," tag interacts with the preamble, whereas in the earlier examples no changes to the preamble needed to be made for the code to work."),(0,n.kt)("p",null,"There are a few important components to this code:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"require")),": the ",(0,n.kt)("inlineCode",{parentName:"p"},"require")," statement in the preamble is used to import files. Here we have imported two files, ",(0,n.kt)("inlineCode",{parentName:"p"},"airlines.json")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"airline_info.json"),", by providing the ",(0,n.kt)("em",{parentName:"p"},"local path")," to these files (in this case, the two files are in the same directory as the ISLE file). To reference the content of these files, we have assigned names (respectively ",(0,n.kt)("inlineCode",{parentName:"p"},"airlines")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"airline_info"),") to the imported content. In this case, the names we chose match the base name of the files, but this is not necessary. We then use this content in the ",(0,n.kt)("inlineCode",{parentName:"p"},"<DataTable/>")," tag through the names we chose in the ",(0,n.kt)("inlineCode",{parentName:"p"},"require")," statement.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"the data file"),": this file contains the data we want to display in the Data Table, using the ",(0,n.kt)("inlineCode",{parentName:"p"},"data")," field of the ",(0,n.kt)("inlineCode",{parentName:"p"},"<DataTable>")," tag. Here, the data file is ",(0,n.kt)("inlineCode",{parentName:"p"},"airlines.json"),". The file can be provided in CSV or JSON format, more details will be provided below. You can download a zipped folder containing the two files used in this example ",(0,n.kt)("a",h({parentName:"p"},{href:"https://isle.heinz.cmu.edu/Demo_airline_data.zip"}),"here"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"the data info file"),": this (optional) file contains information about the data, such as the name of the data set, a short description of the data and its source, and variable descriptions for each of the columns. The data info is displayed by using the ",(0,n.kt)("inlineCode",{parentName:"p"},"dataInfo")," field of the ",(0,n.kt)("inlineCode",{parentName:"p"},"<DataTable/>")," tag. The data info needs to be in JSON format (see below). "))),(0,n.kt)("h3",h({},{id:"json-format"}),"JSON Format"),(0,n.kt)("p",null,(0,n.kt)("a",h({parentName:"p"},{href:"https://www.json.org/"}),"JSON")," is a nice way of storing data. Here is what a very small JSON data file might look like:"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{}),'{\n    "Age": [3, 4, 3, 6],\n    "FavColor": ["red", "blue", "purple", "green"],\n    "HairColor": ["black", "brown", "brown", "blonde"]\n}\n')),(0,n.kt)("p",null,"Each variable name is provided in quotes (",(0,n.kt)("inlineCode",{parentName:"p"},'" "'),"), followed by a colon (",(0,n.kt)("inlineCode",{parentName:"p"},":"),"). After the colon, we list all of the observed values for that variable, in the order they will appear in the data table. The observed values are separated by commas, and the variables are also separated by commas. Finally, the variables are all wrapped in ",(0,n.kt)("inlineCode",{parentName:"p"},"{ }"),". "),(0,n.kt)("p",null,"Here is what the corresponding data info file might look like:"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{}),'{\n    "name": "Colors",\n    "info": [\n        "This is a toy dataset on four young children.",\n        "We record age, favorite color, and hair color."\n    ],\n    "variables": {\n        "Age": "The child\'s age in years.",\n        "FavColor": "The child\'s favorite color.",\n        "HairColor": "The child\'s hair color."\n    }\n}\n')),(0,n.kt)("p",null,"Rather than representing different variables, each element of the data info file provides a different piece of information about the dataset: the name of the dataset (",(0,n.kt)("inlineCode",{parentName:"p"},"name"),"), a description of the data (",(0,n.kt)("inlineCode",{parentName:"p"},"info"),"), and descriptions of each variable in the data (",(0,n.kt)("inlineCode",{parentName:"p"},"variables"),"). For the ",(0,n.kt)("inlineCode",{parentName:"p"},"info")," field, each line of text is entered separately and separated by commas - the two strings shown in the example here will appear on different lines. Note that the ",(0,n.kt)("inlineCode",{parentName:"p"},"info")," field uses square brackets (",(0,n.kt)("inlineCode",{parentName:"p"},"[ ]"),") whereas the ",(0,n.kt)("inlineCode",{parentName:"p"},"variables")," field uses curly brackets (",(0,n.kt)("inlineCode",{parentName:"p"},"{ }"),")."),(0,n.kt)("p",null,"If we save these as JSON files and import them into the editor in the same way we did the airlines data, the resulting data table looks like this:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Toy Table GIF",src:a(99307).Z,width:"1524",height:"683"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Alternatively"),", because the data and data info are so small in this example, we could directly enter them into the ",(0,n.kt)("inlineCode",{parentName:"p"},"<DataTable/>")," tag without saving them as JSON files. Here is what the ISLE file looks like to produce the Colors data table shown in the gif:"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{}),'---\ntitle: "A Toy Data Table"\nauthor: Ciaran\ndate: 17/07/2019\nstate:\n---\n\n<DataTable\n    data={{\n        "Age": [3, 4, 3, 6],\n        "FavColor": ["red", "blue", "purple", "green"],\n        "HairColor": ["black", "brown", "brown", "blonde"]\n    }}\n    dataInfo={{\n        "name": "Colors",\n        "info": [\n            "This is a toy dataset on four young children.",\n            "We record age, favorite color, and hair color."\n        ],\n        "variables": {\n            "Age": "The child\'s age in years.",\n            "FavColor": "The child\'s favorite color.",\n            "HairColor": "The child\'s hair color."\n        }\n    }}\n/>\n')),(0,n.kt)("p",null,"Note that for this example, the preamble does not interact with the ",(0,n.kt)("inlineCode",{parentName:"p"},"<DataTable/>")," code because we are not importing the data that we display."),(0,n.kt)("h3",h({},{id:"converting-data-to-json"}),"Converting Data to JSON"),(0,n.kt)("p",null,"If you are an ",(0,n.kt)("inlineCode",{parentName:"p"},"R")," user, it is pretty straightforward to convert data to JSON using the ",(0,n.kt)("inlineCode",{parentName:"p"},"toJSON")," function in the ",(0,n.kt)("inlineCode",{parentName:"p"},"jsonlite")," package. Here is the ",(0,n.kt)("inlineCode",{parentName:"p"},"R")," code we used to make the ",(0,n.kt)("inlineCode",{parentName:"p"},"airlines.json")," file used in this tutorial:"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{}),"library(jsonlite)\n\nairlines = read.table( file = './airlinesnew.txt' )\nwrite( toJSON( airlines, dataframe = 'columns' ), 'airlines.json' )\n")),(0,n.kt)("br",null),(0,n.kt)("h2",h({},{id:"data-explorer"}),"Data Explorer"),(0,n.kt)("p",null,"While a Data Table allows you to display data that students can interact with, a ",(0,n.kt)("a",h({parentName:"p"},{href:"https://isledocs.com/docs/data-explorer"}),"Data Explorer")," enhances a Data Table by providing additional tools to analyze and write about the data. Here is an example of a data explorer created for the airlines data:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Data Explorer",src:a(531469).Z,width:"1531",height:"911"})),(0,n.kt)("p",null,"This example shows each of the possible data explorer features:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("strong",{parentName:"li"},"data")),(0,n.kt)("li",{parentName:"ul"},"a ",(0,n.kt)("strong",{parentName:"li"},"toolbox")," for calculating statistics, creating tables and plots, carrying out hypothesis tests, and transforming variables"),(0,n.kt)("li",{parentName:"ul"},"an ",(0,n.kt)("strong",{parentName:"li"},"output")," area displaying the toolbox output"),(0,n.kt)("li",{parentName:"ul"},"an ",(0,n.kt)("strong",{parentName:"li"},"editor")," that allows users to write reports and data analyses"),(0,n.kt)("li",{parentName:"ul"},"a ",(0,n.kt)("strong",{parentName:"li"},"distributions")," tab that allows users to explore a few common distributions")),(0,n.kt)("p",null,"The code to generate the data explorer illustrated here is"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{}),"---\ntitle: \"Looking at Airline Flights\"\nauthor: Ciaran\ndate: 17/07/2019\nrequire:\n    airlines: \"./airlines.json\"\n    airline_info: \"./airline_info.json\"\nstate:\n---\n\n<DataExplorer\n    data={airlines}\n    dataInfo={airline_info}\n    categorical={['Month', 'DayOfWeek', 'Diverted', 'Carrier',\n    'Weather', 'NAS', 'Security', 'LateAircraft']}\n    quantitative={['AirTime', 'Distance', 'TaxiIn', 'TaxiOut', 'ArrDelay',\n    'DepDelay']}\n/>\n")),(0,n.kt)("h3",h({},{id:"data"}),"Data"),(0,n.kt)("p",null,"Data and data info is included in the explorer in the same way as for the Data Table. As above, we can import CSV or JSON files in the preamble and use the ",(0,n.kt)("inlineCode",{parentName:"p"},"data")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"dataInfo")," fields of the ",(0,n.kt)("inlineCode",{parentName:"p"},"<DataExplorer/>")," tag. The ",(0,n.kt)("strong",{parentName:"p"},"Data")," tab of the explorer shows the resulting data table. If you do not wish to display the data table in the explorer, you can set the ",(0,n.kt)("inlineCode",{parentName:"p"},"dataTable")," option to ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," (see the ",(0,n.kt)("a",h({parentName:"p"},{href:"https://isledocs.com/docs/data-explorer"}),"data explorer docs")," for more details)."),(0,n.kt)("h3",h({},{id:"variable-types"}),"Variable Types"),(0,n.kt)("p",null,"Certain tests, statistics, and plots require specific variable types. For example, it doesn't make sense to make a scatterplot with a categorical variable. Hence, the ",(0,n.kt)("inlineCode",{parentName:"p"},"<DataExplorer/>")," tag requires that all variables be listed either as categorical (in the ",(0,n.kt)("inlineCode",{parentName:"p"},"categorical")," option) or quantitative (in the ",(0,n.kt)("inlineCode",{parentName:"p"},"quantitative")," option)."),(0,n.kt)("h3",h({},{id:"toolbox"}),"Toolbox"),(0,n.kt)("p",null,"The explorer's toolbox allows users to perform data analysis. There are several tabs of the toolbox:"),(0,n.kt)("h4",h({},{id:"statistics"}),"Statistics"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Statistics")," tab allows users to calculate summary statistics on variables. The currently available statistics are Mean, Median, Min, Max, Range, Interquartile Range, Standard Deviation, Variance, and Correlation. By default, all these measures are available in the Statistics tab. To show only a subset, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"statistics")," option of the ",(0,n.kt)("inlineCode",{parentName:"p"},"<DataExplorer/>")," tag (see below for an example)."),(0,n.kt)("h4",h({},{id:"tables"}),"Tables"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Tables")," tab allows users to make tables from variables. The currently available tables are Frequency Tables and Contingency Tables. By default, these two tables are available in the Tables tab. To show only a subset, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"tables")," option of the ",(0,n.kt)("inlineCode",{parentName:"p"},"<DataExplorer/>")," tag (see below for an example)."),(0,n.kt)("h4",h({},{id:"plots"}),"Plots"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Plots")," tab allows users to make plots with the data. The currently available plots are Bar Chart, Pie Chart, Histogram, Box Plot, Scatterplot, Heat Map, Mosaic Plot, and Contour Chart. By default, all plots are available in the Plots tab. To show only a subset, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"plots")," option of the ",(0,n.kt)("inlineCode",{parentName:"p"},"<DataExplorer/>")," tag (see below for an example)."),(0,n.kt)("h4",h({},{id:"tests"}),"Tests"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Tests")," tab allows users to carry out hypothesis tests. The currently available tests are One-Sample Mean Test, One-Sample Proportion Test, Two-Sample Mean Test, Two-Sample Proportion Test, Correlation Test, Chi-squared Independence Test, and One-Way ANOVA. By default, all tests are available in the Tests tab. To show only a subset, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"tests")," option of the ",(0,n.kt)("inlineCode",{parentName:"p"},"<DataExplorer/>")," tag (see below for an example). Hypothesis tests in ISLE also show a test decision based on a provided significance threshold and the calculated p-value. To display only the p-value, and not the test decision, set ",(0,n.kt)("inlineCode",{parentName:"p"},"showTestDecisions")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,n.kt)("h4",h({},{id:"models"}),"Models"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Models")," tab allows users to fit models to the data. The currently available models are Simple Linear Regression. To show only a subset, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"models")," option of the ",(0,n.kt)("inlineCode",{parentName:"p"},"<DataExplorer/>")," tag (see below for an example)."),(0,n.kt)("h4",h({},{id:"transform"}),"Transform"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Transform")," tab allows users to create new variables through variable transformations. By default, the Transform tab is visible. To hide the Transform tab, set ",(0,n.kt)("inlineCode",{parentName:"p"},"transformer={false}")," option in the ",(0,n.kt)("inlineCode",{parentName:"p"},"<DataExplorer/>")," tab, as seen in the data explorer example above."),(0,n.kt)("h4",h({},{id:"customizing-the-toolbox"}),"Customizing the Toolbox"),(0,n.kt)("p",null,"Suppose we want to customize the toolbox in the following ways:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"For statistics: Mean and Median"),(0,n.kt)("li",{parentName:"ul"},"For tables: Contingency Table"),(0,n.kt)("li",{parentName:"ul"},"All plots"),(0,n.kt)("li",{parentName:"ul"},"For tests: One-Sample Mean Test, Correlation Test, Chi-squared Independence Test. And do not show test decisions"),(0,n.kt)("li",{parentName:"ul"},"No models"),(0,n.kt)("li",{parentName:"ul"},"Show the variable transformer")),(0,n.kt)("p",null,"Then our ",(0,n.kt)("inlineCode",{parentName:"p"},"<DataExplorer/>")," tag could look as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{}),"<DataExplorer\n    data={airlines}\n    dataInfo={airline_info}\n    categorical={['Month', 'DayOfWeek', 'Diverted', 'Carrier',\n    'Weather', 'NAS', 'Security', 'LateAircraft']}\n    quantitative={['AirTime', 'Distance', 'TaxiIn', 'TaxiOut', 'ArrDelay',\n    'DepDelay']}\n    statistics={[\"Mean\",\"Median\"]}\n    tables={[\"Contingency Table\"]}\n    tests={[\"One-Sample Mean Test\", \"Correlation Test\", \"Chi-squared Independence Test\"]}\n    showTestDecisions={false}\n    models={[]}\n/>\n")),(0,n.kt)("h3",h({},{id:"editor"}),"Editor"),(0,n.kt)("p",null,"In the editor, students can write up their data analysis, using basic Markdown for text formatting, and dragging and dropping output images and tables directly into the report. By default, the editor is visible; to hide the editor, set ",(0,n.kt)("inlineCode",{parentName:"p"},"editor={false}")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"<DataExplorer/>")," tag (as in the examples above). By default, the name of the editor tab is ",(0,n.kt)("strong",{parentName:"p"},"Report"),", but you can change this if you wish using the ",(0,n.kt)("inlineCode",{parentName:"p"},"editorTitle")," option."))}g.isMDXComponent=!0}}]);