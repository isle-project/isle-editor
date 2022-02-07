"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2685],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,b=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?i.createElement(b,a(a({ref:t},c),{},{components:n})):i.createElement(b,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},652749:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var i=n(487462),r=n(263366),o=(n(202784),n(603905)),a=["components"],l={id:"distribution-binomial",title:"Binomial Distribution",sidebar_label:"Binomial Distribution"},u=void 0,s={unversionedId:"learn/distribution-binomial",id:"learn/distribution-binomial",title:"Binomial Distribution",description:"A learning component for calculating probabilities of a binomial distribution.",source:"@site/docs/learn/distribution-binomial.md",sourceDirName:"learn",slug:"/learn/distribution-binomial",permalink:"/docs/learn/distribution-binomial",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-binomial.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612731787,formattedLastUpdatedAt:"2/7/2021",frontMatter:{id:"distribution-binomial",title:"Binomial Distribution",sidebar_label:"Binomial Distribution"},sidebar:"docs",previous:{title:"Beta Distribution",permalink:"/docs/learn/distribution-beta"},next:{title:"Chi-squared Distribution",permalink:"/docs/learn/distribution-chisquare"}},c=[{value:"Options",id:"options",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A learning component for calculating probabilities of a binomial distribution."),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"hideCDF")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": controls whether to hide the CDF display. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"step")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(number|string)"),": step size of the scroll input. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"0.01"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"style")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline styles. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnBinomialDistribution />\n")))}d.isMDXComponent=!0}}]);