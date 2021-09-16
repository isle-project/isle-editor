"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1191],{603905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(202784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},358215:function(e,t,r){var n=r(202784);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},855064:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(202784),a=r(79443);var i=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=r(386010),o="tabItem_1uMI",u="tabItemActive_2DSg";var s=function(e){var t,r=e.lazy,a=e.block,s=e.defaultValue,c=e.values,p=e.groupId,m=e.className,d=n.Children.toArray(e.children),f=null!=c?c:d.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=s?s:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,b=i(),y=b.tabGroupChoices,k=b.setTabGroupChoices,g=(0,n.useState)(v),h=g[0],N=g[1],O=[];if(null!=p){var j=y[p];null!=j&&j!==h&&f.some((function(e){return e.value===j}))&&N(j)}var w=function(e){var t=e.currentTarget,r=O.indexOf(t),n=f[r].value;N(n),null!=p&&(k(p,n),setTimeout((function(){var e,r,n,a,i,l,o,s;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,i=e.right,l=window,o=l.innerHeight,s=l.innerWidth,r>=0&&i<=s&&a<=o&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},x=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=O.indexOf(e.target)+1;r=O[n]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.target)-1;r=O[a]||O[O.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},m)},f.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":h===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:x,onFocus:w,onClick:w},null!=r?r:t)}))),r?(0,n.cloneElement)(d.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},79443:function(e,t,r){var n=(0,r(202784).createContext)(void 0);t.Z=n},688049:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var n=r(487462),a=r(263366),i=(r(202784),r(603905)),l=r(855064),o=r(358215),u=["components"],s={id:"r-help",title:"R Help",sidebar_label:"R Help"},c=void 0,p={unversionedId:"r/r-help",id:"r/r-help",isDocsHomePage:!1,title:"R Help",description:"Padarykite taip, kad paspaudus \u017eod\u017eius modaliniame lange b\u016bt\u0173 i\u0161traukiama R dokumentacija.",source:"@site/i18n/lt/docusaurus-plugin-content-docs/current/r/help.md",sourceDirName:"r",slug:"/r/r-help",permalink:"/lt/docs/r/r-help",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/r/help.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021-06-01",frontMatter:{id:"r-help",title:"R Help",sidebar_label:"R Help"},sidebar:"docs",previous:{title:"Proportions Survey",permalink:"/lt/docs/proportions-survey"},next:{title:"R Output",permalink:"/lt/docs/r/r-output"}},m=[{value:"Parinktys",id:"parinktys",children:[]},{value:"Pavyzd\u017eiai",id:"pavyzd\u017eiai",children:[]}],d={toc:m};function f(e){var t=e.components,r=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Padarykite taip, kad paspaudus \u017eod\u017eius modaliniame lange b\u016bt\u0173 i\u0161traukiama R dokumentacija."),(0,i.kt)("h2",{id:"parinktys"},"Parinktys"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"func")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"R funkcijos, kurios dokumentacij\u0105 reikia atverti, pavadinimas. Jei nepateikiama, laikoma, kad "),"RHelp",(0,i.kt)("inlineCode",{parentName:"li"},"\u017eym\u0117s turinys yra lygus funkcijos pavadinimui. Default:"),"''`."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"library")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": R paketo, kuriame yra funkcija, pavadinimas.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'base'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"visible")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroliuoja, ar paleidimo metu turi b\u016bti atidarytas pagalbos modalinis langas.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,i.kt)("h2",{id:"pavyzd\u017eiai"},"Pavyzd\u017eiai"),(0,i.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"From Library",value:"otherLibrary"},{label:"Visible on Startup",value:"visible"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<span><RHelp>sum</RHelp> is used to sum the elements of a vector.</span>\n"))),(0,i.kt)(o.Z,{value:"otherLibrary",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<span><RHelp library="graphics">hist</RHelp> is used to create a histogram.</span>\n'))),(0,i.kt)(o.Z,{value:"visible",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<span><RHelp visible={true} >sum</RHelp> is used to sum the elements of a vector.</span>\n")))))}f.isMDXComponent=!0},386010:function(e,t,r){function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);