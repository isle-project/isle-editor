"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[28627],{603905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return v}});var r=t(202784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(t),f=o,v=s["".concat(c,".").concat(f)]||s[f]||d[f]||a;return t?r.createElement(v,l(l({ref:n},p),{},{components:t})):r.createElement(v,l({ref:n},p))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},702543:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return d},metadata:function(){return v},toc:function(){return b}});var r=t(603905),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,s=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&p(e,t,n[t]);if(i)for(var t of i(n))u.call(n,t)&&p(e,t,n[t]);return e};const d={id:"revealer",title:"Revealer",sidebar_label:"Revealer"},f=void 0,v={unversionedId:"revealer",id:"revealer",title:"Revealer",description:"Een ISLE component die docenten kunnen gebruiken om selectief de inhoud van kinderen te onthullen of te verbergen aan alle leerlingen tijdens de les.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/revealer.md",sourceDirName:".",slug:"/revealer",permalink:"/nl/docs/revealer",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/revealer.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"22 feb. 2021",frontMatter:{id:"revealer",title:"Revealer",sidebar_label:"Revealer"},sidebar:"docs",previous:{title:"Language",permalink:"/nl/docs/language"},next:{title:"Runner",permalink:"/nl/docs/runner"}},m={},b=[{value:"Opties",id:"opties",level:2},{value:"Voorbeelden",id:"voorbeelden",level:2}],g={toc:b};function y(e){var n,t=e,{components:o}=t,p=((e,n)=>{var t={};for(var r in e)c.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&i)for(var r of i(e))n.indexOf(r)<0&&u.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=s(s({},g),p),a(n,l({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Een ISLE component die docenten kunnen gebruiken om selectief de inhoud van kinderen te onthullen of te verbergen aan alle leerlingen tijdens de les."),(0,r.kt)("h2",s({},{id:"opties"}),"Opties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"message")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": bericht dat moet worden weergegeven wanneer de inhoud verborgen is. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"show")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": bepaalt of er in eerste instantie kinderelementen moeten worden weergegeven. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,r.kt)("h2",s({},{id:"voorbeelden"}),"Voorbeelden"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Revealer\n        id="mudgelove"\n    >\n        <div>\n            <h3>Content that will be revealed.</h3>\n        </div>\n</Revealer>\n')))}y.isMDXComponent=!0}}]);