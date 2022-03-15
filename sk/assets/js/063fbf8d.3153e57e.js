"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8165],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},358215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(202784);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(487462),r=n(202784),l=n(972389),o=n(161419),i=n(386010),u="tabItem_LplD";function s(e){var t,n,l,s=e.lazy,p=e.block,c=e.defaultValue,m=e.values,d=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,o.lx)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===c?c:null!=(t=null!=c?c:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=v[0])?void 0:l.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,o.UB)(),N=g.tabGroupChoices,h=g.setTabGroupChoices,x=(0,r.useState)(y),C=x[0],T=x[1],w=[],O=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var j=N[d];null!=j&&j!==C&&b.some((function(e){return e.value===j}))&&T(j)}var E=function(e){var t=e.currentTarget,n=w.indexOf(t),a=b[n].value;a!==C&&(O(t),T(a),null!=d&&h(d,a))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.currentTarget)+1;n=w[a]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.currentTarget)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},f)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return w.push(e)},onKeyDown:D,onFocus:E,onClick:E},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function p(e){var t=(0,l.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},344640:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return m},assets:function(){return d},toc:function(){return f},default:function(){return k}});var a,r=n(487462),l=n(263366),o=(n(202784),n(603905)),i=n(409877),u=n(358215),s=["components"],p={id:"text-area",title:"Text Area",sidebar_label:"Text Area"},c=void 0,m={unversionedId:"input/text-area",id:"input/text-area",title:"Text Area",description:"Komponent textovej oblasti. Pou\u017e\xedva sa ako samostatn\xfd komponent, zmeny by sa mali spracova\u0165 pomocou atrib\xfatu onChange.",source:"@site/i18n/sk/docusaurus-plugin-content-docs/current/input/text-area.md",sourceDirName:"input",slug:"/input/text-area",permalink:"/sk/docs/input/text-area",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/text-area.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. 6. 2021",frontMatter:{id:"text-area",title:"Text Area",sidebar_label:"Text Area"},sidebar:"docs",previous:{title:"Slider Input",permalink:"/sk/docs/input/slider-input"},next:{title:"Text Input",permalink:"/sk/docs/input/text-input"}},d={},f=[{value:"Mo\u017enosti",id:"mo\u017enosti",level:2},{value:"Pr\xedklady",id:"pr\xedklady",level:2},{value:"Examples",id:"examples",level:2}],v=(a="TextArea",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),b={toc:f};function k(e){var t,n=e.components,a=(0,l.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},b,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Komponent textovej oblasti. Pou\u017e\xedva sa ako samostatn\xfd komponent, zmeny by sa mali spracova\u0165 pomocou atrib\xfatu ",(0,o.kt)("inlineCode",{parentName:"p"},"onChange"),"."),(0,o.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": predvolen\xe1 hodnota textovej oblasti. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"value")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": textov\xe1 hodnota (pre riaden\xfd komponent). Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"disabled")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, \u010di m\xe1 by\u0165 textov\xe1 oblas\u0165 vypnut\xe1.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"legend")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(string|node)"),": text legendy. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"onBlur")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"function"),": sp\xe4tn\xe9 volanie vyvolan\xe9 pri strate fokusu na textov\xfa oblas\u0165. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"onBlur() {}"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"onChange")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"function"),": sp\xe4tn\xe9 volanie vyvolan\xe9 s nov\xfdm textom pri zmene textu oblasti. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"placeholder")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": z\xe1stupn\xfd text. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"resizable")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": ur\u010duje, \u010di sa m\xe1 meni\u0165 ve\u013ekos\u0165 textovej oblasti (m\xf4\u017ee by\u0165 ",(0,o.kt)("inlineCode",{parentName:"li"},"obojstrann\xe1"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"horizont\xe1lna"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"vertik\xe1lna")," alebo ",(0,o.kt)("inlineCode",{parentName:"li"},"\u017eiadna"),"). Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"'none'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"rows")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),": po\u010det riadkov. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"style")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object"),": Riadkov\xe9 \u0161t\xfdly CSS. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,o.kt)("h2",{id:"pr\xedklady"},"Pr\xedklady"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Custom Style",value:"customStyle"}],lazy:!0,mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"minimal",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<TextArea\n    legend="Please enter a few sentences"\n    placeholder="Enter text"\n/>\n'))),(0,o.kt)(u.Z,{value:"customStyle",mdxType:"TabItem"},(0,o.kt)(v,{legend:"Please enter a few sentences",placeholder:"Enter text",style:(t={fontSize:33,fontFamily:"Georgia",boxShadow:"0 0 4px black",background:"rgb(238,174,202)"},t.background="radial-gradient(circle, rgba(255, 255, 0, 0.3) 44%, white 100%)",t),mdxType:"TextArea"}))))}k.isMDXComponent=!0}}]);