(window.webpackJsonp=window.webpackJsonp||[]).push([[1232],{258:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return c}));var r=n(3),a=n(7),o=(n(0),n(410)),i={id:"number-survey",title:"Number Survey",sidebar_label:"Number Survey"},s={unversionedId:"number-survey",id:"number-survey",isDocsHomePage:!1,title:"Number Survey",description:"Um componente de pesquisa no qual o instrutor pode coletar dados num\xe9ricos de pesquisa dos alunos em tempo real.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/number-survey.md",slug:"/number-survey",permalink:"/pt/docs/number-survey",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/number-survey.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21/02/2021",sidebar_label:"Number Survey",sidebar:"docs",previous:{title:"Multiple Choice Survey",permalink:"/pt/docs/multiple-choice-survey"},next:{title:"Proportions Survey",permalink:"/pt/docs/proportions-survey"}},u=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",children:[]},{value:"Exemplos",id:"exemplos",children:[]}],l={toc:u};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Um componente de pesquisa no qual o instrutor pode coletar dados num\xe9ricos de pesquisa dos alunos em tempo real."),Object(o.b)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"question")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(string|node)"),": a pergunta a ser exibida. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"''"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"allowMultipleAnswers")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": controla se o mesmo usu\xe1rio (ou sess\xe3o se an\xf4nima) pode enviar v\xe1rias respostas). Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"anonymous")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),': Permite que os estudantes enviem dados de forma an\xf4nima. Observe que se esta op\xe7\xe3o for definida como "verdadeira", ent\xe3o os instrutores n\xe3o poder\xe3o ver a identifica\xe7\xe3o do aluno que apresenta os dados.. Default: ',Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"step")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(number|string)"),': Um valor "string" ou "num\xe9rico" indicando o passo das setas vistas ao passar o cursor por cima da caixa de entrada. Se "qualquer", o passo ser\xe1 ajustado para "1".. Default: ',Object(o.b)("inlineCode",{parentName:"li"},"'any'"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"style")," | ",Object(o.b)("inlineCode",{parentName:"li"},"object"),": Estilos em linha CSS. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o de chamada de retorno invocada quando os alunos submetem uma resposta. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),Object(o.b)("h2",{id:"exemplos"},"Exemplos"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<NumberSurvey\n    allowMultipleAnswers={true}\n    anonymous="false"\n    id="generic_mean_question"\n    question="Submit a number"\n    defaultValue={0}\n    step="any"\n/>\n')))}c.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),c=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return n?a.a.createElement(d,s(s({ref:t},l),{},{components:n})):a.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);