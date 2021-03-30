(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(410)),i={id:"network-plot",title:"NetworkPlot",sidebar_label:"NetworkPlot"},l={unversionedId:"plots/network-plot",id:"plots/network-plot",isDocsHomePage:!1,title:"NetworkPlot",description:"\u0421\u0435\u0442\u0435\u0432\u043e\u0439 \u0443\u0447\u0430\u0441\u0442\u043e\u043a \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 d3.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/plots/network-plot.md",slug:"/plots/network-plot",permalink:"/ru/docs/plots/network-plot",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/network-plot.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614201626,formattedLastUpdatedAt:"24.02.2021",sidebar_label:"NetworkPlot",sidebar:"docs",previous:{title:"Mosaic Plot",permalink:"/ru/docs/plots/mosaicplot"},next:{title:"Pie Chart",permalink:"/ru/docs/plots/piechart"}},c=[{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:[]}],p={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u0421\u0435\u0442\u0435\u0432\u043e\u0439 \u0443\u0447\u0430\u0441\u0442\u043e\u043a \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 d3."),Object(a.b)("h2",{id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"data")," | ",Object(a.b)("inlineCode",{parentName:"li"},"{nodes,links} (required)"),": \u043e\u0431\u044a\u0435\u043a\u0442 \u0441 ",Object(a.b)("inlineCode",{parentName:"li"},"\u0443\u0437\u043b\u0430\u043c\u0438")," \u0438 ",Object(a.b)("inlineCode",{parentName:"li"},"\u0441\u0441\u044b\u043b\u043a\u0430\u043c\u0438"),"; ",Object(a.b)("inlineCode",{parentName:"li"},"\u0443\u0437\u043b\u044b")," \u0434\u043e\u043b\u0436\u043d\u044b \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u0441\u043e\u0431\u043e\u0439 \u043c\u0430\u0441\u0441\u0438\u0432 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0441\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e\u043c ",Object(a.b)("inlineCode",{parentName:"li"},"id"),", ",Object(a.b)("inlineCode",{parentName:"li"},"\u0441\u0441\u044b\u043b\u043a\u0430\u043c\u0438")," - \u043c\u0430\u0441\u0441\u0438\u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0441 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c\u0438, \u0438\u043c\u0435\u044e\u0449\u0438\u043c\u0438 ",Object(a.b)("inlineCode",{parentName:"li"},"\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a")," \u0438 ",Object(a.b)("inlineCode",{parentName:"li"},"target")," id.. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"width")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": \u0448\u0438\u0440\u0438\u043d\u0430 \u0443\u0447\u0430\u0441\u0442\u043a\u0430 (\u0432 px). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"900"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"height")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": \u0432\u044b\u0441\u043e\u0442\u0430 \u0443\u0447\u0430\u0441\u0442\u043a\u0430 (\u0432 px). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"600"),".")),Object(a.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<NetworkPlot\n    width={400}\n    height={400}\n    data={{\n        nodes: [\n            { 'id': 0 },\n            { 'id': 1 },\n            { 'id': 2 },\n            { 'id': 3 },\n        ],\n        links: [\n            { 'source': 0, 'target': 1 },\n            { 'source': 0, 'target': 2 },\n            { 'source': 2, 'target': 3 }\n        ]\n    }}\n/>\n")))}u.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=u(n),s=r,m=b["".concat(i,".").concat(s)]||b[s]||d[s]||a;return n?o.a.createElement(m,l(l({ref:t},p),{},{components:n})):o.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);