"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[90259],{603905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(202784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(a),c=r,g=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},440034:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(202784),r=a(386010),i="tabItem_Ymn6",l=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function m({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&p(e,a,t[a]);if(o)for(var a of o(t))u.call(t,a)&&p(e,a,t[a]);return e})({role:"tabpanel",className:(0,r.Z)(i,a)},{hidden:t}),e)}},751361:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(202784),r=a(386010),i=a(152670),l=a(258433),o=a(952326),s=a(638849),u="tabList__CuJ",p="tabItem_LNqP",m=Object.defineProperty,d=Object.defineProperties,c=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,t,a)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,k=(e,t)=>{for(var a in t||(t={}))b.call(t,a)&&v(e,a,t[a]);if(g)for(var a of g(t))f.call(t,a)&&v(e,a,t[a]);return e};function y(e){var t,a;const{lazy:i,block:m,defaultValue:g,values:b,groupId:f,className:v}=e,y=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=b?b:y.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),h=(0,l.l)(N,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const C=null===g?g:null!=(a=null!=g?g:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?a:y[0].props.value;if(null!==C&&!N.some((e=>e.value===C)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${C}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:O,setTabGroupChoices:j}=(0,o.U)(),[w,D]=(0,n.useState)(C),z=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=f){const e=O[f];null!=e&&e!==w&&N.some((t=>t.value===e))&&D(e)}const E=e=>{const t=e.currentTarget,a=z.indexOf(t),n=N[a].value;n!==w&&(T(t),D(n),null!=f&&j(f,String(n)))},P=e=>{var t,a;let n=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const a=z.indexOf(e.currentTarget)+1;n=null!=(t=z[a])?t:z[0];break}case"ArrowLeft":{const t=z.indexOf(e.currentTarget)-1;n=null!=(a=z[t])?a:z[z.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},v)},N.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(i=k({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>z.push(e),onKeyDown:P,onClick:E},a),l={className:(0,r.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":w===e})},d(i,c(l))),null!=t?t:e);var i,l}))),i?(0,n.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function N(e){const t=(0,i.Z)();return n.createElement(y,k({key:String(t)},e))}},932339:function(e,t,a){a.r(t),a.d(t,{assets:function(){return v},contentTitle:function(){return b},default:function(){return N},frontMatter:function(){return g},metadata:function(){return f},toc:function(){return k}});var n=a(603905),r=a(751361),i=a(440034),l=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&d(e,a,t[a]);if(u)for(var a of u(t))m.call(t,a)&&d(e,a,t[a]);return e};const g={id:"histogram",title:"Histogram",sidebar_label:"Histogram"},b=void 0,f={unversionedId:"plots/histogram",id:"plots/histogram",title:"Histogram",description:"Un istogramma.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/plots/histogram.md",sourceDirName:"plots",slug:"/plots/histogram",permalink:"/it/docs/plots/histogram",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/histogram.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1658117079,formattedLastUpdatedAt:"18 lug 2022",frontMatter:{id:"histogram",title:"Histogram",sidebar_label:"Histogram"},sidebar:"docs",previous:{title:"Heat Map",permalink:"/it/docs/plots/heatmap"},next:{title:"Interval Plot",permalink:"/it/docs/plots/interval-plot"}},v={},k=[{value:"Opzioni",id:"opzioni",level:2},{value:"Esempi",id:"esempi",level:2}],y={toc:k};function N(e){var t,a=e,{components:l}=a,d=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&m.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=c(c({},y),d),o(t,s({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Un istogramma."),(0,n.kt)("h2",c({},{id:"opzioni"}),"Opzioni"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"data")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object (required)"),": oggetto delle matrici di valori. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"variable")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string (required)"),": variabile da visualizzare. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"group")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": variabile di raggruppamento. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"title")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": titolo dell'istogramma. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"groupMode")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": se sovrapporre istogrammi raggruppati l'uno sull'altro (",(0,n.kt)("inlineCode",{parentName:"li"},"Overlay"),") o in trame separate l'una accanto all'altra (",(0,n.kt)("inlineCode",{parentName:"li"},"Facets"),"). Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"'Overlay'"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"displayDensity")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": controlla se visualizzare i valori di densit\xe0 invece dei conteggi sull'asse y. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"densityType")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|array<string>)"),": Quando si visualizzano le densit\xe0, si possono sovrapporre distribuzioni parametriche (",(0,n.kt)("inlineCode",{parentName:"li"},"Normale"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Uniforme"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"T"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Chi-quadro")," o ",(0,n.kt)("inlineCode",{parentName:"li"},"Esponenziale"),") e/o una stima di densit\xe0 kernel non parametrica (",(0,n.kt)("inlineCode",{parentName:"li"},"Data-driven"),").. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"densityParams")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(array<number>|any)"),": parametri della distribuzione per la densit\xe0 quando si usa una distribuzione parametrica (","[mu, sigma]"," per una distribuzione normale, ","[a, b]"," per una distribuzione uniforme, ","[lambda]"," per una distribuzione esponenziale) o un oggetto che mappi i nomi delle distribuzioni ai parametri quando devono essere visualizzate pi\xf9 densit\xe0 (ad esempio, ",(0,n.kt)("inlineCode",{parentName:"li"},"{'Normale': [mu, sigma], 'Uniforme': [a, b]}, 'Esponenziale': [lambda]}"),").. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"bandwidthAdjust")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": regolazione manuale della larghezza di banda della densit\xe0 del kernel (applicabile solo quando ",(0,n.kt)("inlineCode",{parentName:"li"},"densityType")," \xe8 impostato su ",(0,n.kt)("inlineCode",{parentName:"li"},"Data-driven"),"). Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"binStrategy")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": strategia di binning (",(0,n.kt)("inlineCode",{parentName:"li"},"Automatico"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Seleziona # di bidoni"),", o ",(0,n.kt)("inlineCode",{parentName:"li"},"Imposta larghezza bidone"),"). Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"'Automatic'"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"nBins")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": numero personalizzato di bidoni. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"nCols")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": numero di colonne quando si visualizza un istogramma raggruppato sfaccettato. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"xBins")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"{start,size,end}"),": oggetto con propriet\xe0 ",(0,n.kt)("inlineCode",{parentName:"li"},"start"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"size")," e ",(0,n.kt)("inlineCode",{parentName:"li"},"end")," che regolano il comportamento di binning. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"sameXRange")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": se vero, l'intervallo dell'asse x per ogni sfaccettatura sar\xe0 lo stesso dell'istogramma generale. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"sameYRange")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": se vero, l'intervallo dell'asse y per ogni sfaccettatura sar\xe0 lo stesso dell'istogramma generale. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,n.kt)("h2",c({},{id:"esempi"}),"Esempi"),(0,n.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Grouped",value:"grouped"},{label:"Facetted Plot",value:"groupModeFactes"},{label:"Display Density",value:"displayDensity"},{label:"No of Bins",value:"noBins"}],lazy:!0,mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"minimal",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Histogram \n    data={heartdisease} \n    variable="Age"\n/>\n'))),(0,n.kt)(i.Z,{value:"grouped",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Histogram \n    data={heartdisease} \n    variable="Age"\n    group="Gender"\n/>\n'))),(0,n.kt)(i.Z,{value:"groupModeFactes",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Histogram \n    data={heartdisease} \n    variable="Age"\n    group="Gender"\n    nCols={2}\n    groupMode="Facets"\n/>\n'))),(0,n.kt)(i.Z,{value:"displayDensity",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Histogram \n    data={heartdisease} \n    variable="Age"\n    group="Gender"\n    displayDensity \n    densityType="Uniform"\n/>\n'))),(0,n.kt)(i.Z,{value:"noBins",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Histogram \n    data={heartdisease} \n    variable="Age"\n    group="Gender"\n    binStrategy="Select # of bins"\n    nBins={90}\n/>\n')))))}N.isMDXComponent=!0}}]);