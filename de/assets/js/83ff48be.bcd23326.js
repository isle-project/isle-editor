"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[39788],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return b}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),b=i,f=s["".concat(c,".").concat(b)]||s[b]||d[b]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},566494:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return b},default:function(){return g},frontMatter:function(){return s},metadata:function(){return f},toc:function(){return y}});var r=n(603905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&u(e,n,t[n]);return e};const s={id:"conditional-probability",title:"Conditional Probability",sidebar_label:"Conditional Probability"},b=void 0,f={unversionedId:"learn/conditional-probability",id:"learn/conditional-probability",title:"Conditional Probability",description:"Eine Lernkomponente, die die bedingte Wahrscheinlichkeit f\xfcr zwei abh\xe4ngige bin\xe4re Variablen darstellt.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/learn/conditional-probability.md",sourceDirName:"learn",slug:"/learn/conditional-probability",permalink:"/de/docs/learn/conditional-probability",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/conditional-probability.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614551296,formattedLastUpdatedAt:"28. Feb. 2021",frontMatter:{id:"conditional-probability",title:"Conditional Probability",sidebar_label:"Conditional Probability"},sidebar:"docs",previous:{title:"CLT Sample",permalink:"/de/docs/learn/clt-sample"},next:{title:"Confidence Interval Coverage Binomial",permalink:"/de/docs/learn/confidence-coverage-binomial"}},m={},y=[{value:"Optionen",id:"optionen",level:2},{value:"Beispiele",id:"beispiele",level:2}],v={toc:y};function g(e){var t,n=e,{components:i}=n,u=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},v),u),o(t,a({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Eine Lernkomponente, die die bedingte Wahrscheinlichkeit f\xfcr zwei abh\xe4ngige bin\xe4re Variablen darstellt."),(0,r.kt)("h2",d({},{id:"optionen"}),"Optionen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"A")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": erste Variable. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'A'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"B")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": zweite Variable. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'B'"),".")),(0,r.kt)("h2",d({},{id:"beispiele"}),"Beispiele"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LearnConditionalProbability />\n")))}g.isMDXComponent=!0}}]);