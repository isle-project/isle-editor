(window.webpackJsonp=window.webpackJsonp||[]).push([[321],{261:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return l})),r.d(n,"toc",(function(){return c})),r.d(n,"default",(function(){return u}));var t=r(3),a=r(7),i=(r(0),r(409)),o={id:"word-venn-diagram",title:"Word Venn Diagram",sidebar_label:"Word Venn Diagram"},l={unversionedId:"learn/word-venn-diagram",id:"learn/word-venn-diagram",isDocsHomePage:!1,title:"Word Venn Diagram",description:"Un diagrama de Venn que visualiza la co-ocurrencia de palabras en los documentos de una matriz de t\xe9rminos-documentos suministrada.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/learn/word-venn-diagram.md",slug:"/learn/word-venn-diagram",permalink:"/es/docs/learn/word-venn-diagram",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/word-venn-diagram.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Word Venn Diagram",sidebar:"docs",previous:{title:"Venn Diagram Builder",permalink:"/es/docs/learn/venn-diagram-builder"},next:{title:"Beta Distribution",permalink:"/es/docs/learn/distribution-beta"}},c=[{value:"Opciones",id:"opciones",children:[]},{value:"Ejemplos",id:"ejemplos",children:[]}],d={toc:c};function u(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},d,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Un diagrama de Venn que visualiza la co-ocurrencia de palabras en los documentos de una matriz de t\xe9rminos-documentos suministrada."),Object(i.b)("h2",{id:"opciones"},"Opciones"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"height")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": la altura del diagrama de Venn en p\xedxeles. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"350"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"nTexts")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number (required)"),": n\xfamero de fuentes de las que se ha reunido el texto. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onClick")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),': Llamada de vuelta para lo que se debe hacer cuando se hace clic en "Dibujar el diagrama de Venn".. Default: ',Object(i.b)("inlineCode",{parentName:"li"},"onClick() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"tdm")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array (required)"),': "Matriz" que va a representar una ',Object(i.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Document-term_matrix"},"matriz de documentos de t\xe9rmino"),". Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"vocabulary")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array (required)"),': "Matriz" en el orden de la matriz de Tdm pasada para que los \xedndices puedan coincidir con sus palabras.. Default: ',Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"width")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": ancho del diagrama de Venn en p\xedxeles. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"600"),".")),Object(i.b)("h2",{id:"ejemplos"},"Ejemplos"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnWordVennDiagram />\n")))}u.isMDXComponent=!0},409:function(e,n,r){"use strict";r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return b}));var t=r(0),a=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=a.a.createContext({}),u=function(e){var n=a.a.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},s=function(e){var n=u(e.components);return a.a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=u(r),m=t,b=s["".concat(o,".").concat(m)]||s[m]||p[m]||i;return r?a.a.createElement(b,l(l({ref:n},d),{},{components:r})):a.a.createElement(b,l({ref:n},d))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);