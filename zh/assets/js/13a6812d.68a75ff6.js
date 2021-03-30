(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{127:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(410)),o={id:"sunburst",title:"Sunburst Plot",sidebar_label:"Sunburst Plot"},l={unversionedId:"plots/sunburst",id:"plots/sunburst",isDocsHomePage:!1,title:"Sunburst Plot",description:"\u4e00\u4e2a\u57fa\u4e8ed3\u7684\u592a\u9633\u7eb9\u56fe\uff0c\u7528\u4e8e\u663e\u793a\u8def\u5f84\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/plots/sunburst.md",slug:"/plots/sunburst",permalink:"/zh/docs/plots/sunburst",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/sunburst.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614551296,formattedLastUpdatedAt:"2021/2/28",sidebar_label:"Sunburst Plot",sidebar:"docs",previous:{title:"Scatter Plot Matrix",permalink:"/zh/docs/plots/scatterplot-matrix"},next:{title:"Violin Plot",permalink:"/zh/docs/plots/violinplot"}},c=[{value:"\u9009\u9879",id:"\u9009\u9879",children:[]},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[]}],u={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u4e00\u4e2a\u57fa\u4e8ed3\u7684\u592a\u9633\u7eb9\u56fe\uff0c\u7528\u4e8e\u663e\u793a\u8def\u5f84\u3002"),Object(i.b)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"categories")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array (required)"),": \u7c7b\u522b\u540d\u79f0\u6570\u7ec4. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"data")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object (required)"),": \u6570\u636e\u5bf9\u8c61. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"width")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": \u7ed8\u56fe\u5bbd\u5ea6(\u5355\u4f4d\uff1apx). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"750"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"height")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": \u7ed8\u56fe\u9ad8\u5ea6(\u5355\u4f4d\uff1apx). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"600"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": CSS\u5185\u8054\u6837\u5f0f. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"breadcrumbs")," | ",Object(i.b)("inlineCode",{parentName:"li"},"{w,h,s,t}"),': \u5bf9\u8c61\u7684\u5c3a\u5bf8\u3002"w "\u4ee3\u8868\u5bbd\u5ea6\uff0c"h "\u4ee3\u8868\u9ad8\u5ea6\uff0c"s "\u4ee3\u8868\u95f4\u8ddd\uff0c"t "\u4ee3\u8868\u5c16\u7aef/\u5c3e\u90e8\u7684\u5bbd\u5ea6\u3002. Default: ',Object(i.b)("inlineCode",{parentName:"li"},"{\n  'w': 250,\n  'h': 50,\n  's': 5,\n  't': 15\n}"),".")),Object(i.b)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"")))}b.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,m=p["".concat(o,".").concat(d)]||p[d]||s[d]||i;return n?a.a.createElement(m,l(l({ref:t},u),{},{components:n})):a.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);