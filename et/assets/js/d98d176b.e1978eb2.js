"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58196],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),c=a,f=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},596682:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return N}});var r=n(603905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&p(e,n,t[n]);return e};const d={id:"meantest2",title:"Two-Sample Mean Test",sidebar_label:"Two-Sample Mean Test"},c=void 0,f={unversionedId:"tests/meantest2",id:"tests/meantest2",title:"Two-Sample Mean Test",description:"Kahe proovi keskmine test.",source:"@site/i18n/et/docusaurus-plugin-content-docs/current/tests/meantest2.md",sourceDirName:"tests",slug:"/tests/meantest2",permalink:"/et/docs/tests/meantest2",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tests/meantest2.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19. juuni 2021",frontMatter:{id:"meantest2",title:"Two-Sample Mean Test",sidebar_label:"Two-Sample Mean Test"},sidebar:"docs",previous:{title:"One-Sample Mean Test",permalink:"/et/docs/tests/meantest"},next:{title:"One-Sample Proportion Test",permalink:"/et/docs/tests/proptest"}},k={},N=[{value:"Valikud",id:"valikud",level:2},{value:"N\xe4ited",id:"n\xe4ited",level:2}],b={toc:N};function v(e){var t,n=e,{components:a}=n,p=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},b),p),i(t,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Kahe proovi keskmine test."),(0,r.kt)("h2",m({},{id:"valikud"}),"Valikud"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object (required)"),": v\xe4\xe4rtuste massiivi objekt. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"x")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string (required)"),": esimese muutuja nimi. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"y")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": teise muutuja nimi (tuleb esitada ",(0,r.kt)("inlineCode",{parentName:"li"},"y")," v\xf5i ",(0,r.kt)("inlineCode",{parentName:"li"},"group"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"group")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": grupeeriva muutuja nimi (tuleb esitada ",(0,r.kt)("inlineCode",{parentName:"li"},"y")," v\xf5i ",(0,r.kt)("inlineCode",{parentName:"li"},"group"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),': testi t\xfc\xfcp (kas "Z-testi" v\xf5i "T-testi"). Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"'T Test'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"xstdev")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": esimene standardh\xe4lve (Z-testi puhul). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ystdev")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": teine standardh\xe4lve (Z-testi puhul). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"alpha")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": olulisuse tase. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0.05"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"direction")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": testi suund (kas ",(0,r.kt)("inlineCode",{parentName:"li"},"less"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"greater")," v\xf5i ",(0,r.kt)("inlineCode",{parentName:"li"},"two-sided"),").. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'two-sided'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"diff")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": erinevus H0 korral. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"showDecision")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollib, kas n\xe4idata, kas nullh\xfcpotees l\xfckatakse tagasi m\xe4\xe4ratud olulisuse tasemel.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,r.kt)("h2",m({},{id:"n\xe4ited"}),"N\xe4ited"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<MeanTest2\n    data={heartdisease} \n    x="Cost"\n    group="Gender"\n/>\n')))}v.isMDXComponent=!0}}]);