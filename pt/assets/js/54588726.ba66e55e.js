"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8035],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var a=n(202784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),s=o,f=c["".concat(d,".").concat(s)]||c[s]||m[s]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},356084:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},assets:function(){return u},toc:function(){return m},default:function(){return s}});var a=n(487462),o=n(263366),r=(n(202784),n(603905)),i=["components"],l={id:"plotly",title:"Plotly",sidebar_label:"Plotly"},d=void 0,p={unversionedId:"plotly",id:"plotly",title:"Plotly",description:"Visualiza\xe7\xe3o parcelada.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/plotly.md",sourceDirName:".",slug:"/plotly",permalink:"/pt/docs/plotly",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plotly.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621312042,formattedLastUpdatedAt:"18/05/2021",frontMatter:{id:"plotly",title:"Plotly",sidebar_label:"Plotly"},sidebar:"docs",previous:{title:"Typewriter",permalink:"/pt/docs/typewriter"},next:{title:"Bar Chart",permalink:"/pt/docs/plots/barchart"}},u={},m=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"Exemplos",id:"exemplos",level:2}],c={toc:m};function s(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Visualiza\xe7\xe3o parcelada."),(0,r.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array (required)"),": matriz de dados. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"draggable")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controla se a trama deve ser arrastada. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"editable")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controla se as etiquetas da trama criada s\xe3o edit\xe1veis. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"id")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": identificador do componente. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"layout")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": Objeto de layout Plotly. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"config")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": Op\xe7\xf5es de configura\xe7\xe3o em lote (ver: ",(0,r.kt)("a",{parentName:"li",href:"https://plotly.com/javascript/configuration-options/"},"https://plotly.com/javascript/configuration-options/"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legendButtons")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controla se devem ser exibidos bot\xf5es para mudar a legenda. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"meta")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": meta-informa\xe7\xe3o da trama. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"revision")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": quando fornecido, faz com que a trama seja atualizada quando o valor de revis\xe3o \xe9 incrementado. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": Estilos em linha CSS. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onAfterPlot")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o de chamada de retorno invocada cada vez que um gr\xe1fico \xe9 tra\xe7ado. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onAfterPlot() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onClick")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o de chamada de retorno invocada quando qualquer elemento \xe9 clicado. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onClick() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onInitialized")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": chamada de retorno invocada uma vez iniciada a trama; chamada com figura (objeto com tr\xeas chaves correspondentes aos adere\xe7os de entrada: ",(0,r.kt)("inlineCode",{parentName:"li"},"dados"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"layout")," e ",(0,r.kt)("inlineCode",{parentName:"li"},"frames"),") e o n\xf3 DOM ",(0,r.kt)("inlineCode",{parentName:"li"},"graphDiv"),". Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onInitialized() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onLegendClick")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o de chamada de retorno invocada quando o item da legenda \xe9 clicado. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onLegendClick() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onLegendDoubleClick")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o de chamada de retorno invocada quando o item da legenda \xe9 clicado duas vezes. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onLegendDoubleClick() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onRelayout")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o de chamada de retorno invocada quando o rel\xe9 \xe9 acionado. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onRelayout() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onSelected")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o de chamada de retorno invocada quando os elementos s\xe3o selecionados. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onSelected() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onShare")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),': fun\xe7\xe3o chamada de retorno invocada ao clicar no bot\xe3o "Compartilhar". Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"removeButtons")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controla se todos os bot\xf5es devem ser removidos (al\xe9m do bot\xe3o de tela cheia, se habilitado). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"toggleFullscreen")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controla se permite a exibi\xe7\xe3o da trama em modo de tela cheia. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,r.kt)("h2",{id:"exemplos"},"Exemplos"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Plotly\n    data={[{\n        values: [ 24, 7, 0.5 ],\n        labels: [ 'English', 'Spanish', 'Other' ],\n        type: 'pie'\n            }]}\n    layout={{ width: 300 }}\n/>\n")))}s.isMDXComponent=!0}}]);