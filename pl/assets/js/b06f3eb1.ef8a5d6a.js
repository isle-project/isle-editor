(window.webpackJsonp=window.webpackJsonp||[]).push([[1223],{248:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(410)),l={id:"meantest2",title:"Two-Sample Mean Test",sidebar_label:"Two-Sample Mean Test"},o={unversionedId:"tests/meantest2",id:"tests/meantest2",isDocsHomePage:!1,title:"Two-Sample Mean Test",description:"Dwukrotny test \u015bredniej pr\xf3by.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/tests/meantest2.md",slug:"/tests/meantest2",permalink:"/pl/docs/tests/meantest2",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tests/meantest2.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614463997,formattedLastUpdatedAt:"27.02.2021",sidebar_label:"Two-Sample Mean Test",sidebar:"docs",previous:{title:"One-Sample Mean Test",permalink:"/pl/docs/tests/meantest"},next:{title:"One-Sample Proportion Test",permalink:"/pl/docs/tests/proptest"}},b=[{value:"Opcje",id:"opcje",children:[]},{value:"Przyk\u0142ady",id:"przyk\u0142ady",children:[]}],c={toc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Dwukrotny test \u015bredniej pr\xf3by."),Object(i.b)("h2",{id:"opcje"},"Opcje"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"data")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object (required)"),": przedmiot tablice warto\u015bci. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"x")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string (required)"),": nazwa pierwszej zmiennej. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"y")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": nazwa drugiej zmiennej (nale\u017cy poda\u0107 ",Object(i.b)("inlineCode",{parentName:"li"},"y")," lub ",Object(i.b)("inlineCode",{parentName:"li"},"grup\u0119"),"). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"group")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|Factor)"),": nazwa zmiennej grupowania (nale\u017cy poda\u0107 ",Object(i.b)("inlineCode",{parentName:"li"},"y")," lub ",Object(i.b)("inlineCode",{parentName:"li"},"grup\u0119"),"). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"type")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": typ badania (albo ",Object(i.b)("inlineCode",{parentName:"li"},"Badanie Z")," albo ",Object(i.b)("inlineCode",{parentName:"li"},"Badanie T"),"). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'T Test'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"xstdev")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": pierwsze odchylenie standardowe (dla ",Object(i.b)("inlineCode",{parentName:"li"},"Testu Z"),"). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"ystdev")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": drugie odchylenie standardowe (dla ",Object(i.b)("inlineCode",{parentName:"li"},"Testu Z"),"). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"alpha")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": poziom istotno\u015bci. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"0.05"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"direction")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),': kierunek testu (albo "bez", "wi\u0119kszy", albo "dwustronny"). Default: ',Object(i.b)("inlineCode",{parentName:"li"},"'two-sided'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"diff")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": r\xf3\u017cnica poni\u017cej H0. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"0"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"showDecision")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy hipoteza zerowa ma by\u0107 wy\u015bwietlana, je\u015bli zostanie odrzucona na okre\u015blonym poziomie istotno\u015bci. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),".")),Object(i.b)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<MeanTest2\n    data={heartdisease} \n    x="Cost"\n    group="Gender"\n/>\n')))}p.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,m=s["".concat(l,".").concat(d)]||s[d]||u[d]||i;return n?r.a.createElement(m,o(o({ref:t},c),{},{components:n})):r.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);