"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[80417],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},434987:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return k}});var r=n(603905),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&c(e,n,t[n]);return e};const m={id:"kmeans",title:"k-means Clustering",sidebar_label:"k-means Clustering"},d=void 0,f={unversionedId:"models/kmeans",id:"models/kmeans",title:"k-means Clustering",description:"K- significa raggruppamento.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/models/kmeans.md",sourceDirName:"models",slug:"/models/kmeans",permalink:"/it/docs/models/kmeans",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/kmeans.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1658117079,formattedLastUpdatedAt:"18 lug 2022",frontMatter:{id:"kmeans",title:"k-means Clustering",sidebar_label:"k-means Clustering"},sidebar:"docs",previous:{title:"Hierarchical Clustering",permalink:"/it/docs/models/hierarchical-clustering"},next:{title:"LASSO Regression",permalink:"/it/docs/models/lasso-regression"}},g={},k=[{value:"Opzioni",id:"opzioni",level:2},{value:"Esempi",id:"esempi",level:2}],b={toc:k};function y(e){var t,n=e,{components:i}=n,c=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},b),c),a(t,o({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"K- significa raggruppamento."),(0,r.kt)("h2",p({},{id:"opzioni"}),"Opzioni"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object (required)"),": oggetto delle matrici di valori. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"variables")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),": nomi delle variabili utilizzate per il clustering. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"K")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": numero di cluster. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"3"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"elbowPlot")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": booleano che indica se includere il grafico del gomito. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"initialization")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": metodo di inizializzazione (",(0,r.kt)("inlineCode",{parentName:"li"},"kmeans++"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"random"),", o ",(0,r.kt)("inlineCode",{parentName:"li"},"mostDistant"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'kmeans++'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onResult")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": richiamo richiamato con oggetto modello. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onResult() {}"),".")),(0,r.kt)("h2",p({},{id:"esempi"}),"Esempi"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<KMeans \n    data={heartdisease} \n    variables={[ 'Age', 'Cost' ]}\n/>\n")))}y.isMDXComponent=!0}}]);