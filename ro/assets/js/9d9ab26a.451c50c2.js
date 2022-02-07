"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2831],{603905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(202784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},758482:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(487462),a=r(263366),o=(r(202784),r(603905)),i=["components"],l={id:"generator",title:"Generator",sidebar_label:"Generator"},u=void 0,c={unversionedId:"generator",id:"generator",title:"Generator",description:"O component\u0103 pentru generarea altor componente (de exemplu, \xeentreb\u0103ri generate automat).",source:"@site/i18n/ro/docusaurus-plugin-content-docs/current/generator.md",sourceDirName:".",slug:"/generator",permalink:"/ro/docs/generator",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/generator.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"01.06.2021",frontMatter:{id:"generator",title:"Generator",sidebar_label:"Generator"},sidebar:"docs",previous:{title:"Expire",permalink:"/ro/docs/expire"},next:{title:"Language",permalink:"/ro/docs/language"}},p=[{value:"Op\u021biuni",id:"op\u021biuni",children:[],level:2},{value:"Exemple",id:"exemple",children:[],level:2}],s={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"O component\u0103 pentru generarea altor componente (de exemplu, \xeentreb\u0103ri generate automat)."),(0,o.kt)("h2",{id:"op\u021biuni"},"Op\u021biuni"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"autoStart")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": controleaz\u0103 dac\u0103 se apeleaz\u0103 automat generatorul dup\u0103 montare. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"buttonLabel")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(string|node)"),": etichet\u0103 pentru buton. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"'Generate'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"onGenerate")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"function (required)"),": invocat\u0103 care ar trebui s\u0103 returneze o nou\u0103 component\u0103 care s\u0103 fie redat\u0103 \xeen lec\u021bie. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,o.kt)("h2",{id:"exemple"},"Exemple"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://isle.stat.cmu.edu/adaptive-review/questions/"},"Adaptive Review Questions")))}d.isMDXComponent=!0}}]);