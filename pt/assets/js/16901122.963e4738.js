(self.webpackChunk=self.webpackChunk||[]).push([[451],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=u(n),c=i,f=d["".concat(s,".").concat(c)]||d[c]||p[c]||r;return n?a.createElement(f,o(o({ref:t},m),{},{components:n})):a.createElement(f,o({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},358215:function(e,t,n){"use strict";var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},541395:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var a=n(202784),i=n(180944),r=n(386010),o="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,u=39;var m=function(e){var t=e.lazy,n=e.block,m=e.defaultValue,p=e.values,d=e.groupId,c=e.className,f=(0,i.Z)(),k=f.tabGroupChoices,b=f.setTabGroupChoices,g=(0,a.useState)(m),v=g[0],N=g[1],h=a.Children.toArray(e.children),x=[];if(null!=d){var y=k[d];null!=y&&y!==v&&p.some((function(e){return e.value===y}))&&N(y)}var C=function(e){var t=e.currentTarget,n=x.indexOf(t),a=p[n].value;N(a),null!=d&&(b(d,a),setTimeout((function(){var e,n,a,i,r,o,s,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,r=e.right,o=window,s=o.innerHeight,u=o.innerWidth,n>=0&&r<=u&&i<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},w=function(e){var t,n;switch(e.keyCode){case u:var a=x.indexOf(e.target)+1;n=x[a]||x[0];break;case s:var i=x.indexOf(e.target)-1;n=x[i]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},c)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,r.Z)("tabs__item",o,{"tabs__item--active":v===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:w,onFocus:C,onClick:C},n)}))),t?(0,a.cloneElement)(h.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},79443:function(e,t,n){"use strict";var a=(0,n(202784).createContext)(void 0);t.Z=a},180944:function(e,t,n){"use strict";var a=n(202784),i=n(79443);t.Z=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},206262:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m},default:function(){return d}});var a=n(722122),i=n(419756),r=(n(202784),n(603905)),o=n(541395),l=n(358215),s={id:"free-text-question",title:"Free Text Question",sidebar_label:"Free Text Question"},u={unversionedId:"questions/free-text-question",id:"questions/free-text-question",isDocsHomePage:!1,title:"Free Text Question",description:"Um componente ISLE para perguntas onde as respostas dos estudantes devem ser fornecidas na forma de texto livre.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/questions/free-text.md",sourceDirName:"questions",slug:"/questions/free-text-question",permalink:"/docs/questions/free-text-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/free-text.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614117474,formattedLastUpdatedAt:"23/02/2021",sidebar_label:"Free Text Question",frontMatter:{id:"free-text-question",title:"Free Text Question",sidebar_label:"Free Text Question"},sidebar:"docs",previous:{title:"h6",permalink:"/docs/html/h6"},next:{title:"Image Question",permalink:"/docs/questions/image-question"}},m=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",children:[]},{value:"Exemplos",id:"exemplos",children:[]}],p={toc:m};function d(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Um componente ISLE para perguntas onde as respostas dos estudantes devem ser fornecidas na forma de texto livre."),(0,r.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"question")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": a pergunta exibida na parte superior do componente de pergunta de texto livre. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hints")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": dicas que orientam como responder \xe0 pergunta. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),': coloca\xe7\xe3o das dicas (ou "cima", "esquerda", "direita", ou "baixo"). Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"'top'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"feedback")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controla se devem ser exibidos bot\xf5es de feedback. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"solution")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": uma resposta modelo para o problema. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"instantSolution")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": se \xe9 poss\xedvel alternar a exibi\xe7\xe3o da resposta do modelo imediatamente. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"rows")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": n\xfamero de linhas do campo de texto para os estudantes digitarem suas respostas. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"chat")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controla se o bate-papo em grupo deve ser ativado para a pergunta. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"resizable")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controla se a \xe1rea de texto deve ser redimension\xe1vel. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"placeholder")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": texto de espa\xe7o reservado exibido antes do usu\xe1rio ter inserido qualquer texto. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controla se as notifica\xe7\xf5es de submiss\xe3o devem ser desativadas. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"submissionMsg")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": notifica\xe7\xe3o exibida quando o aprendiz apresenta sua resposta pela primeira vez. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"resubmissionMsg")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": notifica\xe7\xe3o exibida para todos os envios ap\xf3s o primeiro. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'You have successfully re-submitted your answer.'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": indica se o feedback, incluindo a resposta correta, deve ser exibido depois que os alunos enviarem suas respostas. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"maxlength")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": n\xfamero m\xe1ximo permitido de caracteres. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"2500"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"voiceID")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": identificador de controle de voz. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"until")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"Date"),": tempo at\xe9 que os estudantes tenham permiss\xe3o para enviar respostas. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"points")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": n\xfamero m\xe1ximo de pontos concedidos na classifica\xe7\xe3o. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"className")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": nome da classe. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": Estilos em linha CSS. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChange")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": chamada de retorno invocada sempre que o valor da \xe1rea de texto muda; recebe o texto atual como seu \xfanico argumento. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": chamada de retorno invocada quando o usu\xe1rio submete uma resposta; recebe o texto submetido como seu \xfanico argumento. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,r.kt)("h2",{id:"exemplos"},"Exemplos"),(0,r.kt)(o.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Points for Grading",value:"withPointsForGrading"},{label:"No Feedback",value:"withoutFeedbackAndNotification"},{label:"Solution",value:"withSolution"},{label:"Hints",value:"withHints"},{label:"Placeholder",value:"placeholderText"},{label:"Due Date",value:"dueDate"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FreeTextQuestion \n    question="Please tell us your thoughts about this course." \n    rows={3} \n/>\n'))),(0,r.kt)(l.Z,{value:"withPointsForGrading",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<FreeTextQuestion \n    question={<span>Can you please explain Montesquieu's System of *separation of powers*?</span>} \n    rows={3} \n    points={15}\n/>\n"))),(0,r.kt)(l.Z,{value:"withoutFeedbackAndNotification",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FreeTextQuestion \n    question="Please tell us your thoughts about this course." \n    rows={3}\n    disableSubmitNotification \n    feedback={false}\n/>\n'))),(0,r.kt)(l.Z,{value:"withSolution",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FreeTextQuestion \n    question="Who was the English prime minister who spoke of \'blood, sweat and tears\'?" \n    rows={1} \n    solution="Winston Churchill" \n/>\n'))),(0,r.kt)(l.Z,{value:"withHints",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FreeTextQuestion \n    question="Who was the English prime minister who spoke of \'blood, sweat and tears\'?" \n    rows={1} \n    solution="Winston Churchill" \n    hints = {["No, it was not Margret Thatcher", "He believed in Aliens by the way", "His first name was Winston - like the guy in 1984"]}\n    submissionMsg = "His name was Winston churchill, and it occurred in a speech given by him to the House of Commons of the Parliament of the United Kingdom on 13 May 1940. The speech is sometimes known by that name"\n/>\n'))),(0,r.kt)(l.Z,{value:"placeholderText",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FreeTextQuestion \n    question="Who was the English prime minister who spoke of \'blood, sweat and tears\'?" \n    rows={3} \n    solution="Winston Churchill" \n    placeholder="Think of an overweight politician with a big cigar in his mouth."\n/>\n'))),(0,r.kt)(l.Z,{value:"dueDate",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FreeTextQuestion \n    question="Please tell us your thoughts about this course." \n    rows={3} \n    until={new Date( Date.UTC(2029, 0, 1, 3, 33 ) )}\n    placeholder="You can set a date until answers are accepted. In this case it is 2020, 1st of January, 3:30 am UTC time."\n/>\n')))))}d.isMDXComponent=!0},386010:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);