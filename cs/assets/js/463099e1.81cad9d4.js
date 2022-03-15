"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[877],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},422751:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(487462),a=n(263366),o=(n(202784),n(603905)),l=["components"],i={id:"clt-sample",title:"CLT Sample",sidebar_label:"CLT Sample"},p=void 0,c={unversionedId:"learn/clt-sample",id:"learn/clt-sample",title:"CLT Sample",description:"U\u010debn\xed komponenta ilustruj\xedc\xed centr\xe1ln\xed limitn\xed v\u011btu (CLT) p\u0159i vzorkov\xe1n\xed z dodan\xe9ho souboru dat.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/learn/clt-sample.md",sourceDirName:"learn",slug:"/learn/clt-sample",permalink:"/cs/docs/learn/clt-sample",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/clt-sample.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. 6. 2021",frontMatter:{id:"clt-sample",title:"CLT Sample",sidebar_label:"CLT Sample"},sidebar:"docs",previous:{title:"Discrete CLT",permalink:"/cs/docs/learn/clt-discrete"},next:{title:"Conditional Probability",permalink:"/cs/docs/learn/conditional-probability"}},s={},u=[{value:"Mo\u017enosti",id:"mo\u017enosti",level:2},{value:"P\u0159\xedklady",id:"p\u0159\xedklady",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"U\u010debn\xed komponenta ilustruj\xedc\xed centr\xe1ln\xed limitn\xed v\u011btu (CLT) p\u0159i vzorkov\xe1n\xed z dodan\xe9ho souboru dat."),(0,o.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"data")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object (required)"),": datov\xfd objekt, jeho\u017e kl\xed\u010de odpov\xeddaj\xed n\xe1zv\u016fm prom\u011bnn\xfdch a hodnoty hodnot\xe1m p\u0159\xedslu\u0161n\xfdch prom\u011bnn\xfdch.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"hidePopulationStdev")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": skr\xfdt zobrazen\xed sm\u011brodatn\xe9 odchylky populace. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"samples")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(array<number>|number)"),": pole \u010d\xedsel nebo jednotliv\xe1 \u010d\xedsla ozna\u010duj\xedc\xed velikosti vzork\u016f, kter\xe9 lze vyb\xedrat.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"25"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"populationProbabilities")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": zda zobrazit rovnice pro v\xfdpo\u010det popula\u010dn\xedch pravd\u011bpodobnost\xed.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"quantiles")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": zda zobrazit n\xe1stroj pro v\xfdpo\u010det kvantil\u016f.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"variables")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"array (required)"),": n\xe1zvy prom\u011bnn\xfdch, z nich\u017e lze odeb\xedrat vzorky.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,o.kt)("h2",{id:"p\u0159\xedklady"},"P\u0159\xedklady"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnSampleCLT \n    data={heartdisease} \n    variables={[ 'Gender', 'Drugs', 'Complications', 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}\n/>\n")))}m.isMDXComponent=!0}}]);