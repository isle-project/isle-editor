"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[653],{603905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var a=t(202784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(t),d=r,k=c["".concat(p,".").concat(d)]||c[d]||s[d]||i;return t?a.createElement(k,o(o({ref:n},m),{},{components:t})):a.createElement(k,o({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},261923:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return m},default:function(){return c}});var a=t(487462),r=t(263366),i=(t(202784),t(603905)),o=["components"],l={id:"tex",title:"LaTeX Equations",sidebar_label:"LaTeX Equations"},p=void 0,u={unversionedId:"tex",id:"tex",title:"LaTeX Equations",description:"TeX je prvok ISLE, ktor\xfd mo\u017eno pou\u017ei\u0165 na zobrazenie rovn\xedc LaTeXu.",source:"@site/i18n/sk/docusaurus-plugin-content-docs/current/tex.md",sourceDirName:".",slug:"/tex",permalink:"/sk/docs/tex",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tex.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1625677901,formattedLastUpdatedAt:"7. 7. 2021",frontMatter:{id:"tex",title:"LaTeX Equations",sidebar_label:"LaTeX Equations"},sidebar:"docs",previous:{title:"Link",permalink:"/sk/docs/link"},next:{title:"blockquote",permalink:"/sk/docs/html/blockquote"}},m=[{value:"Mo\u017enosti",id:"mo\u017enosti",children:[],level:2},{value:"Pr\xedklady",id:"pr\xedklady",children:[],level:2}],s={toc:m};function c(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TeX")," je prvok ISLE, ktor\xfd mo\u017eno pou\u017ei\u0165 na zobrazenie rovn\xedc LaTeXu."),(0,i.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"raw")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|number) (required)"),": Doslovn\xfd ",(0,i.kt)("inlineCode",{parentName:"li"},"re\u0165azec")," LaTeXu, ktor\xfd sa m\xe1 vykresli\u0165. Akceptuje aj ",(0,i.kt)("inlineCode",{parentName:"li"},"\u010d\xedsla"),". Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"displayMode")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean")," ur\u010duj\xfaci, \u010di sa m\xe1 rovnica zobrazi\u0165 v riadku alebo v re\u017eime zobrazenia. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"numbered")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, \u010di sa m\xe1 zobrazova\u0165 \u010d\xedslo rovnice pre rovnice v re\u017eime zobrazenia. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"objekt")," s dvojicami k\u013e\xfa\u010d-hodnota CSS, ktor\xe9 sa maj\xfa pou\u017ei\u0165 na kontajner rovnice. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"tag")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": Vlastn\xe9 znaky zobrazen\xe9 pre zobrazenie rovn\xedc na pravej strane. Predvolen\xe9 nastavenie je \u010d\xedslo rovnice vo vn\xfatri lekcie. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"elems")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"objekt"),", pri\u010dom ",(0,i.kt)("inlineCode",{parentName:"li"},"k\u013e\xfa\u010de")," ozna\u010duj\xfa znaky LaTeXu a ich zodpovedaj\xface hodnoty s\xfa konfigura\u010dn\xe9 ",(0,i.kt)("inlineCode",{parentName:"li"},"objekty"),", aby boli interakt\xedvne. Nastaven\xedm vo\u013eby ",(0,i.kt)("inlineCode",{parentName:"li"},"tooltip")," sa po prejden\xed nad znakmi LaTeXu zobraz\xed n\xe1poveda. Nastavenie vlastnosti ",(0,i.kt)("inlineCode",{parentName:"li"},"variable")," zobraz\xed vstupn\xfd posuvn\xedk na zmenu pr\xedslu\u0161nej stavovej premennej; v tomto pr\xedpade s\xfa podporovan\xe9 \u010fal\u0161ie vlastnosti ",(0,i.kt)("inlineCode",{parentName:"li"},"legend"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"min"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"max")," a ",(0,i.kt)("inlineCode",{parentName:"li"},"step"),". Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"popoverPlacement")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": poz\xedcia popoveru pre zadan\xe9 ",(0,i.kt)("inlineCode",{parentName:"li"},"elemy")," (bu\u010f ",(0,i.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"right"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"bottom")," alebo ",(0,i.kt)("inlineCode",{parentName:"li"},"left"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onPopover")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": sp\xe4tn\xe9 volanie ",(0,i.kt)("inlineCode",{parentName:"li"},"funkcia")," pri zapnut\xed alebo vypnut\xed ovl\xe1dacieho prvku popover; ako jedin\xfd argument prij\xedma stav zobrazenia ako boolean. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onPopover() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onClick")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": sp\xe4tn\xe9 volanie ",(0,i.kt)("inlineCode",{parentName:"li"},"funkcia")," vyvolan\xe9 v\u017edy, ke\u010f pou\u017e\xedvate\u013e klikne na rovnicu. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,i.kt)("h2",{id:"pr\xedklady"},"Pr\xedklady"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<TeX\n    raw="2 + 3 = 5"\n    displayMode={true}\n/>\n')))}c.isMDXComponent=!0}}]);