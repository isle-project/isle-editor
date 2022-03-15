"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1679],{603905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return f}});var r=n(202784);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u=r.createContext({}),s=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,u=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=s(n),f=i,m=d["".concat(u,".").concat(f)]||d[f]||c[f]||o;return n?r.createElement(m,a(a({ref:e},p),{},{components:n})):r.createElement(m,a({ref:e},p))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},206249:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return p},toc:function(){return c},default:function(){return f}});var r=n(487462),i=n(263366),o=(n(202784),n(603905)),a=["components"],l={id:"distribution-t",title:"Student's t Distribution",sidebar_label:"Student's t Distribution"},u=void 0,s={unversionedId:"learn/distribution-t",id:"learn/distribution-t",title:"Student's t Distribution",description:"V\xfdukov\xe1 komponenta pro v\xfdpo\u010det pravd\u011bpodobnost\xed Studentova t rozd\u011blen\xed.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/learn/distribution-t.md",sourceDirName:"learn",slug:"/learn/distribution-t",permalink:"/cs/docs/learn/distribution-t",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-t.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. 6. 2021",frontMatter:{id:"distribution-t",title:"Student's t Distribution",sidebar_label:"Student's t Distribution"},sidebar:"docs",previous:{title:"Poisson Distribution",permalink:"/cs/docs/learn/distribution-poisson"},next:{title:"Continuous Uniform Distribution",permalink:"/cs/docs/learn/distribution-uniform"}},p={},c=[{value:"Mo\u017enosti",id:"mo\u017enosti",level:2},{value:"P\u0159\xedklady",id:"p\u0159\xedklady",level:2}],d={toc:c};function f(t){var e=t.components,n=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"V\xfdukov\xe1 komponenta pro v\xfdpo\u010det pravd\u011bpodobnost\xed Studentova t rozd\u011blen\xed."),(0,o.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"step")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(number|string)"),": velikost kroku posuvn\xe9ho vstupu. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"0.01"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"quantile")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": zda zobrazit kartu pro v\xfdpo\u010det kvantil\u016f rozd\u011blen\xed. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"style")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object"),": \u0158\xe1dkov\xe9 styly CSS. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,o.kt)("h2",{id:"p\u0159\xedklady"},"P\u0159\xedklady"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnTDistribution />\n")))}f.isMDXComponent=!0}}]);