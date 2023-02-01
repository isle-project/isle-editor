"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3705],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var i=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),k=a,c=m["".concat(p,".").concat(k)]||m[k]||d[k]||r;return n?i.createElement(c,l(l({ref:t},u),{},{components:n})):i.createElement(c,l({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},55646:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return k},default:function(){return v},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return g}});var i=n(603905),a=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&u(e,n,t[n]);return e};const d={id:"voice-input",title:"Voice Input",sidebar_label:"Voice Input"},k=void 0,c={unversionedId:"input/voice-input",id:"input/voice-input",title:"Voice Input",description:"En komponent til stemmeindtastning.",source:"@site/i18n/da/docusaurus-plugin-content-docs/current/input/voice.md",sourceDirName:"input",slug:"/input/voice-input",permalink:"/da/docs/input/voice-input",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/voice.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. jun. 2021",frontMatter:{id:"voice-input",title:"Voice Input",sidebar_label:"Voice Input"},sidebar:"docs",previous:{title:"Text Input",permalink:"/da/docs/input/text-input"},next:{title:"Accordion",permalink:"/da/docs/accordion"}},f={},g=[{value:"Indstillinger",id:"indstillinger",level:2},{value:"Eksempler",id:"eksempler",level:2}],N={toc:g};function v(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var i in e)p.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&o)for(var i of o(e))t.indexOf(i)<0&&s.call(e,i)&&(n[i]=e[i]);return n})(n,["components"]);return(0,i.kt)("wrapper",(t=m(m({},N),u),r(t,l({components:a,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,"En komponent til stemmeindtastning."),(0,i.kt)("h2",m({},{id:"indstillinger"}),"Indstillinger"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"autorecord")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": styrer, om optagelsen skal starte automatisk. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": standard tekstv\xe6rdi. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"grammars")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array"),": liste over talegrammatikker (underst\xf8ttes ikke). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"legend")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),": legende vises foran indtastningsfeltet. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"mode")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": indstillet til ",(0,i.kt)("inlineCode",{parentName:"li"},"full")," for at vise et tekstindtastningsfelt sammen med mikrofonen, ",(0,i.kt)("inlineCode",{parentName:"li"},"status")," for kun at vise en statuslinje med de transskriberede tekster, ",(0,i.kt)("inlineCode",{parentName:"li"},"microphone")," for kun at vise en knap til at skifte til optagelse eller ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),", n\xe5r stemmeindtastningen skal v\xe6re usynlig og udelukkende styres via genvejstaster/stemkommandoer. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'full'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"maxAlternatives")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": det maksimale antal alternativer pr. talegenkendelsesresultat. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onChange")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": callback-funktion, der p\xe5kaldes, n\xe5r tekstinputv\xe6rdien opdateres. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onClick")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": callback-funktion, der kaldes, n\xe5r der klikkes p\xe5 mikrofonknappen. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onClick() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onFinalText")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": callback-funktion, der p\xe5ber\xe5bes, n\xe5r den endelige tekst er modtaget. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onFinalText() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onRecordingStart")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": callback-funktion, der p\xe5kaldes, n\xe5r optagelsen startes. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onRecordingStart() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onRecordingStop")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": callback-funktion, der p\xe5kaldes, n\xe5r optagelsen er stoppet. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onRecordingStop() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onSegment")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": callback-funktion, der p\xe5kaldes med tekstsegmenter. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onSegment() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),': callback-funktion ved indsendelse af tekstinputv\xe6rdi ved at trykke p\xe5 "Enter". Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"placeholder")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": pladsholder for tekstindtastning. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"remote")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": objekt med ",(0,i.kt)("inlineCode",{parentName:"li"},"start"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"stop")," og ",(0,i.kt)("inlineCode",{parentName:"li"},"toggle")," og tilh\xf8rende genvejstaster. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"className")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": klassens navn. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline-stilarter. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"timeout")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": antal millisekunder, hvorefter optagelsen skal timeoutes. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"stopTooltip")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": tooltip-meddelelse, der vises under optagelse. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"startTooltip")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": tooltip-meddelelse vises, mens der ikke optages. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"tooltipPlacement")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": retning af v\xe6rkt\xf8jstip. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'left'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"width")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": bredde af stemmeindtastning (i px). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"500"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"height")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": h\xf8jde for stemmeindtastning (i px). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"36"),".")),(0,i.kt)("h2",m({},{id:"eksempler"}),"Eksempler"),(0,i.kt)("pre",null,(0,i.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<VoiceInput\n    langage="en-US"\n    defaultValue="Enter text"\n/>\n')))}v.isMDXComponent=!0}}]);