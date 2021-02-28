(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{192:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),i=(t(0),t(409)),l={id:"contingency-table",title:"Contingency Table",sidebar_label:"Contingency Table"},c={unversionedId:"tables/contingency-table",id:"tables/contingency-table",isDocsHomePage:!1,title:"Contingency Table",description:"Tablica awaryjna.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/tables/contingency-table.md",slug:"/tables/contingency-table",permalink:"/pl/docs/tables/contingency-table",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tables/contingency-table.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614463997,sidebar_label:"Contingency Table",sidebar:"docs",previous:{title:"Simple Linear Regression",permalink:"/pl/docs/models/simple-linear-regression"},next:{title:"Frequency Table",permalink:"/pl/docs/tables/frequency-table"}},o=[{value:"Opcje",id:"opcje",children:[]},{value:"Przyk\u0142ady",id:"przyk\u0142ady",children:[]}],b={toc:o};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Tablica awaryjna."),Object(i.b)("h2",{id:"opcje"},"Opcje"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"data")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object (required)"),": przedmiot tablice warto\u015bci. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"rowVar")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string (required)"),": wiersz nazwa zmienna. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"colVar")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string (required)"),": kolumna nazwa zmiennej. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"relativeFreqs")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy wy\u015bwietlane s\u0105 cz\u0119stotliwo\u015bci wzgl\u0119dne. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"group")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|Factor)"),": nazwa zmiennej grupuj\u0105cej. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"display")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array<string>"),": czy wy\u015bwietla\u0107 ",Object(i.b)("inlineCode",{parentName:"li"},"Row Percent")," i/lub ",Object(i.b)("inlineCode",{parentName:"li"},"Column Percent"),". Default: ",Object(i.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"nDecimalPlaces")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": liczba miejsc po przecinku dla cz\u0119stotliwo\u015bci wzgl\u0119dnych wy\u015bwietlanych w tabeli. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"3"),".")),Object(i.b)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ContingencyTable\n    data={heartdisease} \n    rowVar="Gender"\n    colVar="Drugs"\n/>\n')))}p.isMDXComponent=!0},409:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),p=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,m=u["".concat(l,".").concat(d)]||u[d]||s[d]||i;return t?a.a.createElement(m,c(c({ref:n},b),{},{components:t})):a.a.createElement(m,c({ref:n},b))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var b=2;b<i;b++)l[b]=t[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);