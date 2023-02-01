"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53169],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},221174:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return d},default:function(){return O},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return b}});var r=n(603905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&u(e,n,t[n]);return e};const m={id:"meantest",title:"One-Sample Mean Test",sidebar_label:"One-Sample Mean Test"},d=void 0,f={unversionedId:"tests/meantest",id:"tests/meantest",title:"One-Sample Mean Test",description:"\u0394\u03bf\u03ba\u03b9\u03bc\u03ae \u03bc\u03ad\u03c3\u03bf\u03c5 \u03cc\u03c1\u03bf\u03c5 \u03b5\u03bd\u03cc\u03c2 \u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03bf\u03c2.",source:"@site/i18n/el/docusaurus-plugin-content-docs/current/tests/meantest.md",sourceDirName:"tests",slug:"/tests/meantest",permalink:"/el/docs/tests/meantest",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tests/meantest.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19 \u0399\u03bf\u03c5\u03bd 2021",frontMatter:{id:"meantest",title:"One-Sample Mean Test",sidebar_label:"One-Sample Mean Test"},sidebar:"docs",previous:{title:"Kruskal Test",permalink:"/el/docs/tests/kruskal"},next:{title:"Two-Sample Mean Test",permalink:"/el/docs/tests/meantest2"}},k={},b=[{value:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",level:2},{value:"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",level:2}],y={toc:b};function O(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},y),u),i(t,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u0394\u03bf\u03ba\u03b9\u03bc\u03ae \u03bc\u03ad\u03c3\u03bf\u03c5 \u03cc\u03c1\u03bf\u03c5 \u03b5\u03bd\u03cc\u03c2 \u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03bf\u03c2."),(0,r.kt)("h2",c({},{id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"}),"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object (required)"),": \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03c4\u03c9\u03bd \u03c0\u03b9\u03bd\u03ac\u03ba\u03c9\u03bd \u03c4\u03b9\u03bc\u03ce\u03bd. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"variable")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string (required)"),": \u03cc\u03bd\u03bf\u03bc\u03b1 \u03c4\u03b7\u03c2 \u03bc\u03b5\u03c4\u03b1\u03b2\u03bb\u03b7\u03c4\u03ae\u03c2. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),': \u03c4\u03cd\u03c0\u03bf\u03c2 \u03b4\u03bf\u03ba\u03b9\u03bc\u03ae\u03c2 (\u03b4\u03bf\u03ba\u03b9\u03bc\u03ae "\u0396" \u03ae \u03b4\u03bf\u03ba\u03b9\u03bc\u03ae "\u03a4"). Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"'T Test'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"stdev")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": \u03c4\u03c5\u03c0\u03b9\u03ba\u03ae \u03b1\u03c0\u03cc\u03ba\u03bb\u03b9\u03c3\u03b7 (\u03b3\u03b9\u03b1 \u03c4\u03b7 \u03b4\u03bf\u03ba\u03b9\u03bc\u03ae \u0396). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"alpha")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03bf \u03c3\u03b7\u03bc\u03b1\u03bd\u03c4\u03b9\u03ba\u03cc\u03c4\u03b7\u03c4\u03b1\u03c2. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0.05"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"direction")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u03ba\u03b1\u03c4\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7 \u03b4\u03bf\u03ba\u03b9\u03bc\u03ae\u03c2 (\u03b5\u03af\u03c4\u03b5 ",(0,r.kt)("inlineCode",{parentName:"li"},"less"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"greater")," \u03ae ",(0,r.kt)("inlineCode",{parentName:"li"},"two-sided"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'two-sided'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"mu0")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": \u03bc\u03ad\u03c3\u03bf\u03c2 \u03cc\u03c1\u03bf\u03c2 \u03c5\u03c0\u03cc \u03c4\u03b7 \u03bc\u03b7\u03b4\u03b5\u03bd\u03b9\u03ba\u03ae \u03c5\u03c0\u03cc\u03b8\u03b5\u03c3\u03b7. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"showDecision")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u03b5\u03bb\u03ad\u03b3\u03c7\u03b5\u03b9 \u03b1\u03bd \u03b8\u03b1 \u03b5\u03bc\u03c6\u03b1\u03bd\u03af\u03b6\u03b5\u03c4\u03b1\u03b9 \u03b1\u03bd \u03b7 \u03bc\u03b7\u03b4\u03b5\u03bd\u03b9\u03ba\u03ae \u03c5\u03c0\u03cc\u03b8\u03b5\u03c3\u03b7 \u03b1\u03c0\u03bf\u03c1\u03c1\u03af\u03c0\u03c4\u03b5\u03c4\u03b1\u03b9 \u03c3\u03c4\u03bf \u03ba\u03b1\u03b8\u03bf\u03c1\u03b9\u03c3\u03bc\u03ad\u03bd\u03bf \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03bf \u03c3\u03b7\u03bc\u03b1\u03bd\u03c4\u03b9\u03ba\u03cc\u03c4\u03b7\u03c4\u03b1\u03c2. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,r.kt)("h2",c({},{id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"}),"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<MeanTest\n    data={heartdisease} \n    variable="Drugs"\n/>\n')))}O.isMDXComponent=!0}}]);