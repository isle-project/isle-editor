"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[64744],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(202784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,b=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(b,a(a({ref:t},s),{},{components:n})):r.createElement(b,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},330055:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return O},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return y}});var r=n(603905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(u)for(var n of u(t))l.call(t,n)&&s(e,n,t[n]);return e};const f={id:"continuous-distribution",title:"Continuous Distribution",sidebar_label:"Continuous Distribution"},d=void 0,b={unversionedId:"learn/continuous-distribution",id:"learn/continuous-distribution",title:"Continuous Distribution",description:"\u30e6\u30fc\u30b6\u5b9a\u7fa9\u306e\u9023\u7d9a\u78ba\u7387\u5206\u5e03\u3092\u63a2\u7d22\u3059\u308b\u305f\u3081\u306e\u5b66\u7fd2\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/learn/continuous-distribution.md",sourceDirName:"learn",slug:"/learn/continuous-distribution",permalink:"/ja/docs/learn/continuous-distribution",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/continuous-distribution.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614119449,formattedLastUpdatedAt:"2021\u5e742\u670823\u65e5",frontMatter:{id:"continuous-distribution",title:"Continuous Distribution",sidebar_label:"Continuous Distribution"},sidebar:"docs",previous:{title:"Confidence Interval Coverage Sample",permalink:"/ja/docs/learn/confidence-coverage-sample"},next:{title:"Cross Validation",permalink:"/ja/docs/learn/cross-validation"}},m={},y=[{value:"\u30aa\u30d7\u30b7\u30e7\u30f3",id:"\u30aa\u30d7\u30b7\u30e7\u30f3",level:2},{value:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002",id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059",level:2}],v={toc:y};function O(e){var t,n=e,{components:o}=n,s=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},v),s),i(t,a({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u30e6\u30fc\u30b6\u5b9a\u7fa9\u306e\u9023\u7d9a\u78ba\u7387\u5206\u5e03\u3092\u63a2\u7d22\u3059\u308b\u305f\u3081\u306e\u5b66\u7fd2\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3002"),(0,r.kt)("h2",p({},{id:"\u30aa\u30d7\u30b7\u30e7\u30f3"}),"\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,r.kt)("p",null,"\u7269\u4ef6\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,r.kt)("h2",p({},{id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059"}),"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LearnContinuousDistribution />\n")))}O.isMDXComponent=!0}}]);