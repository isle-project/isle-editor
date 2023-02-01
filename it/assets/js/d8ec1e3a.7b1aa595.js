"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62460],{603905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return b}});var n=r(202784);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=i,b=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(b,a(a({ref:t},c),{},{components:r})):n.createElement(b,a({ref:t},c))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},970065:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return d},metadata:function(){return b},toc:function(){return y}});var n=r(603905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&c(e,r,t[r]);return e};const d={id:"distribution-chisquare",title:"Chi-squared Distribution",sidebar_label:"Chi-squared Distribution"},m=void 0,b={unversionedId:"learn/distribution-chisquare",id:"learn/distribution-chisquare",title:"Chi-squared Distribution",description:"Un componente di apprendimento per il calcolo delle probabilit\xe0 di una distribuzione chi-squared.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/learn/distribution-chisquare.md",sourceDirName:"learn",slug:"/learn/distribution-chisquare",permalink:"/it/docs/learn/distribution-chisquare",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-chisquare.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"22 feb 2021",frontMatter:{id:"distribution-chisquare",title:"Chi-squared Distribution",sidebar_label:"Chi-squared Distribution"},sidebar:"docs",previous:{title:"Binomial Distribution",permalink:"/it/docs/learn/distribution-binomial"},next:{title:"Exponential Distribution",permalink:"/it/docs/learn/distribution-exponential"}},f={},y=[{value:"Opzioni",id:"opzioni",level:2},{value:"Esempi",id:"esempi",level:2}],O={toc:y};function v(e){var t,r=e,{components:i}=r,c=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},O),c),o(t,a({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Un componente di apprendimento per il calcolo delle probabilit\xe0 di una distribuzione chi-squared."),(0,n.kt)("h2",p({},{id:"opzioni"}),"Opzioni"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"step")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(number|string)"),": dimensione del passo dell'ingresso di scorrimento. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"0.01"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"maxDF")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": massimo grado di libert\xe0 che pu\xf2 essere scelto nel campo d'immissione. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"50"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"minDF")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": gradi minimi di libert\xe0 che possono essere scelti nel campo di inserimento. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"style")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": Stili in linea CSS. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,n.kt)("h2",p({},{id:"esempi"}),"Esempi"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LearnChisquareDistribution />\n")))}v.isMDXComponent=!0}}]);