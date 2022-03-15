"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[431],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var i=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),u=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return i.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||r;return n?i.createElement(f,l(l({ref:t},s),{},{components:n})):i.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},411468:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return s},toc:function(){return m},default:function(){return d}});var i=n(487462),a=n(263366),r=(n(202784),n(603905)),l=["components"],o={id:"voice-input",title:"Voice Input",sidebar_label:"Voice Input"},p=void 0,u={unversionedId:"input/voice-input",id:"input/voice-input",title:"Voice Input",description:"Un \xe9l\xe9ment de saisie vocale.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/input/voice.md",sourceDirName:"input",slug:"/input/voice-input",permalink:"/fr/docs/input/voice-input",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/voice.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621312042,formattedLastUpdatedAt:"18/05/2021",frontMatter:{id:"voice-input",title:"Voice Input",sidebar_label:"Voice Input"},sidebar:"docs",previous:{title:"Text Input",permalink:"/fr/docs/input/text-input"},next:{title:"Accordion",permalink:"/fr/docs/accordion"}},s={},m=[{value:"Options",id:"options",level:2},{value:"Exemples",id:"exemples",level:2}],c={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Un \xe9l\xe9ment de saisie vocale."),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"autorecord")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si l'enregistrement doit commencer automatiquement. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": valeur de texte par d\xe9faut. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"grammars")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array"),": liste de grammaire de la parole (non prise en charge). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legend")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": l\xe9gende affich\xe9e devant le champ de saisie. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"mode")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),': r\xe9gl\xe9 sur "full" pour afficher un champ de saisie de texte \xe0 c\xf4t\xe9 du microphone, "status" pour afficher uniquement une barre d\'\xe9tat avec les textes transcrits, "microphone" pour afficher juste un bouton pour basculer l\'enregistrement, ou "no" lorsque la saisie vocale doit \xeatre invisible et purement contr\xf4l\xe9e par des raccourcis clavier / commandes vocales. Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"'full'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"maxAlternatives")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": nombre maximum d'alternatives fournies par r\xe9sultat de reconnaissance vocale. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChange")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": fonction de rappel invoqu\xe9e lors de la mise \xe0 jour de la valeur de saisie du texte. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onClick")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": fonction de rappel invoqu\xe9e en cliquant sur le bouton du microphone. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onClick() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onFinalText")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": la fonction de rappel est invoqu\xe9e une fois le texte final re\xe7u. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onFinalText() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onRecordingStart")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": fonction de rappel invoqu\xe9e lors du d\xe9marrage de l'enregistrement. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onRecordingStart() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onRecordingStop")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": la fonction de rappel est invoqu\xe9e lorsque l'enregistrement est arr\xeat\xe9. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onRecordingStop() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onSegment")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": fonction de rappel invoqu\xe9e avec des segments de texte. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onSegment() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),': fonction de rappel lors de la soumission de la valeur de saisie du texte en appuyant sur "Entr\xe9e". Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"placeholder")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": placeholder de saisie de texte. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"remote")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),': objet avec "start", "stop", et "toggle" et les raccourcis clavier associ\xe9s. Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"className")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": nom de la classe. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": Styles CSS en ligne. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"timeout")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": le nombre de millisecondes apr\xe8s lequel il faut interrompre l'enregistrement. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"stopTooltip")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": message d'info-bulle affich\xe9 pendant l'enregistrement. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"startTooltip")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": message d'info-bulle affich\xe9 lorsque l'enregistrement n'est pas en cours. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tooltipPlacement")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": direction de l'infobulle. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'left'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"width")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": largeur de la saisie vocale (en px). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"500"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"height")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": hauteur d'entr\xe9e de la voix (en px). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"36"),".")),(0,r.kt)("h2",{id:"exemples"},"Exemples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<VoiceInput\n    langage="en-US"\n    defaultValue="Enter text"\n/>\n')))}d.isMDXComponent=!0}}]);