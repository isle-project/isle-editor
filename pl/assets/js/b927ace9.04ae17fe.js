"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6325],{603905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return m}});var t=r(202784);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),m=a,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||o;return r?t.createElement(f,i(i({ref:n},u),{},{components:r})):t.createElement(f,i({ref:n},u))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},380337:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return u},toc:function(){return d},default:function(){return m}});var t=r(487462),a=r(263366),o=(r(202784),r(603905)),i=["components"],c={id:"confidence-coverage-sample",title:"Confidence Interval Coverage Sample",sidebar_label:"Confidence Interval Coverage Sample"},l=void 0,p={unversionedId:"learn/confidence-coverage-sample",id:"learn/confidence-coverage-sample",title:"Confidence Interval Coverage Sample",description:"Komponent edukacyjny ilustruj\u0105cy centralne twierdzenie graniczne (CLT) podczas pobierania pr\xf3bek z dostarczonego zestawu danych.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/learn/confidence-coverage-sample.md",sourceDirName:"learn",slug:"/learn/confidence-coverage-sample",permalink:"/pl/docs/learn/confidence-coverage-sample",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/confidence-coverage-sample.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621312042,formattedLastUpdatedAt:"18.05.2021",frontMatter:{id:"confidence-coverage-sample",title:"Confidence Interval Coverage Sample",sidebar_label:"Confidence Interval Coverage Sample"},sidebar:"docs",previous:{title:"Confidence Interval Coverage Normal",permalink:"/pl/docs/learn/confidence-coverage-normal"},next:{title:"Continuous Distribution",permalink:"/pl/docs/learn/continuous-distribution"}},u={},d=[{value:"Opcje",id:"opcje",level:2},{value:"Przyk\u0142ady",id:"przyk\u0142ady",level:2}],s={toc:d};function m(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Komponent edukacyjny ilustruj\u0105cy centralne twierdzenie graniczne (CLT) podczas pobierania pr\xf3bek z dostarczonego zestawu danych."),(0,o.kt)("h2",{id:"opcje"},"Opcje"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"data")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object (required)"),": obiekt danych z kluczami odpowiada nazwom zmiennych i warto\u015bciom posiadaj\u0105cym warto\u015bci odpowiednich zmiennych. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"samples")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(array<number>|number)"),": uk\u0142ad liczb lub pojedynczych liczb oznaczaj\u0105cych wielko\u015bci pr\xf3bek, kt\xf3re mo\u017cna pobra\u0107. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"25"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"variables")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"array (required)"),": nazwy zmiennych, z kt\xf3rych mo\u017cna pobiera\u0107 pr\xf3bki. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,o.kt)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnConfidenceCoverageSample \n    data={heartdisease} \n    variables={[ 'Gender', 'Drugs', 'Complications', 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}\n/>\n")))}m.isMDXComponent=!0}}]);