(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{194:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),a=(n(0),n(411)),o={id:"r-output",title:"R Output",sidebar_label:"R Output"},l={unversionedId:"r/r-output",id:"r/r-output",isDocsHomePage:!1,title:"R Output",description:"Componente per il rendering dell'uscita R all'interno di una lezione ISLE.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/r/output.md",slug:"/r/r-output",permalink:"/it/docs/r/r-output",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/r/output.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"R Output",sidebar:"docs",previous:{title:"R Help",permalink:"/it/docs/r/r-help"},next:{title:"R Plot",permalink:"/it/docs/r/r-plot"}},c=[{value:"Opzioni",id:"opzioni",children:[]},{value:"Esempi",id:"esempi",children:[]}],u={toc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Componente per il rendering dell'uscita R all'interno di una lezione ISLE."),Object(a.b)("h2",{id:"opzioni"},"Opzioni"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"code")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": Codice R utilizzato per valutare. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"''"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"libraries")," | ",Object(a.b)("inlineCode",{parentName:"li"},"array"),": R librerie che dovrebbero essere caricate automaticamente quando viene eseguito il ",Object(a.b)("inlineCode",{parentName:"li"},"codice")," di input. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"prependCode")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(string|array)"),": R code (o ",Object(a.b)("inlineCode",{parentName:"li"},"array")," di blocchi di codice) da preparare al codice memorizzato in ",Object(a.b)("inlineCode",{parentName:"li"},"code")," quando si valuta. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"''"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onPlots")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": richiamata invocata con qualsiasi trama generata. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"onPlots() {}"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onResult")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": richiamata con ",Object(a.b)("inlineCode",{parentName:"li"},"errore")," (",Object(a.b)("inlineCode",{parentName:"li"},"null")," se l'operazione \xe8 andata a buon fine) e ",Object(a.b)("inlineCode",{parentName:"li"},"risultato")," mantenendo l'uscita R. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"onResult() {}"),".")),Object(a.b)("h2",{id:"esempi"},"Esempi"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ROutput code="runif(10)" />\n')))}p.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),p=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=p(n),s=r,m=b["".concat(o,".").concat(s)]||b[s]||d[s]||a;return n?i.a.createElement(m,l(l({ref:t},u),{},{components:n})):i.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);