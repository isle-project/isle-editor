"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[72030],{603905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(202784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},440034:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(202784),r=a(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function m({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&p(e,a,t[a]);if(o)for(var a of o(t))u.call(t,a)&&p(e,a,t[a]);return e})({role:"tabpanel",className:(0,r.Z)(l,a)},{hidden:t}),e)}},751361:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(202784),r=a(386010),l=a(152670),i=a(258433),o=a(952326),s=a(638849),u="tabList__CuJ",p="tabItem_LNqP",m=Object.defineProperty,c=Object.defineProperties,d=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,v=(e,t,a)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))k.call(t,a)&&v(e,a,t[a]);if(f)for(var a of f(t))b.call(t,a)&&v(e,a,t[a]);return e};function g(e){var t,a;const{lazy:l,block:m,defaultValue:f,values:k,groupId:b,className:v}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=k?k:g.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),h=(0,i.l)(N,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const j=null===f?f:null!=(a=null!=f?f:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?a:g[0].props.value;if(null!==j&&!N.some((e=>e.value===j)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${j}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:O,setTabGroupChoices:w}=(0,o.U)(),[C,T]=(0,n.useState)(j),E=[],{blockElementScrollPositionUntilNextRender:P}=(0,s.o5)();if(null!=b){const e=O[b];null!=e&&e!==C&&N.some((t=>t.value===e))&&T(e)}const x=e=>{const t=e.currentTarget,a=E.indexOf(t),n=N[a].value;n!==C&&(P(t),T(n),null!=b&&w(b,String(n)))},D=e=>{var t,a;let n=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const a=E.indexOf(e.currentTarget)+1;n=null!=(t=E[a])?t:E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=null!=(a=E[t])?a:E[E.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},v)},N.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(l=y({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>E.push(e),onKeyDown:D,onClick:x},a),i={className:(0,r.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":C===e})},c(l,d(i))),null!=t?t:e);var l,i}))),l?(0,n.cloneElement)(g.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function N(e){const t=(0,l.Z)();return n.createElement(g,y({key:String(t)},e))}},909759:function(e,t,a){a.r(t),a.d(t,{assets:function(){return v},contentTitle:function(){return k},default:function(){return N},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return y}});var n=a(603905),r=a(751361),l=a(440034),i=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&c(e,a,t[a]);if(u)for(var a of u(t))m.call(t,a)&&c(e,a,t[a]);return e};const f={id:"gate",title:"Gate",sidebar_label:"Gate"},k=void 0,b={unversionedId:"gate",id:"gate",title:"Gate",description:"ISLE komponents, kas \u013cauj par\u0101d\u012bt savus b\u0113rnus tikai rezerv\u0113tai auditorijai.",source:"@site/i18n/lv/docusaurus-plugin-content-docs/current/gate.md",sourceDirName:".",slug:"/gate",permalink:"/lv/docs/gate",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/gate.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1650476171,formattedLastUpdatedAt:"2022. g. 20. apr.",frontMatter:{id:"gate",title:"Gate",sidebar_label:"Gate"},sidebar:"docs",previous:{title:"Feedback Buttons",permalink:"/lv/docs/feedback"},next:{title:"Text Editor",permalink:"/lv/docs/text-editor"}},v={},y=[{value:"Iesp\u0113jas",id:"iesp\u0113jas",level:2},{value:"Piem\u0113ri",id:"piem\u0113ri",level:2}],g={toc:y};function N(e){var t,a=e,{components:i}=a,c=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&m.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=d(d({},g),c),o(t,s({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"ISLE komponents, kas \u013cauj par\u0101d\u012bt savus b\u0113rnus tikai rezerv\u0113tai auditorijai."),(0,n.kt)("h2",d({},{id:"iesp\u0113jas"}),"Iesp\u0113jas"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"user")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kad iestat\u012bts, lietot\u0101jiem tiek r\u0101d\u012bts saturs ar v\u0101rtiem.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"notUser")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kad iestat\u012bts, aizsarg\u0101tais saturs lietot\u0101jiem netiek ",(0,n.kt)("strong",{parentName:"li"},"atr\u0101d\u012bts"),".. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"enrolled")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kad iestat\u012bts, saturs ar v\u0101rtiem tiek par\u0101d\u012bts kurs\u0101 re\u0123istr\u0113tajiem studentiem.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"notEnrolled")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": ja iestat\u012bts, saturs ar v\u0101rtiem ",(0,n.kt)("strong",{parentName:"li"},"nepar\u0101d\u0101s")," kurs\u0101 re\u0123istr\u0113tajiem studentiem.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"owner")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kad tas ir iestat\u012bts, sl\u0113gtais saturs tiek par\u0101d\u012bts kursa \u012bpa\u0161niekam (parasti pasniedz\u0113jam).. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"notOwner")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kad iestat\u012bts, saturs ar v\u0101rtiem netiek par\u0101d\u012bts kursa \u012bpa\u0161niekam (parasti pasniedz\u0113jam).. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"after")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"Date"),": laiks, p\u0113c kura v\u0101rtu saturam j\u0101k\u013c\u016bst redzamam.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"until")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"Date"),": laiks, l\u012bdz v\u0101rtu saturs paliek redzams.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"banner")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"node"),": piel\u0101gotu zi\u0146ojumu, kas tiek r\u0101d\u012bts apmekl\u0113t\u0101jiem, kuriem v\u0101rtu b\u0113rni nav redzami, nevis noklus\u0113juma zi\u0146ojumu.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"disabled")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": ja v\u0101rti ir atsp\u0113joti, baneris tiks par\u0101d\u012bts neatkar\u012bgi no t\u0101, kas notiek.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"showOwnerInPresentationMode")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrol\u0113, vai par\u0101d\u012bt v\u0101rtu saturu prezent\u0101cijas re\u017e\u012bm\u0101, kad v\u0101rti ir redzami ",(0,n.kt)("inlineCode",{parentName:"li"},"\u012bpa\u0161niekam"),".. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"check")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": atgriezenisk\u0101 zvana funkcija, kas atgrie\u017e ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),", nor\u0101dot, vai v\u0101rtiem ir j\u0101par\u0101da b\u0113rnu komponenti; funkcija tiek izsaukta, kad vienreiz pien\u0101k sesijas darb\u012bbas.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,n.kt)("h2",d({},{id:"piem\u0113ri"}),"Piem\u0113ri"),(0,n.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Timed",value:"timed"},{label:"Hidden",value:"hidden"},{label:"Custom Banner",value:"customBanner"},{label:"Custom Check",value:"customCheck"}],lazy:!0,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Gate enrolled >\n    <h1>Content for users enrolled in a cohort of the course</h1>\n</Gate>\n"))),(0,n.kt)(l.Z,{value:"timed",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Gate\n    after={date({ year: 2020, month: 9, day: 1, hour: 9, minute: 30, second: 0, utcOffset: 4 })}\n    until={date({ year: 2020, month: 12, day: 20, hour: 9, minute: 30, second: 0, utcOffset: 5 })}\n>\n    # Only visible in Fall 2020 semester\n</Gate>\n"))),(0,n.kt)(l.Z,{value:"hidden",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Gate banner={null} owner >\n    <h1>Content for owners without a message for others</h1>\n</Gate>\n"))),(0,n.kt)(l.Z,{value:"customBanner",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Gate owner banner={<h3>Only visible by course owners...</h3>} >\n    <h1> User Analytics </h1>\n</Gate>\n"))),(0,n.kt)(l.Z,{value:"customCheck",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Gate check={( ) => {\n    return session.user.email === 'admin@cmu.edu';\n}} >\n    <h1> User Analytics only visible to specified user</h1>\n</Gate>\n")))))}N.isMDXComponent=!0}}]);