(self.webpackChunk=self.webpackChunk||[]).push([[8198],{603905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(202784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=m(a),u=r,c=k["".concat(s,".").concat(u)]||k[u]||d[u]||i;return a?n.createElement(c,l(l({ref:t},p),{},{components:a})):n.createElement(c,l({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},58741:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s},default:function(){return u}});var n=a(722122),r=a(419756),i=(a(202784),a(603905)),l={id:"data-explorer",title:"Data Explorer",sidebar_label:"Data Explorer"},o={unversionedId:"data-explorer",id:"data-explorer",isDocsHomePage:!1,title:"Data Explorer",description:"Den h\xe4r komponenten anv\xe4nds av eleverna f\xf6r att kort sammanfatta data som presenteras och utf\xf6ra olika statistiska tester.",source:"@site/i18n/sv/docusaurus-plugin-content-docs/current/data-explorer.md",sourceDirName:".",slug:"/data-explorer",permalink:"/docs/data-explorer",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/data-explorer.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021-06-01",sidebar_label:"Data Explorer",frontMatter:{id:"data-explorer",title:"Data Explorer",sidebar_label:"Data Explorer"},sidebar:"docs",previous:{title:"Using ISLE in the Classroom",permalink:"/docs/tutorials/classroom-use"},next:{title:"Data Table",permalink:"/docs/data-table"}},s=[{value:"Alternativ",id:"alternativ",children:[]},{value:"Exempel",id:"exempel",children:[]}],m=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},p=m("TextEditor"),d=m("DataTable"),k={toc:s};function u(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Den h\xe4r komponenten anv\xe4nds av eleverna f\xf6r att kort sammanfatta data som presenteras och utf\xf6ra olika statistiska tester."),(0,i.kt)("h2",{id:"alternativ"},"Alternativ"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"categorical")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array"),": En array av str\xe4ngar som anger namnet p\xe5 varje kategorisk variabel.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"quantitative")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array"),": en array av str\xe4ngar som anger namnet p\xe5 varje kvantitativ variabel.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"data")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": dataobjekt eller matris som ska visas. Om det \xe4r ett objekt motsvarar nycklarna kolumnv\xe4rdena, medan en array f\xf6rv\xe4ntar sig en array av objekt med ett namngivet f\xe4lt som motsvarar varje kolumn. Om du vill ge eleverna m\xf6jlighet att importera en .csv-fil, st\xe4ll in alternativet ",(0,i.kt)("inlineCode",{parentName:"li"},"data")," till ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),".. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"dataInfo")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": objekt som inneh\xe5ller nycklarna \\'name\\', vars v\xe4rde \xe4r en str\xe4ng, \\'info\\', vars v\xe4rde \xe4r en array av str\xe4ngar d\xe4r varje element i arrayen \xe4r en ny rad och \\'variables\\', ett objekt med nycklar som variabelnamn och v\xe4rden som variabelbeskrivningar.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{\n  'info': '',\n  'name': '',\n  'variables': null,\n  'showOnStartup': false\n}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"editor")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": Boolean som anger om redigeraren ska visas f\xf6r anv\xe4ndaren.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"editorProps")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": objekt med egenskaper som ska skickas till ",(0,i.kt)("inlineCode",{parentName:"li"},"TextEditor")," (se dokumentationen f\xf6r ",(0,i.kt)(p,{mdxType:"TextEditor"}),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"editorTitle")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": str\xe4ng som anger titeln p\xe5 den utforskare som ska visas. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"dataTable")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": Boolsk v\xe4rde som anger om datatabellen ska d\xf6ljas fr\xe5n visning.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"dataTableProps")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": Egenskaper som skickas till datatabellskomponenten (se dokumentationen f\xf6r ",(0,i.kt)(d,{mdxType:"DataTable"}),").. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"history")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": Kontrollerar om en historisk logg \xf6ver utf\xf6rda \xe5tg\xe4rder ska visas.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"reportMode")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": styr om \xe4ndringar i redigeraren ska synkroniseras f\xf6r alla (",(0,i.kt)("inlineCode",{parentName:"li"},"collaborative"),"), mellan anv\xe4ndare i grupper (",(0,i.kt)("inlineCode",{parentName:"li"},"group"),") eller inte (",(0,i.kt)("inlineCode",{parentName:"li"},"individual"),").. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'individual'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"histogramDensities")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": Booleanskt v\xe4rde som anger om histogramt\xe4theter ska visas.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"models")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array"),": en rad str\xe4ngar som anger de modeller som kan anpassas till uppgifterna.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"[\n  'Simple Linear Regression',\n  'Multiple Linear Regression',\n  'LASSO',\n  'Decision Tree',\n  'Random Forest',\n  'Logistic Regression',\n  'Naive Bayes',\n  'PCA',\n  'Hierarchical Clustering',\n  'kmeans'\n]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"opened")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": sida som \xf6ppnas vid start. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"plots")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array"),": en rad str\xe4ngar som anger vilka tomter som ska visas f\xf6r anv\xe4ndaren.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"[\n  'Bar Chart',\n  'Pie Chart',\n  'Mosaic Plot',\n  'Histogram',\n  'Box Plot',\n  'Line Plot',\n  'Scatterplot',\n  'Scatterplot Matrix',\n  'Heat Map',\n  'Contour Chart',\n  'Violin Plot',\n  'QQ Plot'\n]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"questions")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array"),": en matris av noder som anger omgivande text och fr\xe5gekomponenter som ska visas i ett f\xf6nster med flikar.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"showTestDecisions")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": Boolean som anger om besluten som fattats f\xf6r varje test baserat p\xe5 de ber\xe4knade p-v\xe4rdena ska visas.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"statistics")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array"),": en rad str\xe4ngar som anger vilken sammanfattande statistik som kan ber\xe4knas.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"[\n  'Mean',\n  'Median',\n  'Min',\n  'Max',\n  'Range',\n  'Interquartile Range',\n  'Standard Deviation',\n  'Variance',\n  'Correlation',\n  'Correlation Matrix',\n  'Skewness',\n  'Excess Kurtosis',\n  'First Quartile',\n  'Third Quartile',\n  'Quantile',\n  'Five-Number Summary'\n]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": CSS-stilar f\xf6r huvudbeh\xe5llaren. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"tables")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array"),": en rad str\xe4ngar som anger vilka tabeller som kan skapas fr\xe5n uppgifterna.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"[\n  'Frequency Table',\n  'Contingency Table'\n]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"tabs")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array"),": matris med objekt och nycklar som anger vilka anpassade flikar som ska l\xe4ggas till.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"tests")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array"),": en rad str\xe4ngar som anger vilka hypotespr\xf6vningar som ska inkluderas.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"[\n  'One-Sample Mean Test',\n  'Two-Sample Mean Test',\n  'One-Way ANOVA',\n  'One-Sample Proportion Test',\n  'Two-Sample Proportion Test',\n  'Correlation Test',\n  'Chi-squared Independence Test',\n  'Kruskal-Wallis Test'\n]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"transformer")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": Boolean som anger om verktyg f\xf6r omvandling av variabler ska visas.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onTutorialCompletion")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": funktion som anropas n\xe4r anv\xe4ndaren har slutf\xf6rt dataexploratorns handledning. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onTutorialCompletion() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onTutorialStart")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": funktion som anropas n\xe4r anv\xe4ndaren startar dataexploratorns handledning. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onTutorialStart() {}"),".")),(0,i.kt)("h2",{id:"exempel"},"Exempel"),(0,i.kt)("p",null,"In creating a data explorer, one needs a ",(0,i.kt)("em",{parentName:"p"},".json dataset. This step may be accomplished by including the following in the header of a "),".isle file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'require:\n    dataName: "./dataName.json"\n')),(0,i.kt)("p",null,'Consider a dataset called "heartdisease" with the following variables:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Gender"),": ",(0,i.kt)("em",{parentName:"li"},"Categorical")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Drugs"),": ",(0,i.kt)("em",{parentName:"li"},"Categorical")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Complications"),": ",(0,i.kt)("em",{parentName:"li"},"Categorical")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Cost"),": ",(0,i.kt)("em",{parentName:"li"},"Quantitative")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Age"),": ",(0,i.kt)("em",{parentName:"li"},"Quantitative")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Interventions"),": ",(0,i.kt)("em",{parentName:"li"},"Quantitative")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ERVisit"),": ",(0,i.kt)("em",{parentName:"li"},"Quantitative")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Comorbidities"),": ",(0,i.kt)("em",{parentName:"li"},"Quantitative")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Duration"),": ",(0,i.kt)("em",{parentName:"li"},"Quantitative"))),(0,i.kt)("p",null,"We will include the explorer with the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<DataExplorer \n    id=\"heartdisease\"\n    data={heartdisease} \n    categorical={[ 'Gender', 'Drugs', 'Complications' ]}\n    quantitative={[ 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}\n    tests={[]}\n/>\n")))}u.isMDXComponent=!0}}]);