"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2161],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},345413:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var r=n(487462),a=n(263366),o=(n(202784),n(603905)),i=["components"],s={id:"free-text-survey",title:"Free Text Survey",sidebar_label:"Free Text Survey"},l=void 0,u={unversionedId:"free-text-survey",id:"free-text-survey",title:"Free Text Survey",description:"Um componente ISLE para perguntas onde as respostas dos estudantes devem ser fornecidas na forma de texto livre. O que diferencia este componente da FreeTextQuestion* \xe9 o fato de que os dados agregados do grupo s\xe3o exibidos a todos em tempo real.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/free-text-survey.md",sourceDirName:".",slug:"/free-text-survey",permalink:"/pt/docs/free-text-survey",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/free-text-survey.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21/02/2021",frontMatter:{id:"free-text-survey",title:"Free Text Survey",sidebar_label:"Free Text Survey"},sidebar:"docs",previous:{title:"Select Question Matrix",permalink:"/pt/docs/questions/select-question-matrix"},next:{title:"Multiple Choice Survey",permalink:"/pt/docs/multiple-choice-survey"}},p=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",children:[],level:2},{value:"Exemplos",id:"exemplos",children:[],level:2}],d={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Um componente ISLE para perguntas onde as respostas dos estudantes devem ser fornecidas na forma de texto livre. O que diferencia este componente da ",(0,o.kt)("strong",{parentName:"p"},"FreeTextQuestion*")," \xe9 o fato de que os dados agregados do grupo s\xe3o exibidos a todos em tempo real."),(0,o.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"question")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(string|node)"),": a pergunta a fazer aos estudantes. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"allowMultipleAnswers")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": controla se se deseja permitir que os estudantes respondam \xe0 pesquisa v\xe1rias vezes. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"anonymous")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": controla se as respostas dos estudantes s\xe3o coletadas anonimamente. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"rows")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),": n\xfamero de linhas de texto no campo de entrada. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"4"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"className")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": nome da classe. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"style")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object"),": Estilos em linha CSS. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o de chamada de retorno chamada quando uma resposta \xe9 submetida. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,o.kt)("h2",{id:"exemplos"},"Exemplos"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FreeTextSurvey \n    question="Where are you from?"\n    anonymous\n/>\n')))}c.isMDXComponent=!0}}]);