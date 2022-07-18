"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51571],{603905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(202784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(a),c=r,b=m["".concat(u,".").concat(c)]||m[c]||d[c]||l;return a?n.createElement(b,o(o({ref:t},p),{},{components:a})):n.createElement(b,o({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},440034:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(202784),r=a(386010),l="tabItem_Ymn6",o=Object.defineProperty,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function d({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))u.call(t,a)&&p(e,a,t[a]);if(i)for(var a of i(t))s.call(t,a)&&p(e,a,t[a]);return e})({role:"tabpanel",className:(0,r.Z)(l,a)},{hidden:t}),e)}},751361:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(202784),r=a(386010),l=a(152670),o=a(258433),i=a(952326),u=a(638849),s="tabList__CuJ",p="tabItem_LNqP",d=Object.defineProperty,m=Object.defineProperties,c=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,g=(e,t,a)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,k=(e,t)=>{for(var a in t||(t={}))f.call(t,a)&&g(e,a,t[a]);if(b)for(var a of b(t))v.call(t,a)&&g(e,a,t[a]);return e};function y(e){var t,a;const{lazy:l,block:d,defaultValue:b,values:f,groupId:v,className:g}=e,y=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=f?f:y.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),h=(0,o.l)(N,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===b?b:null!=(a=null!=b?b:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?a:y[0].props.value;if(null!==O&&!N.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:C,setTabGroupChoices:x}=(0,i.U)(),[j,S]=(0,n.useState)(O),w=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=v){const e=C[v];null!=e&&e!==j&&N.some((t=>t.value===e))&&S(e)}const P=e=>{const t=e.currentTarget,a=w.indexOf(t),n=N[a].value;n!==j&&(E(t),S(n),null!=v&&x(v,String(n)))},T=e=>{var t,a;let n=null;switch(e.key){case"ArrowRight":{const a=w.indexOf(e.currentTarget)+1;n=null!=(t=w[a])?t:w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=null!=(a=w[t])?a:w[w.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",s)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},g)},N.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(l=k({role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,key:e,ref:e=>w.push(e),onKeyDown:T,onFocus:P,onClick:P},a),o={className:(0,r.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":j===e})},m(l,c(o))),null!=t?t:e);var l,o}))),l?(0,n.cloneElement)(y.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function N(e){const t=(0,l.Z)();return n.createElement(y,k({key:String(t)},e))}},270692:function(e,t,a){a.r(t),a.d(t,{assets:function(){return g},contentTitle:function(){return f},default:function(){return N},frontMatter:function(){return b},metadata:function(){return v},toc:function(){return k}});var n=a(603905),r=a(751361),l=a(440034),o=Object.defineProperty,i=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&m(e,a,t[a]);if(s)for(var a of s(t))d.call(t,a)&&m(e,a,t[a]);return e};const b={id:"slider-input",title:"Slider Input",sidebar_label:"Slider Input"},f=void 0,v={unversionedId:"input/slider-input",id:"input/slider-input",title:"Slider Input",description:'Um componente de entrada deslizante. Pode ser usado como parte de um painel de instrumentos ISLE ou aut\xf4nomo. Neste \xfaltimo caso, voc\xea quer lidar com as mudan\xe7as atrav\xe9s do atributo "Mudar" ou ligar o valor a uma vari\xe1vel global atrav\xe9s do atributo "ligar".',source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/input/slider.md",sourceDirName:"input",slug:"/input/slider-input",permalink:"/pt/docs/input/slider-input",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/slider.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621312042,formattedLastUpdatedAt:"18 de mai. de 2021",frontMatter:{id:"slider-input",title:"Slider Input",sidebar_label:"Slider Input"},sidebar:"docs",previous:{title:"Select Input",permalink:"/pt/docs/input/select-input"},next:{title:"Text Area",permalink:"/pt/docs/input/text-area"}},g={},k=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"Exemplos",id:"exemplos",level:2}],y={toc:k};function N(e){var t,a=e,{components:o}=a,m=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=c(c({},y),m),i(t,u({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,'Um componente de entrada deslizante. Pode ser usado como parte de um painel de instrumentos ISLE ou aut\xf4nomo. Neste \xfaltimo caso, voc\xea quer lidar com as mudan\xe7as atrav\xe9s do atributo "Mudar" ou ligar o valor a uma vari\xe1vel global atrav\xe9s do atributo "ligar".'),(0,n.kt)("h2",c({},{id:"op\xe7\xf5es"}),"Op\xe7\xf5es"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": O valor inicial do controle deslizante. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"disabled")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": controla se a entrada do controle deslizante est\xe1 ativa ou n\xe3o. Se definido como verdadeiro, o controle deslizante estar\xe1 presente na tela, embora acinzentado. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"inline")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": controla se a barra deslizante deve ser colocada em linha com o texto ou fora. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"legend")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|node)"),": legenda da entrada. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"max")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": O valor m\xe1ximo do controle deslizante. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"100"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"maxLabel")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": r\xf3tulo a ser exibido \xe0 direita do deslizador em vez do valor m\xe1ximo. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"min")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": O valor m\xednimo do controle deslizante. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"minLabel")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": etiqueta a ser exibida \xe0 esquerda do controle deslizante em vez do valor m\xednimo. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onChange")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": chamada de retorno invocada com o novo valor quando o valor do controle deslizante muda. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"precision")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": arredondamento da entrada. O valor ser\xe1 arredondado para n\xe3o ter d\xedgitos mais significativos do que a precis\xe3o. Por exemplo, se algu\xe9m desejar usar apenas n\xfameros inteiros, uma precis\xe3o de 10 seria usada, enquanto que se algu\xe9m desejar arredondar para o lugar das centenas, seria usada uma precis\xe3o de 0,001. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"step")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(number|string)"),": tamanho do degrau do controle deslizante. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"hideTooltip")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": controla se deve ocultar a ponta das ferramentas. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"style")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": Estilos em linha CSS. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"numberInputStyle")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": Estilos de CSS em linha para componente de entrada de n\xfameros. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"rangeInputStyle")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": Estilo CSS em linha para o componente de entrada de gama. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,n.kt)("h2",c({},{id:"exemplos"}),"Exemplos"),(0,n.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Mathematical Symbols via LaTeX",value:"mathematicalSymbols"},{label:"Custom Style",value:"customStyle"}],lazy:!0,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<SliderInput\n    legend="Success Probability"\n    defaultValue={0.5}\n    min={0}\n    max={1}\n    step={0.01}\n/>\n'))),(0,n.kt)(l.Z,{value:"mathematicalSymbols",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<SliderInput\n    legend={<span>$\\sigma$ (standard deviation)</span>}\n    defaultValue={0.5}\n    min={0}\n    max={1}\n    step={0.01}\n/>\n"))),(0,n.kt)(l.Z,{value:"customStyle",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<SliderInput\n    legend=\"Success Probability\"\n    style={{ padding: 30, fontSize: 25, background: 'tan', fontFamily: 'Georgia'}}\n    rangeInputStyle ={{ minWidth: 500}}\n    numberInputStyle = {{ background: 'white', boxShadow: '2px 2px 0px black'}}\n    defaultValue={0.5}\n    min={0}\n    max={200}\n    step={0.01}\n/>\n")))))}N.isMDXComponent=!0}}]);