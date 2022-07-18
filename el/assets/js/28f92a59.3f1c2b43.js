"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91870],{603905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(202784);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(t),d=l,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return t?a.createElement(f,r(r({ref:n},p),{},{components:t})):a.createElement(f,r({ref:n},p))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var u=2;u<i;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},440034:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(202784),l=t(386010),i="tabItem_Ymn6",r=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;function c({children:e,hidden:n,className:t}){return a.createElement("div",((e,n)=>{for(var t in n||(n={}))s.call(n,t)&&p(e,t,n[t]);if(o)for(var t of o(n))u.call(n,t)&&p(e,t,n[t]);return e})({role:"tabpanel",className:(0,l.Z)(i,t)},{hidden:n}),e)}},751361:function(e,n,t){t.d(n,{Z:function(){return N}});var a=t(202784),l=t(386010),i=t(152670),r=t(258433),o=t(952326),s=t(638849),u="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,h=(e,n,t)=>n in e?c(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,g=(e,n)=>{for(var t in n||(n={}))b.call(n,t)&&h(e,t,n[t]);if(f)for(var t of f(n))k.call(n,t)&&h(e,t,n[t]);return e};function v(e){var n,t;const{lazy:i,block:c,defaultValue:f,values:b,groupId:k,className:h}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=b?b:v.map((({props:{value:e,label:n,attributes:t}})=>({value:e,label:n,attributes:t}))),y=(0,r.l)(N,((e,n)=>e.value===n.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const C=null===f?f:null!=(t=null!=f?f:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==C&&!N.some((e=>e.value===C)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${C}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:O}=(0,o.U)(),[x,j]=(0,a.useState)(C),S=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=k){const e=w[k];null!=e&&e!==x&&N.some((n=>n.value===e))&&j(e)}const D=e=>{const n=e.currentTarget,t=S.indexOf(n),a=N[t].value;a!==x&&(T(n),j(a),null!=k&&O(k,String(a)))},P=e=>{var n,t;let a=null;switch(e.key){case"ArrowRight":{const t=S.indexOf(e.currentTarget)+1;a=null!=(n=S[t])?n:S[0];break}case"ArrowLeft":{const n=S.indexOf(e.currentTarget)-1;a=null!=(t=S[n])?t:S[S.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},h)},N.map((({value:e,label:n,attributes:t})=>{return a.createElement("li",(i=g({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>S.push(e),onKeyDown:P,onFocus:D,onClick:D},t),r={className:(0,l.Z)("tabs__item",p,null==t?void 0:t.className,{"tabs__item--active":x===e})},m(i,d(r))),null!=n?n:e);var i,r}))),i?(0,a.cloneElement)(v.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==x})))))}function N(e){const n=(0,i.Z)();return a.createElement(v,g({key:String(n)},e))}},258822:function(e,n,t){t.r(n),t.d(n,{assets:function(){return h},contentTitle:function(){return b},default:function(){return N},frontMatter:function(){return f},metadata:function(){return k},toc:function(){return g}});var a=t(603905),l=t(751361),i=t(440034),r=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&m(e,t,n[t]);if(u)for(var t of u(n))c.call(n,t)&&m(e,t,n[t]);return e};const f={id:"multiple-choice-question",title:"Multiple Choice Question",sidebar_label:"Multiple Choice Question"},b=void 0,k={unversionedId:"questions/multiple-choice-question",id:"questions/multiple-choice-question",title:"Multiple Choice Question",description:"\u0388\u03bd\u03b1 \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf ISLE \u03c0\u03bf\u03c5 \u03b1\u03c0\u03bf\u03b4\u03af\u03b4\u03b5\u03b9 \u03bc\u03b9\u03b1 \u03b5\u03c1\u03ce\u03c4\u03b7\u03c3\u03b7 \u03c0\u03bf\u03bb\u03bb\u03b1\u03c0\u03bb\u03ae\u03c2 \u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae\u03c2. \u03a5\u03c0\u03bf\u03c3\u03c4\u03b7\u03c1\u03af\u03b6\u03b5\u03b9 \u03c4\u03b7\u03bd \u03c0\u03b5\u03c1\u03af\u03c0\u03c4\u03c9\u03c3\u03b7 \u03cc\u03c0\u03bf\u03c5 \u03bf \u03bc\u03b1\u03b8\u03b7\u03c4\u03ae\u03c2 \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03c0\u03b9\u03bb\u03ad\u03be\u03b5\u03b9 \u03bc\u03af\u03b1 \u03bc\u03cc\u03bd\u03bf \u03b1\u03c0\u03ac\u03bd\u03c4\u03b7\u03c3\u03b7 \u03ba\u03b1\u03b9 \u03cc\u03c4\u03b1\u03bd \u03bc\u03c0\u03bf\u03c1\u03b5\u03af \u03bd\u03b1 \u03c5\u03c0\u03ac\u03c1\u03c7\u03bf\u03c5\u03bd \u03c0\u03bf\u03bb\u03bb\u03ad\u03c2 \u03c3\u03c9\u03c3\u03c4\u03ad\u03c2 \u03b1\u03c0\u03b1\u03bd\u03c4\u03ae\u03c3\u03b5\u03b9\u03c2 \u03ba\u03b1\u03b9 \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03c0\u03b9\u03bb\u03b5\u03b3\u03bf\u03cd\u03bd \u03cc\u03bb\u03b5\u03c2 \u03bf\u03b9 \u03c3\u03c9\u03c3\u03c4\u03ad\u03c2.",source:"@site/i18n/el/docusaurus-plugin-content-docs/current/questions/multiple-choice.md",sourceDirName:"questions",slug:"/questions/multiple-choice-question",permalink:"/el/docs/questions/multiple-choice-question",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/multiple-choice.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633715852,formattedLastUpdatedAt:"8 \u039f\u03ba\u03c4 2021",frontMatter:{id:"multiple-choice-question",title:"Multiple Choice Question",sidebar_label:"Multiple Choice Question"},sidebar:"docs",previous:{title:"Match List Question",permalink:"/el/docs/questions/match-list-question"},next:{title:"Multiple Choice Matrix",permalink:"/el/docs/questions/multiple-choice-matrix"}},h={},g=[{value:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",level:2},{value:"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",level:2}],v={toc:g};function N(e){var n,t=e,{components:r}=t,m=((e,n)=>{var t={};for(var a in e)p.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&u)for(var a of u(e))n.indexOf(a)<0&&c.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(n=d(d({},v),m),o(n,s({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\u0388\u03bd\u03b1 \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf ISLE \u03c0\u03bf\u03c5 \u03b1\u03c0\u03bf\u03b4\u03af\u03b4\u03b5\u03b9 \u03bc\u03b9\u03b1 \u03b5\u03c1\u03ce\u03c4\u03b7\u03c3\u03b7 \u03c0\u03bf\u03bb\u03bb\u03b1\u03c0\u03bb\u03ae\u03c2 \u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae\u03c2. \u03a5\u03c0\u03bf\u03c3\u03c4\u03b7\u03c1\u03af\u03b6\u03b5\u03b9 \u03c4\u03b7\u03bd \u03c0\u03b5\u03c1\u03af\u03c0\u03c4\u03c9\u03c3\u03b7 \u03cc\u03c0\u03bf\u03c5 \u03bf \u03bc\u03b1\u03b8\u03b7\u03c4\u03ae\u03c2 \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03c0\u03b9\u03bb\u03ad\u03be\u03b5\u03b9 \u03bc\u03af\u03b1 \u03bc\u03cc\u03bd\u03bf \u03b1\u03c0\u03ac\u03bd\u03c4\u03b7\u03c3\u03b7 \u03ba\u03b1\u03b9 \u03cc\u03c4\u03b1\u03bd \u03bc\u03c0\u03bf\u03c1\u03b5\u03af \u03bd\u03b1 \u03c5\u03c0\u03ac\u03c1\u03c7\u03bf\u03c5\u03bd \u03c0\u03bf\u03bb\u03bb\u03ad\u03c2 \u03c3\u03c9\u03c3\u03c4\u03ad\u03c2 \u03b1\u03c0\u03b1\u03bd\u03c4\u03ae\u03c3\u03b5\u03b9\u03c2 \u03ba\u03b1\u03b9 \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03c0\u03b9\u03bb\u03b5\u03b3\u03bf\u03cd\u03bd \u03cc\u03bb\u03b5\u03c2 \u03bf\u03b9 \u03c3\u03c9\u03c3\u03c4\u03ad\u03c2."),(0,a.kt)("h2",d({},{id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"}),"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"question")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \u03b7 \u03b5\u03c1\u03ce\u03c4\u03b7\u03c3\u03b7 \u03c0\u03bf\u03c5 \u03b5\u03bc\u03c6\u03b1\u03bd\u03af\u03b6\u03b5\u03c4\u03b1\u03b9 \u03c3\u03c4\u03b7\u03bd \u03ba\u03bf\u03c1\u03c5\u03c6\u03ae \u03c4\u03bf\u03c5 \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf\u03c5 \u03c0\u03bf\u03bb\u03bb\u03b1\u03c0\u03bb\u03ae\u03c2 \u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae\u03c2. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"solution")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(number|array)"),': \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03c0\u03bf\u03c5 \u03b4\u03b7\u03bb\u03ce\u03bd\u03b5\u03b9 \u03c0\u03bf\u03b9\u03b1 \u03b1\u03c0\u03ac\u03bd\u03c4\u03b7\u03c3\u03b7 \u03b5\u03af\u03bd\u03b1\u03b9 \u03c3\u03c9\u03c3\u03c4\u03ae \u03ae \u03bc\u03b9\u03b1 "\u03c3\u03b5\u03b9\u03c1\u03ac" \u03b1\u03c1\u03b9\u03b8\u03bc\u03ce\u03bd \u03c3\u03c9\u03c3\u03c4\u03ce\u03bd \u03b1\u03c0\u03b1\u03bd\u03c4\u03ae\u03c3\u03b5\u03c9\u03bd \u03c3\u03b5 \u03c0\u03b5\u03c1\u03af\u03c0\u03c4\u03c9\u03c3\u03b7 \u03c0\u03bf\u03c5 \u03bf \u03bc\u03b1\u03b8\u03b7\u03c4\u03ae\u03c2 \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03c3\u03b5 \u03b8\u03ad\u03c3\u03b7 \u03bd\u03b1 \u03b5\u03c0\u03b9\u03bb\u03ad\u03be\u03b5\u03b9 \u03c0\u03bf\u03bb\u03bb\u03b1\u03c0\u03bb\u03ad\u03c2 \u03b1\u03c0\u03b1\u03bd\u03c4\u03ae\u03c3\u03b5\u03b9\u03c2. Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"answers")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array (required)"),': \u03bc\u03b9\u03b1 "\u03c3\u03c5\u03c3\u03c4\u03bf\u03b9\u03c7\u03af\u03b1" \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03b9\u03bc\u03ad\u03bd\u03c9\u03bd \u03b1\u03c0\u03ac\u03bd\u03c4\u03b7\u03c3\u03b7\u03c2. \u039a\u03ac\u03b8\u03b5 \u03b1\u03c0\u03ac\u03bd\u03c4\u03b7\u03c3\u03b7 \u03b8\u03b1 \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03ad\u03bd\u03b1 \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03bc\u03b5 \u03c0\u03b5\u03b4\u03af\u03b1 ',(0,a.kt)("inlineCode",{parentName:"li"},"content")," \u03ba\u03b1\u03b9 ",(0,a.kt)("inlineCode",{parentName:"li"},"explanation"),", \u03c4\u03b1 \u03bf\u03c0\u03bf\u03af\u03b1 \u03b4\u03b7\u03bb\u03ce\u03bd\u03bf\u03c5\u03bd \u03c4\u03b7\u03bd \u03b5\u03bc\u03c6\u03b1\u03bd\u03b9\u03b6\u03cc\u03bc\u03b5\u03bd\u03b7 \u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03b1\u03c0\u03ac\u03bd\u03c4\u03b7\u03c3\u03b7\u03c2 \u03ba\u03b1\u03b9 \u03bc\u03b9\u03b1 \u03b5\u03be\u03ae\u03b3\u03b7\u03c3\u03b7 \u03c0\u03bf\u03c5 \u03b5\u03af\u03bd\u03b1\u03b9 \u03bf\u03c1\u03b1\u03c4\u03ae \u03bc\u03b5\u03c4\u03ac \u03c4\u03b7\u03bd \u03c5\u03c0\u03bf\u03b2\u03bf\u03bb\u03ae \u03c4\u03b7\u03c2 \u03b5\u03c1\u03ce\u03c4\u03b7\u03c3\u03b7\u03c2 \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03b5\u03be\u03b7\u03b3\u03ae\u03c3\u03b5\u03b9 \u03b3\u03b9\u03b1\u03c4\u03af \u03b7 \u03b1\u03c0\u03ac\u03bd\u03c4\u03b7\u03c3\u03b7 \u03b5\u03af\u03bd\u03b1\u03b9 \u03c3\u03c9\u03c3\u03c4\u03ae \u03ae \u03bb\u03b1\u03bd\u03b8\u03b1\u03c3\u03bc\u03ad\u03bd\u03b7.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \u03c4\u03bf\u03c0\u03bf\u03b8\u03ad\u03c4\u03b7\u03c3\u03b7 \u03c4\u03c9\u03bd \u03c5\u03c0\u03bf\u03b4\u03b5\u03af\u03be\u03b5\u03c9\u03bd (\u03b5\u03af\u03c4\u03b5 ",(0,a.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"right")," \u03ae ",(0,a.kt)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hints")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": \u03c5\u03c0\u03bf\u03b4\u03b5\u03af\u03be\u03b5\u03b9\u03c2 \u03c0\u03bf\u03c5 \u03c0\u03b1\u03c1\u03ad\u03c7\u03bf\u03c5\u03bd \u03ba\u03b1\u03b8\u03bf\u03b4\u03ae\u03b3\u03b7\u03c3\u03b7 \u03b3\u03b9\u03b1 \u03c4\u03bf\u03bd \u03c4\u03c1\u03cc\u03c0\u03bf \u03b1\u03c0\u03ac\u03bd\u03c4\u03b7\u03c3\u03b7\u03c2 \u03c3\u03c4\u03b7\u03bd \u03b5\u03c1\u03ce\u03c4\u03b7\u03c3\u03b7. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"feedback")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u03b5\u03bb\u03ad\u03b3\u03c7\u03b5\u03b9 \u03b1\u03bd \u03b8\u03b1 \u03b5\u03bc\u03c6\u03b1\u03bd\u03af\u03b6\u03bf\u03bd\u03c4\u03b1\u03b9 \u03ba\u03bf\u03c5\u03bc\u03c0\u03b9\u03ac \u03b1\u03bd\u03ac\u03b4\u03c1\u03b1\u03c3\u03b7\u03c2. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"disabled")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u03b5\u03bb\u03ad\u03b3\u03c7\u03b5\u03b9 \u03b1\u03bd \u03b7 \u03b5\u03c1\u03ce\u03c4\u03b7\u03c3\u03b7 \u03b5\u03af\u03bd\u03b1\u03b9 \u03b1\u03c0\u03b5\u03bd\u03b5\u03c1\u03b3\u03bf\u03c0\u03bf\u03b9\u03b7\u03bc\u03ad\u03bd\u03b7. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"chat")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u03b5\u03bb\u03ad\u03b3\u03c7\u03b5\u03b9 \u03b1\u03bd \u03c4\u03bf \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf \u03b8\u03b1 \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03ad\u03c7\u03b5\u03b9 \u03b5\u03bd\u03c3\u03c9\u03bc\u03b1\u03c4\u03c9\u03bc\u03ad\u03bd\u03b7 \u03c3\u03c5\u03bd\u03bf\u03bc\u03b9\u03bb\u03af\u03b1. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),': \u03b5\u03af\u03c4\u03b5 "\u03c0\u03bb\u03ae\u03c1\u03b7\u03c2", "\u03b5\u03c0\u03b1\u03c5\u03be\u03b7\u03c4\u03b9\u03ba\u03ae" \u03ae "\u03ba\u03b1\u03bc\u03af\u03b1". \u0395\u03ac\u03bd ',(0,a.kt)("inlineCode",{parentName:"li"},"full"),", \u03b7 \u03b1\u03bd\u03b1\u03c4\u03c1\u03bf\u03c6\u03bf\u03b4\u03cc\u03c4\u03b7\u03c3\u03b7 \u03c0\u03bf\u03c5 \u03c0\u03b5\u03c1\u03b9\u03bb\u03b1\u03bc\u03b2\u03ac\u03bd\u03b5\u03b9 \u03c4\u03b7 \u03c3\u03c9\u03c3\u03c4\u03ae \u03b1\u03c0\u03ac\u03bd\u03c4\u03b7\u03c3\u03b7 \u03b5\u03bc\u03c6\u03b1\u03bd\u03af\u03b6\u03b5\u03c4\u03b1\u03b9 \u03b1\u03c6\u03bf\u03cd \u03bf\u03b9 \u03bc\u03b1\u03b8\u03b7\u03c4\u03ad\u03c2 \u03c5\u03c0\u03bf\u03b2\u03ac\u03bb\u03bf\u03c5\u03bd \u03c4\u03b9\u03c2 \u03b1\u03c0\u03b1\u03bd\u03c4\u03ae\u03c3\u03b5\u03b9\u03c2 \u03c4\u03bf\u03c5\u03c2- \u03b5\u03ac\u03bd ",(0,a.kt)("inlineCode",{parentName:"li"},"incremental"),", \u03b7 \u03b1\u03bd\u03b1\u03c4\u03c1\u03bf\u03c6\u03bf\u03b4\u03cc\u03c4\u03b7\u03c3\u03b7 \u03b5\u03bc\u03c6\u03b1\u03bd\u03af\u03b6\u03b5\u03c4\u03b1\u03b9 \u03bc\u03cc\u03bd\u03bf \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03b5\u03c0\u03b9\u03bb\u03b5\u03b3\u03bc\u03ad\u03bd\u03b7 \u03b1\u03c0\u03ac\u03bd\u03c4\u03b7\u03c3\u03b7- \u03b5\u03ac\u03bd ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),", \u03b4\u03b5\u03bd \u03b5\u03c0\u03b9\u03c3\u03c4\u03c1\u03ad\u03c6\u03b5\u03c4\u03b1\u03b9 \u03ba\u03b1\u03bc\u03af\u03b1 \u03b1\u03bd\u03b1\u03c4\u03c1\u03bf\u03c6\u03bf\u03b4\u03cc\u03c4\u03b7\u03c3\u03b7.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'incremental'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u03b5\u03bb\u03ad\u03b3\u03c7\u03b5\u03b9 \u03b1\u03bd \u03b8\u03b1 \u03b1\u03c0\u03b5\u03bd\u03b5\u03c1\u03b3\u03bf\u03c0\u03bf\u03b9\u03b7\u03b8\u03bf\u03cd\u03bd \u03bf\u03b9 \u03b5\u03b9\u03b4\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03b5\u03b9\u03c2 \u03c5\u03c0\u03bf\u03b2\u03bf\u03bb\u03ae\u03c2. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"displaySolution")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u03b5\u03bb\u03ad\u03b3\u03c7\u03b5\u03b9 \u03b1\u03bd \u03b7 \u03bb\u03cd\u03c3\u03b7 \u03b5\u03bc\u03c6\u03b1\u03bd\u03af\u03b6\u03b5\u03c4\u03b1\u03b9 \u03b5\u03ba \u03c4\u03c9\u03bd \u03c0\u03c1\u03bf\u03c4\u03ad\u03c1\u03c9\u03bd. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"until")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"Date"),": \u03c7\u03c1\u03cc\u03bd\u03bf\u03c2 \u03bc\u03ad\u03c7\u03c1\u03b9 \u03bd\u03b1 \u03b5\u03c0\u03b9\u03c4\u03c1\u03b1\u03c0\u03b5\u03af \u03c3\u03c4\u03bf\u03c5\u03c2 \u03bc\u03b1\u03b8\u03b7\u03c4\u03ad\u03c2 \u03bd\u03b1 \u03c5\u03c0\u03bf\u03b2\u03ac\u03bb\u03bf\u03c5\u03bd \u03b1\u03c0\u03b1\u03bd\u03c4\u03ae\u03c3\u03b5\u03b9\u03c2. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"points")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u03bc\u03ad\u03b3\u03b9\u03c3\u03c4\u03bf\u03c2 \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03bc\u03bf\u03c1\u03af\u03c9\u03bd \u03c0\u03bf\u03c5 \u03c7\u03bf\u03c1\u03b7\u03b3\u03bf\u03cd\u03bd\u03c4\u03b1\u03b9 \u03ba\u03b1\u03c4\u03ac \u03c4\u03b7 \u03b2\u03b1\u03b8\u03bc\u03bf\u03bb\u03cc\u03b3\u03b7\u03c3\u03b7. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": \u03a3\u03c4\u03c5\u03bb \u03b3\u03c1\u03b1\u03bc\u03bc\u03ae\u03c2 CSS. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onChange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),': \u03bb\u03b1\u03bc\u03b2\u03ac\u03bd\u03b5\u03b9 \u03c4\u03bf \u03b4\u03b5\u03af\u03ba\u03c4\u03b7 \u03c4\u03b7\u03c2 \u03b5\u03c0\u03b9\u03bb\u03b5\u03b3\u03bc\u03ad\u03bd\u03b7\u03c2 \u03b5\u03c1\u03ce\u03c4\u03b7\u03c3\u03b7\u03c2 \u03c9\u03c2 \u03bc\u03bf\u03bd\u03b1\u03b4\u03b9\u03ba\u03cc \u03cc\u03c1\u03b9\u03c3\u03bc\u03b1 (\u03ae \u03ad\u03bd\u03b1\u03bd \u03c0\u03af\u03bd\u03b1\u03ba\u03b1 \u03c3\u03b5 \u03c0\u03b5\u03c1\u03af\u03c0\u03c4\u03c9\u03c3\u03b7 \u03c0\u03bf\u03c5 \u03b7 \u03b5\u03c1\u03ce\u03c4\u03b7\u03c3\u03b7 \u03b5\u03af\u03bd\u03b1\u03b9 \u03c4\u03cd\u03c0\u03bf\u03c5 "Choose all that apply").. Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"onChange(){}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": callback \u03c0\u03bf\u03c5 \u03ba\u03b1\u03bb\u03b5\u03af\u03c4\u03b1\u03b9 \u03bc\u03b5\u03c4\u03ac \u03c4\u03b7\u03bd \u03c5\u03c0\u03bf\u03b2\u03bf\u03bb\u03ae \u03bc\u03b9\u03b1\u03c2 \u03b1\u03c0\u03ac\u03bd\u03c4\u03b7\u03c3\u03b7\u03c2. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onSubmit(){}"),".")),(0,a.kt)("h2",d({},{id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"}),"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"),(0,a.kt)(l.Z,{defaultValue:"singleAnswer",values:[{label:"Single Answer",value:"singleAnswer"},{label:"Formatted Answers",value:"formattedAnswers"},{label:"Instant Feedback",value:"instantFeedback"},{label:"Multiple Answers",value:"multipleAnswers"},{label:"Series of Questions",value:"aSeries"},{label:"With Hints",value:"withHints"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"singleAnswer",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<MultipleChoiceQuestion\n    solution={0}\n    answers={[\n        {content:"Hierarchical Clustering"},\n        {content:"LASSO"},\n        {content:"Multiple regression"}\n    ]}\n    question="Which of the following methods are used for clustering?"\n/>\n'))),(0,a.kt)(i.Z,{value:"formattedAnswers",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MultipleChoiceQuestion\n    answers={[\n        {content: <span>**bold**</span>},\n        {content: <span>*italic*</span>},\n        {content: <span style={{ fontFamily: 'Georgia', color: 'red' }}>styled</span>}\n    ]}\n    question={<span style={{ fontSize: 33}}>What kind of font do you like the most?</span>}\n/>\n"))),(0,a.kt)(i.Z,{value:"instantFeedback",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<MultipleChoiceQuestion\n    solution={0}\n    answers={[\n        {content:"Hierarchical Clustering"},\n        {content:"LASSO"},\n        {content:"Multiple regression"}\n    ]}\n    question="Which of the following methods are used for clustering?"\n    provideFeedback="full"\n/>\n'))),(0,a.kt)(i.Z,{value:"multipleAnswers",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<MultipleChoiceQuestion\n    solution={[ 0, 3 ]}\n    answers={[\n        {content:"Hierarchical Clustering"},\n        {content:"LASSO"},\n        {content:"Multiple regression"},\n        {content:"kmeans"}\n    ]}\n    question="Which of the following methods are used for clustering?"\n    style={{ background: \'#FFF6F3\'}}\n/>\n'))),(0,a.kt)(i.Z,{value:"aSeries",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Slider>\n    <MultipleChoiceQuestion\n        solution={[ 1, 3 ]}\n        answers={[\n            { content:"George Washington", explanation: "Yes, he was the first president." },\n            { content:"Benjamin Franklin", explanation: "He was a founding father."},\n            { content:"Ulysses S. Grant", explanation: "General and 18th president." },\n            { content:"Alexander Hamilton", explanation: "Had aspirations, but died in a duel." }\n        ]}\n        question="Who was not a president of the United States?"\n        style={{ background: \'lightblue\'}}\n        feedback={false}\n    />\n    <MultipleChoiceQuestion\n        solution={[ 0, 3 ]}\n        answers={[\n            {content:"Hierarchical Clustering", explanation:""},\n            {content:"LASSO", explanation:""},\n            {content:"Multiple regression", explanation:""},\n            {content:"kmeans", explanation:""}\n        ]}\n        question="Which of the following methods are used for clustering?"\n        style={{ background: \'#FFF6F3\'}}\n        feedback={false}\n    />\n</Slider>\n'))),(0,a.kt)(i.Z,{value:"withHints",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<MultipleChoiceQuestion\n    solution={[ 1, 3 ]}\n    answers={[\n        { content:"George Washington", explanation: "Yes, he was the first president." },\n        { content:"Benjamin Franklin", explanation: "He was a founding father."},\n        { content:"Ulysses S. Grant", explanation: "General and 18th president." },\n        { content:"Alexander Hamilton", explanation: "Had aspirations, but died in a duel." }\n    ]}\n    question="Who was not a president of the United States?"\n    style={{ background: \'lightblue\'}}\n    feedback={false}\n    hints={[\n        \'Washington - that is a no-brainer, isn\\\'t it?\',\n        \'Franklin was famous for his invention of the lightning rod - so why become more?\',\n        \'Hamilton was a founding father, but got in this deadly quarrel with Aaron Burr.\',\n    ]}\n    hintPlacement="top"\n/>\n')))))}N.isMDXComponent=!0}}]);