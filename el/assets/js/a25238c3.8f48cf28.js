"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1246],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},18507:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return m},default:function(){return d}});var r=n(487462),a=n(263366),i=(n(202784),n(603905)),l=["components"],o={id:"kmeans",title:"k-means Clustering",sidebar_label:"k-means Clustering"},s=void 0,u={unversionedId:"models/kmeans",id:"models/kmeans",title:"k-means Clustering",description:"\u039f\u03bc\u03b1\u03b4\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7 K-means.",source:"@site/i18n/el/docusaurus-plugin-content-docs/current/models/kmeans.md",sourceDirName:"models",slug:"/models/kmeans",permalink:"/el/docs/models/kmeans",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/kmeans.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1/6/2021",frontMatter:{id:"kmeans",title:"k-means Clustering",sidebar_label:"k-means Clustering"},sidebar:"docs",previous:{title:"Hierarchical Clustering",permalink:"/el/docs/models/hierarchical-clustering"},next:{title:"LASSO Regression",permalink:"/el/docs/models/lasso-regression"}},c={},m=[{value:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",level:2},{value:"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",level:2}],p={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u039f\u03bc\u03b1\u03b4\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7 K-means."),(0,i.kt)("h2",{id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"},"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"data")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object (required)"),": \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03c4\u03c9\u03bd \u03c0\u03b9\u03bd\u03ac\u03ba\u03c9\u03bd \u03c4\u03b9\u03bc\u03ce\u03bd. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"variables")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),": \u03bf\u03bd\u03cc\u03bc\u03b1\u03c4\u03b1 \u03bc\u03b5\u03c4\u03b1\u03b2\u03bb\u03b7\u03c4\u03ce\u03bd \u03c0\u03bf\u03c5 \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03bf\u03cd\u03bd\u03c4\u03b1\u03b9 \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03bf\u03bc\u03b1\u03b4\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"K")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03c3\u03c5\u03c3\u03c4\u03ac\u03b4\u03c9\u03bd. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"3"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"initialization")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": \u03bc\u03ad\u03b8\u03bf\u03b4\u03bf\u03c2 \u03b1\u03c1\u03c7\u03b9\u03ba\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7\u03c2 (",(0,i.kt)("inlineCode",{parentName:"li"},"kmeans++"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"random"),", \u03ae ",(0,i.kt)("inlineCode",{parentName:"li"},"mostDistant"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'kmeans++'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onResult")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": callback \u03c0\u03bf\u03c5 \u03ba\u03b1\u03bb\u03b5\u03af\u03c4\u03b1\u03b9 \u03bc\u03b5 \u03c4\u03bf \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03c4\u03bf\u03c5 \u03bc\u03bf\u03bd\u03c4\u03ad\u03bb\u03bf\u03c5. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onResult() {}"),".")),(0,i.kt)("h2",{id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"},"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<KMeans \n    data={heartdisease} \n    variables={[ 'Age', 'Cost' ]}\n/>\n")))}d.isMDXComponent=!0}}]);