"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91611],{603905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(202784);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),m=i,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},378557:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return y}});var n=r(603905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&p(e,r,t[r]);if(c)for(var r of c(t))u.call(t,r)&&p(e,r,t[r]);return e};const d={id:"distribution-hypergeometric",title:"Hypergeometric Distribution",sidebar_label:"Hypergeometric Distribution"},m=void 0,f={unversionedId:"learn/distribution-hypergeometric",id:"learn/distribution-hypergeometric",title:"Hypergeometric Distribution",description:"Un componente de aprendizaje para calcular las probabilidades de una distribuci\xf3n hipergeom\xe9trica.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/learn/distribution-hypergeometric.md",sourceDirName:"learn",slug:"/learn/distribution-hypergeometric",permalink:"/es/docs/learn/distribution-hypergeometric",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-hypergeometric.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"22 feb 2021",frontMatter:{id:"distribution-hypergeometric",title:"Hypergeometric Distribution",sidebar_label:"Hypergeometric Distribution"},sidebar:"docs",previous:{title:"Geometric Distribution",permalink:"/es/docs/learn/distribution-geometric"},next:{title:"Negative Binomial Distribution",permalink:"/es/docs/learn/distribution-negative-binomial"}},b={},y=[{value:"Opciones",id:"opciones",level:2},{value:"Ejemplos",id:"ejemplos",level:2}],g={toc:y};function v(e){var t,r=e,{components:i}=r,p=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},g),p),o(t,a({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Un componente de aprendizaje para calcular las probabilidades de una distribuci\xf3n hipergeom\xe9trica."),(0,n.kt)("h2",s({},{id:"opciones"}),"Opciones"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"style")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": Estilos en l\xednea CSS. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,n.kt)("h2",s({},{id:"ejemplos"}),"Ejemplos"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LearnHypergeometricDistribution />\n")))}v.isMDXComponent=!0}}]);