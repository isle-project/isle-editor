"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4317],{603905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},821872:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return d},toc:function(){return u},default:function(){return m}});var r=n(487462),a=n(263366),i=(n(202784),n(603905)),l=["components"],o={id:"clt-sample",title:"CLT Sample",sidebar_label:"CLT Sample"},s=void 0,p={unversionedId:"learn/clt-sample",id:"learn/clt-sample",title:"CLT Sample",description:"Een leercomponent die de Centrale Limietstheorie (CLT) illustreert bij het bemonsteren van een aangeleverde dataset.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/learn/clt-sample.md",sourceDirName:"learn",slug:"/learn/clt-sample",permalink:"/nl/docs/learn/clt-sample",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/clt-sample.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621312042,formattedLastUpdatedAt:"18-5-2021",frontMatter:{id:"clt-sample",title:"CLT Sample",sidebar_label:"CLT Sample"},sidebar:"docs",previous:{title:"Discrete CLT",permalink:"/nl/docs/learn/clt-discrete"},next:{title:"Conditional Probability",permalink:"/nl/docs/learn/conditional-probability"}},d={},u=[{value:"Opties",id:"opties",level:2},{value:"Voorbeelden",id:"voorbeelden",level:2}],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Een leercomponent die de Centrale Limietstheorie (CLT) illustreert bij het bemonsteren van een aangeleverde dataset."),(0,i.kt)("h2",{id:"opties"},"Opties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"data")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object (required)"),": gegevensobject met toetsen komen overeen met namen van variabelen en waarden die de waarden van de respectieve variabelen bevatten. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"hidePopulationStdev")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": verbergen van de standaardafwijking van de bevolking. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"samples")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(array<number>|number)"),": array van getallen of een enkel getal dat de te trekken steekproefgroottes aanduidt. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"25"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"populationProbabilities")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": de vraag of er vergelijkingen moeten worden weergegeven voor de berekening van de waarschijnlijkheid van de bevolking. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"quantiles")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": of het instrument voor de berekening van eventuele kwantielen moet worden getoond. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"variables")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array (required)"),": namen van variabelen die kunnen worden bemonsterd uit. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,i.kt)("h2",{id:"voorbeelden"},"Voorbeelden"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnSampleCLT \n    data={heartdisease} \n    variables={[ 'Gender', 'Drugs', 'Complications', 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}\n/>\n")))}m.isMDXComponent=!0}}]);