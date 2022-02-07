"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8033],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96644:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=n(487462),a=n(263366),i=(n(202784),n(603905)),o=["components"],l={id:"clt-continuous",title:"Continuous CLT",sidebar_label:"Continuous CLT"},u=void 0,s={unversionedId:"learn/clt-continuous",id:"learn/clt-continuous",title:"Continuous CLT",description:"Oppimiskomponentti, joka havainnollistaa CLT-teoremin (Central Limit Theorem) valitulle jatkuvalle jakaumalle.",source:"@site/i18n/fi/docusaurus-plugin-content-docs/current/learn/clt-continuous.md",sourceDirName:"learn",slug:"/learn/clt-continuous",permalink:"/fi/docs/learn/clt-continuous",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/clt-continuous.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1.6.2021",frontMatter:{id:"clt-continuous",title:"Continuous CLT",sidebar_label:"Continuous CLT"},sidebar:"docs",previous:{title:"Causality Diagram",permalink:"/fi/docs/learn/causality-diagram"},next:{title:"Discrete CLT",permalink:"/fi/docs/learn/clt-discrete"}},c=[{value:"Vaihtoehdot",id:"vaihtoehdot",children:[],level:2},{value:"Esimerkkej\xe4",id:"esimerkkej\xe4",children:[],level:2}],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Oppimiskomponentti, joka havainnollistaa CLT-teoremin (Central Limit Theorem) valitulle jatkuvalle jakaumalle."),(0,i.kt)("h2",{id:"vaihtoehdot"},"Vaihtoehdot"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"distributions")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array<string>"),': valittavissa olevat tilastolliset jakaumat ("tasainen", "eksponentiaalinen" ja/tai "normaali").. Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"[\n  'uniform',\n  'exponential',\n  'normal'\n]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"samples")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(array<number>|number)"),": numerosarja tai yksitt\xe4inen numero, joka ilmaisee otoskokoja, jotka voidaan ottaa.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"25"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"hideFormulas")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": ohjaa, piilotetaanko kaavat komponentin tekstiss\xe4.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,i.kt)("h2",{id:"esimerkkej\xe4"},"Esimerkkej\xe4"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnContinuousCLT />\n")))}m.isMDXComponent=!0}}]);