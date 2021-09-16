"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8620],{603905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(202784);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=i,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return t?a.createElement(f,r(r({ref:n},p),{},{components:t})):a.createElement(f,r({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},358215:function(e,n,t){var a=t(202784);n.Z=function(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:i},n)}},855064:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(202784),i=t(79443);var o=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=t(386010),l="tabItem_1uMI",s="tabItemActive_2DSg";var u=function(e){var n,t=e.lazy,i=e.block,u=e.defaultValue,p=e.values,c=e.groupId,m=e.className,d=a.Children.toArray(e.children),f=null!=p?p:d.map((function(e){return{value:e.props.value,label:e.props.label}})),b=null!=u?u:null==(n=d.find((function(e){return e.props.default})))?void 0:n.props.value,k=o(),v=k.tabGroupChoices,g=k.setTabGroupChoices,N=(0,a.useState)(b),h=N[0],y=N[1],q=[];if(null!=c){var x=v[c];null!=x&&x!==h&&f.some((function(e){return e.value===x}))&&y(x)}var C=function(e){var n=e.currentTarget,t=q.indexOf(n),a=f[t].value;y(a),null!=c&&(g(c,a),setTimeout((function(){var e,t,a,i,o,r,l,u;(e=n.getBoundingClientRect(),t=e.top,a=e.left,i=e.bottom,o=e.right,r=window,l=r.innerHeight,u=r.innerWidth,t>=0&&o<=u&&i<=l&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(s),setTimeout((function(){return n.classList.remove(s)}),2e3))}),150))},w=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=q.indexOf(e.target)+1;t=q[a]||q[0];break;case"ArrowLeft":var i=q.indexOf(e.target)-1;t=q[i]||q[q.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},m)},f.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:h===n?0:-1,"aria-selected":h===n,className:(0,r.Z)("tabs__item",l,{"tabs__item--active":h===n}),key:n,ref:function(e){return q.push(e)},onKeyDown:w,onFocus:C,onClick:C},null!=t?t:n)}))),t?(0,a.cloneElement)(d.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},d.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==h})}))))}},79443:function(e,n,t){var a=(0,t(202784).createContext)(void 0);n.Z=a},593958:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return m},default:function(){return f}});var a=t(487462),i=t(263366),o=(t(202784),t(603905)),r=t(855064),l=t(358215),s=["components"],u={id:"quiz",title:"Quiz",sidebar_label:"Quiz"},p=void 0,c={unversionedId:"questions/quiz",id:"questions/quiz",isDocsHomePage:!1,title:"Quiz",description:"Um componente de quiz exibindo uma seq\xfc\xeancia de componentes de perguntas.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/questions/quiz.md",sourceDirName:"questions",slug:"/questions/quiz",permalink:"/pt/docs/questions/quiz",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/quiz.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614117474,formattedLastUpdatedAt:"23/02/2021",frontMatter:{id:"quiz",title:"Quiz",sidebar_label:"Quiz"},sidebar:"docs",previous:{title:"Question Form",permalink:"/pt/docs/questions/question-form"},next:{title:"Range Question",permalink:"/pt/docs/questions/range-question"}},m=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",children:[]},{value:"Exemplos",id:"exemplos",children:[]}],d={toc:m};function f(e){var n=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Um componente de quiz exibindo uma seq\xfc\xeancia de componentes de perguntas."),(0,o.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"confidence")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": se deve exibir uma escala Likert pedindo a confian\xe7a da resposta do usu\xe1rio. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"forceConfidence")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": controla se um usu\xe1rio tem que fornecer um n\xedvel de confian\xe7a antes de passar para a pr\xf3xima pergunta. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"count")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),": n\xfamero de perguntas a incluir no question\xe1rio. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"questions")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"array (required)"),": matriz de perguntas a partir das quais as perguntas ser\xe3o selecionadas aleatoriamente. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"active")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": controla se o temporizador para o question\xe1rio est\xe1 ativo. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"duration")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),": dura\xe7\xe3o do question\xe1rio (em minutos); uma vez terminado o tempo, a p\xe1gina de resumo ser\xe1 exibida. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"skippable")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": controla se as perguntas do question\xe1rio podem ser ignoradas. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"footerNodes")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"array"),": matriz de n\xf3s a serem exibidos no rodap\xe9 de cada pergunta. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"nextLabel")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": etiqueta de bot\xe3o para avan\xe7ar para a pr\xf3xima pergunta. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": controla se os alunos devem mostrar aos alunos o feedback sobre a exatid\xe3o de suas respostas ap\xf3s a conclus\xe3o do quiz. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"showFinishButton")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": controla se deve exibir o bot\xe3o para terminar o question\xe1rio e saltar diretamente para a p\xe1gina de resultados. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"finishLabel")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": etiqueta de bot\xe3o para terminar o quiz. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"downloadButton")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": controla se deve ser exibido um bot\xe3o para baixar as respostas. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"onFinished")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"function"),": chamada de retorno invocada quando o question\xe1rio \xe9 conclu\xeddo e a p\xe1gina de resultados \xe9 exibida. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"onFinished() {}"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"function"),": chamada de retorno invocada quando o usu\xe1rio submete uma resposta. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,o.kt)("h2",{id:"exemplos"},"Exemplos"),(0,o.kt)(r.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Subset of Questions",value:"subset"},{label:"Not Skippable",value:"notSkippable"},{label:"Confidence Check",value:"confidenceCheck"},,],lazy:!0,mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Quiz\n    questions={[\n        <FreeTextQuestion \n            question="What is the capital of France?" \n            rows={1} \n            solution="Paris" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Poland?" \n            rows={1} \n            solution="Warsaw" \n        />\n    ]}\n/>\n'))),(0,o.kt)(l.Z,{value:"subset",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Quiz\n    count={3}\n    questions={[\n        <FreeTextQuestion \n            question="What is the capital of France?" \n            rows={1} \n            solution="Paris" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Poland?" \n            rows={1} \n            solution="Warsaw" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Portugal?" \n            rows={1} \n            solution="Lisbon" \n        />,     \n        <FreeTextQuestion \n            question="What is the capital of Egypt?" \n            rows={1} \n            solution="Cairo" \n        />\n    ]}\n/>\n'))),(0,o.kt)(l.Z,{value:"notSkippable",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Quiz\n    skippable={false}\n    questions={[\n        <FreeTextQuestion \n            question="What is the capital of France?" \n            rows={1} \n            solution="Paris" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Poland?" \n            rows={1} \n            solution="Warsaw" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Portugal?" \n            rows={1} \n            solution="Lisbon" \n        />,     \n        <FreeTextQuestion \n            question="What is the capital of Egypt?" \n            rows={1} \n            solution="Cairo" \n        />\n    ]}\n/>\n'))),(0,o.kt)(l.Z,{value:"confidenceCheck",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Quiz\n    confidence\n    forceConfidence\n    count={4}\n    questions={[\n        <FreeTextQuestion \n            question="What is the capital of France?" \n            rows={1} \n            solution="Paris" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Poland?" \n            rows={1} \n            solution="Warsaw" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Portugal?" \n            rows={1} \n            solution="Lisbon" \n        />,     \n        <FreeTextQuestion \n            question="What is the capital of Egypt?" \n            rows={1} \n            solution="Cairo" \n        />\n    ]}\n/>\n')))))}f.isMDXComponent=!0},386010:function(e,n,t){function a(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}function i(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(i&&(i+=" "),i+=n);return i}t.d(n,{Z:function(){return i}})}}]);