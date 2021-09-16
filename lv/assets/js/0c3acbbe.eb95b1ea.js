"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6105],{603905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(202784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},358215:function(e,t,r){var n=r(202784);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},855064:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(202784),a=r(79443);var i=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=r(386010),o="tabItem_1uMI",u="tabItemActive_2DSg";var s=function(e){var t,r=e.lazy,a=e.block,s=e.defaultValue,c=e.values,p=e.groupId,d=e.className,m=n.Children.toArray(e.children),f=null!=c?c:m.map((function(e){return{value:e.props.value,label:e.props.label}})),b=null!=s?s:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,v=i(),k=v.tabGroupChoices,y=v.setTabGroupChoices,g=(0,n.useState)(b),h=g[0],N=g[1],j=[];if(null!=p){var w=k[p];null!=w&&w!==h&&f.some((function(e){return e.value===w}))&&N(w)}var C=function(e){var t=e.currentTarget,r=j.indexOf(t),n=f[r].value;N(n),null!=p&&(y(p,n),setTimeout((function(){var e,r,n,a,i,l,o,s;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,i=e.right,l=window,o=l.innerHeight,s=l.innerWidth,r>=0&&i<=s&&a<=o&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},O=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=j.indexOf(e.target)+1;r=j[n]||j[0];break;case"ArrowLeft":var a=j.indexOf(e.target)-1;r=j[a]||j[j.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},d)},f.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":h===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:O,onFocus:C,onClick:C},null!=r?r:t)}))),r?(0,n.cloneElement)(m.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},79443:function(e,t,r){var n=(0,r(202784).createContext)(void 0);t.Z=n},966858:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var n=r(487462),a=r(263366),i=(r(202784),r(603905)),l=r(855064),o=r(358215),u=["components"],s={id:"r-table",title:"R Table",sidebar_label:"R Table"},c=void 0,p={unversionedId:"r/r-table",id:"r/r-table",isDocsHomePage:!1,title:"R Table",description:"Komponents R datu r\u0101mja vai matricas att\u0113lo\u0161anai tabul\u0101raj\u0101 displej\u0101.",source:"@site/i18n/lv/docusaurus-plugin-content-docs/current/r/table.md",sourceDirName:"r",slug:"/r/r-table",permalink:"/lv/docs/r/r-table",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/r/table.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021.06.1.",frontMatter:{id:"r-table",title:"R Table",sidebar_label:"R Table"},sidebar:"docs",previous:{title:"R Shell",permalink:"/lv/docs/r/r-shell"},next:{title:"Weather",permalink:"/lv/docs/weather"}},d=[{value:"Iesp\u0113jas",id:"iesp\u0113jas",children:[]},{value:"Piem\u0113ri",id:"piem\u0113ri",children:[]}],m={toc:d};function f(e){var t=e.components,r=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Komponents R datu r\u0101mja vai matricas att\u0113lo\u0161anai tabul\u0101raj\u0101 displej\u0101."),(0,i.kt)("h2",{id:"iesp\u0113jas"},"Iesp\u0113jas"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"code")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": R kods, kas atgrie\u017e data.frame, kur\u0101 ir tabul\u0101 redzamie dati. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"libraries")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array"),": R bibliot\u0113kas, kas j\u0101iel\u0101d\u0113 autom\u0101tiski, kad tiek izpild\u012bts ievades ",(0,i.kt)("inlineCode",{parentName:"li"},"kods"),".. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"prependCode")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|array)"),": R koda ",(0,i.kt)("inlineCode",{parentName:"li"},"virkne")," (vai R koda bloku ",(0,i.kt)("inlineCode",{parentName:"li"},"maseja"),"), kas tiks pievienota kodam, kas saglab\u0101ts ",(0,i.kt)("inlineCode",{parentName:"li"},"code"),", kad tiks nov\u0113rt\u0113ts.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": CSS ieb\u016bv\u0113tie stili. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,i.kt)("h2",{id:"piem\u0113ri"},"Piem\u0113ri"),(0,i.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Using Libraries",value:"usingLibraries"},{label:"Custom Style",value:"customStyle"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RTable\n    code={`data <- matrix( runif(64), nrow=8, ncol=8); \n    data`}\n/>\n"))),(0,i.kt)(o.Z,{value:"usingLibraries",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RTable \n    libraries={[ 'dplyr' ]}\n    code=\"starwars\"\n/>\n"))),(0,i.kt)(o.Z,{value:"customStyle",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RTable \n    libraries={[ 'dplyr' ]}\n    code=\"starwars\"\n    style={{ width: '400px' }}\n/>\n")))))}f.isMDXComponent=!0},386010:function(e,t,r){function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);