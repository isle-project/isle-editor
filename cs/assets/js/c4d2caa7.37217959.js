"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46210],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(202784),a=n(386010),l="tabItem_Ymn6",o=Object.defineProperty,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function p({children:e,hidden:t,className:n}){return r.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&c(e,n,t[n]);return e})({role:"tabpanel",className:(0,a.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(202784),a=n(386010),l=n(152670),o=n(258433),i=n(952326),u=n(638849),s="tabList__CuJ",c="tabItem_LNqP",p=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&k(e,n,t[n]);if(f)for(var n of f(t))v.call(t,n)&&k(e,n,t[n]);return e};function y(e){var t,n;const{lazy:l,block:p,defaultValue:f,values:b,groupId:v,className:k}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=b?b:y.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),N=(0,o.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===f?f:null!=(n=null!=f?f:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?n:y[0].props.value;if(null!==O&&!h.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:x,setTabGroupChoices:w}=(0,i.U)(),[j,T]=(0,r.useState)(O),C=[],{blockElementScrollPositionUntilNextRender:P}=(0,u.o5)();if(null!=v){const e=x[v];null!=e&&e!==j&&h.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,n=C.indexOf(t),r=h[n].value;r!==j&&(P(t),T(r),null!=v&&w(v,String(r)))},D=e=>{var t,n;let r=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;r=null!=(t=C[n])?t:C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;r=null!=(n=C[t])?n:C[C.length-1];break}}null==r||r.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},k)},h.map((({value:e,label:t,attributes:n})=>{return r.createElement("li",(l=g({role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,key:e,ref:e=>C.push(e),onKeyDown:D,onClick:E},n),o={className:(0,a.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":j===e})},m(l,d(o))),null!=t?t:e);var l,o}))),l?(0,r.cloneElement)(y.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function h(e){const t=(0,l.Z)();return r.createElement(y,g({key:String(t)},e))}},788102:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return b},default:function(){return h},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return g}});var r=n(603905),a=n(751361),l=n(440034),o=Object.defineProperty,i=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&m(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&m(e,n,t[n]);return e};const f={id:"scrolling-text",title:"Scrolling Text",sidebar_label:"Scrolling Text"},b=void 0,v={unversionedId:"scrolling-text",id:"scrolling-text",title:"Scrolling Text",description:"Dynamick\xe1 komponenta na pozad\xed, kter\xe1 v zadan\xe9m intervalu cykluje seznam text\u016f.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/scrolling-text.md",sourceDirName:".",slug:"/scrolling-text",permalink:"/cs/docs/scrolling-text",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/scrolling-text.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19. 6. 2021",frontMatter:{id:"scrolling-text",title:"Scrolling Text",sidebar_label:"Scrolling Text"},sidebar:"docs",previous:{title:"Polaroid",permalink:"/cs/docs/polaroid"},next:{title:"Slider",permalink:"/cs/docs/slider"}},k={},g=[{value:"Mo\u017enosti",id:"mo\u017enosti",level:2},{value:"P\u0159\xedklady",id:"p\u0159\xedklady",level:2}],y={toc:g};function h(e){var t,n=e,{components:o}=n,m=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},y),m),i(t,u({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Dynamick\xe1 komponenta na pozad\xed, kter\xe1 v zadan\xe9m intervalu cykluje seznam text\u016f."),(0,r.kt)("h2",d({},{id:"mo\u017enosti"}),"Mo\u017enosti"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"text")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|array<string>)"),": text nebo seznam text\u016f, kter\xe9 se maj\xed zobrazit. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"loop")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": ur\u010duje, zda se proces m\xe1 zobrazovat nekone\u010dn\u011b dlouho.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"direction")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": sm\u011br toku textu (bu\u010f ",(0,r.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"right"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"nahoru"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"dol\u016f"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"sledov\xe1n\xed"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ost\u0159en\xed")," nebo ",(0,r.kt)("inlineCode",{parentName:"li"},"vln\u011bn\xed"),").. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'right'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hold")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": doba, po kterou text z\u016fstane v klidu (v sekund\xe1ch). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"wait")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": doba, ne\u017e p\u0159ijde nov\xe1 zpr\xe1va (v sekund\xe1ch).. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"3"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inTime")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": \u010das vstupn\xedho efektu (v sekund\xe1ch). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"outTime")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": \u010das v\xfdstupn\xedho efektu (v sekund\xe1ch). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"className")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": n\xe1zev t\u0159\xeddy. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS styly textu. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,r.kt)("h2",d({},{id:"p\u0159\xedklady"}),"P\u0159\xedklady"),(0,r.kt)(a.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"List of Texts",value:"list"},{label:"Background Image",value:"backgroundImage"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<ScrollingText\n    text=\"This is a text re-appearing every five seconds\"\n    style={{ fontSize: 44, color: 'blue' }}\n    wait={5}\n    hold={2}\n    loop\n/>\n"))),(0,r.kt)(l.Z,{value:"list",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<ScrollingText\n    text={[ 'One', 'Two', 'Three', 'Four'  ]}\n    style={{ fontSize: 84, color: 'red', textAlign: 'center' }}\n    loop\n    direction=\"left\"\n    wait={.5}\n    hold={2}\n/>\n"))),(0,r.kt)(l.Z,{value:"backgroundImage",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<ScrollingText\n    text={[ 'One', 'Two', 'Three', 'Four'  ]}\n    style={{ fontSize: 84, color: 'white', textAlign: 'center', backgroundImage: 'url(https://bit.ly/3qlRgoR)', backgroundSize: '1200px 200px' }}\n    loop\n    direction=\"left\"\n    wait={.5}\n    hold={2}\n/>\n")))))}h.isMDXComponent=!0}}]);