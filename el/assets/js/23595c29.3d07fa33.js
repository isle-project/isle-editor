"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8314],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,f=c["".concat(u,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},358215:function(e,t,n){var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(487462),r=n(202784),i=n(972389),l=n(275773),o=n(386010),u="tabItem_LplD";function s(e){var t,n,i,s=e.lazy,p=e.block,m=e.defaultValue,c=e.values,d=e.groupId,f=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=c?c:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.lx)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(t=null!=m?m:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=k[0])?void 0:i.props.value;if(null!==N&&!b.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,l.UB)(),h=g.tabGroupChoices,y=g.setTabGroupChoices,C=(0,r.useState)(N),O=C[0],D=C[1],T=[],w=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var x=h[d];null!=x&&x!==O&&b.some((function(e){return e.value===x}))&&D(x)}var q=function(e){var t=e.currentTarget,n=T.indexOf(t),a=b[n].value;a!==O&&(w(t),D(a),null!=d&&y(d,a))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},f)},b.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return T.push(e)},onKeyDown:j,onFocus:q,onClick:q},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(k.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function p(e){var t=(0,i.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},176595:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return c},default:function(){return f}});var a=n(487462),r=n(263366),i=(n(202784),n(603905)),l=n(409877),o=n(358215),u=["components"],s={id:"order-question",title:"Order Question",sidebar_label:"Order Question"},p=void 0,m={unversionedId:"questions/order-question",id:"questions/order-question",title:"Order Question",description:"\u0388\u03bd\u03b1 \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf \u03b5\u03c1\u03c9\u03c4\u03ae\u03c3\u03b5\u03c9\u03bd \u03c4\u03ac\u03be\u03b7\u03c2 \u03c0\u03bf\u03c5 \u03b6\u03b7\u03c4\u03ac \u03b1\u03c0\u03cc \u03c4\u03bf\u03bd \u03bc\u03b1\u03b8\u03b7\u03c4\u03ae \u03bd\u03b1 \u03c6\u03ad\u03c1\u03b5\u03b9 \u03bc\u03b9\u03b1 \u03c3\u03c5\u03bb\u03bb\u03bf\u03b3\u03ae \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03c9\u03bd \u03c3\u03c4\u03b7 \u03c3\u03c9\u03c3\u03c4\u03ae \u03c3\u03b5\u03b9\u03c1\u03ac.",source:"@site/i18n/el/docusaurus-plugin-content-docs/current/questions/order.md",sourceDirName:"questions",slug:"/questions/order-question",permalink:"/el/docs/questions/order-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/order.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19/6/2021",frontMatter:{id:"order-question",title:"Order Question",sidebar_label:"Order Question"},sidebar:"docs",previous:{title:"Number Question",permalink:"/el/docs/questions/number-question"},next:{title:"Question Form",permalink:"/el/docs/questions/question-form"}},c=[{value:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",children:[],level:2},{value:"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",children:[],level:2}],d={toc:c};function f(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u0388\u03bd\u03b1 \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf \u03b5\u03c1\u03c9\u03c4\u03ae\u03c3\u03b5\u03c9\u03bd \u03c4\u03ac\u03be\u03b7\u03c2 \u03c0\u03bf\u03c5 \u03b6\u03b7\u03c4\u03ac \u03b1\u03c0\u03cc \u03c4\u03bf\u03bd \u03bc\u03b1\u03b8\u03b7\u03c4\u03ae \u03bd\u03b1 \u03c6\u03ad\u03c1\u03b5\u03b9 \u03bc\u03b9\u03b1 \u03c3\u03c5\u03bb\u03bb\u03bf\u03b3\u03ae \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03c9\u03bd \u03c3\u03c4\u03b7 \u03c3\u03c9\u03c3\u03c4\u03ae \u03c3\u03b5\u03b9\u03c1\u03ac."),(0,i.kt)("h2",{id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"},"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"question")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),': \u03b5\u03c1\u03ce\u03c4\u03b7\u03c3\u03b7 \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03bf\u03c0\u03bf\u03af\u03b1 \u03bf \u03bc\u03b1\u03b8\u03b7\u03c4\u03ae\u03c2 \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03c6\u03ad\u03c1\u03b5\u03b9 \u03c4\u03b9\u03c2 \u03b4\u03b9\u03b1\u03b8\u03ad\u03c3\u03b9\u03bc\u03b5\u03c2 "\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2" \u03c3\u03c4\u03b7 \u03c3\u03c9\u03c3\u03c4\u03ae \u03c3\u03b5\u03b9\u03c1\u03ac. Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"options")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array (required)"),": \u03bc\u03b9\u03b1 \u03c3\u03b5\u03b9\u03c1\u03ac \u03b1\u03c0\u03cc \u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03b1 \u03c4\u03b1 \u03bf\u03c0\u03bf\u03af\u03b1 \u03bf \u03bc\u03b1\u03b8\u03b7\u03c4\u03ae\u03c2 \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03c6\u03ad\u03c1\u03b5\u03b9 \u03c3\u03c4\u03b7 \u03c3\u03c9\u03c3\u03c4\u03ae \u03c3\u03b5\u03b9\u03c1\u03ac (\u03c5\u03c0\u03bf\u03c4\u03af\u03b8\u03b5\u03c4\u03b1\u03b9 \u03cc\u03c4\u03b9 \u03b5\u03af\u03bd\u03b1\u03b9 \u03b7 \u03c3\u03b5\u03b9\u03c1\u03ac \u03c0\u03bf\u03c5 \u03c0\u03b1\u03c1\u03ad\u03c7\u03b5\u03c4\u03b1\u03b9). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": \u03b5\u03bb\u03ad\u03b3\u03c7\u03b5\u03b9 \u03b1\u03bd \u03b8\u03b1 \u03b5\u03bc\u03c6\u03b1\u03bd\u03af\u03b6\u03b5\u03c4\u03b1\u03b9 \u03b5\u03b9\u03b4\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7 \u03b3\u03b9\u03b1 \u03c4\u03bf \u03b1\u03bd \u03b7 \u03c5\u03c0\u03bf\u03b2\u03bb\u03b7\u03b8\u03b5\u03af\u03c3\u03b1 \u03b1\u03c0\u03ac\u03bd\u03c4\u03b7\u03c3\u03b7 \u03b5\u03af\u03bd\u03b1\u03b9 \u03c3\u03c9\u03c3\u03c4\u03ae \u03ae \u03cc\u03c7\u03b9. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": \u03c4\u03bf\u03c0\u03bf\u03b8\u03ad\u03c4\u03b7\u03c3\u03b7 \u03c4\u03c9\u03bd \u03c5\u03c0\u03bf\u03b4\u03b5\u03af\u03be\u03b5\u03c9\u03bd (\u03b5\u03af\u03c4\u03b5 ",(0,i.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"right")," \u03ae ",(0,i.kt)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"hints")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": \u03c5\u03c0\u03bf\u03b4\u03b5\u03af\u03be\u03b5\u03b9\u03c2 \u03c0\u03bf\u03c5 \u03c0\u03b1\u03c1\u03ad\u03c7\u03bf\u03c5\u03bd \u03ba\u03b1\u03b8\u03bf\u03b4\u03ae\u03b3\u03b7\u03c3\u03b7 \u03b3\u03b9\u03b1 \u03c4\u03bf\u03bd \u03c4\u03c1\u03cc\u03c0\u03bf \u03b1\u03c0\u03ac\u03bd\u03c4\u03b7\u03c3\u03b7\u03c2 \u03c3\u03c4\u03b7\u03bd \u03b5\u03c1\u03ce\u03c4\u03b7\u03c3\u03b7. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"feedback")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": \u03b5\u03bb\u03ad\u03b3\u03c7\u03b5\u03b9 \u03b1\u03bd \u03b8\u03b1 \u03b5\u03bc\u03c6\u03b1\u03bd\u03af\u03b6\u03bf\u03bd\u03c4\u03b1\u03b9 \u03ba\u03bf\u03c5\u03bc\u03c0\u03b9\u03ac \u03b1\u03bd\u03ac\u03b4\u03c1\u03b1\u03c3\u03b7\u03c2. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"chat")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": \u03b5\u03bb\u03ad\u03b3\u03c7\u03b5\u03b9 \u03b1\u03bd \u03c4\u03bf \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf \u03b8\u03b1 \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03ad\u03c7\u03b5\u03b9 \u03b5\u03bd\u03c3\u03c9\u03bc\u03b1\u03c4\u03c9\u03bc\u03ad\u03bd\u03b7 \u03c3\u03c5\u03bd\u03bf\u03bc\u03b9\u03bb\u03af\u03b1. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"failureMsg")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": \u03bc\u03ae\u03bd\u03c5\u03bc\u03b1 \u03c0\u03bf\u03c5 \u03b8\u03b1 \u03b5\u03bc\u03c6\u03b1\u03bd\u03af\u03b6\u03b5\u03c4\u03b1\u03b9 \u03cc\u03c4\u03b1\u03bd \u03bf \u03bc\u03b1\u03b8\u03b7\u03c4\u03ae\u03c2 \u03c5\u03c0\u03bf\u03b2\u03ac\u03bb\u03bb\u03b5\u03b9 \u03bb\u03b1\u03bd\u03b8\u03b1\u03c3\u03bc\u03ad\u03bd\u03b7 \u03b1\u03c0\u03ac\u03bd\u03c4\u03b7\u03c3\u03b7. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"successMsg")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": \u03bc\u03ae\u03bd\u03c5\u03bc\u03b1 \u03c0\u03bf\u03c5 \u03b8\u03b1 \u03b5\u03bc\u03c6\u03b1\u03bd\u03af\u03b6\u03b5\u03c4\u03b1\u03b9 \u03cc\u03c4\u03b1\u03bd \u03bf \u03bc\u03b1\u03b8\u03b7\u03c4\u03ae\u03c2 \u03c5\u03c0\u03bf\u03b2\u03ac\u03bb\u03bb\u03b5\u03b9 \u03c4\u03b7 \u03c3\u03c9\u03c3\u03c4\u03ae \u03b1\u03c0\u03ac\u03bd\u03c4\u03b7\u03c3\u03b7. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": \u03b5\u03bb\u03ad\u03b3\u03c7\u03b5\u03b9 \u03b1\u03bd \u03b8\u03b1 \u03b1\u03c0\u03b5\u03bd\u03b5\u03c1\u03b3\u03bf\u03c0\u03bf\u03b9\u03b7\u03b8\u03bf\u03cd\u03bd \u03bf\u03b9 \u03b5\u03b9\u03b4\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03b5\u03b9\u03c2 \u03c5\u03c0\u03bf\u03b2\u03bf\u03bb\u03ae\u03c2. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"until")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"Date"),": \u03c7\u03c1\u03cc\u03bd\u03bf\u03c2 \u03bc\u03ad\u03c7\u03c1\u03b9 \u03bd\u03b1 \u03b5\u03c0\u03b9\u03c4\u03c1\u03b1\u03c0\u03b5\u03af \u03c3\u03c4\u03bf\u03c5\u03c2 \u03bc\u03b1\u03b8\u03b7\u03c4\u03ad\u03c2 \u03bd\u03b1 \u03c5\u03c0\u03bf\u03b2\u03ac\u03bb\u03bf\u03c5\u03bd \u03b1\u03c0\u03b1\u03bd\u03c4\u03ae\u03c3\u03b5\u03b9\u03c2. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"points")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": \u03bc\u03ad\u03b3\u03b9\u03c3\u03c4\u03bf\u03c2 \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03bc\u03bf\u03c1\u03af\u03c9\u03bd \u03c0\u03bf\u03c5 \u03c7\u03bf\u03c1\u03b7\u03b3\u03bf\u03cd\u03bd\u03c4\u03b1\u03b9 \u03ba\u03b1\u03c4\u03ac \u03c4\u03b7 \u03b2\u03b1\u03b8\u03bc\u03bf\u03bb\u03cc\u03b3\u03b7\u03c3\u03b7. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": \u03a3\u03c4\u03c5\u03bb \u03b3\u03c1\u03b1\u03bc\u03bc\u03ae\u03c2 CSS. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onChange")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": \u03ad\u03c7\u03b5\u03b9 \u03b4\u03cd\u03bf \u03c0\u03b1\u03c1\u03b1\u03bc\u03ad\u03c4\u03c1\u03bf\u03c5\u03c2: \u03ad\u03bd\u03b1 ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean")," \u03c0\u03bf\u03c5 \u03b4\u03b5\u03af\u03c7\u03bd\u03b5\u03b9 \u03b1\u03bd \u03c4\u03b1 \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03b1 \u03c4\u03bf\u03c0\u03bf\u03b8\u03b5\u03c4\u03ae\u03b8\u03b7\u03ba\u03b1\u03bd \u03bc\u03b5 \u03c4\u03b7 \u03c3\u03c9\u03c3\u03c4\u03ae \u03c3\u03b5\u03b9\u03c1\u03ac \u03ba\u03b1\u03b9 \u03ad\u03bd\u03b1 ",(0,i.kt)("inlineCode",{parentName:"li"},"array")," \u03bc\u03b5 \u03c4\u03b7\u03bd \u03c4\u03c1\u03ad\u03c7\u03bf\u03c5\u03c3\u03b1 \u03c3\u03b5\u03b9\u03c1\u03ac.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),': \u03ad\u03c7\u03b5\u03b9 \u03c9\u03c2 \u03bc\u03bf\u03bd\u03b1\u03b4\u03b9\u03ba\u03ae \u03c0\u03b1\u03c1\u03ac\u03bc\u03b5\u03c4\u03c1\u03bf \u03ad\u03bd\u03b1 "boolean" \u03c0\u03bf\u03c5 \u03b4\u03b5\u03af\u03c7\u03bd\u03b5\u03b9 \u03b1\u03bd \u03c4\u03b1 \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03b1 \u03c4\u03bf\u03c0\u03bf\u03b8\u03b5\u03c4\u03ae\u03b8\u03b7\u03ba\u03b1\u03bd \u03bc\u03b5 \u03c4\u03b7 \u03c3\u03c9\u03c3\u03c4\u03ae \u03c3\u03b5\u03b9\u03c1\u03ac.. Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,i.kt)("h2",{id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"},"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"),(0,i.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Hints",value:"hints"},{label:"Submit Function",value:"submitFunction"},{label:"With Points and Feedback Message",value:"withGradingAndFeedback"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<OrderQuestion\n    question="Order the letters alphabetically!"\n    options={[\n        "Alpha",\n        "Beta",\n        "Gamma",\n        "Delta"\n    ]}\n/>\n'))),(0,i.kt)(o.Z,{value:"hints",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<OrderQuestion\n    question="Order the letters alphabetically!"\n    options={[\n        "Alpha",\n        "Beta",\n        "Gamma",\n        "Delta"\n    ]}\n    hints={[ \'Delta succeeds Gamma in the Greek alphabet\' ]}\n    hintPlacement="bottom"\n/>\n'))),(0,i.kt)(o.Z,{value:"submitFunction",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<OrderQuestion\n    question="Order the letters alphabetically!"\n    options={[\n        "A",\n        "G",\n        "V"\n    ]}\n    onSubmit={() => {\n        alert( \'Any JavaScript function could be executed here...\' );\n    }}\n/>\n'))),(0,i.kt)(o.Z,{value:"withGradingAndFeedback",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<OrderQuestion\n    question="Arrange the events in historical order"\n    options={[\n        "Napoleon\'s coronation as emperor",\n        "The Crimean War",\n        "Bombing of Hiroshima",\n        "Fall of the Berlin Wall",\n        "Donald Trump\'s inauguration",\n    ]}\n    points={10}\n    successMsg = "Great! Looks like you are a history expert"\n/>\n')))))}f.isMDXComponent=!0}}]);