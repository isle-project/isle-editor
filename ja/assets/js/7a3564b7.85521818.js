(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{212:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return u}));var a=n(3),i=n(7),r=(n(0),n(409)),l={id:"data-explorer",title:"Data Explorer",sidebar_label:"Data Explorer"},b={unversionedId:"data-explorer",id:"data-explorer",isDocsHomePage:!1,title:"Data Explorer",description:"\u3053\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3001\u5b66\u751f\u304c\u63d0\u793a\u3055\u308c\u305f\u30c7\u30fc\u30bf\u3092\u7c21\u5358\u306b\u8981\u7d04\u3057\u3001\u69d8\u3005\u306a\u7d71\u8a08\u7684\u691c\u5b9a\u3092\u884c\u3046\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/data-explorer.md",slug:"/data-explorer",permalink:"/ja/docs/data-explorer",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/data-explorer.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Data Explorer",sidebar:"docs",previous:{title:"Using ISLE in the Classroom",permalink:"/ja/docs/tutorials/classroom-use"},next:{title:"Data Table",permalink:"/ja/docs/data-table"}},o=[{value:"\u30aa\u30d7\u30b7\u30e7\u30f3",id:"\u30aa\u30d7\u30b7\u30e7\u30f3",children:[]},{value:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002",id:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002",children:[]}],c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},p=c("TextEditor"),m=c("DataTable"),s={toc:o};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u3053\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3001\u5b66\u751f\u304c\u63d0\u793a\u3055\u308c\u305f\u30c7\u30fc\u30bf\u3092\u7c21\u5358\u306b\u8981\u7d04\u3057\u3001\u69d8\u3005\u306a\u7d71\u8a08\u7684\u691c\u5b9a\u3092\u884c\u3046\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"),Object(r.b)("h2",{id:"\u30aa\u30d7\u30b7\u30e7\u30f3"},"\u30aa\u30d7\u30b7\u30e7\u30f3"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"categorical")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": \u5404\u30ab\u30c6\u30b4\u30ea\u5909\u6570\u306e\u540d\u524d\u3092\u793a\u3059\u6587\u5b57\u5217\u306e\u914d\u5217. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"quantitative")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": \u5404\u91cf\u7684\u5909\u6570\u306e\u540d\u524d\u3092\u793a\u3059\u6587\u5b57\u5217\u306e\u914d\u5217. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"data")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": \u306f\u3001\u8868\u793a\u3059\u308b\u30c7\u30fc\u30bf\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u307e\u305f\u306f\u914d\u5217\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u5834\u5408\u306f\u30ad\u30fc\u304c\u5217\u306e\u5024\u306b\u5bfe\u5fdc\u3057\u3001\u914d\u5217\u306e\u5834\u5408\u306f\u5404\u5217\u306b\u5bfe\u5fdc\u3059\u308b\u540d\u524d\u4ed8\u304d\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u6301\u3064\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u914d\u5217\u3092\u671f\u5f85\u3057\u307e\u3059\u3002\u5b66\u751f\u306b ",Object(r.b)("inlineCode",{parentName:"li"},".csv")," \u30d5\u30a1\u30a4\u30eb\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u305f\u3044\u5834\u5408\u306f\u3001",Object(r.b)("inlineCode",{parentName:"li"},"data")," \u30aa\u30d7\u30b7\u30e7\u30f3\u3092 ",Object(r.b)("inlineCode",{parentName:"li"},"false")," \u306b\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"dataInfo")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": \u30ad\u30fc\u3092\u542b\u3080\u30aa\u30d6\u30b8\u30a7\u30af\u30c8 ",Object(r.b)("inlineCode",{parentName:"li"},"name"),", \u5024\u304c\u6587\u5b57\u5217\u3067\u3042\u308b ",Object(r.b)("inlineCode",{parentName:"li"},"info"),", \u5024\u304c\u6587\u5b57\u5217\u306e\u914d\u5217\u3067\u3042\u308b ",Object(r.b)("inlineCode",{parentName:"li"},"info"),", \u914d\u5217\u306e\u5404\u8981\u7d20\u304c\u6539\u884c\u3055\u308c\u305f\u3082\u306e\u3067\u3042\u308b ",Object(r.b)("inlineCode",{parentName:"li"},"variables"),", \u30ad\u30fc\u304c\u5909\u6570\u540d\u3001\u5024\u304c\u5909\u6570\u306e\u8aac\u660e\u3067\u3042\u308b ",Object(r.b)("inlineCode",{parentName:"li"},"variables")," \u3092\u6301\u3064\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3002. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{\n  'info': '',\n  'name': '',\n  'variables': null,\n  'showOnStartup': false\n}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"editor")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": \u30a8\u30c7\u30a3\u30bf\u3092\u30e6\u30fc\u30b6\u306b\u8868\u793a\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u793a\u3059\u30d6\u30fc\u30eb\u5024. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"editorProps")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": \u306b\u6e21\u3055\u308c\u308b\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3059 ( ",Object(r.b)(p,{mdxType:"TextEditor"})," \u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044)\u3002. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"editorTitle")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": \u8868\u793a\u3055\u308c\u308b\u30a8\u30af\u30b9\u30d7\u30ed\u30fc\u30e9\u306e\u30bf\u30a4\u30c8\u30eb\u3092\u793a\u3059\u6587\u5b57\u5217. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"dataTable")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": \u30c7\u30fc\u30bf\u30c6\u30fc\u30d6\u30eb\u3092\u30d3\u30e5\u30fc\u304b\u3089\u96a0\u3059\u304b\u3069\u3046\u304b\u3092\u793a\u3059\u30d6\u30fc\u30eb\u5024. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"dataTableProps")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": \u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u30c7\u30fc\u30bf\u30c6\u30fc\u30d6\u30eb\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u6e21\u3055\u308c\u307e\u3059 (",Object(r.b)(m,{mdxType:"DataTable"})," \u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044)\u3002. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"history")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": \u5b9f\u884c\u3055\u308c\u305f\u30a2\u30af\u30b7\u30e7\u30f3\u306e\u5c65\u6b74\u30ed\u30b0\u3092\u8868\u793a\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"reportMode")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": \u30a8\u30c7\u30a3\u30bf\u306e\u5909\u66f4\u3092\u5168\u54e1\u306b\u540c\u671f\u3055\u305b\u308b\u304b (",Object(r.b)("inlineCode",{parentName:"li"},"collaborative"),")\u3001\u30b0\u30eb\u30fc\u30d7\u5185\u306e\u30e6\u30fc\u30b6\u306b\u540c\u671f\u3055\u305b\u308b\u304b (",Object(r.b)("inlineCode",{parentName:"li"},"group"),")\u3001\u540c\u671f\u3055\u305b\u306a\u3044\u304b (",Object(r.b)("inlineCode",{parentName:"li"},"individual"),") \u3092\u5236\u5fa1\u3057\u307e\u3059\u3002. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'individual'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"histogramDensities")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": \u30d2\u30b9\u30c8\u30b0\u30e9\u30e0\u306e\u5bc6\u5ea6\u3092\u8868\u793a\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u793a\u3059\u30d6\u30fc\u30eb\u5024. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"models")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": \u30c7\u30fc\u30bf\u306b\u9069\u5408\u3059\u308b\u30e2\u30c7\u30eb\u3092\u793a\u3059\u6587\u5b57\u5217\u306e\u914d\u5217. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[\n  'Simple Linear Regression',\n  'Multiple Linear Regression',\n  'LASSO',\n  'Decision Tree',\n  'Random Forest',\n  'Logistic Regression',\n  'Naive Bayes',\n  'PCA',\n  'Hierarchical Clustering',\n  'kmeans'\n]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"opened")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": \u8d77\u52d5\u6642\u306b\u958b\u3044\u305f\u30da\u30fc\u30b8. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"plots")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": \u30e6\u30fc\u30b6\u306b\u8868\u793a\u3059\u308b\u30d7\u30ed\u30c3\u30c8\u3092\u793a\u3059\u6587\u5b57\u5217\u306e\u914d\u5217. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[\n  'Bar Chart',\n  'Pie Chart',\n  'Mosaic Plot',\n  'Histogram',\n  'Box Plot',\n  'Line Plot',\n  'Scatterplot',\n  'Scatterplot Matrix',\n  'Heat Map',\n  'Contour Chart',\n  'Violin Plot',\n  'QQ Plot'\n]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"questions")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": \u30bf\u30d6\u4ed8\u304d\u30a6\u30a3\u30f3\u30c9\u30a6\u306b\u8868\u793a\u3055\u308c\u308b\u5468\u56f2\u306e\u30c6\u30ad\u30b9\u30c8\u3068\u8cea\u554f\u306e\u8981\u7d20\u3092\u793a\u3059\u30ce\u30fc\u30c9\u306e\u914d\u5217. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"showTestDecisions")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": \u8a08\u7b97\u3055\u308c\u305fp\u5024\u306b\u57fa\u3065\u3044\u3066\u5404\u30c6\u30b9\u30c8\u306e\u6c7a\u5b9a\u3092\u8868\u793a\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u793a\u3059\u30d6\u30fc\u30eb\u5024. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"statistics")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": \u30b5\u30de\u30ea\u30fc\u7d71\u8a08\u91cf\u304c\u8a08\u7b97\u3055\u308c\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u3053\u3068\u3092\u793a\u3059\u6587\u5b57\u5217\u306e\u914d\u5217. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[\n  'Mean',\n  'Median',\n  'Min',\n  'Max',\n  'Range',\n  'Interquartile Range',\n  'Standard Deviation',\n  'Variance',\n  'Correlation',\n  'Correlation Matrix',\n  'Skewness',\n  'Excess Kurtosis',\n  'First Quartile',\n  'Third Quartile',\n  'Quantile',\n  'Five-Number Summary'\n]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"style")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": \u30e1\u30a4\u30f3\u30b3\u30f3\u30c6\u30ca\u306eCSS\u30a4\u30f3\u30e9\u30a4\u30f3\u30b9\u30bf\u30a4\u30eb. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"tables")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": \u30c7\u30fc\u30bf\u304b\u3089\u3069\u306e\u30c6\u30fc\u30d6\u30eb\u304c\u4f5c\u6210\u3055\u308c\u308b\u304b\u3092\u793a\u3059\u6587\u5b57\u5217\u306e\u914d\u5217. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[\n  'Frequency Table',\n  'Contingency Table'\n]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"tabs")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": \u8ffd\u52a0\u3059\u308b\u30ab\u30b9\u30bf\u30e0\u30bf\u30d6\u3092\u793a\u3059\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u30ad\u30fc\u306e\u914d\u5217. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"tests")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": \u3069\u306e\u4eee\u8aac\u691c\u5b9a\u3092\u542b\u3081\u308b\u304b\u3092\u793a\u3059\u6587\u5b57\u5217\u306e\u914d\u5217. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[\n  'One-Sample Mean Test',\n  'Two-Sample Mean Test',\n  'One-Way ANOVA',\n  'One-Sample Proportion Test',\n  'Two-Sample Proportion Test',\n  'Correlation Test',\n  'Chi-squared Independence Test',\n  'Kruskal-Wallis Test'\n]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"transformer")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": \u5909\u6570\u5909\u63db\u30c4\u30fc\u30eb\u3092\u8868\u793a\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u793a\u3059\u30d6\u30fc\u30eb\u5024. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onTutorialCompletion")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": \u30c7\u30fc\u30bf\u30a8\u30af\u30b9\u30d7\u30ed\u30fc\u30e9\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u304c\u5b8c\u4e86\u3057\u305f\u3068\u304d\u306b\u547c\u3073\u51fa\u3055\u308c\u308b\u95a2\u6570. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onTutorialCompletion() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onTutorialStart")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": \u30c7\u30fc\u30bf\u30a8\u30af\u30b9\u30d7\u30ed\u30fc\u30e9\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306e\u8d77\u52d5\u6642\u306b\u547c\u3073\u51fa\u3055\u308c\u308b\u95a2\u6570. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onTutorialStart() {}"),".")),Object(r.b)("h2",{id:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"},"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"),Object(r.b)("p",null,"In creating a data explorer, one needs a ",Object(r.b)("em",{parentName:"p"},".json dataset. This step may be accomplished by including the following in the header of a "),".isle file:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'require:\n    dataName: "./dataName.json"\n')),Object(r.b)("p",null,'Consider a dataset called "heartdisease" with the following variables:'),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Gender"),": ",Object(r.b)("em",{parentName:"li"},"Categorical")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Drugs"),": ",Object(r.b)("em",{parentName:"li"},"Categorical")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Complications"),": ",Object(r.b)("em",{parentName:"li"},"Categorical")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Cost"),": ",Object(r.b)("em",{parentName:"li"},"Quantitative")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Age"),": ",Object(r.b)("em",{parentName:"li"},"Quantitative")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Interventions"),": ",Object(r.b)("em",{parentName:"li"},"Quantitative")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"ERVisit"),": ",Object(r.b)("em",{parentName:"li"},"Quantitative")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Comorbidities"),": ",Object(r.b)("em",{parentName:"li"},"Quantitative")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Duration"),": ",Object(r.b)("em",{parentName:"li"},"Quantitative"))),Object(r.b)("p",null,"We will include the explorer with the following code:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<DataExplorer \n    id=\"heartdisease\"\n    data={heartdisease} \n    categorical={[ 'Gender', 'Drugs', 'Complications' ]}\n    quantitative={[ 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}\n    tests={[]}\n/>\n")))}u.isMDXComponent=!0},409:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return O}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},m=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,O=m["".concat(l,".").concat(u)]||m[u]||s[u]||r;return n?i.a.createElement(O,b(b({ref:t},c),{},{components:n})):i.a.createElement(O,b({ref:t},c))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var c=2;c<r;c++)l[c]=n[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);