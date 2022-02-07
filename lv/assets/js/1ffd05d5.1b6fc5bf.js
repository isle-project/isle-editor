"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6325],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,v=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(v,l(l({ref:t},p),{},{components:n})):a.createElement(v,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},358215:function(e,t,n){var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(487462),r=n(202784),i=n(972389),l=n(275773),o=n(386010),u="tabItem_LplD";function s(e){var t,n,i,s=e.lazy,p=e.block,c=e.defaultValue,m=e.values,d=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.lx)(k,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=f[0])?void 0:i.props.value;if(null!==h&&!k.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,l.UB)(),y=g.tabGroupChoices,w=g.setTabGroupChoices,N=(0,r.useState)(h),C=N[0],j=N[1],O=[],T=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var S=y[d];null!=S&&S!==C&&k.some((function(e){return e.value===S}))&&j(S)}var x=function(e){var t=e.currentTarget,n=O.indexOf(t),a=k[n].value;a!==C&&(T(t),j(a),null!=d&&w(d,a))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},v)},k.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return O.push(e)},onKeyDown:E,onFocus:x,onClick:x},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function p(e){var t=(0,i.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},662106:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return m},default:function(){return v}});var a=n(487462),r=n(263366),i=(n(202784),n(603905)),l=n(409877),o=n(358215),u=["components"],s={id:"switch",title:"Switch Components",sidebar_label:"Switch Components"},p=void 0,c={unversionedId:"switch",id:"switch",title:"Switch Components",description:"Sl\u0113d\u017ea komponents \u013cauj par\u0101d\u012bt vienu elementu no vair\u0101ku elementu saraksta. Lietot\u0101ji var p\u0101rvietoties starp da\u017e\u0101diem p\u0101rsl\u0113dz\u0113ja taga b\u0113rniem, noklik\u0161\u0137inot uz pa\u0161laik r\u0101d\u012bt\u0101.",source:"@site/i18n/lv/docusaurus-plugin-content-docs/current/switch.md",sourceDirName:".",slug:"/switch",permalink:"/lv/docs/switch",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/switch.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19.06.2021.",frontMatter:{id:"switch",title:"Switch Components",sidebar_label:"Switch Components"},sidebar:"docs",previous:{title:"Slider",permalink:"/lv/docs/slider"},next:{title:"Text",permalink:"/lv/docs/text"}},m=[{value:"Iesp\u0113jas",id:"iesp\u0113jas",children:[],level:2},{value:"Piem\u0113ri",id:"piem\u0113ri",children:[],level:2}],d={toc:m};function v(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Sl\u0113d\u017ea komponents \u013cauj par\u0101d\u012bt vienu elementu no vair\u0101ku elementu saraksta. Lietot\u0101ji var p\u0101rvietoties starp da\u017e\u0101diem p\u0101rsl\u0113dz\u0113ja taga b\u0113rniem, noklik\u0161\u0137inot uz pa\u0161laik r\u0101d\u012bt\u0101."),(0,i.kt)("h2",{id:"iesp\u0113jas"},"Iesp\u0113jas"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"active")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrol\u0113, vai sl\u0113dzis ir akt\u012bvs vai nav. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"tooltip")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": R\u012bkjoslas uzraksts, kas tiek par\u0101d\u012bts, uzbraucot virs sl\u0113d\u017ea elementa.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"tooltipPos")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": uzraksta izvietojums (",(0,i.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"right")," vai ",(0,i.kt)("inlineCode",{parentName:"li"},"bottom"),").. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'top'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"className")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": klases nosaukums aptvero\u0161ajam span elementam. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": CSS ieb\u016bv\u0113tie stili. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onChange")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": atgriezeniskais zvans, kas tiek izsaukts, kad elementi tiek p\u0101rsl\u0113gti. K\u0101 pirmo argumentu sa\u0146em pa\u0161laik r\u0101d\u012bt\u0101 b\u0113rna indeksu.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onChange() {}"),".")),(0,i.kt)("h2",{id:"piem\u0113ri"},"Piem\u0113ri"),(0,i.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Custom Tooltip",value:"withTooltip"},{label:"With Style",value:"withStyle"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Switch>\n    <span>Option 1</span>\n    <span>Option 2</span>\n</Switch>\n"))),(0,i.kt)(o.Z,{value:"withTooltip",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Switch tooltip="Just click and see" tooltipPos="left">\n    <span>Option 1</span>\n    <span>Option 2</span>\n</Switch>\n'))),(0,i.kt)(o.Z,{value:"withStyle",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Switch  \n  style={{ fontSize: 80, fontFamily: \'Open Sans Condensed\'}} \n>\n    <span>Some Clouds</span>\n    <img src="https://bit.ly/3rLGE30" />\n    <img src ="https://bit.ly/2OzxEj3" />\n</Switch>\n')))))}v.isMDXComponent=!0}}]);