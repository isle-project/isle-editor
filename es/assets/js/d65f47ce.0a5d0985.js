"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[924],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69049:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(487462),a=n(263366),o=(n(202784),n(603905)),i=["components"],l={id:"free-text-survey",title:"Free Text Survey",sidebar_label:"Free Text Survey"},s=void 0,u={unversionedId:"free-text-survey",id:"free-text-survey",title:"Free Text Survey",description:"Un componente de ISLE para preguntas donde las respuestas de los estudiantes deben ser suministradas en forma de texto libre. Lo que diferencia este componente de la Pregunta de Texto Libre es el hecho de que los datos agregados del grupo se muestran a todos en tiempo real.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/free-text-survey.md",sourceDirName:".",slug:"/free-text-survey",permalink:"/es/docs/free-text-survey",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/free-text-survey.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21/2/2021",frontMatter:{id:"free-text-survey",title:"Free Text Survey",sidebar_label:"Free Text Survey"},sidebar:"docs",previous:{title:"Select Question Matrix",permalink:"/es/docs/questions/select-question-matrix"},next:{title:"Multiple Choice Survey",permalink:"/es/docs/multiple-choice-survey"}},p=[{value:"Opciones",id:"opciones",children:[],level:2},{value:"Ejemplos",id:"ejemplos",children:[],level:2}],c={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Un componente de ISLE para preguntas donde las respuestas de los estudiantes deben ser suministradas en forma de texto libre. Lo que diferencia este componente de la ",(0,o.kt)("strong",{parentName:"p"},"Pregunta de Texto Libre")," es el hecho de que los datos agregados del grupo se muestran a todos en tiempo real."),(0,o.kt)("h2",{id:"opciones"},"Opciones"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"question")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(string|node)"),": la pregunta que hay que hacer a los estudiantes. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"allowMultipleAnswers")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": controla si se desea permitir que los estudiantes respondan a la encuesta varias veces. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"anonymous")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": controla si las respuestas de los estudiantes se recogen de forma an\xf3nima. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"rows")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),": n\xfamero de filas de texto en el campo de entrada. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"4"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"className")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": nombre de la clase. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"style")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object"),": Estilos en l\xednea CSS. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"function"),": La funci\xf3n de devoluci\xf3n de llamada se llama cuando se presenta una respuesta. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,o.kt)("h2",{id:"ejemplos"},"Ejemplos"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<FreeTextSurvey \n    question="Where are you from?"\n    anonymous\n/>\n')))}d.isMDXComponent=!0}}]);