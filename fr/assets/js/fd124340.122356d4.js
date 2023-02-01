"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[70318],{603905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return m}});var t=r(202784);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(r),f=o,m=s["".concat(c,".").concat(f)]||s[f]||d[f]||a;return r?t.createElement(m,l(l({ref:n},p),{},{components:r})):t.createElement(m,l({ref:n},p))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},40100:function(e,n,r){r.r(n),r.d(n,{assets:function(){return v},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return g}});var t=r(603905),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,n,r)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,s=(e,n)=>{for(var r in n||(n={}))c.call(n,r)&&p(e,r,n[r]);if(i)for(var r of i(n))u.call(n,r)&&p(e,r,n[r]);return e};const d={id:"confidence-coverage-normal",title:"Confidence Interval Coverage Normal",sidebar_label:"Confidence Interval Coverage Normal"},f=void 0,m={unversionedId:"learn/confidence-coverage-normal",id:"learn/confidence-coverage-normal",title:"Confidence Interval Coverage Normal",description:"Un \xe9l\xe9ment d'apprentissage illustrant la couverture des intervalles de confiance pour la moyenne d'une distribution normale.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/learn/confidence-coverage-normal.md",sourceDirName:"learn",slug:"/learn/confidence-coverage-normal",permalink:"/fr/docs/learn/confidence-coverage-normal",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/confidence-coverage-normal.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"22 f\xe9vr. 2021",frontMatter:{id:"confidence-coverage-normal",title:"Confidence Interval Coverage Normal",sidebar_label:"Confidence Interval Coverage Normal"},sidebar:"docs",previous:{title:"Confidence Interval Coverage Binomial",permalink:"/fr/docs/learn/confidence-coverage-binomial"},next:{title:"Confidence Interval Coverage Sample",permalink:"/fr/docs/learn/confidence-coverage-sample"}},v={},g=[{value:"Options",id:"options",level:2},{value:"Exemples",id:"exemples",level:2}],b={toc:g};function y(e){var n,r=e,{components:o}=r,p=((e,n)=>{var r={};for(var t in e)c.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&i)for(var t of i(e))n.indexOf(t)<0&&u.call(e,t)&&(r[t]=e[t]);return r})(r,["components"]);return(0,t.kt)("wrapper",(n=s(s({},b),p),a(n,l({components:o,mdxType:"MDXLayout"}))),(0,t.kt)("p",null,"Un \xe9l\xe9ment d'apprentissage illustrant la couverture des intervalles de confiance pour la moyenne d'une distribution normale."),(0,t.kt)("h2",s({},{id:"options"}),"Options"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"intro")," | ",(0,t.kt)("inlineCode",{parentName:"li"},"(node|string)"),": remplace le texte d'introduction par d\xe9faut (interactif). Default: ",(0,t.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"quartileNotation")," | ",(0,t.kt)("inlineCode",{parentName:"li"},"boolean"),': contr\xf4le si l\'on doit utiliser "alpha/2" comme indice de la valeur critique ou seulement "critique. Default: ',(0,t.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"sampleStats")," | ",(0,t.kt)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si l'on doit pouvoir passer de l'utilisation de l'\xe9cart-type de l'\xe9chantillon \xe0 celle de l'\xe9cart-type de la population connue lors du calcul de l'erreur type. Default: ",(0,t.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,t.kt)("h2",s({},{id:"exemples"}),"Exemples"),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LearnConfidenceCoverageNormal />\n")))}y.isMDXComponent=!0}}]);