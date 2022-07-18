"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19934],{603905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(202784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},241237:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return k}});var n=r(603905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&p(e,r,t[r]);return e};const d={id:"corrtest",title:"Correlation Test",sidebar_label:"Correlation Test"},f=void 0,m={unversionedId:"tests/corrtest",id:"tests/corrtest",title:"Correlation Test",description:"Correlation test.",source:"@site/docs/tests/corrtest.md",sourceDirName:"tests",slug:"/tests/corrtest",permalink:"/docs/tests/corrtest",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tests/corrtest.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613419765,formattedLastUpdatedAt:"Feb 15, 2021",frontMatter:{id:"corrtest",title:"Correlation Test",sidebar_label:"Correlation Test"},sidebar:"docs",previous:{title:"Chi-square Independence Test",permalink:"/docs/tests/chi2"},next:{title:"Kruskal Test",permalink:"/docs/tests/kruskal"}},b={},k=[{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],v={toc:k};function y(e){var t,r=e,{components:a}=r,p=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},v),p),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Correlation test."),(0,n.kt)("h2",u({},{id:"options"}),"Options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"data")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object (required)"),": object of value arrays. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"var1")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string (required)"),": name of first variable. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"var2")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string (required)"),": name of second variable. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"rho0")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": correlation value under the null hypothesis. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"alpha")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": significance level. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"0.05"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"direction")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": test direction (either ",(0,n.kt)("inlineCode",{parentName:"li"},"less"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"greater"),", or ",(0,n.kt)("inlineCode",{parentName:"li"},"two-sided"),"). Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"'two-sided'"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"showDecision")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": controls whether to display if the null hypothesis is rejected at the specified significance level. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,n.kt)("h2",u({},{id:"examples"}),"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<CorrTest\n    data={heartdisease} \n    var1="Cost"\n    var2="Age"\n/>\n')))}y.isMDXComponent=!0}}]);