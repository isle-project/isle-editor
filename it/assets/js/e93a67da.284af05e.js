"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48174],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=i,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},515038:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return c},metadata:function(){return f},toc:function(){return g}});var r=n(603905),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&s(e,n,t[n]);return e};const c={id:"distribution-gamma",title:"Gamma Distribution",sidebar_label:"Gamma Distribution"},d=void 0,f={unversionedId:"learn/distribution-gamma",id:"learn/distribution-gamma",title:"Gamma Distribution",description:"Un componente di apprendimento per il calcolo delle probabilit\xe0 di una distribuzione gamma.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/learn/distribution-gamma.md",sourceDirName:"learn",slug:"/learn/distribution-gamma",permalink:"/it/docs/learn/distribution-gamma",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-gamma.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"22 feb 2021",frontMatter:{id:"distribution-gamma",title:"Gamma Distribution",sidebar_label:"Gamma Distribution"},sidebar:"docs",previous:{title:"F Distribution",permalink:"/it/docs/learn/distribution-f"},next:{title:"Geometric Distribution",permalink:"/it/docs/learn/distribution-geometric"}},b={},g=[{value:"Opzioni",id:"opzioni",level:2},{value:"Esempi",id:"esempi",level:2}],y={toc:g};function k(e){var t,n=e,{components:i}=n,s=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},y),s),a(t,o({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Un componente di apprendimento per il calcolo delle probabilit\xe0 di una distribuzione gamma."),(0,r.kt)("h2",m({},{id:"opzioni"}),"Opzioni"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"domain")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": oggetto di array ",(0,r.kt)("inlineCode",{parentName:"li"},"x")," e ",(0,r.kt)("inlineCode",{parentName:"li"},"y")," con i punti iniziali e finali per il rispettivo asse. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"scaleParameterization")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controlla se utilizzare la parametrizzazione che comporta un parametro di forma e scala invece di forma e velocit\xe0. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"step")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(number|string)"),": dimensione del passo dell'ingresso di scorrimento. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0.01"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"symbols")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": se visualizzare i simboli greci per i parametri. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tabs")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<string>"),": quali schede visualizzare (sia ",(0,r.kt)("inlineCode",{parentName:"li"},"piccole"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"greater"),", o ",(0,r.kt)("inlineCode",{parentName:"li"},"range"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[\n  'smaller',\n  'greater',\n  'range'\n]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": Stili in linea CSS. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,r.kt)("h2",m({},{id:"esempi"}),"Esempi"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LearnGammaDistribution />\n")))}k.isMDXComponent=!0}}]);