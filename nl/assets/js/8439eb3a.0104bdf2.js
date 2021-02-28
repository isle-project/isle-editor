(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{204:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(7),i=(t(0),t(409)),a={id:"clt-continuous",title:"Continuous CLT",sidebar_label:"Continuous CLT"},l={unversionedId:"learn/clt-continuous",id:"learn/clt-continuous",isDocsHomePage:!1,title:"Continuous CLT",description:"Een leercomponent die de Centrale Limietstheorie (CLT) illustreert voor een gekozen continue verdeling.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/learn/clt-continuous.md",slug:"/learn/clt-continuous",permalink:"/nl/docs/learn/clt-continuous",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/clt-continuous.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Continuous CLT",sidebar:"docs",previous:{title:"Causality Diagram",permalink:"/nl/docs/learn/causality-diagram"},next:{title:"Discrete CLT",permalink:"/nl/docs/learn/clt-discrete"}},c=[{value:"Opties",id:"opties",children:[]},{value:"Voorbeelden",id:"voorbeelden",children:[]}],u={toc:c};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Een leercomponent die de Centrale Limietstheorie (CLT) illustreert voor een gekozen continue verdeling."),Object(i.b)("h2",{id:"opties"},"Opties"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"distributions")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array<string>"),': statistische verdelingen om uit te kiezen ("uniform", "exponentieel" en/of "normaal"). Default: ',Object(i.b)("inlineCode",{parentName:"li"},"[\n  'uniform',\n  'exponential',\n  'normal'\n]"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"hideFormulas")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": controleert of de formules in de componententekst moeten worden verborgen. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),".")),Object(i.b)("h2",{id:"voorbeelden"},"Voorbeelden"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnContinuousCLT />\n")))}s.isMDXComponent=!0},409:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),s=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),b=r,m=p["".concat(a,".").concat(b)]||p[b]||d[b]||i;return t?o.a.createElement(m,l(l({ref:n},u),{},{components:t})):o.a.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);