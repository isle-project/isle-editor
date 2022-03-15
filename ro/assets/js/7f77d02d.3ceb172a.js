"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2025],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},358215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(202784);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(487462),r=n(202784),i=n(972389),l=n(161419),o=n(386010),u="tabItem_LplD";function s(e){var t,n,i,s=e.lazy,c=e.block,p=e.defaultValue,m=e.values,d=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,l.lx)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=v[0])?void 0:i.props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,l.UB)(),g=N.tabGroupChoices,y=N.setTabGroupChoices,C=(0,r.useState)(h),O=C[0],w=C[1],T=[],x=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var E=g[d];null!=E&&E!==O&&b.some((function(e){return e.value===E}))&&w(E)}var D=function(e){var t=e.currentTarget,n=T.indexOf(t),a=b[n].value;a!==O&&(x(t),w(a),null!=d&&y(d,a))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},f)},b.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return T.push(e)},onKeyDown:j,onFocus:D,onClick:D},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function c(e){var t=(0,i.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},97518:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return m},toc:function(){return d},default:function(){return v}});var a=n(487462),r=n(263366),i=(n(202784),n(603905)),l=n(409877),o=n(358215),u=["components"],s={id:"gate",title:"Gate",sidebar_label:"Gate"},c=void 0,p={unversionedId:"gate",id:"gate",title:"Gate",description:"O component\u0103 ISLE care permite afi\u0219area copiilor s\u0103i numai pentru publicul rezervat.",source:"@site/i18n/ro/docusaurus-plugin-content-docs/current/gate.md",sourceDirName:".",slug:"/gate",permalink:"/ro/docs/gate",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/gate.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1631799799,formattedLastUpdatedAt:"16.09.2021",frontMatter:{id:"gate",title:"Gate",sidebar_label:"Gate"},sidebar:"docs",previous:{title:"Feedback Buttons",permalink:"/ro/docs/feedback"},next:{title:"Text Editor",permalink:"/ro/docs/text-editor"}},m={},d=[{value:"Op\u021biuni",id:"op\u021biuni",level:2},{value:"Exemple",id:"exemple",level:2}],f={toc:d};function v(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"O component\u0103 ISLE care permite afi\u0219area copiilor s\u0103i numai pentru publicul rezervat."),(0,i.kt)("h2",{id:"op\u021biuni"},"Op\u021biuni"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"user")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": atunci c\xe2nd este setat, con\u021binutul cu por\u021bi este afi\u0219at utilizatorilor. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"notUser")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": atunci c\xe2nd este setat, con\u021binutul \xeenchis nu este ",(0,i.kt)("strong",{parentName:"li"},"nu")," afi\u0219at utilizatorilor. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"enrolled")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": atunci c\xe2nd este setat, con\u021binutul cu por\u021bi este afi\u0219at studen\u021bilor \xeenscri\u0219i la curs. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"notEnrolled")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": atunci c\xe2nd este setat, con\u021binutul de tip gated nu este ",(0,i.kt)("strong",{parentName:"li"},"nu")," afi\u0219at studen\u021bilor \xeenscri\u0219i la curs. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"owner")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": atunci c\xe2nd este setat, con\u021binutul \xeenchis este afi\u0219at proprietarului cursului (de obicei, instructorul). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"notOwner")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": atunci c\xe2nd este setat, con\u021binutul \xeenchis nu este ",(0,i.kt)("strong",{parentName:"li"},"nu")," afi\u0219at proprietarului cursului (de obicei, instructorul). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"after")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"Date"),": timpul dup\u0103 care con\u021binutul por\u021bii trebuie s\u0103 devin\u0103 vizibil. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"until")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"Date"),": timpul p\xe2n\u0103 c\xe2nd con\u021binutul por\u021bii trebuie s\u0103 r\u0103m\xe2n\u0103 vizibil. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"banner")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"node"),": un mesaj personalizat care este afi\u0219at vizitatorilor pentru care copiii por\u021bii nu sunt vizibili, \xeen locul celui implicit. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"disabled")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": \xeen cazul \xeen care o poart\u0103 este dezactivat\u0103, bannerul va fi afi\u0219at indiferent ce se \xeent\xe2mpl\u0103. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"showOwnerInPresentationMode")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),': controleaz\u0103 dac\u0103 se afi\u0219eaz\u0103 con\u021binutul por\u021bii \xeen modul de prezentare atunci c\xe2nd poarta este vizibil\u0103 pentru "proprietar".. Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"check")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": func\u021bie de callback care returneaz\u0103 un ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean")," indic\xe2nd dac\u0103 poarta trebuie s\u0103 afi\u0219eze componentele copil; func\u021bia este invocat\u0103 ori de c\xe2te ori sosesc ac\u021biuni de sesiune. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,i.kt)("h2",{id:"exemple"},"Exemple"),(0,i.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Timed",value:"timed"},{label:"Hidden",value:"hidden"},{label:"Custom Banner",value:"customBanner"},{label:"Custom Check",value:"customCheck"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Gate enrolled >\n    <h1>Content for users enrolled in a cohort of the course</h1>\n</Gate>\n"))),(0,i.kt)(o.Z,{value:"timed",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Gate\n    after={date({ year: 2020, month: 9, day: 1, hour: 9, minute: 30, second: 0, utcOffset: 4 })}\n    until={date({ year: 2020, month: 12, day: 20, hour: 9, minute: 30, second: 0, utcOffset: 5 })}\n>\n    # Only visible in Fall 2020 semester\n</Gate>\n"))),(0,i.kt)(o.Z,{value:"hidden",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Gate banner={null} owner >\n    <h1>Content for owners without a message for others</h1>\n</Gate>\n"))),(0,i.kt)(o.Z,{value:"customBanner",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Gate owner banner={<h3>Only visible by course owners...</h3>} >\n    <h1> User Analytics </h1>\n</Gate>\n"))),(0,i.kt)(o.Z,{value:"customCheck",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Gate check={( ) => {\n    return session.user.email === 'admin@cmu.edu';\n}} >\n    <h1> User Analytics only visible to specified user</h1>\n</Gate>\n")))))}v.isMDXComponent=!0}}]);