"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[84835],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=a,f=m["".concat(p,".").concat(c)]||m[c]||d[c]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},295709:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return c},default:function(){return N},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return y}});var r=n(603905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&u(e,n,t[n]);return e};const m={id:"meantest2",title:"Two-Sample Mean Test",sidebar_label:"Two-Sample Mean Test"},c=void 0,f={unversionedId:"tests/meantest2",id:"tests/meantest2",title:"Two-Sample Mean Test",description:"Dwukrotny test \u015bredniej pr\xf3by.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/tests/meantest2.md",sourceDirName:"tests",slug:"/tests/meantest2",permalink:"/pl/docs/tests/meantest2",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tests/meantest2.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19 cze 2021",frontMatter:{id:"meantest2",title:"Two-Sample Mean Test",sidebar_label:"Two-Sample Mean Test"},sidebar:"docs",previous:{title:"One-Sample Mean Test",permalink:"/pl/docs/tests/meantest"},next:{title:"One-Sample Proportion Test",permalink:"/pl/docs/tests/proptest"}},k={},y=[{value:"Opcje",id:"opcje",level:2},{value:"Przyk\u0142ady",id:"przyk\u0142ady",level:2}],b={toc:y};function N(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},b),u),i(t,l({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Dwukrotny test \u015bredniej pr\xf3by."),(0,r.kt)("h2",d({},{id:"opcje"}),"Opcje"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object (required)"),": przedmiot tablice warto\u015bci. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"x")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string (required)"),": nazwa pierwszej zmiennej. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"y")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": nazwa drugiej zmiennej (nale\u017cy poda\u0107 ",(0,r.kt)("inlineCode",{parentName:"li"},"y")," lub ",(0,r.kt)("inlineCode",{parentName:"li"},"grup\u0119"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"group")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": nazwa zmiennej grupowania (nale\u017cy poda\u0107 ",(0,r.kt)("inlineCode",{parentName:"li"},"y")," lub ",(0,r.kt)("inlineCode",{parentName:"li"},"grup\u0119"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": typ badania (albo ",(0,r.kt)("inlineCode",{parentName:"li"},"Badanie Z")," albo ",(0,r.kt)("inlineCode",{parentName:"li"},"Badanie T"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'T Test'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"xstdev")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": pierwsze odchylenie standardowe (dla ",(0,r.kt)("inlineCode",{parentName:"li"},"Testu Z"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ystdev")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": drugie odchylenie standardowe (dla ",(0,r.kt)("inlineCode",{parentName:"li"},"Testu Z"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"alpha")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": poziom istotno\u015bci. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0.05"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"direction")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": kierunek testu (albo ",(0,r.kt)("inlineCode",{parentName:"li"},"less"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"greater"),", albo ",(0,r.kt)("inlineCode",{parentName:"li"},"two-sided"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'two-sided'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"diff")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": r\xf3\u017cnica poni\u017cej H0. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"showDecision")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy hipoteza zerowa ma by\u0107 wy\u015bwietlana, je\u015bli zostanie odrzucona na okre\u015blonym poziomie istotno\u015bci. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,r.kt)("h2",d({},{id:"przyk\u0142ady"}),"Przyk\u0142ady"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<MeanTest2\n    data={heartdisease} \n    x="Cost"\n    group="Gender"\n/>\n')))}N.isMDXComponent=!0}}]);