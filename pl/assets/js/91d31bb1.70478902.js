"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1225],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},358215:function(e,t,n){var r=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(487462),a=n(202784),l=n(972389),i=n(275773),o=n(386010),u="tabItem_LplD";function s(e){var t,n,l,s=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,k=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=d?d:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.lx)(y,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=k[0])?void 0:l.props.value;if(null!==b&&!y.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,i.UB)(),g=h.tabGroupChoices,w=h.setTabGroupChoices,N=(0,a.useState)(b),O=N[0],j=N[1],T=[],C=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var S=g[m];null!=S&&S!==O&&y.some((function(e){return e.value===S}))&&j(S)}var E=function(e){var t=e.currentTarget,n=T.indexOf(t),r=y[n].value;r!==O&&(C(t),j(r),null!=m&&w(m,r))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;n=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;n=T[a]||T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},f)},y.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return T.push(e)},onKeyDown:x,onFocus:E,onClick:E},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(k.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function c(e){var t=(0,l.Z)();return a.createElement(s,(0,r.Z)({key:String(t)},e))}},187029:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var r=n(487462),a=n(263366),l=(n(202784),n(603905)),i=n(409877),o=n(358215),u=["components"],s={id:"likert-scale",title:"Likert Scale",sidebar_label:"Likert Scale"},c=void 0,p={unversionedId:"likert-scale",id:"likert-scale",title:"Likert Scale",description:"Komponent pokazuj\u0105cy pytanie i pi\u0119ciopunktow\u0105 skal\u0119 odpowiedzi dla uczni\xf3w.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/likert-scale.md",sourceDirName:".",slug:"/likert-scale",permalink:"/pl/docs/likert-scale",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/likert-scale.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614228315,formattedLastUpdatedAt:"24.02.2021",frontMatter:{id:"likert-scale",title:"Likert Scale",sidebar_label:"Likert Scale"},sidebar:"docs",previous:{title:"JavaScript Shell",permalink:"/pl/docs/js-shell"},next:{title:"Multi Cards",permalink:"/pl/docs/multi-cards"}},d=[{value:"Opcje",id:"opcje",children:[],level:2},{value:"Przyk\u0142ady",id:"przyk\u0142ady",children:[],level:2}],m={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Komponent pokazuj\u0105cy pytanie i pi\u0119ciopunktow\u0105 skal\u0119 odpowiedzi dla uczni\xf3w."),(0,l.kt)("h2",{id:"opcje"},"Opcje"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"question")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|node)"),": pytanie, kt\xf3re nale\u017cy wydrukowa\u0107. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"options")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array"),": szereg pi\u0119ciu element\xf3w utrzymuj\u0105cych etykiety dla r\xf3\u017cnych poziom\xf3w skali. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"noMultipleResponses")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": uniemo\u017cliwia\u0107 wielokrotne sk\u0142adanie wniosk\xf3w przez jednego studenta. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrola, czy nale\u017cy wy\u0142\u0105czy\u0107 powiadomienia o z\u0142o\u017ceniu wniosku. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"className")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": nazwa klasy. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": Style CSS inline. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,l.kt)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Custom Options",value:"customOptions"},{label:"With Style",value:"withStyle"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<LikertScale \n    id="discrimination" \n    question="Do you agree with the arguments made by the speaker?" \n/>\n'))),(0,l.kt)(o.Z,{value:"customOptions",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LikertScale \n    id=\"discrimination\" \n    question=\"After your initial analysis of the data, how likely do you think it is that players are discriminated against by soccer referees because of their skin tone?\" \n    options={[ 'Very unlikely', 'Unlikely', 'Neither unlikely nor likely', 'Likely', 'Very Likely']}\n/>\n"))),(0,l.kt)(o.Z,{value:"withStyle",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LikertScale \n    id=\"discrimination\" \n    question=\"Do you agree with the arguments made by the speaker?\" \n    style={{ \n        background: 'rgba(0,0,255,0.05)', \n        fontFamily: 'Open Sans', \n        fontSize: 22 \n    }}\n/>\n")))))}f.isMDXComponent=!0}}]);