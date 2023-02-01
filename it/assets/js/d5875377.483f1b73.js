"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[67727],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return b}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,b=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(b,i(i({ref:t},p),{},{components:n})):a.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(202784),r=n(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(202784),r=n(386010),l=n(152670),i=n(258433),o=n(952326),u=n(638849),s="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&y(e,n,t[n]);if(b)for(var n of b(t))v.call(t,n)&&y(e,n,t[n]);return e};function g(e){var t,n;const{lazy:l,block:c,defaultValue:b,values:f,groupId:v,className:y}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=null!=f?f:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),N=(0,i.l)(k,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===b?b:null!=(n=null!=b?b:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?n:g[0].props.value;if(null!==O&&!k.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:C}=(0,o.U)(),[j,D]=(0,a.useState)(O),E=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=v){const e=w[v];null!=e&&e!==j&&k.some((t=>t.value===e))&&D(e)}const P=e=>{const t=e.currentTarget,n=E.indexOf(t),a=k[n].value;a!==j&&(x(t),D(a),null!=v&&C(v,String(a)))},I=e=>{var t,n;let a=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const n=E.indexOf(e.currentTarget)+1;a=null!=(t=E[n])?t:E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;a=null!=(n=E[t])?n:E[E.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},y)},k.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(l=h({role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,key:e,ref:e=>E.push(e),onKeyDown:I,onClick:P},n),i={className:(0,r.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":j===e})},d(l,m(i))),null!=t?t:e);var l,i}))),l?(0,a.cloneElement)(g.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function k(e){const t=(0,l.Z)();return a.createElement(g,h({key:String(t)},e))}},670114:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return k},frontMatter:function(){return b},metadata:function(){return v},toc:function(){return h}});var a=n(603905),r=n(751361),l=n(440034),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&d(e,n,t[n]);return e};const b={id:"dashboard",title:"Dashboard",sidebar_label:"Dashboard"},f=void 0,v={unversionedId:"dashboard",id:"dashboard",title:"Dashboard",description:"Un cruscotto per combinare la gestione di pi\xf9 campi di input per bambini.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/dashboard.md",sourceDirName:".",slug:"/dashboard",permalink:"/it/docs/dashboard",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/dashboard.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1638825940,formattedLastUpdatedAt:"6 dic 2021",frontMatter:{id:"dashboard",title:"Dashboard",sidebar_label:"Dashboard"},sidebar:"docs",previous:{title:"Sortable Tree",permalink:"/it/docs/sortable-tree"},next:{title:"Data Sampler",permalink:"/it/docs/data-sampler"}},y={},h=[{value:"Opzioni",id:"opzioni",level:2},{value:"Esempi",id:"esempi",level:2}],g={toc:h};function k(e){var t,n=e,{components:i}=n,d=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},g),d),o(t,u({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Un cruscotto per combinare la gestione di pi\xf9 campi di input per bambini."),(0,a.kt)("h2",m({},{id:"opzioni"}),"Opzioni"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"autoStart")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),': se impostata su "true", la funzione "onGenerate" viene eseguita all\'avvio con i valori di ingresso predefiniti. Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"autoUpdate")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": controlla se la funzione ",(0,a.kt)("inlineCode",{parentName:"li"},"onGenerate")," deve essere invocata automaticamente quando uno dei campi di input figlio cambia. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"description")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|node)"),": descrizione del cruscotto. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"disabled")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": controlla se il cruscotto deve essere disabilitato. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"label")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": Etichetta a bottone. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"maxWidth")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": larghezza massima del cruscotto. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"600"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"className")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": nome della classe. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"bodyClassName")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": nome della classe per il corpo della carta. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'d-grid gap-3'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": Stili in linea CSS. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onGenerate")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": funzione invocata quando si fa clic sul pulsante o uno dei valori di input del cruscotto cambia (se ",(0,a.kt)("inlineCode",{parentName:"li"},"autoUpdate")," \xe8 impostato su ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"). La funzione viene richiamata con i valori dei campi di input, nell'ordine in cui sono posizionati nel dashboard. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onGenerate() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"title")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|node)"),": titolo della carta. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),".")),(0,a.kt)("h2",m({},{id:"esempi"}),"Esempi"),(0,a.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Multiple Inputs",value:"multipleInputs"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Dashboard title="Alerter" onGenerate={( x ) => { alert( x ); }} autoStart={false} >\n    <SliderInput\n        legend="Input value"\n    />\n</Dashboard>\n'))),(0,a.kt)(l.Z,{value:"multipleInputs",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Dashboard \n    title="Multiply three numbers."\n    style={{ width: 600, boxShadow: \'0 0 24px black\' }}\n    onGenerate={( x, y, z ) => { alert( x*y*z ); }} \n    autoStart={false} \n>\n    <SliderInput\n        legend="First Input Value"\n        rangeInputStyle = {{ width: 360 }}\n    />\n    <hr />\n    <SliderInput\n        legend="Second Input Value"\n        rangeInputStyle = {{ width: 360 }}\n    />\n    <hr />\n    <SliderInput\n        legend="Third Input Value"\n        rangeInputStyle = {{ width: 360 }}\n    />\n    <hr />\n</Dashboard>\n')))))}k.isMDXComponent=!0}}]);