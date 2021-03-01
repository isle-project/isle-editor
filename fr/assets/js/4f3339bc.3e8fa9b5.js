(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{185:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),l=(t(0),t(411)),i=t(460),o=t(461),c={id:"contingency-table",title:"Contingency Table",sidebar_label:"Contingency Table"},s={unversionedId:"tables/contingency-table",id:"tables/contingency-table",isDocsHomePage:!1,title:"Contingency Table",description:"Un tableau de contingence.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tables/contingency-table.md",slug:"/tables/contingency-table",permalink:"/fr/docs/tables/contingency-table",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tables/contingency-table.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614549569,sidebar_label:"Contingency Table",sidebar:"docs",previous:{title:"Simple Linear Regression",permalink:"/fr/docs/models/simple-linear-regression"},next:{title:"Frequency Table",permalink:"/fr/docs/tables/frequency-table"}},b=[{value:"Options",id:"options",children:[]},{value:"Exemples",id:"exemples",children:[]}],u={toc:b};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Un tableau de contingence."),Object(l.b)("h2",{id:"options"},"Options"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"data")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object (required)"),": les tableaux d'objets de valeur. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"rowVar")," | ",Object(l.b)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": nom de la variable cat\xe9gorielle \xe0 afficher le long des lignes. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"colVar")," | ",Object(l.b)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),":  nom de la variable cat\xe9gorielle \xe0 afficher le long des colonnes. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"relativeFreqs")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le l'affichage ou non des fr\xe9quences relatives. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"group")," | ",Object(l.b)("inlineCode",{parentName:"li"},"(string|Factor)"),": nom de la variable de regroupement. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"display")," | ",Object(l.b)("inlineCode",{parentName:"li"},"(array<string>|string)"),': l\'affichage ou non du "Pourcentage de la ligne" et/ou du "Pourcentage de la colonne. Default: ',Object(l.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"nDecimalPlaces")," | ",Object(l.b)("inlineCode",{parentName:"li"},"number"),": nombre de d\xe9cimales pour les fr\xe9quences relatives affich\xe9es dans le tableau. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"3"),".")),Object(l.b)("h2",{id:"exemples"},"Exemples"),Object(l.b)(i.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Relative Frequencies",value:"relativeFrequency"},{label:"Grouped",value:"grouped"},{label:"Display Row Percentages",value:"displayRowPercentage"}],lazy:!0,mdxType:"Tabs"},Object(l.b)(o.a,{value:"minimal",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ContingencyTable\n    data={heartdisease} \n    rowVar="Gender"\n    colVar="Drugs"\n/>\n'))),Object(l.b)(o.a,{value:"relativeFrequency",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ContingencyTable\n    data={heartdisease} \n    rowVar="Gender"\n    colVar="Drugs"\n    relativeFreqs \n    nDecimalPlaces={2}\n/>\n'))),Object(l.b)(o.a,{value:"grouped",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ContingencyTable\n    data={heartdisease} \n    rowVar="Drugs"\n    colVar="Complications"\n    group="Gender"\n/>\n'))),Object(l.b)(o.a,{value:"displayRowPercentage",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ContingencyTable\n    data={heartdisease} \n    rowVar="Drugs"\n    colVar="Complications"\n    display={[\'Row Percent\']}\n/>\n')))))}p.isMDXComponent=!0},411:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),b=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=b(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(t),d=a,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||l;return t?r.a.createElement(m,o(o({ref:n},s),{},{components:t})):r.a.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},445:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},458:function(e,n,t){"use strict";var a=t(0),r=t(459);n.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},459:function(e,n,t){"use strict";var a=t(0);const r=Object(a.createContext)(void 0);n.a=r},460:function(e,n,t){"use strict";var a=t(0),r=t.n(a),l=t(458),i=t(445),o=t(58),c=t.n(o);const s=37,b=39;n.a=function(e){const{lazy:n,block:t,defaultValue:o,values:u,groupId:p,className:d}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(l.a)(),[g,O]=Object(a.useState)(o),j=a.Children.toArray(e.children),y=[];if(null!=p){const e=m[p];null!=e&&e!==g&&u.some((n=>n.value===e))&&O(e)}const v=e=>{const n=e.target,t=y.indexOf(n),a=j[t].props.value;O(a),null!=p&&f(p,a)},N=e=>{var n;let t;switch(e.keyCode){case b:const n=y.indexOf(e.target)+1;t=y[n]||y[0];break;case s:const a=y.indexOf(e.target)-1;t=y[a]||y[y.length-1]}null===(n=t)||void 0===n||n.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},d)},u.map((({value:e,label:n})=>r.a.createElement("li",{role:"tab",tabIndex:g===e?0:-1,"aria-selected":g===e,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":g===e}),key:e,ref:e=>y.push(e),onKeyDown:N,onFocus:v,onClick:v},n)))),n?Object(a.cloneElement)(j.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map(((e,n)=>Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==g})))))}},461:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function({children:e,hidden:n,className:t}){return r.a.createElement("div",{role:"tabpanel",hidden:n,className:t},e)}}}]);