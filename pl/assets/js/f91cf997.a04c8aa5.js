"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22875],{603905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(202784);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=i,y=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return t?a.createElement(y,o(o({ref:n},p),{},{components:t})):a.createElement(y,o({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},440034:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(202784),i=t(386010),r="tabItem_Ymn6",o=Object.defineProperty,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;function c({children:e,hidden:n,className:t}){return a.createElement("div",((e,n)=>{for(var t in n||(n={}))s.call(n,t)&&p(e,t,n[t]);if(l)for(var t of l(n))u.call(n,t)&&p(e,t,n[t]);return e})({role:"tabpanel",className:(0,i.Z)(r,t)},{hidden:n}),e)}},751361:function(e,n,t){t.d(n,{Z:function(){return h}});var a=t(202784),i=t(386010),r=t(152670),o=t(258433),l=t(952326),s=t(638849),u="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,b=(e,n,t)=>n in e?c(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,k=(e,n)=>{for(var t in n||(n={}))w.call(n,t)&&b(e,t,n[t]);if(y)for(var t of y(n))f.call(n,t)&&b(e,t,n[t]);return e};function g(e){var n,t;const{lazy:r,block:c,defaultValue:y,values:w,groupId:f,className:b}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=w?w:g.map((({props:{value:e,label:n,attributes:t}})=>({value:e,label:n,attributes:t}))),v=(0,o.l)(h,((e,n)=>e.value===n.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===y?y:null!=(t=null!=y?y:null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)?t:g[0].props.value;if(null!==N&&!h.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:z,setTabGroupChoices:j}=(0,l.U)(),[C,O]=(0,a.useState)(N),x=[],{blockElementScrollPositionUntilNextRender:S}=(0,s.o5)();if(null!=f){const e=z[f];null!=e&&e!==C&&h.some((n=>n.value===e))&&O(e)}const T=e=>{const n=e.currentTarget,t=x.indexOf(n),a=h[t].value;a!==C&&(S(n),O(a),null!=f&&j(f,String(a)))},P=e=>{var n,t;let a=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;a=null!=(n=x[t])?n:x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;a=null!=(t=x[n])?t:x[x.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},b)},h.map((({value:e,label:n,attributes:t})=>{return a.createElement("li",(r=k({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>x.push(e),onKeyDown:P,onFocus:T,onClick:T},t),o={className:(0,i.Z)("tabs__item",p,null==t?void 0:t.className,{"tabs__item--active":C===e})},d(r,m(o))),null!=n?n:e);var r,o}))),r?(0,a.cloneElement)(g.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==C})))))}function h(e){const n=(0,r.Z)();return a.createElement(g,k({key:String(n)},e))}},169567:function(e,n,t){t.r(n),t.d(n,{assets:function(){return b},contentTitle:function(){return w},default:function(){return h},frontMatter:function(){return y},metadata:function(){return f},toc:function(){return k}});var a=t(603905),i=t(751361),r=t(440034),o=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&d(e,t,n[t]);if(u)for(var t of u(n))c.call(n,t)&&d(e,t,n[t]);return e};const y={id:"multiple-choice-question",title:"Multiple Choice Question",sidebar_label:"Multiple Choice Question"},w=void 0,f={unversionedId:"questions/multiple-choice-question",id:"questions/multiple-choice-question",title:"Multiple Choice Question",description:"Sk\u0142adnik ISLE, kt\xf3ry stawia pytanie wielokrotnego wyboru. Wspiera on przypadek, gdy ucz\u0105cy si\u0119 musi wybra\u0107 jedn\u0105 odpowied\u017a i gdy mo\u017ce by\u0107 wiele poprawnych odpowiedzi i wszystkie poprawne musz\u0105 by\u0107 wybrane.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/questions/multiple-choice.md",sourceDirName:"questions",slug:"/questions/multiple-choice-question",permalink:"/pl/docs/questions/multiple-choice-question",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/multiple-choice.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633715852,formattedLastUpdatedAt:"8.10.2021",frontMatter:{id:"multiple-choice-question",title:"Multiple Choice Question",sidebar_label:"Multiple Choice Question"},sidebar:"docs",previous:{title:"Match List Question",permalink:"/pl/docs/questions/match-list-question"},next:{title:"Multiple Choice Matrix",permalink:"/pl/docs/questions/multiple-choice-matrix"}},b={},k=[{value:"Opcje",id:"opcje",level:2},{value:"Przyk\u0142ady",id:"przyk\u0142ady",level:2}],g={toc:k};function h(e){var n,t=e,{components:o}=t,d=((e,n)=>{var t={};for(var a in e)p.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&u)for(var a of u(e))n.indexOf(a)<0&&c.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(n=m(m({},g),d),l(n,s({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Sk\u0142adnik ISLE, kt\xf3ry stawia pytanie wielokrotnego wyboru. Wspiera on przypadek, gdy ucz\u0105cy si\u0119 musi wybra\u0107 jedn\u0105 odpowied\u017a i gdy mo\u017ce by\u0107 wiele poprawnych odpowiedzi i wszystkie poprawne musz\u0105 by\u0107 wybrane."),(0,a.kt)("h2",m({},{id:"opcje"}),"Opcje"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"question")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|node)"),": pytanie wy\u015bwietlane w g\xf3rnej cz\u0119\u015bci elementu wielokrotnego wyboru. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"solution")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(number|array)"),": liczba oznaczaj\u0105ca, kt\xf3ra odpowied\u017a jest poprawna lub ",(0,a.kt)("inlineCode",{parentName:"li"},"liczba")," poprawnych numer\xf3w odpowiedzi w przypadku, gdy ucz\u0105cy si\u0119 powinien by\u0107 w stanie wybra\u0107 wiele odpowiedzi. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"answers")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array (required)"),': "szereg" obiekt\xf3w odpowiedzi. Ka\u017cda odpowied\u017a powinna by\u0107 obiektem z polami "tre\u015b\u0107" i "wyja\u015bnienie", kt\xf3re oznaczaj\u0105 wy\u015bwietlan\u0105 opcj\u0119 odpowiedzi oraz wyja\u015bnienie widoczne po zadaniu pytania, wyja\u015bniaj\u0105ce dlaczego odpowied\u017a jest poprawna lub nieprawid\u0142owa. Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": umieszczenie podpowiedzi (na g\xf3rze, na dole, w lewo, w prawo lub na dole). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hints")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": podpowiedzi zawieraj\u0105ce wskaz\xf3wki, jak odpowiedzie\u0107 na pytanie. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"feedback")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy maj\u0105 by\u0107 wy\u015bwietlane przyciski sprz\u0119\u017cenia zwrotnego. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"disabled")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy dana kwestia jest wy\u0142\u0105czona. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"chat")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy dany element powinien mie\u0107 zintegrowan\u0105 rozmow\u0119. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": albo ",(0,a.kt)("inlineCode",{parentName:"li"},"pe\u0142ne"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"skoroczne"),", albo ",(0,a.kt)("inlineCode",{parentName:"li"},"\u017cadne"),". Je\u015bli ",(0,a.kt)("inlineCode",{parentName:"li"},"pe\u0142ne"),", informacja zwrotna zawieraj\u0105ca poprawn\u0105 odpowied\u017a jest wy\u015bwietlana po udzieleniu odpowiedzi przez ucz\u0105cego si\u0119; je\u015bli ",(0,a.kt)("inlineCode",{parentName:"li"},"inkrementalna"),", informacja zwrotna jest wy\u015bwietlana tylko dla wybranej odpowiedzi; je\u015bli ",(0,a.kt)("inlineCode",{parentName:"li"},"nie"),", informacja zwrotna nie jest zwracana. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'incremental'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrola, czy nale\u017cy wy\u0142\u0105czy\u0107 powiadomienia o z\u0142o\u017ceniu wniosku. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"displaySolution")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy rozwi\u0105zanie jest wy\u015bwietlane z g\xf3ry. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"until")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"Date"),": czas, w kt\xf3rym studenci powinni mie\u0107 mo\u017cliwo\u015b\u0107 udzielenia odpowiedzi. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"points")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": maksymalna liczba punkt\xf3w przyznawanych w poszczeg\xf3lnych klasach. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": Style CSS inline. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onChange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),': wywo\u0142anie zwrotne wywo\u0142ywane przy ka\u017cdej zmianie wybranej odpowiedzi; otrzymuje indeks wybranego pytania jako jego jedyny argument (lub tablic\u0119 w przypadku, gdy pytanie jest typu "Wybierz wszystko, co dotyczy"). Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"onChange(){}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": wywo\u0142anie zwrotne po udzieleniu odpowiedzi. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onSubmit(){}"),".")),(0,a.kt)("h2",m({},{id:"przyk\u0142ady"}),"Przyk\u0142ady"),(0,a.kt)(i.Z,{defaultValue:"singleAnswer",values:[{label:"Single Answer",value:"singleAnswer"},{label:"Formatted Answers",value:"formattedAnswers"},{label:"Instant Feedback",value:"instantFeedback"},{label:"Multiple Answers",value:"multipleAnswers"},{label:"Series of Questions",value:"aSeries"},{label:"With Hints",value:"withHints"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"singleAnswer",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<MultipleChoiceQuestion\n    solution={0}\n    answers={[\n        {content:"Hierarchical Clustering"},\n        {content:"LASSO"},\n        {content:"Multiple regression"}\n    ]}\n    question="Which of the following methods are used for clustering?"\n/>\n'))),(0,a.kt)(r.Z,{value:"formattedAnswers",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MultipleChoiceQuestion\n    answers={[\n        {content: <span>**bold**</span>},\n        {content: <span>*italic*</span>},\n        {content: <span style={{ fontFamily: 'Georgia', color: 'red' }}>styled</span>}\n    ]}\n    question={<span style={{ fontSize: 33}}>What kind of font do you like the most?</span>}\n/>\n"))),(0,a.kt)(r.Z,{value:"instantFeedback",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<MultipleChoiceQuestion\n    solution={0}\n    answers={[\n        {content:"Hierarchical Clustering"},\n        {content:"LASSO"},\n        {content:"Multiple regression"}\n    ]}\n    question="Which of the following methods are used for clustering?"\n    provideFeedback="full"\n/>\n'))),(0,a.kt)(r.Z,{value:"multipleAnswers",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<MultipleChoiceQuestion\n    solution={[ 0, 3 ]}\n    answers={[\n        {content:"Hierarchical Clustering"},\n        {content:"LASSO"},\n        {content:"Multiple regression"},\n        {content:"kmeans"}\n    ]}\n    question="Which of the following methods are used for clustering?"\n    style={{ background: \'#FFF6F3\'}}\n/>\n'))),(0,a.kt)(r.Z,{value:"aSeries",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Slider>\n    <MultipleChoiceQuestion\n        solution={[ 1, 3 ]}\n        answers={[\n            { content:"George Washington", explanation: "Yes, he was the first president." },\n            { content:"Benjamin Franklin", explanation: "He was a founding father."},\n            { content:"Ulysses S. Grant", explanation: "General and 18th president." },\n            { content:"Alexander Hamilton", explanation: "Had aspirations, but died in a duel." }\n        ]}\n        question="Who was not a president of the United States?"\n        style={{ background: \'lightblue\'}}\n        feedback={false}\n    />\n    <MultipleChoiceQuestion\n        solution={[ 0, 3 ]}\n        answers={[\n            {content:"Hierarchical Clustering", explanation:""},\n            {content:"LASSO", explanation:""},\n            {content:"Multiple regression", explanation:""},\n            {content:"kmeans", explanation:""}\n        ]}\n        question="Which of the following methods are used for clustering?"\n        style={{ background: \'#FFF6F3\'}}\n        feedback={false}\n    />\n</Slider>\n'))),(0,a.kt)(r.Z,{value:"withHints",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<MultipleChoiceQuestion\n    solution={[ 1, 3 ]}\n    answers={[\n        { content:"George Washington", explanation: "Yes, he was the first president." },\n        { content:"Benjamin Franklin", explanation: "He was a founding father."},\n        { content:"Ulysses S. Grant", explanation: "General and 18th president." },\n        { content:"Alexander Hamilton", explanation: "Had aspirations, but died in a duel." }\n    ]}\n    question="Who was not a president of the United States?"\n    style={{ background: \'lightblue\'}}\n    feedback={false}\n    hints={[\n        \'Washington - that is a no-brainer, isn\\\'t it?\',\n        \'Franklin was famous for his invention of the lightning rod - so why become more?\',\n        \'Hamilton was a founding father, but got in this deadly quarrel with Aaron Burr.\',\n    ]}\n    hintPlacement="top"\n/>\n')))))}h.isMDXComponent=!0}}]);