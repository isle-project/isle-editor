"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3823],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var i=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return n?i.createElement(k,l(l({ref:t},p),{},{components:n})):i.createElement(k,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},547882:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var i=n(487462),r=n(263366),a=(n(202784),n(603905)),l=["components"],o={id:"decision-tree",title:"Decision Tree",sidebar_label:"Decision Tree"},s=void 0,u={unversionedId:"models/decision-tree",id:"models/decision-tree",title:"Decision Tree",description:"Regresijas un klasifik\u0101cijas koki.",source:"@site/i18n/lv/docusaurus-plugin-content-docs/current/models/decision-tree.md",sourceDirName:"models",slug:"/models/decision-tree",permalink:"/lv/docs/models/decision-tree",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/decision-tree.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1.06.2021.",frontMatter:{id:"decision-tree",title:"Decision Tree",sidebar_label:"Decision Tree"},sidebar:"docs",previous:{title:"Word Cloud",permalink:"/lv/docs/word-cloud"},next:{title:"Hierarchical Clustering",permalink:"/lv/docs/models/hierarchical-clustering"}},p=[{value:"Iesp\u0113jas",id:"iesp\u0113jas",children:[],level:2},{value:"Piem\u0113ri",id:"piem\u0113ri",children:[],level:2}],m={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Regresijas un klasifik\u0101cijas koki."),(0,a.kt)("h2",{id:"iesp\u0113jas"},"Iesp\u0113jas"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"data")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object (required)"),": v\u0113rt\u012bbu mas\u012bvu objekts. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"y")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": izn\u0101kuma main\u012bgais. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"x")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(array<(string|Factor)>|string|Factor) (required)"),": viens vai vair\u0101ki prognoz\u0113jo\u0161ie main\u012bgie lielumi. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"type")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string (required)"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"Klasifik\u0101cija")," kategoriskiem rezult\u0101tiem vai ",(0,a.kt)("inlineCode",{parentName:"li"},"Regresija")," kvantitat\u012bviem rezult\u0101tiem.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"quantitative")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"data")," main\u012bgo mas\u012bvs, kas ir ",(0,a.kt)("inlineCode",{parentName:"li"},"kvantitat\u012bvie"),".. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"impurityMeasure")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": piemais\u012bjumu m\u0113rs (",(0,a.kt)("inlineCode",{parentName:"li"},"gini")," vai ",(0,a.kt)("inlineCode",{parentName:"li"},"entropija"),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'gini'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"scoreThreshold")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": sadal\u012b\u0161anas slieksnis. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"0.0075"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"maxTreeDepth")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": maksim\u0101lais koka dzi\u013cums. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"minItemsCount")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": minim\u0101lais nov\u0113rojumu skaits lapu mezglos. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"50"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onPredict")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": atsauces izsaukums, kas tiek izsaukts ar mode\u013ca objektu, noklik\u0161\u0137inot uz pogas prognoz\u0113t.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,a.kt)("h2",{id:"piem\u0113ri"},"Piem\u0113ri"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<DecisionTree \n    data={heartdisease} \n    type=\"Classification\"\n    y=\"Complications\"\n    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Drugs' ]}\n    quantitative={[ 'Age', 'Cost', 'Interventions' ]}\n/>\n")))}c.isMDXComponent=!0}}]);