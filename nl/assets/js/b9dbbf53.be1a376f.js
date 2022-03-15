"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5595],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=d(n),k=r,c=u["".concat(p,".").concat(k)]||u[k]||m[k]||l;return n?a.createElement(c,i(i({ref:t},s),{},{components:n})):a.createElement(c,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},624725:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},assets:function(){return s},toc:function(){return m},default:function(){return k}});var a=n(487462),r=n(263366),l=(n(202784),n(603905)),i=["components"],o={id:"sketchpad",title:"Sketchpad",sidebar_label:"Sketchpad"},p=void 0,d={unversionedId:"sketchpad",id:"sketchpad",title:"Sketchpad",description:"Een schetsblok voor het maken van aantekeningen op collegeplaten of lege pagina's.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/sketchpad.md",sourceDirName:".",slug:"/sketchpad",permalink:"/nl/docs/sketchpad",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/sketchpad.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633715852,formattedLastUpdatedAt:"8-10-2021",frontMatter:{id:"sketchpad",title:"Sketchpad",sidebar_label:"Sketchpad"},sidebar:"docs",previous:{title:"Text Editor",permalink:"/nl/docs/text-editor"},next:{title:"Lesson Submit",permalink:"/nl/docs/lesson-submit"}},s={},m=[{value:"Opties",id:"opties",level:2},{value:"Voorbeelden",id:"voorbeelden",level:2}],u={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Een schetsblok voor het maken van aantekeningen op collegeplaten of lege pagina's."),(0,l.kt)("h2",{id:"opties"},"Opties"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"autoSave")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": bepaalt of de redacteur de huidige tekst in een bepaald tijdsinterval moet opslaan in de lokale opslag van de browser. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"feedbackButtons")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": bepaalt of er op elke dia een feedbackknop moet worden weergegeven. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"intervalTime")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": tijd tussen de automatische besparingen. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"10000"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hideInputButtons")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": bepaalt of de teken- en tekstinvoertoetsen moeten worden verborgen. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hideNavigationButtons")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": bepaalt of de knoppen voor het navigeren tussen de pagina's moeten worden verborgen. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hideSaveButtons")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": bepaalt of de knoppen voor het opslaan van de gegevens moeten worden verborgen. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hideTransmitButtons")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": bepaalt of de knoppen voor het verzenden van gebruikersacties moeten worden verborgen. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"brushSize")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": grootte van het penseel om te schilderen met. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"4"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"color")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": kleur van het penseel en de teksten. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'#444444'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"canvasWidth")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": breedte van het doekelement (in px). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"1200"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"canvasHeight")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": hoogte van het doekelement (in px). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"700"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"fullscreen")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": regelt of het canvas automatisch wordt aangepast aan de breedte en hoogte van het browservenster. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"fill")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": als ",(0,l.kt)("inlineCode",{parentName:"li"},"horizontaal"),", vul alle beschikbare horizontale ruimte op bij het tekenen van een PDF; als ",(0,l.kt)("inlineCode",{parentName:"li"},"verticaal"),", wordt alle verticale ruimte gebruikt om y-asoverloop te voorkomen. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'vertical'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"disabled")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": het onderdeel alleen-lezen en het tekenen op het schetsblok verbieden. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"fontFamily")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": lettertypefamilie. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'Arial'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"fontSize")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": lettertypegrootte. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"24"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"nodes")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": componenten die moeten worden weergegeven op de top van de opgegeven dia's; ",(0,l.kt)("inlineCode",{parentName:"li"},"sleutels")," moeten overeenkomen met de paginanummers, ",(0,l.kt)("inlineCode",{parentName:"li"},"waarden")," met de componenten. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"noPages")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": eerste aantal pagina's. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"pdf")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": link naar PDF-bestand voor ingebakken pagina's. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"showTutorial")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": handleiding voor het schetsblok tonen bij het opstarten. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"dynamicallyHideButtons")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": bepaalt of de knoppen moeten worden verborgen als de breedte van de werkbalk niet voldoende is (anders wordt er een nieuwe regel gestart). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"transmitOwner")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": de vraag of de acties van de eigenaar in real time naar andere gebruikers moeten worden doorgestuurd. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"groupMode")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": controleert of alle handelingen van de gebruiker aan iedereen worden doorgegeven. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline-stijlen. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onChange")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": callback aangeroepen wanneer een nieuw lijnelement wordt getekend. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onChange() {}"),".")),(0,l.kt)("h2",{id:"voorbeelden"},"Voorbeelden"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Sketchpad canvasWidth={750} />\n")))}k.isMDXComponent=!0}}]);