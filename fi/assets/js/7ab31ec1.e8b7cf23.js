"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[41420],{603905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(202784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},440034:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(202784),a=r(386010),l="tabItem_Ymn6",o=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function p({children:e,hidden:t,className:r}){return n.createElement("div",((e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&c(e,r,t[r]);return e})({role:"tabpanel",className:(0,a.Z)(l,r)},{hidden:t}),e)}},751361:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(202784),a=r(386010),l=r(152670),o=r(258433),i=r(952326),s=r(638849),u="tabList__CuJ",c="tabItem_LNqP",p=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,v=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&v(e,r,t[r]);if(f)for(var r of f(t))h.call(t,r)&&v(e,r,t[r]);return e};function k(e){var t,r;const{lazy:l,block:p,defaultValue:f,values:b,groupId:h,className:v}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=b?b:k.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),O=(0,o.l)(g,((e,t)=>e.value===t.value));if(O.length>0)throw new Error(`Docusaurus error: Duplicate values "${O.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===f?f:null!=(r=null!=f?f:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?r:k[0].props.value;if(null!==w&&!g.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:j,setTabGroupChoices:x}=(0,i.U)(),[T,N]=(0,n.useState)(w),E=[],{blockElementScrollPositionUntilNextRender:P}=(0,s.o5)();if(null!=h){const e=j[h];null!=e&&e!==T&&g.some((t=>t.value===e))&&N(e)}const S=e=>{const t=e.currentTarget,r=E.indexOf(t),n=g[r].value;n!==T&&(P(t),N(n),null!=h&&x(h,String(n)))},C=e=>{var t,r;let n=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{const r=E.indexOf(e.currentTarget)+1;n=null!=(t=E[r])?t:E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=null!=(r=E[t])?r:E[E.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,a.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},v)},g.map((({value:e,label:t,attributes:r})=>{return n.createElement("li",(l=y({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:e=>E.push(e),onKeyDown:C,onClick:S},r),o={className:(0,a.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":T===e})},d(l,m(o))),null!=t?t:e);var l,o}))),l?(0,n.cloneElement)(k.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function g(e){const t=(0,l.Z)();return n.createElement(k,y({key:String(t)},e))}},357692:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return b},default:function(){return g},frontMatter:function(){return f},metadata:function(){return h},toc:function(){return y}});var n=r(603905),a=r(751361),l=r(440034),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&d(e,r,t[r]);if(u)for(var r of u(t))p.call(t,r)&&d(e,r,t[r]);return e};const f={id:"h1",title:"h1",sidebar_label:"h1"},b=void 0,h={unversionedId:"html/h1",id:"html/h1",title:"h1",description:"Taso 1 Jakson otsikko.",source:"@site/i18n/fi/docusaurus-plugin-content-docs/current/html/h1.md",sourceDirName:"html",slug:"/html/h1",permalink:"/fi/docs/html/h1",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/html/h1.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. kes\xe4k. 2021",frontMatter:{id:"h1",title:"h1",sidebar_label:"h1"},sidebar:"docs",previous:{title:"span",permalink:"/fi/docs/html/span"},next:{title:"h2",permalink:"/fi/docs/html/h2"}},v={},y=[{value:"Vaihtoehdot",id:"vaihtoehdot",level:2},{value:"Esimerkkej\xe4",id:"esimerkkej\xe4",level:2}],k={toc:y};function g(e){var t,r=e,{components:o}=r,d=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},k),d),i(t,s({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Taso 1 Jakson otsikko."),(0,n.kt)("h2",m({},{id:"vaihtoehdot"}),"Vaihtoehdot"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"className")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": luokan nimi. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"style")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": CSS-inline-tyylit. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,n.kt)("h2",m({},{id:"esimerkkej\xe4"}),"Esimerkkej\xe4"),(0,n.kt)(a.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Shadow",value:"withShadow"},{label:"Multiple Shadows",value:"multipleShadows"},{label:"With Border",value:"withBorder"}],lazy:!0,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<h1>Lesson Title</h1>\n"))),(0,n.kt)(l.Z,{value:"withShadow",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<h1 style={{ textShadow: '2px 2px 2px silver' }}>Lesson Title</h1>\n"))),(0,n.kt)(l.Z,{value:"multipleShadows",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<h1 style={{ textShadow: '2px 2px 2px silver, 45px 32px 5px gold' }} >\nLesson Title\n</h1>\n"))),(0,n.kt)(l.Z,{value:"withBorder",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<h1 style={{ textShadow: '2px 2px 5px silver',\n    borderBottom: '1px dashed orange',\n    borderTop: '7px solid silver',\n    borderLeft: '7px solid rgba(0,0,0,.2)'\n}} >\nLesson Title\n</h1>\n")))))}g.isMDXComponent=!0}}]);