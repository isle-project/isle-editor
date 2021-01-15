(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{198:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var i=n(3),a=n(7),r=(n(0),n(384)),o={id:"quiz",title:"Quiz",sidebar_label:"Quiz"},l={unversionedId:"quiz",id:"quiz",isDocsHomePage:!1,title:"Quiz",description:"A quiz component displaying a sequence of question components.",source:"@site/docs/quiz.md",slug:"/quiz",permalink:"/docs/quiz",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/quiz.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1599700151,sidebar_label:"Quiz",sidebar:"docs",previous:{title:"Question Form",permalink:"/docs/question-form"},next:{title:"Range Question",permalink:"/docs/range-question"}},b=[{value:"Example",id:"example",children:[]},{value:"Options",id:"options",children:[]}],c={rightToc:b};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A quiz component displaying a sequence of question components."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Quiz\n    count={2}\n    questions={[\n        <RangeQuestion\n            question="Approximately in which range lie 99% of observations drawn from a standard normal distribution?"\n            solution={[-3,3]}\n        />,\n        <NumberQuestion\n            question="What is the number PI - three digits after the period"\n            solution={Math.PI}\n            digits={3}\n        />\n    ]}\n/>\n')),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"confidence")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": whether to display a Likert scale asking for the confidence of the user's answer. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"forceConfidence")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether a user has to supply a confidence level before moving to the next question. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"count")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": number of questions to include in the quiz. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"questions")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array (required)"),": array of questions from which questions will be randomly selected. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"active")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether the timer for the quiz is active. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"duration")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": duration of the quiz (in minutes); once time is up, the summary page will be displayed. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"skippable")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether questions in  the quiz are skippable. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"footerNodes")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": array of nodes to be displayed in the footer of each question. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"nextLabel")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": label of button to advance to next question. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"provideFeedback")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether to show students feedback on correctness of their answers after quiz completion. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"showFinishButton")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether to display button to finish quiz and jump directly to results page. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"finishLabel")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": label of button to finish quiz. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"downloadButton")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether to display a button for downloading the responses. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onFinished")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": callback invoked when the quiz is finished and the results page is displayed. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onFinished() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": callback invoked when user submits an answer. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")))}u.isMDXComponent=!0},384:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=u(n),d=i,m=s["".concat(o,".").concat(d)]||s[d]||p[d]||r;return n?a.a.createElement(m,l(l({ref:t},c),{},{components:n})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);