(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),o=(n(0),n(409)),a={id:"conditional-probability",title:"Conditional Probability",sidebar_label:"Conditional Probability"},l={unversionedId:"learn/conditional-probability",id:"learn/conditional-probability",isDocsHomePage:!1,title:"Conditional Probability",description:"\u041e\u0431\u0443\u0447\u0430\u044e\u0449\u0438\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442, \u0438\u043b\u043b\u044e\u0441\u0442\u0440\u0438\u0440\u0443\u044e\u0449\u0438\u0439 \u0443\u0441\u043b\u043e\u0432\u043d\u0443\u044e \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u044c \u0434\u043b\u044f \u0434\u0432\u0443\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u044b\u0445 \u0434\u0432\u043e\u0438\u0447\u043d\u044b\u0445 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/learn/conditional-probability.md",slug:"/learn/conditional-probability",permalink:"/ru/docs/learn/conditional-probability",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/conditional-probability.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614119449,sidebar_label:"Conditional Probability",sidebar:"docs",previous:{title:"CLT Sample",permalink:"/ru/docs/learn/clt-sample"},next:{title:"Confidence Interval Coverage Binomial",permalink:"/ru/docs/learn/confidence-coverage-binomial"}},c=[{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:[]}],u={toc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u041e\u0431\u0443\u0447\u0430\u044e\u0449\u0438\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442, \u0438\u043b\u043b\u044e\u0441\u0442\u0440\u0438\u0440\u0443\u044e\u0449\u0438\u0439 \u0443\u0441\u043b\u043e\u0432\u043d\u0443\u044e \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u044c \u0434\u043b\u044f \u0434\u0432\u0443\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u044b\u0445 \u0434\u0432\u043e\u0438\u0447\u043d\u044b\u0445 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445."),Object(o.b)("h2",{id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b"),Object(o.b)("p",null,"\u0421\u0432\u043e\u0439\u0441\u0442\u0432 \u043d\u0435\u0442."),Object(o.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnConditionalProbability />\n")))}p.isMDXComponent=!0},409:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),p=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=p(n),s=r,f=b["".concat(a,".").concat(s)]||b[s]||d[s]||o;return n?i.a.createElement(f,l(l({ref:t},u),{},{components:n})):i.a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);