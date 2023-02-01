"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26959],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(202784),r=n(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(202784),r=n(386010),l=n(152670),i=n(258433),o=n(952326),s=n(638849),u="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&g(e,n,t[n]);if(f)for(var n of f(t))k.call(t,n)&&g(e,n,t[n]);return e};function N(e){var t,n;const{lazy:l,block:c,defaultValue:f,values:b,groupId:k,className:g}=e,N=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=b?b:N.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),y=(0,i.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const C=null===f?f:null!=(n=null!=f?f:null==(t=N.find((e=>e.props.default)))?void 0:t.props.value)?n:N[0].props.value;if(null!==C&&!h.some((e=>e.value===C)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${C}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:O}=(0,o.U)(),[P,x]=(0,a.useState)(C),j=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=k){const e=w[k];null!=e&&e!==P&&h.some((t=>t.value===e))&&x(e)}const D=e=>{const t=e.currentTarget,n=j.indexOf(t),a=h[n].value;a!==P&&(T(t),x(a),null!=k&&O(k,String(a)))},E=e=>{var t,n;let a=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":{const n=j.indexOf(e.currentTarget)+1;a=null!=(t=j[n])?t:j[0];break}case"ArrowLeft":{const t=j.indexOf(e.currentTarget)-1;a=null!=(n=j[t])?n:j[j.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},g)},h.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(l=v({role:"tab",tabIndex:P===e?0:-1,"aria-selected":P===e,key:e,ref:e=>j.push(e),onKeyDown:E,onClick:D},n),i={className:(0,r.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":P===e})},m(l,d(i))),null!=t?t:e);var l,i}))),l?(0,a.cloneElement)(N.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function h(e){const t=(0,l.Z)();return a.createElement(N,v({key:String(t)},e))}},479121:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return b},default:function(){return C},frontMatter:function(){return f},metadata:function(){return k},toc:function(){return v}});var a=n(603905),r=n(751361),l=n(440034),i=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))c.call(t,n)&&m(e,n,t[n]);return e};const f={id:"select-question-matrix",title:"Select Question Matrix",sidebar_label:"Select Question Matrix"},b=void 0,k={unversionedId:"questions/select-question-matrix",id:"questions/select-question-matrix",title:"Select Question Matrix",description:"\u039c\u03b9\u03b1 \u03b5\u03c1\u03ce\u03c4\u03b7\u03c3\u03b7 \u03bc\u03b5 \u03b1\u03c0\u03ac\u03bd\u03c4\u03b7\u03c3\u03b7 \u03c0\u03bf\u03c5 \u03b1\u03c0\u03bf\u03c4\u03b5\u03bb\u03b5\u03af\u03c4\u03b1\u03b9 \u03b1\u03c0\u03cc \u03c0\u03bf\u03bb\u03bb\u03b1\u03c0\u03bb\u03ac \u03c0\u03bb\u03b1\u03af\u03c3\u03b9\u03b1 \u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae\u03c2.",source:"@site/i18n/el/docusaurus-plugin-content-docs/current/questions/select-matrix.md",sourceDirName:"questions",slug:"/questions/select-question-matrix",permalink:"/el/docs/questions/select-question-matrix",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/select-matrix.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1650476171,formattedLastUpdatedAt:"20 \u0391\u03c0\u03c1 2022",frontMatter:{id:"select-question-matrix",title:"Select Question Matrix",sidebar_label:"Select Question Matrix"},sidebar:"docs",previous:{title:"Select Question",permalink:"/el/docs/questions/select-question"},next:{title:"Free Text Survey",permalink:"/el/docs/free-text-survey"}},g={},v=[{value:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",level:2},{value:"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",level:2}],N=(h="Panel",function(e){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",d({},e))});var h;const y={toc:v};function C(e){var t,n=e,{components:i}=n,m=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},y),m),o(t,s({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\u039c\u03b9\u03b1 \u03b5\u03c1\u03ce\u03c4\u03b7\u03c3\u03b7 \u03bc\u03b5 \u03b1\u03c0\u03ac\u03bd\u03c4\u03b7\u03c3\u03b7 \u03c0\u03bf\u03c5 \u03b1\u03c0\u03bf\u03c4\u03b5\u03bb\u03b5\u03af\u03c4\u03b1\u03b9 \u03b1\u03c0\u03cc \u03c0\u03bf\u03bb\u03bb\u03b1\u03c0\u03bb\u03ac \u03c0\u03bb\u03b1\u03af\u03c3\u03b9\u03b1 \u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae\u03c2."),(0,a.kt)("h2",d({},{id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"}),"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"question")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \u03b5\u03c1\u03ce\u03c4\u03b7\u03c3\u03b7 \u03c0\u03bf\u03c5 \u03b8\u03b1 \u03b5\u03bc\u03c6\u03b1\u03bd\u03af\u03b6\u03b5\u03c4\u03b1\u03b9 \u03c3\u03c4\u03b7\u03bd \u03ba\u03bf\u03c1\u03c5\u03c6\u03ae \u03c4\u03bf\u03c5 \u03c0\u03af\u03bd\u03b1\u03ba\u03b1 \u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae\u03c2 \u03b5\u03c1\u03c9\u03c4\u03ae\u03c3\u03b5\u03c9\u03bd. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"rows")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),": \u03b5\u03c4\u03b9\u03ba\u03ad\u03c4\u03b5\u03c2 \u03b3\u03c1\u03b1\u03bc\u03bc\u03ae\u03c2. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"cols")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),": \u03b5\u03c4\u03b9\u03ba\u03ad\u03c4\u03b5\u03c2 \u03c3\u03c4\u03ae\u03bb\u03b7\u03c2. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"options")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03bc\u03b5 \u03b6\u03b5\u03cd\u03b3\u03b7 \u03ba\u03bb\u03b5\u03b9\u03b4\u03b9\u03ce\u03bd-\u03c4\u03b9\u03bc\u03ce\u03bd \u03bc\u03b5 \u03ba\u03bb\u03b5\u03b9\u03b4\u03b9\u03ac \u03c0\u03bf\u03c5 \u03ad\u03c7\u03bf\u03c5\u03bd \u03c4\u03b7 \u03bc\u03bf\u03c1\u03c6\u03ae ",(0,a.kt)("inlineCode",{parentName:"li"},"row:col"),", \u03c0.\u03c7. ",(0,a.kt)("inlineCode",{parentName:"li"},"0:0"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"0:1"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"1:0")," \u03ba.\u03bb\u03c0., \u03ba\u03b1\u03b9 \u03bf\u03b9 \u03b1\u03bd\u03c4\u03af\u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03c2 \u03c4\u03b9\u03bc\u03ad\u03c2 \u03c4\u03bf\u03c5\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03af\u03bd\u03b1\u03ba\u03b5\u03c2 \u03bc\u03b5 \u03c4\u03b9\u03c2 \u03c0\u03b9\u03b8\u03b1\u03bd\u03ad\u03c2 \u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2 \u03b1\u03c0\u03b1\u03bd\u03c4\u03ae\u03c3\u03b5\u03c9\u03bd \u03b3\u03b9\u03b1 \u03c4\u03b9\u03c2 \u03b5\u03c0\u03b9\u03bc\u03ad\u03c1\u03bf\u03c5\u03c2 \u03b5\u03c1\u03c9\u03c4\u03ae\u03c3\u03b5\u03b9\u03c2 select.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"solution")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03bb\u03cd\u03c3\u03b7\u03c2 \u03bc\u03b5 \u03b6\u03b5\u03cd\u03b3\u03b7 \u03ba\u03bb\u03b5\u03b9\u03b4\u03b9\u03ce\u03bd-\u03c4\u03b9\u03bc\u03ce\u03bd \u03bc\u03b5 \u03ba\u03bb\u03b5\u03b9\u03b4\u03b9\u03ac \u03c0\u03bf\u03c5 \u03ad\u03c7\u03bf\u03c5\u03bd \u03c4\u03b7 \u03bc\u03bf\u03c1\u03c6\u03ae ",(0,a.kt)("inlineCode",{parentName:"li"},"row:col"),", \u03c0.\u03c7. ",(0,a.kt)("inlineCode",{parentName:"li"},"0:0"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"0:1"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"1:0")," \u03ba.\u03bb\u03c0., \u03ba\u03b1\u03b9 \u03bf\u03b9 \u03b1\u03bd\u03c4\u03af\u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03c2 \u03c4\u03b9\u03bc\u03ad\u03c2 \u03c4\u03bf\u03c5\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 \u03bf \u03b4\u03b5\u03af\u03ba\u03c4\u03b7\u03c2 \u03c4\u03bf\u03c5 \u03c3\u03c9\u03c3\u03c4\u03bf\u03cd \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf\u03c5 \u03b1\u03c0\u03ac\u03bd\u03c4\u03b7\u03c3\u03b7\u03c2 \u03b1\u03c0\u03cc \u03c4\u03bf\u03bd \u03b1\u03bd\u03c4\u03af\u03c3\u03c4\u03bf\u03b9\u03c7\u03bf \u03c0\u03af\u03bd\u03b1\u03ba\u03b1 ",(0,a.kt)("inlineCode",{parentName:"li"},"options"),".. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hints")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": \u03c5\u03c0\u03bf\u03b4\u03b5\u03af\u03be\u03b5\u03b9\u03c2 \u03c0\u03bf\u03c5 \u03c0\u03b1\u03c1\u03ad\u03c7\u03bf\u03c5\u03bd \u03ba\u03b1\u03b8\u03bf\u03b4\u03ae\u03b3\u03b7\u03c3\u03b7 \u03b3\u03b9\u03b1 \u03c4\u03bf\u03bd \u03c4\u03c1\u03cc\u03c0\u03bf \u03b1\u03c0\u03ac\u03bd\u03c4\u03b7\u03c3\u03b7\u03c2 \u03c3\u03c4\u03b7\u03bd \u03b5\u03c1\u03ce\u03c4\u03b7\u03c3\u03b7. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \u03c4\u03bf\u03c0\u03bf\u03b8\u03ad\u03c4\u03b7\u03c3\u03b7 \u03c4\u03c9\u03bd \u03c5\u03c0\u03bf\u03b4\u03b5\u03af\u03be\u03b5\u03c9\u03bd (\u03b5\u03af\u03c4\u03b5 ",(0,a.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"right")," \u03ae ",(0,a.kt)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"feedback")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u03b5\u03bb\u03ad\u03b3\u03c7\u03b5\u03b9 \u03b1\u03bd \u03b8\u03b1 \u03b5\u03bc\u03c6\u03b1\u03bd\u03af\u03b6\u03bf\u03bd\u03c4\u03b1\u03b9 \u03ba\u03bf\u03c5\u03bc\u03c0\u03b9\u03ac \u03b1\u03bd\u03ac\u03b4\u03c1\u03b1\u03c3\u03b7\u03c2. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \u03b1\u03bd \u03b8\u03b1 \u03c0\u03b1\u03c1\u03ad\u03c7\u03b5\u03b9 \u03ba\u03b1\u03b8\u03cc\u03bb\u03bf\u03c5 \u03b1\u03bd\u03b1\u03c4\u03c1\u03bf\u03c6\u03bf\u03b4\u03cc\u03c4\u03b7\u03c3\u03b7, \u03b1\u03c4\u03bf\u03bc\u03b9\u03ba\u03ae \u03b1\u03bd\u03b1\u03c4\u03c1\u03bf\u03c6\u03bf\u03b4\u03cc\u03c4\u03b7\u03c3\u03b7 \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd/\u03c4\u03b9\u03c2 \u03c5\u03c0\u03bf\u03b2\u03bb\u03b7\u03b8\u03b5\u03af\u03c3\u03b1/\u03b5\u03c2 \u03b1\u03c0\u03ac\u03bd\u03c4\u03b7\u03c3\u03b7/\u03b5\u03c2 \u03ae \u03c3\u03c5\u03bd\u03bf\u03bb\u03b9\u03ba\u03ae \u03b1\u03bd\u03b1\u03c4\u03c1\u03bf\u03c6\u03bf\u03b4\u03cc\u03c4\u03b7\u03c3\u03b7 \u03b3\u03b9\u03b1 \u03cc\u03bb\u03b5\u03c2 \u03c4\u03b9\u03c2 \u03b5\u03c1\u03c9\u03c4\u03ae\u03c3\u03b5\u03b9\u03c2.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'individual'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"allowIncomplete")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u03b1\u03bd \u03b8\u03b1 \u03b5\u03c0\u03b9\u03c4\u03c1\u03ad\u03c0\u03bf\u03bd\u03c4\u03b1\u03b9 \u03c5\u03c0\u03bf\u03b2\u03bf\u03bb\u03ad\u03c2 \u03c7\u03c9\u03c1\u03af\u03c2 \u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03c3\u03b5 \u03ba\u03ac\u03b8\u03b5 \u03c0\u03bb\u03b1\u03af\u03c3\u03b9\u03bf \u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae\u03c2. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"nTries")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u03bc\u03b5\u03c4\u03ac \u03b1\u03c0\u03cc \u03c0\u03cc\u03c3\u03b5\u03c2 \u03c0\u03c1\u03bf\u03c3\u03c0\u03ac\u03b8\u03b5\u03b9\u03b5\u03c2 \u03b4\u03b5\u03bd \u03b8\u03b1 \u03b3\u03af\u03bd\u03bf\u03bd\u03c4\u03b1\u03b9 \u03b4\u03b5\u03ba\u03c4\u03ad\u03c2 \u03c0\u03b5\u03c1\u03b1\u03b9\u03c4\u03ad\u03c1\u03c9 \u03b1\u03c0\u03b1\u03bd\u03c4\u03ae\u03c3\u03b5\u03b9\u03c2 (\u03b1\u03bd \u03c4\u03bf ",(0,a.kt)("inlineCode",{parentName:"li"},"provideFeedback")," \u03b4\u03b5\u03bd \u03b5\u03af\u03bd\u03b1\u03b9 ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"3"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"failureMsg")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03b5\u03b9\u03b4\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7\u03c2 \u03c0\u03bf\u03c5 \u03b5\u03bc\u03c6\u03b1\u03bd\u03af\u03b6\u03b5\u03c4\u03b1\u03b9 \u03ba\u03b1\u03c4\u03ac \u03c4\u03b7\u03bd \u03c5\u03c0\u03bf\u03b2\u03bf\u03bb\u03ae \u03bb\u03b1\u03bd\u03b8\u03b1\u03c3\u03bc\u03ad\u03bd\u03c9\u03bd \u03b1\u03c0\u03b1\u03bd\u03c4\u03ae\u03c3\u03b5\u03c9\u03bd. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"successMsg")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03b5\u03b9\u03b4\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7\u03c2 \u03c0\u03bf\u03c5 \u03b5\u03bc\u03c6\u03b1\u03bd\u03af\u03b6\u03b5\u03c4\u03b1\u03b9 \u03ba\u03b1\u03c4\u03ac \u03c4\u03b7\u03bd \u03c5\u03c0\u03bf\u03b2\u03bf\u03bb\u03ae \u03c3\u03c9\u03c3\u03c4\u03ce\u03bd \u03b1\u03c0\u03b1\u03bd\u03c4\u03ae\u03c3\u03b5\u03c9\u03bd. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"cellLabels")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": \u03b5\u03c4\u03b9\u03ba\u03ad\u03c4\u03b5\u03c2 \u03b3\u03b9\u03b1 \u03ba\u03b5\u03bb\u03b9\u03ac \u03c0\u03bf\u03c5 \u03bf\u03c1\u03af\u03b6\u03bf\u03bd\u03c4\u03b1\u03b9 \u03b1\u03c0\u03cc \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03bc\u03b5 \u03ba\u03bb\u03b5\u03b9\u03b4\u03b9\u03ac \u03c0\u03bf\u03c5 \u03ad\u03c7\u03bf\u03c5\u03bd \u03c4\u03b7 \u03bc\u03bf\u03c1\u03c6\u03ae ",(0,a.kt)("inlineCode",{parentName:"li"},"row:col"),". Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"chat")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u03b5\u03bb\u03ad\u03b3\u03c7\u03b5\u03b9 \u03b1\u03bd \u03c4\u03bf \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf \u03b8\u03b1 \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03ad\u03c7\u03b5\u03b9 \u03b5\u03bd\u03c3\u03c9\u03bc\u03b1\u03c4\u03c9\u03bc\u03ad\u03bd\u03b7 \u03c3\u03c5\u03bd\u03bf\u03bc\u03b9\u03bb\u03af\u03b1. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"panelProps")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": \u03c0\u03c1\u03cc\u03c3\u03b8\u03b5\u03c4\u03b5\u03c2 \u03b9\u03b4\u03b9\u03cc\u03c4\u03b7\u03c4\u03b5\u03c2 \u03c0\u03bf\u03c5 \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03bc\u03b5\u03c4\u03b1\u03b2\u03b9\u03b2\u03b1\u03c3\u03c4\u03bf\u03cd\u03bd \u03c3\u03c4\u03bf \u03b5\u03be\u03c9\u03c4\u03b5\u03c1\u03b9\u03ba\u03cc \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf ",(0,a.kt)(N,{mdxType:"Panel"})," . Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"className")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \u03cc\u03bd\u03bf\u03bc\u03b1 \u03ba\u03bb\u03ac\u03c3\u03b7\u03c2. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": \u03a3\u03c4\u03c5\u03bb \u03b3\u03c1\u03b1\u03bc\u03bc\u03ae\u03c2 CSS. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onChange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": \u03c3\u03c5\u03bd\u03ac\u03c1\u03c4\u03b7\u03c3\u03b7 \u03b5\u03c0\u03b1\u03bd\u03ac\u03ba\u03bb\u03b7\u03c3\u03b7\u03c2 \u03c0\u03bf\u03c5 \u03ba\u03b1\u03bb\u03b5\u03af\u03c4\u03b1\u03b9 \u03ba\u03b1\u03c4\u03ac \u03c4\u03b7\u03bd \u03b1\u03bb\u03bb\u03b1\u03b3\u03ae \u03c4\u03c9\u03bd \u03b1\u03c0\u03b1\u03bd\u03c4\u03ae\u03c3\u03b5\u03c9\u03bd. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": \u03c3\u03c5\u03bd\u03ac\u03c1\u03c4\u03b7\u03c3\u03b7 \u03b5\u03c0\u03b1\u03bd\u03ac\u03ba\u03bb\u03b7\u03c3\u03b7\u03c2 \u03c0\u03bf\u03c5 \u03ba\u03b1\u03bb\u03b5\u03af\u03c4\u03b1\u03b9 \u03ba\u03b1\u03c4\u03ac \u03c4\u03b7\u03bd \u03c5\u03c0\u03bf\u03b2\u03bf\u03bb\u03ae \u03bc\u03b5 \u03c4\u03b9\u03c2 \u03b1\u03c0\u03b1\u03bd\u03c4\u03ae\u03c3\u03b5\u03b9\u03c2 \u03c9\u03c2 \u03c0\u03c1\u03ce\u03c4\u03b7 \u03c0\u03b1\u03c1\u03ac\u03bc\u03b5\u03c4\u03c1\u03bf \u03ba\u03b1\u03b9 \u03ad\u03bd\u03b1 boolean \u03c0\u03bf\u03c5 \u03c5\u03c0\u03bf\u03b4\u03b5\u03b9\u03ba\u03bd\u03cd\u03b5\u03b9 \u03c4\u03b7\u03bd \u03bf\u03c1\u03b8\u03cc\u03c4\u03b7\u03c4\u03b1 \u03c9\u03c2 \u03b4\u03b5\u03cd\u03c4\u03b5\u03c1\u03b7 \u03c0\u03b1\u03c1\u03ac\u03bc\u03b5\u03c4\u03c1\u03bf. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,a.kt)("h2",d({},{id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"}),"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"),(0,a.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Hints",value:"withHints"},{label:"With Style",value:"withStyle"},{label:"Feedback Messages",value:"feedbackMessages"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<SelectQuestionMatrix\n    question=\"Test your art history knowledge\"\n    rows={[ 'Composer', 'Author' ]} \n    cols={[ '18th Century', '19th Century' ]} \n    options={{ \n        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], \n        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,\n        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],\n        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] \n    }} \n    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}\n/>\n"))),(0,a.kt)(l.Z,{value:"withHints",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<SelectQuestionMatrix\n  question=\"Test your art history knowledge\"\n    rows={[ 'Composer', 'Author' ]} \n    cols={[ '18th Century', '19th Century' ]} \n    options={{ \n        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], \n        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,\n        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],\n        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] \n    }} \n    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}\n    hints={[\n        'His father Johann Sebastian was a famous composer too',\n        'He was famous for his FAUST - so definitely an author',\n        'Poussin was an 18th century painter',\n        'Courbet was a realistic painter'\n    ]}\n/>\n"))),(0,a.kt)(l.Z,{value:"withStyle",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<SelectQuestionMatrix\n    style={{ \n        fontFamily: 'Georgia',\n        fontSize: 22, \n        textShadow: '0 0  10px white',\n        background: 'rgb(251,213,112)',\n        background: 'radial-gradient(circle, yellow 0%, orange 30%, green 100%)'\n    }}\n    question=\"Test your art history knowledge\"\n    rows={[ 'Composer', 'Author' ]} \n    cols={[ '18th Century', '19th Century' ]} \n    options={{ \n        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], \n        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,\n        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],\n        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] }} \n    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}\n/>\n"))),(0,a.kt)(l.Z,{value:"feedbackMessages",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<SelectQuestionMatrix\n    question=\"Test your art history knowledge\"\n    failureMsg=\"Sorry, that was wrong.\" \n    successMsg =\"Wow! Congratulations, you are a specialist!\"\n    rows={[ 'Composer', 'Author' ]} \n    cols={[ '18th Century', '19th Century' ]} \n    options={{ \n        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], \n        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,\n        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],\n        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] \n    }} \n    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}\n/>\n")))))}C.isMDXComponent=!0}}]);