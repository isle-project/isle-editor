"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65841],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(202784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),c=u(n),f=o,m=c["".concat(p,".").concat(f)]||c[f]||d[f]||i;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[c]="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},557322:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return b}});var r=n(603905),o=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(a)for(var n of a(t))u.call(t,n)&&s(e,n,t[n]);return e};const d={id:"network-plot",title:"NetworkPlot",sidebar_label:"NetworkPlot"},f=void 0,m={unversionedId:"plots/network-plot",id:"plots/network-plot",title:"NetworkPlot",description:"d3-p\xf5hine v\xf5rgujoonis.",source:"@site/i18n/et/docusaurus-plugin-content-docs/current/plots/network-plot.md",sourceDirName:"plots",slug:"/plots/network-plot",permalink:"/et/docs/plots/network-plot",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/network-plot.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. juuni 2021",frontMatter:{id:"network-plot",title:"NetworkPlot",sidebar_label:"NetworkPlot"},sidebar:"docs",previous:{title:"Mosaic Plot",permalink:"/et/docs/plots/mosaicplot"},next:{title:"Pie Chart",permalink:"/et/docs/plots/piechart"}},k={},b=[{value:"Valikud",id:"valikud",level:2},{value:"N\xe4ited",id:"n\xe4ited",level:2}],v={toc:b};function y(e){var t,n=e,{components:o}=n,s=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&a)for(var r of a(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},v),s),i(t,l({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"d3-p\xf5hine v\xf5rgujoonis."),(0,r.kt)("h2",c({},{id:"valikud"}),"Valikud"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"{nodes,links} (required)"),': objekt koos "s\xf5lmede" ja "linkidega"; "s\xf5lmed" peaks olema objektimassiiv, millel on "id"-omadus, "lingid" objektimassiiv, millel on "allikas" ja "siht" id.. Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"width")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": joonise laius (px). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"900"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"height")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": joonise k\xf5rgus (px). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"600"),".")),(0,r.kt)("h2",c({},{id:"n\xe4ited"}),"N\xe4ited"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<NetworkPlot\n    width={400}\n    height={400}\n    data={{\n        nodes: [\n            { 'id': 0 },\n            { 'id': 1 },\n            { 'id': 2 },\n            { 'id': 3 },\n        ],\n        links: [\n            { 'source': 0, 'target': 1 },\n            { 'source': 0, 'target': 2 },\n            { 'source': 2, 'target': 3 }\n        ]\n    }}\n/>\n")))}y.isMDXComponent=!0}}]);