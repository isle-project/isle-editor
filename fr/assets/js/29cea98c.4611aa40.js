(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(411)),i={id:"generator",title:"Generator",sidebar_label:"Generator"},c={unversionedId:"generator",id:"generator",isDocsHomePage:!1,title:"Generator",description:"Une composante permettant de g\xe9n\xe9rer d'autres composantes (par exemple, des questions g\xe9n\xe9r\xe9es automatiquement).",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/generator.md",slug:"/generator",permalink:"/fr/docs/generator",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/generator.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614614554,sidebar_label:"Generator",sidebar:"docs",previous:{title:"Expire",permalink:"/fr/docs/expire"},next:{title:"Language",permalink:"/fr/docs/language"}},l=[{value:"Options",id:"options",children:[]},{value:"Exemples",id:"exemples",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Une composante permettant de g\xe9n\xe9rer d'autres composantes (par exemple, des questions g\xe9n\xe9r\xe9es automatiquement)."),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"autoStart")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si le g\xe9n\xe9rateur doit \xeatre automatiquement appel\xe9 apr\xe8s le montage. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"true"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"buttonLabel")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(string|node)"),": \xe9tiquette pour le bouton. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"'Generate'"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"onGenerate")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function (required)"),": fonction invoqu\xe9e qui doit renvoyer un nouveau composant \xe0 rendre dans la le\xe7on. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),".")),Object(o.b)("h2",{id:"exemples"},"Exemples"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://isle.stat.cmu.edu/adaptive-review/questions/"},"Adaptive Review Questions")))}p.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(i,".").concat(d)]||s[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:t},u),{},{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);