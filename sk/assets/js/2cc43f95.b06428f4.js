(self.webpackChunk=self.webpackChunk||[]).push([[176],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(202784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},923739:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var r=n(722122),o=n(419756),a=(n(202784),n(603905)),i={id:"network-plot",title:"NetworkPlot",sidebar_label:"NetworkPlot"},l={unversionedId:"plots/network-plot",id:"plots/network-plot",isDocsHomePage:!1,title:"NetworkPlot",description:"Sie\u0165ov\xfd graf zalo\u017een\xfd na d3.",source:"@site/i18n/sk/docusaurus-plugin-content-docs/current/plots/network-plot.md",sourceDirName:"plots",slug:"/plots/network-plot",permalink:"/docs/plots/network-plot",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/network-plot.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. 6. 2021",sidebar_label:"NetworkPlot",frontMatter:{id:"network-plot",title:"NetworkPlot",sidebar_label:"NetworkPlot"},sidebar:"docs",previous:{title:"Mosaic Plot",permalink:"/docs/plots/mosaicplot"},next:{title:"Pie Chart",permalink:"/docs/plots/piechart"}},p=[{value:"Mo\u017enosti",id:"mo\u017enosti",children:[]},{value:"Pr\xedklady",id:"pr\xedklady",children:[]}],s={toc:p};function c(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Sie\u0165ov\xfd graf zalo\u017een\xfd na d3."),(0,a.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"data")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"{nodes,links} (required)"),": objekt s ",(0,a.kt)("inlineCode",{parentName:"li"},"uzlami")," a ",(0,a.kt)("inlineCode",{parentName:"li"},"odkazmi"),"; ",(0,a.kt)("inlineCode",{parentName:"li"},"uzly")," by malo by\u0165 objektov\xe9 pole prvkov s vlastnos\u0165ou ",(0,a.kt)("inlineCode",{parentName:"li"},"id"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"odkazy")," objektov\xe9 pole s prvkami s id ",(0,a.kt)("inlineCode",{parentName:"li"},"zdroja")," a ",(0,a.kt)("inlineCode",{parentName:"li"},"cie\u013ea"),". Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"width")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u0161\xedrka grafu (v px). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"900"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"height")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": v\xfd\u0161ka grafu (v px). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"600"),".")),(0,a.kt)("h2",{id:"pr\xedklady"},"Pr\xedklady"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<NetworkPlot\n    width={400}\n    height={400}\n    data={{\n        nodes: [\n            { 'id': 0 },\n            { 'id': 1 },\n            { 'id': 2 },\n            { 'id': 3 },\n        ],\n        links: [\n            { 'source': 0, 'target': 1 },\n            { 'source': 0, 'target': 2 },\n            { 'source': 2, 'target': 3 }\n        ]\n    }}\n/>\n")))}c.isMDXComponent=!0}}]);