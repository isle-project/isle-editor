"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7642],{603905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(202784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||l;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},21540:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=r(487462),o=r(263366),l=(r(202784),r(603905)),a=["components"],i={id:"qqplot",title:"QQ Plot",sidebar_label:"QQ Plot"},c=void 0,p={unversionedId:"plots/qqplot",id:"plots/qqplot",title:"QQ Plot",description:"\u0394\u03b9\u03ac\u03b3\u03c1\u03b1\u03bc\u03bc\u03b1 QQ \u03ba\u03b1\u03bd\u03bf\u03bd\u03b9\u03ba\u03ae\u03c2 \u03ba\u03b1\u03c4\u03b1\u03bd\u03bf\u03bc\u03ae\u03c2.",source:"@site/i18n/el/docusaurus-plugin-content-docs/current/plots/qqplot.md",sourceDirName:"plots",slug:"/plots/qqplot",permalink:"/el/docs/plots/qqplot",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/qqplot.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1/6/2021",frontMatter:{id:"qqplot",title:"QQ Plot",sidebar_label:"QQ Plot"},sidebar:"docs",previous:{title:"Pie Chart",permalink:"/el/docs/plots/piechart"},next:{title:"Scatter Plot",permalink:"/el/docs/plots/scatterplot"}},u=[{value:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",children:[],level:2},{value:"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",children:[],level:2}],s={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u0394\u03b9\u03ac\u03b3\u03c1\u03b1\u03bc\u03bc\u03b1 QQ \u03ba\u03b1\u03bd\u03bf\u03bd\u03b9\u03ba\u03ae\u03c2 \u03ba\u03b1\u03c4\u03b1\u03bd\u03bf\u03bc\u03ae\u03c2."),(0,l.kt)("h2",{id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"},"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"data")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object (required)"),": \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03c4\u03c9\u03bd \u03c0\u03b9\u03bd\u03ac\u03ba\u03c9\u03bd \u03c4\u03b9\u03bc\u03ce\u03bd. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"variable")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string (required)"),": \u03bc\u03b5\u03c4\u03b1\u03b2\u03bb\u03b7\u03c4\u03ae \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03b5\u03bc\u03c6\u03ac\u03bd\u03b9\u03c3\u03b7. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,l.kt)("h2",{id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"},"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<QQPlot \n    data={heartdisease} \n    variable="Age"\n/>\n')))}d.isMDXComponent=!0}}]);