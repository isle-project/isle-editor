"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[45088],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(202784);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=l,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(202784),l=n(386010),a="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function p({children:e,hidden:t,className:n}){return r.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&c(e,n,t[n]);return e})({role:"tabpanel",className:(0,l.Z)(a,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(202784),l=n(386010),a=n(152670),i=n(258433),o=n(952326),u=n(638849),s="tabList__CuJ",c="tabItem_LNqP",p=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&v(e,n,t[n]);if(f)for(var n of f(t))g.call(t,n)&&v(e,n,t[n]);return e};function y(e){var t,n;const{lazy:a,block:p,defaultValue:f,values:b,groupId:g,className:v}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=b?b:y.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),N=(0,i.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===f?f:null!=(n=null!=f?f:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?n:y[0].props.value;if(null!==O&&!h.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:x,setTabGroupChoices:T}=(0,o.U)(),[w,j]=(0,r.useState)(O),C=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=g){const e=x[g];null!=e&&e!==w&&h.some((t=>t.value===e))&&j(e)}const P=e=>{const t=e.currentTarget,n=C.indexOf(t),r=h[n].value;r!==w&&(E(t),j(r),null!=g&&T(g,String(r)))},S=e=>{var t,n;let r=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;r=null!=(t=C[n])?t:C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;r=null!=(n=C[t])?n:C[C.length-1];break}}null==r||r.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},v)},h.map((({value:e,label:t,attributes:n})=>{return r.createElement("li",(a=k({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>C.push(e),onKeyDown:S,onClick:P},n),i={className:(0,l.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":w===e})},d(a,m(i))),null!=t?t:e);var a,i}))),a?(0,r.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function h(e){const t=(0,a.Z)();return r.createElement(y,k({key:String(t)},e))}},36204:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return b},default:function(){return h},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return k}});var r=n(603905),l=n(751361),a=n(440034),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&d(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&d(e,n,t[n]);return e};const f={id:"scrolling-text",title:"Scrolling Text",sidebar_label:"Scrolling Text"},b=void 0,g={unversionedId:"scrolling-text",id:"scrolling-text",title:"Scrolling Text",description:"Eine dynamische Hintergrundkomponente, die in einem festgelegten Intervall eine Liste von Texten durchl\xe4uft.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/scrolling-text.md",sourceDirName:".",slug:"/scrolling-text",permalink:"/de/docs/scrolling-text",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/scrolling-text.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621312042,formattedLastUpdatedAt:"18. Mai 2021",frontMatter:{id:"scrolling-text",title:"Scrolling Text",sidebar_label:"Scrolling Text"},sidebar:"docs",previous:{title:"Polaroid",permalink:"/de/docs/polaroid"},next:{title:"Slider",permalink:"/de/docs/slider"}},v={},k=[{value:"Optionen",id:"optionen",level:2},{value:"Beispiele",id:"beispiele",level:2}],y={toc:k};function h(e){var t,n=e,{components:i}=n,d=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},y),d),o(t,u({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Eine dynamische Hintergrundkomponente, die in einem festgelegten Intervall eine Liste von Texten durchl\xe4uft."),(0,r.kt)("h2",m({},{id:"optionen"}),"Optionen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"text")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|array<string>)"),": Text oder Liste von Texten, die angezeigt werden sollen. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"loop")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": gibt an, ob der Prozess unendlich angezeigt werden soll. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"direction")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": die Richtung des Textflusses (entweder ",(0,r.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"right"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"bottom"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"verfolgen"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"fokussieren")," oder ",(0,r.kt)("inlineCode",{parentName:"li"},"wirbeln"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'right'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hold")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": die Zeit, die der Text stillsteht (in Sekunden). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"wait")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": die Zeit bis zum Eintreffen eines neuen Textes (in Sekunden). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"3"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inTime")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": Zeit des Eintrittseffekts (in Sekunden). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"outTime")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": Zeit des Ausgangseffekts (in Sekunden). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"className")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": Klassenname. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS-Stile des Textes. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,r.kt)("h2",m({},{id:"beispiele"}),"Beispiele"),(0,r.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"List of Texts",value:"list"},{label:"Background Image",value:"backgroundImage"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<ScrollingText\n    text=\"This is a text re-appearing every five seconds\"\n    style={{ fontSize: 44, color: 'blue' }}\n    wait={5}\n    hold={2}\n    loop\n/>\n"))),(0,r.kt)(a.Z,{value:"list",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<ScrollingText\n    text={[ 'One', 'Two', 'Three', 'Four'  ]}\n    style={{ fontSize: 84, color: 'red', textAlign: 'center' }}\n    loop\n    direction=\"left\"\n    wait={.5}\n    hold={2}\n/>\n"))),(0,r.kt)(a.Z,{value:"backgroundImage",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<ScrollingText\n    text={[ 'One', 'Two', 'Three', 'Four'  ]}\n    style={{ fontSize: 84, color: 'white', textAlign: 'center', backgroundImage: 'url(https://bit.ly/3qlRgoR)', backgroundSize: '1200px 200px' }}\n    loop\n    direction=\"left\"\n    wait={.5}\n    hold={2}\n/>\n")))))}h.isMDXComponent=!0}}]);