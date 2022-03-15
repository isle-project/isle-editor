"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2507],{603905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return c}});var r=t(202784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(t),c=a,k=m["".concat(p,".").concat(c)]||m[c]||s[c]||i;return t?r.createElement(k,o(o({ref:n},u),{},{components:t})):r.createElement(k,o({ref:n},u))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},420026:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},assets:function(){return u},toc:function(){return s},default:function(){return c}});var r=t(487462),a=t(263366),i=(t(202784),t(603905)),o=["components"],l={id:"tex",title:"LaTeX Equations",sidebar_label:"LaTeX Equations"},p=void 0,d={unversionedId:"tex",id:"tex",title:"LaTeX Equations",description:"TeX is een ISLE-element dat kan worden gebruikt om LaTeX-vergelijkingen weer te geven.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/tex.md",sourceDirName:".",slug:"/tex",permalink:"/nl/docs/tex",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tex.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1625677901,formattedLastUpdatedAt:"7-7-2021",frontMatter:{id:"tex",title:"LaTeX Equations",sidebar_label:"LaTeX Equations"},sidebar:"docs",previous:{title:"Link",permalink:"/nl/docs/link"},next:{title:"blockquote",permalink:"/nl/docs/html/blockquote"}},u={},s=[{value:"Opties",id:"opties",level:2},{value:"Voorbeelden",id:"voorbeelden",level:2}],m={toc:s};function c(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TeX")," is een ISLE-element dat kan worden gebruikt om LaTeX-vergelijkingen weer te geven."),(0,i.kt)("h2",{id:"opties"},"Opties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"raw")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|number) (required)"),": De letterlijke LaTeX ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," om weer te geven. Accepteert ook ",(0,i.kt)("inlineCode",{parentName:"li"},"cijfers"),". Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"displayMode")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": Boolean' geeft aan of de vergelijking inline of in de weergavemodus moet worden weergegeven. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"numbered")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": bepaalt of er een vergelijkingsnummer moet worden weergegeven voor de weergave van vergelijkingen voor de weergavemodus. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"Object")," met CSS-sleutelwaardeparen die op de vergelijkingscontainer moeten worden toegepast. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"tag")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": Aangepaste tekens die worden weergegeven voor de weergave van vergelijkingen aan de rechterkant. Standaardinstelling van het nummer van de vergelijking in de les. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"elems")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"Object")," met ",(0,i.kt)("inlineCode",{parentName:"li"},"toetsen")," die de LaTeX karakters en hun corresponderende waarden aangeven als configuratie ",(0,i.kt)("inlineCode",{parentName:"li"},"objecten")," om ze interactief te maken. Het instellen van een ",(0,i.kt)("inlineCode",{parentName:"li"},"tooltip")," optie zal een tooltip tonen wanneer u met de muis over de LaTeX-tekens gaat. Het instellen van een ",(0,i.kt)("inlineCode",{parentName:"li"},"variabele")," eigenschap zal een invoerschuifbalk tonen om de respectievelijke toestandsvariabele te wijzigen; in dit geval worden aanvullende eigenschappen ",(0,i.kt)("inlineCode",{parentName:"li"},"legend"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"min"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"max")," en ",(0,i.kt)("inlineCode",{parentName:"li"},"stap")," ondersteund. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"popoverPlacement")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": popoverpositie voor de opgegeven ",(0,i.kt)("inlineCode",{parentName:"li"},"elementen")," (ofwel ",(0,i.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"right"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"bottom"),", of ",(0,i.kt)("inlineCode",{parentName:"li"},"left"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onPopover")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": callback ",(0,i.kt)("inlineCode",{parentName:"li"},"functie")," wanneer een control popover aan of uit wordt geschakeld; ontvangt de display status als een boolean als enige argument. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onPopover() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onClick")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": callback ",(0,i.kt)("inlineCode",{parentName:"li"},"functie")," aangeroepen wanneer een gebruiker op de vergelijking klikt. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,i.kt)("h2",{id:"voorbeelden"},"Voorbeelden"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<TeX\n    raw="2 + 3 = 5"\n    displayMode={true}\n/>\n')))}c.isMDXComponent=!0}}]);