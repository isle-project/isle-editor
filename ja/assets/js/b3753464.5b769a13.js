(window.webpackJsonp=window.webpackJsonp||[]).push([[318],{258:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),a=(n(0),n(411)),o={id:"reaction",title:"Reaction",sidebar_label:"Reaction"},c={unversionedId:"reaction",id:"reaction",isDocsHomePage:!1,title:"Reaction",description:"\u30e6\u30fc\u30b6\u30fc\u306e\u30a2\u30af\u30b7\u30e7\u30f3\u306b\u5fdc\u3058\u3066\u7570\u306a\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u8868\u793a\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/reaction.md",slug:"/reaction",permalink:"/ja/docs/reaction",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/reaction.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Reaction"},l=[{value:"\u30aa\u30d7\u30b7\u30e7\u30f3",id:"\u30aa\u30d7\u30b7\u30e7\u30f3",children:[]},{value:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002",id:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u30e6\u30fc\u30b6\u30fc\u306e\u30a2\u30af\u30b7\u30e7\u30f3\u306b\u5fdc\u3058\u3066\u7570\u306a\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),Object(a.b)("h2",{id:"\u30aa\u30d7\u30b7\u30e7\u30f3"},"\u30aa\u30d7\u30b7\u30e7\u30f3"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"actionID")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string (required)"),": \u30a6\u30a9\u30c3\u30c1\u3059\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306eID. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"show")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(object|function)"),": \u7570\u306a\u308b\u30ec\u30b9\u30dd\u30f3\u30b9\u304c\u4e0e\u3048\u3089\u308c\u305f\u5834\u5408\u306b\u8868\u793a\u3059\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30cf\u30c3\u30b7\u30e5\u30c6\u30fc\u30d6\u30eb(",Object(a.b)("inlineCode",{parentName:"li"},"key")," \u304c\u30ec\u30b9\u30dd\u30f3\u30b9\u306b\u30de\u30c3\u30c1\u3057\u306a\u3044\u5834\u5408\u3001",Object(a.b)("inlineCode",{parentName:"li"},"default")," \u30ad\u30fc\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308c\u3070\u305d\u308c\u306b\u5bfe\u5fdc\u3059\u308b\u5024\u304c\u8868\u793a\u3055\u308c\u307e\u3059)\u3001\u307e\u305f\u306f\u8868\u793a\u3059\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u8fd4\u3059\u95a2\u6570(\u95a2\u6570\u306e\u552f\u4e00\u306e\u5f15\u6570\u306f\u6700\u65b0\u306e\u7d50\u679c\u3067\u3059)\u3067\u3059\u3002. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(a.b)("h2",{id:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"},"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<div>\n    <NumberQuestion\n        question="What is the first prime number?"\n        id="question-with-reaction"\n    />\n    <Reaction actionID="question-with-reaction" show={( answer ) => {\n        if ( answer === 2 ) {\n            return <p>Awesome, that was correct.</p>\n        }\n        return <p>You might want to review the following video on prime numbers:\n            <VideoPlayer url="https://www.youtube.com/watch?v=mIStB5X4U8M" />\n        </p>;\n    }} />\n</div>\n')))}p.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),p=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(o,".").concat(d)]||s[d]||b[d]||a;return n?i.a.createElement(m,c(c({ref:t},u),{},{components:n})):i.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);