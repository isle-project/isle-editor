"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[44352],{603905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(202784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},440034:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(202784),a=r(386010),l="tabItem_Ymn6",o=Object.defineProperty,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function p({children:e,hidden:t,className:r}){return n.createElement("div",((e,t)=>{for(var r in t||(t={}))u.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&s(e,r,t[r]);return e})({role:"tabpanel",className:(0,a.Z)(l,r)},{hidden:t}),e)}},751361:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(202784),a=r(386010),l=r(152670),o=r(258433),i=r(952326),u=r(638849),c="tabList__CuJ",s="tabItem_LNqP",p=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,y=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,O=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&y(e,r,t[r]);if(f)for(var r of f(t))v.call(t,r)&&y(e,r,t[r]);return e};function g(e){var t,r;const{lazy:l,block:p,defaultValue:f,values:b,groupId:v,className:y}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=b?b:g.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),k=(0,o.l)(h,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const j=null===f?f:null!=(r=null!=f?f:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?r:g[0].props.value;if(null!==j&&!h.some((e=>e.value===j)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${j}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:P}=(0,i.U)(),[x,N]=(0,n.useState)(j),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=v){const e=w[v];null!=e&&e!==x&&h.some((t=>t.value===e))&&N(e)}const C=e=>{const t=e.currentTarget,r=E.indexOf(t),n=h[r].value;n!==x&&(T(t),N(n),null!=v&&P(v,String(n)))},S=e=>{var t,r;let n=null;switch(e.key){case"ArrowRight":{const r=E.indexOf(e.currentTarget)+1;n=null!=(t=E[r])?t:E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=null!=(r=E[t])?r:E[E.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,a.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},y)},h.map((({value:e,label:t,attributes:r})=>{return n.createElement("li",(l=O({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>E.push(e),onKeyDown:S,onFocus:C,onClick:C},r),o={className:(0,a.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":x===e})},d(l,m(o))),null!=t?t:e);var l,o}))),l?(0,n.cloneElement)(g.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function h(e){const t=(0,l.Z)();return n.createElement(g,O({key:String(t)},e))}},748527:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return b},default:function(){return h},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return O}});var n=r(603905),a=r(751361),l=r(440034),o=Object.defineProperty,i=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&d(e,r,t[r]);if(c)for(var r of c(t))p.call(t,r)&&d(e,r,t[r]);return e};const f={id:"scatterplot-matrix",title:"Scatter Plot Matrix",sidebar_label:"Scatter Plot Matrix"},b=void 0,v={unversionedId:"plots/scatterplot-matrix",id:"plots/scatterplot-matrix",title:"Scatter Plot Matrix",description:"\u6563\u5e03\u56f3\u884c\u5217\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/plots/scatterplot-matrix.md",sourceDirName:"plots",slug:"/plots/scatterplot-matrix",permalink:"/ja/docs/plots/scatterplot-matrix",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/scatterplot-matrix.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614613459,formattedLastUpdatedAt:"2021\u5e743\u67081\u65e5",frontMatter:{id:"scatterplot-matrix",title:"Scatter Plot Matrix",sidebar_label:"Scatter Plot Matrix"},sidebar:"docs",previous:{title:"Scatter Plot",permalink:"/ja/docs/plots/scatterplot"},next:{title:"Sunburst Plot",permalink:"/ja/docs/plots/sunburst"}},y={},O=[{value:"\u30aa\u30d7\u30b7\u30e7\u30f3",id:"\u30aa\u30d7\u30b7\u30e7\u30f3",level:2},{value:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002",id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059",level:2}],g={toc:O};function h(e){var t,r=e,{components:o}=r,d=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},g),d),i(t,u({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u6563\u5e03\u56f3\u884c\u5217\u3002"),(0,n.kt)("h2",m({},{id:"\u30aa\u30d7\u30b7\u30e7\u30f3"}),"\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"data")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object (required)"),": \u5404\u5909\u6570\u306e\u5024\u306e\u914d\u5217\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"variables")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array (required)"),": \u884c\u5217\u306b\u8868\u793a\u3059\u308b\u5909\u6570\u306e\u914d\u5217. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"color")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": \u70b9\u306e\u8272\u306b\u5bfe\u5fdc\u3055\u305b\u308b\u7bc4\u7587\u5909\u6570. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,n.kt)("h2",m({},{id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059"}),"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)(a.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Colored",value:"colored"}],lazy:!0,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<ScatterPlotMatrix\n    data={heartdisease} \n    variables={[ 'Age', 'Cost', 'Interventions' ]}\n/>\n"))),(0,n.kt)(l.Z,{value:"colored",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<ScatterPlotMatrix\n    data={heartdisease} \n    variables={[ 'Cost', 'Interventions' ]}\n    color=\"Gender\"\n/>\n")))))}h.isMDXComponent=!0}}]);