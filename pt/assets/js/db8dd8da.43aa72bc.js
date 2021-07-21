(self.webpackChunk=self.webpackChunk||[]).push([[7421],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},753763:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var a=n(722122),r=n(419756),o=(n(202784),n(603905)),i=["components"],l={id:"tex",title:"LaTeX Equations",sidebar_label:"LaTeX Equations"},p=void 0,s={unversionedId:"tex",id:"tex",isDocsHomePage:!1,title:"LaTeX Equations",description:"O TeX \xe9 um elemento ISLE que pode ser utilizado para exibir as equa\xe7\xf5es do LaTeX.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/tex.md",sourceDirName:".",slug:"/tex",permalink:"/pt/docs/tex",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tex.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1625677901,formattedLastUpdatedAt:"07/07/2021",frontMatter:{id:"tex",title:"LaTeX Equations",sidebar_label:"LaTeX Equations"},sidebar:"docs",previous:{title:"Link",permalink:"/pt/docs/link"},next:{title:"blockquote",permalink:"/pt/docs/html/blockquote"}},u=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",children:[]},{value:"Exemplos",id:"exemplos",children:[]}],d={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"O ",(0,o.kt)("inlineCode",{parentName:"p"},"TeX")," \xe9 um elemento ISLE que pode ser utilizado para exibir as equa\xe7\xf5es do LaTeX."),(0,o.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"raw")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(string|number) (required)"),": O literal LaTeX ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," para renderizar. Tamb\xe9m aceita ",(0,o.kt)("inlineCode",{parentName:"li"},"numbers'. Default: "),"none`."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"displayMode")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),': "booleano" indicando se a equa\xe7\xe3o deve ser exibida em linha ou em modo de exibi\xe7\xe3o. Default: ',(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"numbered")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": controla se deve ser exibido um n\xfamero de equa\xe7\xe3o para as equa\xe7\xf5es do modo de exibi\xe7\xe3o. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"style")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"objeto")," com pares de valores-chave CSS a serem aplicados ao recipiente da equa\xe7\xe3o. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"tag")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": Caracteres personalizados exibidos para equa\xe7\xf5es de exibi\xe7\xe3o no lado direito. Padr\xf5es para o n\xfamero da equa\xe7\xe3o dentro da li\xe7\xe3o. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"elems")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object"),': "Objeto" com "chaves" indicando caracteres LaTeX e seus valores correspondentes sendo "objetos" de configura\xe7\xe3o para torn\xe1-los interativos. A configura\xe7\xe3o de uma op\xe7\xe3o ',(0,o.kt)("inlineCode",{parentName:"li"},"tooltip"),' mostrar\xe1 uma dica de ferramenta quando pairando sobre os caracteres LaTeX. A configura\xe7\xe3o de uma propriedade "vari\xe1vel" exibir\xe1 uma barra deslizante de entrada para mudar a respectiva vari\xe1vel de estado; neste caso, propriedades adicionais "legenda", "min", "max" e "passo" s\xe3o suportadas. Default: ',(0,o.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"popoverPlacement")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": posi\xe7\xe3o popover para os ",(0,o.kt)("inlineCode",{parentName:"li"},"elems")," especificados (ou ",(0,o.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"right"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"bottom"),", ou ",(0,o.kt)("inlineCode",{parentName:"li"},"left"),"). Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"onPopover")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"function"),": quando um popover de controle \xe9 ligado ou desligado; recebe o status de exibi\xe7\xe3o como um booleano como seu \xfanico argumento. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"onPopover() {}"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"onClick")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"function"),": chamada de retorno ",(0,o.kt)("inlineCode",{parentName:"li"},"fun\xe7\xe3o")," invocada sempre que um usu\xe1rio clica na equa\xe7\xe3o. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,o.kt)("h2",{id:"exemplos"},"Exemplos"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<TeX\n    raw="2 + 3 = 5"\n    displayMode={true}\n/>\n')))}c.isMDXComponent=!0}}]);