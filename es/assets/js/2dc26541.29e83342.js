"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8725],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},734010:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(487462),a=n(263366),i=(n(202784),n(603905)),o=["components"],l={id:"distribution-beta",title:"Beta Distribution",sidebar_label:"Beta Distribution"},s=void 0,u={unversionedId:"learn/distribution-beta",id:"learn/distribution-beta",title:"Beta Distribution",description:"Un componente de aprendizaje para calcular las probabilidades de una distribuci\xf3n beta.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/learn/distribution-beta.md",sourceDirName:"learn",slug:"/learn/distribution-beta",permalink:"/es/docs/learn/distribution-beta",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-beta.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21/2/2021",frontMatter:{id:"distribution-beta",title:"Beta Distribution",sidebar_label:"Beta Distribution"},sidebar:"docs",previous:{title:"Word Venn Diagram",permalink:"/es/docs/learn/word-venn-diagram"},next:{title:"Binomial Distribution",permalink:"/es/docs/learn/distribution-binomial"}},c={},p=[{value:"Opciones",id:"opciones",level:2},{value:"Ejemplos",id:"ejemplos",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Un componente de aprendizaje para calcular las probabilidades de una distribuci\xf3n beta."),(0,i.kt)("h2",{id:"opciones"},"Opciones"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"domain")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),': objeto de las matrices "x" y "y" con los puntos de inicio y final para el eje respectivo. Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"step")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(number|string)"),": tama\xf1o del paso de la entrada de desplazamiento. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"0.01"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"tabs")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array<string>"),': qu\xe9 pesta\xf1as mostrar (ya sea "m\xe1s peque\xf1o", "m\xe1s grande" o "rango"). Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"[\n  'smaller',\n  'greater',\n  'range'\n]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": Estilos en l\xednea CSS. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,i.kt)("h2",{id:"ejemplos"},"Ejemplos"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnBetaDistribution />\n")))}m.isMDXComponent=!0}}]);