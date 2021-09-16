"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3953],{603905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var a=t(202784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),p=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(t),d=r,k=c["".concat(u,".").concat(d)]||c[d]||m[d]||i;return t?a.createElement(k,l(l({ref:n},s),{},{components:t})):a.createElement(k,l({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=c;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},358215:function(e,n,t){var a=t(202784);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},855064:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(202784),r=t(79443);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=t(386010),o="tabItem_1uMI",u="tabItemActive_2DSg";var p=function(e){var n,t=e.lazy,r=e.block,p=e.defaultValue,s=e.values,m=e.groupId,c=e.className,d=a.Children.toArray(e.children),k=null!=s?s:d.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=p?p:null==(n=d.find((function(e){return e.props.default})))?void 0:n.props.value,f=i(),b=f.tabGroupChoices,g=f.setTabGroupChoices,y=(0,a.useState)(v),N=y[0],h=y[1],C=[];if(null!=m){var x=b[m];null!=x&&x!==N&&k.some((function(e){return e.value===x}))&&h(x)}var S=function(e){var n=e.currentTarget,t=C.indexOf(n),a=k[t].value;h(a),null!=m&&(g(m,a),setTimeout((function(){var e,t,a,r,i,l,o,p;(e=n.getBoundingClientRect(),t=e.top,a=e.left,r=e.bottom,i=e.right,l=window,o=l.innerHeight,p=l.innerWidth,t>=0&&i<=p&&r<=o&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(u),setTimeout((function(){return n.classList.remove(u)}),2e3))}),150))},j=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.target)+1;t=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.target)-1;t=C[r]||C[C.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},c)},k.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":N===n}),key:n,ref:function(e){return C.push(e)},onKeyDown:j,onFocus:S,onClick:S},null!=t?t:n)}))),t?(0,a.cloneElement)(d.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},d.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==N})}))))}},79443:function(e,n,t){var a=(0,t(202784).createContext)(void 0);n.Z=a},826354:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return c},default:function(){return k}});var a=t(487462),r=t(263366),i=(t(202784),t(603905)),l=t(855064),o=t(358215),u=["components"],p={id:"slider-input",title:"Slider Input",sidebar_label:"Slider Input"},s=void 0,m={unversionedId:"input/slider-input",id:"input/slider-input",isDocsHomePage:!1,title:"Slider Input",description:"Vstupn\xfd komponent posuvn\xedka. M\xf4\u017ee sa pou\u017e\xedva\u0165 ako s\xfa\u010das\u0165 ovl\xe1dacieho panela ISLE alebo samostatne. V druhom pr\xedpade chcete spracov\xe1va\u0165 zmeny pomocou atrib\xfatu onChange alebo viaza\u0165 hodnotu na glob\xe1lnu premenn\xfa pomocou atrib\xfatu bind.",source:"@site/i18n/sk/docusaurus-plugin-content-docs/current/input/slider.md",sourceDirName:"input",slug:"/input/slider-input",permalink:"/sk/docs/input/slider-input",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/slider.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. 6. 2021",frontMatter:{id:"slider-input",title:"Slider Input",sidebar_label:"Slider Input"},sidebar:"docs",previous:{title:"Select Input",permalink:"/sk/docs/input/select-input"},next:{title:"Text Area",permalink:"/sk/docs/input/text-area"}},c=[{value:"Mo\u017enosti",id:"mo\u017enosti",children:[]},{value:"Pr\xedklady",id:"pr\xedklady",children:[]}],d={toc:c};function k(e){var n=e.components,t=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Vstupn\xfd komponent posuvn\xedka. M\xf4\u017ee sa pou\u017e\xedva\u0165 ako s\xfa\u010das\u0165 ovl\xe1dacieho panela ISLE alebo samostatne. V druhom pr\xedpade chcete spracov\xe1va\u0165 zmeny pomocou atrib\xfatu ",(0,i.kt)("inlineCode",{parentName:"p"},"onChange")," alebo viaza\u0165 hodnotu na glob\xe1lnu premenn\xfa pomocou atrib\xfatu ",(0,i.kt)("inlineCode",{parentName:"p"},"bind"),"."),(0,i.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": Po\u010diato\u010dn\xe1 hodnota posuvn\xedka. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"disabled")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": riadi, \u010di je vstup posuvn\xedka akt\xedvny alebo nie. Ak je nastaven\xe1 na hodnotu true, posuvn\xedk bude na obrazovke pr\xedtomn\xfd, aj ke\u010f bude siv\xfd.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"inline")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": ur\u010duje, \u010di sa m\xe1 posuvn\xedk umiestni\u0165 do riadku s textom alebo mimo neho.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"legend")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),": titulok vstupu. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"max")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": Maxim\xe1lna hodnota posuvn\xedka. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"100"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"maxLabel")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": zobrazenie \u0161t\xedtku vpravo od posuvn\xedka namiesto maxim\xe1lnej hodnoty. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"min")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": Minim\xe1lna hodnota posuvn\xedka. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"minLabel")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": zobrazenie \u0161t\xedtku na\u013eavo od posuvn\xedka namiesto minim\xe1lnej hodnoty. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onChange")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": sp\xe4tn\xe9 volanie vyvolan\xe9 s novou hodnotou, ke\u010f sa zmen\xed hodnota posuvn\xedka. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"precision")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": zaokr\xfah\u013eovanie vstupu. Hodnota sa zaokr\xfahli tak, aby nemala viac v\xfdznamn\xfdch \u010d\xedslic, ako je presnos\u0165. Napr\xedklad, ak chceme pou\u017e\xedva\u0165 len cel\xe9 \u010d\xedsla, pou\u017eije sa presnos\u0165 10, zatia\u013e \u010do ak chceme zaokr\xfah\u013eova\u0165 na stovky, pou\u017eijeme presnos\u0165 0,001. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"step")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(number|string)"),": ve\u013ekos\u0165 kroku posuvn\xedka. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"hideTooltip")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, \u010di sa m\xe1 skry\u0165 n\xe1poveda k n\xe1stroju. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": Riadkov\xe9 \u0161t\xfdly CSS. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"numberInputStyle")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": Riadkov\xe9 \u0161t\xfdly CSS pre komponent zad\xe1vania \u010d\xedsel. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"rangeInputStyle")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": Inline \u0161t\xfdl CSS pre vstupn\xfa zlo\u017eku rozsahu. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,i.kt)("h2",{id:"pr\xedklady"},"Pr\xedklady"),(0,i.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Mathematical Symbols via LaTeX",value:"mathematicalSymbols"},{label:"Custom Style",value:"customStyle"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<SliderInput\n    legend="Success Probability"\n    defaultValue={0.5}\n    min={0}\n    max={1}\n    step={0.01}\n/>\n'))),(0,i.kt)(o.Z,{value:"mathematicalSymbols",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SliderInput\n    legend={<span>$\\sigma$ (standard deviation)</span>}\n    defaultValue={0.5}\n    min={0}\n    max={1}\n    step={0.01}\n/>\n"))),(0,i.kt)(o.Z,{value:"customStyle",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SliderInput\n    legend=\"Success Probability\"\n    style={{ padding: 30, fontSize: 25, background: 'tan', fontFamily: 'Georgia'}}\n    rangeInputStyle ={{ minWidth: 500}}\n    numberInputStyle = {{ background: 'white', boxShadow: '2px 2px 0px black'}}\n    defaultValue={0.5}\n    min={0}\n    max={200}\n    step={0.01}\n/>\n")))))}k.isMDXComponent=!0},386010:function(e,n,t){function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function r(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}t.d(n,{Z:function(){return r}})}}]);