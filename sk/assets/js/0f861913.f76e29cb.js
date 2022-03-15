"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1123],{603905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return p}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),p=r,v=c["".concat(u,".").concat(p)]||c[p]||d[p]||i;return n?a.createElement(v,l(l({ref:t},m),{},{components:n})):a.createElement(v,l({ref:t},m))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},358215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(202784);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(487462),r=n(202784),i=n(972389),l=n(161419),o=n(386010),u="tabItem_LplD";function s(e){var t,n,i,s=e.lazy,m=e.block,d=e.defaultValue,c=e.values,p=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=c?c:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.lx)(k,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=f[0])?void 0:i.props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,l.UB)(),h=y.tabGroupChoices,N=y.setTabGroupChoices,w=(0,r.useState)(g),C=w[0],j=w[1],T=[],x=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var O=h[p];null!=O&&O!==C&&k.some((function(e){return e.value===O}))&&j(O)}var z=function(e){var t=e.currentTarget,n=T.indexOf(t),a=k[n].value;a!==C&&(x(t),j(a),null!=p&&N(p,a))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},v)},k.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return T.push(e)},onKeyDown:D,onFocus:z,onClick:z},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,i.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},531785:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return d},assets:function(){return c},toc:function(){return p},default:function(){return f}});var a=n(487462),r=n(263366),i=(n(202784),n(603905)),l=n(409877),o=n(358215),u=["components"],s={id:"image",title:"Image",sidebar_label:"Image"},m=void 0,d={unversionedId:"image",id:"image",title:"Image",description:"Komponent na zobrazenie obr\xe1zka.",source:"@site/i18n/sk/docusaurus-plugin-content-docs/current/image.md",sourceDirName:".",slug:"/image",permalink:"/sk/docs/image",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/image.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. 6. 2021",frontMatter:{id:"image",title:"Image",sidebar_label:"Image"},sidebar:"docs",previous:{title:"Video Player",permalink:"/sk/docs/video-player"},next:{title:"Link",permalink:"/sk/docs/link"}},c={},p=[{value:"Mo\u017enosti",id:"mo\u017enosti",level:2},{value:"Pr\xedklady",id:"pr\xedklady",level:2}],v={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Komponent na zobrazenie obr\xe1zka."),(0,i.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"src")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string (required)"),": umiestnenie zdroja obr\xe1zku. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"alt")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": popis obr\xe1zku. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"body")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": base64 k\xf3dovan\xe9 \xfadaje obr\xe1zka. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"height")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(number|string)"),": v\xfd\u0161ka obr\xe1zka (v px). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"width")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(number|string)"),": \u0161\xedrka obr\xe1zka (v px). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"inline")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": umo\u017e\u0148uje obklopi\u0165 obr\xe1zok textom. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"id")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": identifik\xe1tor komponentu. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"showModal")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, \u010di sa m\xe1 zobrazi\u0165 mod\xe1lne zobrazenie na cel\xfa obrazovku. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"className")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": n\xe1zov triedy. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": Riadkov\xe9 \u0161t\xfdly CSS. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onShare")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),': sp\xe4tn\xe9 volanie vyvolan\xe9 s obr\xe1zkom, ak sa klikne na tla\u010didlo "zdie\u013ea\u0165".. Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,i.kt)("h2",{id:"pr\xedklady"},"Pr\xedklady"),(0,i.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Border",value:"withStyle"},{label:"Controlled Size",value:"controlledSize"},{label:"Inline",value:"inline"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Image \n    alt="Self-portrait by Vincent van Gogh from September 1889." \n    src="https://bit.ly/37cof7K"\n/>\n'))),(0,i.kt)(o.Z,{value:"withStyle",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Image \n    alt="Self-portrait by Vincent van Gogh from September 1889." \n    src="https://bit.ly/37cof7K"\n    style={{ border: \'solid 10px black\'}}\n/>\n'))),(0,i.kt)(o.Z,{value:"controlledSize",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Image \n    alt="The Starry Night by Vincent van Gogh" \n    src="https://bit.ly/37h3JTj"\n    width="200px"\n    height="auto"\n/>\n'))),(0,i.kt)(o.Z,{value:"inline",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<div>\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, \n<Image \n    src="https://isle.heinz.cmu.edu/Summertime_flowerGradient.png"\n    width="300px"\n    height="auto"\n    inline\n/>\nno sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, \nconsetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n</div>\n')))))}f.isMDXComponent=!0}}]);