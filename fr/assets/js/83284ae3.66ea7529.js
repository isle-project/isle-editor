(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{220:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),l=(n(0),n(411)),o=n(460),i=n(461),c={id:"h3",title:"h3",sidebar_label:"h3"},s={unversionedId:"html/h3",id:"html/h3",isDocsHomePage:!1,title:"h3",description:"Titre de la section de niveau 3.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/html/h3.md",slug:"/html/h3",permalink:"/fr/docs/html/h3",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/html/h3.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614117474,sidebar_label:"h3",sidebar:"docs",previous:{title:"h2",permalink:"/fr/docs/html/h2"},next:{title:"h4",permalink:"/fr/docs/html/h4"}},u=[{value:"Options",id:"options",children:[]},{value:"Exemples",id:"exemples",children:[]}],b={toc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Titre de la section de niveau 3."),Object(l.b)("h2",{id:"options"},"Options"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"className")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": nom de la classe. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"''"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"style")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": Styles CSS en ligne. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(l.b)("h2",{id:"exemples"},"Exemples"),Object(l.b)(o.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Outline",value:"outline"},{label:"Emboss",value:"emboss"},{label:"Blurred",value:"blurred"}],lazy:!0,mdxType:"Tabs"},Object(l.b)(i.a,{value:"minimal",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<h3>Lesson Sub-Section</h3>\n"))),Object(l.b)(i.a,{value:"outline",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<h3\n  style= {{  fontSize: 63, color: 'transparent', webkitTextStroke: '2px navy' }}\n>Outline</h3>\n"))),Object(l.b)(i.a,{value:"emboss",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<h3\n  style= {{  \n    fontSize: 44,\n    color: 'silver', \n    textShadow:  '-1px 1px 2px rgba(0, 0, 0, 0.5), 1px -1px 0 rgba(255, 255, 255, 0.9)'\n  }}\n>Emboss</h3>\n"))),Object(l.b)(i.a,{value:"blurred",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<h3\n  style= {{  \n    fontSize: 30,\n    color: 'transparent',\n    textShadow: '0 0 4px rgba(0,0,0,0.5)'\n  }}\n>Blurred</h3>\n")))))}p.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||l;return n?a.a.createElement(d,i(i({ref:t},s),{},{components:n})):a.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},445:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},458:function(e,t,n){"use strict";var r=n(0),a=n(459);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},459:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},460:function(e,t,n){"use strict";var r=n(0),a=n.n(r),l=n(458),o=n(445),i=n(58),c=n.n(i);const s=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:i,values:b,groupId:p,className:m}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(l.a)(),[v,O]=Object(r.useState)(i),h=r.Children.toArray(e.children),y=[];if(null!=p){const e=d[p];null!=e&&e!==v&&b.some((t=>t.value===e))&&O(e)}const j=e=>{const t=e.target,n=y.indexOf(t),r=h[n].props.value;O(r),null!=p&&f(p,r)},g=e=>{var t;let n;switch(e.keyCode){case u:const t=y.indexOf(e.target)+1;n=y[t]||y[0];break;case s:const r=y.indexOf(e.target)-1;n=y[r]||y[y.length-1]}null===(t=n)||void 0===t||t.focus()};return a.a.createElement("div",{className:"tabs-container"},a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},m)},b.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:v===e?0:-1,"aria-selected":v===e,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":v===e}),key:e,ref:e=>y.push(e),onKeyDown:g,onFocus:j,onClick:j},t)))),t?Object(r.cloneElement)(h.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}},461:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function({children:e,hidden:t,className:n}){return a.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);