"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8627],{603905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return f}});var r=t(202784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(t),f=o,m=p["".concat(u,".").concat(f)]||p[f]||s[f]||l;return t?r.createElement(m,a(a({ref:n},d),{},{components:t})):r.createElement(m,a({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=p;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},973356:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var r=t(487462),o=t(263366),l=(t(202784),t(603905)),a=["components"],i={id:"revealer",title:"Revealer",sidebar_label:"Revealer"},u=void 0,c={unversionedId:"revealer",id:"revealer",title:"Revealer",description:"Een ISLE component die docenten kunnen gebruiken om selectief de inhoud van kinderen te onthullen of te verbergen aan alle leerlingen tijdens de les.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/revealer.md",sourceDirName:".",slug:"/revealer",permalink:"/nl/docs/revealer",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/revealer.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21-2-2021",frontMatter:{id:"revealer",title:"Revealer",sidebar_label:"Revealer"},sidebar:"docs",previous:{title:"Language",permalink:"/nl/docs/language"},next:{title:"Runner",permalink:"/nl/docs/runner"}},d=[{value:"Opties",id:"opties",children:[],level:2},{value:"Voorbeelden",id:"voorbeelden",children:[],level:2}],s={toc:d};function p(e){var n=e.components,t=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Een ISLE component die docenten kunnen gebruiken om selectief de inhoud van kinderen te onthullen of te verbergen aan alle leerlingen tijdens de les."),(0,l.kt)("h2",{id:"opties"},"Opties"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"message")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|node)"),": bericht dat moet worden weergegeven wanneer de inhoud verborgen is. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"show")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": bepaalt of er in eerste instantie kinderelementen moeten worden weergegeven. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,l.kt)("h2",{id:"voorbeelden"},"Voorbeelden"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Revealer\n        id="mudgelove"\n    >\n        <div>\n            <h3>Content that will be revealed.</h3>\n        </div>\n</Revealer>\n')))}p.isMDXComponent=!0}}]);