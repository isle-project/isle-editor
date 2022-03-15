"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2875],{603905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(202784);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=u(t),m=i,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return t?a.createElement(k,o(o({ref:n},p),{},{components:t})):a.createElement(k,o({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=d;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},358215:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(202784);function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:i},n)}},409877:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(487462),i=t(202784),l=t(972389),o=t(161419),r=t(386010),s="tabItem_LplD";function u(e){var n,t,l,u=e.lazy,p=e.block,c=e.defaultValue,d=e.values,m=e.groupId,k=e.className,w=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=d?d:w.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),f=(0,o.lx)(y,(function(e,n){return e.value===n.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(n=null!=c?c:null==(t=w.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=w[0])?void 0:l.props.value;if(null!==b&&!y.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,o.UB)(),h=g.tabGroupChoices,v=g.setTabGroupChoices,N=(0,i.useState)(b),z=N[0],j=N[1],C=[],x=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var S=h[m];null!=S&&S!==z&&y.some((function(e){return e.value===S}))&&j(S)}var O=function(e){var n=e.currentTarget,t=C.indexOf(n),a=y[t].value;a!==z&&(x(n),j(a),null!=m&&v(m,a))},T=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;t=C[a]||C[0];break;case"ArrowLeft":var i=C.indexOf(e.currentTarget)-1;t=C[i]||C[C.length-1]}null==(n=t)||n.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},k)},y.map((function(e){var n=e.value,t=e.label,l=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:z===n?0:-1,"aria-selected":z===n,key:n,ref:function(e){return C.push(e)},onKeyDown:T,onFocus:O,onClick:O},l,{className:(0,r.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":z===n})}),null!=t?t:n)}))),u?(0,i.cloneElement)(w.filter((function(e){return e.props.value===z}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},w.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==z})}))))}function p(e){var n=(0,l.Z)();return i.createElement(u,(0,a.Z)({key:String(n)},e))}},760445:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return d},toc:function(){return m},default:function(){return w}});var a=t(487462),i=t(263366),l=(t(202784),t(603905)),o=t(409877),r=t(358215),s=["components"],u={id:"multiple-choice-question",title:"Multiple Choice Question",sidebar_label:"Multiple Choice Question"},p=void 0,c={unversionedId:"questions/multiple-choice-question",id:"questions/multiple-choice-question",title:"Multiple Choice Question",description:"Sk\u0142adnik ISLE, kt\xf3ry stawia pytanie wielokrotnego wyboru. Wspiera on przypadek, gdy ucz\u0105cy si\u0119 musi wybra\u0107 jedn\u0105 odpowied\u017a i gdy mo\u017ce by\u0107 wiele poprawnych odpowiedzi i wszystkie poprawne musz\u0105 by\u0107 wybrane.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/questions/multiple-choice.md",sourceDirName:"questions",slug:"/questions/multiple-choice-question",permalink:"/pl/docs/questions/multiple-choice-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/multiple-choice.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633715852,formattedLastUpdatedAt:"8.10.2021",frontMatter:{id:"multiple-choice-question",title:"Multiple Choice Question",sidebar_label:"Multiple Choice Question"},sidebar:"docs",previous:{title:"Match List Question",permalink:"/pl/docs/questions/match-list-question"},next:{title:"Multiple Choice Matrix",permalink:"/pl/docs/questions/multiple-choice-matrix"}},d={},m=[{value:"Opcje",id:"opcje",level:2},{value:"Przyk\u0142ady",id:"przyk\u0142ady",level:2}],k={toc:m};function w(e){var n=e.components,t=(0,i.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Sk\u0142adnik ISLE, kt\xf3ry stawia pytanie wielokrotnego wyboru. Wspiera on przypadek, gdy ucz\u0105cy si\u0119 musi wybra\u0107 jedn\u0105 odpowied\u017a i gdy mo\u017ce by\u0107 wiele poprawnych odpowiedzi i wszystkie poprawne musz\u0105 by\u0107 wybrane."),(0,l.kt)("h2",{id:"opcje"},"Opcje"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"question")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|node)"),": pytanie wy\u015bwietlane w g\xf3rnej cz\u0119\u015bci elementu wielokrotnego wyboru. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"solution")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(number|array)"),": liczba oznaczaj\u0105ca, kt\xf3ra odpowied\u017a jest poprawna lub ",(0,l.kt)("inlineCode",{parentName:"li"},"liczba")," poprawnych numer\xf3w odpowiedzi w przypadku, gdy ucz\u0105cy si\u0119 powinien by\u0107 w stanie wybra\u0107 wiele odpowiedzi. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"answers")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array (required)"),': "szereg" obiekt\xf3w odpowiedzi. Ka\u017cda odpowied\u017a powinna by\u0107 obiektem z polami "tre\u015b\u0107" i "wyja\u015bnienie", kt\xf3re oznaczaj\u0105 wy\u015bwietlan\u0105 opcj\u0119 odpowiedzi oraz wyja\u015bnienie widoczne po zadaniu pytania, wyja\u015bniaj\u0105ce dlaczego odpowied\u017a jest poprawna lub nieprawid\u0142owa. Default: ',(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": umieszczenie podpowiedzi (na g\xf3rze, na dole, w lewo, w prawo lub na dole). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hints")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": podpowiedzi zawieraj\u0105ce wskaz\xf3wki, jak odpowiedzie\u0107 na pytanie. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"feedback")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy maj\u0105 by\u0107 wy\u015bwietlane przyciski sprz\u0119\u017cenia zwrotnego. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"disabled")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy dana kwestia jest wy\u0142\u0105czona. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"chat")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy dany element powinien mie\u0107 zintegrowan\u0105 rozmow\u0119. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": albo ",(0,l.kt)("inlineCode",{parentName:"li"},"pe\u0142ne"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"skoroczne"),", albo ",(0,l.kt)("inlineCode",{parentName:"li"},"\u017cadne"),". Je\u015bli ",(0,l.kt)("inlineCode",{parentName:"li"},"pe\u0142ne"),", informacja zwrotna zawieraj\u0105ca poprawn\u0105 odpowied\u017a jest wy\u015bwietlana po udzieleniu odpowiedzi przez ucz\u0105cego si\u0119; je\u015bli ",(0,l.kt)("inlineCode",{parentName:"li"},"inkrementalna"),", informacja zwrotna jest wy\u015bwietlana tylko dla wybranej odpowiedzi; je\u015bli ",(0,l.kt)("inlineCode",{parentName:"li"},"nie"),", informacja zwrotna nie jest zwracana. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'incremental'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrola, czy nale\u017cy wy\u0142\u0105czy\u0107 powiadomienia o z\u0142o\u017ceniu wniosku. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"displaySolution")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy rozwi\u0105zanie jest wy\u015bwietlane z g\xf3ry. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"until")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"Date"),": czas, w kt\xf3rym studenci powinni mie\u0107 mo\u017cliwo\u015b\u0107 udzielenia odpowiedzi. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"points")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": maksymalna liczba punkt\xf3w przyznawanych w poszczeg\xf3lnych klasach. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": Style CSS inline. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onChange")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),': wywo\u0142anie zwrotne wywo\u0142ywane przy ka\u017cdej zmianie wybranej odpowiedzi; otrzymuje indeks wybranego pytania jako jego jedyny argument (lub tablic\u0119 w przypadku, gdy pytanie jest typu "Wybierz wszystko, co dotyczy"). Default: ',(0,l.kt)("inlineCode",{parentName:"li"},"onChange(){}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": wywo\u0142anie zwrotne po udzieleniu odpowiedzi. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onSubmit(){}"),".")),(0,l.kt)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"),(0,l.kt)(o.Z,{defaultValue:"singleAnswer",values:[{label:"Single Answer",value:"singleAnswer"},{label:"Formatted Answers",value:"formattedAnswers"},{label:"Instant Feedback",value:"instantFeedback"},{label:"Multiple Answers",value:"multipleAnswers"},{label:"Series of Questions",value:"aSeries"},{label:"With Hints",value:"withHints"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"singleAnswer",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<MultipleChoiceQuestion\n    solution={0}\n    answers={[\n        {content:"Hierarchical Clustering"},\n        {content:"LASSO"},\n        {content:"Multiple regression"}\n    ]}\n    question="Which of the following methods are used for clustering?"\n/>\n'))),(0,l.kt)(r.Z,{value:"formattedAnswers",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MultipleChoiceQuestion\n    answers={[\n        {content: <span>**bold**</span>},\n        {content: <span>*italic*</span>},\n        {content: <span style={{ fontFamily: 'Georgia', color: 'red' }}>styled</span>}\n    ]}\n    question={<span style={{ fontSize: 33}}>What kind of font do you like the most?</span>}\n/>\n"))),(0,l.kt)(r.Z,{value:"instantFeedback",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<MultipleChoiceQuestion\n    solution={0}\n    answers={[\n        {content:"Hierarchical Clustering"},\n        {content:"LASSO"},\n        {content:"Multiple regression"}\n    ]}\n    question="Which of the following methods are used for clustering?"\n    provideFeedback="full"\n/>\n'))),(0,l.kt)(r.Z,{value:"multipleAnswers",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<MultipleChoiceQuestion\n    solution={[ 0, 3 ]}\n    answers={[\n        {content:"Hierarchical Clustering"},\n        {content:"LASSO"},\n        {content:"Multiple regression"},\n        {content:"kmeans"}\n    ]}\n    question="Which of the following methods are used for clustering?"\n    style={{ background: \'#FFF6F3\'}}\n/>\n'))),(0,l.kt)(r.Z,{value:"aSeries",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Slider>\n    <MultipleChoiceQuestion\n        solution={[ 1, 3 ]}\n        answers={[\n            { content:"George Washington", explanation: "Yes, he was the first president." },\n            { content:"Benjamin Franklin", explanation: "He was a founding father."},\n            { content:"Ulysses S. Grant", explanation: "General and 18th president." },\n            { content:"Alexander Hamilton", explanation: "Had aspirations, but died in a duel." }\n        ]}\n        question="Who was not a president of the United States?"\n        style={{ background: \'lightblue\'}}\n        feedback={false}\n    />\n    <MultipleChoiceQuestion\n        solution={[ 0, 3 ]}\n        answers={[\n            {content:"Hierarchical Clustering", explanation:""},\n            {content:"LASSO", explanation:""},\n            {content:"Multiple regression", explanation:""},\n            {content:"kmeans", explanation:""}\n        ]}\n        question="Which of the following methods are used for clustering?"\n        style={{ background: \'#FFF6F3\'}}\n        feedback={false}\n    />\n</Slider>\n'))),(0,l.kt)(r.Z,{value:"withHints",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<MultipleChoiceQuestion\n    solution={[ 1, 3 ]}\n    answers={[\n        { content:"George Washington", explanation: "Yes, he was the first president." },\n        { content:"Benjamin Franklin", explanation: "He was a founding father."},\n        { content:"Ulysses S. Grant", explanation: "General and 18th president." },\n        { content:"Alexander Hamilton", explanation: "Had aspirations, but died in a duel." }\n    ]}\n    question="Who was not a president of the United States?"\n    style={{ background: \'lightblue\'}}\n    feedback={false}\n    hints={[\n        \'Washington - that is a no-brainer, isn\\\'t it?\',\n        \'Franklin was famous for his invention of the lightning rod - so why become more?\',\n        \'Hamilton was a founding father, but got in this deadly quarrel with Aaron Burr.\',\n    ]}\n    hintPlacement="top"\n/>\n')))))}w.isMDXComponent=!0}}]);