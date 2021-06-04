(self.webpackChunk=self.webpackChunk||[]).push([[8678],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78828:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var r=n(722122),i=n(419756),o=(n(202784),n(603905)),a={id:"reaction",title:"Reaction",sidebar_label:"Reaction"},c={unversionedId:"reaction",id:"reaction",isDocsHomePage:!1,title:"Reaction",description:"\u6839\u636e\u7528\u6237\u7684\u64cd\u4f5c\u663e\u793a\u4e0d\u540c\u7684\u7ec4\u4ef6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reaction.md",sourceDirName:".",slug:"/reaction",permalink:"/docs/reaction",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/reaction.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"2021/2/21",sidebar_label:"Reaction",frontMatter:{id:"reaction",title:"Reaction",sidebar_label:"Reaction"}},u=[{value:"\u9009\u9879",id:"\u9009\u9879",children:[]},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[]}],l={toc:u};function s(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6839\u636e\u7528\u6237\u7684\u64cd\u4f5c\u663e\u793a\u4e0d\u540c\u7684\u7ec4\u4ef6\u3002"),(0,o.kt)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"actionID")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string (required)"),": \u8981\u89c2\u5bdf\u7684\u7ec4\u4ef6\u7684ID. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"show")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(object|function)"),': \u6839\u636e\u4e0d\u540c\u7684\u54cd\u5e94\uff0c\u8981\u663e\u793a\u7684\u7ec4\u4ef6\u6563\u5217\u8868\uff08\u5982\u679c\u6ca1\u6709\u4e0e\u54cd\u5e94\u76f8\u5339\u914d\u7684 "key"\uff0c\u5c06\u663e\u793a\u4e0e "\u9ed8\u8ba4 "\u952e\u5bf9\u5e94\u7684\u503c\uff08\u5982\u679c\u8bbe\u7f6e\uff09\uff09\u6216\u8fd4\u56de\u8981\u663e\u793a\u7684\u7ec4\u4ef6\u7684\u51fd\u6570\uff08\u51fd\u6570\u7684\u552f\u4e00\u53c2\u6570\u662f\u6700\u65b0\u7ed3\u679c\uff09\u3002. Default: ',(0,o.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,o.kt)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<div>\n    <NumberQuestion\n        question="What is the first prime number?"\n        id="question-with-reaction"\n    />\n    <Reaction actionID="question-with-reaction" show={( answer ) => {\n        if ( answer === 2 ) {\n            return <p>Awesome, that was correct.</p>\n        }\n        return <p>You might want to review the following video on prime numbers:\n            <VideoPlayer url="https://www.youtube.com/watch?v=mIStB5X4U8M" />\n        </p>;\n    }} />\n</div>\n')))}s.isMDXComponent=!0}}]);