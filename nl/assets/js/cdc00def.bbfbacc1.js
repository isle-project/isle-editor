"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[86540],{603905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(n),s=a,k=c["".concat(p,".").concat(s)]||c[s]||m[s]||l;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},470722:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return m},metadata:function(){return k},toc:function(){return g}});var r=n(603905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&d(e,n,t[n]);return e};const m={id:"plotly",title:"Plotly",sidebar_label:"Plotly"},s=void 0,k={unversionedId:"plotly",id:"plotly",title:"Plotly",description:"Korte visualisatie.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/plotly.md",sourceDirName:".",slug:"/plotly",permalink:"/nl/docs/plotly",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plotly.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621312042,formattedLastUpdatedAt:"18 mei 2021",frontMatter:{id:"plotly",title:"Plotly",sidebar_label:"Plotly"},sidebar:"docs",previous:{title:"Typewriter",permalink:"/nl/docs/typewriter"},next:{title:"Bar Chart",permalink:"/nl/docs/plots/barchart"}},f={},g=[{value:"Opties",id:"opties",level:2},{value:"Voorbeelden",id:"voorbeelden",level:2}],N={toc:g};function b(e){var t,n=e,{components:a}=n,d=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},N),d),l(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Korte visualisatie."),(0,r.kt)("h2",c({},{id:"opties"}),"Opties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array (required)"),": gegevensreeks. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"draggable")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controleert of het perceel versleepbaar moet zijn. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"editable")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": controleert of de labels van het aangemaakte perceel bewerkbaar zijn. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"id")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": componentenidentificatiecode. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"layout")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": Plattelandshuisvestingsobject. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"config")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": Plotly configuratieopties (zie: ",(0,r.kt)("a",c({parentName:"li"},{href:"https://plotly.com/javascript/configuration-options/"}),"https://plotly.com/javascript/configuration-options/"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legendButtons")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": bepaalt of de knoppen voor het wijzigen van de legenda moeten worden weergegeven. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"meta")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": plotmeta-informatie. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"revision")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": wanneer deze wordt verstrekt, zorgt ervoor dat het perceel wordt bijgewerkt wanneer de revisiewaarde wordt verhoogd. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline-stijlen. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onAfterPlot")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": terugbelfunctie die wordt aangeroepen telkens wanneer een grafiek wordt uitgezet. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onAfterPlot() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onClick")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": terugbelfunctie die wordt aangeroepen wanneer op een element wordt geklikt. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onClick() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onInitialized")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": callback aangeroepen zodra de plot is ge\xefnitialiseerd; aangeroepen met figuur (object met drie toetsen die overeenkomen met de input props: ",(0,r.kt)("inlineCode",{parentName:"li"},"data"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"layout"),", en ",(0,r.kt)("inlineCode",{parentName:"li"},"frames"),") en het DOM-knooppunt ",(0,r.kt)("inlineCode",{parentName:"li"},"graphDiv"),". Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onInitialized() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onLegendClick")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": terugbelfunctie die wordt aangeroepen wanneer op het legenda-item wordt geklikt. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onLegendClick() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onLegendDoubleClick")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": terugbelfunctie ingeroepen bij dubbelklikken op het legenda-item. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onLegendDoubleClick() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onRelayout")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": terugbelfunctie die wordt aangeroepen wanneer het relais wordt geactiveerd. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onRelayout() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onSelected")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": terugbelfunctie die wordt aangeroepen wanneer elementen worden geselecteerd. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onSelected() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onShare")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),': terugbelfunctie ingeroepen bij het klikken op de "Share" knop. Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"removeButtons")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": regelt of alle knoppen moeten worden verwijderd (behalve de knop met volledig scherm als die is ingeschakeld). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"toggleFullscreen")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": bepaalt of het mogelijk is de plot op volledig scherm weer te geven. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,r.kt)("h2",c({},{id:"voorbeelden"}),"Voorbeelden"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Plotly\n    data={[{\n        values: [ 24, 7, 0.5 ],\n        labels: [ 'English', 'Spanish', 'Other' ],\n        type: 'pie'\n            }]}\n    layout={{ width: 300 }}\n/>\n")))}b.isMDXComponent=!0}}]);