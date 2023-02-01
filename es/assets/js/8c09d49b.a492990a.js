"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51665],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(202784);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=l,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(202784),l=n(386010),a="tabItem_Ymn6",o=Object.defineProperty,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function p({children:e,hidden:t,className:n}){return r.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&c(e,n,t[n]);return e})({role:"tabpanel",className:(0,l.Z)(a,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return N}});var r=n(202784),l=n(386010),a=n(152670),o=n(258433),i=n(952326),u=n(638849),s="tabList__CuJ",c="tabItem_LNqP",p=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&v(e,n,t[n]);if(f)for(var n of f(t))g.call(t,n)&&v(e,n,t[n]);return e};function k(e){var t,n;const{lazy:a,block:p,defaultValue:f,values:b,groupId:g,className:v}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=b?b:k.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),h=(0,o.l)(N,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===f?f:null!=(n=null!=f?f:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?n:k[0].props.value;if(null!==O&&!N.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:x,setTabGroupChoices:w}=(0,i.U)(),[j,T]=(0,r.useState)(O),C=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=g){const e=x[g];null!=e&&e!==j&&N.some((t=>t.value===e))&&T(e)}const P=e=>{const t=e.currentTarget,n=C.indexOf(t),r=N[n].value;r!==j&&(E(t),T(r),null!=g&&w(g,String(r)))},S=e=>{var t,n;let r=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;r=null!=(t=C[n])?t:C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;r=null!=(n=C[t])?n:C[C.length-1];break}}null==r||r.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},v)},N.map((({value:e,label:t,attributes:n})=>{return r.createElement("li",(a=y({role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,key:e,ref:e=>C.push(e),onKeyDown:S,onClick:P},n),o={className:(0,l.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":j===e})},m(a,d(o))),null!=t?t:e);var a,o}))),a?(0,r.cloneElement)(k.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function N(e){const t=(0,a.Z)();return r.createElement(k,y({key:String(t)},e))}},324782:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return b},default:function(){return N},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return y}});var r=n(603905),l=n(751361),a=n(440034),o=Object.defineProperty,i=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&m(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&m(e,n,t[n]);return e};const f={id:"scrolling-text",title:"Scrolling Text",sidebar_label:"Scrolling Text"},b=void 0,g={unversionedId:"scrolling-text",id:"scrolling-text",title:"Scrolling Text",description:"Un componente de fondo din\xe1mico que circula por una lista de textos en un intervalo determinado.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/scrolling-text.md",sourceDirName:".",slug:"/scrolling-text",permalink:"/es/docs/scrolling-text",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/scrolling-text.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19 jun 2021",frontMatter:{id:"scrolling-text",title:"Scrolling Text",sidebar_label:"Scrolling Text"},sidebar:"docs",previous:{title:"Polaroid",permalink:"/es/docs/polaroid"},next:{title:"Slider",permalink:"/es/docs/slider"}},v={},y=[{value:"Opciones",id:"opciones",level:2},{value:"Ejemplos",id:"ejemplos",level:2}],k={toc:y};function N(e){var t,n=e,{components:o}=n,m=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},k),m),i(t,u({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Un componente de fondo din\xe1mico que circula por una lista de textos en un intervalo determinado."),(0,r.kt)("h2",d({},{id:"opciones"}),"Opciones"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"text")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|array<string>)"),": texto o lista de textos a mostrar. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"loop")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": indica si el proceso se mostrar\xe1 infinitamente. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"direction")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": la direcci\xf3n del flujo de texto (ya sea ",(0,r.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"right"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"bottom"),', "seguimiento", "enfoque", o "giro"). Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"'right'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hold")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": el tiempo que el texto permanece inm\xf3vil (en segundos). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"wait")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": el tiempo antes de que llegue un nuevo texto (en segundos). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"3"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inTime")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": tiempo del efecto de entrada (en segundos). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"outTime")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": tiempo del efecto de salida (en segundos). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"className")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": nombre de la clase. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": Estilos CSS del texto. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,r.kt)("h2",d({},{id:"ejemplos"}),"Ejemplos"),(0,r.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"List of Texts",value:"list"},{label:"Background Image",value:"backgroundImage"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<ScrollingText\n    text=\"This is a text re-appearing every five seconds\"\n    style={{ fontSize: 44, color: 'blue' }}\n    wait={5}\n    hold={2}\n    loop\n/>\n"))),(0,r.kt)(a.Z,{value:"list",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<ScrollingText\n    text={[ 'One', 'Two', 'Three', 'Four'  ]}\n    style={{ fontSize: 84, color: 'red', textAlign: 'center' }}\n    loop\n    direction=\"left\"\n    wait={.5}\n    hold={2}\n/>\n"))),(0,r.kt)(a.Z,{value:"backgroundImage",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<ScrollingText\n    text={[ 'One', 'Two', 'Three', 'Four'  ]}\n    style={{ fontSize: 84, color: 'white', textAlign: 'center', backgroundImage: 'url(https://bit.ly/3qlRgoR)', backgroundSize: '1200px 200px' }}\n    loop\n    direction=\"left\"\n    wait={.5}\n    hold={2}\n/>\n")))))}N.isMDXComponent=!0}}]);