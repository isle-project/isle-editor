"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51577],{603905:function(e,t,a){a.d(t,{Zo:function(){return k},kt:function(){return d}});var n=a(202784);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var m=n.createContext({}),p=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},k=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),u=p(a),d=l,c=u["".concat(m,".").concat(d)]||u[d]||s[d]||r;return a?n.createElement(c,o(o({ref:t},k),{},{components:a})):n.createElement(c,o({ref:t},k))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=u;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},349006:function(e,t,a){a.r(t),a.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return g}});var n=a(603905),l=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,k=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&k(e,a,t[a]);if(i)for(var a of i(t))p.call(t,a)&&k(e,a,t[a]);return e};const u={id:"data-table",title:"Data Table",sidebar_label:"Data Table"},d=void 0,c={unversionedId:"data-table",id:"data-table",title:"Data Table",description:"Az adatokat t\xe1bl\xe1zatos form\xe1ban megjelen\xedt\u0151 komponens. A react-table tetej\xe9re \xe9p\xfcl.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/data-table.md",sourceDirName:".",slug:"/data-table",permalink:"/hu/docs/data-table",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/data-table.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1650476171,formattedLastUpdatedAt:"2022. \xe1pr. 20.",frontMatter:{id:"data-table",title:"Data Table",sidebar_label:"Data Table"},sidebar:"docs",previous:{title:"Data Explorer",permalink:"/hu/docs/data-explorer"},next:{title:"Feedback Buttons",permalink:"/hu/docs/feedback"}},f={},g=[{value:"Opci\xf3k",id:"opci\xf3k",level:2},{value:"P\xe9ld\xe1k",id:"p\xe9ld\xe1k",level:2}],b={toc:g};function y(e){var t,a=e,{components:l}=a,k=((e,t)=>{var a={};for(var n in e)m.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=s(s({},b),k),r(t,o({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Az adatokat t\xe1bl\xe1zatos form\xe1ban megjelen\xedt\u0151 komponens. A ",(0,n.kt)("a",s({parentName:"p"},{href:"https://react-table.js.org/"}),"react-table")," tetej\xe9re \xe9p\xfcl."),(0,n.kt)("h2",s({},{id:"opci\xf3k"}),"Opci\xf3k"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"data")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(array|object) (required)"),": A megtekintend\u0151 adatobjektum vagy t\xf6mb. Ha objektumr\xf3l van sz\xf3, akkor a kulcsok az oszlop\xe9rt\xe9keknek felelnek meg, m\xedg egy t\xf6mb objektumok t\xf6mbj\xe9t v\xe1rja el, minden oszlopnak megfelel\u0151 n\xe9vvel ell\xe1tott mez\u0151vel.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"dataInfo")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": objektum az adathalmazt le\xedr\xf3 ",(0,n.kt)("inlineCode",{parentName:"li"},"info")," string t\xf6mb\xf6t, az adathalmaz ",(0,n.kt)("inlineCode",{parentName:"li"},"nev\xe9t"),", egy ",(0,n.kt)("inlineCode",{parentName:"li"},"v\xe1ltoz\xf3k")," objektumot, amelynek kulcsai a v\xe1ltoz\xf3k nev\xe9nek, \xe9rt\xe9kei pedig a v\xe1ltoz\xf3k le\xedr\xe1s\xe1nak felelnek meg, \xe9s egy ",(0,n.kt)("inlineCode",{parentName:"li"},"showOnStartup")," booleant, amely szab\xe1lyozza, hogy megjelenjen-e az inform\xe1ci\xf3s ablak ind\xedt\xe1skor.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"{\n  'info': [],\n  'name': '',\n  'variables': null,\n  'showOnStartup': false\n}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deletable")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy az olyan oszlopok, amelyekhez nem l\xe9tezik ",(0,n.kt)("inlineCode",{parentName:"li"},"info"),", rendelkezzenek-e olyan gombbal, amelyre kattintva az ",(0,n.kt)("inlineCode",{parentName:"li"},"onColumnDelete")," callback f\xfcggv\xe9nyt h\xedvja meg.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"undeletableVars")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array<string>"),": a nem t\xf6r\xf6lhet\u0151 oszlopok v\xe1ltoz\xf3inak neveit tartalmaz\xf3 t\xf6mb. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"filterable")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy az oszlopok sz\u0171rhet\u0151k legyenek-e. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"editable")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array"),": a szerkeszthet\u0151 oszlopok neveinek t\xf6mbje. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"getTrProps")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": callback f\xfcggv\xe9ny, amely minden egyes sorhoz v\xe9grehajt\xf3dik, hogy testre szabja annak st\xedlus\xe1t (\xe1tadott t\xe1bla\xe1llapot, sorinform\xe1ci\xf3,\noszlop \xe9s a t\xe1bl\xe1zat p\xe9ld\xe1nya). Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onColumnDrag")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": f\xfcggv\xe9ny, amely akkor h\xedv\xf3dik meg, ha egy oszlopot m\xe1s poz\xedci\xf3ba h\xfaztak \xe1t. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onColumnDrag() {}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onColumnDelete")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": f\xfcggv\xe9ny, amely az oszlop nev\xe9vel h\xedv\xf3dik meg, amikor az oszlophoz tartoz\xf3 t\xf6rl\xe9s gombra kattintanak.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onColumnDelete() {}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onColumnNameChange")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": f\xfcggv\xe9ny, amelyet akkor h\xedvnak meg, ha egy oszlopot \xe1tneveztek (a r\xe9gi n\xe9vvel mint els\u0151 \xe9s az \xfaj n\xe9vvel mint m\xe1sodik argumentummal h\xedvj\xe1k meg).. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onColumnNameChange() {}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onClickRemove")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": f\xfcggv\xe9ny, amely meghat\xe1rozza az adatokb\xf3l elt\xe1vol\xedtott sorok eset\xe9n v\xe9grehajtand\xf3 m\u0171veletet (alap\xe9rtelmez\xe9s szerint \xfcres f\xfcggv\xe9ny). Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onClickRemove() {}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onEdit")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),': f\xfcggv\xe9ny, amelyet a friss\xedtett adatk\xe9szlettel h\xedvnak meg, miut\xe1n a felhaszn\xe1l\xf3 megv\xe1ltoztatta egy cella \xe9rt\xe9k\xe9t (csak akkor alkalmazhat\xf3, ha a t\xe1bl\xe1zat "szerkeszthet\u0151").. Default: ',(0,n.kt)("inlineCode",{parentName:"li"},"onEdit() {}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onTutorialCompletion")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": f\xfcggv\xe9ny, amelyet akkor h\xedvnak meg, amikor a felhaszn\xe1l\xf3 befejezte az adatt\xe1bla bemutat\xf3t. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onTutorialCompletion() {}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"filters")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array"),": sz\u0171r\u0151k t\xf6mbje. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onFilteredChange")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": f\xfcggv\xe9ny, amelyet az aktu\xe1lis sz\u0171r\u0151kkel h\xedvnak meg, miut\xe1n a felhaszn\xe1l\xf3 megsz\u0171rte az adatokat. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onFilteredChange() {}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"showRemove")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": jelzi, hogy megjelen\xedtse-e az elt\xe1vol\xedtand\xf3 sorok jel\xf6l\u0151n\xe9gyzeteit.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"showIdColumn")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy megjelenjen-e az ID oszlop. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"disableDownload")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": az adatok CSV vagy JSON f\xe1jlk\xe9nt t\xf6rt\xe9n\u0151 let\xf6lt\xe9s\xe9re szolg\xe1l\xf3 gomb elrejt\xe9se. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"className")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": oszt\xe1ly neve. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"style")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": Egy objektum, amely lehet\u0151v\xe9 teszi az egy\xe9ni css-form\xe1z\xe1st. Alap\xe9rtelmez\xe9s szerint \xfcres objektum. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,n.kt)("h2",s({},{id:"p\xe9ld\xe1k"}),"P\xe9ld\xe1k"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<DataTable\n    showRemove\n    onClickRemove={( data ) => { console.log(data); }}\n    data={{ \n        firstName: [ 'Hans', 'Lotti', 'Fritz' ], \n        lastName: [ 'Bauer', 'M\xfcller', 'Schultz' ],\n        age: [ 37, 55, 62 ]\n    }}\n    style={{ width: 600 }}\n/>\n")))}y.isMDXComponent=!0}}]);