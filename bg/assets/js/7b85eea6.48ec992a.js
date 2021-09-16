"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[608],{603905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,f=c["".concat(u,".").concat(m)]||c[m]||p[m]||l;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},358215:function(e,t,n){var r=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},855064:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(202784),a=n(79443);var l=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(386010),o="tabItem_1uMI",u="tabItemActive_2DSg";var s=function(e){var t,n=e.lazy,a=e.block,s=e.defaultValue,d=e.values,p=e.groupId,c=e.className,m=r.Children.toArray(e.children),f=null!=d?d:m.map((function(e){return{value:e.props.value,label:e.props.label}})),b=null!=s?s:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,v=l(),k=v.tabGroupChoices,g=v.setTabGroupChoices,h=(0,r.useState)(b),N=h[0],y=h[1],C=[];if(null!=p){var w=k[p];null!=w&&w!==N&&f.some((function(e){return e.value===w}))&&y(w)}var D=function(e){var t=e.currentTarget,n=C.indexOf(t),r=f[n].value;y(r),null!=p&&(g(p,r),setTimeout((function(){var e,n,r,a,l,i,o,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,l=e.right,i=window,o=i.innerHeight,s=i.innerWidth,n>=0&&l<=s&&a<=o&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=C.indexOf(e.target)+1;n=C[r]||C[0];break;case"ArrowLeft":var a=C.indexOf(e.target)-1;n=C[a]||C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},c)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":N===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:O,onFocus:D,onClick:D},null!=n?n:t)}))),n?(0,r.cloneElement)(m.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},79443:function(e,t,n){var r=(0,n(202784).createContext)(void 0);t.Z=r},892414:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return c},default:function(){return f}});var r=n(487462),a=n(263366),l=(n(202784),n(603905)),i=n(855064),o=n(358215),u=["components"],s={id:"dashboard",title:"Dashboard",sidebar_label:"Dashboard"},d=void 0,p={unversionedId:"dashboard",id:"dashboard",isDocsHomePage:!1,title:"Dashboard",description:"\u0422\u0430\u0431\u043b\u043e \u0437\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0437\u0430 \u043a\u043e\u043c\u0431\u0438\u043d\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430\u0442\u0430 \u043d\u0430 \u043d\u044f\u043a\u043e\u043b\u043a\u043e \u043f\u043e\u043b\u0435\u0442\u0430 \u0437\u0430 \u0432\u044a\u0432\u0435\u0436\u0434\u0430\u043d\u0435 \u043d\u0430 \u0434\u0435\u0446\u0430.",source:"@site/i18n/bg/docusaurus-plugin-content-docs/current/dashboard.md",sourceDirName:".",slug:"/dashboard",permalink:"/bg/docs/dashboard",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/dashboard.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1627947125,formattedLastUpdatedAt:"2.08.2021 \u0433.",frontMatter:{id:"dashboard",title:"Dashboard",sidebar_label:"Dashboard"},sidebar:"docs",previous:{title:"Sortable Tree",permalink:"/bg/docs/sortable-tree"},next:{title:"Data Sampler",permalink:"/bg/docs/data-sampler"}},c=[{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u0438",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438",children:[]}],m={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u0422\u0430\u0431\u043b\u043e \u0437\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0437\u0430 \u043a\u043e\u043c\u0431\u0438\u043d\u0438\u0440\u0430\u043d\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430\u0442\u0430 \u043d\u0430 \u043d\u044f\u043a\u043e\u043b\u043a\u043e \u043f\u043e\u043b\u0435\u0442\u0430 \u0437\u0430 \u0432\u044a\u0432\u0435\u0436\u0434\u0430\u043d\u0435 \u043d\u0430 \u0434\u0435\u0446\u0430."),(0,l.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u0438"},"\u041e\u043f\u0446\u0438\u0438"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"autoStart")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0430\u043a\u043e \u0435 \u0437\u0430\u0434\u0430\u0434\u0435\u043d\u0430 \u0441\u0442\u043e\u0439\u043d\u043e\u0441\u0442 ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),", \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0442\u0430 ",(0,l.kt)("inlineCode",{parentName:"li"},"onGenerate")," \u0441\u0435 \u0438\u0437\u043f\u044a\u043b\u043d\u044f\u0432\u0430 \u043f\u0440\u0438 \u0441\u0442\u0430\u0440\u0442\u0438\u0440\u0430\u043d\u0435 \u0441\u044a\u0441 \u0441\u0442\u043e\u0439\u043d\u043e\u0441\u0442\u0438\u0442\u0435 \u043f\u043e \u043f\u043e\u0434\u0440\u0430\u0437\u0431\u0438\u0440\u0430\u043d\u0435. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"autoUpdate")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0430 \u0434\u0430\u043b\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0442\u0430 ",(0,l.kt)("inlineCode",{parentName:"li"},"onGenerate")," \u0434\u0430 \u0441\u0435 \u0438\u0437\u0432\u0438\u043a\u0432\u0430 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u043d\u043e, \u043a\u043e\u0433\u0430\u0442\u043e \u0435\u0434\u043d\u043e \u043e\u0442 \u043f\u043e\u043b\u0435\u0442\u0430\u0442\u0430 \u0437\u0430 \u0432\u044a\u0432\u0435\u0436\u0434\u0430\u043d\u0435 \u043d\u0430 \u0434\u0435\u0442\u0435\u0442\u043e \u0441\u0435 \u043f\u0440\u043e\u043c\u0435\u043d\u0438.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"description")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u0430 \u0442\u0430\u0431\u043b\u043e\u0442\u043e \u0437\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"disabled")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0430 \u0434\u0430\u043b\u0438 \u0442\u0430\u0431\u043b\u043e\u0442\u043e \u0437\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u0430 \u0431\u044a\u0434\u0435 \u0434\u0435\u0430\u043a\u0442\u0438\u0432\u0438\u0440\u0430\u043d\u043e. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"label")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u0435\u0442\u0438\u043a\u0435\u0442 \u043d\u0430 \u0431\u0443\u0442\u043e\u043d\u0430. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"maxWidth")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u043d\u0430 \u0448\u0438\u0440\u0438\u043d\u0430 \u043d\u0430 \u0442\u0430\u0431\u043b\u043e\u0442\u043e \u0437\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"600"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"className")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": \u0438\u043c\u0435 \u043d\u0430 \u043a\u043b\u0430\u0441\u0430. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": CSS \u0438\u043d\u043b\u0430\u0439\u043d \u0441\u0442\u0438\u043b\u043e\u0432\u0435. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onGenerate")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": \u0444\u0443\u043d\u043a\u0446\u0438\u044f, \u043a\u043e\u044f\u0442\u043e \u0441\u0435 \u0438\u0437\u0432\u0438\u043a\u0432\u0430, \u043a\u043e\u0433\u0430\u0442\u043e \u0441\u0435 \u0449\u0440\u0430\u043a\u043d\u0435 \u0432\u044a\u0440\u0445\u0443 \u0431\u0443\u0442\u043e\u043d\u0430 \u0438\u043b\u0438 \u0441\u0435 \u043f\u0440\u043e\u043c\u0435\u043d\u0438 \u0435\u0434\u043d\u0430 \u043e\u0442 \u0432\u0445\u043e\u0434\u043d\u0438\u0442\u0435 \u0441\u0442\u043e\u0439\u043d\u043e\u0441\u0442\u0438 \u043d\u0430 \u0442\u0430\u0431\u043b\u043e\u0442\u043e \u0437\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 (\u0430\u043a\u043e ",(0,l.kt)("inlineCode",{parentName:"li"},"autoUpdate")," \u0435 \u0437\u0430\u0434\u0430\u0434\u0435\u043d\u043e \u043d\u0430 ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"). \u0424\u0443\u043d\u043a\u0446\u0438\u044f\u0442\u0430 \u0441\u0435 \u0438\u0437\u0432\u0438\u043a\u0432\u0430 \u0441\u044a\u0441 \u0441\u0442\u043e\u0439\u043d\u043e\u0441\u0442\u0438\u0442\u0435 \u043d\u0430 \u0432\u0445\u043e\u0434\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435\u0442\u0430 \u0432 \u0440\u0435\u0434\u0430, \u0432 \u043a\u043e\u0439\u0442\u043e \u0442\u0435 \u0441\u0430 \u043f\u043e\u0441\u0442\u0430\u0432\u0435\u043d\u0438 \u0432 \u0442\u0430\u0431\u043b\u043e\u0442\u043e \u0437\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onGenerate() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"title")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \u0437\u0430\u0433\u043b\u0430\u0432\u0438\u0435 \u043d\u0430 \u043a\u0430\u0440\u0442\u0430\u0442\u0430. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),".")),(0,l.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438"},"\u041f\u0440\u0438\u043c\u0435\u0440\u0438"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Multiple Inputs",value:"multipleInputs"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Dashboard title="Alerter" onGenerate={( x ) => { alert( x ); }} autoStart={false} >\n    <SliderInput\n        legend="Input value"\n    />\n</Dashboard>\n'))),(0,l.kt)(o.Z,{value:"multipleInputs",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Dashboard \n    title="Multiply three numbers."\n    style={{ width: 600, boxShadow: \'0 0 24px black\' }}\n    onGenerate={( x, y, z ) => { alert( x*y*z ); }} \n    autoStart={false} \n>\n    <SliderInput\n        legend="First Input Value"\n        rangeInputStyle = {{ width: 360 }}\n    />\n    <hr />\n    <SliderInput\n        legend="Second Input Value"\n        rangeInputStyle = {{ width: 360 }}\n    />\n    <hr />\n    <SliderInput\n        legend="Third Input Value"\n        rangeInputStyle = {{ width: 360 }}\n    />\n    <hr />\n</Dashboard>\n')))))}f.isMDXComponent=!0},386010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);