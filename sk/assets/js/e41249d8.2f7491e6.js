"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[38777],{603905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(202784);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=i,b=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(b,a(a({ref:t},c),{},{components:r})):n.createElement(b,a({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},942611:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return f},default:function(){return k},frontMatter:function(){return d},metadata:function(){return b},toc:function(){return v}});var n=r(603905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&c(e,r,t[r]);return e};const d={id:"distribution-t",title:"Student's t Distribution",sidebar_label:"Student's t Distribution"},f=void 0,b={unversionedId:"learn/distribution-t",id:"learn/distribution-t",title:"Student's t Distribution",description:"V\xfdu\u010dbov\xe1 zlo\u017eka na v\xfdpo\u010det pravdepodobnost\xed Studentovho t rozdelenia.",source:"@site/i18n/sk/docusaurus-plugin-content-docs/current/learn/distribution-t.md",sourceDirName:"learn",slug:"/learn/distribution-t",permalink:"/sk/docs/learn/distribution-t",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-t.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. 6. 2021",frontMatter:{id:"distribution-t",title:"Student's t Distribution",sidebar_label:"Student's t Distribution"},sidebar:"docs",previous:{title:"Poisson Distribution",permalink:"/sk/docs/learn/distribution-poisson"},next:{title:"Continuous Uniform Distribution",permalink:"/sk/docs/learn/distribution-uniform"}},m={},v=[{value:"Mo\u017enosti",id:"mo\u017enosti",level:2},{value:"Pr\xedklady",id:"pr\xedklady",level:2}],y={toc:v};function k(e){var t,r=e,{components:i}=r,c=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},y),c),o(t,a({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"V\xfdu\u010dbov\xe1 zlo\u017eka na v\xfdpo\u010det pravdepodobnost\xed Studentovho t rozdelenia."),(0,n.kt)("h2",p({},{id:"mo\u017enosti"}),"Mo\u017enosti"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"step")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(number|string)"),": ve\u013ekos\u0165 kroku rolovacieho vstupu. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"0.01"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"quantile")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": \u010di sa m\xe1 zobrazi\u0165 karta na v\xfdpo\u010det distribu\u010dn\xfdch kvantilov. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"style")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": Riadkov\xe9 \u0161t\xfdly CSS. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,n.kt)("h2",p({},{id:"pr\xedklady"}),"Pr\xedklady"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LearnTDistribution />\n")))}k.isMDXComponent=!0}}]);