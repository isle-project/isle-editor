"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7302],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},524663:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},assets:function(){return s},toc:function(){return c},default:function(){return m}});var r=n(487462),i=n(263366),a=(n(202784),n(603905)),o=["components"],l={id:"distribution-exponential",title:"Exponential Distribution",sidebar_label:"Exponential Distribution"},u=void 0,p={unversionedId:"learn/distribution-exponential",id:"learn/distribution-exponential",title:"Exponential Distribution",description:"Eine Lernkomponente zur Berechnung von Wahrscheinlichkeiten einer Exponentialverteilung.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/learn/distribution-exponential.md",sourceDirName:"learn",slug:"/learn/distribution-exponential",permalink:"/de/docs/learn/distribution-exponential",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-exponential.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21.2.2021",frontMatter:{id:"distribution-exponential",title:"Exponential Distribution",sidebar_label:"Exponential Distribution"},sidebar:"docs",previous:{title:"Chi-squared Distribution",permalink:"/de/docs/learn/distribution-chisquare"},next:{title:"F Distribution",permalink:"/de/docs/learn/distribution-f"}},s={},c=[{value:"Optionen",id:"optionen",level:2},{value:"Beispiele",id:"beispiele",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Eine Lernkomponente zur Berechnung von Wahrscheinlichkeiten einer Exponentialverteilung."),(0,a.kt)("h2",{id:"optionen"},"Optionen"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hideCDF")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob die CDF-Darstellungen ausgeblendet werden sollen. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"step")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(number|string)"),": Schrittweite des Scrolleingangs. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"0.01"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"maxRate")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": maximaler Ratenparameter, der im Eingabefeld gew\xe4hlt werden kann. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"minRate")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": minimaler Rate-Parameter, der im Eingabefeld gew\xe4hlt werden kann. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"0.001"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS-Inline-Stile. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,a.kt)("h2",{id:"beispiele"},"Beispiele"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnExponentialDistribution />\n")))}m.isMDXComponent=!0}}]);