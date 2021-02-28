(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{171:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),i=(t(0),t(409)),a={id:"question-form",title:"Question Form",sidebar_label:"Question Form"},u={unversionedId:"questions/question-form",id:"questions/question-form",isDocsHomePage:!1,title:"Question Form",description:"Un componente de formulario que combina diferentes componentes de la pregunta junto con un \xfanico bot\xf3n de env\xedo.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/questions/question-form.md",slug:"/questions/question-form",permalink:"/es/docs/questions/question-form",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/questions/question-form.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Question Form",sidebar:"docs",previous:{title:"Order Question",permalink:"/es/docs/questions/order-question"},next:{title:"Quiz",permalink:"/es/docs/questions/quiz"}},c=[{value:"Opciones",id:"opciones",children:[]},{value:"Ejemplos",id:"ejemplos",children:[]}],s={toc:c};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Un componente de formulario que combina diferentes componentes de la pregunta junto con un \xfanico bot\xf3n de env\xedo."),Object(i.b)("h2",{id:"opciones"},"Opciones"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"buttonLabel")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": etiqueta del bot\xf3n de env\xedo. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onSubmit")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": llamada de retorno invocada cuando se hace clic en el bot\xf3n de env\xedo. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),Object(i.b)("h2",{id:"ejemplos"},"Ejemplos"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<QuestionForm>\n    <NumberQuestion\n        question="What is 2+2?"\n    />\n    <FreeTextQuestion\n        question="What is the meaning of life?"\n    />    \n</QuestionForm>\n')))}l.isMDXComponent=!0},409:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},p=function(e){var n=l(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(t),d=r,b=p["".concat(a,".").concat(d)]||p[d]||m[d]||i;return t?o.a.createElement(b,u(u({ref:n},s),{},{components:t})):o.a.createElement(b,u({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var s=2;s<i;s++)a[s]=t[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);