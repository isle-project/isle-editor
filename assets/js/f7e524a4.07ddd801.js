(window.webpackJsonp=window.webpackJsonp||[]).push([[1274],{299:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),a=(n(0),n(410)),l={id:"hierarchical-clustering",title:"Hierarchical Clustering",sidebar_label:"Hierarchical Clustering"},c={unversionedId:"models/hierarchical-clustering",id:"models/hierarchical-clustering",isDocsHomePage:!1,title:"Hierarchical Clustering",description:"Hierarchical Clustering.",source:"@site/docs/models/hierarchical-clustering.md",slug:"/models/hierarchical-clustering",permalink:"/docs/models/hierarchical-clustering",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/hierarchical-clustering.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613423749,formattedLastUpdatedAt:"2/15/2021",sidebar_label:"Hierarchical Clustering",sidebar:"docs",previous:{title:"Decision Tree",permalink:"/docs/models/decision-tree"},next:{title:"k-means Clustering",permalink:"/docs/models/kmeans"}},o=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:o};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Hierarchical Clustering."),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"data")," | ",Object(a.b)("inlineCode",{parentName:"li"},"object (required)"),": object of value arrays. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"variables")," | ",Object(a.b)("inlineCode",{parentName:"li"},"array<string> (required)"),": names of variables used for clustering. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"linkage")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": either ",Object(a.b)("inlineCode",{parentName:"li"},"complete")," or ",Object(a.b)("inlineCode",{parentName:"li"},"single"),". Default: ",Object(a.b)("inlineCode",{parentName:"li"},"'complete'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"distance")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": used distance (",Object(a.b)("inlineCode",{parentName:"li"},"euclidean"),", ",Object(a.b)("inlineCode",{parentName:"li"},"chebyshev"),", ",Object(a.b)("inlineCode",{parentName:"li"},"cosine"),", ",Object(a.b)("inlineCode",{parentName:"li"},"hamming"),", or ",Object(a.b)("inlineCode",{parentName:"li"},"manhattan"),"). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"'euclidean'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onResult")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": callback invoked with model object. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"onResult() {}"),".")),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<HierarchicalClustering \n    data={heartdisease} \n    variables={[ 'Age', 'Cost', 'Interventions' ]}\n/>\n")))}u.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(l,".").concat(d)]||b[d]||p[d]||a;return n?i.a.createElement(m,c(c({ref:t},s),{},{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);