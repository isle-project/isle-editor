"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5305],{603905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(202784);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(t),f=i,m=p["".concat(c,".").concat(f)]||p[f]||s[f]||o;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},434322:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var r=t(487462),i=t(263366),o=(t(202784),t(603905)),a=["components"],l={id:"confidence-coverage-binomial",title:"Confidence Interval Coverage Binomial",sidebar_label:"Confidence Interval Coverage Binomial"},c=void 0,d={unversionedId:"learn/confidence-coverage-binomial",id:"learn/confidence-coverage-binomial",title:"Confidence Interval Coverage Binomial",description:"Eine Lernkomponente, die die Abdeckung von Konfidenzintervallen f\xfcr den Mittelwert einer Binomialverteilung veranschaulicht.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/learn/confidence-coverage-binomial.md",sourceDirName:"learn",slug:"/learn/confidence-coverage-binomial",permalink:"/de/docs/learn/confidence-coverage-binomial",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/confidence-coverage-binomial.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21.2.2021",frontMatter:{id:"confidence-coverage-binomial",title:"Confidence Interval Coverage Binomial",sidebar_label:"Confidence Interval Coverage Binomial"},sidebar:"docs",previous:{title:"Conditional Probability",permalink:"/de/docs/learn/conditional-probability"},next:{title:"Confidence Interval Coverage Normal",permalink:"/de/docs/learn/confidence-coverage-normal"}},u=[{value:"Optionen",id:"optionen",children:[],level:2},{value:"Beispiele",id:"beispiele",children:[],level:2}],s={toc:u};function p(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Eine Lernkomponente, die die Abdeckung von Konfidenzintervallen f\xfcr den Mittelwert einer Binomialverteilung veranschaulicht."),(0,o.kt)("h2",{id:"optionen"},"Optionen"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"intro")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(node|string)"),": \xfcberschreibt den standardm\xe4\xdfigen (interaktiven) Introtext. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"quartileNotation")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob die Quartilsschreibweise im Einleitungstext verwendet werden soll. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"sampleStats")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob man bei der Berechnung des Standardfehlers zwischen der Verwendung des Stichprobenanteils oder der bekannten Erfolgswahrscheinlichkeit der Grundgesamtheit wechseln kann. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,o.kt)("h2",{id:"beispiele"},"Beispiele"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnConfidenceCoverageBinomial />\n")))}p.isMDXComponent=!0}}]);