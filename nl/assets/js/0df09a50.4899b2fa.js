(self.webpackChunk=self.webpackChunk||[]).push([[7759],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return c}});var i=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),u=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=u(n),c=a,k=s["".concat(p,".").concat(c)]||s[c]||d[c]||r;return n?i.createElement(k,o(o({ref:t},m),{},{components:n})):i.createElement(k,o({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},143467:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var i=n(722122),a=n(419756),r=(n(202784),n(603905)),o={id:"voice-input",title:"Voice Input",sidebar_label:"Voice Input"},l={unversionedId:"input/voice-input",id:"input/voice-input",isDocsHomePage:!1,title:"Voice Input",description:"Een component voor spraakinvoer.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/input/voice.md",sourceDirName:"input",slug:"/input/voice-input",permalink:"/docs/input/voice-input",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/voice.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621312042,formattedLastUpdatedAt:"18-5-2021",sidebar_label:"Voice Input",frontMatter:{id:"voice-input",title:"Voice Input",sidebar_label:"Voice Input"},sidebar:"docs",previous:{title:"Text Input",permalink:"/docs/input/text-input"},next:{title:"Accordion",permalink:"/docs/accordion"}},p=[{value:"Opties",id:"opties",children:[]},{value:"Voorbeelden",id:"voorbeelden",children:[]}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Een component voor spraakinvoer."),(0,r.kt)("h2",{id:"opties"},"Opties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"autorecord")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": regelt of de opname automatisch wordt gestart. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": standaardtekstwaarde. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"grammars")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array"),": spraakgrammatica lijst (niet ondersteund). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legend")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": legenda weergegeven voor het invoerveld. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"mode")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": ingesteld op ",(0,r.kt)("inlineCode",{parentName:"li"},"volledig")," om een tekstinvoerveld naast de microfoon weer te geven, ",(0,r.kt)("inlineCode",{parentName:"li"},"status")," om alleen een statusbalk met de getranscribeerde teksten weer te geven, ",(0,r.kt)("inlineCode",{parentName:"li"},"microfoon")," om alleen een knop te tonen om de opname te schakelen, of ",(0,r.kt)("inlineCode",{parentName:"li"},"niet")," wanneer de spraakinvoer onzichtbaar moet zijn en puur via sneltoetsen / spraakcommando's moet worden geregeld. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'full'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"maxAlternatives")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": maximaal aantal alternatieven per spraakherkenningsresultaat. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChange")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": terugbelfunctie die wordt aangeroepen wanneer de waarde van de tekstinvoer wordt ge\xfcpdatet. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onClick")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": terugbelfunctie ingeroepen bij het klikken op de microfoonknop. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onClick() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onFinalText")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": terugbelfunctie die wordt aangeroepen zodra de definitieve tekst is ontvangen. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onFinalText() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onRecordingStart")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": terugbelfunctie die wordt aangeroepen bij het starten van de opname. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onRecordingStart() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onRecordingStop")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": terugbelfunctie die wordt aangeroepen zodra de opname is gestopt. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onRecordingStop() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onSegment")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": terugbelfunctie ingeroepen met tekstsegmenten. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onSegment() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),': terugbelfunctie bij het indienen van tekstinvoerwaarde door op "Enter" te drukken. Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"placeholder")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": tekstinvoerplaathouder. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"remote")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": object met ",(0,r.kt)("inlineCode",{parentName:"li"},"start"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"stop"),", en ",(0,r.kt)("inlineCode",{parentName:"li"},"schakel")," en bijbehorende sneltoetsen. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"className")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": klassennaam. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline-stijlen. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"timeout")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": aantal milliseconden waarna de opname wordt uitgesteld. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"stopTooltip")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": tooltipbericht weergegeven tijdens de opname. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"startTooltip")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": tooltip-bericht dat wordt weergegeven terwijl er niet wordt opgenomen. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tooltipPlacement")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": richting van de tooltip. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'left'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"width")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": spraakinvoerbreedte (in px). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"500"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"height")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": spraakinvoerhoogte (in px). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"36"),".")),(0,r.kt)("h2",{id:"voorbeelden"},"Voorbeelden"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<VoiceInput\n    langage="en-US"\n    defaultValue="Enter text"\n/>\n')))}m.isMDXComponent=!0}}]);