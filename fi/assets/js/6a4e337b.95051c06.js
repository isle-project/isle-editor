"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2854],{603905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(202784);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=i,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},54153:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=t(487462),i=t(263366),a=(t(202784),t(603905)),o=["components"],l={id:"confidence-coverage-binomial",title:"Confidence Interval Coverage Binomial",sidebar_label:"Confidence Interval Coverage Binomial"},c=void 0,u={unversionedId:"learn/confidence-coverage-binomial",id:"learn/confidence-coverage-binomial",title:"Confidence Interval Coverage Binomial",description:"Oppimiskomponentti, joka havainnollistaa binomijakauman keskiarvon luottamusv\xe4lien kattavuutta.",source:"@site/i18n/fi/docusaurus-plugin-content-docs/current/learn/confidence-coverage-binomial.md",sourceDirName:"learn",slug:"/learn/confidence-coverage-binomial",permalink:"/fi/docs/learn/confidence-coverage-binomial",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/confidence-coverage-binomial.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1.6.2021",frontMatter:{id:"confidence-coverage-binomial",title:"Confidence Interval Coverage Binomial",sidebar_label:"Confidence Interval Coverage Binomial"},sidebar:"docs",previous:{title:"Conditional Probability",permalink:"/fi/docs/learn/conditional-probability"},next:{title:"Confidence Interval Coverage Normal",permalink:"/fi/docs/learn/confidence-coverage-normal"}},s=[{value:"Vaihtoehdot",id:"vaihtoehdot",children:[],level:2},{value:"Esimerkkej\xe4",id:"esimerkkej\xe4",children:[],level:2}],p={toc:s};function d(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Oppimiskomponentti, joka havainnollistaa binomijakauman keskiarvon luottamusv\xe4lien kattavuutta."),(0,a.kt)("h2",{id:"vaihtoehdot"},"Vaihtoehdot"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"intro")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(node|string)"),": ohittaa oletusarvoisen (interaktiivisen) esittelytekstin. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"quartileNotation")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": valvoo, k\xe4ytet\xe4\xe4nk\xf6 intro-tekstiss\xe4 kvartiilimerkint\xe4\xe4.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"sampleStats")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": valvoo, pit\xe4isik\xf6 keskivirhett\xe4 laskettaessa voida vaihtaa otoksen osuuden tai tunnetun populaation menestymistodenn\xe4k\xf6isyyden k\xe4yt\xf6n v\xe4lill\xe4.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,a.kt)("h2",{id:"esimerkkej\xe4"},"Esimerkkej\xe4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnConfidenceCoverageBinomial />\n")))}d.isMDXComponent=!0}}]);