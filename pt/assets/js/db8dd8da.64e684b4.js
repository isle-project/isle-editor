"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47130],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},486545:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return m},default:function(){return N},frontMatter:function(){return c},metadata:function(){return f},toc:function(){return k}});var a=n(603905),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&u(e,n,t[n]);return e};const c={id:"tex",title:"LaTeX Equations",sidebar_label:"LaTeX Equations"},m=void 0,f={unversionedId:"tex",id:"tex",title:"LaTeX Equations",description:"O TeX \xe9 um elemento ISLE que pode ser utilizado para exibir as equa\xe7\xf5es do LaTeX.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/tex.md",sourceDirName:".",slug:"/tex",permalink:"/pt/docs/tex",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tex.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1625677901,formattedLastUpdatedAt:"7 de jul. de 2021",frontMatter:{id:"tex",title:"LaTeX Equations",sidebar_label:"LaTeX Equations"},sidebar:"docs",previous:{title:"Link",permalink:"/pt/docs/link"},next:{title:"blockquote",permalink:"/pt/docs/html/blockquote"}},b={},k=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"Exemplos",id:"exemplos",level:2}],v={toc:k};function N(e){var t,n=e,{components:r}=n,u=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},v),u),o(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"O ",(0,a.kt)("inlineCode",{parentName:"p"},"TeX")," \xe9 um elemento ISLE que pode ser utilizado para exibir as equa\xe7\xf5es do LaTeX."),(0,a.kt)("h2",d({},{id:"op\xe7\xf5es"}),"Op\xe7\xf5es"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"raw")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|number) (required)"),": O literal LaTeX ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," para renderizar. Tamb\xe9m aceita ",(0,a.kt)("inlineCode",{parentName:"li"},"numbers'. Default: "),"none`."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"displayMode")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),': "booleano" indicando se a equa\xe7\xe3o deve ser exibida em linha ou em modo de exibi\xe7\xe3o. Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"numbered")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": controla se deve ser exibido um n\xfamero de equa\xe7\xe3o para as equa\xe7\xf5es do modo de exibi\xe7\xe3o. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"objeto")," com pares de valores-chave CSS a serem aplicados ao recipiente da equa\xe7\xe3o. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"tag")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": Caracteres personalizados exibidos para equa\xe7\xf5es de exibi\xe7\xe3o no lado direito. Padr\xf5es para o n\xfamero da equa\xe7\xe3o dentro da li\xe7\xe3o. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"elems")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),': "Objeto" com "chaves" indicando caracteres LaTeX e seus valores correspondentes sendo "objetos" de configura\xe7\xe3o para torn\xe1-los interativos. A configura\xe7\xe3o de uma op\xe7\xe3o ',(0,a.kt)("inlineCode",{parentName:"li"},"tooltip"),' mostrar\xe1 uma dica de ferramenta quando pairando sobre os caracteres LaTeX. A configura\xe7\xe3o de uma propriedade "vari\xe1vel" exibir\xe1 uma barra deslizante de entrada para mudar a respectiva vari\xe1vel de estado; neste caso, propriedades adicionais "legenda", "min", "max" e "passo" s\xe3o suportadas. Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"popoverPlacement")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": posi\xe7\xe3o popover para os ",(0,a.kt)("inlineCode",{parentName:"li"},"elems")," especificados (ou ",(0,a.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"right"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"bottom"),", ou ",(0,a.kt)("inlineCode",{parentName:"li"},"left"),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onPopover")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": quando um popover de controle \xe9 ligado ou desligado; recebe o status de exibi\xe7\xe3o como um booleano como seu \xfanico argumento. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onPopover() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onClick")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": chamada de retorno ",(0,a.kt)("inlineCode",{parentName:"li"},"fun\xe7\xe3o")," invocada sempre que um usu\xe1rio clica na equa\xe7\xe3o. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,a.kt)("h2",d({},{id:"exemplos"}),"Exemplos"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<TeX\n    raw="2 + 3 = 5"\n    displayMode={true}\n/>\n')))}N.isMDXComponent=!0}}]);