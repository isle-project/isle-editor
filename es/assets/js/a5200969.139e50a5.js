(window.webpackJsonp=window.webpackJsonp||[]).push([[1214],{240:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),o=(t(0),t(410)),i={id:"clt-continuous",title:"Continuous CLT",sidebar_label:"Continuous CLT"},l={unversionedId:"learn/clt-continuous",id:"learn/clt-continuous",isDocsHomePage:!1,title:"Continuous CLT",description:"Un componente de aprendizaje que ilustra el Teorema del L\xedmite Central (CLT) para una distribuci\xf3n continua elegida.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/learn/clt-continuous.md",slug:"/learn/clt-continuous",permalink:"/es/docs/learn/clt-continuous",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/clt-continuous.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1616648808,formattedLastUpdatedAt:"25/3/2021",sidebar_label:"Continuous CLT",sidebar:"docs",previous:{title:"Causality Diagram",permalink:"/es/docs/learn/causality-diagram"},next:{title:"Discrete CLT",permalink:"/es/docs/learn/clt-discrete"}},c=[{value:"Opciones",id:"opciones",children:[]},{value:"Ejemplos",id:"ejemplos",children:[]}],u={toc:c};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Un componente de aprendizaje que ilustra el Teorema del L\xedmite Central (CLT) para una distribuci\xf3n continua elegida."),Object(o.b)("h2",{id:"opciones"},"Opciones"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"distributions")," | ",Object(o.b)("inlineCode",{parentName:"li"},"array<string>"),": distribuciones estad\xedsticas a elegir ('uniforme', 'exponencial', y/o 'normal'). Default: ",Object(o.b)("inlineCode",{parentName:"li"},"[\n  'uniform',\n  'exponential',\n  'normal'\n]"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"samples")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(array<number>|number)"),": matriz de n\xfameros o un solo n\xfamero que denota los tama\xf1os de muestra que se pueden extraer. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"25"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"hideFormulas")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": controla si se ocultan las f\xf3rmulas en el texto del componente. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),".")),Object(o.b)("h2",{id:"ejemplos"},"Ejemplos"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnContinuousCLT />\n")))}s.isMDXComponent=!0},410:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return t?a.a.createElement(b,l(l({ref:n},u),{},{components:t})):a.a.createElement(b,l({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);