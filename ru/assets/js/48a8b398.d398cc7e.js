(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{174:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(409)),i=n(462),l=n(463),c={id:"contourchart",title:"Contour Chart",sidebar_label:"Contour Chart"},s={unversionedId:"plots/contourchart",id:"plots/contourchart",isDocsHomePage:!1,title:"Contour Chart",description:"\u041a\u043e\u043d\u0442\u0443\u0440\u043d\u0430\u044f \u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0430.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/plots/contourchart.md",slug:"/plots/contourchart",permalink:"/ru/docs/plots/contourchart",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/contourchart.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614464350,sidebar_label:"Contour Chart",sidebar:"docs",previous:{title:"Box Plot",permalink:"/ru/docs/plots/boxplot"},next:{title:"Heat Map",permalink:"/ru/docs/plots/heatmap"}},u=[{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:[]}],b={toc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u041a\u043e\u043d\u0442\u0443\u0440\u043d\u0430\u044f \u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0430."),Object(o.b)("h2",{id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"data")," | ",Object(o.b)("inlineCode",{parentName:"li"},"object (required)"),": \u043c\u0430\u0441\u0441\u0438\u0432\u044b \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"x")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string (required)"),": \u043e\u0441\u0435\u0432\u0430\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f x. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"y")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string (required)"),": \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u043e\u0441\u0438 Y. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"overlayPoints")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u0442 \u043d\u0430\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0442\u043e\u0447\u0435\u043a \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"smoothSpan")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": \u043f\u0435\u0440\u0438\u043e\u0434 \u0437\u0430\u0442\u0438\u0440\u043a\u0438. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"0.66"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"regressionMethod")," | ",Object(o.b)("inlineCode",{parentName:"li"},"array<string>"),": \u043c\u0430\u0441\u0441\u0438\u0432, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0439 ",Object(o.b)("inlineCode",{parentName:"li"},"\u043b\u0438\u043d\u0435\u0439\u043d\u0443\u044e")," \u0438/\u0438\u043b\u0438 ",Object(o.b)("inlineCode",{parentName:"li"},"\u0441\u0433\u043b\u0430\u0436\u0435\u043d\u043d\u0443\u044e")," \u043b\u0438\u043d\u0438\u044e \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438 \u0434\u043b\u044f \u043d\u0430\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043b\u0438\u043d\u0438\u0438 \u043b\u0438\u043d\u0435\u0439\u043d\u043e\u0439 \u0438/\u0438\u043b\u0438 \u0441\u0433\u043b\u0430\u0436\u0435\u043d\u043d\u043e\u0439 \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onSelected")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": \u043e\u0431\u0440\u0430\u0442\u043d\u044b\u0439 \u0432\u044b\u0437\u043e\u0432 \u043f\u0440\u0438 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u0438 \u0442\u043e\u0447\u0435\u043a \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438 x, y \u0438 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 \u0442\u043e\u0447\u0435\u043a. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"onSelected() {}"),".")),Object(o.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),Object(o.b)(i.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Overlay Points",value:"overlayPoints"},{label:"Regression Method",value:"regressionMethod"},{label:"Smooth Span",value:"smoothSpan"}],lazy:!0,mdxType:"Tabs"},Object(o.b)(l.a,{value:"minimal",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ContourChart \n    data={heartdisease} \n    x="Age"\n    y="Cost"\n/>\n'))),Object(o.b)(l.a,{value:"overlayPoints",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ContourChart \n    overlayPoints \n    data={heartdisease} \n    x="ERVisit"\n    y="Duration"\n/>\n'))),Object(o.b)(l.a,{value:"regressionMethod",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<ContourChart \n    overlayPoints \n    regressionMethod={['smooth', 'linear']}\n    data={heartdisease} \n    x=\"ERVisit\"\n    y=\"Duration\"\n/>\n"))),Object(o.b)(l.a,{value:"smoothSpan",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<ContourChart \n    overlayPoints \n    regressionMethod={['smooth', 'linear']}\n    data={heartdisease} \n    x=\"ERVisit\"\n    y=\"Duration\"\n    smoothSpan={.12}\n/>\n")))))}p.isMDXComponent=!0},409:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),m=a,d=b["".concat(i,".").concat(m)]||b[m]||p[m]||o;return n?r.a.createElement(d,l(l({ref:t},s),{},{components:n})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},449:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},460:function(e,t,n){"use strict";var a=n(0),r=n(461);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},461:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},462:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(460),i=n(449),l=n(58),c=n.n(l);const s=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:l,values:b,groupId:p,className:m}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(o.a)(),[O,j]=Object(a.useState)(l),v=a.Children.toArray(e.children),y=[];if(null!=p){const e=d[p];null!=e&&e!==O&&b.some((t=>t.value===e))&&j(e)}const h=e=>{const t=e.target,n=y.indexOf(t),a=v[n].props.value;j(a),null!=p&&f(p,a)},g=e=>{var t;let n;switch(e.keyCode){case u:const t=y.indexOf(e.target)+1;n=y[t]||y[0];break;case s:const a=y.indexOf(e.target)-1;n=y[a]||y[y.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},m)},b.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>y.push(e),onKeyDown:g,onFocus:h,onClick:h},t)))),t?Object(a.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},463:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);