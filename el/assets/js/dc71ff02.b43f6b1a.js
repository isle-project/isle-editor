"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3336],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},358215:function(e,t,n){var r=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},855064:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(202784),a=n(79443);var l=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(386010),o="tabItem_1uMI",u="tabItemActive_2DSg";var s=function(e){var t,n=e.lazy,a=e.block,s=e.defaultValue,c=e.values,p=e.groupId,m=e.className,d=r.Children.toArray(e.children),f=null!=c?c:d.map((function(e){return{value:e.props.value,label:e.props.label}})),g=null!=s?s:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,v=l(),k=v.tabGroupChoices,b=v.setTabGroupChoices,N=(0,r.useState)(g),y=N[0],h=N[1],C=[];if(null!=p){var O=k[p];null!=O&&O!==y&&f.some((function(e){return e.value===O}))&&h(O)}var w=function(e){var t=e.currentTarget,n=C.indexOf(t),r=f[n].value;h(r),null!=p&&(b(p,r),setTimeout((function(){var e,n,r,a,l,i,o,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,l=e.right,i=window,o=i.innerHeight,s=i.innerWidth,n>=0&&l<=s&&a<=o&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=C.indexOf(e.target)+1;n=C[r]||C[0];break;case"ArrowLeft":var a=C.indexOf(e.target)-1;n=C[a]||C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},m)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":y===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:x,onFocus:w,onClick:w},null!=n?n:t)}))),n?(0,r.cloneElement)(d.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},79443:function(e,t,n){var r=(0,n(202784).createContext)(void 0);t.Z=r},76415:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var r=n(487462),a=n(263366),l=(n(202784),n(603905)),i=n(855064),o=n(358215),u=["components"],s={id:"r-plot",title:"R Plot",sidebar_label:"R Plot"},c=void 0,p={unversionedId:"r/r-plot",id:"r/r-plot",isDocsHomePage:!1,title:"R Plot",description:"\u03a3\u03c5\u03c3\u03c4\u03b1\u03c4\u03b9\u03ba\u03cc \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03b1\u03c0\u03cc\u03b4\u03bf\u03c3\u03b7 \u03bc\u03b9\u03b1\u03c2 \u03b3\u03c1\u03b1\u03c6\u03b9\u03ba\u03ae\u03c2 \u03c0\u03b1\u03c1\u03ac\u03c3\u03c4\u03b1\u03c3\u03b7\u03c2 R \u03bc\u03ad\u03c3\u03b1 \u03c3\u03b5 \u03ad\u03bd\u03b1 \u03bc\u03ac\u03b8\u03b7\u03bc\u03b1 ISLE.",source:"@site/i18n/el/docusaurus-plugin-content-docs/current/r/plot.md",sourceDirName:"r",slug:"/r/r-plot",permalink:"/el/docs/r/r-plot",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/r/plot.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1/6/2021",frontMatter:{id:"r-plot",title:"R Plot",sidebar_label:"R Plot"},sidebar:"docs",previous:{title:"R Output",permalink:"/el/docs/r/r-output"},next:{title:"R Shell",permalink:"/el/docs/r/r-shell"}},m=[{value:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",children:[]},{value:"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",children:[]}],d={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u03a3\u03c5\u03c3\u03c4\u03b1\u03c4\u03b9\u03ba\u03cc \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03b1\u03c0\u03cc\u03b4\u03bf\u03c3\u03b7 \u03bc\u03b9\u03b1\u03c2 \u03b3\u03c1\u03b1\u03c6\u03b9\u03ba\u03ae\u03c2 \u03c0\u03b1\u03c1\u03ac\u03c3\u03c4\u03b1\u03c3\u03b7\u03c2 R \u03bc\u03ad\u03c3\u03b1 \u03c3\u03b5 \u03ad\u03bd\u03b1 \u03bc\u03ac\u03b8\u03b7\u03bc\u03b1 ISLE."),(0,l.kt)("h2",{id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"},"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"code")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u039a\u03ce\u03b4\u03b9\u03ba\u03b1\u03c2 R \u03b3\u03b9\u03b1 \u03c4\u03b7 \u03b4\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03af\u03b1 \u03c4\u03bf\u03c5 \u03b4\u03b9\u03b1\u03b3\u03c1\u03ac\u03bc\u03bc\u03b1\u03c4\u03bf\u03c2. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"width")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(number|string)"),": \u03c0\u03bb\u03ac\u03c4\u03bf\u03c2 \u03c4\u03bf\u03c5 \u03b4\u03b9\u03b1\u03b3\u03c1\u03ac\u03bc\u03bc\u03b1\u03c4\u03bf\u03c2 (\u03c3\u03b5 px). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"600"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"height")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(number|string)"),": \u03cd\u03c8\u03bf\u03c2 \u03c4\u03bf\u03c5 \u03b4\u03b9\u03b1\u03b3\u03c1\u03ac\u03bc\u03bc\u03b1\u03c4\u03bf\u03c2 (\u03c3\u03b5 px). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'auto'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"draggable")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u03b5\u03bb\u03ad\u03b3\u03c7\u03b5\u03b9 \u03b1\u03bd \u03c4\u03bf \u03b3\u03c1\u03ac\u03c6\u03b7\u03bc\u03b1 \u03b8\u03b1 \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03bc\u03c0\u03bf\u03c1\u03b5\u03af \u03bd\u03b1 \u03bc\u03b5\u03c4\u03b1\u03ba\u03b9\u03bd\u03b7\u03b8\u03b5\u03af. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"fileType")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u03c4\u03cd\u03c0\u03bf\u03c2 \u03b1\u03c1\u03c7\u03b5\u03af\u03bf\u03c5 \u03c4\u03bf\u03c5 \u03b4\u03b9\u03b1\u03b3\u03c1\u03ac\u03bc\u03bc\u03b1\u03c4\u03bf\u03c2 (",(0,l.kt)("inlineCode",{parentName:"li"},"png")," \u03ae ",(0,l.kt)("inlineCode",{parentName:"li"},"svg"),"). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'svg'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"libraries")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array"),': \u0392\u03b9\u03b2\u03bb\u03b9\u03bf\u03b8\u03ae\u03ba\u03b5\u03c2 R \u03c0\u03bf\u03c5 \u03b8\u03b1 \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03c6\u03bf\u03c1\u03c4\u03ce\u03bd\u03bf\u03bd\u03c4\u03b1\u03b9 \u03b1\u03c5\u03c4\u03cc\u03bc\u03b1\u03c4\u03b1 \u03cc\u03c4\u03b1\u03bd \u03b5\u03ba\u03c4\u03b5\u03bb\u03b5\u03af\u03c4\u03b1\u03b9 \u03bf "\u03ba\u03ce\u03b4\u03b9\u03ba\u03b1\u03c2" \u03b5\u03b9\u03c3\u03cc\u03b4\u03bf\u03c5. Default: ',(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"prependCode")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|array)"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"string")," \u03ae \u03bc\u03b9\u03b1 ",(0,l.kt)("inlineCode",{parentName:"li"},"array")," \u03b1\u03c0\u03cc \u03b1\u03c0\u03bf\u03c3\u03c0\u03ac\u03c3\u03bc\u03b1\u03c4\u03b1 \u03ba\u03ce\u03b4\u03b9\u03ba\u03b1 R \u03c0\u03bf\u03c5 \u03b8\u03b1 \u03c0\u03c1\u03bf\u03c3\u03c4\u03b5\u03b8\u03b5\u03af \u03c3\u03c4\u03bf\u03bd \u03ba\u03ce\u03b4\u03b9\u03ba\u03b1 \u03c0\u03bf\u03c5 \u03b5\u03af\u03bd\u03b1\u03b9 \u03b1\u03c0\u03bf\u03b8\u03b7\u03ba\u03b5\u03c5\u03bc\u03ad\u03bd\u03bf\u03c2 \u03c3\u03c4\u03bf ",(0,l.kt)("inlineCode",{parentName:"li"},"code")," \u03ba\u03b1\u03c4\u03ac \u03c4\u03b7\u03bd \u03b1\u03be\u03b9\u03bf\u03bb\u03cc\u03b3\u03b7\u03c3\u03b7. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"meta")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": \u03bc\u03b5\u03c4\u03b1-\u03c0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03af\u03b5\u03c2 \u03b3\u03b9\u03b1 \u03c4\u03bf \u03bf\u03b9\u03ba\u03cc\u03c0\u03b5\u03b4\u03bf. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"className")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u03cc\u03bd\u03bf\u03bc\u03b1 \u03ba\u03bb\u03ac\u03c3\u03b7\u03c2. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onDone")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": callback \u03c0\u03bf\u03c5 \u03ba\u03b1\u03bb\u03b5\u03af\u03c4\u03b1\u03b9 \u03bc\u03b5 \u03c4\u03b1 \u03bf\u03c1\u03af\u03c3\u03bc\u03b1\u03c4\u03b1 ",(0,l.kt)("inlineCode",{parentName:"li"},"err"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"img")," \u03ba\u03b1\u03b9 ",(0,l.kt)("inlineCode",{parentName:"li"},"body")," \u03bc\u03cc\u03bb\u03b9\u03c2 \u03b4\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03b7\u03b8\u03b5\u03af \u03ad\u03bd\u03b1 plot. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onDone() {}"),".")),(0,l.kt)("h2",{id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"},"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Draggable",value:"draggable"},{label:"Custom Dimensions",value:"customDimensions"},{label:"Using Libraries",value:"usingLibraries"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<RPlot code="hist( c(20,50,40,70,40,30) )" />\n'))),(0,l.kt)(o.Z,{value:"draggable",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<RPlot draggable code="hist( c(20,50,40,70,40,30) )" />\n'))),(0,l.kt)(o.Z,{value:"customDimensions",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<RPlot code="hist( c(20,50,40,70,40,30) )" width="900px" />\n'))),(0,l.kt)(o.Z,{value:"usingLibraries",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RPlot \n    libraries={[ 'ggplot2' ]}\n    code=\"qplot(mpg, wt, data = mtcars)\" \n/>\n")))))}f.isMDXComponent=!0},386010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);