"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10505],{603905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return p}});var r=a(202784);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(a),p=n,b=c["".concat(s,".").concat(p)]||c[p]||d[p]||o;return a?r.createElement(b,i(i({ref:t},m),{},{components:a})):r.createElement(b,i({ref:t},m))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},440034:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(202784),n=a(386010),o="tabItem_Ymn6",i=Object.defineProperty,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function d({children:e,hidden:t,className:a}){return r.createElement("div",((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&m(e,a,t[a]);if(l)for(var a of l(t))u.call(t,a)&&m(e,a,t[a]);return e})({role:"tabpanel",className:(0,n.Z)(o,a)},{hidden:t}),e)}},751361:function(e,t,a){a.d(t,{Z:function(){return h}});var r=a(202784),n=a(386010),o=a(152670),i=a(258433),l=a(952326),s=a(638849),u="tabList__CuJ",m="tabItem_LNqP",d=Object.defineProperty,c=Object.defineProperties,p=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,g=(e,t,a)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))f.call(t,a)&&g(e,a,t[a]);if(b)for(var a of b(t))v.call(t,a)&&g(e,a,t[a]);return e};function k(e){var t,a;const{lazy:o,block:d,defaultValue:b,values:f,groupId:v,className:g}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=f?f:k.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),N=(0,i.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===b?b:null!=(a=null!=b?b:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?a:k[0].props.value;if(null!==O&&!h.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:j}=(0,l.U)(),[C,S]=(0,r.useState)(O),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=v){const e=w[v];null!=e&&e!==C&&h.some((t=>t.value===e))&&S(e)}const E=e=>{const t=e.currentTarget,a=T.indexOf(t),r=h[a].value;r!==C&&(x(t),S(r),null!=v&&j(v,String(r)))},P=e=>{var t,a;let r=null;switch(e.key){case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;r=null!=(t=T[a])?t:T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;r=null!=(a=T[t])?a:T[T.length-1];break}}null==r||r.focus()};return r.createElement("div",{className:(0,n.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":d},g)},h.map((({value:e,label:t,attributes:a})=>{return r.createElement("li",(o=y({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>T.push(e),onKeyDown:P,onFocus:E,onClick:E},a),i={className:(0,n.Z)("tabs__item",m,null==a?void 0:a.className,{"tabs__item--active":C===e})},c(o,p(i))),null!=t?t:e);var o,i}))),o?(0,r.cloneElement)(k.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function h(e){const t=(0,o.Z)();return r.createElement(k,y({key:String(t)},e))}},317644:function(e,t,a){a.r(t),a.d(t,{assets:function(){return g},contentTitle:function(){return f},default:function(){return h},frontMatter:function(){return b},metadata:function(){return v},toc:function(){return y}});var r=a(603905),n=a(751361),o=a(440034),i=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&c(e,a,t[a]);if(u)for(var a of u(t))d.call(t,a)&&c(e,a,t[a]);return e};const b={id:"shaped-form",title:"Shaped Form",sidebar_label:"Shaped Form"},f=void 0,v={unversionedId:"shaped-form",id:"shaped-form",title:"Shaped Form",description:"Un componente che permette la visualizzazione di forme, innescate da immagini con canale alfa.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/shaped-form.md",sourceDirName:".",slug:"/shaped-form",permalink:"/it/docs/shaped-form",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/shaped-form.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614201626,formattedLastUpdatedAt:"24 feb 2021",frontMatter:{id:"shaped-form",title:"Shaped Form",sidebar_label:"Shaped Form"},sidebar:"docs",previous:{title:"Seal",permalink:"/it/docs/seal"},next:{title:"Sortable Tree",permalink:"/it/docs/sortable-tree"}},g={},y=[{value:"Opzioni",id:"opzioni",level:2},{value:"Esempi",id:"esempi",level:2}],k={toc:y};function h(e){var t,a=e,{components:i}=a,c=((e,t)=>{var a={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&d.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=p(p({},k),c),l(t,s({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Un componente che permette la visualizzazione di forme, innescate da immagini con canale alfa."),(0,r.kt)("h2",p({},{id:"opzioni"}),"Opzioni"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": tipo di forma (sia ",(0,r.kt)("inlineCode",{parentName:"li"},"octagon"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"triangle"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"trapezoid"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"parallelogram"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"rhombus"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"pentagon"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"hexagon"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"heptagon"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"nonagon"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"decagon"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"bevel"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"rabbet"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"left-arrow"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"right-arrow"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"left-point"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"right-point"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"left-chevron"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"right-chevron"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"star"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"cross"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"message"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"close"),", o ",(0,r.kt)("inlineCode",{parentName:"li"},"frame"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'star'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"src")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": l'URL dell'immagine di sfondo. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": lo stile dell'oggetto, pu\xf2 contenere qualsiasi css comprese le animazioni. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onClick")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": gestore di eventi richiamato quando l'immagine viene cliccata. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,r.kt)("h2",p({},{id:"esempi"}),"Esempi"),(0,r.kt)(n.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Style",value:"withStyle"},{label:"Size Variation",value:"sizeVariation"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. \n<ShapedForm type="star" />\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n'))),(0,r.kt)(o.Z,{value:"withStyle",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<div style= {{ background: 'black', color: 'white', height: 280, width: 280}}>\n<ShapedForm type=\"star\"  style={{ background: 'red', boxShadow: 'inset 100px 88px 5px yellow'}}/>\n</div>\n"))),(0,r.kt)(o.Z,{value:"SizeVariation",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<div style= {{ background: 'darkgray', color: 'black', height: 280, width: '100%'}}>\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, \n<ShapedForm type=\"cross\"  style={{ background: 'gold', width: 85, height: 100, margin: 10, marginTop: 22 }}/>\nsed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. \n</div>\n")))))}h.isMDXComponent=!0}}]);