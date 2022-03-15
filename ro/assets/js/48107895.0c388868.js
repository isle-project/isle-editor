"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9758],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},436999:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return c},assets:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(487462),i=n(263366),a=(n(202784),n(603905)),l=["components"],o={id:"decision-tree",title:"Decision Tree",sidebar_label:"Decision Tree"},u=void 0,c={unversionedId:"models/decision-tree",id:"models/decision-tree",title:"Decision Tree",description:"Arbori de regresie \u0219i de clasificare.",source:"@site/i18n/ro/docusaurus-plugin-content-docs/current/models/decision-tree.md",sourceDirName:"models",slug:"/models/decision-tree",permalink:"/ro/docs/models/decision-tree",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/decision-tree.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"01.06.2021",frontMatter:{id:"decision-tree",title:"Decision Tree",sidebar_label:"Decision Tree"},sidebar:"docs",previous:{title:"Word Cloud",permalink:"/ro/docs/word-cloud"},next:{title:"Hierarchical Clustering",permalink:"/ro/docs/models/hierarchical-clustering"}},p={},s=[{value:"Op\u021biuni",id:"op\u021biuni",level:2},{value:"Exemple",id:"exemple",level:2}],d={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Arbori de regresie \u0219i de clasificare."),(0,a.kt)("h2",{id:"op\u021biuni"},"Op\u021biuni"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"data")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object (required)"),": obiect de matrice de valori. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"y")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": variabil\u0103 de rezultat. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"x")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(array<(string|Factor)>|string|Factor) (required)"),": una sau mai multe variabile predictive. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"type")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string (required)"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"Clasificare")," pentru rezultate categorice sau ",(0,a.kt)("inlineCode",{parentName:"li"},"Regresie")," pentru rezultate cantitative. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"quantitative")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),": matrice de variabile din ",(0,a.kt)("inlineCode",{parentName:"li"},"data")," care sunt ",(0,a.kt)("inlineCode",{parentName:"li"},"cuantitative"),".. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"impurityMeasure")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": m\u0103sura de impuritate (",(0,a.kt)("inlineCode",{parentName:"li"},"gini")," sau ",(0,a.kt)("inlineCode",{parentName:"li"},"entropie"),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'gini'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"scoreThreshold")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": pragul de punctaj pentru divizare. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"0.0075"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"maxTreeDepth")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": ad\xe2ncimea maxim\u0103 a copacului. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"minItemsCount")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": num\u0103rul minim de observa\u021bii \xeen nodurile foliare. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"50"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onPredict")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": callback invocat cu obiectul model atunci c\xe2nd se face clic pe butonul de predic\u021bie. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,a.kt)("h2",{id:"exemple"},"Exemple"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<DecisionTree \n    data={heartdisease} \n    type=\"Classification\"\n    y=\"Complications\"\n    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Drugs' ]}\n    quantitative={[ 'Age', 'Cost', 'Interventions' ]}\n/>\n")))}m.isMDXComponent=!0}}]);