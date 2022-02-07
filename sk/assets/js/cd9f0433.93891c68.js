"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2956],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,k=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},896134:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(487462),i=n(263366),a=(n(202784),n(603905)),l=["components"],o={id:"hierarchical-clustering",title:"Hierarchical Clustering",sidebar_label:"Hierarchical Clustering"},c=void 0,u={unversionedId:"models/hierarchical-clustering",id:"models/hierarchical-clustering",title:"Hierarchical Clustering",description:"Hierarchick\xe9 zhlukovanie.",source:"@site/i18n/sk/docusaurus-plugin-content-docs/current/models/hierarchical-clustering.md",sourceDirName:"models",slug:"/models/hierarchical-clustering",permalink:"/sk/docs/models/hierarchical-clustering",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/hierarchical-clustering.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. 6. 2021",frontMatter:{id:"hierarchical-clustering",title:"Hierarchical Clustering",sidebar_label:"Hierarchical Clustering"},sidebar:"docs",previous:{title:"Decision Tree",permalink:"/sk/docs/models/decision-tree"},next:{title:"k-means Clustering",permalink:"/sk/docs/models/kmeans"}},s=[{value:"Mo\u017enosti",id:"mo\u017enosti",children:[],level:2},{value:"Pr\xedklady",id:"pr\xedklady",children:[],level:2}],p={toc:s};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Hierarchick\xe9 zhlukovanie."),(0,a.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"data")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object (required)"),": objekt pol\xed hodn\xf4t. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"variables")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),": n\xe1zvy premenn\xfdch pou\u017eit\xfdch na zhlukovanie. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"linkage")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": bu\u010f ",(0,a.kt)("inlineCode",{parentName:"li"},"kompletn\xfd")," alebo ",(0,a.kt)("inlineCode",{parentName:"li"},"jedin\xfd"),". Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'complete'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"distance")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": pou\u017eit\xe1 vzdialenos\u0165 (",(0,a.kt)("inlineCode",{parentName:"li"},"euklidovsk\xe1"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"\u010deby\u0161evsk\xe1"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"kos\xednov\xe1"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"hammingova")," alebo ",(0,a.kt)("inlineCode",{parentName:"li"},"manhattansk\xe1"),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'euclidean'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onResult")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": sp\xe4tn\xe9 volanie vyvolan\xe9 pomocou objektu modelu. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onResult() {}"),".")),(0,a.kt)("h2",{id:"pr\xedklady"},"Pr\xedklady"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<HierarchicalClustering \n    data={heartdisease} \n    variables={[ 'Age', 'Cost', 'Interventions' ]}\n/>\n")))}d.isMDXComponent=!0}}]);