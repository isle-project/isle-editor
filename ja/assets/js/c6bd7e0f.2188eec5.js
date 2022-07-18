"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25447],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,b=c["".concat(u,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(b,i(i({ref:t},p),{},{components:n})):a.createElement(b,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(202784),r=n(386010),l="tabItem_Ymn6",i=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function m({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return y}});var a=n(202784),r=n(386010),l=n(152670),i=n(258433),o=n(952326),u=n(638849),s="tabList__CuJ",p="tabItem_LNqP",m=Object.defineProperty,c=Object.defineProperties,d=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,N=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&N(e,n,t[n]);if(b)for(var n of b(t))k.call(t,n)&&N(e,n,t[n]);return e};function g(e){var t,n;const{lazy:l,block:m,defaultValue:b,values:f,groupId:k,className:N}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=null!=f?f:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),h=(0,i.l)(y,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const C=null===b?b:null!=(n=null!=b?b:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?n:g[0].props.value;if(null!==C&&!y.some((e=>e.value===C)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${C}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:O,setTabGroupChoices:w}=(0,o.U)(),[j,D]=(0,a.useState)(C),P=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=k){const e=O[k];null!=e&&e!==j&&y.some((t=>t.value===e))&&D(e)}const x=e=>{const t=e.currentTarget,n=P.indexOf(t),a=y[n].value;a!==j&&(T(t),D(a),null!=k&&w(k,String(a)))},E=e=>{var t,n;let a=null;switch(e.key){case"ArrowRight":{const n=P.indexOf(e.currentTarget)+1;a=null!=(t=P[n])?t:P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;a=null!=(n=P[t])?n:P[P.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},N)},y.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(l=v({role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,key:e,ref:e=>P.push(e),onKeyDown:E,onFocus:x,onClick:x},n),i={className:(0,r.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":j===e})},c(l,d(i))),null!=t?t:e);var l,i}))),l?(0,a.cloneElement)(g.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function y(e){const t=(0,l.Z)();return a.createElement(g,v({key:String(t)},e))}},966169:function(e,t,n){n.r(t),n.d(t,{assets:function(){return N},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return b},metadata:function(){return k},toc:function(){return v}});var a=n(603905),r=n(751361),l=n(440034),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))m.call(t,n)&&c(e,n,t[n]);return e};const b={id:"number-question",title:"Number Question",sidebar_label:"Number Question"},f=void 0,k={unversionedId:"questions/number-question",id:"questions/number-question",title:"Number Question",description:"\u6570\u5b57\u306e\u8cea\u554f\u6210\u5206\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/questions/number.md",sourceDirName:"questions",slug:"/questions/number-question",permalink:"/ja/docs/questions/number-question",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/number.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1651267477,formattedLastUpdatedAt:"2022\u5e744\u670829\u65e5",frontMatter:{id:"number-question",title:"Number Question",sidebar_label:"Number Question"},sidebar:"docs",previous:{title:"Multiple Choice Matrix",permalink:"/ja/docs/questions/multiple-choice-matrix"},next:{title:"Order Question",permalink:"/ja/docs/questions/order-question"}},N={},v=[{value:"\u30aa\u30d7\u30b7\u30e7\u30f3",id:"\u30aa\u30d7\u30b7\u30e7\u30f3",level:2},{value:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002",id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059",level:2}],g={toc:v};function y(e){var t,n=e,{components:i}=n,c=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&m.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},g),c),o(t,u({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\u6570\u5b57\u306e\u8cea\u554f\u6210\u5206\u3002"),(0,a.kt)("h2",d({},{id:"\u30aa\u30d7\u30b7\u30e7\u30f3"}),"\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"question")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \u30ca\u30f3\u30d0\u30fc\u30af\u30a8\u30b9\u30c1\u30e7\u30f3. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \u30d2\u30f3\u30c8\u306e\u914d\u7f6e (",(0,a.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"right"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"bottom")," \u306e\u3044\u305a\u308c\u304b). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'top'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hints")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": \u89e3\u7b54\u306e\u30d2\u30f3\u30c8. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"feedback")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u30dc\u30bf\u30f3\u3092\u8868\u793a\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"solution")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(number|array<number>)"),": \u554f\u984c\u306e\u6570\u5024\u89e3\u7b54\uff08\u914d\u5217\u304c\u4e0e\u3048\u3089\u308c\u305f\u5834\u5408\u306f\u8907\u6570\u306e\u6b63\u89e3\uff09\u3002. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"digits")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u751f\u5f92\u304c\u63d0\u4f9b\u3057\u305f\u7b54\u3048\u304c\u89e3\u7b54\u3068\u4e00\u81f4\u3057\u306a\u3051\u308c\u3070\u6b63\u3057\u3044\u3068\u307f\u306a\u3055\u308c\u306a\u3044\u6841\u6570\u30020\u306b\u8a2d\u5b9a\u3059\u308b\u3068\u3001\u6574\u6570\u3068\u3057\u3066\u4e00\u81f4\u3057\u307e\u3059\u3002null\u306b\u8a2d\u5b9a\u3059\u308b\u3068\u3001\u5b8c\u5168\u306b\u4e00\u81f4\u3059\u308b\u3082\u306e\u3092\u691c\u7d22\u3057\u307e\u3059\u3002. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"3"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"max")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u6700\u5927\u8a31\u5bb9\u5165\u529b\u5024. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"min")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u6700\u5c0f\u8a31\u5bb9\u5165\u529b\u5024. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u4e8b\u524d\u9078\u629e\u6570\u5165\u529b\u5024. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u306f\u3001\u5b66\u7fd2\u8005\u304c\u89e3\u7b54\u3092\u63d0\u51fa\u3057\u305f\u5f8c\u306b\u3001\u6b63\u89e3\u3092\u542b\u3080\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3092\u8868\u793a\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"submitAfterFeedback")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u89e3\u7b54\u304c\u660e\u3089\u304b\u306b\u306a\u3063\u305f\u5f8c\u3067\u3082\u518d\u6295\u7a3f\u304c\u53ef\u80fd\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"nTries")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u4f55\u56de\u8a66\u884c\u3057\u305f\u5f8c\u306b\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3092\u63d0\u4f9b\u3059\u308b\u304b ( ",(0,a.kt)("inlineCode",{parentName:"li"},"provideFeedback")," \u304c ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," \u306e\u5834\u5408). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u6295\u7a3f\u901a\u77e5\u3092\u7121\u52b9\u306b\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"chat")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u8981\u7d20\u304c\u7d71\u5408\u3055\u308c\u305f\u30c1\u30e3\u30c3\u30c8\u3092\u6301\u3064\u3079\u304d\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"until")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"Date"),": \u5b66\u751f\u304c\u56de\u7b54\u3092\u63d0\u51fa\u3059\u308b\u307e\u3067\u306e\u6642\u9593. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"points")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u63a1\u70b9\u70b9\u6570. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS\u30a4\u30f3\u30e9\u30a4\u30f3\u30b9\u30bf\u30a4\u30eb. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onChange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": \u6570\u5024\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u5024\u304c\u5909\u66f4\u3055\u308c\u305f\u5f8c\u306b\u30c8\u30ea\u30ac\u3055\u308c\u308b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3067\u3001\u73fe\u5728\u306e\u5024\u3092\u552f\u4e00\u306e\u5f15\u6570\u3068\u3057\u3066\u53d7\u3051\u53d6\u308a\u307e\u3059\u3002. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": \u6700\u521d\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3068\u3057\u3066\u3001\u30a2\u30f3\u30b5\u30fc\u304c\u6b63\u3057\u304f\u56de\u7b54\u3055\u308c\u305f\u304b\u3069\u3046\u304b\u3092\u793a\u3059 ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean")," (\u8a72\u5f53\u3059\u308b\u5834\u5408\u306f ",(0,a.kt)("inlineCode",{parentName:"li"},"null"),") \u3068\u30012\u756a\u76ee\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3068\u3057\u3066\u4e0e\u3048\u3089\u308c\u305f\u30a2\u30f3\u30b5\u30fc\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,a.kt)("h2",d({},{id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059"}),"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Markdown",value:"markdownStyling"},{label:"With CSS",value:"withCSS"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<NumberQuestion\n    question="What is the number Pi? (include at least three digits after the decimal point)"\n    solution={3.142}\n/>\n'))),(0,a.kt)(l.Z,{value:"markdownStyling",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<NumberQuestion\n    question={<span>What is the number $\\pi$? (include at least _three_ digits after the decimal point)</span>}\n    solution={3.142}\n/>\n"))),(0,a.kt)(l.Z,{value:"withCSS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<NumberQuestion\n    question={<span style={{ fontSize: 25, color: 'darkorange'}}>What is the number PI - three digits after the period</span>}\n    solution={3.142}\n/>\n")))))}y.isMDXComponent=!0}}]);