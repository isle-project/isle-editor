"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6413],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},358215:function(e,t,n){var r=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},855064:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(202784),i=n(79443);var a=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(386010),o="tabItem_1uMI",u="tabItemActive_2DSg";var c=function(e){var t,n=e.lazy,i=e.block,c=e.defaultValue,s=e.values,p=e.groupId,d=e.className,f=r.Children.toArray(e.children),m=null!=s?s:f.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=c?c:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value,b=a(),k=b.tabGroupChoices,y=b.setTabGroupChoices,g=(0,r.useState)(v),h=g[0],w=g[1],O=[];if(null!=p){var N=k[p];null!=N&&N!==h&&m.some((function(e){return e.value===N}))&&w(N)}var x=function(e){var t=e.currentTarget,n=O.indexOf(t),r=m[n].value;w(r),null!=p&&(y(p,r),setTimeout((function(){var e,n,r,i,a,l,o,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,i=e.bottom,a=e.right,l=window,o=l.innerHeight,c=l.innerWidth,n>=0&&a<=c&&i<=o&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.target)+1;n=O[r]||O[0];break;case"ArrowLeft":var i=O.indexOf(e.target)-1;n=O[i]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},d)},m.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":h===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:E,onFocus:x,onClick:x},null!=n?n:t)}))),n?(0,r.cloneElement)(f.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},79443:function(e,t,n){var r=(0,n(202784).createContext)(void 0);t.Z=r},25558:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var r=n(487462),i=n(263366),a=(n(202784),n(603905)),l=n(855064),o=n(358215),u=["components"],c={id:"wikipedia",title:"Wikipedia",sidebar_label:"Wikipedia"},s=void 0,p={unversionedId:"wikipedia",id:"wikipedia",isDocsHomePage:!1,title:"Wikipedia",description:"\u03a4\u03bf \u03c3\u03c5\u03c3\u03c4\u03b1\u03c4\u03b9\u03ba\u03cc Wikipedia \u03c3\u03b1\u03c1\u03ce\u03bd\u03b5\u03b9 \u03c4\u03b7\u03bd Wikipedia \u03ba\u03b1\u03b9 \u03b5\u03c0\u03b9\u03c3\u03c4\u03c1\u03ad\u03c6\u03b5\u03b9 \u03bc\u03b9\u03b1 \u03ba\u03b1\u03c4\u03b1\u03c7\u03ce\u03c1\u03b7\u03c3\u03b7 \u03b1\u03bd \u03b2\u03c1\u03b5\u03b8\u03b5\u03af \u03ba\u03ac\u03c4\u03b9 \u03ad\u03b3\u03ba\u03c5\u03c1\u03bf \u03ba\u03ac\u03c4\u03c9 \u03b1\u03c0\u03cc \u03c4\u03bf\u03bd \u03b5\u03b9\u03c3\u03b1\u03b3\u03cc\u03bc\u03b5\u03bd\u03bf \u03cc\u03c1\u03bf \u03b1\u03bd\u03b1\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7\u03c2.",source:"@site/i18n/el/docusaurus-plugin-content-docs/current/wikipedia.md",sourceDirName:".",slug:"/wikipedia",permalink:"/el/docs/wikipedia",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/wikipedia.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1/6/2021",frontMatter:{id:"wikipedia",title:"Wikipedia",sidebar_label:"Wikipedia"},sidebar:"docs",previous:{title:"Weather",permalink:"/el/docs/weather"},next:{title:"Checkbox Input",permalink:"/el/docs/input/checkbox-input"}},d=[{value:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",children:[]},{value:"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",children:[]}],f={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u03a4\u03bf \u03c3\u03c5\u03c3\u03c4\u03b1\u03c4\u03b9\u03ba\u03cc ",(0,a.kt)("strong",{parentName:"p"},"Wikipedia")," \u03c3\u03b1\u03c1\u03ce\u03bd\u03b5\u03b9 \u03c4\u03b7\u03bd ",(0,a.kt)("strong",{parentName:"p"},"Wikipedia")," \u03ba\u03b1\u03b9 \u03b5\u03c0\u03b9\u03c3\u03c4\u03c1\u03ad\u03c6\u03b5\u03b9 \u03bc\u03b9\u03b1 \u03ba\u03b1\u03c4\u03b1\u03c7\u03ce\u03c1\u03b7\u03c3\u03b7 \u03b1\u03bd \u03b2\u03c1\u03b5\u03b8\u03b5\u03af \u03ba\u03ac\u03c4\u03b9 \u03ad\u03b3\u03ba\u03c5\u03c1\u03bf \u03ba\u03ac\u03c4\u03c9 \u03b1\u03c0\u03cc \u03c4\u03bf\u03bd \u03b5\u03b9\u03c3\u03b1\u03b3\u03cc\u03bc\u03b5\u03bd\u03bf \u03cc\u03c1\u03bf \u03b1\u03bd\u03b1\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7\u03c2."),(0,a.kt)("h2",{id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"},"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"defaultEntry")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \u03c0\u03c1\u03bf\u03b5\u03c0\u03b9\u03bb\u03b5\u03b3\u03bc\u03ad\u03bd\u03b7 \u03ba\u03b1\u03c4\u03b1\u03c7\u03ce\u03c1\u03b7\u03c3\u03b7 \u03b3\u03b9\u03b1 \u03b5\u03bc\u03c6\u03ac\u03bd\u03b9\u03c3\u03b7. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": \u03a3\u03c4\u03c5\u03bb \u03b3\u03c1\u03b1\u03bc\u03bc\u03ae\u03c2 CSS. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,a.kt)("h2",{id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"},"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"),(0,a.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Entry",value:"withEntry"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Wikipedia />\n"))),(0,a.kt)(o.Z,{value:"withEntry",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Wikipedia defaultEntry="Angela Merkel" />\n')))))}m.isMDXComponent=!0},386010:function(e,t,n){function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);