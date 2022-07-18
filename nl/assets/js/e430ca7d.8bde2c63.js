"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87361],{603905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(202784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(r),f=o,m=s["".concat(p,".").concat(f)]||s[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},391352:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return O},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return v}});var n=r(603905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&u(e,r,t[r]);return e};const s={id:"expire",title:"Expire",sidebar_label:"Expire"},f=void 0,m={unversionedId:"expire",id:"expire",title:"Expire",description:"De vervaldagcomponent zal ervoor zorgen dat alle kinderen na een bepaalde tijd onzichtbaar worden.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/expire.md",sourceDirName:".",slug:"/expire",permalink:"/nl/docs/expire",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/expire.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614117783,formattedLastUpdatedAt:"23 feb. 2021",frontMatter:{id:"expire",title:"Expire",sidebar_label:"Expire"},sidebar:"docs",previous:{title:"Data Sampler",permalink:"/nl/docs/data-sampler"},next:{title:"Generator",permalink:"/nl/docs/generator"}},b={},v=[{value:"Opties",id:"opties",level:2},{value:"Voorbeelden",id:"voorbeelden",level:2}],y={toc:v};function O(e){var t,r=e,{components:o}=r,u=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=d(d({},y),u),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"De vervaldagcomponent zal ervoor zorgen dat alle kinderen na een bepaalde tijd onzichtbaar worden."),(0,n.kt)("h2",d({},{id:"opties"}),"Opties"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"active")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": controleert of de teller actief moet zijn. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"delay")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": aantal milliseconden voordat het onderdeel verdwijnt. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"1000"),".")),(0,n.kt)("h2",d({},{id:"voorbeelden"}),"Voorbeelden"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Expire>\n    <span>When active, I will disappear after one second</span>\n</Expire>\n")))}O.isMDXComponent=!0}}]);