(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(411)),o=n(460),l=n(461),s={id:"select-question-matrix",title:"Select Question Matrix",sidebar_label:"Select Question Matrix"},c={unversionedId:"questions/select-question-matrix",id:"questions/select-question-matrix",isDocsHomePage:!1,title:"Select Question Matrix",description:"Une question dont la r\xe9ponse consiste en plusieurs cases de s\xe9lection.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/questions/select-matrix.md",slug:"/questions/select-question-matrix",permalink:"/fr/docs/questions/select-question-matrix",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/select-matrix.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614561866,sidebar_label:"Select Question Matrix",sidebar:"docs",previous:{title:"Select Question",permalink:"/fr/docs/questions/select-question"},next:{title:"Free Text Survey",permalink:"/fr/docs/free-text-survey"}},u=[{value:"Options",id:"options",children:[]},{value:"Exemples",id:"exemples",children:[]}],b={toc:u};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Une question dont la r\xe9ponse consiste en plusieurs cases de s\xe9lection."),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"question")," | ",Object(r.b)("inlineCode",{parentName:"li"},"(string|node)"),": question \xe0 afficher en haut de la matrice de s\xe9lection des questions. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"''"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"rows")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": \xe9tiquettes de lignes. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"cols")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array"),": \xe9tiquettes de colonnes. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"options")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),': objet avec des paires cl\xe9-valeur avec des cl\xe9s ayant la forme "row:col", par exemple "0:0", "0:1", "1:0", etc., et leurs valeurs correspondantes \xe9tant des tableaux de choix de r\xe9ponse possibles pour les diff\xe9rentes questions de s\xe9lection. Default: ',Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"solution")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": objet solution avec des paires cl\xe9-valeur avec des cl\xe9s ayant la forme ",Object(r.b)("inlineCode",{parentName:"li"},"row:col"),", par exemple ",Object(r.b)("inlineCode",{parentName:"li"},"0:0"),", ",Object(r.b)("inlineCode",{parentName:"li"},"0:1"),", ",Object(r.b)("inlineCode",{parentName:"li"},"1:0")," etc., et leurs valeurs correspondantes \xe9tant l'index de l'\xe9l\xe9ment de r\xe9ponse correcte du tableau ",Object(r.b)("inlineCode",{parentName:"li"},"options")," respectif. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"hints")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array<(string|node)>"),": des conseils sur la fa\xe7on de r\xe9pondre \xe0 la question. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"hintPlacement")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),': l\'emplacement des indices (soit "en haut", "\xe0 gauche", "\xe0 droite" ou "en bas"). Default: ',Object(r.b)("inlineCode",{parentName:"li"},"'bottom'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"feedback")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le l'affichage des boutons de r\xe9troaction. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"provideFeedback")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),': s\'il convient de fournir un retour d\'information "aucun", un retour d\'information "individuel" sur la ou les r\xe9ponses soumises, ou un retour d\'information "global" pour toutes les questions. Default: ',Object(r.b)("inlineCode",{parentName:"li"},"'individual'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"allowIncomplete")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": s'il faut autoriser les soumissions sans s\xe9lection dans chaque case de s\xe9lection. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"nTries")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),': apr\xe8s combien d\'essais aucune autre r\xe9ponse n\'est accept\xe9e (si "provideFeedback" n\'est pas "none"). Default: ',Object(r.b)("inlineCode",{parentName:"li"},"1"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"failureMsg")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": texte de notification affich\xe9 lors de la soumission de r\xe9ponses incorrectes. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"successMsg")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": texte de notification affich\xe9 lors de la soumission des r\xe9ponses correctes. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"cellLabels")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),': des \xe9tiquettes pour les cellules d\xe9finies par objet avec des cl\xe9s ayant le format "row:col. Default: ',Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"chat")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si l'\xe9l\xe9ment doit avoir un chat int\xe9gr\xe9. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"className")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": nom de la classe. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"''"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"style")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": Styles CSS en ligne. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": fonction de rappel invoqu\xe9e lors de la soumission avec les r\xe9ponses comme premier param\xe8tre et un bool\xe9en indiquant l'exactitude comme second param\xe8tre. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),Object(r.b)("h2",{id:"exemples"},"Exemples"),Object(r.b)(o.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Hints",value:"withHints"},{label:"With Style",value:"withStyle"},{label:"Feedback Messages",value:"feedbackMessages"}],lazy:!0,mdxType:"Tabs"},Object(r.b)(l.a,{value:"minimal",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestionMatrix\n    question=\"Test your art history knowledge\"\n    rows={[ 'Composer', 'Author' ]} \n    cols={[ '18th Century', '19th Century' ]} \n    options={{ \n        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], \n        '0:1':  [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,\n        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],\n        '1:1':  [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] \n    }} \n    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}\n/>\n"))),Object(r.b)(l.a,{value:"withHints",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestionMatrix\n  question=\"Test your art history knowledge\"\n    rows={[ 'Composer', 'Author' ]} \n    cols={[ '18th Century', '19th Century' ]} \n    options={{ \n        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], \n        '0:1':  [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,\n        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],\n        '1:1':  [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] \n    }} \n    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}\n    hints={[\n        'His father Johann Sebastian was a famous composer too',\n        'He was famous for his FAUST - so definitely an author',\n        'Poussin was an 18th century painter',\n        'Courbet was a realistic painter'\n    ]}\n/>\n"))),Object(r.b)(l.a,{value:"withStyle",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestionMatrix\n    style={{ \n        fontFamily: 'Georgia',\n        fontSize: 22, \n        textShadow: '0 0  10px white',\n        background: 'rgb(251,213,112)',\n        background: 'radial-gradient(circle, yellow 0%, orange 30%, green 100%)'\n    }}\n    question=\"Test your art history knowledge\"\n    rows={[ 'Composer', 'Author' ]} \n    cols={[ '18th Century', '19th Century' ]} \n    options={{ \n        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], \n        '0:1':  [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,\n        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],\n        '1:1':  [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] }} \n    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}\n/>\n"))),Object(r.b)(l.a,{value:"feedbackMessages",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectQuestionMatrix\n    question=\"Test your art history knowledge\"\n    failureMsg=\"Sorry, that was wrong.\" \n    successMsg =\"Wow! Congratulations, you are a specialist!\"\n    rows={[ 'Composer', 'Author' ]} \n    cols={[ '18th Century', '19th Century' ]} \n    options={{ \n        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], \n        '0:1':  [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,\n        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],\n        '1:1':  [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] \n    }} \n    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}\n/>\n")))))}p.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=u(n),m=a,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||r;return n?i.a.createElement(d,l(l({ref:t},c),{},{components:n})):i.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},445:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},458:function(e,t,n){"use strict";var a=n(0),i=n(459);t.a=function(){const e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},459:function(e,t,n){"use strict";var a=n(0);const i=Object(a.createContext)(void 0);t.a=i},460:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(458),o=n(445),l=n(58),s=n.n(l);const c=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:l,values:b,groupId:p,className:m}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(r.a)(),[O,j]=Object(a.useState)(l),g=a.Children.toArray(e.children),h=[];if(null!=p){const e=d[p];null!=e&&e!==O&&b.some((t=>t.value===e))&&j(e)}const v=e=>{const t=e.target,n=h.indexOf(t),a=g[n].props.value;j(a),null!=p&&f(p,a)},N=e=>{var t;let n;switch(e.keyCode){case u:const t=h.indexOf(e.target)+1;n=h[t]||h[0];break;case c:const a=h.indexOf(e.target)-1;n=h[a]||h[h.length-1]}null===(t=n)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},m)},b.map((({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>h.push(e),onKeyDown:N,onFocus:v,onClick:v},t)))),t?Object(a.cloneElement)(g.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},461:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function({children:e,hidden:t,className:n}){return i.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);