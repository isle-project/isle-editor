(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{177:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return l})),r.d(n,"default",(function(){return u}));var t=r(3),a=r(7),o=(r(0),r(409)),i={id:"networks",title:"Networks",sidebar_label:"Networks"},c={unversionedId:"learn/networks",id:"learn/networks",isDocsHomePage:!1,title:"Networks",description:"Generar redes a partir de un modelo Erd\u0151s-R\xe9nyi.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/learn/networks.md",slug:"/learn/networks",permalink:"/es/docs/learn/networks",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/networks.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Networks",sidebar:"docs",previous:{title:"Mean vs. Median",permalink:"/es/docs/learn/mean-vs-median"},next:{title:"State of the Union Speeches",permalink:"/es/docs/learn/sotu"}},l=[{value:"Opciones",id:"opciones",children:[]},{value:"Ejemplos",id:"ejemplos",children:[]}],s={toc:l};function u(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},s,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Generar redes a partir de un modelo Erd\u0151s-R\xe9nyi."),Object(o.b)("h2",{id:"opciones"},"Opciones"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"maxNumNodes")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": n\xfamero m\xe1ximo de nodos que se pueden seleccionar para la red. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"30"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"showEdgeChart")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": controla si se muestra un gr\xe1fico que muestre el n\xfamero de bordes en cada red generada (se reinicia cuando se cambia el n\xfamero de nodos). Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"showTransitivities")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": si se deben contabilizar las transiciones / coeficientes de agrupaci\xf3n global para las redes generadas. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),".")),Object(o.b)("h2",{id:"ejemplos"},"Ejemplos"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnNetworks />\n")))}u.isMDXComponent=!0},409:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return m}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},p=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),b=t,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return r?a.a.createElement(m,c(c({ref:n},s),{},{components:r})):a.a.createElement(m,c({ref:n},s))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);