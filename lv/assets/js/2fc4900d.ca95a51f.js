(self.webpackChunk=self.webpackChunk||[]).push([[6844],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=i,k=c["".concat(s,".").concat(d)]||c[d]||p[d]||r;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},358215:function(e,t,n){"use strict";var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},541395:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var a=n(202784),i=n(180944),r=n(386010),l="tabItem_1uMI",o="tabItemActive_2DSg";var s=37,u=39;var m=function(e){var t=e.lazy,n=e.block,m=e.defaultValue,p=e.values,c=e.groupId,d=e.className,k=(0,i.Z)(),f=k.tabGroupChoices,g=k.setTabGroupChoices,v=(0,a.useState)(m),b=v[0],N=v[1],h=a.Children.toArray(e.children),C=[];if(null!=c){var y=f[c];null!=y&&y!==b&&p.some((function(e){return e.value===y}))&&N(y)}var j=function(e){var t=e.currentTarget,n=C.indexOf(t),a=p[n].value;N(a),null!=c&&(g(c,a),setTimeout((function(){var e,n,a,i,r,l,s,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,r=e.right,l=window,s=l.innerHeight,u=l.innerWidth,n>=0&&r<=u&&i<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},w=function(e){var t,n;switch(e.keyCode){case u:var a=C.indexOf(e.target)+1;n=C[a]||C[0];break;case s:var i=C.indexOf(e.target)-1;n=C[i]||C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,r.Z)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:w,onFocus:j,onClick:j},n)}))),t?(0,a.cloneElement)(h.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,n){"use strict";var a=(0,n(202784).createContext)(void 0);t.Z=a},180944:function(e,t,n){"use strict";var a=n(202784),i=n(79443);t.Z=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},250966:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m},default:function(){return c}});var a=n(722122),i=n(419756),r=(n(202784),n(603905)),l=n(541395),o=n(358215),s={id:"select-question-matrix",title:"Select Question Matrix",sidebar_label:"Select Question Matrix"},u={unversionedId:"questions/select-question-matrix",id:"questions/select-question-matrix",isDocsHomePage:!1,title:"Select Question Matrix",description:"Jaut\u0101jums ar atbildi, kas sast\u0101v no vair\u0101kiem izv\u0113les r\u016bti\u0146\u0101m.",source:"@site/i18n/lv/docusaurus-plugin-content-docs/current/questions/select-matrix.md",sourceDirName:"questions",slug:"/questions/select-question-matrix",permalink:"/docs/questions/select-question-matrix",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/select-matrix.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021.06.1.",sidebar_label:"Select Question Matrix",frontMatter:{id:"select-question-matrix",title:"Select Question Matrix",sidebar_label:"Select Question Matrix"},sidebar:"docs",previous:{title:"Select Question",permalink:"/docs/questions/select-question"},next:{title:"Free Text Survey",permalink:"/docs/free-text-survey"}},m=[{value:"Iesp\u0113jas",id:"iesp\u0113jas",children:[]},{value:"Piem\u0113ri",id:"piem\u0113ri",children:[]}],p={toc:m};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Jaut\u0101jums ar atbildi, kas sast\u0101v no vair\u0101kiem izv\u0113les r\u016bti\u0146\u0101m."),(0,r.kt)("h2",{id:"iesp\u0113jas"},"Iesp\u0113jas"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"question")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": jaut\u0101jums, kas tiks par\u0101d\u012bts atlases jaut\u0101jumu matricas aug\u0161pus\u0113.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"rows")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array"),": rindu eti\u0137etes. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"cols")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array"),": kolonnu eti\u0137etes. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"options")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": objekts ar atsl\u0113gu-v\u0113rt\u012bbu p\u0101riem, kuru atsl\u0113gas ir form\u0101 ",(0,r.kt)("inlineCode",{parentName:"li"},"row:col"),", piem\u0113ram, ",(0,r.kt)("inlineCode",{parentName:"li"},"0:0"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"0:1"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"1:0")," utt., un to atbilsto\u0161\u0101s v\u0113rt\u012bbas ir atsevi\u0161\u0137u atlases jaut\u0101jumu iesp\u0113jamo atbil\u017eu mas\u012bvi.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"solution")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": risin\u0101juma objekts ar atsl\u0113gu-v\u0113rt\u012bbu p\u0101riem, kuru atsl\u0113gas ir form\u0101 ",(0,r.kt)("inlineCode",{parentName:"li"},"row:col"),", piem\u0113ram, ",(0,r.kt)("inlineCode",{parentName:"li"},"0:0"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"0:1"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"1:0")," utt., un to atbilsto\u0161\u0101s v\u0113rt\u012bbas ir pareiz\u0101s atbildes elementa indekss no attiec\u012bg\u0101 ",(0,r.kt)("inlineCode",{parentName:"li"},"options")," mas\u012bva.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hints")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": nor\u0101d\u012bjumi, k\u0101 atbild\u0113t uz jaut\u0101jumu.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": m\u0101jienu izvietojums (",(0,r.kt)("inlineCode",{parentName:"li"},"aug\u0161\u0101"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"kreisaj\u0101"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"pa labi")," vai ",(0,r.kt)("inlineCode",{parentName:"li"},"apak\u0161\u0101"),").. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"feedback")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrol\u0113, vai tiek r\u0101d\u012btas atgriezenisk\u0101s saites pogas.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": vai visp\u0101r sniegt ",(0,r.kt)("inlineCode",{parentName:"li"},"nevienu")," atgriezenisko saiti, ",(0,r.kt)("inlineCode",{parentName:"li"},"individu\u0101lu")," atgriezenisko saiti par iesniegto(-aj\u0101m) atbildi(-\u0113m) vai ",(0,r.kt)("inlineCode",{parentName:"li"},"kop\u0113jo")," atgriezenisko saiti par visiem jaut\u0101jumiem.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'individual'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"allowIncomplete")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": vai at\u013caut iesnieg\u0161anu bez izv\u0113les katr\u0101 izv\u0113les lodzi\u0146\u0101.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"nTries")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": p\u0113c cik m\u0113\u0123in\u0101jumiem vairs netiek pie\u0146emtas atbildes (ja ",(0,r.kt)("inlineCode",{parentName:"li"},"provideFeedback")," nav ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),").. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"3"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"failureMsg")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": pazi\u0146ojuma teksts, kas tiek par\u0101d\u012bts p\u0113c nepareizu atbil\u017eu iesnieg\u0161anas. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"successMsg")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": pazi\u0146ojuma teksts, kas tiek par\u0101d\u012bts p\u0113c pareizo atbil\u017eu iesnieg\u0161anas. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"cellLabels")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": eti\u0137etes \u0161\u016bn\u0101m, ko defin\u0113 objekts ar atsl\u0113g\u0101m form\u0101t\u0101 ",(0,r.kt)("inlineCode",{parentName:"li"},"row:col"),".. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"chat")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrol\u0113, vai elementam ir j\u0101b\u016bt integr\u0113tam t\u0113rz\u0113\u0161anas. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"className")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": klases nosaukums. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS ieb\u016bv\u0113tie stili. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": atsauces funkcija, kas tiek izsaukta p\u0113c iesnieg\u0161anas ar atbild\u0113m k\u0101 pirmo parametru un boolean, kas nor\u0101da pareiz\u012bbu, k\u0101 otro parametru.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,r.kt)("h2",{id:"piem\u0113ri"},"Piem\u0113ri"),(0,r.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Hints",value:"withHints"},{label:"With Style",value:"withStyle"},{label:"Feedback Messages",value:"feedbackMessages"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestionMatrix\n    question=\"Test your art history knowledge\"\n    rows={[ 'Composer', 'Author' ]} \n    cols={[ '18th Century', '19th Century' ]} \n    options={{ \n        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], \n        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,\n        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],\n        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] \n    }} \n    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}\n/>\n"))),(0,r.kt)(o.Z,{value:"withHints",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestionMatrix\n  question=\"Test your art history knowledge\"\n    rows={[ 'Composer', 'Author' ]} \n    cols={[ '18th Century', '19th Century' ]} \n    options={{ \n        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], \n        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,\n        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],\n        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] \n    }} \n    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}\n    hints={[\n        'His father Johann Sebastian was a famous composer too',\n        'He was famous for his FAUST - so definitely an author',\n        'Poussin was an 18th century painter',\n        'Courbet was a realistic painter'\n    ]}\n/>\n"))),(0,r.kt)(o.Z,{value:"withStyle",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestionMatrix\n    style={{ \n        fontFamily: 'Georgia',\n        fontSize: 22, \n        textShadow: '0 0  10px white',\n        background: 'rgb(251,213,112)',\n        background: 'radial-gradient(circle, yellow 0%, orange 30%, green 100%)'\n    }}\n    question=\"Test your art history knowledge\"\n    rows={[ 'Composer', 'Author' ]} \n    cols={[ '18th Century', '19th Century' ]} \n    options={{ \n        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], \n        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,\n        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],\n        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] }} \n    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}\n/>\n"))),(0,r.kt)(o.Z,{value:"feedbackMessages",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestionMatrix\n    question=\"Test your art history knowledge\"\n    failureMsg=\"Sorry, that was wrong.\" \n    successMsg =\"Wow! Congratulations, you are a specialist!\"\n    rows={[ 'Composer', 'Author' ]} \n    cols={[ '18th Century', '19th Century' ]} \n    options={{ \n        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], \n        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,\n        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],\n        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] \n    }} \n    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}\n/>\n")))))}c.isMDXComponent=!0},386010:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);