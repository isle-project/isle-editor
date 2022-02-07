"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5653],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(202784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return n?i.createElement(f,r(r({ref:t},u),{},{components:n})):i.createElement(f,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},626267:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var i=n(487462),o=n(263366),a=(n(202784),n(603905)),r=["components"],l={id:"beacon-tooltip",title:"Beacon Tooltip",sidebar_label:"Beacon Tooltip"},p=void 0,c={unversionedId:"beacon-tooltip",id:"beacon-tooltip",title:"Beacon Tooltip",description:"Componente che posiziona un faro nella lezione, indipendentemente o collegato ad un target. Facendo hovering o cliccando sul beacon, viene visualizzato un tooltip.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/beacon-tooltip.md",sourceDirName:".",slug:"/beacon-tooltip",permalink:"/it/docs/beacon-tooltip",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/beacon-tooltip.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21/2/2021",frontMatter:{id:"beacon-tooltip",title:"Beacon Tooltip",sidebar_label:"Beacon Tooltip"},sidebar:"docs",previous:{title:"Summary Statistics",permalink:"/it/docs/summary-statistics"},next:{title:"Clock",permalink:"/it/docs/clock"}},u=[{value:"Opzioni",id:"opzioni",children:[],level:2},{value:"Esempi",id:"esempi",children:[],level:2}],s={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Componente che posiziona un faro nella lezione, indipendentemente o collegato ad un ",(0,a.kt)("inlineCode",{parentName:"p"},"target"),". Facendo hovering o cliccando sul beacon, viene visualizzato un tooltip."),(0,a.kt)("h2",{id:"opzioni"},"Opzioni"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"title")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|node)"),": titolo da visualizzare nella parte superiore del tooltip. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"content")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|node)"),": contenuto del tooltip. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'"),"content",(0,a.kt)("inlineCode",{parentName:"li"}," comes here...'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"event")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": se impostato su ",(0,a.kt)("inlineCode",{parentName:"li"},"click"),", il tooltip viene attivato quando si clicca sul beacon; se impostato su ",(0,a.kt)("inlineCode",{parentName:"li"},"hover"),", il tooltip viene attivato tramite hovering. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'click'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"placement")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),': posizionamento del tooltip relativo all\'"obiettivo" (sia ',(0,a.kt)("inlineCode",{parentName:"li"},"top', "),"top-start', ",(0,a.kt)("inlineCode",{parentName:"li"},"top-end', "),"top-end', ",(0,a.kt)("inlineCode",{parentName:"li"},"bottom', "),"bottom-end', ",(0,a.kt)("inlineCode",{parentName:"li"},"left', "),"left-start', ",(0,a.kt)("inlineCode",{parentName:"li"},"left-end', "),"right', ",(0,a.kt)("inlineCode",{parentName:"li"},"right-start', "),"right-end', ",(0,a.kt)("inlineCode",{parentName:"li"},"auto', o "),"center'). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'left'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"target")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": selettore di classe o ID per l'elemento a cui collegare il tooltip. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"offset")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": distanza tra il tooltip e il ",(0,a.kt)("inlineCode",{parentName:"li"},"target")," in pixel. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"15"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onChange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": richiamata al cambio di stato del tooltip. Riceve due argomenti: la ",(0,a.kt)("inlineCode",{parentName:"li"},"azione")," (",(0,a.kt)("inlineCode",{parentName:"li"},"aperta")," o ",(0,a.kt)("inlineCode",{parentName:"li"},"chiusa"),") e il ",(0,a.kt)("inlineCode",{parentName:"li"},"props")," passato. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onChange() {}"),".")),(0,a.kt)("h2",{id:"esempi"},"Esempi"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BeaconTooltip\n    content="Body of the tooltip..."\n    title="Title comes here..."\n    event="hover"\n    placement="right"\n/>\n')))}d.isMDXComponent=!0}}]);