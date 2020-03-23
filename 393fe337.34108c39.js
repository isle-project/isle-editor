(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{170:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(1),i=a(10),r=(a(0),a(254)),l={id:"data-explorer",title:"Data Explorer",sidebar_label:"Data Explorer"},o={id:"data-explorer",title:"Data Explorer",description:"This component is used by students to briefly summarize data as it is presented and perform various statistical tests.",source:"@site/docs/data-explorer.md",permalink:"/docs/data-explorer",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/data-explorer.md",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1584924745,sidebar_label:"Data Explorer",sidebar:"docs",previous:{title:"Using ISLE in the Classroom",permalink:"/docs/tutorials/classroom-use"},next:{title:"Data Table",permalink:"/docs/data-table"}},b=[{value:"Example",id:"example",children:[]},{value:"Options",id:"options",children:[]}],c={rightToc:b};function s(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This component is used by students to briefly summarize data as it is presented and perform various statistical tests."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("p",null,"In creating a data explorer, one needs a ",Object(r.b)("em",{parentName:"p"},".json dataset. This step may be accomplished by including the following in the header of a "),".isle file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'require:\n    dataName: "./dataName.json"\n')),Object(r.b)("p",null,'Consider a dataset called "heartdisease" with the following variables:'),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Gender"),": ",Object(r.b)("em",{parentName:"li"},"Categorical")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Drugs"),": ",Object(r.b)("em",{parentName:"li"},"Categorical")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Complications"),": ",Object(r.b)("em",{parentName:"li"},"Categorical")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Cost"),": ",Object(r.b)("em",{parentName:"li"},"Quantitative")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Age"),": ",Object(r.b)("em",{parentName:"li"},"Quantitative")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Interventions"),": ",Object(r.b)("em",{parentName:"li"},"Quantitative")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"ERVisit"),": ",Object(r.b)("em",{parentName:"li"},"Quantitative")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Comorbidities"),": ",Object(r.b)("em",{parentName:"li"},"Quantitative")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Duration"),": ",Object(r.b)("em",{parentName:"li"},"Quantitative"))),Object(r.b)("p",null,"We will include the explorer with the following code:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"<DataExplorer \n    id=\"heartdisease\"\n    data={heartdisease} \n    categorical={[ 'Gender', 'Drugs', 'Complications' ]}\n    quantitative={[ 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}\n    tests={[]}\n/>\n")),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://isle.heinz.cmu.edu/components/data-explorer/"}),"Open interactive preview")),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"categorical")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": array of strings indicating the name of each categorical variable. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"quantitative")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": array of strings indicating the name of each quantitative variable. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"data")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": data object or array to be viewed. If it is an object, the keys correspond to column values while an array will expect an array of objects with a named field corresponding to each column. If you wish to allow students the ability to import a ",Object(r.b)("inlineCode",{parentName:"li"},".csv")," file, set the ",Object(r.b)("inlineCode",{parentName:"li"},"data")," option to be ",Object(r.b)("inlineCode",{parentName:"li"},"false"),". Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"dataInfo")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": object containing the keys \\'name\\', whose value is a string, \\'info\\', whose value is an array of strings in which each element in the array is a new line and \\'variables\\', an object with keys as variable names and values as variable descriptions. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{\n  'info': '',\n  'name': '',\n  'variables': null,\n  'showOnStartup': false\n}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"editor")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": boolean indicating whether to show the editor to the user. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"editorProps")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": object to be passed to ",Object(r.b)("inlineCode",{parentName:"li"},"TextEditor")," indicating properties to be used. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"editorTitle")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": string indicating the title of the explorer to be displayed. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'Report'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"dataTable")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": boolean value indicating whether to hide the data table from view. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"groupMode")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether to sync editor changes across users. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"histogramDensities")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": boolean value indicating whether to display histogram densities. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"models")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": array of strings indicating models that may be fit on the data. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[\n  'Simple Linear Regression',\n  'Multiple Linear Regression',\n  'LASSO',\n  'Decision Tree',\n  'Random Forest',\n  'Logistic Regression',\n  'Naive Bayes',\n  'PCA',\n  'Hierarchical Clustering',\n  'kmeans'\n]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"opened")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": page opened at startup. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"plots")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": array of strings indicating which plots to show to the user. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[\n  'Bar Chart',\n  'Pie Chart',\n  'Mosaic Plot',\n  'Histogram',\n  'Box Plot',\n  'Line Plot',\n  'Scatterplot',\n  'Heat Map',\n  'Contour Chart',\n  'QQ Plot'\n]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"questions")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": array of nodes indicating surrounding text and question components to be displayed in a tabbed window. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"showTestDecisions")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": boolean indicating whether to show the decisions made for each test based on the calculated p-values. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"statistics")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": array of strings indicating which summary statistics may be calculated. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[\n  'Mean',\n  'Median',\n  'Min',\n  'Max',\n  'Range',\n  'Interquartile Range',\n  'Standard Deviation',\n  'Variance',\n  'Correlation',\n  'Skewness',\n  'Excess Kurtosis'\n]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"style")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": CSS inline styles for main container. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"tables")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": array of strings indicating which tables may be created from the data. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[\n  'Frequency Table',\n  'Contingency Table'\n]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"tabs")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": array of objects and keys indicating any custom tabs to add. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"tests")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": array of strings indicating which hypothesis tests to include. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[\n  'One-Sample Mean Test',\n  'Two-Sample Mean Test',\n  'One-Way ANOVA',\n  'One-Sample Proportion Test',\n  'Two-Sample Proportion Test',\n  'Correlation Test',\n  'Chi-squared Independence Test',\n  'Kruskal-Wallis Test'\n]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"transformer")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": boolean indicating whether one wants to display a variable transformer. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onTutorialCompletion")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": function invoked when user has completed the data explorer tutorial. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onTutorialCompletion() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onTutorialStart")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": undefined. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onTutorialStart() {}"),".")))}s.isMDXComponent=!0},254:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),s=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},p=function(e){var t=s(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,u=p["".concat(l,".").concat(d)]||p[d]||m[d]||r;return a?i.a.createElement(u,o({ref:t},c,{components:a})):i.a.createElement(u,o({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<r;c++)l[c]=a[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);