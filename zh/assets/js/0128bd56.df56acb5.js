(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(411)),l=n(460),o=n(461),c={id:"link",title:"Link",sidebar_label:"Link"},s={unversionedId:"link",id:"link",isDocsHomePage:!1,title:"Link",description:"\u4e00\u4e2a\u7528\u4e8e\u663e\u793a\u94fe\u63a5\u7684\u7ec4\u4ef6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/link.md",slug:"/link",permalink:"/zh/docs/link",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/link.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Link",sidebar:"docs",previous:{title:"Image",permalink:"/zh/docs/image"},next:{title:"LaTeX Equations",permalink:"/zh/docs/tex"}},u=[{value:"\u9009\u9879",id:"\u9009\u9879",children:[]},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[]}],b={toc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u4e00\u4e2a\u7528\u4e8e\u663e\u793a\u94fe\u63a5\u7684\u7ec4\u4ef6\u3002"),Object(i.b)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"href")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string (required)"),": \u94fe\u63a5\u5230\u7684\u7f51\u7ad9URL. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"target")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": \u5b9a\u4e49\u6253\u5f00\u94fe\u63a5\u7684\u4f4d\u7f6e\uff1a\u8bbe\u7f6e\u4e3a",Object(i.b)("inlineCode",{parentName:"li"},"_blank"),"\u4ee3\u8868\u65b0\u7a97\u53e3\uff0c",Object(i.b)("inlineCode",{parentName:"li"},"_self"),"\u4ee3\u8868\u81ea\u5df1\u7684\u6846\u67b6\uff0c",Object(i.b)("inlineCode",{parentName:"li"},"_parent"),"\u4ee3\u8868\u4e0a\u7ea7\uff0c",Object(i.b)("inlineCode",{parentName:"li"},"_top"),"\u4ee3\u8868\u7a97\u53e3\u7684\u4e3b\u4f53\uff0c\u6216\u8005\u6846\u67b6\u7684\u540d\u79f0\u3002. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'_blank'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"className")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": \u73ed\u540d. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": CSS\u5185\u8054\u6837\u5f0f. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(i.b)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),Object(i.b)(l.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"New Page",value:"newPage"},{label:"Image Link",value:"imageLink"}],lazy:!0,mdxType:"Tabs"},Object(i.b)(o.a,{value:"minimal",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Link href="https://wikipedia.org">Wikipedia</Link>\n'))),Object(i.b)(o.a,{value:"newPage",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Link target="_blank" \nstyle={{ fontSize: 35}}\nhref="https://wikipedia.org">New Wikipedia Page</Link>\n'))),Object(i.b)(o.a,{value:"imageLink",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Link target="_blank" \nstyle={{ fontSize: 35}}\nhref="https://wikipedia.org">\n<img src= "https://bit.ly/3aM4OU7" /></Link>\n')))))}p.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),m=a,d=b["".concat(l,".").concat(m)]||b[m]||p[m]||i;return n?r.a.createElement(d,o(o({ref:t},s),{},{components:n})):r.a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},445:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},458:function(e,t,n){"use strict";var a=n(0),r=n(459);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},459:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},460:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(458),l=n(445),o=n(58),c=n.n(o);const s=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:o,values:b,groupId:p,className:m}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(i.a)(),[O,j]=Object(a.useState)(o),g=a.Children.toArray(e.children),v=[];if(null!=p){const e=d[p];null!=e&&e!==O&&b.some((t=>t.value===e))&&j(e)}const y=e=>{const t=e.target,n=v.indexOf(t),a=g[n].props.value;j(a),null!=p&&f(p,a)},h=e=>{var t;let n;switch(e.keyCode){case u:const t=v.indexOf(e.target)+1;n=v[t]||v[0];break;case s:const a=v.indexOf(e.target)-1;n=v[a]||v[v.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},m)},b.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>v.push(e),onKeyDown:h,onFocus:y,onClick:y},t)))),t?Object(a.cloneElement)(g.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},461:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);