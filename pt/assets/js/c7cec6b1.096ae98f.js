(window.webpackJsonp=window.webpackJsonp||[]).push([[342],{283:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(409)),o={id:"select-question-matrix",title:"Select Question Matrix",sidebar_label:"Select Question Matrix"},l={unversionedId:"questions/select-question-matrix",id:"questions/select-question-matrix",isDocsHomePage:!1,title:"Select Question Matrix",description:"Uma pergunta com uma resposta que consiste em m\xfaltiplas caixas de sele\xe7\xe3o.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/questions/select-matrix.md",slug:"/questions/select-question-matrix",permalink:"/pt/docs/questions/select-question-matrix",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/select-matrix.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Select Question Matrix",sidebar:"docs",previous:{title:"Select Question",permalink:"/pt/docs/questions/select-question"},next:{title:"Free Text Survey",permalink:"/pt/docs/free-text-survey"}},c=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",children:[]},{value:"Exemplos",id:"exemplos",children:[]}],s={toc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Uma pergunta com uma resposta que consiste em m\xfaltiplas caixas de sele\xe7\xe3o."),Object(i.b)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"question")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|node)"),": pergunta a ser exibida na parte superior da matriz de perguntas selecionadas. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"rows")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array"),": etiquetas em linha. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"cols")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array"),": etiquetas de coluna. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"options")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": objeto com pares de chaves de valor com chaves com a forma ",Object(i.b)("inlineCode",{parentName:"li"},"row:col"),", por exemplo ",Object(i.b)("inlineCode",{parentName:"li"},"0:0"),", ",Object(i.b)("inlineCode",{parentName:"li"},"0:1"),", ",Object(i.b)("inlineCode",{parentName:"li"},"1:0")," etc., e seus valores correspondentes sendo matrizes das poss\xedveis escolhas de resposta para as perguntas individuais selecionadas. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"solution")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": objeto de solu\xe7\xe3o com pares de chaves de valor com chaves com a forma ",Object(i.b)("inlineCode",{parentName:"li"},"row:col"),", por exemplo ",Object(i.b)("inlineCode",{parentName:"li"},"0:0"),", ",Object(i.b)("inlineCode",{parentName:"li"},"0:1"),", ",Object(i.b)("inlineCode",{parentName:"li"},"1:0")," etc., e seus valores correspondentes sendo o \xedndice do elemento de resposta correto da respectiva matriz de ",Object(i.b)("inlineCode",{parentName:"li"},"op\xe7\xf5es"),".. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"hints")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array<(string|node)>"),": dicas que orientam como responder \xe0 pergunta. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"hintPlacement")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),': coloca\xe7\xe3o das dicas (ou "cima", "esquerda", "direita", ou "baixo"). Default: ',Object(i.b)("inlineCode",{parentName:"li"},"'bottom'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"feedback")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": controla se devem ser exibidos bot\xf5es de feedback. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"provideFeedback")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),': se fornecer "nenhum" feedback, "feedback individual" sobre a(s) resposta(s) apresentada(s), ou "feedback global" para todas as perguntas. Default: ',Object(i.b)("inlineCode",{parentName:"li"},"'individual'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"allowIncomplete")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": permitir ou n\xe3o envios sem uma sele\xe7\xe3o feita em cada caixa de sele\xe7\xe3o. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"nTries")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": depois de quantas tentativas n\xe3o s\xe3o aceitas mais respostas (se ",Object(i.b)("inlineCode",{parentName:"li"},"provideFeedback")," n\xe3o for ",Object(i.b)("inlineCode",{parentName:"li"},"ningu\xe9m"),"). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"1"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"failureMsg")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": texto de notifica\xe7\xe3o exibido ao enviar respostas incorretas. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"successMsg")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": texto de notifica\xe7\xe3o exibido ao apresentar as respostas corretas. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"cellLabels")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": etiquetas para c\xe9lulas definidas por objeto com chaves com o formato ",Object(i.b)("inlineCode",{parentName:"li"},"row:col"),".. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"chat")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": controla se o elemento deve ter um bate-papo integrado. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"className")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": nome da classe. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": Estilos em linha CSS. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": fun\xe7\xe3o chamada de retorno invocada no momento da apresenta\xe7\xe3o com as respostas como primeiro e um booleano indicando a corre\xe7\xe3o como segundo par\xe2metro. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),Object(i.b)("h2",{id:"exemplos"},"Exemplos"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestionMatrix\n    rows={[ 'First Row' ]} \n    cols={[ 'First Column', 'Second Column' ]} \n    options={{ '0:0': [ 'Incorrect', 'Correct' ], '0:1':  [ 'Incorrect', 'Incorrect', 'Correct' ] }} \n    solution={{ '0:0': 1, '0:1': 2 }}\n/>\n")))}b.isMDXComponent=!0},409:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,d=p["".concat(o,".").concat(u)]||p[u]||m[u]||i;return n?r.a.createElement(d,l(l({ref:t},s),{},{components:n})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);