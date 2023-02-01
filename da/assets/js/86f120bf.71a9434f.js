"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[23506],{603905:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return m}});var t=n(202784);function l(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){l(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,l=function(e,r){if(null==e)return{};var n,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(l[n]=e[n]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=t.createContext({}),s=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=s(e.components);return t.createElement(u.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),f=l,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return n?t.createElement(m,i(i({ref:r},c),{},{components:n})):t.createElement(m,i({ref:r},c))}));function m(e,r){var n=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=f;var o={};for(var u in r)hasOwnProperty.call(r,u)&&(o[u]=r[u]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},351434:function(e,r,n){n.r(r),n.d(r,{assets:function(){return v},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return b}});var t=n(603905),l=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,r,n)=>r in e?l(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,d=(e,r)=>{for(var n in r||(r={}))u.call(r,n)&&c(e,n,r[n]);if(o)for(var n of o(r))s.call(r,n)&&c(e,n,r[n]);return e};const p={id:"revealer",title:"Revealer",sidebar_label:"Revealer"},f=void 0,m={unversionedId:"revealer",id:"revealer",title:"Revealer",description:"En ISLE-komponent, som underviserne kan bruge til at vise eller skjule b\xf8rns indhold for alle eleverne under undervisningen.",source:"@site/i18n/da/docusaurus-plugin-content-docs/current/revealer.md",sourceDirName:".",slug:"/revealer",permalink:"/da/docs/revealer",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/revealer.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. jun. 2021",frontMatter:{id:"revealer",title:"Revealer",sidebar_label:"Revealer"},sidebar:"docs",previous:{title:"Language",permalink:"/da/docs/language"},next:{title:"Runner",permalink:"/da/docs/runner"}},v={},b=[{value:"Indstillinger",id:"indstillinger",level:2},{value:"Eksempler",id:"eksempler",level:2}],g={toc:b};function y(e){var r,n=e,{components:l}=n,c=((e,r)=>{var n={};for(var t in e)u.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&o)for(var t of o(e))r.indexOf(t)<0&&s.call(e,t)&&(n[t]=e[t]);return n})(n,["components"]);return(0,t.kt)("wrapper",(r=d(d({},g),c),a(r,i({components:l,mdxType:"MDXLayout"}))),(0,t.kt)("p",null,"En ISLE-komponent, som underviserne kan bruge til at vise eller skjule b\xf8rns indhold for alle eleverne under undervisningen."),(0,t.kt)("h2",d({},{id:"indstillinger"}),"Indstillinger"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"message")," | ",(0,t.kt)("inlineCode",{parentName:"li"},"(string|node)"),": meddelelse, der skal vises, n\xe5r indholdet er skjult. Default: ",(0,t.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"show")," | ",(0,t.kt)("inlineCode",{parentName:"li"},"boolean"),": styrer, om der skal vises underordnede elementer til at begynde med. Default: ",(0,t.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,t.kt)("h2",d({},{id:"eksempler"}),"Eksempler"),(0,t.kt)("pre",null,(0,t.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Revealer\n        id="mudgelove"\n    >\n        <div>\n            <h3>Content that will be revealed.</h3>\n        </div>\n</Revealer>\n')))}y.isMDXComponent=!0}}]);