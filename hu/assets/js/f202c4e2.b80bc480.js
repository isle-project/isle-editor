(self.webpackChunk=self.webpackChunk||[]).push([[5822],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(202784);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=u(n),k=l,d=p["".concat(s,".").concat(k)]||p[k]||c[k]||i;return n?a.createElement(d,r(r({ref:t},m),{},{components:n})):a.createElement(d,r({ref:t},m))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},358215:function(e,t,n){"use strict";var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:l},t)}},855064:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(202784),l=n(79443);var i=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=n(386010),o="tabItem_1uMI",s="tabItemActive_2DSg";var u=37,m=39;var c=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,c=e.values,p=e.groupId,k=e.className,d=i(),g=d.tabGroupChoices,f=d.setTabGroupChoices,v=(0,a.useState)(l),b=v[0],h=v[1],y=a.Children.toArray(e.children),N=[];if(null!=p){var C=g[p];null!=C&&C!==b&&c.some((function(e){return e.value===C}))&&h(C)}var z=function(e){var t=e.currentTarget,n=N.indexOf(t),a=c[n].value;h(a),null!=p&&(f(p,a),setTimeout((function(){var e,n,a,l,i,r,o,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,l=e.bottom,i=e.right,r=window,o=r.innerHeight,u=r.innerWidth,n>=0&&i<=u&&l<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case m:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case u:var l=N.indexOf(e.target)-1;n=N[l]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},k)},c.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,r.Z)("tabs__item",o,{"tabs__item--active":b===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:z,onClick:z},n)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,n){"use strict";var a=(0,n(202784).createContext)(void 0);t.Z=a},417784:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return k},default:function(){return f}});var a,l=n(722122),i=n(419756),r=(n(202784),n(603905)),o=n(855064),s=n(358215),u=["components"],m={id:"select-question-matrix",title:"Select Question Matrix",sidebar_label:"Select Question Matrix"},c=void 0,p={unversionedId:"questions/select-question-matrix",id:"questions/select-question-matrix",isDocsHomePage:!1,title:"Select Question Matrix",description:"Egy k\xe9rd\xe9s, amelynek v\xe1lasza t\xf6bb v\xe1laszdobozb\xf3l \xe1ll.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/questions/select-matrix.md",sourceDirName:"questions",slug:"/questions/select-question-matrix",permalink:"/hu/docs/questions/select-question-matrix",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/select-matrix.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1628088729,formattedLastUpdatedAt:"2021. 08. 04.",frontMatter:{id:"select-question-matrix",title:"Select Question Matrix",sidebar_label:"Select Question Matrix"},sidebar:"docs",previous:{title:"Select Question",permalink:"/hu/docs/questions/select-question"},next:{title:"Free Text Survey",permalink:"/hu/docs/free-text-survey"}},k=[{value:"Opci\xf3k",id:"opci\xf3k",children:[]},{value:"P\xe9ld\xe1k",id:"p\xe9ld\xe1k",children:[]}],d=(a="Panel",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)}),g={toc:k};function f(e){var t=e.components,n=(0,i.Z)(e,u);return(0,r.kt)("wrapper",(0,l.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Egy k\xe9rd\xe9s, amelynek v\xe1lasza t\xf6bb v\xe1laszdobozb\xf3l \xe1ll."),(0,r.kt)("h2",{id:"opci\xf3k"},"Opci\xf3k"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"question")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": a k\xe9rd\xe9s kiv\xe1laszt\xe1sa m\xe1trix tetej\xe9n megjelen\xedtend\u0151 k\xe9rd\xe9s. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"rows")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array"),": sorc\xedmk\xe9k. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"cols")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array"),": oszlopc\xedmk\xe9k. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"options")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": objektum kulcs-\xe9rt\xe9k p\xe1rokkal, amelyek kulcsai a ",(0,r.kt)("inlineCode",{parentName:"li"},"sor:oszlop")," form\xe1j\xfaak, pl. ",(0,r.kt)("inlineCode",{parentName:"li"},"0:0"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"0:1"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"1:0")," stb., \xe9s a hozz\xe1juk tartoz\xf3 \xe9rt\xe9kek az egyes select k\xe9rd\xe9sek lehets\xe9ges v\xe1laszlehet\u0151s\xe9geit tartalmaz\xf3 t\xf6mb\xf6k.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"solution")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": megold\xe1s objektum kulcs-\xe9rt\xe9k p\xe1rokkal, amelyek kulcsainak a ",(0,r.kt)("inlineCode",{parentName:"li"},"sor:oszlop")," form\xe1ja van, pl. ",(0,r.kt)("inlineCode",{parentName:"li"},"0:0"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"0:1"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"1:0")," stb., \xe9s a hozz\xe1juk tartoz\xf3 \xe9rt\xe9kek a megfelel\u0151 v\xe1lasz elem\xe9nek indexe a megfelel\u0151 ",(0,r.kt)("inlineCode",{parentName:"li"},"opci\xf3k")," t\xf6mbb\u0151l.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hints")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": a k\xe9rd\xe9s megv\xe1laszol\xe1s\xe1ra vonatkoz\xf3 \xfatmutat\xe1sokat ad. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": a tippek elhelyez\xe9se (vagy ",(0,r.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"right"),", vagy ",(0,r.kt)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"feedback")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy megjelenjenek-e a visszajelz\u0151 gombok. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),': hogy egy\xe1ltal\xe1n "semmilyen" visszajelz\xe9st, "egy\xe9ni" visszajelz\xe9st adjon a beadott v\xe1lasz(ok)ra, vagy "\xe1ltal\xe1nos" visszajelz\xe9st az \xf6sszes k\xe9rd\xe9sre vonatkoz\xf3an.. Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"'individual'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"allowIncomplete")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": enged\xe9lyezi-e, hogy az egyes jel\xf6l\u0151n\xe9gyzetekben t\xf6rt\xe9n\u0151 kiv\xe1laszt\xe1s n\xe9lk\xfcl is lehessen beny\xfajtani a p\xe1ly\xe1zatokat. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"nTries")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": h\xe1ny pr\xf3b\xe1lkoz\xe1s ut\xe1n nem fogadunk el tov\xe1bbi v\xe1laszokat (ha a ",(0,r.kt)("inlineCode",{parentName:"li"},"provideFeedback")," nem ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"3"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"failureMsg")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": a hib\xe1s v\xe1laszok elk\xfcld\xe9sekor megjelen\u0151 \xe9rtes\xedt\u0151 sz\xf6veg. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"successMsg")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": a helyes v\xe1laszok elk\xfcld\xe9sekor megjelen\u0151 \xe9rtes\xedt\u0151 sz\xf6veg. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"cellLabels")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": a ",(0,r.kt)("inlineCode",{parentName:"li"},"sor:oszlop")," form\xe1tum\xfa kulcsokkal rendelkez\u0151 objektum \xe1ltal meghat\xe1rozott cell\xe1k c\xedmk\xe9i. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"chat")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy az elemnek legyen-e integr\xe1lt chatje. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"panelProps")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": tov\xe1bbi tulajdons\xe1gok, amelyeket a k\xfcls\u0151 ",(0,r.kt)(d,{mdxType:"Panel"})," komponensnek kell \xe1tadni.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"className")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": oszt\xe1ly neve. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline st\xedlusok. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": callback f\xfcggv\xe9ny, amely az elk\xfcld\xe9skor h\xedv\xf3dik el\u0151 a v\xe1laszokkal, mint els\u0151, \xe9s egy boolean \xe9rt\xe9kkel, amely a helyess\xe9get jelzi, mint m\xe1sodik param\xe9ter.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,r.kt)("h2",{id:"p\xe9ld\xe1k"},"P\xe9ld\xe1k"),(0,r.kt)(o.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Hints",value:"withHints"},{label:"With Style",value:"withStyle"},{label:"Feedback Messages",value:"feedbackMessages"}],lazy:!0,mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"minimal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestionMatrix\n    question=\"Test your art history knowledge\"\n    rows={[ 'Composer', 'Author' ]} \n    cols={[ '18th Century', '19th Century' ]} \n    options={{ \n        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], \n        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,\n        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],\n        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] \n    }} \n    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}\n/>\n"))),(0,r.kt)(s.Z,{value:"withHints",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestionMatrix\n  question=\"Test your art history knowledge\"\n    rows={[ 'Composer', 'Author' ]} \n    cols={[ '18th Century', '19th Century' ]} \n    options={{ \n        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], \n        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,\n        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],\n        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] \n    }} \n    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}\n    hints={[\n        'His father Johann Sebastian was a famous composer too',\n        'He was famous for his FAUST - so definitely an author',\n        'Poussin was an 18th century painter',\n        'Courbet was a realistic painter'\n    ]}\n/>\n"))),(0,r.kt)(s.Z,{value:"withStyle",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestionMatrix\n    style={{ \n        fontFamily: 'Georgia',\n        fontSize: 22, \n        textShadow: '0 0  10px white',\n        background: 'rgb(251,213,112)',\n        background: 'radial-gradient(circle, yellow 0%, orange 30%, green 100%)'\n    }}\n    question=\"Test your art history knowledge\"\n    rows={[ 'Composer', 'Author' ]} \n    cols={[ '18th Century', '19th Century' ]} \n    options={{ \n        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], \n        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,\n        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],\n        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] }} \n    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}\n/>\n"))),(0,r.kt)(s.Z,{value:"feedbackMessages",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestionMatrix\n    question=\"Test your art history knowledge\"\n    failureMsg=\"Sorry, that was wrong.\" \n    successMsg =\"Wow! Congratulations, you are a specialist!\"\n    rows={[ 'Composer', 'Author' ]} \n    cols={[ '18th Century', '19th Century' ]} \n    options={{ \n        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], \n        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,\n        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],\n        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] \n    }} \n    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}\n/>\n")))))}f.isMDXComponent=!0},386010:function(e,t,n){"use strict";function a(e){var t,n,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(l&&(l+=" "),l+=n);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}function l(){for(var e,t,n=0,l="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(l&&(l+=" "),l+=t);return l}n.d(t,{Z:function(){return l}})}}]);