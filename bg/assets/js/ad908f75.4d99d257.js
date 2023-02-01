"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[33160],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(202784),a=n(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return r.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&s(e,n,t[n]);return e})({role:"tabpanel",className:(0,a.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return N}});var r=n(202784),a=n(386010),l=n(152670),i=n(258433),o=n(952326),u=n(638849),p="tabList__CuJ",s="tabItem_LNqP",c=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&y(e,n,t[n]);if(f)for(var n of f(t))v.call(t,n)&&y(e,n,t[n]);return e};function g(e){var t,n;const{lazy:l,block:c,defaultValue:f,values:b,groupId:v,className:y}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=b?b:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),h=(0,i.l)(N,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===f?f:null!=(n=null!=f?f:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?n:g[0].props.value;if(null!==O&&!N.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:x,setTabGroupChoices:w}=(0,o.U)(),[C,j]=(0,r.useState)(O),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=v){const e=x[v];null!=e&&e!==C&&N.some((t=>t.value===e))&&j(e)}const P=e=>{const t=e.currentTarget,n=T.indexOf(t),r=N[n].value;r!==C&&(E(t),j(r),null!=v&&w(v,String(r)))},D=e=>{var t,n;let r=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;r=null!=(t=T[n])?t:T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;r=null!=(n=T[t])?n:T[T.length-1];break}}null==r||r.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":c},y)},N.map((({value:e,label:t,attributes:n})=>{return r.createElement("li",(l=k({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>T.push(e),onKeyDown:D,onClick:P},n),i={className:(0,a.Z)("tabs__item",s,null==n?void 0:n.className,{"tabs__item--active":C===e})},d(l,m(i))),null!=t?t:e);var l,i}))),l?(0,r.cloneElement)(g.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function N(e){const t=(0,l.Z)();return r.createElement(g,k({key:String(t)},e))}},149729:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return b},default:function(){return O},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return k}});var r=n(603905),a=n(751361),l=n(440034),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(p)for(var n of p(t))c.call(t,n)&&d(e,n,t[n]);return e};const f={id:"text-area",title:"Text Area",sidebar_label:"Text Area"},b=void 0,v={unversionedId:"input/text-area",id:"input/text-area",title:"Text Area",description:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043d\u0430 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u0430 \u043e\u0431\u043b\u0430\u0441\u0442. \u0418\u0437\u043f\u043e\u043b\u0437\u0432\u0430 \u0441\u0435 \u043a\u0430\u0442\u043e \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u0435\u043d \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442, \u043a\u0430\u0442\u043e \u043f\u0440\u043e\u043c\u0435\u043d\u0438\u0442\u0435 \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0441\u0435 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0432\u0430\u0442 \u0447\u0440\u0435\u0437 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 onChange.",source:"@site/i18n/bg/docusaurus-plugin-content-docs/current/input/text-area.md",sourceDirName:"input",slug:"/input/text-area",permalink:"/bg/docs/input/text-area",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/text-area.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1.06.2021 \u0433.",frontMatter:{id:"text-area",title:"Text Area",sidebar_label:"Text Area"},sidebar:"docs",previous:{title:"Slider Input",permalink:"/bg/docs/input/slider-input"},next:{title:"Text Input",permalink:"/bg/docs/input/text-input"}},y={},k=[{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u0438",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438",level:2},{value:"Examples",id:"examples",level:2}],g=(N="TextArea",function(e){return console.warn("Component "+N+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",m({},e))});var N;const h={toc:k};function O(e){var t,n=e,{components:i}=n,d=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},h),d),o(t,u({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043d\u0430 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u0430 \u043e\u0431\u043b\u0430\u0441\u0442. \u0418\u0437\u043f\u043e\u043b\u0437\u0432\u0430 \u0441\u0435 \u043a\u0430\u0442\u043e \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u0435\u043d \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442, \u043a\u0430\u0442\u043e \u043f\u0440\u043e\u043c\u0435\u043d\u0438\u0442\u0435 \u0442\u0440\u044f\u0431\u0432\u0430 \u0434\u0430 \u0441\u0435 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0432\u0430\u0442 \u0447\u0440\u0435\u0437 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"onChange"),"."),(0,r.kt)("h2",m({},{id:"\u043e\u043f\u0446\u0438\u0438"}),"\u041e\u043f\u0446\u0438\u0438"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u0441\u0442\u043e\u0439\u043d\u043e\u0441\u0442 \u043f\u043e \u043f\u043e\u0434\u0440\u0430\u0437\u0431\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u0430\u0442\u0430 \u043e\u0431\u043b\u0430\u0441\u0442. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"value")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u0430 \u0441\u0442\u043e\u0439\u043d\u043e\u0441\u0442 (\u0437\u0430 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0430\u043d \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disabled")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0430 \u0434\u0430\u043b\u0438 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u0430\u0442\u0430 \u043e\u0431\u043b\u0430\u0441\u0442 \u0434\u0430 \u0431\u044a\u0434\u0435 \u0434\u0435\u0430\u043a\u0442\u0438\u0432\u0438\u0440\u0430\u043d\u0430. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legend")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \u0442\u0435\u043a\u0441\u0442 \u043d\u0430 \u043b\u0435\u0433\u0435\u043d\u0434\u0430\u0442\u0430. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onBlur")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0437\u0430 \u043e\u0431\u0440\u0430\u0442\u043d\u0430 \u0432\u0440\u044a\u0437\u043a\u0430, \u043a\u043e\u044f\u0442\u043e \u0441\u0435 \u0437\u0430\u0434\u0435\u0439\u0441\u0442\u0432\u0430, \u043a\u043e\u0433\u0430\u0442\u043e \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u0430\u0442\u0430 \u043e\u0431\u043b\u0430\u0441\u0442 \u0438\u0437\u0433\u0443\u0431\u0438 \u0444\u043e\u043a\u0443\u0441. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onBlur() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChange")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0437\u0430 \u043e\u0431\u0440\u0430\u0442\u043d\u0430 \u0432\u0440\u044a\u0437\u043a\u0430, \u043a\u043e\u044f\u0442\u043e \u0441\u0435 \u0438\u0437\u0432\u0438\u043a\u0432\u0430 \u0441 \u043d\u043e\u0432\u0438\u044f \u0442\u0435\u043a\u0441\u0442 \u043f\u0440\u0438 \u043f\u0440\u043e\u043c\u044f\u043d\u0430 \u043d\u0430 \u0442\u0435\u043a\u0441\u0442\u0430 \u043d\u0430 \u043e\u0431\u043b\u0430\u0441\u0442\u0442\u0430. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"placeholder")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u0437\u0430\u043c\u0435\u0441\u0442\u0432\u0430\u0449 \u0442\u0435\u043a\u0441\u0442. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"resizable")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0430 \u0434\u0430\u043b\u0438 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u0430\u0442\u0430 \u043e\u0431\u043b\u0430\u0441\u0442 \u043c\u043e\u0436\u0435 \u0434\u0430 \u043f\u0440\u043e\u043c\u0435\u043d\u044f \u0440\u0430\u0437\u043c\u0435\u0440\u0430 \u0441\u0438 (\u043c\u043e\u0436\u0435 \u0434\u0430 \u0431\u044a\u0434\u0435 ",(0,r.kt)("inlineCode",{parentName:"li"},"\u0438 \u0434\u0432\u0435\u0442\u0435"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"\u0445\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u043d\u043e"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"\u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u043d\u043e")," \u0438\u043b\u0438 ",(0,r.kt)("inlineCode",{parentName:"li"},"\u043d\u044f\u043c\u0430"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'none'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"rows")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": \u0431\u0440\u043e\u0439 \u0440\u0435\u0434\u043e\u0432\u0435. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS \u0438\u043d\u043b\u0430\u0439\u043d \u0441\u0442\u0438\u043b\u043e\u0432\u0435. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,r.kt)("h2",m({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438"}),"\u041f\u0440\u0438\u043c\u0435\u0440\u0438"),(0,r.kt)("h2",m({},{id:"examples"}),"Examples"),(0,r.kt)(a.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Custom Style",value:"customStyle"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<TextArea\n    legend="Please enter a few sentences"\n    placeholder="Enter text"\n/>\n'))),(0,r.kt)(l.Z,{value:"customStyle",mdxType:"TabItem"},(0,r.kt)(g,{legend:"Please enter a few sentences",placeholder:"Enter text",style:{fontSize:33,fontFamily:"Georgia",boxShadow:"0 0 4px black",background:"rgb(238,174,202)",background:"radial-gradient(circle, rgba(255, 255, 0, 0.3) 44%, white 100%)"},mdxType:"TextArea"}))))}O.isMDXComponent=!0}}]);