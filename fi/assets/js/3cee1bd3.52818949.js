"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[99619],{603905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(202784);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(r),m=i,d=f["".concat(p,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},300815:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return f},metadata:function(){return d},toc:function(){return y}});var n=r(603905),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&c(e,r,t[r]);return e};const f={id:"expire",title:"Expire",sidebar_label:"Expire"},m=void 0,d={unversionedId:"expire",id:"expire",title:"Expire",description:"Expire-komponentti saa kaikki sen lapset muuttumaan n\xe4kym\xe4tt\xf6miksi tietyn ajan kuluttua.",source:"@site/i18n/fi/docusaurus-plugin-content-docs/current/expire.md",sourceDirName:".",slug:"/expire",permalink:"/fi/docs/expire",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/expire.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. kes\xe4k. 2021",frontMatter:{id:"expire",title:"Expire",sidebar_label:"Expire"},sidebar:"docs",previous:{title:"Data Sampler",permalink:"/fi/docs/data-sampler"},next:{title:"Generator",permalink:"/fi/docs/generator"}},k={},y=[{value:"Vaihtoehdot",id:"vaihtoehdot",level:2},{value:"Esimerkkej\xe4",id:"esimerkkej\xe4",level:2}],b={toc:y};function v(e){var t,r=e,{components:i}=r,c=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},b),c),a(t,o({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Expire-komponentti saa kaikki sen lapset muuttumaan n\xe4kym\xe4tt\xf6miksi tietyn ajan kuluttua."),(0,n.kt)("h2",s({},{id:"vaihtoehdot"}),"Vaihtoehdot"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"active")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": valvoo, onko laskurin oltava aktiivinen. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"delay")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": millisekuntien m\xe4\xe4r\xe4 ennen komponentin katoamista. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"1000"),".")),(0,n.kt)("h2",s({},{id:"esimerkkej\xe4"}),"Esimerkkej\xe4"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Expire>\n    <span>When active, I will disappear after one second</span>\n</Expire>\n")))}v.isMDXComponent=!0}}]);