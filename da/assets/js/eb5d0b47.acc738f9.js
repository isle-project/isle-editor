"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5053],{603905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return c}});var r=t(202784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=u(t),c=a,f=m["".concat(s,".").concat(c)]||m[c]||p[c]||i;return t?r.createElement(f,l(l({ref:n},d),{},{components:t})):r.createElement(f,l({ref:n},d))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},358215:function(e,n,t){var r=t(202784);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},855064:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(202784),a=t(79443);var i=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=t(386010),o="tabItem_1uMI",s="tabItemActive_2DSg";var u=function(e){var n,t=e.lazy,a=e.block,u=e.defaultValue,d=e.values,p=e.groupId,m=e.className,c=r.Children.toArray(e.children),f=null!=d?d:c.map((function(e){return{value:e.props.value,label:e.props.label}})),k=null!=u?u:null==(n=c.find((function(e){return e.props.default})))?void 0:n.props.value,v=i(),b=v.tabGroupChoices,g=v.setTabGroupChoices,y=(0,r.useState)(k),N=y[0],h=y[1],C=[];if(null!=p){var S=b[p];null!=S&&S!==N&&f.some((function(e){return e.value===S}))&&h(S)}var x=function(e){var n=e.currentTarget,t=C.indexOf(n),r=f[t].value;h(r),null!=p&&(g(p,r),setTimeout((function(){var e,t,r,a,i,l,o,u;(e=n.getBoundingClientRect(),t=e.top,r=e.left,a=e.bottom,i=e.right,l=window,o=l.innerHeight,u=l.innerWidth,t>=0&&i<=u&&a<=o&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(s),setTimeout((function(){return n.classList.remove(s)}),2e3))}),150))},I=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=C.indexOf(e.target)+1;t=C[r]||C[0];break;case"ArrowLeft":var a=C.indexOf(e.target)-1;t=C[a]||C[C.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},m)},f.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":N===n}),key:n,ref:function(e){return C.push(e)},onKeyDown:I,onFocus:x,onClick:x},null!=t?t:n)}))),t?(0,r.cloneElement)(c.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},c.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==N})}))))}},79443:function(e,n,t){var r=(0,t(202784).createContext)(void 0);n.Z=r},627400:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var r=t(487462),a=t(263366),i=(t(202784),t(603905)),l=t(855064),o=t(358215),s=["components"],u={id:"slider-input",title:"Slider Input",sidebar_label:"Slider Input"},d=void 0,p={unversionedId:"input/slider-input",id:"input/slider-input",isDocsHomePage:!1,title:"Slider Input",description:"En slider-indgangskomponent. Kan bruges som en del af et ISLE-dashboard eller som en selvst\xe6ndig komponent. I sidstn\xe6vnte tilf\xe6lde skal du h\xe5ndtere \xe6ndringer via onChange-attributten eller binde v\xe6rdien til en global variabel via bind-attributten.",source:"@site/i18n/da/docusaurus-plugin-content-docs/current/input/slider.md",sourceDirName:"input",slug:"/input/slider-input",permalink:"/da/docs/input/slider-input",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/slider.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1.6.2021",frontMatter:{id:"slider-input",title:"Slider Input",sidebar_label:"Slider Input"},sidebar:"docs",previous:{title:"Select Input",permalink:"/da/docs/input/select-input"},next:{title:"Text Area",permalink:"/da/docs/input/text-area"}},m=[{value:"Indstillinger",id:"indstillinger",children:[]},{value:"Eksempler",id:"eksempler",children:[]}],c={toc:m};function f(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"En slider-indgangskomponent. Kan bruges som en del af et ISLE-dashboard eller som en selvst\xe6ndig komponent. I sidstn\xe6vnte tilf\xe6lde skal du h\xe5ndtere \xe6ndringer via ",(0,i.kt)("inlineCode",{parentName:"p"},"onChange"),"-attributten eller binde v\xe6rdien til en global variabel via ",(0,i.kt)("inlineCode",{parentName:"p"},"bind"),"-attributten."),(0,i.kt)("h2",{id:"indstillinger"},"Indstillinger"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": Startv\xe6rdien for skyderen. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"disabled")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": styrer, om skydeinput er aktivt eller ej. Hvis den er indstillet til true, vil skyderen v\xe6re til stede p\xe5 sk\xe6rmen, om end den er gr\xe5tonet.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"inline")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": styrer, om skyderen skal placeres p\xe5 linje med teksten eller uden for. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"legend")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),": billedtekst for input. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"max")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": Den maksimale v\xe6rdi af skyderen. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"100"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"maxLabel")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": etiket skal vises til h\xf8jre for skyderen i stedet for den maksimale v\xe6rdi. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"min")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": Mindste v\xe6rdi for skyderen. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"minLabel")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": label skal vises til venstre for skyderen i stedet for minimumsv\xe6rdien. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onChange")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": callback, der p\xe5kaldes med den nye v\xe6rdi, n\xe5r skyderens v\xe6rdi \xe6ndres. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"precision")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": afrunding af input. V\xe6rdien afrundes, s\xe5 den ikke har flere betydende cifre end pr\xe6cisionen. Hvis man f.eks. kun \xf8nsker at anvende hele tal, vil der blive anvendt en pr\xe6cision p\xe5 10, mens man, hvis man \xf8nsker at afrunde til hundredepladsen, vil anvende en pr\xe6cision p\xe5 0,001.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"step")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(number|string)"),": trinst\xf8rrelse for skyderen. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"hideTooltip")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": styrer, om v\xe6rkt\xf8jstip skal skjules. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline-stilarter. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"numberInputStyle")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline-stilarter for komponent til indtastning af tal. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"rangeInputStyle")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline-stil til indtastningskomponent for r\xe6kkevidde. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,i.kt)("h2",{id:"eksempler"},"Eksempler"),(0,i.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Mathematical Symbols via LaTeX",value:"mathematicalSymbols"},{label:"Custom Style",value:"customStyle"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<SliderInput\n    legend="Success Probability"\n    defaultValue={0.5}\n    min={0}\n    max={1}\n    step={0.01}\n/>\n'))),(0,i.kt)(o.Z,{value:"mathematicalSymbols",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SliderInput\n    legend={<span>$\\sigma$ (standard deviation)</span>}\n    defaultValue={0.5}\n    min={0}\n    max={1}\n    step={0.01}\n/>\n"))),(0,i.kt)(o.Z,{value:"customStyle",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SliderInput\n    legend=\"Success Probability\"\n    style={{ padding: 30, fontSize: 25, background: 'tan', fontFamily: 'Georgia'}}\n    rangeInputStyle ={{ minWidth: 500}}\n    numberInputStyle = {{ background: 'white', boxShadow: '2px 2px 0px black'}}\n    defaultValue={0.5}\n    min={0}\n    max={200}\n    step={0.01}\n/>\n")))))}f.isMDXComponent=!0},386010:function(e,n,t){function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function a(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}t.d(n,{Z:function(){return a}})}}]);