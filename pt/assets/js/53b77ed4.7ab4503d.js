(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{188:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(411)),o={id:"corrtest",title:"Correlation Test",sidebar_label:"Correlation Test"},l={unversionedId:"tests/corrtest",id:"tests/corrtest",isDocsHomePage:!1,title:"Correlation Test",description:"Teste de correla\xe7\xe3o.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/tests/corrtest.md",slug:"/tests/corrtest",permalink:"/pt/docs/tests/corrtest",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tests/corrtest.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Correlation Test",sidebar:"docs",previous:{title:"Chi-square Independence Test",permalink:"/pt/docs/tests/chi2"},next:{title:"Kruskal Test",permalink:"/pt/docs/tests/kruskal"}},c=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",children:[]},{value:"Exemplos",id:"exemplos",children:[]}],s={toc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Teste de correla\xe7\xe3o."),Object(i.b)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"data")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object (required)"),": objeto de arrays de valor. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"var1")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string (required)"),": nome da primeira vari\xe1vel. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"var2")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string (required)"),": nome da segunda vari\xe1vel. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"rho0")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": valor de correla\xe7\xe3o sob a hip\xf3tese nula. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"0"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"alpha")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": n\xedvel de signific\xe2ncia. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"0.05"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"direction")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),': dire\xe7\xe3o de teste (ou "sem", "maior", ou "de dois lados"). Default: ',Object(i.b)("inlineCode",{parentName:"li"},"'two-sided'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"showDecision")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": controla se a hip\xf3tese nula deve ser rejeitada no n\xedvel de signific\xe2ncia especificado. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),".")),Object(i.b)("h2",{id:"exemplos"},"Exemplos"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<CorrTest\n    data={heartdisease} \n    var1="Cost"\n    var2="Age"\n/>\n')))}p.isMDXComponent=!0},411:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(r),d=n,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return r?a.a.createElement(m,l(l({ref:t},s),{},{components:r})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);