"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1521],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,b=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(b,o(o({ref:t},c),{},{components:n})):a.createElement(b,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},358215:function(e,t,n){var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},855064:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(202784),r=n(79443);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(386010),l="tabItem_1uMI",s="tabItemActive_2DSg";var u=function(e){var t,n=e.lazy,r=e.block,u=e.defaultValue,c=e.values,m=e.groupId,p=e.className,d=a.Children.toArray(e.children),b=null!=c?c:d.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=u?u:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,k=i(),v=k.tabGroupChoices,g=k.setTabGroupChoices,h=(0,a.useState)(f),y=h[0],N=h[1],j=[];if(null!=m){var C=v[m];null!=C&&C!==y&&b.some((function(e){return e.value===C}))&&N(C)}var w=function(e){var t=e.currentTarget,n=j.indexOf(t),a=b[n].value;N(a),null!=m&&(g(m,a),setTimeout((function(){var e,n,a,r,i,o,l,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,u=o.innerWidth,n>=0&&i<=u&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=j.indexOf(e.target)+1;n=j[a]||j[0];break;case"ArrowLeft":var r=j.indexOf(e.target)-1;n=j[r]||j[j.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},p)},b.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":y===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:O,onFocus:w,onClick:w},null!=n?n:t)}))),n?(0,a.cloneElement)(d.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},79443:function(e,t,n){var a=(0,n(202784).createContext)(void 0);t.Z=a},861849:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return p},default:function(){return b}});var a=n(487462),r=n(263366),i=(n(202784),n(603905)),o=n(855064),l=n(358215),s=["components"],u={id:"lesson-submit",title:"Lesson Submit",sidebar_label:"Lesson Submit"},c=void 0,m={unversionedId:"lesson-submit",id:"lesson-submit",isDocsHomePage:!1,title:"Lesson Submit",description:"Gumb, ki se prika\u017ee ob koncu u\u010dne ure in na katerega lahko u\u010denci kliknejo. Privzeto je na njihov e-po\u0161tni naslov poslano sporo\u010dilo, ki potrjuje zaklju\u010dek lekcije.",source:"@site/i18n/sl/docusaurus-plugin-content-docs/current/lesson-submit.md",sourceDirName:".",slug:"/lesson-submit",permalink:"/sl/docs/lesson-submit",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/lesson-submit.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. 6. 2021",frontMatter:{id:"lesson-submit",title:"Lesson Submit",sidebar_label:"Lesson Submit"},sidebar:"docs",previous:{title:"Sketchpad",permalink:"/sl/docs/sketchpad"},next:{title:"Video Lecture",permalink:"/sl/docs/video-lecture"}},p=[{value:"Mo\u017enosti",id:"mo\u017enosti",children:[]},{value:"Primeri",id:"primeri",children:[]}],d={toc:p};function b(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Gumb, ki se prika\u017ee ob koncu u\u010dne ure in na katerega lahko u\u010denci kliknejo. Privzeto je na njihov e-po\u0161tni naslov poslano sporo\u010dilo, ki potrjuje zaklju\u010dek lekcije."),(0,i.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"label")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": oznaka gumba za oddajo. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"message")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": sporo\u010dilo za potrditveno e-po\u0161to. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"requireLogin")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": nadzoruje, ali je treba od uporabnika zahtevati prijavo, da je gumb aktiven (za anonimne uporabnike se ne po\u0161lje e-po\u0161tna potrditev).. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"sendConfirmationEmail")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": nadzoruje, ali naj se ob predlo\u017eitvi lekcije po\u0161lje potrditveno e-po\u0161tno sporo\u010dilo.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"className")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": ime razreda. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": Vnosni slogi CSS. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onClick")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": povratni klic, ki se spro\u017ei ob kliku na gumb za oddajo.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onClick() {}"),".")),(0,i.kt)("h2",{id:"primeri"},"Primeri"),(0,i.kt)(o.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Custom Label",value:"customLabel"},{label:"Email Feedback",value:"emailFeedback"},{label:"With Callback",value:"withCallback"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LessonSubmit />\n"))),(0,i.kt)(l.Z,{value:"customLabel",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<LessonSubmit label="Click to submit" />\n'))),(0,i.kt)(l.Z,{value:"withEmail",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LessonSubmit \n    style={{ outline: '4px solid black'}}\n    message={`\n    Hi,\n    I am very glad that you solved this lesson. Congratulations! \n    It was a sophisticated one.\n    If you want some help how to use ISLE, have a look a \n    [this site](https://isledocs.com/docs/)\n    \n    Best\n    The ISLE team\n    `}\n    label=\"Click to submit\" />\n"))),(0,i.kt)(l.Z,{value:"withCallback",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LessonSubmit \n    requireLogin={false}\n    onClick={() => {\n        alert( 'The Button has been clicked...' );\n    }}\n    label=\"Click to submit\" />\n")))))}b.isMDXComponent=!0},386010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);