"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2121],{603905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(202784);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,b=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return t?r.createElement(b,o(o({ref:n},p),{},{components:t})):r.createElement(b,o({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},603300:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=t(487462),i=t(263366),a=(t(202784),t(603905)),o=["components"],l={id:"distribution-normal",title:"Normal Distribution",sidebar_label:"Normal Distribution"},u=void 0,s={unversionedId:"learn/distribution-normal",id:"learn/distribution-normal",title:"Normal Distribution",description:"Een leercomponent voor het berekenen van de waarschijnlijkheid van een normale verdeling.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/learn/distribution-normal.md",sourceDirName:"learn",slug:"/learn/distribution-normal",permalink:"/nl/docs/learn/distribution-normal",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-normal.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21-2-2021",frontMatter:{id:"distribution-normal",title:"Normal Distribution",sidebar_label:"Normal Distribution"},sidebar:"docs",previous:{title:"Negative Binomial Distribution",permalink:"/nl/docs/learn/distribution-negative-binomial"},next:{title:"Poisson Distribution",permalink:"/nl/docs/learn/distribution-poisson"}},p=[{value:"Opties",id:"opties",children:[],level:2},{value:"Voorbeelden",id:"voorbeelden",children:[],level:2}],c={toc:p};function d(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Een leercomponent voor het berekenen van de waarschijnlijkheid van een normale verdeling."),(0,a.kt)("h2",{id:"opties"},"Opties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"domain")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": object van ",(0,a.kt)("inlineCode",{parentName:"li"},"x")," en ",(0,a.kt)("inlineCode",{parentName:"li"},"y")," arrays met de begin- en eindpunten voor de respectievelijke as. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hideCDF")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": controleert of de CDF-plots worden verborgen. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"minStDev")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": minimale standaardafwijking. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"step")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(number|string)"),": stapgrootte van de scroll-ingang. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"0.01"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"tabs")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<string>"),": welke tabbladen moeten worden weergegeven (ofwel ",(0,a.kt)("inlineCode",{parentName:"li"},"kleiner"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"groter"),", of ",(0,a.kt)("inlineCode",{parentName:"li"},"schaal"),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[\n  'smaller',\n  'greater',\n  'range'\n]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline-stijlen. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,a.kt)("h2",{id:"voorbeelden"},"Voorbeelden"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnNormalDistribution />\n")))}d.isMDXComponent=!0}}]);