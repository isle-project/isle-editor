"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[54212],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(n),c=a,k=d["".concat(s,".").concat(c)]||d[c]||u[c]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},906854:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return d},metadata:function(){return k},toc:function(){return y}});var r=n(603905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))m.call(t,n)&&p(e,n,t[n]);return e};const d={id:"random-forest",title:"Random Forest",sidebar_label:"Random Forest"},c=void 0,k={unversionedId:"models/random-forest",id:"models/random-forest",title:"Random Forest",description:"V\xe9letlen erd\u0151k.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/models/random-forest.md",sourceDirName:"models",slug:"/models/random-forest",permalink:"/hu/docs/models/random-forest",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/random-forest.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021. 06. 01.",frontMatter:{id:"random-forest",title:"Random Forest",sidebar_label:"Random Forest"},sidebar:"docs",previous:{title:"Principal Component Analysis",permalink:"/hu/docs/models/principal-component-analysis"},next:{title:"Simple Linear Regression",permalink:"/hu/docs/models/simple-linear-regression"}},f={},y=[{value:"Opci\xf3k",id:"opci\xf3k",level:2},{value:"P\xe9ld\xe1k",id:"p\xe9ld\xe1k",level:2}],g={toc:y};function b(e){var t,n=e,{components:a}=n,p=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},g),p),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"V\xe9letlen erd\u0151k."),(0,r.kt)("h2",u({},{id:"opci\xf3k"}),"Opci\xf3k"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object (required)"),": \xe9rt\xe9kt\xe1bl\xe1k objektuma. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"y")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": eredm\xe9nyv\xe1ltoz\xf3. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"x")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(array<(string|Factor)>|string|Factor) (required)"),": egy vagy t\xf6bb el\u0151rejelz\u0151 v\xe1ltoz\xf3. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),': jelenleg csak a kategorikus v\xe1laszok "oszt\xe1lyoz\xe1sa" t\xe1mogatott.. Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"'Classification'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"quantitative")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),': az "adatok" v\xe1ltoz\xf3inak t\xf6mbje, amelyek "mennyis\xe9gi" v\xe1ltoz\xf3k. Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"nTrees")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": f\xe1k sz\xe1ma. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"50"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"nTry")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": az egyes oszt\xe1sokn\xe1l ellen\u0151rizend\u0151 prediktorok sz\xe1ma. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"impurityMeasure")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": a szennyez\u0151d\xe9s m\xe9rt\xe9kegys\xe9ge (",(0,r.kt)("inlineCode",{parentName:"li"},"gini")," vagy ",(0,r.kt)("inlineCode",{parentName:"li"},"entr\xf3pia"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'gini'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"scoreThreshold")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": ponthat\xe1r a feloszt\xe1shoz. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0.01"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"maxTreeDepth")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": a fa maxim\xe1lis m\xe9lys\xe9ge. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"20"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"minItemsCount")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": a lev\xe9lcsom\xf3pontokban l\xe9v\u0151 megfigyel\xe9sek minim\xe1lis sz\xe1ma. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"50"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onPredict")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": callback, amelyet a modell objektummal h\xedvnak el\u0151, amikor a predikt\xe1l\xf3 gombra kattintanak.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,r.kt)("h2",u({},{id:"p\xe9ld\xe1k"}),"P\xe9ld\xe1k"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<RandomForest \n    data={heartdisease} \n    type=\"Classification\"\n    y=\"Complications\"\n    x={[ 'Age', 'Cost', 'Interventions', 'Gender' ]}\n    quantitative={[ 'Age', 'Cost', 'Interventions' ]}\n/>\n")))}b.isMDXComponent=!0}}]);