"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5022],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},779358:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return v}});var r=n(603905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&u(e,n,t[n]);return e};const m={id:"proptest2",title:"Two-Sample Proportion Test",sidebar_label:"Two-Sample Proportion Test"},d=void 0,f={unversionedId:"tests/proptest2",id:"tests/proptest2",title:"Two-Sample Proportion Test",description:"Dvojv\xfdberov\xfd propor\u010dn\xfd test.",source:"@site/i18n/sk/docusaurus-plugin-content-docs/current/tests/proptest2.md",sourceDirName:"tests",slug:"/tests/proptest2",permalink:"/sk/docs/tests/proptest2",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tests/proptest2.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19. 6. 2021",frontMatter:{id:"proptest2",title:"Two-Sample Proportion Test",sidebar_label:"Two-Sample Proportion Test"},sidebar:"docs",previous:{title:"One-Sample Proportion Test",permalink:"/sk/docs/tests/proptest"},next:{title:"Summary Statistics",permalink:"/sk/docs/summary-statistics"}},k={},v=[{value:"Mo\u017enosti",id:"mo\u017enosti",level:2},{value:"Pr\xedklady",id:"pr\xedklady",level:2}],b={toc:v};function y(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},b),u),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Dvojv\xfdberov\xfd propor\u010dn\xfd test."),(0,r.kt)("h2",c({},{id:"mo\u017enosti"}),"Mo\u017enosti"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object (required)"),": objekt pol\xed hodn\xf4t. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"var1")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": n\xe1zov prvej premennej. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"success")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"any (required)"),": kateg\xf3ria \xfaspe\u0161nosti ",(0,r.kt)("inlineCode",{parentName:"li"},"var1"),". Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"var2")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": n\xe1zov druhej premennej (je potrebn\xe9 uvies\u0165 ",(0,r.kt)("inlineCode",{parentName:"li"},"var2")," alebo ",(0,r.kt)("inlineCode",{parentName:"li"},"group"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"group")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": n\xe1zov zoskupuj\xfacej premennej (je potrebn\xe9 uvies\u0165 ",(0,r.kt)("inlineCode",{parentName:"li"},"var2")," alebo ",(0,r.kt)("inlineCode",{parentName:"li"},"group"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"alpha")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": \xfarove\u0148 v\xfdznamnosti. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0.05"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"direction")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": smer testu (bu\u010f ",(0,r.kt)("inlineCode",{parentName:"li"},"less"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"greater")," alebo ",(0,r.kt)("inlineCode",{parentName:"li"},"two-sided"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'two-sided'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"diff")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": rozdiel pod\u013ea H0. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"showDecision")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, \u010di sa zobraz\xed, ak je nulov\xe1 hypot\xe9za zamietnut\xe1 na zadanej hladine v\xfdznamnosti.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,r.kt)("h2",c({},{id:"pr\xedklady"}),"Pr\xedklady"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<PropTest2\n    data={heartdisease} \n    var1="Drugs"\n    success={2}\n    group="Complications"\n/>\n')))}y.isMDXComponent=!0}}]);