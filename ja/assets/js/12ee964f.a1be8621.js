"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8005],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},103698:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(487462),a=n(263366),i=(n(202784),n(603905)),o=["components"],l={id:"proptest2",title:"Two-Sample Proportion Test",sidebar_label:"Two-Sample Proportion Test"},p=void 0,s={unversionedId:"tests/proptest2",id:"tests/proptest2",title:"Two-Sample Proportion Test",description:"2\u6a19\u672c\u306e\u6bd4\u4f8b\u691c\u5b9a\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tests/proptest2.md",sourceDirName:"tests",slug:"/tests/proptest2",permalink:"/ja/docs/tests/proptest2",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tests/proptest2.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621312042,formattedLastUpdatedAt:"2021/5/18",frontMatter:{id:"proptest2",title:"Two-Sample Proportion Test",sidebar_label:"Two-Sample Proportion Test"},sidebar:"docs",previous:{title:"One-Sample Proportion Test",permalink:"/ja/docs/tests/proptest"},next:{title:"Summary Statistics",permalink:"/ja/docs/summary-statistics"}},u={},c=[{value:"\u30aa\u30d7\u30b7\u30e7\u30f3",id:"\u30aa\u30d7\u30b7\u30e7\u30f3",level:2},{value:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002",id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"2\u6a19\u672c\u306e\u6bd4\u4f8b\u691c\u5b9a\u3002"),(0,i.kt)("h2",{id:"\u30aa\u30d7\u30b7\u30e7\u30f3"},"\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"data")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object (required)"),": \u5024\u306e\u914d\u5217\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"var1")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": \u5148\u982d\u5909\u6570\u540d. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"success")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"any (required)"),": var1",(0,i.kt)("inlineCode",{parentName:"li"},"\u306e\u6210\u529f\u30ab\u30c6\u30b4\u30ea. Default: "),"none`."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"var2")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": 2\u756a\u76ee\u306e\u5909\u6570\u306e\u540d\u524d (",(0,i.kt)("inlineCode",{parentName:"li"},"var2")," \u307e\u305f\u306f ",(0,i.kt)("inlineCode",{parentName:"li"},"group")," \u3092\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"group")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": \u30b0\u30eb\u30fc\u30d7\u5316\u5909\u6570\u306e\u540d\u524d (",(0,i.kt)("inlineCode",{parentName:"li"},"var2")," \u307e\u305f\u306f ",(0,i.kt)("inlineCode",{parentName:"li"},"group")," \u3092\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"alpha")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": \u6709\u610f\u6c34\u6e96. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"0.05"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"direction")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": \u30c6\u30b9\u30c8\u65b9\u5411. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'two-sided'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"diff")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": \uff28\uff10\u4ee5\u4e0b\u306e\u5dee. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"showDecision")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": \u306f\uff0c\u6307\u5b9a\u3055\u308c\u305f\u6709\u610f\u6c34\u6e96\u3067\u5e30\u7121\u4eee\u8aac\u304c\u68c4\u5374\u3055\u308c\u305f\u304b\u3069\u3046\u304b\u3092\u8868\u793a\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\uff0e. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,i.kt)("h2",{id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059"},"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<PropTest2\n    data={heartdisease} \n    var1="Drugs"\n    success={2}\n    group="Complications"\n/>\n')))}d.isMDXComponent=!0}}]);