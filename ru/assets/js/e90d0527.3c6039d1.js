(self.webpackChunk=self.webpackChunk||[]).push([[8279],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},358215:function(e,t,n){"use strict";var r=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},541395:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(202784),a=n(180944),i=n(386010),o="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,u=39;var s=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,d=e.values,p=e.groupId,m=e.className,f=(0,a.Z)(),v=f.tabGroupChoices,b=f.setTabGroupChoices,k=(0,r.useState)(s),g=k[0],y=k[1],N=r.Children.toArray(e.children),h=[];if(null!=p){var C=v[p];null!=C&&C!==g&&d.some((function(e){return e.value===C}))&&y(C)}var O=function(e){var t=e.currentTarget,n=h.indexOf(t),r=d[n].value;y(r),null!=p&&(b(p,r),setTimeout((function(){var e,n,r,a,i,o,c,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,c=o.innerHeight,u=o.innerWidth,n>=0&&i<=u&&a<=c&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case u:var r=h.indexOf(e.target)+1;n=h[r]||h[0];break;case c:var a=h.indexOf(e.target)-1;n=h[a]||h[h.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},d.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":g===t}),key:t,ref:function(e){return h.push(e)},onKeyDown:x,onFocus:O,onClick:O},n)}))),t?(0,r.cloneElement)(N.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},79443:function(e,t,n){"use strict";var r=(0,n(202784).createContext)(void 0);t.Z=r},180944:function(e,t,n){"use strict";var r=n(202784),a=n(79443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},567404:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var r=n(722122),a=n(419756),i=(n(202784),n(603905)),o=n(541395),l=n(358215),c={id:"accordion",title:"Accordion",sidebar_label:"Accordion"},u={unversionedId:"accordion",id:"accordion",isDocsHomePage:!1,title:"Accordion",description:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0430\u043a\u043a\u043e\u0440\u0434\u0435\u043e\u043d\u0430, \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439 \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u043f\u043e\u043b\u0437\u0443\u043d\u0430\u043c\u0438.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/accordion.md",sourceDirName:".",slug:"/accordion",permalink:"/docs/accordion",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/accordion.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621312042,formattedLastUpdatedAt:"18.05.2021",sidebar_label:"Accordion",frontMatter:{id:"accordion",title:"Accordion",sidebar_label:"Accordion"},sidebar:"docs",previous:{title:"Voice Input",permalink:"/docs/input/voice-input"},next:{title:"IFrame",permalink:"/docs/iframe"}},s=[{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:[]}],d={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0430\u043a\u043a\u043e\u0440\u0434\u0435\u043e\u043d\u0430, \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439 \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u043f\u043e\u043b\u0437\u0443\u043d\u0430\u043c\u0438."),(0,i.kt)("h2",{id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"active")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": \u0438\u043d\u0434\u0435\u043a\u0441 \u043f\u043e\u043b\u0437\u0443\u043d\u043a\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043e\u0442\u043a\u0440\u044b\u0442 \u0432 \u043d\u0430\u0447\u0430\u043b\u0435. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"canCloseAll")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043c\u043e\u0436\u043d\u043e \u043b\u0438 \u0441\u0431\u0438\u0442\u044c \u0432\u0441\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"headers")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": \u043c\u0430\u0441\u0441\u0438\u0432 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u043e\u0432. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"headerStyle")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": \u043c\u043e\u0436\u043d\u043e \u0442\u0430\u043a\u0436\u0435 \u043f\u0440\u0438\u0441\u0432\u043e\u0438\u0442\u044c \u0441\u0442\u0438\u043b\u044c \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u0447\u043d\u044b\u043c \u043f\u043e\u043b\u043e\u0441\u043a\u0430\u043c. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"headerClassName")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": \u044d\u0442\u043e \u043e\u0442\u043c\u0435\u043d\u044f\u0435\u0442 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u043e\u0432. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onChange")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": \u0432\u044b\u0437\u043e\u0432 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u0432\u044b\u0437\u043e\u0432\u0430 \u0441 \u0438\u043d\u0434\u0435\u043a\u0441\u043e\u043c \u043d\u043e\u0432\u043e\u0433\u043e \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u0437\u0443\u043d\u043a\u0430. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"className")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043b\u0430\u0441\u0441\u0430 \u0434\u043b\u044f outer div. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": CSS \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u0441\u0442\u0438\u043b\u0438 \u0434\u043b\u044f \u043d\u0430\u0440\u0443\u0436\u043d\u044b\u0445 \u043f\u043e\u0433\u0440\u0443\u0436\u0435\u043d\u0438\u0439. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,i.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,i.kt)(o.Z,{defaultValue:"firstOpened",values:[{label:"First item opened",value:"firstOpened"},{label:"All items can close",value:"allClosed"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"firstOpened",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Accordion headers={[ 'First Question', 'Second Question' ]} active={0} >\n    <FreeTextQuestion />\n    <FreeTextQuestion />\n</Accordion>\n"))),(0,i.kt)(l.Z,{value:"allClosed",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Accordion headers={[ 'First Question', 'Second Question' ]} canCloseAll >\n    <FreeTextQuestion />\n    <FreeTextQuestion />\n</Accordion>\n")))))}p.isMDXComponent=!0},386010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);