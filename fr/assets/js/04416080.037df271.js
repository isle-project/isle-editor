"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4779],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var l=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),u=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=u(e.components);return l.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?l.createElement(f,r(r({ref:t},s),{},{components:n})):l.createElement(f,r({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var u=2;u<i;u++)r[u]=n[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},160903:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var l=n(487462),a=n(263366),i=(n(202784),n(603905)),r=["components"],o={id:"plotly",title:"Plotly",sidebar_label:"Plotly"},p=void 0,u={unversionedId:"plotly",id:"plotly",title:"Plotly",description:"Visualisation graphique.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/plotly.md",sourceDirName:".",slug:"/plotly",permalink:"/fr/docs/plotly",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plotly.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621312042,formattedLastUpdatedAt:"18/05/2021",frontMatter:{id:"plotly",title:"Plotly",sidebar_label:"Plotly"},sidebar:"docs",previous:{title:"Typewriter",permalink:"/fr/docs/typewriter"},next:{title:"Bar Chart",permalink:"/fr/docs/plots/barchart"}},s=[{value:"Options",id:"options",children:[],level:2},{value:"Exemples",id:"exemples",children:[],level:2}],c={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Visualisation graphique."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"data")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array (required)"),": tableau de donn\xe9es. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"draggable")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si la parcelle doit pouvoir \xeatre tra\xeen\xe9e. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"editable")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si les \xe9tiquettes de la parcelle cr\xe9\xe9e sont modifiables. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"id")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": identifiant du composant. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"layout")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": Objet de trac\xe9. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"config")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": Options de configuration graphique (voir : ",(0,i.kt)("a",{parentName:"li",href:"https://plotly.com/javascript/configuration-options/"},"https://plotly.com/javascript/configuration-options/"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"legendButtons")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le de l'affichage des boutons de modification de la l\xe9gende. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"meta")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": m\xe9ta-information sur les parcelles. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"revision")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": lorsqu'il est fourni, entra\xeene la mise \xe0 jour de la parcelle lorsque la valeur de r\xe9vision est incr\xe9ment\xe9e. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": Styles CSS en ligne. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onAfterPlot")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": fonction de rappel invoqu\xe9e \xe0 chaque fois qu'un graphique est trac\xe9. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onAfterPlot() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onClick")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": la fonction de rappel est invoqu\xe9e lorsque l'on clique sur un \xe9l\xe9ment. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onClick() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onInitialized")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),': callback invoqu\xe9 une fois que le trac\xe9 est initialis\xe9 ; appel\xe9 avec figure (objet avec trois cl\xe9s correspondant aux accessoires d\'entr\xe9e : "data", "layout", et "frames") et le noeud DOM "graphDiv". Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"onInitialized() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onLegendClick")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": fonction de rappel invoqu\xe9e lorsque l'\xe9l\xe9ment de l\xe9gende est cliqu\xe9. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onLegendClick() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onLegendDoubleClick")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": fonction de rappel invoqu\xe9e lorsque l'\xe9l\xe9ment de l\xe9gende est double-cliqu\xe9. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onLegendDoubleClick() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onRelayout")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": la fonction de rappel est invoqu\xe9e lorsque le relais est d\xe9clench\xe9. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onRelayout() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onSelected")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": fonction de rappel invoqu\xe9e lorsque des \xe9l\xe9ments sont s\xe9lectionn\xe9s. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onSelected() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onShare")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),': fonction de rappel invoqu\xe9e en cliquant sur le bouton "Partager. Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"removeButtons")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si tous les boutons doivent \xeatre supprim\xe9s (sauf le bouton plein \xe9cran s'il est activ\xe9). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"toggleFullscreen")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si l'affichage de la parcelle en mode plein \xe9cran est autoris\xe9. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,i.kt)("h2",{id:"exemples"},"Exemples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Plotly\n    data={[{\n        values: [ 24, 7, 0.5 ],\n        labels: [ 'English', 'Spanish', 'Other' ],\n        type: 'pie'\n            }]}\n    layout={{ width: 300 }}\n/>\n")))}d.isMDXComponent=!0}}]);