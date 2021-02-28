(window.webpackJsonp=window.webpackJsonp||[]).push([[310],{250:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),l=(n(0),n(409)),o=n(462),i=n(463),c={id:"h4",title:"h4",sidebar_label:"h4"},s={unversionedId:"html/h4",id:"html/h4",isDocsHomePage:!1,title:"h4",description:"\u7b2c\u56db\u7ea7\u79d1\u5ba4\u6807\u9898\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/html/h4.md",slug:"/html/h4",permalink:"/zh/docs/html/h4",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/html/h4.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614117474,sidebar_label:"h4",sidebar:"docs",previous:{title:"h3",permalink:"/zh/docs/html/h3"},next:{title:"h5",permalink:"/zh/docs/html/h5"}},u=[{value:"\u9009\u9879",id:"\u9009\u9879",children:[]},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[]}],b={toc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u7b2c\u56db\u7ea7\u79d1\u5ba4\u6807\u9898\u3002"),Object(l.b)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"className")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": \u73ed\u540d. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"''"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"style")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": CSS\u5185\u8054\u6837\u5f0f. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(l.b)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),Object(l.b)(o.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With ID",value:"withID"},{label:"Inset Shadow",value:"insetShadow"},{label:"Slight Rotation",value:"slightRotation"}],lazy:!0,mdxType:"Tabs"},Object(l.b)(i.a,{value:"minimal",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<h4>Section Subtitle</h4>\n"))),Object(l.b)(i.a,{value:"withID",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<h4 id="marker">With an ID - so you can jump straight to it by appending id to the URL</h4>\n'))),Object(l.b)(i.a,{value:"insetShadow",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<h4 id=\"marker\"\n    style={{\n        fontSize: 44,\n        backgroundColor: '#565656',\n        color: 'transparent',\n        textShadow: '2px 2px 3px rgba(255,255,255,0.5)',\n        webkitBackgroundClip: 'text',\n        mozBackgroundClip: 'text',\n        backgroundClip: 'text'\n    }}\n>Inset Shadow</h4>\n"))),Object(l.b)(i.a,{value:"slightRotation",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<h4 \nstyle={{ fontSize: 44, color: 'silver', transform: 'rotate(-2deg)' }}\n>Slight Rotation</h4>\n")))))}p.isMDXComponent=!0},409:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),m=a,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||l;return n?r.a.createElement(d,i(i({ref:t},s),{},{components:n})):r.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},449:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},460:function(e,t,n){"use strict";var a=n(0),r=n(461);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},461:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},462:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(460),o=n(449),i=n(58),c=n.n(i);const s=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:i,values:b,groupId:p,className:m}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(l.a)(),[h,v]=Object(a.useState)(i),O=a.Children.toArray(e.children),g=[];if(null!=p){const e=d[p];null!=e&&e!==h&&b.some((t=>t.value===e))&&v(e)}const j=e=>{const t=e.target,n=g.indexOf(t),a=O[n].props.value;v(a),null!=p&&f(p,a)},y=e=>{var t;let n;switch(e.keyCode){case u:const t=g.indexOf(e.target)+1;n=g[t]||g[0];break;case s:const a=g.indexOf(e.target)-1;n=g[a]||g[g.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},m)},b.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:h===e?0:-1,"aria-selected":h===e,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":h===e}),key:e,ref:e=>g.push(e),onKeyDown:y,onFocus:j,onClick:j},t)))),t?Object(a.cloneElement)(O.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},O.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}},463:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);