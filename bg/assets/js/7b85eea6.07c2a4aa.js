"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[90608],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,b=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(202784),a=n(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return r.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,a.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(202784),a=n(386010),l=n(152670),i=n(258433),o=n(952326),u=n(638849),s="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&y(e,n,t[n]);if(b)for(var n of b(t))v.call(t,n)&&y(e,n,t[n]);return e};function g(e){var t,n;const{lazy:l,block:c,defaultValue:b,values:f,groupId:v,className:y}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=f?f:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),N=(0,i.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===b?b:null!=(n=null!=b?b:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?n:g[0].props.value;if(null!==O&&!h.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:C}=(0,o.U)(),[j,D]=(0,r.useState)(O),x=[],{blockElementScrollPositionUntilNextRender:P}=(0,u.o5)();if(null!=v){const e=w[v];null!=e&&e!==j&&h.some((t=>t.value===e))&&D(e)}const I=e=>{const t=e.currentTarget,n=x.indexOf(t),r=h[n].value;r!==j&&(P(t),D(r),null!=v&&C(v,String(r)))},T=e=>{var t,n;let r=null;switch(e.key){case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;r=null!=(t=x[n])?t:x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;r=null!=(n=x[t])?n:x[x.length-1];break}}null==r||r.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":c},y)},h.map((({value:e,label:t,attributes:n})=>{return r.createElement("li",(l=k({role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,key:e,ref:e=>x.push(e),onKeyDown:T,onFocus:I,onClick:I},n),i={className:(0,a.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":j===e})},d(l,m(i))),null!=t?t:e);var l,i}))),l?(0,r.cloneElement)(g.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function h(e){const t=(0,l.Z)();return r.createElement(g,k({key:String(t)},e))}},66316:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return h},frontMatter:function(){return b},metadata:function(){return v},toc:function(){return k}});var r=n(603905),a=n(751361),l=n(440034),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&d(e,n,t[n]);return e};const b={id:"dashboard",title:"Dashboard",sidebar_label:"Dashboard"},f=void 0,v={unversionedId:"dashboard",id:"dashboard",title:"Dashboard",description:"\u0422\u0430\u0431\u043b\u043e \u0437\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0437\u0430 \u043a\u043e\u043c\u0431\u0438\u043d\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430\u0442\u0430 \u043d\u0430 \u043d\u044f\u043a\u043e\u043b\u043a\u043e \u043f\u043e\u043b\u0435\u0442\u0430 \u0437\u0430 \u0432\u044a\u0432\u0435\u0436\u0434\u0430\u043d\u0435 \u043d\u0430 \u0434\u0435\u0446\u0430.",source:"@site/i18n/bg/docusaurus-plugin-content-docs/current/dashboard.md",sourceDirName:".",slug:"/dashboard",permalink:"/bg/docs/dashboard",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/dashboard.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1638825940,formattedLastUpdatedAt:"6.12.2021 \u0433.",frontMatter:{id:"dashboard",title:"Dashboard",sidebar_label:"Dashboard"},sidebar:"docs",previous:{title:"Sortable Tree",permalink:"/bg/docs/sortable-tree"},next:{title:"Data Sampler",permalink:"/bg/docs/data-sampler"}},y={},k=[{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u0438",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438",level:2}],g={toc:k};function h(e){var t,n=e,{components:i}=n,d=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},g),d),o(t,u({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u0422\u0430\u0431\u043b\u043e \u0437\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0437\u0430 \u043a\u043e\u043c\u0431\u0438\u043d\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430\u0442\u0430 \u043d\u0430 \u043d\u044f\u043a\u043e\u043b\u043a\u043e \u043f\u043e\u043b\u0435\u0442\u0430 \u0437\u0430 \u0432\u044a\u0432\u0435\u0436\u0434\u0430\u043d\u0435 \u043d\u0430 \u0434\u0435\u0446\u0430."),(0,r.kt)("h2",m({},{id:"\u043e\u043f\u0446\u0438\u0438"}),"\u041e\u043f\u0446\u0438\u0438"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"autoStart")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0430\u043a\u043e \u0435 \u0437\u0430\u0434\u0430\u0434\u0435\u043d\u0430 \u0441\u0442\u043e\u0439\u043d\u043e\u0441\u0442 ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0442\u0430 ",(0,r.kt)("inlineCode",{parentName:"li"},"onGenerate")," \u0441\u0435 \u0438\u0437\u043f\u044a\u043b\u043d\u044f\u0432\u0430 \u043f\u0440\u0438 \u0441\u0442\u0430\u0440\u0442\u0438\u0440\u0430\u043d\u0435 \u0441\u044a\u0441 \u0441\u0442\u043e\u0439\u043d\u043e\u0441\u0442\u0438\u0442\u0435 \u043f\u043e \u043f\u043e\u0434\u0440\u0430\u0437\u0431\u0438\u0440\u0430\u043d\u0435. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"autoUpdate")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0430 \u0434\u0430\u043b\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0442\u0430 ",(0,r.kt)("inlineCode",{parentName:"li"},"onGenerate")," \u0434\u0430 \u0441\u0435 \u0438\u0437\u0432\u0438\u043a\u0432\u0430 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u043d\u043e, \u043a\u043e\u0433\u0430\u0442\u043e \u0435\u0434\u043d\u043e \u043e\u0442 \u043f\u043e\u043b\u0435\u0442\u0430\u0442\u0430 \u0437\u0430 \u0432\u044a\u0432\u0435\u0436\u0434\u0430\u043d\u0435 \u043d\u0430 \u0434\u0435\u0442\u0435\u0442\u043e \u0441\u0435 \u043f\u0440\u043e\u043c\u0435\u043d\u0438.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"description")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u0430 \u0442\u0430\u0431\u043b\u043e\u0442\u043e \u0437\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disabled")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0430 \u0434\u0430\u043b\u0438 \u0442\u0430\u0431\u043b\u043e\u0442\u043e \u0437\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u0430 \u0431\u044a\u0434\u0435 \u0434\u0435\u0430\u043a\u0442\u0438\u0432\u0438\u0440\u0430\u043d\u043e. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"label")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u0435\u0442\u0438\u043a\u0435\u0442 \u043d\u0430 \u0431\u0443\u0442\u043e\u043d\u0430. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"maxWidth")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u043d\u0430 \u0448\u0438\u0440\u0438\u043d\u0430 \u043d\u0430 \u0442\u0430\u0431\u043b\u043e\u0442\u043e \u0437\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"600"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"className")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u0438\u043c\u0435 \u043d\u0430 \u043a\u043b\u0430\u0441\u0430. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"bodyClassName")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u0438\u043c\u0435 \u043d\u0430 \u043a\u043b\u0430\u0441\u0430 \u0437\u0430 \u0442\u044f\u043b\u043e\u0442\u043e \u043d\u0430 \u043a\u0430\u0440\u0442\u0430\u0442\u0430. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'d-grid gap-3'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS \u0438\u043d\u043b\u0430\u0439\u043d \u0441\u0442\u0438\u043b\u043e\u0432\u0435. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onGenerate")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": \u0444\u0443\u043d\u043a\u0446\u0438\u044f, \u043a\u043e\u044f\u0442\u043e \u0441\u0435 \u0438\u0437\u0432\u0438\u043a\u0432\u0430, \u043a\u043e\u0433\u0430\u0442\u043e \u0441\u0435 \u0449\u0440\u0430\u043a\u043d\u0435 \u0432\u044a\u0440\u0445\u0443 \u0431\u0443\u0442\u043e\u043d\u0430 \u0438\u043b\u0438 \u0441\u0435 \u043f\u0440\u043e\u043c\u0435\u043d\u0438 \u0435\u0434\u043d\u0430 \u043e\u0442 \u0432\u0445\u043e\u0434\u043d\u0438\u0442\u0435 \u0441\u0442\u043e\u0439\u043d\u043e\u0441\u0442\u0438 \u043d\u0430 \u0442\u0430\u0431\u043b\u043e\u0442\u043e \u0437\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 (\u0430\u043a\u043e ",(0,r.kt)("inlineCode",{parentName:"li"},"autoUpdate")," \u0435 \u0437\u0430\u0434\u0430\u0434\u0435\u043d\u043e \u043d\u0430 ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"). \u0424\u0443\u043d\u043a\u0446\u0438\u044f\u0442\u0430 \u0441\u0435 \u0438\u0437\u0432\u0438\u043a\u0432\u0430 \u0441\u044a\u0441 \u0441\u0442\u043e\u0439\u043d\u043e\u0441\u0442\u0438\u0442\u0435 \u043d\u0430 \u0432\u0445\u043e\u0434\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435\u0442\u0430 \u0432 \u0440\u0435\u0434\u0430, \u0432 \u043a\u043e\u0439\u0442\u043e \u0442\u0435 \u0441\u0430 \u043f\u043e\u0441\u0442\u0430\u0432\u0435\u043d\u0438 \u0432 \u0442\u0430\u0431\u043b\u043e\u0442\u043e \u0437\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onGenerate() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"title")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \u0437\u0430\u0433\u043b\u0430\u0432\u0438\u0435 \u043d\u0430 \u043a\u0430\u0440\u0442\u0430\u0442\u0430. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),".")),(0,r.kt)("h2",m({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438"}),"\u041f\u0440\u0438\u043c\u0435\u0440\u0438"),(0,r.kt)(a.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Multiple Inputs",value:"multipleInputs"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Dashboard title="Alerter" onGenerate={( x ) => { alert( x ); }} autoStart={false} >\n    <SliderInput\n        legend="Input value"\n    />\n</Dashboard>\n'))),(0,r.kt)(l.Z,{value:"multipleInputs",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Dashboard \n    title="Multiply three numbers."\n    style={{ width: 600, boxShadow: \'0 0 24px black\' }}\n    onGenerate={( x, y, z ) => { alert( x*y*z ); }} \n    autoStart={false} \n>\n    <SliderInput\n        legend="First Input Value"\n        rangeInputStyle = {{ width: 360 }}\n    />\n    <hr />\n    <SliderInput\n        legend="Second Input Value"\n        rangeInputStyle = {{ width: 360 }}\n    />\n    <hr />\n    <SliderInput\n        legend="Third Input Value"\n        rangeInputStyle = {{ width: 360 }}\n    />\n    <hr />\n</Dashboard>\n')))))}h.isMDXComponent=!0}}]);