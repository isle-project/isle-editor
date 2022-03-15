"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6347],{603905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return f}});var r=n(202784);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u=r.createContext({}),s=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,u=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=s(n),f=i,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,a(a({ref:e},c),{},{components:n})):r.createElement(m,a({ref:e},c))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},732078:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return c},toc:function(){return p},default:function(){return f}});var r=n(487462),i=n(263366),o=(n(202784),n(603905)),a=["components"],l={id:"distribution-t",title:"Student's t Distribution",sidebar_label:"Student's t Distribution"},u=void 0,s={unversionedId:"learn/distribution-t",id:"learn/distribution-t",title:"Student's t Distribution",description:"\u0388\u03bd\u03b1 \u03c3\u03c5\u03c3\u03c4\u03b1\u03c4\u03b9\u03ba\u03cc \u03b5\u03ba\u03bc\u03ac\u03b8\u03b7\u03c3\u03b7\u03c2 \u03b3\u03b9\u03b1 \u03c4\u03bf\u03bd \u03c5\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03bc\u03cc \u03c0\u03b9\u03b8\u03b1\u03bd\u03bf\u03c4\u03ae\u03c4\u03c9\u03bd \u03bc\u03b9\u03b1\u03c2 \u03ba\u03b1\u03c4\u03b1\u03bd\u03bf\u03bc\u03ae\u03c2 Student's t.",source:"@site/i18n/el/docusaurus-plugin-content-docs/current/learn/distribution-t.md",sourceDirName:"learn",slug:"/learn/distribution-t",permalink:"/el/docs/learn/distribution-t",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-t.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1/6/2021",frontMatter:{id:"distribution-t",title:"Student's t Distribution",sidebar_label:"Student's t Distribution"},sidebar:"docs",previous:{title:"Poisson Distribution",permalink:"/el/docs/learn/distribution-poisson"},next:{title:"Continuous Uniform Distribution",permalink:"/el/docs/learn/distribution-uniform"}},c={},p=[{value:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",level:2},{value:"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",level:2}],d={toc:p};function f(t){var e=t.components,n=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u0388\u03bd\u03b1 \u03c3\u03c5\u03c3\u03c4\u03b1\u03c4\u03b9\u03ba\u03cc \u03b5\u03ba\u03bc\u03ac\u03b8\u03b7\u03c3\u03b7\u03c2 \u03b3\u03b9\u03b1 \u03c4\u03bf\u03bd \u03c5\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03bc\u03cc \u03c0\u03b9\u03b8\u03b1\u03bd\u03bf\u03c4\u03ae\u03c4\u03c9\u03bd \u03bc\u03b9\u03b1\u03c2 \u03ba\u03b1\u03c4\u03b1\u03bd\u03bf\u03bc\u03ae\u03c2 Student's t."),(0,o.kt)("h2",{id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"},"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"step")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(number|string)"),": \u03bc\u03ad\u03b3\u03b5\u03b8\u03bf\u03c2 \u03b2\u03ae\u03bc\u03b1\u03c4\u03bf\u03c2 \u03c4\u03b7\u03c2 \u03b5\u03b9\u03c3\u03cc\u03b4\u03bf\u03c5 \u03ba\u03cd\u03bb\u03b9\u03c3\u03b7\u03c2. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"0.01"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"quantile")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": \u03b1\u03bd \u03b8\u03b1 \u03b5\u03bc\u03c6\u03b1\u03bd\u03af\u03c3\u03b5\u03c4\u03b5 \u03ba\u03b1\u03c1\u03c4\u03ad\u03bb\u03b1 \u03b3\u03b9\u03b1 \u03c4\u03bf\u03bd \u03c5\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03bc\u03cc \u03c4\u03c9\u03bd \u03ba\u03b2\u03b1\u03bd\u03c4\u03b9\u03bb\u03af\u03c9\u03bd \u03c4\u03b7\u03c2 \u03ba\u03b1\u03c4\u03b1\u03bd\u03bf\u03bc\u03ae\u03c2. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"style")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object"),": \u03a3\u03c4\u03c5\u03bb \u03b3\u03c1\u03b1\u03bc\u03bc\u03ae\u03c2 CSS. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,o.kt)("h2",{id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"},"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnTDistribution />\n")))}f.isMDXComponent=!0}}]);