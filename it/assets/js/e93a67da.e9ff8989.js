"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8174],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var i=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),m=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return i.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(n),d=r,f=c["".concat(u,".").concat(d)]||c[d]||s[d]||a;return n?i.createElement(f,o(o({ref:t},p),{},{components:n})):i.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<a;m++)o[m]=n[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},740802:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return m},assets:function(){return p},toc:function(){return s},default:function(){return d}});var i=n(487462),r=n(263366),a=(n(202784),n(603905)),o=["components"],l={id:"distribution-gamma",title:"Gamma Distribution",sidebar_label:"Gamma Distribution"},u=void 0,m={unversionedId:"learn/distribution-gamma",id:"learn/distribution-gamma",title:"Gamma Distribution",description:"Un componente di apprendimento per il calcolo delle probabilit\xe0 di una distribuzione gamma.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/learn/distribution-gamma.md",sourceDirName:"learn",slug:"/learn/distribution-gamma",permalink:"/it/docs/learn/distribution-gamma",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-gamma.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21/2/2021",frontMatter:{id:"distribution-gamma",title:"Gamma Distribution",sidebar_label:"Gamma Distribution"},sidebar:"docs",previous:{title:"F Distribution",permalink:"/it/docs/learn/distribution-f"},next:{title:"Geometric Distribution",permalink:"/it/docs/learn/distribution-geometric"}},p={},s=[{value:"Opzioni",id:"opzioni",level:2},{value:"Esempi",id:"esempi",level:2}],c={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Un componente di apprendimento per il calcolo delle probabilit\xe0 di una distribuzione gamma."),(0,a.kt)("h2",{id:"opzioni"},"Opzioni"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"domain")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": oggetto di array ",(0,a.kt)("inlineCode",{parentName:"li"},"x")," e ",(0,a.kt)("inlineCode",{parentName:"li"},"y")," con i punti iniziali e finali per il rispettivo asse. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"scaleParameterization")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": controlla se utilizzare la parametrizzazione che comporta un parametro di forma e scala invece di forma e velocit\xe0. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"step")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(number|string)"),": dimensione del passo dell'ingresso di scorrimento. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"0.01"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"symbols")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": se visualizzare i simboli greci per i parametri. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"tabs")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<string>"),": quali schede visualizzare (sia ",(0,a.kt)("inlineCode",{parentName:"li"},"piccole"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"greater"),", o ",(0,a.kt)("inlineCode",{parentName:"li"},"range"),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[\n  'smaller',\n  'greater',\n  'range'\n]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": Stili in linea CSS. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,a.kt)("h2",{id:"esempi"},"Esempi"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnGammaDistribution />\n")))}d.isMDXComponent=!0}}]);