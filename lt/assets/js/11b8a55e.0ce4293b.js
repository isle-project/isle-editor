"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1741],{603905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(202784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(a),c=r,k=p["".concat(s,".").concat(c)]||p[c]||d[c]||i;return a?n.createElement(k,o(o({ref:t},m),{},{components:a})):n.createElement(k,o({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},358215:function(e,t,a){var n=a(202784);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},409877:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(487462),r=a(202784),i=a(972389),o=a(275773),l=a(386010),s="tabItem_LplD";function u(e){var t,a,i,u=e.lazy,m=e.block,d=e.defaultValue,p=e.values,c=e.groupId,k=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.lx)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(i=v[0])?void 0:i.props.value;if(null!==y&&!f.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,o.UB)(),h=g.tabGroupChoices,N=g.setTabGroupChoices,C=(0,r.useState)(y),w=C[0],j=C[1],S=[],O=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var T=h[c];null!=T&&T!==w&&f.some((function(e){return e.value===T}))&&j(T)}var x=function(e){var t=e.currentTarget,a=S.indexOf(t),n=f[a].value;n!==w&&(O(t),j(n),null!=c&&N(c,n))},E=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=S.indexOf(e.currentTarget)+1;a=S[n]||S[0];break;case"ArrowLeft":var r=S.indexOf(e.currentTarget)-1;a=S[r]||S[S.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},k)},f.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return S.push(e)},onKeyDown:E,onFocus:x,onClick:x},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":w===t})}),null!=a?a:t)}))),u?(0,r.cloneElement)(v.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function m(e){var t=(0,i.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},860586:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return p},default:function(){return k}});var n=a(487462),r=a(263366),i=(a(202784),a(603905)),o=a(409877),l=a(358215),s=["components"],u={id:"shaped-form",title:"Shaped Form",sidebar_label:"Shaped Form"},m=void 0,d={unversionedId:"shaped-form",id:"shaped-form",title:"Shaped Form",description:"Komponentas, leid\u017eiantis rodyti fig\u016bras, sukeliamas vaizd\u0173 su alfa kanalu.",source:"@site/i18n/lt/docusaurus-plugin-content-docs/current/shaped-form.md",sourceDirName:".",slug:"/shaped-form",permalink:"/lt/docs/shaped-form",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/shaped-form.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021-06-01",frontMatter:{id:"shaped-form",title:"Shaped Form",sidebar_label:"Shaped Form"},sidebar:"docs",previous:{title:"Seal",permalink:"/lt/docs/seal"},next:{title:"Sortable Tree",permalink:"/lt/docs/sortable-tree"}},p=[{value:"Parinktys",id:"parinktys",children:[],level:2},{value:"Pavyzd\u017eiai",id:"pavyzd\u017eiai",children:[],level:2}],c={toc:p};function k(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Komponentas, leid\u017eiantis rodyti fig\u016bras, sukeliamas vaizd\u0173 su alfa kanalu."),(0,i.kt)("h2",{id:"parinktys"},"Parinktys"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"type")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": formos tipas (arba ",(0,i.kt)("inlineCode",{parentName:"li"},"oktagonas"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"trikampis"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"trapezoidas"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"paralelegramas"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"rombas"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"penktakampis"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"\u0161e\u0161iakampis"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"septagonas"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"nea\u0161triakampis"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"dekagonas"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"smailiakampis"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"rabetas"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"kairioji rodykl\u0117"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"de\u0161inioji rodykl\u0117"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"kairiasis ta\u0161kas"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"de\u0161inysis ta\u0161kas"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"kairiasis \u0161evronas"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"de\u0161inysis \u0161evronas"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"\u017evaig\u017ed\u0117"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"kry\u017eius"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"prane\u0161imas"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"u\u017edaryti")," arba ",(0,i.kt)("inlineCode",{parentName:"li"},"karkasas"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'star'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"src")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": fono paveiksl\u0117lio URL. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": objekto stilius, jame gali b\u016bti bet koks CSS, \u012fskaitant animacijas.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onClick")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": \u012fvykio tvarkykl\u0117, i\u0161kvie\u010diama, kai paspaud\u017eiamas paveiksl\u0117lis. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,i.kt)("h2",{id:"pavyzd\u017eiai"},"Pavyzd\u017eiai"),(0,i.kt)(o.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Style",value:"withStyle"},{label:"Size Variation",value:"sizeVariation"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. \n<ShapedForm type="star" />\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n'))),(0,i.kt)(l.Z,{value:"withStyle",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<div style= {{ background: 'black', color: 'white', height: 280, width: 280}}>\n<ShapedForm type=\"star\"  style={{ background: 'red', boxShadow: 'inset 100px 88px 5px yellow'}}/>\n</div>\n"))),(0,i.kt)(l.Z,{value:"SizeVariation",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<div style= {{ background: 'darkgray', color: 'black', height: 280, width: '100%'}}>\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, \n<ShapedForm type=\"cross\"  style={{ background: 'gold', width: 85, height: 100, margin: 10, marginTop: 22 }}/>\nsed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. \n</div>\n")))))}k.isMDXComponent=!0}}]);