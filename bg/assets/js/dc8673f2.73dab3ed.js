"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9841],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},698328:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(487462),i=n(263366),o=(n(202784),n(603905)),a=["components"],l={id:"logistic-regression",title:"Logistic Regression",sidebar_label:"Logistic Regression"},s=void 0,c={unversionedId:"models/logistic-regression",id:"models/logistic-regression",title:"Logistic Regression",description:"\u041b\u043e\u0433\u0438\u0441\u0442\u0438\u0447\u043d\u0430 \u0440\u0435\u0433\u0440\u0435\u0441\u0438\u044f.",source:"@site/i18n/bg/docusaurus-plugin-content-docs/current/models/logistic-regression.md",sourceDirName:"models",slug:"/models/logistic-regression",permalink:"/bg/docs/models/logistic-regression",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/logistic-regression.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1626839389,formattedLastUpdatedAt:"20.07.2021 \u0433.",frontMatter:{id:"logistic-regression",title:"Logistic Regression",sidebar_label:"Logistic Regression"},sidebar:"docs",previous:{title:"LASSO Regression",permalink:"/bg/docs/models/lasso-regression"},next:{title:"Multiple Linear Regression",permalink:"/bg/docs/models/multiple-linear-regression"}},u={},p=[{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u0438",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u041b\u043e\u0433\u0438\u0441\u0442\u0438\u0447\u043d\u0430 \u0440\u0435\u0433\u0440\u0435\u0441\u0438\u044f."),(0,o.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u0438"},"\u041e\u043f\u0446\u0438\u0438"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"data")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object (required)"),": \u043e\u0431\u0435\u043a\u0442 \u043e\u0442 \u043c\u0430\u0441\u0438\u0432\u0438 \u0441\u044a\u0441 \u0441\u0442\u043e\u0439\u043d\u043e\u0441\u0442\u0438. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"y")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": \u043f\u0440\u043e\u043c\u0435\u043d\u043b\u0438\u0432\u0430 \u043d\u0430 \u0440\u0435\u0437\u0443\u043b\u0442\u0430\u0442\u0430. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"success")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"any (required)"),": \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u043d\u0430 \u0443\u0441\u043f\u0435\u0445\u0430 \u043d\u0430 ",(0,o.kt)("inlineCode",{parentName:"li"},"y"),". Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"x")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(array<(string|Factor)>|string|Factor) (required)"),": \u0435\u0434\u043d\u0430 \u0438\u043b\u0438 \u043f\u043e\u0432\u0435\u0447\u0435 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u043d\u0438 \u043f\u0440\u043e\u043c\u0435\u043d\u043b\u0438\u0432\u0438.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"quantitative")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),": \u043c\u0430\u0441\u0438\u0432 \u043e\u0442 \u043f\u0440\u043e\u043c\u0435\u043d\u043b\u0438\u0432\u0438 \u0432 ",(0,o.kt)("inlineCode",{parentName:"li"},"data"),", \u043a\u043e\u0438\u0442\u043e \u0441\u0430 ",(0,o.kt)("inlineCode",{parentName:"li"},"\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u0438"),". Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"omitMissing")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0430 \u0434\u0430\u043b\u0438 \u0434\u0430 \u0441\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0430\u0442 \u043b\u0438\u043f\u0441\u0432\u0430\u0449\u0438 \u0441\u0442\u043e\u0439\u043d\u043e\u0441\u0442\u0438.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"intercept")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0430 \u0434\u0430\u043b\u0438 \u0434\u0430 \u0441\u0435 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430 \u043c\u043e\u0434\u0435\u043b \u0441 \u0447\u043b\u0435\u043d intercept. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"onPredict")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"function"),": \u043e\u0431\u0440\u0430\u0442\u043d\u0430 \u0432\u0440\u044a\u0437\u043a\u0430, \u0438\u0437\u0432\u0438\u043a\u0430\u043d\u0430 \u0441 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0437\u0430 \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0432\u0430\u043d\u0435, \u0437\u0430 \u0434\u0430 \u0441\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u044f\u0442 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438 \u0437\u0430 \u043d\u043e\u0432\u0438 \u0434\u0430\u043d\u043d\u0438.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,o.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438"},"\u041f\u0440\u0438\u043c\u0435\u0440\u0438"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LogisticRegression \n    data={heartdisease} \n    y=\"Complications\"\n    success={1}\n    x={[ 'Drugs', 'Gender', 'Age', 'Interventions' ]}\n    quantitative={[ 'Age', 'Cost', 'Interventions' ]}\n/>\n")))}m.isMDXComponent=!0}}]);