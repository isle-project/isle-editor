(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{225:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),i=(t(0),t(411)),l={id:"mean-vs-median",title:"Mean vs. Median",sidebar_label:"Mean vs. Median"},o={unversionedId:"learn/mean-vs-median",id:"learn/mean-vs-median",isDocsHomePage:!1,title:"Mean vs. Median",description:"Un jeu interactif qui teste la capacit\xe9 des \xe9l\xe8ves \xe0 d\xe9tecter la m\xe9diane et la moyenne d'une distribution donn\xe9e.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/learn/mean-vs-median.md",slug:"/learn/mean-vs-median",permalink:"/fr/docs/learn/mean-vs-median",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/mean-vs-median.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Mean vs. Median",sidebar:"docs",previous:{title:"Image Pixel Picker",permalink:"/fr/docs/learn/image-pixel-picker"},next:{title:"Networks",permalink:"/fr/docs/learn/networks"}},c=[{value:"Options",id:"options",children:[]},{value:"Exemples",id:"exemples",children:[]}],s={toc:c};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Un jeu interactif qui teste la capacit\xe9 des \xe9l\xe8ves \xe0 d\xe9tecter la m\xe9diane et la moyenne d'une distribution donn\xe9e."),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"feedback")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le l'affichage des boutons de r\xe9troaction. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"header")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": titre du panel dans lequel la moyenne et la m\xe9diane seront g\xe9n\xe9r\xe9es. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"id")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": identifiant du composant. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'mean_vs_median'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"intro")," | ",Object(i.b)("inlineCode",{parentName:"li"},"node"),": tout mat\xe9riel d'introduction qui pourrait \xeatre n\xe9cessaire. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"seed")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": des semences pour initialiser le g\xe9n\xe9rateur de nombres pseudo-al\xe9atoires. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"showStatistics")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le l'affichage ou non des statistiques sur les performances des \xe9l\xe8ves et des groupes. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": Styles CSS en ligne. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(i.b)("h2",{id:"exemples"},"Exemples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnMeanVSMedian />\n")))}u.isMDXComponent=!0},411:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),b=r,m=p["".concat(l,".").concat(b)]||p[b]||d[b]||i;return t?a.a.createElement(m,o(o({ref:n},s),{},{components:t})):a.a.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=b;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);