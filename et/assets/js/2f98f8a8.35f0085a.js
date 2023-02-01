"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40885],{603905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return v}});var n=r(202784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,v=p["".concat(u,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(v,l(l({ref:t},c),{},{components:r})):n.createElement(v,l({ref:t},c))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},553020:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return d},metadata:function(){return v},toc:function(){return b}});var n=r(603905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))s.call(t,r)&&c(e,r,t[r]);return e};const d={id:"revealer",title:"Revealer",sidebar_label:"Revealer"},f=void 0,v={unversionedId:"revealer",id:"revealer",title:"Revealer",description:"ISLE komponent, mida \xf5petajad v\xf5ivad kasutada selleks, et valikuliselt n\xe4idata v\xf5i varjata laste sisu k\xf5igile \xf5pilastele tunni ajal.",source:"@site/i18n/et/docusaurus-plugin-content-docs/current/revealer.md",sourceDirName:".",slug:"/revealer",permalink:"/et/docs/revealer",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/revealer.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. juuni 2021",frontMatter:{id:"revealer",title:"Revealer",sidebar_label:"Revealer"},sidebar:"docs",previous:{title:"Language",permalink:"/et/docs/language"},next:{title:"Runner",permalink:"/et/docs/runner"}},m={},b=[{value:"Valikud",id:"valikud",level:2},{value:"N\xe4ited",id:"n\xe4ited",level:2}],k={toc:b};function y(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},k),c),i(t,l({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"ISLE komponent, mida \xf5petajad v\xf5ivad kasutada selleks, et valikuliselt n\xe4idata v\xf5i varjata laste sisu k\xf5igile \xf5pilastele tunni ajal."),(0,n.kt)("h2",p({},{id:"valikud"}),"Valikud"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"message")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|node)"),": s\xf5num, mis kuvatakse, kui sisu on peidetud. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"show")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollib, kas esialgu kuvatakse lapselemendid. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,n.kt)("h2",p({},{id:"n\xe4ited"}),"N\xe4ited"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Revealer\n        id="mudgelove"\n    >\n        <div>\n            <h3>Content that will be revealed.</h3>\n        </div>\n</Revealer>\n')))}y.isMDXComponent=!0}}]);