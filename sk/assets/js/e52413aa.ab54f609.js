"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[76654],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(202784),a=n(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return r.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,a.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return N}});var r=n(202784),a=n(386010),l=n(152670),i=n(258433),o=n(952326),u=n(638849),s="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&k(e,n,t[n]);if(f)for(var n of f(t))v.call(t,n)&&k(e,n,t[n]);return e};function y(e){var t,n;const{lazy:l,block:c,defaultValue:f,values:b,groupId:v,className:k}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=b?b:y.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),h=(0,i.l)(N,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===f?f:null!=(n=null!=f?f:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?n:y[0].props.value;if(null!==O&&!N.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:j,setTabGroupChoices:w}=(0,o.U)(),[C,P]=(0,r.useState)(O),D=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=v){const e=j[v];null!=e&&e!==C&&N.some((t=>t.value===e))&&P(e)}const x=e=>{const t=e.currentTarget,n=D.indexOf(t),r=N[n].value;r!==C&&(T(t),P(r),null!=v&&w(v,String(r)))},E=e=>{var t,n;let r=null;switch(e.key){case"ArrowRight":{const n=D.indexOf(e.currentTarget)+1;r=null!=(t=D[n])?t:D[0];break}case"ArrowLeft":{const t=D.indexOf(e.currentTarget)-1;r=null!=(n=D[t])?n:D[D.length-1];break}}null==r||r.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":c},k)},N.map((({value:e,label:t,attributes:n})=>{return r.createElement("li",(l=g({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>D.push(e),onKeyDown:E,onFocus:x,onClick:x},n),i={className:(0,a.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":C===e})},m(l,d(i))),null!=t?t:e);var l,i}))),l?(0,r.cloneElement)(y.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function N(e){const t=(0,l.Z)();return r.createElement(y,g({key:String(t)},e))}},331629:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return b},default:function(){return N},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return g}});var r=n(603905),a=n(751361),l=n(440034),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&m(e,n,t[n]);return e};const f={id:"r-plot",title:"R Plot",sidebar_label:"R Plot"},b=void 0,v={unversionedId:"r/r-plot",id:"r/r-plot",title:"R Plot",description:"Komponent na vykreslenie grafu R v r\xe1mci lekcie ISLE.",source:"@site/i18n/sk/docusaurus-plugin-content-docs/current/r/plot.md",sourceDirName:"r",slug:"/r/r-plot",permalink:"/sk/docs/r/r-plot",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/r/plot.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. 6. 2021",frontMatter:{id:"r-plot",title:"R Plot",sidebar_label:"R Plot"},sidebar:"docs",previous:{title:"R Output",permalink:"/sk/docs/r/r-output"},next:{title:"R Shell",permalink:"/sk/docs/r/r-shell"}},k={},g=[{value:"Mo\u017enosti",id:"mo\u017enosti",level:2},{value:"Pr\xedklady",id:"pr\xedklady",level:2}],y={toc:g};function N(e){var t,n=e,{components:i}=n,m=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},y),m),o(t,u({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Komponent na vykreslenie grafu R v r\xe1mci lekcie ISLE."),(0,r.kt)("h2",d({},{id:"mo\u017enosti"}),"Mo\u017enosti"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"code")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": K\xf3d R na generovanie grafu. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"width")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(number|string)"),": \u0161\xedrka grafu (v px). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"600"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"height")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(number|string)"),": v\xfd\u0161ka grafu (v px). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'auto'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"draggable")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, \u010di m\xe1 by\u0165 plocha pre\u0165ahovate\u013en\xe1.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fileType")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": typ s\xfaboru grafu (",(0,r.kt)("inlineCode",{parentName:"li"},"png")," alebo ",(0,r.kt)("inlineCode",{parentName:"li"},"svg"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'svg'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"libraries")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array"),": Kni\u017enice R, ktor\xe9 by sa mali automaticky na\u010d\xedta\u0165 pri spusten\xed vstupn\xe9ho k\xf3du. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"prependCode")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|array)"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," alebo ",(0,r.kt)("inlineCode",{parentName:"li"},"array")," \xfaryvkov k\xf3du R, ktor\xe9 sa pri vyhodnocovan\xed pridaj\xfa ku k\xf3du ulo\u017een\xe9mu v ",(0,r.kt)("inlineCode",{parentName:"li"},"code"),".. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"meta")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": metainform\xe1cie o pozemku. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"className")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": n\xe1zov triedy. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onDone")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": sp\xe4tn\xe9 volanie vyvolan\xe9 s argumentmi ",(0,r.kt)("inlineCode",{parentName:"li"},"err"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"img")," a ",(0,r.kt)("inlineCode",{parentName:"li"},"body")," po vytvoren\xed v\xfdkresu. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onDone() {}"),".")),(0,r.kt)("h2",d({},{id:"pr\xedklady"}),"Pr\xedklady"),(0,r.kt)(a.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Draggable",value:"draggable"},{label:"Custom Dimensions",value:"customDimensions"},{label:"Using Libraries",value:"usingLibraries"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<RPlot code="hist( c(20,50,40,70,40,30) )" />\n'))),(0,r.kt)(l.Z,{value:"draggable",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<RPlot draggable code="hist( c(20,50,40,70,40,30) )" />\n'))),(0,r.kt)(l.Z,{value:"customDimensions",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<RPlot code="hist( c(20,50,40,70,40,30) )" width="900px" />\n'))),(0,r.kt)(l.Z,{value:"usingLibraries",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<RPlot \n    libraries={[ 'ggplot2' ]}\n    code=\"qplot(mpg, wt, data = mtcars)\" \n/>\n")))))}N.isMDXComponent=!0}}]);