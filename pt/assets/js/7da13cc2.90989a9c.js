(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{226:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(409)),i={id:"text-input",title:"Text Input",sidebar_label:"Text Input"},l={unversionedId:"input/text-input",id:"input/text-input",isDocsHomePage:!1,title:"Text Input",description:'Um componente de entrada de texto. Pode ser usado como parte de um painel de instrumentos ISLE ou aut\xf4nomo. Neste \xfaltimo caso, voc\xea quer lidar com as mudan\xe7as atrav\xe9s do atributo "Mudar" ou vincular o valor a uma vari\xe1vel global atrav\xe9s do atributo "vincular".',source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/input/text.md",slug:"/input/text-input",permalink:"/pt/docs/input/text-input",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/text.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Text Input",sidebar:"docs",previous:{title:"Text Area",permalink:"/pt/docs/input/text-area"},next:{title:"Voice Input",permalink:"/pt/docs/input/voice-input"}},c=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",children:[]},{value:"Exemplos",id:"exemplos",children:[]}],u={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,'Um componente de entrada de texto. Pode ser usado como parte de um painel de instrumentos ISLE ou aut\xf4nomo. Neste \xfaltimo caso, voc\xea quer lidar com as mudan\xe7as atrav\xe9s do atributo "Mudar" ou vincular o valor a uma vari\xe1vel global atrav\xe9s do atributo "vincular".'),Object(o.b)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"bind")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": nome da vari\xe1vel global para o n\xfamero a ser atribu\xeddo a. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"defaultValue")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": Um valor indicando o valor padr\xe3o da entrada no in\xedcio. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"''"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"value")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": valor do texto (para componente controlado). Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"legend")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(string|node)"),": Uma string indicando o texto exibido ao lado da entrada do n\xfamero. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"''"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"inline")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": Indica se a entrada \xe9 exibida em linha. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onBlur")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o chamada de retorno invocada quando a \xe1rea de texto perde o foco. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"onBlur() {}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onChange")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": Uma fun\xe7\xe3o a ser chamada quando um valor de texto \xe9 alterado. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"onChange() {}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onKeyDown")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o chamada de retorno a ser invocada quando qualquer tecla \xe9 pressionada. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"onKeyDown() {}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onKeyPress")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o de chamada de retorno a ser invocada quando qualquer chave \xe9 inserida. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"onKeyPress() {}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onKeyUp")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o de retorno de chamada a ser invocada quando a chave \xe9 liberada. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"onKeyUp() {}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"placeholder")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": Uma string indicando o valor a ser exibido antes de uma escolha inicial ser feita. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"width")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": Um n\xfamero indicando a largura da entrada em pixels. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"80"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"style")," | ",Object(o.b)("inlineCode",{parentName:"li"},"object"),": Estilos em linha CSS. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(o.b)("h2",{id:"exemplos"},"Exemplos"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<TextInput\n    legend="Your name"\n    defaultValue="Enter text"\n/>\n')))}p.isMDXComponent=!0},409:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),p=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,s=b["".concat(i,".").concat(m)]||b[m]||d[m]||o;return n?r.a.createElement(s,l(l({ref:t},u),{},{components:n})):r.a.createElement(s,l({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);