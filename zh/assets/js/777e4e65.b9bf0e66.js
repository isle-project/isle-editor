(self.webpackChunk=self.webpackChunk||[]).push([[4268],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},358215:function(e,t,n){"use strict";var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},541395:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(202784),r=n(180944),i=n(386010),l="tabItem_1uMI",o="tabItemActive_2DSg";var s=37,u=39;var c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,m=e.values,p=e.groupId,d=e.className,f=(0,r.Z)(),v=f.tabGroupChoices,k=f.setTabGroupChoices,y=(0,a.useState)(c),b=y[0],g=y[1],N=a.Children.toArray(e.children),C=[];if(null!=p){var h=v[p];null!=h&&h!==b&&m.some((function(e){return e.value===h}))&&g(h)}var O=function(e){var t=e.currentTarget,n=C.indexOf(t),a=m[n].value;g(a),null!=p&&(k(p,a),setTimeout((function(){var e,n,a,r,i,l,s,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,l=window,s=l.innerHeight,u=l.innerWidth,n>=0&&i<=u&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},S=function(e){var t,n;switch(e.keyCode){case u:var a=C.indexOf(e.target)+1;n=C[a]||C[0];break;case s:var r=C.indexOf(e.target)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},d)},m.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:S,onFocus:O,onClick:O},n)}))),t?(0,a.cloneElement)(N.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,n){"use strict";var a=(0,n(202784).createContext)(void 0);t.Z=a},180944:function(e,t,n){"use strict";var a=n(202784),r=n(79443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},549074:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var a=n(722122),r=n(419756),i=(n(202784),n(603905)),l=n(541395),o=n(358215),s={id:"summary-statistics",title:"Summary Statistics",sidebar_label:"Summary Statistics"},u={unversionedId:"summary-statistics",id:"summary-statistics",isDocsHomePage:!1,title:"Summary Statistics",description:"\u7b80\u8981\u7edf\u8ba1\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/summary-statistics.md",sourceDirName:".",slug:"/summary-statistics",permalink:"/docs/summary-statistics",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/summary-statistics.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622733605,formattedLastUpdatedAt:"2021/6/3",sidebar_label:"Summary Statistics",frontMatter:{id:"summary-statistics",title:"Summary Statistics",sidebar_label:"Summary Statistics"},sidebar:"docs",previous:{title:"Two-Sample Proportion Test",permalink:"/docs/tests/proptest2"},next:{title:"Beacon Tooltip",permalink:"/docs/beacon-tooltip"}},c=[{value:"\u9009\u9879",id:"\u9009\u9879",children:[]},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[]}],m={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u7b80\u8981\u7edf\u8ba1\u3002"),(0,i.kt)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"data")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object (required)"),": \u503c\u6570\u7ec4\u7684\u5bf9\u8c61. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"variables")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),": \u8ba1\u7b97\u7edf\u8ba1\u6570\u636e\u7684\u53d8\u91cf. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"statistics")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array<string>"),": \u8ba1\u7b97\u6240\u9009\u53d8\u91cf\u7684\u7edf\u8ba1\u6570\u636e\uff08",(0,i.kt)("inlineCode",{parentName:"li"},"Mean"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"Median"),",",(0,i.kt)("inlineCode",{parentName:"li"},"Min"),",",(0,i.kt)("inlineCode",{parentName:"li"},"Max"),",",(0,i.kt)("inlineCode",{parentName:"li"},"Range"),",",(0,i.kt)("inlineCode",{parentName:"li"},"Interquartile Range"),",",(0,i.kt)("inlineCode",{parentName:"li"},"Standard Deviation"),",",(0,i.kt)("inlineCode",{parentName:"li"},"Variance"),",",(0,i.kt)("inlineCode",{parentName:"li"},"Correlation"),",",(0,i.kt)("inlineCode",{parentName:"li"},"Correlation Matrix"),",",(0,i.kt)("inlineCode",{parentName:"li"},"Skewness"),",",(0,i.kt)("inlineCode",{parentName:"li"},"Excess Kurtosis"),",",(0,i.kt)("inlineCode",{parentName:"li"},"First Quartile"),",",(0,i.kt)("inlineCode",{parentName:"li"},"Third Quartile"),",\u6216",(0,i.kt)("inlineCode",{parentName:"li"},"Quantile"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"secondVariable")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": \u76f8\u5173\u7edf\u8ba1\u5b66\u7684\u7b2c\u4e8c\u4e2a\u53d8\u91cf. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"omit")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": \u63a7\u5236\u662f\u5426\u7701\u7565\u7f3a\u5931\u503c. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"group")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array<(string|Factor)>"),": \u5206\u7ec4\u53d8\u91cf\u7684\u540d\u79f0. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"quantiles")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array"),': \u4e3a "Quantile "\u7edf\u8ba1\u6570\u5b57\u8ba1\u7b97\u7684\u5b9a\u91cf\u6570\u7ec4. Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,i.kt)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,i.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Grouped",value:"group"},{label:"Quantiles",value:"quantiles"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SummaryStatistics \n    data={heartdisease} \n    variables={[ 'Age', 'Cost' ]}\n    statistics={[ 'Mean', 'Standard Deviation' ]}\n/>\n"))),(0,i.kt)(o.Z,{value:"group",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SummaryStatistics \n    data={heartdisease} \n    variables={[ 'Age', 'Cost' ]}\n    statistics={[ 'Mean', 'Standard Deviation' ]}\n    group={[ 'Gender' ]}\n/>\n"))),(0,i.kt)(o.Z,{value:"quantiles",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SummaryStatistics \n    data={heartdisease} \n    variables={[ 'Age', 'Cost' ]}\n    statistics={[ 'Quantile' ]}\n    quantiles={[ 0.1, 0.25, 0.5, 0.75, 0.9 ]}\n/>\n")))))}p.isMDXComponent=!0},386010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);