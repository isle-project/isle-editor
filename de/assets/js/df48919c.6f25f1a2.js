"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[364],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},485974:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(487462),i=n(263366),a=(n(202784),n(603905)),o=["components"],l={id:"corrtest",title:"Correlation Test",sidebar_label:"Correlation Test"},s=void 0,u={unversionedId:"tests/corrtest",id:"tests/corrtest",title:"Correlation Test",description:"Korrelationstest.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/tests/corrtest.md",sourceDirName:"tests",slug:"/tests/corrtest",permalink:"/de/docs/tests/corrtest",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tests/corrtest.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19.6.2021",frontMatter:{id:"corrtest",title:"Correlation Test",sidebar_label:"Correlation Test"},sidebar:"docs",previous:{title:"Chi-square Independence Test",permalink:"/de/docs/tests/chi2"},next:{title:"Kruskal Test",permalink:"/de/docs/tests/kruskal"}},p={},c=[{value:"Optionen",id:"optionen",level:2},{value:"Beispiele",id:"beispiele",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Korrelationstest."),(0,a.kt)("h2",{id:"optionen"},"Optionen"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"data")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object (required)"),": Objekt von Werte-Arrays. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"var1")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string (required)"),": Name der ersten Variablen. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"var2")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string (required)"),": Name der zweiten Variablen. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"rho0")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": Korrelationswert unter der Nullhypothese. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"alpha")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": Signifikanzniveau. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"0.05"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"direction")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": Testrichtung (entweder ",(0,a.kt)("inlineCode",{parentName:"li"},"less"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"greater"),", oder ",(0,a.kt)("inlineCode",{parentName:"li"},"two-sided"),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'two-sided'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"showDecision")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob angezeigt werden soll, wenn die Nullhypothese bei dem angegebenen Signifikanzniveau abgelehnt wird. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,a.kt)("h2",{id:"beispiele"},"Beispiele"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<CorrTest\n    data={heartdisease} \n    var1="Cost"\n    var2="Age"\n/>\n')))}m.isMDXComponent=!0}}]);