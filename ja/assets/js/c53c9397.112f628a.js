(window.webpackJsonp=window.webpackJsonp||[]).push([[1244],{270:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(410)),i=r(443),l=r(444),c={id:"scatterplot-matrix",title:"Scatter Plot Matrix",sidebar_label:"Scatter Plot Matrix"},s={unversionedId:"plots/scatterplot-matrix",id:"plots/scatterplot-matrix",isDocsHomePage:!1,title:"Scatter Plot Matrix",description:"\u6563\u5e03\u56f3\u884c\u5217\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/plots/scatterplot-matrix.md",slug:"/plots/scatterplot-matrix",permalink:"/ja/docs/plots/scatterplot-matrix",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/scatterplot-matrix.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614613459,formattedLastUpdatedAt:"2021/3/1",sidebar_label:"Scatter Plot Matrix",sidebar:"docs",previous:{title:"Scatter Plot",permalink:"/ja/docs/plots/scatterplot"},next:{title:"Sunburst Plot",permalink:"/ja/docs/plots/sunburst"}},u=[{value:"\u30aa\u30d7\u30b7\u30e7\u30f3",id:"\u30aa\u30d7\u30b7\u30e7\u30f3",children:[]},{value:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002",id:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002",children:[]}],b={toc:u};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u6563\u5e03\u56f3\u884c\u5217\u3002"),Object(o.b)("h2",{id:"\u30aa\u30d7\u30b7\u30e7\u30f3"},"\u30aa\u30d7\u30b7\u30e7\u30f3"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"data")," | ",Object(o.b)("inlineCode",{parentName:"li"},"object (required)"),": \u5404\u5909\u6570\u306e\u5024\u306e\u914d\u5217\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"variables")," | ",Object(o.b)("inlineCode",{parentName:"li"},"array (required)"),": \u884c\u5217\u306b\u8868\u793a\u3059\u308b\u5909\u6570\u306e\u914d\u5217. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"color")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(string|Factor)"),": \u70b9\u306e\u8272\u306b\u5bfe\u5fdc\u3055\u305b\u308b\u7bc4\u7587\u5909\u6570. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),".")),Object(o.b)("h2",{id:"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"},"\u4f8b\u3068\u3057\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u3042\u308a\u307e\u3059\u3002"),Object(o.b)(i.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Colored",value:"colored"}],lazy:!0,mdxType:"Tabs"},Object(o.b)(l.a,{value:"minimal",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<ScatterPlotMatrix\n    data={heartdisease} \n    variables={[ 'Age', 'Cost', 'Interventions' ]}\n/>\n"))),Object(o.b)(l.a,{value:"colored",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<ScatterPlotMatrix\n    data={heartdisease} \n    variables={[ 'Cost', 'Interventions' ]}\n    color=\"Gender\"\n/>\n")))))}p.isMDXComponent=!0},410:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return r?a.a.createElement(m,l(l({ref:t},s),{},{components:r})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},434:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}},440:function(e,t,r){"use strict";var n=r(0),a=r(441);t.a=function(){const e=Object(n.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},441:function(e,t,r){"use strict";var n=r(0);const a=Object(n.createContext)(void 0);t.a=a},443:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(440),i=r(434),l=r(57),c=r.n(l);const s=37,u=39;t.a=function(e){const{lazy:t,block:r,defaultValue:l,values:b,groupId:p,className:d}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(o.a)(),[v,O]=Object(n.useState)(l),j=n.Children.toArray(e.children),y=[];if(null!=p){const e=m[p];null!=e&&e!==v&&b.some((t=>t.value===e))&&O(e)}const g=e=>{const t=e.target,r=y.indexOf(t),n=j[r].props.value;O(n),null!=p&&(f(p,n),setTimeout((()=>{(function(e){const{top:t,left:r,bottom:n,right:a}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:i}=window;return t>=0&&a<=i&&n<=o&&r>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((()=>t.classList.remove(c.a.tabItemActive)),2e3))}),150))},h=e=>{var t;let r;switch(e.keyCode){case u:{const t=y.indexOf(e.target)+1;r=y[t]||y[0];break}case s:{const t=y.indexOf(e.target)-1;r=y[t]||y[y.length-1];break}}null===(t=r)||void 0===t||t.focus()};return a.a.createElement("div",{className:"tabs-container"},a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":r},d)},b.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:v===e?0:-1,"aria-selected":v===e,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":v===e}),key:e,ref:e=>y.push(e),onKeyDown:h,onFocus:g,onClick:g},t)))),t?Object(n.cloneElement)(j.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},j.map(((e,t)=>Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}},444:function(e,t,r){"use strict";var n=r(0),a=r.n(n);t.a=function({children:e,hidden:t,className:r}){return a.a.createElement("div",{role:"tabpanel",hidden:t,className:r},e)}}}]);