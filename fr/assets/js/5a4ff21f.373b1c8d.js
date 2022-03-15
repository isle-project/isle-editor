"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[993],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),f=a,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},909415:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},assets:function(){return c},toc:function(){return p},default:function(){return f}});var r=n(487462),a=n(263366),i=(n(202784),n(603905)),o=["components"],l={id:"standardize",title:"Standardization",sidebar_label:"Standardization"},s=void 0,d={unversionedId:"learn/standardize",id:"learn/standardize",title:"Standardization",description:"Composante d'apprentissage expliquant le processus de normalisation des donn\xe9es.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/learn/standardize.md",sourceDirName:"learn",slug:"/learn/standardize",permalink:"/fr/docs/learn/standardize",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/standardize.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621312042,formattedLastUpdatedAt:"18/05/2021",frontMatter:{id:"standardize",title:"Standardization",sidebar_label:"Standardization"},sidebar:"docs",previous:{title:"State of the Union Speeches",permalink:"/fr/docs/learn/sotu"},next:{title:"Statistical Models",permalink:"/fr/docs/learn/statistical-models"}},c={},p=[{value:"Options",id:"options",level:2},{value:"Exemples",id:"exemples",level:2}],u={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Composante d'apprentissage expliquant le processus de normalisation des donn\xe9es."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"showProbabilities")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le l'affichage ou non des probabilit\xe9s. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"step")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(number|string)"),": la taille de l'\xe9tape de la saisie du d\xe9filement. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'any'"),".")),(0,i.kt)("h2",{id:"exemples"},"Exemples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnStandardize />\n")))}f.isMDXComponent=!0}}]);