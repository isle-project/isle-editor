(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{249:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),i=t(7),a=(t(0),t(411)),o={id:"distribution-chisquare",title:"Chi-squared Distribution",sidebar_label:"Chi-squared Distribution"},l={unversionedId:"learn/distribution-chisquare",id:"learn/distribution-chisquare",isDocsHomePage:!1,title:"Chi-squared Distribution",description:"Eine Lernkomponente zur Berechnung von Wahrscheinlichkeiten einer Chi-Quadrat-Verteilung.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/learn/distribution-chisquare.md",slug:"/learn/distribution-chisquare",permalink:"/de/docs/learn/distribution-chisquare",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-chisquare.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Chi-squared Distribution",sidebar:"docs",previous:{title:"Binomial Distribution",permalink:"/de/docs/learn/distribution-binomial"},next:{title:"Exponential Distribution",permalink:"/de/docs/learn/distribution-exponential"}},c=[{value:"Optionen",id:"optionen",children:[]},{value:"Beispiele",id:"beispiele",children:[]}],u={toc:c};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Eine Lernkomponente zur Berechnung von Wahrscheinlichkeiten einer Chi-Quadrat-Verteilung."),Object(a.b)("h2",{id:"optionen"},"Optionen"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"step")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(number|string)"),": Schrittweite des Scrolleingangs. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"0.01"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"maxDF")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": maximale Freiheitsgrade, die im Eingabefeld gew\xe4hlt werden k\xf6nnen. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"50"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"minDF")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": minimale Freiheitsgrade, die im Eingabefeld gew\xe4hlt werden k\xf6nnen. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"1"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"style")," | ",Object(a.b)("inlineCode",{parentName:"li"},"object"),": CSS-Inline-Stile. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(a.b)("h2",{id:"beispiele"},"Beispiele"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnChisquareDistribution />\n")))}s.isMDXComponent=!0},411:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=i.a.createContext({}),s=function(e){var n=i.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=s(e.components);return i.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=s(t),d=r,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||a;return t?i.a.createElement(m,l(l({ref:n},u),{},{components:t})):i.a.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);