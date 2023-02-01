"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81538],{603905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var a=t(202784);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=a.createContext({}),p=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(u.Provider,{value:n},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||l;return t?a.createElement(f,o(o({ref:n},c),{},{components:t})):a.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=m;var r={};for(var u in n)hasOwnProperty.call(n,u)&&(r[u]=n[u]);r.originalType=e,r[d]="string"==typeof e?e:i,o[1]=r;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},819263:function(e,n,t){t.r(n),t.d(n,{assets:function(){return k},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return s},metadata:function(){return f},toc:function(){return N}});var a=t(603905),i=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))u.call(n,t)&&c(e,t,n[t]);if(r)for(var t of r(n))p.call(n,t)&&c(e,t,n[t]);return e};const s={id:"data-table",title:"Data Table",sidebar_label:"Data Table"},m=void 0,f={unversionedId:"data-table",id:"data-table",title:"Data Table",description:"Un componente che rende i dati di rendering dei componenti in una visualizzazione tabellare. Costruito sopra react-table.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/data-table.md",sourceDirName:".",slug:"/data-table",permalink:"/it/docs/data-table",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/data-table.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1650476171,formattedLastUpdatedAt:"20 apr 2022",frontMatter:{id:"data-table",title:"Data Table",sidebar_label:"Data Table"},sidebar:"docs",previous:{title:"Data Explorer",permalink:"/it/docs/data-explorer"},next:{title:"Feedback Buttons",permalink:"/it/docs/feedback"}},k={},N=[{value:"Opzioni",id:"opzioni",level:2},{value:"Esempi",id:"esempi",level:2}],b={toc:N};function g(e){var n,t=e,{components:i}=t,c=((e,n)=>{var t={};for(var a in e)u.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&r)for(var a of r(e))n.indexOf(a)<0&&p.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(n=d(d({},b),c),l(n,o({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Un componente che rende i dati di rendering dei componenti in una visualizzazione tabellare. Costruito sopra ",(0,a.kt)("a",d({parentName:"p"},{href:"https://react-table.js.org/"}),"react-table"),"."),(0,a.kt)("h2",d({},{id:"opzioni"}),"Opzioni"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"data")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(array|object) (required)"),": Un oggetto dati o un array da visualizzare. Se si tratta di un oggetto, le chiavi corrispondono ai valori delle colonne, mentre un array si aspetter\xe0 un array di oggetti con un campo denominato corrispondente ad ogni colonna. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"dataInfo")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": con un array di stringhe ",(0,a.kt)("inlineCode",{parentName:"li"},"info")," che descrive il set di dati, il ",(0,a.kt)("inlineCode",{parentName:"li"},"nome")," del set di dati, un ",(0,a.kt)("inlineCode",{parentName:"li"},"oggetto")," di ",(0,a.kt)("inlineCode",{parentName:"li"},"variabili")," con chiavi corrispondenti ai nomi delle variabili e valori alle descrizioni delle variabili, un booleano ",(0,a.kt)("inlineCode",{parentName:"li"},"showOnStartup")," che controlla se visualizzare il modale informativo all'avvio. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{\n  'info': [],\n  'name': '',\n  'variables': null,\n  'showOnStartup': false\n}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"deletable")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": controlla se le colonne per le quali non esiste un ",(0,a.kt)("inlineCode",{parentName:"li"},"info")," hanno un pulsante che, se cliccato, richiama la funzione di richiamo ",(0,a.kt)("inlineCode",{parentName:"li"},"onColumnDelete"),". Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"undeletableVars")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<string>"),": array di nomi di variabili di colonne che non possono essere cancellati. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"filterable")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": controlla se le colonne sono filtrabili. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"editable")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),": array di nomi per le colonne che saranno modificabili. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"getTrProps")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": funzione di callback eseguita per ogni riga per personalizzare il suo stile (stato della tabella passato, informazioni sulla riga,\ncolonna, e l'istanza della tabella). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onColumnDrag")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": funzione invocata quando una colonna \xe8 stata trascinata in una posizione diversa. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onColumnDrag() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onColumnDelete")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": funzione invocata con il nome di una colonna quando si clicca sul rispettivo pulsante di cancellazione di una colonna. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onColumnDelete() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onColumnNameChange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": funzione invocata quando una colonna \xe8 stata rinominata (chiamata con il vecchio nome come primo e il nuovo nome come secondo argomento). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onColumnNameChange() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onClickRemove")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": funzione che specifica un'azione da eseguire per le righe rimosse dai dati (default a una funzione vuota). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onClickRemove() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onEdit")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),': funzione invocata con il set di dati aggiornato dopo che il valore di una cella \xe8 stato modificato dall\'utente (si applica solo quando la tabella \xe8 "modificabile"). Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"onEdit() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onTutorialCompletion")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": funzione invocata quando l'utente ha completato il tutorial della tabella dati. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onTutorialCompletion() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"filters")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),": array di filtri. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onFilteredChange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": funzione invocata con i filtri attuali dopo che i dati sono stati filtrati dall'utente. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onFilteredChange() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"showRemove")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": indica se visualizzare le caselle di controllo per le righe da rimuovere. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"showIdColumn")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": controlla se mostrare una colonna ID. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"disableDownload")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": se nascondere il pulsante per scaricare i dati come file CSV o JSON. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"className")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": nome della classe. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": Un oggetto che consente uno stile css personalizzato. Impostazioni predefinite per un oggetto vuoto. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,a.kt)("h2",d({},{id:"esempi"}),"Esempi"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<DataTable\n    showRemove\n    onClickRemove={( data ) => { console.log(data); }}\n    data={{ \n        firstName: [ 'Hans', 'Lotti', 'Fritz' ], \n        lastName: [ 'Bauer', 'M\xfcller', 'Schultz' ],\n        age: [ 37, 55, 62 ]\n    }}\n    style={{ width: 600 }}\n/>\n")))}g.isMDXComponent=!0}}]);