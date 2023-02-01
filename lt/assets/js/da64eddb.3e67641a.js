"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94400],{603905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return b}});var a=r(202784);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,b=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return r?a.createElement(b,o(o({ref:t},p),{},{components:r})):a.createElement(b,o({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},440034:function(e,t,r){r.d(t,{Z:function(){return c}});var a=r(202784),n=r(386010),l="tabItem_Ymn6",o=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function c({children:e,hidden:t,className:r}){return a.createElement("div",((e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&p(e,r,t[r]);return e})({role:"tabpanel",className:(0,n.Z)(l,r)},{hidden:t}),e)}},751361:function(e,t,r){r.d(t,{Z:function(){return h}});var a=r(202784),n=r(386010),l=r(152670),o=r(258433),i=r(952326),s=r(638849),u="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,y=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))v.call(t,r)&&y(e,r,t[r]);if(b)for(var r of b(t))f.call(t,r)&&y(e,r,t[r]);return e};function k(e){var t,r;const{lazy:l,block:c,defaultValue:b,values:v,groupId:f,className:y}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=v?v:k.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),O=(0,o.l)(h,((e,t)=>e.value===t.value));if(O.length>0)throw new Error(`Docusaurus error: Duplicate values "${O.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const P=null===b?b:null!=(r=null!=b?b:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?r:k[0].props.value;if(null!==P&&!h.some((e=>e.value===P)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${P}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:j}=(0,i.U)(),[x,w]=(0,a.useState)(P),T=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=f){const e=N[f];null!=e&&e!==x&&h.some((t=>t.value===e))&&w(e)}const E=e=>{const t=e.currentTarget,r=T.indexOf(t),a=h[r].value;a!==x&&(C(t),w(a),null!=f&&j(f,String(a)))},D=e=>{var t,r;let a=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const r=T.indexOf(e.currentTarget)+1;a=null!=(t=T[r])?t:T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=null!=(r=T[t])?r:T[T.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,n.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":c},y)},h.map((({value:e,label:t,attributes:r})=>{return a.createElement("li",(l=g({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>T.push(e),onKeyDown:D,onClick:E},r),o={className:(0,n.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":x===e})},d(l,m(o))),null!=t?t:e);var l,o}))),l?(0,a.cloneElement)(k.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function h(e){const t=(0,l.Z)();return a.createElement(k,g({key:String(t)},e))}},354264:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return v},default:function(){return h},frontMatter:function(){return b},metadata:function(){return f},toc:function(){return g}});var a=r(603905),n=r(751361),l=r(440034),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&d(e,r,t[r]);if(u)for(var r of u(t))c.call(t,r)&&d(e,r,t[r]);return e};const b={id:"boxplot",title:"Box Plot",sidebar_label:"Box Plot"},v=void 0,f={unversionedId:"plots/boxplot",id:"plots/boxplot",title:"Box Plot",description:"D\u0117\u017einis sklypas.",source:"@site/i18n/lt/docusaurus-plugin-content-docs/current/plots/boxplot.md",sourceDirName:"plots",slug:"/plots/boxplot",permalink:"/lt/docs/plots/boxplot",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/boxplot.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021-06-01",frontMatter:{id:"boxplot",title:"Box Plot",sidebar_label:"Box Plot"},sidebar:"docs",previous:{title:"Bar Chart",permalink:"/lt/docs/plots/barchart"},next:{title:"Contour Chart",permalink:"/lt/docs/plots/contourchart"}},y={},g=[{value:"Parinktys",id:"parinktys",level:2},{value:"Pavyzd\u017eiai",id:"pavyzd\u017eiai",level:2}],k={toc:g};function h(e){var t,r=e,{components:o}=r,d=((e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&c.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=m(m({},k),d),i(t,s({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"D\u0117\u017einis sklypas."),(0,a.kt)("h2",m({},{id:"parinktys"}),"Parinktys"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"data")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object (required)"),": ver\u010di\u0173 masyv\u0173 objektas. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"variable")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(array|string) (required)"),": rodomas (-i) kintamasis (-ieji). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"group")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(array|string|Factor)"),": vienas arba du grupavimo kintamieji. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"orientation")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"vertikali")," arba ",(0,a.kt)("inlineCode",{parentName:"li"},"horizontali")," orientacija. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'vertical'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"overlayPoints")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroliuoja, ar u\u017edengti ta\u0161kus.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,a.kt)("h2",m({},{id:"pavyzd\u017eiai"}),"Pavyzd\u017eiai"),(0,a.kt)(n.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Grouped",value:"grouped"},{label:"Multiple Variables",value:"multipleVariables"},{label:"Horizontal",value:"horizontal"},{label:"Overlay Points",value:"overlayPoints"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<BoxPlot \n    data={heartdisease} \n    variable="Age"\n/>\n'))),(0,a.kt)(l.Z,{value:"grouped",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<BoxPlot \n    data={heartdisease} \n    variable="Interventions"\n    group="Complications"\n/>\n'))),(0,a.kt)(l.Z,{value:"multipleVariables",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<BoxPlot \n    data={heartdisease} \n    variable={[ 'Age', 'Interventions', 'Comorbidities' ]}\n/>\n"))),(0,a.kt)(l.Z,{value:"horizontal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<BoxPlot \n    data={heartdisease} \n    variable={[ 'Age', 'Interventions', 'Comorbidities' ]}\n    orientation=\"horizontal\"\n/>\n"))),(0,a.kt)(l.Z,{value:"overlayPoints",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<BoxPlot \n    data={heartdisease} \n    variable={[ 'Age', 'Interventions', 'Comorbidities' ]}\n    orientation=\"horizontal\"\n    overlayPoints\n/>\n")))))}h.isMDXComponent=!0}}]);