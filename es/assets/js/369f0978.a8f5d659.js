(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{151:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),l=(a(0),a(410)),i=a(443),o=a(444),c={id:"js-shell",title:"JavaScript Shell",sidebar_label:"JavaScript Shell"},s={unversionedId:"js-shell",id:"js-shell",isDocsHomePage:!1,title:"JavaScript Shell",description:"Un shell interactivo de Javascript que puede ser usado para ejecutar comandos de Javascript. El shell contiene una consola que muestra mensajes de error, advertencias, etc.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/js-shell.md",slug:"/js-shell",permalink:"/es/docs/js-shell",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/js-shell.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614123017,formattedLastUpdatedAt:"23/2/2021",sidebar_label:"JavaScript Shell",sidebar:"docs",previous:{title:"Flippable Card",permalink:"/es/docs/flippable-card"},next:{title:"Likert Scale",permalink:"/es/docs/likert-scale"}},b=[{value:"Opciones",id:"opciones",children:[]},{value:"Ejemplos",id:"ejemplos",children:[]}],u={toc:b};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Un shell interactivo de Javascript que puede ser usado para ejecutar comandos de Javascript. El shell contiene una consola que muestra mensajes de error, advertencias, etc."),Object(l.b)("h2",{id:"opciones"},"Opciones"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"code")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": C\xf3digo JavaScript a evaluar. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"''"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"solution")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),': para cuestiones de programaci\xf3n, el c\xf3digo "cadena" representa la soluci\xf3n oficial del problema. Default: ',Object(l.b)("inlineCode",{parentName:"li"},"''"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"hints")," | ",Object(l.b)("inlineCode",{parentName:"li"},"array<(string|node)>"),": para las cuestiones de programaci\xf3n, una serie de consejos que proporcionan orientaci\xf3n sobre c\xf3mo abordar el problema. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"precompute")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": controla si el c\xf3digo por defecto debe ser ejecutado una vez que el componente ha sido montado. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"chat")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": controla si la funcionalidad de chat en grupo debe ser activada. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"check")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),': a\xf1adi\xf3 el c\xf3digo JavaScript para comprobar el "c\xf3digo" a evaluar. Default: ',Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"disabled")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": controla si se deshabilitan todas las entradas del usuario y se hace est\xe1tico el bloque de c\xf3digo. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lines")," | ",Object(l.b)("inlineCode",{parentName:"li"},"number"),": n\xfamero de l\xedneas a mostrar. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"5"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"className")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": nombre de la clase. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"''"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"style")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": Estilos en l\xednea CSS. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onChange")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": llamada de retorno invocada siempre que la entrada del campo de texto cambia. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onChange() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onEvaluate")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),': se invoca cuando se hace clic en el bot\xf3n "Evaluar".. Default: ',Object(l.b)("inlineCode",{parentName:"li"},"onEvaluate() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"vars")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),': objeto de alcance con variables que deben estar disponibles para el "c\xf3digo" evaluado. Default: ',Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"voiceID")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": identificador de control de voz. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),".")),Object(l.b)("h2",{id:"ejemplos"},"Ejemplos"),Object(l.b)(i.a,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"With Style",value:"withStyle"},{label:"Ten Lines",value:"mLines"}],lazy:!0,mdxType:"Tabs"},Object(l.b)(o.a,{value:"minimal",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<JSShell code = {`var a = 2; \nvar b = 2;\nconsole.log(a + b);`} />\n"))),Object(l.b)(o.a,{value:"withStyle",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<JSShell style={{ fontSize: 18, boxShadow: '0 0 4px black' }}  />\n"))),Object(l.b)(o.a,{value:"mLines",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<JSShell lines={10} />\n")))))}p.isMDXComponent=!0},410:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(a),d=n,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||l;return a?r.a.createElement(m,o(o({ref:t},s),{},{components:a})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},434:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},440:function(e,t,a){"use strict";var n=a(0),r=a(441);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},441:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)(void 0);t.a=r},443:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(440),i=a(434),o=a(57),c=a.n(o);const s=37,b=39;t.a=function(e){const{lazy:t,block:a,defaultValue:o,values:u,groupId:p,className:d}=e,{tabGroupChoices:m,setTabGroupChoices:j}=Object(l.a)(),[O,f]=Object(n.useState)(o),v=n.Children.toArray(e.children),g=[];if(null!=p){const e=m[p];null!=e&&e!==O&&u.some((t=>t.value===e))&&f(e)}const N=e=>{const t=e.target,a=g.indexOf(t),n=v[a].props.value;f(n),null!=p&&(j(p,n),setTimeout((()=>{(function(e){const{top:t,left:a,bottom:n,right:r}=e.getBoundingClientRect(),{innerHeight:l,innerWidth:i}=window;return t>=0&&r<=i&&n<=l&&a>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((()=>t.classList.remove(c.a.tabItemActive)),2e3))}),150))},h=e=>{var t;let a;switch(e.keyCode){case b:{const t=g.indexOf(e.target)+1;a=g[t]||g[0];break}case s:{const t=g.indexOf(e.target)-1;a=g[t]||g[g.length-1];break}}null===(t=a)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":a},d)},u.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>g.push(e),onKeyDown:h,onFocus:N,onClick:N},t)))),t?Object(n.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},444:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function({children:e,hidden:t,className:a}){return r.a.createElement("div",{role:"tabpanel",hidden:t,className:a},e)}}}]);