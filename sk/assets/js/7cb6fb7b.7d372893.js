"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[80594],{603905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(n),k=i,d=c["".concat(p,".").concat(k)]||c[k]||s[k]||r;return n?a.createElement(d,o(o({ref:t},m),{},{components:n})):a.createElement(d,o({ref:t},m))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},730630:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return k},default:function(){return g},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return f}});var a=n(603905),i=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&m(e,n,t[n]);return e};const c={id:"voice-input",title:"Voice Input",sidebar_label:"Voice Input"},k=void 0,d={unversionedId:"input/voice-input",id:"input/voice-input",title:"Voice Input",description:"Komponent hlasov\xe9ho vstupu.",source:"@site/i18n/sk/docusaurus-plugin-content-docs/current/input/voice.md",sourceDirName:"input",slug:"/input/voice-input",permalink:"/sk/docs/input/voice-input",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/voice.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. 6. 2021",frontMatter:{id:"voice-input",title:"Voice Input",sidebar_label:"Voice Input"},sidebar:"docs",previous:{title:"Text Input",permalink:"/sk/docs/input/text-input"},next:{title:"Accordion",permalink:"/sk/docs/accordion"}},v={},f=[{value:"Mo\u017enosti",id:"mo\u017enosti",level:2},{value:"Pr\xedklady",id:"pr\xedklady",level:2}],N={toc:f};function g(e){var t,n=e,{components:i}=n,m=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=s(s({},N),m),r(t,o({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Komponent hlasov\xe9ho vstupu."),(0,a.kt)("h2",s({},{id:"mo\u017enosti"}),"Mo\u017enosti"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"autorecord")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": ovl\xe1da, \u010di sa m\xe1 automaticky spusti\u0165 nahr\xe1vanie. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": predvolen\xe1 hodnota textu. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"grammars")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),": zoznam gramatiky re\u010di (nepodporovan\xfd). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"legend")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|node)"),": legenda zobrazen\xe1 pred vstupn\xfdm po\u013eom. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"mode")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": nastavi\u0165 na ",(0,a.kt)("inlineCode",{parentName:"li"},"full")," pre zobrazenie textov\xe9ho vstupn\xe9ho po\u013ea spolu s mikrof\xf3nom, ",(0,a.kt)("inlineCode",{parentName:"li"},"status")," pre zobrazenie iba stavov\xe9ho riadku s prepisovan\xfdmi textami, ",(0,a.kt)("inlineCode",{parentName:"li"},"microphone")," pre zobrazenie iba tla\u010didla na prep\xednanie nahr\xe1vania, alebo ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),", ak m\xe1 by\u0165 hlasov\xfd vstup nevidite\u013en\xfd a ovl\xe1dan\xfd v\xfdlu\u010dne pomocou kl\xe1vesov\xfdch skratiek / hlasov\xfdch pr\xedkazov. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'full'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"maxAlternatives")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": maxim\xe1lny po\u010det alternat\xedv poskytnut\xfdch na v\xfdsledok rozpozn\xe1vania re\u010di. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onChange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": funkcia sp\xe4tn\xe9ho volania vyvolan\xe1 pri aktualiz\xe1cii hodnoty textov\xe9ho vstupu. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onClick")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": sp\xe4tn\xe1 funkcia vyvolan\xe1 po kliknut\xed na tla\u010didlo mikrof\xf3nu. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onClick() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onFinalText")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": sp\xe4tn\xe1 funkcia vyvolan\xe1 po prijat\xed kone\u010dn\xe9ho textu. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onFinalText() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onRecordingStart")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": sp\xe4tn\xe1 funkcia vyvolan\xe1 pri spusten\xed nahr\xe1vania. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onRecordingStart() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onRecordingStop")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": sp\xe4tn\xe1 funkcia vyvolan\xe1 po zastaven\xed nahr\xe1vania. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onRecordingStop() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onSegment")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": sp\xe4tn\xe9 volanie vyvolan\xe9 pomocou textov\xfdch segmentov. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onSegment() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),': funkcia sp\xe4tn\xe9ho volania pri odoslan\xed hodnoty textov\xe9ho vstupu stla\u010den\xedm tla\u010didla "Enter". Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"placeholder")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": z\xe1stupn\xfd symbol textov\xe9ho vstupu. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"remote")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": objekt s kl\xe1vesami ",(0,a.kt)("inlineCode",{parentName:"li"},"\u0161tart"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"stop")," a ",(0,a.kt)("inlineCode",{parentName:"li"},"prep\xedna\u010d")," a pr\xedslu\u0161n\xfdmi kl\xe1vesov\xfdmi skratkami. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"className")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": n\xe1zov triedy. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": Riadkov\xe9 \u0161t\xfdly CSS. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"timeout")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": po\u010det milisek\xfand, po ktor\xfdch sa m\xe1 nahr\xe1vanie ukon\u010di\u0165. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"stopTooltip")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": n\xe1povedn\xe1 spr\xe1va zobrazen\xe1 po\u010das nahr\xe1vania. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"startTooltip")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": zobrazenie n\xe1povedy pri nenahr\xe1van\xed. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"tooltipPlacement")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": smer n\xe1povedy. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'left'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"width")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u0161\xedrka hlasov\xe9ho vstupu (v px). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"500"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"height")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": v\xfd\u0161ka hlasov\xe9ho vstupu (v px). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"36"),".")),(0,a.kt)("h2",s({},{id:"pr\xedklady"}),"Pr\xedklady"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<VoiceInput\n    langage="en-US"\n    defaultValue="Enter text"\n/>\n')))}g.isMDXComponent=!0}}]);