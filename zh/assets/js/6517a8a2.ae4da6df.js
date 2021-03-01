(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{190:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),l=(n(0),n(411)),i=n(460),o=n(461),c={id:"scatterplot",title:"Scatter Plot",sidebar_label:"Scatter Plot"},s={unversionedId:"plots/scatterplot",id:"plots/scatterplot",isDocsHomePage:!1,title:"Scatter Plot",description:"\u8ba1\u7b97\u4e00\u4e2a\u6570\u7ec4\u7684\u6700\u5c0f\u503c\u548c\u6700\u5927\u503c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/plots/scatterplot.md",slug:"/plots/scatterplot",permalink:"/zh/docs/plots/scatterplot",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/scatterplot.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614613459,sidebar_label:"Scatter Plot",sidebar:"docs",previous:{title:"QQ Plot",permalink:"/zh/docs/plots/qqplot"},next:{title:"Scatter Plot Matrix",permalink:"/zh/docs/plots/scatterplot-matrix"}},b=[{value:"\u9009\u9879",id:"\u9009\u9879",children:[]},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[]}],u={toc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u8ba1\u7b97\u4e00\u4e2a\u6570\u7ec4\u7684\u6700\u5c0f\u503c\u548c\u6700\u5927\u503c\u3002"),Object(l.b)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"data")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object (required)"),": \u6bcf\u4e2a\u53d8\u91cf\u7684\u503c\u6570\u7ec4\u5bf9\u8c61. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"xval")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string (required)"),": \u5728X\u8f74\u4e0a\u663e\u793a\u7684\u53d8\u91cf. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"yval")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string (required)"),": \u5728Y\u8f74\u4e0a\u663e\u793a\u7684\u53d8\u91cf. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"text")," | ",Object(l.b)("inlineCode",{parentName:"li"},"(string|Factor)"),": \u6bcf\u4e2a\u70b9\u65c1\u8fb9\u90fd\u6709\u6587\u5b57\u663e\u793a. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"color")," | ",Object(l.b)("inlineCode",{parentName:"li"},"(string|Factor)"),": \u5206\u7c7b\u53d8\u91cf\uff0c\u4ee5\u6620\u5c04\u5230\u70b9\u7684\u989c\u8272\u3002. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"type")," | ",Object(l.b)("inlineCode",{parentName:"li"},"(string|Factor)"),": \u5bf9\u5e94\u5230\u663e\u793a\u7684\u7b26\u53f7\u7684\u5206\u7c7b\u53d8\u91cf\u3002. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"size")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": \u91cf\u5316\u53d8\u91cf\uff0c\u4ee5\u6620\u5c04\u5230\u70b9\u7684\u5927\u5c0f\u3002. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"regressionLine")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": \u63a7\u5236\u662f\u5426\u8986\u76d6\u56de\u5f52\u7ebf\u3002. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"regressionMethod")," | ",Object(l.b)("inlineCode",{parentName:"li"},"array<string>"),": ",Object(l.b)("inlineCode",{parentName:"li"},"linear"),"\u548c/\u6216",Object(l.b)("inlineCode",{parentName:"li"},"smooth"),"\u663e\u793a\u7ebf\u6027\u56de\u5f52\u548c\u5e73\u6ed1\u7684LOWESS\u56de\u5f52\u7ebf\u3002. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"[\n  'linear'\n]"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lineBy")," | ",Object(l.b)("inlineCode",{parentName:"li"},"(string|Factor)"),": \u4e3a\u6bcf\u4e00\u7c7b\u6307\u5b9a\u7684\u5206\u7c7b\u53d8\u91cf\u663e\u793a\u5355\u72ec\u7684\u56de\u5f52\u7ebf\u3002. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"smoothSpan")," | ",Object(l.b)("inlineCode",{parentName:"li"},"number"),": \u5e73\u6ed1\u56de\u5f52\u7ebf\u7684\u5e73\u6ed1\u8de8\u5ea6\u53c2\u6570. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"0.66"),".")),Object(l.b)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),Object(l.b)(i.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Grouped",value:"grouped"},{label:"Colored",value:"colored"},{label:"Type",value:"type"},{label:"Regression Line",value:"regressionLine"}],lazy:!0,mdxType:"Tabs"},Object(l.b)(o.a,{value:"minimal",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ScatterPlot \n    data={heartdisease} \n    xval="Age"\n    yval="Cost"\n/>\n'))),Object(l.b)(o.a,{value:"grouped",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ViolinPlot \n    data={heartdisease} \n    variable="Interventions"\n    group="Gender"\n/>\n'))),Object(l.b)(o.a,{value:"colored",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ScatterPlot \n    data={heartdisease} \n    xval="Age"\n    yval="Cost"\n    color="Gender"\n/>\n'))),Object(l.b)(o.a,{value:"type",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ScatterPlot \n    data={heartdisease} \n    xval="Age"\n    yval="Interventions"\n    color="Gender"\n    type="Gender"\n/>\n'))),Object(l.b)(o.a,{value:"regressionLine",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ScatterPlot \n    data={heartdisease} \n    xval="Age"\n    yval="Interventions"\n    regressionLine\n    regressionMethod={[\'smooth\']}\n/>\n')))))}p.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),m=a,d=u["".concat(i,".").concat(m)]||u[m]||p[m]||l;return n?r.a.createElement(d,o(o({ref:t},s),{},{components:n})):r.a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},445:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},458:function(e,t,n){"use strict";var a=n(0),r=n(459);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},459:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},460:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(458),i=n(445),o=n(58),c=n.n(o);const s=37,b=39;t.a=function(e){const{lazy:t,block:n,defaultValue:o,values:u,groupId:p,className:m}=e,{tabGroupChoices:d,setTabGroupChoices:O}=Object(l.a)(),[j,f]=Object(a.useState)(o),v=a.Children.toArray(e.children),g=[];if(null!=p){const e=d[p];null!=e&&e!==j&&u.some((t=>t.value===e))&&f(e)}const y=e=>{const t=e.target,n=g.indexOf(t),a=v[n].props.value;f(a),null!=p&&O(p,a)},N=e=>{var t;let n;switch(e.keyCode){case b:const t=g.indexOf(e.target)+1;n=g[t]||g[0];break;case s:const a=g.indexOf(e.target)-1;n=g[a]||g[g.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},m)},u.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":j===e}),key:e,ref:e=>g.push(e),onKeyDown:N,onFocus:y,onClick:y},t)))),t?Object(a.cloneElement)(v.filter((e=>e.props.value===j))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}},461:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);