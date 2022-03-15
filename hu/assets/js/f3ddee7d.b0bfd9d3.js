"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2937],{603905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(202784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},410517:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return u},toc:function(){return s},default:function(){return m}});var n=r(487462),a=r(263366),i=(r(202784),r(603905)),o=["components"],l={id:"expire",title:"Expire",sidebar_label:"Expire"},p=void 0,c={unversionedId:"expire",id:"expire",title:"Expire",description:"Az expire komponens hat\xe1s\xe1ra az \xf6sszes gyermeke egy megadott id\u0151 ut\xe1n l\xe1thatatlann\xe1 v\xe1lik.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/expire.md",sourceDirName:".",slug:"/expire",permalink:"/hu/docs/expire",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/expire.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021. 06. 01.",frontMatter:{id:"expire",title:"Expire",sidebar_label:"Expire"},sidebar:"docs",previous:{title:"Data Sampler",permalink:"/hu/docs/data-sampler"},next:{title:"Generator",permalink:"/hu/docs/generator"}},u={},s=[{value:"Opci\xf3k",id:"opci\xf3k",level:2},{value:"P\xe9ld\xe1k",id:"p\xe9ld\xe1k",level:2}],d={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Az expire komponens hat\xe1s\xe1ra az \xf6sszes gyermeke egy megadott id\u0151 ut\xe1n l\xe1thatatlann\xe1 v\xe1lik."),(0,i.kt)("h2",{id:"opci\xf3k"},"Opci\xf3k"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"active")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy a sz\xe1ml\xe1l\xf3 akt\xedv legyen-e. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"delay")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": az alkatr\xe9sz elt\u0171n\xe9se el\u0151tti milliszekundumok sz\xe1ma. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"1000"),".")),(0,i.kt)("h2",{id:"p\xe9ld\xe1k"},"P\xe9ld\xe1k"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Expire>\n    <span>When active, I will disappear after one second</span>\n</Expire>\n")))}m.isMDXComponent=!0}}]);