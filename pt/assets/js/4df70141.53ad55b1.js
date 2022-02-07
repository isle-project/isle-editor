"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3199],{603905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},491888:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var r=n(487462),i=n(263366),a=(n(202784),n(603905)),o=["components"],l={id:"decision-tree",title:"Decision Tree",sidebar_label:"Decision Tree"},s=void 0,u={unversionedId:"models/decision-tree",id:"models/decision-tree",title:"Decision Tree",description:"\xc1rvores de regress\xe3o e classifica\xe7\xe3o.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/models/decision-tree.md",sourceDirName:"models",slug:"/models/decision-tree",permalink:"/pt/docs/models/decision-tree",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/decision-tree.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621312042,formattedLastUpdatedAt:"18/05/2021",frontMatter:{id:"decision-tree",title:"Decision Tree",sidebar_label:"Decision Tree"},sidebar:"docs",previous:{title:"Word Cloud",permalink:"/pt/docs/word-cloud"},next:{title:"Hierarchical Clustering",permalink:"/pt/docs/models/hierarchical-clustering"}},d=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",children:[],level:2},{value:"Exemplos",id:"exemplos",children:[],level:2}],p={toc:d};function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\xc1rvores de regress\xe3o e classifica\xe7\xe3o."),(0,a.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"data")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object (required)"),": objeto de arrays de valor. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"y")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": vari\xe1vel de resultado. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"x")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(array<(string|Factor)>|string|Factor) (required)"),": uma ou mais vari\xe1veis preditoras. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"type")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string (required)"),': "Classifica\xe7\xe3o" para resultados categ\xf3ricos ou "Regress\xe3o" para resultados quantitativos. Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"quantitative")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),': conjunto de vari\xe1veis em "dados" que s\xe3o "quantitativas". Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"impurityMeasure")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": medida de impureza (",(0,a.kt)("inlineCode",{parentName:"li"},"gini")," ou ",(0,a.kt)("inlineCode",{parentName:"li"},"entropy"),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'gini'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"scoreThreshold")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": limiar de pontua\xe7\xe3o para a divis\xe3o. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"0.0075"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"maxTreeDepth")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": profundidade m\xe1xima das \xe1rvores. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"minItemsCount")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": m\xednimo # de observa\xe7\xf5es em n\xf3s de folhas. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"50"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onPredict")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": chamada de retorno invocada com o objeto modelo ao clicar no bot\xe3o de previs\xe3o. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,a.kt)("h2",{id:"exemplos"},"Exemplos"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<DecisionTree \n    data={heartdisease} \n    type=\"Classification\"\n    y=\"Complications\"\n    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Drugs' ]}\n    quantitative={[ 'Age', 'Cost', 'Interventions' ]}\n/>\n")))}c.isMDXComponent=!0}}]);