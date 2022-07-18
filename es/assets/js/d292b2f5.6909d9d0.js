"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22596],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(202784),r=n(386010),i="tabItem_Ymn6",l=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function p({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&c(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(i,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(202784),r=n(386010),i=n(152670),l=n(258433),o=n(952326),s=n(638849),u="tabList__CuJ",c="tabItem_LNqP",p=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&v(e,n,t[n]);if(f)for(var n of f(t))g.call(t,n)&&v(e,n,t[n]);return e};function h(e){var t,n;const{lazy:i,block:p,defaultValue:f,values:b,groupId:g,className:v}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=null!=b?b:h.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),N=(0,l.l)(k,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===f?f:null!=(n=null!=f?f:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?n:h[0].props.value;if(null!==O&&!k.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:P,setTabGroupChoices:j}=(0,o.U)(),[w,C]=(0,a.useState)(O),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=g){const e=P[g];null!=e&&e!==w&&k.some((t=>t.value===e))&&C(e)}const x=e=>{const t=e.currentTarget,n=E.indexOf(t),a=k[n].value;a!==w&&(T(t),C(a),null!=g&&j(g,String(a)))},S=e=>{var t,n;let a=null;switch(e.key){case"ArrowRight":{const n=E.indexOf(e.currentTarget)+1;a=null!=(t=E[n])?t:E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;a=null!=(n=E[t])?n:E[E.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},v)},k.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(i=y({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>E.push(e),onKeyDown:S,onFocus:x,onClick:x},n),l={className:(0,r.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":w===e})},d(i,m(l))),null!=t?t:e);var i,l}))),i?(0,a.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function k(e){const t=(0,i.Z)();return a.createElement(h,y({key:String(t)},e))}},987991:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return b},default:function(){return k},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return y}});var a=n(603905),r=n(751361),i=n(440034),l=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&d(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&d(e,n,t[n]);return e};const f={id:"pages",title:"Pages",sidebar_label:"Pages"},b=void 0,g={unversionedId:"pages",id:"pages",title:"Pages",description:"Un componente de paginaci\xf3n ISLE que permite al usuario pasar por una secuencia de p\xe1ginas.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/pages.md",sourceDirName:".",slug:"/pages",permalink:"/es/docs/pages",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/pages.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633715852,formattedLastUpdatedAt:"8 oct 2021",frontMatter:{id:"pages",title:"Pages",sidebar_label:"Pages"},sidebar:"docs",previous:{title:"IFrame",permalink:"/es/docs/iframe"},next:{title:"Panel",permalink:"/es/docs/panel"}},v={},y=[{value:"Opciones",id:"opciones",level:2},{value:"Ejemplos",id:"ejemplos",level:2}],h={toc:y};function k(e){var t,n=e,{components:l}=n,d=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},h),d),o(t,s({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Un componente de paginaci\xf3n ISLE que permite al usuario pasar por una secuencia de p\xe1ginas."),(0,a.kt)("h2",m({},{id:"opciones"}),"Opciones"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"activePage")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": p\xe1gina activa. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"disabled")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": controla si la barra de navegaci\xf3n est\xe1 activa o no. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"title")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|node)"),": t\xedtulo mostrado de las p\xe1ginas contenedor. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"pagination")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": si mostrar la paginaci\xf3n en la ",(0,a.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"bottom"),", o ",(0,a.kt)("inlineCode",{parentName:"li"},"both"),". Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'top'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"size")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": tama\xf1o de los botones de paginaci\xf3n (ya sea ",(0,a.kt)("inlineCode",{parentName:"li"},"default"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"lg"),", o ",(0,a.kt)("inlineCode",{parentName:"li"},"sm"),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'default'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"height")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(number|string)"),": la altura m\xe1xima del contenedor. Si una p\xe1gina incrustada es m\xe1s alta, se a\xf1ade una barra de desplazamiento vertical. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": Estilos en l\xednea CSS. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onSelect")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": Funci\xf3n invocada cuando se cambia el cambio activo. Recibe el nuevo \xedndice de p\xe1ginas activas como \xfanico par\xe1metro. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onSelect() {}"),".")),(0,a.kt)("h2",m({},{id:"ejemplos"}),"Ejemplos"),(0,a.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Custom Pagination",value:"customPagination"},{label:"With CSS",value:"withCSS"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Pages title="Pages" >\n    <div>\n        <h1>First Page</h1>\n    </div>\n    <div>\n        <h1>Second Page</h1>\n    </div>\n    <div>\n        <h1>Third Page</h1>\n    </div>\n</Pages>\n'))),(0,a.kt)(i.Z,{value:"customPagination",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Pages title="Questions" pagination="both" size="sm" >\n    <div>\n        <NumberQuestion\n            question="What is the number PI (at least up to three digits after the decimal point)?"\n            solution={Math.PI}\n            digits={3}\n        />\n    </div>\n    <div>\n        <FreeTextQuestion \n            question="Is this question displayed on the second page?"\n            solution="Yes" \n        />\n    </div>\n</Pages>\n'))),(0,a.kt)(i.Z,{value:"withCSS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Pages \n    activePage={2}\n    style={{ background: 'lightblue', height: 420, outline: '4px solid black' }} \n    title=\"Styled Pages\"\n>\n    <div>\n        <h1>First Page</h1>\n    </div>\n    <div>\n        <h1>Second Page</h1>\n    </div>\n    <div>\n        <h1>Third Page</h1>\n    </div>\n</Pages>\n")))))}k.isMDXComponent=!0}}]);