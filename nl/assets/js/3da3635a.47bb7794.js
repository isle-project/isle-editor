(self.webpackChunk=self.webpackChunk||[]).push([[5156],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},358215:function(e,t,n){"use strict";var r=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},541395:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(202784),i=n(180944),a=n(386010),o="tabItem_1uMI",l="tabItemActive_2DSg";var u=37,c=39;var s=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,d=e.values,p=e.groupId,m=e.className,f=(0,i.Z)(),v=f.tabGroupChoices,b=f.setTabGroupChoices,k=(0,r.useState)(s),g=k[0],y=k[1],h=r.Children.toArray(e.children),w=[];if(null!=p){var O=v[p];null!=O&&O!==g&&d.some((function(e){return e.value===O}))&&y(O)}var N=function(e){var t=e.currentTarget,n=w.indexOf(t),r=d[n].value;y(r),null!=p&&(b(p,r),setTimeout((function(){var e,n,r,i,a,o,u,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,i=e.bottom,a=e.right,o=window,u=o.innerHeight,c=o.innerWidth,n>=0&&a<=c&&i<=u&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case c:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case u:var i=w.indexOf(e.target)-1;n=w[i]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},m)},d.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,a.Z)("tabs__item",o,{"tabs__item--active":g===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:N,onClick:N},n)}))),t?(0,r.cloneElement)(h.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},79443:function(e,t,n){"use strict";var r=(0,n(202784).createContext)(void 0);t.Z=r},180944:function(e,t,n){"use strict";var r=n(202784),i=n(79443);t.Z=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},450434:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var r=n(722122),i=n(419756),a=(n(202784),n(603905)),o=n(541395),l=n(358215),u={id:"wikipedia",title:"Wikipedia",sidebar_label:"Wikipedia"},c={unversionedId:"wikipedia",id:"wikipedia",isDocsHomePage:!1,title:"Wikipedia",description:"De component Wikipedia scant de Wikipedia en geeft een artikel terug - als er iets geldigs wordt gevonden onder de ingevoerde zoekterm.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/wikipedia.md",sourceDirName:".",slug:"/wikipedia",permalink:"/docs/wikipedia",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/wikipedia.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21-2-2021",sidebar_label:"Wikipedia",frontMatter:{id:"wikipedia",title:"Wikipedia",sidebar_label:"Wikipedia"},sidebar:"docs",previous:{title:"Weather",permalink:"/docs/weather"},next:{title:"Checkbox Input",permalink:"/docs/input/checkbox-input"}},s=[{value:"Opties",id:"opties",children:[]},{value:"Voorbeelden",id:"voorbeelden",children:[]}],d={toc:s};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"De component ",(0,a.kt)("strong",{parentName:"p"},"Wikipedia")," scant de ",(0,a.kt)("strong",{parentName:"p"},"Wikipedia")," en geeft een artikel terug - als er iets geldigs wordt gevonden onder de ingevoerde zoekterm."),(0,a.kt)("h2",{id:"opties"},"Opties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"defaultEntry")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": standaard vermelding om weer te geven. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline-stijlen. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,a.kt)("h2",{id:"voorbeelden"},"Voorbeelden"),(0,a.kt)(o.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Entry",value:"withEntry"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Wikipedia />\n"))),(0,a.kt)(l.Z,{value:"withEntry",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Wikipedia defaultEntry="Angela Merkel" />\n')))))}p.isMDXComponent=!0},386010:function(e,t,n){"use strict";function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);