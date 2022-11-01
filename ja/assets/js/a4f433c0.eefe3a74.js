"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19611],{603905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(202784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},440034:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(202784),a=r(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function c({children:e,hidden:t,className:r}){return n.createElement("div",((e,t)=>{for(var r in t||(t={}))u.call(t,r)&&p(e,r,t[r]);if(o)for(var r of o(t))s.call(t,r)&&p(e,r,t[r]);return e})({role:"tabpanel",className:(0,a.Z)(l,r)},{hidden:t}),e)}},751361:function(e,t,r){r.d(t,{Z:function(){return O}});var n=r(202784),a=r(386010),l=r(152670),i=r(258433),o=r(952326),u=r(638849),s="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,y=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&y(e,r,t[r]);if(f)for(var r of f(t))v.call(t,r)&&y(e,r,t[r]);return e};function k(e){var t,r;const{lazy:l,block:c,defaultValue:f,values:b,groupId:v,className:y}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),O=null!=b?b:k.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),h=(0,i.l)(O,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===f?f:null!=(r=null!=f?f:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?r:k[0].props.value;if(null!==N&&!O.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${O.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:j,setTabGroupChoices:w}=(0,o.U)(),[P,E]=(0,n.useState)(N),T=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=v){const e=j[v];null!=e&&e!==P&&O.some((t=>t.value===e))&&E(e)}const x=e=>{const t=e.currentTarget,r=T.indexOf(t),n=O[r].value;n!==P&&(C(t),E(n),null!=v&&w(v,String(n)))},D=e=>{var t,r;let n=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const r=T.indexOf(e.currentTarget)+1;n=null!=(t=T[r])?t:T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=null!=(r=T[t])?r:T[T.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,a.Z)("tabs-container",s)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":c},y)},O.map((({value:e,label:t,attributes:r})=>{return n.createElement("li",(l=g({role:"tab",tabIndex:P===e?0:-1,"aria-selected":P===e,key:e,ref:e=>T.push(e),onKeyDown:D,onClick:x},r),i={className:(0,a.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":P===e})},d(l,m(i))),null!=t?t:e);var l,i}))),l?(0,n.cloneElement)(k.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function O(e){const t=(0,l.Z)();return n.createElement(k,g({key:String(t)},e))}},404696:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return b},default:function(){return O},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return g}});var n=r(603905),a=r(751361),l=r(440034),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&d(e,r,t[r]);if(s)for(var r of s(t))c.call(t,r)&&d(e,r,t[r]);return e};const f={id:"r-output",title:"R Output",sidebar_label:"R Output"},b=void 0,v={unversionedId:"r/r-output",id:"r/r-output",title:"R Output",description:"ISLE\u30ec\u30c3\u30b9\u30f3\u5185\u3067R\u51fa\u529b\u3092\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u305f\u3081\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/r/output.md",sourceDirName:"r",slug:"/r/r-output",permalink:"/ja/docs/r/r-output",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/r/output.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1617045753,formattedLastUpdatedAt:"2021\u5e743\u670829\u65e5",frontMatter:{id:"r-output",title:"R Output",sidebar_label:"R Output"},sidebar:"docs",previous:{title:"R Help",permalink:"/ja/docs/r/r-help"},next:{title:"R Plot",permalink:"/ja/docs/r/r-plot"}},y={},g=[{value:"\u30aa\u30d7\u30b7\u30e7\u30f3",id:"\u30aa\u30d7\u30b7\u30e7\u30f3",level:2},{value:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002",id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059",level:2}],k={toc:g};function O(e){var t,r=e,{components:i}=r,d=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},k),d),o(t,u({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"ISLE\u30ec\u30c3\u30b9\u30f3\u5185\u3067R\u51fa\u529b\u3092\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u305f\u3081\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3002"),(0,n.kt)("h2",m({},{id:"\u30aa\u30d7\u30b7\u30e7\u30f3"}),"\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"code")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": \u8a55\u4fa1\u306b\u4f7f\u7528\u3055\u308c\u308bR\u30b3\u30fc\u30c9. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"libraries")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array"),": \u5165\u529b ",(0,n.kt)("inlineCode",{parentName:"li"},"code")," \u304c\u5b9f\u884c\u3055\u308c\u305f\u3068\u304d\u306b\u81ea\u52d5\u7684\u306b\u30ed\u30fc\u30c9\u3055\u308c\u308b\u3079\u304d R \u30e9\u30a4\u30d6\u30e9\u30ea. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"prependCode")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|array)"),": \u8a55\u4fa1\u6642\u306b ",(0,n.kt)("inlineCode",{parentName:"li"},"code")," \u306b\u683c\u7d0d\u3055\u308c\u3066\u3044\u308b\u30b3\u30fc\u30c9\u306e\u524d\u306b\u8ffd\u52a0\u3055\u308c\u308b R \u30b3\u30fc\u30c9 (\u307e\u305f\u306f\u30b3\u30fc\u30c9\u30d6\u30ed\u30c3\u30af\u306e ",(0,n.kt)("inlineCode",{parentName:"li"},"array"),")\u3002. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onPlots")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": \u751f\u6210\u3055\u308c\u305f\u30d7\u30ed\u30c3\u30c8\u3067\u547c\u3073\u51fa\u3055\u308c\u308b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onPlots() {}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onResult")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": \u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u306f ",(0,n.kt)("inlineCode",{parentName:"li"},"error")," (\u64cd\u4f5c\u304c\u6210\u529f\u3057\u305f\u5834\u5408\u306f ",(0,n.kt)("inlineCode",{parentName:"li"},"null"),") \u3068 ",(0,n.kt)("inlineCode",{parentName:"li"},"result")," \u3067\u547c\u3073\u51fa\u3055\u308c\u3001R \u306e\u51fa\u529b\u3092\u4fdd\u6301\u3057\u307e\u3059\u3002. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onResult() {}"),".")),(0,n.kt)("h2",m({},{id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059"}),"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)(a.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Multiline",value:"multiline"},{label:"Loading Data",value:"loadingData"},{label:"Using Libraries",value:"usingLibraries"}],lazy:!0,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<ROutput code="runif(10)" />\n'))),(0,n.kt)(l.Z,{value:"multiline",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<ROutput code={`\nx <- runif( 100 );\ny <- 3.0 * x + rnorm( 100 );\nfit <- lm( y ~ x );\nsummary( fit );\n`} />\n"))),(0,n.kt)(l.Z,{value:"loadingData",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<ROutput \n    prependCode={\'wages <- read.table( "https://raw.githubusercontent.com/stdlib-js/stdlib/develop/lib/node_modules/%40stdlib/datasets/berndt-cps-wages-1985/data/data.csv", header=TRUE, sep=",")\'} \n    code="summary(wages)"\n/>\n'))),(0,n.kt)(l.Z,{value:"usingLibraries",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<ROutput \n    libraries={[ 'dplyr' ]}\n    code={'starwars %>% filter(species == \"Droid\")'}\n/>\n")))))}O.isMDXComponent=!0}}]);