"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[92308],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},457881:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return g}});var r=n(603905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&c(e,n,t[n]);return e};const d={id:"map",title:"Map",sidebar_label:"Map"},m=void 0,f={unversionedId:"plots/map",id:"plots/map",title:"Map",description:"Un mapa geogr\xe1fico que puede ser suministrado con nombres de lugares o valores de longitud/latitud.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/plots/map.md",sourceDirName:"plots",slug:"/plots/map",permalink:"/es/docs/plots/map",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/map.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633403869,formattedLastUpdatedAt:"5 oct 2021",frontMatter:{id:"map",title:"Map",sidebar_label:"Map"},sidebar:"docs",previous:{title:"Line Plot",permalink:"/es/docs/plots/lineplot"},next:{title:"Mosaic Plot",permalink:"/es/docs/plots/mosaicplot"}},b={},g=[{value:"Opciones",id:"opciones",level:2},{value:"Ejemplos",id:"ejemplos",level:2}],v={toc:g};function y(e){var t,n=e,{components:a}=n,c=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},v),c),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Un mapa geogr\xe1fico que puede ser suministrado con nombres de lugares o valores de longitud/latitud."),(0,r.kt)("h2",u({},{id:"opciones"}),"Opciones"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object (required)"),": objeto de matrices de valores para cada variable. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"scope")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": alcance del mapa que se mostrar\xe1. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'world'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"locations")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),': nombre de la variable en "datos" que contiene los nombres de las ubicaciones. Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"locationmode")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),': ya sea "ISO-3", "Estados Unidos", o "nombres de pa\xedses" que denotan c\xf3mo est\xe1n codificados los valores en "lugares". Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"'country names'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"longitude")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),': nombre de la variable en "datos" que contiene valores de longitud. Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"latitude")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),': nombre de la variable en "datos" que contiene valores de latitud. Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"showLand")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": si mostrar los rasgos geogr\xe1ficos en el mapa. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"aggregation")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),': cadena que indica c\xf3mo agregar los valores de cada ubicaci\xf3n (ya sea "suma", "promedio", "m\xednimo", "m\xe1ximo", "modo", "mediana", "recuento", "primero" o "\xfaltimo"). Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"'sum'"),".")),(0,r.kt)("h2",u({},{id:"ejemplos"}),"Ejemplos"))}y.isMDXComponent=!0}}]);