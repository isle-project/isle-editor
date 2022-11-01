"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[44758],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||l;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(202784),r=n(386010),l="tabItem_Ymn6",o=Object.defineProperty,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function p({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&c(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(202784),r=n(386010),l=n(152670),o=n(258433),i=n(952326),u=n(638849),s="tabList__CuJ",c="tabItem_LNqP",p=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&k(e,n,t[n]);if(f)for(var n of f(t))v.call(t,n)&&k(e,n,t[n]);return e};function g(e){var t,n;const{lazy:l,block:p,defaultValue:f,values:b,groupId:v,className:k}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=b?b:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),h=(0,o.l)(N,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===f?f:null!=(n=null!=f?f:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?n:g[0].props.value;if(null!==O&&!N.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:C}=(0,i.U)(),[j,T]=(0,a.useState)(O),E=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=v){const e=w[v];null!=e&&e!==j&&N.some((t=>t.value===e))&&T(e)}const P=e=>{const t=e.currentTarget,n=E.indexOf(t),a=N[n].value;a!==j&&(x(t),T(a),null!=v&&C(v,String(a)))},D=e=>{var t,n;let a=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const n=E.indexOf(e.currentTarget)+1;a=null!=(t=E[n])?t:E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;a=null!=(n=E[t])?n:E[E.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},k)},N.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(l=y({role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,key:e,ref:e=>E.push(e),onKeyDown:D,onClick:P},n),o={className:(0,r.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":j===e})},m(l,d(o))),null!=t?t:e);var l,o}))),l?(0,a.cloneElement)(g.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function N(e){const t=(0,l.Z)();return a.createElement(g,y({key:String(t)},e))}},272455:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return b},default:function(){return N},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return y}});var a=n(603905),r=n(751361),l=n(440034),o=Object.defineProperty,i=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&m(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&m(e,n,t[n]);return e};const f={id:"gate",title:"Gate",sidebar_label:"Gate"},b=void 0,v={unversionedId:"gate",id:"gate",title:"Gate",description:"ISLE-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0438\u0439 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u0441\u0432\u043e\u0438\u0445 \u0434\u0435\u0442\u0435\u0439 \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0437\u0430\u0440\u0435\u0437\u0435\u0440\u0432\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u0430\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u0438.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/gate.md",sourceDirName:".",slug:"/gate",permalink:"/ru/docs/gate",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/gate.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1650476171,formattedLastUpdatedAt:"20 \u0430\u043f\u0440. 2022 \u0433.",frontMatter:{id:"gate",title:"Gate",sidebar_label:"Gate"},sidebar:"docs",previous:{title:"Feedback Buttons",permalink:"/ru/docs/feedback"},next:{title:"Text Editor",permalink:"/ru/docs/text-editor"}},k={},y=[{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],g={toc:y};function N(e){var t,n=e,{components:o}=n,m=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},g),m),i(t,u({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"ISLE-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0438\u0439 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u0441\u0432\u043e\u0438\u0445 \u0434\u0435\u0442\u0435\u0439 \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0437\u0430\u0440\u0435\u0437\u0435\u0440\u0432\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u0430\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u0438."),(0,a.kt)("h2",d({},{id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"}),"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"user")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u0433\u0434\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e, \u0447\u0442\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0432\u043e\u0440\u043e\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"notUser")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0435\u0441\u043b\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e, \u0447\u0442\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0448\u043b\u044e\u0437\u0430 ",(0,a.kt)("strong",{parentName:"li"},"not")," \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"enrolled")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043f\u0440\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430 \u043d\u0430 \u044d\u043a\u0440\u0430\u043d\u0435 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430\u043c, \u0437\u0430\u043f\u0438\u0441\u0430\u0432\u0448\u0438\u043c\u0441\u044f \u043d\u0430 \u043a\u0443\u0440\u0441. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"notEnrolled")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0435\u0441\u043b\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e, \u0447\u0442\u043e \u043a\u043e\u043d\u0442\u0435\u043d\u0442 \u043d\u0430 \u0432\u044b\u0445\u043e\u0434\u0435 ",(0,a.kt)("strong",{parentName:"li"},"\u043d\u0435\u0442")," \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044f \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430\u043c, \u0437\u0430\u043f\u0438\u0441\u0430\u0432\u0448\u0438\u043c\u0441\u044f \u043d\u0430 \u043a\u0443\u0440\u0441. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"owner")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043f\u0440\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435, \u043a\u043e\u043d\u0442\u0435\u043d\u0442 \u0441 \u0437\u0430\u043a\u0440\u044b\u0442\u044b\u043c\u0438 \u0434\u0432\u0435\u0440\u044c\u043c\u0438 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044f \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0443 \u043a\u0443\u0440\u0441\u0430 (\u043e\u0431\u044b\u0447\u043d\u043e \u044d\u0442\u043e \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"notOwner")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u0433\u0434\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e, \u0447\u0442\u043e \u0437\u0430\u043a\u0440\u044b\u0442\u043e\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435 ",(0,a.kt)("strong",{parentName:"li"},"not")," \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044f \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0443 \u043a\u0443\u0440\u0441\u0430 (\u043e\u0431\u044b\u0447\u043d\u043e \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440\u0443). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"after")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"Date"),": \u0432\u0440\u0435\u043c\u044f, \u043f\u043e \u0438\u0441\u0442\u0435\u0447\u0435\u043d\u0438\u0438 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0432\u043e\u0440\u043e\u0442 \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u0442\u0430\u0442\u044c \u0432\u0438\u0434\u0438\u043c\u044b\u043c. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"until")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"Date"),": \u0432\u0440\u0435\u043c\u044f \u0434\u043e \u0442\u0435\u0445 \u043f\u043e\u0440, \u043f\u043e\u043a\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0432\u043e\u0440\u043e\u0442 \u043d\u0435 \u043e\u0441\u0442\u0430\u043d\u0435\u0442\u0441\u044f \u0432\u0438\u0434\u0438\u043c\u044b\u043c. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"banner")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"node"),": \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044f \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u044f\u043c, \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0434\u0435\u0442\u0438 \u0432\u043e\u0440\u043e\u0442 \u043d\u0435 \u0432\u0438\u0434\u043d\u044b, \u0432\u043c\u0435\u0441\u0442\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"disabled")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0435\u0441\u043b\u0438 \u0432\u043e\u0440\u043e\u0442\u0430 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u044b, \u0431\u0430\u043d\u043d\u0435\u0440 \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u043a\u0430\u0437\u0430\u043d \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e \u043e\u0442 \u0442\u043e\u0433\u043e. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"showOwnerInPresentationMode")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u0442\u0435\u043c, \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043b\u0438 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0432\u043e\u0440\u043e\u0442 \u0432 \u0440\u0435\u0436\u0438\u043c\u0435 \u043f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u0438, \u043a\u043e\u0433\u0434\u0430 \u0432\u043e\u0440\u043e\u0442\u0430 \u0432\u0438\u0434\u043d\u044b \u0434\u043b\u044f ",(0,a.kt)("inlineCode",{parentName:"li"},"\u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0435\u0432"),". Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"check")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u0432\u044b\u0437\u043e\u0432\u0430, \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0449\u0430\u044f ",(0,a.kt)("inlineCode",{parentName:"li"},"\u0431\u0443\u043b\u0435\u0430\u043d"),", \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0449\u0430\u044f, \u0434\u043e\u043b\u0436\u043d\u044b \u043b\u0438 \u0432\u043e\u0440\u043e\u0442\u0430 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u0434\u043e\u0447\u0435\u0440\u043d\u0438\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b; \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432\u0441\u044f\u043a\u0438\u0439 \u0440\u0430\u0437, \u043a\u043e\u0433\u0434\u0430 \u043f\u043e\u0441\u0442\u0443\u043f\u0430\u044e\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0441\u0435\u0430\u043d\u0441\u0430. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,a.kt)("h2",d({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,a.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Timed",value:"timed"},{label:"Hidden",value:"hidden"},{label:"Custom Banner",value:"customBanner"},{label:"Custom Check",value:"customCheck"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Gate enrolled >\n    <h1>Content for users enrolled in a cohort of the course</h1>\n</Gate>\n"))),(0,a.kt)(l.Z,{value:"timed",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Gate\n    after={date({ year: 2020, month: 9, day: 1, hour: 9, minute: 30, second: 0, utcOffset: 4 })}\n    until={date({ year: 2020, month: 12, day: 20, hour: 9, minute: 30, second: 0, utcOffset: 5 })}\n>\n    # Only visible in Fall 2020 semester\n</Gate>\n"))),(0,a.kt)(l.Z,{value:"hidden",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Gate banner={null} owner >\n    <h1>Content for owners without a message for others</h1>\n</Gate>\n"))),(0,a.kt)(l.Z,{value:"customBanner",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Gate owner banner={<h3>Only visible by course owners...</h3>} >\n    <h1> User Analytics </h1>\n</Gate>\n"))),(0,a.kt)(l.Z,{value:"customCheck",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Gate check={( ) => {\n    return session.user.email === 'admin@cmu.edu';\n}} >\n    <h1> User Analytics only visible to specified user</h1>\n</Gate>\n")))))}N.isMDXComponent=!0}}]);