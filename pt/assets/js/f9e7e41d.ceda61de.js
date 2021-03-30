(window.webpackJsonp=window.webpackJsonp||[]).push([[1279],{304:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),o=(n(0),n(410)),r=n(443),l=n(444),s={id:"select-question",title:"Select Question",sidebar_label:"Select Question"},c={unversionedId:"questions/select-question",id:"questions/select-question",isDocsHomePage:!1,title:"Select Question",description:"Um componente de pergunta seleta.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/questions/select.md",slug:"/questions/select-question",permalink:"/pt/docs/questions/select-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/select.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614117474,formattedLastUpdatedAt:"23/02/2021",sidebar_label:"Select Question",sidebar:"docs",previous:{title:"Range Question",permalink:"/pt/docs/questions/range-question"},next:{title:"Select Question Matrix",permalink:"/pt/docs/questions/select-question-matrix"}},u=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",children:[]},{value:"Exemplos",id:"exemplos",children:[]}],b={toc:u};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Um componente de pergunta seleta."),Object(o.b)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"question")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(string|node)"),": pergunta para a qual o estudante tem que selecionar uma das op\xe7\xf5es de resposta dispon\xedveis. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"''"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"options")," | ",Object(o.b)("inlineCode",{parentName:"li"},"array (required)"),": op\xe7\xf5es de resposta dispon\xedveis a partir das quais o estudante pode selecionar. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"solution")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number (required)"),": \xedndice de elemento de solu\xe7\xe3o em ",Object(o.b)("inlineCode",{parentName:"li"},"op\xe7\xf5es'.. Default: "),"none`."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"preselected")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": \xedndice de op\xe7\xe3o de resposta pr\xe9-selecionada. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"0"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"inline")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": controla se o componente \xe9 ou n\xe3o tornado em linha. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"hintPlacement")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),': coloca\xe7\xe3o das dicas (ou "cima", "esquerda", "direita", ou "baixo"). Default: ',Object(o.b)("inlineCode",{parentName:"li"},"'top'"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"hints")," | ",Object(o.b)("inlineCode",{parentName:"li"},"array<(string|node)>"),": dicas que orientam como responder \xe0 pergunta. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"feedback")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": controla se devem ser exibidos bot\xf5es de feedback. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"true"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"chat")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": controla se o elemento deve ter um bate-papo integrado. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"provideFeedback")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": indica se o feedback, incluindo a resposta correta, deve ser exibido depois que os alunos enviarem suas respostas. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"true"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"failureMsg")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": mensagem a ser exibida quando o estudante seleciona uma resposta errada. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"'Not quite, try again!'"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"successMsg")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": mensagem a ser exibida quando o estudante seleciona a resposta correta. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"'That's the correct answer!'"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"points")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": n\xfamero m\xe1ximo de pontos concedidos na classifica\xe7\xe3o. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"10"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"style")," | ",Object(o.b)("inlineCode",{parentName:"li"},"object"),": Estilos em linha CSS. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onChange")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": chamada de retorno que \xe9 acionada ap\xf3s a a\xe7\xe3o de apresenta\xe7\xe3o. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"onChange() {}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": chamada de retorno invocada quando a resposta \xe9 submetida; tem como primeiro par\xe2metro um ",Object(o.b)("inlineCode",{parentName:"li"},"booleano")," indicando se a resposta foi respondida corretamente (se aplic\xe1vel, ",Object(o.b)("inlineCode",{parentName:"li"},"nulo")," de outra forma) e a resposta fornecida como segundo par\xe2metro. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),Object(o.b)("h2",{id:"exemplos"},"Exemplos"),Object(o.b)(r.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Style",value:"withStyle"},{label:"Inline",value:"inline"},{label:"With Hints",value:"with Hints"},{label:"Submit Function Hints",value:"submitFunction"}],lazy:!0,mdxType:"Tabs"},Object(o.b)(l.a,{value:"minimal",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestion\n    question=\"The usual t-test is\"\n    solution={2}\n    options={[\n        'left-sided',\n        'right-sided',\n        'two-sided'\n    ]}\n/>\n"))),Object(o.b)(l.a,{value:"withStyle",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestion\n    question=\"The usual t-test is\"\n    solution={2}\n    options={[\n        'left-sided',\n        'right-sided',\n        'two-sided'\n    ]}\n    style={{ background: 'gainsboro', boxShadow: '0 0 10px black'}}\n/>\n"))),Object(o.b)(l.a,{value:"inline",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"The usual t-test is:\n<SelectQuestion\n    question=\"The usual t-test is\"\n    solution={2}\n    options={[\n        'left-sided',\n        'right-sided',\n        'two-sided'\n    ]}\n    inline\n/> ... so you can us it in the midst of a longer paragraph\n"))),Object(o.b)(l.a,{value:"withHints",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<SelectQuestion\n    question="White is "\n    solution={1}\n    options={[\n        \'a primary color\',\n        \'not a primary color\'\n    ]}\n    hints={[ "There are 3 primary colors", "Red is a primary color", "and so is yellow" ]}\n/>\n'))),Object(o.b)(l.a,{value:"submitFunction",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestion\n    question=\"Select the primary color\"\n    solution={2}\n    options={[\n        'orange',\n        'white',\n        'red'\n    ]}\n    onSubmit={(result) => {\n        switch ( result ) {\n            case 'orange':\n                alert( 'No, orange is a mix of yellow and red.' );\n            break;\n            case 'white':\n                alert( 'White does not count as a color.' );\n            break;\n            case 'red':\n                alert( 'That is correct.' );\n            break;\n        }\n    }}\n    provideFeedback={false}\n/> \n")))))}p.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,m=b["".concat(r,".").concat(d)]||b[d]||p[d]||o;return n?i.a.createElement(m,l(l({ref:t},c),{},{components:n})):i.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},434:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},440:function(e,t,n){"use strict";var a=n(0),i=n(441);t.a=function(){const e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},441:function(e,t,n){"use strict";var a=n(0);const i=Object(a.createContext)(void 0);t.a=i},443:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(440),r=n(434),l=n(57),s=n.n(l);const c=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:l,values:b,groupId:p,className:d}=e,{tabGroupChoices:m,setTabGroupChoices:O}=Object(o.a)(),[j,f]=Object(a.useState)(l),g=a.Children.toArray(e.children),N=[];if(null!=p){const e=m[p];null!=e&&e!==j&&b.some((t=>t.value===e))&&f(e)}const v=e=>{const t=e.target,n=N.indexOf(t),a=g[n].props.value;f(a),null!=p&&(O(p,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:i}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:r}=window;return t>=0&&i<=r&&a<=o&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s.a.tabItemActive),setTimeout((()=>t.classList.remove(s.a.tabItemActive)),2e3))}),150))},h=e=>{var t;let n;switch(e.keyCode){case u:{const t=N.indexOf(e.target)+1;n=N[t]||N[0];break}case c:{const t=N.indexOf(e.target)-1;n=N[t]||N[N.length-1];break}}null===(t=n)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":n},d)},b.map((({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,className:Object(r.a)("tabs__item",s.a.tabItem,{"tabs__item--active":j===e}),key:e,ref:e=>N.push(e),onKeyDown:h,onFocus:v,onClick:v},t)))),t?Object(a.cloneElement)(g.filter((e=>e.props.value===j))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}},444:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function({children:e,hidden:t,className:n}){return i.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);