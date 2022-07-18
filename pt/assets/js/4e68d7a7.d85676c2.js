"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42612],{603905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(202784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},50435:function(e,t,r){r.r(t),r.d(t,{assets:function(){return g},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return v}});var n=r(603905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&p(e,r,t[r]);return e};const d={id:"lasso-regression",title:"LASSO Regression",sidebar_label:"LASSO Regression"},m=void 0,f={unversionedId:"models/lasso-regression",id:"models/lasso-regression",title:"LASSO Regression",description:"Regress\xe3o LASSO.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/models/lasso-regression.md",sourceDirName:"models",slug:"/models/lasso-regression",permalink:"/pt/docs/models/lasso-regression",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/lasso-regression.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1626839389,formattedLastUpdatedAt:"21 de jul. de 2021",frontMatter:{id:"lasso-regression",title:"LASSO Regression",sidebar_label:"LASSO Regression"},sidebar:"docs",previous:{title:"k-means Clustering",permalink:"/pt/docs/models/kmeans"},next:{title:"Logistic Regression",permalink:"/pt/docs/models/logistic-regression"}},g={},v=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"Exemplos",id:"exemplos",level:2}],b={toc:v};function y(e){var t,r=e,{components:o}=r,p=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},b),p),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Regress\xe3o LASSO."),(0,n.kt)("h2",c({},{id:"op\xe7\xf5es"}),"Op\xe7\xf5es"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"data")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object (required)"),": objeto de arrays de valor. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"y")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string (required)"),": vari\xe1vel de resultado. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"x")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(array<(string|Factor)>|string|Factor) (required)"),": uma ou mais vari\xe1veis preditoras. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"quantitative")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),': conjunto de vari\xe1veis em "dados" que s\xe3o "quantitativas". Default: ',(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"lambda")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": par\xe2metro de regulariza\xe7\xe3o. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"0.001"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"intercept")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": controla se um modelo deve ser adaptado com um termo de intercepta\xe7\xe3o. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onPredict")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": chamada de retorno invocada com uma fun\xe7\xe3o de previs\xe3o para fazer previs\xf5es de novos dados. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onPredict() {}"),".")),(0,n.kt)("h2",c({},{id:"exemplos"}),"Exemplos"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LassoRegression\n    data={heartdisease} \n    y=\"Cost\"\n    x={[ 'Age', 'Interventions', 'Gender', 'Drugs', 'Complications' ]}\n    quantitative={['Age','Cost','Interventions']}\n/>\n")))}y.isMDXComponent=!0}}]);