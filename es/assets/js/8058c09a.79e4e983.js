"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3011],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25310:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(487462),i=n(263366),o=(n(202784),n(603905)),a=["components"],l={id:"logistic-regression",title:"Logistic Regression",sidebar_label:"Logistic Regression"},s=void 0,c={unversionedId:"models/logistic-regression",id:"models/logistic-regression",title:"Logistic Regression",description:"Regresi\xf3n lineal m\xfaltiple.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/models/logistic-regression.md",sourceDirName:"models",slug:"/models/logistic-regression",permalink:"/es/docs/models/logistic-regression",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/logistic-regression.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1626839389,formattedLastUpdatedAt:"20/7/2021",frontMatter:{id:"logistic-regression",title:"Logistic Regression",sidebar_label:"Logistic Regression"},sidebar:"docs",previous:{title:"LASSO Regression",permalink:"/es/docs/models/lasso-regression"},next:{title:"Multiple Linear Regression",permalink:"/es/docs/models/multiple-linear-regression"}},u={},p=[{value:"Opciones",id:"opciones",level:2},{value:"Ejemplos",id:"ejemplos",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Regresi\xf3n lineal m\xfaltiple."),(0,o.kt)("h2",{id:"opciones"},"Opciones"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"data")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object (required)"),": objeto de las matrices de valor. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"y")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": variable de resultado. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"success")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"any (required)"),': categor\xeda de \xe9xito de "y. Default: ',(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"x")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(array<(string|Factor)>|string|Factor) (required)"),": una o m\xe1s variables de predicci\xf3n. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"quantitative")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),': de variables en los "datos" que son "cuantitativos". Default: ',(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"omitMissing")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": controla si se omiten los valores que faltan. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"intercept")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": controla si se ajusta a un modelo con un t\xe9rmino de intercepci\xf3n. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"onPredict")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"function"),": llamada de retorno invocada con una funci\xf3n de predicci\xf3n para hacer predicciones para los nuevos datos. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,o.kt)("h2",{id:"ejemplos"},"Ejemplos"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LogisticRegression \n    data={heartdisease} \n    y=\"Complications\"\n    success={1}\n    x={[ 'Drugs', 'Gender', 'Age', 'Interventions' ]}\n    quantitative={[ 'Age', 'Cost', 'Interventions' ]}\n/>\n")))}m.isMDXComponent=!0}}]);