"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2593],{603905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(202784);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=i,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},481290:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return u},toc:function(){return s},default:function(){return f}});var n=r(487462),i=r(263366),o=(r(202784),r(603905)),a=["components"],l={id:"qqplot",title:"QQ Plot",sidebar_label:"QQ Plot"},p=void 0,c={unversionedId:"plots/qqplot",id:"plots/qqplot",title:"QQ Plot",description:"Funzione di comparazione utilizzata per ordinare i valori in ordine crescente.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/plots/qqplot.md",sourceDirName:"plots",slug:"/plots/qqplot",permalink:"/it/docs/plots/qqplot",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/qqplot.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21/2/2021",frontMatter:{id:"qqplot",title:"QQ Plot",sidebar_label:"QQ Plot"},sidebar:"docs",previous:{title:"Pie Chart",permalink:"/it/docs/plots/piechart"},next:{title:"Scatter Plot",permalink:"/it/docs/plots/scatterplot"}},u={},s=[{value:"Opzioni",id:"opzioni",level:2},{value:"Esempi",id:"esempi",level:2}],d={toc:s};function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Funzione di comparazione utilizzata per ordinare i valori in ordine crescente."),(0,o.kt)("h2",{id:"opzioni"},"Opzioni"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"data")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object (required)"),": oggetto delle matrici di valori. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"variable")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string (required)"),": variabile da visualizzare. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,o.kt)("h2",{id:"esempi"},"Esempi"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<QQPlot \n    data={heartdisease} \n    variable="Age"\n/>\n')))}f.isMDXComponent=!0}}]);