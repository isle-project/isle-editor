"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5241],{603905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return c}});var a=t(202784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(t),c=r,f=m["".concat(u,".").concat(c)]||m[c]||p[c]||l;return t?a.createElement(f,i(i({ref:n},d),{},{components:t})):a.createElement(f,i({ref:n},d))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},358215:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(202784);function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},409877:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(487462),r=t(202784),l=t(972389),i=t(161419),o=t(386010),u="tabItem_LplD";function s(e){var n,t,l,s=e.lazy,d=e.block,p=e.defaultValue,m=e.values,c=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,i.lx)(b,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(n=null!=p?p:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=v[0])?void 0:l.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.UB)(),y=N.tabGroupChoices,h=N.setTabGroupChoices,C=(0,r.useState)(g),S=C[0],x=C[1],E=[],j=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var O=y[c];null!=O&&O!==S&&b.some((function(e){return e.value===O}))&&x(O)}var T=function(e){var n=e.currentTarget,t=E.indexOf(n),a=b[t].value;a!==S&&(j(n),x(a),null!=c&&h(c,a))},w=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;t=E[a]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;t=E[r]||E[E.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},f)},b.map((function(e){var n=e.value,t=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===n?0:-1,"aria-selected":S===n,key:n,ref:function(e){return E.push(e)},onKeyDown:w,onFocus:T,onClick:T},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":S===n})}),null!=t?t:n)}))),s?(0,r.cloneElement)(v.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==S})}))))}function d(e){var n=(0,l.Z)();return r.createElement(s,(0,a.Z)({key:String(n)},e))}},168517:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return p},assets:function(){return m},toc:function(){return c},default:function(){return v}});var a=t(487462),r=t(263366),l=(t(202784),t(603905)),i=t(409877),o=t(358215),u=["components"],s={id:"slider-input",title:"Slider Input",sidebar_label:"Slider Input"},d=void 0,p={unversionedId:"input/slider-input",id:"input/slider-input",title:"Slider Input",description:'Un componente de entrada deslizante. Puede ser usado como parte de un tablero de ISLE o independiente. En este \xfaltimo caso, quieres manejar los cambios a trav\xe9s del atributo "onChange" o vincular el valor a una variable global a trav\xe9s del atributo "bind".',source:"@site/i18n/es/docusaurus-plugin-content-docs/current/input/slider.md",sourceDirName:"input",slug:"/input/slider-input",permalink:"/es/docs/input/slider-input",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/slider.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621312042,formattedLastUpdatedAt:"18/5/2021",frontMatter:{id:"slider-input",title:"Slider Input",sidebar_label:"Slider Input"},sidebar:"docs",previous:{title:"Select Input",permalink:"/es/docs/input/select-input"},next:{title:"Text Area",permalink:"/es/docs/input/text-area"}},m={},c=[{value:"Opciones",id:"opciones",level:2},{value:"Ejemplos",id:"ejemplos",level:2}],f={toc:c};function v(e){var n=e.components,t=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,'Un componente de entrada deslizante. Puede ser usado como parte de un tablero de ISLE o independiente. En este \xfaltimo caso, quieres manejar los cambios a trav\xe9s del atributo "onChange" o vincular el valor a una variable global a trav\xe9s del atributo "bind".'),(0,l.kt)("h2",{id:"opciones"},"Opciones"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": El valor inicial del deslizador. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"disabled")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": controla si la entrada del deslizador est\xe1 activa o no. Si se establece en true, el deslizador estar\xe1 presente en la pantalla, aunque en gris. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"inline")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": controla si se coloca el deslizador en l\xednea con el texto o fuera de \xe9l. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"legend")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|node)"),": leyenda de la entrada. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"max")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": El valor m\xe1ximo del deslizador. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"100"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"maxLabel")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": que se mostrar\xe1 a la derecha del deslizador en lugar del valor m\xe1ximo. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"min")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": El valor m\xednimo del deslizador. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"minLabel")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": etiqueta que se mostrar\xe1 a la izquierda del deslizador en lugar del valor m\xednimo. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onChange")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": llamada de retorno invocada con el nuevo valor cuando el valor del deslizador cambia. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"precision")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": redondeo de la entrada. El valor se redondear\xe1 para no tener m\xe1s d\xedgitos significativos que la precisi\xf3n. Por ejemplo, si se desea utilizar s\xf3lo n\xfameros enteros, se usar\xe1 una precisi\xf3n de 10, mientras que si se desea redondear al lugar de las centenas, se usar\xe1 una precisi\xf3n de 0,001. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"step")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(number|string)"),": tama\xf1o del paso del deslizador. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hideTooltip")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": controla si ocultar la informaci\xf3n de la herramienta. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": Estilos en l\xednea CSS. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"numberInputStyle")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": Estilos en l\xednea de CSS para el componente de entrada de n\xfameros. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"rangeInputStyle")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": Estilo en l\xednea de CSS para el componente de entrada de rango. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,l.kt)("h2",{id:"ejemplos"},"Ejemplos"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Mathematical Symbols via LaTeX",value:"mathematicalSymbols"},{label:"Custom Style",value:"customStyle"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<SliderInput\n    legend="Success Probability"\n    defaultValue={0.5}\n    min={0}\n    max={1}\n    step={0.01}\n/>\n'))),(0,l.kt)(o.Z,{value:"mathematicalSymbols",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SliderInput\n    legend={<span>$\\sigma$ (standard deviation)</span>}\n    defaultValue={0.5}\n    min={0}\n    max={1}\n    step={0.01}\n/>\n"))),(0,l.kt)(o.Z,{value:"customStyle",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SliderInput\n    legend=\"Success Probability\"\n    style={{ padding: 30, fontSize: 25, background: 'tan', fontFamily: 'Georgia'}}\n    rangeInputStyle ={{ minWidth: 500}}\n    numberInputStyle = {{ background: 'white', boxShadow: '2px 2px 0px black'}}\n    defaultValue={0.5}\n    min={0}\n    max={200}\n    step={0.01}\n/>\n")))))}v.isMDXComponent=!0}}]);