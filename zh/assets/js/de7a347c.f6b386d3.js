(window.webpackJsonp=window.webpackJsonp||[]).push([[347],{287:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),l=(n(0),n(409)),i={id:"r-shell",title:"R Shell",sidebar_label:"R Shell"},o={unversionedId:"r/r-shell",id:"r/r-shell",isDocsHomePage:!1,title:"R Shell",description:"\u4e00\u4e2a\u4ea4\u4e92\u5f0f\u7684R Shell\uff0c\u53ef\u4ee5\u7528\u6765\u5728\u4e91\u7aef\u4f7f\u7528OpenCPU\u6267\u884cR\u547d\u4ee4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/r/shell.md",slug:"/r/r-shell",permalink:"/zh/docs/r/r-shell",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/r/shell.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"R Shell",sidebar:"docs",previous:{title:"R Plot",permalink:"/zh/docs/r/r-plot"},next:{title:"R Table",permalink:"/zh/docs/r/r-table"}},b=[{value:"\u9009\u9879",id:"\u9009\u9879",children:[]},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[]}],c={toc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u4e00\u4e2a\u4ea4\u4e92\u5f0f\u7684R Shell\uff0c\u53ef\u4ee5\u7528\u6765\u5728\u4e91\u7aef\u4f7f\u7528",Object(l.b)("a",{parentName:"p",href:"https://www.opencpu.org/"},"OpenCPU"),"\u6267\u884cR\u547d\u4ee4\u3002"),Object(l.b)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"code")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": \u8981\u8bc4\u4f30\u7684R\u4ee3\u7801. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"''"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"solution")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": \u5bf9\u4e8e\u7f16\u7a0b\u95ee\u9898\uff0cR\u4ee3\u7801",Object(l.b)("inlineCode",{parentName:"li"},"string"),"\u4ee3\u8868\u95ee\u9898\u7684\u6b63\u5f0f\u89e3\u51b3\u65b9\u6848. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"''"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"hints")," | ",Object(l.b)("inlineCode",{parentName:"li"},"array<(string|node)>"),": \u5bf9\u4e8e\u7f16\u7a0b\u95ee\u9898\uff0c\u4e00\u7cfb\u5217\u7684\u63d0\u793a\u63d0\u4f9b\u4e86\u5982\u4f55\u5904\u7406\u95ee\u9898\u7684\u6307\u5bfc\u3002. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"addPreceding")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),': \u5982\u679c\u8bbe\u7f6e\u4e3a "true"\uff0c\u5219shell\u5c06\u8bc4\u4f30\u5f53\u524d\u7ec4\u4ef6\u7684\u6240\u6709\u4ee3\u7801\u548c\u8bfe\u7a0b\u4e2d\u51fa\u73b0\u7684\u6240\u6709\u5148\u524d\u7684\u4ee3\u7801\u3002. Default: ',Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"libraries")," | ",Object(l.b)("inlineCode",{parentName:"li"},"array"),': \u5f53\u8f93\u5165\u7684 "code "\u88ab\u6267\u884c\u65f6\uff0c\u5e94\u81ea\u52a8\u52a0\u8f7d\u7684R\u5e93\u3002. Default: ',Object(l.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"precompute")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": \u63a7\u5236\u7ec4\u4ef6\u6302\u8f7d\u540e\u662f\u5426\u5e94\u8be5\u6267\u884c\u9ed8\u8ba4\u4ee3\u7801\u3002. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"prependCode")," | ",Object(l.b)("inlineCode",{parentName:"li"},"(string|array)"),': \u5728\u8bc4\u4f30 "code "\u65f6\uff0c\u5c06R\u4ee3\u7801 "string"(\u6216R\u4ee3\u7801\u5757 "array")\u524d\u7f6e\u5230\u5b58\u50a8\u5728 "code "\u4e2d\u7684\u4ee3\u7801\u3002. Default: ',Object(l.b)("inlineCode",{parentName:"li"},"''"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"chat")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": \u63a7\u5236\u662f\u5426\u5e94\u8be5\u542f\u7528\u7fa4\u804a\u529f\u80fd. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"disabled")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": \u63a7\u5236\u662f\u5426\u7981\u7528\u6240\u6709\u7528\u6237\u8f93\u5165\u5e76\u4f7f\u4ee3\u7801\u5757\u9759\u6001\u5316\u3002. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lines")," | ",Object(l.b)("inlineCode",{parentName:"li"},"number"),": \u663e\u793a\u884c\u6570. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"5"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"resettable")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": \u63a7\u5236\u662f\u5426\u663e\u793a\u590d\u4f4d\u6309\u94ae\uff0c\u4ee5\u6062\u590d\u9ed8\u8ba4\u4ee3\u7801\u8f93\u5165\u3002. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"style")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": CSS\u5185\u8054\u6837\u5f0f. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onChange")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": \u6bcf\u5f53\u6587\u672c\u5b57\u6bb5\u8f93\u5165\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u5c31\u4f1a\u8c03\u7528\u56de\u8c03\u3002. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onChange() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onEvaluate")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),': \u6bcf\u5f53\u70b9\u51fb "\u8bc4\u4ef7 "\u6309\u94ae\u65f6\uff0c\u5c31\u4f1a\u8c03\u7528\u56de\u8c03\u3002. Default: ',Object(l.b)("inlineCode",{parentName:"li"},"onEvaluate(){}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onResult")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),': \u6bcf\u5f53\u4ece\u4e91\u4e2d\u83b7\u53d6\u4ee3\u7801\u6267\u884c\u7ed3\u679c\u65f6\uff0c\u5c31\u4f1a\u8c03\u7528\u56de\u8c03\u3002\u7ed3\u679c "string "\u4f5c\u4e3a\u552f\u4e00\u53c2\u6570\u4f20\u9012\u7ed9\u56de\u8c03\u51fd\u6570\u3002. Default: ',Object(l.b)("inlineCode",{parentName:"li"},"onResult() {}"),".")),Object(l.b)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<RShell\n    code="abs(c(-2,3,-1))"\n/>\n')))}p.isMDXComponent=!0},409:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||s[m]||l;return n?a.a.createElement(d,o(o({ref:t},c),{},{components:n})):a.a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);