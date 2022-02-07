"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6844],{603905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=i,k=c["".concat(s,".").concat(d)]||c[d]||p[d]||r;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},358215:function(e,t,n){var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},409877:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(487462),i=n(202784),r=n(972389),l=n(275773),o=n(386010),s="tabItem_LplD";function u(e){var t,n,r,u=e.lazy,m=e.block,p=e.defaultValue,c=e.values,d=e.groupId,k=e.className,v=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=c?c:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.lx)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=v[0])?void 0:r.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,l.UB)(),h=N.tabGroupChoices,C=N.setTabGroupChoices,y=(0,i.useState)(g),j=y[0],w=y[1],x=[],P=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var T=h[d];null!=T&&T!==j&&f.some((function(e){return e.value===T}))&&w(T)}var D=function(e){var t=e.currentTarget,n=x.indexOf(t),a=f[n].value;a!==j&&(P(t),w(a),null!=d&&C(d,a))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var i=x.indexOf(e.currentTarget)-1;n=x[i]||x[x.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},k)},f.map((function(e){var t=e.value,n=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return x.push(e)},onKeyDown:E,onFocus:D,onClick:D},r,{className:(0,o.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),u?(0,i.cloneElement)(v.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function m(e){var t=(0,r.Z)();return i.createElement(u,(0,a.Z)({key:String(t)},e))}},807137:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return f}});var a,i=n(487462),r=n(263366),l=(n(202784),n(603905)),o=n(409877),s=n(358215),u=["components"],m={id:"select-question-matrix",title:"Select Question Matrix",sidebar_label:"Select Question Matrix"},p=void 0,c={unversionedId:"questions/select-question-matrix",id:"questions/select-question-matrix",title:"Select Question Matrix",description:"Jaut\u0101jums ar atbildi, kas sast\u0101v no vair\u0101kiem izv\u0113les r\u016bti\u0146\u0101m.",source:"@site/i18n/lv/docusaurus-plugin-content-docs/current/questions/select-matrix.md",sourceDirName:"questions",slug:"/questions/select-question-matrix",permalink:"/lv/docs/questions/select-question-matrix",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/select-matrix.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1628088729,formattedLastUpdatedAt:"4.08.2021.",frontMatter:{id:"select-question-matrix",title:"Select Question Matrix",sidebar_label:"Select Question Matrix"},sidebar:"docs",previous:{title:"Select Question",permalink:"/lv/docs/questions/select-question"},next:{title:"Free Text Survey",permalink:"/lv/docs/free-text-survey"}},d=[{value:"Iesp\u0113jas",id:"iesp\u0113jas",children:[],level:2},{value:"Piem\u0113ri",id:"piem\u0113ri",children:[],level:2}],k=(a="Panel",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),v={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,i.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Jaut\u0101jums ar atbildi, kas sast\u0101v no vair\u0101kiem izv\u0113les r\u016bti\u0146\u0101m."),(0,l.kt)("h2",{id:"iesp\u0113jas"},"Iesp\u0113jas"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"question")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|node)"),": jaut\u0101jums, kas tiks par\u0101d\u012bts atlases jaut\u0101jumu matricas aug\u0161pus\u0113.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"rows")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array"),": rindu eti\u0137etes. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"cols")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array"),": kolonnu eti\u0137etes. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"options")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": objekts ar atsl\u0113gu-v\u0113rt\u012bbu p\u0101riem, kuru atsl\u0113gas ir form\u0101 ",(0,l.kt)("inlineCode",{parentName:"li"},"row:col"),", piem\u0113ram, ",(0,l.kt)("inlineCode",{parentName:"li"},"0:0"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"0:1"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"1:0")," utt., un to atbilsto\u0161\u0101s v\u0113rt\u012bbas ir atsevi\u0161\u0137u atlases jaut\u0101jumu iesp\u0113jamo atbil\u017eu mas\u012bvi.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"solution")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": risin\u0101juma objekts ar atsl\u0113gu-v\u0113rt\u012bbu p\u0101riem, kuru atsl\u0113gas ir form\u0101 ",(0,l.kt)("inlineCode",{parentName:"li"},"row:col"),", piem\u0113ram, ",(0,l.kt)("inlineCode",{parentName:"li"},"0:0"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"0:1"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"1:0")," utt., un to atbilsto\u0161\u0101s v\u0113rt\u012bbas ir pareiz\u0101s atbildes elementa indekss no attiec\u012bg\u0101 ",(0,l.kt)("inlineCode",{parentName:"li"},"options")," mas\u012bva.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hints")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": nor\u0101d\u012bjumi, k\u0101 atbild\u0113t uz jaut\u0101jumu.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": m\u0101jienu izvietojums (",(0,l.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"right")," vai ",(0,l.kt)("inlineCode",{parentName:"li"},"bottom"),").. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"feedback")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrol\u0113, vai tiek r\u0101d\u012btas atgriezenisk\u0101s saites pogas.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": vai visp\u0101r sniegt ",(0,l.kt)("inlineCode",{parentName:"li"},"nevienu")," atgriezenisko saiti, ",(0,l.kt)("inlineCode",{parentName:"li"},"individu\u0101lu")," atgriezenisko saiti par iesniegto(-aj\u0101m) atbildi(-\u0113m) vai ",(0,l.kt)("inlineCode",{parentName:"li"},"kop\u0113jo")," atgriezenisko saiti par visiem jaut\u0101jumiem.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"'individual'"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"allowIncomplete")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": vai at\u013caut iesnieg\u0161anu bez izv\u0113les katr\u0101 izv\u0113les lodzi\u0146\u0101.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"nTries")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": p\u0113c cik m\u0113\u0123in\u0101jumiem vairs netiek pie\u0146emtas atbildes (ja ",(0,l.kt)("inlineCode",{parentName:"li"},"provideFeedback")," nav ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),").. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"3"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"failureMsg")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": pazi\u0146ojuma teksts, kas tiek par\u0101d\u012bts p\u0113c nepareizu atbil\u017eu iesnieg\u0161anas. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"successMsg")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": pazi\u0146ojuma teksts, kas tiek par\u0101d\u012bts p\u0113c pareizo atbil\u017eu iesnieg\u0161anas. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"cellLabels")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": eti\u0137etes \u0161\u016bn\u0101m, ko defin\u0113 objekts ar atsl\u0113g\u0101m form\u0101t\u0101 ",(0,l.kt)("inlineCode",{parentName:"li"},"row:col"),".. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"chat")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrol\u0113, vai elementam ir j\u0101b\u016bt integr\u0113tam t\u0113rz\u0113\u0161anas. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"panelProps")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": papildu rekviz\u012bti, kas j\u0101nodod \u0101r\u0113jam ",(0,l.kt)(k,{mdxType:"Panel"})," komponentam.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"className")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": klases nosaukums. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": CSS ieb\u016bv\u0113tie stili. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": atsauces funkcija, kas tiek izsaukta p\u0113c iesnieg\u0161anas ar atbild\u0113m k\u0101 pirmo parametru un boolean, kas nor\u0101da pareiz\u012bbu, k\u0101 otro parametru.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,l.kt)("h2",{id:"piem\u0113ri"},"Piem\u0113ri"),(0,l.kt)(o.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Hints",value:"withHints"},{label:"With Style",value:"withStyle"},{label:"Feedback Messages",value:"feedbackMessages"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestionMatrix\n    question=\"Test your art history knowledge\"\n    rows={[ 'Composer', 'Author' ]} \n    cols={[ '18th Century', '19th Century' ]} \n    options={{ \n        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], \n        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,\n        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],\n        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] \n    }} \n    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}\n/>\n"))),(0,l.kt)(s.Z,{value:"withHints",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestionMatrix\n  question=\"Test your art history knowledge\"\n    rows={[ 'Composer', 'Author' ]} \n    cols={[ '18th Century', '19th Century' ]} \n    options={{ \n        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], \n        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,\n        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],\n        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] \n    }} \n    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}\n    hints={[\n        'His father Johann Sebastian was a famous composer too',\n        'He was famous for his FAUST - so definitely an author',\n        'Poussin was an 18th century painter',\n        'Courbet was a realistic painter'\n    ]}\n/>\n"))),(0,l.kt)(s.Z,{value:"withStyle",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestionMatrix\n    style={{ \n        fontFamily: 'Georgia',\n        fontSize: 22, \n        textShadow: '0 0  10px white',\n        background: 'rgb(251,213,112)',\n        background: 'radial-gradient(circle, yellow 0%, orange 30%, green 100%)'\n    }}\n    question=\"Test your art history knowledge\"\n    rows={[ 'Composer', 'Author' ]} \n    cols={[ '18th Century', '19th Century' ]} \n    options={{ \n        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], \n        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,\n        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],\n        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] }} \n    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}\n/>\n"))),(0,l.kt)(s.Z,{value:"feedbackMessages",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestionMatrix\n    question=\"Test your art history knowledge\"\n    failureMsg=\"Sorry, that was wrong.\" \n    successMsg =\"Wow! Congratulations, you are a specialist!\"\n    rows={[ 'Composer', 'Author' ]} \n    cols={[ '18th Century', '19th Century' ]} \n    options={{ \n        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], \n        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,\n        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],\n        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] \n    }} \n    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}\n/>\n")))))}f.isMDXComponent=!0}}]);