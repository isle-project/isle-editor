"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73923],{603905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(202784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},440034:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(202784),a=r(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function c({children:e,hidden:t,className:r}){return n.createElement("div",((e,t)=>{for(var r in t||(t={}))u.call(t,r)&&p(e,r,t[r]);if(o)for(var r of o(t))s.call(t,r)&&p(e,r,t[r]);return e})({role:"tabpanel",className:(0,a.Z)(l,r)},{hidden:t}),e)}},751361:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(202784),a=r(386010),l=r(152670),i=r(258433),o=r(952326),u=r(638849),s="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&g(e,r,t[r]);if(f)for(var r of f(t))v.call(t,r)&&g(e,r,t[r]);return e};function k(e){var t,r;const{lazy:l,block:c,defaultValue:f,values:b,groupId:v,className:g}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=b?b:k.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),O=(0,i.l)(h,((e,t)=>e.value===t.value));if(O.length>0)throw new Error(`Docusaurus error: Duplicate values "${O.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===f?f:null!=(r=null!=f?f:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?r:k[0].props.value;if(null!==N&&!h.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:j,setTabGroupChoices:w}=(0,o.U)(),[P,E]=(0,n.useState)(N),T=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=v){const e=j[v];null!=e&&e!==P&&h.some((t=>t.value===e))&&E(e)}const I=e=>{const t=e.currentTarget,r=T.indexOf(t),n=h[r].value;n!==P&&(C(t),E(n),null!=v&&w(v,String(n)))},x=e=>{var t,r;let n=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const r=T.indexOf(e.currentTarget)+1;n=null!=(t=T[r])?t:T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=null!=(r=T[t])?r:T[T.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,a.Z)("tabs-container",s)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":c},g)},h.map((({value:e,label:t,attributes:r})=>{return n.createElement("li",(l=y({role:"tab",tabIndex:P===e?0:-1,"aria-selected":P===e,key:e,ref:e=>T.push(e),onKeyDown:x,onClick:I},r),i={className:(0,a.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":P===e})},d(l,m(i))),null!=t?t:e);var l,i}))),l?(0,n.cloneElement)(k.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function h(e){const t=(0,l.Z)();return n.createElement(k,y({key:String(t)},e))}},841374:function(e,t,r){r.r(t),r.d(t,{assets:function(){return g},contentTitle:function(){return b},default:function(){return h},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return y}});var n=r(603905),a=r(751361),l=r(440034),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&d(e,r,t[r]);if(s)for(var r of s(t))c.call(t,r)&&d(e,r,t[r]);return e};const f={id:"interval-plot",title:"Interval Plot",sidebar_label:"Interval Plot"},b=void 0,v={unversionedId:"plots/interval-plot",id:"plots/interval-plot",title:"Interval Plot",description:"Ein Intervalldiagramm.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/plots/interval-plot.md",sourceDirName:"plots",slug:"/plots/interval-plot",permalink:"/de/docs/plots/interval-plot",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/interval-plot.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1630354211,formattedLastUpdatedAt:"30. Aug. 2021",frontMatter:{id:"interval-plot",title:"Interval Plot",sidebar_label:"Interval Plot"},sidebar:"docs",previous:{title:"Histogram",permalink:"/de/docs/plots/histogram"},next:{title:"Line Plot",permalink:"/de/docs/plots/lineplot"}},g={},y=[{value:"Optionen",id:"optionen",level:2},{value:"Beispiele",id:"beispiele",level:2}],k={toc:y};function h(e){var t,r=e,{components:i}=r,d=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},k),d),o(t,u({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Ein Intervalldiagramm."),(0,n.kt)("h2",m({},{id:"optionen"}),"Optionen"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"data")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object (required)"),": Objekt der Wertefelder. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"variable")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string (required)"),": Variable(n) zur Anzeige. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"group")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": Gruppierungsvariable. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"orientation")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),': vertikale" oder "horizontale" Ausrichtung. Default: ',(0,n.kt)("inlineCode",{parentName:"li"},"'vertical'"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"significanceLevel")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": Signifikanzniveau. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"0.05"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"multipleTestingAdjustment")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob das Signifikanzniveau angepasst werden soll, um die Falschentdeckungsrate zu kontrollieren. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,n.kt)("h2",m({},{id:"beispiele"}),"Beispiele"),(0,n.kt)(a.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Horizontal",value:"horizontal"},{label:"Custom Significance Level",value:"significance"}],lazy:!0,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<IntervalPlot data={heartdisease} variable="Cost" group="Drugs" />\n'))),(0,n.kt)(l.Z,{value:"horizontal",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<IntervalPlot data={heartdisease} variable="Cost" group="Drugs" orientation="horizontal" />\n'))),(0,n.kt)(l.Z,{value:"significance",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<IntervalPlot data={heartdisease} variable="Cost" group="Drugs" significanceLevel={0.01} />\n')))))}h.isMDXComponent=!0}}]);