(window.webpackJsonp=window.webpackJsonp||[]).push([[328],{269:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(409)),l={id:"scatterplot",title:"Scatter Plot",sidebar_label:"Scatter Plot"},o={unversionedId:"plots/scatterplot",id:"plots/scatterplot",isDocsHomePage:!1,title:"Scatter Plot",description:"Calcola il valore minimo e massimo di una matrice.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/plots/scatterplot.md",slug:"/plots/scatterplot",permalink:"/it/docs/plots/scatterplot",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/scatterplot.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Scatter Plot",sidebar:"docs",previous:{title:"QQ Plot",permalink:"/it/docs/plots/qqplot"},next:{title:"Scatter Plot Matrix",permalink:"/it/docs/plots/scatterplot-matrix"}},c=[{value:"Opzioni",id:"opzioni",children:[]},{value:"Esempi",id:"esempi",children:[]}],p={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Calcola il valore minimo e massimo di una matrice."),Object(i.b)("h2",{id:"opzioni"},"Opzioni"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"data")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object (required)"),": oggetto di array di valori per ogni variabile. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"xval")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string (required)"),": variabile da visualizzare sull'asse x. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"yval")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string (required)"),": variabile da visualizzare sull'asse y. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"text")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": testi da visualizzare accanto ad ogni punto. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"color")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": variabile categoriale da mappare a colore dei punti. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"type")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": variabile categoriale per mappare i simboli visualizzati. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"size")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": variabile quantitativa da mappare alla dimensione dei punti. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"regressionLine")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": controlla se sovrapporre la linea o le linee di regressione. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"regressionMethod")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array<string>"),': "lineare" e/o "liscio" per visualizzare la regressione lineare e la linea di regressione LOWESS levigata. Default: ',Object(i.b)("inlineCode",{parentName:"li"},"[\n  'linear'\n]"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"lineBy")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": visualizzare la linea di regressione separata per ogni categoria di variabile categoriale specificata. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"smoothSpan")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),': parametro dello span di lisciatura per la linea di regressione "liscio".. Default: ',Object(i.b)("inlineCode",{parentName:"li"},"0.66"),".")),Object(i.b)("h2",{id:"esempi"},"Esempi"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ScatterPlot \n    data={heartdisease} \n    xval="Age"\n    yval="Cost"\n/>\n')))}s.isMDXComponent=!0},409:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),m=a,d=b["".concat(l,".").concat(m)]||b[m]||u[m]||i;return n?r.a.createElement(d,o(o({ref:t},p),{},{components:n})):r.a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);