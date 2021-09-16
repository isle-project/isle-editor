"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8174],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},358215:function(e,t,n){var a=n(202784);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},855064:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(202784),i=n(79443);var r=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(386010),l="tabItem_1uMI",s="tabItemActive_2DSg";var u=function(e){var t,n=e.lazy,i=e.block,u=e.defaultValue,p=e.values,c=e.groupId,m=e.className,d=a.Children.toArray(e.children),k=null!=p?p:d.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=u?u:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,y=r(),g=y.tabGroupChoices,w=y.setTabGroupChoices,b=(0,a.useState)(f),h=b[0],N=b[1],v=[];if(null!=c){var C=g[c];null!=C&&C!==h&&k.some((function(e){return e.value===C}))&&N(C)}var z=function(e){var t=e.currentTarget,n=v.indexOf(t),a=k[n].value;N(a),null!=c&&(w(c,a),setTimeout((function(){var e,n,a,i,r,o,l,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,r=e.right,o=window,l=o.innerHeight,u=o.innerWidth,n>=0&&r<=u&&i<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=v.indexOf(e.target)+1;n=v[a]||v[0];break;case"ArrowLeft":var i=v.indexOf(e.target)-1;n=v[i]||v[v.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},m)},k.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":h===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:j,onFocus:z,onClick:z},null!=n?n:t)}))),n?(0,a.cloneElement)(d.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},79443:function(e,t,n){var a=(0,n(202784).createContext)(void 0);t.Z=a},449692:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return d},default:function(){return y}});var a,i=n(487462),r=n(263366),o=(n(202784),n(603905)),l=n(855064),s=n(358215),u=["components"],p={id:"select-question-matrix",title:"Select Question Matrix",sidebar_label:"Select Question Matrix"},c=void 0,m={unversionedId:"questions/select-question-matrix",id:"questions/select-question-matrix",isDocsHomePage:!1,title:"Select Question Matrix",description:"Pytanie z odpowiedzi\u0105 sk\u0142adaj\u0105c\u0105 si\u0119 z wielu p\xf3l wyboru.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/questions/select-matrix.md",sourceDirName:"questions",slug:"/questions/select-question-matrix",permalink:"/pl/docs/questions/select-question-matrix",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/select-matrix.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1628088729,formattedLastUpdatedAt:"4.08.2021",frontMatter:{id:"select-question-matrix",title:"Select Question Matrix",sidebar_label:"Select Question Matrix"},sidebar:"docs",previous:{title:"Select Question",permalink:"/pl/docs/questions/select-question"},next:{title:"Free Text Survey",permalink:"/pl/docs/free-text-survey"}},d=[{value:"Opcje",id:"opcje",children:[]},{value:"Przyk\u0142ady",id:"przyk\u0142ady",children:[]}],k=(a="Panel",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),f={toc:d};function y(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pytanie z odpowiedzi\u0105 sk\u0142adaj\u0105c\u0105 si\u0119 z wielu p\xf3l wyboru."),(0,o.kt)("h2",{id:"opcje"},"Opcje"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"question")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(string|node)"),": pytanie, kt\xf3re ma by\u0107 wy\u015bwietlane w g\xf3rnej cz\u0119\u015bci matrycy pyta\u0144 wybranych. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"rows")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"array"),": etykiety wierszy. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"cols")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"array"),": etykiety kolumnowe. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"options")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object"),": obiekt z parami klucz-warto\u015b\u0107 z kluczami posiadaj\u0105cymi posta\u0107 ",(0,o.kt)("inlineCode",{parentName:"li"},"row:col"),", np. ",(0,o.kt)("inlineCode",{parentName:"li"},"0:0"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"0:1"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"1:0")," itd., a odpowiadaj\u0105ce im warto\u015bci s\u0105 tablicami mo\u017cliwych do wyboru odpowiedzi na poszczeg\xf3lne wybrane pytania. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"solution")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object"),": obiekt rozwi\u0105zania z parami klucz-warto\u015b\u0107 z kluczami o postaci ",(0,o.kt)("inlineCode",{parentName:"li"},"row:col"),", np. ",(0,o.kt)("inlineCode",{parentName:"li"},"0:0"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"0:1"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"1:0")," itd., a odpowiadaj\u0105ce im warto\u015bci s\u0105 indeksem prawid\u0142owego elementu odpowiedzi z odpowiedniej tablicy ",(0,o.kt)("inlineCode",{parentName:"li"},"opcji. Default: "),"{}`."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"hints")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": podpowiedzi zawieraj\u0105ce wskaz\xf3wki, jak odpowiedzie\u0107 na pytanie. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"hintPlacement")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": umieszczenie podpowiedzi (albo ",(0,o.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"right"),", albo ",(0,o.kt)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"feedback")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy maj\u0105 by\u0107 wy\u015bwietlane przyciski sprz\u0119\u017cenia zwrotnego. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"provideFeedback")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),': czy w og\xf3le przekazywa\u0107 "\u017cadne" informacje zwrotne, "indywidualne" informacje zwrotne dotycz\u0105ce przed\u0142o\u017conych odpowiedzi, czy te\u017c "og\xf3lne" informacje zwrotne dotycz\u0105ce wszystkich pyta\u0144. Default: ',(0,o.kt)("inlineCode",{parentName:"li"},"'individual'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"allowIncomplete")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": czy zezwoli\u0107 na sk\u0142adanie wniosk\xf3w bez zaznaczenia w ka\u017cdym polu wyboru. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"nTries")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),": po ilu pr\xf3bach nie s\u0105 akceptowane \u017cadne dalsze odpowiedzi (je\u015bli ",(0,o.kt)("inlineCode",{parentName:"li"},"provideFeedback")," nie jest ",(0,o.kt)("inlineCode",{parentName:"li"},"\u017cadna"),"). Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"3"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"failureMsg")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": tekst powiadomienia wy\u015bwietlany po udzieleniu b\u0142\u0119dnych odpowiedzi. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"successMsg")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": tekst powiadomienia wy\u015bwietlany po udzieleniu prawid\u0142owych odpowiedzi. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"cellLabels")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object"),": etykiety dla kom\xf3rek zdefiniowanych przez obiekt o kluczach w formacie ",(0,o.kt)("inlineCode",{parentName:"li"},"row:col"),". Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"chat")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy dany element powinien mie\u0107 zintegrowan\u0105 rozmow\u0119. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"panelProps")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object"),": dodatkowe w\u0142a\u015bciwo\u015bci przekazywane do zewn\u0119trznego komponentu ",(0,o.kt)(k,{mdxType:"Panel"})," . Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"className")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": nazwa klasy. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"style")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object"),": Style CSS inline. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"function"),": funkcja callback wywo\u0142ana po przes\u0142aniu odpowiedzi jako pierwsza i boolean wskazuj\u0105ca poprawno\u015b\u0107 jako drugi parametr. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,o.kt)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"),(0,o.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Hints",value:"withHints"},{label:"With Style",value:"withStyle"},{label:"Feedback Messages",value:"feedbackMessages"}],lazy:!0,mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"minimal",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestionMatrix\n    question=\"Test your art history knowledge\"\n    rows={[ 'Composer', 'Author' ]} \n    cols={[ '18th Century', '19th Century' ]} \n    options={{ \n        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], \n        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,\n        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],\n        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] \n    }} \n    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}\n/>\n"))),(0,o.kt)(s.Z,{value:"withHints",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestionMatrix\n  question=\"Test your art history knowledge\"\n    rows={[ 'Composer', 'Author' ]} \n    cols={[ '18th Century', '19th Century' ]} \n    options={{ \n        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], \n        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,\n        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],\n        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] \n    }} \n    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}\n    hints={[\n        'His father Johann Sebastian was a famous composer too',\n        'He was famous for his FAUST - so definitely an author',\n        'Poussin was an 18th century painter',\n        'Courbet was a realistic painter'\n    ]}\n/>\n"))),(0,o.kt)(s.Z,{value:"withStyle",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestionMatrix\n    style={{ \n        fontFamily: 'Georgia',\n        fontSize: 22, \n        textShadow: '0 0  10px white',\n        background: 'rgb(251,213,112)',\n        background: 'radial-gradient(circle, yellow 0%, orange 30%, green 100%)'\n    }}\n    question=\"Test your art history knowledge\"\n    rows={[ 'Composer', 'Author' ]} \n    cols={[ '18th Century', '19th Century' ]} \n    options={{ \n        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], \n        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,\n        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],\n        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] }} \n    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}\n/>\n"))),(0,o.kt)(s.Z,{value:"feedbackMessages",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestionMatrix\n    question=\"Test your art history knowledge\"\n    failureMsg=\"Sorry, that was wrong.\" \n    successMsg =\"Wow! Congratulations, you are a specialist!\"\n    rows={[ 'Composer', 'Author' ]} \n    cols={[ '18th Century', '19th Century' ]} \n    options={{ \n        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], \n        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,\n        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],\n        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] \n    }} \n    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}\n/>\n")))))}y.isMDXComponent=!0},386010:function(e,t,n){function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);