"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1070],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},439290:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(487462),a=n(263366),i=(n(202784),n(603905)),l=["components"],o={id:"draggable-list",title:"Draggable List",sidebar_label:"Draggable List"},s=void 0,c={unversionedId:"draggable-list",id:"draggable-list",title:"Draggable List",description:"A list of draggable elements that can be re-ordered by the students.",source:"@site/docs/draggable-list.md",sourceDirName:".",slug:"/draggable-list",permalink:"/docs/draggable-list",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/draggable-list.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612731787,formattedLastUpdatedAt:"2/7/2021",frontMatter:{id:"draggable-list",title:"Draggable List",sidebar_label:"Draggable List"},sidebar:"docs",previous:{title:"Color Picker",permalink:"/docs/color-picker"},next:{title:"Flippable Card",permalink:"/docs/flippable-card"}},p=[{value:"Options",id:"options",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A list of draggable elements that can be re-ordered by the students."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"data")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array (required)"),": array of objects with ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"text")," keys. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onChange")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": callback invoked with newly ordered data array on each change. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onChange(){}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onInit")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": callback function invoked after mounting of component. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onInit(){}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"shuffle")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": controls whether data elements should be shuffled in initial display. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"disabled")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": controls whether elements can be dragged or not. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"className")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": class name. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline styles. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<DraggableList\n    data={[\n        { id: 0, text: "Compact" },\n        { id: 1, text: "Large" },\n        { id: 2, text: "Midsize" },\n        { id: 3, text: "Small" }\n    ]}\n/>\n')))}u.isMDXComponent=!0}}]);