"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7869],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},451623:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(487462),a=n(263366),o=(n(202784),n(603905)),i=["components"],l={id:"anova",title:"ANOVA",sidebar_label:"ANOVA"},u=void 0,c={unversionedId:"tests/anova",id:"tests/anova",title:"ANOVA",description:"\u0414\u0438\u0441\u043f\u0435\u0440\u0441\u0438\u043e\u043d\u043d\u044b\u0439 \u0430\u043d\u0430\u043b\u0438\u0437.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/tests/anova.md",sourceDirName:"tests",slug:"/tests/anova",permalink:"/ru/docs/tests/anova",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tests/anova.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614463997,formattedLastUpdatedAt:"27.02.2021",frontMatter:{id:"anova",title:"ANOVA",sidebar_label:"ANOVA"},sidebar:"docs",previous:{title:"Frequency Table",permalink:"/ru/docs/tables/frequency-table"},next:{title:"Chi-square Independence Test",permalink:"/ru/docs/tests/chi2"}},s=[{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b",children:[],level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:[],level:2}],p={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u0414\u0438\u0441\u043f\u0435\u0440\u0441\u0438\u043e\u043d\u043d\u044b\u0439 \u0430\u043d\u0430\u043b\u0438\u0437."),(0,o.kt)("h2",{id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"data")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object (required)"),": \u043c\u0430\u0441\u0441\u0438\u0432\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043e\u0446\u0435\u043d\u043a\u0438. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"variable")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string (required)"),": \u0438\u043c\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"group")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": \u0438\u043c\u044f \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u0443\u044e\u0449\u0435\u0439 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"showDecision")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u0442, \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u043b\u0438 \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043e \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,o.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Anova\n    data={heartdisease} \n    variable="Cost"\n    group="Drugs"\n/>\n')))}d.isMDXComponent=!0}}]);