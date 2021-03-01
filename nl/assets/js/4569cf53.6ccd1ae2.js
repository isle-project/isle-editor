(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{165:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return d}));var a=t(3),i=t(7),r=(t(0),t(411)),l=t(460),o=t(461),s={id:"multiple-choice-question",title:"Multiple Choice Question",sidebar_label:"Multiple Choice Question"},c={unversionedId:"questions/multiple-choice-question",id:"questions/multiple-choice-question",isDocsHomePage:!1,title:"Multiple Choice Question",description:"Een ISLE-component die een meerkeuzevraag maakt. Het ondersteunt het geval waarin de leerling een enkel antwoord moet selecteren en wanneer er mogelijk meerdere juiste antwoorden zijn en alle juiste antwoorden moeten worden gekozen.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/questions/multiple-choice.md",slug:"/questions/multiple-choice-question",permalink:"/nl/docs/questions/multiple-choice-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/multiple-choice.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614117474,sidebar_label:"Multiple Choice Question",sidebar:"docs",previous:{title:"Match List Question",permalink:"/nl/docs/questions/match-list-question"},next:{title:"Number Question",permalink:"/nl/docs/questions/number-question"}},b=[{value:"Opties",id:"opties",children:[]},{value:"Voorbeelden",id:"voorbeelden",children:[]}],u={toc:b};function d(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Een ISLE-component die een meerkeuzevraag maakt. Het ondersteunt het geval waarin de leerling een enkel antwoord moet selecteren en wanneer er mogelijk meerdere juiste antwoorden zijn en alle juiste antwoorden moeten worden gekozen."),Object(r.b)("h2",{id:"opties"},"Opties"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"question")," | ",Object(r.b)("inlineCode",{parentName:"li"},"(string|node)"),": de vraag die bovenaan de meerkeuzecomponent wordt getoond. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"''"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"solution")," | ",Object(r.b)("inlineCode",{parentName:"li"},"(number|array)"),": nummer dat aangeeft welk antwoord juist is of een 'raster' van de juiste antwoordnummers voor het geval de cursist meerdere antwoorden zou moeten kunnen selecteren.. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"answers")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array (required)"),": een ",Object(r.b)("inlineCode",{parentName:"li"},"oproep")," van antwoord-objecten. Elk antwoord moet een object zijn met ",Object(r.b)("inlineCode",{parentName:"li"},"content")," en ",Object(r.b)("inlineCode",{parentName:"li"},"explanatie")," velden, die de getoonde antwoordoptie aangeven en een uitleg die zichtbaar is nadat de vraag is ingediend om uit te leggen waarom het antwoord juist of onjuist is.. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"hintPlacement")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": plaatsing van de hints (ofwel ",Object(r.b)("inlineCode",{parentName:"li"},"top"),", ",Object(r.b)("inlineCode",{parentName:"li"},"left"),", ",Object(r.b)("inlineCode",{parentName:"li"},"right"),", of ",Object(r.b)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'bottom'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"hints")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array<(string|node)>"),": tips die een leidraad bieden voor het beantwoorden van de vraag. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"feedback")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": regelt of er terugmeldingsknoppen moeten worden weergegeven. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"disabled")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controleert of de vraag is uitgeschakeld. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"chat")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": bepaalt of het element een ge\xefntegreerde chat moet hebben. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"provideFeedback")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": ofwel ",Object(r.b)("inlineCode",{parentName:"li"},"volledig"),", ",Object(r.b)("inlineCode",{parentName:"li"},"incrementeel"),", of ",Object(r.b)("inlineCode",{parentName:"li"},"\xe9\xe9n"),". Als ",Object(r.b)("inlineCode",{parentName:"li"},"volledig"),", wordt de feedback inclusief het juiste antwoord weergegeven nadat de leerlingen hun antwoorden hebben ingediend; als ",Object(r.b)("inlineCode",{parentName:"li"},"incrementeel"),", wordt de feedback alleen voor het geselecteerde antwoord weergegeven; als ",Object(r.b)("inlineCode",{parentName:"li"},"geen"),", wordt er geen feedback teruggegeven.. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'incremental'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"disableSubmitNotification")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controleert of de aanmeldingskennisgevingen moeten worden uitgeschakeld. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"displaySolution")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controleert of de oplossing van tevoren wordt weergegeven. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"voiceID")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": stembesturingsidentificatie. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"until")," | ",Object(r.b)("inlineCode",{parentName:"li"},"Date"),": tijd tot de studenten de gelegenheid krijgen om antwoorden in te dienen. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"points")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": maximumaantal punten voor de indeling in klassen. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"10"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"style")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": CSS inline-stijlen. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onChange")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),': callback aangeroepen telkens als het geselecteerde antwoord verandert; ontvangt de index van de geselecteerde vraag als enige argument (of een matrix in het geval de vraag van het type "Kies alles wat van toepassing is" is). Default: ',Object(r.b)("inlineCode",{parentName:"li"},"onChange(){}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": terugbellen na het indienen van een antwoord. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onSubmit(){}"),".")),Object(r.b)("h2",{id:"voorbeelden"},"Voorbeelden"),Object(r.b)(l.a,{defaultValue:"singleAnswer",values:[{label:"Single Answer",value:"singleAnswer"},{label:"Instant Feedback",value:"instantFeedback"},{label:"Multiple Answers",value:"multipleAnswers"},{label:"Series of Questions",value:"aSeries"},{label:"With Hints",value:"withHints"}],lazy:!0,mdxType:"Tabs"},Object(r.b)(o.a,{value:"singleAnswer",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<MultipleChoiceQuestion\n    solution={0}\n    answers={[\n        {content:"Hierarchical Clustering"},\n        {content:"LASSO"},\n        {content:"Multiple regression"}\n    ]}\n    question="Which of the following methods are used for clustering?"\n/>\n'))),Object(r.b)(o.a,{value:"instantFeedback",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<MultipleChoiceQuestion\n    solution={0}\n    answers={[\n        {content:"Hierarchical Clustering"},\n        {content:"LASSO"},\n        {content:"Multiple regression"}\n    ]}\n    question="Which of the following methods are used for clustering?"\n    provideFeedback="full"\n/>\n'))),Object(r.b)(o.a,{value:"multipleAnswers",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<MultipleChoiceQuestion\n    solution={[ 0, 3 ]}\n    answers={[\n        {content:"Hierarchical Clustering"},\n        {content:"LASSO"},\n        {content:"Multiple regression"},\n        {content:"kmeans"}\n    ]}\n    question="Which of the following methods are used for clustering?"\n    style={{ background: \'#FFF6F3\'}}\n/>\n'))),Object(r.b)(o.a,{value:"aSeries",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Slider>\n    <MultipleChoiceQuestion\n        solution={[ 1, 3 ]}\n        answers={[\n            { content:"George Washington", explanation: "Yes, he was the first president." },\n            { content:"Benjamin Franklin", explanation: "He was a founding father."},\n            { content:"Ulysses S. Grant", explanation: "General and 18th president." },\n            { content:"Alexander Hamilton", explanation: "Had aspirations, but died in a duel." }\n        ]}\n        question="Who was not a president of the United States?"\n        style={{ background: \'lightblue\'}}\n        feedback={false}\n    />\n    <MultipleChoiceQuestion\n        solution={[ 0, 3 ]}\n        answers={[\n            {content:"Hierarchical Clustering", explanation:""},\n            {content:"LASSO", explanation:""},\n            {content:"Multiple regression", explanation:""},\n            {content:"kmeans", explanation:""}\n        ]}\n        question="Which of the following methods are used for clustering?"\n        style={{ background: \'#FFF6F3\'}}\n        feedback={false}\n    />\n</Slider>\n'))),Object(r.b)(o.a,{value:"withHints",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<MultipleChoiceQuestion\n    solution={[ 1, 3 ]}\n    answers={[\n        { content:"George Washington", explanation: "Yes, he was the first president." },\n        { content:"Benjamin Franklin", explanation: "He was a founding father."},\n        { content:"Ulysses S. Grant", explanation: "General and 18th president." },\n        { content:"Alexander Hamilton", explanation: "Had aspirations, but died in a duel." }\n    ]}\n    question="Who was not a president of the United States?"\n    style={{ background: \'lightblue\'}}\n    feedback={false}\n    hints={[\n        \'Washington - that is a no-brainer, isn\\\'t it?\',\n        \'Franklin was famous for his invention of the lightning rod - so why become more?\',\n        \'Hamilton was a founding father, but got in this deadly quarrel with Aaron Burr.\',\n    ]}\n    hintPlacement="top"\n/>\n')))))}d.isMDXComponent=!0},411:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),b=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=b(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},p=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=b(t),p=a,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||r;return t?i.a.createElement(m,o(o({ref:n},c),{},{components:t})):i.a.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=t[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},445:function(e,n,t){"use strict";function a(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}n.a=function(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(i&&(i+=" "),i+=n);return i}},458:function(e,n,t){"use strict";var a=t(0),i=t(459);n.a=function(){const e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},459:function(e,n,t){"use strict";var a=t(0);const i=Object(a.createContext)(void 0);n.a=i},460:function(e,n,t){"use strict";var a=t(0),i=t.n(a),r=t(458),l=t(445),o=t(58),s=t.n(o);const c=37,b=39;n.a=function(e){const{lazy:n,block:t,defaultValue:o,values:u,groupId:d,className:p}=e,{tabGroupChoices:m,setTabGroupChoices:g}=Object(r.a)(),[f,j]=Object(a.useState)(o),O=a.Children.toArray(e.children),h=[];if(null!=d){const e=m[d];null!=e&&e!==f&&u.some((n=>n.value===e))&&j(e)}const v=e=>{const n=e.target,t=h.indexOf(n),a=O[t].props.value;j(a),null!=d&&g(d,a)},N=e=>{var n;let t;switch(e.keyCode){case b:const n=h.indexOf(e.target)+1;t=h[n]||h[0];break;case c:const a=h.indexOf(e.target)-1;t=h[a]||h[h.length-1]}null===(n=t)||void 0===n||n.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t},p)},u.map((({value:e,label:n})=>i.a.createElement("li",{role:"tab",tabIndex:f===e?0:-1,"aria-selected":f===e,className:Object(l.a)("tabs__item",s.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>h.push(e),onKeyDown:N,onFocus:v,onClick:v},n)))),n?Object(a.cloneElement)(O.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},O.map(((e,n)=>Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==f})))))}},461:function(e,n,t){"use strict";var a=t(0),i=t.n(a);n.a=function({children:e,hidden:n,className:t}){return i.a.createElement("div",{role:"tabpanel",hidden:n,className:t},e)}}}]);