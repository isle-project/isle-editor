(window.webpackJsonp=window.webpackJsonp||[]).push([[1214],{239:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),o=(n(0),n(410)),r=n(443),l=n(444),s={id:"free-text-question",title:"Free Text Question",sidebar_label:"Free Text Question"},c={unversionedId:"questions/free-text-question",id:"questions/free-text-question",isDocsHomePage:!1,title:"Free Text Question",description:"Komponent ISLE dla pyta\u0144, na kt\xf3re odpowiedzi uczni\xf3w powinny by\u0107 dostarczone w formie wolnego tekstu.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/questions/free-text.md",slug:"/questions/free-text-question",permalink:"/pl/docs/questions/free-text-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/free-text.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614117474,formattedLastUpdatedAt:"23.02.2021",sidebar_label:"Free Text Question",sidebar:"docs",previous:{title:"h6",permalink:"/pl/docs/html/h6"},next:{title:"Image Question",permalink:"/pl/docs/questions/image-question"}},b=[{value:"Opcje",id:"opcje",children:[]},{value:"Przyk\u0142ady",id:"przyk\u0142ady",children:[]}],u={toc:b};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Komponent ISLE dla pyta\u0144, na kt\xf3re odpowiedzi uczni\xf3w powinny by\u0107 dostarczone w formie wolnego tekstu."),Object(o.b)("h2",{id:"opcje"},"Opcje"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"question")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(string|node)"),": pytanie wy\u015bwietlane w g\xf3rnej cz\u0119\u015bci komponentu pyta\u0144 tekstowych. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"''"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"hints")," | ",Object(o.b)("inlineCode",{parentName:"li"},"array<(string|node)>"),": podpowiedzi zawieraj\u0105ce wskaz\xf3wki, jak odpowiedzie\u0107 na pytanie. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"hintPlacement")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),': umieszczenie podpowiedzi (albo "na g\xf3rze", "w lewo", "w prawo", albo "na dole"). Default: ',Object(o.b)("inlineCode",{parentName:"li"},"'top'"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"feedback")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy maj\u0105 by\u0107 wy\u015bwietlane przyciski sprz\u0119\u017cenia zwrotnego. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"true"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"solution")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(string|node)"),": modelowa odpowied\u017a na problem. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"''"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"instantSolution")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": czy mo\u017cna od razu prze\u0142\u0105czy\u0107 wy\u015bwietlanie odpowiedzi modelu. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"rows")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": liczba wierszy pola tekstowego, w kt\xf3rych uczniowie mog\u0105 wpisywa\u0107 swoje odpowiedzi. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"5"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"chat")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy w\u0142\u0105czy\u0107 czat grupowy powinien w przypadku danego pytania. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"resizable")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy obszar tekstowy powinien mie\u0107 mo\u017cliwo\u015b\u0107 zmiany rozmiaru. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"placeholder")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": tekst zast\u0119pczy wy\u015bwietlany przed wprowadzeniem dowolnego tekstu przez u\u017cytkownika. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"''"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"disableSubmitNotification")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": kontrola, czy nale\u017cy wy\u0142\u0105czy\u0107 powiadomienia o z\u0142o\u017ceniu wniosku. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"submissionMsg")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": powiadomienie wy\u015bwietlane w momencie, gdy ucz\u0105cy si\u0119 po raz pierwszy przekazuje swoj\u0105 odpowied\u017a. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"''"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"resubmissionMsg")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": powiadomienie wy\u015bwietlane dla wszystkich zg\u0142osze\u0144 po pierwszym. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"'You have successfully re-submitted your answer.'"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"provideFeedback")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": wskazuje, czy informacja zwrotna zawieraj\u0105ca poprawn\u0105 odpowied\u017a powinna by\u0107 wy\u015bwietlana po udzieleniu odpowiedzi przez ucz\u0105cych si\u0119. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"true"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"maxlength")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": maksymalna dozwolona liczba znak\xf3w. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"2500"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"voiceID")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": identyfikator kontroli g\u0142osowej. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"until")," | ",Object(o.b)("inlineCode",{parentName:"li"},"Date"),": czas, w kt\xf3rym studenci powinni mie\u0107 mo\u017cliwo\u015b\u0107 udzielenia odpowiedzi. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"points")," | ",Object(o.b)("inlineCode",{parentName:"li"},"number"),": maksymalna liczba punkt\xf3w przyznawanych w poszczeg\xf3lnych klasach. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"10"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"className")," | ",Object(o.b)("inlineCode",{parentName:"li"},"string"),": nazwa klasy. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"''"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"style")," | ",Object(o.b)("inlineCode",{parentName:"li"},"object"),": Style CSS inline. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onChange")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": wywo\u0142anie zwrotne wywo\u0142ywane przy ka\u017cdej zmianie warto\u015bci obszaru tekstowego; otrzymuje aktualny tekst jako jedyny argument. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"onChange() {}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": wywo\u0142anie zwrotne, gdy u\u017cytkownik udziela odpowiedzi; otrzymuje nades\u0142any tekst jako jedyny argument. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),Object(o.b)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"),Object(o.b)(r.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Points for Grading",value:"withPointsForGrading"},{label:"No Feedback",value:"withoutFeedbackAndNotification"},{label:"Solution",value:"withSolution"},{label:"Hints",value:"withHints"},{label:"Placeholder",value:"placeholderText"},{label:"Due Date",value:"dueDate"}],lazy:!0,mdxType:"Tabs"},Object(o.b)(l.a,{value:"minimal",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FreeTextQuestion \n    question="Please tell us your thoughts about this course." \n    rows={3} \n/>\n'))),Object(o.b)(l.a,{value:"withPointsForGrading",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<FreeTextQuestion \n    question={<span>Can you please explain Montesquieu's System of *separation of powers*?</span>} \n    rows={3} \n    points={15}\n/>\n"))),Object(o.b)(l.a,{value:"withoutFeedbackAndNotification",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FreeTextQuestion \n    question="Please tell us your thoughts about this course." \n    rows={3}\n    disableSubmitNotification \n    feedback={false}\n/>\n'))),Object(o.b)(l.a,{value:"withSolution",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FreeTextQuestion \n    question="Who was the English prime minister who spoke of \'blood, sweat and tears\'?" \n    rows={1} \n    solution="Winston Churchill" \n/>\n'))),Object(o.b)(l.a,{value:"withHints",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FreeTextQuestion \n    question="Who was the English prime minister who spoke of \'blood, sweat and tears\'?" \n    rows={1} \n    solution="Winston Churchill" \n    hints = {["No, it was not Margret Thatcher", "He believed in Aliens by the way", "His first name was Winston - like the guy in 1984"]}\n    submissionMsg = "His name was Winston churchill, and it occurred in a speech given by him to the House of Commons of the Parliament of the United Kingdom on 13 May 1940. The speech is sometimes known by that name"\n/>\n'))),Object(o.b)(l.a,{value:"placeholderText",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FreeTextQuestion \n    question="Who was the English prime minister who spoke of \'blood, sweat and tears\'?" \n    rows={3} \n    solution="Winston Churchill" \n    placeholder="Think of an overweight politician with a big cigar in his mouth."\n/>\n'))),Object(o.b)(l.a,{value:"dueDate",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FreeTextQuestion \n    question="Please tell us your thoughts about this course." \n    rows={3} \n    until={new Date( Date.UTC(2029, 0, 1, 3, 33 ) )}\n    placeholder="You can set a date until answers are accepted. In this case it is 2020, 1st of January, 3:30 am UTC time."\n/>\n')))))}p.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=b(n),m=a,d=u["".concat(r,".").concat(m)]||u[m]||p[m]||o;return n?i.a.createElement(d,l(l({ref:t},c),{},{components:n})):i.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},434:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},440:function(e,t,n){"use strict";var a=n(0),i=n(441);t.a=function(){const e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},441:function(e,t,n){"use strict";var a=n(0);const i=Object(a.createContext)(void 0);t.a=i},443:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(440),r=n(434),l=n(57),s=n.n(l);const c=37,b=39;t.a=function(e){const{lazy:t,block:n,defaultValue:l,values:u,groupId:p,className:m}=e,{tabGroupChoices:d,setTabGroupChoices:j}=Object(o.a)(),[w,O]=Object(a.useState)(l),y=a.Children.toArray(e.children),f=[];if(null!=p){const e=d[p];null!=e&&e!==w&&u.some((t=>t.value===e))&&O(e)}const g=e=>{const t=e.target,n=f.indexOf(t),a=y[n].props.value;O(a),null!=p&&(j(p,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:i}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:r}=window;return t>=0&&i<=r&&a<=o&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s.a.tabItemActive),setTimeout((()=>t.classList.remove(s.a.tabItemActive)),2e3))}),150))},N=e=>{var t;let n;switch(e.keyCode){case b:{const t=f.indexOf(e.target)+1;n=f[t]||f[0];break}case c:{const t=f.indexOf(e.target)-1;n=f[t]||f[f.length-1];break}}null===(t=n)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":n},m)},u.map((({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,className:Object(r.a)("tabs__item",s.a.tabItem,{"tabs__item--active":w===e}),key:e,ref:e=>f.push(e),onKeyDown:N,onFocus:g,onClick:g},t)))),t?Object(a.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}},444:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function({children:e,hidden:t,className:n}){return i.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);