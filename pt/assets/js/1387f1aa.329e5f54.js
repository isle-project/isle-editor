"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9008],{603905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(202784);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?a.createElement(f,r(r({ref:n},c),{},{components:t})):a.createElement(f,r({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},358215:function(e,n,t){var a=t(202784);n.Z=function(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:i},n)}},855064:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(202784),i=t(79443);var o=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=t(386010),l="tabItem_1uMI",s="tabItemActive_2DSg";var u=function(e){var n,t=e.lazy,i=e.block,u=e.defaultValue,c=e.values,p=e.groupId,d=e.className,m=a.Children.toArray(e.children),f=null!=c?c:m.map((function(e){return{value:e.props.value,label:e.props.label}})),k=null!=u?u:null==(n=m.find((function(e){return e.props.default})))?void 0:n.props.value,h=o(),g=h.tabGroupChoices,b=h.setTabGroupChoices,v=(0,a.useState)(k),N=v[0],C=v[1],y=[];if(null!=p){var w=g[p];null!=w&&w!==N&&f.some((function(e){return e.value===w}))&&C(w)}var x=function(e){var n=e.currentTarget,t=y.indexOf(n),a=f[t].value;C(a),null!=p&&(b(p,a),setTimeout((function(){var e,t,a,i,o,r,l,u;(e=n.getBoundingClientRect(),t=e.top,a=e.left,i=e.bottom,o=e.right,r=window,l=r.innerHeight,u=r.innerWidth,t>=0&&o<=u&&i<=l&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(s),setTimeout((function(){return n.classList.remove(s)}),2e3))}),150))},q=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=y.indexOf(e.target)+1;t=y[a]||y[0];break;case"ArrowLeft":var i=y.indexOf(e.target)-1;t=y[i]||y[y.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},d)},f.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,className:(0,r.Z)("tabs__item",l,{"tabs__item--active":N===n}),key:n,ref:function(e){return y.push(e)},onKeyDown:q,onFocus:x,onClick:x},null!=t?t:n)}))),t?(0,a.cloneElement)(m.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==N})}))))}},79443:function(e,n,t){var a=(0,t(202784).createContext)(void 0);n.Z=a},459844:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var a=t(487462),i=t(263366),o=(t(202784),t(603905)),r=t(855064),l=t(358215),s=["components"],u={id:"multiple-choice-question",title:"Multiple Choice Question",sidebar_label:"Multiple Choice Question"},c=void 0,p={unversionedId:"questions/multiple-choice-question",id:"questions/multiple-choice-question",isDocsHomePage:!1,title:"Multiple Choice Question",description:"Um componente ISLE que torna uma quest\xe3o de m\xfaltipla escolha. Ele ap\xf3ia o caso em que o aluno tem que selecionar uma \xfanica resposta e quando pode haver m\xfaltiplas respostas corretas e todas as corretas devem ser escolhidas.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/questions/multiple-choice.md",sourceDirName:"questions",slug:"/questions/multiple-choice-question",permalink:"/pt/docs/questions/multiple-choice-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/multiple-choice.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19/06/2021",frontMatter:{id:"multiple-choice-question",title:"Multiple Choice Question",sidebar_label:"Multiple Choice Question"},sidebar:"docs",previous:{title:"Match List Question",permalink:"/pt/docs/questions/match-list-question"},next:{title:"Number Question",permalink:"/pt/docs/questions/number-question"}},d=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",children:[]},{value:"Exemplos",id:"exemplos",children:[]}],m={toc:d};function f(e){var n=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Um componente ISLE que torna uma quest\xe3o de m\xfaltipla escolha. Ele ap\xf3ia o caso em que o aluno tem que selecionar uma \xfanica resposta e quando pode haver m\xfaltiplas respostas corretas e todas as corretas devem ser escolhidas."),(0,o.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"question")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(string|node)"),": a quest\xe3o exibida na parte superior do componente de m\xfaltipla escolha. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"solution")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(number|array)"),': n\xfamero denotando qual resposta est\xe1 correta ou uma "arraia" dos n\xfameros de resposta corretos no caso de o aluno ser capaz de selecionar m\xfaltiplas respostas. Default: ',(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"answers")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"array (required)"),': uma "briga" de objetos de resposta. Cada resposta deve ser um objeto com campos "conte\xfado" e "explica\xe7\xe3o", que denotam a op\xe7\xe3o de resposta exibida e uma explica\xe7\xe3o vis\xedvel ap\xf3s a pergunta ter sido submetida para explicar porque a resposta est\xe1 correta ou incorreta. Default: ',(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": coloca\xe7\xe3o das dicas (ou ",(0,o.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"right"),", ou ",(0,o.kt)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"hints")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": dicas que orientam como responder \xe0 pergunta. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"feedback")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": controla se devem ser exibidos bot\xf5es de feedback. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"disabled")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": controla se a quest\xe3o est\xe1 desativada. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"chat")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": controla se o elemento deve ter um bate-papo integrado. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),': seja "cheio", "incremental", ou "ningu\xe9m". Se ',(0,o.kt)("inlineCode",{parentName:"li"},"full"),", o feedback incluindo a resposta correta \xe9 exibido ap\xf3s os alunos submeterem suas respostas; se ",(0,o.kt)("inlineCode",{parentName:"li"},"incremental"),", o feedback \xe9 exibido apenas para a resposta selecionada; se ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),", nenhum feedback \xe9 retornado. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"'incremental'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": controla se as notifica\xe7\xf5es de submiss\xe3o devem ser desativadas. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"displaySolution")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": controla se a solu\xe7\xe3o \xe9 apresentada \xe0 partida. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"voiceID")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": identificador de controle de voz. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"until")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"Date"),": tempo at\xe9 que os estudantes tenham permiss\xe3o para enviar respostas. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"points")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),": n\xfamero m\xe1ximo de pontos concedidos na classifica\xe7\xe3o. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"style")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object"),": Estilos em linha CSS. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"onChange")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"function"),': chamada de retorno invocada toda vez que a resposta selecionada muda; recebe o \xedndice da pergunta selecionada como seu \xfanico argumento (ou uma matriz no caso da pergunta ser do tipo "Escolha todos os que se aplicam"). Default: ',(0,o.kt)("inlineCode",{parentName:"li"},"onChange(){}"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"function"),": chamada de retorno invocada ap\xf3s a apresenta\xe7\xe3o de uma resposta. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"onSubmit(){}"),".")),(0,o.kt)("h2",{id:"exemplos"},"Exemplos"),(0,o.kt)(r.Z,{defaultValue:"singleAnswer",values:[{label:"Single Answer",value:"singleAnswer"},{label:"Formatted Answers",value:"formattedAnswers"},{label:"Instant Feedback",value:"instantFeedback"},{label:"Multiple Answers",value:"multipleAnswers"},{label:"Series of Questions",value:"aSeries"},{label:"With Hints",value:"withHints"}],lazy:!0,mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"singleAnswer",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<MultipleChoiceQuestion\n    solution={0}\n    answers={[\n        {content:"Hierarchical Clustering"},\n        {content:"LASSO"},\n        {content:"Multiple regression"}\n    ]}\n    question="Which of the following methods are used for clustering?"\n/>\n'))),(0,o.kt)(l.Z,{value:"formattedAnswers",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MultipleChoiceQuestion\n    answers={[\n        {content: <span>**bold**</span>},\n        {content: <span>*italic*</span>},\n        {content: <span style={{ fontFamily: 'Georgia', color: 'red' }}>styled</span>}\n    ]}\n    question={<span style={{ fontSize: 33}}>What kind of font do you like the most?</span>}\n/>\n"))),(0,o.kt)(l.Z,{value:"instantFeedback",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<MultipleChoiceQuestion\n    solution={0}\n    answers={[\n        {content:"Hierarchical Clustering"},\n        {content:"LASSO"},\n        {content:"Multiple regression"}\n    ]}\n    question="Which of the following methods are used for clustering?"\n    provideFeedback="full"\n/>\n'))),(0,o.kt)(l.Z,{value:"multipleAnswers",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<MultipleChoiceQuestion\n    solution={[ 0, 3 ]}\n    answers={[\n        {content:"Hierarchical Clustering"},\n        {content:"LASSO"},\n        {content:"Multiple regression"},\n        {content:"kmeans"}\n    ]}\n    question="Which of the following methods are used for clustering?"\n    style={{ background: \'#FFF6F3\'}}\n/>\n'))),(0,o.kt)(l.Z,{value:"aSeries",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Slider>\n    <MultipleChoiceQuestion\n        solution={[ 1, 3 ]}\n        answers={[\n            { content:"George Washington", explanation: "Yes, he was the first president." },\n            { content:"Benjamin Franklin", explanation: "He was a founding father."},\n            { content:"Ulysses S. Grant", explanation: "General and 18th president." },\n            { content:"Alexander Hamilton", explanation: "Had aspirations, but died in a duel." }\n        ]}\n        question="Who was not a president of the United States?"\n        style={{ background: \'lightblue\'}}\n        feedback={false}\n    />\n    <MultipleChoiceQuestion\n        solution={[ 0, 3 ]}\n        answers={[\n            {content:"Hierarchical Clustering", explanation:""},\n            {content:"LASSO", explanation:""},\n            {content:"Multiple regression", explanation:""},\n            {content:"kmeans", explanation:""}\n        ]}\n        question="Which of the following methods are used for clustering?"\n        style={{ background: \'#FFF6F3\'}}\n        feedback={false}\n    />\n</Slider>\n'))),(0,o.kt)(l.Z,{value:"withHints",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<MultipleChoiceQuestion\n    solution={[ 1, 3 ]}\n    answers={[\n        { content:"George Washington", explanation: "Yes, he was the first president." },\n        { content:"Benjamin Franklin", explanation: "He was a founding father."},\n        { content:"Ulysses S. Grant", explanation: "General and 18th president." },\n        { content:"Alexander Hamilton", explanation: "Had aspirations, but died in a duel." }\n    ]}\n    question="Who was not a president of the United States?"\n    style={{ background: \'lightblue\'}}\n    feedback={false}\n    hints={[\n        \'Washington - that is a no-brainer, isn\\\'t it?\',\n        \'Franklin was famous for his invention of the lightning rod - so why become more?\',\n        \'Hamilton was a founding father, but got in this deadly quarrel with Aaron Burr.\',\n    ]}\n    hintPlacement="top"\n/>\n')))))}f.isMDXComponent=!0},386010:function(e,n,t){function a(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}function i(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(i&&(i+=" "),i+=n);return i}t.d(n,{Z:function(){return i}})}}]);