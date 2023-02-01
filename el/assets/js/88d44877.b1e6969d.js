"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[82834],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(n),k=r,c=u["".concat(p,".").concat(k)]||u[k]||d[k]||i;return n?a.createElement(c,l(l({ref:t},s),{},{components:n})):a.createElement(c,l({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},690622:function(e,t,n){n.r(t),n.d(t,{assets:function(){return N},contentTitle:function(){return k},default:function(){return v},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return f}});var a=n(603905),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))m.call(t,n)&&s(e,n,t[n]);return e};const d={id:"data-explorer",title:"Data Explorer",sidebar_label:"Data Explorer"},k=void 0,c={unversionedId:"data-explorer",id:"data-explorer",title:"Data Explorer",description:"\u0391\u03c5\u03c4\u03cc \u03c4\u03bf \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03b5\u03af\u03c4\u03b1\u03b9 \u03b1\u03c0\u03cc \u03c4\u03bf\u03c5\u03c2 \u03bc\u03b1\u03b8\u03b7\u03c4\u03ad\u03c2 \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03c3\u03c5\u03bd\u03bf\u03c8\u03af\u03b6\u03bf\u03c5\u03bd \u03b5\u03bd \u03c3\u03c5\u03bd\u03c4\u03bf\u03bc\u03af\u03b1 \u03c4\u03b1 \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03b1 \u03c0\u03bf\u03c5 \u03c0\u03b1\u03c1\u03bf\u03c5\u03c3\u03b9\u03ac\u03b6\u03bf\u03bd\u03c4\u03b1\u03b9 \u03ba\u03b1\u03b9 \u03bd\u03b1 \u03b5\u03ba\u03c4\u03b5\u03bb\u03bf\u03cd\u03bd \u03b4\u03b9\u03ac\u03c6\u03bf\u03c1\u03b5\u03c2 \u03c3\u03c4\u03b1\u03c4\u03b9\u03c3\u03c4\u03b9\u03ba\u03ad\u03c2 \u03b4\u03bf\u03ba\u03b9\u03bc\u03ad\u03c2.",source:"@site/i18n/el/docusaurus-plugin-content-docs/current/data-explorer.md",sourceDirName:".",slug:"/data-explorer",permalink:"/el/docs/data-explorer",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/data-explorer.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1638825940,formattedLastUpdatedAt:"6 \u0394\u03b5\u03ba 2021",frontMatter:{id:"data-explorer",title:"Data Explorer",sidebar_label:"Data Explorer"},sidebar:"docs",previous:{title:"Classroom Use",permalink:"/el/docs/tutorials/classroom-use"},next:{title:"Data Table",permalink:"/el/docs/data-table"}},N={},f=[{value:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",level:2},{value:"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",level:2}],g=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",u({},t))},C=g("TextEditor"),b=g("DataTable"),y={toc:f};function v(e){var t,n=e,{components:r}=n,s=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&m.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},y),s),i(t,l({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\u0391\u03c5\u03c4\u03cc \u03c4\u03bf \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03b5\u03af\u03c4\u03b1\u03b9 \u03b1\u03c0\u03cc \u03c4\u03bf\u03c5\u03c2 \u03bc\u03b1\u03b8\u03b7\u03c4\u03ad\u03c2 \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03c3\u03c5\u03bd\u03bf\u03c8\u03af\u03b6\u03bf\u03c5\u03bd \u03b5\u03bd \u03c3\u03c5\u03bd\u03c4\u03bf\u03bc\u03af\u03b1 \u03c4\u03b1 \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03b1 \u03c0\u03bf\u03c5 \u03c0\u03b1\u03c1\u03bf\u03c5\u03c3\u03b9\u03ac\u03b6\u03bf\u03bd\u03c4\u03b1\u03b9 \u03ba\u03b1\u03b9 \u03bd\u03b1 \u03b5\u03ba\u03c4\u03b5\u03bb\u03bf\u03cd\u03bd \u03b4\u03b9\u03ac\u03c6\u03bf\u03c1\u03b5\u03c2 \u03c3\u03c4\u03b1\u03c4\u03b9\u03c3\u03c4\u03b9\u03ba\u03ad\u03c2 \u03b4\u03bf\u03ba\u03b9\u03bc\u03ad\u03c2."),(0,a.kt)("h2",u({},{id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"}),"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"categorical")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),": \u03c0\u03af\u03bd\u03b1\u03ba\u03b1\u03c2 \u03c3\u03c5\u03bc\u03b2\u03bf\u03bb\u03bf\u03c3\u03b5\u03b9\u03c1\u03ce\u03bd \u03c0\u03bf\u03c5 \u03c5\u03c0\u03bf\u03b4\u03b5\u03b9\u03ba\u03bd\u03cd\u03b5\u03b9 \u03c4\u03bf \u03cc\u03bd\u03bf\u03bc\u03b1 \u03ba\u03ac\u03b8\u03b5 \u03ba\u03b1\u03c4\u03b7\u03b3\u03bf\u03c1\u03b9\u03ba\u03ae\u03c2 \u03bc\u03b5\u03c4\u03b1\u03b2\u03bb\u03b7\u03c4\u03ae\u03c2. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"quantitative")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),": \u03c0\u03af\u03bd\u03b1\u03ba\u03b1\u03c2 \u03c3\u03c5\u03bc\u03b2\u03bf\u03bb\u03bf\u03c3\u03b5\u03b9\u03c1\u03ce\u03bd \u03c0\u03bf\u03c5 \u03c5\u03c0\u03bf\u03b4\u03b5\u03b9\u03ba\u03bd\u03cd\u03b5\u03b9 \u03c4\u03bf \u03cc\u03bd\u03bf\u03bc\u03b1 \u03ba\u03ac\u03b8\u03b5 \u03c0\u03bf\u03c3\u03bf\u03c4\u03b9\u03ba\u03ae\u03c2 \u03bc\u03b5\u03c4\u03b1\u03b2\u03bb\u03b7\u03c4\u03ae\u03c2. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"data")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03c9\u03bd \u03ae \u03c3\u03c5\u03c3\u03c4\u03bf\u03b9\u03c7\u03af\u03b1 \u03c0\u03bf\u03c5 \u03b8\u03b1 \u03c0\u03c1\u03bf\u03b2\u03bb\u03b7\u03b8\u03b5\u03af. \u0395\u03ac\u03bd \u03c0\u03c1\u03cc\u03ba\u03b5\u03b9\u03c4\u03b1\u03b9 \u03b3\u03b9\u03b1 \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf, \u03c4\u03b1 \u03ba\u03bb\u03b5\u03b9\u03b4\u03b9\u03ac \u03b1\u03bd\u03c4\u03b9\u03c3\u03c4\u03bf\u03b9\u03c7\u03bf\u03cd\u03bd \u03c3\u03c4\u03b9\u03c2 \u03c4\u03b9\u03bc\u03ad\u03c2 \u03c4\u03c9\u03bd \u03c3\u03c4\u03b7\u03bb\u03ce\u03bd, \u03b5\u03bd\u03ce \u03ad\u03bd\u03b1\u03c2 \u03c0\u03af\u03bd\u03b1\u03ba\u03b1\u03c2 \u03b8\u03b1 \u03c0\u03b5\u03c1\u03b9\u03bc\u03ad\u03bd\u03b5\u03b9 \u03ad\u03bd\u03b1\u03bd \u03c0\u03af\u03bd\u03b1\u03ba\u03b1 \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03b9\u03bc\u03ad\u03bd\u03c9\u03bd \u03bc\u03b5 \u03ad\u03bd\u03b1 \u03bf\u03bd\u03bf\u03bc\u03b1\u03c3\u03c4\u03b9\u03ba\u03cc \u03c0\u03b5\u03b4\u03af\u03bf \u03c0\u03bf\u03c5 \u03b1\u03bd\u03c4\u03b9\u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af \u03c3\u03b5 \u03ba\u03ac\u03b8\u03b5 \u03c3\u03c4\u03ae\u03bb\u03b7. \u0391\u03bd \u03b8\u03ad\u03bb\u03b5\u03c4\u03b5 \u03bd\u03b1 \u03b5\u03c0\u03b9\u03c4\u03c1\u03ad\u03c8\u03b5\u03c4\u03b5 \u03c3\u03c4\u03bf\u03c5\u03c2 \u03bc\u03b1\u03b8\u03b7\u03c4\u03ad\u03c2 \u03bd\u03b1 \u03b5\u03b9\u03c3\u03ac\u03b3\u03bf\u03c5\u03bd \u03ad\u03bd\u03b1 \u03b1\u03c1\u03c7\u03b5\u03af\u03bf ",(0,a.kt)("inlineCode",{parentName:"li"},".csv"),", \u03bf\u03c1\u03af\u03c3\u03c4\u03b5 \u03c4\u03b7\u03bd \u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae ",(0,a.kt)("inlineCode",{parentName:"li"},"data")," \u03c3\u03b5 ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),".. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"dataInfo")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03c0\u03bf\u03c5 \u03c0\u03b5\u03c1\u03b9\u03ad\u03c7\u03b5\u03b9 \u03c4\u03b1 \u03ba\u03bb\u03b5\u03b9\u03b4\u03b9\u03ac \\'name\\', \u03c4\u03bf\u03c5 \u03bf\u03c0\u03bf\u03af\u03bf\u03c5 \u03b7 \u03c4\u03b9\u03bc\u03ae \u03b5\u03af\u03bd\u03b1\u03b9 \u03bc\u03b9\u03b1 \u03c3\u03c5\u03bc\u03b2\u03bf\u03bb\u03bf\u03c3\u03b5\u03b9\u03c1\u03ac, \\'info\\', \u03c4\u03bf\u03c5 \u03bf\u03c0\u03bf\u03af\u03bf\u03c5 \u03b7 \u03c4\u03b9\u03bc\u03ae \u03b5\u03af\u03bd\u03b1\u03b9 \u03ad\u03bd\u03b1\u03c2 \u03c0\u03af\u03bd\u03b1\u03ba\u03b1\u03c2 \u03c3\u03c5\u03bc\u03b2\u03bf\u03bb\u03bf\u03c3\u03b5\u03b9\u03c1\u03ce\u03bd \u03c3\u03c4\u03bf\u03bd \u03bf\u03c0\u03bf\u03af\u03bf \u03ba\u03ac\u03b8\u03b5 \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf \u03c4\u03bf\u03c5 \u03c0\u03af\u03bd\u03b1\u03ba\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03bc\u03b9\u03b1 \u03bd\u03ad\u03b1 \u03b3\u03c1\u03b1\u03bc\u03bc\u03ae \u03ba\u03b1\u03b9 \\'variables\\', \u03ad\u03bd\u03b1 \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03bc\u03b5 \u03ba\u03bb\u03b5\u03b9\u03b4\u03b9\u03ac \u03c9\u03c2 \u03bf\u03bd\u03cc\u03bc\u03b1\u03c4\u03b1 \u03bc\u03b5\u03c4\u03b1\u03b2\u03bb\u03b7\u03c4\u03ce\u03bd \u03ba\u03b1\u03b9 \u03c4\u03b9\u03bc\u03ad\u03c2 \u03c9\u03c2 \u03c0\u03b5\u03c1\u03b9\u03b3\u03c1\u03b1\u03c6\u03ad\u03c2 \u03bc\u03b5\u03c4\u03b1\u03b2\u03bb\u03b7\u03c4\u03ce\u03bd.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{\n  'info': '',\n  'name': '',\n  'variables': null,\n  'showOnStartup': false\n}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"editor")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": boolean \u03c0\u03bf\u03c5 \u03c5\u03c0\u03bf\u03b4\u03b5\u03b9\u03ba\u03bd\u03cd\u03b5\u03b9 \u03b1\u03bd \u03b8\u03b1 \u03b5\u03bc\u03c6\u03b1\u03bd\u03b9\u03c3\u03c4\u03b5\u03af \u03bf \u03c3\u03c5\u03bd\u03c4\u03ac\u03ba\u03c4\u03b7\u03c2 \u03c3\u03c4\u03bf \u03c7\u03c1\u03ae\u03c3\u03c4\u03b7. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"editorProps")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03c4\u03c9\u03bd \u03b9\u03b4\u03b9\u03bf\u03c4\u03ae\u03c4\u03c9\u03bd \u03c0\u03bf\u03c5 \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03bc\u03b5\u03c4\u03b1\u03b2\u03b9\u03b2\u03b1\u03c3\u03c4\u03bf\u03cd\u03bd \u03c3\u03c4\u03bf\u03bd ",(0,a.kt)("inlineCode",{parentName:"li"},"TextEditor")," (\u03b4\u03b5\u03af\u03c4\u03b5 \u03c4\u03b7\u03bd \u03c4\u03b5\u03ba\u03bc\u03b7\u03c1\u03af\u03c9\u03c3\u03b7 \u03b3\u03b9\u03b1 ",(0,a.kt)(C,{mdxType:"TextEditor"}),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"editorTitle")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \u03c3\u03c5\u03bc\u03b2\u03bf\u03bb\u03bf\u03c3\u03b5\u03b9\u03c1\u03ac \u03c0\u03bf\u03c5 \u03c5\u03c0\u03bf\u03b4\u03b5\u03b9\u03ba\u03bd\u03cd\u03b5\u03b9 \u03c4\u03bf\u03bd \u03c4\u03af\u03c4\u03bb\u03bf \u03c4\u03bf\u03c5 \u03b5\u03be\u03b5\u03c1\u03b5\u03c5\u03bd\u03b7\u03c4\u03ae \u03c0\u03bf\u03c5 \u03b8\u03b1 \u03b5\u03bc\u03c6\u03b1\u03bd\u03b9\u03c3\u03c4\u03b5\u03af. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"dataTable")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": boolean \u03c4\u03b9\u03bc\u03ae \u03c0\u03bf\u03c5 \u03c5\u03c0\u03bf\u03b4\u03b5\u03b9\u03ba\u03bd\u03cd\u03b5\u03b9 \u03b1\u03bd \u03b8\u03b1 \u03b1\u03c0\u03bf\u03ba\u03c1\u03cd\u03c8\u03b5\u03c4\u03b5 \u03c4\u03bf\u03bd \u03c0\u03af\u03bd\u03b1\u03ba\u03b1 \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03c9\u03bd \u03b1\u03c0\u03cc \u03c4\u03b7\u03bd \u03c0\u03c1\u03bf\u03b2\u03bf\u03bb\u03ae. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"dataTableProps")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": \u03b9\u03b4\u03b9\u03cc\u03c4\u03b7\u03c4\u03b5\u03c2 \u03c0\u03bf\u03c5 \u03bc\u03b5\u03c4\u03b1\u03b2\u03b9\u03b2\u03ac\u03b6\u03bf\u03bd\u03c4\u03b1\u03b9 \u03c3\u03c4\u03bf \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf \u03c0\u03af\u03bd\u03b1\u03ba\u03b1 \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03c9\u03bd (\u03b2\u03bb. \u03c4\u03b5\u03ba\u03bc\u03b7\u03c1\u03af\u03c9\u03c3\u03b7 \u03b3\u03b9\u03b1 ",(0,a.kt)(b,{mdxType:"DataTable"}),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"history")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u03b5\u03bb\u03ad\u03b3\u03c7\u03b5\u03b9 \u03b1\u03bd \u03b8\u03b1 \u03b5\u03bc\u03c6\u03b1\u03bd\u03af\u03b6\u03b5\u03c4\u03b1\u03b9 \u03b1\u03c1\u03c7\u03b5\u03af\u03bf \u03ba\u03b1\u03c4\u03b1\u03b3\u03c1\u03b1\u03c6\u03ae\u03c2 \u03b9\u03c3\u03c4\u03bf\u03c1\u03b9\u03ba\u03bf\u03cd \u03c4\u03c9\u03bd \u03b5\u03bd\u03b5\u03c1\u03b3\u03b5\u03b9\u03ce\u03bd \u03c0\u03bf\u03c5 \u03ad\u03c7\u03bf\u03c5\u03bd \u03b5\u03ba\u03c4\u03b5\u03bb\u03b5\u03c3\u03c4\u03b5\u03af. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"reportMode")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \u03b5\u03bb\u03ad\u03b3\u03c7\u03b5\u03b9 \u03b1\u03bd \u03b8\u03b1 \u03c3\u03c5\u03b3\u03c7\u03c1\u03bf\u03bd\u03af\u03b6\u03bf\u03bd\u03c4\u03b1\u03b9 \u03bf\u03b9 \u03b1\u03bb\u03bb\u03b1\u03b3\u03ad\u03c2 \u03c4\u03bf\u03c5 \u03c3\u03c5\u03bd\u03c4\u03ac\u03ba\u03c4\u03b7 \u03b3\u03b9\u03b1 \u03cc\u03bb\u03bf\u03c5\u03c2 (",(0,a.kt)("inlineCode",{parentName:"li"},"collaborative"),"), \u03b3\u03b9\u03b1 \u03cc\u03bb\u03bf\u03c5\u03c2 \u03c4\u03bf\u03c5\u03c2 \u03c7\u03c1\u03ae\u03c3\u03c4\u03b5\u03c2 \u03c3\u03b5 \u03bf\u03bc\u03ac\u03b4\u03b5\u03c2 (",(0,a.kt)("inlineCode",{parentName:"li"},"group"),") \u03ae \u03cc\u03c7\u03b9 (",(0,a.kt)("inlineCode",{parentName:"li"},"individual"),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'individual'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"histogramDensities")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": boolean \u03c4\u03b9\u03bc\u03ae \u03c0\u03bf\u03c5 \u03c5\u03c0\u03bf\u03b4\u03b5\u03b9\u03ba\u03bd\u03cd\u03b5\u03b9 \u03b1\u03bd \u03b8\u03b1 \u03b5\u03bc\u03c6\u03b1\u03bd\u03af\u03b6\u03bf\u03bd\u03c4\u03b1\u03b9 \u03bf\u03b9 \u03c0\u03c5\u03ba\u03bd\u03cc\u03c4\u03b7\u03c4\u03b5\u03c2 \u03c4\u03bf\u03c5 \u03b9\u03c3\u03c4\u03bf\u03b3\u03c1\u03ac\u03bc\u03bc\u03b1\u03c4\u03bf\u03c2. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"models")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),": \u03c0\u03af\u03bd\u03b1\u03ba\u03b1\u03c2 \u03c3\u03c5\u03bc\u03b2\u03bf\u03bb\u03bf\u03c3\u03b5\u03b9\u03c1\u03ce\u03bd \u03c0\u03bf\u03c5 \u03c5\u03c0\u03bf\u03b4\u03b5\u03b9\u03ba\u03bd\u03cd\u03bf\u03c5\u03bd \u03c4\u03b1 \u03bc\u03bf\u03bd\u03c4\u03ad\u03bb\u03b1 \u03c0\u03bf\u03c5 \u03bc\u03c0\u03bf\u03c1\u03bf\u03cd\u03bd \u03bd\u03b1 \u03c0\u03c1\u03bf\u03c3\u03b1\u03c1\u03bc\u03bf\u03c3\u03c4\u03bf\u03cd\u03bd \u03c3\u03c4\u03b1 \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03b1. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[\n  'Simple Linear Regression',\n  'Multiple Linear Regression',\n  'LASSO',\n  'Decision Tree',\n  'Random Forest',\n  'Logistic Regression',\n  'Naive Bayes',\n  'PCA',\n  'Hierarchical Clustering',\n  'kmeans'\n]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"opened")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \u03c3\u03b5\u03bb\u03af\u03b4\u03b1 \u03c0\u03bf\u03c5 \u03b1\u03bd\u03bf\u03af\u03b3\u03b5\u03b9 \u03ba\u03b1\u03c4\u03ac \u03c4\u03b7\u03bd \u03b5\u03ba\u03ba\u03af\u03bd\u03b7\u03c3\u03b7. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"plots")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),": \u03c0\u03af\u03bd\u03b1\u03ba\u03b1\u03c2 \u03c3\u03c5\u03bc\u03b2\u03bf\u03bb\u03bf\u03c3\u03b5\u03b9\u03c1\u03ce\u03bd \u03c0\u03bf\u03c5 \u03c5\u03c0\u03bf\u03b4\u03b5\u03b9\u03ba\u03bd\u03cd\u03bf\u03c5\u03bd \u03c0\u03bf\u03b9\u03b1 \u03b4\u03b9\u03b1\u03b3\u03c1\u03ac\u03bc\u03bc\u03b1\u03c4\u03b1 \u03b8\u03b1 \u03b5\u03bc\u03c6\u03b1\u03bd\u03b9\u03c3\u03c4\u03bf\u03cd\u03bd \u03c3\u03c4\u03bf \u03c7\u03c1\u03ae\u03c3\u03c4\u03b7. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[\n  'Bar Chart',\n  'Pie Chart',\n  'Mosaic Plot',\n  'Histogram',\n  'Interval Plot',\n  'Box Plot',\n  'Line Plot',\n  'Scatterplot',\n  'Scatterplot Matrix',\n  'Heat Map',\n  'Contour Chart',\n  'Violin Plot',\n  'QQ Plot'\n]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"questions")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(array|object)"),": \u03c3\u03c5\u03c3\u03c4\u03bf\u03b9\u03c7\u03af\u03b1 \u03ba\u03cc\u03bc\u03b2\u03c9\u03bd \u03bc\u03b5 \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03b1 \u03ba\u03b5\u03b9\u03bc\u03ad\u03bd\u03bf\u03c5 \u03ba\u03b1\u03b9 \u03b5\u03c1\u03c9\u03c4\u03ae\u03c3\u03b5\u03c9\u03bd \u03c0\u03bf\u03c5 \u03b8\u03b1 \u03b5\u03bc\u03c6\u03b1\u03bd\u03af\u03b6\u03bf\u03bd\u03c4\u03b1\u03b9 \u03c3\u03b5 \u03bc\u03b9\u03b1 \u03ba\u03b1\u03c1\u03c4\u03ad\u03bb\u03b1 ",(0,a.kt)("inlineCode",{parentName:"li"},"questions")," \u03ae \u03ad\u03bd\u03b1 \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03b9\u03b4\u03b9\u03bf\u03c4\u03ae\u03c4\u03c9\u03bd \u03c0\u03bf\u03c5 \u03bc\u03b5\u03c4\u03b1\u03b2\u03b9\u03b2\u03ac\u03b6\u03b5\u03c4\u03b1\u03b9 \u03c3\u03b5 \u03bc\u03b9\u03b1 \u03c5\u03c0\u03bf\u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03b7 ",(0,a.kt)("inlineCode",{parentName:"li"},"<Pages />")," \u03c3\u03c5\u03c3\u03c4\u03b1\u03c4\u03b9\u03ba\u03cc. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"showTestDecisions")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": boolean \u03c0\u03bf\u03c5 \u03c5\u03c0\u03bf\u03b4\u03b5\u03b9\u03ba\u03bd\u03cd\u03b5\u03b9 \u03b1\u03bd \u03b8\u03b1 \u03b5\u03bc\u03c6\u03b1\u03bd\u03af\u03b6\u03bf\u03bd\u03c4\u03b1\u03b9 \u03bf\u03b9 \u03b1\u03c0\u03bf\u03c6\u03ac\u03c3\u03b5\u03b9\u03c2 \u03c0\u03bf\u03c5 \u03bb\u03b1\u03bc\u03b2\u03ac\u03bd\u03bf\u03bd\u03c4\u03b1\u03b9 \u03b3\u03b9\u03b1 \u03ba\u03ac\u03b8\u03b5 \u03b4\u03bf\u03ba\u03b9\u03bc\u03ae \u03bc\u03b5 \u03b2\u03ac\u03c3\u03b7 \u03c4\u03b9\u03c2 \u03c5\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03bc\u03ad\u03bd\u03b5\u03c2 \u03c4\u03b9\u03bc\u03ad\u03c2 p-values. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"statistics")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),": \u03c0\u03af\u03bd\u03b1\u03ba\u03b1\u03c2 \u03c3\u03c5\u03bc\u03b2\u03bf\u03bb\u03bf\u03c3\u03b5\u03b9\u03c1\u03ce\u03bd \u03c0\u03bf\u03c5 \u03c5\u03c0\u03bf\u03b4\u03b5\u03b9\u03ba\u03bd\u03cd\u03b5\u03b9 \u03c0\u03bf\u03b9\u03b5\u03c2 \u03c3\u03c5\u03bd\u03bf\u03c0\u03c4\u03b9\u03ba\u03ad\u03c2 \u03c3\u03c4\u03b1\u03c4\u03b9\u03c3\u03c4\u03b9\u03ba\u03ad\u03c2 \u03bc\u03c0\u03bf\u03c1\u03bf\u03cd\u03bd \u03bd\u03b1 \u03c5\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03c4\u03bf\u03cd\u03bd. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[\n  'Mean',\n  'Median',\n  'Min',\n  'Max',\n  'Range',\n  'Interquartile Range',\n  'Standard Deviation',\n  'Variance',\n  'Correlation',\n  'Correlation Matrix',\n  'Skewness',\n  'Excess Kurtosis',\n  'First Quartile',\n  'Third Quartile',\n  'Quantile',\n  'Five-Number Summary'\n]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": \u03a3\u03c4\u03c5\u03bb CSS inline \u03b3\u03b9\u03b1 \u03c4\u03bf \u03ba\u03cd\u03c1\u03b9\u03bf \u03b4\u03bf\u03c7\u03b5\u03af\u03bf. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"tables")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),": \u03c0\u03af\u03bd\u03b1\u03ba\u03b1\u03c2 \u03c3\u03c5\u03bc\u03b2\u03bf\u03bb\u03bf\u03c3\u03b5\u03b9\u03c1\u03ce\u03bd \u03c0\u03bf\u03c5 \u03c5\u03c0\u03bf\u03b4\u03b5\u03b9\u03ba\u03bd\u03cd\u03b5\u03b9 \u03c0\u03bf\u03b9\u03bf\u03b9 \u03c0\u03af\u03bd\u03b1\u03ba\u03b5\u03c2 \u03bc\u03c0\u03bf\u03c1\u03bf\u03cd\u03bd \u03bd\u03b1 \u03b4\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03b7\u03b8\u03bf\u03cd\u03bd \u03b1\u03c0\u03cc \u03c4\u03b1 \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03b1. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[\n  'Frequency Table',\n  'Contingency Table'\n]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"tabs")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),": \u03c3\u03c5\u03c3\u03c4\u03bf\u03b9\u03c7\u03af\u03b1 \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03b9\u03bc\u03ad\u03bd\u03c9\u03bd \u03ba\u03b1\u03b9 \u03ba\u03bb\u03b5\u03b9\u03b4\u03b9\u03ce\u03bd \u03c0\u03bf\u03c5 \u03c5\u03c0\u03bf\u03b4\u03b5\u03b9\u03ba\u03bd\u03cd\u03bf\u03c5\u03bd \u03c4\u03c5\u03c7\u03cc\u03bd \u03c0\u03c1\u03bf\u03c3\u03b1\u03c1\u03bc\u03bf\u03c3\u03bc\u03ad\u03bd\u03b5\u03c2 \u03ba\u03b1\u03c1\u03c4\u03ad\u03bb\u03b5\u03c2 \u03c0\u03c1\u03bf\u03c2 \u03c0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"tests")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),": \u03c0\u03af\u03bd\u03b1\u03ba\u03b1\u03c2 \u03c3\u03c5\u03bc\u03b2\u03bf\u03bb\u03bf\u03c3\u03b5\u03b9\u03c1\u03ce\u03bd \u03c0\u03bf\u03c5 \u03c5\u03c0\u03bf\u03b4\u03b5\u03b9\u03ba\u03bd\u03cd\u03b5\u03b9 \u03c0\u03bf\u03b9\u03b5\u03c2 \u03b4\u03bf\u03ba\u03b9\u03bc\u03ad\u03c2 \u03c5\u03c0\u03bf\u03b8\u03ad\u03c3\u03b5\u03c9\u03bd \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03c3\u03c5\u03bc\u03c0\u03b5\u03c1\u03b9\u03bb\u03b7\u03c6\u03b8\u03bf\u03cd\u03bd. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[\n  'One-Sample Mean Test',\n  'Two-Sample Mean Test',\n  'One-Way ANOVA',\n  'One-Sample Proportion Test',\n  'Two-Sample Proportion Test',\n  'Correlation Test',\n  'Chi-square Independence Test',\n  'Kruskal-Wallis Test'\n]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"transformer")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": boolean \u03c0\u03bf\u03c5 \u03c5\u03c0\u03bf\u03b4\u03b5\u03b9\u03ba\u03bd\u03cd\u03b5\u03b9 \u03b1\u03bd \u03b8\u03b1 \u03b5\u03bc\u03c6\u03b1\u03bd\u03b9\u03c3\u03c4\u03bf\u03cd\u03bd \u03c4\u03b1 \u03b5\u03c1\u03b3\u03b1\u03bb\u03b5\u03af\u03b1 \u03bc\u03b5\u03c4\u03b1\u03c3\u03c7\u03b7\u03bc\u03b1\u03c4\u03b9\u03c3\u03bc\u03bf\u03cd \u03bc\u03b5\u03c4\u03b1\u03b2\u03bb\u03b7\u03c4\u03ce\u03bd. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onTutorialCompletion")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": \u03c3\u03c5\u03bd\u03ac\u03c1\u03c4\u03b7\u03c3\u03b7 \u03c0\u03bf\u03c5 \u03ba\u03b1\u03bb\u03b5\u03af\u03c4\u03b1\u03b9 \u03cc\u03c4\u03b1\u03bd \u03bf \u03c7\u03c1\u03ae\u03c3\u03c4\u03b7\u03c2 \u03ad\u03c7\u03b5\u03b9 \u03bf\u03bb\u03bf\u03ba\u03bb\u03b7\u03c1\u03ce\u03c3\u03b5\u03b9 \u03c4\u03bf \u03c3\u03b5\u03bc\u03b9\u03bd\u03ac\u03c1\u03b9\u03bf \u03b5\u03be\u03b5\u03c1\u03b5\u03cd\u03bd\u03b7\u03c3\u03b7\u03c2 \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03c9\u03bd. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onTutorialCompletion() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onTutorialStart")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": \u03c3\u03c5\u03bd\u03ac\u03c1\u03c4\u03b7\u03c3\u03b7 \u03c0\u03bf\u03c5 \u03ba\u03b1\u03bb\u03b5\u03af\u03c4\u03b1\u03b9 \u03cc\u03c4\u03b1\u03bd \u03bf \u03c7\u03c1\u03ae\u03c3\u03c4\u03b7\u03c2 \u03be\u03b5\u03ba\u03b9\u03bd\u03ac \u03c4\u03bf \u03c3\u03b5\u03bc\u03b9\u03bd\u03ac\u03c1\u03b9\u03bf \u03b5\u03be\u03b5\u03c1\u03b5\u03cd\u03bd\u03b7\u03c3\u03b7\u03c2 \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03c9\u03bd. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onTutorialStart() {}"),".")),(0,a.kt)("h2",u({},{id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"}),"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"),(0,a.kt)("p",null,"In creating a data explorer, one needs a ",(0,a.kt)("em",{parentName:"p"},".json dataset. This step may be accomplished by including the following in the header of a "),".isle file:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),'require:\n    dataName: "./dataName.json"\n')),(0,a.kt)("p",null,'Consider a dataset called "heartdisease" with the following variables:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Gender"),": ",(0,a.kt)("em",{parentName:"li"},"Categorical")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Drugs"),": ",(0,a.kt)("em",{parentName:"li"},"Categorical")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Complications"),": ",(0,a.kt)("em",{parentName:"li"},"Categorical")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cost"),": ",(0,a.kt)("em",{parentName:"li"},"Quantitative")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Age"),": ",(0,a.kt)("em",{parentName:"li"},"Quantitative")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Interventions"),": ",(0,a.kt)("em",{parentName:"li"},"Quantitative")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ERVisit"),": ",(0,a.kt)("em",{parentName:"li"},"Quantitative")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Comorbidities"),": ",(0,a.kt)("em",{parentName:"li"},"Quantitative")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Duration"),": ",(0,a.kt)("em",{parentName:"li"},"Quantitative"))),(0,a.kt)("p",null,"We will include the explorer with the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<DataExplorer \n    id=\"heartdisease\"\n    data={heartdisease} \n    categorical={[ 'Gender', 'Drugs', 'Complications' ]}\n    quantitative={[ 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}\n    tests={[]}\n/>\n")))}v.isMDXComponent=!0}}]);