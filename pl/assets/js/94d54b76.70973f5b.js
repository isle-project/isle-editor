"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1323],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,k=m["".concat(u,".").concat(d)]||m[d]||s[d]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},358215:function(e,t,n){var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},855064:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(202784),r=n(79443);var l=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(386010),o="tabItem_1uMI",u="tabItemActive_2DSg";var c=function(e){var t,n=e.lazy,r=e.block,c=e.defaultValue,p=e.values,s=e.groupId,m=e.className,d=a.Children.toArray(e.children),k=null!=p?p:d.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=c?c:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,y=l(),v=y.tabGroupChoices,b=y.setTabGroupChoices,w=(0,a.useState)(f),g=w[0],N=w[1],h=[];if(null!=s){var j=v[s];null!=j&&j!==g&&k.some((function(e){return e.value===j}))&&N(j)}var C=function(e){var t=e.currentTarget,n=h.indexOf(t),a=k[n].value;N(a),null!=s&&(b(s,a),setTimeout((function(){var e,n,a,r,l,i,o,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,l=e.right,i=window,o=i.innerHeight,c=i.innerWidth,n>=0&&l<=c&&r<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=h.indexOf(e.target)+1;n=h[a]||h[0];break;case"ArrowLeft":var r=h.indexOf(e.target)-1;n=h[r]||h[h.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},m)},k.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":g===t}),key:t,ref:function(e){return h.push(e)},onKeyDown:z,onFocus:C,onClick:C},null!=n?n:t)}))),n?(0,a.cloneElement)(d.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},79443:function(e,t,n){var a=(0,n(202784).createContext)(void 0);t.Z=a},562774:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return k}});var a=n(487462),r=n(263366),l=(n(202784),n(603905)),i=n(855064),o=n(358215),u=["components"],c={id:"js-shell",title:"JavaScript Shell",sidebar_label:"JavaScript Shell"},p=void 0,s={unversionedId:"js-shell",id:"js-shell",isDocsHomePage:!1,title:"JavaScript Shell",description:"Interaktywna pow\u0142oka Javascript, kt\xf3rej mo\u017cna u\u017cywa\u0107 do wykonywania polece\u0144 JavaScript. Pow\u0142oka zawiera konsol\u0119, kt\xf3ra wy\u015bwietla komunikaty o b\u0142\u0119dach, ostrze\u017cenia itp.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/js-shell.md",sourceDirName:".",slug:"/js-shell",permalink:"/pl/docs/js-shell",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/js-shell.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633715852,formattedLastUpdatedAt:"8.10.2021",frontMatter:{id:"js-shell",title:"JavaScript Shell",sidebar_label:"JavaScript Shell"},sidebar:"docs",previous:{title:"Flippable Card",permalink:"/pl/docs/flippable-card"},next:{title:"Likert Scale",permalink:"/pl/docs/likert-scale"}},m=[{value:"Opcje",id:"opcje",children:[]},{value:"Przyk\u0142ady",id:"przyk\u0142ady",children:[]}],d={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Interaktywna pow\u0142oka Javascript, kt\xf3rej mo\u017cna u\u017cywa\u0107 do wykonywania polece\u0144 JavaScript. Pow\u0142oka zawiera konsol\u0119, kt\xf3ra wy\u015bwietla komunikaty o b\u0142\u0119dach, ostrze\u017cenia itp."),(0,l.kt)("h2",{id:"opcje"},"Opcje"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"code")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": Kod JavaScript do oceny. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"solution")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": dla pyta\u0144 dotycz\u0105cych programowania, kod ",(0,l.kt)("inlineCode",{parentName:"li"},"sznurek")," reprezentuj\u0105cy oficjalne rozwi\u0105zanie problemu. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hints")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": w przypadku pyta\u0144 zwi\u0105zanych z programowaniem, szereg wskaz\xf3wek zawieraj\u0105cych wskaz\xf3wki, jak podej\u015b\u0107 do problemu. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"precompute")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy po zamontowaniu komponentu powinien zosta\u0107 wykonany kod domy\u015blny. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"chat")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy funkcja czatu grupowego powinna by\u0107 w\u0142\u0105czona. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"check")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": doda\u0142 kod JavaScript do sprawdzenia ",(0,l.kt)("inlineCode",{parentName:"li"},"kodu"),", kt\xf3ry ma by\u0107 oceniany. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"disabled")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy wy\u0142\u0105czy\u0107 wszystkie wej\u015bcia u\u017cytkownika i sprawi\u0107, by blok kodu by\u0142 statyczny. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"lines")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": liczba wierszy do wy\u015bwietlenia. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"className")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": nazwa klasy. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": Style CSS inline. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onChange")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": wywo\u0142anie zwrotne przy ka\u017cdej zmianie danych wej\u015bciowych pola tekstowego. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onEvaluate")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),': wywo\u0142anie zwrotne po klikni\u0119ciu przycisku "Wycena". Default: ',(0,l.kt)("inlineCode",{parentName:"li"},"onEvaluate() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"vars")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": obiekt zakresu ze zmiennymi, kt\xf3re powinny by\u0107 udost\u0119pnione do oceny ",(0,l.kt)("inlineCode",{parentName:"li"},"kodu"),". Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,l.kt)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Style",value:"withStyle"},{label:"Ten Lines",value:"mLines"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<JSShell code = {`var a = 2; \nvar b = 2;\nconsole.log(a + b);`} />\n"))),(0,l.kt)(o.Z,{value:"withStyle",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<JSShell style={{ fontSize: 18, boxShadow: '0 0 4px black' }}  />\n"))),(0,l.kt)(o.Z,{value:"mLines",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<JSShell lines={10} />\n")))))}k.isMDXComponent=!0},386010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);