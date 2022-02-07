"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2925],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<a;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},630611:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var r=n(487462),i=n(263366),a=(n(202784),n(603905)),l=["components"],o={id:"decision-tree",title:"Decision Tree",sidebar_label:"Decision Tree"},s=void 0,d={unversionedId:"models/decision-tree",id:"models/decision-tree",title:"Decision Tree",description:"Regressions- og klassifikationstr\xe6er.",source:"@site/i18n/da/docusaurus-plugin-content-docs/current/models/decision-tree.md",sourceDirName:"models",slug:"/models/decision-tree",permalink:"/da/docs/models/decision-tree",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/decision-tree.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1.6.2021",frontMatter:{id:"decision-tree",title:"Decision Tree",sidebar_label:"Decision Tree"},sidebar:"docs",previous:{title:"Word Cloud",permalink:"/da/docs/word-cloud"},next:{title:"Hierarchical Clustering",permalink:"/da/docs/models/hierarchical-clustering"}},p=[{value:"Indstillinger",id:"indstillinger",children:[],level:2},{value:"Eksempler",id:"eksempler",children:[],level:2}],u={toc:p};function c(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Regressions- og klassifikationstr\xe6er."),(0,a.kt)("h2",{id:"indstillinger"},"Indstillinger"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"data")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object (required)"),": objekt af v\xe6rdi-arrays. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"y")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": udfaldsvariabel. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"x")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(array<(string|Factor)>|string|Factor) (required)"),": en eller flere pr\xe6diktorvariable. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"type")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string (required)"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"Klassifikation")," for kategoriske eller ",(0,a.kt)("inlineCode",{parentName:"li"},"Regression")," for kvantitative resultater. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"quantitative")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),": array af variabler i ",(0,a.kt)("inlineCode",{parentName:"li"},"data"),", der er ",(0,a.kt)("inlineCode",{parentName:"li"},"kvantitative"),".. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"impurityMeasure")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": urenhedsm\xe5ling (",(0,a.kt)("inlineCode",{parentName:"li"},"gini")," eller ",(0,a.kt)("inlineCode",{parentName:"li"},"entropi"),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'gini'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"scoreThreshold")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": scoret\xe6rskel for opdeling. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"0.0075"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"maxTreeDepth")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": maksimal tr\xe6dybde. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"minItemsCount")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": mindste antal observationer i bladknuder. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"50"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onPredict")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": callback, der p\xe5kaldes med modelobjektet, n\xe5r der klikkes p\xe5 forudsigelsesknappen. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,a.kt)("h2",{id:"eksempler"},"Eksempler"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<DecisionTree \n    data={heartdisease} \n    type=\"Classification\"\n    y=\"Complications\"\n    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Drugs' ]}\n    quantitative={[ 'Age', 'Cost', 'Interventions' ]}\n/>\n")))}c.isMDXComponent=!0}}]);