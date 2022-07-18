"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[98406],{603905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return c}});var a=t(202784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),u=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(t),c=r,f=m["".concat(d,".").concat(c)]||m[c]||s[c]||i;return t?a.createElement(f,l(l({ref:n},p),{},{components:t})):a.createElement(f,l({ref:n},p))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},750679:function(e,n,t){t.r(n),t.d(n,{assets:function(){return k},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return b}});var a=t(603905),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,s=(e,n)=>{for(var t in n||(n={}))d.call(n,t)&&p(e,t,n[t]);if(o)for(var t of o(n))u.call(n,t)&&p(e,t,n[t]);return e};const m={id:"data-table",title:"Data Table",sidebar_label:"Data Table"},c=void 0,f={unversionedId:"data-table",id:"data-table",title:"Data Table",description:"Eine Komponente, die Daten in einer tabellarischen Darstellung wiedergibt. Baut auf react-table auf.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/data-table.md",sourceDirName:".",slug:"/data-table",permalink:"/de/docs/data-table",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/data-table.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1650476171,formattedLastUpdatedAt:"20. Apr. 2022",frontMatter:{id:"data-table",title:"Data Table",sidebar_label:"Data Table"},sidebar:"docs",previous:{title:"Data Explorer",permalink:"/de/docs/data-explorer"},next:{title:"Feedback Buttons",permalink:"/de/docs/feedback"}},k={},b=[{value:"Optionen",id:"optionen",level:2},{value:"Beispiele",id:"beispiele",level:2}],N={toc:b};function g(e){var n,t=e,{components:r}=t,p=((e,n)=>{var t={};for(var a in e)d.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&o)for(var a of o(e))n.indexOf(a)<0&&u.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(n=s(s({},N),p),i(n,l({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Eine Komponente, die Daten in einer tabellarischen Darstellung wiedergibt. Baut auf ",(0,a.kt)("a",s({parentName:"p"},{href:"https://react-table.js.org/"}),"react-table")," auf."),(0,a.kt)("h2",s({},{id:"optionen"}),"Optionen"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"data")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(array|object) (required)"),": Ein Datenobjekt oder Array, das angezeigt werden soll. Wenn es sich um ein Objekt handelt, entsprechen die Schl\xfcssel den Spaltenwerten, w\xe4hrend ein Array ein Array von Objekten mit einem benannten Feld erwartet, das jeder Spalte entspricht. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"dataInfo")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": Objekt mit dem String-Array ",(0,a.kt)("inlineCode",{parentName:"li"},"info"),", das den Datensatz beschreibt, dem ",(0,a.kt)("inlineCode",{parentName:"li"},"Namen")," des Datensatzes, einem ",(0,a.kt)("inlineCode",{parentName:"li"},"Objekt")," mit ",(0,a.kt)("inlineCode",{parentName:"li"},"Variablen"),", dessen Schl\xfcssel den Variablennamen und dessen Werte den Variablenbeschreibungen entsprechen, und einem booleschen Wert ",(0,a.kt)("inlineCode",{parentName:"li"},"showOnStartup"),", der steuert, ob das Info-Modal beim Starten angezeigt werden soll. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{\n  'info': [],\n  'name': '',\n  'variables': null,\n  'showOnStartup': false\n}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"deletable")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob Spalten, f\xfcr die keine ",(0,a.kt)("inlineCode",{parentName:"li"},"Info")," existiert, eine Schaltfl\xe4che haben, die beim Anklicken die Callback-Funktion ",(0,a.kt)("inlineCode",{parentName:"li"},"onColumnDelete")," aufruft. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"undeletableVars")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<string>"),": Array mit Variablennamen von Spalten, die nicht gel\xf6scht werden d\xfcrfen. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"filterable")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob Spalten filterbar sind. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"editable")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),": Array von Namen f\xfcr Spalten, die editierbar sein sollen. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"getTrProps")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": Callback-Funktion, die f\xfcr jede Zeile ausgef\xfchrt wird, um ihr Styling anzupassen (\xfcbergebener Tabellenstatus, Zeileninfo,\nSpalte, und die Tabelleninstanz). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onColumnDrag")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": Funktion, die aufgerufen wird, wenn eine Spalte an eine andere Position gezogen wurde. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onColumnDrag() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onColumnDelete")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": Funktion, die mit dem Namen einer Spalte aufgerufen wird, wenn die entsprechende L\xf6schschaltfl\xe4che f\xfcr eine Spalte angeklickt wird. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onColumnDelete() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onColumnNameChange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": Funktion, die aufgerufen wird, wenn eine Spalte umbenannt wurde (Aufruf mit dem alten Namen als erstes und dem neuen Namen als zweites Argument). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onColumnNameChange() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onClickRemove")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": Funktion, die eine Aktion f\xfcr Zeilen angibt, die aus den Daten entfernt werden (Standardwert ist eine leere Funktion). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onClickRemove() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onEdit")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": Funktion, die mit dem aktualisierten Datensatz aufgerufen wird, nachdem der Wert einer Zelle durch den Benutzer ge\xe4ndert wurde (gilt nur, wenn die Tabelle ",(0,a.kt)("inlineCode",{parentName:"li"},"editierbar")," ist). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onEdit() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onTutorialCompletion")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": Funktion, die aufgerufen wird, wenn der Benutzer das Datentabellen-Tutorial abgeschlossen hat. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onTutorialCompletion() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"filters")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),": Reihe von Filtern. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onFilteredChange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": Funktion, die mit den aktuellen Filtern aufgerufen wird, nachdem die Daten vom Benutzer gefiltert wurden. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onFilteredChange() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"showRemove")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": gibt an, ob Kontrollk\xe4stchen f\xfcr zu entfernende Zeilen angezeigt werden sollen. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"showIdColumn")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob eine ID-Spalte angezeigt werden soll. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"disableDownload")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": ob die Schaltfl\xe4che zum Herunterladen der Daten als CSV- oder JSON-Datei ausgeblendet werden soll. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"className")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": Klassenname. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": Ein Objekt, das ein benutzerdefiniertes CSS-Styling erm\xf6glicht. Standardm\xe4\xdfig wird ein leeres Objekt verwendet. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,a.kt)("h2",s({},{id:"beispiele"}),"Beispiele"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<DataTable\n    showRemove\n    onClickRemove={( data ) => { console.log(data); }}\n    data={{ \n        firstName: [ 'Hans', 'Lotti', 'Fritz' ], \n        lastName: [ 'Bauer', 'M\xfcller', 'Schultz' ],\n        age: [ 37, 55, 62 ]\n    }}\n    style={{ width: 600 }}\n/>\n")))}g.isMDXComponent=!0}}]);