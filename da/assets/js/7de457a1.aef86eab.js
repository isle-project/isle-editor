"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[77479],{603905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(202784);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(r),f=i,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},747499:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return k},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return g}});var n=r(603905),i=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))s.call(t,r)&&c(e,r,t[r]);return e};const d={id:"distribution-chisquare",title:"Chi-squared Distribution",sidebar_label:"Chi-squared Distribution"},f=void 0,m={unversionedId:"learn/distribution-chisquare",id:"learn/distribution-chisquare",title:"Chi-squared Distribution",description:"En l\xe6ringskomponent til beregning af sandsynligheder for en chi-kvadratfordeling.",source:"@site/i18n/da/docusaurus-plugin-content-docs/current/learn/distribution-chisquare.md",sourceDirName:"learn",slug:"/learn/distribution-chisquare",permalink:"/da/docs/learn/distribution-chisquare",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-chisquare.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. jun. 2021",frontMatter:{id:"distribution-chisquare",title:"Chi-squared Distribution",sidebar_label:"Chi-squared Distribution"},sidebar:"docs",previous:{title:"Binomial Distribution",permalink:"/da/docs/learn/distribution-binomial"},next:{title:"Exponential Distribution",permalink:"/da/docs/learn/distribution-exponential"}},b={},g=[{value:"Indstillinger",id:"indstillinger",level:2},{value:"Eksempler",id:"eksempler",level:2}],y={toc:g};function k(e){var t,r=e,{components:i}=r,c=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},y),c),a(t,l({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"En l\xe6ringskomponent til beregning af sandsynligheder for en chi-kvadratfordeling."),(0,n.kt)("h2",p({},{id:"indstillinger"}),"Indstillinger"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"step")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(number|string)"),": trinst\xf8rrelse for rulleindgangen. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"0.01"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"maxDF")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": maksimale frihedsgrader, der kan v\xe6lges i inputfeltet. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"50"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"minDF")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": mindste frihedsgrader, der kan v\xe6lges i inputfeltet. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"style")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline-stilarter. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,n.kt)("h2",p({},{id:"eksempler"}),"Eksempler"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LearnChisquareDistribution />\n")))}k.isMDXComponent=!0}}]);