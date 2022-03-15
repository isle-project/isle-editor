"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6175],{603905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(202784);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(r),f=i,b=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(b,a(a({ref:t},c),{},{components:r})):n.createElement(b,a({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},952476:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return c},toc:function(){return p},default:function(){return f}});var n=r(487462),i=r(263366),o=(r(202784),r(603905)),a=["components"],u={id:"discrete-distribution",title:"Discrete Distribution",sidebar_label:"Discrete Distribution"},s=void 0,l={unversionedId:"learn/discrete-distribution",id:"learn/discrete-distribution",title:"Discrete Distribution",description:"Eine Lernkomponente zur Visualisierung beliebiger diskreter Verteilungen und zur Auswertung ihrer CDF.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/learn/discrete-distribution.md",sourceDirName:"learn",slug:"/learn/discrete-distribution",permalink:"/de/docs/learn/discrete-distribution",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/discrete-distribution.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21.2.2021",frontMatter:{id:"discrete-distribution",title:"Discrete Distribution",sidebar_label:"Discrete Distribution"},sidebar:"docs",previous:{title:"Dice Throwing",permalink:"/de/docs/learn/dice-throwing"},next:{title:"Hypothesis Testing for Means",permalink:"/de/docs/learn/hypothesis-testing-mean"}},c={},p=[{value:"Optionen",id:"optionen",level:2},{value:"Beispiele",id:"beispiele",level:2}],d={toc:p};function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Eine Lernkomponente zur Visualisierung beliebiger diskreter Verteilungen und zur Auswertung ihrer CDF."),(0,o.kt)("h2",{id:"optionen"},"Optionen"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"numValues")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),": anf\xe4ngliche Anzahl der eindeutigen Werte. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"4"),".")),(0,o.kt)("h2",{id:"beispiele"},"Beispiele"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnDiscreteDistribution />\n")))}f.isMDXComponent=!0}}]);