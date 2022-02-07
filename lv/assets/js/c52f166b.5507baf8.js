"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2030],{603905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(202784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(a),c=r,k=d["".concat(u,".").concat(c)]||d[c]||p[c]||i;return a?n.createElement(k,l(l({ref:t},m),{},{components:a})):n.createElement(k,l({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},358215:function(e,t,a){var n=a(202784);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},409877:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(487462),r=a(202784),i=a(972389),l=a(275773),o=a(386010),u="tabItem_LplD";function s(e){var t,a,i,s=e.lazy,m=e.block,p=e.defaultValue,d=e.values,c=e.groupId,k=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(i=f[0])?void 0:i.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,l.UB)(),h=N.tabGroupChoices,y=N.setTabGroupChoices,j=(0,r.useState)(g),C=j[0],w=j[1],O=[],T=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var x=h[c];null!=x&&x!==C&&v.some((function(e){return e.value===x}))&&w(x)}var D=function(e){var t=e.currentTarget,a=O.indexOf(t),n=v[a].value;n!==C&&(T(t),w(n),null!=c&&y(c,n))},E=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=O.indexOf(e.currentTarget)+1;a=O[n]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;a=O[r]||O[O.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},k)},v.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return O.push(e)},onKeyDown:E,onFocus:D,onClick:D},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),s?(0,r.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,i.Z)();return r.createElement(s,(0,n.Z)({key:String(t)},e))}},677955:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return d},default:function(){return k}});var n=a(487462),r=a(263366),i=(a(202784),a(603905)),l=a(409877),o=a(358215),u=["components"],s={id:"gate",title:"Gate",sidebar_label:"Gate"},m=void 0,p={unversionedId:"gate",id:"gate",title:"Gate",description:"ISLE komponents, kas \u013cauj par\u0101d\u012bt savus b\u0113rnus tikai rezerv\u0113tai auditorijai.",source:"@site/i18n/lv/docusaurus-plugin-content-docs/current/gate.md",sourceDirName:".",slug:"/gate",permalink:"/lv/docs/gate",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/gate.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1631799799,formattedLastUpdatedAt:"16.09.2021.",frontMatter:{id:"gate",title:"Gate",sidebar_label:"Gate"},sidebar:"docs",previous:{title:"Feedback Buttons",permalink:"/lv/docs/feedback"},next:{title:"Text Editor",permalink:"/lv/docs/text-editor"}},d=[{value:"Iesp\u0113jas",id:"iesp\u0113jas",children:[],level:2},{value:"Piem\u0113ri",id:"piem\u0113ri",children:[],level:2}],c={toc:d};function k(e){var t=e.components,a=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ISLE komponents, kas \u013cauj par\u0101d\u012bt savus b\u0113rnus tikai rezerv\u0113tai auditorijai."),(0,i.kt)("h2",{id:"iesp\u0113jas"},"Iesp\u0113jas"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"user")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": kad iestat\u012bts, lietot\u0101jiem tiek r\u0101d\u012bts saturs ar v\u0101rtiem.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"notUser")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": kad iestat\u012bts, aizsarg\u0101tais saturs lietot\u0101jiem netiek ",(0,i.kt)("strong",{parentName:"li"},"atr\u0101d\u012bts"),".. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"enrolled")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": kad iestat\u012bts, saturs ar v\u0101rtiem tiek par\u0101d\u012bts kurs\u0101 re\u0123istr\u0113tajiem studentiem.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"notEnrolled")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": ja iestat\u012bts, saturs ar v\u0101rtiem ",(0,i.kt)("strong",{parentName:"li"},"nepar\u0101d\u0101s")," kurs\u0101 re\u0123istr\u0113tajiem studentiem.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"owner")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": kad tas ir iestat\u012bts, sl\u0113gtais saturs tiek par\u0101d\u012bts kursa \u012bpa\u0161niekam (parasti pasniedz\u0113jam).. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"notOwner")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": kad iestat\u012bts, saturs ar v\u0101rtiem netiek par\u0101d\u012bts kursa \u012bpa\u0161niekam (parasti pasniedz\u0113jam).. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"after")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"Date"),": laiks, p\u0113c kura v\u0101rtu saturam j\u0101k\u013c\u016bst redzamam.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"until")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"Date"),": laiks, l\u012bdz v\u0101rtu saturs paliek redzams.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"banner")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"node"),": piel\u0101gotu zi\u0146ojumu, kas tiek r\u0101d\u012bts apmekl\u0113t\u0101jiem, kuriem v\u0101rtu b\u0113rni nav redzami, nevis noklus\u0113juma zi\u0146ojumu.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"disabled")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": ja v\u0101rti ir atsp\u0113joti, baneris tiks par\u0101d\u012bts neatkar\u012bgi no t\u0101, kas notiek.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"showOwnerInPresentationMode")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrol\u0113, vai par\u0101d\u012bt v\u0101rtu saturu prezent\u0101cijas re\u017e\u012bm\u0101, kad v\u0101rti ir redzami ",(0,i.kt)("inlineCode",{parentName:"li"},"\u012bpa\u0161niekam"),".. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"check")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": atgriezenisk\u0101 zvana funkcija, kas atgrie\u017e ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),", nor\u0101dot, vai v\u0101rtiem ir j\u0101par\u0101da b\u0113rnu komponenti; funkcija tiek izsaukta, kad vienreiz pien\u0101k sesijas darb\u012bbas.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,i.kt)("h2",{id:"piem\u0113ri"},"Piem\u0113ri"),(0,i.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Timed",value:"timed"},{label:"Hidden",value:"hidden"},{label:"Custom Banner",value:"customBanner"},{label:"Custom Check",value:"customCheck"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Gate enrolled >\n    <h1>Content for users enrolled in a cohort of the course</h1>\n</Gate>\n"))),(0,i.kt)(o.Z,{value:"timed",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Gate\n    after={date({ year: 2020, month: 9, day: 1, hour: 9, minute: 30, second: 0, utcOffset: 4 })}\n    until={date({ year: 2020, month: 12, day: 20, hour: 9, minute: 30, second: 0, utcOffset: 5 })}\n>\n    # Only visible in Fall 2020 semester\n</Gate>\n"))),(0,i.kt)(o.Z,{value:"hidden",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Gate banner={null} owner >\n    <h1>Content for owners without a message for others</h1>\n</Gate>\n"))),(0,i.kt)(o.Z,{value:"customBanner",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Gate owner banner={<h3>Only visible by course owners...</h3>} >\n    <h1> User Analytics </h1>\n</Gate>\n"))),(0,i.kt)(o.Z,{value:"customCheck",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Gate check={( ) => {\n    return session.user.email === 'admin@cmu.edu';\n}} >\n    <h1> User Analytics only visible to specified user</h1>\n</Gate>\n")))))}k.isMDXComponent=!0}}]);