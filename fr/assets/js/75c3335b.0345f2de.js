(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{207:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),l=(a(0),a(411)),i=a(460),o=a(461),c={id:"barchart",title:"Bar Chart",sidebar_label:"Bar Chart"},s={unversionedId:"plots/barchart",id:"plots/barchart",isDocsHomePage:!1,title:"Bar Chart",description:"Diagramme en barres.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/plots/barchart.md",slug:"/plots/barchart",permalink:"/fr/docs/plots/barchart",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/barchart.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614551296,sidebar_label:"Bar Chart",sidebar:"docs",previous:{title:"Plotly",permalink:"/fr/docs/plotly"},next:{title:"Box Plot",permalink:"/fr/docs/plots/boxplot"}},b=[{value:"Options",id:"options",children:[]},{value:"Exemples",id:"exemples",children:[]}],u={toc:b};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Diagramme en barres."),Object(l.b)("h2",{id:"options"},"Options"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"data")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object (required)"),": les tableaux d'objets de valeur. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"variable")," | ",Object(l.b)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": variable \xe0 afficher. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"group")," | ",Object(l.b)("inlineCode",{parentName:"li"},"(string|Factor)"),": variable de regroupement. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"yvar")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),': variable optionnelle utilis\xe9e pour les hauteurs de colonne (en conjonction avec "summary"). Default: ',Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"summary")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),': nom de la statistique \xe0 calculer pour l\'"yvar" et \xe0 afficher sous forme de barre de hauteur pour chaque cat\xe9gorie (soit ',Object(l.b)("inlineCode",{parentName:"li"},"Min"),", ",Object(l.b)("inlineCode",{parentName:"li"},"Max"),", ",Object(l.b)("inlineCode",{parentName:"li"},"Mean"),", ",Object(l.b)("inlineCode",{parentName:"li"},"Median"),", ",Object(l.b)("inlineCode",{parentName:"li"},"Sum"),", ...). Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"horizontal")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": si les barres doivent \xeatre affich\xe9es horizontalement. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"stackBars")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": lors du regroupement, contr\xf4le s'il faut empiler les barres les unes sur les autres. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"relative")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": s'il faut calculer les fr\xe9quences relatives \xe0 l'int\xe9rieur de chaque groupe. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"totalPercent")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": l'affichage ou non des barres globales en tant que fr\xe9quences relatives. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"xOrder")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),': soit "total", "cat\xe9gorie", "min", "max", "moyen" ou "m\xe9dian. Default: ',Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"direction")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),': comment ordonner les barres le long de l\'axe des x ("ascendant" ou "descendant"). Default: ',Object(l.b)("inlineCode",{parentName:"li"},"'ascending'"),".")),Object(l.b)("h2",{id:"exemples"},"Exemples"),Object(l.b)(i.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Grouped",value:"grouped"},{label:"Descending Order",value:"descending"},{label:"Relative Stacked Bars",value:"relativeStackedBars"}],lazy:!0,mdxType:"Tabs"},Object(l.b)(o.a,{value:"minimal",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n/>\n'))),Object(l.b)(o.a,{value:"grouped",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n    group="Gender"\n/>\n'))),Object(l.b)(o.a,{value:"descending",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n    xOrder="total"\n    direction="descending"\n/>\n'))),Object(l.b)(o.a,{value:"relativeStackedBars",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n    stackBars\n    relative\n    group="Gender"\n/>\n')))))}p.isMDXComponent=!0},411:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(a),d=n,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||l;return a?r.a.createElement(m,o(o({ref:t},s),{},{components:a})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},445:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},458:function(e,t,a){"use strict";var n=a(0),r=a(459);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},459:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)(void 0);t.a=r},460:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(458),i=a(445),o=a(58),c=a.n(o);const s=37,b=39;t.a=function(e){const{lazy:t,block:a,defaultValue:o,values:u,groupId:p,className:d}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(l.a)(),[O,j]=Object(n.useState)(o),g=n.Children.toArray(e.children),v=[];if(null!=p){const e=m[p];null!=e&&e!==O&&u.some((t=>t.value===e))&&j(e)}const N=e=>{const t=e.target,a=v.indexOf(t),n=g[a].props.value;j(n),null!=p&&f(p,n)},h=e=>{var t;let a;switch(e.keyCode){case b:const t=v.indexOf(e.target)+1;a=v[t]||v[0];break;case s:const n=v.indexOf(e.target)-1;a=v[n]||v[v.length-1]}null===(t=a)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":a},d)},u.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>v.push(e),onKeyDown:h,onFocus:N,onClick:N},t)))),t?Object(n.cloneElement)(g.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},461:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function({children:e,hidden:t,className:a}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:a},e)}}}]);