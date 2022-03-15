"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2640],{603905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return s}});var i=t(202784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=i.createContext({}),p=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=p(e.components);return i.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(t),s=a,k=c["".concat(u,".").concat(s)]||c[s]||d[s]||r;return t?i.createElement(k,l(l({ref:n},m),{},{components:t})):i.createElement(k,l({ref:n},m))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=c;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},377290:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},assets:function(){return m},toc:function(){return d},default:function(){return s}});var i=t(487462),a=t(263366),r=(t(202784),t(603905)),l=["components"],o={id:"voice-input",title:"Voice Input",sidebar_label:"Voice Input"},u=void 0,p={unversionedId:"input/voice-input",id:"input/voice-input",title:"Voice Input",description:"Eine Spracheingabekomponente.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/input/voice.md",sourceDirName:"input",slug:"/input/voice-input",permalink:"/de/docs/input/voice-input",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/voice.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21.2.2021",frontMatter:{id:"voice-input",title:"Voice Input",sidebar_label:"Voice Input"},sidebar:"docs",previous:{title:"Text Input",permalink:"/de/docs/input/text-input"},next:{title:"Accordion",permalink:"/de/docs/accordion"}},m={},d=[{value:"Optionen",id:"optionen",level:2},{value:"Beispiele",id:"beispiele",level:2}],c={toc:d};function s(e){var n=e.components,t=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Eine Spracheingabekomponente."),(0,r.kt)("h2",{id:"optionen"},"Optionen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"autorecord")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob die Aufnahme automatisch gestartet werden soll. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": Standard-Textwert. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"grammars")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array"),": Sprachgrammatikliste (nicht unterst\xfctzt). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legend")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": Legende vor dem Eingabefeld angezeigt. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"mode")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": auf ",(0,r.kt)("inlineCode",{parentName:"li"},"full")," setzen, um ein Texteingabefeld neben dem Mikrofon anzuzeigen, ",(0,r.kt)("inlineCode",{parentName:"li"},"status"),", um nur eine Statusleiste mit den transkribierten Texten anzuzeigen, ",(0,r.kt)("inlineCode",{parentName:"li"},"microphone"),", um nur eine Schaltfl\xe4che zum Umschalten der Aufnahme anzuzeigen, oder ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),", wenn die Spracheingabe unsichtbar sein und rein \xfcber Hotkeys / Sprachbefehle gesteuert werden soll. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'full'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"maxAlternatives")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": maximale Anzahl der angebotenen Alternativen pro Spracherkennungsergebnis. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChange")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": Callback-Funktion, die aufgerufen wird, wenn der Texteingabewert aktualisiert wird. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onClick")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": Callback-Funktion, die beim Klicken auf die Mikrofontaste aufgerufen wird. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onClick() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onFinalText")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": Callback-Funktion, die aufgerufen wird, sobald der endg\xfcltige Text empfangen wurde. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onFinalText() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onRecordingStart")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": Callback-Funktion, die beim Start der Aufnahme aufgerufen wird. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onRecordingStart() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onRecordingStop")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": Callback-Funktion, die aufgerufen wird, sobald die Aufnahme gestoppt ist. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onRecordingStop() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onSegment")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": Callback-Funktion, die mit Textsegmenten aufgerufen wird. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onSegment() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),': Callback-Funktion beim Absenden eines Texteingabewertes durch Dr\xfccken von "Enter". Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"placeholder")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": Texteingabe-Platzhalter. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"remote")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": Objekt mit ",(0,r.kt)("inlineCode",{parentName:"li"},"start"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"stop")," und ",(0,r.kt)("inlineCode",{parentName:"li"},"toggle")," und zugeh\xf6rigen Hotkeys. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"className")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": Klassenname. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS-Inline-Stile. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"timeout")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": Anzahl der Millisekunden, nach denen die Aufnahme zeitlich begrenzt werden soll. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"stopTooltip")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": Tooltip-Meldung, die w\xe4hrend der Aufnahme angezeigt wird. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"startTooltip")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": Tooltip-Meldung wird angezeigt, wenn keine Aufnahme erfolgt. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tooltipPlacement")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": Richtung des Tooltips. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'left'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"width")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": Spracheingabebreite (in px). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"500"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"height")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": Spracheingabeh\xf6he (in px). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"36"),".")),(0,r.kt)("h2",{id:"beispiele"},"Beispiele"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<VoiceInput\n    langage="en-US"\n    defaultValue="Enter text"\n/>\n')))}s.isMDXComponent=!0}}]);