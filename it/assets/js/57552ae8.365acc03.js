"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7239],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var i=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),u=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,b=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?i.createElement(b,a(a({ref:t},s),{},{components:n})):i.createElement(b,a({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},573472:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var i=n(487462),r=n(263366),o=(n(202784),n(603905)),a=["components"],l={id:"distribution-exponential",title:"Exponential Distribution",sidebar_label:"Exponential Distribution"},p=void 0,u={unversionedId:"learn/distribution-exponential",id:"learn/distribution-exponential",title:"Exponential Distribution",description:"Una componente di apprendimento per il calcolo delle probabilit\xe0 di una distribuzione esponenziale.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/learn/distribution-exponential.md",sourceDirName:"learn",slug:"/learn/distribution-exponential",permalink:"/it/docs/learn/distribution-exponential",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-exponential.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21/2/2021",frontMatter:{id:"distribution-exponential",title:"Exponential Distribution",sidebar_label:"Exponential Distribution"},sidebar:"docs",previous:{title:"Chi-squared Distribution",permalink:"/it/docs/learn/distribution-chisquare"},next:{title:"F Distribution",permalink:"/it/docs/learn/distribution-f"}},s=[{value:"Opzioni",id:"opzioni",children:[],level:2},{value:"Esempi",id:"esempi",children:[],level:2}],c={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Una componente di apprendimento per il calcolo delle probabilit\xe0 di una distribuzione esponenziale."),(0,o.kt)("h2",{id:"opzioni"},"Opzioni"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"hideCDF")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": controlla se nascondere le trame del CDF. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"step")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(number|string)"),": dimensione del passo dell'ingresso di scorrimento. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"0.01"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"maxRate")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),": parametro di velocit\xe0 massima selezionabile nel campo d'ingresso. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"minRate")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),": parametro di velocit\xe0 minima che pu\xf2 essere scelto nel campo d'ingresso. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"0.001"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"style")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object"),": Stili in linea CSS. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,o.kt)("h2",{id:"esempi"},"Esempi"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnExponentialDistribution />\n")))}d.isMDXComponent=!0}}]);