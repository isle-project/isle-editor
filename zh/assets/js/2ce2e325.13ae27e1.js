(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{155:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),i=(r(0),r(410)),l={id:"data-sampler",title:"Data Sampler",sidebar_label:"Data Sampler"},o={unversionedId:"data-sampler",id:"data-sampler",isDocsHomePage:!1,title:"Data Sampler",description:"\u7ec4\u4ef6\u4ece\u6570\u636e\u96c6\u4e2d\u62bd\u53d6\u89c2\u6d4b\u503c\u7684\u6837\u672c\uff0c\u5e76\u5c06\u5176\u4f20\u9012\u7ed9\u5b50\u7ec4\u4ef6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/data-sampler.md",slug:"/data-sampler",permalink:"/zh/docs/data-sampler",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/data-sampler.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614615291,formattedLastUpdatedAt:"2021/3/1",sidebar_label:"Data Sampler",sidebar:"docs",previous:{title:"Dashboard",permalink:"/zh/docs/dashboard"},next:{title:"Expire",permalink:"/zh/docs/expire"}},c=[{value:"\u9009\u9879",id:"\u9009\u9879",children:[]},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[]}],p={toc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u7ec4\u4ef6\u4ece\u6570\u636e\u96c6\u4e2d\u62bd\u53d6\u89c2\u6d4b\u503c\u7684\u6837\u672c\uff0c\u5e76\u5c06\u5176\u4f20\u9012\u7ed9\u5b50\u7ec4\u4ef6\u3002"),Object(i.b)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"data")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object (required)"),": \u6570\u636e\u5bf9\u8c61\uff0c\u952e\u4e0e\u5217\u53d8\u91cf\u76f8\u5bf9\u5e94. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"sampleSize")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": \u9ed8\u8ba4\u6837\u672c\u91cf. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"50"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"minSampleSize")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": \u6700\u5c0f\u5141\u8bb8\u6837\u672c\u91cf. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"1"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"maxSampleSize")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": \u6700\u5927\u5141\u8bb8\u6837\u672c\u91cf. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),".")),Object(i.b)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<DataSampler data={heartdisease} >\n  {( sample ) => {\n    return <DataTable\n      data={sample}\n    />;\n  }}\n</DataSampler>\n")))}u.isMDXComponent=!0},410:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,m=b["".concat(l,".").concat(d)]||b[d]||s[d]||i;return r?a.a.createElement(m,o(o({ref:t},p),{},{components:r})):a.a.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);