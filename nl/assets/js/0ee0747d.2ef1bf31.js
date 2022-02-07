"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5755],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(202784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(n),m=o,f=s["".concat(c,".").concat(m)]||s[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},438915:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return s}});var r=n(487462),o=n(263366),a=(n(202784),n(603905)),i=["components"],l={id:"recorder",title:"Recorder",sidebar_label:"Recorder"},c=void 0,d={unversionedId:"recorder",id:"recorder",title:"Recorder",description:"Een ISLE-component voor het opnemen van audio, scherm en video.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/recorder.md",sourceDirName:".",slug:"/recorder",permalink:"/nl/docs/recorder",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/recorder.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633715852,formattedLastUpdatedAt:"8-10-2021",frontMatter:{id:"recorder",title:"Recorder",sidebar_label:"Recorder"},sidebar:"docs",previous:{title:"QR Code",permalink:"/nl/docs/qrcode"},next:{title:"Seal",permalink:"/nl/docs/seal"}},p=[{value:"Opties",id:"opties",children:[],level:2},{value:"Voorbeelden",id:"voorbeelden",children:[],level:2}],u={toc:p};function s(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Een ISLE-component voor het opnemen van audio, scherm en video."),(0,a.kt)("h2",{id:"opties"},"Opties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"audio")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": geeft aan of het geluid moet worden opgenomen. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"camera")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": geeft aan of de webcam moet worden opgenomen. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"screen")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": geeft aan of het scherm moet worden vastgelegd. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"autostart")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": geeft aan of de opname onmiddellijk moet beginnen. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"downloadable")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": geeft aan of gebruikers in staat moeten zijn om de opname te downloaden. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"uploadable")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": geeft aan of gebruikers in staat moeten zijn om de opname te uploaden naar de server. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"bitsPerSecond")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": bits per seconde. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"1280000"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline-stijlen. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,a.kt)("h2",{id:"voorbeelden"},"Voorbeelden"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Recorder \n    audio\n    screen\n    downloadable\n/>\n")))}s.isMDXComponent=!0}}]);