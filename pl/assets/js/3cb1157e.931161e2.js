(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(411)),o={id:"map",title:"Map",sidebar_label:"Map"},c={unversionedId:"plots/map",id:"plots/map",isDocsHomePage:!1,title:"Map",description:"Mapa geograficzna, kt\xf3r\u0105 mog\u0105 by\u0107 podane nazwy lokalizacji lub warto\u015bci d\u0142ugo\u015bci i szeroko\u015bci geograficznej.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/plots/map.md",slug:"/plots/map",permalink:"/pl/docs/plots/map",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/map.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Map",sidebar:"docs",previous:{title:"Line Plot",permalink:"/pl/docs/plots/lineplot"},next:{title:"Mosaic Plot",permalink:"/pl/docs/plots/mosaicplot"}},l=[{value:"Opcje",id:"opcje",children:[]},{value:"Przyk\u0142ady",id:"przyk\u0142ady",children:[]}],p={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Mapa geograficzna, kt\xf3r\u0105 mog\u0105 by\u0107 podane nazwy lokalizacji lub warto\u015bci d\u0142ugo\u015bci i szeroko\u015bci geograficznej."),Object(i.b)("h2",{id:"opcje"},"Opcje"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"data")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object (required)"),": obiekt tablice warto\u015bci dla ka\u017cdej zmiennej. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"scope")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": zakres wy\u015bwietlanej mapy. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'world'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"locations")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": nazwa zmiennej w ",Object(i.b)("inlineCode",{parentName:"li"},"danych"),"miejscach przechowywania nazwy lokalizacji. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"locationmode")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": albo ",Object(i.b)("inlineCode",{parentName:"li"},"ISO-3"),", ",Object(i.b)("inlineCode",{parentName:"li"},"pa\u0144stwa USA"),", albo ",Object(i.b)("inlineCode",{parentName:"li"},"nazwy kraj\xf3w")," oznaczaj\u0105ce spos\xf3b kodowania warto\u015bci w ",Object(i.b)("inlineCode",{parentName:"li"},"lokalizacjach. Default: "),"'country names'`."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"longitude")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": nazwa zmiennej w ",Object(i.b)("inlineCode",{parentName:"li"},"danych")," posiadaj\u0105cych warto\u015bci d\u0142ugo\u015bci geograficznej. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"latitude")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": nazwa zmiennej w ",Object(i.b)("inlineCode",{parentName:"li"},"danych")," posiadaj\u0105cych warto\u015bci szeroko\u015bci geograficznej. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"showLand")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": czy pokaza\u0107 cechy geograficzne na mapie. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),".")),Object(i.b)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"))}b.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(n),s=a,m=u["".concat(o,".").concat(s)]||u[s]||d[s]||i;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);