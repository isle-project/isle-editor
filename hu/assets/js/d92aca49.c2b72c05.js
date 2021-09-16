"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9289],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,f=m["".concat(u,".").concat(p)]||m[p]||d[p]||l;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},358215:function(e,t,n){var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},855064:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(202784),r=n(79443);var l=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(386010),o="tabItem_1uMI",u="tabItemActive_2DSg";var s=function(e){var t,n=e.lazy,r=e.block,s=e.defaultValue,c=e.values,d=e.groupId,m=e.className,p=a.Children.toArray(e.children),f=null!=c?c:p.map((function(e){return{value:e.props.value,label:e.props.label}})),b=null!=s?s:null==(t=p.find((function(e){return e.props.default})))?void 0:t.props.value,k=l(),v=k.tabGroupChoices,g=k.setTabGroupChoices,y=(0,a.useState)(b),h=y[0],N=y[1],j=[];if(null!=d){var C=v[d];null!=C&&C!==h&&f.some((function(e){return e.value===C}))&&N(C)}var w=function(e){var t=e.currentTarget,n=j.indexOf(t),a=f[n].value;N(a),null!=d&&(g(d,a),setTimeout((function(){var e,n,a,r,l,i,o,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,l=e.right,i=window,o=i.innerHeight,s=i.innerWidth,n>=0&&l<=s&&r<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=j.indexOf(e.target)+1;n=j[a]||j[0];break;case"ArrowLeft":var r=j.indexOf(e.target)-1;n=j[r]||j[j.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},m)},f.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":h===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:O,onFocus:w,onClick:w},null!=n?n:t)}))),n?(0,a.cloneElement)(p.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},p.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},79443:function(e,t,n){var a=(0,n(202784).createContext)(void 0);t.Z=a},882218:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return m},default:function(){return f}});var a=n(487462),r=n(263366),l=(n(202784),n(603905)),i=n(855064),o=n(358215),u=["components"],s={id:"feedback",title:"Feedback Buttons",sidebar_label:"Feedback Buttons"},c=void 0,d={unversionedId:"feedback",id:"feedback",isDocsHomePage:!1,title:"Feedback Buttons",description:"Gombok a felhaszn\xe1l\xf3i visszajelz\xe9sek gy\u0171jt\xe9s\xe9hez.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/feedback.md",sourceDirName:".",slug:"/feedback",permalink:"/hu/docs/feedback",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/feedback.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021. 06. 01.",frontMatter:{id:"feedback",title:"Feedback Buttons",sidebar_label:"Feedback Buttons"},sidebar:"docs",previous:{title:"Data Table",permalink:"/hu/docs/data-table"},next:{title:"Gate",permalink:"/hu/docs/gate"}},m=[{value:"Opci\xf3k",id:"opci\xf3k",children:[]},{value:"P\xe9ld\xe1k",id:"p\xe9ld\xe1k",children:[]}],p={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Gombok a felhaszn\xe1l\xf3i visszajelz\xe9sek gy\u0171jt\xe9s\xe9hez."),(0,l.kt)("h2",{id:"opci\xf3k"},"Opci\xf3k"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"confusedMsg")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": a zavaros gomb tooltipj\xe9ben megjelen\xedtend\u0151 \xfczenet. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"feedbackMsg")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": a r\xe9szletes visszajelz\xe9s gomb tooltipj\xe9ben megjelen\xedtend\u0151 \xfczenet. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"understoodMsg")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": a meg\xe9rtett gomb tooltipj\xe9ben megjelen\xedtend\u0151 \xfczenet. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"customFeedback")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy a komponens elfogadja-e az egy\xe9ni visszajelz\xe9st. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"vertical")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),': a gombok f\xfcgg\u0151legesen jelennek meg, ha "igaz"-ra van \xe1ll\xedtva.. Default: ',(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"className")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": oszt\xe1ly neve. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline st\xedlusok. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,l.kt)("h2",{id:"p\xe9ld\xe1k"},"P\xe9ld\xe1k"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Vertical",value:"Vertical"},{label:"Feedback Everywhere",value:"feedbackEverywhere"},{label:"Customized Style and Labels",value:"fullyCustomized"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Panel>\n  A panel with user feedback....\n  <FeedbackButtons\n    id="my_feedback" \n  />\n</Panel>\n'))),(0,l.kt)(o.Z,{value:"Vertical",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Panel>\n  Lorem ipsum....\n  <FeedbackButtons\n    id="my_feedback" \n    vertical\n  />\n</Panel>\n'))),(0,l.kt)(o.Z,{value:"feedbackEverywhere",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Panel style={{ width: 680}}>\n\n<VideoPlayer\n    url="https://youtu.be/Lkj8b25ppZo"\n    controls\n/>\n\n  to get some user feedback....\n  <FeedbackButtons\n    id="my_feedback" \n  />\n\n</Panel>\n'))),(0,l.kt)(o.Z,{value:"fullyCustomized",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Panel>\n  Lorem ipsum....\n  <FeedbackButtons\n    style={{ boxShadow: \'0 0 12px red\' }}\n    id="my_feedback"  \n    feedbackMsg="You can customize the feedback tooltip!"\n    understoodMsg="Tell me you got it!" \n    confusedMsg="Click me if your are confused!" \n  />\n</Panel>\n')))))}f.isMDXComponent=!0},386010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);