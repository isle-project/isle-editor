"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91244],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return b}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,b=p["".concat(l,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(b,a(a({ref:t},c),{},{components:n})):r.createElement(b,a({ref:t},c))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},997743:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return y}});var r=n(603905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))u.call(t,n)&&c(e,n,t[n]);return e};const f={id:"distribution-poisson",title:"Poisson Distribution",sidebar_label:"Poisson Distribution"},d=void 0,b={unversionedId:"learn/distribution-poisson",id:"learn/distribution-poisson",title:"Poisson Distribution",description:"A learning component for calculating probabilities of a Poisson distribution.",source:"@site/docs/learn/distribution-poisson.md",sourceDirName:"learn",slug:"/learn/distribution-poisson",permalink:"/docs/learn/distribution-poisson",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-poisson.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612731787,formattedLastUpdatedAt:"Feb 7, 2021",frontMatter:{id:"distribution-poisson",title:"Poisson Distribution",sidebar_label:"Poisson Distribution"},sidebar:"docs",previous:{title:"Normal Distribution",permalink:"/docs/learn/distribution-normal"},next:{title:"Student's t Distribution",permalink:"/docs/learn/distribution-t"}},m={},y=[{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],O={toc:y};function v(e){var t,n=e,{components:i}=n,c=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},O),c),o(t,a({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"A learning component for calculating probabilities of a Poisson distribution."),(0,r.kt)("h2",p({},{id:"options"}),"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"step")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(number|string)"),": step size of the scroll input. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0.1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline styles. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,r.kt)("h2",p({},{id:"examples"}),"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LearnPoissonDistribution />\n")))}v.isMDXComponent=!0}}]);