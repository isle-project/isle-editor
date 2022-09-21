"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65021],{603905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(202784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},574645:function(e,n,t){t.r(n),t.d(n,{assets:function(){return y},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return k}});var r=t(603905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&c(e,t,n[t]);if(l)for(var t of l(n))s.call(n,t)&&c(e,t,n[t]);return e};const m={id:"principal-component-analysis",title:"Principal Component Analysis",sidebar_label:"Principal Component Analysis"},d=void 0,f={unversionedId:"models/principal-component-analysis",id:"models/principal-component-analysis",title:"Principal Component Analysis",description:"Anal\xfdza hlavn\xfdch komponentov.",source:"@site/i18n/sk/docusaurus-plugin-content-docs/current/models/principal-component-analysis.md",sourceDirName:"models",slug:"/models/principal-component-analysis",permalink:"/sk/docs/models/principal-component-analysis",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/principal-component-analysis.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. 6. 2021",frontMatter:{id:"principal-component-analysis",title:"Principal Component Analysis",sidebar_label:"Principal Component Analysis"},sidebar:"docs",previous:{title:"Naive Bayes",permalink:"/sk/docs/models/naive-bayes"},next:{title:"Random Forest",permalink:"/sk/docs/models/random-forest"}},y={},k=[{value:"Mo\u017enosti",id:"mo\u017enosti",level:2},{value:"Pr\xedklady",id:"pr\xedklady",level:2}],v={toc:k};function b(e){var n,t=e,{components:o}=t,c=((e,n)=>{var t={};for(var r in e)p.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&l)for(var r of l(e))n.indexOf(r)<0&&s.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=u(u({},v),c),a(n,i({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Anal\xfdza hlavn\xfdch komponentov."),(0,r.kt)("h2",u({},{id:"mo\u017enosti"}),"Mo\u017enosti"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object (required)"),": objekt pol\xed hodn\xf4t. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"variables")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),": n\xe1zvy premenn\xfdch pou\u017eit\xfdch na zhlukovanie. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"center")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": stredov\xfdch hodn\xf4t od\u010d\xedtan\xedm priemernej hodnoty. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"scale")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": stupnice hodn\xf4t delen\xedm so \u0161tandardnou odch\xfdlkou. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"noComponents")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": po\u010det komponentov dodan\xfdch do sp\xe4tn\xe9ho volania ",(0,r.kt)("inlineCode",{parentName:"li"},"onResult"),". Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onResult")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": sp\xe4tn\xe9 volanie vyvolan\xe9 pomocou objektu modelu a komponentov. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onResult() {}"),".")),(0,r.kt)("h2",u({},{id:"pr\xedklady"}),"Pr\xedklady"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<PrincipalComponentAnalysis \n    data={heartdisease} \n    variables={[ 'Age', 'Cost', 'Interventions' ]}\n    scale\n/>\n")))}b.isMDXComponent=!0}}]);