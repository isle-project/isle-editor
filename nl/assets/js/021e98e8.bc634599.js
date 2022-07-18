"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[18710],{603905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(202784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(t),d=o,m=f["".concat(u,".").concat(d)]||f[d]||s[d]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},360521:function(e,n,t){t.r(n),t.d(n,{assets:function(){return v},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return f},metadata:function(){return m},toc:function(){return b}});var r=t(603905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,s=(e,n)=>{for(var t in n||(n={}))u.call(n,t)&&p(e,t,n[t]);if(l)for(var t of l(n))c.call(n,t)&&p(e,t,n[t]);return e};const f={id:"runner",title:"Runner",sidebar_label:"Runner"},d=void 0,m={unversionedId:"runner",id:"runner",title:"Runner",description:"Het lopercomponent voert een geleverde functie eenmalig of met een bepaalde tussenpoos uit.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/runner.md",sourceDirName:".",slug:"/runner",permalink:"/nl/docs/runner",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/runner.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"22 feb. 2021",frontMatter:{id:"runner",title:"Runner",sidebar_label:"Runner"},sidebar:"docs",previous:{title:"Revealer",permalink:"/nl/docs/revealer"},next:{title:"Timer",permalink:"/nl/docs/timer"}},v={},b=[{value:"Opties",id:"opties",level:2},{value:"Voorbeelden",id:"voorbeelden",level:2}],g={toc:b};function y(e){var n,t=e,{components:o}=t,p=((e,n)=>{var t={};for(var r in e)u.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&l)for(var r of l(e))n.indexOf(r)<0&&c.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=s(s({},g),p),a(n,i({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Het lopercomponent voert een geleverde functie eenmalig of met een bepaalde tussenpoos uit."),(0,r.kt)("h2",s({},{id:"opties"}),"Opties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"active")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controleert of de loper actief moet zijn. Bij activering wordt de ",(0,r.kt)("inlineCode",{parentName:"li"},"onEvaluate")," functie aangeroepen in het gegeven interval (of eenmalig). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"interval")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": aantal milliseconden tussen aanroepingen van ",(0,r.kt)("inlineCode",{parentName:"li"},"onEvaluate"),". Als er geen interval is ingesteld, wordt de functie slechts \xe9\xe9n keer aangeroepen. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onEvaluate")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": in te roepen functie. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onEvaluate() {}"),".")),(0,r.kt)("h2",s({},{id:"voorbeelden"}),"Voorbeelden"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Runner\n    interval={2000}\n    onEvaluate={() => { console.log( 'Two seconds have passed...' ); }}\n/>\n")))}y.isMDXComponent=!0}}]);