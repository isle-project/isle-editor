"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[89347],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),s=r,f=c["".concat(p,".").concat(s)]||c[s]||m[s]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},712301:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return c},metadata:function(){return f},toc:function(){return N}});var a=n(603905),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))d.call(t,n)&&u(e,n,t[n]);return e};const c={id:"voice-input",title:"Voice Input",sidebar_label:"Voice Input"},s=void 0,f={unversionedId:"input/voice-input",id:"input/voice-input",title:"Voice Input",description:"Um componente de entrada de voz.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/input/voice.md",sourceDirName:"input",slug:"/input/voice-input",permalink:"/pt/docs/input/voice-input",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/voice.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621312042,formattedLastUpdatedAt:"18 de mai. de 2021",frontMatter:{id:"voice-input",title:"Voice Input",sidebar_label:"Voice Input"},sidebar:"docs",previous:{title:"Text Input",permalink:"/pt/docs/input/text-input"},next:{title:"Accordion",permalink:"/pt/docs/accordion"}},k={},N=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"Exemplos",id:"exemplos",level:2}],g={toc:N};function v(e){var t,n=e,{components:r}=n,u=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},g),u),i(t,o({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Um componente de entrada de voz."),(0,a.kt)("h2",m({},{id:"op\xe7\xf5es"}),"Op\xe7\xf5es"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"autorecord")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": controla se a grava\xe7\xe3o deve ser iniciada automaticamente. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": valor do texto padr\xe3o. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"grammars")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),": lista de gram\xe1tica de fala (sem suporte). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"legend")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|node)"),": legenda exibida na frente do campo de entrada. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"mode")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),': definir como "cheio" para exibir um campo de entrada de texto ao lado do microfone, "status" para exibir apenas uma barra de status com os textos transcritos, "microfone" para exibir apenas um bot\xe3o para alternar a grava\xe7\xe3o, ou "ningu\xe9m" quando a entrada de voz deve ser invis\xedvel e controlada puramente atrav\xe9s de teclas de atalho / comandos de voz. Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"'full'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"maxAlternatives")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": n\xfamero m\xe1ximo de alternativas oferecidas por resultado de reconhecimento de fala. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onChange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o de chamada de retorno invocada quando o valor de entrada de texto \xe9 atualizado. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onClick")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o de chamada de retorno invocada ao clicar no bot\xe3o do microfone. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onClick() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onFinalText")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o de chamada de retorno invocada uma vez que o texto final \xe9 recebido. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onFinalText() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onRecordingStart")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o de chamada de retorno invocada quando a grava\xe7\xe3o \xe9 iniciada. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onRecordingStart() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onRecordingStop")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o de chamada de retorno invocada quando a grava\xe7\xe3o \xe9 interrompida. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onRecordingStop() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onSegment")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o de chamada de retorno invocada com segmentos de texto. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onSegment() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),': fun\xe7\xe3o chamada de retorno ao enviar o valor de entrada de texto pressionando "Enter". Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"placeholder")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": espa\xe7o reservado para entrada de texto. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"remote")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),': objeto com "start", "stop", e "toggle" e teclas de atalho associadas. Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"className")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": nome da classe. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": Estilos em linha CSS. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"timeout")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": n\xfamero de milissegundos ap\xf3s os quais a grava\xe7\xe3o. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"stopTooltip")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": mensagem de dica de ferramenta exibida durante a grava\xe7\xe3o. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"startTooltip")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": mensagem de dica de ferramenta exibida sem grava\xe7\xe3o. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"tooltipPlacement")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": dire\xe7\xe3o da ponta da ferramenta. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'left'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"width")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": largura de entrada de voz (em px). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"500"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"height")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": altura de entrada de voz (em px). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"36"),".")),(0,a.kt)("h2",m({},{id:"exemplos"}),"Exemplos"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<VoiceInput\n    langage="en-US"\n    defaultValue="Enter text"\n/>\n')))}v.isMDXComponent=!0}}]);