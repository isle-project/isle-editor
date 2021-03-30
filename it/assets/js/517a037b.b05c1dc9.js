(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),a=(n(0),n(410)),o={id:"kmeans",title:"k-means Clustering",sidebar_label:"k-means Clustering"},l={unversionedId:"models/kmeans",id:"models/kmeans",isDocsHomePage:!1,title:"k-means Clustering",description:"K- significa raggruppamento.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/models/kmeans.md",slug:"/models/kmeans",permalink:"/it/docs/models/kmeans",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/kmeans.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21/2/2021",sidebar_label:"k-means Clustering",sidebar:"docs",previous:{title:"Hierarchical Clustering",permalink:"/it/docs/models/hierarchical-clustering"},next:{title:"LASSO Regression",permalink:"/it/docs/models/lasso-regression"}},c=[{value:"Opzioni",id:"opzioni",children:[]},{value:"Esempi",id:"esempi",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"K- significa raggruppamento."),Object(a.b)("h2",{id:"opzioni"},"Opzioni"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"data")," | ",Object(a.b)("inlineCode",{parentName:"li"},"object (required)"),": oggetto delle matrici di valori. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"variables")," | ",Object(a.b)("inlineCode",{parentName:"li"},"array<string> (required)"),": nomi delle variabili utilizzate per il clustering. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"K")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": numero di cluster. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"3"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"initialization")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": metodo di inizializzazione (",Object(a.b)("inlineCode",{parentName:"li"},"kmeans++"),", ",Object(a.b)("inlineCode",{parentName:"li"},"random"),", o ",Object(a.b)("inlineCode",{parentName:"li"},"mostDistant"),"). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"'kmeans++'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onResult")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": richiamo richiamato con oggetto modello. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"onResult() {}"),".")),Object(a.b)("h2",{id:"esempi"},"Esempi"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<KMeans \n    data={heartdisease} \n    variables={[ 'Age', 'Cost' ]}\n/>\n")))}u.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,d=p["".concat(o,".").concat(b)]||p[b]||m[b]||a;return n?i.a.createElement(d,l(l({ref:t},s),{},{components:n})):i.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);