(window.webpackJsonp=window.webpackJsonp||[]).push([[1257],{282:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(410)),i={id:"generator",title:"Generator",sidebar_label:"Generator"},c={unversionedId:"generator",id:"generator",isDocsHomePage:!1,title:"Generator",description:"Un componente per la generazione di altri componenti (ad es. domande generate automaticamente).",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/generator.md",slug:"/generator",permalink:"/it/docs/generator",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/generator.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614614554,formattedLastUpdatedAt:"1/3/2021",sidebar_label:"Generator",sidebar:"docs",previous:{title:"Expire",permalink:"/it/docs/expire"},next:{title:"Language",permalink:"/it/docs/language"}},l=[{value:"Opzioni",id:"opzioni",children:[]},{value:"Esempi",id:"esempi",children:[]}],p={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Un componente per la generazione di altri componenti (ad es. domande generate automaticamente)."),Object(o.b)("h2",{id:"opzioni"},"Opzioni"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"autoStart")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": controlla se invocare automaticamente il generatore dopo il montaggio. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"true"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"buttonLabel")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(string|node)"),": etichetta per il pulsante. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"'Generate'"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onGenerate")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function (required)"),": funzione invocata che dovrebbe restituire un nuovo componente da rendere nella lezione. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),".")),Object(o.b)("h2",{id:"esempi"},"Esempi"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://isle.stat.cmu.edu/adaptive-review/questions/"},"Adaptive Review Questions")))}u.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,m=s["".concat(i,".").concat(b)]||s[b]||d[b]||o;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);