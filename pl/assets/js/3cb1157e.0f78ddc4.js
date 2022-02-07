"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8903],{603905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var a=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),s=i,k=m["".concat(p,".").concat(s)]||m[s]||u[s]||r;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},491881:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var a=n(487462),i=n(263366),r=(n(202784),n(603905)),o=["components"],l={id:"map",title:"Map",sidebar_label:"Map"},p=void 0,c={unversionedId:"plots/map",id:"plots/map",title:"Map",description:"Mapa geograficzna, kt\xf3r\u0105 mog\u0105 by\u0107 podane nazwy lokalizacji lub warto\u015bci d\u0142ugo\u015bci i szeroko\u015bci geograficznej.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/plots/map.md",sourceDirName:"plots",slug:"/plots/map",permalink:"/pl/docs/plots/map",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/map.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633403869,formattedLastUpdatedAt:"4.10.2021",frontMatter:{id:"map",title:"Map",sidebar_label:"Map"},sidebar:"docs",previous:{title:"Line Plot",permalink:"/pl/docs/plots/lineplot"},next:{title:"Mosaic Plot",permalink:"/pl/docs/plots/mosaicplot"}},d=[{value:"Opcje",id:"opcje",children:[],level:2},{value:"Przyk\u0142ady",id:"przyk\u0142ady",children:[],level:2}],u={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Mapa geograficzna, kt\xf3r\u0105 mog\u0105 by\u0107 podane nazwy lokalizacji lub warto\u015bci d\u0142ugo\u015bci i szeroko\u015bci geograficznej."),(0,r.kt)("h2",{id:"opcje"},"Opcje"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object (required)"),": obiekt tablice warto\u015bci dla ka\u017cdej zmiennej. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"scope")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": zakres wy\u015bwietlanej mapy. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'world'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"locations")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": nazwa zmiennej w ",(0,r.kt)("inlineCode",{parentName:"li"},"danych"),"miejscach przechowywania nazwy lokalizacji. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"locationmode")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": albo ",(0,r.kt)("inlineCode",{parentName:"li"},"ISO-3"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"pa\u0144stwa USA"),", albo ",(0,r.kt)("inlineCode",{parentName:"li"},"nazwy kraj\xf3w")," oznaczaj\u0105ce spos\xf3b kodowania warto\u015bci w ",(0,r.kt)("inlineCode",{parentName:"li"},"lokalizacjach. Default: "),"'country names'`."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"longitude")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": nazwa zmiennej w ",(0,r.kt)("inlineCode",{parentName:"li"},"danych")," posiadaj\u0105cych warto\u015bci d\u0142ugo\u015bci geograficznej. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"latitude")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": nazwa zmiennej w ",(0,r.kt)("inlineCode",{parentName:"li"},"danych")," posiadaj\u0105cych warto\u015bci szeroko\u015bci geograficznej. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"showLand")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": czy pokaza\u0107 cechy geograficzne na mapie. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"aggregation")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u0142a\u0144cuch wskazuj\u0105cy jak agregowa\u0107 warto\u015bci dla ka\u017cdej lokalizacji (albo ",(0,r.kt)("inlineCode",{parentName:"li"},"sum"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"avg"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"min"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"max"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"mode"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"median"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"count"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"first"),", lub ",(0,r.kt)("inlineCode",{parentName:"li"},"last"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'sum'"),".")),(0,r.kt)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"))}m.isMDXComponent=!0}}]);