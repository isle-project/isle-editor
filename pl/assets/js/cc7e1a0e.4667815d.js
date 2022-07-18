"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46519],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var a=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),k=u(n),s=i,d=k["".concat(p,".").concat(s)]||k[s]||m[s]||r;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},986649:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return s},default:function(){return N},frontMatter:function(){return k},metadata:function(){return d},toc:function(){return f}});var a=n(603905),i=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&c(e,n,t[n]);return e};const k={id:"voice-input",title:"Voice Input",sidebar_label:"Voice Input"},s=void 0,d={unversionedId:"input/voice-input",id:"input/voice-input",title:"Voice Input",description:"Komponent wej\u015bcia g\u0142osowego.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/input/voice.md",sourceDirName:"input",slug:"/input/voice-input",permalink:"/pl/docs/input/voice-input",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/voice.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621312042,formattedLastUpdatedAt:"18 maj 2021",frontMatter:{id:"voice-input",title:"Voice Input",sidebar_label:"Voice Input"},sidebar:"docs",previous:{title:"Text Input",permalink:"/pl/docs/input/text-input"},next:{title:"Accordion",permalink:"/pl/docs/accordion"}},y={},f=[{value:"Opcje",id:"opcje",level:2},{value:"Przyk\u0142ady",id:"przyk\u0142ady",level:2}],w={toc:f};function N(e){var t,n=e,{components:i}=n,c=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},w),c),r(t,o({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Komponent wej\u015bcia g\u0142osowego."),(0,a.kt)("h2",m({},{id:"opcje"}),"Opcje"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"autorecord")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy automatycznie rozpoczyna\u0107 nagrywanie. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": Domy\u015blna warto\u015b\u0107 tekstowa. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"grammars")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),": lista gramatyki mowy (bez wsparcia). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"legend")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|node)"),": legenda wy\u015bwietlana przed polem wprowadzania danych. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"mode")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": ustawi\u0107 na ",(0,a.kt)("inlineCode",{parentName:"li"},"pe\u0142ne")," wy\u015bwietlanie pola wprowadzania tekstu obok mikrofonu, ",(0,a.kt)("inlineCode",{parentName:"li"},"status")," wy\u015bwietlanie tylko paska stanu z transkrybowanymi tekstami, ",(0,a.kt)("inlineCode",{parentName:"li"},"mikrofon")," wy\u015bwietlanie tylko przycisku do prze\u0142\u0105czania nagrywania, lub ",(0,a.kt)("inlineCode",{parentName:"li"},"nie"),"gdy wej\u015bcie g\u0142osowe powinno by\u0107 niewidoczne i czysto kontrolowane za pomoc\u0105 klawiszy skr\xf3t\xf3w / polece\u0144 g\u0142osowych. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'full'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"maxAlternatives")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": maksymalna liczba alternatywnych rozwi\u0105za\u0144 na jeden wynik rozpoznawania mowy. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onChange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": funkcja callback wywo\u0142ywana przy aktualizacji warto\u015bci wprowadzania tekstu. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onClick")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": funkcja callback wywo\u0142ywana po klikni\u0119ciu na przycisk mikrofonu. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onClick() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onFinalText")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": funkcja callback wywo\u0142ywana po otrzymaniu tekstu ko\u0144cowego. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onFinalText() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onRecordingStart")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": funkcja callback wywo\u0142ywana przy rozpocz\u0119ciu nagrywania. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onRecordingStart() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onRecordingStop")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": funkcja callback wywo\u0142ywana po zatrzymaniu nagrywania. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onRecordingStop() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onSegment")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": funkcja wywo\u0142ania zwrotnego z segmentami tekstowymi. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onSegment() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),': funkcja callback podczas wysy\u0142ania warto\u015bci wprowadzania tekstu poprzez naci\u015bni\u0119cie "Enter". Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"placeholder")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": miejsce na wprowadzenie tekstu. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"remote")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),': obiekt z "startem", "zatrzymaniem", "prze\u0142\u0105czaniem" i powi\u0105zanymi klawiszami funkcyjnymi. Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"className")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": nazwa klasy. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": Style CSS inline. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"timeout")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": liczba milisekund, po up\u0142ywie kt\xf3rych mo\u017cna przerwa\u0107 nagrywanie. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"stopTooltip")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": komunikat z etykiet\u0105 narz\u0119dzia wy\u015bwietlany podczas nagrywania. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"startTooltip")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": komunikat z etykiet\u0105 narz\u0119dzia wy\u015bwietlany podczas nie nagrywania. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"tooltipPlacement")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": kierunek ko\u0144c\xf3wki narz\u0119dzia. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'left'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"width")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": szeroko\u015b\u0107 wej\u015bcia g\u0142osowego (w px). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"500"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"height")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": wysoko\u015b\u0107 wej\u015bcia g\u0142osowego (w px). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"36"),".")),(0,a.kt)("h2",m({},{id:"przyk\u0142ady"}),"Przyk\u0142ady"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<VoiceInput\n    langage="en-US"\n    defaultValue="Enter text"\n/>\n')))}N.isMDXComponent=!0}}]);