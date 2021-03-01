(window.webpackJsonp=window.webpackJsonp||[]).push([[364],{304:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),i=(t(0),t(411)),o={id:"causality-diagram",title:"Causality Diagram",sidebar_label:"Causality Diagram"},c={unversionedId:"learn/causality-diagram",id:"learn/causality-diagram",isDocsHomePage:!1,title:"Causality Diagram",description:"Komponent ucz\u0105cy si\u0119 ilustruj\u0105cy wp\u0142yw zagmatwanej zmiennej podczas oceny zwi\u0105zku przyczynowego mi\u0119dzy dwiema zmiennymi oraz randomizacji.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/learn/causality-diagram.md",slug:"/learn/causality-diagram",permalink:"/pl/docs/learn/causality-diagram",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/causality-diagram.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Causality Diagram",sidebar:"docs",previous:{title:"Unveil",permalink:"/pl/docs/unveil"},next:{title:"Continuous CLT",permalink:"/pl/docs/learn/clt-continuous"}},l=[{value:"Opcje",id:"opcje",children:[]},{value:"Przyk\u0142ady",id:"przyk\u0142ady",children:[]}],u={toc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Komponent ucz\u0105cy si\u0119 ilustruj\u0105cy wp\u0142yw zagmatwanej zmiennej podczas oceny zwi\u0105zku przyczynowego mi\u0119dzy dwiema zmiennymi oraz randomizacji."),Object(i.b)("h2",{id:"opcje"},"Opcje"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"x")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|node)"),": nazwa zmiennej obja\u015bniaj\u0105cej. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'Lights at Night'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"y")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|node)"),": nazwa zmiennej odpowiedzi. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'Child Myopia'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"z")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|node)"),": nazwa zmiennej myl\u0105cej. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'Parental Myopia'"),".")),Object(i.b)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<LearnCausalityDiagram x="X" y="Y" z="Z" />\n')))}p.isMDXComponent=!0},411:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return y}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),p=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),m=r,y=s["".concat(o,".").concat(m)]||s[m]||d[m]||i;return t?a.a.createElement(y,c(c({ref:n},u),{},{components:t})):a.a.createElement(y,c({ref:n},u))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);