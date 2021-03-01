(window.webpackJsonp=window.webpackJsonp||[]).push([[311],{251:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(3),i=a(7),l=(a(0),a(411)),r={id:"sketchpad",title:"Sketchpad",sidebar_label:"Sketchpad"},o={unversionedId:"sketchpad",id:"sketchpad",isDocsHomePage:!1,title:"Sketchpad",description:"Un bloc de dibujo para tomar notas de las diapositivas de la conferencia o de las p\xe1ginas vac\xedas.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/sketchpad.md",slug:"/sketchpad",permalink:"/es/docs/sketchpad",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/sketchpad.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,sidebar_label:"Sketchpad",sidebar:"docs",previous:{title:"Text Editor",permalink:"/es/docs/text-editor"},next:{title:"Lesson Submit",permalink:"/es/docs/lesson-submit"}},b=[{value:"Opciones",id:"opciones",children:[]},{value:"Ejemplos",id:"ejemplos",children:[]}],c={toc:b};function s(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Un bloc de dibujo para tomar notas de las diapositivas de la conferencia o de las p\xe1ginas vac\xedas."),Object(l.b)("h2",{id:"opciones"},"Opciones"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"autoSave")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": controla si el editor debe guardar el texto actual en el almacenamiento local del navegador en un intervalo de tiempo determinado. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"true"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"feedbackButtons")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": controla si se muestran los botones de retroalimentaci\xf3n en cada diapositiva. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"intervalTime")," | ",Object(l.b)("inlineCode",{parentName:"li"},"number"),": el tiempo entre los ahorros autom\xe1ticos. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"10000"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"hideInputButtons")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": controla si ocultar los botones de dibujo y de introducci\xf3n de texto. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"hideNavigationButtons")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": controla si ocultar los botones para navegar entre las p\xe1ginas. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"hideSaveButtons")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": controla si ocultar los botones de guardar. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"hideTransmitButtons")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": controla si se deben ocultar los botones para transmitir las acciones del usuario. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"brushSize")," | ",Object(l.b)("inlineCode",{parentName:"li"},"number"),": el tama\xf1o del pincel para pintar con. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"4"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"color")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": el color del pincel y los textos. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"'#444444'"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"canvasWidth")," | ",Object(l.b)("inlineCode",{parentName:"li"},"number"),": ancho del elemento de la tela (en px). Default: ",Object(l.b)("inlineCode",{parentName:"li"},"1200"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"canvasHeight")," | ",Object(l.b)("inlineCode",{parentName:"li"},"number"),": altura del elemento de la tela (en px). Default: ",Object(l.b)("inlineCode",{parentName:"li"},"700"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"fullscreen")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": controla si se debe cambiar autom\xe1ticamente el tama\xf1o del lienzo al ancho y alto de la ventana del navegador. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"fill")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),': si es "horizontal", rellena todo el espacio horizontal disponible al dibujar un PDF; si es "vertical", todo el espacio vertical se utiliza para evitar el desbordamiento del eje Y.. Default: ',Object(l.b)("inlineCode",{parentName:"li"},"'vertical'"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"disabled")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": si hacer el componente de s\xf3lo lectura y prohibir el dibujo en el bloc de dibujo. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"fontFamily")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": familia de fuentes. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"'Arial'"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"fontSize")," | ",Object(l.b)("inlineCode",{parentName:"li"},"number"),": El tama\xf1o de la letra. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"24"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"nodes")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),': los componentes que deben ser mostrados en la parte superior de las diapositivas especificadas; las "teclas" deben corresponder a los n\xfameros de p\xe1gina, los "valores" a los componentes. Default: ',Object(l.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"noPages")," | ",Object(l.b)("inlineCode",{parentName:"li"},"number"),": n\xfamero inicial de p\xe1ginas. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"1"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"pdf")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": enlace al archivo PDF para fondos de p\xe1ginas horneadas. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"showTutorial")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": mostrar un tutorial para el bloc de dibujo. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"dynamicallyHideButtons")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": controla si se debe empezar a ocultar los botones cuando el ancho de la barra de herramientas no es suficiente (de lo contrario, se iniciar\xe1 una nueva l\xednea). Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"transmitOwner")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": si las acciones de los propietarios deben ser transmitidas a otros usuarios en tiempo real. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"true"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"groupMode")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": controla si todas las acciones del usuario se transmiten a todos los dem\xe1s. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"voiceID")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": identificador de control de voz. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"style")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": Estilos en l\xednea CSS. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onChange")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": llamada de retorno cada vez que se dibuja un nuevo elemento de l\xednea. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onChange() {}"),".")),Object(l.b)("h2",{id:"ejemplos"},"Ejemplos"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Sketchpad canvasWidth={750} />\n")))}s.isMDXComponent=!0},411:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),s=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=s(a),u=n,m=p["".concat(r,".").concat(u)]||p[u]||d[u]||l;return a?i.a.createElement(m,o(o({ref:t},c),{},{components:a})):i.a.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=u;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var c=2;c<l;c++)r[c]=a[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);