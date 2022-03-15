"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4214],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},572953:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(487462),i=n(263366),a=(n(202784),n(603905)),l=["components"],o={id:"hierarchical-clustering",title:"Hierarchical Clustering",sidebar_label:"Hierarchical Clustering"},c=void 0,s={unversionedId:"models/hierarchical-clustering",id:"models/hierarchical-clustering",title:"Hierarchical Clustering",description:"Hierarkisk gruppering.",source:"@site/i18n/da/docusaurus-plugin-content-docs/current/models/hierarchical-clustering.md",sourceDirName:"models",slug:"/models/hierarchical-clustering",permalink:"/da/docs/models/hierarchical-clustering",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/hierarchical-clustering.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1.6.2021",frontMatter:{id:"hierarchical-clustering",title:"Hierarchical Clustering",sidebar_label:"Hierarchical Clustering"},sidebar:"docs",previous:{title:"Decision Tree",permalink:"/da/docs/models/decision-tree"},next:{title:"k-means Clustering",permalink:"/da/docs/models/kmeans"}},u={},p=[{value:"Indstillinger",id:"indstillinger",level:2},{value:"Eksempler",id:"eksempler",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Hierarkisk gruppering."),(0,a.kt)("h2",{id:"indstillinger"},"Indstillinger"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"data")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object (required)"),": objekt af v\xe6rdi-arrays. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"variables")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),": navne p\xe5 variabler, der anvendes til klyngeopdeling. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"linkage")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": enten ",(0,a.kt)("inlineCode",{parentName:"li"},"complete")," eller ",(0,a.kt)("inlineCode",{parentName:"li"},"single"),". Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'complete'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"distance")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": anvendt afstand (",(0,a.kt)("inlineCode",{parentName:"li"},"euklidisk"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"chebyshev"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"cosine"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"hamming")," eller ",(0,a.kt)("inlineCode",{parentName:"li"},"manhattan"),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'euclidean'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onResult")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": callback p\xe5kaldt med modelobjekt. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onResult() {}"),".")),(0,a.kt)("h2",{id:"eksempler"},"Eksempler"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<HierarchicalClustering \n    data={heartdisease} \n    variables={[ 'Age', 'Cost', 'Interventions' ]}\n/>\n")))}m.isMDXComponent=!0}}]);