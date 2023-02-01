"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46766],{603905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(202784);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(r),d=i,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},28265:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return g}});var n=r(603905),i=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(o)for(var r of o(t))s.call(t,r)&&u(e,r,t[r]);return e};const m={id:"hierarchical-clustering",title:"Hierarchical Clustering",sidebar_label:"Hierarchical Clustering"},d=void 0,f={unversionedId:"models/hierarchical-clustering",id:"models/hierarchical-clustering",title:"Hierarchical Clustering",description:"Hierarhisk\u0101 klasteriz\u0101cija.",source:"@site/i18n/lv/docusaurus-plugin-content-docs/current/models/hierarchical-clustering.md",sourceDirName:"models",slug:"/models/hierarchical-clustering",permalink:"/lv/docs/models/hierarchical-clustering",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/hierarchical-clustering.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021. g. 1. j\u016bn.",frontMatter:{id:"hierarchical-clustering",title:"Hierarchical Clustering",sidebar_label:"Hierarchical Clustering"},sidebar:"docs",previous:{title:"Decision Tree",permalink:"/lv/docs/models/decision-tree"},next:{title:"k-means Clustering",permalink:"/lv/docs/models/kmeans"}},k={},g=[{value:"Iesp\u0113jas",id:"iesp\u0113jas",level:2},{value:"Piem\u0113ri",id:"piem\u0113ri",level:2}],b={toc:g};function v(e){var t,r=e,{components:i}=r,u=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},b),u),a(t,l({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Hierarhisk\u0101 klasteriz\u0101cija."),(0,n.kt)("h2",p({},{id:"iesp\u0113jas"}),"Iesp\u0113jas"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"data")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object (required)"),": v\u0113rt\u012bbu mas\u012bvu objekts. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"variables")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),": klasteriz\u0113\u0161anai izmantoto main\u012bgo nosaukumi. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"linkage")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": vai nu ",(0,n.kt)("inlineCode",{parentName:"li"},"piln\u012bgs"),", vai ",(0,n.kt)("inlineCode",{parentName:"li"},"vienreiz\u0113js"),".. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"'complete'"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"distance")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": izmantotais att\u0101lums (",(0,n.kt)("inlineCode",{parentName:"li"},"eikl\u012bda"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"\u0136eby\u0161eva"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"koz\u012bns"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"haminga")," vai ",(0,n.kt)("inlineCode",{parentName:"li"},"manhetena"),").. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"'euclidean'"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onResult")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": callback, kas izsaukts ar mode\u013ca objektu. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onResult() {}"),".")),(0,n.kt)("h2",p({},{id:"piem\u0113ri"}),"Piem\u0113ri"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<HierarchicalClustering \n    data={heartdisease} \n    variables={[ 'Age', 'Cost', 'Interventions' ]}\n/>\n")))}v.isMDXComponent=!0}}]);