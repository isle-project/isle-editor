"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[59961],{603905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(202784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},528328:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return O},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return y}});var n=r(603905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&u(e,r,t[r]);return e};const d={id:"chi2",title:"Chi-square Independence Test",sidebar_label:"Chi-square Independence Test"},f=void 0,m={unversionedId:"tests/chi2",id:"tests/chi2",title:"Chi-square Independence Test",description:"\u03a4\u03b5\u03c3\u03c4 \u03b1\u03bd\u03b5\u03be\u03b1\u03c1\u03c4\u03b7\u03c3\u03af\u03b1\u03c2 \u03a7\u03b9-\u03c4\u03b5\u03c4\u03c1\u03ac\u03b3\u03c9\u03bd\u03bf.",source:"@site/i18n/el/docusaurus-plugin-content-docs/current/tests/chi2.md",sourceDirName:"tests",slug:"/tests/chi2",permalink:"/el/docs/tests/chi2",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tests/chi2.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1/6/2021",frontMatter:{id:"chi2",title:"Chi-square Independence Test",sidebar_label:"Chi-square Independence Test"},sidebar:"docs",previous:{title:"ANOVA",permalink:"/el/docs/tests/anova"},next:{title:"Correlation Test",permalink:"/el/docs/tests/corrtest"}},b={},y=[{value:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",level:2},{value:"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",level:2}],v={toc:y};function O(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},v),u),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u03a4\u03b5\u03c3\u03c4 \u03b1\u03bd\u03b5\u03be\u03b1\u03c1\u03c4\u03b7\u03c3\u03af\u03b1\u03c2 \u03a7\u03b9-\u03c4\u03b5\u03c4\u03c1\u03ac\u03b3\u03c9\u03bd\u03bf."),(0,n.kt)("h2",p({},{id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"}),"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"data")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object (required)"),": \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03c4\u03c9\u03bd \u03c0\u03b9\u03bd\u03ac\u03ba\u03c9\u03bd \u03c4\u03b9\u03bc\u03ce\u03bd. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"var1")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": \u03cc\u03bd\u03bf\u03bc\u03b1 \u03c4\u03b7\u03c2 \u03c0\u03c1\u03ce\u03c4\u03b7\u03c2 \u03bc\u03b5\u03c4\u03b1\u03b2\u03bb\u03b7\u03c4\u03ae\u03c2. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"var2")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": \u03cc\u03bd\u03bf\u03bc\u03b1 \u03c4\u03b7\u03c2 \u03b4\u03b5\u03cd\u03c4\u03b5\u03c1\u03b7\u03c2 \u03bc\u03b5\u03c4\u03b1\u03b2\u03bb\u03b7\u03c4\u03ae\u03c2. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,n.kt)("h2",p({},{id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"}),"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Chi2Test\n    data={heartdisease} \n    var1="Drugs"\n    var2="Complications"\n/>\n')))}O.isMDXComponent=!0}}]);