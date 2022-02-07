"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3090],{603905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(202784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),m=o,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},795166:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var r=t(487462),o=t(263366),a=(t(202784),t(603905)),i=["components"],l={id:"confidence-coverage-normal",title:"Confidence Interval Coverage Normal",sidebar_label:"Confidence Interval Coverage Normal"},c=void 0,u={unversionedId:"learn/confidence-coverage-normal",id:"learn/confidence-coverage-normal",title:"Confidence Interval Coverage Normal",description:"V\xfdukov\xe1 komponenta ilustruj\xedc\xed pokryt\xed interval\u016f spolehlivosti pro st\u0159edn\xed hodnotu norm\xe1ln\xedho rozd\u011blen\xed.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/learn/confidence-coverage-normal.md",sourceDirName:"learn",slug:"/learn/confidence-coverage-normal",permalink:"/cs/docs/learn/confidence-coverage-normal",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/confidence-coverage-normal.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. 6. 2021",frontMatter:{id:"confidence-coverage-normal",title:"Confidence Interval Coverage Normal",sidebar_label:"Confidence Interval Coverage Normal"},sidebar:"docs",previous:{title:"Confidence Interval Coverage Binomial",permalink:"/cs/docs/learn/confidence-coverage-binomial"},next:{title:"Confidence Interval Coverage Sample",permalink:"/cs/docs/learn/confidence-coverage-sample"}},p=[{value:"Mo\u017enosti",id:"mo\u017enosti",children:[],level:2},{value:"P\u0159\xedklady",id:"p\u0159\xedklady",children:[],level:2}],d={toc:p};function s(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"V\xfdukov\xe1 komponenta ilustruj\xedc\xed pokryt\xed interval\u016f spolehlivosti pro st\u0159edn\xed hodnotu norm\xe1ln\xedho rozd\u011blen\xed."),(0,a.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"intro")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(node|string)"),": p\u0159ep\xed\u0161e v\xfdchoz\xed (interaktivn\xed) \xfavodn\xed text.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"quartileNotation")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": ur\u010duje, zda se m\xe1 jako index kritick\xe9 hodnoty pou\u017e\xedt ",(0,a.kt)("inlineCode",{parentName:"li"},"alfa/2")," nebo jen ",(0,a.kt)("inlineCode",{parentName:"li"},"kritick\xe1"),".. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"sampleStats")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, zda m\xe1 b\xfdt mo\u017en\xe9 p\u0159ep\xednat mezi pou\u017eit\xedm v\xfdb\u011brov\xe9 sm\u011brodatn\xe9 odchylky nebo zn\xe1m\xe9 popula\u010dn\xed sm\u011brodatn\xe9 odchylky p\u0159i v\xfdpo\u010dtu sm\u011brodatn\xe9 chyby.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,a.kt)("h2",{id:"p\u0159\xedklady"},"P\u0159\xedklady"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnConfidenceCoverageNormal />\n")))}s.isMDXComponent=!0}}]);