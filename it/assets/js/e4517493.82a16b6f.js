(window.webpackJsonp=window.webpackJsonp||[]).push([[351],{291:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return s}));var r=t(3),i=t(7),a=(t(0),t(411)),o={id:"number-survey",title:"Number Survey",sidebar_label:"Number Survey"},l={unversionedId:"number-survey",id:"number-survey",isDocsHomePage:!1,title:"Number Survey",description:"Una componente di sondaggio in cui l'istruttore pu\xf2 raccogliere dati numerici di sondaggio dagli studenti in tempo reale.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/number-survey.md",slug:"/number-survey",permalink:"/it/docs/number-survey",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/number-survey.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Number Survey",sidebar:"docs",previous:{title:"Multiple Choice Survey",permalink:"/it/docs/multiple-choice-survey"},next:{title:"Proportions Survey",permalink:"/it/docs/proportions-survey"}},u=[{value:"Opzioni",id:"opzioni",children:[]},{value:"Esempi",id:"esempi",children:[]}],c={toc:u};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Una componente di sondaggio in cui l'istruttore pu\xf2 raccogliere dati numerici di sondaggio dagli studenti in tempo reale."),Object(a.b)("h2",{id:"opzioni"},"Opzioni"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"question")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(string|node)"),": la domanda da visualizzare. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"''"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"allowMultipleAnswers")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": controlla se lo stesso utente (o la sessione se anonima) pu\xf2 inviare pi\xf9 risposte). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"anonymous")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),': Permette agli studenti di inviare i dati in forma anonima. Si noti che se questa opzione \xe8 impostata su "true", gli istruttori non saranno in grado di vedere l\'ID dello studente che ha inviato i dati. Default: ',Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"step")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(number|string)"),": Un valore ",Object(a.b)("inlineCode",{parentName:"li"},"stringa")," o ",Object(a.b)("inlineCode",{parentName:"li"},"numerico")," che indica il passo delle frecce viste quando si posiziona il cursore sopra la casella di input. Se ",Object(a.b)("inlineCode",{parentName:"li"},"'any'``, il passo sar\xe0 impostato a "),"1`",Object(a.b)("inlineCode",{parentName:"li"},".. Default: "),"'any'`."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"style")," | ",Object(a.b)("inlineCode",{parentName:"li"},"object"),": Stili in linea CSS. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": funzione di richiamo invocata una volta che gli studenti inviano una risposta. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),Object(a.b)("h2",{id:"esempi"},"Esempi"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<NumberSurvey\n    allowMultipleAnswers={true}\n    anonymous="false"\n    id="generic_mean_question"\n    question="Submit a number"\n    defaultValue={0}\n    step="any"\n/>\n')))}s.isMDXComponent=!0},411:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),s=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,d=p["".concat(o,".").concat(m)]||p[m]||b[m]||a;return t?i.a.createElement(d,l(l({ref:n},c),{},{components:t})):i.a.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);