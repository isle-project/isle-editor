(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{176:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),a=(n(0),n(411)),l={id:"multiple-linear-regression",title:"Multiple Linear Regression",sidebar_label:"Multiple Linear Regression"},o={unversionedId:"models/multiple-linear-regression",id:"models/multiple-linear-regression",isDocsHomePage:!1,title:"Multiple Linear Regression",description:"\u591a\u7ebf\u6027\u56de\u5f52\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/models/multiple-linear-regression.md",slug:"/models/multiple-linear-regression",permalink:"/zh/docs/models/multiple-linear-regression",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/multiple-linear-regression.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614613459,sidebar_label:"Multiple Linear Regression",sidebar:"docs",previous:{title:"Logistic Regression",permalink:"/zh/docs/models/logistic-regression"},next:{title:"Naive Bayes",permalink:"/zh/docs/models/naive-bayes"}},c=[{value:"\u9009\u9879",id:"\u9009\u9879",children:[]},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u591a\u7ebf\u6027\u56de\u5f52\u3002"),Object(a.b)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"data")," | ",Object(a.b)("inlineCode",{parentName:"li"},"object (required)"),": \u503c\u6570\u7ec4\u5bf9\u8c61. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"y")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string (required)"),": \u7ed3\u679c\u53d8\u91cf. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"x")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(array<(string|Factor)>|string|Factor) (required)"),": \u4e00\u4e2a\u6216\u591a\u4e2a\u9884\u6d4b\u53d8\u91cf. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"quantitative")," | ",Object(a.b)("inlineCode",{parentName:"li"},"array<string> (required)"),': "\u6570\u636e "\u4e2d\u7684 "\u5b9a\u91cf "\u53d8\u91cf\u6570\u7ec4\u3002. Default: ',Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"omitMissing")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": \u63a7\u5236\u662f\u5426\u7701\u7565\u7f3a\u5931\u503c. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"intercept")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": \u63a7\u5236\u662f\u5426\u62df\u5408\u5e26\u6709\u622a\u8ddd\u9879\u7684\u6a21\u578b\u3002. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"true"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onDiagnostics")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": \u8bca\u65ad\u56fe\u8c03\u7528\u7684\u56de\u8c03. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onPredict")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": \u6a21\u578b\u62df\u5408\u540e\uff0c\u8c03\u7528\u56de\u8c03\u6765\u5904\u7406\u9884\u6d4b\u548c\u6b8b\u5dee\u3002. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),".")),Object(a.b)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MultipleLinearRegression \n    data={heartdisease} \n    y=\"Cost\"\n    x={[ 'Complications', 'Gender', 'Age', 'Interventions' ]}\n    quantitative={[ 'Age', 'Cost', 'Interventions' ]}\n/>\n")))}u.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(l,".").concat(d)]||b[d]||p[d]||a;return n?i.a.createElement(m,o(o({ref:t},s),{},{components:n})):i.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);