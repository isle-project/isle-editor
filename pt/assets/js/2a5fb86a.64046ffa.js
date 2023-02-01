"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[70058],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),b=i,f=s["".concat(c,".").concat(b)]||s[b]||d[b]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},974979:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return b},default:function(){return O},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return y}});var r=n(603905),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&u(e,n,t[n]);return e};const d={id:"conditional-probability",title:"Conditional Probability",sidebar_label:"Conditional Probability"},b=void 0,f={unversionedId:"learn/conditional-probability",id:"learn/conditional-probability",title:"Conditional Probability",description:"Um componente de aprendizagem que ilustra a probabilidade condicional para duas vari\xe1veis bin\xe1rias dependentes.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/learn/conditional-probability.md",sourceDirName:"learn",slug:"/learn/conditional-probability",permalink:"/pt/docs/learn/conditional-probability",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/conditional-probability.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614551296,formattedLastUpdatedAt:"28 de fev. de 2021",frontMatter:{id:"conditional-probability",title:"Conditional Probability",sidebar_label:"Conditional Probability"},sidebar:"docs",previous:{title:"CLT Sample",permalink:"/pt/docs/learn/clt-sample"},next:{title:"Confidence Interval Coverage Binomial",permalink:"/pt/docs/learn/confidence-coverage-binomial"}},m={},y=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"Exemplos",id:"exemplos",level:2}],v={toc:y};function O(e){var t,n=e,{components:i}=n,u=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},v),u),a(t,o({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Um componente de aprendizagem que ilustra a probabilidade condicional para duas vari\xe1veis bin\xe1rias dependentes."),(0,r.kt)("h2",s({},{id:"op\xe7\xf5es"}),"Op\xe7\xf5es"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"A")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": primeira vari\xe1vel. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'A'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"B")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": segunda vari\xe1vel. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'B'"),".")),(0,r.kt)("h2",s({},{id:"exemplos"}),"Exemplos"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LearnConditionalProbability />\n")))}O.isMDXComponent=!0}}]);