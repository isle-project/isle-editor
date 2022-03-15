"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4525],{603905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(202784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(t),d=r,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return t?a.createElement(k,i(i({ref:n},p),{},{components:t})):a.createElement(k,i({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},358215:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(202784);function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},409877:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(487462),r=t(202784),l=t(972389),i=t(161419),o=t(386010),s="tabItem_LplD";function u(e){var n,t,l,u=e.lazy,p=e.block,c=e.defaultValue,m=e.values,d=e.groupId,k=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,i.lx)(b,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===c?c:null!=(n=null!=c?c:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=f[0])?void 0:l.props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.UB)(),z=g.tabGroupChoices,y=g.setTabGroupChoices,N=(0,r.useState)(h),C=N[0],w=N[1],T=[],j=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var q=z[d];null!=q&&q!==C&&b.some((function(e){return e.value===q}))&&w(q)}var x=function(e){var n=e.currentTarget,t=T.indexOf(n),a=b[t].value;a!==C&&(j(n),w(a),null!=d&&y(d,a))},O=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;t=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;t=T[r]||T[T.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},k)},b.map((function(e){var n=e.value,t=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:function(e){return T.push(e)},onKeyDown:O,onFocus:x,onClick:x},l,{className:(0,o.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":C===n})}),null!=t?t:n)}))),u?(0,r.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function p(e){var n=(0,l.Z)();return r.createElement(u,(0,a.Z)({key:String(n)},e))}},350517:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return m},toc:function(){return d},default:function(){return f}});var a=t(487462),r=t(263366),l=(t(202784),t(603905)),i=t(409877),o=t(358215),s=["components"],u={id:"quiz",title:"Quiz",sidebar_label:"Quiz"},p=void 0,c={unversionedId:"questions/quiz",id:"questions/quiz",title:"Quiz",description:"K\xe9rd\xe9skomponensek sorozat\xe1t megjelen\xedt\u0151 kv\xedzkomponens.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/questions/quiz.md",sourceDirName:"questions",slug:"/questions/quiz",permalink:"/hu/docs/questions/quiz",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/quiz.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021. 06. 01.",frontMatter:{id:"quiz",title:"Quiz",sidebar_label:"Quiz"},sidebar:"docs",previous:{title:"Question Form",permalink:"/hu/docs/questions/question-form"},next:{title:"Range Question",permalink:"/hu/docs/questions/range-question"}},m={},d=[{value:"Opci\xf3k",id:"opci\xf3k",level:2},{value:"P\xe9ld\xe1k",id:"p\xe9ld\xe1k",level:2}],k={toc:d};function f(e){var n=e.components,t=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"K\xe9rd\xe9skomponensek sorozat\xe1t megjelen\xedt\u0151 kv\xedzkomponens."),(0,l.kt)("h2",{id:"opci\xf3k"},"Opci\xf3k"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"confidence")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": megjelen\xedt-e egy Likert-sk\xe1l\xe1t, amely a felhaszn\xe1l\xf3 v\xe1lasz\xe1nak bizalmass\xe1g\xe1t k\xe9rdezi meg. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"forceConfidence")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy a felhaszn\xe1l\xf3nak meg kell-e adnia egy bizalmi szintet, miel\u0151tt a k\xf6vetkez\u0151 k\xe9rd\xe9sre l\xe9pne.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"count")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": a kv\xedzben szerepl\u0151 k\xe9rd\xe9sek sz\xe1ma. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"questions")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array (required)"),": k\xe9rd\xe9ssor, amelyb\u0151l a k\xe9rd\xe9sek v\xe9letlenszer\u0171en ker\xfclnek kiv\xe1laszt\xe1sra. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"active")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy a kv\xedz id\u0151z\xedt\u0151je akt\xedv-e. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"duration")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": a kv\xedz id\u0151tartama (percben); az id\u0151 letelte ut\xe1n az \xf6sszefoglal\xf3 oldal jelenik meg.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"skippable")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy a kv\xedz k\xe9rd\xe9sei kihagyhat\xf3ak legyenek-e. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"footerNodes")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array"),": az egyes k\xe9rd\xe9sek l\xe1bl\xe9c\xe9ben megjelen\xedtend\u0151 csom\xf3pontok t\xf6mbje. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"nextLabel")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": a k\xf6vetkez\u0151 k\xe9rd\xe9sre val\xf3 tov\xe1bbl\xe9p\xe9s gombj\xe1nak c\xedmk\xe9je. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy a kv\xedz befejez\xe9se ut\xe1n visszajelz\xe9st mutasson-e a di\xe1koknak a v\xe1laszok helyess\xe9g\xe9r\u0151l.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"showFinishButton")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy megjelenjen-e a kv\xedz befejez\xe9s\xe9hez \xe9s az eredm\xe9nyoldalra val\xf3 k\xf6zvetlen ugr\xe1shoz sz\xfcks\xe9ges gomb. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"finishLabel")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": a kv\xedz befejez\xe9s\xe9hez sz\xfcks\xe9ges gomb c\xedmk\xe9je. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"downloadButton")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy megjelenjen-e egy gomb a v\xe1laszok let\xf6lt\xe9s\xe9hez. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onFinished")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": callback, amely akkor h\xedv\xf3dik, amikor a kv\xedz befejez\u0151dik \xe9s az eredm\xe9nyoldal megjelenik. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onFinished() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": callback h\xedv\xe1s, amikor a felhaszn\xe1l\xf3 elk\xfcldi a v\xe1laszt. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,l.kt)("h2",{id:"p\xe9ld\xe1k"},"P\xe9ld\xe1k"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Subset of Questions",value:"subset"},{label:"Not Skippable",value:"notSkippable"},{label:"Confidence Check",value:"confidenceCheck"},,],lazy:!0,mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Quiz\n    questions={[\n        <FreeTextQuestion \n            question="What is the capital of France?" \n            rows={1} \n            solution="Paris" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Poland?" \n            rows={1} \n            solution="Warsaw" \n        />\n    ]}\n/>\n'))),(0,l.kt)(o.Z,{value:"subset",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Quiz\n    count={3}\n    questions={[\n        <FreeTextQuestion \n            question="What is the capital of France?" \n            rows={1} \n            solution="Paris" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Poland?" \n            rows={1} \n            solution="Warsaw" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Portugal?" \n            rows={1} \n            solution="Lisbon" \n        />,     \n        <FreeTextQuestion \n            question="What is the capital of Egypt?" \n            rows={1} \n            solution="Cairo" \n        />\n    ]}\n/>\n'))),(0,l.kt)(o.Z,{value:"notSkippable",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Quiz\n    skippable={false}\n    questions={[\n        <FreeTextQuestion \n            question="What is the capital of France?" \n            rows={1} \n            solution="Paris" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Poland?" \n            rows={1} \n            solution="Warsaw" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Portugal?" \n            rows={1} \n            solution="Lisbon" \n        />,     \n        <FreeTextQuestion \n            question="What is the capital of Egypt?" \n            rows={1} \n            solution="Cairo" \n        />\n    ]}\n/>\n'))),(0,l.kt)(o.Z,{value:"confidenceCheck",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Quiz\n    confidence\n    forceConfidence\n    count={4}\n    questions={[\n        <FreeTextQuestion \n            question="What is the capital of France?" \n            rows={1} \n            solution="Paris" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Poland?" \n            rows={1} \n            solution="Warsaw" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Portugal?" \n            rows={1} \n            solution="Lisbon" \n        />,     \n        <FreeTextQuestion \n            question="What is the capital of Egypt?" \n            rows={1} \n            solution="Cairo" \n        />\n    ]}\n/>\n')))))}f.isMDXComponent=!0}}]);