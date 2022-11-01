"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15436],{603905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(202784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},440034:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(202784),a=t(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;function c({children:e,hidden:n,className:t}){return r.createElement("div",((e,n)=>{for(var t in n||(n={}))u.call(n,t)&&p(e,t,n[t]);if(o)for(var t of o(n))s.call(n,t)&&p(e,t,n[t]);return e})({role:"tabpanel",className:(0,a.Z)(l,t)},{hidden:n}),e)}},751361:function(e,n,t){t.d(n,{Z:function(){return w}});var r=t(202784),a=t(386010),l=t(152670),i=t(258433),o=t(952326),u=t(638849),s="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,k=(e,n,t)=>n in e?c(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,g=(e,n)=>{for(var t in n||(n={}))b.call(n,t)&&k(e,t,n[t]);if(f)for(var t of f(n))v.call(n,t)&&k(e,t,n[t]);return e};function y(e){var n,t;const{lazy:l,block:c,defaultValue:f,values:b,groupId:v,className:k}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),w=null!=b?b:y.map((({props:{value:e,label:n,attributes:t}})=>({value:e,label:n,attributes:t}))),h=(0,i.l)(w,((e,n)=>e.value===n.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===f?f:null!=(t=null!=f?f:null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)?t:y[0].props.value;if(null!==N&&!w.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${w.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:O,setTabGroupChoices:j}=(0,o.U)(),[P,C]=(0,r.useState)(N),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=v){const e=O[v];null!=e&&e!==P&&w.some((n=>n.value===e))&&C(e)}const x=e=>{const n=e.currentTarget,t=E.indexOf(n),r=w[t].value;r!==P&&(T(n),C(r),null!=v&&j(v,String(r)))},D=e=>{var n,t;let r=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;r=null!=(n=E[t])?n:E[0];break}case"ArrowLeft":{const n=E.indexOf(e.currentTarget)-1;r=null!=(t=E[n])?t:E[E.length-1];break}}null==r||r.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":c},k)},w.map((({value:e,label:n,attributes:t})=>{return r.createElement("li",(l=g({role:"tab",tabIndex:P===e?0:-1,"aria-selected":P===e,key:e,ref:e=>E.push(e),onKeyDown:D,onClick:x},t),i={className:(0,a.Z)("tabs__item",p,null==t?void 0:t.className,{"tabs__item--active":P===e})},d(l,m(i))),null!=n?n:e);var l,i}))),l?(0,r.cloneElement)(y.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==P})))))}function w(e){const n=(0,l.Z)();return r.createElement(y,g({key:String(n)},e))}},38441:function(e,n,t){t.r(n),t.d(n,{assets:function(){return k},contentTitle:function(){return b},default:function(){return w},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return g}});var r=t(603905),a=t(751361),l=t(440034),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&d(e,t,n[t]);if(s)for(var t of s(n))c.call(n,t)&&d(e,t,n[t]);return e};const f={id:"link",title:"Link",sidebar_label:"Link"},b=void 0,v={unversionedId:"link",id:"link",title:"Link",description:"Een component voor het weergeven van een link.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/link.md",sourceDirName:".",slug:"/link",permalink:"/nl/docs/link",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/link.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1658117079,formattedLastUpdatedAt:"18 jul. 2022",frontMatter:{id:"link",title:"Link",sidebar_label:"Link"},sidebar:"docs",previous:{title:"Image",permalink:"/nl/docs/image"},next:{title:"LaTeX Equations",permalink:"/nl/docs/tex"}},k={},g=[{value:"Opties",id:"opties",level:2},{value:"Voorbeelden",id:"voorbeelden",level:2}],y={toc:g};function w(e){var n,t=e,{components:i}=t,d=((e,n)=>{var t={};for(var r in e)p.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&s)for(var r of s(e))n.indexOf(r)<0&&c.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=m(m({},y),d),o(n,u({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Een component voor het weergeven van een link."),(0,r.kt)("h2",m({},{id:"opties"}),"Opties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"href")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string (required)"),": URL van de website om naar te linken. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"download")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|boolean)"),": geeft aan of de link gedownload moet worden: zet ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," om downloaden te forceren, of een string om de bestandsnaam te specificeren; indien ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),", wordt downloaden niet geforceerd. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"target")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": definieert waar de link wordt geopend: ingesteld op ",(0,r.kt)("inlineCode",{parentName:"li"},"_blank")," voor een nieuw venster, ",(0,r.kt)("inlineCode",{parentName:"li"},"_zelf")," eigen frame, ",(0,r.kt)("inlineCode",{parentName:"li"},"_ouder")," voor de ouder, ",(0,r.kt)("inlineCode",{parentName:"li"},"_top")," voor het volledige venster, of de naam van het frame. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"windowFeatures")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": door komma's gescheiden lijst van vensterkenmerken voor wanneer de link in een nieuw venster wordt geopend (zie: ",(0,r.kt)("a",m({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features"}),"https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"openWindow")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": booleaans die bepaalt of de URL in een nieuw venster moet worden geopend. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"className")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": klassennaam. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline-stijlen. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,r.kt)("h2",m({},{id:"voorbeelden"}),"Voorbeelden"),(0,r.kt)(a.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"New Page",value:"newPage"},{label:"Image Link",value:"imageLink"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Link href="https://wikipedia.org">Wikipedia</Link>\n'))),(0,r.kt)(l.Z,{value:"newPage",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Link target="_blank" \nstyle={{ fontSize: 35}}\nhref="https://wikipedia.org">New Wikipedia Page</Link>\n'))),(0,r.kt)(l.Z,{value:"imageLink",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Link target="_blank" \nstyle={{ fontSize: 35}}\nhref="https://wikipedia.org">\n<img src= "https://bit.ly/3aM4OU7" /></Link>\n')))))}w.isMDXComponent=!0}}]);