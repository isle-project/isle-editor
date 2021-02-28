(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{160:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),i=r(7),o=(r(0),r(409)),a={id:"qqplot",title:"QQ Plot",sidebar_label:"QQ Plot"},l={unversionedId:"plots/qqplot",id:"plots/qqplot",isDocsHomePage:!1,title:"QQ Plot",description:"Funzione di comparazione utilizzata per ordinare i valori in ordine crescente.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/plots/qqplot.md",slug:"/plots/qqplot",permalink:"/it/docs/plots/qqplot",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/qqplot.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"QQ Plot",sidebar:"docs",previous:{title:"Pie Chart",permalink:"/it/docs/plots/piechart"},next:{title:"Scatter Plot",permalink:"/it/docs/plots/scatterplot"}},c=[{value:"Opzioni",id:"opzioni",children:[]},{value:"Esempi",id:"esempi",children:[]}],p={toc:c};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Funzione di comparazione utilizzata per ordinare i valori in ordine crescente."),Object(o.b)("h2",{id:"opzioni"},"Opzioni"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"data")," | ",Object(o.b)("inlineCode",{parentName:"li"},"object (required)"),": oggetto delle matrici di valori. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"variable")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string (required)"),": variabile da visualizzare. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),".")),Object(o.b)("h2",{id:"esempi"},"Esempi"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<QQPlot \n    data={heartdisease} \n    variable="Age"\n/>\n')))}u.isMDXComponent=!0},409:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=i.a.createContext({}),u=function(e){var t=i.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),b=n,m=s["".concat(a,".").concat(b)]||s[b]||d[b]||o;return r?i.a.createElement(m,l(l({ref:t},p),{},{components:r})):i.a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);