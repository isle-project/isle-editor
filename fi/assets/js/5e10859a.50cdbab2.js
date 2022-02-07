"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[305],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),c=i,k=d["".concat(p,".").concat(c)]||d[c]||m[c]||r;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},539594:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var a=n(487462),i=n(263366),r=(n(202784),n(603905)),o=["components"],l={id:"map",title:"Map",sidebar_label:"Map"},p=void 0,s={unversionedId:"plots/map",id:"plots/map",title:"Map",description:"Maantieteellinen kartta, jolle voidaan antaa joko sijainnin nimi tai pituus- ja leveysasteet.",source:"@site/i18n/fi/docusaurus-plugin-content-docs/current/plots/map.md",sourceDirName:"plots",slug:"/plots/map",permalink:"/fi/docs/plots/map",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/map.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633403869,formattedLastUpdatedAt:"4.10.2021",frontMatter:{id:"map",title:"Map",sidebar_label:"Map"},sidebar:"docs",previous:{title:"Line Plot",permalink:"/fi/docs/plots/lineplot"},next:{title:"Mosaic Plot",permalink:"/fi/docs/plots/mosaicplot"}},u=[{value:"Vaihtoehdot",id:"vaihtoehdot",children:[],level:2},{value:"Esimerkkej\xe4",id:"esimerkkej\xe4",children:[],level:2}],m={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Maantieteellinen kartta, jolle voidaan antaa joko sijainnin nimi tai pituus- ja leveysasteet."),(0,r.kt)("h2",{id:"vaihtoehdot"},"Vaihtoehdot"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object (required)"),": kunkin muuttujan arvom\xe4\xe4ritysten objekti. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"scope")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": n\xe4ytett\xe4v\xe4n kartan laajuus. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'world'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"locations")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": sijaintien nimi\xe4 sis\xe4lt\xe4v\xe4n muuttujan nimi ",(0,r.kt)("inlineCode",{parentName:"li"},"data"),":ssa. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"locationmode")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": joko ",(0,r.kt)("inlineCode",{parentName:"li"},"ISO-3"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"USA-states")," tai ",(0,r.kt)("inlineCode",{parentName:"li"},"country names"),", jotka ilmaisevat, miten ",(0,r.kt)("inlineCode",{parentName:"li"},"locations"),"-arvot koodataan.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'country names'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"longitude")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": pituusarvoja sis\xe4lt\xe4v\xe4n muuttujan nimi ",(0,r.kt)("inlineCode",{parentName:"li"},"data"),":ssa. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"latitude")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": muuttujan nimi ",(0,r.kt)("inlineCode",{parentName:"li"},"data"),":ssa, joka sis\xe4lt\xe4\xe4 leveyspiirin arvot.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"showLand")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": n\xe4ytet\xe4\xe4nk\xf6 kartalla maantieteelliset piirteet. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"aggregation")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": merkkijono, joka osoittaa, miten kunkin sijainnin arvot aggregoidaan (joko ",(0,r.kt)("inlineCode",{parentName:"li"},"sum"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"avg"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"min"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"max"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"mode"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"median"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"count"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"first")," tai ",(0,r.kt)("inlineCode",{parentName:"li"},"last"),").. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'sum'"),".")),(0,r.kt)("h2",{id:"esimerkkej\xe4"},"Esimerkkej\xe4"))}d.isMDXComponent=!0}}]);