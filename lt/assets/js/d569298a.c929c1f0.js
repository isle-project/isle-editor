"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53236],{603905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(202784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},440034:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(202784),r=a(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function m({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&p(e,a,t[a]);if(o)for(var a of o(t))u.call(t,a)&&p(e,a,t[a]);return e})({role:"tabpanel",className:(0,r.Z)(l,a)},{hidden:t}),e)}},751361:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(202784),r=a(386010),l=a(152670),i=a(258433),o=a(952326),s=a(638849),u="tabList__CuJ",p="tabItem_LNqP",m=Object.defineProperty,c=Object.defineProperties,d=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,k=(e,t,a)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))v.call(t,a)&&k(e,a,t[a]);if(f)for(var a of f(t))b.call(t,a)&&k(e,a,t[a]);return e};function g(e){var t,a;const{lazy:l,block:m,defaultValue:f,values:v,groupId:b,className:k}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=v?v:g.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),N=(0,i.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const j=null===f?f:null!=(a=null!=f?f:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?a:g[0].props.value;if(null!==j&&!h.some((e=>e.value===j)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${j}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:O,setTabGroupChoices:w}=(0,o.U)(),[C,x]=(0,n.useState)(j),P=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=b){const e=O[b];null!=e&&e!==C&&h.some((t=>t.value===e))&&x(e)}const E=e=>{const t=e.currentTarget,a=P.indexOf(t),n=h[a].value;n!==C&&(T(t),x(n),null!=b&&w(b,String(n)))},D=e=>{var t,a;let n=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const a=P.indexOf(e.currentTarget)+1;n=null!=(t=P[a])?t:P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;n=null!=(a=P[t])?a:P[P.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},k)},h.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(l=y({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>P.push(e),onKeyDown:D,onClick:E},a),i={className:(0,r.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":C===e})},c(l,d(i))),null!=t?t:e);var l,i}))),l?(0,n.cloneElement)(g.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function h(e){const t=(0,l.Z)();return n.createElement(g,y({key:String(t)},e))}},197248:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return v},default:function(){return h},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return y}});var n=a(603905),r=a(751361),l=a(440034),i=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&c(e,a,t[a]);if(u)for(var a of u(t))m.call(t,a)&&c(e,a,t[a]);return e};const f={id:"heatmap",title:"Heat Map",sidebar_label:"Heat Map"},v=void 0,b={unversionedId:"plots/heatmap",id:"plots/heatmap",title:"Heat Map",description:"\u0160ilumos \u017eem\u0117lapis, skirtas dviej\u0173 kintam\u0173j\u0173 ry\u0161iui vizualizuoti.",source:"@site/i18n/lt/docusaurus-plugin-content-docs/current/plots/heatmap.md",sourceDirName:"plots",slug:"/plots/heatmap",permalink:"/lt/docs/plots/heatmap",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/heatmap.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021-06-01",frontMatter:{id:"heatmap",title:"Heat Map",sidebar_label:"Heat Map"},sidebar:"docs",previous:{title:"Contour Chart",permalink:"/lt/docs/plots/contourchart"},next:{title:"Histogram",permalink:"/lt/docs/plots/histogram"}},k={},y=[{value:"Parinktys",id:"parinktys",level:2},{value:"Pavyzd\u017eiai",id:"pavyzd\u017eiai",level:2}],g={toc:y};function h(e){var t,a=e,{components:i}=a,c=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&m.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=d(d({},g),c),o(t,s({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u0160ilumos \u017eem\u0117lapis, skirtas dviej\u0173 kintam\u0173j\u0173 ry\u0161iui vizualizuoti."),(0,n.kt)("h2",d({},{id:"parinktys"}),"Parinktys"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"data")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object (required)"),": kiekvieno kintamojo reik\u0161mi\u0173 masyv\u0173 objektas. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"x")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string (required)"),": x a\u0161ies kintamasis. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"y")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string (required)"),": y a\u0161ies kintamasis. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"group")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": grupavimo kintamasis. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"overlayPoints")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroliuoja, ar kiekvieno steb\u0117jimo ta\u0161kai turi b\u016bti u\u017edengti.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"smoothSpan")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": i\u0161lyginimo intervalas. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"0.66"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"regressionMethod")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array<string>"),": masyvas, kuriame yra ",(0,n.kt)("inlineCode",{parentName:"li"},"linear")," ir (arba) ",(0,n.kt)("inlineCode",{parentName:"li"},"smooth"),", kad u\u017edengtum\u0117te tiesin\u0119 ir (arba) i\u0161lygint\u0105 regresijos linij\u0105.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"alternateColor")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroliuoja, ar naudoti alternatyvi\u0105 spalv\u0173 schem\u0105 \u0161ilumos \u017eem\u0117lapyje.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"commonXAxis")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroliuoja, ar kurti kelis \u0161ilumos \u017eem\u0117lapius pagal grupuojan\u010dio kintamojo vert\u0119, ar naudoti bendr\u0105 x a\u0161\u012f.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"commonYAxis")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroliuoja, ar kurti kelis \u0161ilumos \u017eem\u0117lapius pagal grupuojan\u010dio kintamojo vert\u0119, ar naudoti bendr\u0105 y a\u0161\u012f.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,n.kt)("h2",d({},{id:"pavyzd\u017eiai"}),"Pavyzd\u017eiai"),(0,n.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Group",value:"withGroup"},{label:"Alternate Color",value:"alternateColor"},{label:"Overlay Points",value:"overlayPoints"},{label:"Regression Method",value:"regressionMethod"}],lazy:!0,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<HeatMap \n    data={heartdisease} \n    x="Interventions"\n    y="Age"\n/>\n'))),(0,n.kt)(l.Z,{value:"withGroup",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<HeatMap \n    data={heartdisease} \n    x="Interventions"\n    y="Age"\n    group="Gender"\n    commonXAxis\n/>\n'))),(0,n.kt)(l.Z,{value:"alternateColor",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<HeatMap \n    alternateColor\n    group="Gender"\n    data={heartdisease} \n    x="Interventions"\n    y="Age"\n    commonXAxis\n/>\n'))),(0,n.kt)(l.Z,{value:"overlayPoints",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<HeatMap \n    data={heartdisease} \n    x="Interventions"\n    y="Age"\n    overlayPoints \n/>\n'))),(0,n.kt)(l.Z,{value:"regressionMethod",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<HeatMap \n    data={heartdisease} \n    x=\"Interventions\"\n    y=\"Age\"\n    regressionMethod={[ 'linear', 'smooth' ]} \n/>\n")))))}h.isMDXComponent=!0}}]);