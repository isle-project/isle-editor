"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[90052],{603905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(202784);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=i.createContext({}),p=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=l,f=c["".concat(u,".").concat(m)]||c[m]||s[m]||r;return n?i.createElement(f,a(a({ref:t},d),{},{components:n})):i.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var p=2;p<r;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},664922:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return m},default:function(){return N},frontMatter:function(){return c},metadata:function(){return f},toc:function(){return g}});var i=n(603905),l=Object.defineProperty,r=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&d(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&d(e,n,t[n]);return e};const c={id:"plotly",title:"Plotly",sidebar_label:"Plotly"},m=void 0,f={unversionedId:"plotly",id:"plotly",title:"Plotly",description:"Plotly-Visualisierung.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/plotly.md",sourceDirName:".",slug:"/plotly",permalink:"/de/docs/plotly",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/plotly.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614613459,formattedLastUpdatedAt:"1.3.2021",frontMatter:{id:"plotly",title:"Plotly",sidebar_label:"Plotly"},sidebar:"docs",previous:{title:"Typewriter",permalink:"/de/docs/typewriter"},next:{title:"Bar Chart",permalink:"/de/docs/plots/barchart"}},k={},g=[{value:"Optionen",id:"optionen",level:2},{value:"Beispiele",id:"beispiele",level:2}],b={toc:g};function N(e){var t,n=e,{components:l}=n,d=((e,t)=>{var n={};for(var i in e)u.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&o)for(var i of o(e))t.indexOf(i)<0&&p.call(e,i)&&(n[i]=e[i]);return n})(n,["components"]);return(0,i.kt)("wrapper",(t=s(s({},b),d),r(t,a({components:l,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,"Plotly-Visualisierung."),(0,i.kt)("h2",s({},{id:"optionen"}),"Optionen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"data")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"array (required)"),": Daten-Array. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"draggable")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob der Plot verschiebbar sein soll. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"editable")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob Beschriftungen des erstellten Plots editierbar sind. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"id")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": Bauteilkennzeichen. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"layout")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": Plotly-Layoutobjekt. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"config")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": Konfigurationsm\xf6glichkeiten von Plotly (siehe: ",(0,i.kt)("a",s({parentName:"li"},{href:"https://plotly.com/javascript/configuration-options/"}),"https://plotly.com/javascript/configuration-options/"),"). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"legendButtons")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob Schaltfl\xe4chen zum \xc4ndern der Legende angezeigt werden sollen. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"meta")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": Plot-Meta-Informationen. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"revision")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": wenn angegeben, bewirkt, dass die Darstellung aktualisiert wird, wenn der Revisionswert inkrementiert wird. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": CSS-Inline-Stile. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onAfterPlot")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": Callback-Funktion, die jedes Mal aufgerufen wird, wenn ein Diagramm gezeichnet wird. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onAfterPlot() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onClick")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": Callback-Funktion, die aufgerufen wird, wenn ein beliebiges Element angeklickt wird. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onClick() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onInitialized")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": Callback wird aufgerufen, sobald der Plot initialisiert ist; wird mit figure (Objekt mit drei Schl\xfcsseln, die den Eingabe-Requisiten entsprechen: ",(0,i.kt)("inlineCode",{parentName:"li"},"data"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"layout")," und ",(0,i.kt)("inlineCode",{parentName:"li"},"frames"),") und dem DOM-Knoten ",(0,i.kt)("inlineCode",{parentName:"li"},"graphDiv")," aufgerufen. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onInitialized() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onLegendClick")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": Callback-Funktion, die aufgerufen wird, wenn der Legendeneintrag angeklickt wird. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onLegendClick() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onLegendDoubleClick")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": Callback-Funktion, die aufgerufen wird, wenn ein Legendenelement doppelt angeklickt wird. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onLegendDoubleClick() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onRelayout")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": Callback-Funktion, die aufgerufen wird, wenn Relayout ausgel\xf6st wird. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onRelayout() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onSelected")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),": Callback-Funktion, die aufgerufen wird, wenn Elemente ausgew\xe4hlt werden. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"onSelected() {}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"onShare")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),': Callback-Funktion, die beim Klicken auf die Schaltfl\xe4che "Teilen" aufgerufen wird. Default: ',(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"removeButtons")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob alle Schaltfl\xe4chen entfernt werden sollen (abgesehen von der Vollbild-Schaltfl\xe4che, falls aktiviert). Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"toggleFullscreen")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob die Darstellung des Plots im Vollbildmodus m\xf6glich sein soll. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,i.kt)("h2",s({},{id:"beispiele"}),"Beispiele"),(0,i.kt)("pre",null,(0,i.kt)("code",s({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Plotly\n    data={[{\n        values: [ 24, 7, 0.5 ],\n        labels: [ 'English', 'Spanish', 'Other' ],\n        type: 'pie'\n            }]}\n    layout={{ width: 300 }}\n/>\n")))}N.isMDXComponent=!0}}]);