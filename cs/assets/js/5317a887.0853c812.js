"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3265],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=a,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},426134:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return m},default:function(){return c}});var r=n(487462),a=n(263366),i=(n(202784),n(603905)),o=["components"],l={id:"meantest2",title:"Two-Sample Mean Test",sidebar_label:"Two-Sample Mean Test"},s=void 0,p={unversionedId:"tests/meantest2",id:"tests/meantest2",title:"Two-Sample Mean Test",description:"Dvouv\xfdb\u011brov\xfd pr\u016fm\u011brn\xfd test.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/tests/meantest2.md",sourceDirName:"tests",slug:"/tests/meantest2",permalink:"/cs/docs/tests/meantest2",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tests/meantest2.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19. 6. 2021",frontMatter:{id:"meantest2",title:"Two-Sample Mean Test",sidebar_label:"Two-Sample Mean Test"},sidebar:"docs",previous:{title:"One-Sample Mean Test",permalink:"/cs/docs/tests/meantest"},next:{title:"One-Sample Proportion Test",permalink:"/cs/docs/tests/proptest"}},u={},m=[{value:"Mo\u017enosti",id:"mo\u017enosti",level:2},{value:"P\u0159\xedklady",id:"p\u0159\xedklady",level:2}],d={toc:m};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Dvouv\xfdb\u011brov\xfd pr\u016fm\u011brn\xfd test."),(0,i.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"data")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object (required)"),": objekt pole hodnot. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"x")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string (required)"),": n\xe1zev prvn\xed prom\u011bnn\xe9. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"y")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": n\xe1zev druh\xe9 prom\u011bnn\xe9 (je t\u0159eba zadat ",(0,i.kt)("inlineCode",{parentName:"li"},"y")," nebo ",(0,i.kt)("inlineCode",{parentName:"li"},"group"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"group")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": n\xe1zev seskupuj\xedc\xed prom\u011bnn\xe9 (mus\xed b\xfdt uvedeno ",(0,i.kt)("inlineCode",{parentName:"li"},"y")," nebo ",(0,i.kt)("inlineCode",{parentName:"li"},"group"),").. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"type")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": typ testu (",(0,i.kt)("inlineCode",{parentName:"li"},"Z Test")," nebo ",(0,i.kt)("inlineCode",{parentName:"li"},"T Test"),").. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'T Test'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"xstdev")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": prvn\xed sm\u011brodatn\xe1 odchylka (pro ",(0,i.kt)("inlineCode",{parentName:"li"},"Z test"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ystdev")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": druh\xe1 sm\u011brodatn\xe1 odchylka (pro ",(0,i.kt)("inlineCode",{parentName:"li"},"Z test"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"alpha")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": \xfarove\u0148 v\xfdznamnosti. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"0.05"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"direction")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": sm\u011br testu (bu\u010f ",(0,i.kt)("inlineCode",{parentName:"li"},"less"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"greater"),", nebo ",(0,i.kt)("inlineCode",{parentName:"li"},"two-sided"),").. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'two-sided'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"diff")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": rozd\xedl podle H0. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"showDecision")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0159\xedd\xed, zda se m\xe1 zobrazit, pokud je nulov\xe1 hypot\xe9za zam\xedtnuta na zadan\xe9 hladin\u011b v\xfdznamnosti.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,i.kt)("h2",{id:"p\u0159\xedklady"},"P\u0159\xedklady"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<MeanTest2\n    data={heartdisease} \n    x="Cost"\n    group="Gender"\n/>\n')))}c.isMDXComponent=!0}}]);