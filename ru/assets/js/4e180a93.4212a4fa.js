(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{175:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),a=(n(0),n(411)),o={id:"decision-tree",title:"Decision Tree",sidebar_label:"Decision Tree"},l={unversionedId:"models/decision-tree",id:"models/decision-tree",isDocsHomePage:!1,title:"Decision Tree",description:"\u0414\u0435\u0440\u0435\u0432\u044c\u044f \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438 \u0438 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/models/decision-tree.md",slug:"/models/decision-tree",permalink:"/ru/docs/models/decision-tree",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/decision-tree.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614614554,sidebar_label:"Decision Tree",sidebar:"docs",previous:{title:"Word Cloud",permalink:"/ru/docs/word-cloud"},next:{title:"Hierarchical Clustering",permalink:"/ru/docs/models/hierarchical-clustering"}},c=[{value:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:[]}],b={toc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u0414\u0435\u0440\u0435\u0432\u044c\u044f \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u0438 \u0438 \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438."),Object(a.b)("h2",{id:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"data")," | ",Object(a.b)("inlineCode",{parentName:"li"},"object (required)"),": \u043c\u0430\u0441\u0441\u0438\u0432\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043e\u0446\u0435\u043d\u043a\u0438. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"y")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"x")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(array<(string|Factor)>|string|Factor) (required)"),": \u043e\u0434\u043d\u0430 \u0438\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u043f\u0440\u0435\u0434\u0438\u043a\u0442\u043e\u0440\u0430. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"type")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string (required)"),": ",Object(a.b)("inlineCode",{parentName:"li"},"\u041a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f")," \u0434\u043b\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432 \u0438\u043b\u0438 ",Object(a.b)("inlineCode",{parentName:"li"},"\u0420\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u044f")," \u0434\u043b\u044f \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"quantitative")," | ",Object(a.b)("inlineCode",{parentName:"li"},"array<string> (required)"),": \u043c\u0430\u0441\u0441\u0438\u0432 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0432 ",Object(a.b)("inlineCode",{parentName:"li"},"\u0434\u0430\u043d\u043d\u044b\u0445"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f ",Object(a.b)("inlineCode",{parentName:"li"},"\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c\u0438''.. Default: "),"none`."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"impurityMeasure")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": \u043c\u0435\u0440\u0430 \u0437\u0430\u0433\u0440\u044f\u0437\u043d\u0435\u043d\u0438\u044f (",Object(a.b)("inlineCode",{parentName:"li"},"\u0434\u0436\u0438\u043d\u0438")," \u0438\u043b\u0438 ",Object(a.b)("inlineCode",{parentName:"li"},"\u044d\u043d\u0442\u0440\u043e\u043f\u0438\u044f"),"). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"'gini'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"scoreThreshold")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": \u043f\u043e\u0440\u043e\u0433 \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0431\u0430\u043b\u043b\u043e\u0432. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"0.0075"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"maxTreeDepth")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0433\u043b\u0443\u0431\u0438\u043d\u0430 \u0434\u0435\u0440\u0435\u0432\u0430. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"5"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"minItemsCount")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0439 \u0432 \u0443\u0437\u043b\u0430\u0445 \u043b\u0438\u0441\u0442\u044c\u0435\u0432. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"50"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onPredict")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": \u0432\u044b\u0437\u043e\u0432 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u0432\u044b\u0437\u043e\u0432\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u043c\u043e\u0434\u0435\u043b\u0438 \u043f\u0440\u0438 \u043d\u0430\u0436\u0430\u0442\u0438\u0438 \u043a\u043d\u043e\u043f\u043a\u0438 \u043f\u0440\u0435\u0434\u0438\u043a\u0442\u0430. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),".")),Object(a.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<DecisionTree \n    data={heartdisease} \n    type=\"Classification\"\n    y=\"Complications\"\n    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Drugs' ]}\n    quantitative={[ 'Age', 'Cost', 'Interventions' ]}\n/>\n")))}u.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),u=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(o,".").concat(d)]||p[d]||s[d]||a;return n?i.a.createElement(m,l(l({ref:t},b),{},{components:n})):i.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<a;b++)o[b]=n[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);