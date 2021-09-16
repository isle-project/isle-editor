"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9223],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,f=c["".concat(u,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(f,l(l({ref:t},s),{},{components:n})):a.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},358215:function(e,t,n){var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},855064:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(202784),r=n(79443);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(386010),o="tabItem_1uMI",u="tabItemActive_2DSg";var p=function(e){var t,n=e.lazy,r=e.block,p=e.defaultValue,s=e.values,m=e.groupId,c=e.className,d=a.Children.toArray(e.children),f=null!=s?s:d.map((function(e){return{value:e.props.value,label:e.props.label}})),k=null!=p?p:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,b=i(),g=b.tabGroupChoices,v=b.setTabGroupChoices,N=(0,a.useState)(k),y=N[0],h=N[1],C=[];if(null!=m){var S=g[m];null!=S&&S!==y&&f.some((function(e){return e.value===S}))&&h(S)}var x=function(e){var t=e.currentTarget,n=C.indexOf(t),a=f[n].value;h(a),null!=m&&(v(m,a),setTimeout((function(){var e,n,a,r,i,l,o,p;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,l=window,o=l.innerHeight,p=l.innerWidth,n>=0&&i<=p&&r<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.target)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.target)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},c)},f.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":y===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:O,onFocus:x,onClick:x},null!=n?n:t)}))),n?(0,a.cloneElement)(d.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},79443:function(e,t,n){var a=(0,n(202784).createContext)(void 0);t.Z=a},606241:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return c},default:function(){return f}});var a=n(487462),r=n(263366),i=(n(202784),n(603905)),l=n(855064),o=n(358215),u=["components"],p={id:"slider-input",title:"Slider Input",sidebar_label:"Slider Input"},s=void 0,m={unversionedId:"input/slider-input",id:"input/slider-input",isDocsHomePage:!1,title:"Slider Input",description:"\u4e00\u4e2a\u6ed1\u5757\u8f93\u5165\u7ec4\u4ef6\u3002\u53ef\u4ee5\u4f5c\u4e3aISLE\u4eea\u8868\u677f\u7684\u4e00\u90e8\u5206\u6216\u72ec\u7acb\u4f7f\u7528\u3002\u5728\u540e\u4e00\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u60f3\u901a\u8fc7onChange\u5c5e\u6027\u6765\u5904\u7406\u53d8\u5316\uff0c\u6216\u8005\u901a\u8fc7bind\u5c5e\u6027\u5c06\u503c\u7ed1\u5b9a\u5230\u4e00\u4e2a\u5168\u5c40\u53d8\u91cf\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/input/slider.md",sourceDirName:"input",slug:"/input/slider-input",permalink:"/zh/docs/input/slider-input",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/slider.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614811488,formattedLastUpdatedAt:"2021/3/3",frontMatter:{id:"slider-input",title:"Slider Input",sidebar_label:"Slider Input"},sidebar:"docs",previous:{title:"Select Input",permalink:"/zh/docs/input/select-input"},next:{title:"Text Area",permalink:"/zh/docs/input/text-area"}},c=[{value:"\u9009\u9879",id:"\u9009\u9879",children:[]},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[]}],d={toc:c};function f(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4e00\u4e2a\u6ed1\u5757\u8f93\u5165\u7ec4\u4ef6\u3002\u53ef\u4ee5\u4f5c\u4e3aISLE\u4eea\u8868\u677f\u7684\u4e00\u90e8\u5206\u6216\u72ec\u7acb\u4f7f\u7528\u3002\u5728\u540e\u4e00\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u60f3\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"onChange"),"\u5c5e\u6027\u6765\u5904\u7406\u53d8\u5316\uff0c\u6216\u8005\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"bind"),"\u5c5e\u6027\u5c06\u503c\u7ed1\u5b9a\u5230\u4e00\u4e2a\u5168\u5c40\u53d8\u91cf\u3002"),(0,i.kt)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": \u6ed1\u5757\u7684\u8d77\u59cb\u503c. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"disabled")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),': \u63a7\u5236\u6ed1\u5757\u8f93\u5165\u662f\u5426\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\u3002\u5982\u679c\u8bbe\u7f6e\u4e3a "true"\uff0c\u6ed1\u5757\u5c06\u51fa\u73b0\u5728\u5c4f\u5e55\u4e0a\uff0c\u5c3d\u7ba1\u662f\u7070\u8272\u7684\u3002. Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"inline")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": \u63a7\u5236\u662f\u5426\u5c06\u6ed1\u5757\u7f6e\u4e8e\u6587\u672c\u7684\u5185\u8054\u6216\u5916\u8054\u3002. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"legend")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \u8f93\u5165\u6807\u9898. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"max")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": \u6ed1\u5757\u7684\u6700\u5927\u503c. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"100"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"maxLabel")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": \u5728\u6ed1\u5757\u53f3\u4fa7\u663e\u793a\u6807\u7b7e\uff0c\u800c\u4e0d\u662f\u6700\u5927\u503c\u3002. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"min")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": \u6ed1\u5757\u7684\u6700\u5c0f\u503c. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"minLabel")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": \u5728\u6ed1\u5757\u5de6\u4fa7\u663e\u793a\u6807\u7b7e\uff0c\u800c\u4e0d\u662f\u6700\u5c0f\u503c\u3002. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onChange")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": \u5f53\u6ed1\u5757\u503c\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u7528\u65b0\u7684\u503c\u8c03\u7528\u56de\u8c03\u3002. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"precision")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": \u8f93\u5165\u7684\u56db\u820d\u4e94\u5165\u3002\u8be5\u503c\u5c06\u88ab\u56db\u820d\u4e94\u5165\u5230\u4e0d\u8d85\u8fc7\u7cbe\u5ea6\u7684\u91cd\u8981\u6570\u5b57\u3002\u4f8b\u5982\uff0c\u5982\u679c\u53ea\u60f3\u4f7f\u7528\u6574\u6570\uff0c\u5c31\u4f1a\u4f7f\u7528\u7cbe\u5ea6\u4e3a10\uff0c\u800c\u5982\u679c\u60f3\u56db\u820d\u4e94\u5165\u5230\u767e\u4f4d\uff0c\u5c31\u4f1a\u4f7f\u7528\u7cbe\u5ea6\u4e3a0.001\u3002. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"step")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(number|string)"),": \u6ed1\u5757\u7684\u6b65\u957f. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"hideTooltip")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": \u63a7\u5236\u662f\u5426\u9690\u85cf\u5de5\u5177\u63d0\u793a. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": CSS\u5185\u8054\u6837\u5f0f. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"numberInputStyle")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": \u6570\u5b57\u8f93\u5165\u7ec4\u4ef6\u7684CSS\u5185\u8054\u6837\u5f0f. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"rangeInputStyle")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": \u8303\u56f4\u8f93\u5165\u7ec4\u4ef6\u7684CSS\u5185\u8054\u6837\u5f0f. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,i.kt)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,i.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Mathematical Symbols via LaTeX",value:"mathematicalSymbols"},{label:"Custom Style",value:"customStyle"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<SliderInput\n    legend="Success Probability"\n    defaultValue={0.5}\n    min={0}\n    max={1}\n    step={0.01}\n/>\n'))),(0,i.kt)(o.Z,{value:"mathematicalSymbols",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SliderInput\n    legend={<span>$\\sigma$ (standard deviation)</span>}\n    defaultValue={0.5}\n    min={0}\n    max={1}\n    step={0.01}\n/>\n"))),(0,i.kt)(o.Z,{value:"customStyle",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SliderInput\n    legend=\"Success Probability\"\n    style={{ padding: 30, fontSize: 25, background: 'tan', fontFamily: 'Georgia'}}\n    rangeInputStyle ={{ minWidth: 500}}\n    numberInputStyle = {{ background: 'white', boxShadow: '2px 2px 0px black'}}\n    defaultValue={0.5}\n    min={0}\n    max={200}\n    step={0.01}\n/>\n")))))}f.isMDXComponent=!0},386010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);