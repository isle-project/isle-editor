(self.webpackChunk=self.webpackChunk||[]).push([[2720],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return b}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),b=i,f=s["".concat(c,".").concat(b)]||s[b]||d[b]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},387134:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=n(722122),i=n(419756),o=(n(202784),n(603905)),a={id:"conditional-probability",title:"Conditional Probability",sidebar_label:"Conditional Probability"},l={unversionedId:"learn/conditional-probability",id:"learn/conditional-probability",isDocsHomePage:!1,title:"Conditional Probability",description:"\u4e00\u4e2a\u5b66\u4e60\u7ec4\u4ef6\u8bf4\u660e\u4e86\u4e24\u4e2a\u81ea\u53d8\u91cf\u7684\u6761\u4ef6\u6982\u7387\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/learn/conditional-probability.md",sourceDirName:"learn",slug:"/learn/conditional-probability",permalink:"/docs/learn/conditional-probability",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/conditional-probability.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614551296,formattedLastUpdatedAt:"2021/2/28",sidebar_label:"Conditional Probability",frontMatter:{id:"conditional-probability",title:"Conditional Probability",sidebar_label:"Conditional Probability"},sidebar:"docs",previous:{title:"CLT Sample",permalink:"/docs/learn/clt-sample"},next:{title:"Confidence Interval Coverage Binomial",permalink:"/docs/learn/confidence-coverage-binomial"}},c=[{value:"\u9009\u9879",id:"\u9009\u9879",children:[]},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[]}],u={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4e00\u4e2a\u5b66\u4e60\u7ec4\u4ef6\u8bf4\u660e\u4e86\u4e24\u4e2a\u81ea\u53d8\u91cf\u7684\u6761\u4ef6\u6982\u7387\u3002"),(0,o.kt)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"A")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": \u7b2c\u4e00\u53d8\u91cf. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"'A'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"B")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": \u7b2c\u4e8c\u4e2a\u53d8\u91cf. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"'B'"),".")),(0,o.kt)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnConditionalProbability />\n")))}p.isMDXComponent=!0}}]);