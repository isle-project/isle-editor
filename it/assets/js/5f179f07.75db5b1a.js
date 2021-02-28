(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{179:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return m}));var n=a(3),i=a(7),r=(a(0),a(409)),l={id:"data-explorer",title:"Data Explorer",sidebar_label:"Data Explorer"},o={unversionedId:"data-explorer",id:"data-explorer",isDocsHomePage:!1,title:"Data Explorer",description:"Questo componente \xe8 utilizzato dagli studenti per riassumere brevemente i dati cos\xec come vengono presentati ed eseguire vari test statistici.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/data-explorer.md",slug:"/data-explorer",permalink:"/it/docs/data-explorer",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/data-explorer.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Data Explorer",sidebar:"docs",previous:{title:"Using ISLE in the Classroom",permalink:"/it/docs/tutorials/classroom-use"},next:{title:"Data Table",permalink:"/it/docs/data-table"}},b=[{value:"Opzioni",id:"opzioni",children:[]},{value:"Esempi",id:"esempi",children:[]}],c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},s=c("TextEditor"),p=c("DataTable"),d={toc:b};function m(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Questo componente \xe8 utilizzato dagli studenti per riassumere brevemente i dati cos\xec come vengono presentati ed eseguire vari test statistici."),Object(r.b)("h2",{id:"opzioni"},"Opzioni"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"categorical")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": array di stringhe che indicano il nome di ogni variabile categoriale. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"quantitative")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": array di stringhe che indicano il nome di ogni variabile quantitativa. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"data")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": oggetto dati o array da visualizzare. Se si tratta di un oggetto, le chiavi corrispondono ai valori delle colonne, mentre un array si aspetter\xe0 un array di oggetti con un campo denominato corrispondente ad ogni colonna. Se si desidera consentire agli studenti la possibilit\xe0 di importare un file ",Object(r.b)("inlineCode",{parentName:"li"},".csv"),", impostare l'opzione ",Object(r.b)("inlineCode",{parentName:"li"},"data")," come ",Object(r.b)("inlineCode",{parentName:"li"},"falso"),".. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"dataInfo")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": oggetto contenente le chiavi \\'nome\\', il cui valore \xe8 una stringa, \\'info\\', il cui valore \xe8 un array di stringhe in cui ogni elemento dell'array \xe8 una nuova riga e \\'variabili\\', un oggetto con chiavi come nomi di variabili e valori come descrizioni di variabili. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{\n  'info': '',\n  'name': '',\n  'variables': null,\n  'showOnStartup': false\n}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"editor")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": booleano che indica se mostrare l'editor all'utente. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"editorProps")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": oggetto delle propriet\xe0 da passare al ",Object(r.b)("inlineCode",{parentName:"li"},"TextEditor")," (vedere documentazione per ",Object(r.b)(s,{mdxType:"TextEditor"}),"). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"editorTitle")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": stringa che indica il titolo dell'esploratore da visualizzare. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"dataTable")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": valore booleano che indica se nascondere la tabella dei dati alla vista. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"dataTableProps")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": propriet\xe0 passate al componente tabella dati (vedi documentazione per ",Object(r.b)(p,{mdxType:"DataTable"}),"). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"history")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controlla se visualizzare un registro cronologico delle azioni effettuate. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"reportMode")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": controlla se sincronizzare i cambiamenti dell'editor per tutti (",Object(r.b)("inlineCode",{parentName:"li"},"collaborative"),"), tra gli utenti in gruppi (",Object(r.b)("inlineCode",{parentName:"li"},"gruppo"),"), oppure no (",Object(r.b)("inlineCode",{parentName:"li"},"individuale"),"). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'individual'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"histogramDensities")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": valore booleano che indica se visualizzare le densit\xe0 degli istogrammi. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"models")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": array di stringhe che indicano i modelli che possono essere adattati ai dati. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[\n  'Simple Linear Regression',\n  'Multiple Linear Regression',\n  'LASSO',\n  'Decision Tree',\n  'Random Forest',\n  'Logistic Regression',\n  'Naive Bayes',\n  'PCA',\n  'Hierarchical Clustering',\n  'kmeans'\n]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"opened")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": pagina aperta all'avvio. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"plots")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": array di stringhe che indicano quali trame mostrare all'utente. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[\n  'Bar Chart',\n  'Pie Chart',\n  'Mosaic Plot',\n  'Histogram',\n  'Box Plot',\n  'Line Plot',\n  'Scatterplot',\n  'Scatterplot Matrix',\n  'Heat Map',\n  'Contour Chart',\n  'Violin Plot',\n  'QQ Plot'\n]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"questions")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": array di nodi che indicano il testo circostante e le componenti di domanda da visualizzare in una finestra a schede. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"showTestDecisions")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": booleano che indica se mostrare le decisioni prese per ogni test in base ai valori p calcolati. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"statistics")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": array di stringhe che indicano quali statistiche riassuntive possono essere calcolate. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[\n  'Mean',\n  'Median',\n  'Min',\n  'Max',\n  'Range',\n  'Interquartile Range',\n  'Standard Deviation',\n  'Variance',\n  'Correlation',\n  'Correlation Matrix',\n  'Skewness',\n  'Excess Kurtosis',\n  'First Quartile',\n  'Third Quartile',\n  'Quantile',\n  'Five-Number Summary'\n]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"style")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": Stili in linea CSS per il contenitore principale. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"tables")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": array di stringhe che indicano quali tabelle possono essere create dai dati. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[\n  'Frequency Table',\n  'Contingency Table'\n]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"tabs")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": array di oggetti e chiavi che indicano eventuali schede personalizzate da aggiungere. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"tests")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": serie di stringhe che indicano quali test di ipotesi includere. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[\n  'One-Sample Mean Test',\n  'Two-Sample Mean Test',\n  'One-Way ANOVA',\n  'One-Sample Proportion Test',\n  'Two-Sample Proportion Test',\n  'Correlation Test',\n  'Chi-squared Independence Test',\n  'Kruskal-Wallis Test'\n]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"transformer")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": booleano che indica se visualizzare gli strumenti di trasformazione delle variabili. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onTutorialCompletion")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": funzione invocata quando l'utente ha completato il tutorial di data explorer. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onTutorialCompletion() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onTutorialStart")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": funzione invocata quando l'utente avvia il tutorial di data explorer. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onTutorialStart() {}"),".")),Object(r.b)("h2",{id:"esempi"},"Esempi"),Object(r.b)("p",null,"In creating a data explorer, one needs a ",Object(r.b)("em",{parentName:"p"},".json dataset. This step may be accomplished by including the following in the header of a "),".isle file:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'require:\n    dataName: "./dataName.json"\n')),Object(r.b)("p",null,'Consider a dataset called "heartdisease" with the following variables:'),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Gender"),": ",Object(r.b)("em",{parentName:"li"},"Categorical")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Drugs"),": ",Object(r.b)("em",{parentName:"li"},"Categorical")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Complications"),": ",Object(r.b)("em",{parentName:"li"},"Categorical")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Cost"),": ",Object(r.b)("em",{parentName:"li"},"Quantitative")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Age"),": ",Object(r.b)("em",{parentName:"li"},"Quantitative")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Interventions"),": ",Object(r.b)("em",{parentName:"li"},"Quantitative")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"ERVisit"),": ",Object(r.b)("em",{parentName:"li"},"Quantitative")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Comorbidities"),": ",Object(r.b)("em",{parentName:"li"},"Quantitative")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Duration"),": ",Object(r.b)("em",{parentName:"li"},"Quantitative"))),Object(r.b)("p",null,"We will include the explorer with the following code:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<DataExplorer \n    id=\"heartdisease\"\n    data={heartdisease} \n    categorical={[ 'Gender', 'Drugs', 'Complications' ]}\n    quantitative={[ 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}\n    tests={[]}\n/>\n")))}m.isMDXComponent=!0},409:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),s=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,u=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return a?i.a.createElement(u,o(o({ref:t},c),{},{components:a})):i.a.createElement(u,o({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=m;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<r;c++)l[c]=a[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);