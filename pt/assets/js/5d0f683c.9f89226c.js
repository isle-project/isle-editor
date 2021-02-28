(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{195:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(7),i=(a(0),a(409)),o={id:"causality-diagram",title:"Causality Diagram",sidebar_label:"Causality Diagram"},l={unversionedId:"learn/causality-diagram",id:"learn/causality-diagram",isDocsHomePage:!1,title:"Causality Diagram",description:"Um componente de aprendizagem que ilustra o impacto de uma vari\xe1vel confusa ao avaliar uma rela\xe7\xe3o causal entre duas vari\xe1veis e de aleatoriza\xe7\xe3o.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/learn/causality-diagram.md",slug:"/learn/causality-diagram",permalink:"/pt/docs/learn/causality-diagram",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/causality-diagram.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Causality Diagram",sidebar:"docs",previous:{title:"Unveil",permalink:"/pt/docs/unveil"},next:{title:"Continuous CLT",permalink:"/pt/docs/learn/clt-continuous"}},c=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",children:[]},{value:"Exemplos",id:"exemplos",children:[]}],u={toc:c};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Um componente de aprendizagem que ilustra o impacto de uma vari\xe1vel confusa ao avaliar uma rela\xe7\xe3o causal entre duas vari\xe1veis e de aleatoriza\xe7\xe3o."),Object(i.b)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"x")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|node)"),": nome da vari\xe1vel explicativa. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'Lights at Night'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"y")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|node)"),": nome da vari\xe1vel de resposta. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'Child Myopia'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"z")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|node)"),": nome da vari\xe1vel confundidora. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'Parental Myopia'"),".")),Object(i.b)("h2",{id:"exemplos"},"Exemplos"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<LearnCausalityDiagram x="X" y="Y" z="Z" />\n')))}s.isMDXComponent=!0},409:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return b}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=n.a.createContext({}),s=function(e){var t=n.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,b=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return a?n.a.createElement(b,l(l({ref:t},u),{},{components:a})):n.a.createElement(b,l({ref:t},u))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);