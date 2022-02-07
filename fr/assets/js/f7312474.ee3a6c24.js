"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[745],{603905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(202784);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},825071:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=r(487462),i=r(263366),a=(r(202784),r(603905)),o=["components"],l={id:"distribution-chisquare",title:"Chi-squared Distribution",sidebar_label:"Chi-squared Distribution"},s=void 0,u={unversionedId:"learn/distribution-chisquare",id:"learn/distribution-chisquare",title:"Chi-squared Distribution",description:"Une composante d'apprentissage pour le calcul des probabilit\xe9s d'une distribution chi carr\xe9.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/learn/distribution-chisquare.md",sourceDirName:"learn",slug:"/learn/distribution-chisquare",permalink:"/fr/docs/learn/distribution-chisquare",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-chisquare.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21/02/2021",frontMatter:{id:"distribution-chisquare",title:"Chi-squared Distribution",sidebar_label:"Chi-squared Distribution"},sidebar:"docs",previous:{title:"Binomial Distribution",permalink:"/fr/docs/learn/distribution-binomial"},next:{title:"Exponential Distribution",permalink:"/fr/docs/learn/distribution-exponential"}},c=[{value:"Options",id:"options",children:[],level:2},{value:"Exemples",id:"exemples",children:[],level:2}],p={toc:c};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Une composante d'apprentissage pour le calcul des probabilit\xe9s d'une distribution chi carr\xe9."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"step")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(number|string)"),": la taille de l'\xe9tape de la saisie du d\xe9filement. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"0.01"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"maxDF")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": les degr\xe9s de libert\xe9 maximums qui peuvent \xeatre choisis dans le champ de saisie. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"50"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"minDF")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": les degr\xe9s de libert\xe9 minimums qui peuvent \xeatre choisis dans le champ de saisie. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": Styles CSS en ligne. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,a.kt)("h2",{id:"exemples"},"Exemples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnChisquareDistribution />\n")))}d.isMDXComponent=!0}}]);