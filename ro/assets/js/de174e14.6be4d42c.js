(self.webpackChunk=self.webpackChunk||[]).push([[8548],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},358215:function(e,t,n){"use strict";var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},541395:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(202784),i=n(180944),r=n(386010),o="tabItem_1uMI",l="tabItemActive_2DSg";var u=37,s=39;var c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,m=e.groupId,d=e.className,f=(0,i.Z)(),b=f.tabGroupChoices,k=f.setTabGroupChoices,v=(0,a.useState)(c),h=v[0],N=v[1],g=a.Children.toArray(e.children),y=[];if(null!=m){var C=b[m];null!=C&&C!==h&&p.some((function(e){return e.value===C}))&&N(C)}var x=function(e){var t=e.currentTarget,n=y.indexOf(t),a=p[n].value;N(a),null!=m&&(k(m,a),setTimeout((function(){var e,n,a,i,r,o,u,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,r=e.right,o=window,u=o.innerHeight,s=o.innerWidth,n>=0&&r<=s&&i<=u&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},w=function(e){var t,n;switch(e.keyCode){case s:var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case u:var i=y.indexOf(e.target)-1;n=y[i]||y[y.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,r.Z)("tabs__item",o,{"tabs__item--active":h===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:w,onFocus:x,onClick:x},n)}))),t?(0,a.cloneElement)(g.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},79443:function(e,t,n){"use strict";var a=(0,n(202784).createContext)(void 0);t.Z=a},180944:function(e,t,n){"use strict";var a=n(202784),i=n(79443);t.Z=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},981433:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var a=n(722122),i=n(419756),r=(n(202784),n(603905)),o=n(541395),l=n(358215),u={id:"quiz",title:"Quiz",sidebar_label:"Quiz"},s={unversionedId:"questions/quiz",id:"questions/quiz",isDocsHomePage:!1,title:"Quiz",description:"O component\u0103 de chestionar care afi\u0219eaz\u0103 o secven\u021b\u0103 de componente de \xeentreb\u0103ri.",source:"@site/i18n/ro/docusaurus-plugin-content-docs/current/questions/quiz.md",sourceDirName:"questions",slug:"/questions/quiz",permalink:"/docs/questions/quiz",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/quiz.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"01.06.2021",sidebar_label:"Quiz",frontMatter:{id:"quiz",title:"Quiz",sidebar_label:"Quiz"},sidebar:"docs",previous:{title:"Question Form",permalink:"/docs/questions/question-form"},next:{title:"Range Question",permalink:"/docs/questions/range-question"}},c=[{value:"Op\u021biuni",id:"op\u021biuni",children:[]},{value:"Exemple",id:"exemple",children:[]}],p={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"O component\u0103 de chestionar care afi\u0219eaz\u0103 o secven\u021b\u0103 de componente de \xeentreb\u0103ri."),(0,r.kt)("h2",{id:"op\u021biuni"},"Op\u021biuni"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"confidence")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": dac\u0103 se afi\u0219eaz\u0103 o scal\u0103 Likert care solicit\u0103 \xeencrederea \xeen r\u0103spunsul utilizatorului. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"forceConfidence")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controleaz\u0103 dac\u0103 un utilizator trebuie s\u0103 furnizeze un nivel de \xeencredere \xeenainte de a trece la urm\u0103toarea \xeentrebare. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"count")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": num\u0103rul de \xeentreb\u0103ri care trebuie incluse \xeen chestionar. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"questions")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array (required)"),": o serie de \xeentreb\u0103ri din care vor fi selectate aleatoriu \xeentreb\u0103ri. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"active")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controleaz\u0103 dac\u0103 cronometrul pentru chestionar este activ sau nu. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"duration")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": durata testului (\xeen minute); odat\u0103 ce timpul a expirat, va fi afi\u0219at\u0103 pagina de rezumat.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"skippable")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controleaz\u0103 dac\u0103 \xeentreb\u0103rile din chestionar pot fi s\u0103rite.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"footerNodes")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array"),": matrice de noduri care trebuie afi\u0219ate \xeen subsolul fiec\u0103rei \xeentreb\u0103ri. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"nextLabel")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": eticheta butonului pentru a trece la \xeentrebarea urm\u0103toare. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controleaz\u0103 dac\u0103 se afi\u0219eaz\u0103 studen\u021bilor feedback-ul privind corectitudinea r\u0103spunsurilor lor dup\u0103 finalizarea testului. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"showFinishButton")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controleaz\u0103 dac\u0103 se afi\u0219eaz\u0103 sau nu butonul pentru a termina testul \u0219i a trece direct la pagina de rezultate. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"finishLabel")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": eticheta butonului pentru a termina testul. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"downloadButton")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controleaz\u0103 dac\u0103 se afi\u0219eaz\u0103 sau nu un buton pentru desc\u0103rcarea r\u0103spunsurilor. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onFinished")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": callback invocat atunci c\xe2nd testul se termin\u0103 \u0219i este afi\u0219at\u0103 pagina de rezultate. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onFinished() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": callback invocat atunci c\xe2nd utilizatorul trimite un r\u0103spuns. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,r.kt)("h2",{id:"exemple"},"Exemple"),(0,r.kt)(o.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Subset of Questions",value:"subset"},{label:"Not Skippable",value:"notSkippable"},{label:"Confidence Check",value:"confidenceCheck"},,],lazy:!0,mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Quiz\n    questions={[\n        <FreeTextQuestion \n            question="What is the capital of France?" \n            rows={1} \n            solution="Paris" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Poland?" \n            rows={1} \n            solution="Warsaw" \n        />\n    ]}\n/>\n'))),(0,r.kt)(l.Z,{value:"subset",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Quiz\n    count={3}\n    questions={[\n        <FreeTextQuestion \n            question="What is the capital of France?" \n            rows={1} \n            solution="Paris" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Poland?" \n            rows={1} \n            solution="Warsaw" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Portugal?" \n            rows={1} \n            solution="Lisbon" \n        />,     \n        <FreeTextQuestion \n            question="What is the capital of Egypt?" \n            rows={1} \n            solution="Cairo" \n        />\n    ]}\n/>\n'))),(0,r.kt)(l.Z,{value:"notSkippable",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Quiz\n    skippable={false}\n    questions={[\n        <FreeTextQuestion \n            question="What is the capital of France?" \n            rows={1} \n            solution="Paris" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Poland?" \n            rows={1} \n            solution="Warsaw" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Portugal?" \n            rows={1} \n            solution="Lisbon" \n        />,     \n        <FreeTextQuestion \n            question="What is the capital of Egypt?" \n            rows={1} \n            solution="Cairo" \n        />\n    ]}\n/>\n'))),(0,r.kt)(l.Z,{value:"confidenceCheck",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Quiz\n    confidence\n    forceConfidence\n    count={4}\n    questions={[\n        <FreeTextQuestion \n            question="What is the capital of France?" \n            rows={1} \n            solution="Paris" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Poland?" \n            rows={1} \n            solution="Warsaw" \n        />,\n        <FreeTextQuestion \n            question="What is the capital of Portugal?" \n            rows={1} \n            solution="Lisbon" \n        />,     \n        <FreeTextQuestion \n            question="What is the capital of Egypt?" \n            rows={1} \n            solution="Cairo" \n        />\n    ]}\n/>\n')))))}m.isMDXComponent=!0},386010:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);