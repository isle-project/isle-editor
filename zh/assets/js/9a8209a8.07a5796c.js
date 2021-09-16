"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1688],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},358215:function(e,t,n){var r=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},855064:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(202784),a=n(79443);var l=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(386010),o="tabItem_1uMI",u="tabItemActive_2DSg";var s=function(e){var t,n=e.lazy,a=e.block,s=e.defaultValue,c=e.values,d=e.groupId,p=e.className,m=r.Children.toArray(e.children),f=null!=c?c:m.map((function(e){return{value:e.props.value,label:e.props.label}})),b=null!=s?s:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,v=l(),h=v.tabGroupChoices,k=v.setTabGroupChoices,g=(0,r.useState)(b),y=g[0],N=g[1],C=[];if(null!=d){var w=h[d];null!=w&&w!==y&&f.some((function(e){return e.value===w}))&&N(w)}var D=function(e){var t=e.currentTarget,n=C.indexOf(t),r=f[n].value;N(r),null!=d&&(k(d,r),setTimeout((function(){var e,n,r,a,l,i,o,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,l=e.right,i=window,o=i.innerHeight,s=i.innerWidth,n>=0&&l<=s&&a<=o&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=C.indexOf(e.target)+1;n=C[r]||C[0];break;case"ArrowLeft":var a=C.indexOf(e.target)-1;n=C[a]||C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},p)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":y===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:O,onFocus:D,onClick:D},null!=n?n:t)}))),n?(0,r.cloneElement)(m.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},79443:function(e,t,n){var r=(0,n(202784).createContext)(void 0);t.Z=r},753985:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var r=n(487462),a=n(263366),l=(n(202784),n(603905)),i=n(855064),o=n(358215),u=["components"],s={id:"dashboard",title:"Dashboard",sidebar_label:"Dashboard"},c=void 0,d={unversionedId:"dashboard",id:"dashboard",isDocsHomePage:!1,title:"Dashboard",description:"\u4e00\u4e2a\u7528\u4e8e\u7ec4\u5408\u5904\u7406\u591a\u4e2a\u5b50\u8f93\u5165\u5b57\u6bb5\u7684\u4eea\u8868\u677f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/dashboard.md",sourceDirName:".",slug:"/dashboard",permalink:"/zh/docs/dashboard",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/dashboard.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1627947125,formattedLastUpdatedAt:"2021/8/2",frontMatter:{id:"dashboard",title:"Dashboard",sidebar_label:"Dashboard"},sidebar:"docs",previous:{title:"Sortable Tree",permalink:"/zh/docs/sortable-tree"},next:{title:"Data Sampler",permalink:"/zh/docs/data-sampler"}},p=[{value:"\u9009\u9879",id:"\u9009\u9879",children:[]},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[]}],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u4e00\u4e2a\u7528\u4e8e\u7ec4\u5408\u5904\u7406\u591a\u4e2a\u5b50\u8f93\u5165\u5b57\u6bb5\u7684\u4eea\u8868\u677f\u3002"),(0,l.kt)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"autoStart")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),': \u5982\u679c\u8bbe\u7f6e\u4e3a "true"\uff0c"onGenerate "\u51fd\u6570\u5728\u542f\u52a8\u65f6\u4ee5\u9ed8\u8ba4\u8f93\u5165\u503c\u6267\u884c\u3002. Default: ',(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"autoUpdate")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),': \u63a7\u5236\u5f53\u4e00\u4e2a\u5b50\u8f93\u5165\u5b57\u6bb5\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u662f\u5426\u5e94\u81ea\u52a8\u8c03\u7528 "onGenerate "\u51fd\u6570\u3002. Default: ',(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"description")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \u4eea\u8868\u76d8\u63cf\u8ff0. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"disabled")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u63a7\u5236\u662f\u5426\u7981\u7528\u4eea\u8868\u76d8. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"label")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u7ebd\u6263\u6807\u7b7e. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"maxWidth")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": \u4eea\u8868\u76d8\u7684\u6700\u5927\u5bbd\u5ea6. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"600"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"className")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u73ed\u540d. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": CSS\u5185\u8054\u6837\u5f0f. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onGenerate")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": \u5f53\u70b9\u51fb\u6309\u94ae\u6216\u4eea\u8868\u677f\u8f93\u5165\u503c\u53d1\u751f\u53d8\u5316\u65f6\uff08\u5982\u679c",(0,l.kt)("inlineCode",{parentName:"li"},"autoUpdate"),"\u8bbe\u7f6e\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"\uff09\uff0c\u8c03\u7528\u8be5\u51fd\u6570\u3002\u8c03\u7528\u8be5\u51fd\u6570\u65f6\uff0c\u8f93\u5165\u5b57\u6bb5\u7684\u503c\u6309\u7167\u5b83\u4eec\u5728\u4eea\u8868\u677f\u4e2d\u7684\u987a\u5e8f\u6392\u5217\u3002. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onGenerate() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"title")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \u5361\u540d. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),".")),(0,l.kt)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Multiple Inputs",value:"multipleInputs"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Dashboard title="Alerter" onGenerate={( x ) => { alert( x ); }} autoStart={false} >\n    <SliderInput\n        legend="Input value"\n    />\n</Dashboard>\n'))),(0,l.kt)(o.Z,{value:"multipleInputs",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Dashboard \n    title="Multiply three numbers."\n    style={{ width: 600, boxShadow: \'0 0 24px black\' }}\n    onGenerate={( x, y, z ) => { alert( x*y*z ); }} \n    autoStart={false} \n>\n    <SliderInput\n        legend="First Input Value"\n        rangeInputStyle = {{ width: 360 }}\n    />\n    <hr />\n    <SliderInput\n        legend="Second Input Value"\n        rangeInputStyle = {{ width: 360 }}\n    />\n    <hr />\n    <SliderInput\n        legend="Third Input Value"\n        rangeInputStyle = {{ width: 360 }}\n    />\n    <hr />\n</Dashboard>\n')))))}f.isMDXComponent=!0},386010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);