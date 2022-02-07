"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5474],{603905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return m}});var t=r(202784);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),d=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=d(e.components);return t.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(r),m=a,f=p["".concat(c,".").concat(m)]||p[m]||s[m]||o;return r?t.createElement(f,i(i({ref:n},u),{},{components:r})):t.createElement(f,i({ref:n},u))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},832613:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var t=r(487462),a=r(263366),o=(r(202784),r(603905)),i=["components"],l={id:"confidence-coverage-normal",title:"Confidence Interval Coverage Normal",sidebar_label:"Confidence Interval Coverage Normal"},c=void 0,d={unversionedId:"learn/confidence-coverage-normal",id:"learn/confidence-coverage-normal",title:"Confidence Interval Coverage Normal",description:"Un componente de aprendizaje que ilustra la cobertura de los intervalos de confianza para la media de una distribuci\xf3n normal.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/learn/confidence-coverage-normal.md",sourceDirName:"learn",slug:"/learn/confidence-coverage-normal",permalink:"/es/docs/learn/confidence-coverage-normal",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/confidence-coverage-normal.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621312042,formattedLastUpdatedAt:"18/5/2021",frontMatter:{id:"confidence-coverage-normal",title:"Confidence Interval Coverage Normal",sidebar_label:"Confidence Interval Coverage Normal"},sidebar:"docs",previous:{title:"Confidence Interval Coverage Binomial",permalink:"/es/docs/learn/confidence-coverage-binomial"},next:{title:"Confidence Interval Coverage Sample",permalink:"/es/docs/learn/confidence-coverage-sample"}},u=[{value:"Opciones",id:"opciones",children:[],level:2},{value:"Ejemplos",id:"ejemplos",children:[],level:2}],s={toc:u};function p(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Un componente de aprendizaje que ilustra la cobertura de los intervalos de confianza para la media de una distribuci\xf3n normal."),(0,o.kt)("h2",{id:"opciones"},"Opciones"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"intro")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(node|string)"),": anula el texto de introducci\xf3n predeterminado (interactivo). Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"quartileNotation")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),': controla si se usa "alfa/2" como sub\xedndice para el valor cr\xedtico o s\xf3lo "cr\xedtico". Default: ',(0,o.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"sampleStats")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": controla si se debe poder cambiar entre el uso de la desviaci\xf3n est\xe1ndar de la muestra o la desviaci\xf3n est\xe1ndar de la poblaci\xf3n conocida al calcular el error est\xe1ndar. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,o.kt)("h2",{id:"ejemplos"},"Ejemplos"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnConfidenceCoverageNormal />\n")))}p.isMDXComponent=!0}}]);