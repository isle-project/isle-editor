"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[18221],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,b=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(b,o(o({ref:t},s),{},{components:n})):r.createElement(b,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(202784),a=n(386010),l="tabItem_Ymn6",o=Object.defineProperty,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function p({children:e,hidden:t,className:n}){return r.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&s(e,n,t[n]);return e})({role:"tabpanel",className:(0,a.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return O}});var r=n(202784),a=n(386010),l=n(152670),o=n(258433),i=n(952326),u=n(638849),c="tabList__CuJ",s="tabItem_LNqP",p=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&v(e,n,t[n]);if(b)for(var n of b(t))y.call(t,n)&&v(e,n,t[n]);return e};function k(e){var t,n;const{lazy:l,block:p,defaultValue:b,values:f,groupId:y,className:v}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),O=null!=f?f:k.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),h=(0,o.l)(O,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===b?b:null!=(n=null!=b?b:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?n:k[0].props.value;if(null!==N&&!O.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${O.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:j}=(0,i.U)(),[T,C]=(0,r.useState)(N),P=[],{blockElementScrollPositionUntilNextRender:D}=(0,u.o5)();if(null!=y){const e=w[y];null!=e&&e!==T&&O.some((t=>t.value===e))&&C(e)}const E=e=>{const t=e.currentTarget,n=P.indexOf(t),r=O[n].value;r!==T&&(D(t),C(r),null!=y&&j(y,String(r)))},x=e=>{var t,n;let r=null;switch(e.key){case"ArrowRight":{const n=P.indexOf(e.currentTarget)+1;r=null!=(t=P[n])?t:P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;r=null!=(n=P[t])?n:P[P.length-1];break}}null==r||r.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},v)},O.map((({value:e,label:t,attributes:n})=>{return r.createElement("li",(l=g({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:e=>P.push(e),onKeyDown:x,onFocus:E,onClick:E},n),o={className:(0,a.Z)("tabs__item",s,null==n?void 0:n.className,{"tabs__item--active":T===e})},d(l,m(o))),null!=t?t:e);var l,o}))),l?(0,r.cloneElement)(k.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function O(e){const t=(0,l.Z)();return r.createElement(k,g({key:String(t)},e))}},689519:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return f},default:function(){return O},frontMatter:function(){return b},metadata:function(){return y},toc:function(){return g}});var r=n(603905),a=n(751361),l=n(440034),o=Object.defineProperty,i=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(c)for(var n of c(t))p.call(t,n)&&d(e,n,t[n]);return e};const b={id:"contingency-table",title:"Contingency Table",sidebar_label:"Contingency Table"},f=void 0,y={unversionedId:"tables/contingency-table",id:"tables/contingency-table",title:"Contingency Table",description:"\u5076\u767a\u7684\u306a\u8868\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tables/contingency-table.md",sourceDirName:"tables",slug:"/tables/contingency-table",permalink:"/ja/docs/tables/contingency-table",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tables/contingency-table.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614549569,formattedLastUpdatedAt:"2021\u5e742\u670828\u65e5",frontMatter:{id:"contingency-table",title:"Contingency Table",sidebar_label:"Contingency Table"},sidebar:"docs",previous:{title:"Simple Linear Regression",permalink:"/ja/docs/models/simple-linear-regression"},next:{title:"Frequency Table",permalink:"/ja/docs/tables/frequency-table"}},v={},g=[{value:"\u30aa\u30d7\u30b7\u30e7\u30f3",id:"\u30aa\u30d7\u30b7\u30e7\u30f3",level:2},{value:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002",id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059",level:2}],k={toc:g};function O(e){var t,n=e,{components:o}=n,d=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},k),d),i(t,u({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u5076\u767a\u7684\u306a\u8868\u3002"),(0,r.kt)("h2",m({},{id:"\u30aa\u30d7\u30b7\u30e7\u30f3"}),"\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object (required)"),": \u5024\u306e\u914d\u5217\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"rowVar")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": \u884c\u306b\u6cbf\u3063\u3066\u8868\u793a\u3055\u308c\u308b\u30ab\u30c6\u30b4\u30ea\u5909\u6570\u540d. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"colVar")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": \u5217\u306b\u6cbf\u3063\u3066\u8868\u793a\u3055\u308c\u308b\u30ab\u30c6\u30b4\u30ea\u5909\u6570\u540d. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"relativeFreqs")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u76f8\u5bfe\u5468\u6ce2\u6570\u3092\u8868\u793a\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"group")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": \u30b0\u30eb\u30fc\u30d7\u5316\u5909\u6570\u540d. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"display")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(array<string>|string)"),": \u884c\u306e\u30d1\u30fc\u30bb\u30f3\u30c8",(0,r.kt)("inlineCode",{parentName:"li"},"\u304a\u3088\u3073/\u307e\u305f\u306f\u5217\u306e\u30d1\u30fc\u30bb\u30f3\u30c8"),"\u3092\u8868\u793a\u3059\u308b\u304b\u3069\u3046\u304b. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"nDecimalPlaces")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": \u8868\u4e2d\u306e\u76f8\u5bfe\u5468\u6ce2\u6570\u306e\u5c0f\u6570\u70b9\u4ee5\u4e0b\u306e\u6841\u6570. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"3"),".")),(0,r.kt)("h2",m({},{id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059"}),"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)(a.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Relative Frequencies",value:"relativeFrequency"},{label:"Grouped",value:"grouped"},{label:"Display Row Percentages",value:"displayRowPercentage"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<ContingencyTable\n    data={heartdisease} \n    rowVar="Gender"\n    colVar="Drugs"\n/>\n'))),(0,r.kt)(l.Z,{value:"relativeFrequency",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<ContingencyTable\n    data={heartdisease} \n    rowVar="Gender"\n    colVar="Drugs"\n    relativeFreqs \n    nDecimalPlaces={2}\n/>\n'))),(0,r.kt)(l.Z,{value:"grouped",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<ContingencyTable\n    data={heartdisease} \n    rowVar="Drugs"\n    colVar="Complications"\n    group="Gender"\n/>\n'))),(0,r.kt)(l.Z,{value:"displayRowPercentage",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<ContingencyTable\n    data={heartdisease} \n    rowVar="Drugs"\n    colVar="Complications"\n    display={[\'Row Percent\']}\n/>\n')))))}O.isMDXComponent=!0}}]);