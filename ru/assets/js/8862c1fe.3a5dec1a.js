"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6414],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,f=c["".concat(u,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(202784),r=n(386010),i="tabItem_Ymn6",l=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function m({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(i,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return y}});var a=n(202784),r=n(386010),i=n(152670),l=n(258433),o=n(952326),u=n(638849),s="tabList__CuJ",p="tabItem_LNqP",m=Object.defineProperty,c=Object.defineProperties,d=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,N=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&N(e,n,t[n]);if(f)for(var n of f(t))k.call(t,n)&&N(e,n,t[n]);return e};function h(e){var t,n;const{lazy:i,block:m,defaultValue:f,values:b,groupId:k,className:N}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=null!=b?b:h.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),v=(0,l.l)(y,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const C=null===f?f:null!=(n=null!=f?f:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?n:h[0].props.value;if(null!==C&&!y.some((e=>e.value===C)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${C}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:O}=(0,o.U)(),[j,D]=(0,a.useState)(C),P=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=k){const e=w[k];null!=e&&e!==j&&y.some((t=>t.value===e))&&D(e)}const x=e=>{const t=e.currentTarget,n=P.indexOf(t),a=y[n].value;a!==j&&(T(t),D(a),null!=k&&O(k,String(a)))},E=e=>{var t,n;let a=null;switch(e.key){case"ArrowRight":{const n=P.indexOf(e.currentTarget)+1;a=null!=(t=P[n])?t:P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;a=null!=(n=P[t])?n:P[P.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},N)},y.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(i=g({role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,key:e,ref:e=>P.push(e),onKeyDown:E,onFocus:x,onClick:x},n),l={className:(0,r.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":j===e})},c(i,d(l))),null!=t?t:e);var i,l}))),i?(0,a.cloneElement)(h.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function y(e){const t=(0,i.Z)();return a.createElement(h,g({key:String(t)},e))}},203768:function(e,t,n){n.r(t),n.d(t,{assets:function(){return N},contentTitle:function(){return b},default:function(){return y},frontMatter:function(){return f},metadata:function(){return k},toc:function(){return g}});var a=n(603905),r=n(751361),i=n(440034),l=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))m.call(t,n)&&c(e,n,t[n]);return e};const f={id:"range-question",title:"Range Question",sidebar_label:"Range Question"},b=void 0,k={unversionedId:"questions/range-question",id:"questions/range-question",title:"Range Question",description:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0432\u043e\u043f\u0440\u043e\u0441\u0430 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u0442 \u0443\u0447\u0435\u043d\u0438\u043a\u0430\u043c \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043d\u0438\u0436\u043d\u044e\u044e \u0438 \u0432\u0435\u0440\u0445\u043d\u044e\u044e \u043a\u043e\u043d\u0435\u0447\u043d\u0443\u044e \u0442\u043e\u0447\u043a\u0443.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/questions/range.md",sourceDirName:"questions",slug:"/questions/range-question",permalink:"/ru/docs/questions/range-question",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/range.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1651267477,formattedLastUpdatedAt:"29 \u0430\u043f\u0440. 2022 \u0433.",frontMatter:{id:"range-question",title:"Range Question",sidebar_label:"Range Question"},sidebar:"docs",previous:{title:"Quiz",permalink:"/ru/docs/questions/quiz"},next:{title:"Select Question",permalink:"/ru/docs/questions/select-question"}},N={},g=[{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],h={toc:g};function y(e){var t,n=e,{components:l}=n,c=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&m.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},h),c),o(t,u({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0432\u043e\u043f\u0440\u043e\u0441\u0430 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u0442 \u0443\u0447\u0435\u043d\u0438\u043a\u0430\u043c \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043d\u0438\u0436\u043d\u044e\u044e \u0438 \u0432\u0435\u0440\u0445\u043d\u044e\u044e \u043a\u043e\u043d\u0435\u0447\u043d\u0443\u044e \u0442\u043e\u0447\u043a\u0443."),(0,a.kt)("h2",d({},{id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"}),"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"question")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u043c\u044b\u0439 \u0432\u043e\u043f\u0440\u043e\u0441. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"solution")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<number>"),": \u0434\u0432\u0443\u0445\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043d\u044b\u0439 \u043c\u0430\u0441\u0441\u0438\u0432, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0439 \u043a\u043e\u043d\u0435\u0447\u043d\u044b\u0435 \u0442\u043e\u0447\u043a\u0438 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0433\u043e \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0430. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043e\u043a (\u0438\u043b\u0438 ",(0,a.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"right"),", \u0438\u043b\u0438 ",(0,a.kt)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'top'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hints")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0438 \u0441 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u044f\u043c\u0438, \u043a\u0430\u043a \u043e\u0442\u0432\u0435\u0442\u0438\u0442\u044c \u043d\u0430 \u0432\u043e\u043f\u0440\u043e\u0441. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"labels")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),': \u0434\u0432\u0443\u0445\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043d\u044b\u0439 \u043c\u0430\u0441\u0441\u0438\u0432 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445 \u043c\u0435\u0442\u043e\u043a, \u043a\u0440\u043e\u043c\u0435 "\u041d\u0438\u0436\u043d\u0438\u0439" \u0438 "\u0412\u0435\u0440\u0445\u043d\u0438\u0439". Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"feedback")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c \u043a\u043d\u043e\u043f\u043e\u043a \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0439 \u0441\u0432\u044f\u0437\u0438. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"chat")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u0442, \u0434\u043e\u043b\u0436\u0435\u043d \u043b\u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0438\u043c\u0435\u0442\u044c \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0439 \u0447\u0430\u0442. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"digits")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0446\u0438\u0444\u0440, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0442\u044c \u043c\u0435\u0436\u0434\u0443 \u0440\u0435\u0448\u0435\u043d\u0438\u0435\u043c \u0438 \u043e\u0442\u0432\u0435\u0442\u043e\u043c, \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c. \u0415\u0441\u043b\u0438 \u043d\u0435 \u0437\u0430\u0434\u0430\u043d\u043e \u0438\u043b\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u043d\u0443\u043b\u0435\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435, \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u0441\u0442\u0440\u043e\u0433\u043e\u0435 \u0440\u0430\u0432\u0435\u043d\u0441\u0442\u0432\u043e. \u0415\u0441\u043b\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u0432 0, \u0442\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442\u0441\u044f \u0446\u0435\u043b\u043e\u0435 \u0440\u0430\u0432\u0435\u043d\u0441\u0442\u0432\u043e. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"3"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"max")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u0445\u043e\u0434\u043d\u0430\u044f \u0432\u0435\u043b\u0438\u0447\u0438\u043d\u0430. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"min")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u0445\u043e\u0434\u043d\u0430\u044f \u0432\u0435\u043b\u0438\u0447\u0438\u043d\u0430. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"nTries")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u043f\u043e\u0441\u043b\u0435 \u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043f\u043e\u043f\u044b\u0442\u043e\u043a \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0430 \u043e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c (\u0435\u0441\u043b\u0438 ",(0,a.kt)("inlineCode",{parentName:"li"},"provideFeedback")," \u0438\u043c\u0435\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u043b\u0438 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u043e\u0431\u0440\u0430\u0442\u043d\u0443\u044e \u0441\u0432\u044f\u0437\u044c, \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442, \u043f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u0443\u0447\u0430\u0449\u0438\u0435\u0441\u044f \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u044f\u0442 \u0441\u0432\u043e\u0438 \u043e\u0442\u0432\u0435\u0442\u044b. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"submitAfterFeedback")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0439 \u043f\u043e\u0434\u0430\u0447\u0438 \u0437\u0430\u044f\u0432\u043a\u0438 \u0434\u0430\u0436\u0435 \u043f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0431\u044b\u043b\u043e \u043d\u0430\u0439\u0434\u0435\u043d\u043e. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"until")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"Date"),": \u0432\u0440\u0435\u043c\u044f \u0434\u043e \u0442\u0435\u0445 \u043f\u043e\u0440, \u043f\u043e\u043a\u0430 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u044b \u043d\u0435 \u0441\u043c\u043e\u0433\u0443\u0442 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043e\u0442\u0432\u0435\u0442\u044b. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"points")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0431\u0430\u043b\u043b\u043e\u0432, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0445 \u043f\u0440\u0438 \u0433\u0440\u0430\u0434\u0430\u0446\u0438\u0438. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0438\u043b\u0438 CSS. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onChangeLower")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": \u043e\u0431\u0440\u0430\u0442\u043d\u044b\u0439 \u0432\u044b\u0437\u043e\u0432, \u0441\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u044e\u0449\u0438\u0439 \u043f\u043e\u0441\u043b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043d\u0438\u0436\u043d\u0435\u0439 \u0433\u0440\u0430\u043d\u0438\u0446\u044b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onChangeLower() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onChangeUpper")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": \u043e\u0431\u0440\u0430\u0442\u043d\u044b\u0439 \u0432\u044b\u0437\u043e\u0432, \u0441\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u044e\u0449\u0438\u0439 \u043f\u043e\u0441\u043b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c \u0432\u0435\u0440\u0445\u043d\u0435\u0439 \u0433\u0440\u0430\u043d\u0438\u0446\u044b. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onChangeUpper() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onChange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": \u043e\u0431\u0440\u0430\u0442\u043d\u044b\u0439 \u0432\u044b\u0437\u043e\u0432, \u0441\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u044e\u0449\u0438\u0439 \u043f\u043e\u0441\u043b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0433\u0440\u0430\u043d\u0438\u0446\u044b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c (\u0441 \u043d\u0438\u0436\u043d\u0435\u0439 \u0438 \u0432\u0435\u0440\u0445\u043d\u0435\u0439 \u0433\u0440\u0430\u043d\u0438\u0446\u0435\u0439 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": \u043e\u0431\u0440\u0430\u0442\u043d\u044b\u0439 \u0432\u044b\u0437\u043e\u0432, \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u043c\u044b\u0439 \u043f\u0440\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0435 \u043e\u0442\u0432\u0435\u0442\u0430; \u0438\u043c\u0435\u0435\u0442 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 ",(0,a.kt)("inlineCode",{parentName:"li"},"\u0431\u0443\u043b\u0435\u0430\u043d"),", \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0449\u0438\u0439, \u0431\u044b\u043b \u043b\u0438 \u043e\u0442\u0432\u0435\u0442 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u043c (\u0435\u0441\u043b\u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c\u043e, ",(0,a.kt)("inlineCode",{parentName:"li"},"\u043d\u0443\u043b\u0435\u0430\u043d")," \u0432 \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435), \u0430 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0432\u0442\u043e\u0440\u043e\u0433\u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 - \u043e\u0442\u0432\u0435\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u044b\u043b \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,a.kt)("h2",d({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,a.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Hints",value:"withHints"},{label:"With Style",value:"withStyle"},{label:"With Points and Feedback",value:"withPoints"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<RangeQuestion\n    style={{ fontSize: 17, }}\n    question=\"What year did the Thirty Years War broke out and when did it?\"\n    solution={[1618,1648]}\n    labels={['Start', 'End']}\n    min={1500}\n    max={2000}\n/>\n"))),(0,a.kt)(i.Z,{value:"withHints",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<RangeQuestion\n    question=\"What year did the Thirty Years War broke out and when did it?\"\n    solution={[1618,1648]}\n    labels={['Start', 'End']}\n    min={1500}\n    max={2000}\n    hints={['all this happened in the 17th century', 'it ended with the Peace of Westphalia in 1648']}\n/>\n"))),(0,a.kt)(i.Z,{value:"withStyle",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<RangeQuestion\n    style={{ fontFamily: 'Georgia', boxShadow: '0 0  10px darkblue'}}\n    question=\"What year did the Thirty Years War broke out and when did it?\"\n    solution={[1618,1648]}\n    labels={['Start', 'End']}\n    min={1500}\n    max={2000}\n/>\n"))),(0,a.kt)(i.Z,{value:"withPoints",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<RangeQuestion\n    question=\"What year did the Thirty Years War broke out and when did it?\"\n    solution={[1618,1648]}\n    labels={['Start', 'End']}\n    min={1500}\n    max={2000}\n    hints={['all this happened in the 17th century', 'it ended with the Peace of Westphalia in 1648']}\n    points={20}\n    onSubmit={(res) => {\n     if (res === true) {\n      alert('Great, you have received 20 points');\n     }\n     else alert('sorry, this answer was wrong');\n    }}\n/>\n")))))}y.isMDXComponent=!0}}]);