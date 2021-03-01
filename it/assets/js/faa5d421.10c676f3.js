(window.webpackJsonp=window.webpackJsonp||[]).push([[370],{310:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var i=n(3),a=n(7),o=(n(0),n(411)),r={id:"gate",title:"Gate",sidebar_label:"Gate"},l={unversionedId:"gate",id:"gate",isDocsHomePage:!1,title:"Gate",description:"Un componente ISLE che permette di esporre i propri figli solo a un pubblico riservato.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/gate.md",slug:"/gate",permalink:"/it/docs/gate",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/gate.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Gate",sidebar:"docs",previous:{title:"Feedback Buttons",permalink:"/it/docs/feedback"},next:{title:"Text Editor",permalink:"/it/docs/text-editor"}},c=[{value:"Opzioni",id:"opzioni",children:[]},{value:"Esempi",id:"esempi",children:[]}],b={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Un componente ISLE che permette di esporre i propri figli solo a un pubblico riservato."),Object(o.b)("h2",{id:"opzioni"},"Opzioni"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"user")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": quando il contenuto gated viene visualizzato agli utenti. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"notUser")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": quando impostato il contenuto gated \xe8 ",Object(o.b)("strong",{parentName:"li"},"non")," visualizzato agli utenti. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"enrolled")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": quando viene impostato il contenuto gated viene visualizzato agli studenti iscritti al corso. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"notEnrolled")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": quando impostato il contenuto gated \xe8 ",Object(o.b)("strong",{parentName:"li"},"non")," visualizzato agli studenti iscritti al corso. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"owner")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": quando si imposta il contenuto gated viene visualizzato al proprietario del corso (di solito l'istruttore). Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"notOwner")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": quando impostato il contenuto gated \xe8 ",Object(o.b)("strong",{parentName:"li"},"non")," visualizzato al proprietario del corso (di solito l'istruttore). Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"after")," | ",Object(o.b)("inlineCode",{parentName:"li"},"Date"),": tempo dopo il quale il contenuto del cancello dovrebbe diventare visibile. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"until")," | ",Object(o.b)("inlineCode",{parentName:"li"},"Date"),": tempo fino a quando il contenuto del cancello non dovrebbe rimanere visibile. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"banner")," | ",Object(o.b)("inlineCode",{parentName:"li"},"node"),": un messaggio che viene visualizzato ai visitatori per i quali i bambini del cancello non sono visibili a causa della mancanza di privilegi. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"disabled")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": se un cancello \xe8 disattivato, il banner verr\xe0 visualizzato a prescindere dal fatto che. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"showOwnerInPresentationMode")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),': controlla se mostrare i contenuti del cancello in modalit\xe0 di presentazione quando il cancello \xe8 visibile per i "proprietari".. Default: ',Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"check")," | ",Object(o.b)("inlineCode",{parentName:"li"},"function"),": funzione di callback che restituisce un ",Object(o.b)("inlineCode",{parentName:"li"},"booleano")," che indica se il gate deve visualizzare i componenti figli; la funzione viene invocata ogni volta che arrivano le azioni della sessione. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),".")),Object(o.b)("h2",{id:"esempi"},"Esempi"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Gate \n    banner={<h2>You have to be logged in to see the content</h2>}\n    user \n>\n    <h1>For users only</h1>\n</Gate>\n")))}p.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(n),d=i,m=s["".concat(r,".").concat(d)]||s[d]||u[d]||o;return n?a.a.createElement(m,l(l({ref:t},b),{},{components:n})):a.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var b=2;b<o;b++)r[b]=n[b];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);