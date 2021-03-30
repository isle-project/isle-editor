(window.webpackJsonp=window.webpackJsonp||[]).push([[1224],{249:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),l=(n(0),n(410)),o=n(443),c=n(444),i={id:"h5",title:"h5",sidebar_label:"h5"},s={unversionedId:"html/h5",id:"html/h5",isDocsHomePage:!1,title:"h5",description:"Nivel 3, secci\xf3n de encabezamiento.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/html/h5.md",slug:"/html/h5",permalink:"/es/docs/html/h5",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/html/h5.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21/2/2021",sidebar_label:"h5",sidebar:"docs",previous:{title:"h4",permalink:"/es/docs/html/h4"},next:{title:"h6",permalink:"/es/docs/html/h6"}},u=[{value:"Opciones",id:"opciones",children:[]},{value:"Ejemplos",id:"ejemplos",children:[]}],p={toc:u};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Nivel 3, secci\xf3n de encabezamiento."),Object(l.b)("h2",{id:"opciones"},"Opciones"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"className")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": nombre de la clase. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"''"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"style")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": Estilos en l\xednea CSS. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(l.b)("h2",{id:"ejemplos"},"Ejemplos"),Object(l.b)(o.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Letter Spacing",value:"letterSpacing"},{label:"Uppercase",value:"uppercase"},{label:"Neon",value:"neon"}],lazy:!0,mdxType:"Tabs"},Object(l.b)(c.a,{value:"minimal",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<h5>Section Sub-subtitle</h5>\n"))),Object(l.b)(c.a,{value:"letterSpacing",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<h5 style={{ letterSpacing: '3px' }}>Section Sub-subtitle</h5>\n"))),Object(l.b)(c.a,{value:"uppercase",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<h5 style={{ textTransform: 'uppercase' }}>text gets transformed into uppercase</h5>\n"))),Object(l.b)(c.a,{value:"neon",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<h5 style={{ \n    background: 'black',\n    padding: '8px',\n    fontSize: 33,\n    textTransform: 'uppercase',\n    color: 'cyan',\n    textShadow: '0 0 5px #A5F1FF, 0 0 10px #A5F1FF, 0 0 20px #A5F1FF, 0 0 30px #A5F1FF, 0 0 40px #A5F1FF'\n}} >\n    NEON LIGHT\n</h5>\n")))))}b.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,d=p["".concat(o,".").concat(m)]||p[m]||b[m]||l;return n?r.a.createElement(d,c(c({ref:t},s),{},{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},434:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},440:function(e,t,n){"use strict";var a=n(0),r=n(441);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},441:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},443:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(440),o=n(434),c=n(57),i=n.n(c);const s=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:c,values:p,groupId:b,className:m}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(l.a)(),[v,h]=Object(a.useState)(c),O=a.Children.toArray(e.children),j=[];if(null!=b){const e=d[b];null!=e&&e!==v&&p.some((t=>t.value===e))&&h(e)}const y=e=>{const t=e.target,n=j.indexOf(t),a=O[n].props.value;h(a),null!=b&&(f(b,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:r}=e.getBoundingClientRect(),{innerHeight:l,innerWidth:o}=window;return t>=0&&r<=o&&a<=l&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i.a.tabItemActive),setTimeout((()=>t.classList.remove(i.a.tabItemActive)),2e3))}),150))},g=e=>{var t;let n;switch(e.keyCode){case u:{const t=j.indexOf(e.target)+1;n=j[t]||j[0];break}case s:{const t=j.indexOf(e.target)-1;n=j[t]||j[j.length-1];break}}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},m)},p.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:v===e?0:-1,"aria-selected":v===e,className:Object(o.a)("tabs__item",i.a.tabItem,{"tabs__item--active":v===e}),key:e,ref:e=>j.push(e),onKeyDown:g,onFocus:y,onClick:y},t)))),t?Object(a.cloneElement)(O.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},O.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}},444:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);