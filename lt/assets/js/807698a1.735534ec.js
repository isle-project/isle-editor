"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[99319],{603905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(202784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(r),f=a,d=s["".concat(u,".").concat(f)]||s[f]||m[f]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},985558:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return g},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return k}});var n=r(603905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&c(e,r,t[r]);return e};const m={id:"generator",title:"Generator",sidebar_label:"Generator"},f=void 0,d={unversionedId:"generator",id:"generator",title:"Generator",description:"Komponentas, skirtas kitiems komponentams (pvz., automati\u0161kai generuojamiems klausimams) generuoti.",source:"@site/i18n/lt/docusaurus-plugin-content-docs/current/generator.md",sourceDirName:".",slug:"/generator",permalink:"/lt/docs/generator",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/generator.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021-06-01",frontMatter:{id:"generator",title:"Generator",sidebar_label:"Generator"},sidebar:"docs",previous:{title:"Expire",permalink:"/lt/docs/expire"},next:{title:"Language",permalink:"/lt/docs/language"}},y={},k=[{value:"Parinktys",id:"parinktys",level:2},{value:"Pavyzd\u017eiai",id:"pavyzd\u017eiai",level:2}],v={toc:k};function g(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},v),c),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Komponentas, skirtas kitiems komponentams (pvz., automati\u0161kai generuojamiems klausimams) generuoti."),(0,n.kt)("h2",s({},{id:"parinktys"}),"Parinktys"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"autoStart")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroliuoja, ar automati\u0161kai i\u0161kviesti generatori\u0173 po montavimo. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"buttonLabel")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|node)"),": mygtuko etiket\u0117. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"'Generate'"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onGenerate")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function (required)"),": i\u0161kviesta funkcija, kuri tur\u0117t\u0173 gr\u0105\u017einti nauj\u0105 komponent\u0105, atvaizduojam\u0105 pamokoje.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,n.kt)("h2",s({},{id:"pavyzd\u017eiai"}),"Pavyzd\u017eiai"),(0,n.kt)("p",null,(0,n.kt)("a",s({parentName:"p"},{href:"https://isle.stat.cmu.edu/adaptive-review/questions/"}),"Adaptive Review Questions")))}g.isMDXComponent=!0}}]);