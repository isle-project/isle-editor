"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[318],{603905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(202784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},407063:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return p},toc:function(){return s},default:function(){return m}});var r=t(487462),o=t(263366),a=(t(202784),t(603905)),l=["components"],i={id:"confidence-coverage-normal",title:"Confidence Interval Coverage Normal",sidebar_label:"Confidence Interval Coverage Normal"},c=void 0,u={unversionedId:"learn/confidence-coverage-normal",id:"learn/confidence-coverage-normal",title:"Confidence Interval Coverage Normal",description:"Un \xe9l\xe9ment d'apprentissage illustrant la couverture des intervalles de confiance pour la moyenne d'une distribution normale.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/learn/confidence-coverage-normal.md",sourceDirName:"learn",slug:"/learn/confidence-coverage-normal",permalink:"/fr/docs/learn/confidence-coverage-normal",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/confidence-coverage-normal.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21/02/2021",frontMatter:{id:"confidence-coverage-normal",title:"Confidence Interval Coverage Normal",sidebar_label:"Confidence Interval Coverage Normal"},sidebar:"docs",previous:{title:"Confidence Interval Coverage Binomial",permalink:"/fr/docs/learn/confidence-coverage-binomial"},next:{title:"Confidence Interval Coverage Sample",permalink:"/fr/docs/learn/confidence-coverage-sample"}},p={},s=[{value:"Options",id:"options",level:2},{value:"Exemples",id:"exemples",level:2}],d={toc:s};function m(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Un \xe9l\xe9ment d'apprentissage illustrant la couverture des intervalles de confiance pour la moyenne d'une distribution normale."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"intro")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(node|string)"),": remplace le texte d'introduction par d\xe9faut (interactif). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"quartileNotation")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),': contr\xf4le si l\'on doit utiliser "alpha/2" comme indice de la valeur critique ou seulement "critique. Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"sampleStats")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si l'on doit pouvoir passer de l'utilisation de l'\xe9cart-type de l'\xe9chantillon \xe0 celle de l'\xe9cart-type de la population connue lors du calcul de l'erreur type. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,a.kt)("h2",{id:"exemples"},"Exemples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnConfidenceCoverageNormal />\n")))}m.isMDXComponent=!0}}]);