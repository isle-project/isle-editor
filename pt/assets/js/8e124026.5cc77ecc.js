"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62478],{603905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return f}});var t=n(202784);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),s=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?t.createElement(f,i(i({ref:r},p),{},{components:n})):t.createElement(f,i({ref:r},p))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},651001:function(e,r,n){n.r(r),n.d(r,{assets:function(){return v},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return u},metadata:function(){return f},toc:function(){return b}});var t=n(603905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,r,n)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,d=(e,r)=>{for(var n in r||(r={}))c.call(r,n)&&p(e,n,r[n]);if(l)for(var n of l(r))s.call(r,n)&&p(e,n,r[n]);return e};const u={id:"confidence-coverage-sample",title:"Confidence Interval Coverage Sample",sidebar_label:"Confidence Interval Coverage Sample"},m=void 0,f={unversionedId:"learn/confidence-coverage-sample",id:"learn/confidence-coverage-sample",title:"Confidence Interval Coverage Sample",description:"Um componente de aprendizagem que ilustra o Teorema do Limite Central (CLT) quando da amostragem a partir de um conjunto de dados fornecido.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/learn/confidence-coverage-sample.md",sourceDirName:"learn",slug:"/learn/confidence-coverage-sample",permalink:"/pt/docs/learn/confidence-coverage-sample",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/confidence-coverage-sample.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621312042,formattedLastUpdatedAt:"18 de mai. de 2021",frontMatter:{id:"confidence-coverage-sample",title:"Confidence Interval Coverage Sample",sidebar_label:"Confidence Interval Coverage Sample"},sidebar:"docs",previous:{title:"Confidence Interval Coverage Normal",permalink:"/pt/docs/learn/confidence-coverage-normal"},next:{title:"Continuous Distribution",permalink:"/pt/docs/learn/continuous-distribution"}},v={},b=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"Exemplos",id:"exemplos",level:2}],g={toc:b};function y(e){var r,n=e,{components:a}=n,p=((e,r)=>{var n={};for(var t in e)c.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&l)for(var t of l(e))r.indexOf(t)<0&&s.call(e,t)&&(n[t]=e[t]);return n})(n,["components"]);return(0,t.kt)("wrapper",(r=d(d({},g),p),o(r,i({components:a,mdxType:"MDXLayout"}))),(0,t.kt)("p",null,"Um componente de aprendizagem que ilustra o Teorema do Limite Central (CLT) quando da amostragem a partir de um conjunto de dados fornecido."),(0,t.kt)("h2",d({},{id:"op\xe7\xf5es"}),"Op\xe7\xf5es"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"data")," | ",(0,t.kt)("inlineCode",{parentName:"li"},"object (required)"),": objeto de dados com chaves correspondem a nomes e valores de vari\xe1veis que cont\xeam os valores das respectivas vari\xe1veis. Default: ",(0,t.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"samples")," | ",(0,t.kt)("inlineCode",{parentName:"li"},"(array<number>|number)"),": matriz de n\xfameros ou um \xfanico n\xfamero indicando os tamanhos de amostra que podem ser sorteados. Default: ",(0,t.kt)("inlineCode",{parentName:"li"},"25"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"variables")," | ",(0,t.kt)("inlineCode",{parentName:"li"},"array (required)"),": nomes de vari\xe1veis que podem ser amostradas a partir de. Default: ",(0,t.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,t.kt)("h2",d({},{id:"exemplos"}),"Exemplos"),(0,t.kt)("pre",null,(0,t.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LearnConfidenceCoverageSample \n    data={heartdisease} \n    variables={[ 'Gender', 'Drugs', 'Complications', 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}\n/>\n")))}y.isMDXComponent=!0}}]);