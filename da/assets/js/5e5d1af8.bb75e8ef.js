"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[76813],{603905:function(e,r,n){n.d(r,{Zo:function(){return d},kt:function(){return f}});var t=n(202784);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=t.createContext({}),c=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},d=function(e){var r=c(e.components);return t.createElement(u.Provider,{value:r},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,f=s["".concat(u,".").concat(m)]||s[m]||p[m]||i;return n?t.createElement(f,l(l({ref:r},d),{},{components:n})):t.createElement(f,l({ref:r},d))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in r)hasOwnProperty.call(r,u)&&(o[u]=r[u]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},874299:function(e,r,n){n.r(r),n.d(r,{assets:function(){return b},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return p},metadata:function(){return f},toc:function(){return g}});var t=n(603905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,r,n)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,s=(e,r)=>{for(var n in r||(r={}))u.call(r,n)&&d(e,n,r[n]);if(o)for(var n of o(r))c.call(r,n)&&d(e,n,r[n]);return e};const p={id:"venn-diagram-builder",title:"Venn Diagram Builder",sidebar_label:"Venn Diagram Builder"},m=void 0,f={unversionedId:"learn/venn-diagram-builder",id:"learn/venn-diagram-builder",title:"Venn Diagram Builder",description:"En Venn-diagramm builder.",source:"@site/i18n/da/docusaurus-plugin-content-docs/current/learn/venn-diagram-builder.md",sourceDirName:"learn",slug:"/learn/venn-diagram-builder",permalink:"/da/docs/learn/venn-diagram-builder",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/venn-diagram-builder.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. jun. 2021",frontMatter:{id:"venn-diagram-builder",title:"Venn Diagram Builder",sidebar_label:"Venn Diagram Builder"},sidebar:"docs",previous:{title:"Statistical Models",permalink:"/da/docs/learn/statistical-models"},next:{title:"Word Venn Diagram",permalink:"/da/docs/learn/word-venn-diagram"}},b={},g=[{value:"Indstillinger",id:"indstillinger",level:2},{value:"Eksempler",id:"eksempler",level:2}],v={toc:g};function y(e){var r,n=e,{components:a}=n,d=((e,r)=>{var n={};for(var t in e)u.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&o)for(var t of o(e))r.indexOf(t)<0&&c.call(e,t)&&(n[t]=e[t]);return n})(n,["components"]);return(0,t.kt)("wrapper",(r=s(s({},v),d),i(r,l({components:a,mdxType:"MDXLayout"}))),(0,t.kt)("p",null,"En Venn-diagramm builder."),(0,t.kt)("h2",s({},{id:"indstillinger"}),"Indstillinger"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"nobs")," | ",(0,t.kt)("inlineCode",{parentName:"li"},"number"),": samlet antal observationer. Default: ",(0,t.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"three")," | ",(0,t.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollerer, om der skal vises tre cirkler. Default: ",(0,t.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,t.kt)("h2",s({},{id:"eksempler"}),"Eksempler"),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LearnVennDiagramBuilder />\n")))}y.isMDXComponent=!0}}]);