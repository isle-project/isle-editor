"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1797],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(202784);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=l,k=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(k,r(r({ref:t},c),{},{components:n})):a.createElement(k,r({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},358215:function(e,t,n){var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:l},t)}},855064:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(202784),l=n(79443);var i=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=n(386010),o="tabItem_1uMI",s="tabItemActive_2DSg";var u=function(e){var t,n=e.lazy,l=e.block,u=e.defaultValue,c=e.values,m=e.groupId,p=e.className,d=a.Children.toArray(e.children),k=null!=c?c:d.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=u?u:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,g=i(),h=g.tabGroupChoices,v=g.setTabGroupChoices,b=(0,a.useState)(f),y=b[0],N=b[1],z=[];if(null!=m){var C=h[m];null!=C&&C!==y&&k.some((function(e){return e.value===C}))&&N(C)}var w=function(e){var t=e.currentTarget,n=z.indexOf(t),a=k[n].value;N(a),null!=m&&(v(m,a),setTimeout((function(){var e,n,a,l,i,r,o,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,l=e.bottom,i=e.right,r=window,o=r.innerHeight,u=r.innerWidth,n>=0&&i<=u&&l<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=z.indexOf(e.target)+1;n=z[a]||z[0];break;case"ArrowLeft":var l=z.indexOf(e.target)-1;n=z[l]||z[z.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},p)},k.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,r.Z)("tabs__item",o,{"tabs__item--active":y===t}),key:t,ref:function(e){return z.push(e)},onKeyDown:j,onFocus:w,onClick:w},null!=n?n:t)}))),n?(0,a.cloneElement)(d.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},79443:function(e,t,n){var a=(0,n(202784).createContext)(void 0);t.Z=a},559772:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return p},default:function(){return k}});var a=n(487462),l=n(263366),i=(n(202784),n(603905)),r=n(855064),o=n(358215),s=["components"],u={id:"multiple-choice-question",title:"Multiple Choice Question",sidebar_label:"Multiple Choice Question"},c=void 0,m={unversionedId:"questions/multiple-choice-question",id:"questions/multiple-choice-question",isDocsHomePage:!1,title:"Multiple Choice Question",description:"Egy ISLE komponens, amely egy feleletv\xe1laszt\xf3s k\xe9rd\xe9st jelen\xedt meg. T\xe1mogatja azt az esetet, amikor a tanul\xf3nak egyetlen v\xe1laszt kell kiv\xe1lasztania, illetve amikor t\xf6bb helyes v\xe1lasz is l\xe9tezik, \xe9s az \xf6sszes helyes v\xe1laszt ki kell v\xe1lasztani.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/questions/multiple-choice.md",sourceDirName:"questions",slug:"/questions/multiple-choice-question",permalink:"/hu/docs/questions/multiple-choice-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/multiple-choice.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633715852,formattedLastUpdatedAt:"2021. 10. 08.",frontMatter:{id:"multiple-choice-question",title:"Multiple Choice Question",sidebar_label:"Multiple Choice Question"},sidebar:"docs",previous:{title:"Match List Question",permalink:"/hu/docs/questions/match-list-question"},next:{title:"Number Question",permalink:"/hu/docs/questions/number-question"}},p=[{value:"Opci\xf3k",id:"opci\xf3k",children:[]},{value:"P\xe9ld\xe1k",id:"p\xe9ld\xe1k",children:[]}],d={toc:p};function k(e){var t=e.components,n=(0,l.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Egy ISLE komponens, amely egy feleletv\xe1laszt\xf3s k\xe9rd\xe9st jelen\xedt meg. T\xe1mogatja azt az esetet, amikor a tanul\xf3nak egyetlen v\xe1laszt kell kiv\xe1lasztania, illetve amikor t\xf6bb helyes v\xe1lasz is l\xe9tezik, \xe9s az \xf6sszes helyes v\xe1laszt ki kell v\xe1lasztani."),(0,i.kt)("h2",{id:"opci\xf3k"},"Opci\xf3k"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"question")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),": a feleletv\xe1laszt\xf3s komponens tetej\xe9n megjelen\u0151 k\xe9rd\xe9s. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"solution")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(number|array)"),': a helyes v\xe1laszt jel\xf6l\u0151 sz\xe1m, vagy a helyes v\xe1laszok sz\xe1mainak "sorozata", ha a tanul\xf3nak t\xf6bb v\xe1laszt is ki kell tudnia v\xe1lasztani.. Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"answers")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array (required)"),': a v\xe1laszobjektumok "t\xf6mbje". Minden v\xe1lasznak egy objektumnak kell lennie, amelynek ',(0,i.kt)("inlineCode",{parentName:"li"},"tartalom")," \xe9s ",(0,i.kt)("inlineCode",{parentName:"li"},"magyar\xe1zat")," mez\u0151i jel\xf6lik a megjelen\xedtett v\xe1laszlehet\u0151s\xe9get \xe9s a k\xe9rd\xe9s elk\xfcld\xe9se ut\xe1n l\xe1that\xf3 magyar\xe1zatot, amely megmagyar\xe1zza, hogy a v\xe1lasz mi\xe9rt helyes vagy helytelen.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": a tippek elhelyez\xe9se (vagy ",(0,i.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"right"),", vagy ",(0,i.kt)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"hints")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": a k\xe9rd\xe9s megv\xe1laszol\xe1s\xe1ra vonatkoz\xf3 \xfatmutat\xe1sokat ad. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"feedback")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy megjelenjenek-e a visszajelz\u0151 gombok. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"disabled")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": ellen\u0151rzi, hogy a k\xe9rd\xe9s ki van-e kapcsolva. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"chat")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy az elemnek legyen-e integr\xe1lt chatje. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),': vagy "teljes", "inkrement\xe1lis", vagy "nincs". Ha "teljes", akkor a helyes v\xe1laszt tartalmaz\xf3 visszajelz\xe9s jelenik meg, miut\xe1n a tanul\xf3k elk\xfcldt\xe9k a v\xe1laszukat; ha "inkrement\xe1lis", akkor csak a kiv\xe1lasztott v\xe1laszra vonatkoz\xf3an jelenik meg visszajelz\xe9s; ha "nincs", akkor nem kap visszajelz\xe9st.. Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"'incremental'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza a beny\xfajt\xe1si \xe9rtes\xedt\xe9sek letilt\xe1s\xe1t. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"displaySolution")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy a megold\xe1s el\u0151re megjelenjen-e. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"until")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"Date"),": a tanul\xf3knak a v\xe1laszok beny\xfajt\xe1s\xe1ig rendelkez\xe9sre \xe1ll\xf3 id\u0151. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"points")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": az oszt\xe1lyoz\xe1s sor\xe1n adhat\xf3 maxim\xe1lis pontsz\xe1m. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline st\xedlusok. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onChange")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),': callback, amely minden alkalommal megh\xedv\xf3dik, amikor a kiv\xe1lasztott v\xe1lasz megv\xe1ltozik; egyetlen argumentumk\xe9nt a kiv\xe1lasztott k\xe9rd\xe9s index\xe9t kapja (vagy egy t\xf6mb\xf6t, ha a k\xe9rd\xe9s "Choose all that apply" t\xedpus\xfa).. Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"onChange(){}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": callback a v\xe1lasz elk\xfcld\xe9se ut\xe1n. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onSubmit(){}"),".")),(0,i.kt)("h2",{id:"p\xe9ld\xe1k"},"P\xe9ld\xe1k"),(0,i.kt)(r.Z,{defaultValue:"singleAnswer",values:[{label:"Single Answer",value:"singleAnswer"},{label:"Formatted Answers",value:"formattedAnswers"},{label:"Instant Feedback",value:"instantFeedback"},{label:"Multiple Answers",value:"multipleAnswers"},{label:"Series of Questions",value:"aSeries"},{label:"With Hints",value:"withHints"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"singleAnswer",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<MultipleChoiceQuestion\n    solution={0}\n    answers={[\n        {content:"Hierarchical Clustering"},\n        {content:"LASSO"},\n        {content:"Multiple regression"}\n    ]}\n    question="Which of the following methods are used for clustering?"\n/>\n'))),(0,i.kt)(o.Z,{value:"formattedAnswers",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MultipleChoiceQuestion\n    answers={[\n        {content: <span>**bold**</span>},\n        {content: <span>*italic*</span>},\n        {content: <span style={{ fontFamily: 'Georgia', color: 'red' }}>styled</span>}\n    ]}\n    question={<span style={{ fontSize: 33}}>What kind of font do you like the most?</span>}\n/>\n"))),(0,i.kt)(o.Z,{value:"instantFeedback",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<MultipleChoiceQuestion\n    solution={0}\n    answers={[\n        {content:"Hierarchical Clustering"},\n        {content:"LASSO"},\n        {content:"Multiple regression"}\n    ]}\n    question="Which of the following methods are used for clustering?"\n    provideFeedback="full"\n/>\n'))),(0,i.kt)(o.Z,{value:"multipleAnswers",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<MultipleChoiceQuestion\n    solution={[ 0, 3 ]}\n    answers={[\n        {content:"Hierarchical Clustering"},\n        {content:"LASSO"},\n        {content:"Multiple regression"},\n        {content:"kmeans"}\n    ]}\n    question="Which of the following methods are used for clustering?"\n    style={{ background: \'#FFF6F3\'}}\n/>\n'))),(0,i.kt)(o.Z,{value:"aSeries",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Slider>\n    <MultipleChoiceQuestion\n        solution={[ 1, 3 ]}\n        answers={[\n            { content:"George Washington", explanation: "Yes, he was the first president." },\n            { content:"Benjamin Franklin", explanation: "He was a founding father."},\n            { content:"Ulysses S. Grant", explanation: "General and 18th president." },\n            { content:"Alexander Hamilton", explanation: "Had aspirations, but died in a duel." }\n        ]}\n        question="Who was not a president of the United States?"\n        style={{ background: \'lightblue\'}}\n        feedback={false}\n    />\n    <MultipleChoiceQuestion\n        solution={[ 0, 3 ]}\n        answers={[\n            {content:"Hierarchical Clustering", explanation:""},\n            {content:"LASSO", explanation:""},\n            {content:"Multiple regression", explanation:""},\n            {content:"kmeans", explanation:""}\n        ]}\n        question="Which of the following methods are used for clustering?"\n        style={{ background: \'#FFF6F3\'}}\n        feedback={false}\n    />\n</Slider>\n'))),(0,i.kt)(o.Z,{value:"withHints",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<MultipleChoiceQuestion\n    solution={[ 1, 3 ]}\n    answers={[\n        { content:"George Washington", explanation: "Yes, he was the first president." },\n        { content:"Benjamin Franklin", explanation: "He was a founding father."},\n        { content:"Ulysses S. Grant", explanation: "General and 18th president." },\n        { content:"Alexander Hamilton", explanation: "Had aspirations, but died in a duel." }\n    ]}\n    question="Who was not a president of the United States?"\n    style={{ background: \'lightblue\'}}\n    feedback={false}\n    hints={[\n        \'Washington - that is a no-brainer, isn\\\'t it?\',\n        \'Franklin was famous for his invention of the lightning rod - so why become more?\',\n        \'Hamilton was a founding father, but got in this deadly quarrel with Aaron Burr.\',\n    ]}\n    hintPlacement="top"\n/>\n')))))}k.isMDXComponent=!0},386010:function(e,t,n){function a(e){var t,n,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(l&&(l+=" "),l+=n);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}function l(){for(var e,t,n=0,l="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(l&&(l+=" "),l+=t);return l}n.d(t,{Z:function(){return l}})}}]);