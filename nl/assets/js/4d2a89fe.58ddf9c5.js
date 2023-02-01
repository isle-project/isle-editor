"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[55096],{603905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=d(n),u=r,f=s["".concat(p,".").concat(u)]||s[u]||c[u]||i;return n?a.createElement(f,o(o({ref:t},m),{},{components:n})):a.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},419845:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return u},default:function(){return v},frontMatter:function(){return c},metadata:function(){return f},toc:function(){return g}});var a=n(603905),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(l)for(var n of l(t))d.call(t,n)&&m(e,n,t[n]);return e};const c={id:"map",title:"Map",sidebar_label:"Map"},u=void 0,f={unversionedId:"plots/map",id:"plots/map",title:"Map",description:"Een geografische kaart die kan worden geleverd met plaatsnamen of met lengte- en breedtegraadwaarden.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/plots/map.md",sourceDirName:"plots",slug:"/plots/map",permalink:"/nl/docs/plots/map",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/map.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633403869,formattedLastUpdatedAt:"5 okt. 2021",frontMatter:{id:"map",title:"Map",sidebar_label:"Map"},sidebar:"docs",previous:{title:"Line Plot",permalink:"/nl/docs/plots/lineplot"},next:{title:"Mosaic Plot",permalink:"/nl/docs/plots/mosaicplot"}},k={},g=[{value:"Opties",id:"opties",level:2},{value:"Voorbeelden",id:"voorbeelden",level:2}],b={toc:g};function v(e){var t,n=e,{components:r}=n,m=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=s(s({},b),m),i(t,o({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Een geografische kaart die kan worden geleverd met plaatsnamen of met lengte- en breedtegraadwaarden."),(0,a.kt)("h2",s({},{id:"opties"}),"Opties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"data")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object (required)"),": object of value arrays voor elke variabele. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"scope")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": omvang van de weer te geven kaart. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'world'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"locations")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": naam van de variabele in ",(0,a.kt)("inlineCode",{parentName:"li"},"data")," die de locatienaam van het bedrijf bevat. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"locationmode")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": ofwel ",(0,a.kt)("inlineCode",{parentName:"li"},"ISO-3"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Amerikaanse staten"),", of ",(0,a.kt)("inlineCode",{parentName:"li"},"landnamen")," die aangeven hoe waarden in ",(0,a.kt)("inlineCode",{parentName:"li"},"locaties")," worden gecodeerd. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'country names'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"longitude")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": naam van de variabele in ",(0,a.kt)("inlineCode",{parentName:"li"},"data")," die de lengtegraad heeft. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"latitude")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": naam van de variabele in ",(0,a.kt)("inlineCode",{parentName:"li"},"data")," met breedtegraadwaarden. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"showLand")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": of de geografische kenmerken op de kaart moeten worden weergegeven. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"aggregation")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": tekenreeks die aangeeft hoe de waarden voor elke locatie moeten worden samengevoegd (ofwel ",(0,a.kt)("inlineCode",{parentName:"li"},"sum"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"avg"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"min"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"max"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"mode"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"median"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"count"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"first"),", of ",(0,a.kt)("inlineCode",{parentName:"li"},"last"),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'sum'"),".")),(0,a.kt)("h2",s({},{id:"voorbeelden"}),"Voorbeelden"))}v.isMDXComponent=!0}}]);