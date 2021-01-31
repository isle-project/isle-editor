(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var i=n(3),a=n(7),r=(n(0),n(384)),l={id:"multiple-choice-question",title:"Multiple Choice Question",sidebar_label:"Multiple Choice Question"},o={unversionedId:"multiple-choice-question",id:"multiple-choice-question",isDocsHomePage:!1,title:"Multiple Choice Question",description:"An ISLE component that renders a multiple choice question. It supports the case where the learner has to select a single answer and when there might be multiple correct answers and all correct ones must be picked.",source:"@site/docs/multiple-choice-question.md",slug:"/multiple-choice-question",permalink:"/docs/multiple-choice-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/multiple-choice-question.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1603733728,sidebar_label:"Multiple Choice Question",sidebar:"docs",previous:{title:"Match List Question",permalink:"/docs/match-list-question"},next:{title:"Number Question",permalink:"/docs/number-question"}},c=[{value:"Example",id:"example",children:[]},{value:"Options",id:"options",children:[]}],b={rightToc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"An ISLE component that renders a multiple choice question. It supports the case where the learner has to select a single answer and when there might be multiple correct answers and all correct ones must be picked."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<div>\n    <h3>Select correct answer:</h3>\n    <MultipleChoiceQuestion\n        solution={1}\n        answers={[\n            {content:"There\'s a 0.7% chance that average birthweights are the same among smoking and non-smoking mothers", explanation:""},\n            {content:"If the null were true, the probability of observing this large a difference in average birthweights in our data is 0.7%", explanation:""},\n            {content:"The probability that the confidence interval does not contain the true mean difference is 0.7%", explanation:""},\n            {content:"Average birthweights are 0.7% higher among babies born to non-smoking mothers", explanation:""}\n        ]}\n        question="Which of the following is an accurate interpretation of the p-value?"\n    />\n    <h3>Select all that apply:</h3>\n    <MultipleChoiceQuestion\n        solution={[ 0, 3 ]}\n        answers={[\n            {content:"Hierarchical Clustering", explanation:""},\n            {content:"LASSO", explanation:""},\n            {content:"Multiple regression", explanation:""},\n            {content:"kmeans", explanation:""}\n        ]}\n        question="Which of the following methods are used for clustering?"\n    />\n</div>\n')),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"question")," | ",Object(r.b)("inlineCode",{parentName:"li"},"(string|node)"),": the question displayed at the top of the multiple choice component. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"''"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"solution")," | ",Object(r.b)("inlineCode",{parentName:"li"},"(number|array)"),": number denoting which answer is correct or an ",Object(r.b)("inlineCode",{parentName:"li"},"array")," of the correct answer numbers in case the learner should be able to select multiple answers. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"answers")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array (required)"),": an ",Object(r.b)("inlineCode",{parentName:"li"},"array")," of answer objects. Each answer should be an object with ",Object(r.b)("inlineCode",{parentName:"li"},"content")," and ",Object(r.b)("inlineCode",{parentName:"li"},"explanation")," fields, which denote the displayed answer option and an explanation visible after the question has been submitted to explain why the answer is correct or incorrect. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"hintPlacement")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": placement of the hints (either ",Object(r.b)("inlineCode",{parentName:"li"},"top"),", ",Object(r.b)("inlineCode",{parentName:"li"},"left"),", ",Object(r.b)("inlineCode",{parentName:"li"},"right"),", or ",Object(r.b)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'bottom'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"hints")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array<(string|node)>"),": hints providing guidance on how to answer the question. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"feedback")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether to display feedback buttons. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"disabled")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether the question is disabled. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"chat")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether the element should have an integrated chat. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"provideFeedback")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": either ",Object(r.b)("inlineCode",{parentName:"li"},"full"),", ",Object(r.b)("inlineCode",{parentName:"li"},"incremental"),", or ",Object(r.b)("inlineCode",{parentName:"li"},"none"),". If ",Object(r.b)("inlineCode",{parentName:"li"},"full"),", feedback including the correct answer is displayed after learners submit their answers; if ",Object(r.b)("inlineCode",{parentName:"li"},"incremental"),", feedback is only displayed for the selected answer; if ",Object(r.b)("inlineCode",{parentName:"li"},"none"),", no feedback is returned. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'incremental'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"disableSubmitNotification")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether to disable submission notifications. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"displaySolution")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": controls whether the solution is displayed upfront. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"voiceID")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": voice control identifier. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"until")," | ",Object(r.b)("inlineCode",{parentName:"li"},"Date"),": time until students should be allowed to submit answers. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"points")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": maximum number of points awarded in grading. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"10"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"style")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": CSS inline styles. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onChange")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),': callback invoked every time the selected answer changes; receives the index of the selected question as its sole argument (or an array in case the question is of type "Choose all that apply"). Default: ',Object(r.b)("inlineCode",{parentName:"li"},"onChange(){}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": callback invoked after an answer is submitted. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onSubmit(){}"),".")))}s.isMDXComponent=!0},384:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?a.a.createElement(d,o(o({ref:t},b),{},{components:n})):a.a.createElement(d,o({ref:t},b))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var b=2;b<r;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);