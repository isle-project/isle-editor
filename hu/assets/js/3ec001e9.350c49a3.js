"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[16067],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(202784),r=n(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(202784),r=n(386010),l=n(152670),i=n(258433),o=n(952326),s=n(638849),u="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&v(e,n,t[n]);if(k)for(var n of k(t))b.call(t,n)&&v(e,n,t[n]);return e};function y(e){var t,n;const{lazy:l,block:c,defaultValue:k,values:f,groupId:b,className:v}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=f?f:y.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),N=(0,i.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===k?k:null!=(n=null!=k?k:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?n:y[0].props.value;if(null!==O&&!h.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:j}=(0,o.U)(),[P,C]=(0,a.useState)(O),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=b){const e=w[b];null!=e&&e!==P&&h.some((t=>t.value===e))&&C(e)}const z=e=>{const t=e.currentTarget,n=E.indexOf(t),a=h[n].value;a!==P&&(T(t),C(a),null!=b&&j(b,String(a)))},x=e=>{var t,n;let a=null;switch(e.key){case"Enter":z(e);break;case"ArrowRight":{const n=E.indexOf(e.currentTarget)+1;a=null!=(t=E[n])?t:E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;a=null!=(n=E[t])?n:E[E.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},v)},h.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(l=g({role:"tab",tabIndex:P===e?0:-1,"aria-selected":P===e,key:e,ref:e=>E.push(e),onKeyDown:x,onClick:z},n),i={className:(0,r.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":P===e})},m(l,d(i))),null!=t?t:e);var l,i}))),l?(0,a.cloneElement)(y.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function h(e){const t=(0,l.Z)();return a.createElement(y,g({key:String(t)},e))}},727486:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return f},default:function(){return h},frontMatter:function(){return k},metadata:function(){return b},toc:function(){return g}});var a=n(603905),r=n(751361),l=n(440034),i=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))c.call(t,n)&&m(e,n,t[n]);return e};const k={id:"link",title:"Link",sidebar_label:"Link"},f=void 0,b={unversionedId:"link",id:"link",title:"Link",description:"Egy link megjelen\xedt\xe9s\xe9re szolg\xe1l\xf3 komponens.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/link.md",sourceDirName:".",slug:"/link",permalink:"/hu/docs/link",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/link.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1658117079,formattedLastUpdatedAt:"2022. j\xfal. 18.",frontMatter:{id:"link",title:"Link",sidebar_label:"Link"},sidebar:"docs",previous:{title:"Image",permalink:"/hu/docs/image"},next:{title:"LaTeX Equations",permalink:"/hu/docs/tex"}},v={},g=[{value:"Opci\xf3k",id:"opci\xf3k",level:2},{value:"P\xe9ld\xe1k",id:"p\xe9ld\xe1k",level:2}],y={toc:g};function h(e){var t,n=e,{components:i}=n,m=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},y),m),o(t,s({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Egy link megjelen\xedt\xe9s\xe9re szolg\xe1l\xf3 komponens."),(0,a.kt)("h2",d({},{id:"opci\xf3k"}),"Opci\xf3k"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"href")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string (required)"),": A weboldal URL c\xedme, amelyre hivatkozni k\xedv\xe1n. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"download")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|boolean)"),": megadja, hogy a linket le kell-e t\xf6lteni: a let\xf6lt\xe9s kik\xe9nyszer\xedt\xe9s\xe9hez ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),", vagy egy karakterl\xe1nc a f\xe1jln\xe9v megad\xe1s\xe1hoz; ha ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),", akkor nem k\xe9nyszer\xfcl let\xf6lt\xe9sre.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"target")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": meghat\xe1rozza, hogy hol ny\xedlik meg a link: \xfaj ablak eset\xe9n ",(0,a.kt)("inlineCode",{parentName:"li"},"_blank"),", saj\xe1t keret eset\xe9n ",(0,a.kt)("inlineCode",{parentName:"li"},"_self"),", sz\xfcl\u0151 eset\xe9n ",(0,a.kt)("inlineCode",{parentName:"li"},"_parent"),", ablak teljes teste eset\xe9n ",(0,a.kt)("inlineCode",{parentName:"li"},"_top"),", vagy a keret neve.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"windowFeatures")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": vessz\u0151vel elv\xe1lasztott lista a link \xfaj ablakban val\xf3 megnyit\xe1sakor haszn\xe1lt ablakjellemz\u0151kr\u0151l (l\xe1sd: ",(0,a.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features"}),"https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features"),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"openWindow")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": boolean, amely szab\xe1lyozza, hogy az URL \xfaj ablakban ny\xedljon-e meg. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"className")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": oszt\xe1ly neve. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline st\xedlusok. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,a.kt)("h2",d({},{id:"p\xe9ld\xe1k"}),"P\xe9ld\xe1k"),(0,a.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"New Page",value:"newPage"},{label:"Image Link",value:"imageLink"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Link href="https://wikipedia.org">Wikipedia</Link>\n'))),(0,a.kt)(l.Z,{value:"newPage",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Link target="_blank" \nstyle={{ fontSize: 35}}\nhref="https://wikipedia.org">New Wikipedia Page</Link>\n'))),(0,a.kt)(l.Z,{value:"imageLink",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Link target="_blank" \nstyle={{ fontSize: 35}}\nhref="https://wikipedia.org">\n<img src= "https://bit.ly/3aM4OU7" /></Link>\n')))))}h.isMDXComponent=!0}}]);