"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[34807],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},597092:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return k}});var r=n(603905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&p(e,n,t[n]);return e};const m={id:"meantest",title:"One-Sample Mean Test",sidebar_label:"One-Sample Mean Test"},d=void 0,f={unversionedId:"tests/meantest",id:"tests/meantest",title:"One-Sample Mean Test",description:"Test de la moyenne sur un seul \xe9chantillon.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tests/meantest.md",sourceDirName:"tests",slug:"/tests/meantest",permalink:"/fr/docs/tests/meantest",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tests/meantest.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19 juin 2021",frontMatter:{id:"meantest",title:"One-Sample Mean Test",sidebar_label:"One-Sample Mean Test"},sidebar:"docs",previous:{title:"Kruskal Test",permalink:"/fr/docs/tests/kruskal"},next:{title:"Two-Sample Mean Test",permalink:"/fr/docs/tests/meantest2"}},b={},k=[{value:"Options",id:"options",level:2},{value:"Exemples",id:"exemples",level:2}],y={toc:k};function v(e){var t,n=e,{components:a}=n,p=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},y),p),i(t,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Test de la moyenne sur un seul \xe9chantillon."),(0,r.kt)("h2",c({},{id:"options"}),"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object (required)"),": les tableaux d'objets de valeur. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"variable")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string (required)"),": nom de la variable. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),': le type de test ("Test Z" ou "Test T"). Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"'T Test'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"stdev")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),': l\'\xe9cart type (pour le "Test Z"). Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"alpha")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": niveau de signification. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0.05"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"direction")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": la direction du test (soit ",(0,r.kt)("inlineCode",{parentName:"li"},"less"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"greater")," ou ",(0,r.kt)("inlineCode",{parentName:"li"},"two-sided"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'two-sided'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"mu0")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": moyenne sous l'hypoth\xe8se nulle. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"showDecision")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le s'il faut afficher si l'hypoth\xe8se nulle est rejet\xe9e au niveau de signification sp\xe9cifi\xe9. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,r.kt)("h2",c({},{id:"exemples"}),"Exemples"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<MeanTest\n    data={heartdisease} \n    variable="Drugs"\n/>\n')))}v.isMDXComponent=!0}}]);