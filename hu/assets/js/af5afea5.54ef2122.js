"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3805],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64224:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(487462),a=n(263366),l=(n(202784),n(603905)),i=["components"],o={id:"clt-sample",title:"CLT Sample",sidebar_label:"CLT Sample"},s=void 0,p={unversionedId:"learn/clt-sample",id:"learn/clt-sample",title:"CLT Sample",description:"Egy tanul\xe1si komponens, amely a k\xf6zponti hat\xe1r\xe9rt\xe9kt\xe9telt (CLT) szeml\xe9lteti egy megadott adathalmazb\xf3l t\xf6rt\xe9n\u0151 mintav\xe9telez\xe9skor.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/learn/clt-sample.md",sourceDirName:"learn",slug:"/learn/clt-sample",permalink:"/hu/docs/learn/clt-sample",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/clt-sample.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021. 06. 01.",frontMatter:{id:"clt-sample",title:"CLT Sample",sidebar_label:"CLT Sample"},sidebar:"docs",previous:{title:"Discrete CLT",permalink:"/hu/docs/learn/clt-discrete"},next:{title:"Conditional Probability",permalink:"/hu/docs/learn/conditional-probability"}},u=[{value:"Opci\xf3k",id:"opci\xf3k",children:[],level:2},{value:"P\xe9ld\xe1k",id:"p\xe9ld\xe1k",children:[],level:2}],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Egy tanul\xe1si komponens, amely a k\xf6zponti hat\xe1r\xe9rt\xe9kt\xe9telt (CLT) szeml\xe9lteti egy megadott adathalmazb\xf3l t\xf6rt\xe9n\u0151 mintav\xe9telez\xe9skor."),(0,l.kt)("h2",{id:"opci\xf3k"},"Opci\xf3k"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"data")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object (required)"),": adatobjektum, amelynek kulcsai megfelelnek a v\xe1ltoz\xf3k nev\xe9nek, az \xe9rt\xe9kek pedig a megfelel\u0151 v\xe1ltoz\xf3k \xe9rt\xe9keit tartalmazz\xe1k.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hidePopulationStdev")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": a popul\xe1ci\xf3 sz\xf3r\xe1s\xe1nak elrejt\xe9se. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"samples")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(array<number>|number)"),": sz\xe1mok t\xf6mbje vagy egyetlen sz\xe1m, amely a kisorsolhat\xf3 mintanagys\xe1gokat jel\xf6li.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"25"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"populationProbabilities")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": a n\xe9pess\xe9g val\xf3sz\xedn\u0171s\xe9geinek kisz\xe1m\xedt\xe1s\xe1hoz sz\xfcks\xe9ges egyenletek megjelen\xedt\xe9se. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"quantiles")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": hogy megjelenjen-e a kvantilisek kisz\xe1m\xedt\xe1s\xe1hoz sz\xfcks\xe9ges eszk\xf6z. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"variables")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array (required)"),": olyan v\xe1ltoz\xf3k nevei, amelyekb\u0151l mint\xe1t lehet venni. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,l.kt)("h2",{id:"p\xe9ld\xe1k"},"P\xe9ld\xe1k"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnSampleCLT \n    data={heartdisease} \n    variables={[ 'Gender', 'Drugs', 'Complications', 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}\n/>\n")))}m.isMDXComponent=!0}}]);