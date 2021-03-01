(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{123:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(7),a=(t(0),t(411)),i={id:"proportions-input",title:"Proportions Input",sidebar_label:"Proportions Input"},p={unversionedId:"input/proportions-input",id:"input/proportions-input",isDocsHomePage:!1,title:"Proportions Input",description:"Sk\u0142adnik wej\u015bciowy proporcji. Mo\u017ce by\u0107 u\u017cywany jako cz\u0119\u015b\u0107 deski rozdzielczej ISLE lub autonomiczny. W tym drugim przypadku, chcesz obs\u0142ugiwa\u0107 zmiany poprzez atrybut onChange lub powi\u0105za\u0107 warto\u015b\u0107 ze zmienn\u0105 globaln\u0105 poprzez atrybut bind.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/input/proportions.md",slug:"/input/proportions-input",permalink:"/pl/docs/input/proportions-input",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/proportions.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Proportions Input",sidebar:"docs",previous:{title:"Number Input",permalink:"/pl/docs/input/number-input"},next:{title:"Select Input",permalink:"/pl/docs/input/select-input"}},l=[{value:"Opcje",id:"opcje",children:[]},{value:"Przyk\u0142ady",id:"przyk\u0142ady",children:[]}],c={toc:l};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Sk\u0142adnik wej\u015bciowy proporcji. Mo\u017ce by\u0107 u\u017cywany jako cz\u0119\u015b\u0107 deski rozdzielczej ISLE lub autonomiczny. W tym drugim przypadku, chcesz obs\u0142ugiwa\u0107 zmiany poprzez atrybut ",Object(a.b)("inlineCode",{parentName:"p"},"onChange")," lub powi\u0105za\u0107 warto\u015b\u0107 ze zmienn\u0105 globaln\u0105 poprzez atrybut ",Object(a.b)("inlineCode",{parentName:"p"},"bind"),"."),Object(a.b)("h2",{id:"opcje"},"Opcje"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"colors")," | ",Object(a.b)("inlineCode",{parentName:"li"},"array<string>"),": Zestawienie kolor\xf3w dla element\xf3w wykresu ko\u0142owego. Je\u015bli nie zostanie zdefiniowana, zostanie u\u017cyta niestandardowa skala kolor\xf3w. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"disabled")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy pole wprowadzania danych jest nieaktywne. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"height")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": proporcje wysoko\u015b\u0107 wej\u015bcia (w px). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"200"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"legends")," | ",Object(a.b)("inlineCode",{parentName:"li"},"array"),": etykiety grupowe. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onChange")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": funkcja wywo\u0142ania zwrotnego, kt\xf3r\u0105 nale\u017cy wywo\u0142a\u0107 po dokonaniu wyboru. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"onChange(){}"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"precision")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": wy\u015bwietlana precyzja warto\u015bci proporcji. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"1"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"step")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": krok strza\u0142ek widoczny po najechaniu kursorem nad pole wprowadzania danych. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"0.1"),".")),Object(a.b)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ProportionsInput\n    user\n    id="Survey"\n    question="Decide what is important"\n    group="Group decision"\n    nElements={3}\n    colors = {[ "red", "blue", "gold" ]}\n    personalHeight={300}\n    groupHeight={200}\n    margin="80px"\n    legends={[ "bitcoin", "old", "diamonds" ]}\n/>\n')))}u.isMDXComponent=!0},411:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),u=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},b=function(e){var n=u(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(t),d=r,m=b["".concat(i,".").concat(d)]||b[d]||s[d]||a;return t?o.a.createElement(m,p(p({ref:n},c),{},{components:t})):o.a.createElement(m,p({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<a;c++)i[c]=t[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);