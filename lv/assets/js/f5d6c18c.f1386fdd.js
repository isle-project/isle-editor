"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[75887],{603905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return b}});var n=a(202784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,b=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(b,i(i({ref:t},p),{},{components:a})):n.createElement(b,i({ref:t},p))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},440034:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(202784),r=a(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function d({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))u.call(t,a)&&p(e,a,t[a]);if(o)for(var a of o(t))s.call(t,a)&&p(e,a,t[a]);return e})({role:"tabpanel",className:(0,r.Z)(l,a)},{hidden:t}),e)}},751361:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(202784),r=a(386010),l=a(152670),i=a(258433),o=a(952326),u=a(638849),s="tabList__CuJ",p="tabItem_LNqP",d=Object.defineProperty,c=Object.defineProperties,m=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,v=(e,t,a)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))f.call(t,a)&&v(e,a,t[a]);if(b)for(var a of b(t))k.call(t,a)&&v(e,a,t[a]);return e};function g(e){var t,a;const{lazy:l,block:d,defaultValue:b,values:f,groupId:k,className:v}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=f?f:g.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),N=(0,i.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===b?b:null!=(a=null!=b?b:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?a:g[0].props.value;if(null!==O&&!h.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:j,setTabGroupChoices:w}=(0,o.U)(),[C,D]=(0,n.useState)(O),P=[],{blockElementScrollPositionUntilNextRender:I}=(0,u.o5)();if(null!=k){const e=j[k];null!=e&&e!==C&&h.some((t=>t.value===e))&&D(e)}const x=e=>{const t=e.currentTarget,a=P.indexOf(t),n=h[a].value;n!==C&&(I(t),D(n),null!=k&&w(k,String(n)))},E=e=>{var t,a;let n=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const a=P.indexOf(e.currentTarget)+1;n=null!=(t=P[a])?t:P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;n=null!=(a=P[t])?a:P[P.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",s)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},v)},h.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(l=y({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>P.push(e),onKeyDown:E,onClick:x},a),i={className:(0,r.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":C===e})},c(l,m(i))),null!=t?t:e);var l,i}))),l?(0,n.cloneElement)(g.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function h(e){const t=(0,l.Z)();return n.createElement(g,y({key:String(t)},e))}},310076:function(e,t,a){a.r(t),a.d(t,{assets:function(){return v},contentTitle:function(){return f},default:function(){return h},frontMatter:function(){return b},metadata:function(){return k},toc:function(){return y}});var n=a(603905),r=a(751361),l=a(440034),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&c(e,a,t[a]);if(s)for(var a of s(t))d.call(t,a)&&c(e,a,t[a]);return e};const b={id:"dashboard",title:"Dashboard",sidebar_label:"Dashboard"},f=void 0,k={unversionedId:"dashboard",id:"dashboard",title:"Dashboard",description:"Vad\u012bbas panelis, lai apvienotu vair\u0101ku b\u0113rnu ievades lauku apstr\u0101di.",source:"@site/i18n/lv/docusaurus-plugin-content-docs/current/dashboard.md",sourceDirName:".",slug:"/dashboard",permalink:"/lv/docs/dashboard",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/dashboard.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1638825940,formattedLastUpdatedAt:"2021. g. 6. dec.",frontMatter:{id:"dashboard",title:"Dashboard",sidebar_label:"Dashboard"},sidebar:"docs",previous:{title:"Sortable Tree",permalink:"/lv/docs/sortable-tree"},next:{title:"Data Sampler",permalink:"/lv/docs/data-sampler"}},v={},y=[{value:"Iesp\u0113jas",id:"iesp\u0113jas",level:2},{value:"Piem\u0113ri",id:"piem\u0113ri",level:2}],g={toc:y};function h(e){var t,a=e,{components:i}=a,c=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},g),c),o(t,u({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Vad\u012bbas panelis, lai apvienotu vair\u0101ku b\u0113rnu ievades lauku apstr\u0101di."),(0,n.kt)("h2",m({},{id:"iesp\u0113jas"}),"Iesp\u0113jas"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"autoStart")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": ja iestat\u012bts uz ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),", funkcija ",(0,n.kt)("inlineCode",{parentName:"li"},"onGenerate")," tiek izpild\u012bta palai\u0161anas laik\u0101 ar noklus\u0113juma ievades v\u0113rt\u012bb\u0101m.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"autoUpdate")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": nosaka, vai ",(0,n.kt)("inlineCode",{parentName:"li"},"onGenerate")," funkcija j\u0101izsauc autom\u0101tiski, kad main\u0101s k\u0101ds no pak\u0101rtotajiem ievades laukiem.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"description")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|node)"),": Vad\u012bbas pane\u013ca apraksts. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"disabled")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrol\u0113, vai instrumentu panelis ir atsp\u0113jots.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"label")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": pogas eti\u0137ete. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"maxWidth")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": maksim\u0101lais instrumentu pane\u013ca platums. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"600"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"className")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": klases nosaukums. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"bodyClassName")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": kartes korpusa klases nosaukums. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"'d-grid gap-3'"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"style")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": CSS ieb\u016bv\u0113tie stili. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onGenerate")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": funkcija, kas tiek izsaukta, kad tiek noklik\u0161\u0137in\u0101ts uz pogas vai main\u0101s k\u0101da no pane\u013ca ievades v\u0113rt\u012bb\u0101m (ja ",(0,n.kt)("inlineCode",{parentName:"li"},"autoUpdate")," ir iestat\u012bts uz ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),"). Funkcija tiek izsaukta ar ievades lauku v\u0113rt\u012bb\u0101m t\u0101d\u0101 sec\u012bb\u0101, k\u0101d\u0101 t\u0101s ir izvietotas vad\u012bbas panel\u012b.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onGenerate() {}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"title")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(string|node)"),": kartes nosaukums. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"''"),".")),(0,n.kt)("h2",m({},{id:"piem\u0113ri"}),"Piem\u0113ri"),(0,n.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Multiple Inputs",value:"multipleInputs"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Dashboard title="Alerter" onGenerate={( x ) => { alert( x ); }} autoStart={false} >\n    <SliderInput\n        legend="Input value"\n    />\n</Dashboard>\n'))),(0,n.kt)(l.Z,{value:"multipleInputs",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Dashboard \n    title="Multiply three numbers."\n    style={{ width: 600, boxShadow: \'0 0 24px black\' }}\n    onGenerate={( x, y, z ) => { alert( x*y*z ); }} \n    autoStart={false} \n>\n    <SliderInput\n        legend="First Input Value"\n        rangeInputStyle = {{ width: 360 }}\n    />\n    <hr />\n    <SliderInput\n        legend="Second Input Value"\n        rangeInputStyle = {{ width: 360 }}\n    />\n    <hr />\n    <SliderInput\n        legend="Third Input Value"\n        rangeInputStyle = {{ width: 360 }}\n    />\n    <hr />\n</Dashboard>\n')))))}h.isMDXComponent=!0}}]);