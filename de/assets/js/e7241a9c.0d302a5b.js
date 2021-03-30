(window.webpackJsonp=window.webpackJsonp||[]).push([[1272],{297:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(410)),l=n(443),o=n(444),c={id:"span",title:"span",sidebar_label:"span"},s={unversionedId:"html/span",id:"html/span",isDocsHomePage:!1,title:"span",description:"Generisches Inline-Container-Element.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/html/span.md",slug:"/html/span",permalink:"/de/docs/html/span",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/html/span.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614807536,formattedLastUpdatedAt:"3.3.2021",sidebar_label:"span",sidebar:"docs",previous:{title:"pre",permalink:"/de/docs/html/pre"},next:{title:"h1",permalink:"/de/docs/html/h1"}},u=[{value:"Optionen",id:"optionen",children:[]},{value:"Beispiele",id:"beispiele",children:[]}],p={toc:u};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Generisches Inline-Container-Element."),Object(i.b)("h2",{id:"optionen"},"Optionen"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"className")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": Klassenname. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": CSS-Inline-Stile. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(i.b)("h2",{id:"beispiele"},"Beispiele"),Object(i.b)(l.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Markdown",value:"withMarkdown"},{label:"With CSS",value:"withCSS"},{label:"Highlight",value:"highlight"}],lazy:!0,mdxType:"Tabs"},Object(i.b)(o.a,{value:"minimal",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<span>inline text wrapped by span tag</span>\n"))),Object(i.b)(o.a,{value:"withMarkdown",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<span>You can mix *italic* and **bold** text via Markdown - as well as [links](https://www.google.com).</span>\n"))),Object(i.b)(o.a,{value:"withCSS",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<span style={{ fontSize: 77}}>each</span>\n<span style={{ fontSize: 33, color: 'red', fontFamily: 'Times'}}> word</span>\n<span style={{ fontSize: 44 }}> another</span>\n<span style={{ color: 'blue', fontSize: 44, verticalAlign: 'top' }}><sup>STYLE</sup></span>\n"))),Object(i.b)(o.a,{value:"highlight",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<p>You can <span style={{ color: 'red', fontWeight: 600 }}> highlight </span>anything</p>\n")))))}b.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,d=p["".concat(l,".").concat(m)]||p[m]||b[m]||i;return n?r.a.createElement(d,o(o({ref:t},s),{},{components:n})):r.a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},434:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},440:function(e,t,n){"use strict";var a=n(0),r=n(441);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},441:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},443:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(440),l=n(434),o=n(57),c=n.n(o);const s=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:o,values:p,groupId:b,className:m}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(i.a)(),[h,v]=Object(a.useState)(o),O=a.Children.toArray(e.children),g=[];if(null!=b){const e=d[b];null!=e&&e!==h&&p.some((t=>t.value===e))&&v(e)}const y=e=>{const t=e.target,n=g.indexOf(t),a=O[n].props.value;v(a),null!=b&&(f(b,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:r}=e.getBoundingClientRect(),{innerHeight:i,innerWidth:l}=window;return t>=0&&r<=l&&a<=i&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((()=>t.classList.remove(c.a.tabItemActive)),2e3))}),150))},j=e=>{var t;let n;switch(e.keyCode){case u:{const t=g.indexOf(e.target)+1;n=g[t]||g[0];break}case s:{const t=g.indexOf(e.target)-1;n=g[t]||g[g.length-1];break}}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},m)},p.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:h===e?0:-1,"aria-selected":h===e,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":h===e}),key:e,ref:e=>g.push(e),onKeyDown:j,onFocus:y,onClick:y},t)))),t?Object(a.cloneElement)(O.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},O.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}},444:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);