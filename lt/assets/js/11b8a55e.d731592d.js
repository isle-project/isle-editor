"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71741],{603905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var r=a(202784);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(a),c=n,b=p["".concat(s,".").concat(c)]||p[c]||d[c]||i;return a?r.createElement(b,o(o({ref:t},m),{},{components:a})):r.createElement(b,o({ref:t},m))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},440034:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(202784),n=a(386010),i="tabItem_Ymn6",o=Object.defineProperty,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function d({children:e,hidden:t,className:a}){return r.createElement("div",((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&m(e,a,t[a]);if(l)for(var a of l(t))u.call(t,a)&&m(e,a,t[a]);return e})({role:"tabpanel",className:(0,n.Z)(i,a)},{hidden:t}),e)}},751361:function(e,t,a){a.d(t,{Z:function(){return h}});var r=a(202784),n=a(386010),i=a(152670),o=a(258433),l=a(952326),s=a(638849),u="tabList__CuJ",m="tabItem_LNqP",d=Object.defineProperty,p=Object.defineProperties,c=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,v=(e,t,a)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))f.call(t,a)&&v(e,a,t[a]);if(b)for(var a of b(t))k.call(t,a)&&v(e,a,t[a]);return e};function g(e){var t,a;const{lazy:i,block:d,defaultValue:b,values:f,groupId:k,className:v}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=f?f:g.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),N=(0,o.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===b?b:null!=(a=null!=b?b:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?a:g[0].props.value;if(null!==O&&!h.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:j,setTabGroupChoices:w}=(0,l.U)(),[C,S]=(0,r.useState)(O),P=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=k){const e=j[k];null!=e&&e!==C&&h.some((t=>t.value===e))&&S(e)}const x=e=>{const t=e.currentTarget,a=P.indexOf(t),r=h[a].value;r!==C&&(T(t),S(r),null!=k&&w(k,String(r)))},E=e=>{var t,a;let r=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const a=P.indexOf(e.currentTarget)+1;r=null!=(t=P[a])?t:P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;r=null!=(a=P[t])?a:P[P.length-1];break}}null==r||r.focus()};return r.createElement("div",{className:(0,n.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":d},v)},h.map((({value:e,label:t,attributes:a})=>{return r.createElement("li",(i=y({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>P.push(e),onKeyDown:E,onClick:x},a),o={className:(0,n.Z)("tabs__item",m,null==a?void 0:a.className,{"tabs__item--active":C===e})},p(i,c(o))),null!=t?t:e);var i,o}))),i?(0,r.cloneElement)(g.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function h(e){const t=(0,i.Z)();return r.createElement(g,y({key:String(t)},e))}},429017:function(e,t,a){a.r(t),a.d(t,{assets:function(){return v},contentTitle:function(){return f},default:function(){return h},frontMatter:function(){return b},metadata:function(){return k},toc:function(){return y}});var r=a(603905),n=a(751361),i=a(440034),o=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&p(e,a,t[a]);if(u)for(var a of u(t))d.call(t,a)&&p(e,a,t[a]);return e};const b={id:"shaped-form",title:"Shaped Form",sidebar_label:"Shaped Form"},f=void 0,k={unversionedId:"shaped-form",id:"shaped-form",title:"Shaped Form",description:"Komponentas, leid\u017eiantis rodyti fig\u016bras, sukeliamas vaizd\u0173 su alfa kanalu.",source:"@site/i18n/lt/docusaurus-plugin-content-docs/current/shaped-form.md",sourceDirName:".",slug:"/shaped-form",permalink:"/lt/docs/shaped-form",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/shaped-form.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021-06-01",frontMatter:{id:"shaped-form",title:"Shaped Form",sidebar_label:"Shaped Form"},sidebar:"docs",previous:{title:"Seal",permalink:"/lt/docs/seal"},next:{title:"Sortable Tree",permalink:"/lt/docs/sortable-tree"}},v={},y=[{value:"Parinktys",id:"parinktys",level:2},{value:"Pavyzd\u017eiai",id:"pavyzd\u017eiai",level:2}],g={toc:y};function h(e){var t,a=e,{components:o}=a,p=((e,t)=>{var a={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&d.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=c(c({},g),p),l(t,s({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Komponentas, leid\u017eiantis rodyti fig\u016bras, sukeliamas vaizd\u0173 su alfa kanalu."),(0,r.kt)("h2",c({},{id:"parinktys"}),"Parinktys"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": formos tipas (arba ",(0,r.kt)("inlineCode",{parentName:"li"},"oktagonas"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"trikampis"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"trapezoidas"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"paralelegramas"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"rombas"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"penktakampis"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"\u0161e\u0161iakampis"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"septagonas"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"nea\u0161triakampis"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"dekagonas"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"smailiakampis"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"rabetas"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"kairioji rodykl\u0117"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"de\u0161inioji rodykl\u0117"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"kairiasis ta\u0161kas"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"de\u0161inysis ta\u0161kas"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"kairiasis \u0161evronas"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"de\u0161inysis \u0161evronas"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"\u017evaig\u017ed\u0117"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"kry\u017eius"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"prane\u0161imas"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"u\u017edaryti")," arba ",(0,r.kt)("inlineCode",{parentName:"li"},"karkasas"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'star'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"src")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": fono paveiksl\u0117lio URL. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": objekto stilius, jame gali b\u016bti bet koks CSS, \u012fskaitant animacijas.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onClick")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": \u012fvykio tvarkykl\u0117, i\u0161kvie\u010diama, kai paspaud\u017eiamas paveiksl\u0117lis. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,r.kt)("h2",c({},{id:"pavyzd\u017eiai"}),"Pavyzd\u017eiai"),(0,r.kt)(n.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Style",value:"withStyle"},{label:"Size Variation",value:"sizeVariation"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. \n<ShapedForm type="star" />\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n'))),(0,r.kt)(i.Z,{value:"withStyle",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<div style= {{ background: 'black', color: 'white', height: 280, width: 280}}>\n<ShapedForm type=\"star\"  style={{ background: 'red', boxShadow: 'inset 100px 88px 5px yellow'}}/>\n</div>\n"))),(0,r.kt)(i.Z,{value:"SizeVariation",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<div style= {{ background: 'darkgray', color: 'black', height: 280, width: '100%'}}>\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, \n<ShapedForm type=\"cross\"  style={{ background: 'gold', width: 85, height: 100, margin: 10, marginTop: 22 }}/>\nsed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. \n</div>\n")))))}h.isMDXComponent=!0}}]);