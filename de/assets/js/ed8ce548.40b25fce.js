"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1900],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},358215:function(e,t,n){var r=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},855064:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(202784),a=n(79443);var i=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(386010),l="tabItem_1uMI",u="tabItemActive_2DSg";var c=function(e){var t,n=e.lazy,a=e.block,c=e.defaultValue,s=e.values,p=e.groupId,m=e.className,d=r.Children.toArray(e.children),f=null!=s?s:d.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=c?c:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,b=i(),h=b.tabGroupChoices,g=b.setTabGroupChoices,y=(0,r.useState)(v),k=y[0],w=y[1],O=[];if(null!=p){var N=h[p];null!=N&&N!==k&&f.some((function(e){return e.value===N}))&&w(N)}var C=function(e){var t=e.currentTarget,n=O.indexOf(t),r=f[n].value;w(r),null!=p&&(g(p,r),setTimeout((function(){var e,n,r,a,i,o,l,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,l=o.innerHeight,c=o.innerWidth,n>=0&&i<=c&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.target)+1;n=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.target)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},m)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":k===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:x,onFocus:C,onClick:C},null!=n?n:t)}))),n?(0,r.cloneElement)(d.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,n){var r=(0,n(202784).createContext)(void 0);t.Z=r},760245:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var r=n(487462),a=n(263366),i=(n(202784),n(603905)),o=n(855064),l=n(358215),u=["components"],c={id:"weather",title:"Weather",sidebar_label:"Weather"},s=void 0,p={unversionedId:"weather",id:"weather",isDocsHomePage:!1,title:"Weather",description:"Eine Komponente zur Anzeige des aktuellen Wetters an einem bestimmten Ort.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/weather.md",sourceDirName:".",slug:"/weather",permalink:"/de/docs/weather",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/weather.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21.2.2021",frontMatter:{id:"weather",title:"Weather",sidebar_label:"Weather"},sidebar:"docs",previous:{title:"R Table",permalink:"/de/docs/r/r-table"},next:{title:"Wikipedia",permalink:"/de/docs/wikipedia"}},m=[{value:"Optionen",id:"optionen",children:[]},{value:"Beispiele",id:"beispiele",children:[]}],d={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Eine Komponente zur Anzeige des aktuellen Wetters an einem bestimmten Ort."),(0,i.kt)("h2",{id:"optionen"},"Optionen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"location")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": Standortname. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"voiceID")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": Kennung der Sprachsteuerung. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": CSS-Inline-Stile. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,i.kt)("h2",{id:"beispiele"},"Beispiele"),(0,i.kt)(o.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Custom Styling",value:"withCSS"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Weather\n    location="Pittsburgh"\n/>\n'))),(0,i.kt)(l.Z,{value:"withCSS",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Weather\n    location=\"Pittsburgh\"\n    style={{ fontFamily: 'Courier', background: 'orange' }}\n/>\n")))))}f.isMDXComponent=!0},386010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);