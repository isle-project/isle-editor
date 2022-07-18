"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[77194],{603905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(202784);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var u=n.createContext({}),p=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),k=p(a),d=i,s=k["".concat(u,".").concat(d)]||k[d]||m[d]||r;return a?n.createElement(s,l(l({ref:t},c),{},{components:a})):n.createElement(s,l({ref:t},c))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=k;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},77855:function(e,t,a){a.r(t),a.d(t,{assets:function(){return y},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return k},metadata:function(){return s},toc:function(){return f}});var n=a(603905),i=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&c(e,a,t[a]);if(o)for(var a of o(t))p.call(t,a)&&c(e,a,t[a]);return e};const k={id:"data-table",title:"Data Table",sidebar_label:"Data Table"},d=void 0,s={unversionedId:"data-table",id:"data-table",title:"Data Table",description:"Komponent renderuj\u0105cy dane w formie tabelarycznej. Wbudowany na g\xf3rze [tabela reaktywna] (https://react-table.js.org/).",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/data-table.md",sourceDirName:".",slug:"/data-table",permalink:"/pl/docs/data-table",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/data-table.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1650476171,formattedLastUpdatedAt:"20 kwi 2022",frontMatter:{id:"data-table",title:"Data Table",sidebar_label:"Data Table"},sidebar:"docs",previous:{title:"Data Explorer",permalink:"/pl/docs/data-explorer"},next:{title:"Feedback Buttons",permalink:"/pl/docs/feedback"}},y={},f=[{value:"Opcje",id:"opcje",level:2},{value:"Przyk\u0142ady",id:"przyk\u0142ady",level:2}],w={toc:f};function b(e){var t,a=e,{components:i}=a,c=((e,t)=>{var a={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},w),c),r(t,l({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Komponent renderuj\u0105cy dane w formie tabelarycznej. Wbudowany na g\xf3rze ","[tabela reaktywna]"," (",(0,n.kt)("a",m({parentName:"p"},{href:"https://react-table.js.org/"}),"https://react-table.js.org/"),")."),(0,n.kt)("h2",m({},{id:"opcje"}),"Opcje"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"data")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(array|object) (required)"),": Obiekt lub tablica danych, kt\xf3re maj\u0105 by\u0107 przegl\u0105dane. Je\u015bli jest to obiekt, to klucze odpowiadaj\u0105 warto\u015bciom kolumn, podczas gdy tablica b\u0119dzie oczekiwa\u0142a tablicy obiekt\xf3w z nazwanym polem odpowiadaj\u0105cym ka\u017cdej kolumnie. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"dataInfo")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": obiekt z tablic\u0105 \u0142a\u0144cuch\xf3w ",(0,n.kt)("inlineCode",{parentName:"li"},"info")," opisuj\u0105c\u0105 zbi\xf3r danych, ",(0,n.kt)("inlineCode",{parentName:"li"},"nazw\u0105")," zbioru danych, ",(0,n.kt)("inlineCode",{parentName:"li"},"obiektem")," ze zmiennymi",(0,n.kt)("inlineCode",{parentName:"li"},"z klawiszami odpowiadaj\u0105cymi nazwom i warto\u015bciom zmiennych do opis\xf3w zmiennych,"),"wy\u015bwietlaniemOnStartup",(0,n.kt)("inlineCode",{parentName:"li"},"boolean kontroluj\u0105cym, czy przy uruchamianiu wy\u015bwietli\u0107 modal informacyjny. Default:"),"{\n'info': [],\n'name': '',\n'variables': null,\n'showOnStartup': false\n}`."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deletable")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy kolumny, dla kt\xf3rych nie istniej\u0105 ",(0,n.kt)("inlineCode",{parentName:"li"},"info")," posiadaj\u0105 przycisk, kt\xf3ry po klikni\u0119ciu wywo\u0142uje funkcj\u0119 ",(0,n.kt)("inlineCode",{parentName:"li"},"onColumnDelete")," callback. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"undeletableVars")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array<string>"),": tablica nazw zmiennych w kolumnach, kt\xf3re nie mog\u0105 zosta\u0107 usuni\u0119te. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"filterable")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy kolumny s\u0105 filtrowalne. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"editable")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array"),": szereg nazw dla kolumn, kt\xf3re maj\u0105 by\u0107 edytowalne. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"getTrProps")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": funkcja wywo\u0142ania zwrotnego wykonywana dla ka\u017cdego wiersza w celu dostosowania jego stylizacji (przekazany stan tabeli, informacje o wierszu,\nkolumna i instancja tabeli). Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onColumnDrag")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": funkcja wywo\u0142ywana po przeci\u0105gni\u0119ciu kolumny do innej pozycji. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onColumnDrag() {}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onColumnDelete")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": funkcja wywo\u0142ywana z nazw\u0105 kolumny po klikni\u0119ciu odpowiedniego przycisku usuwania dla danej kolumny. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onColumnDelete() {}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onColumnNameChange")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": funkcja wywo\u0142ywana po zmianie nazwy kolumny (wywo\u0142ywana ze star\u0105 nazw\u0105 jako pierwsz\u0105 i now\u0105 jako drugim argumentem). Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onColumnNameChange() {}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onClickRemove")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": funkcja okre\u015blaj\u0105ca akcj\u0119, kt\xf3r\u0105 nale\u017cy wykona\u0107 dla wierszy usuni\u0119tych z danych (domy\u015blnie funkcja pusta). Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onClickRemove() {}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onEdit")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": funkcja wywo\u0142ywana z aktualnym zestawem danych po zmianie warto\u015bci kom\xf3rki przez u\u017cytkownika (dotyczy tylko sytuacji, gdy tabela jest ",(0,n.kt)("inlineCode",{parentName:"li"},"edytowalna"),"). Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onEdit() {}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onTutorialCompletion")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": funkcja wywo\u0142ywana po wype\u0142nieniu przez u\u017cytkownika tutorialu tabeli danych. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onTutorialCompletion() {}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"filters")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array"),": tablica filtr\xf3w. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onFilteredChange")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": funkcja wywo\u0142ywana przy pomocy aktualnych filtr\xf3w po przefiltrowaniu danych przez u\u017cytkownika. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onFilteredChange() {}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"showRemove")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": wskazuje, czy maj\u0105 by\u0107 wy\u015bwietlane pola wyboru dla wierszy, kt\xf3re maj\u0105 by\u0107 usuni\u0119te. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"showIdColumn")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy pokazywana jest kolumna ID. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"disableDownload")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": czy ukry\u0107 przycisk do pobrania danych jako plik CSV lub JSON. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"className")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": nazwa klasy. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"style")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": Obiekt pozwalaj\u0105cy na niestandardow\u0105 stylizacj\u0119 css. Domy\u015blna warto\u015b\u0107 dla pustego obiektu. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,n.kt)("h2",m({},{id:"przyk\u0142ady"}),"Przyk\u0142ady"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<DataTable\n    showRemove\n    onClickRemove={( data ) => { console.log(data); }}\n    data={{ \n        firstName: [ 'Hans', 'Lotti', 'Fritz' ], \n        lastName: [ 'Bauer', 'M\xfcller', 'Schultz' ],\n        age: [ 37, 55, 62 ]\n    }}\n    style={{ width: 600 }}\n/>\n")))}b.isMDXComponent=!0}}]);