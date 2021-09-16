"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9342],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},358215:function(e,t,n){var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},855064:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(202784),r=n(79443);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(386010),o="tabItem_1uMI",s="tabItemActive_2DSg";var u=function(e){var t,n=e.lazy,r=e.block,u=e.defaultValue,c=e.values,m=e.groupId,p=e.className,d=a.Children.toArray(e.children),f=null!=c?c:d.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=u?u:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,b=i(),k=b.tabGroupChoices,y=b.setTabGroupChoices,g=(0,a.useState)(v),N=g[0],C=g[1],h=[];if(null!=m){var x=k[m];null!=x&&x!==N&&f.some((function(e){return e.value===x}))&&C(x)}var O=function(e){var t=e.currentTarget,n=h.indexOf(t),a=f[n].value;C(a),null!=m&&(y(m,a),setTimeout((function(){var e,n,a,r,i,l,o,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,l=window,o=l.innerHeight,u=l.innerWidth,n>=0&&i<=u&&r<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},w=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=h.indexOf(e.target)+1;n=h[a]||h[0];break;case"ArrowLeft":var r=h.indexOf(e.target)-1;n=h[r]||h[h.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},p)},f.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":N===t}),key:t,ref:function(e){return h.push(e)},onKeyDown:w,onFocus:O,onClick:O},null!=n?n:t)}))),n?(0,a.cloneElement)(d.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},79443:function(e,t,n){var a=(0,n(202784).createContext)(void 0);t.Z=a},351937:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return p},default:function(){return f}});var a=n(487462),r=n(263366),i=(n(202784),n(603905)),l=n(855064),o=n(358215),s=["components"],u={id:"summary-statistics",title:"Summary Statistics",sidebar_label:"Summary Statistics"},c=void 0,m={unversionedId:"summary-statistics",id:"summary-statistics",isDocsHomePage:!1,title:"Summary Statistics",description:"R\xe9sum\xe9 des statistiques.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/summary-statistics.md",sourceDirName:".",slug:"/summary-statistics",permalink:"/fr/docs/summary-statistics",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/summary-statistics.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1630356835,formattedLastUpdatedAt:"30/08/2021",frontMatter:{id:"summary-statistics",title:"Summary Statistics",sidebar_label:"Summary Statistics"},sidebar:"docs",previous:{title:"Two-Sample Proportion Test",permalink:"/fr/docs/tests/proptest2"},next:{title:"Beacon Tooltip",permalink:"/fr/docs/beacon-tooltip"}},p=[{value:"Options",id:"options",children:[]},{value:"Exemples",id:"exemples",children:[]}],d={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"R\xe9sum\xe9 des statistiques."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"data")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object (required)"),": objet de tableaux de valeurs. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"variables")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),": variable(s) pour laquelle/lesquelles calculer les statistiques. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"statistics")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),": la ou les statistiques \xe0 calculer pour les variables s\xe9lectionn\xe9es (soit ",(0,i.kt)("inlineCode",{parentName:"li"},"Mean"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Median"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Min"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Max"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Range"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Interquartile Range"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Standard Deviation"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Variance"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Correlation"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Correlation Matrix"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Skewness"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Excess Kurtosis"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"First Quartile"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Third Quartile"),", ou ",(0,i.kt)("inlineCode",{parentName:"li"},"Quantile"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"secondVariable")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": deuxi\xe8me variable pour la statistique de corr\xe9lation. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"omit")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si les valeurs manquantes doivent \xeatre omises. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"group")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array<(string|Factor)>"),": nom de la ou des variables de regroupement. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"quantiles")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array"),": Tableau des quantiles \xe0 calculer pour la statistique ",(0,i.kt)("inlineCode",{parentName:"li"},"Quantile"),".. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,i.kt)("h2",{id:"exemples"},"Exemples"),(0,i.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Grouped",value:"group"},{label:"Quantiles",value:"quantiles"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SummaryStatistics \n    data={heartdisease} \n    variables={[ 'Age', 'Cost' ]}\n    statistics={[ 'Mean', 'Standard Deviation' ]}\n/>\n"))),(0,i.kt)(o.Z,{value:"group",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SummaryStatistics \n    data={heartdisease} \n    variables={[ 'Age', 'Cost' ]}\n    statistics={[ 'Mean', 'Standard Deviation' ]}\n    group={[ 'Gender' ]}\n/>\n"))),(0,i.kt)(o.Z,{value:"quantiles",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SummaryStatistics \n    data={heartdisease} \n    variables={[ 'Age', 'Cost' ]}\n    statistics={[ 'Quantile' ]}\n    quantiles={[ 0.1, 0.25, 0.5, 0.75, 0.9 ]}\n/>\n")))))}f.isMDXComponent=!0},386010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);