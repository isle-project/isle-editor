"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10110],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},763836:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return g}});var r=n(603905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&u(e,n,t[n]);return e};const d={id:"draggable-list",title:"Draggable List",sidebar_label:"Draggable List"},m=void 0,f={unversionedId:"draggable-list",id:"draggable-list",title:"Draggable List",description:"Lista element\xf3w do przeci\u0105gania, kt\xf3re mog\u0105 by\u0107 ponownie uporz\u0105dkowane przez uczni\xf3w.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/draggable-list.md",sourceDirName:".",slug:"/draggable-list",permalink:"/pl/docs/draggable-list",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/draggable-list.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"22 lut 2021",frontMatter:{id:"draggable-list",title:"Draggable List",sidebar_label:"Draggable List"},sidebar:"docs",previous:{title:"Color Picker",permalink:"/pl/docs/color-picker"},next:{title:"Flippable Card",permalink:"/pl/docs/flippable-card"}},y={},g=[{value:"Opcje",id:"opcje",level:2},{value:"Przyk\u0142ady",id:"przyk\u0142ady",level:2}],b={toc:g};function k(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},b),u),i(t,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Lista element\xf3w do przeci\u0105gania, kt\xf3re mog\u0105 by\u0107 ponownie uporz\u0105dkowane przez uczni\xf3w."),(0,r.kt)("h2",s({},{id:"opcje"}),"Opcje"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array (required)"),": tablica obiekt\xf3w z klawiszami ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," i ",(0,r.kt)("inlineCode",{parentName:"li"},"text"),". Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChange")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": wywo\u0142anie zwrotne z nowo zam\xf3wion\u0105 tablic\u0105 danych przy ka\u017cdej zmianie. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange(){}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onInit")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": funkcja callback wywo\u0142ywana po zamontowaniu elementu. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onInit(){}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shuffle")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy elementy danych powinny by\u0107 przemieszane we wst\u0119pnym wy\u015bwietlaniu. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disabled")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy elementy mog\u0105 by\u0107 przeci\u0105gane, czy nie. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"className")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": nazwa klasy. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": Style CSS inline. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,r.kt)("h2",s({},{id:"przyk\u0142ady"}),"Przyk\u0142ady"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<DraggableList\n    data={[\n        { id: 0, text: "Compact" },\n        { id: 1, text: "Large" },\n        { id: 2, text: "Midsize" },\n        { id: 3, text: "Small" }\n    ]}\n/>\n')))}k.isMDXComponent=!0}}]);