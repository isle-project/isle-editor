(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(411)),o={id:"free-text-survey",title:"Free Text Survey",sidebar_label:"Free Text Survey"},l={unversionedId:"free-text-survey",id:"free-text-survey",isDocsHomePage:!1,title:"Free Text Survey",description:"\u4e00\u4e2aISLE\u7ec4\u4ef6\uff0c\u7528\u4e8e\u5b66\u751f\u4ee5\u81ea\u7531\u6587\u672c\u5f62\u5f0f\u63d0\u4f9b\u7b54\u6848\u7684\u95ee\u9898\u3002\u8be5\u7ec4\u4ef6\u4e0eFreeTextQuestion\u7684\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\uff0c\u6c47\u603b\u7684\u5c0f\u7ec4\u6570\u636e\u4f1a\u5b9e\u65f6\u663e\u793a\u7ed9\u5927\u5bb6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/free-text-survey.md",slug:"/free-text-survey",permalink:"/zh/docs/free-text-survey",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/free-text-survey.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Free Text Survey",sidebar:"docs",previous:{title:"Select Question Matrix",permalink:"/zh/docs/questions/select-question-matrix"},next:{title:"Multiple Choice Survey",permalink:"/zh/docs/multiple-choice-survey"}},c=[{value:"\u9009\u9879",id:"\u9009\u9879",children:[]},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[]}],u={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u4e00\u4e2aISLE\u7ec4\u4ef6\uff0c\u7528\u4e8e\u5b66\u751f\u4ee5\u81ea\u7531\u6587\u672c\u5f62\u5f0f\u63d0\u4f9b\u7b54\u6848\u7684\u95ee\u9898\u3002\u8be5\u7ec4\u4ef6\u4e0e",Object(i.b)("strong",{parentName:"p"},"FreeTextQuestion"),"\u7684\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\uff0c\u6c47\u603b\u7684\u5c0f\u7ec4\u6570\u636e\u4f1a\u5b9e\u65f6\u663e\u793a\u7ed9\u5927\u5bb6\u3002"),Object(i.b)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"question")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|node)"),": \u95ee\u5b66\u751f\u7684\u95ee\u9898. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"allowMultipleAnswers")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": \u63a7\u5236\u662f\u5426\u5141\u8bb8\u5b66\u751f\u591a\u6b21\u56de\u7b54\u8c03\u67e5\u95ee\u5377\u3002. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"anonymous")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": \u63a7\u5236\u662f\u5426\u533f\u540d\u6536\u96c6\u5b66\u751f\u7b54\u6848. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"rows")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": \u8f93\u5165\u680f\u7684\u6587\u5b57\u884c\u6570. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"4"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"className")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": \u73ed\u540d. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": CSS\u5185\u8054\u6837\u5f0f. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": \u63d0\u4ea4\u7b54\u6848\u65f6\u8c03\u7528\u7684\u56de\u8c03\u51fd\u6570. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),Object(i.b)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FreeTextSurvey \n    question="Where are you from?"\n    anonymous\n/>\n')))}b.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=b(n),m=r,d=s["".concat(o,".").concat(m)]||s[m]||p[m]||i;return n?a.a.createElement(d,l(l({ref:t},u),{},{components:n})):a.a.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);