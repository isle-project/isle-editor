"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27453],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),k=i,d=m["".concat(u,".").concat(k)]||m[k]||c[k]||r;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=k;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},440034:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(202784),i=n(386010),r="tabItem_Ymn6",o=Object.defineProperty,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function m({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,i.Z)(r,n)},{hidden:t}),e)}},751361:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(202784),i=n(386010),r=n(152670),o=n(258433),l=n(952326),u=n(638849),s="tabList__CuJ",p="tabItem_LNqP",m=Object.defineProperty,c=Object.defineProperties,k=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&v(e,n,t[n]);if(d)for(var n of d(t))b.call(t,n)&&v(e,n,t[n]);return e};function g(e){var t,n;const{lazy:r,block:m,defaultValue:d,values:f,groupId:b,className:v}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=f?f:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),h=(0,o.l)(N,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===d?d:null!=(n=null!=d?d:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?n:g[0].props.value;if(null!==w&&!N.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:O,setTabGroupChoices:j}=(0,l.U)(),[C,P]=(0,a.useState)(w),T=[],{blockElementScrollPositionUntilNextRender:q}=(0,u.o5)();if(null!=b){const e=O[b];null!=e&&e!==C&&N.some((t=>t.value===e))&&P(e)}const x=e=>{const t=e.currentTarget,n=T.indexOf(t),a=N[n].value;a!==C&&(q(t),P(a),null!=b&&j(b,String(a)))},D=e=>{var t,n;let a=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;a=null!=(t=T[n])?t:T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=null!=(n=T[t])?n:T[T.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},v)},N.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(r=y({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>T.push(e),onKeyDown:D,onClick:x},n),o={className:(0,i.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":C===e})},c(r,k(o))),null!=t?t:e);var r,o}))),r?(0,a.cloneElement)(g.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function N(e){const t=(0,r.Z)();return a.createElement(g,y({key:String(t)},e))}},204538:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return f},default:function(){return N},frontMatter:function(){return d},metadata:function(){return b},toc:function(){return y}});var a=n(603905),i=n(751361),r=n(440034),o=Object.defineProperty,l=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))m.call(t,n)&&c(e,n,t[n]);return e};const d={id:"quiz",title:"Quiz",sidebar_label:"Quiz"},f=void 0,b={unversionedId:"questions/quiz",id:"questions/quiz",title:"Quiz",description:"Viktorinos komponentas, kuriame rodoma klausim\u0173 komponent\u0173 seka.",source:"@site/i18n/lt/docusaurus-plugin-content-docs/current/questions/quiz.md",sourceDirName:"questions",slug:"/questions/quiz",permalink:"/lt/docs/questions/quiz",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/quiz.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1650908462,formattedLastUpdatedAt:"2022-04-25",frontMatter:{id:"quiz",title:"Quiz",sidebar_label:"Quiz"},sidebar:"docs",previous:{title:"Question Form",permalink:"/lt/docs/questions/question-form"},next:{title:"Range Question",permalink:"/lt/docs/questions/range-question"}},v={},y=[{value:"Parinktys",id:"parinktys",level:2},{value:"Pavyzd\u017eiai",id:"pavyzd\u017eiai",level:2}],g={toc:y};function N(e){var t,n=e,{components:o}=n,c=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&m.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=k(k({},g),c),l(t,u({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Viktorinos komponentas, kuriame rodoma klausim\u0173 komponent\u0173 seka."),(0,a.kt)("h2",k({},{id:"parinktys"}),"Parinktys"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"confidence")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": ar rodyti Likerto skal\u0119, kurioje pra\u0161oma nurodyti naudotojo atsakymo patikimum\u0105.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"forceConfidence")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroliuoja, ar prie\u0161 pereinant prie kito klausimo naudotojas turi nurodyti patikimumo lyg\u012f.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"count")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": \u012f viktorin\u0105 \u012ftraukiam\u0173 klausim\u0173 skai\u010dius. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"questions")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array (required)"),": klausim\u0173 aib\u0117, i\u0161 kurios atsitiktine tvarka bus atrenkami klausimai.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"active")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroliuoja, ar aktyvus viktorinos laikmatis.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"duration")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": viktorinos trukm\u0117 (minut\u0117mis); pasibaigus laikui, bus rodomas santraukos puslapis.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"skippable")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroliuoja, ar viktorinos klausimus galima praleisti.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"footerNodes")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),": mazg\u0173, rodom\u0173 kiekvieno klausimo pora\u0161t\u0117je, masyvas. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"nextLabel")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": mygtuko, kuriuo pereinama prie kito klausimo, etiket\u0117. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroliuoja, ar baigus viktorin\u0105 mokiniams rodyti gr\u012f\u017etam\u0105j\u012f ry\u0161\u012f apie j\u0173 atsakym\u0173 teisingum\u0105.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"showFinishButton")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroliuoja, ar rodomas mygtukas baigti viktorin\u0105 ir pereiti tiesiai \u012f rezultat\u0173 puslap\u012f.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"finishLabel")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": viktorinos u\u017ebaigimo mygtuko etiket\u0117. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"downloadButton")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroliuoja, ar rodyti atsakym\u0173 atsisiuntimo mygtuk\u0105.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"repeatable")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroliuoja, ar viktorin\u0105 galima pakartoti.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onFinished")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": atgalinis skambutis, inicijuojamas, kai viktorina baigiama ir rodomas rezultat\u0173 puslapis.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onFinished() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": atgalinis skambutis, i\u0161kvie\u010diamas, kai naudotojas pateikia atsakym\u0105.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,a.kt)("h2",k({},{id:"pavyzd\u017eiai"}),"Pavyzd\u017eiai"),(0,a.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Subset of Questions",value:"subset"},{label:"Not Skippable",value:"notSkippable"},{label:"Confidence Check",value:"confidenceCheck"},,],lazy:!0,mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"minimal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Quiz\n    questions={[\n        <FreeTextQuestion \n            question="What is the capital of France?" \n            rows={1} \n            solution="Paris" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Poland?" \n            rows={1} \n            solution="Warsaw" \n        />\n    ]}\n/>\n'))),(0,a.kt)(r.Z,{value:"subset",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Quiz\n    count={3}\n    questions={[\n        <FreeTextQuestion \n            question="What is the capital of France?" \n            rows={1} \n            solution="Paris" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Poland?" \n            rows={1} \n            solution="Warsaw" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Portugal?" \n            rows={1} \n            solution="Lisbon" \n        />,     \n        <FreeTextQuestion \n            question="What is the capital of Egypt?" \n            rows={1} \n            solution="Cairo" \n        />\n    ]}\n/>\n'))),(0,a.kt)(r.Z,{value:"notSkippable",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Quiz\n    skippable={false}\n    questions={[\n        <FreeTextQuestion \n            question="What is the capital of France?" \n            rows={1} \n            solution="Paris" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Poland?" \n            rows={1} \n            solution="Warsaw" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Portugal?" \n            rows={1} \n            solution="Lisbon" \n        />,     \n        <FreeTextQuestion \n            question="What is the capital of Egypt?" \n            rows={1} \n            solution="Cairo" \n        />\n    ]}\n/>\n'))),(0,a.kt)(r.Z,{value:"confidenceCheck",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Quiz\n    confidence\n    forceConfidence\n    count={4}\n    questions={[\n        <FreeTextQuestion \n            question="What is the capital of France?" \n            rows={1} \n            solution="Paris" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Poland?" \n            rows={1} \n            solution="Warsaw" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Portugal?" \n            rows={1} \n            solution="Lisbon" \n        />,     \n        <FreeTextQuestion \n            question="What is the capital of Egypt?" \n            rows={1} \n            solution="Cairo" \n        />\n    ]}\n/>\n')))))}N.isMDXComponent=!0}}]);