"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[29199],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(202784),a=n(386010),l="tabItem_Ymn6",o=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function p({children:e,hidden:t,className:n}){return r.createElement("div",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&c(e,n,t[n]);return e})({role:"tabpanel",className:(0,a.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(202784),a=n(386010),l=n(152670),o=n(258433),i=n(952326),s=n(638849),u="tabList__CuJ",c="tabItem_LNqP",p=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&y(e,n,t[n]);if(f)for(var n of f(t))v.call(t,n)&&y(e,n,t[n]);return e};function k(e){var t,n;const{lazy:l,block:p,defaultValue:f,values:b,groupId:v,className:y}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=b?b:k.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),O=(0,o.l)(g,((e,t)=>e.value===t.value));if(O.length>0)throw new Error(`Docusaurus error: Duplicate values "${O.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===f?f:null!=(n=null!=f?f:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?n:k[0].props.value;if(null!==N&&!g.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:j,setTabGroupChoices:C}=(0,i.U)(),[w,P]=(0,r.useState)(N),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,s.o5)();if(null!=v){const e=j[v];null!=e&&e!==w&&g.some((t=>t.value===e))&&P(e)}const T=e=>{const t=e.currentTarget,n=x.indexOf(t),r=g[n].value;r!==w&&(E(t),P(r),null!=v&&C(v,String(r)))},D=e=>{var t,n;let r=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;r=null!=(t=x[n])?t:x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;r=null!=(n=x[t])?n:x[x.length-1];break}}null==r||r.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},y)},g.map((({value:e,label:t,attributes:n})=>{return r.createElement("li",(l=h({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>x.push(e),onKeyDown:D,onClick:T},n),o={className:(0,a.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":w===e})},m(l,d(o))),null!=t?t:e);var l,o}))),l?(0,r.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function g(e){const t=(0,l.Z)();return r.createElement(k,h({key:String(t)},e))}},688059:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return b},default:function(){return g},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return h}});var r=n(603905),a=n(751361),l=n(440034),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&m(e,n,t[n]);return e};const f={id:"contourchart",title:"Contour Chart",sidebar_label:"Contour Chart"},b=void 0,v={unversionedId:"plots/contourchart",id:"plots/contourchart",title:"Contour Chart",description:"Kont\u016bru diagramma.",source:"@site/i18n/lv/docusaurus-plugin-content-docs/current/plots/contourchart.md",sourceDirName:"plots",slug:"/plots/contourchart",permalink:"/lv/docs/plots/contourchart",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/contourchart.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021. g. 1. j\u016bn.",frontMatter:{id:"contourchart",title:"Contour Chart",sidebar_label:"Contour Chart"},sidebar:"docs",previous:{title:"Box Plot",permalink:"/lv/docs/plots/boxplot"},next:{title:"Heat Map",permalink:"/lv/docs/plots/heatmap"}},y={},h=[{value:"Iesp\u0113jas",id:"iesp\u0113jas",level:2},{value:"Piem\u0113ri",id:"piem\u0113ri",level:2}],k={toc:h};function g(e){var t,n=e,{components:o}=n,m=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},k),m),i(t,s({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Kont\u016bru diagramma."),(0,r.kt)("h2",d({},{id:"iesp\u0113jas"}),"Iesp\u0113jas"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object (required)"),": katra main\u012bg\u0101 v\u0113rt\u012bbu mas\u012bvu objekts. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"x")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string (required)"),": x ass main\u012bgais lielums. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"y")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string (required)"),": y ass main\u012bgais lielums. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"overlayPoints")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrol\u0113, vai p\u0101rkl\u0101t punktus katram nov\u0113rojumam.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"smoothSpan")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": izl\u012bdzin\u0101\u0161anas diapazons. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0.66"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"regressionMethod")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<string>"),": mas\u012bvs, kas satur ",(0,r.kt)("inlineCode",{parentName:"li"},"linear")," un/vai ",(0,r.kt)("inlineCode",{parentName:"li"},"smooth"),", lai p\u0101rkl\u0101tu line\u0101ru un/vai izl\u012bdzin\u0101tu regresijas l\u012bniju.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onSelected")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": atgriezeniskais zvans, kas tiek izsaukts, kad ir atlas\u012bti punkti ar x, y v\u0113rt\u012bb\u0101m un atlas\u012btie punkti.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onSelected() {}"),".")),(0,r.kt)("h2",d({},{id:"piem\u0113ri"}),"Piem\u0113ri"),(0,r.kt)(a.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Overlay Points",value:"overlayPoints"},{label:"Regression Method",value:"regressionMethod"},{label:"Smooth Span",value:"smoothSpan"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<ContourChart \n    data={heartdisease} \n    x="Age"\n    y="Cost"\n/>\n'))),(0,r.kt)(l.Z,{value:"overlayPoints",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<ContourChart \n    overlayPoints \n    data={heartdisease} \n    x="ERVisit"\n    y="Duration"\n/>\n'))),(0,r.kt)(l.Z,{value:"regressionMethod",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<ContourChart \n    overlayPoints \n    regressionMethod={['smooth', 'linear']}\n    data={heartdisease} \n    x=\"ERVisit\"\n    y=\"Duration\"\n/>\n"))),(0,r.kt)(l.Z,{value:"smoothSpan",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<ContourChart \n    overlayPoints \n    regressionMethod={['smooth', 'linear']}\n    data={heartdisease} \n    x=\"ERVisit\"\n    y=\"Duration\"\n    smoothSpan={.12}\n/>\n")))))}g.isMDXComponent=!0}}]);