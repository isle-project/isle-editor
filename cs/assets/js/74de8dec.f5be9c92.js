"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46846],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},598839:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return g}});var r=n(603905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&s(e,n,t[n]);return e};const d={id:"draggable-list",title:"Draggable List",sidebar_label:"Draggable List"},m=void 0,f={unversionedId:"draggable-list",id:"draggable-list",title:"Draggable List",description:"Seznam prvk\u016f, kter\xe9 lze p\u0159etahovat a kter\xe9 mohou studenti \u0159adit.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/draggable-list.md",sourceDirName:".",slug:"/draggable-list",permalink:"/cs/docs/draggable-list",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/draggable-list.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. 6. 2021",frontMatter:{id:"draggable-list",title:"Draggable List",sidebar_label:"Draggable List"},sidebar:"docs",previous:{title:"Color Picker",permalink:"/cs/docs/color-picker"},next:{title:"Flippable Card",permalink:"/cs/docs/flippable-card"}},b={},g=[{value:"Mo\u017enosti",id:"mo\u017enosti",level:2},{value:"P\u0159\xedklady",id:"p\u0159\xedklady",level:2}],k={toc:g};function y(e){var t,n=e,{components:a}=n,s=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},k),s),i(t,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Seznam prvk\u016f, kter\xe9 lze p\u0159etahovat a kter\xe9 mohou studenti \u0159adit."),(0,r.kt)("h2",u({},{id:"mo\u017enosti"}),"Mo\u017enosti"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array (required)"),": pole objekt\u016f s kl\xed\u010di ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," a ",(0,r.kt)("inlineCode",{parentName:"li"},"text"),". Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChange")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": zp\u011btn\xe9 vol\xe1n\xed vyvolan\xe9 s nov\u011b uspo\u0159\xe1dan\xfdm datov\xfdm polem p\u0159i ka\u017ed\xe9 zm\u011bn\u011b. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange(){}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onInit")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": funkce zp\u011btn\xe9ho vol\xe1n\xed vyvolan\xe1 po p\u0159ipojen\xed komponenty. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onInit(){}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shuffle")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0159\xedd\xed, zda maj\xed b\xfdt datov\xe9 prvky p\u0159i po\u010d\xe1te\u010dn\xedm zobrazen\xed prom\xedch\xe1ny.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disabled")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0159\xedd\xed, zda lze prvky p\u0159etahovat, nebo ne. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"className")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": n\xe1zev t\u0159\xeddy. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": \u0158\xe1dkov\xe9 styly CSS. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,r.kt)("h2",u({},{id:"p\u0159\xedklady"}),"P\u0159\xedklady"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<DraggableList\n    data={[\n        { id: 0, text: "Compact" },\n        { id: 1, text: "Large" },\n        { id: 2, text: "Midsize" },\n        { id: 3, text: "Small" }\n    ]}\n/>\n')))}y.isMDXComponent=!0}}]);