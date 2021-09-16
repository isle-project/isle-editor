"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1416],{603905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(202784);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),m=i,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return t?a.createElement(k,r(r({ref:n},p),{},{components:t})):a.createElement(k,r({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},358215:function(e,n,t){var a=t(202784);n.Z=function(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:i},n)}},855064:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(202784),i=t(79443);var o=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=t(386010),l="tabItem_1uMI",s="tabItemActive_2DSg";var u=function(e){var n,t=e.lazy,i=e.block,u=e.defaultValue,p=e.values,d=e.groupId,c=e.className,m=a.Children.toArray(e.children),k=null!=p?p:m.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=u?u:null==(n=m.find((function(e){return e.props.default})))?void 0:n.props.value,f=o(),b=f.tabGroupChoices,h=f.setTabGroupChoices,g=(0,a.useState)(v),y=g[0],N=g[1],C=[];if(null!=d){var j=b[d];null!=j&&j!==y&&k.some((function(e){return e.value===j}))&&N(j)}var w=function(e){var n=e.currentTarget,t=C.indexOf(n),a=k[t].value;N(a),null!=d&&(h(d,a),setTimeout((function(){var e,t,a,i,o,r,l,u;(e=n.getBoundingClientRect(),t=e.top,a=e.left,i=e.bottom,o=e.right,r=window,l=r.innerHeight,u=r.innerWidth,t>=0&&o<=u&&i<=l&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(s),setTimeout((function(){return n.classList.remove(s)}),2e3))}),150))},x=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.target)+1;t=C[a]||C[0];break;case"ArrowLeft":var i=C.indexOf(e.target)-1;t=C[i]||C[C.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},c)},k.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:y===n?0:-1,"aria-selected":y===n,className:(0,r.Z)("tabs__item",l,{"tabs__item--active":y===n}),key:n,ref:function(e){return C.push(e)},onKeyDown:x,onFocus:w,onClick:w},null!=t?t:n)}))),t?(0,a.cloneElement)(m.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==y})}))))}},79443:function(e,n,t){var a=(0,t(202784).createContext)(void 0);n.Z=a},874919:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return k}});var a=t(487462),i=t(263366),o=(t(202784),t(603905)),r=t(855064),l=t(358215),s=["components"],u={id:"multiple-choice-question",title:"Multiple Choice Question",sidebar_label:"Multiple Choice Question"},p=void 0,d={unversionedId:"questions/multiple-choice-question",id:"questions/multiple-choice-question",isDocsHomePage:!1,title:"Multiple Choice Question",description:"Komponent ISLE, ktor\xfd vykres\u013euje ot\xe1zku s viacer\xfdmi mo\u017enos\u0165ami. Podporuje pr\xedpad, ke\u010f m\xe1 \u017eiak vybra\u0165 jednu odpove\u010f a ke\u010f m\xf4\u017ee existova\u0165 viacero spr\xe1vnych odpoved\xed a je potrebn\xe9 vybra\u0165 v\u0161etky spr\xe1vne odpovede.",source:"@site/i18n/sk/docusaurus-plugin-content-docs/current/questions/multiple-choice.md",sourceDirName:"questions",slug:"/questions/multiple-choice-question",permalink:"/sk/docs/questions/multiple-choice-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/multiple-choice.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19. 6. 2021",frontMatter:{id:"multiple-choice-question",title:"Multiple Choice Question",sidebar_label:"Multiple Choice Question"},sidebar:"docs",previous:{title:"Match List Question",permalink:"/sk/docs/questions/match-list-question"},next:{title:"Number Question",permalink:"/sk/docs/questions/number-question"}},c=[{value:"Mo\u017enosti",id:"mo\u017enosti",children:[]},{value:"Pr\xedklady",id:"pr\xedklady",children:[]}],m={toc:c};function k(e){var n=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Komponent ISLE, ktor\xfd vykres\u013euje ot\xe1zku s viacer\xfdmi mo\u017enos\u0165ami. Podporuje pr\xedpad, ke\u010f m\xe1 \u017eiak vybra\u0165 jednu odpove\u010f a ke\u010f m\xf4\u017ee existova\u0165 viacero spr\xe1vnych odpoved\xed a je potrebn\xe9 vybra\u0165 v\u0161etky spr\xe1vne odpovede."),(0,o.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"question")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(string|node)"),": ot\xe1zka zobrazen\xe1 v hornej \u010dasti komponentu s v\xfdberom odpovede. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"solution")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(number|array)"),': \u010d\xedslo ozna\u010duj\xface, ktor\xe1 odpove\u010f je spr\xe1vna, alebo "pole" \u010d\xedsel spr\xe1vnych odpoved\xed v pr\xedpade, \u017ee by \u017eiak mal by\u0165 schopn\xfd vybra\u0165 viacero odpoved\xed. Default: ',(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"answers")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"array (required)"),": pole objektov odpoved\xed. Ka\u017ed\xe1 odpove\u010f by mala by\u0165 objektom s poliami ",(0,o.kt)("inlineCode",{parentName:"li"},"obsah")," a ",(0,o.kt)("inlineCode",{parentName:"li"},"vysvetlenie"),", ktor\xe9 ozna\u010duj\xfa zobrazen\xfa mo\u017enos\u0165 odpovede a vysvetlenie vidite\u013en\xe9 po odoslan\xed ot\xe1zky, ktor\xe9 vysvet\u013euje, pre\u010do je odpove\u010f spr\xe1vna alebo nespr\xe1vna.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": umiestnenie n\xe1povedy (bu\u010f ",(0,o.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"right")," alebo ",(0,o.kt)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"hints")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": n\xe1povedy, ktor\xe9 poskytuj\xfa n\xe1vod, ako odpoveda\u0165 na ot\xe1zku. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"feedback")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": ovl\xe1da, \u010di sa maj\xfa zobrazova\u0165 tla\u010didl\xe1 sp\xe4tnej v\xe4zby.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"disabled")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, \u010di je ot\xe1zka vypnut\xe1. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"chat")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, \u010di m\xe1 ma\u0165 prvok integrovan\xfd chat. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": bu\u010f ",(0,o.kt)("inlineCode",{parentName:"li"},"pln\xfd"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"inkrement\xe1lny")," alebo ",(0,o.kt)("inlineCode",{parentName:"li"},"\u017eiadny"),". Ak je ",(0,o.kt)("inlineCode",{parentName:"li"},"full"),", po odoslan\xed odpoved\xed \u017eiakov sa zobraz\xed sp\xe4tn\xe1 v\xe4zba vr\xe1tane spr\xe1vnej odpovede; ak je ",(0,o.kt)("inlineCode",{parentName:"li"},"incremental"),", zobraz\xed sa sp\xe4tn\xe1 v\xe4zba len pre vybran\xfa odpove\u010f; ak je ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),", nevr\xe1ti sa \u017eiadna sp\xe4tn\xe1 v\xe4zba. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"'incremental'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, \u010di sa maj\xfa vypn\xfa\u0165 ozn\xe1menia o odoslan\xed. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"displaySolution")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, \u010di sa rie\u0161enie zobraz\xed vpredu.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"voiceID")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": identifik\xe1tor hlasov\xe9ho ovl\xe1dania. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"until")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"Date"),": \u010das, dokedy by \u0161tudenti mali ma\u0165 mo\u017enos\u0165 predlo\u017ei\u0165 odpovede.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"points")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),": maxim\xe1lny po\u010det bodov udelen\xfdch pri klasifik\xe1cii. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"style")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object"),": Riadkov\xe9 \u0161t\xfdly CSS. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"onChange")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"function"),': sp\xe4tn\xe9 volanie vyvolan\xe9 pri ka\u017edej zmene vybranej odpovede; ako jedin\xfd argument dostane index vybranej ot\xe1zky (alebo pole v pr\xedpade, \u017ee ot\xe1zka je typu "Vyberte v\u0161etko, \u010do plat\xed"). Default: ',(0,o.kt)("inlineCode",{parentName:"li"},"onChange(){}"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"function"),": sp\xe4tn\xe9 volanie vyvolan\xe9 po odoslan\xed odpovede. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"onSubmit(){}"),".")),(0,o.kt)("h2",{id:"pr\xedklady"},"Pr\xedklady"),(0,o.kt)(r.Z,{defaultValue:"singleAnswer",values:[{label:"Single Answer",value:"singleAnswer"},{label:"Formatted Answers",value:"formattedAnswers"},{label:"Instant Feedback",value:"instantFeedback"},{label:"Multiple Answers",value:"multipleAnswers"},{label:"Series of Questions",value:"aSeries"},{label:"With Hints",value:"withHints"}],lazy:!0,mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"singleAnswer",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<MultipleChoiceQuestion\n    solution={0}\n    answers={[\n        {content:"Hierarchical Clustering"},\n        {content:"LASSO"},\n        {content:"Multiple regression"}\n    ]}\n    question="Which of the following methods are used for clustering?"\n/>\n'))),(0,o.kt)(l.Z,{value:"formattedAnswers",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MultipleChoiceQuestion\n    answers={[\n        {content: <span>**bold**</span>},\n        {content: <span>*italic*</span>},\n        {content: <span style={{ fontFamily: 'Georgia', color: 'red' }}>styled</span>}\n    ]}\n    question={<span style={{ fontSize: 33}}>What kind of font do you like the most?</span>}\n/>\n"))),(0,o.kt)(l.Z,{value:"instantFeedback",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<MultipleChoiceQuestion\n    solution={0}\n    answers={[\n        {content:"Hierarchical Clustering"},\n        {content:"LASSO"},\n        {content:"Multiple regression"}\n    ]}\n    question="Which of the following methods are used for clustering?"\n    provideFeedback="full"\n/>\n'))),(0,o.kt)(l.Z,{value:"multipleAnswers",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<MultipleChoiceQuestion\n    solution={[ 0, 3 ]}\n    answers={[\n        {content:"Hierarchical Clustering"},\n        {content:"LASSO"},\n        {content:"Multiple regression"},\n        {content:"kmeans"}\n    ]}\n    question="Which of the following methods are used for clustering?"\n    style={{ background: \'#FFF6F3\'}}\n/>\n'))),(0,o.kt)(l.Z,{value:"aSeries",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Slider>\n    <MultipleChoiceQuestion\n        solution={[ 1, 3 ]}\n        answers={[\n            { content:"George Washington", explanation: "Yes, he was the first president." },\n            { content:"Benjamin Franklin", explanation: "He was a founding father."},\n            { content:"Ulysses S. Grant", explanation: "General and 18th president." },\n            { content:"Alexander Hamilton", explanation: "Had aspirations, but died in a duel." }\n        ]}\n        question="Who was not a president of the United States?"\n        style={{ background: \'lightblue\'}}\n        feedback={false}\n    />\n    <MultipleChoiceQuestion\n        solution={[ 0, 3 ]}\n        answers={[\n            {content:"Hierarchical Clustering", explanation:""},\n            {content:"LASSO", explanation:""},\n            {content:"Multiple regression", explanation:""},\n            {content:"kmeans", explanation:""}\n        ]}\n        question="Which of the following methods are used for clustering?"\n        style={{ background: \'#FFF6F3\'}}\n        feedback={false}\n    />\n</Slider>\n'))),(0,o.kt)(l.Z,{value:"withHints",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<MultipleChoiceQuestion\n    solution={[ 1, 3 ]}\n    answers={[\n        { content:"George Washington", explanation: "Yes, he was the first president." },\n        { content:"Benjamin Franklin", explanation: "He was a founding father."},\n        { content:"Ulysses S. Grant", explanation: "General and 18th president." },\n        { content:"Alexander Hamilton", explanation: "Had aspirations, but died in a duel." }\n    ]}\n    question="Who was not a president of the United States?"\n    style={{ background: \'lightblue\'}}\n    feedback={false}\n    hints={[\n        \'Washington - that is a no-brainer, isn\\\'t it?\',\n        \'Franklin was famous for his invention of the lightning rod - so why become more?\',\n        \'Hamilton was a founding father, but got in this deadly quarrel with Aaron Burr.\',\n    ]}\n    hintPlacement="top"\n/>\n')))))}k.isMDXComponent=!0},386010:function(e,n,t){function a(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}function i(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(i&&(i+=" "),i+=n);return i}t.d(n,{Z:function(){return i}})}}]);