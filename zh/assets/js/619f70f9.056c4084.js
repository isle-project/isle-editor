(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{188:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(411)),o={id:"distribution-gamma",title:"Gamma Distribution",sidebar_label:"Gamma Distribution"},l={unversionedId:"learn/distribution-gamma",id:"learn/distribution-gamma",isDocsHomePage:!1,title:"Gamma Distribution",description:"\u4e00\u4e2a\u7528\u4e8e\u8ba1\u7b97\u4f3d\u9a6c\u5206\u5e03\u6982\u7387\u7684\u5b66\u4e60\u7ec4\u4ef6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/learn/distribution-gamma.md",slug:"/learn/distribution-gamma",permalink:"/zh/docs/learn/distribution-gamma",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-gamma.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Gamma Distribution",sidebar:"docs",previous:{title:"F Distribution",permalink:"/zh/docs/learn/distribution-f"},next:{title:"Geometric Distribution",permalink:"/zh/docs/learn/distribution-geometric"}},c=[{value:"\u9009\u9879",id:"\u9009\u9879",children:[]},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[]}],b={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u4e00\u4e2a\u7528\u4e8e\u8ba1\u7b97\u4f3d\u9a6c\u5206\u5e03\u6982\u7387\u7684\u5b66\u4e60\u7ec4\u4ef6\u3002"),Object(i.b)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"domain")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": ",Object(i.b)("inlineCode",{parentName:"li"},"x"),"\u548c",Object(i.b)("inlineCode",{parentName:"li"},"y"),"\u6570\u7ec4\u7684\u5bf9\u8c61\uff0c\u5176\u5404\u81ea\u8f74\u7684\u8d77\u70b9\u548c\u7ec8\u70b9\u3002. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"scaleParameterization")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": \u63a7\u5236\u662f\u5426\u4f7f\u7528\u6d89\u53ca\u5f62\u72b6\u548c\u6bd4\u4f8b\u53c2\u6570\u7684\u53c2\u6570\u5316\uff0c\u800c\u4e0d\u662f\u5f62\u72b6\u548c\u901f\u7387\u3002. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"step")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(number|string)"),": \u6eda\u52a8\u8f93\u5165\u7684\u6b65\u957f. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"0.01"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"symbols")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": \u662f\u5426\u663e\u793a\u53c2\u6570\u7684\u5e0c\u814a\u8bed\u7b26\u53f7. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"tabs")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array<string>"),': \u663e\u793a\u54ea\u4e9b\u6807\u7b7e\u9875\uff08\u53ef\u4ee5\u662f "\u5c0f"\u3001"\u5927 "\u6216 "\u8303\u56f4"\uff09\u3002. Default: ',Object(i.b)("inlineCode",{parentName:"li"},"[\n  'smaller',\n  'greater',\n  'range'\n]"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": CSS\u5185\u8054\u6837\u5f0f. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(i.b)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnGammaDistribution />\n")))}u.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=u(n),p=r,d=s["".concat(o,".").concat(p)]||s[p]||m[p]||i;return n?a.a.createElement(d,l(l({ref:t},b),{},{components:n})):a.a.createElement(d,l({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);