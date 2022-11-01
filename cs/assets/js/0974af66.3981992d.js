"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48973],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(202784),a=n(386010),l="tabItem_Ymn6",o=Object.defineProperty,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return r.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,a.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(202784),a=n(386010),l=n(152670),o=n(258433),i=n(952326),u=n(638849),s="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&v(e,n,t[n]);if(f)for(var n of f(t))k.call(t,n)&&v(e,n,t[n]);return e};function g(e){var t,n;const{lazy:l,block:c,defaultValue:f,values:b,groupId:k,className:v}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=b?b:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),N=(0,o.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===f?f:null!=(n=null!=f?f:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?n:g[0].props.value;if(null!==w&&!h.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:O,setTabGroupChoices:j}=(0,i.U)(),[P,C]=(0,r.useState)(w),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=k){const e=O[k];null!=e&&e!==P&&h.some((t=>t.value===e))&&C(e)}const z=e=>{const t=e.currentTarget,n=E.indexOf(t),r=h[n].value;r!==P&&(T(t),C(r),null!=k&&j(k,String(r)))},x=e=>{var t,n;let r=null;switch(e.key){case"Enter":z(e);break;case"ArrowRight":{const n=E.indexOf(e.currentTarget)+1;r=null!=(t=E[n])?t:E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;r=null!=(n=E[t])?n:E[E.length-1];break}}null==r||r.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":c},v)},h.map((({value:e,label:t,attributes:n})=>{return r.createElement("li",(l=y({role:"tab",tabIndex:P===e?0:-1,"aria-selected":P===e,key:e,ref:e=>E.push(e),onKeyDown:x,onClick:z},n),o={className:(0,a.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":P===e})},d(l,m(o))),null!=t?t:e);var l,o}))),l?(0,r.cloneElement)(g.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function h(e){const t=(0,l.Z)();return r.createElement(g,y({key:String(t)},e))}},709364:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return b},default:function(){return h},frontMatter:function(){return f},metadata:function(){return k},toc:function(){return y}});var r=n(603905),a=n(751361),l=n(440034),o=Object.defineProperty,i=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&d(e,n,t[n]);return e};const f={id:"link",title:"Link",sidebar_label:"Link"},b=void 0,k={unversionedId:"link",id:"link",title:"Link",description:"Komponenta pro zobrazen\xed odkazu.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/link.md",sourceDirName:".",slug:"/link",permalink:"/cs/docs/link",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/link.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1658117079,formattedLastUpdatedAt:"18. 7. 2022",frontMatter:{id:"link",title:"Link",sidebar_label:"Link"},sidebar:"docs",previous:{title:"Image",permalink:"/cs/docs/image"},next:{title:"LaTeX Equations",permalink:"/cs/docs/tex"}},v={},y=[{value:"Mo\u017enosti",id:"mo\u017enosti",level:2},{value:"P\u0159\xedklady",id:"p\u0159\xedklady",level:2}],g={toc:y};function h(e){var t,n=e,{components:o}=n,d=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},g),d),i(t,u({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Komponenta pro zobrazen\xed odkazu."),(0,r.kt)("h2",m({},{id:"mo\u017enosti"}),"Mo\u017enosti"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"href")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string (required)"),": Adresa URL webov\xe9 str\xe1nky, na kterou se m\xe1 odkazovat. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"download")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|boolean)"),": ur\u010duje, zda se m\xe1 odkaz st\xe1hnout: nastav\xed se na ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," pro vynucen\xed sta\u017een\xed, nebo na \u0159et\u011bzec pro zad\xe1n\xed n\xe1zvu souboru; pokud je ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),", stahov\xe1n\xed se nevynucuje.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"target")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": ur\u010duje, kde se odkaz otev\u0159e: nastaveno na ",(0,r.kt)("inlineCode",{parentName:"li"},"_blank")," pro nov\xe9 okno, ",(0,r.kt)("inlineCode",{parentName:"li"},"_self")," pro vlastn\xed r\xe1m, ",(0,r.kt)("inlineCode",{parentName:"li"},"_parent")," pro nad\u0159azen\xe9 okno, ",(0,r.kt)("inlineCode",{parentName:"li"},"_top")," pro cel\xe9 t\u011blo okna nebo n\xe1zev r\xe1mu.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"windowFeatures")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u010d\xe1rkou odd\u011blen\xfd seznam vlastnost\xed okna pro otev\u0159en\xed odkazu v nov\xe9m okn\u011b (viz: ",(0,r.kt)("a",m({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features"}),"https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"openWindow")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": boolean ur\u010duj\xedc\xed, zda se m\xe1 adresa URL otev\u0159\xedt v nov\xe9m okn\u011b. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"className")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": n\xe1zev t\u0159\xeddy. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": \u0158\xe1dkov\xe9 styly CSS. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,r.kt)("h2",m({},{id:"p\u0159\xedklady"}),"P\u0159\xedklady"),(0,r.kt)(a.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"New Page",value:"newPage"},{label:"Image Link",value:"imageLink"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Link href="https://wikipedia.org">Wikipedia</Link>\n'))),(0,r.kt)(l.Z,{value:"newPage",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Link target="_blank" \nstyle={{ fontSize: 35}}\nhref="https://wikipedia.org">New Wikipedia Page</Link>\n'))),(0,r.kt)(l.Z,{value:"imageLink",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Link target="_blank" \nstyle={{ fontSize: 35}}\nhref="https://wikipedia.org">\n<img src= "https://bit.ly/3aM4OU7" /></Link>\n')))))}h.isMDXComponent=!0}}]);