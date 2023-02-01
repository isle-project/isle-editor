"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[83869],{603905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(202784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(r),f=o,m=c["".concat(p,".").concat(f)]||c[f]||d[f]||l;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},448983:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return v},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return k}});var n=r(603905),o=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&s(e,r,t[r]);return e};const d={id:"network-plot",title:"NetworkPlot",sidebar_label:"NetworkPlot"},f=void 0,m={unversionedId:"plots/network-plot",id:"plots/network-plot",title:"NetworkPlot",description:"Une trame de r\xe9seau bas\xe9e sur d3.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/plots/network-plot.md",sourceDirName:"plots",slug:"/plots/network-plot",permalink:"/fr/docs/plots/network-plot",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/network-plot.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614201626,formattedLastUpdatedAt:"24 f\xe9vr. 2021",frontMatter:{id:"network-plot",title:"NetworkPlot",sidebar_label:"NetworkPlot"},sidebar:"docs",previous:{title:"Mosaic Plot",permalink:"/fr/docs/plots/mosaicplot"},next:{title:"Pie Chart",permalink:"/fr/docs/plots/piechart"}},b={},k=[{value:"Options",id:"options",level:2},{value:"Exemples",id:"exemples",level:2}],y={toc:k};function v(e){var t,r=e,{components:o}=r,s=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},y),s),l(t,a({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Une trame de r\xe9seau bas\xe9e sur d3."),(0,n.kt)("h2",c({},{id:"options"}),"Options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"data")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"{nodes,links} (required)"),': objet avec des "noeuds" et des "liens" ; "noeuds" doit \xeatre un tableau d\'\xe9l\xe9ments avec une propri\xe9t\xe9 "id", "liens" un tableau d\'\xe9l\xe9ments avec un id "source" et "cible. Default: ',(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"width")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": largeur de la parcelle (en px). Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"900"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"height")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": hauteur de la parcelle (en px). Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"600"),".")),(0,n.kt)("h2",c({},{id:"exemples"}),"Exemples"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<NetworkPlot\n    width={400}\n    height={400}\n    data={{\n        nodes: [\n            { 'id': 0 },\n            { 'id': 1 },\n            { 'id': 2 },\n            { 'id': 3 },\n        ],\n        links: [\n            { 'source': 0, 'target': 1 },\n            { 'source': 0, 'target': 2 },\n            { 'source': 2, 'target': 3 }\n        ]\n    }}\n/>\n")))}v.isMDXComponent=!0}}]);