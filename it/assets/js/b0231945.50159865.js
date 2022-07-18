"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[76783],{603905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(202784);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=u(t),m=i,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return t?a.createElement(f,o(o({ref:n},p),{},{components:t})):a.createElement(f,o({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=d;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},440034:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(202784),i=t(386010),l="tabItem_Ymn6",o=Object.defineProperty,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;function c({children:e,hidden:n,className:t}){return a.createElement("div",((e,n)=>{for(var t in n||(n={}))s.call(n,t)&&p(e,t,n[t]);if(r)for(var t of r(n))u.call(n,t)&&p(e,t,n[t]);return e})({role:"tabpanel",className:(0,i.Z)(l,t)},{hidden:n}),e)}},751361:function(e,n,t){t.d(n,{Z:function(){return y}});var a=t(202784),i=t(386010),l=t(152670),o=t(258433),r=t(952326),s=t(638849),u="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,g=(e,n,t)=>n in e?c(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,k=(e,n)=>{for(var t in n||(n={}))b.call(n,t)&&g(e,t,n[t]);if(f)for(var t of f(n))h.call(n,t)&&g(e,t,n[t]);return e};function v(e){var n,t;const{lazy:l,block:c,defaultValue:f,values:b,groupId:h,className:g}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=null!=b?b:v.map((({props:{value:e,label:n,attributes:t}})=>({value:e,label:n,attributes:t}))),N=(0,o.l)(y,((e,n)=>e.value===n.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const C=null===f?f:null!=(t=null!=f?f:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==C&&!y.some((e=>e.value===C)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${C}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:O}=(0,r.U)(),[x,j]=(0,a.useState)(C),S=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=h){const e=w[h];null!=e&&e!==x&&y.some((n=>n.value===e))&&j(e)}const z=e=>{const n=e.currentTarget,t=S.indexOf(n),a=y[t].value;a!==x&&(T(n),j(a),null!=h&&O(h,String(a)))},q=e=>{var n,t;let a=null;switch(e.key){case"ArrowRight":{const t=S.indexOf(e.currentTarget)+1;a=null!=(n=S[t])?n:S[0];break}case"ArrowLeft":{const n=S.indexOf(e.currentTarget)-1;a=null!=(t=S[n])?t:S[S.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},g)},y.map((({value:e,label:n,attributes:t})=>{return a.createElement("li",(l=k({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>S.push(e),onKeyDown:q,onFocus:z,onClick:z},t),o={className:(0,i.Z)("tabs__item",p,null==t?void 0:t.className,{"tabs__item--active":x===e})},d(l,m(o))),null!=n?n:e);var l,o}))),l?(0,a.cloneElement)(v.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==x})))))}function y(e){const n=(0,l.Z)();return a.createElement(v,k({key:String(n)},e))}},105942:function(e,n,t){t.r(n),t.d(n,{assets:function(){return g},contentTitle:function(){return b},default:function(){return y},frontMatter:function(){return f},metadata:function(){return h},toc:function(){return k}});var a=t(603905),i=t(751361),l=t(440034),o=Object.defineProperty,r=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&d(e,t,n[t]);if(u)for(var t of u(n))c.call(n,t)&&d(e,t,n[t]);return e};const f={id:"multiple-choice-question",title:"Multiple Choice Question",sidebar_label:"Multiple Choice Question"},b=void 0,h={unversionedId:"questions/multiple-choice-question",id:"questions/multiple-choice-question",title:"Multiple Choice Question",description:"Un componente ISLE che rende una domanda a scelta multipla. Supporta il caso in cui l'allievo deve selezionare una singola risposta e quando potrebbero esserci pi\xf9 risposte corrette e tutte le risposte corrette devono essere scelte.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/questions/multiple-choice.md",sourceDirName:"questions",slug:"/questions/multiple-choice-question",permalink:"/it/docs/questions/multiple-choice-question",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/multiple-choice.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633715852,formattedLastUpdatedAt:"8 ott 2021",frontMatter:{id:"multiple-choice-question",title:"Multiple Choice Question",sidebar_label:"Multiple Choice Question"},sidebar:"docs",previous:{title:"Match List Question",permalink:"/it/docs/questions/match-list-question"},next:{title:"Multiple Choice Matrix",permalink:"/it/docs/questions/multiple-choice-matrix"}},g={},k=[{value:"Opzioni",id:"opzioni",level:2},{value:"Esempi",id:"esempi",level:2}],v={toc:k};function y(e){var n,t=e,{components:o}=t,d=((e,n)=>{var t={};for(var a in e)p.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&u)for(var a of u(e))n.indexOf(a)<0&&c.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(n=m(m({},v),d),r(n,s({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Un componente ISLE che rende una domanda a scelta multipla. Supporta il caso in cui l'allievo deve selezionare una singola risposta e quando potrebbero esserci pi\xf9 risposte corrette e tutte le risposte corrette devono essere scelte."),(0,a.kt)("h2",m({},{id:"opzioni"}),"Opzioni"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"question")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|node)"),": la domanda visualizzata nella parte superiore del componente a scelta multipla. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"solution")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(number|array)"),": numero che indica quale risposta \xe8 corretta o un ",(0,a.kt)("inlineCode",{parentName:"li"},"array")," dei numeri di risposta corretti nel caso in cui l'allievo debba essere in grado di selezionare pi\xf9 risposte. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"answers")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array (required)"),": un ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),' di oggetti di risposta. Ogni risposta dovrebbe essere un oggetto con campi "contenuto" e "spiegazione", che indicano l\'opzione di risposta visualizzata e una spiegazione visibile dopo l\'invio della domanda per spiegare perch\xe9 la risposta \xe8 corretta o non corretta. Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": posizionamento dei suggerimenti (",(0,a.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"right")," o ",(0,a.kt)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hints")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": suggerimenti che forniscono indicazioni su come rispondere alla domanda. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"feedback")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": controlla se visualizzare i pulsanti di feedback. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"disabled")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": controlla se la domanda \xe8 disabilitata. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"chat")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": controlla se l'elemento deve avere una chat integrata. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),': o "pieno", "incrementale", o "nessuno". Se ',(0,a.kt)("inlineCode",{parentName:"li"},"full"),", il feedback, inclusa la risposta corretta, viene visualizzato dopo che gli studenti hanno inviato le loro risposte; se ",(0,a.kt)("inlineCode",{parentName:"li"},"incremental"),", il feedback viene visualizzato solo per la risposta selezionata; se ",(0,a.kt)("inlineCode",{parentName:"li"},"nessuno"),", non viene restituito alcun feedback. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'incremental'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": controlla se disabilitare le notifiche di presentazione. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"displaySolution")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": controlla se la soluzione viene visualizzata in anticipo. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"until")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"Date"),": il tempo necessario per consentire agli studenti di presentare le risposte. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"points")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": numero massimo di punti assegnati in classifica. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": Stili in linea CSS. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onChange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),': richiamata ogni volta che la risposta selezionata cambia; riceve l\'indice della domanda selezionata come unico argomento (o un array nel caso la domanda sia di tipo "Choose all that apply"). Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"onChange(){}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": richiamata invocata dopo l'invio di una risposta. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onSubmit(){}"),".")),(0,a.kt)("h2",m({},{id:"esempi"}),"Esempi"),(0,a.kt)(i.Z,{defaultValue:"singleAnswer",values:[{label:"Single Answer",value:"singleAnswer"},{label:"Formatted Answers",value:"formattedAnswers"},{label:"Instant Feedback",value:"instantFeedback"},{label:"Multiple Answers",value:"multipleAnswers"},{label:"Series of Questions",value:"aSeries"},{label:"With Hints",value:"withHints"}],lazy:!0,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"singleAnswer",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<MultipleChoiceQuestion\n    solution={0}\n    answers={[\n        {content:"Hierarchical Clustering"},\n        {content:"LASSO"},\n        {content:"Multiple regression"}\n    ]}\n    question="Which of the following methods are used for clustering?"\n/>\n'))),(0,a.kt)(l.Z,{value:"formattedAnswers",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<MultipleChoiceQuestion\n    answers={[\n        {content: <span>**bold**</span>},\n        {content: <span>*italic*</span>},\n        {content: <span style={{ fontFamily: 'Georgia', color: 'red' }}>styled</span>}\n    ]}\n    question={<span style={{ fontSize: 33}}>What kind of font do you like the most?</span>}\n/>\n"))),(0,a.kt)(l.Z,{value:"instantFeedback",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<MultipleChoiceQuestion\n    solution={0}\n    answers={[\n        {content:"Hierarchical Clustering"},\n        {content:"LASSO"},\n        {content:"Multiple regression"}\n    ]}\n    question="Which of the following methods are used for clustering?"\n    provideFeedback="full"\n/>\n'))),(0,a.kt)(l.Z,{value:"multipleAnswers",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<MultipleChoiceQuestion\n    solution={[ 0, 3 ]}\n    answers={[\n        {content:"Hierarchical Clustering"},\n        {content:"LASSO"},\n        {content:"Multiple regression"},\n        {content:"kmeans"}\n    ]}\n    question="Which of the following methods are used for clustering?"\n    style={{ background: \'#FFF6F3\'}}\n/>\n'))),(0,a.kt)(l.Z,{value:"aSeries",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Slider>\n    <MultipleChoiceQuestion\n        solution={[ 1, 3 ]}\n        answers={[\n            { content:"George Washington", explanation: "Yes, he was the first president." },\n            { content:"Benjamin Franklin", explanation: "He was a founding father."},\n            { content:"Ulysses S. Grant", explanation: "General and 18th president." },\n            { content:"Alexander Hamilton", explanation: "Had aspirations, but died in a duel." }\n        ]}\n        question="Who was not a president of the United States?"\n        style={{ background: \'lightblue\'}}\n        feedback={false}\n    />\n    <MultipleChoiceQuestion\n        solution={[ 0, 3 ]}\n        answers={[\n            {content:"Hierarchical Clustering", explanation:""},\n            {content:"LASSO", explanation:""},\n            {content:"Multiple regression", explanation:""},\n            {content:"kmeans", explanation:""}\n        ]}\n        question="Which of the following methods are used for clustering?"\n        style={{ background: \'#FFF6F3\'}}\n        feedback={false}\n    />\n</Slider>\n'))),(0,a.kt)(l.Z,{value:"withHints",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<MultipleChoiceQuestion\n    solution={[ 1, 3 ]}\n    answers={[\n        { content:"George Washington", explanation: "Yes, he was the first president." },\n        { content:"Benjamin Franklin", explanation: "He was a founding father."},\n        { content:"Ulysses S. Grant", explanation: "General and 18th president." },\n        { content:"Alexander Hamilton", explanation: "Had aspirations, but died in a duel." }\n    ]}\n    question="Who was not a president of the United States?"\n    style={{ background: \'lightblue\'}}\n    feedback={false}\n    hints={[\n        \'Washington - that is a no-brainer, isn\\\'t it?\',\n        \'Franklin was famous for his invention of the lightning rod - so why become more?\',\n        \'Hamilton was a founding father, but got in this deadly quarrel with Aaron Burr.\',\n    ]}\n    hintPlacement="top"\n/>\n')))))}y.isMDXComponent=!0}}]);