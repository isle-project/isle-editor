"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6863],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},358215:function(e,t,n){var r=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(487462),a=n(202784),l=n(972389),i=n(275773),o=n(386010),u="tabItem_LplD";function s(e){var t,n,l,s=e.lazy,c=e.block,p=e.defaultValue,m=e.values,d=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,i.lx)(b,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=v[0])?void 0:l.props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.UB)(),g=y.tabGroupChoices,w=y.setTabGroupChoices,N=(0,a.useState)(k),C=N[0],O=N[1],T=[],S=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var x=g[d];null!=x&&x!==C&&b.some((function(e){return e.value===x}))&&O(x)}var E=function(e){var t=e.currentTarget,n=T.indexOf(t),r=b[n].value;r!==C&&(S(t),O(r),null!=d&&w(d,r))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;n=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;n=T[a]||T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},f)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return T.push(e)},onKeyDown:j,onFocus:E,onClick:E},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function c(e){var t=(0,l.Z)();return a.createElement(s,(0,r.Z)({key:String(t)},e))}},637984:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var r=n(487462),a=n(263366),l=(n(202784),n(603905)),i=n(409877),o=n(358215),u=["components"],s={id:"switch",title:"Switch Components",sidebar_label:"Switch Components"},c=void 0,p={unversionedId:"switch",id:"switch",title:"Switch Components",description:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044a\u0442 Switch \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0432\u0430 \u043f\u043e\u043a\u0430\u0437\u0432\u0430\u043d\u0435\u0442\u043e \u043d\u0430 \u0435\u0434\u0438\u043d \u0435\u043b\u0435\u043c\u0435\u043d\u0442 \u043e\u0442 \u0441\u043f\u0438\u0441\u044a\u043a \u0441 \u043d\u044f\u043a\u043e\u043b\u043a\u043e \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0430. \u041f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0438\u0442\u0435 \u043c\u043e\u0433\u0430\u0442 \u0434\u0430 \u043f\u0440\u0435\u043c\u0438\u043d\u0430\u0432\u0430\u0442 \u043f\u0440\u0435\u0437 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u0438\u0442\u0435 \u0434\u0435\u0446\u0430 \u043d\u0430 \u0442\u0430\u0433\u0430 Switch, \u043a\u0430\u0442\u043e \u0449\u0440\u0430\u043a\u043d\u0430\u0442 \u0432\u044a\u0440\u0445\u0443 \u0442\u0435\u043a\u0443\u0449\u043e \u043f\u043e\u043a\u0430\u0437\u0432\u0430\u043d\u043e\u0442\u043e.",source:"@site/i18n/bg/docusaurus-plugin-content-docs/current/switch.md",sourceDirName:".",slug:"/switch",permalink:"/bg/docs/switch",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/switch.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19.06.2021 \u0433.",frontMatter:{id:"switch",title:"Switch Components",sidebar_label:"Switch Components"},sidebar:"docs",previous:{title:"Slider",permalink:"/bg/docs/slider"},next:{title:"Text",permalink:"/bg/docs/text"}},m=[{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",children:[],level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u0438",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438",children:[],level:2}],d={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044a\u0442 Switch \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0432\u0430 \u043f\u043e\u043a\u0430\u0437\u0432\u0430\u043d\u0435\u0442\u043e \u043d\u0430 \u0435\u0434\u0438\u043d \u0435\u043b\u0435\u043c\u0435\u043d\u0442 \u043e\u0442 \u0441\u043f\u0438\u0441\u044a\u043a \u0441 \u043d\u044f\u043a\u043e\u043b\u043a\u043e \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0430. \u041f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0438\u0442\u0435 \u043c\u043e\u0433\u0430\u0442 \u0434\u0430 \u043f\u0440\u0435\u043c\u0438\u043d\u0430\u0432\u0430\u0442 \u043f\u0440\u0435\u0437 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u0438\u0442\u0435 \u0434\u0435\u0446\u0430 \u043d\u0430 \u0442\u0430\u0433\u0430 Switch, \u043a\u0430\u0442\u043e \u0449\u0440\u0430\u043a\u043d\u0430\u0442 \u0432\u044a\u0440\u0445\u0443 \u0442\u0435\u043a\u0443\u0449\u043e \u043f\u043e\u043a\u0430\u0437\u0432\u0430\u043d\u043e\u0442\u043e."),(0,l.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u0438"},"\u041e\u043f\u0446\u0438\u0438"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"active")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0430 \u0434\u0430\u043b\u0438 \u043f\u0440\u0435\u0432\u043a\u043b\u044e\u0447\u0432\u0430\u0442\u0435\u043b\u044f\u0442 \u0435 \u0430\u043a\u0442\u0438\u0432\u0435\u043d \u0438\u043b\u0438 \u043d\u0435. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"tooltip")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0430 \u0437\u0430 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0438, \u043f\u043e\u043a\u0430\u0437\u0432\u0430\u043d\u0430 \u043f\u0440\u0438 \u043f\u0440\u0435\u043c\u0438\u043d\u0430\u0432\u0430\u043d\u0435 \u0441 \u043c\u0438\u0448\u043a\u0430\u0442\u0430 \u043d\u0430\u0434 \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043d\u0430 \u043f\u0440\u0435\u0432\u043a\u043b\u044e\u0447\u0432\u0430\u0442\u0435\u043b\u044f. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"tooltipPos")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u0440\u0430\u0437\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0430 \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0430\u0442\u0430 \u0437\u0430 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0438 (",(0,l.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"right"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"left")," \u0438\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'top'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"className")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u0438\u043c\u0435 \u043d\u0430 \u043a\u043b\u0430\u0441\u0430 \u043d\u0430 \u043e\u0433\u0440\u0430\u0436\u0434\u0430\u0449\u0438\u044f \u0435\u043b\u0435\u043c\u0435\u043d\u0442 span. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": CSS \u0438\u043d\u043b\u0430\u0439\u043d \u0441\u0442\u0438\u043b\u043e\u0432\u0435. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onChange")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": \u043e\u0431\u0440\u0430\u0442\u043d\u0430 \u0432\u0440\u044a\u0437\u043a\u0430, \u0438\u0437\u0432\u0438\u043a\u0430\u043d\u0430 \u043f\u0440\u0438 \u043f\u0440\u0435\u0432\u043a\u043b\u044e\u0447\u0432\u0430\u043d\u0435 \u043d\u0430 \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0438. \u041f\u043e\u043b\u0443\u0447\u0430\u0432\u0430 \u043a\u0430\u0442\u043e \u043f\u044a\u0440\u0432\u0438 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 \u0438\u043d\u0434\u0435\u043a\u0441\u0430 \u043d\u0430 \u0442\u0435\u043a\u0443\u0449\u043e \u043f\u043e\u043a\u0430\u0437\u0432\u0430\u043d\u043e\u0442\u043e \u0434\u0435\u0442\u0435. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onChange() {}"),".")),(0,l.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438"},"\u041f\u0440\u0438\u043c\u0435\u0440\u0438"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Custom Tooltip",value:"withTooltip"},{label:"With Style",value:"withStyle"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Switch>\n    <span>Option 1</span>\n    <span>Option 2</span>\n</Switch>\n"))),(0,l.kt)(o.Z,{value:"withTooltip",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Switch tooltip="Just click and see" tooltipPos="left">\n    <span>Option 1</span>\n    <span>Option 2</span>\n</Switch>\n'))),(0,l.kt)(o.Z,{value:"withStyle",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Switch  \n  style={{ fontSize: 80, fontFamily: \'Open Sans Condensed\'}} \n>\n    <span>Some Clouds</span>\n    <img src="https://bit.ly/3rLGE30" />\n    <img src ="https://bit.ly/2OzxEj3" />\n</Switch>\n')))))}f.isMDXComponent=!0}}]);