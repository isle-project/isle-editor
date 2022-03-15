"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6498],{603905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=i,f=p["".concat(u,".").concat(d)]||p[d]||c[d]||r;return n?a.createElement(f,l(l({ref:t},m),{},{components:n})):a.createElement(f,l({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},358215:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(202784);function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(487462),i=n(202784),r=n(972389),l=n(161419),o=n(386010),u="tabItem_LplD";function s(e){var t,n,r,s=e.lazy,m=e.block,c=e.defaultValue,p=e.values,d=e.groupId,f=e.className,b=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=p?p:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,l.lx)(k,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===c?c:null!=(t=null!=c?c:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=b[0])?void 0:r.props.value;if(null!==v&&!k.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,l.UB)(),g=N.tabGroupChoices,y=N.setTabGroupChoices,C=(0,i.useState)(v),w=C[0],T=C[1],D=[],j=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var O=g[d];null!=O&&O!==w&&k.some((function(e){return e.value===O}))&&T(O)}var x=function(e){var t=e.currentTarget,n=D.indexOf(t),a=k[n].value;a!==w&&(j(t),T(a),null!=d&&y(d,a))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=D.indexOf(e.currentTarget)+1;n=D[a]||D[0];break;case"ArrowLeft":var i=D.indexOf(e.currentTarget)-1;n=D[i]||D[D.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},f)},k.map((function(e){var t=e.value,n=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return D.push(e)},onKeyDown:E,onFocus:x,onClick:x},r,{className:(0,o.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),s?(0,i.cloneElement)(b.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function m(e){var t=(0,r.Z)();return i.createElement(s,(0,a.Z)({key:String(t)},e))}},675030:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return c},assets:function(){return p},toc:function(){return d},default:function(){return b}});var a=n(487462),i=n(263366),r=(n(202784),n(603905)),l=n(409877),o=n(358215),u=["components"],s={id:"match-list-question",title:"Match List Question",sidebar_label:"Match List Question"},m=void 0,c={unversionedId:"questions/match-list-question",id:"questions/match-list-question",title:"Match List Question",description:"\u5b66\u7fd2\u8005\u304c2\u3064\u306e\u30ea\u30b9\u30c8\u306e\u8981\u7d20\u3092\u6b63\u3057\u3044\u65b9\u6cd5\u3067\u4e00\u81f4\u3055\u305b\u308b\u554f\u984c\u3092\u4f5c\u6210\u3059\u308bISLE\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/questions/match-list.md",sourceDirName:"questions",slug:"/questions/match-list-question",permalink:"/ja/docs/questions/match-list-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/match-list.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614807536,formattedLastUpdatedAt:"2021/3/3",frontMatter:{id:"match-list-question",title:"Match List Question",sidebar_label:"Match List Question"},sidebar:"docs",previous:{title:"Image Question",permalink:"/ja/docs/questions/image-question"},next:{title:"Multiple Choice Question",permalink:"/ja/docs/questions/multiple-choice-question"}},p={},d=[{value:"\u30aa\u30d7\u30b7\u30e7\u30f3",id:"\u30aa\u30d7\u30b7\u30e7\u30f3",level:2},{value:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002",id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059",level:2}],f={toc:d};function b(e){var t=e.components,n=(0,i.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5b66\u7fd2\u8005\u304c2\u3064\u306e\u30ea\u30b9\u30c8\u306e\u8981\u7d20\u3092\u6b63\u3057\u3044\u65b9\u6cd5\u3067\u4e00\u81f4\u3055\u305b\u308b\u554f\u984c\u3092\u4f5c\u6210\u3059\u308bISLE\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3059\u3002"),(0,r.kt)("h2",{id:"\u30aa\u30d7\u30b7\u30e7\u30f3"},"\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"question")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \u30de\u30c3\u30c1\u30ea\u30b9\u30c8\u306e\u8cea\u554f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u5148\u982d\u306b\u8868\u793a\u3055\u308c\u308b\u8cea\u554f. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"elements")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<{a,b}>"),": \u30d5\u30ea\u30fc\u30c6\u30ad\u30b9\u30c8\u554f\u984c\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u5148\u982d\u306b\u8868\u793a\u3055\u308c\u308b\u6b63\u3057\u3044\u30da\u30a2\u3092\u4fdd\u6301\u3059\u308b ",(0,r.kt)("inlineCode",{parentName:"li"},"array")," \u3067\u3059\u3002\u5404 ",(0,r.kt)("inlineCode",{parentName:"li"},"array")," \u8981\u7d20\u306f ",(0,r.kt)("inlineCode",{parentName:"li"},"a")," \u3068 ",(0,r.kt)("inlineCode",{parentName:"li"},"b")," \u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u6301\u3064 ",(0,r.kt)("inlineCode",{parentName:"li"},"object")," \u3067\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u30d2\u30f3\u30c8\u306e\u914d\u7f6e (",(0,r.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"right"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"bottom")," \u306e\u3044\u305a\u308c\u304b). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hints")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": \u89e3\u7b54\u306e\u30d2\u30f3\u30c8. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u306f\u3001\u5b66\u7fd2\u8005\u304c\u89e3\u7b54\u3092\u63d0\u51fa\u3057\u305f\u5f8c\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u793a\u3057\u307e\u3059\u3002. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"feedback")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u30dc\u30bf\u30f3\u3092\u8868\u793a\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"chat")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u8981\u7d20\u304c\u7d71\u5408\u3055\u308c\u305f\u30c1\u30e3\u30c3\u30c8\u3092\u6301\u3064\u3079\u304d\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"colorScale")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array"),": \u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u6307\u5b9a\u3055\u308c\u305f\u8272\u304c\u30bf\u30a4\u30eb\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shuffle")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u8981\u7d20\u3092\u30de\u30c3\u30c1\u3055\u305b\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\u30ab\u30e9\u30e0\u306e ",(0,r.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"right"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"both")," \u306e\u3044\u305a\u308c\u304b\u3092\u30b7\u30e3\u30c3\u30d5\u30eb\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059; \u4e21\u5074\u306e\u8981\u7d20\u3092\u30b7\u30e3\u30c3\u30d5\u30eb\u3057\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u306b\u306f ",(0,r.kt)("inlineCode",{parentName:"li"},"none")," \u306a\u3069\u306e\u5024\u3092\u6307\u5b9a\u3057\u307e\u3059 (\u89e3\u6c7a\u7b56\u304c\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u306b\u4fbf\u5229\u3067\u3059)\u3002. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'both'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u6295\u7a3f\u901a\u77e5\u3092\u7121\u52b9\u306b\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"submissionMsg")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u51fa\u984c\u901a\u77e5. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'You have successfully submitted your answer.'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"resubmissionMsg")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u4ee5\u5f8c\u306e\u6295\u7a3f\u901a\u77e5. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'You have successfully re-submitted your answer.'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"until")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"Date"),": \u5b66\u751f\u304c\u56de\u7b54\u3092\u63d0\u51fa\u3059\u308b\u307e\u3067\u306e\u6642\u9593. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"points")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": \u63a1\u70b9\u70b9\u6570. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"className")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u30af\u30e9\u30b9\u540d. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS\u30a4\u30f3\u30e9\u30a4\u30f3\u30b9\u30bf\u30a4\u30eb. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": \u5b66\u751f\u304c\u56de\u7b54\u3092\u63d0\u51fa\u3057\u305f\u3068\u304d\u306b\u547c\u3073\u51fa\u3055\u308c\u308b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,r.kt)("h2",{id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059"},"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Markdown",value:"withMarkdown"},{label:"With Solution & Style",value:"withFeedback"},{label:"Shuffle Right",value:"shuffleRight"},{label:"Points for Grading",value:"grading"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MatchListQuestion\n    question=\"Please match the symbols and the respective chemical element.\"\n    elements={[\n        { a: 'Be', b: 'Berlyllium' },\n        { a: 'Br', b: 'Bromine' },\n        { a: 'Ar', b: 'Argon' },\n        { a: 'Ac' , b: 'Actinium'},\n        { b: 'Arsenic' },\n        { b: 'Boron' }\n    ]}\n    provideFeedback={false}\n/>\n"))),(0,r.kt)(o.Z,{value:"withMarkdown",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MatchListQuestion\n    question={<span>Please match the **symbols** and the respective *chemical* element.</span>}\n    style={{ color: 'darkblue'}}\n    elements={[\n        { a: 'Ac' , b: 'Actinium'},\n        { a: 'Ar', b: 'Argon' },\n        { a: 'Be', b: 'Berlyllium' },\n        { a: 'Br', b: 'Bromine' },\n        { b: 'Arsenic' },\n        { b: 'Boron' }\n    ]}\n/>\n"))),(0,r.kt)(o.Z,{value:"withFeedback",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MatchListQuestion\n    question=\"Please match the symbols and the respective chemical element.\"\n    style={{ color: 'darkblue'}}\n    elements={[\n        { a: 'Ac' , b: 'Actinium'},\n        { a: 'Ar', b: 'Argon' },\n        { a: 'Be', b: 'Berlyllium' },\n        { a: 'Br', b: 'Bromine' },\n        { b: 'Arsenic' },\n        { b: 'Boron' }\n    ]}\n/>\n"))),(0,r.kt)(o.Z,{value:"shuffleRight",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MatchListQuestion\n    question=\"Please match the correct surnames and first names of these statisticians.\"\n    elements={[\n        { a: 'Carl Friedrich', b: 'Gau\xdf' },\n        { a: 'Florence', b: 'Nightingale' },\n        { a: 'Francis', b: 'Galton' },\n        { a: 'John W.', b: 'Tukey' },\n        { a: 'Karl', b: 'Pearson' },\n        { a: 'Ronald', b: 'Fisher' }\n    ]}\n    shuffle=\"right\"\n/>\n"))),(0,r.kt)(o.Z,{value:"grading",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MatchListQuestion\n    question=\"Please match the correct surnames and first names of these statisticians.\"\n    elements={[\n        { a: 'Ronald', b: 'Fisher' },\n        { a: 'Florence', b: 'Nightingale' },\n        { a: 'Karl', b: 'Pearson' },\n        { a: 'John W.', b: 'Tukey' },\n        { a: 'Francis', b: 'Galton' },\n        { a: 'Carl Friedrich', b: 'Gau\xdf' }\n    ]}\n    points={20}\n/>\n")))))}b.isMDXComponent=!0}}]);