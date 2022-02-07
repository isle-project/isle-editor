"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6114],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},358215:function(e,t,n){var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(487462),r=n(202784),l=n(972389),i=n(275773),u=n(386010),o="tabItem_LplD";function c(e){var t,n,l,c=e.lazy,s=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=b[0])?void 0:l.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,i.UB)(),h=k.tabGroupChoices,N=k.setTabGroupChoices,T=(0,r.useState)(g),O=T[0],D=T[1],w=[],x=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=h[m];null!=C&&C!==O&&v.some((function(e){return e.value===C}))&&D(C)}var j=function(e){var t=e.currentTarget,n=w.indexOf(t),a=v[n].value;a!==O&&(x(t),D(a),null!=m&&N(m,a))},q=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.currentTarget)+1;n=w[a]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.currentTarget)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":s},f)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return w.push(e)},onKeyDown:q,onFocus:j,onClick:j},l,{className:(0,u.Z)("tabs__item",o,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),c?(0,r.cloneElement)(b.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function s(e){var t=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},975123:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var a=n(487462),r=n(263366),l=(n(202784),n(603905)),i=n(409877),u=n(358215),o=["components"],c={id:"frequency-table",title:"Frequency Table",sidebar_label:"Frequency Table"},s=void 0,p={unversionedId:"tables/frequency-table",id:"tables/frequency-table",title:"Frequency Table",description:"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0447\u0430\u0441\u0442\u043e\u0442.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/tables/frequency-table.md",sourceDirName:"tables",slug:"/tables/frequency-table",permalink:"/ru/docs/tables/frequency-table",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tables/frequency-table.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614628319,formattedLastUpdatedAt:"01.03.2021",frontMatter:{id:"frequency-table",title:"Frequency Table",sidebar_label:"Frequency Table"},sidebar:"docs",previous:{title:"Contingency Table",permalink:"/ru/docs/tables/contingency-table"},next:{title:"ANOVA",permalink:"/ru/docs/tests/anova"}},d=[{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b",children:[],level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:[],level:2}],m={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0447\u0430\u0441\u0442\u043e\u0442."),(0,l.kt)("h2",{id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"data")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object (required)"),": \u043c\u0430\u0441\u0441\u0438\u0432\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043e\u0446\u0435\u043d\u043a\u0438. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"variable")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": \u0438\u043c\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"calculateCounts")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u0442, \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u043b\u0438 \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u044b\u0435 \u043f\u043e\u0434\u0441\u0447\u0451\u0442\u044b. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"calculateRelative")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0447\u0430\u0441\u0442\u043e\u0442. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"group")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": \u0438\u043c\u044f \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u0443\u044e\u0449\u0435\u0439 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"nDecimalPlaces")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u043d\u0430\u043a\u043e\u0432 \u043f\u043e\u0441\u043b\u0435 \u0437\u0430\u043f\u044f\u0442\u043e\u0439 \u0434\u043b\u044f \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0447\u0430\u0441\u0442\u043e\u0442, \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u043c\u044b\u0445 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"3"),".")),(0,l.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Relative Frequency",value:"relativeFrequency"},{label:"Grouped",value:"grouped"},{label:"Number of Decimals",value:"nDecimals"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FrequencyTable\n    data={heartdisease} \n    variable="Drugs"\n/>\n'))),(0,l.kt)(u.Z,{value:"relativeFrequency",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FrequencyTable\n    data={heartdisease} \n    variable="Drugs"\n    calculateRelative\n/>\n'))),(0,l.kt)(u.Z,{value:"grouped",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FrequencyTable\n    data={heartdisease} \n    variable="Drugs"\n    group="Gender"\n/>\n'))),(0,l.kt)(u.Z,{value:"nDecimals",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FrequencyTable\n    data={heartdisease} \n    variable="Drugs"\n    calculateRelative \n    nDecimalPlaces={3}\n/>\n')))))}f.isMDXComponent=!0}}]);