(window.webpackJsonp=window.webpackJsonp||[]).push([[349],{289:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(409)),l={id:"scatterplot",title:"Scatter Plot",sidebar_label:"Scatter Plot"},o={unversionedId:"plots/scatterplot",id:"plots/scatterplot",isDocsHomePage:!1,title:"Scatter Plot",description:"\u914d\u5217\u306e\u6700\u5c0f\u5024\u3068\u6700\u5927\u5024\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/plots/scatterplot.md",slug:"/plots/scatterplot",permalink:"/ja/docs/plots/scatterplot",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/scatterplot.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Scatter Plot",sidebar:"docs",previous:{title:"QQ Plot",permalink:"/ja/docs/plots/qqplot"},next:{title:"Scatter Plot Matrix",permalink:"/ja/docs/plots/scatterplot-matrix"}},c=[{value:"\u30aa\u30d7\u30b7\u30e7\u30f3",id:"\u30aa\u30d7\u30b7\u30e7\u30f3",children:[]},{value:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002",id:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002",children:[]}],b={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u914d\u5217\u306e\u6700\u5c0f\u5024\u3068\u6700\u5927\u5024\u3092\u8a08\u7b97\u3057\u307e\u3059\u3002"),Object(i.b)("h2",{id:"\u30aa\u30d7\u30b7\u30e7\u30f3"},"\u30aa\u30d7\u30b7\u30e7\u30f3"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"data")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object (required)"),": \u5404\u5909\u6570\u306e\u5024\u306e\u914d\u5217\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"xval")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string (required)"),": X\u8ef8\u306b\u8868\u793a\u3059\u308b\u305f\u3081\u306e\u5909\u6570. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"yval")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string (required)"),": y\u8ef8\u306b\u8868\u793a\u3059\u308b\u305f\u3081\u306e\u5909\u6570. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"text")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": \u5404\u30dd\u30a4\u30f3\u30c8\u306e\u6a2a\u306b\u8868\u793a\u3055\u308c\u308b\u30c6\u30ad\u30b9\u30c8. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"color")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": \u70b9\u306e\u8272\u306b\u5bfe\u5fdc\u3055\u305b\u308b\u7bc4\u7587\u5909\u6570. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"type")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": \u8868\u793a\u3055\u308c\u305f\u30b7\u30f3\u30dc\u30eb\u306b\u30de\u30c3\u30d4\u30f3\u30b0\u3059\u308b\u30ab\u30c6\u30b4\u30ea\u5909\u6570. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"size")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": \u70b9\u306e\u5927\u304d\u3055\u306b\u5bfe\u5fdc\u3059\u308b\u91cf\u7684\u5909\u6570. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"regressionLine")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": \u56de\u5e30\u76f4\u7dda\u3092\u30aa\u30fc\u30d0\u30fc\u30ec\u30a4\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3059\u308b. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"regressionMethod")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array<string>"),": \u7dda\u5f62\u56de\u5e30\u3068\u5e73\u6ed1\u5316\u3055\u308c\u305fLOWESS\u56de\u5e30\u7dda\u3092\u8868\u793a\u3059\u308b\u305f\u3081\u306e ",Object(i.b)("inlineCode",{parentName:"li"},"linear")," \u304a\u3088\u3073/\u307e\u305f\u306f ",Object(i.b)("inlineCode",{parentName:"li"},"smooth"),"\u3002. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"[\n  'linear'\n]"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"lineBy")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": \u6307\u5b9a\u3055\u308c\u305f\u30ab\u30c6\u30b4\u30ea\u5909\u6570\u306e\u30ab\u30c6\u30b4\u30ea\u3054\u3068\u306b\u500b\u5225\u306e\u56de\u5e30\u7dda\u3092\u8868\u793a\u3059\u308b. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"smoothSpan")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": \u30b9\u30e0\u30fc\u30ba\u56de\u5e30\u7dda\u306e\u5e73\u6ed1\u5316\u30b9\u30d1\u30f3\u30d1\u30e9\u30e1\u30fc\u30bf. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"0.66"),".")),Object(i.b)("h2",{id:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"},"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ScatterPlot \n    data={heartdisease} \n    xval="Age"\n    yval="Cost"\n/>\n')))}p.isMDXComponent=!0},409:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,d=s["".concat(l,".").concat(m)]||s[m]||u[m]||i;return n?a.a.createElement(d,o(o({ref:t},b),{},{components:n})):a.a.createElement(d,o({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var b=2;b<i;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);