"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5268],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,v=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(v,i(i({ref:t},p),{},{components:n})):a.createElement(v,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},358215:function(e,t,n){var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(487462),r=n(202784),l=n(972389),i=n(275773),o=n(386010),u="tabItem_LplD";function s(e){var t,n,l,s=e.lazy,p=e.block,c=e.defaultValue,m=e.values,d=e.groupId,v=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.lx)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===c?c:null!=(t=null!=c?c:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=k[0])?void 0:l.props.value;if(null!==h&&!f.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.UB)(),N=y.tabGroupChoices,g=y.setTabGroupChoices,j=(0,r.useState)(h),C=j[0],S=j[1],w=[],O=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var T=N[d];null!=T&&T!==C&&f.some((function(e){return e.value===T}))&&S(T)}var D=function(e){var t=e.currentTarget,n=w.indexOf(t),a=f[n].value;a!==C&&(O(t),S(a),null!=d&&g(d,a))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.currentTarget)+1;n=w[a]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.currentTarget)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},v)},f.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:D,onClick:D},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(k.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function p(e){var t=(0,l.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},885372:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return m},default:function(){return v}});var a=n(487462),r=n(263366),l=(n(202784),n(603905)),i=n(409877),o=n(358215),u=["components"],s={id:"js-shell",title:"JavaScript Shell",sidebar_label:"JavaScript Shell"},p=void 0,c={unversionedId:"js-shell",id:"js-shell",title:"JavaScript Shell",description:"Interakt\xedvny Javascript shell, ktor\xfd mo\u017eno pou\u017ei\u0165 na vykon\xe1vanie pr\xedkazov JavaScriptu. Shell obsahuje konzolu, ktor\xe1 zobrazuje chybov\xe9 hl\xe1senia, varovania at\u010f.",source:"@site/i18n/sk/docusaurus-plugin-content-docs/current/js-shell.md",sourceDirName:".",slug:"/js-shell",permalink:"/sk/docs/js-shell",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/js-shell.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633715852,formattedLastUpdatedAt:"8. 10. 2021",frontMatter:{id:"js-shell",title:"JavaScript Shell",sidebar_label:"JavaScript Shell"},sidebar:"docs",previous:{title:"Flippable Card",permalink:"/sk/docs/flippable-card"},next:{title:"Likert Scale",permalink:"/sk/docs/likert-scale"}},m=[{value:"Mo\u017enosti",id:"mo\u017enosti",children:[],level:2},{value:"Pr\xedklady",id:"pr\xedklady",children:[],level:2}],d={toc:m};function v(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Interakt\xedvny Javascript shell, ktor\xfd mo\u017eno pou\u017ei\u0165 na vykon\xe1vanie pr\xedkazov JavaScriptu. Shell obsahuje konzolu, ktor\xe1 zobrazuje chybov\xe9 hl\xe1senia, varovania at\u010f."),(0,l.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"code")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": K\xf3d JavaScript, ktor\xfd sa m\xe1 vyhodnoti\u0165. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"solution")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": pri program\xe1torsk\xfdch ot\xe1zkach k\xf3d ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),", ktor\xfd predstavuje ofici\xe1lne rie\u0161enie probl\xe9mu. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hints")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": pre ot\xe1zky t\xfdkaj\xface sa programovania, rad tipov poskytuj\xfacich n\xe1vod, ako pristupova\u0165 k probl\xe9mu. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"precompute")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, \u010di sa m\xe1 po pripojen\xed komponentu vykona\u0165 predvolen\xfd k\xf3d.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"chat")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, \u010di m\xe1 by\u0165 povolen\xe1 funkcia skupinov\xe9ho chatu.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"check")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": pripojen\xfd k\xf3d JavaScriptu na kontrolu vyhodnocovan\xe9ho ",(0,l.kt)("inlineCode",{parentName:"li"},"k\xf3du"),". Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"disabled")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, \u010di sa maj\xfa zak\xe1za\u0165 v\u0161etky pou\u017e\xedvate\u013esk\xe9 vstupy a blok k\xf3du m\xe1 by\u0165 statick\xfd.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"lines")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": po\u010det riadkov, ktor\xe9 sa maj\xfa zobrazi\u0165. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"className")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": n\xe1zov triedy. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": Riadkov\xe9 \u0161t\xfdly CSS. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onChange")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": sp\xe4tn\xe9 volanie vyvolan\xe9 v\u017edy, ke\u010f sa zmen\xed vstup do textov\xe9ho po\u013ea. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onEvaluate")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": sp\xe4tn\xe9 volanie vyvolan\xe9 v\u017edy po kliknut\xed na tla\u010didlo ",(0,l.kt)("inlineCode",{parentName:"li"},"Vyhodnoti\u0165"),". Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onEvaluate() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"vars")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": scope objekt s premenn\xfdmi, ktor\xe9 by mali by\u0165 k dispoz\xedcii vyhodnocovan\xe9mu ",(0,l.kt)("inlineCode",{parentName:"li"},"code"),". Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,l.kt)("h2",{id:"pr\xedklady"},"Pr\xedklady"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Style",value:"withStyle"},{label:"Ten Lines",value:"mLines"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<JSShell code = {`var a = 2; \nvar b = 2;\nconsole.log(a + b);`} />\n"))),(0,l.kt)(o.Z,{value:"withStyle",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<JSShell style={{ fontSize: 18, boxShadow: '0 0 4px black' }}  />\n"))),(0,l.kt)(o.Z,{value:"mLines",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<JSShell lines={10} />\n")))))}v.isMDXComponent=!0}}]);