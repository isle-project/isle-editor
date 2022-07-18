"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48574],{603905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(202784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||o;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},113016:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return v},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return y}});var n=r(603905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&d(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&d(e,r,t[r]);return e};const u={id:"standardize",title:"Standardization",sidebar_label:"Standardization"},f=void 0,m={unversionedId:"learn/standardize",id:"learn/standardize",title:"Standardization",description:"Componente de aprendizaje que explica el proceso de normalizaci\xf3n de los datos.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/learn/standardize.md",sourceDirName:"learn",slug:"/learn/standardize",permalink:"/es/docs/learn/standardize",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/standardize.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621312042,formattedLastUpdatedAt:"18 may 2021",frontMatter:{id:"standardize",title:"Standardization",sidebar_label:"Standardization"},sidebar:"docs",previous:{title:"State of the Union Speeches",permalink:"/es/docs/learn/sotu"},next:{title:"Statistical Models",permalink:"/es/docs/learn/statistical-models"}},b={},y=[{value:"Opciones",id:"opciones",level:2},{value:"Ejemplos",id:"ejemplos",level:2}],O={toc:y};function v(e){var t,r=e,{components:a}=r,d=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},O),d),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Componente de aprendizaje que explica el proceso de normalizaci\xf3n de los datos."),(0,n.kt)("h2",p({},{id:"opciones"}),"Opciones"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"showProbabilities")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": controla si se muestran las probabilidades. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"step")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(number|string)"),": tama\xf1o del paso de la entrada de desplazamiento. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"'any'"),".")),(0,n.kt)("h2",p({},{id:"ejemplos"}),"Ejemplos"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LearnStandardize />\n")))}v.isMDXComponent=!0}}]);