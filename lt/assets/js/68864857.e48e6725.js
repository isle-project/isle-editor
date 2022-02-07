"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3180],{603905:function(e,t,i){i.d(t,{Zo:function(){return c},kt:function(){return d}});var n=i(202784);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(i),d=r,b=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return i?n.createElement(b,o(o({ref:t},c),{},{components:i})):n.createElement(b,o({ref:t},c))}));function d(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=i[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},975733:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var n=i(487462),r=i(263366),a=(i(202784),i(603905)),o=["components"],l={id:"distribution-negative-binomial",title:"Negative Binomial Distribution",sidebar_label:"Negative Binomial Distribution"},s=void 0,u={unversionedId:"learn/distribution-negative-binomial",id:"learn/distribution-negative-binomial",title:"Negative Binomial Distribution",description:"Mokymosi komponentas, skirtas neigiamo binominio pasiskirstymo tikimyb\u0117ms apskai\u010diuoti.",source:"@site/i18n/lt/docusaurus-plugin-content-docs/current/learn/distribution-negative-binomial.md",sourceDirName:"learn",slug:"/learn/distribution-negative-binomial",permalink:"/lt/docs/learn/distribution-negative-binomial",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-negative-binomial.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021-06-01",frontMatter:{id:"distribution-negative-binomial",title:"Negative Binomial Distribution",sidebar_label:"Negative Binomial Distribution"},sidebar:"docs",previous:{title:"Hypergeometric Distribution",permalink:"/lt/docs/learn/distribution-hypergeometric"},next:{title:"Normal Distribution",permalink:"/lt/docs/learn/distribution-normal"}},c=[{value:"Parinktys",id:"parinktys",children:[],level:2},{value:"Pavyzd\u017eiai",id:"pavyzd\u017eiai",children:[],level:2}],p={toc:c};function m(e){var t=e.components,i=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Mokymosi komponentas, skirtas neigiamo binominio pasiskirstymo tikimyb\u0117ms apskai\u010diuoti."),(0,a.kt)("h2",{id:"parinktys"},"Parinktys"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"countTrials")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": nustatyta \u012f true, jei vietoj nes\u0117kmi\u0173 skai\u010diaus iki r-tosios s\u0117km\u0117s, atsitiktinis kintamasis i\u0161 neigiamo binominio pasiskirstymo tur\u0117t\u0173 b\u016bti apibr\u0117\u017etas kaip bandym\u0173 skai\u010dius iki r-tosios s\u0117km\u0117s.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"step")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(number|string)"),": slinkties \u012fvesties \u017eingsnio dydis. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"0.01"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS eilut\u0117s stiliai. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,a.kt)("h2",{id:"pavyzd\u017eiai"},"Pavyzd\u017eiai"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnNegativeBinomialDistribution />\n")))}m.isMDXComponent=!0}}]);