"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2156],{603905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(202784);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=i,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},442060:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return f},default:function(){return g},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return b}});var n=r(603905),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&u(e,r,t[r]);return e};const d={id:"chi2",title:"Chi-square Independence Test",sidebar_label:"Chi-square Independence Test"},f=void 0,m={unversionedId:"tests/chi2",id:"tests/chi2",title:"Chi-square Independence Test",description:"Chi-n\xe9gyzet f\xfcggetlens\xe9gvizsg\xe1lat.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/tests/chi2.md",sourceDirName:"tests",slug:"/tests/chi2",permalink:"/hu/docs/tests/chi2",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tests/chi2.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021. j\xfan. 1.",frontMatter:{id:"chi2",title:"Chi-square Independence Test",sidebar_label:"Chi-square Independence Test"},sidebar:"docs",previous:{title:"ANOVA",permalink:"/hu/docs/tests/anova"},next:{title:"Correlation Test",permalink:"/hu/docs/tests/corrtest"}},v={},b=[{value:"Opci\xf3k",id:"opci\xf3k",level:2},{value:"P\xe9ld\xe1k",id:"p\xe9ld\xe1k",level:2}],y={toc:b};function g(e){var t,r=e,{components:i}=r,u=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},y),u),a(t,o({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Chi-n\xe9gyzet f\xfcggetlens\xe9gvizsg\xe1lat."),(0,n.kt)("h2",p({},{id:"opci\xf3k"}),"Opci\xf3k"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"data")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object (required)"),": \xe9rt\xe9kt\xe1bl\xe1k objektuma. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"var1")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": az els\u0151 v\xe1ltoz\xf3 neve. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"var2")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": a m\xe1sodik v\xe1ltoz\xf3 neve. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,n.kt)("h2",p({},{id:"p\xe9ld\xe1k"}),"P\xe9ld\xe1k"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Chi2Test\n    data={heartdisease} \n    var1="Drugs"\n    var2="Complications"\n/>\n')))}g.isMDXComponent=!0}}]);