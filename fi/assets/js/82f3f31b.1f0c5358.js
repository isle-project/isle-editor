"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[37414],{603905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(202784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||l;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},440034:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(202784),a=r(386010),l="tabItem_Ymn6",o=Object.defineProperty,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function p({children:e,hidden:t,className:r}){return n.createElement("div",((e,t)=>{for(var r in t||(t={}))u.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&c(e,r,t[r]);return e})({role:"tabpanel",className:(0,a.Z)(l,r)},{hidden:t}),e)}},751361:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(202784),a=r(386010),l=r(152670),o=r(258433),i=r(952326),u=r(638849),s="tabList__CuJ",c="tabItem_LNqP",p=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,y=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))v.call(t,r)&&y(e,r,t[r]);if(f)for(var r of f(t))b.call(t,r)&&y(e,r,t[r]);return e};function k(e){var t,r;const{lazy:l,block:p,defaultValue:f,values:v,groupId:b,className:y}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=v?v:k.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),O=(0,o.l)(h,((e,t)=>e.value===t.value));if(O.length>0)throw new Error(`Docusaurus error: Duplicate values "${O.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const j=null===f?f:null!=(r=null!=f?f:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?r:k[0].props.value;if(null!==j&&!h.some((e=>e.value===j)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${j}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:w}=(0,i.U)(),[P,E]=(0,n.useState)(j),T=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=b){const e=N[b];null!=e&&e!==P&&h.some((t=>t.value===e))&&E(e)}const I=e=>{const t=e.currentTarget,r=T.indexOf(t),n=h[r].value;n!==P&&(C(t),E(n),null!=b&&w(b,String(n)))},x=e=>{var t,r;let n=null;switch(e.key){case"ArrowRight":{const r=T.indexOf(e.currentTarget)+1;n=null!=(t=T[r])?t:T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=null!=(r=T[t])?r:T[T.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,a.Z)("tabs-container",s)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},y)},h.map((({value:e,label:t,attributes:r})=>{return n.createElement("li",(l=g({role:"tab",tabIndex:P===e?0:-1,"aria-selected":P===e,key:e,ref:e=>T.push(e),onKeyDown:x,onFocus:I,onClick:I},r),o={className:(0,a.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":P===e})},m(l,d(o))),null!=t?t:e);var l,o}))),l?(0,n.cloneElement)(k.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function h(e){const t=(0,l.Z)();return n.createElement(k,g({key:String(t)},e))}},949373:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return v},default:function(){return h},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return g}});var n=r(603905),a=r(751361),l=r(440034),o=Object.defineProperty,i=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&m(e,r,t[r]);if(s)for(var r of s(t))p.call(t,r)&&m(e,r,t[r]);return e};const f={id:"interval-plot",title:"Interval Plot",sidebar_label:"Interval Plot"},v=void 0,b={unversionedId:"plots/interval-plot",id:"plots/interval-plot",title:"Interval Plot",description:"Intervallidiagrammi.",source:"@site/i18n/fi/docusaurus-plugin-content-docs/current/plots/interval-plot.md",sourceDirName:"plots",slug:"/plots/interval-plot",permalink:"/fi/docs/plots/interval-plot",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/interval-plot.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1630354211,formattedLastUpdatedAt:"30.8.2021",frontMatter:{id:"interval-plot",title:"Interval Plot",sidebar_label:"Interval Plot"},sidebar:"docs",previous:{title:"Histogram",permalink:"/fi/docs/plots/histogram"},next:{title:"Line Plot",permalink:"/fi/docs/plots/lineplot"}},y={},g=[{value:"Vaihtoehdot",id:"vaihtoehdot",level:2},{value:"Esimerkkej\xe4",id:"esimerkkej\xe4",level:2}],k={toc:g};function h(e){var t,r=e,{components:o}=r,m=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=d(d({},k),m),i(t,u({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Intervallidiagrammi."),(0,n.kt)("h2",d({},{id:"vaihtoehdot"}),"Vaihtoehdot"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"data")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object (required)"),": arvojoukkojen objekti. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"variable")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string (required)"),": n\xe4ytett\xe4v\xe4t muuttujat. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"group")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": ryhmittelymuuttuja. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"orientation")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),': "pystysuora" tai "vaakasuora" suuntaus. Default: ',(0,n.kt)("inlineCode",{parentName:"li"},"'vertical'"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"significanceLevel")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": merkitsevyystaso. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"0.05"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"multipleTestingAdjustment")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": valvoo, s\xe4\xe4det\xe4\xe4nk\xf6 merkitsevyystasoa v\xe4\xe4r\xe4n l\xf6yd\xf6n osuuden hallitsemiseksi.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,n.kt)("h2",d({},{id:"esimerkkej\xe4"}),"Esimerkkej\xe4"),(0,n.kt)(a.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Horizontal",value:"horizontal"},{label:"Custom Significance Level",value:"significance"}],lazy:!0,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<IntervalPlot data={heartdisease} variable="Cost" group="Drugs" />\n'))),(0,n.kt)(l.Z,{value:"horizontal",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<IntervalPlot data={heartdisease} variable="Cost" group="Drugs" orientation="horizontal" />\n'))),(0,n.kt)(l.Z,{value:"significance",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<IntervalPlot data={heartdisease} variable="Cost" group="Drugs" significanceLevel={0.01} />\n')))))}h.isMDXComponent=!0}}]);