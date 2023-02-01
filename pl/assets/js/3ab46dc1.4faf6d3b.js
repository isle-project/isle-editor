"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[13955],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,f=c["".concat(u,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(202784),a=n(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return r.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,a.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(202784),a=n(386010),l=n(152670),i=n(258433),o=n(952326),u=n(638849),s="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&y(e,n,t[n]);if(f)for(var n of f(t))k.call(t,n)&&y(e,n,t[n]);return e};function g(e){var t,n;const{lazy:l,block:c,defaultValue:f,values:b,groupId:k,className:y}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),w=null!=b?b:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),h=(0,i.l)(w,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===f?f:null!=(n=null!=f?f:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?n:g[0].props.value;if(null!==N&&!w.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${w.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:O,setTabGroupChoices:j}=(0,o.U)(),[P,C]=(0,r.useState)(N),z=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=k){const e=O[k];null!=e&&e!==P&&w.some((t=>t.value===e))&&C(e)}const T=e=>{const t=e.currentTarget,n=z.indexOf(t),r=w[n].value;r!==P&&(E(t),C(r),null!=k&&j(k,String(r)))},x=e=>{var t,n;let r=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const n=z.indexOf(e.currentTarget)+1;r=null!=(t=z[n])?t:z[0];break}case"ArrowLeft":{const t=z.indexOf(e.currentTarget)-1;r=null!=(n=z[t])?n:z[z.length-1];break}}null==r||r.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":c},y)},w.map((({value:e,label:t,attributes:n})=>{return r.createElement("li",(l=v({role:"tab",tabIndex:P===e?0:-1,"aria-selected":P===e,key:e,ref:e=>z.push(e),onKeyDown:x,onClick:T},n),i={className:(0,a.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":P===e})},m(l,d(i))),null!=t?t:e);var l,i}))),l?(0,r.cloneElement)(g.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function w(e){const t=(0,l.Z)();return r.createElement(g,v({key:String(t)},e))}},869446:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return b},default:function(){return w},frontMatter:function(){return f},metadata:function(){return k},toc:function(){return v}});var r=n(603905),a=n(751361),l=n(440034),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&m(e,n,t[n]);return e};const f={id:"link",title:"Link",sidebar_label:"Link"},b=void 0,k={unversionedId:"link",id:"link",title:"Link",description:"Komponent do wy\u015bwietlania \u0142\u0105cza.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/link.md",sourceDirName:".",slug:"/link",permalink:"/pl/docs/link",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/link.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1658117079,formattedLastUpdatedAt:"18 lip 2022",frontMatter:{id:"link",title:"Link",sidebar_label:"Link"},sidebar:"docs",previous:{title:"Image",permalink:"/pl/docs/image"},next:{title:"LaTeX Equations",permalink:"/pl/docs/tex"}},y={},v=[{value:"Opcje",id:"opcje",level:2},{value:"Przyk\u0142ady",id:"przyk\u0142ady",level:2}],g={toc:v};function w(e){var t,n=e,{components:i}=n,m=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},g),m),o(t,u({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Komponent do wy\u015bwietlania \u0142\u0105cza."),(0,r.kt)("h2",d({},{id:"opcje"}),"Opcje"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"href")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string (required)"),": URL strony internetowej, na kt\xf3rej znajduje si\u0119 link do. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"download")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|boolean)"),": okre\u015bla, czy link powinien zosta\u0107 pobrany: ustawione na ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", aby wymusi\u0107 pobranie, lub \u0142a\u0144cuch znak\xf3w, aby okre\u015bli\u0107 nazw\u0119 pliku; je\u015bli ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),", pobieranie nie jest wymuszane. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"target")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": definiuje miejsce otwarcia linku: ustawia si\u0119 na ",(0,r.kt)("inlineCode",{parentName:"li"},"_blank")," dla nowego okna, ",(0,r.kt)("inlineCode",{parentName:"li"},"_self")," own frame, ",(0,r.kt)("inlineCode",{parentName:"li"},"_parent")," dla rodzica, ",(0,r.kt)("inlineCode",{parentName:"li"},"_top")," dla pe\u0142nej tre\u015bci okna, lub nazw\u0119 ramki. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"windowFeatures")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": rozdzielona przecinkami lista w\u0142a\u015bciwo\u015bci okna, w kt\xf3rym link zostanie otwarty w nowym oknie (patrz: ",(0,r.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features"}),"https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"openWindow")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": boolean kontroluj\u0105cy czy otworzy\u0107 URL w nowym oknie. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"className")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": nazwa klasy. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": Style CSS inline. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,r.kt)("h2",d({},{id:"przyk\u0142ady"}),"Przyk\u0142ady"),(0,r.kt)(a.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"New Page",value:"newPage"},{label:"Image Link",value:"imageLink"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Link href="https://wikipedia.org">Wikipedia</Link>\n'))),(0,r.kt)(l.Z,{value:"newPage",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Link target="_blank" \nstyle={{ fontSize: 35}}\nhref="https://wikipedia.org">New Wikipedia Page</Link>\n'))),(0,r.kt)(l.Z,{value:"imageLink",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Link target="_blank" \nstyle={{ fontSize: 35}}\nhref="https://wikipedia.org">\n<img src= "https://bit.ly/3aM4OU7" /></Link>\n')))))}w.isMDXComponent=!0}}]);