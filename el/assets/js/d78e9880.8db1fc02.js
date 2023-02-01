"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[30532],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(202784),a=n(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function p({children:e,hidden:t,className:n}){return r.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&c(e,n,t[n]);return e})({role:"tabpanel",className:(0,a.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(202784),a=n(386010),l=n(152670),i=n(258433),o=n(952326),u=n(638849),s="tabList__CuJ",c="tabItem_LNqP",p=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&v(e,n,t[n]);if(f)for(var n of f(t))y.call(t,n)&&v(e,n,t[n]);return e};function g(e){var t,n;const{lazy:l,block:p,defaultValue:f,values:b,groupId:y,className:v}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=b?b:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),O=(0,i.l)(h,((e,t)=>e.value===t.value));if(O.length>0)throw new Error(`Docusaurus error: Duplicate values "${O.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===f?f:null!=(n=null!=f?f:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?n:g[0].props.value;if(null!==N&&!h.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:j}=(0,o.U)(),[P,S]=(0,r.useState)(N),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=y){const e=w[y];null!=e&&e!==P&&h.some((t=>t.value===e))&&S(e)}const C=e=>{const t=e.currentTarget,n=E.indexOf(t),r=h[n].value;r!==P&&(T(t),S(r),null!=y&&j(y,String(r)))},x=e=>{var t,n;let r=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const n=E.indexOf(e.currentTarget)+1;r=null!=(t=E[n])?t:E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;r=null!=(n=E[t])?n:E[E.length-1];break}}null==r||r.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},v)},h.map((({value:e,label:t,attributes:n})=>{return r.createElement("li",(l=k({role:"tab",tabIndex:P===e?0:-1,"aria-selected":P===e,key:e,ref:e=>E.push(e),onKeyDown:x,onClick:C},n),i={className:(0,a.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":P===e})},m(l,d(i))),null!=t?t:e);var l,i}))),l?(0,r.cloneElement)(g.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function h(e){const t=(0,l.Z)();return r.createElement(g,k({key:String(t)},e))}},890768:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return b},default:function(){return h},frontMatter:function(){return f},metadata:function(){return y},toc:function(){return k}});var r=n(603905),a=n(751361),l=n(440034),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&m(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&m(e,n,t[n]);return e};const f={id:"likert-scale",title:"Likert Scale",sidebar_label:"Likert Scale"},b=void 0,y={unversionedId:"likert-scale",id:"likert-scale",title:"Likert Scale",description:"\u0388\u03bd\u03b1 \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf \u03c0\u03bf\u03c5 \u03b4\u03b5\u03af\u03c7\u03bd\u03b5\u03b9 \u03bc\u03b9\u03b1 \u03b5\u03c1\u03ce\u03c4\u03b7\u03c3\u03b7 \u03ba\u03b1\u03b9 \u03bc\u03b9\u03b1 \u03c0\u03b5\u03bd\u03c4\u03b1\u03b2\u03ac\u03b8\u03bc\u03b9\u03b1 \u03ba\u03bb\u03af\u03bc\u03b1\u03ba\u03b1 \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03b1\u03c0\u03b1\u03bd\u03c4\u03ae\u03c3\u03bf\u03c5\u03bd \u03bf\u03b9 \u03bc\u03b1\u03b8\u03b7\u03c4\u03ad\u03c2.",source:"@site/i18n/el/docusaurus-plugin-content-docs/current/likert-scale.md",sourceDirName:".",slug:"/likert-scale",permalink:"/el/docs/likert-scale",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/likert-scale.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1 \u0399\u03bf\u03c5\u03bd 2021",frontMatter:{id:"likert-scale",title:"Likert Scale",sidebar_label:"Likert Scale"},sidebar:"docs",previous:{title:"JavaScript Shell",permalink:"/el/docs/js-shell"},next:{title:"Multi Cards",permalink:"/el/docs/multi-cards"}},v={},k=[{value:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",level:2},{value:"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",level:2}],g={toc:k};function h(e){var t,n=e,{components:i}=n,m=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},g),m),o(t,u({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u0388\u03bd\u03b1 \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf \u03c0\u03bf\u03c5 \u03b4\u03b5\u03af\u03c7\u03bd\u03b5\u03b9 \u03bc\u03b9\u03b1 \u03b5\u03c1\u03ce\u03c4\u03b7\u03c3\u03b7 \u03ba\u03b1\u03b9 \u03bc\u03b9\u03b1 \u03c0\u03b5\u03bd\u03c4\u03b1\u03b2\u03ac\u03b8\u03bc\u03b9\u03b1 \u03ba\u03bb\u03af\u03bc\u03b1\u03ba\u03b1 \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03b1\u03c0\u03b1\u03bd\u03c4\u03ae\u03c3\u03bf\u03c5\u03bd \u03bf\u03b9 \u03bc\u03b1\u03b8\u03b7\u03c4\u03ad\u03c2."),(0,r.kt)("h2",d({},{id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"}),"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"question")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \u03b5\u03c1\u03ce\u03c4\u03b7\u03c3\u03b7 \u03c0\u03c1\u03bf\u03c2 \u03b5\u03ba\u03c4\u03cd\u03c0\u03c9\u03c3\u03b7. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"options")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array"),": \u03ad\u03bd\u03b1\u03bd \u03c0\u03af\u03bd\u03b1\u03ba\u03b1 \u03c0\u03ad\u03bd\u03c4\u03b5 \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03c9\u03bd \u03bc\u03b5 \u03c0\u03c1\u03bf\u03c3\u03b1\u03c1\u03bc\u03bf\u03c3\u03bc\u03ad\u03bd\u03b5\u03c2 \u03b5\u03c4\u03b9\u03ba\u03ad\u03c4\u03b5\u03c2 \u03b3\u03b9\u03b1 \u03c4\u03b1 \u03b4\u03b9\u03ac\u03c6\u03bf\u03c1\u03b1 \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03b1 \u03ba\u03bb\u03af\u03bc\u03b1\u03ba\u03b1\u03c2. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"noMultipleResponses")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u03bd\u03b1 \u03bc\u03b7\u03bd \u03b5\u03c0\u03b9\u03c4\u03c1\u03ad\u03c0\u03b5\u03c4\u03b5 \u03c0\u03bf\u03bb\u03bb\u03b1\u03c0\u03bb\u03ad\u03c2 \u03c5\u03c0\u03bf\u03b2\u03bf\u03bb\u03ad\u03c2 \u03b1\u03c0\u03cc \u03ad\u03bd\u03b1\u03bd \u03bc\u03b1\u03b8\u03b7\u03c4\u03ae. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u03b5\u03bb\u03ad\u03b3\u03c7\u03b5\u03b9 \u03b1\u03bd \u03b8\u03b1 \u03b1\u03c0\u03b5\u03bd\u03b5\u03c1\u03b3\u03bf\u03c0\u03bf\u03b9\u03b7\u03b8\u03bf\u03cd\u03bd \u03bf\u03b9 \u03b5\u03b9\u03b4\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03b5\u03b9\u03c2 \u03c5\u03c0\u03bf\u03b2\u03bf\u03bb\u03ae\u03c2. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"className")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u03cc\u03bd\u03bf\u03bc\u03b1 \u03ba\u03bb\u03ac\u03c3\u03b7\u03c2. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": \u03a3\u03c4\u03c5\u03bb \u03b3\u03c1\u03b1\u03bc\u03bc\u03ae\u03c2 CSS. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,r.kt)("h2",d({},{id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"}),"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"),(0,r.kt)(a.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Custom Options",value:"customOptions"},{label:"With Style",value:"withStyle"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<LikertScale \n    id="discrimination" \n    question="Do you agree with the arguments made by the speaker?" \n/>\n'))),(0,r.kt)(l.Z,{value:"customOptions",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LikertScale \n    id=\"discrimination\" \n    question=\"After your initial analysis of the data, how likely do you think it is that players are discriminated against by soccer referees because of their skin tone?\" \n    options={[ 'Very unlikely', 'Unlikely', 'Neither unlikely nor likely', 'Likely', 'Very Likely']}\n/>\n"))),(0,r.kt)(l.Z,{value:"withStyle",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LikertScale \n    id=\"discrimination\" \n    question=\"Do you agree with the arguments made by the speaker?\" \n    style={{ \n        background: 'rgba(0,0,255,0.05)', \n        fontFamily: 'Open Sans', \n        fontSize: 22 \n    }}\n/>\n")))))}h.isMDXComponent=!0}}]);