(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{182:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(410)),l=a(443),o=a(444),c={id:"barchart",title:"Bar Chart",sidebar_label:"Bar Chart"},b={unversionedId:"plots/barchart",id:"plots/barchart",isDocsHomePage:!1,title:"Bar Chart",description:"Grafico a barre.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/plots/barchart.md",slug:"/plots/barchart",permalink:"/it/docs/plots/barchart",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/barchart.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614551296,formattedLastUpdatedAt:"28/2/2021",sidebar_label:"Bar Chart",sidebar:"docs",previous:{title:"Plotly",permalink:"/it/docs/plotly"},next:{title:"Box Plot",permalink:"/it/docs/plots/boxplot"}},s=[{value:"Opzioni",id:"opzioni",children:[]},{value:"Esempi",id:"esempi",children:[]}],u={toc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Grafico a barre."),Object(i.b)("h2",{id:"opzioni"},"Opzioni"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"data")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object (required)"),": oggetto delle matrici di valori. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"variable")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": variabile da visualizzare. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"group")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|Factor)"),": variabile di raggruppamento. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"yvar")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": variabile opzionale usata per le altezze delle colonne (insieme a ",Object(i.b)("inlineCode",{parentName:"li"},"summary"),"). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"summary")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": nome della statistica da calcolare per ",Object(i.b)("inlineCode",{parentName:"li"},"yvar")," e da visualizzare come altezza della barra per ogni categoria (sia ",Object(i.b)("inlineCode",{parentName:"li"},"Min"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Max"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Mean"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Median"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Sum"),", ...). Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"horizontal")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": se visualizzare le barre in orizzontale. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"stackBars")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": quando si raggruppano, controlla se impilare le barre una sopra l'altra. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"relative")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": se calcolare le frequenze relative all'interno di ciascun gruppo. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"totalPercent")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": se visualizzare le barre complessive come frequenze relative. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"xOrder")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": sia ",Object(i.b)("inlineCode",{parentName:"li"},"totale"),", ",Object(i.b)("inlineCode",{parentName:"li"},"categoria"),", ",Object(i.b)("inlineCode",{parentName:"li"},"min"),", ",Object(i.b)("inlineCode",{parentName:"li"},"max"),", ",Object(i.b)("inlineCode",{parentName:"li"},"mean"),", o ",Object(i.b)("inlineCode",{parentName:"li"},"mediana"),".. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"direction")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),': come ordinare le barre accanto all\'asse delle x (in "ascesa" o in "discesa"). Default: ',Object(i.b)("inlineCode",{parentName:"li"},"'ascending'"),".")),Object(i.b)("h2",{id:"esempi"},"Esempi"),Object(i.b)(l.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Grouped",value:"grouped"},{label:"Descending Order",value:"descending"},{label:"Relative Stacked Bars",value:"relativeStackedBars"}],lazy:!0,mdxType:"Tabs"},Object(i.b)(o.a,{value:"minimal",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n/>\n'))),Object(i.b)(o.a,{value:"grouped",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n    group="Gender"\n/>\n'))),Object(i.b)(o.a,{value:"descending",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n    xOrder="total"\n    direction="descending"\n/>\n'))),Object(i.b)(o.a,{value:"relativeStackedBars",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n    stackBars\n    relative\n    group="Gender"\n/>\n')))))}p.isMDXComponent=!0},410:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return a?r.a.createElement(m,o(o({ref:t},b),{},{components:a})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var b=2;b<i;b++)l[b]=a[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},434:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},440:function(e,t,a){"use strict";var n=a(0),r=a(441);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},441:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)(void 0);t.a=r},443:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(440),l=a(434),o=a(57),c=a.n(o);const b=37,s=39;t.a=function(e){const{lazy:t,block:a,defaultValue:o,values:u,groupId:p,className:d}=e,{tabGroupChoices:m,setTabGroupChoices:O}=Object(i.a)(),[j,f]=Object(n.useState)(o),v=n.Children.toArray(e.children),g=[];if(null!=p){const e=m[p];null!=e&&e!==j&&u.some((t=>t.value===e))&&f(e)}const N=e=>{const t=e.target,a=g.indexOf(t),n=v[a].props.value;f(n),null!=p&&(O(p,n),setTimeout((()=>{(function(e){const{top:t,left:a,bottom:n,right:r}=e.getBoundingClientRect(),{innerHeight:i,innerWidth:l}=window;return t>=0&&r<=l&&n<=i&&a>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((()=>t.classList.remove(c.a.tabItemActive)),2e3))}),150))},y=e=>{var t;let a;switch(e.keyCode){case s:{const t=g.indexOf(e.target)+1;a=g[t]||g[0];break}case b:{const t=g.indexOf(e.target)-1;a=g[t]||g[g.length-1];break}}null===(t=a)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":a},d)},u.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":j===e}),key:e,ref:e=>g.push(e),onKeyDown:y,onFocus:N,onClick:N},t)))),t?Object(n.cloneElement)(v.filter((e=>e.props.value===j))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}},444:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function({children:e,hidden:t,className:a}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:a},e)}}}]);