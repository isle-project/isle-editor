"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10389],{603905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(202784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(b,o(o({ref:t},c),{},{components:r})):n.createElement(b,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},440034:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(202784),a=r(386010),l="tabItem_Ymn6",o=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function p({children:e,hidden:t,className:r}){return n.createElement("div",((e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&c(e,r,t[r]);return e})({role:"tabpanel",className:(0,a.Z)(l,r)},{hidden:t}),e)}},751361:function(e,t,r){r.d(t,{Z:function(){return k}});var n=r(202784),a=r(386010),l=r(152670),o=r(258433),i=r(952326),s=r(638849),u="tabList__CuJ",c="tabItem_LNqP",p=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,y=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&y(e,r,t[r]);if(b)for(var r of b(t))v.call(t,r)&&y(e,r,t[r]);return e};function h(e){var t,r;const{lazy:l,block:p,defaultValue:b,values:f,groupId:v,className:y}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=null!=f?f:h.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),O=(0,o.l)(k,((e,t)=>e.value===t.value));if(O.length>0)throw new Error(`Docusaurus error: Duplicate values "${O.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===b?b:null!=(r=null!=b?b:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?r:h[0].props.value;if(null!==w&&!k.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:j}=(0,i.U)(),[P,x]=(0,n.useState)(w),E=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=v){const e=N[v];null!=e&&e!==P&&k.some((t=>t.value===e))&&x(e)}const T=e=>{const t=e.currentTarget,r=E.indexOf(t),n=k[r].value;n!==P&&(C(t),x(n),null!=v&&j(v,String(n)))},D=e=>{var t,r;let n=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const r=E.indexOf(e.currentTarget)+1;n=null!=(t=E[r])?t:E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=null!=(r=E[t])?r:E[E.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,a.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},y)},k.map((({value:e,label:t,attributes:r})=>{return n.createElement("li",(l=g({role:"tab",tabIndex:P===e?0:-1,"aria-selected":P===e,key:e,ref:e=>E.push(e),onKeyDown:D,onClick:T},r),o={className:(0,a.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":P===e})},d(l,m(o))),null!=t?t:e);var l,o}))),l?(0,n.cloneElement)(h.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function k(e){const t=(0,l.Z)();return n.createElement(h,g({key:String(t)},e))}},859229:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return k},frontMatter:function(){return b},metadata:function(){return v},toc:function(){return g}});var n=r(603905),a=r(751361),l=r(440034),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&d(e,r,t[r]);if(u)for(var r of u(t))p.call(t,r)&&d(e,r,t[r]);return e};const b={id:"mosaicplot",title:"Mosaic Plot",sidebar_label:"Mosaic Plot"},f=void 0,v={unversionedId:"plots/mosaicplot",id:"plots/mosaicplot",title:"Mosaic Plot",description:"Ein Mosaikplot.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/plots/mosaicplot.md",sourceDirName:"plots",slug:"/plots/mosaicplot",permalink:"/de/docs/plots/mosaicplot",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/mosaicplot.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614551296,formattedLastUpdatedAt:"28. Feb. 2021",frontMatter:{id:"mosaicplot",title:"Mosaic Plot",sidebar_label:"Mosaic Plot"},sidebar:"docs",previous:{title:"Map",permalink:"/de/docs/plots/map"},next:{title:"NetworkPlot",permalink:"/de/docs/plots/network-plot"}},y={},g=[{value:"Optionen",id:"optionen",level:2},{value:"Beispiele",id:"beispiele",level:2}],h={toc:g};function k(e){var t,r=e,{components:o}=r,d=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},h),d),i(t,s({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Ein Mosaikplot."),(0,n.kt)("h2",m({},{id:"optionen"}),"Optionen"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"data")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object (required)"),": Objekt mit Werte-Arrays f\xfcr jede Variable. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"variables")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array (required)"),": Array der anzuzeigenden Variablen. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"showColors")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob Farben mit Bedeutung angezeigt werden sollen. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"axisLabels")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": Positionierung der Achsenbeschriftungen (entweder ",(0,n.kt)("inlineCode",{parentName:"li"},"parallel zur Achse"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"horizontal"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"senkrecht zur Achse")," oder ",(0,n.kt)("inlineCode",{parentName:"li"},"vertikal"),"). Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"'parallel to the axis'"),".")),(0,n.kt)("h2",m({},{id:"beispiele"}),"Beispiele"),(0,n.kt)(a.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Colored",value:"colored"},{label:"Axis Labels",value:"axisLabels"}],lazy:!0,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MosaicPlot\n    data={heartdisease} \n    variables={[ 'Gender', 'Drugs' ]}\n/>\n"))),(0,n.kt)(l.Z,{value:"colored",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MosaicPlot\n    data={heartdisease} \n    variables={[ 'Gender', 'Drugs' ]}\n    showColors\n/>\n"))),(0,n.kt)(l.Z,{value:"axisLabels",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MosaicPlot\n    data={heartdisease} \n    variables={[ 'Gender', 'Drugs' ]}\n    showColors\n    axisLabels=\"parallel to the axis\"\n/>\n")))))}k.isMDXComponent=!0}}]);