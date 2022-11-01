"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[78640],{603905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(202784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},440034:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(202784),r=a(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function c({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))u.call(t,a)&&p(e,a,t[a]);if(o)for(var a of o(t))s.call(t,a)&&p(e,a,t[a]);return e})({role:"tabpanel",className:(0,r.Z)(l,a)},{hidden:t}),e)}},751361:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(202784),r=a(386010),l=a(152670),i=a(258433),o=a(952326),u=a(638849),s="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,y=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,g=(e,t)=>{for(var a in t||(t={}))b.call(t,a)&&y(e,a,t[a]);if(f)for(var a of f(t))v.call(t,a)&&y(e,a,t[a]);return e};function k(e){var t,a;const{lazy:l,block:c,defaultValue:f,values:b,groupId:v,className:y}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=b?b:k.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),N=(0,i.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===f?f:null!=(a=null!=f?f:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?a:k[0].props.value;if(null!==O&&!h.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:x,setTabGroupChoices:j}=(0,o.U)(),[w,C]=(0,n.useState)(O),P=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=v){const e=x[v];null!=e&&e!==w&&h.some((t=>t.value===e))&&C(e)}const E=e=>{const t=e.currentTarget,a=P.indexOf(t),n=h[a].value;n!==w&&(T(t),C(n),null!=v&&j(v,String(n)))},D=e=>{var t,a;let n=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const a=P.indexOf(e.currentTarget)+1;n=null!=(t=P[a])?t:P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;n=null!=(a=P[t])?a:P[P.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",s)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},y)},h.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(l=g({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>P.push(e),onKeyDown:D,onClick:E},a),i={className:(0,r.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":w===e})},m(l,d(i))),null!=t?t:e);var l,i}))),l?(0,n.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function h(e){const t=(0,l.Z)();return n.createElement(k,g({key:String(t)},e))}},198954:function(e,t,a){a.r(t),a.d(t,{assets:function(){return y},contentTitle:function(){return b},default:function(){return h},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return g}});var n=a(603905),r=a(751361),l=a(440034),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&m(e,a,t[a]);if(s)for(var a of s(t))c.call(t,a)&&m(e,a,t[a]);return e};const f={id:"heatmap",title:"Heat Map",sidebar_label:"Heat Map"},b=void 0,v={unversionedId:"plots/heatmap",id:"plots/heatmap",title:"Heat Map",description:"O hart\u0103 termic\u0103 pentru vizualizarea unei rela\u021bii \xeentre dou\u0103 variabile.",source:"@site/i18n/ro/docusaurus-plugin-content-docs/current/plots/heatmap.md",sourceDirName:"plots",slug:"/plots/heatmap",permalink:"/ro/docs/plots/heatmap",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/heatmap.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1 iun. 2021",frontMatter:{id:"heatmap",title:"Heat Map",sidebar_label:"Heat Map"},sidebar:"docs",previous:{title:"Contour Chart",permalink:"/ro/docs/plots/contourchart"},next:{title:"Histogram",permalink:"/ro/docs/plots/histogram"}},y={},g=[{value:"Op\u021biuni",id:"op\u021biuni",level:2},{value:"Exemple",id:"exemple",level:2}],k={toc:g};function h(e){var t,a=e,{components:i}=a,m=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=d(d({},k),m),o(t,u({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"O hart\u0103 termic\u0103 pentru vizualizarea unei rela\u021bii \xeentre dou\u0103 variabile."),(0,n.kt)("h2",d({},{id:"op\u021biuni"}),"Op\u021biuni"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"data")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object (required)"),": obiect de matrice de valori pentru fiecare variabil\u0103. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"x")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string (required)"),": variabila axei x. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"y")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string (required)"),": variabila axei y. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"group")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": variabil\u0103 de grupare. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"overlayPoints")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": controleaz\u0103 dac\u0103 se suprapun punctele pentru fiecare observa\u021bie. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"smoothSpan")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": interval de netezire. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"0.66"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"regressionMethod")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array<string>"),": matrice care con\u021bine ",(0,n.kt)("inlineCode",{parentName:"li"},"linear")," \u0219i/sau ",(0,n.kt)("inlineCode",{parentName:"li"},"smooth")," pentru a suprapune o linie de regresie liniar\u0103 \u0219i/sau netezit\u0103. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"alternateColor")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": controleaz\u0103 dac\u0103 se utilizeaz\u0103 o schem\u0103 de culori alternativ\u0103 pentru harta termic\u0103. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"commonXAxis")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": controleaz\u0103 dac\u0103 se utilizeaz\u0103 o ax\u0103 x comun\u0103 atunci c\xe2nd se creeaz\u0103 mai multe h\u0103r\u021bi de c\u0103ldur\u0103 pentru fiecare valoare a unei variabile de grupare. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"commonYAxis")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": controleaz\u0103 dac\u0103 se utilizeaz\u0103 o ax\u0103 y comun\u0103 atunci c\xe2nd se creeaz\u0103 mai multe h\u0103r\u021bi de c\u0103ldur\u0103 pentru fiecare valoare a unei variabile de grupare. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,n.kt)("h2",d({},{id:"exemple"}),"Exemple"),(0,n.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Group",value:"withGroup"},{label:"Alternate Color",value:"alternateColor"},{label:"Overlay Points",value:"overlayPoints"},{label:"Regression Method",value:"regressionMethod"}],lazy:!0,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<HeatMap \n    data={heartdisease} \n    x="Interventions"\n    y="Age"\n/>\n'))),(0,n.kt)(l.Z,{value:"withGroup",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<HeatMap \n    data={heartdisease} \n    x="Interventions"\n    y="Age"\n    group="Gender"\n    commonXAxis\n/>\n'))),(0,n.kt)(l.Z,{value:"alternateColor",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<HeatMap \n    alternateColor\n    group="Gender"\n    data={heartdisease} \n    x="Interventions"\n    y="Age"\n    commonXAxis\n/>\n'))),(0,n.kt)(l.Z,{value:"overlayPoints",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<HeatMap \n    data={heartdisease} \n    x="Interventions"\n    y="Age"\n    overlayPoints \n/>\n'))),(0,n.kt)(l.Z,{value:"regressionMethod",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<HeatMap \n    data={heartdisease} \n    x=\"Interventions\"\n    y=\"Age\"\n    regressionMethod={[ 'linear', 'smooth' ]} \n/>\n")))))}h.isMDXComponent=!0}}]);