(window.webpackJsonp=window.webpackJsonp||[]).push([[327],{267:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),i=(n(0),n(411)),l={id:"dashboard",title:"Dashboard",sidebar_label:"Dashboard"},o={unversionedId:"dashboard",id:"dashboard",isDocsHomePage:!1,title:"Dashboard",description:"Ein Dashboard f\xfcr die kombinierte Handhabung mehrerer untergeordneter Eingabefelder.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/dashboard.md",slug:"/dashboard",permalink:"/de/docs/dashboard",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/dashboard.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614120320,sidebar_label:"Dashboard",sidebar:"docs",previous:{title:"Sortable Tree",permalink:"/de/docs/sortable-tree"},next:{title:"Data Sampler",permalink:"/de/docs/data-sampler"}},b=[{value:"Optionen",id:"optionen",children:[]},{value:"Beispiele",id:"beispiele",children:[]}],c={toc:b};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Ein Dashboard f\xfcr die kombinierte Handhabung mehrerer untergeordneter Eingabefelder."),Object(i.b)("h2",{id:"optionen"},"Optionen"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"autoStart")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": wenn auf ",Object(i.b)("inlineCode",{parentName:"li"},"true")," gesetzt, wird die Funktion ",Object(i.b)("inlineCode",{parentName:"li"},"onGenerate")," beim Start mit den Standard-Eingabewerten ausgef\xfchrt. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"autoUpdate")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),': steuert, ob die Funktion "onGenerate" automatisch aufgerufen werden soll, wenn sich eines der untergeordneten Eingabefelder \xe4ndert. Default: ',Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"description")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": Dashboard-Beschreibung. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"disabled")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob das Dashboard deaktiviert werden soll. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"label")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": Tastenbeschriftung. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"maxWidth")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": maximale Breite des Armaturenbretts. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"600"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"className")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": Klassenname. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": CSS-Inline-Stile. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onGenerate")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": Funktion, die aufgerufen wird, wenn die Schaltfl\xe4che angeklickt wird oder sich einer der Dashboard-Eingabewerte \xe4ndert (wenn ",Object(i.b)("inlineCode",{parentName:"li"},"autoUpdate")," auf ",Object(i.b)("inlineCode",{parentName:"li"},"true")," gesetzt ist). Die Funktion wird mit den Werten der Eingabefelder aufgerufen, in der Reihenfolge, in der sie im Dashboard platziert sind. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onGenerate() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"title")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|node)"),": Kartentitel. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),".")),Object(i.b)("h2",{id:"beispiele"},"Beispiele"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Dashboard title="Alerter" onGenerate={(x)=>{ alert(x) }} autoStart={false} >\n    <SliderInput\n        legend="Input value"\n    />\n</Dashboard>\n')))}d.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),u=d(n),p=r,m=u["".concat(l,".").concat(p)]||u[p]||s[p]||i;return n?a.a.createElement(m,o(o({ref:t},c),{},{components:n})):a.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);