"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[96120],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(202784),a=n(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return r.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,a.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(202784),a=n(386010),l=n(152670),i=n(258433),o=n(952326),u=n(638849),s="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&v(e,n,t[n]);if(f)for(var n of f(t))k.call(t,n)&&v(e,n,t[n]);return e};function y(e){var t,n;const{lazy:l,block:c,defaultValue:f,values:b,groupId:k,className:v}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=b?b:y.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),N=(0,i.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===f?f:null!=(n=null!=f?f:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?n:y[0].props.value;if(null!==O&&!h.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:j}=(0,o.U)(),[P,C]=(0,r.useState)(O),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=k){const e=w[k];null!=e&&e!==P&&h.some((t=>t.value===e))&&C(e)}const x=e=>{const t=e.currentTarget,n=T.indexOf(t),r=h[n].value;r!==P&&(E(t),C(r),null!=k&&j(k,String(r)))},D=e=>{var t,n;let r=null;switch(e.key){case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;r=null!=(t=T[n])?t:T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;r=null!=(n=T[t])?n:T[T.length-1];break}}null==r||r.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":c},v)},h.map((({value:e,label:t,attributes:n})=>{return r.createElement("li",(l=g({role:"tab",tabIndex:P===e?0:-1,"aria-selected":P===e,key:e,ref:e=>T.push(e),onKeyDown:D,onFocus:x,onClick:x},n),i={className:(0,a.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":P===e})},m(l,d(i))),null!=t?t:e);var l,i}))),l?(0,r.cloneElement)(y.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function h(e){const t=(0,l.Z)();return r.createElement(y,g({key:String(t)},e))}},142193:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return b},default:function(){return h},frontMatter:function(){return f},metadata:function(){return k},toc:function(){return g}});var r=n(603905),a=n(751361),l=n(440034),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&m(e,n,t[n]);return e};const f={id:"link",title:"Link",sidebar_label:"Link"},b=void 0,k={unversionedId:"link",id:"link",title:"Link",description:"\u0388\u03bd\u03b1 \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03b5\u03bc\u03c6\u03ac\u03bd\u03b9\u03c3\u03b7 \u03b5\u03bd\u03cc\u03c2 \u03c3\u03c5\u03bd\u03b4\u03ad\u03c3\u03bc\u03bf\u03c5.",source:"@site/i18n/el/docusaurus-plugin-content-docs/current/link.md",sourceDirName:".",slug:"/link",permalink:"/el/docs/link",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/link.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1658117079,formattedLastUpdatedAt:"18 \u0399\u03bf\u03c5\u03bb 2022",frontMatter:{id:"link",title:"Link",sidebar_label:"Link"},sidebar:"docs",previous:{title:"Image",permalink:"/el/docs/image"},next:{title:"LaTeX Equations",permalink:"/el/docs/tex"}},v={},g=[{value:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",level:2},{value:"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",level:2}],y={toc:g};function h(e){var t,n=e,{components:i}=n,m=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},y),m),o(t,u({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u0388\u03bd\u03b1 \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03b5\u03bc\u03c6\u03ac\u03bd\u03b9\u03c3\u03b7 \u03b5\u03bd\u03cc\u03c2 \u03c3\u03c5\u03bd\u03b4\u03ad\u03c3\u03bc\u03bf\u03c5."),(0,r.kt)("h2",d({},{id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"}),"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"href")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string (required)"),": URL \u03c4\u03bf\u03c5 \u03b4\u03b9\u03ba\u03c4\u03c5\u03b1\u03ba\u03bf\u03cd \u03c4\u03cc\u03c0\u03bf\u03c5 \u03c3\u03c4\u03bf\u03bd \u03bf\u03c0\u03bf\u03af\u03bf \u03b8\u03b1 \u03c0\u03b1\u03c1\u03b1\u03c0\u03ad\u03bc\u03c8\u03b5\u03c4\u03b5. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"download")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|boolean)"),": \u03ba\u03b1\u03b8\u03bf\u03c1\u03af\u03b6\u03b5\u03b9 \u03b1\u03bd \u03bf \u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03bc\u03bf\u03c2 \u03b8\u03b1 \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03bc\u03b5\u03c4\u03b1\u03c6\u03bf\u03c1\u03c4\u03c9\u03b8\u03b5\u03af: \u03c4\u03af\u03b8\u03b5\u03c4\u03b1\u03b9 \u03c3\u03b5 ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03b5\u03be\u03b1\u03bd\u03b1\u03b3\u03ba\u03b1\u03c3\u03c4\u03b5\u03af \u03b7 \u03bc\u03b5\u03c4\u03b1\u03c6\u03cc\u03c1\u03c4\u03c9\u03c3\u03b7, \u03ae \u03bc\u03b9\u03b1 \u03c3\u03c5\u03bc\u03b2\u03bf\u03bb\u03bf\u03c3\u03b5\u03b9\u03c1\u03ac \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03ba\u03b1\u03b8\u03bf\u03c1\u03b9\u03c3\u03c4\u03b5\u03af \u03c4\u03bf \u03cc\u03bd\u03bf\u03bc\u03b1 \u03c4\u03bf\u03c5 \u03b1\u03c1\u03c7\u03b5\u03af\u03bf\u03c5- \u03b1\u03bd ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),", \u03b4\u03b5\u03bd \u03b5\u03be\u03b1\u03bd\u03b1\u03b3\u03ba\u03ac\u03b6\u03b5\u03c4\u03b1\u03b9 \u03b7 \u03bc\u03b5\u03c4\u03b1\u03c6\u03cc\u03c1\u03c4\u03c9\u03c3\u03b7.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"target")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u03bf\u03c1\u03af\u03b6\u03b5\u03b9 \u03c0\u03bf\u03cd \u03b1\u03bd\u03bf\u03af\u03b3\u03b5\u03b9 \u03bf \u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03bc\u03bf\u03c2: \u03bf\u03c1\u03af\u03b6\u03b5\u03c4\u03b1\u03b9 \u03c3\u03b5 ",(0,r.kt)("inlineCode",{parentName:"li"},"_blank")," \u03b3\u03b9\u03b1 \u03bd\u03ad\u03bf \u03c0\u03b1\u03c1\u03ac\u03b8\u03c5\u03c1\u03bf, ",(0,r.kt)("inlineCode",{parentName:"li"},"_self")," \u03b3\u03b9\u03b1 \u03c4\u03bf \u03b4\u03b9\u03ba\u03cc \u03c4\u03bf\u03c5 \u03c0\u03bb\u03b1\u03af\u03c3\u03b9\u03bf, ",(0,r.kt)("inlineCode",{parentName:"li"},"_parent")," \u03b3\u03b9\u03b1 \u03c4\u03bf\u03bd \u03b3\u03bf\u03bd\u03ad\u03b1, ",(0,r.kt)("inlineCode",{parentName:"li"},"_top")," \u03b3\u03b9\u03b1 \u03bf\u03bb\u03cc\u03ba\u03bb\u03b7\u03c1\u03bf \u03c4\u03bf \u03c3\u03ce\u03bc\u03b1 \u03c4\u03bf\u03c5 \u03c0\u03b1\u03c1\u03b1\u03b8\u03cd\u03c1\u03bf\u03c5 \u03ae \u03c4\u03bf \u03cc\u03bd\u03bf\u03bc\u03b1 \u03c4\u03bf\u03c5 \u03c0\u03bb\u03b1\u03b9\u03c3\u03af\u03bf\u03c5.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"windowFeatures")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u03bb\u03af\u03c3\u03c4\u03b1 \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03b7\u03c1\u03b9\u03c3\u03c4\u03b9\u03ba\u03ce\u03bd \u03c0\u03b1\u03c1\u03b1\u03b8\u03cd\u03c1\u03bf\u03c5 \u03bc\u03b5 \u03b4\u03b9\u03b1\u03c7\u03c9\u03c1\u03b9\u03c3\u03bc\u03cc \u03bc\u03b5 \u03ba\u03cc\u03bc\u03bc\u03b1 \u03b3\u03b9\u03b1 \u03c4\u03bf \u03ac\u03bd\u03bf\u03b9\u03b3\u03bc\u03b1 \u03c4\u03bf\u03c5 \u03c3\u03c5\u03bd\u03b4\u03ad\u03c3\u03bc\u03bf\u03c5 \u03c3\u03b5 \u03bd\u03ad\u03bf \u03c0\u03b1\u03c1\u03ac\u03b8\u03c5\u03c1\u03bf (\u03b2\u03bb\u03ad\u03c0\u03b5: ",(0,r.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features"}),"https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"openWindow")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": boolean \u03c0\u03bf\u03c5 \u03b5\u03bb\u03ad\u03b3\u03c7\u03b5\u03b9 \u03b1\u03bd \u03b8\u03b1 \u03b1\u03bd\u03bf\u03af\u03be\u03b5\u03b9 \u03b7 \u03b4\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7 URL \u03c3\u03b5 \u03bd\u03ad\u03bf \u03c0\u03b1\u03c1\u03ac\u03b8\u03c5\u03c1\u03bf. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"className")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u03cc\u03bd\u03bf\u03bc\u03b1 \u03ba\u03bb\u03ac\u03c3\u03b7\u03c2. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": \u03a3\u03c4\u03c5\u03bb \u03b3\u03c1\u03b1\u03bc\u03bc\u03ae\u03c2 CSS. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,r.kt)("h2",d({},{id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"}),"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"),(0,r.kt)(a.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"New Page",value:"newPage"},{label:"Image Link",value:"imageLink"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Link href="https://wikipedia.org">Wikipedia</Link>\n'))),(0,r.kt)(l.Z,{value:"newPage",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Link target="_blank" \nstyle={{ fontSize: 35}}\nhref="https://wikipedia.org">New Wikipedia Page</Link>\n'))),(0,r.kt)(l.Z,{value:"imageLink",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Link target="_blank" \nstyle={{ fontSize: 35}}\nhref="https://wikipedia.org">\n<img src= "https://bit.ly/3aM4OU7" /></Link>\n')))))}h.isMDXComponent=!0}}]);