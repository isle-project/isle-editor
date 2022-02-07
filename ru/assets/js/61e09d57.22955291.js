"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4766],{603905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return p}});var n=a(202784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(a),p=r,v=c["".concat(u,".").concat(p)]||c[p]||d[p]||o;return a?n.createElement(v,i(i({ref:t},m),{},{components:a})):n.createElement(v,i({ref:t},m))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},358215:function(e,t,a){var n=a(202784);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},409877:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(487462),r=a(202784),o=a(972389),i=a(275773),l=a(386010),u="tabItem_LplD";function s(e){var t,a,o,s=e.lazy,m=e.block,d=e.defaultValue,c=e.values,p=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=c?c:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.lx)(b,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(t=null!=d?d:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(o=f[0])?void 0:o.props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,i.UB)(),y=h.tabGroupChoices,N=h.setTabGroupChoices,C=(0,r.useState)(k),w=C[0],j=C[1],O=[],S=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var T=y[p];null!=T&&T!==w&&b.some((function(e){return e.value===T}))&&j(T)}var x=function(e){var t=e.currentTarget,a=O.indexOf(t),n=b[a].value;n!==w&&(S(t),j(n),null!=p&&N(p,n))},E=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=O.indexOf(e.currentTarget)+1;a=O[n]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;a=O[r]||O[O.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},v)},b.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return O.push(e)},onKeyDown:E,onFocus:x,onClick:x},o,{className:(0,l.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=a?a:t)}))),s?(0,r.cloneElement)(f.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function m(e){var t=(0,o.Z)();return r.createElement(s,(0,n.Z)({key:String(t)},e))}},965171:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return c},default:function(){return v}});var n=a(487462),r=a(263366),o=(a(202784),a(603905)),i=a(409877),l=a(358215),u=["components"],s={id:"shaped-form",title:"Shaped Form",sidebar_label:"Shaped Form"},m=void 0,d={unversionedId:"shaped-form",id:"shaped-form",title:"Shaped Form",description:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0438\u0439 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u0444\u0438\u0433\u0443\u0440\u044b, \u0432\u044b\u0437\u0432\u0430\u043d\u043d\u044b\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u043c\u0438 \u0441 \u0430\u043b\u044c\u0444\u0430-\u043a\u0430\u043d\u0430\u043b\u043e\u043c.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/shaped-form.md",sourceDirName:".",slug:"/shaped-form",permalink:"/ru/docs/shaped-form",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/shaped-form.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621312042,formattedLastUpdatedAt:"18.05.2021",frontMatter:{id:"shaped-form",title:"Shaped Form",sidebar_label:"Shaped Form"},sidebar:"docs",previous:{title:"Seal",permalink:"/ru/docs/seal"},next:{title:"Sortable Tree",permalink:"/ru/docs/sortable-tree"}},c=[{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b",children:[],level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:[],level:2}],p={toc:c};function v(e){var t=e.components,a=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0438\u0439 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u0444\u0438\u0433\u0443\u0440\u044b, \u0432\u044b\u0437\u0432\u0430\u043d\u043d\u044b\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u043c\u0438 \u0441 \u0430\u043b\u044c\u0444\u0430-\u043a\u0430\u043d\u0430\u043b\u043e\u043c."),(0,o.kt)("h2",{id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"type")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": \u0442\u0438\u043f \u0444\u043e\u0440\u043c\u044b (\u043b\u0438\u0431\u043e ",(0,o.kt)("inlineCode",{parentName:"li"},"octagon"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"triangle"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"trapezoid"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"parallelogram"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"rhombus"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"pentagon"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"hexagon"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"heptagon"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"nonagon"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"decagon"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"bevel"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"rabbet"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"left-arrow"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"right-arrow"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"left-point"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"right-point"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"left-chevron"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"right-chevron"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"star"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"cross"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"message"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"close"),", \u0438\u043b\u0438 ",(0,o.kt)("inlineCode",{parentName:"li"},"frame"),"). Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"'star'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"src")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": URL-\u0430\u0434\u0440\u0435\u0441 \u0444\u043e\u043d\u043e\u0432\u043e\u0433\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"style")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object"),": \u0441\u0442\u0438\u043b\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u0430, \u043e\u043d \u043c\u043e\u0436\u0435\u0442 \u0432\u043c\u0435\u0449\u0430\u0442\u044c \u043b\u044e\u0431\u044b\u0435 css, \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u044e. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"onClick")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"function"),": \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a \u0441\u043e\u0431\u044b\u0442\u0438\u0439, \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u043c\u044b\u0439 \u043f\u0440\u0438 \u0449\u0435\u043b\u0447\u043a\u0435 \u043f\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044e. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,o.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,o.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Style",value:"withStyle"},{label:"Size Variation",value:"sizeVariation"}],lazy:!0,mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. \n<ShapedForm type="star" />\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n'))),(0,o.kt)(l.Z,{value:"withStyle",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<div style= {{ background: 'black', color: 'white', height: 280, width: 280}}>\n<ShapedForm type=\"star\"  style={{ background: 'red', boxShadow: 'inset 100px 88px 5px yellow'}}/>\n</div>\n"))),(0,o.kt)(l.Z,{value:"SizeVariation",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<div style= {{ background: 'darkgray', color: 'black', height: 280, width: '100%'}}>\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, \n<ShapedForm type=\"cross\"  style={{ background: 'gold', width: 85, height: 100, margin: 10, marginTop: 22 }}/>\nsed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. \n</div>\n")))))}v.isMDXComponent=!0}}]);