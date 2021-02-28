(window.webpackJsonp=window.webpackJsonp||[]).push([[324],{264:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),a=(n(0),n(409)),o={id:"r-output",title:"R Output",sidebar_label:"R Output"},l={unversionedId:"r/r-output",id:"r/r-output",isDocsHomePage:!1,title:"R Output",description:"Komponente zum Rendern der R-Ausgabe innerhalb einer ISLE-Lektion.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/r/output.md",slug:"/r/r-output",permalink:"/de/docs/r/r-output",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/r/output.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"R Output",sidebar:"docs",previous:{title:"R Help",permalink:"/de/docs/r/r-help"},next:{title:"R Plot",permalink:"/de/docs/r/r-plot"}},u=[{value:"Optionen",id:"optionen",children:[]},{value:"Beispiele",id:"beispiele",children:[]}],c={toc:u};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Komponente zum Rendern der R-Ausgabe innerhalb einer ISLE-Lektion."),Object(a.b)("h2",{id:"optionen"},"Optionen"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"code")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": R-Code zur Auswertung. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"''"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"libraries")," | ",Object(a.b)("inlineCode",{parentName:"li"},"array"),': R-Bibliotheken, die automatisch geladen werden sollen, wenn der Eingabe-"Code" ausgef\xfchrt wird. Default: ',Object(a.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"prependCode")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(string|array)"),": R-Code (oder ",Object(a.b)("inlineCode",{parentName:"li"},"Array")," von Codebl\xf6cken), der bei der Auswertung dem in ",Object(a.b)("inlineCode",{parentName:"li"},"code")," gespeicherten Code vorangestellt wird. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"''"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onPlots")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": Callback, der mit allen erzeugten Plots aufgerufen wird. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"onPlots() {}"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onResult")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": Callback, der mit ",Object(a.b)("inlineCode",{parentName:"li"},"error")," (",Object(a.b)("inlineCode",{parentName:"li"},"null"),", wenn die Operation erfolgreich war) und ",Object(a.b)("inlineCode",{parentName:"li"},"result")," mit der R-Ausgabe aufgerufen wird. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"onResult() {}"),".")),Object(a.b)("h2",{id:"beispiele"},"Beispiele"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ROutput code="runif(10)" />\n')))}p.isMDXComponent=!0},409:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),b=p(n),s=r,m=b["".concat(o,".").concat(s)]||b[s]||d[s]||a;return n?i.a.createElement(m,l(l({ref:t},c),{},{components:n})):i.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);