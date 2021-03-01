(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{176:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),o=(t(0),t(411)),i={id:"confidence-coverage-sample",title:"Confidence Interval Coverage Sample",sidebar_label:"Confidence Interval Coverage Sample"},l={unversionedId:"learn/confidence-coverage-sample",id:"learn/confidence-coverage-sample",isDocsHomePage:!1,title:"Confidence Interval Coverage Sample",description:"Een leercomponent die de Centrale Limietstheorie (CLT) illustreert bij het bemonsteren van een aangeleverde dataset.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/learn/confidence-coverage-sample.md",slug:"/learn/confidence-coverage-sample",permalink:"/nl/docs/learn/confidence-coverage-sample",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/confidence-coverage-sample.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Confidence Interval Coverage Sample",sidebar:"docs",previous:{title:"Confidence Interval Coverage Normal",permalink:"/nl/docs/learn/confidence-coverage-normal"},next:{title:"Continuous Distribution",permalink:"/nl/docs/learn/continuous-distribution"}},c=[{value:"Opties",id:"opties",children:[]},{value:"Voorbeelden",id:"voorbeelden",children:[]}],d={toc:c};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Een leercomponent die de Centrale Limietstheorie (CLT) illustreert bij het bemonsteren van een aangeleverde dataset."),Object(o.b)("h2",{id:"opties"},"Opties"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"data")," | ",Object(o.b)("inlineCode",{parentName:"li"},"object (required)"),": gegevensobject met toetsen komen overeen met namen van variabelen en waarden die de waarden van de respectieve variabelen bevatten. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"samples")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(array<number>|number)"),": array van getallen of een enkel getal dat de te trekken steekproefgroottes aanduidt. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"25"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"variables")," | ",Object(o.b)("inlineCode",{parentName:"li"},"array (required)"),": namen van variabelen die kunnen worden bemonsterd uit. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),".")),Object(o.b)("h2",{id:"voorbeelden"},"Voorbeelden"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnConfidenceCoverageSample />\n")))}p.isMDXComponent=!0},411:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=a.a.createContext({}),p=function(e){var n=a.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return a.a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(t),b=r,m=s["".concat(i,".").concat(b)]||s[b]||u[b]||o;return t?a.a.createElement(m,l(l({ref:n},d),{},{components:t})):a.a.createElement(m,l({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);