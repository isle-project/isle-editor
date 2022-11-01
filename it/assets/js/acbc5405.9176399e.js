"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[69627],{603905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var a=r(202784);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,b=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return r?a.createElement(b,o(o({ref:t},c),{},{components:r})):a.createElement(b,o({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},440034:function(e,t,r){r.d(t,{Z:function(){return p}});var a=r(202784),n=r(386010),l="tabItem_Ymn6",o=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function p({children:e,hidden:t,className:r}){return a.createElement("div",((e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&c(e,r,t[r]);return e})({role:"tabpanel",className:(0,n.Z)(l,r)},{hidden:t}),e)}},751361:function(e,t,r){r.d(t,{Z:function(){return O}});var a=r(202784),n=r(386010),l=r(152670),o=r(258433),i=r(952326),s=r(638849),u="tabList__CuJ",c="tabItem_LNqP",p=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,y=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&y(e,r,t[r]);if(b)for(var r of b(t))v.call(t,r)&&y(e,r,t[r]);return e};function h(e){var t,r;const{lazy:l,block:p,defaultValue:b,values:f,groupId:v,className:y}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),O=null!=f?f:h.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),k=(0,o.l)(O,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===b?b:null!=(r=null!=b?b:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?r:h[0].props.value;if(null!==w&&!O.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${O.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:j,setTabGroupChoices:N}=(0,i.U)(),[P,x]=(0,a.useState)(w),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=v){const e=j[v];null!=e&&e!==P&&O.some((t=>t.value===e))&&x(e)}const C=e=>{const t=e.currentTarget,r=E.indexOf(t),a=O[r].value;a!==P&&(T(t),x(a),null!=v&&N(v,String(a)))},D=e=>{var t,r;let a=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const r=E.indexOf(e.currentTarget)+1;a=null!=(t=E[r])?t:E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;a=null!=(r=E[t])?r:E[E.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,n.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":p},y)},O.map((({value:e,label:t,attributes:r})=>{return a.createElement("li",(l=g({role:"tab",tabIndex:P===e?0:-1,"aria-selected":P===e,key:e,ref:e=>E.push(e),onKeyDown:D,onClick:C},r),o={className:(0,n.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":P===e})},m(l,d(o))),null!=t?t:e);var l,o}))),l?(0,a.cloneElement)(h.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function O(e){const t=(0,l.Z)();return a.createElement(h,g({key:String(t)},e))}},679141:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return O},frontMatter:function(){return b},metadata:function(){return v},toc:function(){return g}});var a=r(603905),n=r(751361),l=r(440034),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&m(e,r,t[r]);if(u)for(var r of u(t))p.call(t,r)&&m(e,r,t[r]);return e};const b={id:"mosaicplot",title:"Mosaic Plot",sidebar_label:"Mosaic Plot"},f=void 0,v={unversionedId:"plots/mosaicplot",id:"plots/mosaicplot",title:"Mosaic Plot",description:"Una trama a mosaico.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/plots/mosaicplot.md",sourceDirName:"plots",slug:"/plots/mosaicplot",permalink:"/it/docs/plots/mosaicplot",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/mosaicplot.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614551296,formattedLastUpdatedAt:"28 feb 2021",frontMatter:{id:"mosaicplot",title:"Mosaic Plot",sidebar_label:"Mosaic Plot"},sidebar:"docs",previous:{title:"Map",permalink:"/it/docs/plots/map"},next:{title:"NetworkPlot",permalink:"/it/docs/plots/network-plot"}},y={},g=[{value:"Opzioni",id:"opzioni",level:2},{value:"Esempi",id:"esempi",level:2}],h={toc:g};function O(e){var t,r=e,{components:o}=r,m=((e,t)=>{var r={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=d(d({},h),m),i(t,s({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Una trama a mosaico."),(0,a.kt)("h2",d({},{id:"opzioni"}),"Opzioni"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"data")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object (required)"),": oggetto di array di valori per ogni variabile. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"variables")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array (required)"),": array di variabili da visualizzare. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"showColors")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": controlla se visualizzare i colori che mostrano il significato. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"axisLabels")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),': posizionamento delle etichette degli assi (sia "parallelo all\'asse", "orizzontale", "perpendicolare all\'asse" o "verticale"). Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"'parallel to the axis'"),".")),(0,a.kt)("h2",d({},{id:"esempi"}),"Esempi"),(0,a.kt)(n.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Colored",value:"colored"},{label:"Axis Labels",value:"axisLabels"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MosaicPlot\n    data={heartdisease} \n    variables={[ 'Gender', 'Drugs' ]}\n/>\n"))),(0,a.kt)(l.Z,{value:"colored",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MosaicPlot\n    data={heartdisease} \n    variables={[ 'Gender', 'Drugs' ]}\n    showColors\n/>\n"))),(0,a.kt)(l.Z,{value:"axisLabels",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MosaicPlot\n    data={heartdisease} \n    variables={[ 'Gender', 'Drugs' ]}\n    showColors\n    axisLabels=\"parallel to the axis\"\n/>\n")))))}O.isMDXComponent=!0}}]);