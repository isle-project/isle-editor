"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[38659],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(202784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},793006:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return v},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return y}});var r=n(603905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&p(e,n,t[n]);return e};const d={id:"sotu",title:"State of the Union Speeches",sidebar_label:"State of the Union Speeches"},f=void 0,m={unversionedId:"learn/sotu",id:"learn/sotu",title:"State of the Union Speeches",description:"Componente di apprendimento per esplorare i discorsi sullo stato dell'Unione dei presidenti degli Stati Uniti.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/learn/sotu.md",sourceDirName:"learn",slug:"/learn/sotu",permalink:"/it/docs/learn/sotu",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/sotu.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"22 feb 2021",frontMatter:{id:"sotu",title:"State of the Union Speeches",sidebar_label:"State of the Union Speeches"},sidebar:"docs",previous:{title:"Networks",permalink:"/it/docs/learn/networks"},next:{title:"Standardization",permalink:"/it/docs/learn/standardize"}},b={},y=[{value:"Opzioni",id:"opzioni",level:2},{value:"Esempi",id:"esempi",level:2}],O={toc:y};function v(e){var t,n=e,{components:o}=n,p=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},O),p),i(t,a({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Componente di apprendimento per esplorare i discorsi sullo stato dell'Unione dei presidenti degli Stati Uniti."),(0,r.kt)("h2",u({},{id:"opzioni"}),"Opzioni"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"questions")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<(node|element)>"),": una serie di domande. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,r.kt)("h2",u({},{id:"esempi"}),"Esempi"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LearnSOTU />\n")))}v.isMDXComponent=!0}}]);