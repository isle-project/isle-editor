"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35733],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return b}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,b=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(202784),a=n(386010),l="tabItem_Ymn6",o=Object.defineProperty,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function p({children:e,hidden:t,className:n}){return r.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&c(e,n,t[n]);return e})({role:"tabpanel",className:(0,a.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(202784),a=n(386010),l=n(152670),o=n(258433),i=n(952326),u=n(638849),s="tabList__CuJ",c="tabItem_LNqP",p=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&y(e,n,t[n]);if(b)for(var n of b(t))v.call(t,n)&&y(e,n,t[n]);return e};function g(e){var t,n;const{lazy:l,block:p,defaultValue:b,values:f,groupId:v,className:y}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=f?f:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),O=(0,o.l)(h,((e,t)=>e.value===t.value));if(O.length>0)throw new Error(`Docusaurus error: Duplicate values "${O.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===b?b:null!=(n=null!=b?b:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?n:g[0].props.value;if(null!==N&&!h.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:j}=(0,i.U)(),[C,x]=(0,r.useState)(N),T=[],{blockElementScrollPositionUntilNextRender:P}=(0,u.o5)();if(null!=v){const e=w[v];null!=e&&e!==C&&h.some((t=>t.value===e))&&x(e)}const E=e=>{const t=e.currentTarget,n=T.indexOf(t),r=h[n].value;r!==C&&(P(t),x(r),null!=v&&j(v,String(r)))},D=e=>{var t,n;let r=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;r=null!=(t=T[n])?t:T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;r=null!=(n=T[t])?n:T[T.length-1];break}}null==r||r.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},y)},h.map((({value:e,label:t,attributes:n})=>{return r.createElement("li",(l=k({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>T.push(e),onKeyDown:D,onClick:E},n),o={className:(0,a.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":C===e})},d(l,m(o))),null!=t?t:e);var l,o}))),l?(0,r.cloneElement)(g.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function h(e){const t=(0,l.Z)();return r.createElement(g,k({key:String(t)},e))}},719894:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return h},frontMatter:function(){return b},metadata:function(){return v},toc:function(){return k}});var r=n(603905),a=n(751361),l=n(440034),o=Object.defineProperty,i=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&d(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&d(e,n,t[n]);return e};const b={id:"qrcode",title:"QR Code",sidebar_label:"QR Code"},f=void 0,v={unversionedId:"qrcode",id:"qrcode",title:"QR Code",description:"QR k\xf3d.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/qrcode.md",sourceDirName:".",slug:"/qrcode",permalink:"/cs/docs/qrcode",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/qrcode.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. 6. 2021",frontMatter:{id:"qrcode",title:"QR Code",sidebar_label:"QR Code"},sidebar:"docs",previous:{title:"Multi Cards",permalink:"/cs/docs/multi-cards"},next:{title:"Recorder",permalink:"/cs/docs/recorder"}},y={},k=[{value:"Mo\u017enosti",id:"mo\u017enosti",level:2},{value:"P\u0159\xedklady",id:"p\u0159\xedklady",level:2}],g={toc:k};function h(e){var t,n=e,{components:o}=n,d=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},g),d),i(t,u({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"QR k\xf3d."),(0,r.kt)("h2",m({},{id:"mo\u017enosti"}),"Mo\u017enosti"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"text")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": text, kter\xfd se m\xe1 zak\xf3dovat do QR k\xf3du (pokud nen\xed nastaven, je v\xfdchoz\xed hodnotou URL lekce).. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"scale")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": po\u010det pixel\u016f na modul (\u010dern\xe9 body). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"8"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"width")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": \u0161\xed\u0159ka v pixelech; m\xe1 p\u0159ednost p\u0159ed vlastnost\xed ",(0,r.kt)("inlineCode",{parentName:"li"},"scale"),".. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"showText")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": boolean ur\u010duj\xedc\xed, zda se m\xe1 zobrazit text zak\xf3dovan\xfd v QR k\xf3du.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"center")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": boolean ur\u010duj\xedc\xed, zda se m\xe1 QR k\xf3d vycentrovat.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": \u0158\xe1dkov\xe9 styly CSS. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,r.kt)("h2",m({},{id:"p\u0159\xedklady"}),"P\u0159\xedklady"),(0,r.kt)(a.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With CSS",value:"withCSS"},{label:"Visible Link",value:"visibleLink"},{label:"Scale",value:"scale"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<QRCode />\n"))),(0,r.kt)(l.Z,{value:"withCSS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<QRCode \n    center \n    text=\"https://isledocs.com/docs/qrcode\" \n    style ={{ outline: '4px grey solid' }}\n/>\n"))),(0,r.kt)(l.Z,{value:"visibleLink",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<QRCode \n    text="https://isledocs.com/docs/qrcode"\n    showText\n/>\n'))),(0,r.kt)(l.Z,{value:"scale",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<QRCode \n    text=\"https://isledocs.com/docs/qrcode\"\n    scale={12}\n    showText\n    style={{ fontFamily: 'Open Sans Condensed', color: 'red', outline: '4px black solid' }}\n/>\n")))))}h.isMDXComponent=!0}}]);