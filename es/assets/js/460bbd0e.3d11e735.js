(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{163:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return r})),n.d(a,"metadata",(function(){return i})),n.d(a,"toc",(function(){return c})),n.d(a,"default",(function(){return s}));var t=n(3),o=n(7),l=(n(0),n(411)),r={id:"data-table",title:"Data Table",sidebar_label:"Data Table"},i={unversionedId:"data-table",id:"data-table",isDocsHomePage:!1,title:"Data Table",description:"Un componente que presenta los datos en una tabla. Construido sobre react-table.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/data-table.md",slug:"/data-table",permalink:"/es/docs/data-table",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/data-table.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614613459,sidebar_label:"Data Table",sidebar:"docs",previous:{title:"Data Explorer",permalink:"/es/docs/data-explorer"},next:{title:"Feedback Buttons",permalink:"/es/docs/feedback"}},c=[{value:"Opciones",id:"opciones",children:[]},{value:"Ejemplos",id:"ejemplos",children:[]}],b={toc:c};function s(e){var a=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(t.a)({},b,n,{components:a,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Un componente que presenta los datos en una tabla. Construido sobre ",Object(l.b)("a",{parentName:"p",href:"https://react-table.js.org/"},"react-table"),"."),Object(l.b)("h2",{id:"opciones"},"Opciones"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"data")," | ",Object(l.b)("inlineCode",{parentName:"li"},"(array|object) (required)"),": Un objeto o conjunto de datos para ser visto. Si es un objeto, las claves corresponden a los valores de las columnas, mientras que una matriz esperar\xe1 una matriz de objetos con un campo nombrado correspondiente a cada columna. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"dataInfo")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),': un objeto con una matriz de cadenas "info" que describe el conjunto de datos, el "nombre" del conjunto de datos, un "objeto" de "variables" con claves que corresponden a los nombres de las variables y valores a las descripciones de las variables, un booleano "showOnStartup" que controla si se debe mostrar el modo info al inicio.. Default: ',Object(l.b)("inlineCode",{parentName:"li"},"{\n  'info': [],\n  'name': '',\n  'variables': null,\n  'showOnStartup': false\n}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"deletable")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),': controla si las columnas para las que no existe un "info" tienen un bot\xf3n que cuando se pulsa llama a la funci\xf3n de devoluci\xf3n de llamada "onColumnDelete".. Default: ',Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"undeletableVars")," | ",Object(l.b)("inlineCode",{parentName:"li"},"array<string>"),": conjunto de nombres de variables de las columnas que no pueden ser suprimidas. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"filterable")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": controla si las columnas son filtrables. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"true"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"editable")," | ",Object(l.b)("inlineCode",{parentName:"li"},"array"),": una serie de nombres para las columnas que ser\xe1n editables. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"getTrProps")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": funci\xf3n de llamada de retorno ejecutada para cada fila para personalizar su estilo (estado de la tabla pasada, informaci\xf3n de la fila,\ny la instancia de la tabla). Default: ",Object(l.b)("inlineCode",{parentName:"li"},"none"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onColumnDrag")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": funci\xf3n invocada cuando una columna ha sido arrastrada a una posici\xf3n diferente. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onColumnDrag() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onColumnDelete")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": funci\xf3n que se invoca con el nombre de una columna cuando se hace clic en el respectivo bot\xf3n de eliminaci\xf3n de una columna. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onColumnDelete() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onColumnNameChange")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": funci\xf3n que se invoca cuando una columna ha sido renombrada (llamada con el nombre antiguo como primer y nuevo nombre como segundo argumento). Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onColumnNameChange() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onClickRemove")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": funci\xf3n que especifica una acci\xf3n a tomar para las filas eliminadas de los datos (por defecto una funci\xf3n vac\xeda). Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onClickRemove() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onEdit")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": funci\xf3n invocada con el conjunto de datos actualizados despu\xe9s de que el valor de una celda haya sido cambiado por el usuario (s\xf3lo se aplica cuando la tabla es ",Object(l.b)("inlineCode",{parentName:"li"},"editable"),"). Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onEdit() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onTutorialCompletion")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": funci\xf3n invocada cuando el usuario ha completado el tutorial de la tabla de datos. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onTutorialCompletion() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"filters")," | ",Object(l.b)("inlineCode",{parentName:"li"},"array"),": matriz de filtros. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"onFilteredChange")," | ",Object(l.b)("inlineCode",{parentName:"li"},"function"),": funci\xf3n invocada con los filtros actuales despu\xe9s de que los datos hayan sido filtrados por el usuario. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"onFilteredChange() {}"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"showRemove")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": indica si se deben mostrar casillas de verificaci\xf3n para las filas que se van a eliminar. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"showIdColumn")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": controla si se muestra una columna de identificaci\xf3n. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"true"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"disableDownload")," | ",Object(l.b)("inlineCode",{parentName:"li"},"boolean"),": si ocultar el bot\xf3n para descargar los datos como un archivo CSV o JSON. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"className")," | ",Object(l.b)("inlineCode",{parentName:"li"},"string"),": nombre de la clase. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"''"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"style")," | ",Object(l.b)("inlineCode",{parentName:"li"},"object"),": Un objeto que permite un estilo css personalizado. Por defecto, un objeto vac\xedo. Default: ",Object(l.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(l.b)("h2",{id:"ejemplos"},"Ejemplos"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<DataTable\n    showRemove\n    onClickRemove={( data ) => { console.log(data); }}\n    data={{ \n        firstName: [ 'Hans', 'Lotti', 'Fritz' ], \n        lastName: [ 'Bauer', 'M\xfcller', 'Schultz' ],\n        age: [ 37, 55, 62 ]\n    }}\n    style={{ width: 600 }}\n/>\n")))}s.isMDXComponent=!0},411:function(e,a,n){"use strict";n.d(a,"a",(function(){return u})),n.d(a,"b",(function(){return m}));var t=n(0),o=n.n(t);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),s=function(e){var a=o.a.useContext(b),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},u=function(e){var a=s(e.components);return o.a.createElement(b.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return o.a.createElement(o.a.Fragment,{},a)}},p=o.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,l=e.originalType,r=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=s(n),p=t,m=u["".concat(r,".").concat(p)]||u[p]||d[p]||l;return n?o.a.createElement(m,i(i({ref:a},b),{},{components:n})):o.a.createElement(m,i({ref:a},b))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=n.length,r=new Array(l);r[0]=p;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i.mdxType="string"==typeof e?e:t,r[1]=i;for(var b=2;b<l;b++)r[b]=n[b];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);