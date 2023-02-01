"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42776],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},734140:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return b}});var r=n(603905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&u(e,n,t[n]);return e};const d={id:"hypothesis-testing-mean",title:"Hypothesis Testing for Means",sidebar_label:"Hypothesis Testing for Means"},m=void 0,f={unversionedId:"learn/hypothesis-testing-mean",id:"learn/hypothesis-testing-mean",title:"Hypothesis Testing for Means",description:"V\xfdukov\xe1 slo\u017eka o testech hypot\xe9z pro popula\u010dn\xed pr\u016fm\u011br.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/learn/hypothesis-testing-mean.md",sourceDirName:"learn",slug:"/learn/hypothesis-testing-mean",permalink:"/cs/docs/learn/hypothesis-testing-mean",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/hypothesis-testing-mean.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. 6. 2021",frontMatter:{id:"hypothesis-testing-mean",title:"Hypothesis Testing for Means",sidebar_label:"Hypothesis Testing for Means"},sidebar:"docs",previous:{title:"Discrete Distribution",permalink:"/cs/docs/learn/discrete-distribution"},next:{title:"Hypothesis Testing for Proportions",permalink:"/cs/docs/learn/hypothesis-testing-proportion"}},y={},b=[{value:"Mo\u017enosti",id:"mo\u017enosti",level:2},{value:"P\u0159\xedklady",id:"p\u0159\xedklady",level:2}],k={toc:b};function g(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},k),u),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"V\xfdukov\xe1 slo\u017eka o testech hypot\xe9z pro popula\u010dn\xed pr\u016fm\u011br."),(0,r.kt)("h2",c({},{id:"mo\u017enosti"}),"Mo\u017enosti"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"types")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<string>"),": typ(y) testu (",(0,r.kt)("inlineCode",{parentName:"li"},"Jednov\xfdb\u011brov\xfd"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Dvouv\xfdb\u011brov\xfd"),"), kter\xfd by m\u011bl widget zobrazit.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[\n  'One-Sample',\n  'Two-Sample'\n]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tests")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<string>"),": test(y) vystaven\xfd(\xe9) widgetem.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[\n  'Z-Test',\n  'T-Test'\n]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"nullHypothesisAsValue")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": v\u017edy zobraz\xed nulovou hypot\xe9zu jako jedinou hodnotu.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"feedback")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0159\xedd\xed, zda se maj\xed zobrazovat tla\u010d\xedtka zp\u011btn\xe9 vazby. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"pValue")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": vlastn\xed ozna\u010den\xed p-hodnoty (m\u011bl by to b\xfdt \u0159et\u011bzec rovnic LaTeXu).. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": \u0158\xe1dkov\xe9 styly CSS. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,r.kt)("h2",c({},{id:"p\u0159\xedklady"}),"P\u0159\xedklady"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LearnMeanTest />\n")))}g.isMDXComponent=!0}}]);