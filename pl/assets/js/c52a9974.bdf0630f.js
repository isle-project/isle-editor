"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8067],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},358215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(202784);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(487462),r=n(202784),l=n(972389),i=n(161419),o=n(386010),u="tabItem_LplD";function p(e){var t,n,l,p=e.lazy,s=e.block,c=e.defaultValue,m=e.values,d=e.groupId,k=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.lx)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===c?c:null!=(t=null!=c?c:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=y[0])?void 0:l.props.value;if(null!==v&&!f.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,i.UB)(),g=w.tabGroupChoices,N=w.setTabGroupChoices,h=(0,r.useState)(v),z=h[0],j=h[1],C=[],S=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var x=g[d];null!=x&&x!==z&&f.some((function(e){return e.value===x}))&&j(x)}var O=function(e){var t=e.currentTarget,n=C.indexOf(t),a=f[n].value;a!==z&&(S(t),j(a),null!=d&&N(d,a))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},k)},f.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:z===t?0:-1,"aria-selected":z===t,key:t,ref:function(e){return C.push(e)},onKeyDown:T,onFocus:O,onClick:O},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":z===t})}),null!=n?n:t)}))),p?(0,r.cloneElement)(y.filter((function(e){return e.props.value===z}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==z})}))))}function s(e){var t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},889e3:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return m},toc:function(){return d},default:function(){return y}});var a=n(487462),r=n(263366),l=(n(202784),n(603905)),i=n(409877),o=n(358215),u=["components"],p={id:"slider-input",title:"Slider Input",sidebar_label:"Slider Input"},s=void 0,c={unversionedId:"input/slider-input",id:"input/slider-input",title:"Slider Input",description:"Element wej\u015bciowy suwaka. Mo\u017ce by\u0107 u\u017cywany jako cz\u0119\u015b\u0107 deski rozdzielczej ISLE lub autonomiczny. W tym ostatnim przypadku, chcesz obs\u0142ugiwa\u0107 zmiany za pomoc\u0105 atrybutu onChange lub powi\u0105za\u0107 warto\u015b\u0107 ze zmienn\u0105 globaln\u0105 za pomoc\u0105 atrybutu bind.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/input/slider.md",sourceDirName:"input",slug:"/input/slider-input",permalink:"/pl/docs/input/slider-input",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/slider.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621312042,formattedLastUpdatedAt:"18.05.2021",frontMatter:{id:"slider-input",title:"Slider Input",sidebar_label:"Slider Input"},sidebar:"docs",previous:{title:"Select Input",permalink:"/pl/docs/input/select-input"},next:{title:"Text Area",permalink:"/pl/docs/input/text-area"}},m={},d=[{value:"Opcje",id:"opcje",level:2},{value:"Przyk\u0142ady",id:"przyk\u0142ady",level:2}],k={toc:d};function y(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Element wej\u015bciowy suwaka. Mo\u017ce by\u0107 u\u017cywany jako cz\u0119\u015b\u0107 deski rozdzielczej ISLE lub autonomiczny. W tym ostatnim przypadku, chcesz obs\u0142ugiwa\u0107 zmiany za pomoc\u0105 atrybutu ",(0,l.kt)("inlineCode",{parentName:"p"},"onChange")," lub powi\u0105za\u0107 warto\u015b\u0107 ze zmienn\u0105 globaln\u0105 za pomoc\u0105 atrybutu ",(0,l.kt)("inlineCode",{parentName:"p"},"bind"),"."),(0,l.kt)("h2",{id:"opcje"},"Opcje"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": Warto\u015b\u0107 pocz\u0105tkowa suwaka. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"disabled")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy wej\u015bcie suwaka jest aktywne, czy nie. Je\u015bli jest ustawiona na warto\u015b\u0107 true, suwak b\u0119dzie obecny na ekranie, cho\u0107 wyszarzony. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"inline")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje ustawienie suwaka w linii z tekstem lub na zewn\u0105trz. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"legend")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|node)"),": napis na wej\u015bciu. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"max")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": Maksymalna warto\u015b\u0107 suwaka. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"100"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"maxLabel")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": etykieta wy\u015bwietlana po prawej stronie suwaka zamiast warto\u015bci maksymalnej. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"min")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": Minimalna warto\u015b\u0107 suwaka. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"minLabel")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": etykieta wy\u015bwietlana na lewo od suwaka zamiast warto\u015bci minimalnej. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onChange")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": wywo\u0142anie zwrotne z now\u0105 warto\u015bci\u0105 przy zmianie warto\u015bci suwaka. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"precision")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": zaokr\u0105glenie wej\u015bcia. Warto\u015b\u0107 zostanie zaokr\u0105glona tak, aby nie zawiera\u0142a wi\u0119cej znacz\u0105cych cyfr ni\u017c precyzja. Na przyk\u0142ad, je\u015bli chcemy u\u017cywa\u0107 tylko liczb ca\u0142kowitych, u\u017cyjemy precyzji 10, a je\u015bli chcemy zaokr\u0105gli\u0107 do setek, u\u017cyjemy precyzji 0,001. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"step")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(number|string)"),": wielko\u015b\u0107 kroku suwaka. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hideTooltip")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy nale\u017cy ukry\u0107 ko\u0144c\xf3wk\u0119 narz\u0119dzia. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": Style CSS inline. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"numberInputStyle")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": Style CSS w linii dla element\xf3w wej\u015bciowych liczb. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"rangeInputStyle")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": Styl CSS w linii dla komponentu wej\u015bciowego zakresu. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,l.kt)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Mathematical Symbols via LaTeX",value:"mathematicalSymbols"},{label:"Custom Style",value:"customStyle"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<SliderInput\n    legend="Success Probability"\n    defaultValue={0.5}\n    min={0}\n    max={1}\n    step={0.01}\n/>\n'))),(0,l.kt)(o.Z,{value:"mathematicalSymbols",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SliderInput\n    legend={<span>$\\sigma$ (standard deviation)</span>}\n    defaultValue={0.5}\n    min={0}\n    max={1}\n    step={0.01}\n/>\n"))),(0,l.kt)(o.Z,{value:"customStyle",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SliderInput\n    legend=\"Success Probability\"\n    style={{ padding: 30, fontSize: 25, background: 'tan', fontFamily: 'Georgia'}}\n    rangeInputStyle ={{ minWidth: 500}}\n    numberInputStyle = {{ background: 'white', boxShadow: '2px 2px 0px black'}}\n    defaultValue={0.5}\n    min={0}\n    max={200}\n    step={0.01}\n/>\n")))))}y.isMDXComponent=!0}}]);