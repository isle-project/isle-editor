(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{198:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(7),i=(a(0),a(409)),l=a(462),o=a(463),c={id:"piechart",title:"Pie Chart",sidebar_label:"Pie Chart"},s={unversionedId:"plots/piechart",id:"plots/piechart",isDocsHomePage:!1,title:"Pie Chart",description:"A pie chart component that by default displays the counts of all categories from a chosen variable.",source:"@site/docs/plots/piechart.md",slug:"/plots/piechart",permalink:"/docs/plots/piechart",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/piechart.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614465855,sidebar_label:"Pie Chart",sidebar:"docs",previous:{title:"NetworkPlot",permalink:"/docs/plots/network-plot"},next:{title:"QQ Plot",permalink:"/docs/plots/qqplot"}},u=[{value:"Options",id:"options",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:u};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A pie chart component that by default displays the counts of all categories from a chosen variable."),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"data")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object (required)"),": object of value arrays. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"variable")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": variable to display. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"group")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|Factor)"),": grouping variable. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"summaryVariable")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": optional variable whose sum to display for each ",Object(i.b)("inlineCode",{parentName:"li"},"variable")," category. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),".")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)(l.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Grouped",value:"grouped"},{label:"Summary Variable",value:"summaryVariable"}],lazy:!0,mdxType:"Tabs"},Object(i.b)(o.a,{value:"minimal",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<PieChart \n    data={heartdisease} \n    variable="Drugs"\n/>\n'))),Object(i.b)(o.a,{value:"grouped",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<PieChart \n    data={heartdisease} \n    variable="Drugs"\n    group="Gender"\n/>\n'))),Object(i.b)(o.a,{value:"summaryVariable",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<PieChart \n    data={heartdisease} \n    variable="Drugs"\n    summaryVariable="Cost"\n/>\n')))))}b.isMDXComponent=!0},409:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,d=p["".concat(l,".").concat(m)]||p[m]||b[m]||i;return a?n.a.createElement(d,o(o({ref:t},s),{},{components:a})):n.a.createElement(d,o({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},449:function(e,t,a){"use strict";function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},460:function(e,t,a){"use strict";var r=a(0),n=a(461);t.a=function(){const e=Object(r.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},461:function(e,t,a){"use strict";var r=a(0);const n=Object(r.createContext)(void 0);t.a=n},462:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(460),l=a(449),o=a(58),c=a.n(o);const s=37,u=39;t.a=function(e){const{lazy:t,block:a,defaultValue:o,values:p,groupId:b,className:m}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(i.a)(),[O,v]=Object(r.useState)(o),y=r.Children.toArray(e.children),j=[];if(null!=b){const e=d[b];null!=e&&e!==O&&p.some((t=>t.value===e))&&v(e)}const g=e=>{const t=e.target,a=j.indexOf(t),r=y[a].props.value;v(r),null!=b&&f(b,r)},h=e=>{var t;let a;switch(e.keyCode){case u:const t=j.indexOf(e.target)+1;a=j[t]||j[0];break;case s:const r=j.indexOf(e.target)-1;a=j[r]||j[j.length-1]}null===(t=a)||void 0===t||t.focus()};return n.a.createElement("div",{className:"tabs-container"},n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":a},m)},p.map((({value:e,label:t})=>n.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>j.push(e),onKeyDown:h,onFocus:g,onClick:g},t)))),t?Object(r.cloneElement)(y.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},463:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function({children:e,hidden:t,className:a}){return n.a.createElement("div",{role:"tabpanel",hidden:t,className:a},e)}}}]);