"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7742],{603905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,f=s["".concat(u,".").concat(m)]||s[m]||c[m]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},951150:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return s}});var a=n(487462),r=n(263366),o=(n(202784),n(603905)),i=["components"],l={id:"text-input",title:"Text Input",sidebar_label:"Text Input"},u=void 0,p={unversionedId:"input/text-input",id:"input/text-input",title:"Text Input",description:'Um componente de entrada de texto. Pode ser usado como parte de um painel de instrumentos ISLE ou aut\xf4nomo. Neste \xfaltimo caso, voc\xea quer lidar com as mudan\xe7as atrav\xe9s do atributo "Mudar" ou vincular o valor a uma vari\xe1vel global atrav\xe9s do atributo "vincular".',source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/input/text.md",sourceDirName:"input",slug:"/input/text-input",permalink:"/pt/docs/input/text-input",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/text.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614613459,formattedLastUpdatedAt:"01/03/2021",frontMatter:{id:"text-input",title:"Text Input",sidebar_label:"Text Input"},sidebar:"docs",previous:{title:"Text Area",permalink:"/pt/docs/input/text-area"},next:{title:"Voice Input",permalink:"/pt/docs/input/voice-input"}},d=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",children:[],level:2},{value:"Exemplos",id:"exemplos",children:[],level:2}],c={toc:d};function s(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Um componente de entrada de texto. Pode ser usado como parte de um painel de instrumentos ISLE ou aut\xf4nomo. Neste \xfaltimo caso, voc\xea quer lidar com as mudan\xe7as atrav\xe9s do atributo "Mudar" ou vincular o valor a uma vari\xe1vel global atrav\xe9s do atributo "vincular".'),(0,o.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"bind")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": nome da vari\xe1vel global para o n\xfamero a ser atribu\xeddo a. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": valor que indica o valor padr\xe3o da entrada no in\xedcio. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"value")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": valor do texto (para componente controlado). Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"legend")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(string|node)"),": string indicando o texto exibido ao lado da entrada do n\xfamero. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"inline")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": Indica se a entrada \xe9 exibida em linha. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"onBlur")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o chamada de retorno invocada quando a \xe1rea de texto perde o foco. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"onBlur() {}"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"onChange")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o a ser chamada quando um valor de texto \xe9 alterado. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"onKeyDown")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o chamada de retorno a ser invocada quando qualquer tecla \xe9 pressionada. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"onKeyDown() {}"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"onKeyPress")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o de chamada de retorno a ser invocada quando qualquer chave \xe9 inserida. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"onKeyPress() {}"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"onKeyUp")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o de retorno de chamada a ser invocada quando a chave \xe9 liberada. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"onKeyUp() {}"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"placeholder")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": string indicando o valor a ser exibido antes que uma escolha inicial seja feita. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"width")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),": n\xfamero indicando a largura da entrada em pixels. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"80"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"style")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object"),": Estilos em linha CSS. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,o.kt)("h2",{id:"exemplos"},"Exemplos"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<TextInput\n    legend="Your name"\n    defaultValue="Enter text"\n/>\n')))}s.isMDXComponent=!0}}]);