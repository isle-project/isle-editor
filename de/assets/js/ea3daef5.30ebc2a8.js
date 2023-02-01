"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73760],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},558454:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return f},metadata:function(){return m},toc:function(){return g}});var r=n(603905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&c(e,n,t[n]);return e};const f={id:"hypothesis-testing-proportion",title:"Hypothesis Testing for Proportions",sidebar_label:"Hypothesis Testing for Proportions"},d=void 0,m={unversionedId:"learn/hypothesis-testing-proportion",id:"learn/hypothesis-testing-proportion",title:"Hypothesis Testing for Proportions",description:"Eine Lernkomponente zu Hypothesentests f\xfcr einen Bev\xf6lkerungsanteil.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/learn/hypothesis-testing-proportion.md",sourceDirName:"learn",slug:"/learn/hypothesis-testing-proportion",permalink:"/de/docs/learn/hypothesis-testing-proportion",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/hypothesis-testing-proportion.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1617919341,formattedLastUpdatedAt:"8. Apr. 2021",frontMatter:{id:"hypothesis-testing-proportion",title:"Hypothesis Testing for Proportions",sidebar_label:"Hypothesis Testing for Proportions"},sidebar:"docs",previous:{title:"Hypothesis Testing for Means",permalink:"/de/docs/learn/hypothesis-testing-mean"},next:{title:"Image Pixel Picker",permalink:"/de/docs/learn/image-pixel-picker"}},y={},g=[{value:"Optionen",id:"optionen",level:2},{value:"Beispiele",id:"beispiele",level:2}],b={toc:g};function h(e){var t,n=e,{components:i}=n,c=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},b),c),o(t,a({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Eine Lernkomponente zu Hypothesentests f\xfcr einen Bev\xf6lkerungsanteil."),(0,r.kt)("h2",u({},{id:"optionen"}),"Optionen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"types")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<string>"),": die Art(en) des Tests (",(0,r.kt)("inlineCode",{parentName:"li"},"Eine-Stichprobe"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Zwei-Stichprobe"),"), die das Widget darstellen soll. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[\n  'One-Sample',\n  'Two-Sample'\n]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"feedback")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob Feedback-Tasten angezeigt werden sollen. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"nullHypothesisAsValue")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": die Nullhypothese immer als Einzelwert anzeigen. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"pValue")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": benutzerdefinierte Beschriftung f\xfcr den p-Wert (sollte eine LaTeX-Gleichungszeichenfolge sein). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS-Inline-Stile. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,r.kt)("h2",u({},{id:"beispiele"}),"Beispiele"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LearnProportionTest />\n")))}h.isMDXComponent=!0}}]);