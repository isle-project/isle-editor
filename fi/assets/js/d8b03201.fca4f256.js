"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81456],{603905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(202784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},440034:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(202784),a=r(386010),i="tabItem_Ymn6",l=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function p({children:e,hidden:t,className:r}){return n.createElement("div",((e,t)=>{for(var r in t||(t={}))u.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))s.call(t,r)&&c(e,r,t[r]);return e})({role:"tabpanel",className:(0,a.Z)(i,r)},{hidden:t}),e)}},751361:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(202784),a=r(386010),i=r(152670),l=r(258433),o=r(952326),u=r(638849),s="tabList__CuJ",c="tabItem_LNqP",p=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,v=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,k=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&v(e,r,t[r]);if(f)for(var r of f(t))y.call(t,r)&&v(e,r,t[r]);return e};function h(e){var t,r;const{lazy:i,block:p,defaultValue:f,values:b,groupId:y,className:v}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=b?b:h.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),O=(0,l.l)(g,((e,t)=>e.value===t.value));if(O.length>0)throw new Error(`Docusaurus error: Duplicate values "${O.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===f?f:null!=(r=null!=f?f:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?r:h[0].props.value;if(null!==w&&!g.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:j,setTabGroupChoices:E}=(0,o.U)(),[N,P]=(0,n.useState)(w),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=y){const e=j[y];null!=e&&e!==N&&g.some((t=>t.value===e))&&P(e)}const C=e=>{const t=e.currentTarget,r=T.indexOf(t),n=g[r].value;n!==N&&(x(t),P(n),null!=y&&E(y,String(n)))},D=e=>{var t,r;let n=null;switch(e.key){case"ArrowRight":{const r=T.indexOf(e.currentTarget)+1;n=null!=(t=T[r])?t:T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=null!=(r=T[t])?r:T[T.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,a.Z)("tabs-container",s)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},v)},g.map((({value:e,label:t,attributes:r})=>{return n.createElement("li",(i=k({role:"tab",tabIndex:N===e?0:-1,"aria-selected":N===e,key:e,ref:e=>T.push(e),onKeyDown:D,onFocus:C,onClick:C},r),l={className:(0,a.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":N===e})},d(i,m(l))),null!=t?t:e);var i,l}))),i?(0,n.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function g(e){const t=(0,i.Z)();return n.createElement(h,k({key:String(t)},e))}},640793:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return b},default:function(){return g},frontMatter:function(){return f},metadata:function(){return y},toc:function(){return k}});var n=r(603905),a=r(751361),i=r(440034),l=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&d(e,r,t[r]);if(s)for(var r of s(t))p.call(t,r)&&d(e,r,t[r]);return e};const f={id:"wikipedia",title:"Wikipedia",sidebar_label:"Wikipedia"},b=void 0,y={unversionedId:"wikipedia",id:"wikipedia",title:"Wikipedia",description:"Wikipedia-komponentti skannaa Wikipedia:n ja palauttaa merkinn\xe4n, jos sy\xf6tetyn hakusanan alta l\xf6ytyy jotain kelvollista.",source:"@site/i18n/fi/docusaurus-plugin-content-docs/current/wikipedia.md",sourceDirName:".",slug:"/wikipedia",permalink:"/fi/docs/wikipedia",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/wikipedia.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1.6.2021",frontMatter:{id:"wikipedia",title:"Wikipedia",sidebar_label:"Wikipedia"},sidebar:"docs",previous:{title:"Weather",permalink:"/fi/docs/weather"},next:{title:"Checkbox Input",permalink:"/fi/docs/input/checkbox-input"}},v={},k=[{value:"Vaihtoehdot",id:"vaihtoehdot",level:2},{value:"Esimerkkej\xe4",id:"esimerkkej\xe4",level:2}],h={toc:k};function g(e){var t,r=e,{components:l}=r,d=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},h),d),o(t,u({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Wikipedia"),"-komponentti skannaa ",(0,n.kt)("strong",{parentName:"p"},"Wikipedia"),":n ja palauttaa merkinn\xe4n, jos sy\xf6tetyn hakusanan alta l\xf6ytyy jotain kelvollista."),(0,n.kt)("h2",m({},{id:"vaihtoehdot"}),"Vaihtoehdot"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"defaultEntry")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": oletusarvoisesti n\xe4ytett\xe4v\xe4 merkint\xe4. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"style")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": CSS-inline-tyylit. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,n.kt)("h2",m({},{id:"esimerkkej\xe4"}),"Esimerkkej\xe4"),(0,n.kt)(a.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Entry",value:"withEntry"}],lazy:!0,mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"minimal",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Wikipedia />\n"))),(0,n.kt)(i.Z,{value:"withEntry",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Wikipedia defaultEntry="Angela Merkel" />\n')))))}g.isMDXComponent=!0}}]);