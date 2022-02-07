"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5262],{603905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return c}});var n=r(202784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),c=a,f=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},872046:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var n=r(487462),a=r(263366),o=(r(202784),r(603905)),i=["components"],l={id:"proportions-survey",title:"Proportions Survey",sidebar_label:"Proportions Survey"},s=void 0,p={unversionedId:"proportions-survey",id:"proportions-survey",title:"Proportions Survey",description:"Componente que permite a um grupo de pessoas votar sobre os pesos e a import\xe2ncia de determinadas op\xe7\xf5es.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/proportions-survey.md",sourceDirName:".",slug:"/proportions-survey",permalink:"/pt/docs/proportions-survey",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/proportions-survey.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21/02/2021",frontMatter:{id:"proportions-survey",title:"Proportions Survey",sidebar_label:"Proportions Survey"},sidebar:"docs",previous:{title:"Number Survey",permalink:"/pt/docs/number-survey"},next:{title:"R Help",permalink:"/pt/docs/r/r-help"}},u=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",children:[],level:2},{value:"Exemplos",id:"exemplos",children:[],level:2}],d={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Componente que permite a um grupo de pessoas votar sobre os pesos e a import\xe2ncia de determinadas op\xe7\xf5es."),(0,o.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"allowMultipleAnswers")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": controla se se deseja permitir que os estudantes respondam \xe0 pesquisa v\xe1rias vezes. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"anonymous")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": controla se as respostas dos estudantes s\xe3o an\xf4nimas. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"colors")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"array"),": variedade de cores para os componentes da carta de tortas. Se n\xe3o for definida, ser\xe1 utilizada uma escala de cores personalizada. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"disabled")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": controla se a pesquisa est\xe1 desativada. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"group")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": t\xedtulo de exibi\xe7\xe3o de grupo. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"'group results'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"groupHeight")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),": propor\xe7\xf5es altura de entrada para exibi\xe7\xe3o do grupo (em px). Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"100"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"legends")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"array"),": etiquetas com legendas que descrevem as op\xe7\xf5es a serem pesadas. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"margin")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": margem de entrada proporcional (em px). Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"'40px'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o de chamada de retorno invocada quando os alunos submetem uma resposta. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"personalHeight")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),": propor\xe7\xf5es altura de entrada para cada estudante (em px). Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"200"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"precision")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),": precis\xe3o exibida dos valores de propor\xe7\xe3o. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"2"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"question")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(string|node)"),": a pergunta a ser exibida. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"step")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),": o passo das setas vistas ao passar o cursor por cima da caixa de entrada. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"0.25"),".")),(0,o.kt)("h2",{id:"exemplos"},"Exemplos"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ProportionsSurvey \n    id="Survey"\n    question="Decide what is important"\n    group="Group decision"\n    nElements={3}\n    colors = {[ "red", "blue", "gold" ]}\n    personalHeight={300}\n    groupHeight={200}\n    margin="80px"\n    legends={[ "bitcoin", "old", "diamonds" ]}\n/>\n')))}m.isMDXComponent=!0}}]);