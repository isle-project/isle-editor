"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46878],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return b}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,b=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(b,a(a({ref:t},p),{},{components:n})):r.createElement(b,a({ref:t},p))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},395616:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return d},metadata:function(){return b},toc:function(){return v}});var r=n(603905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&p(e,n,t[n]);return e};const d={id:"distribution-negative-binomial",title:"Negative Binomial Distribution",sidebar_label:"Negative Binomial Distribution"},m=void 0,b={unversionedId:"learn/distribution-negative-binomial",id:"learn/distribution-negative-binomial",title:"Negative Binomial Distribution",description:"V\xfdukov\xe1 komponenta pro v\xfdpo\u010det pravd\u011bpodobnost\xed z\xe1porn\xe9ho binomick\xe9ho rozd\u011blen\xed.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/learn/distribution-negative-binomial.md",sourceDirName:"learn",slug:"/learn/distribution-negative-binomial",permalink:"/cs/docs/learn/distribution-negative-binomial",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-negative-binomial.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. 6. 2021",frontMatter:{id:"distribution-negative-binomial",title:"Negative Binomial Distribution",sidebar_label:"Negative Binomial Distribution"},sidebar:"docs",previous:{title:"Hypergeometric Distribution",permalink:"/cs/docs/learn/distribution-hypergeometric"},next:{title:"Normal Distribution",permalink:"/cs/docs/learn/distribution-normal"}},f={},v=[{value:"Mo\u017enosti",id:"mo\u017enosti",level:2},{value:"P\u0159\xedklady",id:"p\u0159\xedklady",level:2}],y={toc:v};function g(e){var t,n=e,{components:i}=n,p=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},y),p),o(t,a({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"V\xfdukov\xe1 komponenta pro v\xfdpo\u010det pravd\u011bpodobnost\xed z\xe1porn\xe9ho binomick\xe9ho rozd\u011blen\xed."),(0,r.kt)("h2",c({},{id:"mo\u017enosti"}),"Mo\u017enosti"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"countTrials")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": nastaveno na true, pokud by se m\xedsto po\u010d\xedt\xe1n\xed po\u010dtu ne\xfasp\u011bch\u016f do r-t\xe9ho \xfasp\u011bchu m\u011bla definovat n\xe1hodn\xe1 veli\u010dina ze z\xe1porn\xe9ho binomick\xe9ho rozd\u011blen\xed jako po\u010det pokus\u016f do r-t\xe9ho \xfasp\u011bchu.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"step")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(number|string)"),": velikost kroku posuvn\xe9ho vstupu. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0.01"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": \u0158\xe1dkov\xe9 styly CSS. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,r.kt)("h2",c({},{id:"p\u0159\xedklady"}),"P\u0159\xedklady"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LearnNegativeBinomialDistribution />\n")))}g.isMDXComponent=!0}}]);