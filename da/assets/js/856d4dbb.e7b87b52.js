"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1495],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},679074:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var r=n(487462),i=n(263366),a=(n(202784),n(603905)),l=["components"],o={id:"hypothesis-testing-mean",title:"Hypothesis Testing for Means",sidebar_label:"Hypothesis Testing for Means"},s=void 0,p={unversionedId:"learn/hypothesis-testing-mean",id:"learn/hypothesis-testing-mean",title:"Hypothesis Testing for Means",description:"En l\xe6ringskomponent om hypotesetest for en befolknings middelv\xe6rdi.",source:"@site/i18n/da/docusaurus-plugin-content-docs/current/learn/hypothesis-testing-mean.md",sourceDirName:"learn",slug:"/learn/hypothesis-testing-mean",permalink:"/da/docs/learn/hypothesis-testing-mean",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/hypothesis-testing-mean.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1.6.2021",frontMatter:{id:"hypothesis-testing-mean",title:"Hypothesis Testing for Means",sidebar_label:"Hypothesis Testing for Means"},sidebar:"docs",previous:{title:"Discrete Distribution",permalink:"/da/docs/learn/discrete-distribution"},next:{title:"Hypothesis Testing for Proportions",permalink:"/da/docs/learn/hypothesis-testing-proportion"}},u=[{value:"Indstillinger",id:"indstillinger",children:[],level:2},{value:"Eksempler",id:"eksempler",children:[],level:2}],d={toc:u};function c(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"En l\xe6ringskomponent om hypotesetest for en befolknings middelv\xe6rdi."),(0,a.kt)("h2",{id:"indstillinger"},"Indstillinger"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"types")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<string>"),": den eller de testtyper (",(0,a.kt)("inlineCode",{parentName:"li"},"En pr\xf8ve"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"To pr\xf8ver"),"), som widget'en skal udstille. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[\n  'One-Sample',\n  'Two-Sample'\n]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"tests")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<string>"),": den eller de test, som widget'en udstiller. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[\n  'Z-Test',\n  'T-Test'\n]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"nullHypothesisAsValue")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": altid vise nulhypotesen som en enkelt v\xe6rdi. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"feedback")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": styrer, om der skal vises feedback-knapper. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"pValue")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": brugerdefineret betegnelse for p-v\xe6rdien (skal v\xe6re en LaTeX-ligningsstreng). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline-stilarter. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,a.kt)("h2",{id:"eksempler"},"Eksempler"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnMeanTest />\n")))}c.isMDXComponent=!0}}]);