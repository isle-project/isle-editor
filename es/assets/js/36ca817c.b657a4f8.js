(self.webpackChunk=self.webpackChunk||[]).push([[5027],{603905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(202784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},274625:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=t(722122),a=t(419756),i=(t(202784),t(603905)),o=["components"],l={id:"number-survey",title:"Number Survey",sidebar_label:"Number Survey"},u=void 0,s={unversionedId:"number-survey",id:"number-survey",isDocsHomePage:!1,title:"Number Survey",description:"Un componente de encuesta en el que el instructor puede recopilar datos num\xe9ricos de encuesta de los estudiantes en tiempo real.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/number-survey.md",sourceDirName:".",slug:"/number-survey",permalink:"/es/docs/number-survey",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/number-survey.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1626808020,formattedLastUpdatedAt:"20/7/2021",frontMatter:{id:"number-survey",title:"Number Survey",sidebar_label:"Number Survey"},sidebar:"docs",previous:{title:"Multiple Choice Survey",permalink:"/es/docs/multiple-choice-survey"},next:{title:"Proportions Survey",permalink:"/es/docs/proportions-survey"}},c=[{value:"Opciones",id:"opciones",children:[]},{value:"Ejemplos",id:"ejemplos",children:[]}],p={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Un componente de encuesta en el que el instructor puede recopilar datos num\xe9ricos de encuesta de los estudiantes en tiempo real."),(0,i.kt)("h2",{id:"opciones"},"Opciones"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"question")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),": la pregunta que se mostrar\xe1. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"allowMultipleAnswers")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": controla si el mismo usuario (o sesi\xf3n si es an\xf3nimo) puede enviar m\xfaltiples respuestas). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"anonymous")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),': Permite a los estudiantes presentar datos de forma an\xf3nima. Tenga en cuenta que si esta opci\xf3n se establece en "true", entonces los instructores no podr\xe1n ver la identificaci\xf3n del estudiante que se presenta. Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"step")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(number|string)"),': Un valor "cadena" o "num\xe9rico" que indica el paso de las flechas que se ven al pasar el cursor por encima del cuadro de entrada. Si es "cualquiera", el paso se establecer\xe1 en "1". Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"'any'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": Estilos en l\xednea CSS. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onSubmit")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": La funci\xf3n de devoluci\xf3n de llamada se invoca una vez que los estudiantes env\xedan una respuesta. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onSubmit() {}"),".")),(0,i.kt)("h2",{id:"ejemplos"},"Ejemplos"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<NumberSurvey\n    allowMultipleAnswers={true}\n    id="generic_mean_question"\n    question="Submit a number"\n    defaultValue={0}\n    step="any"\n/>\n')))}m.isMDXComponent=!0}}]);