(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{173:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return p}));var a=t(3),i=t(7),r=(t(0),t(411)),o={id:"number-question",title:"Number Question",sidebar_label:"Number Question"},l={unversionedId:"questions/number-question",id:"questions/number-question",isDocsHomePage:!1,title:"Number Question",description:"Element pytania numerycznego.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/questions/number.md",slug:"/questions/number-question",permalink:"/pl/docs/questions/number-question",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/number.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Number Question",sidebar:"docs",previous:{title:"Multiple Choice Question",permalink:"/pl/docs/questions/multiple-choice-question"},next:{title:"Order Question",permalink:"/pl/docs/questions/order-question"}},b=[{value:"Opcje",id:"opcje",children:[]},{value:"Przyk\u0142ady",id:"przyk\u0142ady",children:[]}],c={toc:b};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Element pytania numerycznego."),Object(r.b)("h2",{id:"opcje"},"Opcje"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"question")," | ",Object(r.b)("inlineCode",{parentName:"li"},"(string|node)"),": pytanie numeryczne. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"''"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"hintPlacement")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": umieszczenie podpowiedzi (na g\xf3rze, na dole, w lewo, w prawo lub na dole).. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'top'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"hints")," | ",Object(r.b)("inlineCode",{parentName:"li"},"array<(string|node)>"),": podpowiedzi zawieraj\u0105ce wskaz\xf3wki, jak odpowiedzie\u0107 na pytanie. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"feedback")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy maj\u0105 by\u0107 wy\u015bwietlane przyciski sprz\u0119\u017cenia zwrotnego. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"solution")," | ",Object(r.b)("inlineCode",{parentName:"li"},"(number|array<number>)"),": numeryczn\u0105 odpowied\u017a na problem (lub kilka poprawnych odpowiedzi, je\u015bli dostarczona jest tablica). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"digits")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": liczba cyfr, dla kt\xf3rych odpowied\u017a udzielona przez studenta musi odpowiada\u0107 rozwi\u0105zaniu, kt\xf3re ma by\u0107 uznane za prawid\u0142owe. Ustawi\u0107 warto\u015b\u0107 0, aby dopasowa\u0107 j\u0105 jako liczb\u0119 ca\u0142kowit\u0105. Je\u015bli zostanie ustawiona na zero, b\u0119dzie szuka\u0142 dok\u0142adnego dopasowania.. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"3"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"max")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": maksymalna dopuszczalna warto\u015b\u0107 wej\u015bciowa. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"null"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"min")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": minimalna dopuszczalna warto\u015b\u0107 wej\u015bciowa. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"null"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"defaultValue")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": wst\u0119pnie wybrana warto\u015b\u0107 wej\u015bcia liczbowego. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"0"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"provideFeedback")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": wskazuje, czy informacja zwrotna zawieraj\u0105ca poprawn\u0105 odpowied\u017a powinna by\u0107 wy\u015bwietlana po udzieleniu odpowiedzi przez ucz\u0105cych si\u0119. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"nTries")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": po tym, ile pr\xf3b powinno by\u0107 dostarczonych informacji zwrotnych (je\u015bli ",Object(r.b)("inlineCode",{parentName:"li"},"provideFeedback")," jest ",Object(r.b)("inlineCode",{parentName:"li"},"prawdziwy"),").. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"1"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"disableSubmitNotification")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": kontrola, czy nale\u017cy wy\u0142\u0105czy\u0107 powiadomienia o z\u0142o\u017ceniu wniosku. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"chat")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy dany element powinien mie\u0107 zintegrowan\u0105 rozmow\u0119. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"until")," | ",Object(r.b)("inlineCode",{parentName:"li"},"Date"),": czas, w kt\xf3rym studenci powinni mie\u0107 mo\u017cliwo\u015b\u0107 udzielenia odpowiedzi. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"points")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": maksymalna liczba punkt\xf3w przyznawanych w poszczeg\xf3lnych klasach. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"10"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"style")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": Style CSS inline. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onChange")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": wywo\u0142anie zwrotne, kt\xf3re jest wywo\u0142ywane po zmianie warto\u015bci pola liczbowego; otrzymuje bie\u017c\u0105c\u0105 warto\u015b\u0107 jako jedyny argument. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onChange() {}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": callback wywo\u0142ywany przy udzielaniu odpowiedzi; ma jako pierwszy parametr ",Object(r.b)("inlineCode",{parentName:"li"},"boolean")," wskazuj\u0105cy, czy odpowied\u017a zosta\u0142a udzielona poprawnie (je\u015bli dotyczy, ",Object(r.b)("inlineCode",{parentName:"li"},"nie ma znaczenia")," inaczej), a udzielona odpowied\u017a jako drugi parametr. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),Object(r.b)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<NumberQuestion\n    question="What is the number PI - three digits after the period"\n    solution={3.142}\n/>\n')))}p.isMDXComponent=!0},411:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return s}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),p=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,s=u["".concat(o,".").concat(d)]||u[d]||m[d]||r;return t?i.a.createElement(s,l(l({ref:n},c),{},{components:t})):i.a.createElement(s,l({ref:n},c))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var b in n)hasOwnProperty.call(n,b)&&(l[b]=n[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);