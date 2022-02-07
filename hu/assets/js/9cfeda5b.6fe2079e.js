"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5553],{603905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var a=t(202784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),f=r,d=p["".concat(s,".").concat(f)]||p[f]||g[f]||i;return t?a.createElement(d,l(l({ref:n},u),{},{components:t})):a.createElement(d,l({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},290112:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=t(487462),r=t(263366),i=(t(202784),t(603905)),l=["components"],o={id:"language",title:"Language",sidebar_label:"Language"},s=void 0,c={unversionedId:"language",id:"language",title:"Language",description:"Language component, which expects several language-specific tags (e.g., Language.Spanish) as its children. If a the component has as its child a language tag for the currently selected language, then its contents will be displayed. If no language-specific tag is available, the tag for the default language (as specified in the preamble of the ISLE lesson) or, if also not available, the first language-specific tag and its contents will be displayed.",source:"@site/docs/language.md",sourceDirName:".",slug:"/language",permalink:"/hu/docs/language",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/language.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614119449,formattedLastUpdatedAt:"2021. 02. 23.",frontMatter:{id:"language",title:"Language",sidebar_label:"Language"},sidebar:"docs",previous:{title:"Generator",permalink:"/hu/docs/generator"},next:{title:"Revealer",permalink:"/hu/docs/revealer"}},u=[{value:"Options",id:"options",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2}],g={toc:u};function p(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Language component, which expects several language-specific tags (e.g., Language.Spanish) as its children. If a the component has as its child a language tag for the currently selected language, then its contents will be displayed. If no language-specific tag is available, the tag for the default language (as specified in the preamble of the ISLE lesson) or, if also not available, the first language-specific tag and its contents will be displayed."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,"No properties available."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Language>\n\n<Language.English>\n\n# This is an ISLE activity.\n\n</Language.English>\n\n<Language.Spanish>\n\n# Esta es una actividad de la ISLE.\n\n</Language.Spanish>\n\n<Language.German>\n\n# Dies ist eine ISLE-Aktivit\xe4t.\n\n</Language.German>\n\n<Language.Chinese>\n\n# \u8fd9\u662f\u4e00\u9879ISLE\u6d3b\u52a8\u3002\n\n</Language.Chinese>\n\n</Language>\n")))}p.isMDXComponent=!0}}]);