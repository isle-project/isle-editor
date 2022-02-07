"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[376],{603905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return p}});var r=a(202784);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(a),p=n,v=c["".concat(u,".").concat(p)]||c[p]||d[p]||o;return a?r.createElement(v,l(l({ref:t},m),{},{components:a})):r.createElement(v,l({ref:t},m))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},358215:function(e,t,a){var r=a(202784);t.Z=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},409877:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(487462),n=a(202784),o=a(972389),l=a(275773),i=a(386010),u="tabItem_LplD";function s(e){var t,a,o,s=e.lazy,m=e.block,d=e.defaultValue,c=e.values,p=e.groupId,v=e.className,f=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=c?c:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.lx)(b,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(o=f[0])?void 0:o.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,l.UB)(),k=h.tabGroupChoices,w=h.setTabGroupChoices,N=(0,n.useState)(y),S=N[0],j=N[1],O=[],T=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var x=k[p];null!=x&&x!==S&&b.some((function(e){return e.value===x}))&&j(x)}var E=function(e){var t=e.currentTarget,a=O.indexOf(t),r=b[a].value;r!==S&&(T(t),j(r),null!=p&&w(p,r))},C=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;a=O[r]||O[0];break;case"ArrowLeft":var n=O.indexOf(e.currentTarget)-1;a=O[n]||O[O.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},v)},b.map((function(e){var t=e.value,a=e.label,o=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return O.push(e)},onKeyDown:C,onFocus:E,onClick:E},o,{className:(0,i.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":S===t})}),null!=a?a:t)}))),s?(0,n.cloneElement)(f.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function m(e){var t=(0,o.Z)();return n.createElement(s,(0,r.Z)({key:String(t)},e))}},286457:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return c},default:function(){return v}});var r=a(487462),n=a(263366),o=(a(202784),a(603905)),l=a(409877),i=a(358215),u=["components"],s={id:"shaped-form",title:"Shaped Form",sidebar_label:"Shaped Form"},m=void 0,d={unversionedId:"shaped-form",id:"shaped-form",title:"Shaped Form",description:"\u0388\u03bd\u03b1 \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf \u03c0\u03bf\u03c5 \u03b5\u03c0\u03b9\u03c4\u03c1\u03ad\u03c0\u03b5\u03b9 \u03c4\u03b7\u03bd \u03b5\u03bc\u03c6\u03ac\u03bd\u03b9\u03c3\u03b7 \u03c3\u03c7\u03b7\u03bc\u03ac\u03c4\u03c9\u03bd, \u03c0\u03bf\u03c5 \u03b5\u03bd\u03b5\u03c1\u03b3\u03bf\u03c0\u03bf\u03b9\u03bf\u03cd\u03bd\u03c4\u03b1\u03b9 \u03b1\u03c0\u03cc \u03b5\u03b9\u03ba\u03cc\u03bd\u03b5\u03c2 \u03bc\u03b5 \u03ba\u03b1\u03bd\u03ac\u03bb\u03b9 \u03ac\u03bb\u03c6\u03b1.",source:"@site/i18n/el/docusaurus-plugin-content-docs/current/shaped-form.md",sourceDirName:".",slug:"/shaped-form",permalink:"/el/docs/shaped-form",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/shaped-form.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1/6/2021",frontMatter:{id:"shaped-form",title:"Shaped Form",sidebar_label:"Shaped Form"},sidebar:"docs",previous:{title:"Seal",permalink:"/el/docs/seal"},next:{title:"Sortable Tree",permalink:"/el/docs/sortable-tree"}},c=[{value:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",children:[],level:2},{value:"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1",children:[],level:2}],p={toc:c};function v(e){var t=e.components,a=(0,n.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u0388\u03bd\u03b1 \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf \u03c0\u03bf\u03c5 \u03b5\u03c0\u03b9\u03c4\u03c1\u03ad\u03c0\u03b5\u03b9 \u03c4\u03b7\u03bd \u03b5\u03bc\u03c6\u03ac\u03bd\u03b9\u03c3\u03b7 \u03c3\u03c7\u03b7\u03bc\u03ac\u03c4\u03c9\u03bd, \u03c0\u03bf\u03c5 \u03b5\u03bd\u03b5\u03c1\u03b3\u03bf\u03c0\u03bf\u03b9\u03bf\u03cd\u03bd\u03c4\u03b1\u03b9 \u03b1\u03c0\u03cc \u03b5\u03b9\u03ba\u03cc\u03bd\u03b5\u03c2 \u03bc\u03b5 \u03ba\u03b1\u03bd\u03ac\u03bb\u03b9 \u03ac\u03bb\u03c6\u03b1."),(0,o.kt)("h2",{id:"\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"},"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"type")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),': \u03c4\u03cd\u03c0\u03bf\u03c2 \u03bc\u03bf\u03c1\u03c6\u03ae\u03c2 (\u03b5\u03af\u03c4\u03b5 "\u03bf\u03ba\u03c4\u03ac\u03b3\u03c9\u03bd\u03bf", "\u03c4\u03c1\u03af\u03b3\u03c9\u03bd\u03bf", "\u03c4\u03c1\u03b1\u03c0\u03b5\u03b6\u03bf\u03b5\u03b9\u03b4\u03ad\u03c2", "\u03c0\u03b1\u03c1\u03b1\u03bb\u03bb\u03b7\u03bb\u03cc\u03b3\u03c1\u03b1\u03bc\u03bc\u03bf", "\u03c1\u03cc\u03bc\u03b2\u03bf\u03c2", "\u03c0\u03b5\u03bd\u03c4\u03ac\u03b3\u03c9\u03bd\u03bf", "\u03b5\u03be\u03ac\u03b3\u03c9\u03bd\u03bf", "\u03b5\u03c0\u03c4\u03ac\u03b3\u03c9\u03bd\u03bf", "\u03bc\u03b7\u03bd\u03ac\u03b3\u03c9\u03bd\u03bf", "\u03b4\u03b5\u03ba\u03ac\u03b3\u03c9\u03bd\u03bf", "\u03bb\u03bf\u03be\u03cc\u03c2", "rabbet", "\u03b1\u03c1\u03b9\u03c3\u03c4\u03b5\u03c1\u03cc \u03b2\u03ad\u03bb\u03bf\u03c2", "\u03b4\u03b5\u03be\u03af \u03b2\u03ad\u03bb\u03bf\u03c2", "\u03b1\u03c1\u03b9\u03c3\u03c4\u03b5\u03c1\u03cc \u03c3\u03b7\u03bc\u03b5\u03af\u03bf", "\u03b4\u03b5\u03be\u03af \u03c3\u03b7\u03bc\u03b5\u03af\u03bf", "\u03b1\u03c1\u03b9\u03c3\u03c4\u03b5\u03c1\u03cc \u03c3\u03b5\u03b2\u03c1\u03cc\u03bd", "\u03b4\u03b5\u03be\u03af \u03c3\u03b5\u03b2\u03c1\u03cc\u03bd", "\u03b1\u03c3\u03c4\u03ad\u03c1\u03b9", "\u03c3\u03c4\u03b1\u03c5\u03c1\u03cc\u03c2", "\u03bc\u03ae\u03bd\u03c5\u03bc\u03b1", "\u03ba\u03bb\u03b5\u03af\u03c3\u03b9\u03bc\u03bf" \u03ae "\u03c0\u03bb\u03b1\u03af\u03c3\u03b9\u03bf"). Default: ',(0,o.kt)("inlineCode",{parentName:"li"},"'star'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"src")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": \u03c4\u03bf URL \u03c4\u03b7\u03c2 \u03b5\u03b9\u03ba\u03cc\u03bd\u03b1\u03c2 \u03c6\u03cc\u03bd\u03c4\u03bf\u03c5. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"style")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object"),": \u03c4\u03bf \u03c3\u03c4\u03c5\u03bb \u03c4\u03bf\u03c5 \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03b9\u03bc\u03ad\u03bd\u03bf\u03c5, \u03bc\u03c0\u03bf\u03c1\u03b5\u03af \u03bd\u03b1 \u03c0\u03b5\u03c1\u03b9\u03ad\u03c7\u03b5\u03b9 \u03bf\u03c0\u03bf\u03b9\u03bf\u03b4\u03ae\u03c0\u03bf\u03c4\u03b5 CSS, \u03c3\u03c5\u03bc\u03c0\u03b5\u03c1\u03b9\u03bb\u03b1\u03bc\u03b2\u03b1\u03bd\u03bf\u03bc\u03ad\u03bd\u03c9\u03bd \u03c4\u03c9\u03bd \u03ba\u03b9\u03bd\u03bf\u03cd\u03bc\u03b5\u03bd\u03c9\u03bd \u03c3\u03c7\u03b5\u03b4\u03af\u03c9\u03bd. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"onClick")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"function"),": \u03c7\u03b5\u03b9\u03c1\u03b9\u03c3\u03c4\u03ae\u03c2 \u03c3\u03c5\u03bc\u03b2\u03ac\u03bd\u03c4\u03bf\u03c2 \u03c0\u03bf\u03c5 \u03ba\u03b1\u03bb\u03b5\u03af\u03c4\u03b1\u03b9 \u03cc\u03c4\u03b1\u03bd \u03b3\u03af\u03bd\u03b5\u03c4\u03b1\u03b9 \u03ba\u03bb\u03b9\u03ba \u03c3\u03c4\u03b7\u03bd \u03b5\u03b9\u03ba\u03cc\u03bd\u03b1. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,o.kt)("h2",{id:"\u03c0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"},"\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1"),(0,o.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Style",value:"withStyle"},{label:"Size Variation",value:"sizeVariation"}],lazy:!0,mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"minimal",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. \n<ShapedForm type="star" />\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n'))),(0,o.kt)(i.Z,{value:"withStyle",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<div style= {{ background: 'black', color: 'white', height: 280, width: 280}}>\n<ShapedForm type=\"star\"  style={{ background: 'red', boxShadow: 'inset 100px 88px 5px yellow'}}/>\n</div>\n"))),(0,o.kt)(i.Z,{value:"SizeVariation",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<div style= {{ background: 'darkgray', color: 'black', height: 280, width: '100%'}}>\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, \n<ShapedForm type=\"cross\"  style={{ background: 'gold', width: 85, height: 100, margin: 10, marginTop: 22 }}/>\nsed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. \n</div>\n")))))}v.isMDXComponent=!0}}]);