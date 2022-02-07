"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8481],{603905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(202784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),m=a,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},15177:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var n=r(487462),a=r(263366),i=(r(202784),r(603905)),o=["components"],l={id:"recorder",title:"Recorder",sidebar_label:"Recorder"},c=void 0,u={unversionedId:"recorder",id:"recorder",title:"Recorder",description:"O component\u0103 ISLE pentru \xeenregistrarea audio, a ecranului \u0219i video.",source:"@site/i18n/ro/docusaurus-plugin-content-docs/current/recorder.md",sourceDirName:".",slug:"/recorder",permalink:"/ro/docs/recorder",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/recorder.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633715852,formattedLastUpdatedAt:"08.10.2021",frontMatter:{id:"recorder",title:"Recorder",sidebar_label:"Recorder"},sidebar:"docs",previous:{title:"QR Code",permalink:"/ro/docs/qrcode"},next:{title:"Seal",permalink:"/ro/docs/seal"}},p=[{value:"Op\u021biuni",id:"op\u021biuni",children:[],level:2},{value:"Exemple",id:"exemple",children:[],level:2}],d={toc:p};function s(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"O component\u0103 ISLE pentru \xeenregistrarea audio, a ecranului \u0219i video."),(0,i.kt)("h2",{id:"op\u021biuni"},"Op\u021biuni"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"audio")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": indic\u0103 dac\u0103 trebuie \xeenregistrat audio. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"camera")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": indic\u0103 dac\u0103 camera web trebuie \xeenregistrat\u0103. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"screen")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": indic\u0103 dac\u0103 ecranul trebuie s\u0103 fie capturat. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"autostart")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": indic\u0103 dac\u0103 \xeenregistrarea trebuie s\u0103 \xeenceap\u0103 imediat. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"downloadable")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": indic\u0103 dac\u0103 utilizatorii ar trebui s\u0103 poat\u0103 desc\u0103rca \xeenregistrarea. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"uploadable")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": indic\u0103 dac\u0103 utilizatorii ar trebui s\u0103 poat\u0103 \xeenc\u0103rca \xeenregistrarea pe server. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"bitsPerSecond")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": bi\u021bi pe secund\u0103. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"1280000"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": Stiluri inline CSS. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,i.kt)("h2",{id:"exemple"},"Exemple"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Recorder \n    audio\n    screen\n    downloadable\n/>\n")))}s.isMDXComponent=!0}}]);