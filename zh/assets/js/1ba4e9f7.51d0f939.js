(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{140:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),c=r(7),a=(r(0),r(411)),o={id:"clt-discrete",title:"Discrete CLT",sidebar_label:"Discrete CLT"},i={unversionedId:"learn/clt-discrete",id:"learn/clt-discrete",isDocsHomePage:!1,title:"Discrete CLT",description:"\u4e00\u4e2a\u5b66\u4e60\u7ec4\u4ef6\uff0c\u8bf4\u660e\u4e00\u4e2a\u89c4\u8303\u7684\u79bb\u6563\u5206\u5e03\uff0c\u4e8c\u9879\u5206\u5e03\u7684\u4e2d\u5fc3\u6781\u9650\u5b9a\u7406\uff08CLT\uff09\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/learn/clt-discrete.md",slug:"/learn/clt-discrete",permalink:"/zh/docs/learn/clt-discrete",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/clt-discrete.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Discrete CLT",sidebar:"docs",previous:{title:"Continuous CLT",permalink:"/zh/docs/learn/clt-continuous"},next:{title:"CLT Sample",permalink:"/zh/docs/learn/clt-sample"}},l=[{value:"\u9009\u9879",id:"\u9009\u9879",children:[]},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[]}],u={toc:l};function s(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u4e00\u4e2a\u5b66\u4e60\u7ec4\u4ef6\uff0c\u8bf4\u660e\u4e00\u4e2a\u89c4\u8303\u7684\u79bb\u6563\u5206\u5e03\uff0c\u4e8c\u9879\u5206\u5e03\u7684\u4e2d\u5fc3\u6781\u9650\u5b9a\u7406\uff08CLT\uff09\u3002"),Object(a.b)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"showPopStdev")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": \u63a7\u5236\u662f\u5426\u663e\u793a\u4eba\u53e3\u6807\u51c6\u5dee. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"true"),".")),Object(a.b)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnDiscreteCLT />\n")))}s.isMDXComponent=!0},411:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var u=c.a.createContext({}),s=function(e){var t=c.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return c.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},b=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),b=n,f=p["".concat(o,".").concat(b)]||p[b]||d[b]||a;return r?c.a.createElement(f,i(i({ref:t},u),{},{components:r})):c.a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<a;u++)o[u]=r[u];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);