"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9539],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},129111:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(487462),a=n(263366),o=(n(202784),n(603905)),i=["components"],l={id:"anova",title:"ANOVA",sidebar_label:"ANOVA"},s=void 0,c={unversionedId:"tests/anova",id:"tests/anova",title:"ANOVA",description:"An\xe1lise de vari\xe2ncia.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/tests/anova.md",sourceDirName:"tests",slug:"/tests/anova",permalink:"/pt/docs/tests/anova",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tests/anova.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614463997,formattedLastUpdatedAt:"27/02/2021",frontMatter:{id:"anova",title:"ANOVA",sidebar_label:"ANOVA"},sidebar:"docs",previous:{title:"Frequency Table",permalink:"/pt/docs/tables/frequency-table"},next:{title:"Chi-square Independence Test",permalink:"/pt/docs/tests/chi2"}},u={},p=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"Exemplos",id:"exemplos",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An\xe1lise de vari\xe2ncia."),(0,o.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"data")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object (required)"),": objeto de arrays de valor. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"variable")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string (required)"),": nome da vari\xe1vel a ser exibida. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"group")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": nome da vari\xe1vel de agrupamento. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"showDecision")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": controla se a decis\xe3o de teste deve ser exibida. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,o.kt)("h2",{id:"exemplos"},"Exemplos"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Anova\n    data={heartdisease} \n    variable="Cost"\n    group="Drugs"\n/>\n')))}m.isMDXComponent=!0}}]);