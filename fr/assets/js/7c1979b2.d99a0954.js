"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[627],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},358215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(202784);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(487462),a=n(202784),l=n(972389),i=n(161419),o=n(386010),u="tabItem_LplD";function s(e){var t,n,l,s=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.lx)(k,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=v[0])?void 0:l.props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,i.UB)(),y=h.tabGroupChoices,N=h.setTabGroupChoices,w=(0,a.useState)(g),O=w[0],T=w[1],x=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=y[m];null!=C&&C!==O&&k.some((function(e){return e.value===C}))&&T(C)}var j=function(e){var t=e.currentTarget,n=x.indexOf(t),r=k[n].value;r!==O&&(E(t),T(r),null!=m&&N(m,r))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},f)},k.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return x.push(e)},onKeyDown:P,onFocus:j,onClick:j},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function c(e){var t=(0,l.Z)();return a.createElement(s,(0,r.Z)({key:String(t)},e))}},934008:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return d},toc:function(){return m},default:function(){return v}});var r=n(487462),a=n(263366),l=(n(202784),n(603905)),i=n(409877),o=n(358215),u=["components"],s={id:"link",title:"Link",sidebar_label:"Link"},c=void 0,p={unversionedId:"link",id:"link",title:"Link",description:"Un composant permettant d'afficher un lien.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/link.md",sourceDirName:".",slug:"/link",permalink:"/fr/docs/link",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/link.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1638825940,formattedLastUpdatedAt:"06/12/2021",frontMatter:{id:"link",title:"Link",sidebar_label:"Link"},sidebar:"docs",previous:{title:"Image",permalink:"/fr/docs/image"},next:{title:"LaTeX Equations",permalink:"/fr/docs/tex"}},d={},m=[{value:"Options",id:"options",level:2},{value:"Exemples",id:"exemples",level:2}],f={toc:m};function v(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Un composant permettant d'afficher un lien."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"href")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string (required)"),": URL du site web \xe0 lier. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"target")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": d\xe9finit l'endroit o\xf9 le lien est ouvert : mis \xe0 ",(0,l.kt)("inlineCode",{parentName:"li"},"_blank")," pour une nouvelle fen\xeatre, ",(0,l.kt)("inlineCode",{parentName:"li"},"_self")," own frame, ",(0,l.kt)("inlineCode",{parentName:"li"},"_parent")," pour le parent, ",(0,l.kt)("inlineCode",{parentName:"li"},"_top")," pour le corps complet de la fen\xeatre, ou le nom du cadre. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'_blank'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"windowFeatures")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": liste de caract\xe9ristiques de fen\xeatres s\xe9par\xe9es par des virgules pour l'ouverture du lien dans une nouvelle fen\xeatre (voir : ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features"},"https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features"),"). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"className")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": nom de la classe. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": Styles CSS en ligne. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,l.kt)("h2",{id:"exemples"},"Exemples"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"New Page",value:"newPage"},{label:"Image Link",value:"imageLink"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Link href="https://wikipedia.org">Wikipedia</Link>\n'))),(0,l.kt)(o.Z,{value:"newPage",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Link target="_blank" \nstyle={{ fontSize: 35}}\nhref="https://wikipedia.org">New Wikipedia Page</Link>\n'))),(0,l.kt)(o.Z,{value:"imageLink",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Link target="_blank" \nstyle={{ fontSize: 35}}\nhref="https://wikipedia.org">\n<img src= "https://bit.ly/3aM4OU7" /></Link>\n')))))}v.isMDXComponent=!0}}]);