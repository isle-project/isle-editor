"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4710],{603905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(202784);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=u(t),m=i,v=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return t?a.createElement(v,l(l({ref:n},p),{},{components:t})):a.createElement(v,l({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=c;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var u=2;u<o;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},358215:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(202784);function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:i},n)}},409877:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(487462),i=t(202784),o=t(972389),l=t(161419),r=t(386010),s="tabItem_LplD";function u(e){var n,t,o,u=e.lazy,p=e.block,d=e.defaultValue,c=e.values,m=e.groupId,v=e.className,k=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=c?c:k.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,l.lx)(f,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===d?d:null!=(n=null!=d?d:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=k[0])?void 0:o.props.value;if(null!==h&&!f.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,l.UB)(),g=y.tabGroupChoices,N=y.setTabGroupChoices,C=(0,i.useState)(h),w=C[0],j=C[1],x=[],z=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=g[m];null!=O&&O!==w&&f.some((function(e){return e.value===O}))&&j(O)}var S=function(e){var n=e.currentTarget,t=x.indexOf(n),a=f[t].value;a!==w&&(z(n),j(a),null!=m&&N(m,a))},T=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;t=x[a]||x[0];break;case"ArrowLeft":var i=x.indexOf(e.currentTarget)-1;t=x[i]||x[x.length-1]}null==(n=t)||n.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},v)},f.map((function(e){var n=e.value,t=e.label,o=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:function(e){return x.push(e)},onKeyDown:T,onFocus:S,onClick:S},o,{className:(0,r.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":w===n})}),null!=t?t:n)}))),u?(0,i.cloneElement)(k.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},k.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}function p(e){var n=(0,o.Z)();return i.createElement(u,(0,a.Z)({key:String(n)},e))}},798681:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return d},assets:function(){return c},toc:function(){return m},default:function(){return k}});var a=t(487462),i=t(263366),o=(t(202784),t(603905)),l=t(409877),r=t(358215),s=["components"],u={id:"multiple-choice-question",title:"Multiple Choice Question",sidebar_label:"Multiple Choice Question"},p=void 0,d={unversionedId:"questions/multiple-choice-question",id:"questions/multiple-choice-question",title:"Multiple Choice Question",description:"Komponenta ISLE, kter\xe1 vykresluje ot\xe1zku s v\xfdb\u011brem odpov\u011bdi. Podporuje p\u0159\xedpady, kdy m\xe1 \u017e\xe1k vybrat jednu odpov\u011b\u010f a kdy m\u016f\u017ee existovat v\xedce spr\xe1vn\xfdch odpov\u011bd\xed a je t\u0159eba vybrat v\u0161echny spr\xe1vn\xe9.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/questions/multiple-choice.md",sourceDirName:"questions",slug:"/questions/multiple-choice-question",permalink:"/cs/docs/questions/multiple-choice-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/multiple-choice.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633715852,formattedLastUpdatedAt:"8. 10. 2021",frontMatter:{id:"multiple-choice-question",title:"Multiple Choice Question",sidebar_label:"Multiple Choice Question"},sidebar:"docs",previous:{title:"Match List Question",permalink:"/cs/docs/questions/match-list-question"},next:{title:"Multiple Choice Matrix",permalink:"/cs/docs/questions/multiple-choice-matrix"}},c={},m=[{value:"Mo\u017enosti",id:"mo\u017enosti",level:2},{value:"P\u0159\xedklady",id:"p\u0159\xedklady",level:2}],v={toc:m};function k(e){var n=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Komponenta ISLE, kter\xe1 vykresluje ot\xe1zku s v\xfdb\u011brem odpov\u011bdi. Podporuje p\u0159\xedpady, kdy m\xe1 \u017e\xe1k vybrat jednu odpov\u011b\u010f a kdy m\u016f\u017ee existovat v\xedce spr\xe1vn\xfdch odpov\u011bd\xed a je t\u0159eba vybrat v\u0161echny spr\xe1vn\xe9."),(0,o.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"question")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(string|node)"),": ot\xe1zka zobrazen\xe1 v horn\xed \u010d\xe1sti slo\u017eky s v\xfdb\u011brem odpov\u011bdi.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"solution")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(number|array)"),': \u010d\xedslo ozna\u010duj\xedc\xed, kter\xe1 odpov\u011b\u010f je spr\xe1vn\xe1, nebo "pole" \u010d\xedsel spr\xe1vn\xfdch odpov\u011bd\xed v p\u0159\xedpad\u011b, \u017ee by \u017e\xe1k m\u011bl b\xfdt schopen vybrat v\xedce odpov\u011bd\xed.. Default: ',(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"answers")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"array (required)"),": pole objekt\u016f odpov\u011bd\xed. Ka\u017ed\xe1 odpov\u011b\u010f by m\u011bla b\xfdt objektem s poli ",(0,o.kt)("inlineCode",{parentName:"li"},"obsah")," a ",(0,o.kt)("inlineCode",{parentName:"li"},"vysv\u011btlen\xed"),", kter\xe1 ozna\u010duj\xed zobrazenou mo\u017enost odpov\u011bdi a vysv\u011btlen\xed viditeln\xe9 po odesl\xe1n\xed ot\xe1zky, kter\xe9 vysv\u011btluje, pro\u010d je odpov\u011b\u010f spr\xe1vn\xe1 nebo nespr\xe1vn\xe1.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": um\xedst\u011bn\xed n\xe1pov\u011bdy (bu\u010f ",(0,o.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"right"),", nebo ",(0,o.kt)("inlineCode",{parentName:"li"},"bottom"),").. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"hints")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": n\xe1pov\u011bdy, jak odpov\u011bd\u011bt na ot\xe1zku.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"feedback")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0159\xedd\xed, zda se maj\xed zobrazovat tla\u010d\xedtka zp\u011btn\xe9 vazby. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"disabled")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, zda je ot\xe1zka zak\xe1z\xe1na. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"chat")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0159\xedd\xed, zda m\xe1 m\xedt prvek integrovan\xfd chat. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": bu\u010f ",(0,o.kt)("inlineCode",{parentName:"li"},"pln\xfd"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"inkrement\xe1ln\xed"),", nebo ",(0,o.kt)("inlineCode",{parentName:"li"},"\u017e\xe1dn\xfd"),". Pokud ",(0,o.kt)("inlineCode",{parentName:"li"},"full"),", zobraz\xed se po odesl\xe1n\xed odpov\u011bdi zp\u011btn\xe1 vazba v\u010detn\u011b spr\xe1vn\xe9 odpov\u011bdi; pokud ",(0,o.kt)("inlineCode",{parentName:"li"},"incremental"),", zobraz\xed se zp\u011btn\xe1 vazba pouze pro vybranou odpov\u011b\u010f; pokud ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),", nezobraz\xed se \u017e\xe1dn\xe1 zp\u011btn\xe1 vazba.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"'incremental'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"disableSubmitNotification")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, zda se maj\xed vypnout ozn\xe1men\xed o odesl\xe1n\xed. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"displaySolution")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0159\xedd\xed, zda se \u0159e\u0161en\xed zobraz\xed p\u0159edem.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"until")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"Date"),": \u010das, do kdy by studenti m\u011bli m\xedt mo\u017enost odevzdat odpov\u011bdi. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"points")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),": maxim\xe1ln\xed po\u010det bod\u016f ud\u011blen\xfdch p\u0159i klasifikaci. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"style")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object"),": \u0158\xe1dkov\xe9 styly CSS. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"onChange")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"function"),': zp\u011btn\xe9 vol\xe1n\xed vyvolan\xe9 p\u0159i ka\u017ed\xe9 zm\u011bn\u011b vybran\xe9 odpov\u011bdi; jako jedin\xfd argument obdr\u017e\xed index vybran\xe9 ot\xe1zky (nebo pole v p\u0159\xedpad\u011b, \u017ee je ot\xe1zka typu "Vyber v\u0161e, co plat\xed").. Default: ',(0,o.kt)("inlineCode",{parentName:"li"},"onChange(){}"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"function"),": zp\u011btn\xe9 vol\xe1n\xed vyvolan\xe9 po odesl\xe1n\xed odpov\u011bdi. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"onSubmit(){}"),".")),(0,o.kt)("h2",{id:"p\u0159\xedklady"},"P\u0159\xedklady"),(0,o.kt)(l.Z,{defaultValue:"singleAnswer",values:[{label:"Single Answer",value:"singleAnswer"},{label:"Formatted Answers",value:"formattedAnswers"},{label:"Instant Feedback",value:"instantFeedback"},{label:"Multiple Answers",value:"multipleAnswers"},{label:"Series of Questions",value:"aSeries"},{label:"With Hints",value:"withHints"}],lazy:!0,mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"singleAnswer",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<MultipleChoiceQuestion\n    solution={0}\n    answers={[\n        {content:"Hierarchical Clustering"},\n        {content:"LASSO"},\n        {content:"Multiple regression"}\n    ]}\n    question="Which of the following methods are used for clustering?"\n/>\n'))),(0,o.kt)(r.Z,{value:"formattedAnswers",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<MultipleChoiceQuestion\n    answers={[\n        {content: <span>**bold**</span>},\n        {content: <span>*italic*</span>},\n        {content: <span style={{ fontFamily: 'Georgia', color: 'red' }}>styled</span>}\n    ]}\n    question={<span style={{ fontSize: 33}}>What kind of font do you like the most?</span>}\n/>\n"))),(0,o.kt)(r.Z,{value:"instantFeedback",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<MultipleChoiceQuestion\n    solution={0}\n    answers={[\n        {content:"Hierarchical Clustering"},\n        {content:"LASSO"},\n        {content:"Multiple regression"}\n    ]}\n    question="Which of the following methods are used for clustering?"\n    provideFeedback="full"\n/>\n'))),(0,o.kt)(r.Z,{value:"multipleAnswers",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<MultipleChoiceQuestion\n    solution={[ 0, 3 ]}\n    answers={[\n        {content:"Hierarchical Clustering"},\n        {content:"LASSO"},\n        {content:"Multiple regression"},\n        {content:"kmeans"}\n    ]}\n    question="Which of the following methods are used for clustering?"\n    style={{ background: \'#FFF6F3\'}}\n/>\n'))),(0,o.kt)(r.Z,{value:"aSeries",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Slider>\n    <MultipleChoiceQuestion\n        solution={[ 1, 3 ]}\n        answers={[\n            { content:"George Washington", explanation: "Yes, he was the first president." },\n            { content:"Benjamin Franklin", explanation: "He was a founding father."},\n            { content:"Ulysses S. Grant", explanation: "General and 18th president." },\n            { content:"Alexander Hamilton", explanation: "Had aspirations, but died in a duel." }\n        ]}\n        question="Who was not a president of the United States?"\n        style={{ background: \'lightblue\'}}\n        feedback={false}\n    />\n    <MultipleChoiceQuestion\n        solution={[ 0, 3 ]}\n        answers={[\n            {content:"Hierarchical Clustering", explanation:""},\n            {content:"LASSO", explanation:""},\n            {content:"Multiple regression", explanation:""},\n            {content:"kmeans", explanation:""}\n        ]}\n        question="Which of the following methods are used for clustering?"\n        style={{ background: \'#FFF6F3\'}}\n        feedback={false}\n    />\n</Slider>\n'))),(0,o.kt)(r.Z,{value:"withHints",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<MultipleChoiceQuestion\n    solution={[ 1, 3 ]}\n    answers={[\n        { content:"George Washington", explanation: "Yes, he was the first president." },\n        { content:"Benjamin Franklin", explanation: "He was a founding father."},\n        { content:"Ulysses S. Grant", explanation: "General and 18th president." },\n        { content:"Alexander Hamilton", explanation: "Had aspirations, but died in a duel." }\n    ]}\n    question="Who was not a president of the United States?"\n    style={{ background: \'lightblue\'}}\n    feedback={false}\n    hints={[\n        \'Washington - that is a no-brainer, isn\\\'t it?\',\n        \'Franklin was famous for his invention of the lightning rod - so why become more?\',\n        \'Hamilton was a founding father, but got in this deadly quarrel with Aaron Burr.\',\n    ]}\n    hintPlacement="top"\n/>\n')))))}k.isMDXComponent=!0}}]);