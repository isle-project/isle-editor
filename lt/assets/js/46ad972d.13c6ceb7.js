"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7417],{603905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(202784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},208981:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var n=r(487462),a=r(263366),i=(r(202784),r(603905)),o=["components"],l={id:"recorder",title:"Recorder",sidebar_label:"Recorder"},u=void 0,c={unversionedId:"recorder",id:"recorder",title:"Recorder",description:"ISLE komponentas, skirtas garso, ekrano ir vaizdo \u012fra\u0161ymui.",source:"@site/i18n/lt/docusaurus-plugin-content-docs/current/recorder.md",sourceDirName:".",slug:"/recorder",permalink:"/lt/docs/recorder",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/recorder.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633715852,formattedLastUpdatedAt:"2021-10-08",frontMatter:{id:"recorder",title:"Recorder",sidebar_label:"Recorder"},sidebar:"docs",previous:{title:"QR Code",permalink:"/lt/docs/qrcode"},next:{title:"Seal",permalink:"/lt/docs/seal"}},s=[{value:"Parinktys",id:"parinktys",children:[],level:2},{value:"Pavyzd\u017eiai",id:"pavyzd\u017eiai",children:[],level:2}],d={toc:s};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ISLE komponentas, skirtas garso, ekrano ir vaizdo \u012fra\u0161ymui."),(0,i.kt)("h2",{id:"parinktys"},"Parinktys"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"audio")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": nurodo, ar tur\u0117t\u0173 b\u016bti \u012fra\u0161omas garsas.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"camera")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": nurodo, ar turi b\u016bti \u012fra\u0161oma interneto kamera.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"screen")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": nurodo, ar ekranas turi b\u016bti u\u017efiksuotas.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"autostart")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": nurodo, ar \u012fra\u0161ymas tur\u0117t\u0173 b\u016bti prad\u0117tas nedelsiant.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"downloadable")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": nurodo, ar naudotojai tur\u0117t\u0173 gal\u0117ti atsisi\u0173sti \u012fra\u0161\u0105.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"uploadable")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": nurodo, ar naudotojai tur\u0117t\u0173 gal\u0117ti \u012fkelti \u012fra\u0161\u0105 \u012f server\u012f.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"bitsPerSecond")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": bit\u0173 per sekund\u0119. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"1280000"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": CSS eilut\u0117s stiliai. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,i.kt)("h2",{id:"pavyzd\u017eiai"},"Pavyzd\u017eiai"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Recorder \n    audio\n    screen\n    downloadable\n/>\n")))}p.isMDXComponent=!0}}]);