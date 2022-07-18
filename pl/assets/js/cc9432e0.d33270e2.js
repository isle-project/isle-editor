"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[30339],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return b}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(n),b=r,d=m["".concat(u,".").concat(b)]||m[b]||p[b]||l;return n?a.createElement(d,i(i({ref:t},s),{},{components:n})):a.createElement(d,i({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(202784),r=n(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function p({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&s(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return O}});var a=n(202784),r=n(386010),l=n(152670),i=n(258433),o=n(952326),u=n(638849),c="tabList__CuJ",s="tabItem_LNqP",p=Object.defineProperty,m=Object.defineProperties,b=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&v(e,n,t[n]);if(d)for(var n of d(t))y.call(t,n)&&v(e,n,t[n]);return e};function k(e){var t,n;const{lazy:l,block:p,defaultValue:d,values:f,groupId:y,className:v}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),O=null!=f?f:k.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),w=(0,i.l)(O,((e,t)=>e.value===t.value));if(w.length>0)throw new Error(`Docusaurus error: Duplicate values "${w.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===d?d:null!=(n=null!=d?d:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?n:k[0].props.value;if(null!==h&&!O.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${O.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:j,setTabGroupChoices:N}=(0,o.U)(),[T,P]=(0,a.useState)(h),D=[],{blockElementScrollPositionUntilNextRender:z}=(0,u.o5)();if(null!=y){const e=j[y];null!=e&&e!==T&&O.some((t=>t.value===e))&&P(e)}const E=e=>{const t=e.currentTarget,n=D.indexOf(t),a=O[n].value;a!==T&&(z(t),P(a),null!=y&&N(y,String(a)))},x=e=>{var t,n;let a=null;switch(e.key){case"ArrowRight":{const n=D.indexOf(e.currentTarget)+1;a=null!=(t=D[n])?t:D[0];break}case"ArrowLeft":{const t=D.indexOf(e.currentTarget)-1;a=null!=(n=D[t])?n:D[D.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},v)},O.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(l=g({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:e=>D.push(e),onKeyDown:x,onFocus:E,onClick:E},n),i={className:(0,r.Z)("tabs__item",s,null==n?void 0:n.className,{"tabs__item--active":T===e})},m(l,b(i))),null!=t?t:e);var l,i}))),l?(0,a.cloneElement)(k.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function O(e){const t=(0,l.Z)();return a.createElement(k,g({key:String(t)},e))}},763020:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return f},default:function(){return O},frontMatter:function(){return d},metadata:function(){return y},toc:function(){return g}});var a=n(603905),r=n(751361),l=n(440034),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&m(e,n,t[n]);if(c)for(var n of c(t))p.call(t,n)&&m(e,n,t[n]);return e};const d={id:"frequency-table",title:"Frequency Table",sidebar_label:"Frequency Table"},f=void 0,y={unversionedId:"tables/frequency-table",id:"tables/frequency-table",title:"Frequency Table",description:"Tabela cz\u0119stotliwo\u015bci.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/tables/frequency-table.md",sourceDirName:"tables",slug:"/tables/frequency-table",permalink:"/pl/docs/tables/frequency-table",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tables/frequency-table.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614628319,formattedLastUpdatedAt:"1 mar 2021",frontMatter:{id:"frequency-table",title:"Frequency Table",sidebar_label:"Frequency Table"},sidebar:"docs",previous:{title:"Contingency Table",permalink:"/pl/docs/tables/contingency-table"},next:{title:"ANOVA",permalink:"/pl/docs/tests/anova"}},v={},g=[{value:"Opcje",id:"opcje",level:2},{value:"Przyk\u0142ady",id:"przyk\u0142ady",level:2}],k={toc:g};function O(e){var t,n=e,{components:i}=n,m=((e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=b(b({},k),m),o(t,u({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Tabela cz\u0119stotliwo\u015bci."),(0,a.kt)("h2",b({},{id:"opcje"}),"Opcje"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"data")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object (required)"),": przedmiot tablice warto\u015bci. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"variable")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": nazwa zmiennej kategorycznej, kt\xf3ra ma zosta\u0107 wy\u015bwietlona. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"calculateCounts")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy wy\u015bwietlane s\u0105 liczby bezwzgl\u0119dne. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"calculateRelative")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy wy\u015bwietlane s\u0105 cz\u0119stotliwo\u015bci wzgl\u0119dne. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"group")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": nazwa zmiennej grupuj\u0105cej. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"nDecimalPlaces")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": liczba miejsc po przecinku dla cz\u0119stotliwo\u015bci wzgl\u0119dnych wy\u015bwietlanych w tabeli. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"3"),".")),(0,a.kt)("h2",b({},{id:"przyk\u0142ady"}),"Przyk\u0142ady"),(0,a.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Relative Frequency",value:"relativeFrequency"},{label:"Grouped",value:"grouped"},{label:"Number of Decimals",value:"nDecimals"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<FrequencyTable\n    data={heartdisease} \n    variable="Drugs"\n/>\n'))),(0,a.kt)(l.Z,{value:"relativeFrequency",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<FrequencyTable\n    data={heartdisease} \n    variable="Drugs"\n    calculateRelative\n/>\n'))),(0,a.kt)(l.Z,{value:"grouped",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<FrequencyTable\n    data={heartdisease} \n    variable="Drugs"\n    group="Gender"\n/>\n'))),(0,a.kt)(l.Z,{value:"nDecimals",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<FrequencyTable\n    data={heartdisease} \n    variable="Drugs"\n    calculateRelative \n    nDecimalPlaces={3}\n/>\n')))))}O.isMDXComponent=!0}}]);