"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5258],{603905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),c=a,k=u["".concat(p,".").concat(c)]||u[c]||d[c]||i;return n?r.createElement(k,o(o({ref:t},m),{},{components:n})):r.createElement(k,o({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},632679:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return m},toc:function(){return d},default:function(){return c}});var r=n(487462),a=n(263366),i=(n(202784),n(603905)),o=["components"],l={id:"random-forest",title:"Random Forest",sidebar_label:"Random Forest"},p=void 0,s={unversionedId:"models/random-forest",id:"models/random-forest",title:"Random Forest",description:"N\xe1hodn\xe9 lesy.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/models/random-forest.md",sourceDirName:"models",slug:"/models/random-forest",permalink:"/cs/docs/models/random-forest",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/random-forest.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. 6. 2021",frontMatter:{id:"random-forest",title:"Random Forest",sidebar_label:"Random Forest"},sidebar:"docs",previous:{title:"Principal Component Analysis",permalink:"/cs/docs/models/principal-component-analysis"},next:{title:"Simple Linear Regression",permalink:"/cs/docs/models/simple-linear-regression"}},m={},d=[{value:"Mo\u017enosti",id:"mo\u017enosti",level:2},{value:"P\u0159\xedklady",id:"p\u0159\xedklady",level:2}],u={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"N\xe1hodn\xe9 lesy."),(0,i.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"data")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object (required)"),": objekt pole hodnot. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"y")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": v\xfdsledn\xe1 prom\u011bnn\xe1. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"x")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(array<(string|Factor)>|string|Factor) (required)"),": jedna nebo v\xedce prediktivn\xedch prom\u011bnn\xfdch. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"type")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": v sou\u010dasn\xe9 dob\u011b je podporov\xe1na pouze funkce ",(0,i.kt)("inlineCode",{parentName:"li"},"Klasifikace")," pro kategorick\xe9 odpov\u011bdi.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'Classification'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"quantitative")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),": pole prom\u011bnn\xfdch v ",(0,i.kt)("inlineCode",{parentName:"li"},"data"),", kter\xe9 jsou ",(0,i.kt)("inlineCode",{parentName:"li"},"kvantitativn\xed"),".. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"nTrees")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": po\u010det strom\u016f. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"50"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"nTry")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": po\u010det prediktor\u016f ke kontrole p\u0159i ka\u017ed\xe9m rozd\u011blen\xed. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"impurityMeasure")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": m\xedra ne\u010distoty (",(0,i.kt)("inlineCode",{parentName:"li"},"gini")," nebo ",(0,i.kt)("inlineCode",{parentName:"li"},"entropie"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'gini'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"scoreThreshold")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": bodov\xe1 hranice pro rozd\u011blen\xed. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"0.01"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"maxTreeDepth")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": maxim\xe1ln\xed hloubka stromu. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"20"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"minItemsCount")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": minim\xe1ln\xed po\u010det pozorov\xe1n\xed v listov\xfdch uzlech. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"50"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onPredict")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": zp\u011btn\xe9 vol\xe1n\xed vyvolan\xe9 pomoc\xed objektu modelu p\u0159i kliknut\xed na tla\u010d\xedtko predict. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,i.kt)("h2",{id:"p\u0159\xedklady"},"P\u0159\xedklady"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RandomForest \n    data={heartdisease} \n    type=\"Classification\"\n    y=\"Complications\"\n    x={[ 'Age', 'Cost', 'Interventions', 'Gender' ]}\n    quantitative={[ 'Age', 'Cost', 'Interventions' ]}\n/>\n")))}c.isMDXComponent=!0}}]);