"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9727],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,y=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(y,o(o({ref:t},u),{},{components:n})):a.createElement(y,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15414:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(487462),i=n(263366),r=(n(202784),n(603905)),o=["components"],l={id:"naive-bayes",title:"Naive Bayes",sidebar_label:"Naive Bayes"},s=void 0,p={unversionedId:"models/naive-bayes",id:"models/naive-bayes",title:"Naive Bayes",description:"Naivusis Bayesas daro prielaid\u0105, kad prognozuojamieji rodikliai, atsi\u017evelgiant \u012f priklausym\u0105 klasei, pasiskirsto pagal normal\u0173j\u012f skirstin\u012f.",source:"@site/i18n/lt/docusaurus-plugin-content-docs/current/models/naive-bayes.md",sourceDirName:"models",slug:"/models/naive-bayes",permalink:"/lt/docs/models/naive-bayes",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/naive-bayes.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021-06-01",frontMatter:{id:"naive-bayes",title:"Naive Bayes",sidebar_label:"Naive Bayes"},sidebar:"docs",previous:{title:"Multiple Linear Regression",permalink:"/lt/docs/models/multiple-linear-regression"},next:{title:"Principal Component Analysis",permalink:"/lt/docs/models/principal-component-analysis"}},u=[{value:"Parinktys",id:"parinktys",children:[],level:2},{value:"Pavyzd\u017eiai",id:"pavyzd\u017eiai",children:[],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Naivusis Bayesas daro prielaid\u0105, kad prognozuojamieji rodikliai, atsi\u017evelgiant \u012f priklausym\u0105 klasei, pasiskirsto pagal normal\u0173j\u012f skirstin\u012f."),(0,r.kt)("h2",{id:"parinktys"},"Parinktys"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object (required)"),": ver\u010di\u0173 masyv\u0173 objektas. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"y")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": rezultato kintamasis. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"x")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(array<(string|Factor)>|string|Factor) (required)"),": vienas ar daugiau predikcini\u0173 kintam\u0173j\u0173.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"quantitative")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"data")," kintam\u0173j\u0173, kurie yra ",(0,r.kt)("inlineCode",{parentName:"li"},"kvantitatyv\u016bs"),", masyvas. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"omitMissing")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroliuoja, ar praleisti tr\u016bkstamas reik\u0161mes.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onPredict")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": gr\u012f\u017etamasis skambutis, i\u0161kvie\u010diamas su prognoz\u0117mis ir liekanomis po modelio pritaikymo. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,r.kt)("h2",{id:"pavyzd\u017eiai"},"Pavyzd\u017eiai"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<NaiveBayes \n    data={heartdisease} \n    y=\"Drugs\"\n    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Complications' ]}\n    quantitative={[ 'Age', 'Cost', 'Interventions' ]}\n/>\n")))}d.isMDXComponent=!0}}]);