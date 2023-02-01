"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47890],{603905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(202784);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=i,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},694624:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return p},metadata:function(){return f},toc:function(){return k}});var n=r(603905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&c(e,r,t[r]);return e};const p={id:"distribution-geometric",title:"Geometric Distribution",sidebar_label:"Geometric Distribution"},d=void 0,f={unversionedId:"learn/distribution-geometric",id:"learn/distribution-geometric",title:"Geometric Distribution",description:"Oppimiskomponentti geometrisen jakauman todenn\xe4k\xf6isyyksien laskemiseen.",source:"@site/i18n/fi/docusaurus-plugin-content-docs/current/learn/distribution-geometric.md",sourceDirName:"learn",slug:"/learn/distribution-geometric",permalink:"/fi/docs/learn/distribution-geometric",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-geometric.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. kes\xe4k. 2021",frontMatter:{id:"distribution-geometric",title:"Geometric Distribution",sidebar_label:"Geometric Distribution"},sidebar:"docs",previous:{title:"Gamma Distribution",permalink:"/fi/docs/learn/distribution-gamma"},next:{title:"Hypergeometric Distribution",permalink:"/fi/docs/learn/distribution-hypergeometric"}},b={},k=[{value:"Vaihtoehdot",id:"vaihtoehdot",level:2},{value:"Esimerkkej\xe4",id:"esimerkkej\xe4",level:2}],y={toc:k};function g(e){var t,r=e,{components:i}=r,c=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},y),c),o(t,a({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Oppimiskomponentti geometrisen jakauman todenn\xe4k\xf6isyyksien laskemiseen."),(0,n.kt)("h2",m({},{id:"vaihtoehdot"}),"Vaihtoehdot"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"countTrials")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": asetetaan arvoksi true, jos sen sijaan, ett\xe4 lasketaan ep\xe4onnistumisten m\xe4\xe4r\xe4 ensimm\xe4iseen onnistumiseen asti, geometrisen jakauman satunnaismuuttuja m\xe4\xe4ritet\xe4\xe4n kokeiden m\xe4\xe4r\xe4ksi ensimm\xe4iseen onnistumiseen asti.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"step")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(number|string)"),": vierityssy\xf6tteen askelkoko. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"0.01"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"style")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": CSS-inline-tyylit. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,n.kt)("h2",m({},{id:"esimerkkej\xe4"}),"Esimerkkej\xe4"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LearnGeometricDistribution />\n")))}g.isMDXComponent=!0}}]);