(window.webpackJsonp=window.webpackJsonp||[]).push([[361],{301:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),l=(n(0),n(409)),i=n(462),c=n(463),o={id:"h5",title:"h5",sidebar_label:"h5"},s={unversionedId:"html/h5",id:"html/h5",isDocsHomePage:!1,title:"h5",description:"Ebene 3 Abschnitts\xfcberschrift.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/html/h5.md",slug:"/html/h5",permalink:"/de/docs/html/h5",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/html/h5.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"h5",sidebar:"docs",previous:{title:"h4",permalink:"/de/docs/html/h4"},next:{title:"h6",permalink:"/de/docs/html/h6"}},u=[{value:"Optionen",id:"optionen",children:[]},{value:"Beispiele",id:"beispiele",children:[]}],p={toc:u};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Ebene 3 Abschnitts\xfcberschrift."),Object(l.b)("h2",{id:"optionen"},"Optionen"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"className")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": Klassenname. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"''"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"style")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": CSS-Inline-Stile. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(l.b)("h2",{id:"beispiele"},"Beispiele"),Object(l.b)(i.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Letter Spacing",value:"letterSpacing"},{label:"Uppercase",value:"uppercase"},{label:"Neon",value:"neon"}],lazy:!0,mdxType:"Tabs"},Object(l.b)(c.a,{value:"minimal",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<h5>Section Sub-subtitle</h5>\n"))),Object(l.b)(c.a,{value:"letterSpacing",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<h5 style={{ letterSpacing: '3px' }}>Section Sub-subtitle</h5>\n"))),Object(l.b)(c.a,{value:"uppercase",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<h5 style={{ textTransform: 'uppercase' }}>text gets transformed into uppercase</h5>\n"))),Object(l.b)(c.a,{value:"neon",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<h5 style={{ \n    background: 'black',\n    padding: '8px',\n    fontSize: 33,\n    textTransform: 'uppercase',\n    color: 'cyan',\n    textShadow: '0 0 5px #A5F1FF, 0 0 10px #A5F1FF, 0 0 20px #A5F1FF, 0 0 30px #A5F1FF, 0 0 40px #A5F1FF'\n}} >\n    NEON LIGHT\n</h5>\n")))))}b.isMDXComponent=!0},409:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||l;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<l;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},449:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},460:function(e,t,n){"use strict";var r=n(0),a=n(461);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},461:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},462:function(e,t,n){"use strict";var r=n(0),a=n.n(r),l=n(460),i=n(449),c=n(58),o=n.n(c);const s=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:c,values:p,groupId:b,className:m}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(l.a)(),[h,O]=Object(r.useState)(c),v=r.Children.toArray(e.children),y=[];if(null!=b){const e=d[b];null!=e&&e!==h&&p.some((t=>t.value===e))&&O(e)}const j=e=>{const t=e.target,n=y.indexOf(t),r=v[n].props.value;O(r),null!=b&&f(b,r)},g=e=>{var t;let n;switch(e.keyCode){case u:const t=y.indexOf(e.target)+1;n=y[t]||y[0];break;case s:const r=y.indexOf(e.target)-1;n=y[r]||y[y.length-1]}null===(t=n)||void 0===t||t.focus()};return a.a.createElement("div",{className:"tabs-container"},a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},m)},p.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:h===e?0:-1,"aria-selected":h===e,className:Object(i.a)("tabs__item",o.a.tabItem,{"tabs__item--active":h===e}),key:e,ref:e=>y.push(e),onKeyDown:g,onFocus:j,onClick:j},t)))),t?Object(r.cloneElement)(v.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}},463:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function({children:e,hidden:t,className:n}){return a.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);