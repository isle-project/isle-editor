"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[82007],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},204933:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return m},default:function(){return b},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return k}});var r=n(603905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&u(e,n,t[n]);return e};const d={id:"logistic-regression",title:"Logistic Regression",sidebar_label:"Logistic Regression"},m=void 0,f={unversionedId:"models/logistic-regression",id:"models/logistic-regression",title:"Logistic Regression",description:"\u041c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u043b\u0438\u043d\u0435\u0439\u043d\u0430\u044f \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u044f.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/models/logistic-regression.md",sourceDirName:"models",slug:"/models/logistic-regression",permalink:"/ru/docs/models/logistic-regression",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/logistic-regression.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1626839389,formattedLastUpdatedAt:"21 \u0438\u044e\u043b. 2021 \u0433.",frontMatter:{id:"logistic-regression",title:"Logistic Regression",sidebar_label:"Logistic Regression"},sidebar:"docs",previous:{title:"LASSO Regression",permalink:"/ru/docs/models/lasso-regression"},next:{title:"Multiple Linear Regression",permalink:"/ru/docs/models/multiple-linear-regression"}},g={},k=[{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],y={toc:k};function b(e){var t,n=e,{components:i}=n,u=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},y),u),o(t,a({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u041c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u043b\u0438\u043d\u0435\u0439\u043d\u0430\u044f \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u044f."),(0,r.kt)("h2",p({},{id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"}),"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object (required)"),": \u043c\u0430\u0441\u0441\u0438\u0432\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043e\u0446\u0435\u043d\u043a\u0438. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"y")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"success")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"any (required)"),": \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u0443\u0441\u043f\u0435\u0445\u0430 ",(0,r.kt)("inlineCode",{parentName:"li"},"y"),". Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"x")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(array<(string|Factor)>|string|Factor) (required)"),": \u043e\u0434\u043d\u0430 \u0438\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u043f\u0440\u0435\u0434\u0438\u043a\u0442\u043e\u0440\u0430. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"quantitative")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),": \u043c\u0430\u0441\u0441\u0438\u0432 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0432 ",(0,r.kt)("inlineCode",{parentName:"li"},"\u0434\u0430\u043d\u043d\u044b\u0445"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f ",(0,r.kt)("inlineCode",{parentName:"li"},"\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c\u0438''. Default: "),"none`."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"omitMissing")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u0442, \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u043b\u0438 \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u044e\u0449\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"intercept")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u0442, \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442\u044c \u043b\u0438 \u043a \u043c\u043e\u0434\u0435\u043b\u0438 \u0441 \u0442\u0435\u0440\u043c\u0438\u043d\u043e\u043c \u043f\u0435\u0440\u0435\u0445\u0432\u0430\u0442\u0430. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onPredict")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": \u043e\u0431\u0440\u0430\u0442\u043d\u044b\u0439 \u0432\u044b\u0437\u043e\u0432, \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u043c\u044b\u0439 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0430\u043d\u0438\u044f, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u0434\u043b\u044f \u043d\u043e\u0432\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,r.kt)("h2",p({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LogisticRegression \n    data={heartdisease} \n    y=\"Complications\"\n    success={1}\n    x={[ 'Drugs', 'Gender', 'Age', 'Interventions' ]}\n    quantitative={[ 'Age', 'Cost', 'Interventions' ]}\n/>\n")))}b.isMDXComponent=!0}}]);