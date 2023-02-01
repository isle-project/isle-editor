"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[14589],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var i=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=i.createContext({}),p=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(u.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),s=a,f=m["".concat(u,".").concat(s)]||m[s]||d[s]||r;return n?i.createElement(f,l(l({ref:t},c),{},{components:n})):i.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},149333:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return N}});var i=n(603905),a=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&c(e,n,t[n]);return e};const d={id:"voice-input",title:"Voice Input",sidebar_label:"Voice Input"},s=void 0,f={unversionedId:"input/voice-input",id:"input/voice-input",title:"Voice Input",description:"O component\u0103 de intrare vocal\u0103.",source:"@site/i18n/ro/docusaurus-plugin-content-docs/current/input/voice.md",sourceDirName:"input",slug:"/input/voice-input",permalink:"/ro/docs/input/voice-input",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/voice.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1 iun. 2021",frontMatter:{id:"voice-input",title:"Voice Input",sidebar_label:"Voice Input"},sidebar:"docs",previous:{title:"Text Input",permalink:"/ro/docs/input/text-input"},next:{title:"Accordion",permalink:"/ro/docs/accordion"}},k={},N=[{value:"Op\u021biuni",id:"op\u021biuni",level:2},{value:"Exemple",id:"exemple",level:2}],g={toc:N};function b(e){var t,n=e,{components:a}=n,c=((e,t)=>{var n={};for(var i in e)u.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&o)for(var i of o(e))t.indexOf(i)<0&&p.call(e,i)&&(n[i]=e[i]);return n})(n,["components"]);return(0,i.kt)("wrapper",(t=m(m({},g),c),r(t,l({components:a,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,"O component\u0103 de intrare vocal\u0103."),(0,i.kt)("h2",m({},{id:"op\u021biuni"}),"Op\u021biuni"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"autorecord")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": controleaz\u0103 dac\u0103 se porne\u0219te automat \xeenregistrarea. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": valoarea textului implicit. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"grammars")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array"),": list\u0103 de gramatici de vorbire (neacceptat\u0103). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"legend")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),": legenda afi\u0219at\u0103 \xeen fa\u021ba c\xe2mpului de intrare. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"mode")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": seta\u021bi la ",(0,i.kt)("inlineCode",{parentName:"li"},"full")," pentru a afi\u0219a un c\xe2mp de introducere a textului al\u0103turi de microfon, ",(0,i.kt)("inlineCode",{parentName:"li"},"status")," pentru a afi\u0219a doar o bar\u0103 de stare cu textele transcrise, ",(0,i.kt)("inlineCode",{parentName:"li"},"microphone")," pentru a afi\u0219a doar un buton de comutare a \xeenregistr\u0103rii, sau ",(0,i.kt)("inlineCode",{parentName:"li"},"none")," c\xe2nd intrarea vocal\u0103 trebuie s\u0103 fie invizibil\u0103 \u0219i controlat\u0103 exclusiv prin taste rapide / comenzi vocale.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'full'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"maxAlternatives")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": num\u0103rul maxim de alternative furnizate pentru fiecare rezultat al recunoa\u0219terii vocale. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onChange")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": func\u021bia de callback invocat\u0103 la actualizarea valorii de intrare a textului. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onClick")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": func\u021bia de callback invocat\u0103 la ap\u0103sarea butonului de microfon. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onClick() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onFinalText")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": func\u021bia de callback invocat\u0103 odat\u0103 ce se prime\u0219te textul final. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onFinalText() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onRecordingStart")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": func\u021bia de callback invocat\u0103 la \xeenceperea \xeenregistr\u0103rii. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onRecordingStart() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onRecordingStop")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": func\u021bia de callback invocat\u0103 odat\u0103 ce \xeenregistrarea este oprit\u0103. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onRecordingStop() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onSegment")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": func\u021bia de callback invocat\u0103 cu segmente de text. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onSegment() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),': func\u021bia callback la trimiterea valorii de intrare a textului prin ap\u0103sarea "Enter". Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"placeholder")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": spa\u021biu de introducere a textului. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"remote")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": obiect cu ",(0,i.kt)("inlineCode",{parentName:"li"},"start"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"stop"),", \u0219i ",(0,i.kt)("inlineCode",{parentName:"li"},"toggle")," \u0219i tastele rapide asociate. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"className")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": numele clasei. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": Stiluri inline CSS. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"timeout")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": num\u0103rul de milisecunde dup\u0103 care trebuie s\u0103 se \xeentrerup\u0103 \xeenregistrarea. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"stopTooltip")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": mesaj tooltip afi\u0219at \xeen timpul \xeenregistr\u0103rii. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"startTooltip")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": mesaj tooltip afi\u0219at \xeen timp ce nu se \xeenregistreaz\u0103. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"tooltipPlacement")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": direc\u021bia indicatorului de instrumente. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'left'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"width")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": l\u0103\u021bimea intr\u0103rii vocale (\xeen px). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"500"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"height")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": \xeen\u0103l\u021bimea intr\u0103rii vocale (\xeen px). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"36"),".")),(0,i.kt)("h2",m({},{id:"exemple"}),"Exemple"),(0,i.kt)("pre",null,(0,i.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<VoiceInput\n    langage="en-US"\n    defaultValue="Enter text"\n/>\n')))}b.isMDXComponent=!0}}]);