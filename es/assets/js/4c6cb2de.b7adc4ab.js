(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{169:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(3),i=t(7),r=(t(0),t(411)),o=t(460),l=t(461),s={id:"quiz",title:"Quiz",sidebar_label:"Quiz"},u={unversionedId:"questions/quiz",id:"questions/quiz",isDocsHomePage:!1,title:"Quiz",description:"Un componente de prueba que muestra una secuencia de componentes de la pregunta.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/questions/quiz.md",slug:"/questions/quiz",permalink:"/es/docs/questions/quiz",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/quiz.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614117474,sidebar_label:"Quiz",sidebar:"docs",previous:{title:"Question Form",permalink:"/es/docs/questions/question-form"},next:{title:"Range Question",permalink:"/es/docs/questions/range-question"}},c=[{value:"Opciones",id:"opciones",children:[]},{value:"Ejemplos",id:"ejemplos",children:[]}],b={toc:c};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Un componente de prueba que muestra una secuencia de componentes de la pregunta."),Object(r.b)("h2",{id:"opciones"},"Opciones"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"confidence")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": si mostrar una escala de Likert pidiendo la confianza de la respuesta del usuario. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"forceConfidence")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controla si un usuario tiene que proporcionar un nivel de confianza antes de pasar a la siguiente pregunta. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"count")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": n\xfamero de preguntas a incluir en el cuestionario. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"questions")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array (required)"),": una serie de preguntas de las cuales se seleccionar\xe1n al azar. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"active")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controla si el temporizador del concurso est\xe1 activo. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"duration")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": duraci\xf3n del examen (en minutos); una vez que se acabe el tiempo, se mostrar\xe1 la p\xe1gina de resumen. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"skippable")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controla si las preguntas del cuestionario se pueden saltar. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"footerNodes")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": una serie de nodos que se mostrar\xe1n en el pie de cada pregunta. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"nextLabel")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": etiqueta del bot\xf3n para avanzar a la siguiente pregunta. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"provideFeedback")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controla si mostrar a los estudiantes la informaci\xf3n sobre la correcci\xf3n de sus respuestas despu\xe9s de completar el cuestionario. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"showFinishButton")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controla si se muestra el bot\xf3n para terminar la prueba y saltar directamente a la p\xe1gina de resultados. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"finishLabel")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": etiqueta del bot\xf3n para terminar el examen. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"downloadButton")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controla si se muestra un bot\xf3n para descargar las respuestas. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onFinished")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": Se devuelve la llamada cuando se termina el cuestionario y se muestra la p\xe1gina de resultados.. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onFinished() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": La devoluci\xf3n de llamada invocada cuando el usuario presenta una respuesta. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),Object(r.b)("h2",{id:"ejemplos"},"Ejemplos"),Object(r.b)(o.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Subset of Questions",value:"subset"},{label:"Not Skippable",value:"notSkippable"},{label:"Confidence Check",value:"confidenceCheck"},,],lazy:!0,mdxType:"Tabs"},Object(r.b)(l.a,{value:"minimal",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Quiz\n    questions={[\n        <FreeTextQuestion \n            question="What is the capital of France?" \n            rows={1} \n            solution="Paris" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Poland?" \n            rows={1} \n            solution="Warsaw" \n        />\n    ]}\n/>\n'))),Object(r.b)(l.a,{value:"subset",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Quiz\n    count={3}\n    questions={[\n        <FreeTextQuestion \n            question="What is the capital of France?" \n            rows={1} \n            solution="Paris" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Poland?" \n            rows={1} \n            solution="Warsaw" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Portugal?" \n            rows={1} \n            solution="Lisbon" \n        />,     \n        <FreeTextQuestion \n            question="What is the capital of Egypt?" \n            rows={1} \n            solution="Cairo" \n        />\n    ]}\n/>\n'))),Object(r.b)(l.a,{value:"notSkippable",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Quiz\n    skippable={false}\n    questions={[\n        <FreeTextQuestion \n            question="What is the capital of France?" \n            rows={1} \n            solution="Paris" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Poland?" \n            rows={1} \n            solution="Warsaw" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Portugal?" \n            rows={1} \n            solution="Lisbon" \n        />,     \n        <FreeTextQuestion \n            question="What is the capital of Egypt?" \n            rows={1} \n            solution="Cairo" \n        />\n    ]}\n/>\n'))),Object(r.b)(l.a,{value:"confidenceCheck",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Quiz\n    confidence\n    forceConfidence\n    count={4}\n    questions={[\n        <FreeTextQuestion \n            question="What is the capital of France?" \n            rows={1} \n            solution="Paris" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Poland?" \n            rows={1} \n            solution="Warsaw" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Portugal?" \n            rows={1} \n            solution="Lisbon" \n        />,     \n        <FreeTextQuestion \n            question="What is the capital of Egypt?" \n            rows={1} \n            solution="Cairo" \n        />\n    ]}\n/>\n')))))}p.isMDXComponent=!0},411:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=i.a.createContext({}),c=function(e){var n=i.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=c(e.components);return i.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=c(t),m=a,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||r;return t?i.a.createElement(d,l(l({ref:n},u),{},{components:t})):i.a.createElement(d,l({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=t[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},445:function(e,n,t){"use strict";function a(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}n.a=function(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(i&&(i+=" "),i+=n);return i}},458:function(e,n,t){"use strict";var a=t(0),i=t(459);n.a=function(){const e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},459:function(e,n,t){"use strict";var a=t(0);const i=Object(a.createContext)(void 0);n.a=i},460:function(e,n,t){"use strict";var a=t(0),i=t.n(a),r=t(458),o=t(445),l=t(58),s=t.n(l);const u=37,c=39;n.a=function(e){const{lazy:n,block:t,defaultValue:l,values:b,groupId:p,className:m}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(r.a)(),[O,j]=Object(a.useState)(l),g=a.Children.toArray(e.children),N=[];if(null!=p){const e=d[p];null!=e&&e!==O&&b.some((n=>n.value===e))&&j(e)}const v=e=>{const n=e.target,t=N.indexOf(n),a=g[t].props.value;j(a),null!=p&&f(p,a)},h=e=>{var n;let t;switch(e.keyCode){case c:const n=N.indexOf(e.target)+1;t=N[n]||N[0];break;case u:const a=N.indexOf(e.target)-1;t=N[a]||N[N.length-1]}null===(n=t)||void 0===n||n.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},m)},b.map((({value:e,label:n})=>i.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>N.push(e),onKeyDown:h,onFocus:v,onClick:v},n)))),n?Object(a.cloneElement)(g.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},g.map(((e,n)=>Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==O})))))}},461:function(e,n,t){"use strict";var a=t(0),i=t.n(a);n.a=function({children:e,hidden:n,className:t}){return i.a.createElement("div",{role:"tabpanel",hidden:n,className:t},e)}}}]);