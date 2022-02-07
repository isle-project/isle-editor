"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2332],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var i=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),s=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),k=s(n),d=a,c=k["".concat(o,".").concat(d)]||k[d]||m[d]||r;return n?i.createElement(c,l(l({ref:t},p),{},{components:n})):i.createElement(c,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=k;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var s=2;s<r;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},655391:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return k}});var i=n(487462),a=n(263366),r=(n(202784),n(603905)),l=["components"],u={id:"text-input",title:"Text Input",sidebar_label:"Text Input"},o=void 0,s={unversionedId:"input/text-input",id:"input/text-input",title:"Text Input",description:"Tekstisisestuskomponent. Saab kasutada ISLE armatuurlaua osana v\xf5i iseseisvalt. Viimasel juhul soovite muudatusi k\xe4sitleda atribuudi onChange abil v\xf5i siduda v\xe4\xe4rtus globaalse muutujaga atribuudi bind abil.",source:"@site/i18n/et/docusaurus-plugin-content-docs/current/input/text.md",sourceDirName:"input",slug:"/input/text-input",permalink:"/et/docs/input/text-input",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/text.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1.6.2021",frontMatter:{id:"text-input",title:"Text Input",sidebar_label:"Text Input"},sidebar:"docs",previous:{title:"Text Area",permalink:"/et/docs/input/text-area"},next:{title:"Voice Input",permalink:"/et/docs/input/voice-input"}},p=[{value:"Valikud",id:"valikud",children:[],level:2},{value:"N\xe4ited",id:"n\xe4ited",children:[],level:2}],m={toc:p};function k(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Tekstisisestuskomponent. Saab kasutada ISLE armatuurlaua osana v\xf5i iseseisvalt. Viimasel juhul soovite muudatusi k\xe4sitleda atribuudi ",(0,r.kt)("inlineCode",{parentName:"p"},"onChange")," abil v\xf5i siduda v\xe4\xe4rtus globaalse muutujaga atribuudi ",(0,r.kt)("inlineCode",{parentName:"p"},"bind")," abil."),(0,r.kt)("h2",{id:"valikud"},"Valikud"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"bind")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": globaalse muutuja nimi, millele tuleb m\xe4\xe4rata number. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": v\xe4\xe4rtus, mis n\xe4itab sisendi vaikev\xe4\xe4rtust k\xe4ivitamisel. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"value")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": tekstiv\xe4\xe4rtus (kontrollitava komponendi puhul). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legend")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": string, mis n\xe4itab numbrisisendi k\xf5rval kuvatavat teksti. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inline")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": N\xe4itab, kas sisend kuvatakse reas. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onBlur")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": tagasip\xf6\xf6rdumisfunktsioon, mida kutsutakse esile, kui tekstiala kaotab fookuse. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onBlur() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChange")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": funktsioon, mida kutsutakse \xfcles, kui teksti v\xe4\xe4rtust muudetakse. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onKeyDown")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": callback-funktsioon, mis kutsutakse esile, kui m\xf5ni klahv vajutatakse alla.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onKeyDown() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onKeyPress")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": tagasil\xf6\xf6gifunktsioon, mis kutsutakse esile, kui sisestatakse m\xf5ni klahv. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onKeyPress() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onKeyUp")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": tagasil\xf6\xf6gifunktsioon, mis kutsutakse \xfcles, kui klahv vabastatakse.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onKeyUp() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"placeholder")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": string, mis n\xe4itab enne esialgse valiku tegemist kuvatavat v\xe4\xe4rtust. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"width")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": number, mis n\xe4itab sisendi laiust pikslites. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"80"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline stiilid. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,r.kt)("h2",{id:"n\xe4ited"},"N\xe4ited"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<TextInput\n    legend="Your name"\n    defaultValue="Enter text"\n/>\n')))}k.isMDXComponent=!0}}]);