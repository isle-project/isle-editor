"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6823],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},358215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(202784);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(487462),a=n(202784),l=n(972389),i=n(161419),o=n(386010),u="tabItem_LplD";function s(e){var t,n,l,s=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=b[0])?void 0:l.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,i.UB)(),h=k.tabGroupChoices,N=k.setTabGroupChoices,T=(0,a.useState)(g),w=T[0],O=T[1],C=[],x=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=h[m];null!=E&&E!==w&&v.some((function(e){return e.value===E}))&&O(E)}var j=function(e){var t=e.currentTarget,n=C.indexOf(t),r=v[n].value;r!==w&&(x(t),O(r),null!=m&&N(m,r))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=C.indexOf(e.currentTarget)+1;n=C[r]||C[0];break;case"ArrowLeft":var a=C.indexOf(e.currentTarget)-1;n=C[a]||C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},f)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return C.push(e)},onKeyDown:D,onFocus:j,onClick:j},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(b.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function c(e){var t=(0,l.Z)();return a.createElement(s,(0,r.Z)({key:String(t)},e))}},297638:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return d},toc:function(){return m},default:function(){return b}});var r=n(487462),a=n(263366),l=(n(202784),n(603905)),i=n(409877),o=n(358215),u=["components"],s={id:"r-table",title:"R Table",sidebar_label:"R Table"},c=void 0,p={unversionedId:"r/r-table",id:"r/r-table",title:"R Table",description:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0437\u0430 \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 \u0440\u0430\u043c\u043a\u0430 \u043e\u0442 \u0434\u0430\u043d\u043d\u0438 \u0438\u043b\u0438 \u043c\u0430\u0442\u0440\u0438\u0446\u0430 \u043d\u0430 R \u0432 \u0442\u0430\u0431\u043b\u0438\u0447\u0435\u043d \u0432\u0438\u0434.",source:"@site/i18n/bg/docusaurus-plugin-content-docs/current/r/table.md",sourceDirName:"r",slug:"/r/r-table",permalink:"/bg/docs/r/r-table",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/r/table.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1.06.2021 \u0433.",frontMatter:{id:"r-table",title:"R Table",sidebar_label:"R Table"},sidebar:"docs",previous:{title:"R Shell",permalink:"/bg/docs/r/r-shell"},next:{title:"Weather",permalink:"/bg/docs/weather"}},d={},m=[{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u0438",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438",level:2}],f={toc:m};function b(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0437\u0430 \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 \u0440\u0430\u043c\u043a\u0430 \u043e\u0442 \u0434\u0430\u043d\u043d\u0438 \u0438\u043b\u0438 \u043c\u0430\u0442\u0440\u0438\u0446\u0430 \u043d\u0430 R \u0432 \u0442\u0430\u0431\u043b\u0438\u0447\u0435\u043d \u0432\u0438\u0434."),(0,l.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u0438"},"\u041e\u043f\u0446\u0438\u0438"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"code")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": R \u043a\u043e\u0434, \u043a\u043e\u0439\u0442\u043e \u0432\u0440\u044a\u0449\u0430 data.frame, \u0441\u044a\u0434\u044a\u0440\u0436\u0430\u0449 \u0434\u0430\u043d\u043d\u0438\u0442\u0435, \u043a\u043e\u0438\u0442\u043e \u0449\u0435 \u0431\u044a\u0434\u0430\u0442 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0438 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0430\u0442\u0430. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"libraries")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array"),": R \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438, \u043a\u043e\u0438\u0442\u043e \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0441\u0435 \u0437\u0430\u0440\u0435\u0436\u0434\u0430\u0442 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u043d\u043e \u043f\u0440\u0438 \u0438\u0437\u043f\u044a\u043b\u043d\u0435\u043d\u0438\u0435 \u043d\u0430 \u0432\u0445\u043e\u0434\u043d\u0438\u044f ",(0,l.kt)("inlineCode",{parentName:"li"},"\u043a\u043e\u0434"),". Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"prependCode")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|array)"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"\u043d\u0438\u0448\u043a\u0430")," \u043e\u0442 R-\u043a\u043e\u0434 (\u0438\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"\u043c\u0430\u0441\u0438\u0432")," \u043e\u0442 \u0431\u043b\u043e\u043a\u043e\u0432\u0435 R-\u043a\u043e\u0434), \u043a\u043e\u044f\u0442\u043e \u0441\u0435 \u0434\u043e\u0431\u0430\u0432\u044f \u043a\u044a\u043c \u043a\u043e\u0434\u0430, \u0441\u044a\u0445\u0440\u0430\u043d\u0435\u043d \u0432 ",(0,l.kt)("inlineCode",{parentName:"li"},"code"),", \u043f\u0440\u0438 \u043e\u0446\u0435\u043d\u044f\u0432\u0430\u043d\u0435. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": CSS \u0438\u043d\u043b\u0430\u0439\u043d \u0441\u0442\u0438\u043b\u043e\u0432\u0435. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,l.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438"},"\u041f\u0440\u0438\u043c\u0435\u0440\u0438"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Using Libraries",value:"usingLibraries"},{label:"Custom Style",value:"customStyle"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RTable\n    code={`data <- matrix( runif(64), nrow=8, ncol=8); \n    data`}\n/>\n"))),(0,l.kt)(o.Z,{value:"usingLibraries",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RTable \n    libraries={[ 'dplyr' ]}\n    code=\"starwars\"\n/>\n"))),(0,l.kt)(o.Z,{value:"customStyle",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RTable \n    libraries={[ 'dplyr' ]}\n    code=\"starwars\"\n    style={{ width: '400px' }}\n/>\n")))))}b.isMDXComponent=!0}}]);