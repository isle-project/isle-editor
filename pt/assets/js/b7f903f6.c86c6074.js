"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4144],{603905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(202784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return a?n.createElement(f,l(l({ref:t},c),{},{components:a})):n.createElement(f,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},358215:function(e,t,a){var n=a(202784);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},855064:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(202784),r=a(79443);var i=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(386010),o="tabItem_1uMI",s="tabItemActive_2DSg";var u=function(e){var t,a=e.lazy,r=e.block,u=e.defaultValue,c=e.values,m=e.groupId,p=e.className,d=n.Children.toArray(e.children),f=null!=c?c:d.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=u?u:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,k=i(),y=k.tabGroupChoices,b=k.setTabGroupChoices,g=(0,n.useState)(v),N=g[0],C=g[1],h=[];if(null!=m){var O=y[m];null!=O&&O!==N&&f.some((function(e){return e.value===O}))&&C(O)}var x=function(e){var t=e.currentTarget,a=h.indexOf(t),n=f[a].value;C(n),null!=m&&(b(m,n),setTimeout((function(){var e,a,n,r,i,l,o,u;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,i=e.right,l=window,o=l.innerHeight,u=l.innerWidth,a>=0&&i<=u&&r<=o&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},w=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=h.indexOf(e.target)+1;a=h[n]||h[0];break;case"ArrowLeft":var r=h.indexOf(e.target)-1;a=h[r]||h[h.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},p)},f.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":N===t}),key:t,ref:function(e){return h.push(e)},onKeyDown:w,onFocus:x,onClick:x},null!=a?a:t)}))),a?(0,n.cloneElement)(d.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},79443:function(e,t,a){var n=(0,a(202784).createContext)(void 0);t.Z=n},551198:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return p},default:function(){return f}});var n=a(487462),r=a(263366),i=(a(202784),a(603905)),l=a(855064),o=a(358215),s=["components"],u={id:"summary-statistics",title:"Summary Statistics",sidebar_label:"Summary Statistics"},c=void 0,m={unversionedId:"summary-statistics",id:"summary-statistics",isDocsHomePage:!1,title:"Summary Statistics",description:"Estat\xedsticas resumidas.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/summary-statistics.md",sourceDirName:".",slug:"/summary-statistics",permalink:"/pt/docs/summary-statistics",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/summary-statistics.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1630356835,formattedLastUpdatedAt:"30/08/2021",frontMatter:{id:"summary-statistics",title:"Summary Statistics",sidebar_label:"Summary Statistics"},sidebar:"docs",previous:{title:"Two-Sample Proportion Test",permalink:"/pt/docs/tests/proptest2"},next:{title:"Beacon Tooltip",permalink:"/pt/docs/beacon-tooltip"}},p=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",children:[]},{value:"Exemplos",id:"exemplos",children:[]}],d={toc:p};function f(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Estat\xedsticas resumidas."),(0,i.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"data")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object (required)"),": objeto de arrays de valor. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"variables")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),": vari\xe1vel(eis) para a(s) qual(is) calcular estat\xedsticas. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"statistics")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),": estat\xedsticas para calcular para as vari\xe1veis selecionadas (seja ",(0,i.kt)("inlineCode",{parentName:"li"},"Mean"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Median"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Min"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Max"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Range"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Interquartile Range"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Standard Deviation"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Variance"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Correlation"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Correlation Matrix"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Skewness"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Excess Kurtosis"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"First Quartile"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Third Quartile"),", ou ",(0,i.kt)("inlineCode",{parentName:"li"},"Quantile"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"secondVariable")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": segunda vari\xe1vel para estat\xedstica de correla\xe7\xe3o. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"omit")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": controla se devem ser omitidos os valores em falta. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"group")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array<(string|Factor)>"),": nome da(s) vari\xe1vel(eis) de agrupamento. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"quantiles")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array"),': matriz de quantis a calcular para a estat\xedstica "qu\xe2ntica".. Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,i.kt)("h2",{id:"exemplos"},"Exemplos"),(0,i.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Grouped",value:"group"},{label:"Quantiles",value:"quantiles"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SummaryStatistics \n    data={heartdisease} \n    variables={[ 'Age', 'Cost' ]}\n    statistics={[ 'Mean', 'Standard Deviation' ]}\n/>\n"))),(0,i.kt)(o.Z,{value:"group",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SummaryStatistics \n    data={heartdisease} \n    variables={[ 'Age', 'Cost' ]}\n    statistics={[ 'Mean', 'Standard Deviation' ]}\n    group={[ 'Gender' ]}\n/>\n"))),(0,i.kt)(o.Z,{value:"quantiles",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SummaryStatistics \n    data={heartdisease} \n    variables={[ 'Age', 'Cost' ]}\n    statistics={[ 'Quantile' ]}\n    quantiles={[ 0.1, 0.25, 0.5, 0.75, 0.9 ]}\n/>\n")))))}f.isMDXComponent=!0},386010:function(e,t,a){function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);