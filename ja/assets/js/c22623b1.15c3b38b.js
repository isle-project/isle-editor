"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[680],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},358215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(202784);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(487462),a=n(202784),l=n(972389),i=n(161419),o=n(386010),u="tabItem_LplD";function s(e){var t,n,l,s=e.lazy,c=e.block,p=e.defaultValue,m=e.values,d=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.lx)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=v[0])?void 0:l.props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.UB)(),g=y.tabGroupChoices,w=y.setTabGroupChoices,N=(0,a.useState)(k),C=N[0],O=N[1],T=[],S=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var j=g[d];null!=j&&j!==C&&h.some((function(e){return e.value===j}))&&O(j)}var x=function(e){var t=e.currentTarget,n=T.indexOf(t),r=h[n].value;r!==C&&(S(t),O(r),null!=d&&w(d,r))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;n=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;n=T[a]||T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},f)},h.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return T.push(e)},onKeyDown:E,onFocus:x,onClick:x},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function c(e){var t=(0,l.Z)();return a.createElement(s,(0,r.Z)({key:String(t)},e))}},345140:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return m},toc:function(){return d},default:function(){return v}});var r=n(487462),a=n(263366),l=(n(202784),n(603905)),i=n(409877),o=n(358215),u=["components"],s={id:"switch",title:"Switch Components",sidebar_label:"Switch Components"},c=void 0,p={unversionedId:"switch",id:"switch",title:"Switch Components",description:"Switch\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3001\u8907\u6570\u306e\u8981\u7d20\u306e\u30ea\u30b9\u30c8\u306e\u4e2d\u304b\u30891\u3064\u306e\u8981\u7d20\u3092\u8868\u793a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u306f\u3001\u73fe\u5728\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u8981\u7d20\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3053\u3068\u3067\u3001Switch\u30bf\u30b0\u306e\u7570\u306a\u308b\u5b50\u8981\u7d20\u3092\u5faa\u74b0\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/switch.md",sourceDirName:".",slug:"/switch",permalink:"/ja/docs/switch",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/switch.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"2021/2/21",frontMatter:{id:"switch",title:"Switch Components",sidebar_label:"Switch Components"},sidebar:"docs",previous:{title:"Slider",permalink:"/ja/docs/slider"},next:{title:"Text",permalink:"/ja/docs/text"}},m={},d=[{value:"\u30aa\u30d7\u30b7\u30e7\u30f3",id:"\u30aa\u30d7\u30b7\u30e7\u30f3",level:2},{value:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002",id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059",level:2}],f={toc:d};function v(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Switch\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3001\u8907\u6570\u306e\u8981\u7d20\u306e\u30ea\u30b9\u30c8\u306e\u4e2d\u304b\u30891\u3064\u306e\u8981\u7d20\u3092\u8868\u793a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u306f\u3001\u73fe\u5728\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u8981\u7d20\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3053\u3068\u3067\u3001Switch\u30bf\u30b0\u306e\u7570\u306a\u308b\u5b50\u8981\u7d20\u3092\u5faa\u74b0\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"\u30aa\u30d7\u30b7\u30e7\u30f3"},"\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"active")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u30b9\u30a4\u30c3\u30c1\u304c\u30a2\u30af\u30c6\u30a3\u30d6\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"tooltip")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u30b9\u30a4\u30c3\u30c1\u8981\u7d20\u306e\u4e0a\u306b\u30ab\u30fc\u30bd\u30eb\u3092\u7f6e\u3044\u305f\u3068\u304d\u306b\u8868\u793a\u3055\u308c\u308b\u30c4\u30fc\u30eb\u30c1\u30c3\u30d7. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"tooltipPos")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u30c4\u30fc\u30eb\u30c1\u30c3\u30d7\u306e\u914d\u7f6e (",(0,l.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"right"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"bottom")," \u306e\u3044\u305a\u308c\u304b). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'top'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"className")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u56f2\u3080\u30b9\u30d1\u30f3\u8981\u7d20\u306e\u30af\u30e9\u30b9\u540d. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": CSS\u30a4\u30f3\u30e9\u30a4\u30f3\u30b9\u30bf\u30a4\u30eb. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onChange")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": \u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u306f\u3001\u8981\u7d20\u304c\u5207\u308a\u66ff\u308f\u3063\u305f\u3068\u304d\u306b\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002\u7b2c\u4e00\u5f15\u6570\u306b\u73fe\u5728\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u5b50\u8981\u7d20\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3092\u53d7\u3051\u53d6\u308a\u307e\u3059\u3002. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onChange() {}"),".")),(0,l.kt)("h2",{id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059"},"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Custom Tooltip",value:"withTooltip"},{label:"With Style",value:"withStyle"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Switch>\n    <span>Option 1</span>\n    <span>Option 2</span>\n</Switch>\n"))),(0,l.kt)(o.Z,{value:"withTooltip",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Switch tooltip="Just click and see" tooltipPos="left">\n    <span>Option 1</span>\n    <span>Option 2</span>\n</Switch>\n'))),(0,l.kt)(o.Z,{value:"withStyle",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Switch  \n  style={{ fontSize: 80, fontFamily: \'Open Sans Condensed\'}} \n>\n    <span>Some Clouds</span>\n    <img src="https://bit.ly/3rLGE30" />\n    <img src ="https://bit.ly/2OzxEj3" />\n</Switch>\n')))))}v.isMDXComponent=!0}}]);