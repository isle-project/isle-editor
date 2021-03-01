(window.webpackJsonp=window.webpackJsonp||[]).push([[322],{263:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(411)),i={id:"map",title:"Map",sidebar_label:"Map"},l={unversionedId:"plots/map",id:"plots/map",isDocsHomePage:!1,title:"Map",description:"Um mapa geogr\xe1fico que pode ser fornecido com nomes de locais ou valores de longitude/latitude.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/plots/map.md",slug:"/plots/map",permalink:"/pt/docs/plots/map",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/map.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Map",sidebar:"docs",previous:{title:"Line Plot",permalink:"/pt/docs/plots/lineplot"},next:{title:"Mosaic Plot",permalink:"/pt/docs/plots/mosaicplot"}},c=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",children:[]},{value:"Exemplos",id:"exemplos",children:[]}],p={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Um mapa geogr\xe1fico que pode ser fornecido com nomes de locais ou valores de longitude/latitude."),Object(o.b)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"data")," | ",Object(o.b)("inlineCode",{parentName:"li"},"object (required)"),": objeto de arrays de valor para cada vari\xe1vel. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"scope")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": escopo do mapa a ser exibido. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"'world'"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"locations")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": nome da vari\xe1vel em ",Object(o.b)("inlineCode",{parentName:"li"},"dados")," que cont\xeam nomes de localiza\xe7\xe3o. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"locationmode")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": ou ",Object(o.b)("inlineCode",{parentName:"li"},"ISO-3"),", ",Object(o.b)("inlineCode",{parentName:"li"},"Estados dos EUA"),", ou ",Object(o.b)("inlineCode",{parentName:"li"},"nomes de pa\xedses"),", indicando como os valores em ",Object(o.b)("inlineCode",{parentName:"li"},"locais")," s\xe3o codificados. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"'country names'"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"longitude")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": nome da vari\xe1vel em ",Object(o.b)("inlineCode",{parentName:"li"},"dados")," com valores de longitude. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"latitude")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": nome da vari\xe1vel em ",Object(o.b)("inlineCode",{parentName:"li"},"dados")," que contenham valores de latitude. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"showLand")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": se deve mostrar as caracter\xedsticas geogr\xe1ficas no mapa. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),".")),Object(o.b)("h2",{id:"exemplos"},"Exemplos"))}s.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,u=d["".concat(i,".").concat(m)]||d[m]||b[m]||o;return n?r.a.createElement(u,l(l({ref:t},p),{},{components:n})):r.a.createElement(u,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);