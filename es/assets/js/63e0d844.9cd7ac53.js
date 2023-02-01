"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[37271],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(202784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},560608:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return b}});var r=n(603905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&u(e,n,t[n]);return e};const d={id:"lasso-regression",title:"LASSO Regression",sidebar_label:"LASSO Regression"},m=void 0,f={unversionedId:"models/lasso-regression",id:"models/lasso-regression",title:"LASSO Regression",description:"Regresi\xf3n de LASSO.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/models/lasso-regression.md",sourceDirName:"models",slug:"/models/lasso-regression",permalink:"/es/docs/models/lasso-regression",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/lasso-regression.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1626839389,formattedLastUpdatedAt:"21 jul 2021",frontMatter:{id:"lasso-regression",title:"LASSO Regression",sidebar_label:"LASSO Regression"},sidebar:"docs",previous:{title:"k-means Clustering",permalink:"/es/docs/models/kmeans"},next:{title:"Logistic Regression",permalink:"/es/docs/models/logistic-regression"}},g={},b=[{value:"Opciones",id:"opciones",level:2},{value:"Ejemplos",id:"ejemplos",level:2}],v={toc:b};function y(e){var t,n=e,{components:o}=n,u=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},v),u),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Regresi\xf3n de LASSO."),(0,r.kt)("h2",p({},{id:"opciones"}),"Opciones"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object (required)"),": objeto de las matrices de valor. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"y")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string (required)"),": variable de resultado. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"x")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(array<(string|Factor)>|string|Factor) (required)"),": una o m\xe1s variables de predicci\xf3n. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"quantitative")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),': de variables en los "datos" que son "cuantitativos". Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"lambda")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": par\xe1metro de regularizaci\xf3n. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0.001"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"intercept")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controla si se ajusta a un modelo con un t\xe9rmino de intercepci\xf3n. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onPredict")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": llamada de retorno invocada con una funci\xf3n de predicci\xf3n para hacer predicciones para los nuevos datos. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onPredict() {}"),".")),(0,r.kt)("h2",p({},{id:"ejemplos"}),"Ejemplos"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LassoRegression\n    data={heartdisease} \n    y=\"Cost\"\n    x={[ 'Age', 'Interventions', 'Gender', 'Drugs', 'Complications' ]}\n    quantitative={['Age','Cost','Interventions']}\n/>\n")))}y.isMDXComponent=!0}}]);