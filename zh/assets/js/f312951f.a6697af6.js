(self.webpackChunk=self.webpackChunk||[]).push([[5698],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||l;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},358215:function(e,t,n){"use strict";var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},541395:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(202784),r=n(180944),l=n(386010),i="tabItem_1uMI",o="tabItemActive_2DSg";var p=37,u=39;var c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,s=e.values,d=e.groupId,m=e.className,f=(0,r.Z)(),b=f.tabGroupChoices,k=f.setTabGroupChoices,v=(0,a.useState)(c),g=v[0],N=v[1],C=a.Children.toArray(e.children),y=[];if(null!=d){var h=b[d];null!=h&&h!==g&&s.some((function(e){return e.value===h}))&&N(h)}var S=function(e){var t=e.currentTarget,n=y.indexOf(t),a=s[n].value;N(a),null!=d&&(k(d,a),setTimeout((function(){var e,n,a,r,l,i,p,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,l=e.right,i=window,p=i.innerHeight,u=i.innerWidth,n>=0&&l<=u&&r<=p&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},w=function(e){var t,n;switch(e.keyCode){case u:var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case p:var r=y.indexOf(e.target)-1;n=y[r]||y[y.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},m)},s.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":g===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:w,onFocus:S,onClick:S},n)}))),t?(0,a.cloneElement)(C.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},C.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},79443:function(e,t,n){"use strict";var a=(0,n(202784).createContext)(void 0);t.Z=a},180944:function(e,t,n){"use strict";var a=n(202784),r=n(79443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},619733:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var a=n(722122),r=n(419756),l=(n(202784),n(603905)),i=n(541395),o=n(358215),p={id:"flippable-card",title:"Flippable Card",sidebar_label:"Flippable Card"},u={unversionedId:"flippable-card",id:"flippable-card",isDocsHomePage:!1,title:"Flippable Card",description:"\u4e00\u4e2aISLE\u7ec4\u4ef6\uff0c\u5141\u8bb8\u4e24\u4e2a\u6e32\u67d3\u4e24\u9762\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/flippable-card.md",sourceDirName:".",slug:"/flippable-card",permalink:"/docs/flippable-card",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/flippable-card.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614561866,formattedLastUpdatedAt:"2021/2/28",sidebar_label:"Flippable Card",frontMatter:{id:"flippable-card",title:"Flippable Card",sidebar_label:"Flippable Card"},sidebar:"docs",previous:{title:"Draggable List",permalink:"/docs/draggable-list"},next:{title:"JavaScript Shell",permalink:"/docs/js-shell"}},c=[{value:"\u9009\u9879",id:"\u9009\u9879",children:[]},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[]}],s={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u4e00\u4e2aISLE\u7ec4\u4ef6\uff0c\u5141\u8bb8\u4e24\u4e2a\u6e32\u67d3\u4e24\u9762\u3002"),(0,l.kt)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"button")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u7ebd\u6263\u6807\u7b7e. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"draggable")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u63a7\u5236\u5361\u7247\u662f\u5426\u53ef\u4ee5\u5728\u5468\u56f4\u62d6\u52a8. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"flipSpeedBackToFront")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": \u5361\u7247\u4ece\u80cc\u666f\u8f6c\u5230\u524d\u666f\u7684\u901f\u5ea6\uff0c\u4ee5\u79d2\u4e3a\u5355\u4f4d\u3002. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"flipSpeedFrontToBack")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": \u6570\u5b57}\u5361\u7247\u4ece\u524d\u666f\u8f6c\u5230\u80cc\u666f\u7684\u901f\u5ea6\uff0c\u4ee5\u79d2\u4e3a\u5355\u4f4d\u3002. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"oneTime")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u8868\u793a\u7ffb\u8f6c\u8fc7\u7a0b\u662f\u5426\u53ef\u4ee5\u53ea\u6267\u884c\u4e00\u6b21\u3002. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"perspective")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": CSS\u5c5e\u6027\u503c\uff0c\u7528\u4e8e\u8d4b\u4e88\u4e09\u7ef4\u5b9a\u4f4d\u5143\u7d20\u4e00\u4e2a\u900f\u89c6\u6548\u679c\u3002. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"1000"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"size")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),': \u5361\u7247\u7684\u5927\u5c0f\uff08\u8bbe\u7f6e\u5176 "width"\u548c "height"\uff09\u3002. Default: ',(0,l.kt)("inlineCode",{parentName:"li"},"250"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"disabled")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u63a7\u5236\u662f\u5426\u7981\u7528\u53ef\u7ffb\u8f6c\u5361\u3002. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"value")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u7ffb\u724c\u72b6\u6001. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u7ffb\u724c\u72b6\u6001. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"containerStyle")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": \u5bb9\u5668\u7684CSS\u6837\u5f0f. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"frontStyle")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": \u524d\u5361\u7684CSS\u6837\u5f0f. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"backStyle")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": \u80cc\u5361\u7684CSS\u6837\u5f0f. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onChange")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": \u4e00\u65e6\u5361\u7247\u88ab\u7ffb\u8f6c\uff0c\u5c31\u4f1a\u8c03\u7528\u56de\u8c03\uff1b\u63a5\u6536\u5f53\u524d\u7684\u7ffb\u8f6c\u72b6\u6001\u4f5c\u4e3a\u552f\u4e00\u7684\u53c2\u6570\u3002. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onChange() {}"),".")),(0,l.kt)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With CSS",value:"withCSS"},{label:"Slow Motion",value:"slowMo"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FlippableCard containerStyle={{ float: \'none\' }} size={200}>\n  <img src="https://bit.ly/2YU5EbU" />\n  <img src="https://bit.ly/3aGv9mp" />\n</FlippableCard>\n'))),(0,l.kt)(o.Z,{value:"withCSS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<FlippableCard \n  containerStyle={{ float: 'none' }} \n  frontStyle={{ fontSize: 50, textAlign: 'center' }} \n  backStyle={{ fontSize: 50, textAlign: 'center', background: 'purple', color: 'white' }} \n  >\n    <div>\n      FRONT\n    </div>\n    <div>\n      BACK\n    </div>\n</FlippableCard>\n"))),(0,l.kt)(o.Z,{value:"slowMo",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<FlippableCard \n  flipSpeedBackToFront={7} \n  flipSpeedFrontToBack={7}   \n  containerStyle={{ float: 'none' }} \n  frontStyle={{ fontSize: 50, textAlign: 'center' }} \n  backStyle={{ fontSize: 50, textAlign: 'center', background: 'purple', color: 'white' }} \n  >\n    <div>\n      FRONT\n    </div>\n    <div>\n      BACK\n    </div>\n</FlippableCard>\n")))))}d.isMDXComponent=!0},386010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);