(window.webpackJsonp=window.webpackJsonp||[]).push([[350],{290:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var a=t(3),r=t(7),i=(t(0),t(411)),l={id:"select-input",title:"Select Input",sidebar_label:"Select Input"},o={unversionedId:"input/select-input",id:"input/select-input",isDocsHomePage:!1,title:"Select Input",description:'Un componente de entrada seleccionado. Puede ser usado como parte de un tablero de ISLE o independiente. En este \xfaltimo caso, usted quiere manejar los cambios a trav\xe9s del atributo "onChange" o vincular el valor a una variable global a trav\xe9s del atributo "bind".',source:"@site/i18n/es/docusaurus-plugin-content-docs/current/input/select.md",slug:"/input/select-input",permalink:"/es/docs/input/select-input",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/select.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Select Input",sidebar:"docs",previous:{title:"Proportions Input",permalink:"/es/docs/input/proportions-input"},next:{title:"Slider Input",permalink:"/es/docs/input/slider-input"}},c=[{value:"Opciones",id:"opciones",children:[]},{value:"Ejemplos",id:"ejemplos",children:[]}],b={toc:c};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,'Un componente de entrada seleccionado. Puede ser usado como parte de un tablero de ISLE o independiente. En este \xfaltimo caso, usted quiere manejar los cambios a trav\xe9s del atributo "onChange" o vincular el valor a una variable global a trav\xe9s del atributo "bind".'),Object(i.b)("h2",{id:"opciones"},"Opciones"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"bind")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": nombre de la variable global para el n\xfamero que se asignar\xe1 a. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"clearable")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": valor booleano que indica si se puede despejar la elecci\xf3n o elecciones realizadas. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"defaultValue")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(number|string|array|object)"),": valor por defecto de la entrada al inicio. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"disabled")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": controla si la entrada est\xe1 activa o no. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"inline")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": indica si la entrada se muestra en l\xednea. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"legend")," | ",Object(i.b)("inlineCode",{parentName:"li"},"(string|node)"),": El texto que se muestra junto a la entrada. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"''"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"menuPlacement")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),': colocaci\xf3n del men\xfa en relaci\xf3n con el control (ya sea "auto", "arriba" o "abajo"). Default: ',Object(i.b)("inlineCode",{parentName:"li"},"'auto'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"multi")," | ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),": controla si uno puede seleccionar varias respuestas. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"onChange")," | ",Object(i.b)("inlineCode",{parentName:"li"},"function"),": funci\xf3n de llamada de retorno que se invocar\xe1 cuando se haga una elecci\xf3n. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"onChange() {}"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"options")," | ",Object(i.b)("inlineCode",{parentName:"li"},"array"),": de indicar las opciones disponibles para el usuario. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"placeholder")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": valor que se mostrar\xe1 antes de hacer una elecci\xf3n inicial. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"tooltip")," | ",Object(i.b)("inlineCode",{parentName:"li"},"string"),": El texto que se muestra al pasar el cursor sobre la leyenda. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"none"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style")," | ",Object(i.b)("inlineCode",{parentName:"li"},"object"),": Estilos en l\xednea CSS. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(i.b)("h2",{id:"ejemplos"},"Ejemplos"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectInput\n    legend=\"Choose the test direction\"\n    defaultValue=\"two-sided\"\n    options={[\n        'left-sided',\n        'right-sided',\n        'two-sided'\n    ]}\n/>\n")))}s.isMDXComponent=!0},411:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),s=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=s(t),d=a,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return t?r.a.createElement(m,o(o({ref:n},b),{},{components:t})):r.a.createElement(m,o({ref:n},b))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var b=2;b<i;b++)l[b]=t[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);