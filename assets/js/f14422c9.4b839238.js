"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65140],{603905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return b}});var r=a(202784);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),c=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(a),b=n,d=m["".concat(u,".").concat(b)]||m[b]||p[b]||l;return a?r.createElement(d,o(o({ref:t},s),{},{components:a})):r.createElement(d,o({ref:t},s))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},440034:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(202784),n=a(386010),l="tabItem_Ymn6",o=Object.defineProperty,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function p({children:e,hidden:t,className:a}){return r.createElement("div",((e,t)=>{for(var a in t||(t={}))u.call(t,a)&&s(e,a,t[a]);if(i)for(var a of i(t))c.call(t,a)&&s(e,a,t[a]);return e})({role:"tabpanel",className:(0,n.Z)(l,a)},{hidden:t}),e)}},751361:function(e,t,a){a.d(t,{Z:function(){return O}});var r=a(202784),n=a(386010),l=a(152670),o=a(258433),i=a(952326),u=a(638849),c="tabList__CuJ",s="tabItem_LNqP",p=Object.defineProperty,m=Object.defineProperties,b=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,y=(e,t,a)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,g=(e,t)=>{for(var a in t||(t={}))f.call(t,a)&&y(e,a,t[a]);if(d)for(var a of d(t))v.call(t,a)&&y(e,a,t[a]);return e};function k(e){var t,a;const{lazy:l,block:p,defaultValue:d,values:f,groupId:v,className:y}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),O=null!=f?f:k.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),h=(0,o.l)(O,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===d?d:null!=(a=null!=d?d:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?a:k[0].props.value;if(null!==N&&!O.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${O.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:j,setTabGroupChoices:w}=(0,i.U)(),[T,P]=(0,r.useState)(N),x=[],{blockElementScrollPositionUntilNextRender:D}=(0,u.o5)();if(null!=v){const e=j[v];null!=e&&e!==T&&O.some((t=>t.value===e))&&P(e)}const q=e=>{const t=e.currentTarget,a=x.indexOf(t),r=O[a].value;r!==T&&(D(t),P(r),null!=v&&w(v,String(r)))},E=e=>{var t,a;let r=null;switch(e.key){case"ArrowRight":{const a=x.indexOf(e.currentTarget)+1;r=null!=(t=x[a])?t:x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;r=null!=(a=x[t])?a:x[x.length-1];break}}null==r||r.focus()};return r.createElement("div",{className:(0,n.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":p},y)},O.map((({value:e,label:t,attributes:a})=>{return r.createElement("li",(l=g({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:e=>x.push(e),onKeyDown:E,onFocus:q,onClick:q},a),o={className:(0,n.Z)("tabs__item",s,null==a?void 0:a.className,{"tabs__item--active":T===e})},m(l,b(o))),null!=t?t:e);var l,o}))),l?(0,r.cloneElement)(k.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function O(e){const t=(0,l.Z)();return r.createElement(k,g({key:String(t)},e))}},841471:function(e,t,a){a.r(t),a.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return O},frontMatter:function(){return d},metadata:function(){return v},toc:function(){return g}});var r=a(603905),n=a(751361),l=a(440034),o=Object.defineProperty,i=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,b=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&m(e,a,t[a]);if(c)for(var a of c(t))p.call(t,a)&&m(e,a,t[a]);return e};const d={id:"frequency-table",title:"Frequency Table",sidebar_label:"Frequency Table"},f=void 0,v={unversionedId:"tables/frequency-table",id:"tables/frequency-table",title:"Frequency Table",description:"A frequency table.",source:"@site/docs/tables/frequency-table.md",sourceDirName:"tables",slug:"/tables/frequency-table",permalink:"/docs/tables/frequency-table",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tables/frequency-table.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614627833,formattedLastUpdatedAt:"Mar 1, 2021",frontMatter:{id:"frequency-table",title:"Frequency Table",sidebar_label:"Frequency Table"},sidebar:"docs",previous:{title:"Contingency Table",permalink:"/docs/tables/contingency-table"},next:{title:"ANOVA",permalink:"/docs/tests/anova"}},y={},g=[{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],k={toc:g};function O(e){var t,a=e,{components:o}=a,m=((e,t)=>{var a={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&p.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=b(b({},k),m),i(t,u({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"A frequency table."),(0,r.kt)("h2",b({},{id:"options"}),"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object (required)"),": object of value arrays. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"variable")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": name of categorical variable to be displayed. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"calculateCounts")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controls whether to display absolute counts. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"calculateRelative")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controls whether to display relative frequencies. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"group")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": name of grouping variable. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"nDecimalPlaces")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": number of decimal places for relative frequencies displayed in table. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"3"),".")),(0,r.kt)("h2",b({},{id:"examples"}),"Examples"),(0,r.kt)(n.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Relative Frequency",value:"relativeFrequency"},{label:"Grouped",value:"grouped"},{label:"Number of Decimals",value:"nDecimals"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<FrequencyTable\n    data={heartdisease} \n    variable="Drugs"\n/>\n'))),(0,r.kt)(l.Z,{value:"relativeFrequency",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<FrequencyTable\n    data={heartdisease} \n    variable="Drugs"\n    calculateRelative\n/>\n'))),(0,r.kt)(l.Z,{value:"grouped",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<FrequencyTable\n    data={heartdisease} \n    variable="Drugs"\n    group="Gender"\n/>\n'))),(0,r.kt)(l.Z,{value:"nDecimals",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",b({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<FrequencyTable\n    data={heartdisease} \n    variable="Drugs"\n    calculateRelative \n    nDecimalPlaces={3}\n/>\n')))))}O.isMDXComponent=!0}}]);