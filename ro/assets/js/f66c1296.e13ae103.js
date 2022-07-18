"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[33128],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},700010:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return b}});var r=n(603905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&c(e,n,t[n]);return e};const m={id:"kmeans",title:"k-means Clustering",sidebar_label:"k-means Clustering"},d=void 0,f={unversionedId:"models/kmeans",id:"models/kmeans",title:"k-means Clustering",description:"Gruparea K-means.",source:"@site/i18n/ro/docusaurus-plugin-content-docs/current/models/kmeans.md",sourceDirName:"models",slug:"/models/kmeans",permalink:"/ro/docs/models/kmeans",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/kmeans.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1658117079,formattedLastUpdatedAt:"18 iul. 2022",frontMatter:{id:"kmeans",title:"k-means Clustering",sidebar_label:"k-means Clustering"},sidebar:"docs",previous:{title:"Hierarchical Clustering",permalink:"/ro/docs/models/hierarchical-clustering"},next:{title:"LASSO Regression",permalink:"/ro/docs/models/lasso-regression"}},k={},b=[{value:"Op\u021biuni",id:"op\u021biuni",level:2},{value:"Exemple",id:"exemple",level:2}],g={toc:b};function y(e){var t,n=e,{components:a}=n,c=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},g),c),i(t,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Gruparea K-means."),(0,r.kt)("h2",p({},{id:"op\u021biuni"}),"Op\u021biuni"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object (required)"),": obiect de matrice de valori. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"variables")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),": numele variabilelor utilizate pentru grupare. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"K")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": num\u0103rul de clustere. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"3"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"elbowPlot")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": boolean care indic\u0103 dac\u0103 se include sau nu diagrama cotului. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"initialization")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": metoda de ini\u021bializare (",(0,r.kt)("inlineCode",{parentName:"li"},"kmeans++"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"random"),", sau ",(0,r.kt)("inlineCode",{parentName:"li"},"mostDistant"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'kmeans++'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onResult")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": callback invocat cu obiectul model. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onResult() {}"),".")),(0,r.kt)("h2",p({},{id:"exemple"}),"Exemple"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<KMeans \n    data={heartdisease} \n    variables={[ 'Age', 'Cost' ]}\n/>\n")))}y.isMDXComponent=!0}}]);