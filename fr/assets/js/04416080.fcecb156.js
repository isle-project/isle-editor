(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),l=n(7),i=(n(0),n(410)),r={id:"plotly",title:"Plotly",sidebar_label:"Plotly"},o={unversionedId:"plotly",id:"plotly",isDocsHomePage:!1,title:"Plotly",description:"Visualisation graphique.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/plotly.md",slug:"/plotly",permalink:"/fr/docs/plotly",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plotly.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614613459,formattedLastUpdatedAt:"01/03/2021",sidebar_label:"Plotly",sidebar:"docs",previous:{title:"Typewriter",permalink:"/fr/docs/typewriter"},next:{title:"Bar Chart",permalink:"/fr/docs/plots/barchart"}},c=[{value:"Options",id:"options",children:[]},{value:"Exemples",id:"exemples",children:[]}],b={toc:c};function p(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Visualisation graphique."),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"data")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array (required)"),": tableau de donn\xe9es. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"draggable")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si la parcelle doit pouvoir \xeatre tra\xeen\xe9e. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"editable")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si les \xe9tiquettes de la parcelle cr\xe9\xe9e sont modifiables. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"id")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": identifiant du composant. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"layout")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": Objet de trac\xe9. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"config")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": Options de configuration graphique (voir : ",Object(i.b)("a",{parentName:"li",href:"https://plotly.com/javascript/configuration-options/"},"https://plotly.com/javascript/configuration-options/"),"). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"legendButtons")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le de l'affichage des boutons de modification de la l\xe9gende. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"meta")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": m\xe9ta-information sur les parcelles. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"revision")," | ",Object(i.b)("inlineCode",{parentName:"li"},"number"),": lorsqu'il est fourni, entra\xeene la mise \xe0 jour de la parcelle lorsque la valeur de r\xe9vision est incr\xe9ment\xe9e. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": Styles CSS en ligne. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onAfterPlot")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": fonction de rappel invoqu\xe9e \xe0 chaque fois qu'un graphique est trac\xe9. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onAfterPlot() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onClick")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": la fonction de rappel est invoqu\xe9e lorsque l'on clique sur un \xe9l\xe9ment. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onClick() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onInitialized")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),': callback invoqu\xe9 une fois que le trac\xe9 est initialis\xe9 ; appel\xe9 avec figure (objet avec trois cl\xe9s correspondant aux accessoires d\'entr\xe9e : "data", "layout", et "frames") et le noeud DOM "graphDiv".. Default: ',Object(i.b)("inlineCode",{parentName:"li"},"onInitialized() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onLegendClick")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": fonction de rappel invoqu\xe9e lorsque l'\xe9l\xe9ment de l\xe9gende est cliqu\xe9. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onLegendClick() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onLegendDoubleClick")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": fonction de rappel invoqu\xe9e lorsque l'\xe9l\xe9ment de l\xe9gende est double-cliqu\xe9. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onLegendDoubleClick() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onRelayout")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": la fonction de rappel est invoqu\xe9e lorsque le relais est d\xe9clench\xe9. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onRelayout() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onSelected")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": fonction de rappel invoqu\xe9e lorsque des \xe9l\xe9ments sont s\xe9lectionn\xe9s. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onSelected() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onShare")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),': fonction de rappel invoqu\xe9e en cliquant sur le bouton "Partager. Default: ',Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"removeButtons")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si tous les boutons doivent \xeatre supprim\xe9s (sauf le bouton plein \xe9cran s'il est activ\xe9). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"toggleFullscreen")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si l'affichage de la parcelle en mode plein \xe9cran est autoris\xe9. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),".")),Object(i.b)("h2",{id:"exemples"},"Exemples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Plotly\n    data={[{\n        values: [ 24, 7, 0.5 ],\n        labels: [ 'English', 'Spanish', 'Other' ],\n        type: 'pie'\n            }]}\n    layout={{ width: 300 }}\n/>\n")))}p.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),l=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var b=l.a.createContext({}),p=function(e){var t=l.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return l.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(r,".").concat(d)]||u[d]||s[d]||i;return n?l.a.createElement(m,o(o({ref:t},b),{},{components:n})):l.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var b=2;b<i;b++)r[b]=n[b];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);