"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35284],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(202784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},210339:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return g}});var r=n(603905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&s(e,n,t[n]);return e};const d={id:"proportions-input",title:"Proportions Input",sidebar_label:"Proportions Input"},m=void 0,f={unversionedId:"input/proportions-input",id:"input/proportions-input",title:"Proportions Input",description:'Un componente de entrada de proporciones. Puede ser usado como parte de un tablero de ISLE o independiente. En este \xfaltimo caso, quieres manejar los cambios a trav\xe9s del atributo "onChange" o vincular el valor a una variable global a trav\xe9s del atributo "bind".',source:"@site/i18n/es/docusaurus-plugin-content-docs/current/input/proportions.md",sourceDirName:"input",slug:"/input/proportions-input",permalink:"/es/docs/input/proportions-input",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/proportions.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"22 feb 2021",frontMatter:{id:"proportions-input",title:"Proportions Input",sidebar_label:"Proportions Input"},sidebar:"docs",previous:{title:"Number Input",permalink:"/es/docs/input/number-input"},next:{title:"Select Input",permalink:"/es/docs/input/select-input"}},b={},g=[{value:"Opciones",id:"opciones",level:2},{value:"Ejemplos",id:"ejemplos",level:2}],v={toc:g};function y(e){var t,n=e,{components:o}=n,s=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},v),s),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,'Un componente de entrada de proporciones. Puede ser usado como parte de un tablero de ISLE o independiente. En este \xfaltimo caso, quieres manejar los cambios a trav\xe9s del atributo "onChange" o vincular el valor a una variable global a trav\xe9s del atributo "bind".'),(0,r.kt)("h2",c({},{id:"opciones"}),"Opciones"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"colors")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<string>"),": una gama de colores para los componentes del gr\xe1fico circular. Si no se define, se utilizar\xe1 una escala de colores personalizada. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disabled")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controla si el campo de entrada est\xe1 desactivado. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"height")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": proporciones altura de entrada (en px). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"200"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legends")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array"),": etiquetas de grupo. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChange")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": funci\xf3n de llamada de retorno que se invocar\xe1 cuando se haga una elecci\xf3n. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange(){}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"precision")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": la precisi\xf3n de los valores de proporci\xf3n mostrados. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"step")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": el paso de las flechas que se ven al pasar el cursor por encima del cuadro de entrada. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0.1"),".")),(0,r.kt)("h2",c({},{id:"ejemplos"}),"Ejemplos"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<ProportionsInput\n    user\n    id="Survey"\n    question="Decide what is important"\n    group="Group decision"\n    nElements={3}\n    colors = {[ "red", "blue", "gold" ]}\n    personalHeight={300}\n    groupHeight={200}\n    margin="80px"\n    legends={[ "bitcoin", "old", "diamonds" ]}\n/>\n')))}y.isMDXComponent=!0}}]);