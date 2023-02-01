"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[55542],{603905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return b}});var r=a(202784);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),m=n,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return a?r.createElement(b,i(i({ref:t},c),{},{components:a})):r.createElement(b,i({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},440034:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(202784),n=a(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function p({children:e,hidden:t,className:a}){return r.createElement("div",((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&c(e,a,t[a]);if(o)for(var a of o(t))u.call(t,a)&&c(e,a,t[a]);return e})({role:"tabpanel",className:(0,n.Z)(l,a)},{hidden:t}),e)}},751361:function(e,t,a){a.d(t,{Z:function(){return N}});var r=a(202784),n=a(386010),l=a(152670),i=a(258433),o=a(952326),s=a(638849),u="tabList__CuJ",c="tabItem_LNqP",p=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,k=(e,t,a)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,g=(e,t)=>{for(var a in t||(t={}))f.call(t,a)&&k(e,a,t[a]);if(b)for(var a of b(t))v.call(t,a)&&k(e,a,t[a]);return e};function y(e){var t,a;const{lazy:l,block:p,defaultValue:b,values:f,groupId:v,className:k}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=f?f:y.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),h=(0,i.l)(N,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===b?b:null!=(a=null!=b?b:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?a:y[0].props.value;if(null!==O&&!N.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:C,setTabGroupChoices:j}=(0,o.U)(),[w,x]=(0,r.useState)(O),P=[],{blockElementScrollPositionUntilNextRender:D}=(0,s.o5)();if(null!=v){const e=C[v];null!=e&&e!==w&&N.some((t=>t.value===e))&&x(e)}const E=e=>{const t=e.currentTarget,a=P.indexOf(t),r=N[a].value;r!==w&&(D(t),x(r),null!=v&&j(v,String(r)))},T=e=>{var t,a;let r=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const a=P.indexOf(e.currentTarget)+1;r=null!=(t=P[a])?t:P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;r=null!=(a=P[t])?a:P[P.length-1];break}}null==r||r.focus()};return r.createElement("div",{className:(0,n.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":p},k)},N.map((({value:e,label:t,attributes:a})=>{return r.createElement("li",(l=g({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>P.push(e),onKeyDown:T,onClick:E},a),i={className:(0,n.Z)("tabs__item",c,null==a?void 0:a.className,{"tabs__item--active":w===e})},d(l,m(i))),null!=t?t:e);var l,i}))),l?(0,r.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function N(e){const t=(0,l.Z)();return r.createElement(y,g({key:String(t)},e))}},263522:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return f},default:function(){return N},frontMatter:function(){return b},metadata:function(){return v},toc:function(){return g}});var r=a(603905),n=a(751361),l=a(440034),i=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&d(e,a,t[a]);if(u)for(var a of u(t))p.call(t,a)&&d(e,a,t[a]);return e};const b={id:"barchart",title:"Bar Chart",sidebar_label:"Bar Chart"},f=void 0,v={unversionedId:"plots/barchart",id:"plots/barchart",title:"Bar Chart",description:"Gr\xe1fico de barras.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/plots/barchart.md",sourceDirName:"plots",slug:"/plots/barchart",permalink:"/es/docs/plots/barchart",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/barchart.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19 jun 2021",frontMatter:{id:"barchart",title:"Bar Chart",sidebar_label:"Bar Chart"},sidebar:"docs",previous:{title:"Plotly",permalink:"/es/docs/plotly"},next:{title:"Box Plot",permalink:"/es/docs/plots/boxplot"}},k={},g=[{value:"Opciones",id:"opciones",level:2},{value:"Ejemplos",id:"ejemplos",level:2}],y={toc:g};function N(e){var t,a=e,{components:i}=a,d=((e,t)=>{var a={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&p.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=m(m({},y),d),o(t,s({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Gr\xe1fico de barras."),(0,r.kt)("h2",m({},{id:"opciones"}),"Opciones"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object (required)"),": objeto de las matrices de valor. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"variable")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": variable a mostrar. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"group")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": variable de agrupaci\xf3n. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"yvar")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": variable opcional utilizada para las alturas de las columnas (junto con ",(0,r.kt)("inlineCode",{parentName:"li"},"summary"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"summary")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": nombre de la estad\xedstica a calcular para ",(0,r.kt)("inlineCode",{parentName:"li"},"yvar")," y a mostrar como altura de barra para cada categor\xeda (ya sea ",(0,r.kt)("inlineCode",{parentName:"li"},"Min"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Max"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Mean"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Median"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Sum"),", ...). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"horizontal")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": si mostrar las barras horizontalmente. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"stackBars")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": cuando se agrupan, controla si se apilan las barras una encima de la otra. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"relative")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": si calcular las frecuencias relativas dentro de cada grupo. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"totalPercent")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": si mostrar las barras generales como frecuencias relativas. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"xOrder")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),': ya sea "total", "categor\xeda", "min", "m\xe1ximo", "medio", o "medio". Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"direction")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": c\xf3mo ordenar las barras a lo largo del eje x (",(0,r.kt)("inlineCode",{parentName:"li"},"ascending")," o ",(0,r.kt)("inlineCode",{parentName:"li"},"descending"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'ascending'"),".")),(0,r.kt)("h2",m({},{id:"ejemplos"}),"Ejemplos"),(0,r.kt)(n.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Grouped",value:"grouped"},{label:"Descending Order",value:"descending"},{label:"Relative Stacked Bars",value:"relativeStackedBars"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n/>\n'))),(0,r.kt)(l.Z,{value:"grouped",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n    group="Gender"\n/>\n'))),(0,r.kt)(l.Z,{value:"descending",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n    xOrder="total"\n    direction="descending"\n/>\n'))),(0,r.kt)(l.Z,{value:"relativeStackedBars",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n    stackBars\n    relative\n    group="Gender"\n/>\n')))))}N.isMDXComponent=!0}}]);