"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1095],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},358215:function(e,t,n){var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},855064:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(202784),r=n(79443);var l=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(386010),i="tabItem_1uMI",u="tabItemActive_2DSg";var s=function(e){var t,n=e.lazy,r=e.block,s=e.defaultValue,c=e.values,d=e.groupId,p=e.className,m=a.Children.toArray(e.children),f=null!=c?c:m.map((function(e){return{value:e.props.value,label:e.props.label}})),b=null!=s?s:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,k=l(),v=k.tabGroupChoices,y=k.setTabGroupChoices,g=(0,a.useState)(b),h=g[0],N=g[1],C=[];if(null!=d){var j=v[d];null!=j&&j!==h&&f.some((function(e){return e.value===j}))&&N(j)}var w=function(e){var t=e.currentTarget,n=C.indexOf(t),a=f[n].value;N(a),null!=d&&(y(d,a),setTimeout((function(){var e,n,a,r,l,o,i,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,l=e.right,o=window,i=o.innerHeight,s=o.innerWidth,n>=0&&l<=s&&r<=i&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.target)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.target)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},p)},f.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":h===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:O,onFocus:w,onClick:w},null!=n?n:t)}))),n?(0,a.cloneElement)(m.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},79443:function(e,t,n){var a=(0,n(202784).createContext)(void 0);t.Z=a},727376:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var a=n(487462),r=n(263366),l=(n(202784),n(603905)),o=n(855064),i=n(358215),u=["components"],s={id:"feedback",title:"Feedback Buttons",sidebar_label:"Feedback Buttons"},c=void 0,d={unversionedId:"feedback",id:"feedback",isDocsHomePage:!1,title:"Feedback Buttons",description:"Tla\u010didl\xe1 na zhroma\u017e\u010fovanie sp\xe4tnej v\xe4zby od pou\u017e\xedvate\u013eov.",source:"@site/i18n/sk/docusaurus-plugin-content-docs/current/feedback.md",sourceDirName:".",slug:"/feedback",permalink:"/sk/docs/feedback",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/feedback.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. 6. 2021",frontMatter:{id:"feedback",title:"Feedback Buttons",sidebar_label:"Feedback Buttons"},sidebar:"docs",previous:{title:"Data Table",permalink:"/sk/docs/data-table"},next:{title:"Gate",permalink:"/sk/docs/gate"}},p=[{value:"Mo\u017enosti",id:"mo\u017enosti",children:[]},{value:"Pr\xedklady",id:"pr\xedklady",children:[]}],m={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Tla\u010didl\xe1 na zhroma\u017e\u010fovanie sp\xe4tnej v\xe4zby od pou\u017e\xedvate\u013eov."),(0,l.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"confusedMsg")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": spr\xe1va, ktor\xe1 sa m\xe1 zobrazi\u0165 v tipe pre zm\xe4to\u010dn\xe9 tla\u010didlo. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"feedbackMsg")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": spr\xe1va, ktor\xe1 sa m\xe1 zobrazi\u0165 v tipe pre tla\u010didlo podrobnej sp\xe4tnej v\xe4zby. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"understoodMsg")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": spr\xe1va, ktor\xe1 sa m\xe1 zobrazi\u0165 v tipe pre pochopen\xe9 tla\u010didlo. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"customFeedback")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, \u010di komponent akceptuje vlastn\xfa sp\xe4tn\xfa v\xe4zbu.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"vertical")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": tla\u010didl\xe1 sa zobrazuj\xfa vertik\xe1lne, ak je nastaven\xe1 hodnota ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),". Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"className")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": n\xe1zov triedy. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": Riadkov\xe9 \u0161t\xfdly CSS. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,l.kt)("h2",{id:"pr\xedklady"},"Pr\xedklady"),(0,l.kt)(o.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Vertical",value:"Vertical"},{label:"Feedback Everywhere",value:"feedbackEverywhere"},{label:"Customized Style and Labels",value:"fullyCustomized"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Panel>\n  A panel with user feedback....\n  <FeedbackButtons\n    id="my_feedback" \n  />\n</Panel>\n'))),(0,l.kt)(i.Z,{value:"Vertical",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Panel>\n  Lorem ipsum....\n  <FeedbackButtons\n    id="my_feedback" \n    vertical\n  />\n</Panel>\n'))),(0,l.kt)(i.Z,{value:"feedbackEverywhere",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Panel style={{ width: 680}}>\n\n<VideoPlayer\n    url="https://youtu.be/Lkj8b25ppZo"\n    controls\n/>\n\n  to get some user feedback....\n  <FeedbackButtons\n    id="my_feedback" \n  />\n\n</Panel>\n'))),(0,l.kt)(i.Z,{value:"fullyCustomized",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Panel>\n  Lorem ipsum....\n  <FeedbackButtons\n    style={{ boxShadow: \'0 0 12px red\' }}\n    id="my_feedback"  \n    feedbackMsg="You can customize the feedback tooltip!"\n    understoodMsg="Tell me you got it!" \n    confusedMsg="Click me if your are confused!" \n  />\n</Panel>\n')))))}f.isMDXComponent=!0},386010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);