(window.webpackJsonp=window.webpackJsonp||[]).push([[1244],{270:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return u}));var n=r(3),i=r(7),a=(r(0),r(410)),l={id:"hierarchical-clustering",title:"Hierarchical Clustering",sidebar_label:"Hierarchical Clustering"},c={unversionedId:"models/hierarchical-clustering",id:"models/hierarchical-clustering",isDocsHomePage:!1,title:"Hierarchical Clustering",description:"Regroupement hi\xe9rarchique.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/models/hierarchical-clustering.md",slug:"/models/hierarchical-clustering",permalink:"/fr/docs/models/hierarchical-clustering",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/hierarchical-clustering.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21/02/2021",sidebar_label:"Hierarchical Clustering",sidebar:"docs",previous:{title:"Decision Tree",permalink:"/fr/docs/models/decision-tree"},next:{title:"k-means Clustering",permalink:"/fr/docs/models/kmeans"}},o=[{value:"Options",id:"options",children:[]},{value:"Exemples",id:"exemples",children:[]}],s={toc:o};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Regroupement hi\xe9rarchique."),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"data")," | ",Object(a.b)("inlineCode",{parentName:"li"},"object (required)"),": les tableaux d'objets de valeur. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"variables")," | ",Object(a.b)("inlineCode",{parentName:"li"},"array<string> (required)"),": les noms des variables utilis\xe9es pour la mise en grappes. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"linkage")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),': soit "complet", soit "simple".. Default: ',Object(a.b)("inlineCode",{parentName:"li"},"'complete'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"distance")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),': la distance utilis\xe9e ("euclidien", "tchebychev", "cosinus", "chamming", ou "manhattan"). Default: ',Object(a.b)("inlineCode",{parentName:"li"},"'euclidean'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onResult")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": rappel invoqu\xe9 avec l'objet mod\xe8le. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"onResult() {}"),".")),Object(a.b)("h2",{id:"exemples"},"Exemples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<HierarchicalClustering \n    data={heartdisease} \n    variables={[ 'Age', 'Cost', 'Interventions' ]}\n/>\n")))}u.isMDXComponent=!0},410:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,m=p["".concat(l,".").concat(d)]||p[d]||b[d]||a;return r?i.a.createElement(m,c(c({ref:t},s),{},{components:r})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<a;s++)l[s]=r[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);