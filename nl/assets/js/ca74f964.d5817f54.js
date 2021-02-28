(window.webpackJsonp=window.webpackJsonp||[]).push([[327],{268:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return b}));var r=t(3),i=t(7),a=(t(0),t(409)),l={id:"hierarchical-clustering",title:"Hierarchical Clustering",sidebar_label:"Hierarchical Clustering"},c={unversionedId:"models/hierarchical-clustering",id:"models/hierarchical-clustering",isDocsHomePage:!1,title:"Hierarchical Clustering",description:"Hi\xebrarchische clustering.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/models/hierarchical-clustering.md",slug:"/models/hierarchical-clustering",permalink:"/nl/docs/models/hierarchical-clustering",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/hierarchical-clustering.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Hierarchical Clustering",sidebar:"docs",previous:{title:"Decision Tree",permalink:"/nl/docs/models/decision-tree"},next:{title:"k-means Clustering",permalink:"/nl/docs/models/kmeans"}},o=[{value:"Opties",id:"opties",children:[]},{value:"Voorbeelden",id:"voorbeelden",children:[]}],s={toc:o};function b(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Hi\xebrarchische clustering."),Object(a.b)("h2",{id:"opties"},"Opties"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"data")," | ",Object(a.b)("inlineCode",{parentName:"li"},"object (required)"),": object van waardevermeerdering. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"variables")," | ",Object(a.b)("inlineCode",{parentName:"li"},"array<string> (required)"),": namen van variabelen die worden gebruikt voor het clusteren. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"linkage")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": ofwel ",Object(a.b)("inlineCode",{parentName:"li"},"compleet")," of ",Object(a.b)("inlineCode",{parentName:"li"},"single"),". Default: ",Object(a.b)("inlineCode",{parentName:"li"},"'complete'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"distance")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": gebruikte afstand (",Object(a.b)("inlineCode",{parentName:"li"},"euclidean"),", ",Object(a.b)("inlineCode",{parentName:"li"},"chebyshev"),", ",Object(a.b)("inlineCode",{parentName:"li"},"cosine"),", ",Object(a.b)("inlineCode",{parentName:"li"},"hamming"),", of ",Object(a.b)("inlineCode",{parentName:"li"},"manhattan"),"). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"'euclidean'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onResult")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": callback ingeroepen met modelobject. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"onResult() {}"),".")),Object(a.b)("h2",{id:"voorbeelden"},"Voorbeelden"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<HierarchicalClustering \n    data={heartdisease} \n    variables={[ 'Age', 'Cost', 'Interventions' ]}\n/>\n")))}b.isMDXComponent=!0},409:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),b=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=b(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=b(t),d=r,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||a;return t?i.a.createElement(m,c(c({ref:n},s),{},{components:t})):i.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=d;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<a;s++)l[s]=t[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);