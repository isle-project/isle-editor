"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[18422],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},239943:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return v}});var r=n(603905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&c(e,n,t[n]);return e};const d={id:"naive-bayes",title:"Naive Bayes",sidebar_label:"Naive Bayes"},m=void 0,f={unversionedId:"models/naive-bayes",id:"models/naive-bayes",title:"Naive Bayes",description:"\u041d\u0430\u0438\u0432 \u0411\u044d\u0439\u0435\u0441 \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u0430\u0433\u0430\u044f, \u0447\u0442\u043e \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u0438, \u0434\u0430\u044e\u0449\u0438\u0435 \u0447\u043b\u0435\u043d\u0441\u0442\u0432\u043e \u0432 \u043a\u043b\u0430\u0441\u0441\u0435, \u0441\u043b\u0435\u0434\u0443\u044e\u0442 \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e\u043c\u0443 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044e.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/models/naive-bayes.md",sourceDirName:"models",slug:"/models/naive-bayes",permalink:"/ru/docs/models/naive-bayes",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/naive-bayes.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621312042,formattedLastUpdatedAt:"18 \u043c\u0430\u044f 2021 \u0433.",frontMatter:{id:"naive-bayes",title:"Naive Bayes",sidebar_label:"Naive Bayes"},sidebar:"docs",previous:{title:"Multiple Linear Regression",permalink:"/ru/docs/models/multiple-linear-regression"},next:{title:"Principal Component Analysis",permalink:"/ru/docs/models/principal-component-analysis"}},y={},v=[{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],b={toc:v};function g(e){var t,n=e,{components:a}=n,c=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},b),c),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u041d\u0430\u0438\u0432 \u0411\u044d\u0439\u0435\u0441 \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u0430\u0433\u0430\u044f, \u0447\u0442\u043e \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u0438, \u0434\u0430\u044e\u0449\u0438\u0435 \u0447\u043b\u0435\u043d\u0441\u0442\u0432\u043e \u0432 \u043a\u043b\u0430\u0441\u0441\u0435, \u0441\u043b\u0435\u0434\u0443\u044e\u0442 \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e\u043c\u0443 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044e."),(0,r.kt)("h2",p({},{id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"}),"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object (required)"),": \u043c\u0430\u0441\u0441\u0438\u0432\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043e\u0446\u0435\u043d\u043a\u0438. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"y")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"x")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(array<(string|Factor)>|string|Factor) (required)"),": \u043e\u0434\u043d\u0430 \u0438\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u043f\u0440\u0435\u0434\u0438\u043a\u0442\u043e\u0440\u0430. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"quantitative")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),": \u043c\u0430\u0441\u0441\u0438\u0432 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0432 ",(0,r.kt)("inlineCode",{parentName:"li"},"\u0434\u0430\u043d\u043d\u044b\u0445"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f ",(0,r.kt)("inlineCode",{parentName:"li"},"\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c\u0438''. Default: "),"none`."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"omitMissing")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u0442, \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u043b\u0438 \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u044e\u0449\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onPredict")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": \u0432\u044b\u0437\u043e\u0432 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u0432\u044b\u0437\u043e\u0432\u0430 \u0441 \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0430\u043d\u0438\u044f\u043c\u0438 \u0438 \u043e\u0441\u0442\u0430\u0442\u043a\u0430\u043c\u0438 \u043f\u043e\u0441\u043b\u0435 \u043f\u043e\u0434\u0433\u043e\u043d\u043a\u0438 \u043c\u043e\u0434\u0435\u043b\u0438. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,r.kt)("h2",p({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<NaiveBayes \n    data={heartdisease} \n    y=\"Drugs\"\n    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Complications' ]}\n    quantitative={[ 'Age', 'Cost', 'Interventions' ]}\n/>\n")))}g.isMDXComponent=!0}}]);