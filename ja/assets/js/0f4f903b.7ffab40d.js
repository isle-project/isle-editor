"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6581],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},505387:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var r=n(487462),a=n(263366),i=(n(202784),n(603905)),l=["components"],o={id:"meantest2",title:"Two-Sample Mean Test",sidebar_label:"Two-Sample Mean Test"},p=void 0,s={unversionedId:"tests/meantest2",id:"tests/meantest2",title:"Two-Sample Mean Test",description:"2\u6a19\u672c\u5e73\u5747\u691c\u5b9a\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tests/meantest2.md",sourceDirName:"tests",slug:"/tests/meantest2",permalink:"/ja/docs/tests/meantest2",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tests/meantest2.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614463997,formattedLastUpdatedAt:"2021/2/27",frontMatter:{id:"meantest2",title:"Two-Sample Mean Test",sidebar_label:"Two-Sample Mean Test"},sidebar:"docs",previous:{title:"One-Sample Mean Test",permalink:"/ja/docs/tests/meantest"},next:{title:"One-Sample Proportion Test",permalink:"/ja/docs/tests/proptest"}},u=[{value:"\u30aa\u30d7\u30b7\u30e7\u30f3",id:"\u30aa\u30d7\u30b7\u30e7\u30f3",children:[],level:2},{value:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002",id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059",children:[],level:2}],m={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"2\u6a19\u672c\u5e73\u5747\u691c\u5b9a\u3002"),(0,i.kt)("h2",{id:"\u30aa\u30d7\u30b7\u30e7\u30f3"},"\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"data")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object (required)"),": \u5024\u306e\u914d\u5217\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"x")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string (required)"),": \u5148\u982d\u5909\u6570\u540d. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"y")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": 2 \u756a\u76ee\u306e\u5909\u6570\u306e\u540d\u524d (",(0,i.kt)("inlineCode",{parentName:"li"},"y")," \u307e\u305f\u306f ",(0,i.kt)("inlineCode",{parentName:"li"},"group")," \u3092\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"group")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": \u30b0\u30eb\u30fc\u30d7\u5316\u5909\u6570\u306e\u540d\u524d (",(0,i.kt)("inlineCode",{parentName:"li"},"y")," \u307e\u305f\u306f ",(0,i.kt)("inlineCode",{parentName:"li"},"group")," \u3092\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"type")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": \u30c6\u30b9\u30c8\u306e\u7a2e\u985e. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'T Test'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"xstdev")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": \u7b2c\u4e00\u6a19\u6e96\u504f\u5dee. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ystdev")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": \u7b2c\u4e8c\u6a19\u6e96\u504f\u5dee. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"alpha")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": \u6709\u610f\u6c34\u6e96. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"0.05"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"direction")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": \u30c6\u30b9\u30c8\u65b9\u5411. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'two-sided'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"diff")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": \uff28\uff10\u4ee5\u4e0b\u306e\u5dee. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"showDecision")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": \u306f\uff0c\u6307\u5b9a\u3055\u308c\u305f\u6709\u610f\u6c34\u6e96\u3067\u5e30\u7121\u4eee\u8aac\u304c\u68c4\u5374\u3055\u308c\u305f\u304b\u3069\u3046\u304b\u3092\u8868\u793a\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\uff0e. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,i.kt)("h2",{id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059"},"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<MeanTest2\n    data={heartdisease} \n    x="Cost"\n    group="Gender"\n/>\n')))}c.isMDXComponent=!0}}]);