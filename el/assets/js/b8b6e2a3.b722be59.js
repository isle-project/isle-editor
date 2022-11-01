"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[24455],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(202784),r=n(386010),l="tabItem_Ymn6",o=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(202784),r=n(386010),l=n(152670),o=n(258433),i=n(952326),s=n(638849),u="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&y(e,n,t[n]);if(f)for(var n of f(t))v.call(t,n)&&y(e,n,t[n]);return e};function k(e){var t,n;const{lazy:l,block:c,defaultValue:f,values:b,groupId:v,className:y}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=b?b:k.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),N=(0,o.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===f?f:null!=(n=null!=f?f:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?n:k[0].props.value;if(null!==O&&!h.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:j,setTabGroupChoices:w}=(0,i.U)(),[C,x]=(0,a.useState)(O),P=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=v){const e=j[v];null!=e&&e!==C&&h.some((t=>t.value===e))&&x(e)}const E=e=>{const t=e.currentTarget,n=P.indexOf(t),a=h[n].value;a!==C&&(T(t),x(a),null!=v&&w(v,String(a)))},D=e=>{var t,n;let a=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const n=P.indexOf(e.currentTarget)+1;a=null!=(t=P[n])?t:P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;a=null!=(n=P[t])?n:P[P.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},y)},h.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(l=g({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>P.push(e),onKeyDown:D,onClick:E},n),o={className:(0,r.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":C===e})},m(l,d(o))),null!=t?t:e);var l,o}))),l?(0,a.cloneElement)(k.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function h(e){const t=(0,l.Z)();return a.createElement(k,g({key:String(t)},e))}},358656:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return b},default:function(){return h},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return g}});var a=n(603905),r=n(751361),l=n(440034),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))c.call(t,n)&&m(e,n,t[n]);return e};const f={id:"heatmap",title:"Heat Map",sidebar_label:"Heat Map"},b=void 0,v={unversionedId:"plots/heatmap",id:"plots/heatmap",title:"Heat Map",description:"\u0388\u03bd\u03b1\u03c2 \u03c7\u03ac\u03c1\u03c4\u03b7\u03c2 \u03b8\u03b5\u03c1\u03bc\u03cc\u03c4\u03b7\u03c4\u03b1\u03c2 \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03b1\u03c0\u03b5\u03b9\u03ba\u03cc\u03bd\u03b9\u03c3\u03b7 \u03bc\u03b9\u03b1\u03c2 \u03c3\u03c7\u03ad\u03c3\u03b7\u03c2 \u03bc\u03b5\u03c4\u03b1\u03be\u03cd \u03b4\u03cd\u03bf \u03bc\u03b5\u03c4\u03b1\u03b2\u03bb\u03b7\u03c4\u03ce\u03bd.",source:"@site/i18n/el/docusaurus-plugin-content-docs/current/plots/heatmap.md",sourceDirName:"plots",slug:"/plots/heatmap",permalink:"/el/docs/plots/heatmap",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/heatmap.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1 \u0399\u03bf\u03c5\u03bd 2021",frontMatter:{id:"heatmap",title:"Heat Map",sidebar_label:"Heat Map"},sidebar:"docs",previous:{title:"Contour Chart",permalink:"/el/docs/plots/contourchart"},next:{title:"Histogram",permalink:"/el/docs/plots/histogram"}},y={},g=[{value:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",level:2},{value:"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",level:2}],k={toc:g};function h(e){var t,n=e,{components:o}=n,m=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},k),m),i(t,s({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\u0388\u03bd\u03b1\u03c2 \u03c7\u03ac\u03c1\u03c4\u03b7\u03c2 \u03b8\u03b5\u03c1\u03bc\u03cc\u03c4\u03b7\u03c4\u03b1\u03c2 \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03b1\u03c0\u03b5\u03b9\u03ba\u03cc\u03bd\u03b9\u03c3\u03b7 \u03bc\u03b9\u03b1\u03c2 \u03c3\u03c7\u03ad\u03c3\u03b7\u03c2 \u03bc\u03b5\u03c4\u03b1\u03be\u03cd \u03b4\u03cd\u03bf \u03bc\u03b5\u03c4\u03b1\u03b2\u03bb\u03b7\u03c4\u03ce\u03bd."),(0,a.kt)("h2",d({},{id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"}),"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"data")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object (required)"),": \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03b1\u03c0\u03cc \u03c0\u03af\u03bd\u03b1\u03ba\u03b5\u03c2 \u03c4\u03b9\u03bc\u03ce\u03bd \u03b3\u03b9\u03b1 \u03ba\u03ac\u03b8\u03b5 \u03bc\u03b5\u03c4\u03b1\u03b2\u03bb\u03b7\u03c4\u03ae. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"x")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string (required)"),": \u039c\u03b5\u03c4\u03b1\u03b2\u03bb\u03b7\u03c4\u03ae \u03c4\u03bf\u03c5 \u03ac\u03be\u03bf\u03bd\u03b1 x. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"y")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string (required)"),": \u03bc\u03b5\u03c4\u03b1\u03b2\u03bb\u03b7\u03c4\u03ae \u03c4\u03bf\u03c5 \u03ac\u03be\u03bf\u03bd\u03b1 y. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"group")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": \u03bc\u03b5\u03c4\u03b1\u03b2\u03bb\u03b7\u03c4\u03ae \u03bf\u03bc\u03b1\u03b4\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7\u03c2. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"overlayPoints")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u03b5\u03bb\u03ad\u03b3\u03c7\u03b5\u03b9 \u03b1\u03bd \u03b8\u03b1 \u03b5\u03c0\u03b9\u03ba\u03b1\u03bb\u03cd\u03c0\u03c4\u03bf\u03bd\u03c4\u03b1\u03b9 \u03c3\u03b7\u03bc\u03b5\u03af\u03b1 \u03b3\u03b9\u03b1 \u03ba\u03ac\u03b8\u03b5 \u03c0\u03b1\u03c1\u03b1\u03c4\u03ae\u03c1\u03b7\u03c3\u03b7. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"smoothSpan")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u03b5\u03cd\u03c1\u03bf\u03c2 \u03b5\u03be\u03bf\u03bc\u03ac\u03bb\u03c5\u03bd\u03c3\u03b7\u03c2. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"0.66"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"regressionMethod")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<string>"),": \u03c0\u03af\u03bd\u03b1\u03ba\u03b1\u03c2 \u03c0\u03bf\u03c5 \u03c0\u03b5\u03c1\u03b9\u03ad\u03c7\u03b5\u03b9 ",(0,a.kt)("inlineCode",{parentName:"li"},"linear")," \u03ae/\u03ba\u03b1\u03b9 ",(0,a.kt)("inlineCode",{parentName:"li"},"smooth")," \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03b5\u03c0\u03b9\u03ba\u03ac\u03bb\u03c5\u03c8\u03b7 \u03bc\u03b9\u03b1\u03c2 \u03b3\u03c1\u03b1\u03bc\u03bc\u03b9\u03ba\u03ae\u03c2 \u03ae/\u03ba\u03b1\u03b9 \u03b5\u03be\u03bf\u03bc\u03b1\u03bb\u03c5\u03bc\u03ad\u03bd\u03b7\u03c2 \u03b3\u03c1\u03b1\u03bc\u03bc\u03ae\u03c2 \u03c0\u03b1\u03bb\u03b9\u03bd\u03b4\u03c1\u03cc\u03bc\u03b7\u03c3\u03b7\u03c2. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"alternateColor")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u03b5\u03bb\u03ad\u03b3\u03c7\u03b5\u03b9 \u03b1\u03bd \u03b8\u03b1 \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03b7\u03b8\u03b5\u03af \u03b5\u03bd\u03b1\u03bb\u03bb\u03b1\u03ba\u03c4\u03b9\u03ba\u03cc\u03c2 \u03c7\u03c1\u03c9\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc\u03c2 \u03c3\u03c5\u03bd\u03b4\u03c5\u03b1\u03c3\u03bc\u03cc\u03c2 \u03b3\u03b9\u03b1 \u03c4\u03bf\u03bd \u03c7\u03ac\u03c1\u03c4\u03b7 \u03b8\u03b5\u03c1\u03bc\u03cc\u03c4\u03b7\u03c4\u03b1\u03c2. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"commonXAxis")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u03b5\u03bb\u03ad\u03b3\u03c7\u03b5\u03b9 \u03b1\u03bd \u03b8\u03b1 \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03b5\u03af\u03c4\u03b1\u03b9 \u03ba\u03bf\u03b9\u03bd\u03cc\u03c2 \u03ac\u03be\u03bf\u03bd\u03b1\u03c2 x \u03ba\u03b1\u03c4\u03ac \u03c4\u03b7 \u03b4\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03af\u03b1 \u03c0\u03bf\u03bb\u03bb\u03b1\u03c0\u03bb\u03ce\u03bd \u03c7\u03b1\u03c1\u03c4\u03ce\u03bd \u03b8\u03b5\u03c1\u03bc\u03cc\u03c4\u03b7\u03c4\u03b1\u03c2 \u03b1\u03bd\u03ac \u03c4\u03b9\u03bc\u03ae \u03bc\u03b9\u03b1\u03c2 \u03bc\u03b5\u03c4\u03b1\u03b2\u03bb\u03b7\u03c4\u03ae\u03c2 \u03bf\u03bc\u03b1\u03b4\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7\u03c2. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"commonYAxis")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u03b5\u03bb\u03ad\u03b3\u03c7\u03b5\u03b9 \u03b1\u03bd \u03b8\u03b1 \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03b5\u03af\u03c4\u03b1\u03b9 \u03ba\u03bf\u03b9\u03bd\u03cc\u03c2 \u03ac\u03be\u03bf\u03bd\u03b1\u03c2 y \u03ba\u03b1\u03c4\u03ac \u03c4\u03b7 \u03b4\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03af\u03b1 \u03c0\u03bf\u03bb\u03bb\u03b1\u03c0\u03bb\u03ce\u03bd \u03c7\u03b1\u03c1\u03c4\u03ce\u03bd \u03b8\u03b5\u03c1\u03bc\u03cc\u03c4\u03b7\u03c4\u03b1\u03c2 \u03b1\u03bd\u03ac \u03c4\u03b9\u03bc\u03ae \u03bc\u03b9\u03b1\u03c2 \u03bc\u03b5\u03c4\u03b1\u03b2\u03bb\u03b7\u03c4\u03ae\u03c2 \u03bf\u03bc\u03b1\u03b4\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7\u03c2. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,a.kt)("h2",d({},{id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"}),"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"),(0,a.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Group",value:"withGroup"},{label:"Alternate Color",value:"alternateColor"},{label:"Overlay Points",value:"overlayPoints"},{label:"Regression Method",value:"regressionMethod"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<HeatMap \n    data={heartdisease} \n    x="Interventions"\n    y="Age"\n/>\n'))),(0,a.kt)(l.Z,{value:"withGroup",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<HeatMap \n    data={heartdisease} \n    x="Interventions"\n    y="Age"\n    group="Gender"\n    commonXAxis\n/>\n'))),(0,a.kt)(l.Z,{value:"alternateColor",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<HeatMap \n    alternateColor\n    group="Gender"\n    data={heartdisease} \n    x="Interventions"\n    y="Age"\n    commonXAxis\n/>\n'))),(0,a.kt)(l.Z,{value:"overlayPoints",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<HeatMap \n    data={heartdisease} \n    x="Interventions"\n    y="Age"\n    overlayPoints \n/>\n'))),(0,a.kt)(l.Z,{value:"regressionMethod",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<HeatMap \n    data={heartdisease} \n    x=\"Interventions\"\n    y=\"Age\"\n    regressionMethod={[ 'linear', 'smooth' ]} \n/>\n")))))}h.isMDXComponent=!0}}]);