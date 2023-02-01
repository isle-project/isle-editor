"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[14184],{603905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return b}});var n=r(202784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,b=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return r?n.createElement(b,o(o({ref:t},c),{},{components:r})):n.createElement(b,o({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},440034:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(202784),a=r(386010),l="tabItem_Ymn6",o=Object.defineProperty,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function p({children:e,hidden:t,className:r}){return n.createElement("div",((e,t)=>{for(var r in t||(t={}))u.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&c(e,r,t[r]);return e})({role:"tabpanel",className:(0,a.Z)(l,r)},{hidden:t}),e)}},751361:function(e,t,r){r.d(t,{Z:function(){return O}});var n=r(202784),a=r(386010),l=r(152670),o=r(258433),i=r(952326),u=r(638849),s="tabList__CuJ",c="tabItem_LNqP",p=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&h(e,r,t[r]);if(b)for(var r of b(t))v.call(t,r)&&h(e,r,t[r]);return e};function g(e){var t,r;const{lazy:l,block:p,defaultValue:b,values:f,groupId:v,className:h}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),O=null!=f?f:g.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),k=(0,o.l)(O,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===b?b:null!=(r=null!=b?b:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?r:g[0].props.value;if(null!==w&&!O.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${O.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:j,setTabGroupChoices:N}=(0,i.U)(),[x,T]=(0,n.useState)(w),P=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=v){const e=j[v];null!=e&&e!==x&&O.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,r=P.indexOf(t),n=O[r].value;n!==x&&(E(t),T(n),null!=v&&N(v,String(n)))},D=e=>{var t,r;let n=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const r=P.indexOf(e.currentTarget)+1;n=null!=(t=P[r])?t:P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;n=null!=(r=P[t])?r:P[P.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,a.Z)("tabs-container",s)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},h)},O.map((({value:e,label:t,attributes:r})=>{return n.createElement("li",(l=y({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>P.push(e),onKeyDown:D,onClick:C},r),o={className:(0,a.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":x===e})},d(l,m(o))),null!=t?t:e);var l,o}))),l?(0,n.cloneElement)(g.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function O(e){const t=(0,l.Z)();return n.createElement(g,y({key:String(t)},e))}},949410:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return f},default:function(){return O},frontMatter:function(){return b},metadata:function(){return v},toc:function(){return y}});var n=r(603905),a=r(751361),l=r(440034),o=Object.defineProperty,i=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&d(e,r,t[r]);if(s)for(var r of s(t))p.call(t,r)&&d(e,r,t[r]);return e};const b={id:"hr",title:"hr",sidebar_label:"hr"},f=void 0,v={unversionedId:"html/hr",id:"html/hr",title:"hr",description:"\u039f\u03c1\u03b9\u03b6\u03cc\u03bd\u03c4\u03b9\u03bf\u03c2 \u03ba\u03b1\u03bd\u03cc\u03bd\u03b1\u03c2 \u03c0\u03bf\u03c5 \u03bf\u03c1\u03af\u03b6\u03b5\u03b9 \u03ad\u03bd\u03b1 \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03b4\u03b9\u03ac\u03bb\u03b5\u03b9\u03bc\u03bc\u03b1 \u03c3\u03c4\u03bf \u03ad\u03b3\u03b3\u03c1\u03b1\u03c6\u03bf.",source:"@site/i18n/el/docusaurus-plugin-content-docs/current/html/hr.md",sourceDirName:"html",slug:"/html/hr",permalink:"/el/docs/html/hr",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/html/hr.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1 \u0399\u03bf\u03c5\u03bd 2021",frontMatter:{id:"hr",title:"hr",sidebar_label:"hr"},sidebar:"docs",previous:{title:"div",permalink:"/el/docs/html/div"},next:{title:"p",permalink:"/el/docs/html/p"}},h={},y=[{value:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",level:2},{value:"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",level:2}],g={toc:y};function O(e){var t,r=e,{components:o}=r,d=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},g),d),i(t,u({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u039f\u03c1\u03b9\u03b6\u03cc\u03bd\u03c4\u03b9\u03bf\u03c2 \u03ba\u03b1\u03bd\u03cc\u03bd\u03b1\u03c2 \u03c0\u03bf\u03c5 \u03bf\u03c1\u03af\u03b6\u03b5\u03b9 \u03ad\u03bd\u03b1 \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03b4\u03b9\u03ac\u03bb\u03b5\u03b9\u03bc\u03bc\u03b1 \u03c3\u03c4\u03bf \u03ad\u03b3\u03b3\u03c1\u03b1\u03c6\u03bf."),(0,n.kt)("h2",m({},{id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"}),"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"className")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": \u03cc\u03bd\u03bf\u03bc\u03b1 \u03ba\u03bb\u03ac\u03c3\u03b7\u03c2. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"style")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": \u03a3\u03c4\u03c5\u03bb \u03b3\u03c1\u03b1\u03bc\u03bc\u03ae\u03c2 CSS. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,n.kt)("h2",m({},{id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"}),"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"),(0,n.kt)(a.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With CSS",value:"withCSS"},{label:"Dashed Line",value:"dashedLine"},{label:"Dotted Line",value:"dottedLine"}],lazy:!0,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"    <hr />\n"))),(0,n.kt)(l.Z,{value:"withCSS",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<hr style={{\n  border: '20px solid black',\n  borderRadius: '5px'\n}}/>\n"))),(0,n.kt)(l.Z,{value:"dashedLine",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<hr style={{\n  background: 'transparent',\n  border: '2px dashed black',\n}}/>\n"))),(0,n.kt)(l.Z,{value:"dottedLine",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<hr style={{\n  background: 'transparent',\n  border: '2px dotted red',\n}}/>\n")))))}O.isMDXComponent=!0}}]);