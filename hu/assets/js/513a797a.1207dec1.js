"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9536],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},115452:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(487462),a=n(263366),o=(n(202784),n(603905)),l=["components"],i={id:"confidence-coverage-sample",title:"Confidence Interval Coverage Sample",sidebar_label:"Confidence Interval Coverage Sample"},c=void 0,u={unversionedId:"learn/confidence-coverage-sample",id:"learn/confidence-coverage-sample",title:"Confidence Interval Coverage Sample",description:"Egy tanul\xe1si komponens, amely a k\xf6zponti hat\xe1r\xe9rt\xe9kt\xe9telt (CLT) szeml\xe9lteti egy megadott adathalmazb\xf3l t\xf6rt\xe9n\u0151 mintav\xe9telez\xe9skor.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/learn/confidence-coverage-sample.md",sourceDirName:"learn",slug:"/learn/confidence-coverage-sample",permalink:"/hu/docs/learn/confidence-coverage-sample",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/confidence-coverage-sample.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021. 06. 01.",frontMatter:{id:"confidence-coverage-sample",title:"Confidence Interval Coverage Sample",sidebar_label:"Confidence Interval Coverage Sample"},sidebar:"docs",previous:{title:"Confidence Interval Coverage Normal",permalink:"/hu/docs/learn/confidence-coverage-normal"},next:{title:"Continuous Distribution",permalink:"/hu/docs/learn/continuous-distribution"}},p=[{value:"Opci\xf3k",id:"opci\xf3k",children:[],level:2},{value:"P\xe9ld\xe1k",id:"p\xe9ld\xe1k",children:[],level:2}],s={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Egy tanul\xe1si komponens, amely a k\xf6zponti hat\xe1r\xe9rt\xe9kt\xe9telt (CLT) szeml\xe9lteti egy megadott adathalmazb\xf3l t\xf6rt\xe9n\u0151 mintav\xe9telez\xe9skor."),(0,o.kt)("h2",{id:"opci\xf3k"},"Opci\xf3k"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"data")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object (required)"),": adatobjektum, amelynek kulcsai megfelelnek a v\xe1ltoz\xf3k nev\xe9nek, az \xe9rt\xe9kek pedig a megfelel\u0151 v\xe1ltoz\xf3k \xe9rt\xe9keit tartalmazz\xe1k.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"samples")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(array<number>|number)"),": sz\xe1mok t\xf6mbje vagy egyetlen sz\xe1m, amely a kisorsolhat\xf3 mintanagys\xe1gokat jel\xf6li.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"25"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"variables")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"array (required)"),": olyan v\xe1ltoz\xf3k nevei, amelyekb\u0151l mint\xe1t lehet venni. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,o.kt)("h2",{id:"p\xe9ld\xe1k"},"P\xe9ld\xe1k"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnConfidenceCoverageSample \n    data={heartdisease} \n    variables={[ 'Gender', 'Drugs', 'Complications', 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}\n/>\n")))}m.isMDXComponent=!0}}]);