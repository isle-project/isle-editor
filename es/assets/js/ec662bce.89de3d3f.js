"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21438],{603905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(202784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},771441:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return O},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return v}});var n=r(603905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&s(e,r,t[r]);return e};const d={id:"expire",title:"Expire",sidebar_label:"Expire"},f=void 0,m={unversionedId:"expire",id:"expire",title:"Expire",description:"El componente de caducidad har\xe1 que todos sus hijos se vuelvan invisibles despu\xe9s de un tiempo determinado.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/expire.md",sourceDirName:".",slug:"/expire",permalink:"/es/docs/expire",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/expire.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614117783,formattedLastUpdatedAt:"23 feb 2021",frontMatter:{id:"expire",title:"Expire",sidebar_label:"Expire"},sidebar:"docs",previous:{title:"Data Sampler",permalink:"/es/docs/data-sampler"},next:{title:"Generator",permalink:"/es/docs/generator"}},b={},v=[{value:"Opciones",id:"opciones",level:2},{value:"Ejemplos",id:"ejemplos",level:2}],y={toc:v};function O(e){var t,r=e,{components:o}=r,s=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},y),s),i(t,a({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"El componente de caducidad har\xe1 que todos sus hijos se vuelvan invisibles despu\xe9s de un tiempo determinado."),(0,n.kt)("h2",u({},{id:"opciones"}),"Opciones"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"active")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": controla si el contador debe estar activo. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"delay")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": n\xfamero de milisegundos antes de que el componente desaparezca. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"1000"),".")),(0,n.kt)("h2",u({},{id:"ejemplos"}),"Ejemplos"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Expire>\n    <span>When active, I will disappear after one second</span>\n</Expire>\n")))}O.isMDXComponent=!0}}]);