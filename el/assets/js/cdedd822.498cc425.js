"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[59764],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(202784),a=n(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function p({children:e,hidden:t,className:n}){return r.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&c(e,n,t[n]);return e})({role:"tabpanel",className:(0,a.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(202784),a=n(386010),l=n(152670),i=n(258433),o=n(952326),u=n(638849),s="tabList__CuJ",c="tabItem_LNqP",p=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&y(e,n,t[n]);if(f)for(var n of f(t))v.call(t,n)&&y(e,n,t[n]);return e};function g(e){var t,n;const{lazy:l,block:p,defaultValue:f,values:b,groupId:v,className:y}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=b?b:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),N=(0,i.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===f?f:null!=(n=null!=f?f:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?n:g[0].props.value;if(null!==O&&!h.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:T}=(0,o.U)(),[x,j]=(0,r.useState)(O),E=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=v){const e=w[v];null!=e&&e!==x&&h.some((t=>t.value===e))&&j(e)}const P=e=>{const t=e.currentTarget,n=E.indexOf(t),r=h[n].value;r!==x&&(C(t),j(r),null!=v&&T(v,String(r)))},D=e=>{var t,n;let r=null;switch(e.key){case"ArrowRight":{const n=E.indexOf(e.currentTarget)+1;r=null!=(t=E[n])?t:E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;r=null!=(n=E[t])?n:E[E.length-1];break}}null==r||r.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},y)},h.map((({value:e,label:t,attributes:n})=>{return r.createElement("li",(l=k({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>E.push(e),onKeyDown:D,onFocus:P,onClick:P},n),i={className:(0,a.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":x===e})},d(l,m(i))),null!=t?t:e);var l,i}))),l?(0,r.cloneElement)(g.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function h(e){const t=(0,l.Z)();return r.createElement(g,k({key:String(t)},e))}},230808:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return b},default:function(){return h},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return k}});var r=n(603905),a=n(751361),l=n(440034),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&d(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&d(e,n,t[n]);return e};const f={id:"text-editor",title:"Text Editor",sidebar_label:"Text Editor"},b=void 0,v={unversionedId:"text-editor",id:"text-editor",title:"Text Editor",description:"\u0388\u03bd\u03b1\u03c2 \u03b5\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03b1\u03c3\u03c4\u03ae\u03c2 \u03ba\u03b5\u03b9\u03bc\u03ad\u03bd\u03bf\u03c5 \u03b3\u03b9\u03b1 \u03c4\u03b7 \u03c3\u03cd\u03bd\u03c4\u03b1\u03be\u03b7 \u03c3\u03b7\u03bc\u03b5\u03b9\u03ce\u03c3\u03b5\u03c9\u03bd \u03ae \u03b1\u03bd\u03b1\u03c6\u03bf\u03c1\u03ce\u03bd. \u03a5\u03c0\u03bf\u03c3\u03c4\u03b7\u03c1\u03af\u03b6\u03b5\u03b9 \u03c4\u03b7\u03bd \u03b5\u03be\u03b1\u03b3\u03c9\u03b3\u03ae \u03c3\u03b7\u03bc\u03b5\u03b9\u03ce\u03c3\u03b5\u03c9\u03bd \u03c3\u03b5 \u03b1\u03c1\u03c7\u03b5\u03af\u03b1 HTML \u03ae PDF, \u03ba\u03b1\u03b8\u03ce\u03c2 \u03ba\u03b1\u03b9 \u03c4\u03b7\u03bd \u03b1\u03c5\u03c4\u03cc\u03bc\u03b1\u03c4\u03b7 \u03c5\u03c0\u03bf\u03b2\u03bf\u03bb\u03ae \u03c3\u03c4\u03bf\u03bd \u03b4\u03b9\u03b1\u03ba\u03bf\u03bc\u03b9\u03c3\u03c4\u03ae ISLE.",source:"@site/i18n/el/docusaurus-plugin-content-docs/current/text-editor.md",sourceDirName:".",slug:"/text-editor",permalink:"/el/docs/text-editor",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/text-editor.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1658117079,formattedLastUpdatedAt:"18 \u0399\u03bf\u03c5\u03bb 2022",frontMatter:{id:"text-editor",title:"Text Editor",sidebar_label:"Text Editor"},sidebar:"docs",previous:{title:"Gate",permalink:"/el/docs/gate"},next:{title:"Sketchpad",permalink:"/el/docs/sketchpad"}},y={},k=[{value:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",level:2},{value:"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",level:2}],g={toc:k};function h(e){var t,n=e,{components:i}=n,d=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},g),d),o(t,u({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u0388\u03bd\u03b1\u03c2 \u03b5\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03b1\u03c3\u03c4\u03ae\u03c2 \u03ba\u03b5\u03b9\u03bc\u03ad\u03bd\u03bf\u03c5 \u03b3\u03b9\u03b1 \u03c4\u03b7 \u03c3\u03cd\u03bd\u03c4\u03b1\u03be\u03b7 \u03c3\u03b7\u03bc\u03b5\u03b9\u03ce\u03c3\u03b5\u03c9\u03bd \u03ae \u03b1\u03bd\u03b1\u03c6\u03bf\u03c1\u03ce\u03bd. \u03a5\u03c0\u03bf\u03c3\u03c4\u03b7\u03c1\u03af\u03b6\u03b5\u03b9 \u03c4\u03b7\u03bd \u03b5\u03be\u03b1\u03b3\u03c9\u03b3\u03ae \u03c3\u03b7\u03bc\u03b5\u03b9\u03ce\u03c3\u03b5\u03c9\u03bd \u03c3\u03b5 \u03b1\u03c1\u03c7\u03b5\u03af\u03b1 HTML \u03ae PDF, \u03ba\u03b1\u03b8\u03ce\u03c2 \u03ba\u03b1\u03b9 \u03c4\u03b7\u03bd \u03b1\u03c5\u03c4\u03cc\u03bc\u03b1\u03c4\u03b7 \u03c5\u03c0\u03bf\u03b2\u03bf\u03bb\u03ae \u03c3\u03c4\u03bf\u03bd \u03b4\u03b9\u03b1\u03ba\u03bf\u03bc\u03b9\u03c3\u03c4\u03ae ISLE."),(0,r.kt)("h2",m({},{id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"}),"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"allowSubmissions")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u03b5\u03bb\u03ad\u03b3\u03c7\u03b5\u03b9 \u03b1\u03bd \u03bf\u03b9 \u03bc\u03b1\u03b8\u03b7\u03c4\u03ad\u03c2 \u03bc\u03c0\u03bf\u03c1\u03bf\u03cd\u03bd \u03bd\u03b1 \u03c5\u03c0\u03bf\u03b2\u03ac\u03bb\u03bb\u03bf\u03c5\u03bd \u03c4\u03b9\u03c2 \u03b5\u03ba\u03b8\u03ad\u03c3\u03b5\u03b9\u03c2 \u03c4\u03bf\u03c5\u03c2 \u03c3\u03c4\u03bf \u03b4\u03b9\u03b1\u03ba\u03bf\u03bc\u03b9\u03c3\u03c4\u03ae. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"canLoadHTML")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u03b5\u03bb\u03ad\u03b3\u03c7\u03b5\u03b9 \u03b1\u03bd \u03b8\u03b1 \u03b5\u03bc\u03c6\u03b1\u03bd\u03af\u03b6\u03b5\u03c4\u03b1\u03b9 \u03c4\u03bf \u03ba\u03bf\u03c5\u03bc\u03c0\u03af \u03b3\u03b9\u03b1 \u03c4\u03b7 \u03c6\u03cc\u03c1\u03c4\u03c9\u03c3\u03b7 \u03b5\u03bd\u03cc\u03c2 \u03b1\u03c0\u03bf\u03b8\u03b7\u03ba\u03b5\u03c5\u03bc\u03ad\u03bd\u03bf\u03c5 \u03b1\u03c1\u03c7\u03b5\u03af\u03bf\u03c5 HTML \u03c3\u03c4\u03bf\u03bd \u03b5\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03b1\u03c3\u03c4\u03ae. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u03c0\u03c1\u03bf\u03b5\u03c0\u03b9\u03bb\u03b5\u03b3\u03bc\u03ad\u03bd\u03bf \u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03c4\u03bf\u03c5 \u03c3\u03c5\u03bd\u03c4\u03ac\u03ba\u03c4\u03b7. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"history")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u03b5\u03bb\u03ad\u03b3\u03c7\u03b5\u03b9 \u03b1\u03bd \u03bf \u03c3\u03c5\u03bd\u03c4\u03ac\u03ba\u03c4\u03b7\u03c2 \u03b8\u03b1 \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03c0\u03b5\u03c1\u03b9\u03bb\u03b1\u03bc\u03b2\u03ac\u03bd\u03b5\u03b9 \u03c0\u03c1\u03bf\u03b2\u03bf\u03bb\u03ae \u03b9\u03c3\u03c4\u03bf\u03c1\u03b9\u03ba\u03bf\u03cd. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"mode")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),': \u03b5\u03bb\u03ad\u03b3\u03c7\u03b5\u03b9 \u03c4\u03b7 \u03bb\u03b5\u03b9\u03c4\u03bf\u03c5\u03c1\u03b3\u03af\u03b1 \u03b5\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03b1\u03c3\u03af\u03b1\u03c2 \u03ba\u03b5\u03b9\u03bc\u03ad\u03bd\u03bf\u03c5 (\u03b5\u03af\u03c4\u03b5 "\u03b1\u03c4\u03bf\u03bc\u03b9\u03ba\u03ae" \u03b3\u03b9\u03b1 \u03ad\u03bd\u03b1 \u03c0\u03c1\u03bf\u03c3\u03c9\u03c0\u03b9\u03ba\u03cc \u03ad\u03b3\u03b3\u03c1\u03b1\u03c6\u03bf, \u03b5\u03af\u03c4\u03b5 "\u03bf\u03bc\u03b1\u03b4\u03b9\u03ba\u03ae" \u03b3\u03b9\u03b1 \u03ad\u03bd\u03b1 \u03ad\u03b3\u03b3\u03c1\u03b1\u03c6\u03bf \u03b1\u03bd\u03ac \u03bf\u03bc\u03ac\u03b4\u03b5\u03c2, \u03b5\u03af\u03c4\u03b5 "\u03c3\u03c5\u03bd\u03b5\u03c1\u03b3\u03b1\u03c4\u03b9\u03ba\u03ae" \u03b3\u03b9\u03b1 \u03ad\u03bd\u03b1 \u03b5\u03bd\u03b9\u03b1\u03af\u03bf \u03ad\u03b3\u03b3\u03c1\u03b1\u03c6\u03bf \u03b3\u03b9\u03b1 \u03cc\u03bb\u03bf\u03c5\u03c2, \u03b5\u03af\u03c4\u03b5 "\u03ba\u03bf\u03cc\u03c1\u03c4\u03b7" \u03b3\u03b9\u03b1 \u03ad\u03bd\u03b1 \u03ad\u03b3\u03b3\u03c1\u03b1\u03c6\u03bf \u03b1\u03bd\u03ac \u03ba\u03bf\u03cc\u03c1\u03c4\u03b7).. Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"'individual'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"resetModal")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"{title,body,buttonLabel,notificationTitle,notification,tooltip}"),": \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03c0\u03c1\u03bf\u03c3\u03b1\u03c1\u03bc\u03bf\u03b3\u03ae \u03c4\u03bf\u03c5 modal \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03b5\u03c0\u03b1\u03bd\u03b1\u03c6\u03bf\u03c1\u03ac \u03c4\u03bf\u03c5 \u03b5\u03b3\u03b3\u03c1\u03ac\u03c6\u03bf\u03c5 (\u03c3\u03c5\u03bd\u03ae\u03b8\u03c9\u03c2 \u03b4\u03b5\u03bd \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b1\u03bb\u03bb\u03ac\u03b6\u03b5\u03b9). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"sendSubmissionEmails")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u03b5\u03bb\u03ad\u03b3\u03c7\u03b5\u03b9 \u03b1\u03bd \u03b8\u03b1 \u03c3\u03c4\u03ad\u03bb\u03bd\u03b5\u03b9 email \u03b5\u03c0\u03b9\u03b2\u03b5\u03b2\u03b1\u03af\u03c9\u03c3\u03b7\u03c2 \u03bc\u03b5 \u03ad\u03be\u03bf\u03b4\u03bf PDF/HTML \u03ba\u03b1\u03c4\u03ac \u03c4\u03b7\u03bd \u03c5\u03c0\u03bf\u03b2\u03bf\u03bb\u03ae. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"voiceTimeout")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": \u03c7\u03c1\u03cc\u03bd\u03bf\u03c2 \u03c3\u03b5 \u03c7\u03b9\u03bb\u03b9\u03bf\u03c3\u03c4\u03ac \u03c4\u03bf\u03c5 \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03bf\u03bb\u03ad\u03c0\u03c4\u03bf\u03c5 \u03bc\u03b5\u03c4\u03ac \u03c4\u03b7\u03bd \u03b5\u03b9\u03c3\u03b1\u03b3\u03c9\u03b3\u03ae \u03b5\u03bd\u03cc\u03c2 \u03c4\u03bc\u03ae\u03bc\u03b1\u03c4\u03bf\u03c2 \u03b7\u03c7\u03bf\u03b3\u03c1\u03b1\u03c6\u03b7\u03bc\u03ad\u03bd\u03b7\u03c2 \u03c6\u03c9\u03bd\u03b7\u03c4\u03b9\u03ba\u03ae\u03c2 \u03b5\u03b9\u03c3\u03cc\u03b4\u03bf\u03c5. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"5000"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": \u03a3\u03c4\u03c5\u03bb \u03b3\u03c1\u03b1\u03bc\u03bc\u03ae\u03c2 CSS. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,r.kt)("h2",m({},{id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"}),"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"),(0,r.kt)(a.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Default Value",value:"defaultValue"},{label:"Mode",value:"mode"},{label:"With Style",value:"withStyle"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<TextEditor  />\n"))),(0,r.kt)(l.Z,{value:"defaultValue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<TextEditor defaultValue={`# Welcome!\n\nThis is a text that uses **markdown**\n\n## Second Heading Level\n\n[Wikipedia Link](https://https://www.wikipedia.org/).\n`} />\n"))),(0,r.kt)(l.Z,{value:"mode",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<TextEditor defaultValue="This is reserved for an individual. But you can also allow groups, students cohorts, or everybody to join in and work collaboratively (setting the mode option will only have an effect in a live lesson, not this preview)." \nmode="individual" />\n'))),(0,r.kt)(l.Z,{value:"withStyle",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<TextEditor  \n  defaultValue=\"[Generate CSS-Gradients Online!](https://cssgradient.io/)\"\n  style={{ \n    background: 'green',\n    background: 'radial-gradient(circle, rgba(251,213,112,0.7315301120448179) 0%,rgba(83,199,14,0.4514180672268907) 100%)' \n  }}\n/>\n")))))}h.isMDXComponent=!0}}]);