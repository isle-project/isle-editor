"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[41985],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var i=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),u=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||r;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},843863:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return m},default:function(){return N},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return v}});var i=n(603905),a=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&c(e,n,t[n]);return e};const d={id:"tex",title:"LaTeX Equations",sidebar_label:"LaTeX Equations"},m=void 0,f={unversionedId:"tex",id:"tex",title:"LaTeX Equations",description:"TeX \xe8 un elemento ISLE che pu\xf2 essere usato per visualizzare le equazioni LaTeX.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/tex.md",sourceDirName:".",slug:"/tex",permalink:"/it/docs/tex",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tex.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1625677901,formattedLastUpdatedAt:"7 lug 2021",frontMatter:{id:"tex",title:"LaTeX Equations",sidebar_label:"LaTeX Equations"},sidebar:"docs",previous:{title:"Link",permalink:"/it/docs/link"},next:{title:"blockquote",permalink:"/it/docs/html/blockquote"}},k={},v=[{value:"Opzioni",id:"opzioni",level:2},{value:"Esempi",id:"esempi",level:2}],b={toc:v};function N(e){var t,n=e,{components:a}=n,c=((e,t)=>{var n={};for(var i in e)p.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&l)for(var i of l(e))t.indexOf(i)<0&&u.call(e,i)&&(n[i]=e[i]);return n})(n,["components"]);return(0,i.kt)("wrapper",(t=s(s({},b),c),r(t,o({components:a,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"TeX")," \xe8 un elemento ISLE che pu\xf2 essere usato per visualizzare le equazioni LaTeX."),(0,i.kt)("h2",s({},{id:"opzioni"}),"Opzioni"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"raw")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|number) (required)"),': La letterale "corda" LaTeX da rendere. Accetta anche i "numeri". Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"displayMode")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"booleano")," che indica se visualizzare l'equazione in linea o in modalit\xe0 di visualizzazione. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"numbered")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": controlla se visualizzare un numero di equazione per le equazioni del modo di visualizzazione. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"oggetto")," con coppie chiave-valore CSS da applicare al contenitore dell'equazione. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"tag")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": Caratteri personalizzati visualizzati per le equazioni di visualizzazione sul lato destro. Il valore predefinito \xe8 il numero dell'equazione all'interno della lezione. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"elems")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),': "oggetto" con "tasti" che indicano i caratteri LaTeX e i loro valori corrispondenti sono "oggetti" di configurazione per renderli interattivi. L\'impostazione di un\'opzione ',(0,i.kt)("inlineCode",{parentName:"li"},"tooltip")," mostrer\xe0 un tooltip quando si passa sopra i caratteri LaTeX. Impostando una propriet\xe0 ",(0,i.kt)("inlineCode",{parentName:"li"},"variabile")," verr\xe0 visualizzato un cursore di input per cambiare la rispettiva variabile di stato; in questo caso, sono supportate le propriet\xe0 aggiuntive ",(0,i.kt)("inlineCode",{parentName:"li"},"legend"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"min"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"max")," e ",(0,i.kt)("inlineCode",{parentName:"li"},"step"),". Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"popoverPlacement")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": posizione popover per gli ",(0,i.kt)("inlineCode",{parentName:"li"},"elems")," specificati (sia ",(0,i.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"right"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"bottom"),", o ",(0,i.kt)("inlineCode",{parentName:"li"},"left"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onPopover")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": richiamata ",(0,i.kt)("inlineCode",{parentName:"li"},"funzione")," quando un popover di controllo viene attivato o disattivato; riceve lo stato di visualizzazione come booleano come unico argomento. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onPopover() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onClick")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": richiamata ",(0,i.kt)("inlineCode",{parentName:"li"},"funzione")," invocata ogni volta che un utente clicca sull'equazione. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,i.kt)("h2",s({},{id:"esempi"}),"Esempi"),(0,i.kt)("pre",null,(0,i.kt)("code",s({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<TeX\n    raw="2 + 3 = 5"\n    displayMode={true}\n/>\n')))}N.isMDXComponent=!0}}]);