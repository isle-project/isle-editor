"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6029],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,k=d["".concat(u,".").concat(c)]||d[c]||m[c]||o;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},358215:function(e,t,n){var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},855064:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(202784),r=n(79443);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(386010),l="tabItem_1uMI",u="tabItemActive_2DSg";var p=function(e){var t,n=e.lazy,r=e.block,p=e.defaultValue,s=e.values,m=e.groupId,d=e.className,c=a.Children.toArray(e.children),k=null!=s?s:c.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=p?p:null==(t=c.find((function(e){return e.props.default})))?void 0:t.props.value,v=o(),b=v.tabGroupChoices,y=v.setTabGroupChoices,g=(0,a.useState)(f),N=g[0],h=g[1],C=[];if(null!=m){var j=b[m];null!=j&&j!==N&&k.some((function(e){return e.value===j}))&&h(j)}var x=function(e){var t=e.currentTarget,n=C.indexOf(t),a=k[n].value;h(a),null!=m&&(y(m,a),setTimeout((function(){var e,n,a,r,o,i,l,p;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,p=i.innerWidth,n>=0&&o<=p&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.target)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.target)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},d)},k.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":N===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:S,onFocus:x,onClick:x},null!=n?n:t)}))),n?(0,a.cloneElement)(c.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},c.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},79443:function(e,t,n){var a=(0,n(202784).createContext)(void 0);t.Z=a},643207:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return d},default:function(){return k}});var a=n(487462),r=n(263366),o=(n(202784),n(603905)),i=n(855064),l=n(358215),u=["components"],p={id:"slider-input",title:"Slider Input",sidebar_label:"Slider Input"},s=void 0,m={unversionedId:"input/slider-input",id:"input/slider-input",isDocsHomePage:!1,title:"Slider Input",description:"Vstupn\xed komponenta posuvn\xedku. Lze ji pou\u017e\xedt jako sou\u010d\xe1st ovl\xe1dac\xedho panelu ISLE nebo samostatn\u011b. V druh\xe9m p\u0159\xedpad\u011b chcete zpracov\xe1vat zm\u011bny pomoc\xed atributu onChange nebo sv\xe1zat hodnotu s glob\xe1ln\xed prom\u011bnnou pomoc\xed atributu bind.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/input/slider.md",sourceDirName:"input",slug:"/input/slider-input",permalink:"/cs/docs/input/slider-input",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/slider.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. 6. 2021",frontMatter:{id:"slider-input",title:"Slider Input",sidebar_label:"Slider Input"},sidebar:"docs",previous:{title:"Select Input",permalink:"/cs/docs/input/select-input"},next:{title:"Text Area",permalink:"/cs/docs/input/text-area"}},d=[{value:"Mo\u017enosti",id:"mo\u017enosti",children:[]},{value:"P\u0159\xedklady",id:"p\u0159\xedklady",children:[]}],c={toc:d};function k(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Vstupn\xed komponenta posuvn\xedku. Lze ji pou\u017e\xedt jako sou\u010d\xe1st ovl\xe1dac\xedho panelu ISLE nebo samostatn\u011b. V druh\xe9m p\u0159\xedpad\u011b chcete zpracov\xe1vat zm\u011bny pomoc\xed atributu ",(0,o.kt)("inlineCode",{parentName:"p"},"onChange")," nebo sv\xe1zat hodnotu s glob\xe1ln\xed prom\u011bnnou pomoc\xed atributu ",(0,o.kt)("inlineCode",{parentName:"p"},"bind"),"."),(0,o.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),": Po\u010d\xe1te\u010dn\xed hodnota posuvn\xedku. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"disabled")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0159\xedd\xed, zda je vstup posuvn\xedku aktivn\xed, nebo ne. Pokud je nastavena hodnota true, posuvn\xedk bude na obrazovce p\u0159\xedtomen, i kdy\u017e bude \u0161ed\xfd.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"inline")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": ur\u010duje, zda m\xe1 b\xfdt posuvn\xedk um\xedst\u011bn v \u0159\xe1dku s textem nebo mimo n\u011bj.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"legend")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(string|node)"),": popisek vstupu. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"max")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),": Maxim\xe1ln\xed hodnota posuvn\xedku. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"100"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"maxLabel")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": \u0161t\xedtek, kter\xfd se zobrazuje vpravo od posuvn\xedku m\xedsto maxim\xe1ln\xed hodnoty.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"min")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),": Minim\xe1ln\xed hodnota posuvn\xedku. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"minLabel")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": \u0161t\xedtek, kter\xfd se zobrazuje vlevo od posuvn\xedku m\xedsto minim\xe1ln\xed hodnoty.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"onChange")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"function"),": zp\u011btn\xe9 vol\xe1n\xed vyvolan\xe9 s novou hodnotou, kdy\u017e se zm\u011bn\xed hodnota posuvn\xedku.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"precision")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),": zaokrouhlen\xed vstupu. Hodnota bude zaokrouhlena tak, aby nem\u011bla v\xedce v\xfdznamn\xfdch \u010d\xedslic, ne\u017e je p\u0159esnost. Pokud si nap\u0159\xedklad p\u0159ejeme pou\u017e\xedvat pouze cel\xe1 \u010d\xedsla, pou\u017eijeme p\u0159esnost 10, zat\xedmco pokud chceme zaokrouhlovat na stovky, pou\u017eijeme p\u0159esnost 0,001.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"step")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(number|string)"),": velikost kroku posuvn\xedku. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"hideTooltip")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, zda se m\xe1 skr\xfdt n\xe1pov\u011bda k n\xe1stroji. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"style")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object"),": \u0158\xe1dkov\xe9 styly CSS. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"numberInputStyle")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object"),": \u0158\xe1dkov\xe9 styly CSS pro komponentu zad\xe1v\xe1n\xed \u010d\xedsel. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"rangeInputStyle")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object"),": \u0158\xe1dkov\xfd styl CSS pro vstupn\xed komponentu rozsahu. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,o.kt)("h2",{id:"p\u0159\xedklady"},"P\u0159\xedklady"),(0,o.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Mathematical Symbols via LaTeX",value:"mathematicalSymbols"},{label:"Custom Style",value:"customStyle"}],lazy:!0,mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<SliderInput\n    legend="Success Probability"\n    defaultValue={0.5}\n    min={0}\n    max={1}\n    step={0.01}\n/>\n'))),(0,o.kt)(l.Z,{value:"mathematicalSymbols",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SliderInput\n    legend={<span>$\\sigma$ (standard deviation)</span>}\n    defaultValue={0.5}\n    min={0}\n    max={1}\n    step={0.01}\n/>\n"))),(0,o.kt)(l.Z,{value:"customStyle",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SliderInput\n    legend=\"Success Probability\"\n    style={{ padding: 30, fontSize: 25, background: 'tan', fontFamily: 'Georgia'}}\n    rangeInputStyle ={{ minWidth: 500}}\n    numberInputStyle = {{ background: 'white', boxShadow: '2px 2px 0px black'}}\n    defaultValue={0.5}\n    min={0}\n    max={200}\n    step={0.01}\n/>\n")))))}k.isMDXComponent=!0},386010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);