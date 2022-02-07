"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3275],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(202784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},626344:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(487462),o=n(263366),i=(n(202784),n(603905)),a=["components"],l={id:"clt-continuous",title:"Continuous CLT",sidebar_label:"Continuous CLT"},u=void 0,c={unversionedId:"learn/clt-continuous",id:"learn/clt-continuous",title:"Continuous CLT",description:"V\xfdu\u010dbov\xe1 zlo\u017eka ilustruj\xfaca centr\xe1lnu limitn\xfa vetu (CLT) pre zvolen\xe9 spojit\xe9 rozdelenie.",source:"@site/i18n/sk/docusaurus-plugin-content-docs/current/learn/clt-continuous.md",sourceDirName:"learn",slug:"/learn/clt-continuous",permalink:"/sk/docs/learn/clt-continuous",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/clt-continuous.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. 6. 2021",frontMatter:{id:"clt-continuous",title:"Continuous CLT",sidebar_label:"Continuous CLT"},sidebar:"docs",previous:{title:"Causality Diagram",permalink:"/sk/docs/learn/causality-diagram"},next:{title:"Discrete CLT",permalink:"/sk/docs/learn/clt-discrete"}},s=[{value:"Mo\u017enosti",id:"mo\u017enosti",children:[],level:2},{value:"Pr\xedklady",id:"pr\xedklady",children:[],level:2}],p={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"V\xfdu\u010dbov\xe1 zlo\u017eka ilustruj\xfaca centr\xe1lnu limitn\xfa vetu (CLT) pre zvolen\xe9 spojit\xe9 rozdelenie."),(0,i.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"distributions")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array<string>"),': \u0161tatistick\xe9 rozdelenia na v\xfdber ("rovnomern\xe9", "exponenci\xe1lne" a/alebo "norm\xe1lne"). Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"[\n  'uniform',\n  'exponential',\n  'normal'\n]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"samples")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(array<number>|number)"),": pole \u010d\xedsel alebo jedno \u010d\xedslo ozna\u010duj\xface ve\u013ekosti vzoriek, ktor\xe9 je mo\u017en\xe9 vybra\u0165. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"25"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"hideFormulas")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, \u010di sa maj\xfa v texte komponentu skry\u0165 vzorce.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,i.kt)("h2",{id:"pr\xedklady"},"Pr\xedklady"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnContinuousCLT />\n")))}d.isMDXComponent=!0}}]);