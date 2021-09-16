"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8368],{603905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(202784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},358215:function(e,t,r){var n=r(202784);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},855064:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(202784),a=r(79443);var i=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=r(386010),o="tabItem_1uMI",u="tabItemActive_2DSg";var c=function(e){var t,r=e.lazy,a=e.block,c=e.defaultValue,s=e.values,p=e.groupId,m=e.className,d=n.Children.toArray(e.children),f=null!=s?s:d.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=c?c:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,b=i(),h=b.tabGroupChoices,g=b.setTabGroupChoices,y=(0,n.useState)(v),k=y[0],N=y[1],C=[];if(null!=p){var O=h[p];null!=O&&O!==k&&f.some((function(e){return e.value===O}))&&N(O)}var w=function(e){var t=e.currentTarget,r=C.indexOf(t),n=f[r].value;N(n),null!=p&&(g(p,n),setTimeout((function(){var e,r,n,a,i,l,o,c;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,i=e.right,l=window,o=l.innerHeight,c=l.innerWidth,r>=0&&i<=c&&a<=o&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},P=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=C.indexOf(e.target)+1;r=C[n]||C[0];break;case"ArrowLeft":var a=C.indexOf(e.target)-1;r=C[a]||C[C.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},m)},f.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":k===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:P,onFocus:w,onClick:w},null!=r?r:t)}))),r?(0,n.cloneElement)(d.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,r){var n=(0,r(202784).createContext)(void 0);t.Z=n},623881:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var n=r(487462),a=r(263366),i=(r(202784),r(603905)),l=r(855064),o=r(358215),u=["components"],c={id:"piechart",title:"Pie Chart",sidebar_label:"Pie Chart"},s=void 0,p={unversionedId:"plots/piechart",id:"plots/piechart",isDocsHomePage:!1,title:"Pie Chart",description:"\u4e00\u4e2a\u997c\u56fe\u7ec4\u4ef6\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5b83\u663e\u793a\u6240\u9009\u53d8\u91cf\u7684\u6240\u6709\u7c7b\u522b\u7684\u8ba1\u6570\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/plots/piechart.md",sourceDirName:"plots",slug:"/plots/piechart",permalink:"/zh/docs/plots/piechart",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/piechart.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614465855,formattedLastUpdatedAt:"2021/2/27",frontMatter:{id:"piechart",title:"Pie Chart",sidebar_label:"Pie Chart"},sidebar:"docs",previous:{title:"NetworkPlot",permalink:"/zh/docs/plots/network-plot"},next:{title:"QQ Plot",permalink:"/zh/docs/plots/qqplot"}},m=[{value:"\u9009\u9879",id:"\u9009\u9879",children:[]},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[]}],d={toc:m};function f(e){var t=e.components,r=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4e00\u4e2a\u997c\u56fe\u7ec4\u4ef6\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5b83\u663e\u793a\u6240\u9009\u53d8\u91cf\u7684\u6240\u6709\u7c7b\u522b\u7684\u8ba1\u6570\u3002"),(0,i.kt)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"data")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object (required)"),": \u503c\u6570\u7ec4\u5bf9\u8c61. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"variable")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": \u53d8\u91cf\u663e\u793a. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"group")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": \u5206\u7ec4\u53d8\u91cf. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"summaryVariable")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),': \u53ef\u9009\u7684\u53d8\u91cf\uff0c\u6bcf\u4e2a "\u53d8\u91cf "\u7c7b\u522b\u7684\u603b\u548c\u8981\u663e\u793a\u3002. Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,i.kt)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,i.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Grouped",value:"grouped"},{label:"Summary Variable",value:"summaryVariable"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<PieChart \n    data={heartdisease} \n    variable="Drugs"\n/>\n'))),(0,i.kt)(o.Z,{value:"grouped",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<PieChart \n    data={heartdisease} \n    variable="Drugs"\n    group="Gender"\n/>\n'))),(0,i.kt)(o.Z,{value:"summaryVariable",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<PieChart \n    data={heartdisease} \n    variable="Drugs"\n    summaryVariable="Cost"\n/>\n')))))}f.isMDXComponent=!0},386010:function(e,t,r){function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);