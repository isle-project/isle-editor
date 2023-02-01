"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19225],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(202784),r=n(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(202784),r=n(386010),l=n(152670),i=n(258433),o=n(952326),u=n(638849),s="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&g(e,n,t[n]);if(f)for(var n of f(t))v.call(t,n)&&g(e,n,t[n]);return e};function h(e){var t,n;const{lazy:l,block:c,defaultValue:f,values:b,groupId:v,className:g}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=null!=b?b:h.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),N=(0,i.l)(k,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===f?f:null!=(n=null!=f?f:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?n:h[0].props.value;if(null!==O&&!k.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:P,setTabGroupChoices:w}=(0,o.U)(),[j,C]=(0,a.useState)(O),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=v){const e=P[v];null!=e&&e!==j&&k.some((t=>t.value===e))&&C(e)}const x=e=>{const t=e.currentTarget,n=T.indexOf(t),a=k[n].value;a!==j&&(E(t),C(a),null!=v&&w(v,String(a)))},S=e=>{var t,n;let a=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;a=null!=(t=T[n])?t:T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=null!=(n=T[t])?n:T[T.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},g)},k.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(l=y({role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,key:e,ref:e=>T.push(e),onKeyDown:S,onClick:x},n),i={className:(0,r.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":j===e})},d(l,m(i))),null!=t?t:e);var l,i}))),l?(0,a.cloneElement)(h.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function k(e){const t=(0,l.Z)();return a.createElement(h,y({key:String(t)},e))}},767207:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return b},default:function(){return k},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return y}});var a=n(603905),r=n(751361),l=n(440034),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&d(e,n,t[n]);return e};const f={id:"pages",title:"Pages",sidebar_label:"Pages"},b=void 0,v={unversionedId:"pages",id:"pages",title:"Pages",description:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 ISLE-\u043f\u0430\u0433\u0438\u043d\u0430\u0446\u0438\u0438, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0438\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u043f\u0440\u043e\u0439\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/pages.md",sourceDirName:".",slug:"/pages",permalink:"/ru/docs/pages",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/pages.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633715852,formattedLastUpdatedAt:"8 \u043e\u043a\u0442. 2021 \u0433.",frontMatter:{id:"pages",title:"Pages",sidebar_label:"Pages"},sidebar:"docs",previous:{title:"IFrame",permalink:"/ru/docs/iframe"},next:{title:"Panel",permalink:"/ru/docs/panel"}},g={},y=[{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],h={toc:y};function k(e){var t,n=e,{components:i}=n,d=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},h),d),o(t,u({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 ISLE-\u043f\u0430\u0433\u0438\u043d\u0430\u0446\u0438\u0438, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0438\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u043f\u0440\u043e\u0439\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446."),(0,a.kt)("h2",m({},{id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"}),"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"activePage")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u0430\u043a\u0442\u0438\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"disabled")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u0442\u0435\u043c, \u0430\u043a\u0442\u0438\u0432\u043d\u0430 \u0438\u043b\u0438 \u043d\u0435\u0442 \u043f\u0430\u043d\u0435\u043b\u044c \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"title")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u043c\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"pagination")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043b\u0438 \u043f\u0430\u0433\u0438\u043d\u0430\u0446\u0438\u044e \u043d\u0430 ",(0,a.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"bottom"),", \u0438\u043b\u0438 \u043d\u0430 ",(0,a.kt)("inlineCode",{parentName:"li"},"both"),". Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'top'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"size")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \u0440\u0430\u0437\u043c\u0435\u0440 \u043a\u043d\u043e\u043f\u043e\u043a \u043d\u0443\u043c\u0435\u0440\u0430\u0446\u0438\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 (\u043b\u0438\u0431\u043e ",(0,a.kt)("inlineCode",{parentName:"li"},"default"),", \u043b\u0438\u0431\u043e ",(0,a.kt)("inlineCode",{parentName:"li"},"lg"),", \u043b\u0438\u0431\u043e ",(0,a.kt)("inlineCode",{parentName:"li"},"sm"),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'default'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"height")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(number|string)"),": \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u044b\u0441\u043e\u0442\u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430. \u0415\u0441\u043b\u0438 \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0432\u044b\u0448\u0435, \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u0430\u044f \u043f\u043e\u043b\u043e\u0441\u0430 \u043f\u0440\u043e\u043a\u0440\u0443\u0442\u043a\u0438. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0438\u043b\u0438 CSS. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onSelect")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": \u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f. \u041f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u043d\u043e\u0432\u044b\u0439 \u0438\u043d\u0434\u0435\u043a\u0441 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onSelect() {}"),".")),(0,a.kt)("h2",m({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,a.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Custom Pagination",value:"customPagination"},{label:"With CSS",value:"withCSS"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Pages title="Pages" >\n    <div>\n        <h1>First Page</h1>\n    </div>\n    <div>\n        <h1>Second Page</h1>\n    </div>\n    <div>\n        <h1>Third Page</h1>\n    </div>\n</Pages>\n'))),(0,a.kt)(l.Z,{value:"customPagination",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Pages title="Questions" pagination="both" size="sm" >\n    <div>\n        <NumberQuestion\n            question="What is the number PI (at least up to three digits after the decimal point)?"\n            solution={Math.PI}\n            digits={3}\n        />\n    </div>\n    <div>\n        <FreeTextQuestion \n            question="Is this question displayed on the second page?"\n            solution="Yes" \n        />\n    </div>\n</Pages>\n'))),(0,a.kt)(l.Z,{value:"withCSS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Pages \n    activePage={2}\n    style={{ background: 'lightblue', height: 420, outline: '4px solid black' }} \n    title=\"Styled Pages\"\n>\n    <div>\n        <h1>First Page</h1>\n    </div>\n    <div>\n        <h1>Second Page</h1>\n    </div>\n    <div>\n        <h1>Third Page</h1>\n    </div>\n</Pages>\n")))))}k.isMDXComponent=!0}}]);