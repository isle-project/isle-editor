"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[98529],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(202784),r=n(386010),i="tabItem_Ymn6",l=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function m({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(i,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(202784),r=n(386010),i=n(152670),l=n(258433),o=n(952326),s=n(638849),u="tabList__CuJ",p="tabItem_LNqP",m=Object.defineProperty,c=Object.defineProperties,d=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,N=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&N(e,n,t[n]);if(f)for(var n of f(t))k.call(t,n)&&N(e,n,t[n]);return e};function g(e){var t,n;const{lazy:i,block:m,defaultValue:f,values:b,groupId:k,className:N}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=b?b:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),y=(0,l.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===f?f:null!=(n=null!=f?f:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?n:g[0].props.value;if(null!==w&&!v.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:C,setTabGroupChoices:x}=(0,o.U)(),[O,T]=(0,a.useState)(w),j=[],{blockElementScrollPositionUntilNextRender:D}=(0,s.o5)();if(null!=k){const e=C[k];null!=e&&e!==O&&v.some((t=>t.value===e))&&T(e)}const P=e=>{const t=e.currentTarget,n=j.indexOf(t),a=v[n].value;a!==O&&(D(t),T(a),null!=k&&x(k,String(a)))},E=e=>{var t,n;let a=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const n=j.indexOf(e.currentTarget)+1;a=null!=(t=j[n])?t:j[0];break}case"ArrowLeft":{const t=j.indexOf(e.currentTarget)-1;a=null!=(n=j[t])?n:j[j.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},N)},v.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(i=h({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>j.push(e),onKeyDown:E,onClick:P},n),l={className:(0,r.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":O===e})},c(i,d(l))),null!=t?t:e);var i,l}))),i?(0,a.cloneElement)(g.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function v(e){const t=(0,i.Z)();return a.createElement(g,h({key:String(t)},e))}},510679:function(e,t,n){n.r(t),n.d(t,{assets:function(){return N},contentTitle:function(){return b},default:function(){return v},frontMatter:function(){return f},metadata:function(){return k},toc:function(){return h}});var a=n(603905),r=n(751361),i=n(440034),l=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(u)for(var n of u(t))m.call(t,n)&&c(e,n,t[n]);return e};const f={id:"free-text-question",title:"Free Text Question",sidebar_label:"Free Text Question"},b=void 0,k={unversionedId:"questions/free-text-question",id:"questions/free-text-question",title:"Free Text Question",description:"\u5b66\u751f\u306b\u3088\u308b\u56de\u7b54\u304c\u30d5\u30ea\u30fc\u30c6\u30ad\u30b9\u30c8\u306e\u5f62\u3067\u63d0\u4f9b\u3055\u308c\u308b\u3079\u304d\u554f\u984c\u306e\u305f\u3081\u306eISLE\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/questions/free-text.md",sourceDirName:"questions",slug:"/questions/free-text-question",permalink:"/ja/docs/questions/free-text-question",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/free-text.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633715852,formattedLastUpdatedAt:"2021\u5e7410\u67088\u65e5",frontMatter:{id:"free-text-question",title:"Free Text Question",sidebar_label:"Free Text Question"},sidebar:"docs",previous:{title:"File Question",permalink:"/ja/docs/questions/file-question"},next:{title:"Image Question",permalink:"/ja/docs/questions/image-question"}},N={},h=[{value:"\u30aa\u30d7\u30b7\u30e7\u30f3",id:"\u30aa\u30d7\u30b7\u30e7\u30f3",level:2},{value:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002",id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059",level:2}],g={toc:h};function v(e){var t,n=e,{components:l}=n,c=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&m.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},g),c),o(t,s({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\u5b66\u751f\u306b\u3088\u308b\u56de\u7b54\u304c\u30d5\u30ea\u30fc\u30c6\u30ad\u30b9\u30c8\u306e\u5f62\u3067\u63d0\u4f9b\u3055\u308c\u308b\u3079\u304d\u554f\u984c\u306e\u305f\u3081\u306eISLE\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3002"),(0,a.kt)("h2",d({},{id:"\u30aa\u30d7\u30b7\u30e7\u30f3"}),"\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"question")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \u30d5\u30ea\u30fc\u30c6\u30ad\u30b9\u30c8\u306e\u8cea\u554f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u4e0a\u90e8\u306b\u8868\u793a\u3055\u308c\u308b\u8cea\u554f. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hints")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": \u89e3\u7b54\u306e\u30d2\u30f3\u30c8. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \u30d2\u30f3\u30c8\u306e\u914d\u7f6e (",(0,a.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"right"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"bottom")," \u306e\u3044\u305a\u308c\u304b). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'top'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"feedback")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u30dc\u30bf\u30f3\u3092\u8868\u793a\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"solution")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \u554f\u984c\u306e\u6a21\u7bc4\u89e3\u7b54. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"instantSolution")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u6a21\u7bc4\u89e3\u7b54\u306e\u8868\u793a\u3092\u3059\u3050\u306b\u5207\u308a\u66ff\u3048\u3089\u308c\u308b\u304b\u3069\u3046\u304b. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"rows")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u5b66\u751f\u304c\u7b54\u3048\u3092\u5165\u529b\u3059\u308b\u305f\u3081\u306e\u30c6\u30ad\u30b9\u30c8\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u884c\u6570. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"chat")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u8cea\u554f\u306b\u5bfe\u3057\u3066\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u3092\u6709\u52b9\u306b\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"resizable")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u30c6\u30ad\u30b9\u30c8\u30a8\u30ea\u30a2\u306e\u30b5\u30a4\u30ba\u3092\u5909\u66f4\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"placeholder")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \u30d7\u30ec\u30fc\u30b9\u30db\u30eb\u30c0\u30c6\u30ad\u30b9\u30c8. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u6295\u7a3f\u901a\u77e5\u3092\u7121\u52b9\u306b\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"submissionMsg")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \u51fa\u984c\u901a\u77e5. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"resubmissionMsg")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \u4ee5\u5f8c\u306e\u6295\u7a3f\u901a\u77e5. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'You have successfully re-submitted your answer.'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u306f\u3001\u5b66\u7fd2\u8005\u304c\u89e3\u7b54\u3092\u63d0\u51fa\u3057\u305f\u5f8c\u306b\u3001\u6b63\u89e3\u3092\u542b\u3080\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3092\u8868\u793a\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"maxlength")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u6700\u5927\u8a31\u5bb9\u6587\u5b57\u6570. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"2500"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"until")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"Date"),": \u5b66\u751f\u304c\u56de\u7b54\u3092\u63d0\u51fa\u3059\u308b\u307e\u3067\u306e\u6642\u9593. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"points")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u63a1\u70b9\u70b9\u6570. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"className")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \u30af\u30e9\u30b9\u540d. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS\u30a4\u30f3\u30e9\u30a4\u30f3\u30b9\u30bf\u30a4\u30eb. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onChange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": \u30c6\u30ad\u30b9\u30c8\u30a8\u30ea\u30a2\u306e\u5024\u304c\u5909\u66f4\u3055\u308c\u308b\u305f\u3073\u306b\u547c\u3073\u51fa\u3055\u308c\u308b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af; \u73fe\u5728\u306e\u30c6\u30ad\u30b9\u30c8\u3092\u552f\u4e00\u306e\u5f15\u6570\u3068\u3057\u3066\u53d7\u3051\u53d6\u308a\u307e\u3059\u3002. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": \u30e6\u30fc\u30b6\u304c\u56de\u7b54\u3092\u9001\u4fe1\u3059\u308b\u969b\u306b\u547c\u3073\u51fa\u3055\u308c\u308b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af; \u9001\u4fe1\u3055\u308c\u305f\u30c6\u30ad\u30b9\u30c8\u3092\u552f\u4e00\u306e\u5f15\u6570\u3068\u3057\u3066\u53d7\u3051\u53d6\u308a\u307e\u3059\u3002. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,a.kt)("h2",d({},{id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059"}),"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Points for Grading",value:"withPointsForGrading"},{label:"No Feedback",value:"withoutFeedbackAndNotification"},{label:"Solution",value:"withSolution"},{label:"Hints",value:"withHints"},{label:"Placeholder",value:"placeholderText"},{label:"Due Date",value:"dueDate"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<FreeTextQuestion \n    question="Please tell us your thoughts about this course." \n    rows={3} \n/>\n'))),(0,a.kt)(i.Z,{value:"withPointsForGrading",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<FreeTextQuestion \n    question={<span>Can you please explain Montesquieu's System of *separation of powers*?</span>} \n    rows={3} \n    points={15}\n/>\n"))),(0,a.kt)(i.Z,{value:"withoutFeedbackAndNotification",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<FreeTextQuestion \n    question="Please tell us your thoughts about this course." \n    rows={3}\n    disableSubmitNotification \n    feedback={false}\n/>\n'))),(0,a.kt)(i.Z,{value:"withSolution",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<FreeTextQuestion \n    question="Who was the English prime minister who spoke of \'blood, sweat and tears\'?" \n    rows={1} \n    solution="Winston Churchill" \n/>\n'))),(0,a.kt)(i.Z,{value:"withHints",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<FreeTextQuestion \n    question="Who was the English prime minister who spoke of \'blood, sweat and tears\'?" \n    rows={1} \n    solution="Winston Churchill" \n    hints = {["No, it was not Margret Thatcher", "He believed in Aliens by the way", "His first name was Winston - like the guy in 1984"]}\n    submissionMsg = "His name was Winston churchill, and it occurred in a speech given by him to the House of Commons of the Parliament of the United Kingdom on 13 May 1940. The speech is sometimes known by that name"\n/>\n'))),(0,a.kt)(i.Z,{value:"placeholderText",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<FreeTextQuestion \n    question="Who was the English prime minister who spoke of \'blood, sweat and tears\'?" \n    rows={3} \n    solution="Winston Churchill" \n    placeholder="Think of an overweight politician with a big cigar in his mouth."\n/>\n'))),(0,a.kt)(i.Z,{value:"dueDate",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<FreeTextQuestion \n    question="Please tell us your thoughts about this course." \n    rows={3} \n    until={new Date( Date.UTC(2029, 0, 1, 3, 33 ) )}\n    placeholder="You can set a date until answers are accepted. In this case it is 2020, 1st of January, 3:30 am UTC time."\n/>\n')))))}v.isMDXComponent=!0}}]);