(window.webpackJsonp=window.webpackJsonp||[]).push([[359],{299:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),i=(n(0),n(409)),o=n(462),c=n(463),l={id:"wikipedia",title:"Wikipedia",sidebar_label:"Wikipedia"},u={unversionedId:"wikipedia",id:"wikipedia",isDocsHomePage:!1,title:"Wikipedia",description:"Komponent Wikipedia skanuje Wikipedi\u0119 i zwraca artyku\u0142 - je\u015bli pod wprowadzonym terminem wyszukiwania znaleziono co\u015b wa\u017cnego.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/wikipedia.md",slug:"/wikipedia",permalink:"/pl/docs/wikipedia",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/wikipedia.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Wikipedia",sidebar:"docs",previous:{title:"Weather",permalink:"/pl/docs/weather"},next:{title:"Checkbox Input",permalink:"/pl/docs/input/checkbox-input"}},s=[{value:"Opcje",id:"opcje",children:[]},{value:"Przyk\u0142ady",id:"przyk\u0142ady",children:[]}],p={toc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Komponent ",Object(i.b)("strong",{parentName:"p"},"Wikipedia")," skanuje ",Object(i.b)("strong",{parentName:"p"},"Wikipedi\u0119")," i zwraca artyku\u0142 - je\u015bli pod wprowadzonym terminem wyszukiwania znaleziono co\u015b wa\u017cnego."),Object(i.b)("h2",{id:"opcje"},"Opcje"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"defaultEntry")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": domy\u015blna pozycja do wy\u015bwietlenia. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": Style CSS inline. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(i.b)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"),Object(i.b)(o.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Entry",value:"withEntry"}],lazy:!0,mdxType:"Tabs"},Object(i.b)(c.a,{value:"minimal",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Wikipedia />\n"))),Object(i.b)(c.a,{value:"withEntry",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Wikipedia defaultEntry="Angela Merkel" />\n')))))}d.isMDXComponent=!0},409:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),b=a,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return n?r.a.createElement(m,c(c({ref:t},u),{},{components:n})):r.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},449:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},460:function(e,t,n){"use strict";var a=n(0),r=n(461);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},461:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},462:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(460),o=n(449),c=n(58),l=n.n(c);const u=37,s=39;t.a=function(e){const{lazy:t,block:n,defaultValue:c,values:p,groupId:d,className:b}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(i.a)(),[y,O]=Object(a.useState)(c),j=a.Children.toArray(e.children),v=[];if(null!=d){const e=m[d];null!=e&&e!==y&&p.some((t=>t.value===e))&&O(e)}const w=e=>{const t=e.target,n=v.indexOf(t),a=j[n].props.value;O(a),null!=d&&f(d,a)},g=e=>{var t;let n;switch(e.keyCode){case s:const t=v.indexOf(e.target)+1;n=v[t]||v[0];break;case u:const a=v.indexOf(e.target)-1;n=v[a]||v[v.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},b)},p.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:y===e?0:-1,"aria-selected":y===e,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":y===e}),key:e,ref:e=>v.push(e),onKeyDown:g,onFocus:w,onClick:w},t)))),t?Object(a.cloneElement)(j.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}},463:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);