(self.webpackChunk=self.webpackChunk||[]).push([[5153],{603905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(202784);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),m=n,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return a?r.createElement(f,l(l({ref:t},c),{},{components:a})):r.createElement(f,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},358215:function(e,t,a){"use strict";var r=a(202784);t.Z=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},541395:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var r=a(202784),n=a(180944),i=a(386010),l="tabItem_1uMI",o="tabItemActive_2DSg";var s=37,u=39;var c=function(e){var t=e.lazy,a=e.block,c=e.defaultValue,d=e.values,p=e.groupId,m=e.className,f=(0,n.Z)(),v=f.tabGroupChoices,b=f.setTabGroupChoices,k=(0,r.useState)(c),g=k[0],N=k[1],h=r.Children.toArray(e.children),y=[];if(null!=p){var C=v[p];null!=C&&C!==g&&d.some((function(e){return e.value===C}))&&N(C)}var x=function(e){var t=e.currentTarget,a=y.indexOf(t),r=d[a].value;N(r),null!=p&&(b(p,r),setTimeout((function(){var e,a,r,n,i,l,s,u;(e=t.getBoundingClientRect(),a=e.top,r=e.left,n=e.bottom,i=e.right,l=window,s=l.innerHeight,u=l.innerWidth,a>=0&&i<=u&&n<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},O=function(e){var t,a;switch(e.keyCode){case u:var r=y.indexOf(e.target)+1;a=y[r]||y[0];break;case s:var n=y.indexOf(e.target)-1;a=y[n]||y[y.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},m)},d.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":g===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:O,onFocus:x,onClick:x},a)}))),t?(0,r.cloneElement)(h.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},79443:function(e,t,a){"use strict";var r=(0,a(202784).createContext)(void 0);t.Z=r},180944:function(e,t,a){"use strict";var r=a(202784),n=a(79443);t.Z=function(){var e=(0,r.useContext)(n.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},805370:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var r=a(722122),n=a(419756),i=(a(202784),a(603905)),l=a(541395),o=a(358215),s={id:"barchart",title:"Bar Chart",sidebar_label:"Bar Chart"},u={unversionedId:"plots/barchart",id:"plots/barchart",isDocsHomePage:!1,title:"Bar Chart",description:"Gr\xe1fico de barras.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/plots/barchart.md",sourceDirName:"plots",slug:"/plots/barchart",permalink:"/docs/plots/barchart",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plots/barchart.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621312042,formattedLastUpdatedAt:"18/05/2021",sidebar_label:"Bar Chart",frontMatter:{id:"barchart",title:"Bar Chart",sidebar_label:"Bar Chart"},sidebar:"docs",previous:{title:"Plotly",permalink:"/docs/plotly"},next:{title:"Box Plot",permalink:"/docs/plots/boxplot"}},c=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",children:[]},{value:"Exemplos",id:"exemplos",children:[]}],d={toc:c};function p(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Gr\xe1fico de barras."),(0,i.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"data")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object (required)"),": objeto de arrays de valor. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"variable")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|Factor) (required)"),": vari\xe1vel a exibir. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"group")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|Factor)"),": vari\xe1vel de agrupamento. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"yvar")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),': vari\xe1vel opcional utilizada para as alturas das colunas (em conjunto com "sum\xe1rio"). Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"summary")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": nome da estat\xedstica a ser computada para ",(0,i.kt)("inlineCode",{parentName:"li"},"yvar")," e a ser exibida como altura de barra para cada categoria (ou ",(0,i.kt)("inlineCode",{parentName:"li"},"Min"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Max"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Mean"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Median"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Sum"),", ...). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"horizontal")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": se as barras devem ser exibidas horizontalmente. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"stackBars")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": ao agrupar, controla se as barras devem ser empilhadas umas sobre as outras. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"relative")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": se deve calcular as freq\xfc\xeancias relativas dentro de cada grupo. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"totalPercent")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": se exibir as barras gerais como freq\xfc\xeancias relativas. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"xOrder")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),': seja "total", "categoria", "min", "max", "homem", ou "m\xe9dico". Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"direction")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": como pedir barras ao lado do eixo x (",(0,i.kt)("inlineCode",{parentName:"li"},"ascendente")," ou ",(0,i.kt)("inlineCode",{parentName:"li"},"descendente"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'ascending'"),".")),(0,i.kt)("h2",{id:"exemplos"},"Exemplos"),(0,i.kt)(l.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Grouped",value:"grouped"},{label:"Descending Order",value:"descending"},{label:"Relative Stacked Bars",value:"relativeStackedBars"}],lazy:!0,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n/>\n'))),(0,i.kt)(o.Z,{value:"grouped",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n    group="Gender"\n/>\n'))),(0,i.kt)(o.Z,{value:"descending",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n    xOrder="total"\n    direction="descending"\n/>\n'))),(0,i.kt)(o.Z,{value:"relativeStackedBars",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BarChart \n    data={heartdisease} \n    variable="Drugs"\n    stackBars\n    relative\n    group="Gender"\n/>\n')))))}p.isMDXComponent=!0},386010:function(e,t,a){"use strict";function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}a.d(t,{Z:function(){return n}})}}]);