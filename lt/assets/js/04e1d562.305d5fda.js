"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[96649],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(202784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},566707:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return y}});var r=n(603905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&c(e,n,t[n]);return e};const d={id:"network-plot",title:"NetworkPlot",sidebar_label:"NetworkPlot"},m=void 0,f={unversionedId:"plots/network-plot",id:"plots/network-plot",title:"NetworkPlot",description:"d3 pagr\u012fstas tinklo sklypas.",source:"@site/i18n/lt/docusaurus-plugin-content-docs/current/plots/network-plot.md",sourceDirName:"plots",slug:"/plots/network-plot",permalink:"/lt/docs/plots/network-plot",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/network-plot.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021-06-01",frontMatter:{id:"network-plot",title:"NetworkPlot",sidebar_label:"NetworkPlot"},sidebar:"docs",previous:{title:"Mosaic Plot",permalink:"/lt/docs/plots/mosaicplot"},next:{title:"Pie Chart",permalink:"/lt/docs/plots/piechart"}},k={},y=[{value:"Parinktys",id:"parinktys",level:2},{value:"Pavyzd\u017eiai",id:"pavyzd\u017eiai",level:2}],b={toc:y};function v(e){var t,n=e,{components:o}=n,c=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},b),c),i(t,a({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"d3 pagr\u012fstas tinklo sklypas."),(0,r.kt)("h2",u({},{id:"parinktys"}),"Parinktys"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"{nodes,links} (required)"),": objektas su ",(0,r.kt)("inlineCode",{parentName:"li"},"mazgais")," ir ",(0,r.kt)("inlineCode",{parentName:"li"},"at\u0161akomis"),"; ",(0,r.kt)("inlineCode",{parentName:"li"},"mazgai")," tur\u0117t\u0173 b\u016bti element\u0173 masyvas su savybe ",(0,r.kt)("inlineCode",{parentName:"li"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"at\u0161akos")," - objekt\u0173 masyvas su elementais, turin\u010diais ",(0,r.kt)("inlineCode",{parentName:"li"},"\u0161altinio")," ir ",(0,r.kt)("inlineCode",{parentName:"li"},"tikslo")," ID. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"width")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": sklypo plotis (px). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"900"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"height")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": sklypo auk\u0161tis (px). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"600"),".")),(0,r.kt)("h2",u({},{id:"pavyzd\u017eiai"}),"Pavyzd\u017eiai"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<NetworkPlot\n    width={400}\n    height={400}\n    data={{\n        nodes: [\n            { 'id': 0 },\n            { 'id': 1 },\n            { 'id': 2 },\n            { 'id': 3 },\n        ],\n        links: [\n            { 'source': 0, 'target': 1 },\n            { 'source': 0, 'target': 2 },\n            { 'source': 2, 'target': 3 }\n        ]\n    }}\n/>\n")))}v.isMDXComponent=!0}}]);