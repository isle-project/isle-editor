"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1897],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(202784);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=l,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||r;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},358215:function(e,t,n){var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:l},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(487462),l=n(202784),r=n(972389),i=n(275773),o=n(386010),u="tabItem_LplD";function p(e){var t,n,r,p=e.lazy,c=e.block,s=e.defaultValue,d=e.values,m=e.groupId,f=e.className,b=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===s?s:null!=(t=null!=s?s:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=b[0])?void 0:r.props.value;if(null!==N&&!v.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.UB)(),y=g.tabGroupChoices,C=g.setTabGroupChoices,h=(0,l.useState)(N),S=h[0],w=h[1],T=[],O=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var D=y[m];null!=D&&D!==S&&v.some((function(e){return e.value===D}))&&w(D)}var x=function(e){var t=e.currentTarget,n=T.indexOf(t),a=v[n].value;a!==S&&(O(t),w(a),null!=m&&C(m,a))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var l=T.indexOf(e.currentTarget)-1;n=T[l]||T[T.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},f)},v.map((function(e){var t=e.value,n=e.label,r=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return T.push(e)},onKeyDown:E,onFocus:x,onClick:x},r,{className:(0,o.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":S===t})}),null!=n?n:t)}))),p?(0,l.cloneElement)(b.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function c(e){var t=(0,r.Z)();return l.createElement(p,(0,a.Z)({key:String(t)},e))}},821429:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return f}});var a=n(487462),l=n(263366),r=(n(202784),n(603905)),i=n(409877),o=n(358215),u=["components"],p={id:"flippable-card",title:"Flippable Card",sidebar_label:"Flippable Card"},c=void 0,s={unversionedId:"flippable-card",id:"flippable-card",title:"Flippable Card",description:"\u0388\u03bd\u03b1 \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf ISLE \u03c0\u03bf\u03c5 \u03b5\u03c0\u03b9\u03c4\u03c1\u03ad\u03c0\u03b5\u03b9 \u03c4\u03b7\u03bd \u03b1\u03c0\u03cc\u03b4\u03bf\u03c3\u03b7 \u03b4\u03cd\u03bf \u03b4\u03cd\u03bf \u03c0\u03bb\u03b5\u03c5\u03c1\u03ce\u03bd.",source:"@site/i18n/el/docusaurus-plugin-content-docs/current/flippable-card.md",sourceDirName:".",slug:"/flippable-card",permalink:"/el/docs/flippable-card",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/flippable-card.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1/6/2021",frontMatter:{id:"flippable-card",title:"Flippable Card",sidebar_label:"Flippable Card"},sidebar:"docs",previous:{title:"Draggable List",permalink:"/el/docs/draggable-list"},next:{title:"JavaScript Shell",permalink:"/el/docs/js-shell"}},d=[{value:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",children:[],level:2},{value:"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",children:[],level:2}],m={toc:d};function f(e){var t=e.components,n=(0,l.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u0388\u03bd\u03b1 \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf ISLE \u03c0\u03bf\u03c5 \u03b5\u03c0\u03b9\u03c4\u03c1\u03ad\u03c0\u03b5\u03b9 \u03c4\u03b7\u03bd \u03b1\u03c0\u03cc\u03b4\u03bf\u03c3\u03b7 \u03b4\u03cd\u03bf \u03b4\u03cd\u03bf \u03c0\u03bb\u03b5\u03c5\u03c1\u03ce\u03bd."),(0,r.kt)("h2",{id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"},"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"button")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u03b5\u03c4\u03b9\u03ba\u03ad\u03c4\u03b1 \u03ba\u03bf\u03c5\u03bc\u03c0\u03b9\u03bf\u03cd. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"draggable")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u03b5\u03bb\u03ad\u03b3\u03c7\u03b5\u03b9 \u03b1\u03bd \u03b7 \u03ba\u03ac\u03c1\u03c4\u03b1 \u03bc\u03c0\u03bf\u03c1\u03b5\u03af \u03bd\u03b1 \u03bc\u03b5\u03c4\u03b1\u03ba\u03b9\u03bd\u03b7\u03b8\u03b5\u03af. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"flipSpeedBackToFront")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": \u03b7 \u03c4\u03b1\u03c7\u03cd\u03c4\u03b7\u03c4\u03b1 \u03bc\u03b5 \u03c4\u03b7\u03bd \u03bf\u03c0\u03bf\u03af\u03b1 \u03b7 \u03ba\u03ac\u03c1\u03c4\u03b1 \u03bc\u03b5\u03c4\u03b1\u03c4\u03c1\u03ad\u03c0\u03b5\u03c4\u03b1\u03b9 \u03b1\u03c0\u03cc \u03c4\u03bf \u03c6\u03cc\u03bd\u03c4\u03bf \u03c3\u03c4\u03bf \u03c0\u03c1\u03bf\u03c3\u03ba\u03ae\u03bd\u03b9\u03bf, \u03c3\u03b5 \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"flipSpeedFrontToBack")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": \u03b7 \u03c4\u03b1\u03c7\u03cd\u03c4\u03b7\u03c4\u03b1 \u03bc\u03b5 \u03c4\u03b7\u03bd \u03bf\u03c0\u03bf\u03af\u03b1 \u03b7 \u03ba\u03ac\u03c1\u03c4\u03b1 \u03bc\u03b5\u03c4\u03b1\u03c4\u03c1\u03ad\u03c0\u03b5\u03c4\u03b1\u03b9 \u03b1\u03c0\u03cc \u03c4\u03bf \u03c0\u03c1\u03bf\u03c3\u03ba\u03ae\u03bd\u03b9\u03bf \u03c3\u03c4\u03bf \u03c6\u03cc\u03bd\u03c4\u03bf, \u03c3\u03b5 \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"oneTime")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u03c5\u03c0\u03bf\u03b4\u03b5\u03b9\u03ba\u03bd\u03cd\u03b5\u03b9 \u03b1\u03bd \u03b7 \u03b4\u03b9\u03b1\u03b4\u03b9\u03ba\u03b1\u03c3\u03af\u03b1 flip \u03bc\u03c0\u03bf\u03c1\u03b5\u03af \u03bd\u03b1 \u03b5\u03ba\u03c4\u03b5\u03bb\u03b5\u03c3\u03c4\u03b5\u03af \u03bc\u03cc\u03bd\u03bf \u03bc\u03af\u03b1 \u03c6\u03bf\u03c1\u03ac. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"perspective")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": \u03a4\u03b9\u03bc\u03ae \u03b9\u03b4\u03b9\u03cc\u03c4\u03b7\u03c4\u03b1\u03c2 CSS \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03b4\u03ce\u03c3\u03b5\u03c4\u03b5 \u03c0\u03c1\u03bf\u03bf\u03c0\u03c4\u03b9\u03ba\u03ae \u03c3\u03b5 \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf \u03bc\u03b5 3d-\u03c4\u03bf\u03c0\u03bf\u03b8\u03ad\u03c4\u03b7\u03c3\u03b7. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1000"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"size")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),': \u03bc\u03ad\u03b3\u03b5\u03b8\u03bf\u03c2 \u03c4\u03b7\u03c2 \u03ba\u03ac\u03c1\u03c4\u03b1\u03c2 (\u03bf\u03c1\u03af\u03b6\u03b5\u03b9 \u03c4\u03bf "\u03c0\u03bb\u03ac\u03c4\u03bf\u03c2" \u03ba\u03b1\u03b9 \u03c4\u03bf "\u03cd\u03c8\u03bf\u03c2" \u03c4\u03b7\u03c2). Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"250"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disabled")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u03b5\u03bb\u03ad\u03b3\u03c7\u03b5\u03b9 \u03b1\u03bd \u03b7 \u03ba\u03ac\u03c1\u03c4\u03b1 \u03bc\u03b5 \u03b4\u03c5\u03bd\u03b1\u03c4\u03cc\u03c4\u03b7\u03c4\u03b1 \u03b1\u03bd\u03b1\u03b4\u03af\u03c0\u03bb\u03c9\u03c3\u03b7\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 \u03b1\u03c0\u03b5\u03bd\u03b5\u03c1\u03b3\u03bf\u03c0\u03bf\u03b9\u03b7\u03bc\u03ad\u03bd\u03b7. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"value")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u039a\u03b1\u03c4\u03ac\u03c3\u03c4\u03b1\u03c3\u03b7 \u03b1\u03bd\u03b1\u03b4\u03af\u03c0\u03bb\u03c9\u03c3\u03b7\u03c2 \u03c4\u03b7\u03c2 \u03ba\u03ac\u03c1\u03c4\u03b1\u03c2 (\u03b3\u03b9\u03b1 \u03b5\u03bb\u03b5\u03b3\u03c7\u03cc\u03bc\u03b5\u03bd\u03bf \u03b5\u03be\u03ac\u03c1\u03c4\u03b7\u03bc\u03b1). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u03b1\u03c1\u03c7\u03b9\u03ba\u03ae \u03ba\u03b1\u03c4\u03ac\u03c3\u03c4\u03b1\u03c3\u03b7 \u03b1\u03bd\u03b1\u03c3\u03c4\u03c1\u03bf\u03c6\u03ae\u03c2 \u03c4\u03b7\u03c2 \u03ba\u03ac\u03c1\u03c4\u03b1\u03c2. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"containerStyle")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": \u03a3\u03c4\u03c5\u03bb CSS \u03c4\u03bf\u03c5 \u03c0\u03b5\u03c1\u03b9\u03ad\u03ba\u03c4\u03b7. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"frontStyle")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS \u03c3\u03c4\u03c5\u03bb \u03c4\u03b7\u03c2 \u03bc\u03c0\u03c1\u03bf\u03c3\u03c4\u03b9\u03bd\u03ae\u03c2 \u03ba\u03ac\u03c1\u03c4\u03b1\u03c2. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"backStyle")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": \u03a3\u03c4\u03c5\u03bb CSS \u03c4\u03b7\u03c2 \u03c0\u03af\u03c3\u03c9 \u03ba\u03ac\u03c1\u03c4\u03b1\u03c2. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChange")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": callback \u03c0\u03bf\u03c5 \u03ba\u03b1\u03bb\u03b5\u03af\u03c4\u03b1\u03b9 \u03bc\u03cc\u03bb\u03b9\u03c2 \u03b7 \u03ba\u03ac\u03c1\u03c4\u03b1 \u03b1\u03bd\u03b1\u03c0\u03bf\u03b4\u03bf\u03b3\u03c5\u03c1\u03af\u03c3\u03b5\u03b9- \u03bb\u03b1\u03bc\u03b2\u03ac\u03bd\u03b5\u03b9 \u03c4\u03b7\u03bd \u03c4\u03c1\u03ad\u03c7\u03bf\u03c5\u03c3\u03b1 \u03ba\u03b1\u03c4\u03ac\u03c3\u03c4\u03b1\u03c3\u03b7 \u03b1\u03bd\u03b1\u03c0\u03bf\u03b4\u03bf\u03b3\u03c5\u03c1\u03af\u03c3\u03bc\u03b1\u03c4\u03bf\u03c2 \u03c9\u03c2 \u03bc\u03bf\u03bd\u03b1\u03b4\u03b9\u03ba\u03cc \u03cc\u03c1\u03b9\u03c3\u03bc\u03b1. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange() {}"),".")),(0,r.kt)("h2",{id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"},"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"),(0,r.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With CSS",value:"withCSS"},{label:"Slow Motion",value:"slowMo"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FlippableCard containerStyle={{ float: \'none\' }} size={200}>\n  <img src="https://bit.ly/2YU5EbU" />\n  <img src="https://bit.ly/3aGv9mp" />\n</FlippableCard>\n'))),(0,r.kt)(o.Z,{value:"withCSS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<FlippableCard \n  containerStyle={{ float: 'none' }} \n  frontStyle={{ fontSize: 50, textAlign: 'center' }} \n  backStyle={{ fontSize: 50, textAlign: 'center', background: 'purple', color: 'white' }} \n  >\n    <div>\n      FRONT\n    </div>\n    <div>\n      BACK\n    </div>\n</FlippableCard>\n"))),(0,r.kt)(o.Z,{value:"slowMo",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<FlippableCard \n  flipSpeedBackToFront={7} \n  flipSpeedFrontToBack={7}   \n  containerStyle={{ float: 'none' }} \n  frontStyle={{ fontSize: 50, textAlign: 'center' }} \n  backStyle={{ fontSize: 50, textAlign: 'center', background: 'purple', color: 'white' }} \n  >\n    <div>\n      FRONT\n    </div>\n    <div>\n      BACK\n    </div>\n</FlippableCard>\n")))))}f.isMDXComponent=!0}}]);