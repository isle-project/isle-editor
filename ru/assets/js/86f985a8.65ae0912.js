(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{212:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(3),i=t(7),a=(t(0),t(410)),o={id:"simple-linear-regression",title:"Simple Linear Regression",sidebar_label:"Simple Linear Regression"},l={unversionedId:"models/simple-linear-regression",id:"models/simple-linear-regression",isDocsHomePage:!1,title:"Simple Linear Regression",description:"\u041f\u0440\u043e\u0441\u0442\u0430\u044f \u043b\u0438\u043d\u0435\u0439\u043d\u0430\u044f \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u044f.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/models/simple-linear-regression.md",slug:"/models/simple-linear-regression",permalink:"/ru/docs/models/simple-linear-regression",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/simple-linear-regression.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614463997,formattedLastUpdatedAt:"27.02.2021",sidebar_label:"Simple Linear Regression",sidebar:"docs",previous:{title:"Random Forest",permalink:"/ru/docs/models/random-forest"},next:{title:"Contingency Table",permalink:"/ru/docs/tables/contingency-table"}},c=[{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:[]}],s={toc:c};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u041f\u0440\u043e\u0441\u0442\u0430\u044f \u043b\u0438\u043d\u0435\u0439\u043d\u0430\u044f \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u044f."),Object(a.b)("h2",{id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"data")," | ",Object(a.b)("inlineCode",{parentName:"li"},"object (required)"),": \u043c\u0430\u0441\u0441\u0438\u0432\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043e\u0446\u0435\u043d\u043a\u0438. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"x")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string (required)"),": \u043e\u0431\u044a\u044f\u0441\u043d\u044f\u044e\u0449\u0430\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"y")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string (required)"),": \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0440\u0435\u0430\u043a\u0446\u0438\u0438. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"group")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(string|Factor)"),": \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0438. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"omitMissing")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u0442, \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u043b\u0438 \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u044e\u0449\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u0440\u0438 \u043f\u043e\u0434\u0433\u043e\u043d\u043a\u0435 \u043c\u043e\u0434\u0435\u043b\u0438. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onDiagnostics")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": \u043e\u0431\u0440\u0430\u0442\u043d\u044b\u0439 \u0432\u044b\u0437\u043e\u0432 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0434\u0438\u0430\u0433\u043d\u043e\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0433\u0440\u0430\u0444\u0438\u043a\u043e\u0432. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onPredict")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": \u043e\u0431\u0440\u0430\u0442\u043d\u044b\u0439 \u0432\u044b\u0437\u043e\u0432 \u0441 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u043c\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438 \u0438 \u043e\u0441\u0442\u0430\u0442\u043a\u0430\u043c\u0438. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),".")),Object(a.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<SimpleLinearRegression \n    data={heartdisease} \n    y="Cost"\n    x="Interventions"\n    group="Complications"\n/>\n')))}p.isMDXComponent=!0},410:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),p=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=p(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(t),m=r,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||a;return t?i.a.createElement(d,l(l({ref:n},s),{},{components:t})):i.a.createElement(d,l({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);