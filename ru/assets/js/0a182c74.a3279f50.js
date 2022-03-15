"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8880],{603905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(202784);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},653094:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return s},toc:function(){return p},default:function(){return m}});var n=r(487462),i=r(263366),a=(r(202784),r(603905)),l=["components"],o={id:"hierarchical-clustering",title:"Hierarchical Clustering",sidebar_label:"Hierarchical Clustering"},c=void 0,u={unversionedId:"models/hierarchical-clustering",id:"models/hierarchical-clustering",title:"Hierarchical Clustering",description:"\u0418\u0435\u0440\u0430\u0440\u0445\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0438\u0437\u0430\u0446\u0438\u044f.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/models/hierarchical-clustering.md",sourceDirName:"models",slug:"/models/hierarchical-clustering",permalink:"/ru/docs/models/hierarchical-clustering",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/hierarchical-clustering.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621312042,formattedLastUpdatedAt:"18.05.2021",frontMatter:{id:"hierarchical-clustering",title:"Hierarchical Clustering",sidebar_label:"Hierarchical Clustering"},sidebar:"docs",previous:{title:"Decision Tree",permalink:"/ru/docs/models/decision-tree"},next:{title:"k-means Clustering",permalink:"/ru/docs/models/kmeans"}},s={},p=[{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],d={toc:p};function m(e){var t=e.components,r=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u0418\u0435\u0440\u0430\u0440\u0445\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0438\u0437\u0430\u0446\u0438\u044f."),(0,a.kt)("h2",{id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"data")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object (required)"),": \u043c\u0430\u0441\u0441\u0438\u0432\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043e\u0446\u0435\u043d\u043a\u0438. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"variables")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),": \u0438\u043c\u0435\u043d\u0430 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0445 \u0434\u043b\u044f \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0438\u0437\u0430\u0446\u0438\u0438. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"linkage")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),': \u043b\u0438\u0431\u043e "\u043f\u043e\u043b\u043d\u044b\u0439", \u043b\u0438\u0431\u043e "\u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439". Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"'complete'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"distance")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435 (",(0,a.kt)("inlineCode",{parentName:"li"},"\u0435\u0432\u043a\u043b\u0438\u0434\u043e\u0432\u043e\u0435"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"\u0447\u0435\u0431\u044b\u0448\u0435\u0432"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"\u043a\u043e\u0441\u0438\u043d\u0443\u0441"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"\u0445\u0430\u043c\u043c\u0438\u043d\u0433"),", \u0438\u043b\u0438 ",(0,a.kt)("inlineCode",{parentName:"li"},"\u043c\u0430\u043d\u0445\u044d\u0442\u0442\u0435\u043d"),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'euclidean'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onResult")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": \u043e\u0431\u0440\u0430\u0442\u043d\u044b\u0439 \u0432\u044b\u0437\u043e\u0432 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043c\u043e\u0434\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onResult() {}"),".")),(0,a.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<HierarchicalClustering \n    data={heartdisease} \n    variables={[ 'Age', 'Cost', 'Interventions' ]}\n/>\n")))}m.isMDXComponent=!0}}]);