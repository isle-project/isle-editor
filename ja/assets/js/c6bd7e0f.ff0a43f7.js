"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5447],{603905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,f=c["".concat(u,".").concat(d)]||c[d]||p[d]||i;return n?a.createElement(f,l(l({ref:t},m),{},{components:n})):a.createElement(f,l({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},358215:function(e,t,n){var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(487462),r=n(202784),i=n(972389),l=n(275773),o=n(386010),u="tabItem_LplD";function s(e){var t,n,i,s=e.lazy,m=e.block,p=e.defaultValue,c=e.values,d=e.groupId,f=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=c?c:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,l.lx)(b,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===p?p:null!=(t=null!=p?p:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=k[0])?void 0:i.props.value;if(null!==v&&!b.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,l.UB)(),h=g.tabGroupChoices,C=g.setTabGroupChoices,y=(0,r.useState)(v),D=y[0],w=y[1],O=[],T=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var j=h[d];null!=j&&j!==D&&b.some((function(e){return e.value===j}))&&w(j)}var x=function(e){var t=e.currentTarget,n=O.indexOf(t),a=b[n].value;a!==D&&(T(t),w(a),null!=d&&C(d,a))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},f)},b.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:function(e){return O.push(e)},onKeyDown:E,onFocus:x,onClick:x},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":D===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(k.filter((function(e){return e.props.value===D}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==D})}))))}function m(e){var t=(0,i.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},32266:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return c},default:function(){return f}});var a=n(487462),r=n(263366),i=(n(202784),n(603905)),l=n(409877),o=n(358215),u=["components"],s={id:"number-question",title:"Number Question",sidebar_label:"Number Question"},m=void 0,p={unversionedId:"questions/number-question",id:"questions/number-question",title:"Number Question",description:"\u6570\u5b57\u306e\u8cea\u554f\u6210\u5206\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/questions/number.md",sourceDirName:"questions",slug:"/questions/number-question",permalink:"/ja/docs/questions/number-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/number.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622567622,formattedLastUpdatedAt:"2021/6/1",frontMatter:{id:"number-question",title:"Number Question",sidebar_label:"Number Question"},sidebar:"docs",previous:{title:"Multiple Choice Matrix",permalink:"/ja/docs/questions/multiple-choice-matrix"},next:{title:"Order Question",permalink:"/ja/docs/questions/order-question"}},c=[{value:"\u30aa\u30d7\u30b7\u30e7\u30f3",id:"\u30aa\u30d7\u30b7\u30e7\u30f3",children:[],level:2},{value:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002",id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059",children:[],level:2}],d={toc:c};function f(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u6570\u5b57\u306e\u8cea\u554f\u6210\u5206\u3002"),(0,i.kt)("h2",{id:"\u30aa\u30d7\u30b7\u30e7\u30f3"},"\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"question")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \u30ca\u30f3\u30d0\u30fc\u30af\u30a8\u30b9\u30c1\u30e7\u30f3. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": \u30d2\u30f3\u30c8\u306e\u914d\u7f6e (",(0,i.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"right"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"bottom")," \u306e\u3044\u305a\u308c\u304b). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'top'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"hints")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": \u89e3\u7b54\u306e\u30d2\u30f3\u30c8. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"feedback")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": \u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u30dc\u30bf\u30f3\u3092\u8868\u793a\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"solution")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(number|array<number>)"),": \u554f\u984c\u306e\u6570\u5024\u89e3\u7b54\uff08\u914d\u5217\u304c\u4e0e\u3048\u3089\u308c\u305f\u5834\u5408\u306f\u8907\u6570\u306e\u6b63\u89e3\uff09\u3002. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"digits")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": \u751f\u5f92\u304c\u63d0\u4f9b\u3057\u305f\u7b54\u3048\u304c\u89e3\u7b54\u3068\u4e00\u81f4\u3057\u306a\u3051\u308c\u3070\u6b63\u3057\u3044\u3068\u307f\u306a\u3055\u308c\u306a\u3044\u6841\u6570\u30020\u306b\u8a2d\u5b9a\u3059\u308b\u3068\u3001\u6574\u6570\u3068\u3057\u3066\u4e00\u81f4\u3057\u307e\u3059\u3002null\u306b\u8a2d\u5b9a\u3059\u308b\u3068\u3001\u5b8c\u5168\u306b\u4e00\u81f4\u3059\u308b\u3082\u306e\u3092\u691c\u7d22\u3057\u307e\u3059\u3002. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"3"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"max")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": \u6700\u5927\u8a31\u5bb9\u5165\u529b\u5024. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"min")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": \u6700\u5c0f\u8a31\u5bb9\u5165\u529b\u5024. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": \u4e8b\u524d\u9078\u629e\u6570\u5165\u529b\u5024. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": \u306f\u3001\u5b66\u7fd2\u8005\u304c\u89e3\u7b54\u3092\u63d0\u51fa\u3057\u305f\u5f8c\u306b\u3001\u6b63\u89e3\u3092\u542b\u3080\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3092\u8868\u793a\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"submitAfterFeedback")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": \u306f\u3001\u89e3\u6c7a\u7b56\u304c\u660e\u3089\u304b\u306b\u306a\u3063\u305f\u5f8c\u3067\u3082\u518d\u63d0\u51fa\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u3079\u304d\u304b\u3069\u3046\u304b\u3092\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3057\u307e\u3059\u3002). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"nTries")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": \u4f55\u56de\u8a66\u884c\u3057\u305f\u5f8c\u306b\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3092\u63d0\u4f9b\u3059\u308b\u304b ( ",(0,i.kt)("inlineCode",{parentName:"li"},"provideFeedback")," \u304c ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," \u306e\u5834\u5408). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": \u6295\u7a3f\u901a\u77e5\u3092\u7121\u52b9\u306b\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"chat")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": \u8981\u7d20\u304c\u7d71\u5408\u3055\u308c\u305f\u30c1\u30e3\u30c3\u30c8\u3092\u6301\u3064\u3079\u304d\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"until")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"Date"),": \u5b66\u751f\u304c\u56de\u7b54\u3092\u63d0\u51fa\u3059\u308b\u307e\u3067\u306e\u6642\u9593. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"points")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": \u63a1\u70b9\u70b9\u6570. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": CSS\u30a4\u30f3\u30e9\u30a4\u30f3\u30b9\u30bf\u30a4\u30eb. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onChange")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": \u6570\u5024\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u5024\u304c\u5909\u66f4\u3055\u308c\u305f\u5f8c\u306b\u30c8\u30ea\u30ac\u3055\u308c\u308b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3067\u3001\u73fe\u5728\u306e\u5024\u3092\u552f\u4e00\u306e\u5f15\u6570\u3068\u3057\u3066\u53d7\u3051\u53d6\u308a\u307e\u3059\u3002. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": \u6700\u521d\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3068\u3057\u3066\u3001\u30a2\u30f3\u30b5\u30fc\u304c\u6b63\u3057\u304f\u56de\u7b54\u3055\u308c\u305f\u304b\u3069\u3046\u304b\u3092\u793a\u3059 ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean")," (\u8a72\u5f53\u3059\u308b\u5834\u5408\u306f ",(0,i.kt)("inlineCode",{parentName:"li"},"null"),") \u3068\u30012\u756a\u76ee\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3068\u3057\u3066\u4e0e\u3048\u3089\u308c\u305f\u30a2\u30f3\u30b5\u30fc\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,i.kt)("h2",{id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059"},"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Markdown",value:"markdownStyling"},{label:"With CSS",value:"withCSS"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<NumberQuestion\n    question="What is the number Pi? (include at least three digits after the decimal point)"\n    solution={3.142}\n/>\n'))),(0,i.kt)(o.Z,{value:"markdownStyling",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<NumberQuestion\n    question={<span>What is the number $\\pi$? (include at least _three_ digits after the decimal point)</span>}\n    solution={3.142}\n/>\n"))),(0,i.kt)(o.Z,{value:"withCSS",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<NumberQuestion\n    question={<span style={{ fontSize: 25, color: 'darkorange'}}>What is the number PI - three digits after the period</span>}\n    solution={3.142}\n/>\n")))))}f.isMDXComponent=!0}}]);