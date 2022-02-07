"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3563],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(n),c=i,k=m["".concat(o,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(k,r(r({ref:t},p),{},{components:n})):a.createElement(k,r({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:i,r[1]=u;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},970467:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var a=n(487462),i=n(263366),l=(n(202784),n(603905)),r=["components"],u={id:"select-input",title:"Select Input",sidebar_label:"Select Input"},o=void 0,s={unversionedId:"input/select-input",id:"input/select-input",title:"Select Input",description:"Valige sisendkomponent. Saab kasutada ISLE armatuurlaua osana v\xf5i iseseisvalt. Viimasel juhul soovite muudatusi k\xe4sitleda atribuudi onChange kaudu v\xf5i siduda v\xe4\xe4rtus globaalse muutujaga atribuudi bind kaudu.",source:"@site/i18n/et/docusaurus-plugin-content-docs/current/input/select.md",sourceDirName:"input",slug:"/input/select-input",permalink:"/et/docs/input/select-input",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/select.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1.6.2021",frontMatter:{id:"select-input",title:"Select Input",sidebar_label:"Select Input"},sidebar:"docs",previous:{title:"Proportions Input",permalink:"/et/docs/input/proportions-input"},next:{title:"Slider Input",permalink:"/et/docs/input/slider-input"}},p=[{value:"Valikud",id:"valikud",children:[],level:2},{value:"N\xe4ited",id:"n\xe4ited",children:[],level:2}],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Valige sisendkomponent. Saab kasutada ISLE armatuurlaua osana v\xf5i iseseisvalt. Viimasel juhul soovite muudatusi k\xe4sitleda atribuudi ",(0,l.kt)("inlineCode",{parentName:"p"},"onChange")," kaudu v\xf5i siduda v\xe4\xe4rtus globaalse muutujaga atribuudi ",(0,l.kt)("inlineCode",{parentName:"p"},"bind")," kaudu."),(0,l.kt)("h2",{id:"valikud"},"Valikud"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"bind")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": globaalse muutuja nimi, millele tuleb m\xe4\xe4rata number. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"clearable")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": boolean v\xe4\xe4rtus, mis n\xe4itab, kas tehtud valik(ud) v\xf5ib(vad) kustutada.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(number|string|array|object)"),": sisendi vaikev\xe4\xe4rtus k\xe4ivitamisel. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"disabled")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollib, kas sisend on aktiivne v\xf5i mitte. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"inline")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": n\xe4itab, kas sisend kuvatakse rivis. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"legend")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|node)"),": sisendi k\xf5rval kuvatav tekst. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"menuPlacement")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),': men\xfc\xfc paigutus juhtnupu suhtes (kas "automaatne", "\xfclemine" v\xf5i "alumine").. Default: ',(0,l.kt)("inlineCode",{parentName:"li"},"'auto'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"multi")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollib, kas v\xf5ib valida mitu vastust. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onChange")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": callback-funktsioon, mis kutsutakse esile, kui valik on tehtud. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"options")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array"),": massiivi, mis n\xe4itab kasutajale k\xe4ttesaadavaid valikuid. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"placeholder")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": v\xe4\xe4rtus, mis kuvatakse enne esialgse valiku tegemist. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"tooltip")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": tekst, mis kuvatakse, kui h\xf5ljuda legendi kohal. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline stiilid. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,l.kt)("h2",{id:"n\xe4ited"},"N\xe4ited"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectInput\n    legend=\"Choose the test direction\"\n    defaultValue=\"two-sided\"\n    options={[\n        'left-sided',\n        'right-sided',\n        'two-sided'\n    ]}\n/>\n")))}m.isMDXComponent=!0}}]);