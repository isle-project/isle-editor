(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{180:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return o})),i.d(t,"metadata",(function(){return l})),i.d(t,"toc",(function(){return c})),i.d(t,"default",(function(){return u}));var n=i(3),r=i(7),a=(i(0),i(410)),o={id:"distribution-negative-binomial",title:"Negative Binomial Distribution",sidebar_label:"Negative Binomial Distribution"},l={unversionedId:"learn/distribution-negative-binomial",id:"learn/distribution-negative-binomial",isDocsHomePage:!1,title:"Negative Binomial Distribution",description:"Un componente di apprendimento per il calcolo delle probabilit\xe0 di una distribuzione binomiale negativa.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/learn/distribution-negative-binomial.md",slug:"/learn/distribution-negative-binomial",permalink:"/it/docs/learn/distribution-negative-binomial",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-negative-binomial.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21/2/2021",sidebar_label:"Negative Binomial Distribution",sidebar:"docs",previous:{title:"Hypergeometric Distribution",permalink:"/it/docs/learn/distribution-hypergeometric"},next:{title:"Normal Distribution",permalink:"/it/docs/learn/distribution-normal"}},c=[{value:"Opzioni",id:"opzioni",children:[]},{value:"Esempi",id:"esempi",children:[]}],s={toc:c};function u(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Un componente di apprendimento per il calcolo delle probabilit\xe0 di una distribuzione binomiale negativa."),Object(a.b)("h2",{id:"opzioni"},"Opzioni"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"countTrials")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": impostato a true se invece di contare il numero di fallimenti fino al r-esimo successo, una variabile casuale da una distribuzione binomiale negativa dovrebbe essere definita come il numero di prove fino al r-esimo successo. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"step")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(number|string)"),": dimensione del passo dell'ingresso di scorrimento. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"0.01"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"style")," | ",Object(a.b)("inlineCode",{parentName:"li"},"object"),": Stili in linea CSS. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(a.b)("h2",{id:"esempi"},"Esempi"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnNegativeBinomialDistribution />\n")))}u.isMDXComponent=!0},410:function(e,t,i){"use strict";i.d(t,"a",(function(){return b})),i.d(t,"b",(function(){return m}));var n=i(0),r=i.n(n);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(i),d=n,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||a;return i?r.a.createElement(m,l(l({ref:t},s),{},{components:i})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<a;s++)o[s]=i[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,i)}d.displayName="MDXCreateElement"}}]);