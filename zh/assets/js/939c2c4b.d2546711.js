(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{232:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(409)),l=n(462),o=n(463),c={id:"switch",title:"Switch Components",sidebar_label:"Switch Components"},s={unversionedId:"switch",id:"switch",isDocsHomePage:!1,title:"Switch Components",description:"Switch\u7ec4\u4ef6\u5141\u8bb8\u663e\u793a\u591a\u4e2a\u5143\u7d20\u5217\u8868\u4e2d\u7684\u4e00\u4e2a\u5143\u7d20\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u70b9\u51fb\u5f53\u524d\u663e\u793a\u7684Switch\u6807\u7b7e\u7684\u4e0d\u540c\u5b50\u5143\u7d20\u6765\u5faa\u73af\u6d4f\u89c8\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/switch.md",slug:"/switch",permalink:"/zh/docs/switch",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/switch.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Switch Components",sidebar:"docs",previous:{title:"Slider",permalink:"/zh/docs/slider"},next:{title:"Text",permalink:"/zh/docs/text"}},u=[{value:"\u9009\u9879",id:"\u9009\u9879",children:[]},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[]}],b={toc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Switch\u7ec4\u4ef6\u5141\u8bb8\u663e\u793a\u591a\u4e2a\u5143\u7d20\u5217\u8868\u4e2d\u7684\u4e00\u4e2a\u5143\u7d20\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u70b9\u51fb\u5f53\u524d\u663e\u793a\u7684Switch\u6807\u7b7e\u7684\u4e0d\u540c\u5b50\u5143\u7d20\u6765\u5faa\u73af\u6d4f\u89c8\u3002"),Object(i.b)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"active")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": \u63a7\u5236\u5f00\u5173\u662f\u5426\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"tooltip")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": \u5f53\u9f20\u6807\u60ac\u505c\u5728\u5f00\u5173\u5143\u7d20\u4e0a\u65f6\u663e\u793a\u7684\u5de5\u5177\u63d0\u793a\u3002. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"tooltipPos")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),': \u5de5\u5177\u63d0\u793a\u7684\u4f4d\u7f6e\uff08"\u9876\u90e8"\u3001"\u5de6\u4fa7"\u3001"\u53f3\u4fa7 "\u6216 "\u5e95\u90e8"\uff09\u3002. Default: ',Object(i.b)("inlineCode",{parentName:"li"},"'top'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"className")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": \u5916\u56f4\u8de8\u5ea6\u5143\u7d20\u7684\u7c7b\u540d. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": CSS\u5185\u8054\u6837\u5f0f. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onChange")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": \u5f53\u5143\u7d20\u88ab\u5207\u6362\u65f6\u8c03\u7528\u7684\u56de\u8c03\u3002\u63a5\u6536\u5f53\u524d\u663e\u793a\u7684\u5b50\u5143\u7d20\u7684\u7d22\u5f15\u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\u3002. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onChange() {}"),".")),Object(i.b)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),Object(i.b)(l.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Custom Tooltip",value:"withTooltip"},{label:"With Style",value:"withStyle"}],lazy:!0,mdxType:"Tabs"},Object(i.b)(o.a,{value:"minimal",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Switch>\n    <span>Option 1</span>\n    <span>Option 2</span>\n</Switch>\n"))),Object(i.b)(o.a,{value:"withTooltip",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Switch tooltip="Just click and see" tooltipPos="left">\n    <span>Option 1</span>\n    <span>Option 2</span>\n</Switch>\n'))),Object(i.b)(o.a,{value:"withStyle",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Switch  \n  style={{ fontSize: 80, fontFamily: \'Open Sans Condensed\'}} \n>\n    <span>Some Clouds</span>\n    <img src="https://bit.ly/3rLGE30" />\n    <img src ="https://bit.ly/2OzxEj3" />\n</Switch>\n')))))}p.isMDXComponent=!0},409:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),m=a,d=b["".concat(l,".").concat(m)]||b[m]||p[m]||i;return n?r.a.createElement(d,o(o({ref:t},s),{},{components:n})):r.a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},449:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},460:function(e,t,n){"use strict";var a=n(0),r=n(461);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},461:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},462:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(460),l=n(449),o=n(58),c=n.n(o);const s=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:o,values:b,groupId:p,className:m}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(i.a)(),[O,j]=Object(a.useState)(o),h=a.Children.toArray(e.children),v=[];if(null!=p){const e=d[p];null!=e&&e!==O&&b.some((t=>t.value===e))&&j(e)}const y=e=>{const t=e.target,n=v.indexOf(t),a=h[n].props.value;j(a),null!=p&&f(p,a)},g=e=>{var t;let n;switch(e.keyCode){case u:const t=v.indexOf(e.target)+1;n=v[t]||v[0];break;case s:const a=v.indexOf(e.target)-1;n=v[a]||v[v.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},m)},b.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>v.push(e),onKeyDown:g,onFocus:y,onClick:y},t)))),t?Object(a.cloneElement)(h.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},463:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);