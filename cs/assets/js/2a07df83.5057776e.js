"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58669],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(202784),a=n(386010),l="tabItem_Ymn6",o=Object.defineProperty,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function p({children:e,hidden:t,className:n}){return r.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&c(e,n,t[n]);return e})({role:"tabpanel",className:(0,a.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(202784),a=n(386010),l=n(152670),o=n(258433),i=n(952326),u=n(638849),s="tabList__CuJ",c="tabItem_LNqP",p=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))v.call(t,n)&&y(e,n,t[n]);if(f)for(var n of f(t))b.call(t,n)&&y(e,n,t[n]);return e};function k(e){var t,n;const{lazy:l,block:p,defaultValue:f,values:v,groupId:b,className:y}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=v?v:k.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),O=(0,o.l)(h,((e,t)=>e.value===t.value));if(O.length>0)throw new Error(`Docusaurus error: Duplicate values "${O.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===f?f:null!=(n=null!=f?f:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?n:k[0].props.value;if(null!==N&&!h.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:j,setTabGroupChoices:P}=(0,i.U)(),[w,C]=(0,r.useState)(N),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=b){const e=j[b];null!=e&&e!==w&&h.some((t=>t.value===e))&&C(e)}const I=e=>{const t=e.currentTarget,n=T.indexOf(t),r=h[n].value;r!==w&&(E(t),C(r),null!=b&&P(b,String(r)))},x=e=>{var t,n;let r=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;r=null!=(t=T[n])?t:T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;r=null!=(n=T[t])?n:T[T.length-1];break}}null==r||r.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},y)},h.map((({value:e,label:t,attributes:n})=>{return r.createElement("li",(l=g({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>T.push(e),onKeyDown:x,onClick:I},n),o={className:(0,a.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":w===e})},m(l,d(o))),null!=t?t:e);var l,o}))),l?(0,r.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function h(e){const t=(0,l.Z)();return r.createElement(k,g({key:String(t)},e))}},187103:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return v},default:function(){return h},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return g}});var r=n(603905),a=n(751361),l=n(440034),o=Object.defineProperty,i=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&m(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&m(e,n,t[n]);return e};const f={id:"interval-plot",title:"Interval Plot",sidebar_label:"Interval Plot"},v=void 0,b={unversionedId:"plots/interval-plot",id:"plots/interval-plot",title:"Interval Plot",description:"Intervalov\xfd graf.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/plots/interval-plot.md",sourceDirName:"plots",slug:"/plots/interval-plot",permalink:"/cs/docs/plots/interval-plot",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/interval-plot.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1630354211,formattedLastUpdatedAt:"30. 8. 2021",frontMatter:{id:"interval-plot",title:"Interval Plot",sidebar_label:"Interval Plot"},sidebar:"docs",previous:{title:"Histogram",permalink:"/cs/docs/plots/histogram"},next:{title:"Line Plot",permalink:"/cs/docs/plots/lineplot"}},y={},g=[{value:"Mo\u017enosti",id:"mo\u017enosti",level:2},{value:"P\u0159\xedklady",id:"p\u0159\xedklady",level:2}],k={toc:g};function h(e){var t,n=e,{components:o}=n,m=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},k),m),i(t,u({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Intervalov\xfd graf."),(0,r.kt)("h2",d({},{id:"mo\u017enosti"}),"Mo\u017enosti"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object (required)"),": objekt pole hodnot. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"variable")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string (required)"),": prom\u011bnn\xe9, kter\xe9 se maj\xed zobrazit. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"group")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": seskupovac\xed prom\u011bnn\xe1. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"orientation")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"vertik\xe1ln\xed")," nebo ",(0,r.kt)("inlineCode",{parentName:"li"},"horizont\xe1ln\xed")," orientace. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'vertical'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"significanceLevel")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": \xfarove\u0148 v\xfdznamnosti. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0.05"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"multipleTestingAdjustment")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, zda se m\xe1 upravit hladina v\xfdznamnosti pro kontrolu m\xedry fale\u0161n\xfdch objev\u016f.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,r.kt)("h2",d({},{id:"p\u0159\xedklady"}),"P\u0159\xedklady"),(0,r.kt)(a.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Horizontal",value:"horizontal"},{label:"Custom Significance Level",value:"significance"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<IntervalPlot data={heartdisease} variable="Cost" group="Drugs" />\n'))),(0,r.kt)(l.Z,{value:"horizontal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<IntervalPlot data={heartdisease} variable="Cost" group="Drugs" orientation="horizontal" />\n'))),(0,r.kt)(l.Z,{value:"significance",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<IntervalPlot data={heartdisease} variable="Cost" group="Drugs" significanceLevel={0.01} />\n')))))}h.isMDXComponent=!0}}]);