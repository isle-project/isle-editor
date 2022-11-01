"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97723],{603905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(202784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,b=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return a?n.createElement(b,o(o({ref:t},p),{},{components:a})):n.createElement(b,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},440034:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(202784),r=a(386010),l="tabItem_Ymn6",o=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function c({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&p(e,a,t[a]);if(i)for(var a of i(t))u.call(t,a)&&p(e,a,t[a]);return e})({role:"tabpanel",className:(0,r.Z)(l,a)},{hidden:t}),e)}},751361:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(202784),r=a(386010),l=a(152670),o=a(258433),i=a(952326),s=a(638849),u="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,y=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,g=(e,t)=>{for(var a in t||(t={}))f.call(t,a)&&y(e,a,t[a]);if(b)for(var a of b(t))v.call(t,a)&&y(e,a,t[a]);return e};function k(e){var t,a;const{lazy:l,block:c,defaultValue:b,values:f,groupId:v,className:y}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=f?f:k.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),N=(0,o.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===b?b:null!=(a=null!=b?b:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?a:k[0].props.value;if(null!==O&&!h.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:j,setTabGroupChoices:w}=(0,i.U)(),[x,C]=(0,n.useState)(O),P=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=v){const e=j[v];null!=e&&e!==x&&h.some((t=>t.value===e))&&C(e)}const E=e=>{const t=e.currentTarget,a=P.indexOf(t),n=h[a].value;n!==x&&(T(t),C(n),null!=v&&w(v,String(n)))},D=e=>{var t,a;let n=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const a=P.indexOf(e.currentTarget)+1;n=null!=(t=P[a])?t:P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;n=null!=(a=P[t])?a:P[P.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},y)},h.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(l=g({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>P.push(e),onKeyDown:D,onClick:E},a),o={className:(0,r.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":x===e})},m(l,d(o))),null!=t?t:e);var l,o}))),l?(0,n.cloneElement)(k.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function h(e){const t=(0,l.Z)();return n.createElement(k,g({key:String(t)},e))}},494788:function(e,t,a){a.r(t),a.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return h},frontMatter:function(){return b},metadata:function(){return v},toc:function(){return g}});var n=a(603905),r=a(751361),l=a(440034),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&m(e,a,t[a]);if(u)for(var a of u(t))c.call(t,a)&&m(e,a,t[a]);return e};const b={id:"heatmap",title:"Heat Map",sidebar_label:"Heat Map"},f=void 0,v={unversionedId:"plots/heatmap",id:"plots/heatmap",title:"Heat Map",description:"Un mapa de calor para visualizar una relaci\xf3n entre dos variables.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/plots/heatmap.md",sourceDirName:"plots",slug:"/plots/heatmap",permalink:"/es/docs/plots/heatmap",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/heatmap.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621312042,formattedLastUpdatedAt:"18 may 2021",frontMatter:{id:"heatmap",title:"Heat Map",sidebar_label:"Heat Map"},sidebar:"docs",previous:{title:"Contour Chart",permalink:"/es/docs/plots/contourchart"},next:{title:"Histogram",permalink:"/es/docs/plots/histogram"}},y={},g=[{value:"Opciones",id:"opciones",level:2},{value:"Ejemplos",id:"ejemplos",level:2}],k={toc:g};function h(e){var t,a=e,{components:o}=a,m=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=d(d({},k),m),i(t,s({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Un mapa de calor para visualizar una relaci\xf3n entre dos variables."),(0,n.kt)("h2",d({},{id:"opciones"}),"Opciones"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"data")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object (required)"),": objeto de matrices de valores para cada variable. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"x")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string (required)"),": variable del eje x. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"y")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string (required)"),": variable del eje y. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"group")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": variable de agrupaci\xf3n. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"overlayPoints")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": controla si se superponen puntos para cada observaci\xf3n. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"smoothSpan")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": el intervalo de suavizado. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"0.66"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"regressionMethod")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array<string>"),': que contiene "lineal" y/o "suave" para superponer una l\xednea de regresi\xf3n lineal y/o suave. Default: ',(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"alternateColor")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": controla si se utiliza un esquema de color alternativo para el mapa de calor. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"commonXAxis")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": controla si se utiliza un eje x com\xfan al crear m\xfaltiples mapas de calor por valor de una variable de agrupaci\xf3n. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"commonYAxis")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": controla si se utiliza un eje Y com\xfan al crear m\xfaltiples mapas de calor por valor de una variable de agrupaci\xf3n. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,n.kt)("h2",d({},{id:"ejemplos"}),"Ejemplos"),(0,n.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Group",value:"withGroup"},{label:"Alternate Color",value:"alternateColor"},{label:"Overlay Points",value:"overlayPoints"},{label:"Regression Method",value:"regressionMethod"}],lazy:!0,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<HeatMap \n    data={heartdisease} \n    x="Interventions"\n    y="Age"\n/>\n'))),(0,n.kt)(l.Z,{value:"withGroup",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<HeatMap \n    data={heartdisease} \n    x="Interventions"\n    y="Age"\n    group="Gender"\n    commonXAxis\n/>\n'))),(0,n.kt)(l.Z,{value:"alternateColor",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<HeatMap \n    alternateColor\n    group="Gender"\n    data={heartdisease} \n    x="Interventions"\n    y="Age"\n    commonXAxis\n/>\n'))),(0,n.kt)(l.Z,{value:"overlayPoints",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<HeatMap \n    data={heartdisease} \n    x="Interventions"\n    y="Age"\n    overlayPoints \n/>\n'))),(0,n.kt)(l.Z,{value:"regressionMethod",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<HeatMap \n    data={heartdisease} \n    x=\"Interventions\"\n    y=\"Age\"\n    regressionMethod={[ 'linear', 'smooth' ]} \n/>\n")))))}h.isMDXComponent=!0}}]);