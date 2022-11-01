"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95790],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(202784),r=n(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return y}});var a=n(202784),r=n(386010),l=n(152670),i=n(258433),o=n(952326),u=n(638849),s="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&k(e,n,t[n]);if(f)for(var n of f(t))v.call(t,n)&&k(e,n,t[n]);return e};function N(e){var t,n;const{lazy:l,block:c,defaultValue:f,values:b,groupId:v,className:k}=e,N=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=null!=b?b:N.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),h=(0,i.l)(y,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===f?f:null!=(n=null!=f?f:null==(t=N.find((e=>e.props.default)))?void 0:t.props.value)?n:N[0].props.value;if(null!==O&&!y.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:C,setTabGroupChoices:P}=(0,o.U)(),[w,j]=(0,a.useState)(O),x=[],{blockElementScrollPositionUntilNextRender:D}=(0,u.o5)();if(null!=v){const e=C[v];null!=e&&e!==w&&y.some((t=>t.value===e))&&j(e)}const E=e=>{const t=e.currentTarget,n=x.indexOf(t),a=y[n].value;a!==w&&(D(t),j(a),null!=v&&P(v,String(a)))},T=e=>{var t,n;let a=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;a=null!=(t=x[n])?t:x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;a=null!=(n=x[t])?n:x[x.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},k)},y.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(l=g({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>x.push(e),onKeyDown:T,onClick:E},n),i={className:(0,r.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":w===e})},m(l,d(i))),null!=t?t:e);var l,i}))),l?(0,a.cloneElement)(N.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function y(e){const t=(0,l.Z)();return a.createElement(N,g({key:String(t)},e))}},499169:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return b},default:function(){return y},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return g}});var a=n(603905),r=n(751361),l=n(440034),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&m(e,n,t[n]);return e};const f={id:"panel",title:"Panel",sidebar_label:"Panel"},b=void 0,v={unversionedId:"panel",id:"panel",title:"Panel",description:"\u03a3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf \u03ba\u03ac\u03c1\u03c4\u03b1\u03c2.",source:"@site/i18n/el/docusaurus-plugin-content-docs/current/panel.md",sourceDirName:".",slug:"/panel",permalink:"/el/docs/panel",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/panel.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1638825940,formattedLastUpdatedAt:"6 \u0394\u03b5\u03ba 2021",frontMatter:{id:"panel",title:"Panel",sidebar_label:"Panel"},sidebar:"docs",previous:{title:"Pages",permalink:"/el/docs/pages"},next:{title:"Polaroid",permalink:"/el/docs/polaroid"}},k={},g=[{value:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",level:2},{value:"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",level:2}],N={toc:g};function y(e){var t,n=e,{components:i}=n,m=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},N),m),o(t,u({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\u03a3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf \u03ba\u03ac\u03c1\u03c4\u03b1\u03c2."),(0,a.kt)("h2",d({},{id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"}),"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"className")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \u038c\u03bd\u03bf\u03bc\u03b1 \u03ba\u03bb\u03ac\u03c3\u03b7\u03c2 CSS. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"header")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \u03b5\u03c0\u03b9\u03ba\u03b5\u03c6\u03b1\u03bb\u03af\u03b4\u03b1 \u03c0\u03af\u03bd\u03b1\u03ba\u03b1. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"headerTag")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \u03b5\u03c4\u03b9\u03ba\u03ad\u03c4\u03b1 \u03c0\u03bf\u03c5 \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03b5\u03af\u03c4\u03b1\u03b9 \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03b5\u03c0\u03b9\u03ba\u03b5\u03c6\u03b1\u03bb\u03af\u03b4\u03b1 \u03c4\u03bf\u03c5 \u03c0\u03af\u03bd\u03b1\u03ba\u03b1. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'h3'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"footer")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \u03c5\u03c0\u03bf\u03c3\u03ad\u03bb\u03b9\u03b4\u03bf \u03c0\u03ac\u03bd\u03b5\u03bb. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"minimizable")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u03b1\u03bd \u03bf \u03c0\u03af\u03bd\u03b1\u03ba\u03b1\u03c2 \u03bc\u03c0\u03bf\u03c1\u03b5\u03af \u03bd\u03b1 \u03b5\u03bb\u03b1\u03c7\u03b9\u03c3\u03c4\u03bf\u03c0\u03bf\u03b9\u03b7\u03b8\u03b5\u03af. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"defaultMinimized")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u03b5\u03bb\u03ad\u03b3\u03c7\u03b5\u03b9 \u03b1\u03bd \u03bf \u03c0\u03af\u03bd\u03b1\u03ba\u03b1\u03c2 \u03b8\u03b1 \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03bb\u03b1\u03c7\u03b9\u03c3\u03c4\u03bf\u03c0\u03bf\u03b9\u03b5\u03af\u03c4\u03b1\u03b9 \u03b1\u03c0\u03cc \u03c0\u03c1\u03bf\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae (\u03b5\u03c6\u03b1\u03c1\u03bc\u03cc\u03b6\u03b5\u03c4\u03b1\u03b9 \u03bc\u03cc\u03bd\u03bf \u03cc\u03c4\u03b1\u03bd \u03c4\u03bf ",(0,a.kt)("inlineCode",{parentName:"li"},"minimizable")," \u03ad\u03c7\u03b5\u03b9 \u03bf\u03c1\u03b9\u03c3\u03c4\u03b5\u03af \u03c3\u03b5 ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"fullscreen")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u03b1\u03bd \u03bf \u03c0\u03af\u03bd\u03b1\u03ba\u03b1\u03c2 \u03bc\u03c0\u03bf\u03c1\u03b5\u03af \u03bd\u03b1 \u03b3\u03af\u03bd\u03b5\u03b9 \u03c0\u03bb\u03ae\u03c1\u03b7\u03c2 \u03bf\u03b8\u03cc\u03bd\u03b7 (\u03bc\u03cc\u03bd\u03bf \u03b3\u03b9\u03b1 \u03b5\u03ba\u03c0\u03b1\u03b9\u03b4\u03b5\u03c5\u03c4\u03ad\u03c2). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hideTooltip")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": tooltip \u03c0\u03bf\u03c5 \u03b5\u03bc\u03c6\u03b1\u03bd\u03af\u03b6\u03b5\u03c4\u03b1\u03b9 \u03c0\u03ac\u03bd\u03c9 \u03b1\u03c0\u03cc \u03c4\u03bf \u03ba\u03bf\u03c5\u03bc\u03c0\u03af \u03b1\u03c0\u03cc\u03ba\u03c1\u03c5\u03c8\u03b7\u03c2. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"trapFocus")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u03b1\u03bd \u03b8\u03b1 \u03c0\u03b1\u03b3\u03b9\u03b4\u03b5\u03cd\u03b5\u03c4\u03b1\u03b9 \u03b7 \u03b5\u03c3\u03c4\u03af\u03b1\u03c3\u03b7 \u03c4\u03bf\u03c5 \u03c7\u03c1\u03ae\u03c3\u03c4\u03b7 \u03c3\u03c4\u03bf\u03bd \u03c0\u03af\u03bd\u03b1\u03ba\u03b1. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"bodyStyle")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": \u03a3\u03c4\u03c5\u03bb CSS inline \u03b3\u03b9\u03b1 \u03c4\u03bf \u03c3\u03ce\u03bc\u03b1. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"footerStyle")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": \u03a3\u03c4\u03c5\u03bb CSS inline \u03b3\u03b9\u03b1 \u03c5\u03c0\u03bf\u03c3\u03ad\u03bb\u03b9\u03b4\u03bf. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"bodyClassName")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \u038c\u03bd\u03bf\u03bc\u03b1 \u03ba\u03bb\u03ac\u03c3\u03b7\u03c2 CSS \u03b3\u03b9\u03b1 \u03c4\u03bf \u03c3\u03ce\u03bc\u03b1. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"footerClassName")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \u038c\u03bd\u03bf\u03bc\u03b1 \u03ba\u03bb\u03ac\u03c3\u03b7\u03c2 CSS \u03b3\u03b9\u03b1 \u03c4\u03bf \u03c5\u03c0\u03bf\u03c3\u03ad\u03bb\u03b9\u03b4\u03bf. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": \u03a3\u03c4\u03c5\u03bb CSS inline \u03b3\u03b9\u03b1 \u03b4\u03bf\u03c7\u03b5\u03af\u03bf. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onHide")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": callback \u03c0\u03bf\u03c5 \u03ba\u03b1\u03bb\u03b5\u03af\u03c4\u03b1\u03b9 \u03cc\u03c4\u03b1\u03bd \u03b3\u03af\u03bd\u03b5\u03c4\u03b1\u03b9 \u03ba\u03bb\u03b9\u03ba \u03c3\u03c4\u03bf \u03ba\u03bf\u03c5\u03bc\u03c0\u03af \u03ba\u03bb\u03b5\u03b9\u03c3\u03af\u03bc\u03b1\u03c4\u03bf\u03c2. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,a.kt)("h2",d({},{id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"}),"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"),(0,a.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Header",value:"withHeader"},{label:"Header and Footer",value:"headerAndFooter"},{label:"With CSS",value:"withCSS"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Panel>\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n</Panel>\n"))),(0,a.kt)(l.Z,{value:"withHeader",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Panel header="Panel with Header">\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n</Panel>\n'))),(0,a.kt)(l.Z,{value:"headerAndFooter",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Panel \n    header="Header" \n    footer={<h4>Footer</h4>}\n>\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n</Panel>\n'))),(0,a.kt)(l.Z,{value:"withCSS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Panel style={{ color: 'salmon', background: 'darkblue' }}>\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n</Panel>\n")))))}y.isMDXComponent=!0}}]);