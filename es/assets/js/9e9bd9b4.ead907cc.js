"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5527],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},968669:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var a=n(487462),r=n(263366),o=(n(202784),n(603905)),i=["components"],l={id:"beacon-tooltip",title:"Beacon Tooltip",sidebar_label:"Beacon Tooltip"},c=void 0,p={unversionedId:"beacon-tooltip",id:"beacon-tooltip",title:"Beacon Tooltip",description:'Componente que coloca un faro en la lecci\xf3n, ya sea independientemente o unido a un "objetivo". Al colocar la baliza en el aire o al hacer clic en ella, se muestra un "tooltip".',source:"@site/i18n/es/docusaurus-plugin-content-docs/current/beacon-tooltip.md",sourceDirName:".",slug:"/beacon-tooltip",permalink:"/es/docs/beacon-tooltip",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/beacon-tooltip.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621312042,formattedLastUpdatedAt:"18/5/2021",frontMatter:{id:"beacon-tooltip",title:"Beacon Tooltip",sidebar_label:"Beacon Tooltip"},sidebar:"docs",previous:{title:"Summary Statistics",permalink:"/es/docs/summary-statistics"},next:{title:"Clock",permalink:"/es/docs/clock"}},s=[{value:"Opciones",id:"opciones",children:[],level:2},{value:"Ejemplos",id:"ejemplos",children:[],level:2}],u={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Componente que coloca un faro en la lecci\xf3n, ya sea independientemente o unido a un "objetivo". Al colocar la baliza en el aire o al hacer clic en ella, se muestra un "tooltip".'),(0,o.kt)("h2",{id:"opciones"},"Opciones"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"title")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(string|node)"),": El t\xedtulo se mostrar\xe1 en la parte superior de la informaci\xf3n de la herramienta. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"content")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(string|node)"),": contenido de la informaci\xf3n sobre herramientas. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"'"),"content",(0,o.kt)("inlineCode",{parentName:"li"}," comes here...'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"event")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),': si est\xe1 configurado como "clic", la punta de la herramienta se conmuta al hacer clic en la baliza; si est\xe1 configurado como "salto", la punta de la herramienta se activa al pasar el cursor por encima de ella. Default: ',(0,o.kt)("inlineCode",{parentName:"li"},"'click'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"placement")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),': la colocaci\xf3n de la punta de la herramienta relativa a "target" (ya sea "top", "top-start", "top-end", "bottom", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end", "right-end", "auto", o "center"). Default: ',(0,o.kt)("inlineCode",{parentName:"li"},"'left'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"target")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),": selector de clase o de ID del elemento al que se adjunta la punta de la herramienta. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"offset")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),': la distancia entre la punta de la herramienta y el "objetivo" en p\xedxeles. Default: ',(0,o.kt)("inlineCode",{parentName:"li"},"15"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"onChange")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"function"),': llamada de retorno invocada en el cambio de estado de la punta de la herramienta. Recibe dos argumentos: la "acci\xf3n" ("abrir" o "cerrar") y las "utilidades" pasadas. Default: ',(0,o.kt)("inlineCode",{parentName:"li"},"onChange() {}"),".")),(0,o.kt)("h2",{id:"ejemplos"},"Ejemplos"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BeaconTooltip\n    content="Body of the tooltip..."\n    title="Title comes here..."\n    event="hover"\n    placement="right"\n/>\n')))}d.isMDXComponent=!0}}]);