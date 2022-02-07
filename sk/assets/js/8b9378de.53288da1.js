"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6429],{603905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(202784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),c=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,b=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return t?a.createElement(b,i(i({ref:n},s),{},{components:t})):a.createElement(b,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},358215:function(e,n,t){var a=t(202784);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},409877:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(487462),r=t(202784),l=t(972389),i=t(275773),o=t(386010),u="tabItem_LplD";function c(e){var n,t,l,c=e.lazy,s=e.block,p=e.defaultValue,d=e.values,m=e.groupId,b=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),g=(0,i.lx)(f,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(n=null!=p?p:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=v[0])?void 0:l.props.value;if(null!==k&&!f.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.UB)(),h=y.tabGroupChoices,N=y.setTabGroupChoices,T=(0,r.useState)(k),C=T[0],w=T[1],j=[],O=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var D=h[m];null!=D&&D!==C&&f.some((function(e){return e.value===D}))&&w(D)}var x=function(e){var n=e.currentTarget,t=j.indexOf(n),a=f[t].value;a!==C&&(O(n),w(a),null!=m&&N(m,a))},E=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=j.indexOf(e.currentTarget)+1;t=j[a]||j[0];break;case"ArrowLeft":var r=j.indexOf(e.currentTarget)-1;t=j[r]||j[j.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},b)},f.map((function(e){var n=e.value,t=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:function(e){return j.push(e)},onKeyDown:E,onFocus:x,onClick:x},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":C===n})}),null!=t?t:n)}))),c?(0,r.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function s(e){var n=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(n)},e))}},783023:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return b}});var a=t(487462),r=t(263366),l=(t(202784),t(603905)),i=t(409877),o=t(358215),u=["components"],c={id:"contingency-table",title:"Contingency Table",sidebar_label:"Contingency Table"},s=void 0,p={unversionedId:"tables/contingency-table",id:"tables/contingency-table",title:"Contingency Table",description:"Kontingen\u010dn\xe1 tabu\u013eka.",source:"@site/i18n/sk/docusaurus-plugin-content-docs/current/tables/contingency-table.md",sourceDirName:"tables",slug:"/tables/contingency-table",permalink:"/sk/docs/tables/contingency-table",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tables/contingency-table.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. 6. 2021",frontMatter:{id:"contingency-table",title:"Contingency Table",sidebar_label:"Contingency Table"},sidebar:"docs",previous:{title:"Simple Linear Regression",permalink:"/sk/docs/models/simple-linear-regression"},next:{title:"Frequency Table",permalink:"/sk/docs/tables/frequency-table"}},d=[{value:"Mo\u017enosti",id:"mo\u017enosti",children:[],level:2},{value:"Pr\xedklady",id:"pr\xedklady",children:[],level:2}],m={toc:d};function b(e){var n=e.components,t=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Kontingen\u010dn\xe1 tabu\u013eka."),(0,l.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"data")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object (required)"),": objekt pol\xed hodn\xf4t. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"rowVar")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": n\xe1zov kategorickej premennej, ktor\xe1 sa m\xe1 zobrazi\u0165 v riadkoch. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"colVar")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),":  n\xe1zov kategorickej premennej, ktor\xe1 sa m\xe1 zobrazi\u0165 pozd\u013a\u017e st\u013apcov. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"relativeFreqs")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, \u010di sa maj\xfa zobrazova\u0165 relat\xedvne frekvencie.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"group")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": n\xe1zov zoskupuj\xfacej premennej. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"display")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(array<string>|string)"),": \u010di sa m\xe1 zobrazi\u0165 ",(0,l.kt)("inlineCode",{parentName:"li"},"Riadkov\xfd percentu\xe1lny podiel")," a/alebo ",(0,l.kt)("inlineCode",{parentName:"li"},"St\u013apcov\xfd percentu\xe1lny podiel"),". Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"nDecimalPlaces")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": po\u010det desatinn\xfdch miest pre relat\xedvne frekvencie zobrazen\xe9 v tabu\u013eke. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"3"),".")),(0,l.kt)("h2",{id:"pr\xedklady"},"Pr\xedklady"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Relative Frequencies",value:"relativeFrequency"},{label:"Grouped",value:"grouped"},{label:"Display Row Percentages",value:"displayRowPercentage"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ContingencyTable\n    data={heartdisease} \n    rowVar="Gender"\n    colVar="Drugs"\n/>\n'))),(0,l.kt)(o.Z,{value:"relativeFrequency",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ContingencyTable\n    data={heartdisease} \n    rowVar="Gender"\n    colVar="Drugs"\n    relativeFreqs \n    nDecimalPlaces={2}\n/>\n'))),(0,l.kt)(o.Z,{value:"grouped",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ContingencyTable\n    data={heartdisease} \n    rowVar="Drugs"\n    colVar="Complications"\n    group="Gender"\n/>\n'))),(0,l.kt)(o.Z,{value:"displayRowPercentage",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ContingencyTable\n    data={heartdisease} \n    rowVar="Drugs"\n    colVar="Complications"\n    display={[\'Row Percent\']}\n/>\n')))))}b.isMDXComponent=!0}}]);