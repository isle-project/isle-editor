"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1701],{603905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(202784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(t),f=a,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||i;return t?r.createElement(m,l(l({ref:n},p),{},{components:t})):r.createElement(m,l({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},877431:function(e,n,t){t.r(n),t.d(n,{assets:function(){return v},contentTitle:function(){return f},default:function(){return b},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return k}});var r=t(603905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,s=(e,n)=>{for(var t in n||(n={}))u.call(n,t)&&p(e,t,n[t]);if(o)for(var t of o(n))c.call(n,t)&&p(e,t,n[t]);return e};const d={id:"runner",title:"Runner",sidebar_label:"Runner"},f=void 0,m={unversionedId:"runner",id:"runner",title:"Runner",description:"Runner-komponenten udf\xf8rer en medf\xf8lgende funktion enten \xe9n gang eller med et givet interval.",source:"@site/i18n/da/docusaurus-plugin-content-docs/current/runner.md",sourceDirName:".",slug:"/runner",permalink:"/da/docs/runner",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/runner.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. jun. 2021",frontMatter:{id:"runner",title:"Runner",sidebar_label:"Runner"},sidebar:"docs",previous:{title:"Revealer",permalink:"/da/docs/revealer"},next:{title:"Timer",permalink:"/da/docs/timer"}},v={},k=[{value:"Indstillinger",id:"indstillinger",level:2},{value:"Eksempler",id:"eksempler",level:2}],g={toc:k};function b(e){var n,t=e,{components:a}=t,p=((e,n)=>{var t={};for(var r in e)u.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&o)for(var r of o(e))n.indexOf(r)<0&&c.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=s(s({},g),p),i(n,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Runner-komponenten udf\xf8rer en medf\xf8lgende funktion enten \xe9n gang eller med et givet interval."),(0,r.kt)("h2",s({},{id:"indstillinger"}),"Indstillinger"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"active")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollerer, om l\xf8beren skal v\xe6re aktiv. Ved aktivering kaldes funktionen ",(0,r.kt)("inlineCode",{parentName:"li"},"onEvaluate")," i det angivne interval (eller \xe9n gang). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"interval")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": antal millisekunder mellem kald af ",(0,r.kt)("inlineCode",{parentName:"li"},"onEvaluate"),". Hvis der ikke er angivet noget interval, p\xe5kaldes funktionen kun \xe9n gang. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onEvaluate")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": funktion, der skal p\xe5ber\xe5bes. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onEvaluate() {}"),".")),(0,r.kt)("h2",s({},{id:"eksempler"}),"Eksempler"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Runner\n    interval={2000}\n    onEvaluate={() => { console.log( 'Two seconds have passed...' ); }}\n/>\n")))}b.isMDXComponent=!0}}]);