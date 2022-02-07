"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3155],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,f=c["".concat(o,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},358215:function(e,t,n){var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(487462),r=n(202784),l=n(972389),i=n(275773),u=n(386010),o="tabItem_LplD";function p(e){var t,n,l,p=e.lazy,s=e.block,m=e.defaultValue,c=e.values,d=e.groupId,f=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=c?c:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.lx)(k,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(t=null!=m?m:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=b[0])?void 0:l.props.value;if(null!==N&&!k.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.UB)(),y=g.tabGroupChoices,h=g.setTabGroupChoices,C=(0,r.useState)(N),S=C[0],x=C[1],T=[],w=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var O=y[d];null!=O&&O!==S&&k.some((function(e){return e.value===O}))&&x(O)}var j=function(e){var t=e.currentTarget,n=T.indexOf(t),a=k[n].value;a!==S&&(w(t),x(a),null!=d&&h(d,a))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":s},f)},k.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return T.push(e)},onKeyDown:D,onFocus:j,onClick:j},l,{className:(0,u.Z)("tabs__item",o,null==l?void 0:l.className,{"tabs__item--active":S===t})}),null!=n?n:t)}))),p?(0,r.cloneElement)(b.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function s(e){var t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},467804:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return c},default:function(){return f}});var a=n(487462),r=n(263366),l=(n(202784),n(603905)),i=n(409877),u=n(358215),o=["components"],p={id:"slider-input",title:"Slider Input",sidebar_label:"Slider Input"},s=void 0,m={unversionedId:"input/slider-input",id:"input/slider-input",title:"Slider Input",description:"\u30b9\u30e9\u30a4\u30c0\u30fc\u5165\u529b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3059\u3002ISLE \u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u4e00\u90e8\u3068\u3057\u3066\u4f7f\u3046\u3053\u3068\u3082\u3001\u30b9\u30bf\u30f3\u30c9\u30a2\u30ed\u30f3\u3067\u4f7f\u3046\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u5f8c\u8005\u306e\u5834\u5408\u3001onChange \u5c5e\u6027\u3067\u5909\u66f4\u3092\u51e6\u7406\u3059\u308b\u304b\u3001bind \u5c5e\u6027\u3067\u30b0\u30ed\u30fc\u30d0\u30eb\u5909\u6570\u306b\u5024\u3092\u30d0\u30a4\u30f3\u30c9\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/input/slider.md",sourceDirName:"input",slug:"/input/slider-input",permalink:"/ja/docs/input/slider-input",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/slider.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614811488,formattedLastUpdatedAt:"2021/3/3",frontMatter:{id:"slider-input",title:"Slider Input",sidebar_label:"Slider Input"},sidebar:"docs",previous:{title:"Select Input",permalink:"/ja/docs/input/select-input"},next:{title:"Text Area",permalink:"/ja/docs/input/text-area"}},c=[{value:"\u30aa\u30d7\u30b7\u30e7\u30f3",id:"\u30aa\u30d7\u30b7\u30e7\u30f3",children:[],level:2},{value:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002",id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059",children:[],level:2}],d={toc:c};function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u30b9\u30e9\u30a4\u30c0\u30fc\u5165\u529b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3059\u3002ISLE \u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u4e00\u90e8\u3068\u3057\u3066\u4f7f\u3046\u3053\u3068\u3082\u3001\u30b9\u30bf\u30f3\u30c9\u30a2\u30ed\u30f3\u3067\u4f7f\u3046\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u5f8c\u8005\u306e\u5834\u5408\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"onChange")," \u5c5e\u6027\u3067\u5909\u66f4\u3092\u51e6\u7406\u3059\u308b\u304b\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"bind")," \u5c5e\u6027\u3067\u30b0\u30ed\u30fc\u30d0\u30eb\u5909\u6570\u306b\u5024\u3092\u30d0\u30a4\u30f3\u30c9\u3057\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"\u30aa\u30d7\u30b7\u30e7\u30f3"},"\u30aa\u30d7\u30b7\u30e7\u30f3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": \u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u958b\u59cb\u5024. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"disabled")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u306f\u3001\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u5165\u529b\u304c\u30a2\u30af\u30c6\u30a3\u30d6\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002true \u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u30b9\u30e9\u30a4\u30c0\u306f\u30b0\u30ec\u30fc\u30a2\u30a6\u30c8\u3055\u308c\u3066\u3044\u308b\u3082\u306e\u306e\u3001\u753b\u9762\u4e0a\u306b\u5b58\u5728\u3057\u307e\u3059\u3002. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"inline")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u30b9\u30e9\u30a4\u30c0\u30fc\u3092\u30c6\u30ad\u30b9\u30c8\u3068\u30a4\u30f3\u30e9\u30a4\u30f3\u3067\u914d\u7f6e\u3059\u308b\u304b\u3001\u5916\u5074\u306b\u914d\u7f6e\u3059\u308b\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"legend")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \u306b\u3085\u3046\u308a\u3087\u304f\u306e\u30ad\u30e3\u30d7\u30b7\u30e7\u30f3. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"max")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": \u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u6700\u5927\u5024. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"100"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"maxLabel")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u6700\u5927\u5024\u306e\u4ee3\u308f\u308a\u306b\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u53f3\u306b\u8868\u793a\u3055\u308c\u308b\u30e9\u30d9\u30eb. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"min")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": \u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u6700\u5c0f\u5024. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"minLabel")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u6700\u5c0f\u5024\u306e\u4ee3\u308f\u308a\u306b\u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u5de6\u306b\u8868\u793a\u3055\u308c\u308b\u30e9\u30d9\u30eb. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onChange")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": \u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u5024\u304c\u5909\u66f4\u3055\u308c\u305f\u3068\u304d\u306b\u65b0\u3057\u3044\u5024\u3067\u547c\u3073\u51fa\u3055\u308c\u308b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"precision")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": \u5165\u529b\u306e\u4e38\u3081\u3092\u884c\u3044\u307e\u3059\u3002\u5024\u306f\u3001\u7cbe\u5ea6\u3088\u308a\u3082\u6709\u52b9\u306a\u6841\u6570\u3092\u8d85\u3048\u306a\u3044\u3088\u3046\u306b\u4e38\u3081\u3089\u308c\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u6574\u6570\u306e\u307f\u3092\u4f7f\u7528\u3057\u305f\u3044\u5834\u5408\u306f10\u306e\u7cbe\u5ea6\u304c\u4f7f\u7528\u3055\u308c\u3001\u6570\u767e\u4f4d\u307e\u3067\u4e38\u3081\u305f\u3044\u5834\u5408\u306f0.001\u306e\u7cbe\u5ea6\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"step")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(number|string)"),": \u30b9\u30e9\u30a4\u30c0\u30fc\u306e\u30b9\u30c6\u30c3\u30d7\u30b5\u30a4\u30ba. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hideTooltip")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u30c4\u30fc\u30eb\u30c1\u30c3\u30d7\u3092\u96a0\u3059\u304b\u3069\u3046\u304b\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": CSS\u30a4\u30f3\u30e9\u30a4\u30f3\u30b9\u30bf\u30a4\u30eb. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"numberInputStyle")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": \u6570\u5024\u5165\u529b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306eCSS\u30a4\u30f3\u30e9\u30a4\u30f3\u30b9\u30bf\u30a4\u30eb. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"rangeInputStyle")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": \u7bc4\u56f2\u5165\u529b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306eCSS\u30a4\u30f3\u30e9\u30a4\u30f3\u30b9\u30bf\u30a4\u30eb. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,l.kt)("h2",{id:"\u4f8b\u3068\u3057\u3066\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059"},"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Mathematical Symbols via LaTeX",value:"mathematicalSymbols"},{label:"Custom Style",value:"customStyle"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<SliderInput\n    legend="Success Probability"\n    defaultValue={0.5}\n    min={0}\n    max={1}\n    step={0.01}\n/>\n'))),(0,l.kt)(u.Z,{value:"mathematicalSymbols",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SliderInput\n    legend={<span>$\\sigma$ (standard deviation)</span>}\n    defaultValue={0.5}\n    min={0}\n    max={1}\n    step={0.01}\n/>\n"))),(0,l.kt)(u.Z,{value:"customStyle",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SliderInput\n    legend=\"Success Probability\"\n    style={{ padding: 30, fontSize: 25, background: 'tan', fontFamily: 'Georgia'}}\n    rangeInputStyle ={{ minWidth: 500}}\n    numberInputStyle = {{ background: 'white', boxShadow: '2px 2px 0px black'}}\n    defaultValue={0.5}\n    min={0}\n    max={200}\n    step={0.01}\n/>\n")))))}f.isMDXComponent=!0}}]);