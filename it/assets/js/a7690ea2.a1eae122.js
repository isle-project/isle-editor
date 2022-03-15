"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7562],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},688977:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},assets:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(487462),i=n(263366),o=(n(202784),n(603905)),a=["components"],l={id:"clt-continuous",title:"Continuous CLT",sidebar_label:"Continuous CLT"},u=void 0,c={unversionedId:"learn/clt-continuous",id:"learn/clt-continuous",title:"Continuous CLT",description:"Una componente di apprendimento che illustra il Teorema del limite centrale (CLT) per una distribuzione continua scelta.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/learn/clt-continuous.md",sourceDirName:"learn",slug:"/learn/clt-continuous",permalink:"/it/docs/learn/clt-continuous",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/clt-continuous.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1616648808,formattedLastUpdatedAt:"25/3/2021",frontMatter:{id:"clt-continuous",title:"Continuous CLT",sidebar_label:"Continuous CLT"},sidebar:"docs",previous:{title:"Causality Diagram",permalink:"/it/docs/learn/causality-diagram"},next:{title:"Discrete CLT",permalink:"/it/docs/learn/clt-discrete"}},s={},p=[{value:"Opzioni",id:"opzioni",level:2},{value:"Esempi",id:"esempi",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Una componente di apprendimento che illustra il Teorema del limite centrale (CLT) per una distribuzione continua scelta."),(0,o.kt)("h2",{id:"opzioni"},"Opzioni"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"distributions")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"array<string>"),': distribuzioni statistiche tra cui scegliere ("uniforme", "esponenziale" e/o "normale"). Default: ',(0,o.kt)("inlineCode",{parentName:"li"},"[\n  'uniform',\n  'exponential',\n  'normal'\n]"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"samples")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(array<number>|number)"),": array di numeri o un singolo numero che denota le dimensioni del campione che pu\xf2 essere estratto. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"25"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"hideFormulas")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": controlla se nascondere le formule nel testo del componente. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,o.kt)("h2",{id:"esempi"},"Esempi"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnContinuousCLT />\n")))}d.isMDXComponent=!0}}]);