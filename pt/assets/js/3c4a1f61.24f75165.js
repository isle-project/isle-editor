(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{166:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return l})),r.d(n,"default",(function(){return u}));var t=r(3),a=r(7),o=(r(0),r(411)),i={id:"confidence-coverage-normal",title:"Confidence Interval Coverage Normal",sidebar_label:"Confidence Interval Coverage Normal"},c={unversionedId:"learn/confidence-coverage-normal",id:"learn/confidence-coverage-normal",isDocsHomePage:!1,title:"Confidence Interval Coverage Normal",description:"Um componente de aprendizagem que ilustra a cobertura dos intervalos de confian\xe7a para a m\xe9dia de uma distribui\xe7\xe3o normal.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/learn/confidence-coverage-normal.md",slug:"/learn/confidence-coverage-normal",permalink:"/pt/docs/learn/confidence-coverage-normal",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/confidence-coverage-normal.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Confidence Interval Coverage Normal",sidebar:"docs",previous:{title:"Confidence Interval Coverage Binomial",permalink:"/pt/docs/learn/confidence-coverage-binomial"},next:{title:"Confidence Interval Coverage Sample",permalink:"/pt/docs/learn/confidence-coverage-sample"}},l=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",children:[]},{value:"Exemplos",id:"exemplos",children:[]}],p={toc:l};function u(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},p,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Um componente de aprendizagem que ilustra a cobertura dos intervalos de confian\xe7a para a m\xe9dia de uma distribui\xe7\xe3o normal."),Object(o.b)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"intro")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(node|string)"),": anula o texto de introdu\xe7\xe3o padr\xe3o (interativo). Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"quartileNotation")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),': controla se deve utilizar "alfa/2" como subscrito para o valor cr\xedtico ou apenas "cr\xedtico".. Default: ',Object(o.b)("inlineCode",{parentName:"li"},"true"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"sampleStats")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": controla se \xe9 poss\xedvel alternar entre a utiliza\xe7\xe3o do desvio padr\xe3o da amostra ou o desvio padr\xe3o da popula\xe7\xe3o conhecido ao calcular o erro padr\xe3o. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"true"),".")),Object(o.b)("h2",{id:"exemplos"},"Exemplos"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnConfidenceCoverageNormal />\n")))}u.isMDXComponent=!0},411:function(e,n,r){"use strict";r.d(n,"a",(function(){return d})),r.d(n,"b",(function(){return b}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},d=function(e){var n=u(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=t,b=d["".concat(i,".").concat(m)]||d[m]||s[m]||o;return r?a.a.createElement(b,c(c({ref:n},p),{},{components:r})):a.a.createElement(b,c({ref:n},p))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);