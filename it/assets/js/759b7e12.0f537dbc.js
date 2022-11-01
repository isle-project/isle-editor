"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[85747],{603905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(202784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,b=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},440034:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(202784),a=r(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function p({children:e,hidden:t,className:r}){return n.createElement("div",((e,t)=>{for(var r in t||(t={}))u.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))s.call(t,r)&&c(e,r,t[r]);return e})({role:"tabpanel",className:(0,a.Z)(l,r)},{hidden:t}),e)}},751361:function(e,t,r){r.d(t,{Z:function(){return k}});var n=r(202784),a=r(386010),l=r(152670),i=r(258433),o=r(952326),u=r(638849),s="tabList__CuJ",c="tabItem_LNqP",p=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,y=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&y(e,r,t[r]);if(b)for(var r of b(t))v.call(t,r)&&y(e,r,t[r]);return e};function O(e){var t,r;const{lazy:l,block:p,defaultValue:b,values:f,groupId:v,className:y}=e,O=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=null!=f?f:O.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),h=(0,i.l)(k,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===b?b:null!=(r=null!=b?b:null==(t=O.find((e=>e.props.default)))?void 0:t.props.value)?r:O[0].props.value;if(null!==N&&!k.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:j}=(0,o.U)(),[C,E]=(0,n.useState)(N),P=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=v){const e=w[v];null!=e&&e!==C&&k.some((t=>t.value===e))&&E(e)}const x=e=>{const t=e.currentTarget,r=P.indexOf(t),n=k[r].value;n!==C&&(T(t),E(n),null!=v&&j(v,String(n)))},D=e=>{var t,r;let n=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const r=P.indexOf(e.currentTarget)+1;n=null!=(t=P[r])?t:P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;n=null!=(r=P[t])?r:P[P.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,a.Z)("tabs-container",s)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},y)},k.map((({value:e,label:t,attributes:r})=>{return n.createElement("li",(l=g({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>P.push(e),onKeyDown:D,onClick:x},r),i={className:(0,a.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":C===e})},d(l,m(i))),null!=t?t:e);var l,i}))),l?(0,n.cloneElement)(O.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},O.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function k(e){const t=(0,l.Z)();return n.createElement(O,g({key:String(t)},e))}},63041:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return k},frontMatter:function(){return b},metadata:function(){return v},toc:function(){return g}});var n=r(603905),a=r(751361),l=r(440034),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&d(e,r,t[r]);if(s)for(var r of s(t))p.call(t,r)&&d(e,r,t[r]);return e};const b={id:"r-output",title:"R Output",sidebar_label:"R Output"},f=void 0,v={unversionedId:"r/r-output",id:"r/r-output",title:"R Output",description:"Componente per il rendering dell'uscita R all'interno di una lezione ISLE.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/r/output.md",sourceDirName:"r",slug:"/r/r-output",permalink:"/it/docs/r/r-output",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/r/output.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1617045753,formattedLastUpdatedAt:"29 mar 2021",frontMatter:{id:"r-output",title:"R Output",sidebar_label:"R Output"},sidebar:"docs",previous:{title:"R Help",permalink:"/it/docs/r/r-help"},next:{title:"R Plot",permalink:"/it/docs/r/r-plot"}},y={},g=[{value:"Opzioni",id:"opzioni",level:2},{value:"Esempi",id:"esempi",level:2}],O={toc:g};function k(e){var t,r=e,{components:i}=r,d=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},O),d),o(t,u({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Componente per il rendering dell'uscita R all'interno di una lezione ISLE."),(0,n.kt)("h2",m({},{id:"opzioni"}),"Opzioni"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"code")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": Codice R utilizzato per valutare. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"libraries")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array"),": R librerie che dovrebbero essere caricate automaticamente quando viene eseguito il ",(0,n.kt)("inlineCode",{parentName:"li"},"codice")," di input. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"prependCode")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|array)"),": R code (o ",(0,n.kt)("inlineCode",{parentName:"li"},"array")," di blocchi di codice) da preparare al codice memorizzato in ",(0,n.kt)("inlineCode",{parentName:"li"},"code")," quando si valuta. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onPlots")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": richiamata invocata con qualsiasi trama generata. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onPlots() {}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onResult")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": richiamata con ",(0,n.kt)("inlineCode",{parentName:"li"},"errore")," (",(0,n.kt)("inlineCode",{parentName:"li"},"null")," se l'operazione \xe8 andata a buon fine) e ",(0,n.kt)("inlineCode",{parentName:"li"},"risultato")," mantenendo l'uscita R. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onResult() {}"),".")),(0,n.kt)("h2",m({},{id:"esempi"}),"Esempi"),(0,n.kt)(a.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Multiline",value:"multiline"},{label:"Loading Data",value:"loadingData"},{label:"Using Libraries",value:"usingLibraries"}],lazy:!0,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<ROutput code="runif(10)" />\n'))),(0,n.kt)(l.Z,{value:"multiline",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<ROutput code={`\nx <- runif( 100 );\ny <- 3.0 * x + rnorm( 100 );\nfit <- lm( y ~ x );\nsummary( fit );\n`} />\n"))),(0,n.kt)(l.Z,{value:"loadingData",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<ROutput \n    prependCode={\'wages <- read.table( "https://raw.githubusercontent.com/stdlib-js/stdlib/develop/lib/node_modules/%40stdlib/datasets/berndt-cps-wages-1985/data/data.csv", header=TRUE, sep=",")\'} \n    code="summary(wages)"\n/>\n'))),(0,n.kt)(l.Z,{value:"usingLibraries",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<ROutput \n    libraries={[ 'dplyr' ]}\n    code={'starwars %>% filter(species == \"Droid\")'}\n/>\n")))))}k.isMDXComponent=!0}}]);