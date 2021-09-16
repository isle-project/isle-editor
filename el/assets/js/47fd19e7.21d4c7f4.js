"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3688],{603905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(202784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},358215:function(e,t,r){var n=r(202784);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},855064:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(202784),a=r(79443);var l=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=r(386010),o="tabItem_1uMI",u="tabItemActive_2DSg";var c=function(e){var t,r=e.lazy,a=e.block,c=e.defaultValue,s=e.values,p=e.groupId,d=e.className,m=n.Children.toArray(e.children),f=null!=s?s:m.map((function(e){return{value:e.props.value,label:e.props.label}})),b=null!=c?c:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,v=l(),y=v.tabGroupChoices,g=v.setTabGroupChoices,k=(0,n.useState)(b),h=k[0],N=k[1],w=[];if(null!=p){var O=y[p];null!=O&&O!==h&&f.some((function(e){return e.value===O}))&&N(O)}var C=function(e){var t=e.currentTarget,r=w.indexOf(t),n=f[r].value;N(n),null!=p&&(g(p,n),setTimeout((function(){var e,r,n,a,l,i,o,c;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,l=e.right,i=window,o=i.innerHeight,c=i.innerWidth,r>=0&&l<=c&&a<=o&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},T=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=w.indexOf(e.target)+1;r=w[n]||w[0];break;case"ArrowLeft":var a=w.indexOf(e.target)-1;r=w[a]||w[w.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},d)},f.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":h===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:T,onFocus:C,onClick:C},null!=r?r:t)}))),r?(0,n.cloneElement)(m.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},79443:function(e,t,r){var n=(0,r(202784).createContext)(void 0);t.Z=n},788641:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var n=r(487462),a=r(263366),l=(r(202784),r(603905)),i=r(855064),o=r(358215),u=["components"],c={id:"r-table",title:"R Table",sidebar_label:"R Table"},s=void 0,p={unversionedId:"r/r-table",id:"r/r-table",isDocsHomePage:!1,title:"R Table",description:"\u03a3\u03c5\u03c3\u03c4\u03b1\u03c4\u03b9\u03ba\u03cc \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03b1\u03c0\u03cc\u03b4\u03bf\u03c3\u03b7 \u03b5\u03bd\u03cc\u03c2 \u03c0\u03bb\u03b1\u03b9\u03c3\u03af\u03bf\u03c5 \u03ae \u03c0\u03af\u03bd\u03b1\u03ba\u03b1 \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03c9\u03bd R \u03c3\u03b5 \u03bc\u03bf\u03c1\u03c6\u03ae \u03c0\u03af\u03bd\u03b1\u03ba\u03b1.",source:"@site/i18n/el/docusaurus-plugin-content-docs/current/r/table.md",sourceDirName:"r",slug:"/r/r-table",permalink:"/el/docs/r/r-table",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/r/table.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1/6/2021",frontMatter:{id:"r-table",title:"R Table",sidebar_label:"R Table"},sidebar:"docs",previous:{title:"R Shell",permalink:"/el/docs/r/r-shell"},next:{title:"Weather",permalink:"/el/docs/weather"}},d=[{value:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",children:[]},{value:"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",children:[]}],m={toc:d};function f(e){var t=e.components,r=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u03a3\u03c5\u03c3\u03c4\u03b1\u03c4\u03b9\u03ba\u03cc \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03b1\u03c0\u03cc\u03b4\u03bf\u03c3\u03b7 \u03b5\u03bd\u03cc\u03c2 \u03c0\u03bb\u03b1\u03b9\u03c3\u03af\u03bf\u03c5 \u03ae \u03c0\u03af\u03bd\u03b1\u03ba\u03b1 \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03c9\u03bd R \u03c3\u03b5 \u03bc\u03bf\u03c1\u03c6\u03ae \u03c0\u03af\u03bd\u03b1\u03ba\u03b1."),(0,l.kt)("h2",{id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"},"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"code")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u039a\u03ce\u03b4\u03b9\u03ba\u03b1\u03c2 R \u03c0\u03bf\u03c5 \u03b5\u03c0\u03b9\u03c3\u03c4\u03c1\u03ad\u03c6\u03b5\u03b9 \u03ad\u03bd\u03b1 data.frame \u03c0\u03bf\u03c5 \u03c0\u03b5\u03c1\u03b9\u03ad\u03c7\u03b5\u03b9 \u03c4\u03b1 \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03b1 \u03c0\u03bf\u03c5 \u03b8\u03b1 \u03b5\u03bc\u03c6\u03b1\u03bd\u03b9\u03c3\u03c4\u03bf\u03cd\u03bd \u03c3\u03c4\u03bf\u03bd \u03c0\u03af\u03bd\u03b1\u03ba\u03b1. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"libraries")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array"),': \u0392\u03b9\u03b2\u03bb\u03b9\u03bf\u03b8\u03ae\u03ba\u03b5\u03c2 R \u03c0\u03bf\u03c5 \u03b8\u03b1 \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03c6\u03bf\u03c1\u03c4\u03ce\u03bd\u03bf\u03bd\u03c4\u03b1\u03b9 \u03b1\u03c5\u03c4\u03cc\u03bc\u03b1\u03c4\u03b1 \u03cc\u03c4\u03b1\u03bd \u03b5\u03ba\u03c4\u03b5\u03bb\u03b5\u03af\u03c4\u03b1\u03b9 \u03bf "\u03ba\u03ce\u03b4\u03b9\u03ba\u03b1\u03c2" \u03b5\u03b9\u03c3\u03cc\u03b4\u03bf\u03c5. Default: ',(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"prependCode")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|array)"),": \u039a\u03ce\u03b4\u03b9\u03ba\u03b1\u03c2 R ",(0,l.kt)("inlineCode",{parentName:"li"},"string")," (\u03ae ",(0,l.kt)("inlineCode",{parentName:"li"},"array")," \u03b1\u03c0\u03cc \u03bc\u03c0\u03bb\u03bf\u03ba \u03ba\u03ce\u03b4\u03b9\u03ba\u03b1 R) \u03c0\u03bf\u03c5 \u03b8\u03b1 \u03c0\u03c1\u03bf\u03c3\u03c4\u03b5\u03b8\u03b5\u03af \u03c3\u03c4\u03bf\u03bd \u03ba\u03ce\u03b4\u03b9\u03ba\u03b1 \u03c0\u03bf\u03c5 \u03b5\u03af\u03bd\u03b1\u03b9 \u03b1\u03c0\u03bf\u03b8\u03b7\u03ba\u03b5\u03c5\u03bc\u03ad\u03bd\u03bf\u03c2 \u03c3\u03c4\u03bf ",(0,l.kt)("inlineCode",{parentName:"li"},"code")," \u03ba\u03b1\u03c4\u03ac \u03c4\u03b7\u03bd \u03b1\u03be\u03b9\u03bf\u03bb\u03cc\u03b3\u03b7\u03c3\u03b7. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": \u03a3\u03c4\u03c5\u03bb \u03b3\u03c1\u03b1\u03bc\u03bc\u03ae\u03c2 CSS. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,l.kt)("h2",{id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"},"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Using Libraries",value:"usingLibraries"},{label:"Custom Style",value:"customStyle"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RTable\n    code={`data <- matrix( runif(64), nrow=8, ncol=8); \n    data`}\n/>\n"))),(0,l.kt)(o.Z,{value:"usingLibraries",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RTable \n    libraries={[ 'dplyr' ]}\n    code=\"starwars\"\n/>\n"))),(0,l.kt)(o.Z,{value:"customStyle",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RTable \n    libraries={[ 'dplyr' ]}\n    code=\"starwars\"\n    style={{ width: '400px' }}\n/>\n")))))}f.isMDXComponent=!0},386010:function(e,t,r){function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);