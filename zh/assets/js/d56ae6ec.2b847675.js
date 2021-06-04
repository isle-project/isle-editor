(self.webpackChunk=self.webpackChunk||[]).push([[2980],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},853261:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(722122),i=n(419756),a=(n(202784),n(603905)),o={id:"hypothesis-testing-mean",title:"Hypothesis Testing for Means",sidebar_label:"Hypothesis Testing for Means"},l={unversionedId:"learn/hypothesis-testing-mean",id:"learn/hypothesis-testing-mean",isDocsHomePage:!1,title:"Hypothesis Testing for Means",description:"\u5173\u4e8e\u7fa4\u4f53\u5e73\u5747\u6570\u7684\u5047\u8bbe\u68c0\u9a8c\u7684\u5b66\u4e60\u5185\u5bb9\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/learn/hypothesis-testing-mean.md",sourceDirName:"learn",slug:"/learn/hypothesis-testing-mean",permalink:"/docs/learn/hypothesis-testing-mean",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/hypothesis-testing-mean.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1617919341,formattedLastUpdatedAt:"2021/4/8",sidebar_label:"Hypothesis Testing for Means",frontMatter:{id:"hypothesis-testing-mean",title:"Hypothesis Testing for Means",sidebar_label:"Hypothesis Testing for Means"},sidebar:"docs",previous:{title:"Discrete Distribution",permalink:"/docs/learn/discrete-distribution"},next:{title:"Hypothesis Testing for Proportions",permalink:"/docs/learn/hypothesis-testing-proportion"}},s=[{value:"\u9009\u9879",id:"\u9009\u9879",children:[]},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[]}],p={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5173\u4e8e\u7fa4\u4f53\u5e73\u5747\u6570\u7684\u5047\u8bbe\u68c0\u9a8c\u7684\u5b66\u4e60\u5185\u5bb9\u3002"),(0,a.kt)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"types")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<string>"),': \u6d4b\u8bd5\u7684\u7c7b\u578b("\u4e00\u4e2a\u6837\u672c"\uff0c"\u4e24\u4e2a\u6837\u672c")\uff0c\u5c0f\u7ec4\u4ef6\u5e94\u8be5\u66b4\u9732\u51fa\u6765\u3002. Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"[\n  'One-Sample',\n  'Two-Sample'\n]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"tests")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<string>"),": \u5c0f\u7ec4\u4ef6\u66b4\u9732\u7684\u6d4b\u8bd5\u5bf9\u8c61. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[\n  'Z-Test',\n  'T-Test'\n]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"nullHypothesisAsValue")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u59cb\u7ec8\u5c06\u96f6\u5047\u8bbe\u663e\u793a\u4e3a\u4e00\u4e2a\u5355\u4e00\u7684\u503c\u3002. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"feedback")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u63a7\u5236\u662f\u5426\u663e\u793a\u53cd\u9988\u6309\u94ae. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"pValue")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \u81ea\u5b9a\u4e49p\u503c\u7684\u6807\u7b7e(\u5e94\u8be5\u662fLaTeX\u65b9\u7a0b\u5b57\u7b26\u4e32). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS\u5185\u8054\u6837\u5f0f. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,a.kt)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnMeanTest />\n")))}u.isMDXComponent=!0}}]);