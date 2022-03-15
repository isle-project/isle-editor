"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7188],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,k=m["".concat(u,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},358215:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(202784);function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(487462),i=n(202784),r=n(972389),o=n(161419),l=n(386010),u="tabItem_LplD";function s(e){var t,n,r,s=e.lazy,p=e.block,c=e.defaultValue,m=e.values,d=e.groupId,k=e.className,f=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=f[0])?void 0:r.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,o.UB)(),h=N.tabGroupChoices,y=N.setTabGroupChoices,j=(0,i.useState)(g),C=j[0],w=j[1],T=[],q=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var x=h[d];null!=x&&x!==C&&v.some((function(e){return e.value===x}))&&w(x)}var z=function(e){var t=e.currentTarget,n=T.indexOf(t),a=v[n].value;a!==C&&(q(t),w(a),null!=d&&y(d,a))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var i=T.indexOf(e.currentTarget)-1;n=T[i]||T[T.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},k)},v.map((function(e){var t=e.value,n=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return T.push(e)},onKeyDown:O,onFocus:z,onClick:z},r,{className:(0,l.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),s?(0,i.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function p(e){var t=(0,r.Z)();return i.createElement(s,(0,a.Z)({key:String(t)},e))}},48363:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return m},toc:function(){return d},default:function(){return f}});var a=n(487462),i=n(263366),r=(n(202784),n(603905)),o=n(409877),l=n(358215),u=["components"],s={id:"quiz",title:"Quiz",sidebar_label:"Quiz"},p=void 0,c={unversionedId:"questions/quiz",id:"questions/quiz",title:"Quiz",description:"Viktor\u012bnas komponents, kur\u0101 tiek r\u0101d\u012bta jaut\u0101jumu komponentu sec\u012bba.",source:"@site/i18n/lv/docusaurus-plugin-content-docs/current/questions/quiz.md",sourceDirName:"questions",slug:"/questions/quiz",permalink:"/lv/docs/questions/quiz",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/quiz.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1.06.2021.",frontMatter:{id:"quiz",title:"Quiz",sidebar_label:"Quiz"},sidebar:"docs",previous:{title:"Question Form",permalink:"/lv/docs/questions/question-form"},next:{title:"Range Question",permalink:"/lv/docs/questions/range-question"}},m={},d=[{value:"Iesp\u0113jas",id:"iesp\u0113jas",level:2},{value:"Piem\u0113ri",id:"piem\u0113ri",level:2}],k={toc:d};function f(e){var t=e.components,n=(0,i.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Viktor\u012bnas komponents, kur\u0101 tiek r\u0101d\u012bta jaut\u0101jumu komponentu sec\u012bba."),(0,r.kt)("h2",{id:"iesp\u0113jas"},"Iesp\u0113jas"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"confidence")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": vai r\u0101d\u012bt Likerta skalu, kur\u0101 j\u0101nor\u0101da lietot\u0101ja atbildes ticam\u012bba.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"forceConfidence")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrol\u0113, vai lietot\u0101jam ir j\u0101nor\u0101da ticam\u012bbas l\u012bmenis, pirms p\u0101riet pie n\u0101kam\u0101 jaut\u0101juma.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"count")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": viktor\u012bn\u0101 iek\u013caujamo jaut\u0101jumu skaits. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"questions")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array (required)"),": jaut\u0101jumu mas\u012bvs, no kura jaut\u0101jumi tiks atlas\u012bti p\u0113c nejau\u0161\u012bbas principa.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"active")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrol\u0113, vai viktor\u012bnas taimeris ir akt\u012bvs.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"duration")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": viktor\u012bnas ilgums (min\u016bt\u0113s); kad laiks b\u016bs beidzies, tiks par\u0101d\u012bta kopsavilkuma lapa.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"skippable")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrol\u0113, vai viktor\u012bnas jaut\u0101jumus var izlaist.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"footerNodes")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array"),": mezglu mas\u012bvs, kas j\u0101att\u0113lo katra jaut\u0101juma p\u0113di\u0146\u0101.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"nextLabel")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": pogas eti\u0137ete, lai p\u0101rietu uz n\u0101kamo jaut\u0101jumu. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrol\u0113, vai p\u0113c viktor\u012bnas pabeig\u0161anas skol\u0113niem par\u0101d\u012bt atgriezenisko saiti par atbil\u017eu pareiz\u012bbu.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"showFinishButton")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrol\u0113, vai tiek r\u0101d\u012bta poga, lai pabeigtu viktor\u012bnu un p\u0101rietu tie\u0161i uz rezult\u0101tu lapu.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"finishLabel")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": pogas eti\u0137ete, lai pabeigtu viktor\u012bnu. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"downloadButton")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrol\u0113, vai tiek r\u0101d\u012bta poga atbil\u017eu lejupiel\u0101dei.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onFinished")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": atsauces zvans, kas tiek izsaukts, kad viktor\u012bna ir pabeigta un tiek par\u0101d\u012bta rezult\u0101tu lapa.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onFinished() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": atgriezeniskais zvans, kas tiek izsaukts, kad lietot\u0101js iesniedz atbildi.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,r.kt)("h2",{id:"piem\u0113ri"},"Piem\u0113ri"),(0,r.kt)(o.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Subset of Questions",value:"subset"},{label:"Not Skippable",value:"notSkippable"},{label:"Confidence Check",value:"confidenceCheck"},,],lazy:!0,mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Quiz\n    questions={[\n        <FreeTextQuestion \n            question="What is the capital of France?" \n            rows={1} \n            solution="Paris" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Poland?" \n            rows={1} \n            solution="Warsaw" \n        />\n    ]}\n/>\n'))),(0,r.kt)(l.Z,{value:"subset",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Quiz\n    count={3}\n    questions={[\n        <FreeTextQuestion \n            question="What is the capital of France?" \n            rows={1} \n            solution="Paris" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Poland?" \n            rows={1} \n            solution="Warsaw" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Portugal?" \n            rows={1} \n            solution="Lisbon" \n        />,     \n        <FreeTextQuestion \n            question="What is the capital of Egypt?" \n            rows={1} \n            solution="Cairo" \n        />\n    ]}\n/>\n'))),(0,r.kt)(l.Z,{value:"notSkippable",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Quiz\n    skippable={false}\n    questions={[\n        <FreeTextQuestion \n            question="What is the capital of France?" \n            rows={1} \n            solution="Paris" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Poland?" \n            rows={1} \n            solution="Warsaw" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Portugal?" \n            rows={1} \n            solution="Lisbon" \n        />,     \n        <FreeTextQuestion \n            question="What is the capital of Egypt?" \n            rows={1} \n            solution="Cairo" \n        />\n    ]}\n/>\n'))),(0,r.kt)(l.Z,{value:"confidenceCheck",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Quiz\n    confidence\n    forceConfidence\n    count={4}\n    questions={[\n        <FreeTextQuestion \n            question="What is the capital of France?" \n            rows={1} \n            solution="Paris" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Poland?" \n            rows={1} \n            solution="Warsaw" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Portugal?" \n            rows={1} \n            solution="Lisbon" \n        />,     \n        <FreeTextQuestion \n            question="What is the capital of Egypt?" \n            rows={1} \n            solution="Cairo" \n        />\n    ]}\n/>\n')))))}f.isMDXComponent=!0}}]);