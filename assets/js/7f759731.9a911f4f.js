"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[556],{603905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(202784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},358215:function(e,t,r){var n=r(202784);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},855064:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(202784),a=r(79443);var o=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=r(386010),i="tabItem_1uMI",c="tabItemActive_2DSg";var s=function(e){var t,r=e.lazy,a=e.block,s=e.defaultValue,u=e.values,p=e.groupId,m=e.className,d=n.Children.toArray(e.children),f=null!=u?u:d.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=s?s:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,b=o(),y=b.tabGroupChoices,g=b.setTabGroupChoices,h=(0,n.useState)(v),x=h[0],k=h[1],O=[];if(null!=p){var N=y[p];null!=N&&N!==x&&f.some((function(e){return e.value===N}))&&k(N)}var w=function(e){var t=e.currentTarget,r=O.indexOf(t),n=f[r].value;k(n),null!=p&&(g(p,n),setTimeout((function(){var e,r,n,a,o,l,i,s;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,o=e.right,l=window,i=l.innerHeight,s=l.innerWidth,r>=0&&o<=s&&a<=i&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},P=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=O.indexOf(e.target)+1;r=O[n]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.target)-1;r=O[a]||O[O.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},m)},f.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":x===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:P,onFocus:w,onClick:w},null!=r?r:t)}))),r?(0,n.cloneElement)(d.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}},79443:function(e,t,r){var n=(0,r(202784).createContext)(void 0);t.Z=n},362198:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var n=r(487462),a=r(263366),o=(r(202784),r(603905)),l=r(855064),i=r(358215),c=["components"],s={id:"scatterplot-matrix",title:"Scatter Plot Matrix",sidebar_label:"Scatter Plot Matrix"},u=void 0,p={unversionedId:"plots/scatterplot-matrix",id:"plots/scatterplot-matrix",isDocsHomePage:!1,title:"Scatter Plot Matrix",description:"A scatter plot matrix.",source:"@site/docs/plots/scatterplot-matrix.md",sourceDirName:"plots",slug:"/plots/scatterplot-matrix",permalink:"/docs/plots/scatterplot-matrix",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/scatterplot-matrix.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614613459,formattedLastUpdatedAt:"3/1/2021",frontMatter:{id:"scatterplot-matrix",title:"Scatter Plot Matrix",sidebar_label:"Scatter Plot Matrix"},sidebar:"docs",previous:{title:"Scatter Plot",permalink:"/docs/plots/scatterplot"},next:{title:"Sunburst Plot",permalink:"/docs/plots/sunburst"}},m=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],d={toc:m};function f(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A scatter plot matrix."),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"data")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object (required)"),": object of value arrays for each variable. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"variables")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"array (required)"),": array of variables to display in matrix. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"color")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": categorical variable to map to color of points. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Colored",value:"colored"}],lazy:!0,mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"minimal",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<ScatterPlotMatrix\n    data={heartdisease} \n    variables={[ 'Age', 'Cost', 'Interventions' ]}\n/>\n"))),(0,o.kt)(i.Z,{value:"colored",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<ScatterPlotMatrix\n    data={heartdisease} \n    variables={[ 'Cost', 'Interventions' ]}\n    color=\"Gender\"\n/>\n")))))}f.isMDXComponent=!0},386010:function(e,t,r){function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);