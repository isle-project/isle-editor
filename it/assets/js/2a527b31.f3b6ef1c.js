"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[41751],{603905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(202784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return a?n.createElement(f,l(l({ref:t},c),{},{components:a})):n.createElement(f,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},440034:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(202784),r=a(386010),i="tabItem_Ymn6",l=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function p({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&c(e,a,t[a]);if(o)for(var a of o(t))u.call(t,a)&&c(e,a,t[a]);return e})({role:"tabpanel",className:(0,r.Z)(i,a)},{hidden:t}),e)}},751361:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(202784),r=a(386010),i=a(152670),l=a(258433),o=a(952326),s=a(638849),u="tabList__CuJ",c="tabItem_LNqP",p=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,y=(e,t,a)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,k=(e,t)=>{for(var a in t||(t={}))b.call(t,a)&&y(e,a,t[a]);if(f)for(var a of f(t))v.call(t,a)&&y(e,a,t[a]);return e};function g(e){var t,a;const{lazy:i,block:p,defaultValue:f,values:b,groupId:v,className:y}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=b?b:g.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),h=(0,l.l)(N,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===f?f:null!=(a=null!=f?f:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?a:g[0].props.value;if(null!==O&&!N.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:C,setTabGroupChoices:w}=(0,o.U)(),[j,S]=(0,n.useState)(O),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,s.o5)();if(null!=v){const e=C[v];null!=e&&e!==j&&N.some((t=>t.value===e))&&S(e)}const P=e=>{const t=e.currentTarget,a=T.indexOf(t),n=N[a].value;n!==j&&(E(t),S(n),null!=v&&w(v,String(n)))},x=e=>{var t,a;let n=null;switch(e.key){case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;n=null!=(t=T[a])?t:T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=null!=(a=T[t])?a:T[T.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},y)},N.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(i=k({role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,key:e,ref:e=>T.push(e),onKeyDown:x,onFocus:P,onClick:P},a),l={className:(0,r.Z)("tabs__item",c,null==a?void 0:a.className,{"tabs__item--active":j===e})},m(i,d(l))),null!=t?t:e);var i,l}))),i?(0,n.cloneElement)(g.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function N(e){const t=(0,i.Z)();return n.createElement(g,k({key:String(t)},e))}},78415:function(e,t,a){a.r(t),a.d(t,{assets:function(){return y},contentTitle:function(){return b},default:function(){return N},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return k}});var n=a(603905),r=a(751361),i=a(440034),l=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&m(e,a,t[a]);if(u)for(var a of u(t))p.call(t,a)&&m(e,a,t[a]);return e};const f={id:"summary-statistics",title:"Summary Statistics",sidebar_label:"Summary Statistics"},b=void 0,v={unversionedId:"summary-statistics",id:"summary-statistics",title:"Summary Statistics",description:"Statistiche riassuntive.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/summary-statistics.md",sourceDirName:".",slug:"/summary-statistics",permalink:"/it/docs/summary-statistics",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/summary-statistics.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1630356835,formattedLastUpdatedAt:"30 ago 2021",frontMatter:{id:"summary-statistics",title:"Summary Statistics",sidebar_label:"Summary Statistics"},sidebar:"docs",previous:{title:"Two-Sample Proportion Test",permalink:"/it/docs/tests/proptest2"},next:{title:"Beacon Tooltip",permalink:"/it/docs/beacon-tooltip"}},y={},k=[{value:"Opzioni",id:"opzioni",level:2},{value:"Esempi",id:"esempi",level:2}],g={toc:k};function N(e){var t,a=e,{components:l}=a,m=((e,t)=>{var a={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=d(d({},g),m),o(t,s({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Statistiche riassuntive."),(0,n.kt)("h2",d({},{id:"opzioni"}),"Opzioni"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"data")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object (required)"),": oggetto di array di valori. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"variables")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),": variabile(i) per la quale calcolare le statistiche. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"statistics")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),": statistiche da calcolare per le variabili selezionate (o ",(0,n.kt)("inlineCode",{parentName:"li"},"Mean"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Median"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Min"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Max"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Range"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Interquartile Range"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Standard Deviation"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Variance"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Correlation"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Correlation Matrix"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Skewness"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Excess Kurtosis"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"First Quartile"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Third Quartile"),", o ",(0,n.kt)("inlineCode",{parentName:"li"},"Quantile"),"). Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"secondVariable")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": seconda variabile per la statistica di correlazione. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"omit")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": controlla se omettere i valori mancanti. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"group")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array<(string|Factor)>"),": nome della/e variabile/i di raggruppamento. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"quantiles")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array"),": array di quantili da calcolare per la statistica ",(0,n.kt)("inlineCode",{parentName:"li"},"Quantile. Default: "),"none`.")),(0,n.kt)("h2",d({},{id:"esempi"}),"Esempi"),(0,n.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Grouped",value:"group"},{label:"Quantiles",value:"quantiles"}],lazy:!0,mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"minimal",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<SummaryStatistics \n    data={heartdisease} \n    variables={[ 'Age', 'Cost' ]}\n    statistics={[ 'Mean', 'Standard Deviation' ]}\n/>\n"))),(0,n.kt)(i.Z,{value:"group",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<SummaryStatistics \n    data={heartdisease} \n    variables={[ 'Age', 'Cost' ]}\n    statistics={[ 'Mean', 'Standard Deviation' ]}\n    group={[ 'Gender' ]}\n/>\n"))),(0,n.kt)(i.Z,{value:"quantiles",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<SummaryStatistics \n    data={heartdisease} \n    variables={[ 'Age', 'Cost' ]}\n    statistics={[ 'Quantile' ]}\n    quantiles={[ 0.1, 0.25, 0.5, 0.75, 0.9 ]}\n/>\n")))))}N.isMDXComponent=!0}}]);