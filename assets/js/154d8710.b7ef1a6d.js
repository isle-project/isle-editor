"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9091],{603905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(202784);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(r),d=i,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},361090:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return s},toc:function(){return u},default:function(){return d}});var n=r(487462),i=r(263366),o=(r(202784),r(603905)),a=["components"],l={id:"expire",title:"Expire",sidebar_label:"Expire"},p=void 0,c={unversionedId:"expire",id:"expire",title:"Expire",description:"The expire component will cause all of its children to become invisible after a specified amount of time.",source:"@site/docs/expire.md",sourceDirName:".",slug:"/expire",permalink:"/docs/expire",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/expire.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614117783,formattedLastUpdatedAt:"2/23/2021",frontMatter:{id:"expire",title:"Expire",sidebar_label:"Expire"},sidebar:"docs",previous:{title:"Data Sampler",permalink:"/docs/data-sampler"},next:{title:"Generator",permalink:"/docs/generator"}},s={},u=[{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],f={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The expire component will cause all of its children to become invisible after a specified amount of time."),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"active")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": controls whether the counter should be active. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"delay")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),": number of milliseconds before component disappears. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"1000"),".")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Expire>\n    <span>When active, I will disappear after one second</span>\n</Expire>\n")))}d.isMDXComponent=!0}}]);