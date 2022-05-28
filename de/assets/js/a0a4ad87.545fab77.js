"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8214],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,b=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(202784),a=n(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return r.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,a.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(202784),a=n(386010),l=n(152670),i=n(258433),o=n(952326),u=n(638849),s="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&k(e,n,t[n]);if(b)for(var n of b(t))v.call(t,n)&&k(e,n,t[n]);return e};function y(e){var t,n;const{lazy:l,block:c,defaultValue:b,values:f,groupId:v,className:k}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=f?f:y.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),N=(0,i.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const x=null===b?b:null!=(n=null!=b?b:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?n:y[0].props.value;if(null!==x&&!h.some((e=>e.value===x)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${x}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:O}=(0,o.U)(),[C,T]=(0,r.useState)(x),j=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=v){const e=w[v];null!=e&&e!==C&&h.some((t=>t.value===e))&&T(e)}const P=e=>{const t=e.currentTarget,n=j.indexOf(t),r=h[n].value;r!==C&&(E(t),T(r),null!=v&&O(v,String(r)))},D=e=>{var t,n;let r=null;switch(e.key){case"ArrowRight":{const n=j.indexOf(e.currentTarget)+1;r=null!=(t=j[n])?t:j[0];break}case"ArrowLeft":{const t=j.indexOf(e.currentTarget)-1;r=null!=(n=j[t])?n:j[j.length-1];break}}null==r||r.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":c},k)},h.map((({value:e,label:t,attributes:n})=>{return r.createElement("li",(l=g({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>j.push(e),onKeyDown:D,onFocus:P,onClick:P},n),i={className:(0,a.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":C===e})},d(l,m(i))),null!=t?t:e);var l,i}))),l?(0,r.cloneElement)(y.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function h(e){const t=(0,l.Z)();return r.createElement(y,g({key:String(t)},e))}},339013:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return f},default:function(){return x},frontMatter:function(){return b},metadata:function(){return v},toc:function(){return g}});var r=n(603905),a=n(751361),l=n(440034),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&d(e,n,t[n]);return e};const b={id:"text-area",title:"Text Area",sidebar_label:"Text Area"},f=void 0,v={unversionedId:"input/text-area",id:"input/text-area",title:"Text Area",description:"Eine Textbereichskomponente. Wird sie als eigenst\xe4ndige Komponente verwendet, sollten \xc4nderungen \xfcber das Attribut onChange behandelt werden.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/input/text-area.md",sourceDirName:"input",slug:"/input/text-area",permalink:"/de/docs/input/text-area",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/text-area.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614811488,formattedLastUpdatedAt:"3.3.2021",frontMatter:{id:"text-area",title:"Text Area",sidebar_label:"Text Area"},sidebar:"docs",previous:{title:"Slider Input",permalink:"/de/docs/input/slider-input"},next:{title:"Text Input",permalink:"/de/docs/input/text-input"}},k={},g=[{value:"Optionen",id:"optionen",level:2},{value:"Beispiele",id:"beispiele",level:2},{value:"Examples",id:"examples",level:2}],y=(h="TextArea",function(e){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",m({},e))});var h;const N={toc:g};function x(e){var t,n=e,{components:i}=n,d=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},N),d),o(t,u({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Eine Textbereichskomponente. Wird sie als eigenst\xe4ndige Komponente verwendet, sollten \xc4nderungen \xfcber das Attribut ",(0,r.kt)("inlineCode",{parentName:"p"},"onChange")," behandelt werden."),(0,r.kt)("h2",m({},{id:"optionen"}),"Optionen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": Standardwert des Textbereichs. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"value")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": Textwert (f\xfcr gesteuerte Komponente). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disabled")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob der Textbereich deaktiviert werden soll. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legend")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": Legendentext. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onBlur")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": Callback-Funktion, die aufgerufen wird, wenn der Textbereich den Fokus verliert. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onBlur() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChange")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": Callback-Funktion, die mit dem neuen Text aufgerufen wird, wenn sich der Bereichstext \xe4ndert. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"placeholder")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": Platzhaltertext. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"resizable")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": steuert, ob der Textbereich in der Gr\xf6\xdfe ver\xe4nderbar sein soll (kann entweder ",(0,r.kt)("inlineCode",{parentName:"li"},"beide"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"horizontal"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"vertikal")," oder ",(0,r.kt)("inlineCode",{parentName:"li"},"keine")," sein). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'none'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"rows")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": Anzahl der Zeilen. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS-Inline-Stile. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,r.kt)("h2",m({},{id:"beispiele"}),"Beispiele"),(0,r.kt)("h2",m({},{id:"examples"}),"Examples"),(0,r.kt)(a.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Custom Style",value:"customStyle"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<TextArea\n    legend="Please enter a few sentences"\n    placeholder="Enter text"\n/>\n'))),(0,r.kt)(l.Z,{value:"customStyle",mdxType:"TabItem"},(0,r.kt)(y,{legend:"Please enter a few sentences",placeholder:"Enter text",style:{fontSize:33,fontFamily:"Georgia",boxShadow:"0 0 4px black",background:"rgb(238,174,202)",background:"radial-gradient(circle, rgba(255, 255, 0, 0.3) 44%, white 100%)"},mdxType:"TextArea"}))))}x.isMDXComponent=!0}}]);