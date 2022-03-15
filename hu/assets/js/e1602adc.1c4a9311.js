"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2598],{603905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(202784);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=s(a),d=l,k=p["".concat(u,".").concat(d)]||p[d]||c[d]||r;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},358215:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(202784);function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:l},t)}},409877:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(487462),l=a(202784),r=a(972389),i=a(161419),o=a(386010),u="tabItem_LplD";function s(e){var t,a,r,s=e.lazy,m=e.block,c=e.defaultValue,p=e.values,d=e.groupId,k=e.className,f=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(t=null!=c?c:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(r=f[0])?void 0:r.props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,i.UB)(),y=h.tabGroupChoices,N=h.setTabGroupChoices,z=(0,l.useState)(b),C=z[0],j=z[1],O=[],w=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var T=y[d];null!=T&&T!==C&&v.some((function(e){return e.value===T}))&&j(T)}var E=function(e){var t=e.currentTarget,a=O.indexOf(t),n=v[a].value;n!==C&&(w(t),j(n),null!=d&&N(d,n))},x=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=O.indexOf(e.currentTarget)+1;a=O[n]||O[0];break;case"ArrowLeft":var l=O.indexOf(e.currentTarget)-1;a=O[l]||O[O.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},k)},v.map((function(e){var t=e.value,a=e.label,r=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return O.push(e)},onKeyDown:x,onFocus:E,onClick:E},r,{className:(0,o.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),s?(0,l.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,r.Z)();return l.createElement(s,(0,n.Z)({key:String(t)},e))}},155616:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return c},assets:function(){return p},toc:function(){return d},default:function(){return f}});var n=a(487462),l=a(263366),r=(a(202784),a(603905)),i=a(409877),o=a(358215),u=["components"],s={id:"gate",title:"Gate",sidebar_label:"Gate"},m=void 0,c={unversionedId:"gate",id:"gate",title:"Gate",description:"Egy ISLE komponens, amely lehet\u0151v\xe9 teszi, hogy gyermekeit csak a fenntartott k\xf6z\xf6ns\xe9g sz\xe1m\xe1ra jelen\xedtse meg.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/gate.md",sourceDirName:".",slug:"/gate",permalink:"/hu/docs/gate",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/gate.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1631799799,formattedLastUpdatedAt:"2021. 09. 16.",frontMatter:{id:"gate",title:"Gate",sidebar_label:"Gate"},sidebar:"docs",previous:{title:"Feedback Buttons",permalink:"/hu/docs/feedback"},next:{title:"Text Editor",permalink:"/hu/docs/text-editor"}},p={},d=[{value:"Opci\xf3k",id:"opci\xf3k",level:2},{value:"P\xe9ld\xe1k",id:"p\xe9ld\xe1k",level:2}],k={toc:d};function f(e){var t=e.components,a=(0,l.Z)(e,u);return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Egy ISLE komponens, amely lehet\u0151v\xe9 teszi, hogy gyermekeit csak a fenntartott k\xf6z\xf6ns\xe9g sz\xe1m\xe1ra jelen\xedtse meg."),(0,r.kt)("h2",{id:"opci\xf3k"},"Opci\xf3k"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"user")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": ha be van \xe1ll\xedtva, a korl\xe1tos tartalom megjelenik a felhaszn\xe1l\xf3k sz\xe1m\xe1ra.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"notUser")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": ha be van \xe1ll\xedtva, a z\xe1rolt tartalom ",(0,r.kt)("strong",{parentName:"li"},"nem")," jelenik meg a felhaszn\xe1l\xf3k sz\xe1m\xe1ra. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"enrolled")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": ha be van \xe1ll\xedtva, akkor a z\xe1rolt tartalom megjelenik a kurzusra beiratkozott hallgat\xf3k sz\xe1m\xe1ra.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"notEnrolled")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": ha be van \xe1ll\xedtva, a z\xe1rolt tartalom ",(0,r.kt)("strong",{parentName:"li"},"nem")," jelenik meg a kurzusra beiratkozott hallgat\xf3k sz\xe1m\xe1ra.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"owner")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": ha be van \xe1ll\xedtva, a z\xe1rolt tartalom a kurzus tulajdonos\xe1nak (\xe1ltal\xe1ban az oktat\xf3nak) jelenik meg.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"notOwner")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": ha be van \xe1ll\xedtva, a z\xe1rolt tartalom ",(0,r.kt)("strong",{parentName:"li"},"nem")," jelenik meg a kurzus tulajdonosa (\xe1ltal\xe1ban az oktat\xf3) sz\xe1m\xe1ra.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"after")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"Date"),": az id\u0151, amely ut\xe1n a kapu tartalm\xe1nak l\xe1that\xf3v\xe1 kell v\xe1lnia.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"until")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"Date"),": az id\u0151, am\xedg a kapu tartalma l\xe1that\xf3v\xe1 v\xe1lik. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"banner")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"node"),": egy egy\xe9ni \xfczenet, amely az alap\xe9rtelmezett \xfczenet helyett megjelenik azoknak a l\xe1togat\xf3knak, akik sz\xe1m\xe1ra a kapu gyermekei nem l\xe1that\xf3k.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disabled")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": ha egy kapu le van tiltva, a banner megjelenik, f\xfcggetlen\xfcl att\xf3l, hogy mi t\xf6rt\xe9nik.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"showOwnerInPresentationMode")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy a kapu tartalma megjelenjen-e prezent\xe1ci\xf3s m\xf3dban, amikor a kapu l\xe1that\xf3 a ",(0,r.kt)("inlineCode",{parentName:"li"},"tulajdonos")," sz\xe1m\xe1ra.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"check")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),': callback f\xfcggv\xe9ny, amely egy "b\xf3l\xe9" \xe9rt\xe9ket ad vissza, amely jelzi, hogy a gate-nek meg kell-e jelen\xedtenie a gyermek komponenseket; a f\xfcggv\xe9nyt akkor h\xedvja meg, amikor munkamenet-akci\xf3k \xe9rkeznek.. Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,r.kt)("h2",{id:"p\xe9ld\xe1k"},"P\xe9ld\xe1k"),(0,r.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Timed",value:"timed"},{label:"Hidden",value:"hidden"},{label:"Custom Banner",value:"customBanner"},{label:"Custom Check",value:"customCheck"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Gate enrolled >\n    <h1>Content for users enrolled in a cohort of the course</h1>\n</Gate>\n"))),(0,r.kt)(o.Z,{value:"timed",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Gate\n    after={date({ year: 2020, month: 9, day: 1, hour: 9, minute: 30, second: 0, utcOffset: 4 })}\n    until={date({ year: 2020, month: 12, day: 20, hour: 9, minute: 30, second: 0, utcOffset: 5 })}\n>\n    # Only visible in Fall 2020 semester\n</Gate>\n"))),(0,r.kt)(o.Z,{value:"hidden",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Gate banner={null} owner >\n    <h1>Content for owners without a message for others</h1>\n</Gate>\n"))),(0,r.kt)(o.Z,{value:"customBanner",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Gate owner banner={<h3>Only visible by course owners...</h3>} >\n    <h1> User Analytics </h1>\n</Gate>\n"))),(0,r.kt)(o.Z,{value:"customCheck",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Gate check={( ) => {\n    return session.user.email === 'admin@cmu.edu';\n}} >\n    <h1> User Analytics only visible to specified user</h1>\n</Gate>\n")))))}f.isMDXComponent=!0}}]);