"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25406],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var i=n(202784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||r;return n?i.createElement(f,a(a({ref:t},s),{},{components:n})):i.createElement(f,a({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},574936:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return u},default:function(){return N},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return b}});var i=n(603905),o=Object.defineProperty,r=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&s(e,n,t[n]);return e};const m={id:"beacon-tooltip",title:"Beacon Tooltip",sidebar_label:"Beacon Tooltip"},u=void 0,f={unversionedId:"beacon-tooltip",id:"beacon-tooltip",title:"Beacon Tooltip",description:"Component placing a beacon in the lesson, either independently or attached to a target. Upon hovering or clicking on the beacon, a tooltip is displayed.",source:"@site/docs/beacon-tooltip.md",sourceDirName:".",slug:"/beacon-tooltip",permalink:"/docs/beacon-tooltip",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/beacon-tooltip.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612731787,formattedLastUpdatedAt:"Feb 7, 2021",frontMatter:{id:"beacon-tooltip",title:"Beacon Tooltip",sidebar_label:"Beacon Tooltip"},sidebar:"docs",previous:{title:"Summary Statistics",permalink:"/docs/summary-statistics"},next:{title:"Clock",permalink:"/docs/clock"}},k={},b=[{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],g={toc:b};function N(e){var t,n=e,{components:o}=n,s=((e,t)=>{var n={};for(var i in e)p.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&l)for(var i of l(e))t.indexOf(i)<0&&c.call(e,i)&&(n[i]=e[i]);return n})(n,["components"]);return(0,i.kt)("wrapper",(t=d(d({},g),s),r(t,a({components:o,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,"Component placing a beacon in the lesson, either independently or attached to a ",(0,i.kt)("inlineCode",{parentName:"p"},"target"),". Upon hovering or clicking on the beacon, a tooltip is displayed."),(0,i.kt)("h2",d({},{id:"options"}),"Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"title")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),": title to be displayed at the top of the tooltip. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"content")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),": tooltip content. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'"),"content",(0,i.kt)("inlineCode",{parentName:"li"}," comes here...'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"event")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": if set to ",(0,i.kt)("inlineCode",{parentName:"li"},"click"),", tooltip is toggled when clicking on beacon; if set to ",(0,i.kt)("inlineCode",{parentName:"li"},"hover"),", the tooltip is activated via hovering. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'click'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"placement")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": placement of the tooltip relative to ",(0,i.kt)("inlineCode",{parentName:"li"},"target")," (either ",(0,i.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"top-start"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"top-end"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"bottom"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"bottom-end"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"left-start"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"left-end"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"right"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"right-start"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"right-end"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"auto"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"center"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'left'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"target")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": class or ID selector for element to attach tooltip to. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"offset")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": distance between the tooltip and ",(0,i.kt)("inlineCode",{parentName:"li"},"target")," in pixels. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"15"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onChange")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": callback invoked upon state change of the tooltip. Receives two arguments: the ",(0,i.kt)("inlineCode",{parentName:"li"},"action")," (",(0,i.kt)("inlineCode",{parentName:"li"},"open")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"close"),") and the passed ",(0,i.kt)("inlineCode",{parentName:"li"},"props"),". Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onChange() {}"),".")),(0,i.kt)("h2",d({},{id:"examples"}),"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<BeaconTooltip\n    content="Body of the tooltip..."\n    title="Title comes here..."\n    event="hover"\n    placement="right"\n/>\n')))}N.isMDXComponent=!0}}]);