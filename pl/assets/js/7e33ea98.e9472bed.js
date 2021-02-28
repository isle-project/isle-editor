(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{212:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return b}));var a=t(3),r=t(7),i=(t(0),t(409)),o={id:"clt-sample",title:"CLT Sample",sidebar_label:"CLT Sample"},l={unversionedId:"learn/clt-sample",id:"learn/clt-sample",isDocsHomePage:!1,title:"CLT Sample",description:"Komponent edukacyjny ilustruj\u0105cy centralne twierdzenie graniczne (CLT) podczas pobierania pr\xf3bek z dostarczonego zestawu danych.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/learn/clt-sample.md",slug:"/learn/clt-sample",permalink:"/pl/docs/learn/clt-sample",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/clt-sample.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"CLT Sample",sidebar:"docs",previous:{title:"Discrete CLT",permalink:"/pl/docs/learn/clt-discrete"},next:{title:"Conditional Probability",permalink:"/pl/docs/learn/conditional-probability"}},c=[{value:"Opcje",id:"opcje",children:[]},{value:"Przyk\u0142ady",id:"przyk\u0142ady",children:[]}],p={toc:c};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Komponent edukacyjny ilustruj\u0105cy centralne twierdzenie graniczne (CLT) podczas pobierania pr\xf3bek z dostarczonego zestawu danych."),Object(i.b)("h2",{id:"opcje"},"Opcje"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"data")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object (required)"),": obiekt danych z kluczami odpowiada nazwom zmiennych i warto\u015bciom posiadaj\u0105cym warto\u015bci odpowiednich zmiennych. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"hidePopulationStdev")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": ukry\u0107 wy\u015bwietlanie odchylenia standardowego populacji. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"samples")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(array<number>|number)"),": uk\u0142ad liczb lub pojedynczych liczb oznaczaj\u0105cych wielko\u015bci pr\xf3bek, kt\xf3re mo\u017cna pobra\u0107. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"25"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"populationProbabilities")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": czy nale\u017cy wy\u015bwietla\u0107 r\xf3wnania do obliczania prawdopodobie\u0144stwa populacji. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"quantiles")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": czy pokazywa\u0107 narz\u0119dzie do obliczania dowolnych kwantyli\xf3w. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"variables")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array (required)"),": nazwy zmiennych, z kt\xf3rych mo\u017cna pobiera\u0107 pr\xf3bki. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),".")),Object(i.b)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnSampleCLT />\n")))}b.isMDXComponent=!0},409:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),b=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=b(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=b(t),s=a,m=u["".concat(o,".").concat(s)]||u[s]||d[s]||i;return t?r.a.createElement(m,l(l({ref:n},p),{},{components:t})):r.a.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);