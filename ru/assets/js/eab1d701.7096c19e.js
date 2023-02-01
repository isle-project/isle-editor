"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[56114],{603905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(202784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(r),b=a,d=p["".concat(u,".").concat(b)]||p[b]||m[b]||l;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=b;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},440034:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(202784),a=r(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function p({children:e,hidden:t,className:r}){return n.createElement("div",((e,t)=>{for(var r in t||(t={}))u.call(t,r)&&s(e,r,t[r]);if(o)for(var r of o(t))c.call(t,r)&&s(e,r,t[r]);return e})({role:"tabpanel",className:(0,a.Z)(l,r)},{hidden:t}),e)}},751361:function(e,t,r){r.d(t,{Z:function(){return O}});var n=r(202784),a=r(386010),l=r(152670),i=r(258433),o=r(952326),u=r(638849),c="tabList__CuJ",s="tabItem_LNqP",p=Object.defineProperty,m=Object.defineProperties,b=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,y=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&y(e,r,t[r]);if(d)for(var r of d(t))v.call(t,r)&&y(e,r,t[r]);return e};function k(e){var t,r;const{lazy:l,block:p,defaultValue:d,values:f,groupId:v,className:y}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),O=null!=f?f:k.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),h=(0,i.l)(O,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===d?d:null!=(r=null!=d?d:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?r:k[0].props.value;if(null!==N&&!O.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${O.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:j,setTabGroupChoices:T}=(0,o.U)(),[w,P]=(0,n.useState)(N),D=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=v){const e=j[v];null!=e&&e!==w&&O.some((t=>t.value===e))&&P(e)}const x=e=>{const t=e.currentTarget,r=D.indexOf(t),n=O[r].value;n!==w&&(E(t),P(n),null!=v&&T(v,String(n)))},C=e=>{var t,r;let n=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const r=D.indexOf(e.currentTarget)+1;n=null!=(t=D[r])?t:D[0];break}case"ArrowLeft":{const t=D.indexOf(e.currentTarget)-1;n=null!=(r=D[t])?r:D[D.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,a.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},y)},O.map((({value:e,label:t,attributes:r})=>{return n.createElement("li",(l=g({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>D.push(e),onKeyDown:C,onClick:x},r),i={className:(0,a.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":w===e})},m(l,b(i))),null!=t?t:e);var l,i}))),l?(0,n.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function O(e){const t=(0,l.Z)();return n.createElement(k,g({key:String(t)},e))}},622664:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return O},frontMatter:function(){return d},metadata:function(){return v},toc:function(){return g}});var n=r(603905),a=r(751361),l=r(440034),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,b=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&m(e,r,t[r]);if(c)for(var r of c(t))p.call(t,r)&&m(e,r,t[r]);return e};const d={id:"frequency-table",title:"Frequency Table",sidebar_label:"Frequency Table"},f=void 0,v={unversionedId:"tables/frequency-table",id:"tables/frequency-table",title:"Frequency Table",description:"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0447\u0430\u0441\u0442\u043e\u0442.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/tables/frequency-table.md",sourceDirName:"tables",slug:"/tables/frequency-table",permalink:"/ru/docs/tables/frequency-table",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tables/frequency-table.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614628319,formattedLastUpdatedAt:"1 \u043c\u0430\u0440. 2021 \u0433.",frontMatter:{id:"frequency-table",title:"Frequency Table",sidebar_label:"Frequency Table"},sidebar:"docs",previous:{title:"Contingency Table",permalink:"/ru/docs/tables/contingency-table"},next:{title:"ANOVA",permalink:"/ru/docs/tests/anova"}},y={},g=[{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],k={toc:g};function O(e){var t,r=e,{components:i}=r,m=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=b(b({},k),m),o(t,u({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0447\u0430\u0441\u0442\u043e\u0442."),(0,n.kt)("h2",b({},{id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"}),"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"data")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object (required)"),": \u043c\u0430\u0441\u0441\u0438\u0432\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043e\u0446\u0435\u043d\u043a\u0438. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"variable")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": \u0438\u043c\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"calculateCounts")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u0442, \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u043b\u0438 \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u044b\u0435 \u043f\u043e\u0434\u0441\u0447\u0451\u0442\u044b. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"calculateRelative")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0447\u0430\u0441\u0442\u043e\u0442. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"group")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": \u0438\u043c\u044f \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u0443\u044e\u0449\u0435\u0439 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"nDecimalPlaces")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u043d\u0430\u043a\u043e\u0432 \u043f\u043e\u0441\u043b\u0435 \u0437\u0430\u043f\u044f\u0442\u043e\u0439 \u0434\u043b\u044f \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0447\u0430\u0441\u0442\u043e\u0442, \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u043c\u044b\u0445 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"3"),".")),(0,n.kt)("h2",b({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,n.kt)(a.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Relative Frequency",value:"relativeFrequency"},{label:"Grouped",value:"grouped"},{label:"Number of Decimals",value:"nDecimals"}],lazy:!0,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",b({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<FrequencyTable\n    data={heartdisease} \n    variable="Drugs"\n/>\n'))),(0,n.kt)(l.Z,{value:"relativeFrequency",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",b({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<FrequencyTable\n    data={heartdisease} \n    variable="Drugs"\n    calculateRelative\n/>\n'))),(0,n.kt)(l.Z,{value:"grouped",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",b({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<FrequencyTable\n    data={heartdisease} \n    variable="Drugs"\n    group="Gender"\n/>\n'))),(0,n.kt)(l.Z,{value:"nDecimals",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",b({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<FrequencyTable\n    data={heartdisease} \n    variable="Drugs"\n    calculateRelative \n    nDecimalPlaces={3}\n/>\n')))))}O.isMDXComponent=!0}}]);