"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15197],{603905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(202784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,m=u["".concat(p,".").concat(d)]||u[d]||f[d]||a;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},159864:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return d},default:function(){return O},frontMatter:function(){return f},metadata:function(){return m},toc:function(){return v}});var n=r(603905),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&s(e,r,t[r]);return e};const f={id:"qqplot",title:"QQ Plot",sidebar_label:"QQ Plot"},d=void 0,m={unversionedId:"plots/qqplot",id:"plots/qqplot",title:"QQ Plot",description:"Fonction de comparaison utilis\xe9e pour trier les valeurs par ordre croissant.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/plots/qqplot.md",sourceDirName:"plots",slug:"/plots/qqplot",permalink:"/fr/docs/plots/qqplot",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/qqplot.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"22 f\xe9vr. 2021",frontMatter:{id:"qqplot",title:"QQ Plot",sidebar_label:"QQ Plot"},sidebar:"docs",previous:{title:"Pie Chart",permalink:"/fr/docs/plots/piechart"},next:{title:"Scatter Plot",permalink:"/fr/docs/plots/scatterplot"}},b={},v=[{value:"Options",id:"options",level:2},{value:"Exemples",id:"exemples",level:2}],y={toc:v};function O(e){var t,r=e,{components:o}=r,s=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},y),s),a(t,l({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Fonction de comparaison utilis\xe9e pour trier les valeurs par ordre croissant."),(0,n.kt)("h2",u({},{id:"options"}),"Options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"data")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object (required)"),": les tableaux d'objets de valeur. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"variable")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string (required)"),": variable \xe0 afficher. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,n.kt)("h2",u({},{id:"exemples"}),"Exemples"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<QQPlot \n    data={heartdisease} \n    variable="Age"\n/>\n')))}O.isMDXComponent=!0}}]);