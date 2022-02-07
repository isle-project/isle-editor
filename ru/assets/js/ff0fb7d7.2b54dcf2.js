"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9585],{603905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return s}});var r=t(202784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(t),s=o,m=f["".concat(c,".").concat(s)]||f[s]||d[s]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function s(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},90884:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var r=t(487462),o=t(263366),a=(t(202784),t(603905)),i=["components"],l={id:"confidence-coverage-binomial",title:"Confidence Interval Coverage Binomial",sidebar_label:"Confidence Interval Coverage Binomial"},c=void 0,u={unversionedId:"learn/confidence-coverage-binomial",id:"learn/confidence-coverage-binomial",title:"Confidence Interval Coverage Binomial",description:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f, \u0438\u043b\u043b\u044e\u0441\u0442\u0440\u0438\u0440\u0443\u044e\u0449\u0438\u0439 \u043e\u0445\u0432\u0430\u0442 \u0434\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u043e\u0432 \u0434\u043b\u044f \u0441\u0440\u0435\u0434\u043d\u0435\u0433\u043e \u0431\u0438\u043d\u043e\u043c\u0438\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/learn/confidence-coverage-binomial.md",sourceDirName:"learn",slug:"/learn/confidence-coverage-binomial",permalink:"/ru/docs/learn/confidence-coverage-binomial",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/confidence-coverage-binomial.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21.02.2021",frontMatter:{id:"confidence-coverage-binomial",title:"Confidence Interval Coverage Binomial",sidebar_label:"Confidence Interval Coverage Binomial"},sidebar:"docs",previous:{title:"Conditional Probability",permalink:"/ru/docs/learn/conditional-probability"},next:{title:"Confidence Interval Coverage Normal",permalink:"/ru/docs/learn/confidence-coverage-normal"}},p=[{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b",children:[],level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:[],level:2}],d={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f, \u0438\u043b\u043b\u044e\u0441\u0442\u0440\u0438\u0440\u0443\u044e\u0449\u0438\u0439 \u043e\u0445\u0432\u0430\u0442 \u0434\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u043e\u0432 \u0434\u043b\u044f \u0441\u0440\u0435\u0434\u043d\u0435\u0433\u043e \u0431\u0438\u043d\u043e\u043c\u0438\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f."),(0,a.kt)("h2",{id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"intro")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(node|string)"),": \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0432\u0432\u043e\u0434\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e (\u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0439). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"quartileNotation")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u0442, \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u0432\u0430\u0440\u0442\u0438\u043b\u044c\u043d\u0443\u044e \u043d\u043e\u0442\u0430\u0446\u0438\u044e \u0432\u043e \u0432\u0441\u0442\u0443\u043f\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u043c \u0442\u0435\u043a\u0441\u0442\u0435. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"sampleStats")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u0442, \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u043b\u0438 \u043f\u0440\u0438 \u0440\u0430\u0441\u0447\u0435\u0442\u0435 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0439 \u043e\u0448\u0438\u0431\u043a\u0438 \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u0442\u044c\u0441\u044f \u043c\u0435\u0436\u0434\u0443 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u043f\u0440\u043e\u043f\u043e\u0440\u0446\u0438\u0438 \u0432\u044b\u0431\u043e\u0440\u043a\u0438 \u0438\u043b\u0438 \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e\u0439 \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u044c\u044e \u0443\u0441\u043f\u0435\u0445\u0430 \u043f\u043e\u043f\u0443\u043b\u044f\u0446\u0438\u0438. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,a.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnConfidenceCoverageBinomial />\n")))}f.isMDXComponent=!0}}]);