"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15709],{603905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(202784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||l;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},440034:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(202784),a=r(386010),l="tabItem_Ymn6",o=Object.defineProperty,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function p({children:e,hidden:t,className:r}){return n.createElement("div",((e,t)=>{for(var r in t||(t={}))u.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&c(e,r,t[r]);return e})({role:"tabpanel",className:(0,a.Z)(l,r)},{hidden:t}),e)}},751361:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(202784),a=r(386010),l=r(152670),o=r(258433),i=r(952326),u=r(638849),s="tabList__CuJ",c="tabItem_LNqP",p=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,v=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,k=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&v(e,r,t[r]);if(f)for(var r of f(t))y.call(t,r)&&v(e,r,t[r]);return e};function h(e){var t,r;const{lazy:l,block:p,defaultValue:f,values:b,groupId:y,className:v}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=b?b:h.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),j=(0,o.l)(g,((e,t)=>e.value===t.value));if(j.length>0)throw new Error(`Docusaurus error: Duplicate values "${j.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===f?f:null!=(r=null!=f?f:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?r:h[0].props.value;if(null!==O&&!g.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:N}=(0,i.U)(),[P,E]=(0,n.useState)(O),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=y){const e=w[y];null!=e&&e!==P&&g.some((t=>t.value===e))&&E(e)}const z=e=>{const t=e.currentTarget,r=T.indexOf(t),n=g[r].value;n!==P&&(x(t),E(n),null!=y&&N(y,String(n)))},C=e=>{var t,r;let n=null;switch(e.key){case"Enter":z(e);break;case"ArrowRight":{const r=T.indexOf(e.currentTarget)+1;n=null!=(t=T[r])?t:T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=null!=(r=T[t])?r:T[T.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,a.Z)("tabs-container",s)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},v)},g.map((({value:e,label:t,attributes:r})=>{return n.createElement("li",(l=k({role:"tab",tabIndex:P===e?0:-1,"aria-selected":P===e,key:e,ref:e=>T.push(e),onKeyDown:C,onClick:z},r),o={className:(0,a.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":P===e})},m(l,d(o))),null!=t?t:e);var l,o}))),l?(0,n.cloneElement)(h.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function g(e){const t=(0,l.Z)();return n.createElement(h,k({key:String(t)},e))}},270912:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return b},default:function(){return g},frontMatter:function(){return f},metadata:function(){return y},toc:function(){return k}});var n=r(603905),a=r(751361),l=r(440034),o=Object.defineProperty,i=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&m(e,r,t[r]);if(s)for(var r of s(t))p.call(t,r)&&m(e,r,t[r]);return e};const f={id:"r-help",title:"R Help",sidebar_label:"R Help"},b=void 0,y={unversionedId:"r/r-help",id:"r/r-help",title:"R Help",description:"Po klikni\u0119ciu s\u0142\xf3w wyci\u0105gnij dokumentacj\u0119 R w oknie modalnym.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/r/help.md",sourceDirName:"r",slug:"/r/r-help",permalink:"/pl/docs/r/r-help",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/r/help.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621312042,formattedLastUpdatedAt:"18 maj 2021",frontMatter:{id:"r-help",title:"R Help",sidebar_label:"R Help"},sidebar:"docs",previous:{title:"Proportions Survey",permalink:"/pl/docs/proportions-survey"},next:{title:"R Output",permalink:"/pl/docs/r/r-output"}},v={},k=[{value:"Opcje",id:"opcje",level:2},{value:"Przyk\u0142ady",id:"przyk\u0142ady",level:2}],h={toc:k};function g(e){var t,r=e,{components:o}=r,m=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=d(d({},h),m),i(t,u({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Po klikni\u0119ciu s\u0142\xf3w wyci\u0105gnij dokumentacj\u0119 R w oknie modalnym."),(0,n.kt)("h2",d({},{id:"opcje"}),"Opcje"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"func")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": nazwa funkcji ",(0,n.kt)("inlineCode",{parentName:"li"},"R"),", dla kt\xf3rej nale\u017cy otworzy\u0107 dokumentacj\u0119. Je\u015bli nie zosta\u0142a dostarczona, przyjmuje si\u0119, \u017ce zawarto\u015b\u0107 znacznika ",(0,n.kt)("inlineCode",{parentName:"li"},"RHelp")," jest r\xf3wna nazwie funkcji. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"library")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": nazwa pakietu R, w kt\xf3rym znajduje si\u0119 dana funkcja. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"'base'"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"visible")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy okno pomocy modalnej powinno by\u0107 otwarte podczas uruchamiania. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,n.kt)("h2",d({},{id:"przyk\u0142ady"}),"Przyk\u0142ady"),(0,n.kt)(a.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"From Library",value:"otherLibrary"},{label:"Visible on Startup",value:"visible"}],lazy:!0,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<span><RHelp>sum</RHelp> is used to sum the elements of a vector.</span>\n"))),(0,n.kt)(l.Z,{value:"otherLibrary",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<span><RHelp library="graphics">hist</RHelp> is used to create a histogram.</span>\n'))),(0,n.kt)(l.Z,{value:"visible",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<span><RHelp visible={true} >sum</RHelp> is used to sum the elements of a vector.</span>\n")))))}g.isMDXComponent=!0}}]);