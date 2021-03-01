(window.webpackJsonp=window.webpackJsonp||[]).push([[354],{294:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(411)),i={id:"r-output",title:"R Output",sidebar_label:"R Output"},l={unversionedId:"r/r-output",id:"r/r-output",isDocsHomePage:!1,title:"R Output",description:"Componente para renderizar la salida R dentro de una lecci\xf3n de ISLE.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/r/output.md",slug:"/r/r-output",permalink:"/es/docs/r/r-output",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/r/output.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"R Output",sidebar:"docs",previous:{title:"R Help",permalink:"/es/docs/r/r-help"},next:{title:"R Plot",permalink:"/es/docs/r/r-plot"}},c=[{value:"Opciones",id:"opciones",children:[]},{value:"Ejemplos",id:"ejemplos",children:[]}],u={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Componente para renderizar la salida R dentro de una lecci\xf3n de ISLE."),Object(o.b)("h2",{id:"opciones"},"Opciones"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"code")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": El c\xf3digo R utilizado para evaluar. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"''"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"libraries")," | ",Object(o.b)("inlineCode",{parentName:"li"},"array"),': Bibliotecas R que deben ser cargadas autom\xe1ticamente cuando se ejecuta el "c\xf3digo" de entrada. Default: ',Object(o.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"prependCode")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(string|array)"),': El c\xf3digo R (o "matriz" de bloques de c\xf3digo) se preparar\xe1 para el c\xf3digo almacenado en el "c\xf3digo" cuando se eval\xfae. Default: ',Object(o.b)("inlineCode",{parentName:"li"},"''"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onPlots")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": llamada de retorno invocada con cualquier trama generada. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"onPlots() {}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onResult")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),': llamada de regreso invocada con "error" ("nulo" si la operaci\xf3n fue exitosa) y "resultado" manteniendo la salida R.. Default: ',Object(o.b)("inlineCode",{parentName:"li"},"onResult() {}"),".")),Object(o.b)("h2",{id:"ejemplos"},"Ejemplos"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ROutput code="runif(10)" />\n')))}p.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,m=d["".concat(i,".").concat(b)]||d[b]||s[b]||o;return n?a.a.createElement(m,l(l({ref:t},u),{},{components:n})):a.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);