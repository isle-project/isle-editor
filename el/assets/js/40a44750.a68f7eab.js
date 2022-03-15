"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6098],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},358215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(202784);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(487462),r=n(202784),i=n(972389),l=n(161419),o=n(386010),u="tabItem_LplD";function s(e){var t,n,i,s=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.lx)(g,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=v[0])?void 0:i.props.value;if(null!==h&&!g.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,l.UB)(),y=k.tabGroupChoices,N=k.setTabGroupChoices,P=(0,r.useState)(h),C=P[0],T=P[1],w=[],O=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=y[m];null!=E&&E!==C&&g.some((function(e){return e.value===E}))&&T(E)}var x=function(e){var t=e.currentTarget,n=w.indexOf(t),a=g[n].value;a!==C&&(O(t),T(a),null!=m&&N(m,a))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.currentTarget)+1;n=w[a]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.currentTarget)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},f)},g.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return w.push(e)},onKeyDown:j,onFocus:x,onClick:x},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function c(e){var t=(0,i.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},15275:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return d},toc:function(){return m},default:function(){return v}});var a=n(487462),r=n(263366),i=(n(202784),n(603905)),l=n(409877),o=n(358215),u=["components"],s={id:"pages",title:"Pages",sidebar_label:"Pages"},c=void 0,p={unversionedId:"pages",id:"pages",title:"Pages",description:"\u0388\u03bd\u03b1 \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf \u03c3\u03b5\u03bb\u03b9\u03b4\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7\u03c2 ISLE \u03c0\u03bf\u03c5 \u03b5\u03c0\u03b9\u03c4\u03c1\u03ad\u03c0\u03b5\u03b9 \u03c3\u03c4\u03bf \u03c7\u03c1\u03ae\u03c3\u03c4\u03b7 \u03bd\u03b1 \u03bc\u03b5\u03c4\u03b1\u03b2\u03b1\u03af\u03bd\u03b5\u03b9 \u03c3\u03b5 \u03bc\u03b9\u03b1 \u03b1\u03ba\u03bf\u03bb\u03bf\u03c5\u03b8\u03af\u03b1 \u03c3\u03b5\u03bb\u03af\u03b4\u03c9\u03bd.",source:"@site/i18n/el/docusaurus-plugin-content-docs/current/pages.md",sourceDirName:".",slug:"/pages",permalink:"/el/docs/pages",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/pages.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633715852,formattedLastUpdatedAt:"8/10/2021",frontMatter:{id:"pages",title:"Pages",sidebar_label:"Pages"},sidebar:"docs",previous:{title:"IFrame",permalink:"/el/docs/iframe"},next:{title:"Panel",permalink:"/el/docs/panel"}},d={},m=[{value:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",level:2},{value:"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",level:2}],f={toc:m};function v(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u0388\u03bd\u03b1 \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf \u03c3\u03b5\u03bb\u03b9\u03b4\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7\u03c2 ISLE \u03c0\u03bf\u03c5 \u03b5\u03c0\u03b9\u03c4\u03c1\u03ad\u03c0\u03b5\u03b9 \u03c3\u03c4\u03bf \u03c7\u03c1\u03ae\u03c3\u03c4\u03b7 \u03bd\u03b1 \u03bc\u03b5\u03c4\u03b1\u03b2\u03b1\u03af\u03bd\u03b5\u03b9 \u03c3\u03b5 \u03bc\u03b9\u03b1 \u03b1\u03ba\u03bf\u03bb\u03bf\u03c5\u03b8\u03af\u03b1 \u03c3\u03b5\u03bb\u03af\u03b4\u03c9\u03bd."),(0,i.kt)("h2",{id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"},"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"activePage")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": \u03b5\u03bd\u03b5\u03c1\u03b3\u03ae \u03c3\u03b5\u03bb\u03af\u03b4\u03b1. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"disabled")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": \u03b5\u03bb\u03ad\u03b3\u03c7\u03b5\u03b9 \u03b1\u03bd \u03b7 \u03b3\u03c1\u03b1\u03bc\u03bc\u03ae \u03c0\u03bb\u03bf\u03ae\u03b3\u03b7\u03c3\u03b7\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 \u03b5\u03bd\u03b5\u03c1\u03b3\u03ae \u03ae \u03cc\u03c7\u03b9. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"title")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \u03b5\u03bc\u03c6\u03b1\u03bd\u03b9\u03b6\u03cc\u03bc\u03b5\u03bd\u03bf\u03c2 \u03c4\u03af\u03c4\u03bb\u03bf\u03c2 \u03c4\u03bf\u03c5 \u03b4\u03bf\u03c7\u03b5\u03af\u03bf\u03c5 \u03c4\u03c9\u03bd \u03c3\u03b5\u03bb\u03af\u03b4\u03c9\u03bd. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"pagination")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": \u03b1\u03bd \u03b8\u03b1 \u03b5\u03bc\u03c6\u03b1\u03bd\u03af\u03b6\u03b5\u03c4\u03b1\u03b9 \u03b7 \u03c3\u03b5\u03bb\u03b9\u03b4\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7 \u03b5\u03af\u03c4\u03b5 \u03c3\u03c4\u03b7\u03bd ",(0,i.kt)("inlineCode",{parentName:"li"},"top"),", \u03b5\u03af\u03c4\u03b5 \u03c3\u03c4\u03bf ",(0,i.kt)("inlineCode",{parentName:"li"},"bottom"),", \u03b5\u03af\u03c4\u03b5 ",(0,i.kt)("inlineCode",{parentName:"li"},"both"),".. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'top'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"size")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": \u03bc\u03ad\u03b3\u03b5\u03b8\u03bf\u03c2 \u03c4\u03c9\u03bd \u03ba\u03bf\u03c5\u03bc\u03c0\u03b9\u03ce\u03bd \u03c3\u03b5\u03bb\u03b9\u03b4\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7\u03c2 (\u03b5\u03af\u03c4\u03b5 ",(0,i.kt)("inlineCode",{parentName:"li"},"default"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"lg"),", \u03ae ",(0,i.kt)("inlineCode",{parentName:"li"},"sm"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'default'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"height")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(number|string)"),": \u03c4\u03bf \u03bc\u03ad\u03b3\u03b9\u03c3\u03c4\u03bf \u03cd\u03c8\u03bf\u03c2 \u03c4\u03bf\u03c5 \u03b4\u03bf\u03c7\u03b5\u03af\u03bf\u03c5. \u0395\u03ac\u03bd \u03bc\u03b9\u03b1 \u03b5\u03bd\u03c3\u03c9\u03bc\u03b1\u03c4\u03c9\u03bc\u03ad\u03bd\u03b7 \u03c3\u03b5\u03bb\u03af\u03b4\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03c8\u03b7\u03bb\u03cc\u03c4\u03b5\u03c1\u03b7, \u03c0\u03c1\u03bf\u03c3\u03c4\u03af\u03b8\u03b5\u03c4\u03b1\u03b9 \u03bc\u03b9\u03b1 \u03ba\u03b1\u03c4\u03b1\u03ba\u03cc\u03c1\u03c5\u03c6\u03b7 \u03b3\u03c1\u03b1\u03bc\u03bc\u03ae \u03ba\u03cd\u03bb\u03b9\u03c3\u03b7\u03c2.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": \u03a3\u03c4\u03c5\u03bb \u03b3\u03c1\u03b1\u03bc\u03bc\u03ae\u03c2 CSS. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onSelect")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": \u039b\u03b5\u03b9\u03c4\u03bf\u03c5\u03c1\u03b3\u03af\u03b1 \u03c0\u03bf\u03c5 \u03ba\u03b1\u03bb\u03b5\u03af\u03c4\u03b1\u03b9 \u03cc\u03c4\u03b1\u03bd \u03b1\u03bb\u03bb\u03ac\u03b6\u03b5\u03b9 \u03b7 \u03b5\u03bd\u03b5\u03c1\u03b3\u03ae \u03b1\u03bb\u03bb\u03b1\u03b3\u03ae. \u039b\u03b1\u03bc\u03b2\u03ac\u03bd\u03b5\u03b9 \u03c4\u03bf \u03bd\u03ad\u03bf \u03b5\u03bd\u03b5\u03c1\u03b3\u03cc \u03b4\u03b5\u03af\u03ba\u03c4\u03b7 \u03c3\u03b5\u03bb\u03af\u03b4\u03b1\u03c2 \u03c9\u03c2 \u03bc\u03bf\u03bd\u03b1\u03b4\u03b9\u03ba\u03ae \u03c0\u03b1\u03c1\u03ac\u03bc\u03b5\u03c4\u03c1\u03bf.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onSelect() {}"),".")),(0,i.kt)("h2",{id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"},"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"),(0,i.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Custom Pagination",value:"customPagination"},{label:"With CSS",value:"withCSS"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Pages title="Pages" >\n    <div>\n        <h1>First Page</h1>\n    </div>\n    <div>\n        <h1>Second Page</h1>\n    </div>\n    <div>\n        <h1>Third Page</h1>\n    </div>\n</Pages>\n'))),(0,i.kt)(o.Z,{value:"customPagination",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Pages title="Questions" pagination="both" size="sm" >\n    <div>\n        <NumberQuestion\n            question="What is the number PI (at least up to three digits after the decimal point)?"\n            solution={Math.PI}\n            digits={3}\n        />\n    </div>\n    <div>\n        <FreeTextQuestion \n            question="Is this question displayed on the second page?"\n            solution="Yes" \n        />\n    </div>\n</Pages>\n'))),(0,i.kt)(o.Z,{value:"withCSS",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Pages \n    activePage={2}\n    style={{ background: 'lightblue', height: 420, outline: '4px solid black' }} \n    title=\"Styled Pages\"\n>\n    <div>\n        <h1>First Page</h1>\n    </div>\n    <div>\n        <h1>Second Page</h1>\n    </div>\n    <div>\n        <h1>Third Page</h1>\n    </div>\n</Pages>\n")))))}v.isMDXComponent=!0}}]);