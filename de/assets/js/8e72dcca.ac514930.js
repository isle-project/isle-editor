"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91764],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),c=r,b=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return n?a.createElement(b,l(l({ref:t},p),{},{components:n})):a.createElement(b,l({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(202784),r=n(386010),i="tabItem_Ymn6",l=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function m({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(i,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(202784),r=n(386010),i=n(152670),l=n(258433),o=n(952326),s=n(638849),u="tabList__CuJ",p="tabItem_LNqP",m=Object.defineProperty,d=Object.defineProperties,c=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&v(e,n,t[n]);if(b)for(var n of b(t))f.call(t,n)&&v(e,n,t[n]);return e};function y(e){var t,n;const{lazy:i,block:m,defaultValue:b,values:g,groupId:f,className:v}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=g?g:y.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),h=(0,l.l)(N,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===b?b:null!=(n=null!=b?b:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?n:y[0].props.value;if(null!==O&&!N.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:C,setTabGroupChoices:w}=(0,o.U)(),[j,D]=(0,a.useState)(O),T=[],{blockElementScrollPositionUntilNextRender:P}=(0,s.o5)();if(null!=f){const e=C[f];null!=e&&e!==j&&N.some((t=>t.value===e))&&D(e)}const x=e=>{const t=e.currentTarget,n=T.indexOf(t),a=N[n].value;a!==j&&(P(t),D(a),null!=f&&w(f,String(a)))},E=e=>{var t,n;let a=null;switch(e.key){case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;a=null!=(t=T[n])?t:T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=null!=(n=T[t])?n:T[T.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},v)},N.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(i=k({role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,key:e,ref:e=>T.push(e),onKeyDown:E,onFocus:x,onClick:x},n),l={className:(0,r.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":j===e})},d(i,c(l))),null!=t?t:e);var i,l}))),i?(0,a.cloneElement)(y.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function N(e){const t=(0,i.Z)();return a.createElement(y,k({key:String(t)},e))}},855026:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return g},default:function(){return N},frontMatter:function(){return b},metadata:function(){return f},toc:function(){return k}});var a=n(603905),r=n(751361),i=n(440034),l=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(u)for(var n of u(t))m.call(t,n)&&d(e,n,t[n]);return e};const b={id:"histogram",title:"Histogram",sidebar_label:"Histogram"},g=void 0,f={unversionedId:"plots/histogram",id:"plots/histogram",title:"Histogram",description:"Ein Histogramm.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/plots/histogram.md",sourceDirName:"plots",slug:"/plots/histogram",permalink:"/de/docs/plots/histogram",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/histogram.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633398906,formattedLastUpdatedAt:"4.10.2021",frontMatter:{id:"histogram",title:"Histogram",sidebar_label:"Histogram"},sidebar:"docs",previous:{title:"Heat Map",permalink:"/de/docs/plots/heatmap"},next:{title:"Interval Plot",permalink:"/de/docs/plots/interval-plot"}},v={},k=[{value:"Optionen",id:"optionen",level:2},{value:"Beispiele",id:"beispiele",level:2}],y={toc:k};function N(e){var t,n=e,{components:l}=n,d=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&m.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=c(c({},y),d),o(t,s({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Ein Histogramm."),(0,a.kt)("h2",c({},{id:"optionen"}),"Optionen"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"data")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object (required)"),": Objekt von Werte-Arrays. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"variable")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string (required)"),": Variable zur Anzeige. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"group")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": Gruppierungsvariable. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"title")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": Titel des Histogramms. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"groupMode")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": ob gruppierte Histogramme \xfcbereinander (",(0,a.kt)("inlineCode",{parentName:"li"},"Overlay"),") oder in separaten Plots nebeneinander (",(0,a.kt)("inlineCode",{parentName:"li"},"Facets"),") liegen sollen. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'Overlay'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"displayDensity")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob Dichtewerte anstelle von Z\xe4hlwerten auf der y-Achse angezeigt werden sollen. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"densityType")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": bei der Darstellung von Dichten kann entweder eine parametrische Verteilung (",(0,a.kt)("inlineCode",{parentName:"li"},"Normal"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Uniform")," oder ",(0,a.kt)("inlineCode",{parentName:"li"},"Exponential"),") oder eine nicht-parametrische Kernel-Dichte-Sch\xe4tzung (",(0,a.kt)("inlineCode",{parentName:"li"},"Daten-gesteuert"),") \xfcberlagert werden. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"densityParams")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<number>"),": Verteilungsparameter f\xfcr die Dichte, wenn eine parametrische Verteilung verwendet wird (","[mu, sigma]"," f\xfcr eine Normalverteilung, ","[a, b]"," f\xfcr eine Gleichverteilung, ","[lambda]"," f\xfcr eine Exponentialverteilung). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"bandwidthAdjust")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": manuelle Anpassung der Bandbreite der Kernel-Dichte (nur anwendbar, wenn ",(0,a.kt)("inlineCode",{parentName:"li"},"densityType")," auf ",(0,a.kt)("inlineCode",{parentName:"li"},"Data-driven")," gesetzt ist). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"binStrategy")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": Binning-Strategie (",(0,a.kt)("inlineCode",{parentName:"li"},"Automatisch"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Anzahl der Bins w\xe4hlen")," oder ",(0,a.kt)("inlineCode",{parentName:"li"},"Bin-Breite einstellen"),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'Automatic'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"nBins")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": Benutzerdefinierte Anzahl von F\xe4chern. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"nCols")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": Anzahl der Spalten bei der Anzeige eines facettierten gruppierten Histogramms. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"xBins")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"{start,size,end}"),": Objekt mit den Eigenschaften ",(0,a.kt)("inlineCode",{parentName:"li"},"start"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"size")," und ",(0,a.kt)("inlineCode",{parentName:"li"},"end"),", die das Binning-Verhalten steuern. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"sameXRange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": wenn wahr, ist der Bereich der x-Achse f\xfcr jede Facette derselbe wie der des Gesamthistogramms. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"sameYRange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": wenn wahr, ist der y-Achsenbereich f\xfcr jede Facette derselbe wie der des Gesamthistogramms. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,a.kt)("h2",c({},{id:"beispiele"}),"Beispiele"),(0,a.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Grouped",value:"grouped"},{label:"Facetted Plot",value:"groupModeFactes"},{label:"Display Density",value:"displayDensity"},{label:"No of Bins",value:"noBins"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Histogram \n    data={heartdisease} \n    variable="Age"\n/>\n'))),(0,a.kt)(i.Z,{value:"grouped",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Histogram \n    data={heartdisease} \n    variable="Age"\n    group="Gender"\n/>\n'))),(0,a.kt)(i.Z,{value:"groupModeFactes",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Histogram \n    data={heartdisease} \n    variable="Age"\n    group="Gender"\n    nCols={2}\n    groupMode="Facets"\n/>\n'))),(0,a.kt)(i.Z,{value:"displayDensity",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Histogram \n    data={heartdisease} \n    variable="Age"\n    group="Gender"\n    displayDensity \n    densityType="Uniform"\n/>\n'))),(0,a.kt)(i.Z,{value:"noBins",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Histogram \n    data={heartdisease} \n    variable="Age"\n    group="Gender"\n    binStrategy="Select # of bins"\n    nBins={90}\n/>\n')))))}N.isMDXComponent=!0}}]);