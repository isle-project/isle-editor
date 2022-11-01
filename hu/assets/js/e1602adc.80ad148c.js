"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62598],{603905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(202784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=s(a),d=r,k=p["".concat(u,".").concat(d)]||p[d]||c[d]||l;return a?n.createElement(k,o(o({ref:t},m),{},{components:a})):n.createElement(k,o({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},440034:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(202784),r=a(386010),l="tabItem_Ymn6",o=Object.defineProperty,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function c({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))u.call(t,a)&&m(e,a,t[a]);if(i)for(var a of i(t))s.call(t,a)&&m(e,a,t[a]);return e})({role:"tabpanel",className:(0,r.Z)(l,a)},{hidden:t}),e)}},751361:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(202784),r=a(386010),l=a(152670),o=a(258433),i=a(952326),u=a(638849),s="tabList__CuJ",m="tabItem_LNqP",c=Object.defineProperty,p=Object.defineProperties,d=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,v=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,g=(e,t)=>{for(var a in t||(t={}))f.call(t,a)&&v(e,a,t[a]);if(k)for(var a of k(t))b.call(t,a)&&v(e,a,t[a]);return e};function y(e){var t,a;const{lazy:l,block:c,defaultValue:k,values:f,groupId:b,className:v}=e,y=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=f?f:y.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),N=(0,o.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===k?k:null!=(a=null!=k?k:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?a:y[0].props.value;if(null!==O&&!h.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:j,setTabGroupChoices:w}=(0,i.U)(),[z,C]=(0,n.useState)(O),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=b){const e=j[b];null!=e&&e!==z&&h.some((t=>t.value===e))&&C(e)}const P=e=>{const t=e.currentTarget,a=E.indexOf(t),n=h[a].value;n!==z&&(T(t),C(n),null!=b&&w(b,String(n)))},x=e=>{var t,a;let n=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const a=E.indexOf(e.currentTarget)+1;n=null!=(t=E[a])?t:E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=null!=(a=E[t])?a:E[E.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",s)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},v)},h.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(l=g({role:"tab",tabIndex:z===e?0:-1,"aria-selected":z===e,key:e,ref:e=>E.push(e),onKeyDown:x,onClick:P},a),o={className:(0,r.Z)("tabs__item",m,null==a?void 0:a.className,{"tabs__item--active":z===e})},p(l,d(o))),null!=t?t:e);var l,o}))),l?(0,n.cloneElement)(y.filter((e=>e.props.value===z))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==z})))))}function h(e){const t=(0,l.Z)();return n.createElement(y,g({key:String(t)},e))}},815251:function(e,t,a){a.r(t),a.d(t,{assets:function(){return v},contentTitle:function(){return f},default:function(){return h},frontMatter:function(){return k},metadata:function(){return b},toc:function(){return g}});var n=a(603905),r=a(751361),l=a(440034),o=Object.defineProperty,i=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&p(e,a,t[a]);if(s)for(var a of s(t))c.call(t,a)&&p(e,a,t[a]);return e};const k={id:"gate",title:"Gate",sidebar_label:"Gate"},f=void 0,b={unversionedId:"gate",id:"gate",title:"Gate",description:"Egy ISLE komponens, amely lehet\u0151v\xe9 teszi, hogy gyermekeit csak a fenntartott k\xf6z\xf6ns\xe9g sz\xe1m\xe1ra jelen\xedtse meg.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/gate.md",sourceDirName:".",slug:"/gate",permalink:"/hu/docs/gate",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/gate.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1650476171,formattedLastUpdatedAt:"2022. \xe1pr. 20.",frontMatter:{id:"gate",title:"Gate",sidebar_label:"Gate"},sidebar:"docs",previous:{title:"Feedback Buttons",permalink:"/hu/docs/feedback"},next:{title:"Text Editor",permalink:"/hu/docs/text-editor"}},v={},g=[{value:"Opci\xf3k",id:"opci\xf3k",level:2},{value:"P\xe9ld\xe1k",id:"p\xe9ld\xe1k",level:2}],y={toc:g};function h(e){var t,a=e,{components:o}=a,p=((e,t)=>{var a={};for(var n in e)m.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=d(d({},y),p),i(t,u({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Egy ISLE komponens, amely lehet\u0151v\xe9 teszi, hogy gyermekeit csak a fenntartott k\xf6z\xf6ns\xe9g sz\xe1m\xe1ra jelen\xedtse meg."),(0,n.kt)("h2",d({},{id:"opci\xf3k"}),"Opci\xf3k"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"user")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": ha be van \xe1ll\xedtva, a korl\xe1tos tartalom megjelenik a felhaszn\xe1l\xf3k sz\xe1m\xe1ra.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"notUser")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": ha be van \xe1ll\xedtva, a z\xe1rolt tartalom ",(0,n.kt)("strong",{parentName:"li"},"nem")," jelenik meg a felhaszn\xe1l\xf3k sz\xe1m\xe1ra. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"enrolled")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": ha be van \xe1ll\xedtva, akkor a z\xe1rolt tartalom megjelenik a kurzusra beiratkozott hallgat\xf3k sz\xe1m\xe1ra.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"notEnrolled")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": ha be van \xe1ll\xedtva, a z\xe1rolt tartalom ",(0,n.kt)("strong",{parentName:"li"},"nem")," jelenik meg a kurzusra beiratkozott hallgat\xf3k sz\xe1m\xe1ra.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"owner")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": ha be van \xe1ll\xedtva, a z\xe1rolt tartalom a kurzus tulajdonos\xe1nak (\xe1ltal\xe1ban az oktat\xf3nak) jelenik meg.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"notOwner")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": ha be van \xe1ll\xedtva, a z\xe1rolt tartalom ",(0,n.kt)("strong",{parentName:"li"},"nem")," jelenik meg a kurzus tulajdonosa (\xe1ltal\xe1ban az oktat\xf3) sz\xe1m\xe1ra.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"after")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"Date"),": az id\u0151, amely ut\xe1n a kapu tartalm\xe1nak l\xe1that\xf3v\xe1 kell v\xe1lnia.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"until")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"Date"),": az id\u0151, am\xedg a kapu tartalma l\xe1that\xf3v\xe1 v\xe1lik. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"banner")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"node"),": egy egy\xe9ni \xfczenet, amely az alap\xe9rtelmezett \xfczenet helyett megjelenik azoknak a l\xe1togat\xf3knak, akik sz\xe1m\xe1ra a kapu gyermekei nem l\xe1that\xf3k.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"disabled")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": ha egy kapu le van tiltva, a banner megjelenik, f\xfcggetlen\xfcl att\xf3l, hogy mi t\xf6rt\xe9nik.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"showOwnerInPresentationMode")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy a kapu tartalma megjelenjen-e prezent\xe1ci\xf3s m\xf3dban, amikor a kapu l\xe1that\xf3 a ",(0,n.kt)("inlineCode",{parentName:"li"},"tulajdonos")," sz\xe1m\xe1ra.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"check")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),': callback f\xfcggv\xe9ny, amely egy "b\xf3l\xe9" \xe9rt\xe9ket ad vissza, amely jelzi, hogy a gate-nek meg kell-e jelen\xedtenie a gyermek komponenseket; a f\xfcggv\xe9nyt akkor h\xedvja meg, amikor munkamenet-akci\xf3k \xe9rkeznek.. Default: ',(0,n.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,n.kt)("h2",d({},{id:"p\xe9ld\xe1k"}),"P\xe9ld\xe1k"),(0,n.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Timed",value:"timed"},{label:"Hidden",value:"hidden"},{label:"Custom Banner",value:"customBanner"},{label:"Custom Check",value:"customCheck"}],lazy:!0,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Gate enrolled >\n    <h1>Content for users enrolled in a cohort of the course</h1>\n</Gate>\n"))),(0,n.kt)(l.Z,{value:"timed",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Gate\n    after={date({ year: 2020, month: 9, day: 1, hour: 9, minute: 30, second: 0, utcOffset: 4 })}\n    until={date({ year: 2020, month: 12, day: 20, hour: 9, minute: 30, second: 0, utcOffset: 5 })}\n>\n    # Only visible in Fall 2020 semester\n</Gate>\n"))),(0,n.kt)(l.Z,{value:"hidden",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Gate banner={null} owner >\n    <h1>Content for owners without a message for others</h1>\n</Gate>\n"))),(0,n.kt)(l.Z,{value:"customBanner",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Gate owner banner={<h3>Only visible by course owners...</h3>} >\n    <h1> User Analytics </h1>\n</Gate>\n"))),(0,n.kt)(l.Z,{value:"customCheck",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Gate check={( ) => {\n    return session.user.email === 'admin@cmu.edu';\n}} >\n    <h1> User Analytics only visible to specified user</h1>\n</Gate>\n")))))}h.isMDXComponent=!0}}]);