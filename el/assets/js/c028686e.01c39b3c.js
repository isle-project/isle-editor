"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3015],{603905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,f=c["".concat(u,".").concat(m)]||c[m]||p[m]||l;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},358215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(202784);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(487462),r=n(202784),l=n(972389),i=n(161419),o=n(386010),u="tabItem_LplD";function s(e){var t,n,l,s=e.lazy,d=e.block,p=e.defaultValue,c=e.values,m=e.groupId,f=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=c?c:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(t=null!=p?p:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=b[0])?void 0:l.props.value;if(null!==h&&!v.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.UB)(),g=N.tabGroupChoices,y=N.setTabGroupChoices,C=(0,r.useState)(h),D=C[0],w=C[1],O=[],x=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var T=g[m];null!=T&&T!==D&&v.some((function(e){return e.value===T}))&&w(T)}var E=function(e){var t=e.currentTarget,n=O.indexOf(t),a=v[n].value;a!==D&&(x(t),w(a),null!=m&&y(m,a))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},f)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:function(e){return O.push(e)},onKeyDown:I,onFocus:E,onClick:E},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":D===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(b.filter((function(e){return e.props.value===D}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==D})}))))}function d(e){var t=(0,l.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},230285:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return p},assets:function(){return c},toc:function(){return m},default:function(){return b}});var a=n(487462),r=n(263366),l=(n(202784),n(603905)),i=n(409877),o=n(358215),u=["components"],s={id:"dashboard",title:"Dashboard",sidebar_label:"Dashboard"},d=void 0,p={unversionedId:"dashboard",id:"dashboard",title:"Dashboard",description:"\u0388\u03bd\u03b1 \u03c4\u03b1\u03bc\u03c0\u03bb\u03cc \u03b3\u03b9\u03b1 \u03c4\u03bf \u03c3\u03c5\u03bd\u03b4\u03c5\u03b1\u03c3\u03bc\u03cc \u03c4\u03bf\u03c5 \u03c7\u03b5\u03b9\u03c1\u03b9\u03c3\u03bc\u03bf\u03cd \u03c0\u03bf\u03bb\u03bb\u03b1\u03c0\u03bb\u03ce\u03bd \u03c0\u03b1\u03b9\u03b4\u03b9\u03ba\u03ce\u03bd \u03c0\u03b5\u03b4\u03af\u03c9\u03bd \u03b5\u03b9\u03c3\u03cc\u03b4\u03bf\u03c5.",source:"@site/i18n/el/docusaurus-plugin-content-docs/current/dashboard.md",sourceDirName:".",slug:"/dashboard",permalink:"/el/docs/dashboard",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/dashboard.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1638825940,formattedLastUpdatedAt:"6/12/2021",frontMatter:{id:"dashboard",title:"Dashboard",sidebar_label:"Dashboard"},sidebar:"docs",previous:{title:"Sortable Tree",permalink:"/el/docs/sortable-tree"},next:{title:"Data Sampler",permalink:"/el/docs/data-sampler"}},c={},m=[{value:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",level:2},{value:"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",level:2}],f={toc:m};function b(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u0388\u03bd\u03b1 \u03c4\u03b1\u03bc\u03c0\u03bb\u03cc \u03b3\u03b9\u03b1 \u03c4\u03bf \u03c3\u03c5\u03bd\u03b4\u03c5\u03b1\u03c3\u03bc\u03cc \u03c4\u03bf\u03c5 \u03c7\u03b5\u03b9\u03c1\u03b9\u03c3\u03bc\u03bf\u03cd \u03c0\u03bf\u03bb\u03bb\u03b1\u03c0\u03bb\u03ce\u03bd \u03c0\u03b1\u03b9\u03b4\u03b9\u03ba\u03ce\u03bd \u03c0\u03b5\u03b4\u03af\u03c9\u03bd \u03b5\u03b9\u03c3\u03cc\u03b4\u03bf\u03c5."),(0,l.kt)("h2",{id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"},"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"autoStart")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u03b1\u03bd \u03bf\u03c1\u03b9\u03c3\u03c4\u03b5\u03af \u03c3\u03b5 ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),", \u03b7 \u03c3\u03c5\u03bd\u03ac\u03c1\u03c4\u03b7\u03c3\u03b7 ",(0,l.kt)("inlineCode",{parentName:"li"},"onGenerate")," \u03b5\u03ba\u03c4\u03b5\u03bb\u03b5\u03af\u03c4\u03b1\u03b9 \u03ba\u03b1\u03c4\u03ac \u03c4\u03b7\u03bd \u03b5\u03ba\u03ba\u03af\u03bd\u03b7\u03c3\u03b7 \u03bc\u03b5 \u03c4\u03b9\u03c2 \u03c0\u03c1\u03bf\u03b5\u03c0\u03b9\u03bb\u03b5\u03b3\u03bc\u03ad\u03bd\u03b5\u03c2 \u03c4\u03b9\u03bc\u03ad\u03c2 \u03b5\u03b9\u03c3\u03cc\u03b4\u03bf\u03c5. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"autoUpdate")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u03b5\u03bb\u03ad\u03b3\u03c7\u03b5\u03b9 \u03b1\u03bd \u03b7 \u03c3\u03c5\u03bd\u03ac\u03c1\u03c4\u03b7\u03c3\u03b7 ",(0,l.kt)("inlineCode",{parentName:"li"},"onGenerate")," \u03b8\u03b1 \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03ba\u03b1\u03bb\u03b5\u03af\u03c4\u03b1\u03b9 \u03b1\u03c5\u03c4\u03cc\u03bc\u03b1\u03c4\u03b1 \u03cc\u03c4\u03b1\u03bd \u03b1\u03bb\u03bb\u03ac\u03b6\u03b5\u03b9 \u03ad\u03bd\u03b1 \u03b1\u03c0\u03cc \u03c4\u03b1 \u03c0\u03b5\u03b4\u03af\u03b1 \u03b5\u03b9\u03c3\u03cc\u03b4\u03bf\u03c5 \u03c4\u03c9\u03bd \u03c0\u03b1\u03b9\u03b4\u03b9\u03ce\u03bd.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"description")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \u03c0\u03b5\u03c1\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae \u03c4\u03b1\u03bc\u03c0\u03bb\u03cc. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"disabled")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u03b5\u03bb\u03ad\u03b3\u03c7\u03b5\u03b9 \u03b1\u03bd \u03c4\u03bf \u03c4\u03b1\u03bc\u03c0\u03bb\u03cc \u03b8\u03b1 \u03b1\u03c0\u03b5\u03bd\u03b5\u03c1\u03b3\u03bf\u03c0\u03bf\u03b9\u03b7\u03b8\u03b5\u03af. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"label")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u03b5\u03c4\u03b9\u03ba\u03ad\u03c4\u03b1 \u03ba\u03bf\u03c5\u03bc\u03c0\u03b9\u03bf\u03cd. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"maxWidth")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": \u03bc\u03ad\u03b3\u03b9\u03c3\u03c4\u03bf \u03c0\u03bb\u03ac\u03c4\u03bf\u03c2 \u03c4\u03bf\u03c5 \u03c4\u03b1\u03bc\u03c0\u03bb\u03cc. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"600"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"className")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u03cc\u03bd\u03bf\u03bc\u03b1 \u03ba\u03bb\u03ac\u03c3\u03b7\u03c2. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"bodyClassName")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u03cc\u03bd\u03bf\u03bc\u03b1 \u03ba\u03bb\u03ac\u03c3\u03b7\u03c2 \u03b3\u03b9\u03b1 \u03c4\u03bf \u03c3\u03ce\u03bc\u03b1 \u03c4\u03b7\u03c2 \u03ba\u03ac\u03c1\u03c4\u03b1\u03c2. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'d-grid gap-3'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": \u03a3\u03c4\u03c5\u03bb \u03b3\u03c1\u03b1\u03bc\u03bc\u03ae\u03c2 CSS. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onGenerate")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": \u03c3\u03c5\u03bd\u03ac\u03c1\u03c4\u03b7\u03c3\u03b7 \u03c0\u03bf\u03c5 \u03ba\u03b1\u03bb\u03b5\u03af\u03c4\u03b1\u03b9 \u03cc\u03c4\u03b1\u03bd \u03b3\u03af\u03bd\u03b5\u03c4\u03b1\u03b9 \u03ba\u03bb\u03b9\u03ba \u03c3\u03c4\u03bf \u03ba\u03bf\u03c5\u03bc\u03c0\u03af \u03ae \u03cc\u03c4\u03b1\u03bd \u03b1\u03bb\u03bb\u03ac\u03b6\u03b5\u03b9 \u03bc\u03b9\u03b1 \u03b1\u03c0\u03cc \u03c4\u03b9\u03c2 \u03c4\u03b9\u03bc\u03ad\u03c2 \u03b5\u03b9\u03c3\u03cc\u03b4\u03bf\u03c5 \u03c4\u03bf\u03c5 \u03c4\u03b1\u03bc\u03c0\u03bb\u03cc (\u03b1\u03bd \u03b7 \u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae ",(0,l.kt)("inlineCode",{parentName:"li"},"autoUpdate")," \u03ad\u03c7\u03b5\u03b9 \u03bf\u03c1\u03b9\u03c3\u03c4\u03b5\u03af \u03c3\u03b5 ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"). \u0397 \u03c3\u03c5\u03bd\u03ac\u03c1\u03c4\u03b7\u03c3\u03b7 \u03ba\u03b1\u03bb\u03b5\u03af\u03c4\u03b1\u03b9 \u03bc\u03b5 \u03c4\u03b9\u03c2 \u03c4\u03b9\u03bc\u03ad\u03c2 \u03c4\u03c9\u03bd \u03c0\u03b5\u03b4\u03af\u03c9\u03bd \u03b5\u03b9\u03c3\u03cc\u03b4\u03bf\u03c5, \u03bc\u03b5 \u03c4\u03b7 \u03c3\u03b5\u03b9\u03c1\u03ac \u03bc\u03b5 \u03c4\u03b7\u03bd \u03bf\u03c0\u03bf\u03af\u03b1 \u03ad\u03c7\u03bf\u03c5\u03bd \u03c4\u03bf\u03c0\u03bf\u03b8\u03b5\u03c4\u03b7\u03b8\u03b5\u03af \u03c3\u03c4\u03bf \u03c4\u03b1\u03bc\u03c0\u03bb\u03cc. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onGenerate() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"title")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \u03c4\u03af\u03c4\u03bb\u03bf\u03c2 \u03ba\u03ac\u03c1\u03c4\u03b1\u03c2. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),".")),(0,l.kt)("h2",{id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"},"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Multiple Inputs",value:"multipleInputs"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Dashboard title="Alerter" onGenerate={( x ) => { alert( x ); }} autoStart={false} >\n    <SliderInput\n        legend="Input value"\n    />\n</Dashboard>\n'))),(0,l.kt)(o.Z,{value:"multipleInputs",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Dashboard \n    title="Multiply three numbers."\n    style={{ width: 600, boxShadow: \'0 0 24px black\' }}\n    onGenerate={( x, y, z ) => { alert( x*y*z ); }} \n    autoStart={false} \n>\n    <SliderInput\n        legend="First Input Value"\n        rangeInputStyle = {{ width: 360 }}\n    />\n    <hr />\n    <SliderInput\n        legend="Second Input Value"\n        rangeInputStyle = {{ width: 360 }}\n    />\n    <hr />\n    <SliderInput\n        legend="Third Input Value"\n        rangeInputStyle = {{ width: 360 }}\n    />\n    <hr />\n</Dashboard>\n')))))}b.isMDXComponent=!0}}]);