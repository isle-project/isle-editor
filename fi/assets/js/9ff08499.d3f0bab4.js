"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25307],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},445396:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return k}});var r=n(603905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&s(e,n,t[n]);return e};const d={id:"confidence-coverage-sample",title:"Confidence Interval Coverage Sample",sidebar_label:"Confidence Interval Coverage Sample"},m=void 0,f={unversionedId:"learn/confidence-coverage-sample",id:"learn/confidence-coverage-sample",title:"Confidence Interval Coverage Sample",description:"Oppimiskomponentti, joka havainnollistaa CLT-teorian (Central Limit Theorem), kun n\xe4ytteit\xe4 otetaan annetusta datajoukosta.",source:"@site/i18n/fi/docusaurus-plugin-content-docs/current/learn/confidence-coverage-sample.md",sourceDirName:"learn",slug:"/learn/confidence-coverage-sample",permalink:"/fi/docs/learn/confidence-coverage-sample",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/confidence-coverage-sample.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. kes\xe4k. 2021",frontMatter:{id:"confidence-coverage-sample",title:"Confidence Interval Coverage Sample",sidebar_label:"Confidence Interval Coverage Sample"},sidebar:"docs",previous:{title:"Confidence Interval Coverage Normal",permalink:"/fi/docs/learn/confidence-coverage-normal"},next:{title:"Continuous Distribution",permalink:"/fi/docs/learn/continuous-distribution"}},v={},k=[{value:"Vaihtoehdot",id:"vaihtoehdot",level:2},{value:"Esimerkkej\xe4",id:"esimerkkej\xe4",level:2}],b={toc:k};function y(e){var t,n=e,{components:a}=n,s=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},b),s),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Oppimiskomponentti, joka havainnollistaa CLT-teorian (Central Limit Theorem), kun n\xe4ytteit\xe4 otetaan annetusta datajoukosta."),(0,r.kt)("h2",p({},{id:"vaihtoehdot"}),"Vaihtoehdot"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object (required)"),": datakohde, jonka avaimet vastaavat muuttujien nimi\xe4 ja arvot vastaavat muuttujien arvoja.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"samples")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(array<number>|number)"),": numerosarja tai yksitt\xe4inen numero, joka ilmaisee otoskokoja, jotka voidaan ottaa.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"25"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"variables")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array (required)"),": niiden muuttujien nimet, joista voidaan ottaa n\xe4ytteit\xe4.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,r.kt)("h2",p({},{id:"esimerkkej\xe4"}),"Esimerkkej\xe4"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LearnConfidenceCoverageSample \n    data={heartdisease} \n    variables={[ 'Gender', 'Drugs', 'Complications', 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}\n/>\n")))}y.isMDXComponent=!0}}]);