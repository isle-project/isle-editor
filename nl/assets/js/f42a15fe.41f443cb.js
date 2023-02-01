"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48884],{603905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=a,f=d["".concat(s,".").concat(c)]||d[c]||u[c]||i;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},158853:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return c},default:function(){return N},frontMatter:function(){return u},metadata:function(){return f},toc:function(){return b}});var r=n(603905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&m(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&m(e,n,t[n]);return e};const u={id:"random-forest",title:"Random Forest",sidebar_label:"Random Forest"},c=void 0,f={unversionedId:"models/random-forest",id:"models/random-forest",title:"Random Forest",description:"Regressie- en classificatiebomen.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/models/random-forest.md",sourceDirName:"models",slug:"/models/random-forest",permalink:"/nl/docs/models/random-forest",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/random-forest.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614613459,formattedLastUpdatedAt:"1 mrt. 2021",frontMatter:{id:"random-forest",title:"Random Forest",sidebar_label:"Random Forest"},sidebar:"docs",previous:{title:"Principal Component Analysis",permalink:"/nl/docs/models/principal-component-analysis"},next:{title:"Simple Linear Regression",permalink:"/nl/docs/models/simple-linear-regression"}},k={},b=[{value:"Opties",id:"opties",level:2},{value:"Voorbeelden",id:"voorbeelden",level:2}],g={toc:b};function N(e){var t,n=e,{components:a}=n,m=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},g),m),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Regressie- en classificatiebomen."),(0,r.kt)("h2",d({},{id:"opties"}),"Opties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object (required)"),": object van waardevermeerdering. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"y")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": resultaatvariabele. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"x")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(array<(string|Factor)>|string|Factor) (required)"),": een of meer voorspellende variabelen. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": op dit moment wordt alleen ",(0,r.kt)("inlineCode",{parentName:"li"},"Classificatie")," voor categorische antwoorden ondersteund. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'Classification'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"quantitative")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),": array van variabelen in ",(0,r.kt)("inlineCode",{parentName:"li"},"data")," die ",(0,r.kt)("inlineCode",{parentName:"li"},"kwantitatief")," zijn. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"nTrees")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": aantal bomen. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"50"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"nTry")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": aantal te controleren voorspellers bij elke splitsing. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"impurityMeasure")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": onzuiverheidsmaatregel (",(0,r.kt)("inlineCode",{parentName:"li"},"gini")," of ",(0,r.kt)("inlineCode",{parentName:"li"},"entropie"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'gini'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"scoreThreshold")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": scoringsdrempel voor splitsing. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0.01"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"maxTreeDepth")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": maximale boomdiepte. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"20"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"minItemsCount")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": minimum # van de waarnemingen in bladknopen. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"50"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onPredict")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": callback aangeroepen met modelobject bij het klikken op de voorspellingsknop. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,r.kt)("h2",d({},{id:"voorbeelden"}),"Voorbeelden"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<RandomForest \n    data={heartdisease} \n    type=\"Classification\"\n    y=\"Complications\"\n    x={[ 'Age', 'Cost', 'Interventions', 'Gender' ]}\n    quantitative={[ 'Age', 'Cost', 'Interventions' ]}\n/>\n")))}N.isMDXComponent=!0}}]);