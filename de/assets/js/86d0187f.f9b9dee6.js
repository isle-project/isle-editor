(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{226:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),i=(t(0),t(411)),l={id:"kmeans",title:"k-means Clustering",sidebar_label:"k-means Clustering"},o={unversionedId:"models/kmeans",id:"models/kmeans",isDocsHomePage:!1,title:"k-means Clustering",description:"K-Mittel-Clustering.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/models/kmeans.md",slug:"/models/kmeans",permalink:"/de/docs/models/kmeans",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/kmeans.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"k-means Clustering",sidebar:"docs",previous:{title:"Hierarchical Clustering",permalink:"/de/docs/models/hierarchical-clustering"},next:{title:"LASSO Regression",permalink:"/de/docs/models/lasso-regression"}},c=[{value:"Optionen",id:"optionen",children:[]},{value:"Beispiele",id:"beispiele",children:[]}],s={toc:c};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"K-Mittel-Clustering."),Object(i.b)("h2",{id:"optionen"},"Optionen"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"data")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object (required)"),": Objekt von Werte-Arrays. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"variables")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array<string> (required)"),": Namen der Variablen, die f\xfcr das Clustering verwendet werden. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"K")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": Anzahl von Clustern. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"3"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"initialization")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": Initialisierungsmethode (",Object(i.b)("inlineCode",{parentName:"li"},"kmeans++"),", ",Object(i.b)("inlineCode",{parentName:"li"},"random"),", oder ",Object(i.b)("inlineCode",{parentName:"li"},"mostDistant"),"). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'kmeans++'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onResult")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": Callback, der mit Modellobjekt aufgerufen wird. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onResult() {}"),".")),Object(i.b)("h2",{id:"beispiele"},"Beispiele"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<KMeans \n    data={heartdisease} \n    variables={[ 'Age', 'Cost' ]}\n/>\n")))}u.isMDXComponent=!0},411:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},b=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(t),d=r,m=b["".concat(l,".").concat(d)]||b[d]||p[d]||i;return t?a.a.createElement(m,o(o({ref:n},s),{},{components:t})):a.a.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);