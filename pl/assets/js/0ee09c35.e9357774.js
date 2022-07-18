"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15855],{603905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(202784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,b=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(b,i(i({ref:t},p),{},{components:a})):n.createElement(b,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},440034:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(202784),r=a(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function c({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))u.call(t,a)&&p(e,a,t[a]);if(o)for(var a of o(t))s.call(t,a)&&p(e,a,t[a]);return e})({role:"tabpanel",className:(0,r.Z)(l,a)},{hidden:t}),e)}},751361:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(202784),r=a(386010),l=a(152670),i=a(258433),o=a(952326),u=a(638849),s="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,y=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,v=(e,t)=>{for(var a in t||(t={}))f.call(t,a)&&y(e,a,t[a]);if(b)for(var a of b(t))k.call(t,a)&&y(e,a,t[a]);return e};function g(e){var t,a;const{lazy:l,block:c,defaultValue:b,values:f,groupId:k,className:y}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=f?f:g.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),h=(0,i.l)(N,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===b?b:null!=(a=null!=b?b:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?a:g[0].props.value;if(null!==w&&!N.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:O,setTabGroupChoices:C}=(0,o.U)(),[j,P]=(0,n.useState)(w),x=[],{blockElementScrollPositionUntilNextRender:z}=(0,u.o5)();if(null!=k){const e=O[k];null!=e&&e!==j&&N.some((t=>t.value===e))&&P(e)}const D=e=>{const t=e.currentTarget,a=x.indexOf(t),n=N[a].value;n!==j&&(z(t),P(n),null!=k&&C(k,String(n)))},T=e=>{var t,a;let n=null;switch(e.key){case"ArrowRight":{const a=x.indexOf(e.currentTarget)+1;n=null!=(t=x[a])?t:x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=null!=(a=x[t])?a:x[x.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",s)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},y)},N.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(l=v({role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,key:e,ref:e=>x.push(e),onKeyDown:T,onFocus:D,onClick:D},a),i={className:(0,r.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":j===e})},d(l,m(i))),null!=t?t:e);var l,i}))),l?(0,n.cloneElement)(g.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function N(e){const t=(0,l.Z)();return n.createElement(g,v({key:String(t)},e))}},585588:function(e,t,a){a.r(t),a.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return N},frontMatter:function(){return b},metadata:function(){return k},toc:function(){return v}});var n=a(603905),r=a(751361),l=a(440034),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&d(e,a,t[a]);if(s)for(var a of s(t))c.call(t,a)&&d(e,a,t[a]);return e};const b={id:"barchart",title:"Bar Chart",sidebar_label:"Bar Chart"},f=void 0,k={unversionedId:"plots/barchart",id:"plots/barchart",title:"Bar Chart",description:"Wykres s\u0142upkowy.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/plots/barchart.md",sourceDirName:"plots",slug:"/plots/barchart",permalink:"/pl/docs/plots/barchart",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/barchart.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19 cze 2021",frontMatter:{id:"barchart",title:"Bar Chart",sidebar_label:"Bar Chart"},sidebar:"docs",previous:{title:"Plotly",permalink:"/pl/docs/plotly"},next:{title:"Box Plot",permalink:"/pl/docs/plots/boxplot"}},y={},v=[{value:"Opcje",id:"opcje",level:2},{value:"Przyk\u0142ady",id:"przyk\u0142ady",level:2}],g={toc:v};function N(e){var t,a=e,{components:i}=a,d=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},g),d),o(t,u({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Wykres s\u0142upkowy."),(0,n.kt)("h2",m({},{id:"opcje"}),"Opcje"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"data")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object (required)"),": przedmiot tablice warto\u015bci. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"variable")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": zmienna do wy\u015bwietlania. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"group")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": zmienna grupowania. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"yvar")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": opcjonalna zmienna u\u017cywana do okre\u015blania wysoko\u015bci kolumn (w po\u0142\u0105czeniu z ",(0,n.kt)("inlineCode",{parentName:"li"},"summary"),"). Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"summary")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": nazwa statystyki do obliczenia dla ",(0,n.kt)("inlineCode",{parentName:"li"},"yvar")," i do wy\u015bwietlenia jako wysoko\u015b\u0107 s\u0142upka dla ka\u017cdej kategorii (albo ",(0,n.kt)("inlineCode",{parentName:"li"},"Min"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Max"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Mean"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Median"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Sum"),", ...). Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"horizontal")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": czy wy\u015bwietla\u0107 paski w poziomie. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"stackBars")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": podczas grupowania kontroluje, czy pr\u0119ty nale\u017cy uk\u0142ada\u0107 jeden na drugim. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"relative")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": czy obliczy\u0107 cz\u0119stotliwo\u015bci wzgl\u0119dne wewn\u0105trz ka\u017cdej grupy. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"totalPercent")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": czy wy\u015bwietla\u0107 paski og\xf3lne jako cz\u0119stotliwo\u015bci wzgl\u0119dne. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"xOrder")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"og\xf3\u0142em"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"kategori\u0105"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"min"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"max"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"\u015brodkiem")," lub ",(0,n.kt)("inlineCode",{parentName:"li"},"medianem"),". Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"direction")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": jak zamawia\u0107 pr\u0119ty wzd\u0142u\u017c osi x (",(0,n.kt)("inlineCode",{parentName:"li"},"ascending")," lub ",(0,n.kt)("inlineCode",{parentName:"li"},"descending"),"). Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"'ascending'"),".")),(0,n.kt)("h2",m({},{id:"przyk\u0142ady"}),"Przyk\u0142ady"),(0,n.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Grouped",value:"grouped"},{label:"Descending Order",value:"descending"},{label:"Relative Stacked Bars",value:"relativeStackedBars"}],lazy:!0,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n/>\n'))),(0,n.kt)(l.Z,{value:"grouped",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n    group="Gender"\n/>\n'))),(0,n.kt)(l.Z,{value:"descending",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n    xOrder="total"\n    direction="descending"\n/>\n'))),(0,n.kt)(l.Z,{value:"relativeStackedBars",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n    stackBars\n    relative\n    group="Gender"\n/>\n')))))}N.isMDXComponent=!0}}]);