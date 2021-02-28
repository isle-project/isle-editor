(window.webpackJsonp=window.webpackJsonp||[]).push([[324],{264:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),i=(n(0),n(409)),l=n(462),o=n(463),s={id:"order-question",title:"Order Question",sidebar_label:"Order Question"},c={unversionedId:"questions/order-question",id:"questions/order-question",isDocsHomePage:!1,title:"Order Question",description:"Un \xe9l\xe9ment de question d'ordre qui demande \xe0 l'\xe9l\xe8ve d'amener une collection d'\xe9l\xe9ments dans le bon ordre.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/questions/order.md",slug:"/questions/order-question",permalink:"/fr/docs/questions/order-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/order.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Order Question",sidebar:"docs",previous:{title:"Number Question",permalink:"/fr/docs/questions/number-question"},next:{title:"Question Form",permalink:"/fr/docs/questions/question-form"}},u=[{value:"Options",id:"options",children:[]},{value:"Exemples",id:"exemples",children:[]}],b={toc:u};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Un \xe9l\xe9ment de question d'ordre qui demande \xe0 l'\xe9l\xe8ve d'amener une collection d'\xe9l\xe9ments dans le bon ordre."),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"question")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|node)"),': question pour laquelle l\'\xe9tudiant doit mettre les "options" disponibles dans le bon ordre. Default: ',Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"options")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array (required)"),": un ensemble de textes que l'\xe9tudiant doit mettre dans l'ordre correct (suppos\xe9 \xeatre l'ordre fourni). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"provideFeedback")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le l'affichage d'une notification indiquant si la r\xe9ponse soumise est correcte ou non. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"hintPlacement")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),': l\'emplacement des indices (soit "en haut", "\xe0 gauche", "\xe0 droite" ou "en bas"). Default: ',Object(i.b)("inlineCode",{parentName:"li"},"'bottom'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"hints")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array<(string|node)>"),": des conseils sur la fa\xe7on de r\xe9pondre \xe0 la question. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"feedback")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le l'affichage des boutons de r\xe9troaction. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"chat")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si l'\xe9l\xe9ment doit avoir un chat int\xe9gr\xe9. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"failureMsg")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": message \xe0 afficher lorsque l'\xe9l\xe8ve soumet une mauvaise r\xe9ponse. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"successMsg")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": message \xe0 afficher lorsque l'\xe9tudiant soumet la bonne r\xe9ponse. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"disableSubmitNotification")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le s'il faut d\xe9sactiver les notifications de soumission. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"until")," | ",Object(i.b)("inlineCode",{parentName:"li"},"Date"),": le temps n\xe9cessaire pour permettre aux \xe9tudiants de soumettre des r\xe9ponses. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"points")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": nombre maximum de points attribu\xe9s dans le classement. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"10"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": Styles CSS en ligne. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onChange")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),': le rappel qui est d\xe9clench\xe9 apr\xe8s avoir fait glisser un \xe9l\xe9ment ; a deux param\xe8tres : un "bool\xe9en" indiquant si les \xe9l\xe9ments ont \xe9t\xe9 plac\xe9s dans le bon ordre et un "tableau" avec l\'ordre actuel. Default: ',Object(i.b)("inlineCode",{parentName:"li"},"onChange() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),': rappel invoqu\xe9 lors de la soumission de la r\xe9ponse ; a comme seul param\xe8tre un "bool\xe9en" indiquant si les \xe9l\xe9ments ont \xe9t\xe9 plac\xe9s dans le bon ordre. Default: ',Object(i.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),Object(i.b)("h2",{id:"exemples"},"Exemples"),Object(i.b)(l.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Hints",value:"hints"},{label:"Submit Function",value:"submitFunction"},{label:"With Points and Feedback Message",value:"withGradingAndFeedback"}],lazy:!0,mdxType:"Tabs"},Object(i.b)(o.a,{value:"minimal",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<OrderQuestion\n    question="Order the letters alphabetically!"\n    options={[\n        "Alpha",\n        "Beta",\n        "Gamma",\n        "Delta"\n    ]}\n/>\n'))),Object(i.b)(o.a,{value:"hints",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<OrderQuestion\n    question="Order the letters alphabetically!"\n    options={[\n        "Alpha",\n        "Beta",\n        "Gamma",\n        "Delta"\n    ]}\n    hints={[ \'Delta succeeds Gamma in the Greek alphabet\' ]}\n    hintPlacement="bottom"\n/>\n'))),Object(i.b)(o.a,{value:"submitFunction",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<OrderQuestion\n    question="Order the letters alphabetically!"\n    options={[\n        "A",\n        "G",\n        "V"\n    ]}\n    onSubmit={() => {\n        alert( \'Any JavaScript function could be executed here...\' );\n    }}\n/>\n'))),Object(i.b)(o.a,{value:"withGradingAndFeedback",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<OrderQuestion\n    question="Arrange the events in historical order"\n    options={[\n        "Napoleon\'s coronation as emperor",\n        "The Crimean War",\n        "Bombing of Hiroshima",\n        "Fall of the Berlin Wall",\n        "Donald Trump\'s inauguration",\n    ]}\n    points={10}\n    successMsg = "Great! Looks like you are a history expert"\n/>\n')))))}m.isMDXComponent=!0},409:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,p=b["".concat(l,".").concat(d)]||b[d]||m[d]||i;return n?r.a.createElement(p,o(o({ref:t},c),{},{components:n})):r.a.createElement(p,o({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},449:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},460:function(e,t,n){"use strict";var a=n(0),r=n(461);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},461:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},462:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(460),l=n(449),o=n(58),s=n.n(o);const c=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:o,values:b,groupId:m,className:d}=e,{tabGroupChoices:p,setTabGroupChoices:O}=Object(i.a)(),[f,j]=Object(a.useState)(o),g=a.Children.toArray(e.children),N=[];if(null!=m){const e=p[m];null!=e&&e!==f&&b.some((t=>t.value===e))&&j(e)}const v=e=>{const t=e.target,n=N.indexOf(t),a=g[n].props.value;j(a),null!=m&&O(m,a)},h=e=>{var t;let n;switch(e.keyCode){case u:const t=N.indexOf(e.target)+1;n=N[t]||N[0];break;case c:const a=N.indexOf(e.target)-1;n=N[a]||N[N.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},d)},b.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:f===e?0:-1,"aria-selected":f===e,className:Object(l.a)("tabs__item",s.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>N.push(e),onKeyDown:h,onFocus:v,onClick:v},t)))),t?Object(a.cloneElement)(g.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}},463:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function({children:e,hidden:t,className:n}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);