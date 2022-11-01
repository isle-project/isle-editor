"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73829],{603905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var a=r(202784);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,b=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return r?a.createElement(b,i(i({ref:t},p),{},{components:r})):a.createElement(b,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},440034:function(e,t,r){r.d(t,{Z:function(){return c}});var a=r(202784),n=r(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function c({children:e,hidden:t,className:r}){return a.createElement("div",((e,t)=>{for(var r in t||(t={}))u.call(t,r)&&p(e,r,t[r]);if(o)for(var r of o(t))s.call(t,r)&&p(e,r,t[r]);return e})({role:"tabpanel",className:(0,n.Z)(l,r)},{hidden:t}),e)}},751361:function(e,t,r){r.d(t,{Z:function(){return h}});var a=r(202784),n=r(386010),l=r(152670),i=r(258433),o=r(952326),u=r(638849),s="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,y=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,k=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&y(e,r,t[r]);if(b)for(var r of b(t))v.call(t,r)&&y(e,r,t[r]);return e};function g(e){var t,r;const{lazy:l,block:c,defaultValue:b,values:f,groupId:v,className:y}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=f?f:g.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),O=(0,i.l)(h,((e,t)=>e.value===t.value));if(O.length>0)throw new Error(`Docusaurus error: Duplicate values "${O.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const j=null===b?b:null!=(r=null!=b?b:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?r:g[0].props.value;if(null!==j&&!h.some((e=>e.value===j)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${j}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:P,setTabGroupChoices:w}=(0,o.U)(),[N,C]=(0,a.useState)(j),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=v){const e=P[v];null!=e&&e!==N&&h.some((t=>t.value===e))&&C(e)}const x=e=>{const t=e.currentTarget,r=E.indexOf(t),a=h[r].value;a!==N&&(T(t),C(a),null!=v&&w(v,String(a)))},D=e=>{var t,r;let a=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const r=E.indexOf(e.currentTarget)+1;a=null!=(t=E[r])?t:E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;a=null!=(r=E[t])?r:E[E.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,n.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":c},y)},h.map((({value:e,label:t,attributes:r})=>{return a.createElement("li",(l=k({role:"tab",tabIndex:N===e?0:-1,"aria-selected":N===e,key:e,ref:e=>E.push(e),onKeyDown:D,onClick:x},r),i={className:(0,n.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":N===e})},m(l,d(i))),null!=t?t:e);var l,i}))),l?(0,a.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function h(e){const t=(0,l.Z)();return a.createElement(g,k({key:String(t)},e))}},603346:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return h},frontMatter:function(){return b},metadata:function(){return v},toc:function(){return k}});var a=r(603905),n=r(751361),l=r(440034),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&m(e,r,t[r]);if(s)for(var r of s(t))c.call(t,r)&&m(e,r,t[r]);return e};const b={id:"piechart",title:"Pie Chart",sidebar_label:"Pie Chart"},f=void 0,v={unversionedId:"plots/piechart",id:"plots/piechart",title:"Pie Chart",description:"Skritulin\u0117s diagramos komponentas, kuris pagal numatytuosius nustatymus rodo vis\u0173 pasirinkto kintamojo kategorij\u0173 skai\u010di\u0173.",source:"@site/i18n/lt/docusaurus-plugin-content-docs/current/plots/piechart.md",sourceDirName:"plots",slug:"/plots/piechart",permalink:"/lt/docs/plots/piechart",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/piechart.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021-06-01",frontMatter:{id:"piechart",title:"Pie Chart",sidebar_label:"Pie Chart"},sidebar:"docs",previous:{title:"NetworkPlot",permalink:"/lt/docs/plots/network-plot"},next:{title:"QQ Plot",permalink:"/lt/docs/plots/qqplot"}},y={},k=[{value:"Parinktys",id:"parinktys",level:2},{value:"Pavyzd\u017eiai",id:"pavyzd\u017eiai",level:2}],g={toc:k};function h(e){var t,r=e,{components:i}=r,m=((e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&c.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=d(d({},g),m),o(t,u({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Skritulin\u0117s diagramos komponentas, kuris pagal numatytuosius nustatymus rodo vis\u0173 pasirinkto kintamojo kategorij\u0173 skai\u010di\u0173."),(0,a.kt)("h2",d({},{id:"parinktys"}),"Parinktys"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"data")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object (required)"),": ver\u010di\u0173 masyv\u0173 objektas. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"variable")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": kintamasis rodomas. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"group")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": grupavimo kintamasis. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"summaryVariable")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": neprivalomas kintamasis, kurio sum\u0105 reikia rodyti kiekvienai ",(0,a.kt)("inlineCode",{parentName:"li"},"kintamojo")," kategorijai.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,a.kt)("h2",d({},{id:"pavyzd\u017eiai"}),"Pavyzd\u017eiai"),(0,a.kt)(n.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Grouped",value:"grouped"},{label:"Summary Variable",value:"summaryVariable"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<PieChart \n    data={heartdisease} \n    variable="Drugs"\n/>\n'))),(0,a.kt)(l.Z,{value:"grouped",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<PieChart \n    data={heartdisease} \n    variable="Drugs"\n    group="Gender"\n/>\n'))),(0,a.kt)(l.Z,{value:"summaryVariable",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<PieChart \n    data={heartdisease} \n    variable="Drugs"\n    summaryVariable="Cost"\n/>\n')))))}h.isMDXComponent=!0}}]);