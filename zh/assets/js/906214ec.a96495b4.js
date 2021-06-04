(self.webpackChunk=self.webpackChunk||[]).push([[3026],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,b=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},416162:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var r=n(722122),i=n(419756),a=(n(202784),n(603905)),o={id:"distribution-beta",title:"Beta Distribution",sidebar_label:"Beta Distribution"},l={unversionedId:"learn/distribution-beta",id:"learn/distribution-beta",isDocsHomePage:!1,title:"Beta Distribution",description:"\u4e00\u4e2a\u7528\u4e8e\u8ba1\u7b97\u03b2\u5206\u5e03\u6982\u7387\u7684\u5b66\u4e60\u7ec4\u4ef6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/learn/distribution-beta.md",sourceDirName:"learn",slug:"/learn/distribution-beta",permalink:"/docs/learn/distribution-beta",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-beta.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"2021/2/21",sidebar_label:"Beta Distribution",frontMatter:{id:"distribution-beta",title:"Beta Distribution",sidebar_label:"Beta Distribution"},sidebar:"docs",previous:{title:"Word Venn Diagram",permalink:"/docs/learn/word-venn-diagram"},next:{title:"Binomial Distribution",permalink:"/docs/learn/distribution-binomial"}},u=[{value:"\u9009\u9879",id:"\u9009\u9879",children:[]},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[]}],s={toc:u};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e00\u4e2a\u7528\u4e8e\u8ba1\u7b97\u03b2\u5206\u5e03\u6982\u7387\u7684\u5b66\u4e60\u7ec4\u4ef6\u3002"),(0,a.kt)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"domain")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"x"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"y"),"\u6570\u7ec4\u7684\u5bf9\u8c61\uff0c\u5176\u5404\u81ea\u8f74\u7684\u8d77\u70b9\u548c\u7ec8\u70b9\u3002. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"step")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(number|string)"),": \u6eda\u52a8\u8f93\u5165\u7684\u6b65\u957f. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"0.01"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"tabs")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<string>"),': \u663e\u793a\u54ea\u4e9b\u6807\u7b7e\u9875\uff08\u53ef\u4ee5\u662f "\u5c0f"\u3001"\u5927 "\u6216 "\u8303\u56f4"\uff09\u3002. Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"[\n  'smaller',\n  'greater',\n  'range'\n]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS\u5185\u8054\u6837\u5f0f. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,a.kt)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnBetaDistribution />\n")))}c.isMDXComponent=!0}}]);