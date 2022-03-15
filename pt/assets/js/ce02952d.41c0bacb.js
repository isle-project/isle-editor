"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1521],{603905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(202784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},757441:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return m},default:function(){return d}});var r=t(487462),a=t(263366),o=(t(202784),t(603905)),i=["components"],l={id:"principal-component-analysis",title:"Principal Component Analysis",sidebar_label:"Principal Component Analysis"},s=void 0,p={unversionedId:"models/principal-component-analysis",id:"models/principal-component-analysis",title:"Principal Component Analysis",description:"An\xe1lise dos principais componentes.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/models/principal-component-analysis.md",sourceDirName:"models",slug:"/models/principal-component-analysis",permalink:"/pt/docs/models/principal-component-analysis",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/models/principal-component-analysis.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621312042,formattedLastUpdatedAt:"18/05/2021",frontMatter:{id:"principal-component-analysis",title:"Principal Component Analysis",sidebar_label:"Principal Component Analysis"},sidebar:"docs",previous:{title:"Naive Bayes",permalink:"/pt/docs/models/naive-bayes"},next:{title:"Random Forest",permalink:"/pt/docs/models/random-forest"}},c={},m=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"Exemplos",id:"exemplos",level:2}],u={toc:m};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An\xe1lise dos principais componentes."),(0,o.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"data")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object (required)"),": objeto de arrays de valor. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"variables")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"array<string> (required)"),": nomes de vari\xe1veis utilizadas para agrupamento. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"center")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": valores centrais, subtraindo a m\xe9dia. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"scale")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": valores de escala por divis\xe3o com o desvio padr\xe3o. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"noComponents")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),': n\xfamero de componentes fornecidos para a chamada de retorno do "resultado". Default: ',(0,o.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"onResult")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"function"),": chamada de retorno invocada com o objeto modelo e componentes. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"onResult() {}"),".")),(0,o.kt)("h2",{id:"exemplos"},"Exemplos"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<PrincipalComponentAnalysis \n    data={heartdisease} \n    variables={[ 'Age', 'Cost', 'Interventions' ]}\n    scale\n/>\n")))}d.isMDXComponent=!0}}]);