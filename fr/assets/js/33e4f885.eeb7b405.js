(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(409)),l={id:"meantest2",title:"Two-Sample Mean Test",sidebar_label:"Two-Sample Mean Test"},o={unversionedId:"tests/meantest2",id:"tests/meantest2",isDocsHomePage:!1,title:"Two-Sample Mean Test",description:"Test de la moyenne sur deux \xe9chantillons.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tests/meantest2.md",slug:"/tests/meantest2",permalink:"/fr/docs/tests/meantest2",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tests/meantest2.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614463997,sidebar_label:"Two-Sample Mean Test",sidebar:"docs",previous:{title:"One-Sample Mean Test",permalink:"/fr/docs/tests/meantest"},next:{title:"One-Sample Proportion Test",permalink:"/fr/docs/tests/proptest"}},s=[{value:"Options",id:"options",children:[]},{value:"Exemples",id:"exemples",children:[]}],c={toc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Test de la moyenne sur deux \xe9chantillons."),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"data")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object (required)"),": les tableaux d'objets de valeur. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"x")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string (required)"),": nom de la premi\xe8re variable. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"y")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),': nom de la deuxi\xe8me variable (les variables "y" ou "group" doivent \xeatre fournies). Default: ',Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"group")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|Factor)"),': le nom de la variable de regroupement ("y" ou "group" doit \xeatre fourni). Default: ',Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"type")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),': le type de test (soit "Test Z" ou "Test T"). Default: ',Object(i.b)("inlineCode",{parentName:"li"},"'T Test'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"xstdev")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),': premier \xe9cart-type (pour le "Test Z"). Default: ',Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"ystdev")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),': deuxi\xe8me \xe9cart-type (pour le "Test Z"). Default: ',Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"alpha")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": niveau de signification. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"0.05"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"direction")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),': la direction du test (soit "moins", "plus" ou "double"). Default: ',Object(i.b)("inlineCode",{parentName:"li"},"'two-sided'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"diff")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": diff\xe9rence sous H0. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"0"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"showDecision")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le s'il faut afficher si l'hypoth\xe8se nulle est rejet\xe9e au niveau de signification sp\xe9cifi\xe9. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),".")),Object(i.b)("h2",{id:"exemples"},"Exemples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<MeanTest2\n    data={heartdisease} \n    x="Cost"\n    group="Gender"\n/>\n')))}b.isMDXComponent=!0},409:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(n),m=r,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?a.a.createElement(d,o(o({ref:t},c),{},{components:n})):a.a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);