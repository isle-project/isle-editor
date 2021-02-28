(window.webpackJsonp=window.webpackJsonp||[]).push([[313],{253:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),l=(n(0),n(409)),i=n(462),o=n(463),c={id:"h1",title:"h1",sidebar_label:"h1"},s={unversionedId:"html/h1",id:"html/h1",isDocsHomePage:!1,title:"h1",description:"Titolo della sezione di livello 1.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/html/h1.md",slug:"/html/h1",permalink:"/it/docs/html/h1",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/html/h1.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614117474,sidebar_label:"h1",sidebar:"docs",previous:{title:"span",permalink:"/it/docs/html/span"},next:{title:"h2",permalink:"/it/docs/html/h2"}},u=[{value:"Opzioni",id:"opzioni",children:[]},{value:"Esempi",id:"esempi",children:[]}],p={toc:u};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Titolo della sezione di livello 1."),Object(l.b)("h2",{id:"opzioni"},"Opzioni"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"className")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": nome della classe. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"''"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"style")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": Stili in linea CSS. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(l.b)("h2",{id:"esempi"},"Esempi"),Object(l.b)(i.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Shadow",value:"withShadow"},{label:"Multiple Shadows",value:"multipleShadows"},{label:"With Border",value:"withBorder"}],lazy:!0,mdxType:"Tabs"},Object(l.b)(o.a,{value:"minimal",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<h1>Lesson Title</h1>\n"))),Object(l.b)(o.a,{value:"withShadow",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<h1 style={{ textShadow: '2px 2px 2px silver' }}>Lesson Title</h1>\n"))),Object(l.b)(o.a,{value:"multipleShadows",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<h1 style={{ textShadow: '2px 2px 2px silver, 45px 32px 5px gold' }} >\nLesson Title\n</h1>\n"))),Object(l.b)(o.a,{value:"withBorder",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<h1 style={{ textShadow: '2px 2px 5px silver',\n    borderBottom: '1px dashed orange',\n    borderTop: '7px solid silver',\n    borderLeft: '7px solid rgba(0,0,0,.2)'\n}} >\nLesson Title\n</h1>\n")))))}b.isMDXComponent=!0},409:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||l;return n?a.a.createElement(m,o(o({ref:t},s),{},{components:n})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},449:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},460:function(e,t,n){"use strict";var r=n(0),a=n(461);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},461:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},462:function(e,t,n){"use strict";var r=n(0),a=n.n(r),l=n(460),i=n(449),o=n(58),c=n.n(o);const s=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:o,values:p,groupId:b,className:d}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(l.a)(),[h,v]=Object(r.useState)(o),O=r.Children.toArray(e.children),j=[];if(null!=b){const e=m[b];null!=e&&e!==h&&p.some((t=>t.value===e))&&v(e)}const y=e=>{const t=e.target,n=j.indexOf(t),r=O[n].props.value;v(r),null!=b&&f(b,r)},g=e=>{var t;let n;switch(e.keyCode){case u:const t=j.indexOf(e.target)+1;n=j[t]||j[0];break;case s:const r=j.indexOf(e.target)-1;n=j[r]||j[j.length-1]}null===(t=n)||void 0===t||t.focus()};return a.a.createElement("div",{className:"tabs-container"},a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},d)},p.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:h===e?0:-1,"aria-selected":h===e,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":h===e}),key:e,ref:e=>j.push(e),onKeyDown:g,onFocus:y,onClick:y},t)))),t?Object(r.cloneElement)(O.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},O.map(((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}},463:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function({children:e,hidden:t,className:n}){return a.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);