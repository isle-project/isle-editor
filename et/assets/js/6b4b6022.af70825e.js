"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[17891],{603905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(202784);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},34902:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return g}});var n=r(603905),i=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&s(e,r,t[r]);if(o)for(var r of o(t))u.call(t,r)&&s(e,r,t[r]);return e};const d={id:"hierarchical-clustering",title:"Hierarchical Clustering",sidebar_label:"Hierarchical Clustering"},m=void 0,f={unversionedId:"models/hierarchical-clustering",id:"models/hierarchical-clustering",title:"Hierarchical Clustering",description:"Hierarhiline klasterdamine.",source:"@site/i18n/et/docusaurus-plugin-content-docs/current/models/hierarchical-clustering.md",sourceDirName:"models",slug:"/models/hierarchical-clustering",permalink:"/et/docs/models/hierarchical-clustering",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/hierarchical-clustering.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. juuni 2021",frontMatter:{id:"hierarchical-clustering",title:"Hierarchical Clustering",sidebar_label:"Hierarchical Clustering"},sidebar:"docs",previous:{title:"Decision Tree",permalink:"/et/docs/models/decision-tree"},next:{title:"k-means Clustering",permalink:"/et/docs/models/kmeans"}},k={},g=[{value:"Valikud",id:"valikud",level:2},{value:"N\xe4ited",id:"n\xe4ited",level:2}],b={toc:g};function v(e){var t,r=e,{components:i}=r,s=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},b),s),a(t,l({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Hierarhiline klasterdamine."),(0,n.kt)("h2",p({},{id:"valikud"}),"Valikud"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"data")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object (required)"),": v\xe4\xe4rtuste massiivi objekt. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"variables")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),": klasterdamiseks kasutatavate muutujate nimed. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"linkage")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),': kas "t\xe4ielik" v\xf5i "\xfcksik".. Default: ',(0,n.kt)("inlineCode",{parentName:"li"},"'complete'"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"distance")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": kasutatud kaugus (eukleidiline, T\u0161eb\xf5\u0161ev, koosiin, hamming v\xf5i Manhattan).. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"'euclidean'"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onResult")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": callback kutsutakse \xfcles koos mudeli objektiga. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onResult() {}"),".")),(0,n.kt)("h2",p({},{id:"n\xe4ited"}),"N\xe4ited"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<HierarchicalClustering \n    data={heartdisease} \n    variables={[ 'Age', 'Cost', 'Interventions' ]}\n/>\n")))}v.isMDXComponent=!0}}]);