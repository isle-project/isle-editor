(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{194:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(7),a=(t(0),t(409)),i={id:"runner",title:"Runner",sidebar_label:"Runner"},l={unversionedId:"runner",id:"runner",isDocsHomePage:!1,title:"Runner",description:'La composante "runner" ex\xe9cutera une fonction fournie soit une fois, soit \xe0 un intervalle donn\xe9.',source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/runner.md",slug:"/runner",permalink:"/fr/docs/runner",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/runner.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Runner",sidebar:"docs",previous:{title:"Revealer",permalink:"/fr/docs/revealer"},next:{title:"Timer",permalink:"/fr/docs/timer"}},c=[{value:"Options",id:"options",children:[]},{value:"Exemples",id:"exemples",children:[]}],u={toc:c};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,'La composante "runner" ex\xe9cutera une fonction fournie soit une fois, soit \xe0 un intervalle donn\xe9.'),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"active")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si le coureur doit \xeatre actif. Lors de l'activation, la fonction \"onEvaluate\" est appel\xe9e dans l'intervalle donn\xe9 (ou une fois). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"true"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"interval")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": nombre de millisecondes entre les invocations de \"onEvaluate\". Si aucun intervalle n'est d\xe9fini, la fonction n'est invoqu\xe9e qu'une seule fois. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onEvaluate")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": fonction \xe0 invoquer. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"onEvaluate() {}"),".")),Object(a.b)("h2",{id:"exemples"},"Exemples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Runner\n    interval={2000}\n    onEvaluate={() => { console.log( 'Two seconds have passed...' ); }}\n/>\n")))}s.isMDXComponent=!0},409:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),s=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),d=r,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return t?o.a.createElement(f,l(l({ref:n},u),{},{components:t})):o.a.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);