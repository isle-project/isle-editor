"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1016],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(202784),i=n(386010),r="tabItem_Ymn6",l=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,i.Z)(r,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(202784),i=n(386010),r=n(152670),l=n(258433),o=n(952326),u=n(638849),s="tabList__CuJ",p="tabItem_LNqP",c=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&v(e,n,t[n]);if(f)for(var n of f(t))k.call(t,n)&&v(e,n,t[n]);return e};function g(e){var t,n;const{lazy:r,block:c,defaultValue:f,values:b,groupId:k,className:v}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=b?b:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),y=(0,l.l)(N,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===f?f:null!=(n=null!=f?f:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?n:g[0].props.value;if(null!==w&&!N.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:O,setTabGroupChoices:q}=(0,o.U)(),[z,C]=(0,a.useState)(w),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=k){const e=O[k];null!=e&&e!==z&&N.some((t=>t.value===e))&&C(e)}const P=e=>{const t=e.currentTarget,n=T.indexOf(t),a=N[n].value;a!==z&&(x(t),C(a),null!=k&&q(k,String(a)))},j=e=>{var t,n;let a=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;a=null!=(t=T[n])?t:T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=null!=(n=T[t])?n:T[T.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},v)},N.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(r=h({role:"tab",tabIndex:z===e?0:-1,"aria-selected":z===e,key:e,ref:e=>T.push(e),onKeyDown:j,onClick:P},n),l={className:(0,i.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":z===e})},d(r,m(l))),null!=t?t:e);var r,l}))),r?(0,a.cloneElement)(g.filter((e=>e.props.value===z))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==z})))))}function N(e){const t=(0,r.Z)();return a.createElement(g,h({key:String(t)},e))}},741124:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return b},default:function(){return N},frontMatter:function(){return f},metadata:function(){return k},toc:function(){return h}});var a=n(603905),i=n(751361),r=n(440034),l=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&d(e,n,t[n]);return e};const f={id:"quiz",title:"Quiz",sidebar_label:"Quiz"},b=void 0,k={unversionedId:"questions/quiz",id:"questions/quiz",title:"Quiz",description:"Un componente del quiz che mostra una sequenza di componenti di domanda.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/questions/quiz.md",sourceDirName:"questions",slug:"/questions/quiz",permalink:"/it/docs/questions/quiz",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/quiz.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1650908462,formattedLastUpdatedAt:"25 apr 2022",frontMatter:{id:"quiz",title:"Quiz",sidebar_label:"Quiz"},sidebar:"docs",previous:{title:"Question Form",permalink:"/it/docs/questions/question-form"},next:{title:"Range Question",permalink:"/it/docs/questions/range-question"}},v={},h=[{value:"Opzioni",id:"opzioni",level:2},{value:"Esempi",id:"esempi",level:2}],g={toc:h};function N(e){var t,n=e,{components:l}=n,d=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},g),d),o(t,u({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Un componente del quiz che mostra una sequenza di componenti di domanda."),(0,a.kt)("h2",m({},{id:"opzioni"}),"Opzioni"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"confidence")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": se visualizzare una bilancia Likert che chiede la sicurezza della risposta dell'utente. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"forceConfidence")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": controlla se un utente deve fornire un livello di fiducia prima di passare alla domanda successiva. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"count")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": numero di domande da includere nel quiz. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"questions")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array (required)"),": array di domande da cui le domande saranno selezionate in modo casuale. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"active")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": controlla se il timer del quiz \xe8 attivo. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"duration")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": durata del quiz (in minuti); una volta scaduto il tempo, verr\xe0 visualizzata la pagina di riepilogo. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"skippable")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": controlla se le domande del quiz possono essere saltate. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"footerNodes")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),": array di nodi da visualizzare nel pi\xe8 di pagina di ogni domanda. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"nextLabel")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": etichetta del pulsante per passare alla domanda successiva. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": controlla se mostrare agli studenti un feedback sulla correttezza delle loro risposte dopo il completamento del quiz. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"showFinishButton")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": controlla se visualizzare il pulsante per finire il quiz e saltare direttamente alla pagina dei risultati. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"finishLabel")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": etichetta del pulsante per finire il quiz. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"downloadButton")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": controlla se visualizzare un pulsante per scaricare le risposte. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"repeatable")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": controlla se il quiz pu\xf2 essere ripetuto. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onFinished")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": richiamata quando il quiz \xe8 finito e viene visualizzata la pagina dei risultati. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onFinished() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": richiamata quando l'utente invia una risposta. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,a.kt)("h2",m({},{id:"esempi"}),"Esempi"),(0,a.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Subset of Questions",value:"subset"},{label:"Not Skippable",value:"notSkippable"},{label:"Confidence Check",value:"confidenceCheck"},,],lazy:!0,mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Quiz\n    questions={[\n        <FreeTextQuestion \n            question="What is the capital of France?" \n            rows={1} \n            solution="Paris" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Poland?" \n            rows={1} \n            solution="Warsaw" \n        />\n    ]}\n/>\n'))),(0,a.kt)(r.Z,{value:"subset",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Quiz\n    count={3}\n    questions={[\n        <FreeTextQuestion \n            question="What is the capital of France?" \n            rows={1} \n            solution="Paris" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Poland?" \n            rows={1} \n            solution="Warsaw" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Portugal?" \n            rows={1} \n            solution="Lisbon" \n        />,     \n        <FreeTextQuestion \n            question="What is the capital of Egypt?" \n            rows={1} \n            solution="Cairo" \n        />\n    ]}\n/>\n'))),(0,a.kt)(r.Z,{value:"notSkippable",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Quiz\n    skippable={false}\n    questions={[\n        <FreeTextQuestion \n            question="What is the capital of France?" \n            rows={1} \n            solution="Paris" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Poland?" \n            rows={1} \n            solution="Warsaw" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Portugal?" \n            rows={1} \n            solution="Lisbon" \n        />,     \n        <FreeTextQuestion \n            question="What is the capital of Egypt?" \n            rows={1} \n            solution="Cairo" \n        />\n    ]}\n/>\n'))),(0,a.kt)(r.Z,{value:"confidenceCheck",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Quiz\n    confidence\n    forceConfidence\n    count={4}\n    questions={[\n        <FreeTextQuestion \n            question="What is the capital of France?" \n            rows={1} \n            solution="Paris" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Poland?" \n            rows={1} \n            solution="Warsaw" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Portugal?" \n            rows={1} \n            solution="Lisbon" \n        />,     \n        <FreeTextQuestion \n            question="What is the capital of Egypt?" \n            rows={1} \n            solution="Cairo" \n        />\n    ]}\n/>\n')))))}N.isMDXComponent=!0}}]);