"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7663],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,v=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(v,i(i({ref:t},p),{},{components:n})):r.createElement(v,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},358215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(202784);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(487462),a=n(202784),l=n(972389),i=n(161419),o=n(386010),u="tabItem_LplD";function s(e){var t,n,l,s=e.lazy,p=e.block,c=e.defaultValue,m=e.values,d=e.groupId,v=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.lx)(k,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=f[0])?void 0:l.props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.UB)(),N=y.tabGroupChoices,h=y.setTabGroupChoices,w=(0,a.useState)(g),C=w[0],O=w[1],S=[],x=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var E=N[d];null!=E&&E!==C&&k.some((function(e){return e.value===E}))&&O(E)}var T=function(e){var t=e.currentTarget,n=S.indexOf(t),r=k[n].value;r!==C&&(x(t),O(r),null!=d&&h(d,r))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=S.indexOf(e.currentTarget)+1;n=S[r]||S[0];break;case"ArrowLeft":var a=S.indexOf(e.currentTarget)-1;n=S[a]||S[S.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},v)},k.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return S.push(e)},onKeyDown:j,onFocus:T,onClick:T},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function p(e){var t=(0,l.Z)();return a.createElement(s,(0,r.Z)({key:String(t)},e))}},130264:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return m},toc:function(){return d},default:function(){return f}});var r=n(487462),a=n(263366),l=(n(202784),n(603905)),i=n(409877),o=n(358215),u=["components"],s={id:"seal",title:"Seal",sidebar_label:"Seal"},p=void 0,c={unversionedId:"seal",id:"seal",title:"Seal",description:"Schvalovac\xed pe\u010de\u0165.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/seal.md",sourceDirName:".",slug:"/seal",permalink:"/cs/docs/seal",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/seal.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1627947125,formattedLastUpdatedAt:"2. 8. 2021",frontMatter:{id:"seal",title:"Seal",sidebar_label:"Seal"},sidebar:"docs",previous:{title:"Recorder",permalink:"/cs/docs/recorder"},next:{title:"Shaped Form",permalink:"/cs/docs/shaped-form"}},m={},d=[{value:"Mo\u017enosti",id:"mo\u017enosti",level:2},{value:"P\u0159\xedklady",id:"p\u0159\xedklady",level:2}],v={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Schvalovac\xed pe\u010de\u0165."),(0,l.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"active")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, zda je pe\u010de\u0165 aktivn\xed nebo \u0161ed\xe1.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onClick")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": funkce zp\u011btn\xe9ho vol\xe1n\xed vyvolan\xe1 p\u0159i kliknut\xed na pozn\xe1mku. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onClick() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"scale")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": velikost objektu (pokud nen\xed explicitn\u011b nastavena, velikost pe\u010deti se nezm\u011bn\xed).. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"innerStyle")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": styl pro vnit\u0159n\xed okruh. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"lower")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": spodn\xed text. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'The lower text'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"lowerArc")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": oblouk pro spodn\xed text. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"150"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"noOrnaments")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": zabra\u0148uje vykreslen\xed ornament\u016f. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"removable")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0159\xedd\xed, zda se pozn\xe1mka po kliknut\xed odstran\xed.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": styl prvku. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"title")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|node)"),": n\xe1zev pe\u010deti. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'Enter a title'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"upper")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": horn\xed text. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'The upper text'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"upperArc")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": oblouk pro horn\xed text. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"150"),".")),(0,l.kt)("h2",{id:"p\u0159\xedklady"},"P\u0159\xedklady"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Style",value:"withStyle"},{label:"Removable",value:"removable"},{label:"Scaled",value:"scaled"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Seal title="LESSON DONE" upper="Carnegie Mellon" upperArc={120} lower="University" lowerArc={105} />\n'))),(0,l.kt)(o.Z,{value:"withStyle",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'\n<Seal \n  title="LESSON DONE" \n  style={{ backgroundImage: \'linear-gradient(white, silver, gainsboro)\'}}\n  innerStyle={{ backgroundImage:  \'linear-gradient(gold, silver, white)\' }}\n  upper="Carnegie Mellon"  upperArc={120} \n  lower="University" lowerArc={105}\n/>\n'))),(0,l.kt)(o.Z,{value:"removable",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Seal \n  title="LESSON DONE" \n  noOrnaments\n  removable\n  style={{ backgroundImage: \'linear-gradient(white, silver, gainsboro)\'}}\n  innerStyle={{ backgroundImage:  \'linear-gradient(gold, silver, white)\' }}\n  upper="Carnegie Mellon"  upperArc={120} \n  lower="University" lowerArc={105}\n/>\n'))),(0,l.kt)(o.Z,{value:"scaled",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Seal \n  title=\"BIG SEAL\" \n  scale={1.15}\n  style={{ fontWeight: 800, color: 'darkred', backgroundImage: 'linear-gradient(white, silver, gainsboro)'}}\n  innerStyle={{ backgroundImage:  'linear-gradient(gold, silver, white)' }}\n  upper=\"Carnegie Mellon\" upperArc={120} \n  lower=\"University\" lowerArc={105}\n/>\n")))))}f.isMDXComponent=!0}}]);