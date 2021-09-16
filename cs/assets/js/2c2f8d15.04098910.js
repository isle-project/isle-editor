"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7698],{603905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return p}});var n=a(202784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(a),p=r,v=c["".concat(s,".").concat(p)]||c[p]||d[p]||o;return a?n.createElement(v,i(i({ref:t},m),{},{components:a})):n.createElement(v,i({ref:t},m))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},358215:function(e,t,a){var n=a(202784);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},855064:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(202784),r=a(79443);var o=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=a(386010),l="tabItem_1uMI",s="tabItemActive_2DSg";var u=function(e){var t,a=e.lazy,r=e.block,u=e.defaultValue,m=e.values,d=e.groupId,c=e.className,p=n.Children.toArray(e.children),v=null!=m?m:p.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=u?u:null==(t=p.find((function(e){return e.props.default})))?void 0:t.props.value,k=o(),b=k.tabGroupChoices,g=k.setTabGroupChoices,y=(0,n.useState)(f),h=y[0],N=y[1],C=[];if(null!=d){var w=b[d];null!=w&&w!==h&&v.some((function(e){return e.value===w}))&&N(w)}var j=function(e){var t=e.currentTarget,a=C.indexOf(t),n=v[a].value;N(n),null!=d&&(g(d,n),setTimeout((function(){var e,a,n,r,o,i,l,u;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,u=i.innerWidth,a>=0&&o<=u&&r<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},S=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=C.indexOf(e.target)+1;a=C[n]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.target)-1;a=C[r]||C[C.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},c)},v.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":h===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:S,onFocus:j,onClick:j},null!=a?a:t)}))),a?(0,n.cloneElement)(p.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},p.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},79443:function(e,t,a){var n=(0,a(202784).createContext)(void 0);t.Z=n},971474:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return c},default:function(){return v}});var n=a(487462),r=a(263366),o=(a(202784),a(603905)),i=a(855064),l=a(358215),s=["components"],u={id:"shaped-form",title:"Shaped Form",sidebar_label:"Shaped Form"},m=void 0,d={unversionedId:"shaped-form",id:"shaped-form",isDocsHomePage:!1,title:"Shaped Form",description:"Komponenta, kter\xe1 umo\u017e\u0148uje zobrazovat tvary vyvolan\xe9 obr\xe1zky s alfa kan\xe1lem.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/shaped-form.md",sourceDirName:".",slug:"/shaped-form",permalink:"/cs/docs/shaped-form",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/shaped-form.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. 6. 2021",frontMatter:{id:"shaped-form",title:"Shaped Form",sidebar_label:"Shaped Form"},sidebar:"docs",previous:{title:"Seal",permalink:"/cs/docs/seal"},next:{title:"Sortable Tree",permalink:"/cs/docs/sortable-tree"}},c=[{value:"Mo\u017enosti",id:"mo\u017enosti",children:[]},{value:"P\u0159\xedklady",id:"p\u0159\xedklady",children:[]}],p={toc:c};function v(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Komponenta, kter\xe1 umo\u017e\u0148uje zobrazovat tvary vyvolan\xe9 obr\xe1zky s alfa kan\xe1lem."),(0,o.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"type")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": typ tvaru (bu\u010f ",(0,o.kt)("inlineCode",{parentName:"li"},"octagon"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"triangle"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"trapezoid"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"parallelogram"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"rhombus"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"pentagon"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"hexagon"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"heptagon"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"nonagon"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"decagon"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"bevel"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"\u0161ipka"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"\u0161ipka vlevo"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"\u0161ipka vpravo"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"\u0161pi\u010dka vlevo"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"\u0161pi\u010dka vpravo"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"\u0161ipka vlevo"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"\u0161ipka vpravo"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"hv\u011bzda"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"k\u0159\xed\u017e"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"zpr\xe1va"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"z\xe1v\u011br")," nebo ",(0,o.kt)("inlineCode",{parentName:"li"},"r\xe1mec"),"). Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"'star'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"src")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": adresu URL obr\xe1zku na pozad\xed. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"style")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object"),": styl objektu, m\u016f\u017ee obsahovat libovoln\xe9 CSS v\u010detn\u011b animac\xed.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"onClick")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"function"),": obsluha ud\xe1losti vyvolan\xe1 po kliknut\xed na obr\xe1zek. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,o.kt)("h2",{id:"p\u0159\xedklady"},"P\u0159\xedklady"),(0,o.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Style",value:"withStyle"},{label:"Size Variation",value:"sizeVariation"}],lazy:!0,mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. \n<ShapedForm type="star" />\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n'))),(0,o.kt)(l.Z,{value:"withStyle",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<div style= {{ background: 'black', color: 'white', height: 280, width: 280}}>\n<ShapedForm type=\"star\"  style={{ background: 'red', boxShadow: 'inset 100px 88px 5px yellow'}}/>\n</div>\n"))),(0,o.kt)(l.Z,{value:"SizeVariation",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<div style= {{ background: 'darkgray', color: 'black', height: 280, width: '100%'}}>\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, \n<ShapedForm type=\"cross\"  style={{ background: 'gold', width: 85, height: 100, margin: 10, marginTop: 22 }}/>\nsed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. \n</div>\n")))))}v.isMDXComponent=!0},386010:function(e,t,a){function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);