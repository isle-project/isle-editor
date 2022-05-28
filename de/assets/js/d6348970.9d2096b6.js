"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[76688],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},361267:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return k}});var r=n(603905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&u(e,n,t[n]);return e};const d={id:"meantest",title:"One-Sample Mean Test",sidebar_label:"One-Sample Mean Test"},m=void 0,f={unversionedId:"tests/meantest",id:"tests/meantest",title:"One-Sample Mean Test",description:"Mittelwerttest bei einer Stichprobe.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/tests/meantest.md",sourceDirName:"tests",slug:"/tests/meantest",permalink:"/de/docs/tests/meantest",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tests/meantest.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19.6.2021",frontMatter:{id:"meantest",title:"One-Sample Mean Test",sidebar_label:"One-Sample Mean Test"},sidebar:"docs",previous:{title:"Kruskal Test",permalink:"/de/docs/tests/kruskal"},next:{title:"Two-Sample Mean Test",permalink:"/de/docs/tests/meantest2"}},b={},k=[{value:"Optionen",id:"optionen",level:2},{value:"Beispiele",id:"beispiele",level:2}],g={toc:k};function y(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},g),u),i(t,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Mittelwerttest bei einer Stichprobe."),(0,r.kt)("h2",c({},{id:"optionen"}),"Optionen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object (required)"),": Objekt von Werte-Arrays. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"variable")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string (required)"),": Name der Variablen. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": Art des Tests (",(0,r.kt)("inlineCode",{parentName:"li"},"Z-Test")," oder ",(0,r.kt)("inlineCode",{parentName:"li"},"T-Test"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'T Test'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"stdev")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),': Standardabweichung (f\xfcr "Z-Test"). Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"alpha")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": Signifikanzniveau. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0.05"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"direction")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": Testrichtung (entweder ",(0,r.kt)("inlineCode",{parentName:"li"},"less"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"greater"),", oder ",(0,r.kt)("inlineCode",{parentName:"li"},"two-sided"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'two-sided'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"mu0")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": Mittelwert unter der Nullhypothese. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"showDecision")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob angezeigt werden soll, wenn die Nullhypothese bei dem angegebenen Signifikanzniveau abgelehnt wird. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,r.kt)("h2",c({},{id:"beispiele"}),"Beispiele"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<MeanTest\n    data={heartdisease} \n    variable="Drugs"\n/>\n')))}y.isMDXComponent=!0}}]);