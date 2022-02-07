"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2966],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(202784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27287:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(487462),o=n(263366),i=(n(202784),n(603905)),l=["components"],a={id:"network-plot",title:"NetworkPlot",sidebar_label:"NetworkPlot"},p=void 0,c={unversionedId:"plots/network-plot",id:"plots/network-plot",title:"NetworkPlot",description:"d3\u30d9\u30fc\u30b9\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30d7\u30ed\u30c3\u30c8\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/plots/network-plot.md",sourceDirName:"plots",slug:"/plots/network-plot",permalink:"/ja/docs/plots/network-plot",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/network-plot.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614201626,formattedLastUpdatedAt:"2021/2/24",frontMatter:{id:"network-plot",title:"NetworkPlot",sidebar_label:"NetworkPlot"},sidebar:"docs",previous:{title:"Mosaic Plot",permalink:"/ja/docs/plots/mosaicplot"},next:{title:"Pie Chart",permalink:"/ja/docs/plots/piechart"}},u=[{value:"\u30aa\u30d7\u30b7\u30e7\u30f3",id:"\u30aa\u30d7\u30b7\u30e7\u30f3",children:[],level:2},{value:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002",id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059",children:[],level:2}],s={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"d3\u30d9\u30fc\u30b9\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30d7\u30ed\u30c3\u30c8\u3002"),(0,i.kt)("h2",{id:"\u30aa\u30d7\u30b7\u30e7\u30f3"},"\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"data")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"{nodes,links} (required)"),": \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f ",(0,i.kt)("inlineCode",{parentName:"li"},"nodes")," \u3068 ",(0,i.kt)("inlineCode",{parentName:"li"},"links")," \u3092\u6301\u3061\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"nodes")," \u306f ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," \u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u6301\u3064\u8981\u7d20\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u914d\u5217\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"links")," \u306f ",(0,i.kt)("inlineCode",{parentName:"li"},"source")," \u3068 ",(0,i.kt)("inlineCode",{parentName:"li"},"target")," \u306e ID \u3092\u6301\u3064\u8981\u7d20\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u914d\u5217\u3067\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"width")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": \u30d7\u30ed\u30c3\u30c8\u306e\u5e45. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"900"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"height")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": \u533a\u753b\u306e\u9ad8\u3055. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"600"),".")),(0,i.kt)("h2",{id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059"},"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<NetworkPlot\n    width={400}\n    height={400}\n    data={{\n        nodes: [\n            { 'id': 0 },\n            { 'id': 1 },\n            { 'id': 2 },\n            { 'id': 3 },\n        ],\n        links: [\n            { 'source': 0, 'target': 1 },\n            { 'source': 0, 'target': 2 },\n            { 'source': 2, 'target': 3 }\n        ]\n    }}\n/>\n")))}d.isMDXComponent=!0}}]);