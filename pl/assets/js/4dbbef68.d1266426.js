"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5083],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,y=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(y,o(o({ref:t},s),{},{components:n})):r.createElement(y,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},283795:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},assets:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(487462),a=n(263366),i=(n(202784),n(603905)),o=["components"],l={id:"number-survey",title:"Number Survey",sidebar_label:"Number Survey"},u=void 0,p={unversionedId:"number-survey",id:"number-survey",title:"Number Survey",description:"Komponent ankiety, w kt\xf3rym prowadz\u0105cy mo\u017ce zbiera\u0107 dane liczbowe z ankiety od student\xf3w w czasie rzeczywistym.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/number-survey.md",sourceDirName:".",slug:"/number-survey",permalink:"/pl/docs/number-survey",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/number-survey.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1626808020,formattedLastUpdatedAt:"20.07.2021",frontMatter:{id:"number-survey",title:"Number Survey",sidebar_label:"Number Survey"},sidebar:"docs",previous:{title:"Multiple Choice Survey",permalink:"/pl/docs/multiple-choice-survey"},next:{title:"Proportions Survey",permalink:"/pl/docs/proportions-survey"}},s={},c=[{value:"Opcje",id:"opcje",level:2},{value:"Przyk\u0142ady",id:"przyk\u0142ady",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Komponent ankiety, w kt\xf3rym prowadz\u0105cy mo\u017ce zbiera\u0107 dane liczbowe z ankiety od student\xf3w w czasie rzeczywistym."),(0,i.kt)("h2",{id:"opcje"},"Opcje"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"question")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),": pytanie, kt\xf3re ma zosta\u0107 wy\u015bwietlone. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"allowMultipleAnswers")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy ten sam u\u017cytkownik (lub sesja, je\u015bli jest anonimowy) mo\u017ce udzieli\u0107 wielu odpowiedzi). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"anonymous")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),': Pozwala studentom na anonimowe przekazywanie danych. Zauwa\u017c, \u017ce je\u015bli ta opcja jest ustawiona na "true", w\xf3wczas prowadz\u0105cy nie b\u0119d\u0105 mogli zobaczy\u0107 ID zg\u0142aszaj\u0105cego si\u0119 studenta. Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"step")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(number|string)"),": Warto\u015b\u0107 ",(0,i.kt)("inlineCode",{parentName:"li"},"\u0142a\u0144cucha")," lub ",(0,i.kt)("inlineCode",{parentName:"li"},"numeryczna")," wskazuj\u0105ca krok strza\u0142ek widziany podczas naje\u017cd\u017cania kursorem nad pole wprowadzania danych. Je\u015bli ",(0,i.kt)("inlineCode",{parentName:"li"},"'any'"),", to krok zostanie ustawiony na ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),". Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'any'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": Style CSS inline. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": funkcja wywo\u0142ania zwrotnego, wywo\u0142ywana po udzieleniu odpowiedzi przez student\xf3w. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,i.kt)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<NumberSurvey\n    allowMultipleAnswers={true}\n    id="generic_mean_question"\n    question="Submit a number"\n    defaultValue={0}\n    step="any"\n/>\n')))}d.isMDXComponent=!0}}]);