"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[78704],{603905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(202784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,b=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(b,o(o({ref:t},c),{},{components:r})):n.createElement(b,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},440034:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(202784),a=r(386010),l="tabItem_Ymn6",o=Object.defineProperty,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function p({children:e,hidden:t,className:r}){return n.createElement("div",((e,t)=>{for(var r in t||(t={}))u.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&c(e,r,t[r]);return e})({role:"tabpanel",className:(0,a.Z)(l,r)},{hidden:t}),e)}},751361:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(202784),a=r(386010),l=r(152670),o=r(258433),i=r(952326),u=r(638849),s="tabList__CuJ",c="tabItem_LNqP",p=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,y=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&y(e,r,t[r]);if(b)for(var r of b(t))v.call(t,r)&&y(e,r,t[r]);return e};function O(e){var t,r;const{lazy:l,block:p,defaultValue:b,values:f,groupId:v,className:y}=e,O=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=f?f:O.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),k=(0,o.l)(h,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===b?b:null!=(r=null!=b?b:null==(t=O.find((e=>e.props.default)))?void 0:t.props.value)?r:O[0].props.value;if(null!==w&&!h.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:j}=(0,i.U)(),[T,P]=(0,n.useState)(w),C=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=v){const e=N[v];null!=e&&e!==T&&h.some((t=>t.value===e))&&P(e)}const x=e=>{const t=e.currentTarget,r=C.indexOf(t),n=h[r].value;n!==T&&(E(t),P(n),null!=v&&j(v,String(n)))},D=e=>{var t,r;let n=null;switch(e.key){case"ArrowRight":{const r=C.indexOf(e.currentTarget)+1;n=null!=(t=C[r])?t:C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=null!=(r=C[t])?r:C[C.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,a.Z)("tabs-container",s)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},y)},h.map((({value:e,label:t,attributes:r})=>{return n.createElement("li",(l=g({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:e=>C.push(e),onKeyDown:D,onFocus:x,onClick:x},r),o={className:(0,a.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":T===e})},d(l,m(o))),null!=t?t:e);var l,o}))),l?(0,n.cloneElement)(O.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},O.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function h(e){const t=(0,l.Z)();return n.createElement(O,g({key:String(t)},e))}},677591:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return h},frontMatter:function(){return b},metadata:function(){return v},toc:function(){return g}});var n=r(603905),a=r(751361),l=r(440034),o=Object.defineProperty,i=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&d(e,r,t[r]);if(s)for(var r of s(t))p.call(t,r)&&d(e,r,t[r]);return e};const b={id:"r-table",title:"R Table",sidebar_label:"R Table"},f=void 0,v={unversionedId:"r/r-table",id:"r/r-table",title:"R Table",description:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f R-\u043a\u0430\u0434\u0440\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u043b\u0438 \u043c\u0430\u0442\u0440\u0438\u0446\u044b \u0432 \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u043e\u043c \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0438.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/r/table.md",sourceDirName:"r",slug:"/r/r-table",permalink:"/ru/docs/r/r-table",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/r/table.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621312042,formattedLastUpdatedAt:"18 \u043c\u0430\u044f 2021 \u0433.",frontMatter:{id:"r-table",title:"R Table",sidebar_label:"R Table"},sidebar:"docs",previous:{title:"R Shell",permalink:"/ru/docs/r/r-shell"},next:{title:"Weather",permalink:"/ru/docs/weather"}},y={},g=[{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],O={toc:g};function h(e){var t,r=e,{components:o}=r,d=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},O),d),i(t,u({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f R-\u043a\u0430\u0434\u0440\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u043b\u0438 \u043c\u0430\u0442\u0440\u0438\u0446\u044b \u0432 \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u043e\u043c \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0438."),(0,n.kt)("h2",m({},{id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"}),"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"code")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": R \u043a\u043e\u0434, \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0449\u0438\u0439 data.frame, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0439 \u0434\u0430\u043d\u043d\u044b\u0435 \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"libraries")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array"),": R \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u044b \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0432\u0445\u043e\u0434\u043d\u043e\u0433\u043e ",(0,n.kt)("inlineCode",{parentName:"li"},"\u043a\u043e\u0434\u0430"),". Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"prependCode")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|array)"),": R \u043a\u043e\u0434 ",(0,n.kt)("inlineCode",{parentName:"li"},"\u0441\u0442\u0440\u043e\u043a\u0438")," (\u0438\u043b\u0438 ",(0,n.kt)("inlineCode",{parentName:"li"},"\u043c\u0430\u0441\u0441\u0438\u0432\u0430")," \u0438\u0437 \u0431\u043b\u043e\u043a\u043e\u0432 \u043a\u043e\u0434\u0430 R), \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0440\u0438 \u043e\u0446\u0435\u043d\u043a\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0435\u043f\u0430\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a \u043a\u043e\u0434\u0443, \u0445\u0440\u0430\u043d\u044f\u0449\u0435\u043c\u0443\u0441\u044f \u0432 ",(0,n.kt)("inlineCode",{parentName:"li"},"\u043a\u043e\u0434\u0435"),". Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"style")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0438\u043b\u0438 CSS. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,n.kt)("h2",m({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,n.kt)(a.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Using Libraries",value:"usingLibraries"},{label:"Custom Style",value:"customStyle"}],lazy:!0,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<RTable\n    code={`data <- matrix( runif(64), nrow=8, ncol=8); \n    data`}\n/>\n"))),(0,n.kt)(l.Z,{value:"usingLibraries",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<RTable \n    libraries={[ 'dplyr' ]}\n    code=\"starwars\"\n/>\n"))),(0,n.kt)(l.Z,{value:"customStyle",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<RTable \n    libraries={[ 'dplyr' ]}\n    code=\"starwars\"\n    style={{ width: '400px' }}\n/>\n")))))}h.isMDXComponent=!0}}]);