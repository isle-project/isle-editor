(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{186:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(410)),o=n(443),l=n(444),s={id:"free-text-question",title:"Free Text Question",sidebar_label:"Free Text Question"},c={unversionedId:"questions/free-text-question",id:"questions/free-text-question",isDocsHomePage:!1,title:"Free Text Question",description:"Un componente de ISLE para preguntas donde las respuestas de los estudiantes deben ser suministradas en forma de texto libre.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/questions/free-text.md",slug:"/questions/free-text-question",permalink:"/es/docs/questions/free-text-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/free-text.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614117474,formattedLastUpdatedAt:"23/2/2021",sidebar_label:"Free Text Question",sidebar:"docs",previous:{title:"h6",permalink:"/es/docs/html/h6"},next:{title:"Image Question",permalink:"/es/docs/questions/image-question"}},b=[{value:"Opciones",id:"opciones",children:[]},{value:"Ejemplos",id:"ejemplos",children:[]}],u={toc:b};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Un componente de ISLE para preguntas donde las respuestas de los estudiantes deben ser suministradas en forma de texto libre."),Object(r.b)("h2",{id:"opciones"},"Opciones"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"question")," | ",Object(r.b)("inlineCode",{parentName:"li"},"(string|node)"),": la pregunta que aparece en la parte superior del componente de la pregunta de texto libre. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"''"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"hints")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array<(string|node)>"),": consejos que proporcionan orientaci\xf3n sobre c\xf3mo responder a la pregunta. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"hintPlacement")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),': la colocaci\xf3n de las pistas (ya sea "arriba", "izquierda", "derecha" o "abajo"). Default: ',Object(r.b)("inlineCode",{parentName:"li"},"'top'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"feedback")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controla si se muestran los botones de retroalimentaci\xf3n. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"solution")," | ",Object(r.b)("inlineCode",{parentName:"li"},"(string|node)"),": una respuesta modelo al problema. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"''"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"instantSolution")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": si se puede cambiar la visualizaci\xf3n de la respuesta del modelo inmediatamente. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"rows")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": n\xfamero de filas del campo de texto para que los estudiantes escriban sus respuestas. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"5"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"chat")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controla si para habilitar el chat en grupo debe para la pregunta. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"resizable")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controla si el \xe1rea de texto debe ser redimensionada. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"placeholder")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": El texto del marcador de posici\xf3n que se muestra antes de que el usuario haya introducido cualquier texto. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"''"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"disableSubmitNotification")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controla si se desactivan las notificaciones de presentaci\xf3n. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"submissionMsg")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": La notificaci\xf3n que se muestra cuando el aprendiz presenta su respuesta por primera vez. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"''"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"resubmissionMsg")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": notificaci\xf3n mostrada para todas las presentaciones despu\xe9s de la primera. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'You have successfully re-submitted your answer.'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"provideFeedback")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": indica si la retroalimentaci\xf3n, incluyendo la respuesta correcta, debe ser mostrada despu\xe9s de que los estudiantes env\xeden sus respuestas. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"maxlength")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": n\xfamero m\xe1ximo permitido de caracteres. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"2500"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"voiceID")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": identificador de control de voz. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"until")," | ",Object(r.b)("inlineCode",{parentName:"li"},"Date"),": tiempo hasta que los estudiantes puedan presentar sus respuestas. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"points")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": n\xfamero m\xe1ximo de puntos otorgados en la calificaci\xf3n. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"10"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"className")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": nombre de la clase. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"''"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"style")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": Estilos en l\xednea CSS. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onChange")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": llamada de retorno invocada cada vez que el valor del \xe1rea de texto cambia; recibe el texto actual como su \xfanico argumento. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onChange() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": llamada de retorno invocada cuando el usuario presenta una respuesta; recibe el texto presentado como su \xfanico argumento. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),Object(r.b)("h2",{id:"ejemplos"},"Ejemplos"),Object(r.b)(o.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Points for Grading",value:"withPointsForGrading"},{label:"No Feedback",value:"withoutFeedbackAndNotification"},{label:"Solution",value:"withSolution"},{label:"Hints",value:"withHints"},{label:"Placeholder",value:"placeholderText"},{label:"Due Date",value:"dueDate"}],lazy:!0,mdxType:"Tabs"},Object(r.b)(l.a,{value:"minimal",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FreeTextQuestion \n    question="Please tell us your thoughts about this course." \n    rows={3} \n/>\n'))),Object(r.b)(l.a,{value:"withPointsForGrading",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<FreeTextQuestion \n    question={<span>Can you please explain Montesquieu's System of *separation of powers*?</span>} \n    rows={3} \n    points={15}\n/>\n"))),Object(r.b)(l.a,{value:"withoutFeedbackAndNotification",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FreeTextQuestion \n    question="Please tell us your thoughts about this course." \n    rows={3}\n    disableSubmitNotification \n    feedback={false}\n/>\n'))),Object(r.b)(l.a,{value:"withSolution",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FreeTextQuestion \n    question="Who was the English prime minister who spoke of \'blood, sweat and tears\'?" \n    rows={1} \n    solution="Winston Churchill" \n/>\n'))),Object(r.b)(l.a,{value:"withHints",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FreeTextQuestion \n    question="Who was the English prime minister who spoke of \'blood, sweat and tears\'?" \n    rows={1} \n    solution="Winston Churchill" \n    hints = {["No, it was not Margret Thatcher", "He believed in Aliens by the way", "His first name was Winston - like the guy in 1984"]}\n    submissionMsg = "His name was Winston churchill, and it occurred in a speech given by him to the House of Commons of the Parliament of the United Kingdom on 13 May 1940. The speech is sometimes known by that name"\n/>\n'))),Object(r.b)(l.a,{value:"placeholderText",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FreeTextQuestion \n    question="Who was the English prime minister who spoke of \'blood, sweat and tears\'?" \n    rows={3} \n    solution="Winston Churchill" \n    placeholder="Think of an overweight politician with a big cigar in his mouth."\n/>\n'))),Object(r.b)(l.a,{value:"dueDate",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FreeTextQuestion \n    question="Please tell us your thoughts about this course." \n    rows={3} \n    until={new Date( Date.UTC(2029, 0, 1, 3, 33 ) )}\n    placeholder="You can set a date until answers are accepted. In this case it is 2020, 1st of January, 3:30 am UTC time."\n/>\n')))))}p.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=b(n),m=a,d=u["".concat(o,".").concat(m)]||u[m]||p[m]||r;return n?i.a.createElement(d,l(l({ref:t},c),{},{components:n})):i.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},434:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},440:function(e,t,n){"use strict";var a=n(0),i=n(441);t.a=function(){const e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},441:function(e,t,n){"use strict";var a=n(0);const i=Object(a.createContext)(void 0);t.a=i},443:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(440),o=n(434),l=n(57),s=n.n(l);const c=37,b=39;t.a=function(e){const{lazy:t,block:n,defaultValue:l,values:u,groupId:p,className:m}=e,{tabGroupChoices:d,setTabGroupChoices:j}=Object(r.a)(),[O,f]=Object(a.useState)(l),g=a.Children.toArray(e.children),N=[];if(null!=p){const e=d[p];null!=e&&e!==O&&u.some((t=>t.value===e))&&f(e)}const h=e=>{const t=e.target,n=N.indexOf(t),a=g[n].props.value;f(a),null!=p&&(j(p,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:i}=e.getBoundingClientRect(),{innerHeight:r,innerWidth:o}=window;return t>=0&&i<=o&&a<=r&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s.a.tabItemActive),setTimeout((()=>t.classList.remove(s.a.tabItemActive)),2e3))}),150))},v=e=>{var t;let n;switch(e.keyCode){case b:{const t=N.indexOf(e.target)+1;n=N[t]||N[0];break}case c:{const t=N.indexOf(e.target)-1;n=N[t]||N[N.length-1];break}}null===(t=n)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},m)},u.map((({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>N.push(e),onKeyDown:v,onFocus:h,onClick:h},t)))),t?Object(a.cloneElement)(g.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},444:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function({children:e,hidden:t,className:n}){return i.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);