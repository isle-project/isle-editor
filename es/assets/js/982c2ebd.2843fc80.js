"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4609],{603905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(202784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},278074:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return d},default:function(){return m}});var r=t(487462),a=t(263366),o=(t(202784),t(603905)),i=["components"],l={id:"proportions-survey",title:"Proportions Survey",sidebar_label:"Proportions Survey"},s=void 0,p={unversionedId:"proportions-survey",id:"proportions-survey",title:"Proportions Survey",description:"Componente que permite a un grupo de personas votar sobre el peso y la importancia de determinadas opciones.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/proportions-survey.md",sourceDirName:".",slug:"/proportions-survey",permalink:"/es/docs/proportions-survey",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/proportions-survey.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21/2/2021",frontMatter:{id:"proportions-survey",title:"Proportions Survey",sidebar_label:"Proportions Survey"},sidebar:"docs",previous:{title:"Number Survey",permalink:"/es/docs/number-survey"},next:{title:"R Help",permalink:"/es/docs/r/r-help"}},u={},d=[{value:"Opciones",id:"opciones",level:2},{value:"Ejemplos",id:"ejemplos",level:2}],c={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Componente que permite a un grupo de personas votar sobre el peso y la importancia de determinadas opciones."),(0,o.kt)("h2",{id:"opciones"},"Opciones"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"allowMultipleAnswers")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": controla si se desea permitir que los estudiantes respondan a la encuesta varias veces. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"anonymous")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": controla si las respuestas de los estudiantes son an\xf3nimas. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"colors")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"array"),": una gama de colores para los componentes del gr\xe1fico circular. Si no se define, se utilizar\xe1 una escala de colores personalizada. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"disabled")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": controla si el estudio est\xe1 desactivado. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"group")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": encabezado de la pantalla de grupo. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"'group results'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"groupHeight")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),": proporciones altura de entrada para la visualizaci\xf3n del grupo (en px). Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"100"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"legends")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"array"),": etiquetas de leyenda que describen las opciones a ser pesadas. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"margin")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": margen de entrada de la proporci\xf3n (en px). Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"'40px'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"function"),": La funci\xf3n de devoluci\xf3n de llamada se invoca una vez que los estudiantes env\xedan una respuesta. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"personalHeight")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),": proporciones altura de entrada para cada estudiante (en px). Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"200"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"precision")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),": la precisi\xf3n de los valores de proporci\xf3n mostrados. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"2"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"question")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(string|node)"),": la pregunta que se mostrar\xe1. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"step")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),": el paso de las flechas que se ven al pasar el cursor por encima del cuadro de entrada. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"0.25"),".")),(0,o.kt)("h2",{id:"ejemplos"},"Ejemplos"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ProportionsSurvey \n    id="Survey"\n    question="Decide what is important"\n    group="Group decision"\n    nElements={3}\n    colors = {[ "red", "blue", "gold" ]}\n    personalHeight={300}\n    groupHeight={200}\n    margin="80px"\n    legends={[ "bitcoin", "old", "diamonds" ]}\n/>\n')))}m.isMDXComponent=!0}}]);