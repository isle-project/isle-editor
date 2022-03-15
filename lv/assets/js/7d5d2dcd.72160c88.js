"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[873],{603905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(202784);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=u(a),d=i,c=k["".concat(s,".").concat(d)]||k[d]||m[d]||r;return a?n.createElement(c,l(l({ref:t},p),{},{components:a})):n.createElement(c,l({ref:t},p))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},725424:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return p},toc:function(){return m},default:function(){return v}});var n=a(487462),i=a(263366),r=(a(202784),a(603905)),l=["components"],o={id:"data-explorer",title:"Data Explorer",sidebar_label:"Data Explorer"},s=void 0,u={unversionedId:"data-explorer",id:"data-explorer",title:"Data Explorer",description:"\u0160o komponentu skol\u0113ni izmanto, lai \u012bsi apkopotu iesniegtos datus un veiktu da\u017e\u0101dus statistiskos testus.",source:"@site/i18n/lv/docusaurus-plugin-content-docs/current/data-explorer.md",sourceDirName:".",slug:"/data-explorer",permalink:"/lv/docs/data-explorer",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/data-explorer.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1638825940,formattedLastUpdatedAt:"6.12.2021.",frontMatter:{id:"data-explorer",title:"Data Explorer",sidebar_label:"Data Explorer"},sidebar:"docs",previous:{title:"Classroom Use",permalink:"/lv/docs/tutorials/classroom-use"},next:{title:"Data Table",permalink:"/lv/docs/data-table"}},p={},m=[{value:"Iesp\u0113jas",id:"iesp\u0113jas",level:2},{value:"Piem\u0113ri",id:"piem\u0113ri",level:2}],k=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)}},d=k("TextEditor"),c=k("DataTable"),N={toc:m};function v(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u0160o komponentu skol\u0113ni izmanto, lai \u012bsi apkopotu iesniegtos datus un veiktu da\u017e\u0101dus statistiskos testus."),(0,r.kt)("h2",{id:"iesp\u0113jas"},"Iesp\u0113jas"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"categorical")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array"),": virk\u0146u mas\u012bvs, kur\u0101 nor\u0101d\u012bts katra kategorisk\u0101 main\u012bg\u0101 nosaukums.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"quantitative")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array"),": virk\u0146u mas\u012bvs, kur\u0101 nor\u0101d\u012bts katra kvantitat\u012bv\u0101 main\u012bg\u0101 nosaukums.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": skat\u0101mo datu objektu vai mas\u012bvu. Ja tas ir objekts, atsl\u0113gas atbilst kolonnu v\u0113rt\u012bb\u0101m, bet mas\u012bva gad\u012bjum\u0101 tiek sagaid\u012bts objektu mas\u012bvs ar nosauktu lauku, kas atbilst katrai kolonnai. Ja v\u0113laties, lai skol\u0113niem b\u016btu iesp\u0113ja import\u0113t ",(0,r.kt)("inlineCode",{parentName:"li"},".csv")," failu, iestatiet ",(0,r.kt)("inlineCode",{parentName:"li"},"data")," opciju ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),".. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"dataInfo")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": objekts, kas satur atsl\u0113gas \\'name\\', kura v\u0113rt\u012bba ir virkne, \\'info\\', kura v\u0113rt\u012bba ir virk\u0146u mas\u012bvs, kur\u0101 katrs mas\u012bva elements ir jauna rinda, un \\'variables\\', objekts ar atsl\u0113g\u0101m k\u0101 main\u012bgo nosaukumiem un v\u0113rt\u012bb\u0101m k\u0101 main\u012bgo aprakstiem.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{\n  'info': '',\n  'name': '',\n  'variables': null,\n  'showOnStartup': false\n}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"editor")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": boolean, kas nor\u0101da, vai lietot\u0101jam par\u0101d\u012bt redaktoru.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"editorProps")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": rekviz\u012btu objekts, kas j\u0101nodod ",(0,r.kt)("inlineCode",{parentName:"li"},"TextEditor")," (skat. dokument\u0101ciju ",(0,r.kt)(d,{mdxType:"TextEditor"}),").. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"editorTitle")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": virkne, kas nor\u0101da r\u0101d\u0101m\u0101 p\u0101rl\u016bka nosaukumu.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"dataTable")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": boolean v\u0113rt\u012bba, kas nor\u0101da, vai datu tabulu pasl\u0113pt no skata.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"dataTableProps")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": datu tabulas komponentei nodot\u0101s \u012bpa\u0161\u012bbas (skat. dokument\u0101ciju ",(0,r.kt)(c,{mdxType:"DataTable"}),").. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"history")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrol\u0113, vai tiek r\u0101d\u012bts veikto darb\u012bbu v\u0113stures \u017eurn\u0101ls.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"reportMode")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": nosaka, vai sinhroniz\u0113t redaktora izmai\u0146as visiem lietot\u0101jiem (",(0,r.kt)("inlineCode",{parentName:"li"},"kooperat\u012bvs"),"), visiem lietot\u0101jiem grup\u0101s (",(0,r.kt)("inlineCode",{parentName:"li"},"grupa"),") vai nesinhroniz\u0113t (",(0,r.kt)("inlineCode",{parentName:"li"},"individu\u0101ls"),").. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'individual'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"histogramDensities")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": boolean v\u0113rt\u012bba, kas nor\u0101da, vai att\u0113lot histogrammas bl\u012bvumu.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"models")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array"),": virk\u0146u mas\u012bvs, kur\u0101 nor\u0101d\u012bti mode\u013ci, kurus var piem\u0113rot datiem.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[\n  'Simple Linear Regression',\n  'Multiple Linear Regression',\n  'LASSO',\n  'Decision Tree',\n  'Random Forest',\n  'Logistic Regression',\n  'Naive Bayes',\n  'PCA',\n  'Hierarchical Clustering',\n  'kmeans'\n]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"opened")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": lapa, kas tiek atv\u0113rta pie palai\u0161anas. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"plots")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array"),": virk\u0146u mas\u012bvs, kas nor\u0101da, kurus laukumus par\u0101d\u012bt lietot\u0101jam.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[\n  'Bar Chart',\n  'Pie Chart',\n  'Mosaic Plot',\n  'Histogram',\n  'Interval Plot',\n  'Box Plot',\n  'Line Plot',\n  'Scatterplot',\n  'Scatterplot Matrix',\n  'Heat Map',\n  'Contour Chart',\n  'Violin Plot',\n  'QQ Plot'\n]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"questions")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(array|object)"),": teksta un jaut\u0101juma komponentu mezglu mas\u012bvs, kas j\u0101att\u0113lo ",(0,r.kt)("inlineCode",{parentName:"li"},"questions")," ciln\u0113, vai \u012bpa\u0161\u012bbu objekts, kas nodots pak\u0101rtotai sist\u0113mai ",(0,r.kt)("inlineCode",{parentName:"li"},"<Pages />")," komponentei. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"showTestDecisions")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": boolean, kas nor\u0101da, vai par\u0101d\u012bt katram testam pie\u0146emtos l\u0113mumus, pamatojoties uz apr\u0113\u0137in\u0101taj\u0101m p-v\u0113rt\u012bb\u0101m.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"statistics")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array"),": virk\u0146u mas\u012bvs, kas nor\u0101da, kuru kopsavilkuma statistiku var apr\u0113\u0137in\u0101t.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[\n  'Mean',\n  'Median',\n  'Min',\n  'Max',\n  'Range',\n  'Interquartile Range',\n  'Standard Deviation',\n  'Variance',\n  'Correlation',\n  'Correlation Matrix',\n  'Skewness',\n  'Excess Kurtosis',\n  'First Quartile',\n  'Third Quartile',\n  'Quantile',\n  'Five-Number Summary'\n]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": Galven\u0101 konteinera CSS ieb\u016bv\u0113tie stili. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tables")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array"),": virk\u0146u mas\u012bvs, kas nor\u0101da, kuras tabulas var izveidot no datiem.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[\n  'Frequency Table',\n  'Contingency Table'\n]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tabs")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array"),": objektu un atsl\u0113gu mas\u012bvs, kur\u0101 nor\u0101d\u012btas visas pievienojam\u0101s cilnes.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tests")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array"),": virk\u0146u mas\u012bvs, kas nor\u0101da, kurus hipot\u0113\u017eu testus iek\u013caut.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[\n  'One-Sample Mean Test',\n  'Two-Sample Mean Test',\n  'One-Way ANOVA',\n  'One-Sample Proportion Test',\n  'Two-Sample Proportion Test',\n  'Correlation Test',\n  'Chi-square Independence Test',\n  'Kruskal-Wallis Test'\n]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"transformer")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": boolean, kas nor\u0101da, vai att\u0113lot main\u012bgo transform\u0101cijas r\u012bkus.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onTutorialCompletion")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": funkcija, kas tiek izsaukta, kad lietot\u0101js ir pabeidzis datu p\u0101rl\u016bka pam\u0101c\u012bbu.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onTutorialCompletion() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onTutorialStart")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": funkcija, kas tiek izsaukta, kad lietot\u0101js s\u0101k datu p\u0101rl\u016bka pam\u0101c\u012bbu. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onTutorialStart() {}"),".")),(0,r.kt)("h2",{id:"piem\u0113ri"},"Piem\u0113ri"),(0,r.kt)("p",null,"In creating a data explorer, one needs a ",(0,r.kt)("em",{parentName:"p"},".json dataset. This step may be accomplished by including the following in the header of a "),".isle file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'require:\n    dataName: "./dataName.json"\n')),(0,r.kt)("p",null,'Consider a dataset called "heartdisease" with the following variables:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Gender"),": ",(0,r.kt)("em",{parentName:"li"},"Categorical")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Drugs"),": ",(0,r.kt)("em",{parentName:"li"},"Categorical")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Complications"),": ",(0,r.kt)("em",{parentName:"li"},"Categorical")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cost"),": ",(0,r.kt)("em",{parentName:"li"},"Quantitative")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Age"),": ",(0,r.kt)("em",{parentName:"li"},"Quantitative")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Interventions"),": ",(0,r.kt)("em",{parentName:"li"},"Quantitative")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ERVisit"),": ",(0,r.kt)("em",{parentName:"li"},"Quantitative")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Comorbidities"),": ",(0,r.kt)("em",{parentName:"li"},"Quantitative")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Duration"),": ",(0,r.kt)("em",{parentName:"li"},"Quantitative"))),(0,r.kt)("p",null,"We will include the explorer with the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<DataExplorer \n    id=\"heartdisease\"\n    data={heartdisease} \n    categorical={[ 'Gender', 'Drugs', 'Complications' ]}\n    quantitative={[ 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}\n    tests={[]}\n/>\n")))}v.isMDXComponent=!0}}]);