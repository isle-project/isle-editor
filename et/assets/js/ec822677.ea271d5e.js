"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2798],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=i,k=m["".concat(u,".").concat(c)]||m[c]||d[c]||r;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},265721:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return p},toc:function(){return d},default:function(){return c}});var a=n(487462),i=n(263366),r=(n(202784),n(603905)),l=["components"],o={id:"map",title:"Map",sidebar_label:"Map"},u=void 0,s={unversionedId:"plots/map",id:"plots/map",title:"Map",description:"Geograafiline kaart, millele saab esitada kas asukoha nimed v\xf5i pikkus- ja laiuskraadide v\xe4\xe4rtused.",source:"@site/i18n/et/docusaurus-plugin-content-docs/current/plots/map.md",sourceDirName:"plots",slug:"/plots/map",permalink:"/et/docs/plots/map",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/map.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633403869,formattedLastUpdatedAt:"4.10.2021",frontMatter:{id:"map",title:"Map",sidebar_label:"Map"},sidebar:"docs",previous:{title:"Line Plot",permalink:"/et/docs/plots/lineplot"},next:{title:"Mosaic Plot",permalink:"/et/docs/plots/mosaicplot"}},p={},d=[{value:"Valikud",id:"valikud",level:2},{value:"N\xe4ited",id:"n\xe4ited",level:2}],m={toc:d};function c(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Geograafiline kaart, millele saab esitada kas asukoha nimed v\xf5i pikkus- ja laiuskraadide v\xe4\xe4rtused."),(0,r.kt)("h2",{id:"valikud"},"Valikud"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object (required)"),": iga muutuja v\xe4\xe4rtuste massiivi objekt. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"scope")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": kuvatava kaardi ulatus. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'world'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"locations")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": asukoha nimesid sisaldava muutuja nimi ",(0,r.kt)("inlineCode",{parentName:"li"},"data"),"-s\xfcsteemis. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"locationmode")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),': kas "ISO-3", "USA riigid" v\xf5i "riikide nimed", mis t\xe4histavad, kuidas v\xe4\xe4rtused "asukohas" on kodeeritud.. Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"'country names'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"longitude")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),': pikkuskraadide v\xe4\xe4rtusi sisaldava muutuja "data" nimi. Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"latitude")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),': muutuja "data" nimi, mis sisaldab laiuskraadide v\xe4\xe4rtusi.. Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"showLand")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kas n\xe4idata kaardil geograafilisi tunnuseid. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"aggregation")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": string, mis n\xe4itab, kuidas iga asukoha v\xe4\xe4rtusi summeerida (kas ",(0,r.kt)("inlineCode",{parentName:"li"},"sum"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"avg"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"min"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"max"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"mode"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"median"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"count"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"first")," v\xf5i ",(0,r.kt)("inlineCode",{parentName:"li"},"last"),").. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'sum'"),".")),(0,r.kt)("h2",{id:"n\xe4ited"},"N\xe4ited"))}c.isMDXComponent=!0}}]);