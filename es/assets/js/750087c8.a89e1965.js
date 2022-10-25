"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[44691],{603905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(202784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},900298:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return k}});var n=r(603905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&u(e,r,t[r]);return e};const d={id:"proptest2",title:"Two-Sample Proportion Test",sidebar_label:"Two-Sample Proportion Test"},m=void 0,f={unversionedId:"tests/proptest2",id:"tests/proptest2",title:"Two-Sample Proportion Test",description:"Prueba de proporci\xf3n de dos muestras.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tests/proptest2.md",sourceDirName:"tests",slug:"/tests/proptest2",permalink:"/es/docs/tests/proptest2",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tests/proptest2.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19 jun 2021",frontMatter:{id:"proptest2",title:"Two-Sample Proportion Test",sidebar_label:"Two-Sample Proportion Test"},sidebar:"docs",previous:{title:"One-Sample Proportion Test",permalink:"/es/docs/tests/proptest"},next:{title:"Tukey HSD Test",permalink:"/es/docs/tests/tukeyhsd"}},b={},k=[{value:"Opciones",id:"opciones",level:2},{value:"Ejemplos",id:"ejemplos",level:2}],g={toc:k};function v(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=c(c({},g),u),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Prueba de proporci\xf3n de dos muestras."),(0,n.kt)("h2",c({},{id:"opciones"}),"Opciones"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"data")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object (required)"),": objeto de las matrices de valor. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"var1")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": nombre de la primera variable. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"success")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"any (required)"),': categor\xeda de \xe9xito de "VAR1. Default: ',(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"var2")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),': nombre de la segunda variable (se debe suministrar "var2" o "grupo"). Default: ',(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"group")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),': nombre de la variable de agrupaci\xf3n (se debe suministrar "var2" o "grupo"). Default: ',(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"alpha")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": nivel de importancia. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"0.05"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"direction")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": direcci\xf3n de prueba (ya sea ",(0,n.kt)("inlineCode",{parentName:"li"},"less"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"greater")," o ",(0,n.kt)("inlineCode",{parentName:"li"},"two-sided"),"). Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"'two-sided'"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"diff")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": diferencia bajo H0. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"showDecision")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": controla si se muestra si la hip\xf3tesis nula es rechazada en el nivel de significaci\xf3n especificado. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,n.kt)("h2",c({},{id:"ejemplos"}),"Ejemplos"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<PropTest2\n    data={heartdisease} \n    var1="Drugs"\n    success={2}\n    group="Complications"\n/>\n')))}v.isMDXComponent=!0}}]);