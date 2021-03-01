(window.webpackJsonp=window.webpackJsonp||[]).push([[332],{272:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),l=(n(0),n(411)),i=n(460),o=n(461),c={id:"qrcode",title:"QR Code",sidebar_label:"QR Code"},s={unversionedId:"qrcode",id:"qrcode",isDocsHomePage:!1,title:"QR Code",description:"QR-Code.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/qrcode.md",slug:"/qrcode",permalink:"/de/docs/qrcode",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/qrcode.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"QR Code",sidebar:"docs",previous:{title:"Multi Cards",permalink:"/de/docs/multi-cards"},next:{title:"Recorder",permalink:"/de/docs/recorder"}},b=[{value:"Optionen",id:"optionen",children:[]},{value:"Beispiele",id:"beispiele",children:[]}],d={toc:b};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"QR-Code."),Object(l.b)("h2",{id:"optionen"},"Optionen"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"text")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": Text, der im QR-Code kodiert werden soll (standardm\xe4\xdfig wird die Lektions-URL verwendet, wenn nicht festgelegt). Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"scale")," | ",Object(l.b)("inlineCode",{parentName:"li"},"number"),": Anzahl der Pixel pro Modul (schwarze Punkte). Default: ",Object(l.b)("inlineCode",{parentName:"li"},"8"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"width")," | ",Object(l.b)("inlineCode",{parentName:"li"},"number"),": Breite in Pixeln; hat Vorrang vor der Eigenschaft ",Object(l.b)("inlineCode",{parentName:"li"},"scale"),".. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"showText")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": Boolescher Wert, der bestimmt, ob der im QR-Code kodierte Text angezeigt werden soll. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"center")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": boolescher Wert, der steuert, ob der QR-Code zentriert werden soll. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"style")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": CSS-Inline-Stile. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(l.b)("h2",{id:"beispiele"},"Beispiele"),Object(l.b)(i.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With CSS",value:"withCSS"},{label:"Visible Link",value:"visibleLink"},{label:"Scale",value:"scale"}],lazy:!0,mdxType:"Tabs"},Object(l.b)(o.a,{value:"minimal",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<QRCode />\n"))),Object(l.b)(o.a,{value:"withCSS",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<QRCode \n    center \n    text=\"https://isledocs.com/docs/qrcode\" \n    style ={{ outline: '4px grey solid' }}\n/>\n"))),Object(l.b)(o.a,{value:"visibleLink",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<QRCode \n    text="https://isledocs.com/docs/qrcode"\n    showText\n/>\n'))),Object(l.b)(o.a,{value:"scale",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<QRCode \n    text=\"https://isledocs.com/docs/qrcode\"\n    scale={12}\n    showText\n    style={{ fontFamily: 'Open Sans Condensed', color: 'red', outline: '4px black solid' }}\n/>\n")))))}u.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=b(n),p=r,m=d["".concat(i,".").concat(p)]||d[p]||u[p]||l;return n?a.a.createElement(m,o(o({ref:t},s),{},{components:n})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},445:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},458:function(e,t,n){"use strict";var r=n(0),a=n(459);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},459:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},460:function(e,t,n){"use strict";var r=n(0),a=n.n(r),l=n(458),i=n(445),o=n(58),c=n.n(o);const s=37,b=39;t.a=function(e){const{lazy:t,block:n,defaultValue:o,values:d,groupId:u,className:p}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(l.a)(),[O,j]=Object(r.useState)(o),v=r.Children.toArray(e.children),g=[];if(null!=u){const e=m[u];null!=e&&e!==O&&d.some((t=>t.value===e))&&j(e)}const y=e=>{const t=e.target,n=g.indexOf(t),r=v[n].props.value;j(r),null!=u&&f(u,r)},h=e=>{var t;let n;switch(e.keyCode){case b:const t=g.indexOf(e.target)+1;n=g[t]||g[0];break;case s:const r=g.indexOf(e.target)-1;n=g[r]||g[g.length-1]}null===(t=n)||void 0===t||t.focus()};return a.a.createElement("div",{className:"tabs-container"},a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},p)},d.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>g.push(e),onKeyDown:h,onFocus:y,onClick:y},t)))),t?Object(r.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},461:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function({children:e,hidden:t,className:n}){return a.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);