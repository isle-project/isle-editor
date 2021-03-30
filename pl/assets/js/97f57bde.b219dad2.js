(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{233:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),i=r(7),o=(r(0),r(410)),a={id:"distribution-geometric",title:"Geometric Distribution",sidebar_label:"Geometric Distribution"},c={unversionedId:"learn/distribution-geometric",id:"learn/distribution-geometric",isDocsHomePage:!1,title:"Geometric Distribution",description:"Komponent edukacyjny do obliczania prawdopodobie\u0144stwa rozk\u0142adu geometrycznego.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/learn/distribution-geometric.md",slug:"/learn/distribution-geometric",permalink:"/pl/docs/learn/distribution-geometric",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-geometric.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21.02.2021",sidebar_label:"Geometric Distribution",sidebar:"docs",previous:{title:"Gamma Distribution",permalink:"/pl/docs/learn/distribution-gamma"},next:{title:"Hypergeometric Distribution",permalink:"/pl/docs/learn/distribution-hypergeometric"}},l=[{value:"Opcje",id:"opcje",children:[]},{value:"Przyk\u0142ady",id:"przyk\u0142ady",children:[]}],u={toc:l};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Komponent edukacyjny do obliczania prawdopodobie\u0144stwa rozk\u0142adu geometrycznego."),Object(o.b)("h2",{id:"opcje"},"Opcje"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"countTrials")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": ustalone jako prawdziwe, je\u017celi zamiast liczy\u0107 liczb\u0119 niepowodze\u0144 do pierwszego sukcesu, zmienna losowa z rozk\u0142adu geometrycznego powinna by\u0107 okre\u015blona jako liczba pr\xf3b do pierwszego sukcesu. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"step")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(number|string)"),": wielko\u015b\u0107 kroku wej\u015bcia przewijania. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"0.01"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"style")," | ",Object(o.b)("inlineCode",{parentName:"li"},"object"),": Style CSS inline. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(o.b)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnGeometricDistribution />\n")))}p.isMDXComponent=!0},410:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),p=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),d=n,m=s["".concat(a,".").concat(d)]||s[d]||b[d]||o;return r?i.a.createElement(m,c(c({ref:t},u),{},{components:r})):i.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);