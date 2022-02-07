"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[594],{603905:function(e,a,t){t.d(a,{Zo:function(){return m},kt:function(){return d}});var i=t(202784);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,i,n=function(e,a){if(null==e)return{};var t,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=i.createContext({}),s=function(e){var a=i.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},m=function(e){var a=s(e.components);return i.createElement(u.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},k=i.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=s(t),d=n,c=k["".concat(u,".").concat(d)]||k[d]||p[d]||l;return t?i.createElement(c,r(r({ref:a},m),{},{components:t})):i.createElement(c,r({ref:a},m))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,r=new Array(l);r[0]=k;var o={};for(var u in a)hasOwnProperty.call(a,u)&&(o[u]=a[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var s=2;s<l;s++)r[s]=t[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}k.displayName="MDXCreateElement"},239023:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return m},default:function(){return k}});var i=t(487462),n=t(263366),l=(t(202784),t(603905)),r=["components"],o={id:"data-table",title:"Data Table",sidebar_label:"Data Table"},u=void 0,s={unversionedId:"data-table",id:"data-table",title:"Data Table",description:"Komponentas, atvaizduojantis duomenis lenteli\u0173 pavidalu. Sukurtas ant react-table.",source:"@site/i18n/lt/docusaurus-plugin-content-docs/current/data-table.md",sourceDirName:".",slug:"/data-table",permalink:"/lt/docs/data-table",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/data-table.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021-06-01",frontMatter:{id:"data-table",title:"Data Table",sidebar_label:"Data Table"},sidebar:"docs",previous:{title:"Data Explorer",permalink:"/lt/docs/data-explorer"},next:{title:"Feedback Buttons",permalink:"/lt/docs/feedback"}},m=[{value:"Parinktys",id:"parinktys",children:[],level:2},{value:"Pavyzd\u017eiai",id:"pavyzd\u017eiai",children:[],level:2}],p={toc:m};function k(e){var a=e.components,t=(0,n.Z)(e,r);return(0,l.kt)("wrapper",(0,i.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Komponentas, atvaizduojantis duomenis lenteli\u0173 pavidalu. Sukurtas ant ",(0,l.kt)("a",{parentName:"p",href:"https://react-table.js.org/"},"react-table"),"."),(0,l.kt)("h2",{id:"parinktys"},"Parinktys"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"data")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(array|object) (required)"),": Per\u017ei\u016brimas duomen\u0173 objektas arba masyvas. Jei tai objektas, raktai atitinka stulpeli\u0173 reik\u0161mes, o i\u0161 masyvo tikimasi gauti objekt\u0173 masyv\u0105, kuriame kiekvienam stulpeliui atitinka pavadintas laukas.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"dataInfo")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": objektas, kuriame yra ",(0,l.kt)("inlineCode",{parentName:"li"},"info")," eilut\u0117s masyvas, apib\u016bdinantis duomen\u0173 rinkin\u012f, duomen\u0173 rinkinio ",(0,l.kt)("inlineCode",{parentName:"li"},"pavadinimas"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"kintam\u0173j\u0173")," objektas, kurio raktai atitinka kintam\u0173j\u0173 pavadinimus, o reik\u0161m\u0117s - kintam\u0173j\u0173 apra\u0161ymus, ir ",(0,l.kt)("inlineCode",{parentName:"li"},"showOnStartup")," loginis veiksnys, kontroliuojantis, ar paleidimo metu turi b\u016bti rodomas informacinis modalinis langas.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{\n  'info': [],\n  'name': '',\n  'variables': null,\n  'showOnStartup': false\n}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"deletable")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroliuoja, ar stulpeliai, kuriems n\u0117ra ",(0,l.kt)("inlineCode",{parentName:"li"},"info"),", turi mygtuk\u0105, kur\u012f paspaudus i\u0161kvie\u010diama ",(0,l.kt)("inlineCode",{parentName:"li"},"onColumnDelete")," gr\u012f\u017etamojo ry\u0161io funkcija.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"undeletableVars")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array<string>"),": stulpeli\u0173, kuri\u0173 negalima i\u0161trinti, kintam\u0173j\u0173 vard\u0173 masyvas. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"filterable")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroliuoja, ar stulpelius galima filtruoti.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"editable")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array"),": redaguojam\u0173 stulpeli\u0173 pavadinim\u0173 masyvas. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"getTrProps")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": at\u0161aukimo funkcija, vykdoma kiekvienai eilutei, kad b\u016bt\u0173 pritaikytas jos stilius (perduota lentel\u0117s b\u016bsena, eilut\u0117s informacija,\nstulpelis ir lentel\u0117s egzempliorius). Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onColumnDrag")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": funkcija, i\u0161kvie\u010diama, kai stulpelis vilkiamas \u012f kit\u0105 pad\u0117t\u012f. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onColumnDrag() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onColumnDelete")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": funkcija, i\u0161kvie\u010diama su stulpelio pavadinimu, kai paspaud\u017eiamas atitinkamas stulpelio \u0161alinimo mygtukas.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onColumnDelete() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onColumnNameChange")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": funkcija, i\u0161kvie\u010diama pakeitus stulpelio pavadinim\u0105 (i\u0161kvie\u010diama, kai pirmasis argumentas yra senasis pavadinimas, o antrasis - naujasis pavadinimas).. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onColumnNameChange() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onClickRemove")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": funkcija, nurodanti veiksm\u0105, kur\u012f reikia atlikti i\u0161 duomen\u0173 pa\u0161alintoms eilut\u0117ms (numatytoji reik\u0161m\u0117 - tu\u0161\u010dia funkcija).. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onClickRemove() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onEdit")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": funkcija, i\u0161kvie\u010diama su atnaujintu duomen\u0173 rinkiniu po to, kai naudotojas pakeit\u0117 langelio reik\u0161m\u0119 (taikoma tik tada, kai lentel\u0117 yra ",(0,l.kt)("inlineCode",{parentName:"li"},"redaguojama"),").. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onEdit() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onTutorialCompletion")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": funkcija, i\u0161kvie\u010diama, kai naudotojas baigia duomen\u0173 lentel\u0117s vadov\u0117l\u012f.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onTutorialCompletion() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"filters")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array"),": filtr\u0173 masyvas. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onFilteredChange")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": funkcija, i\u0161kvie\u010diama su dabartiniais filtrais po to, kai duomenis filtravo naudotojas. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onFilteredChange() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"showRemove")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": nurodo, ar rodyti pa\u0161alintin\u0173 eilu\u010di\u0173 \u017eymimuosius langelius.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"showIdColumn")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroliuoja, ar rodyti ID stulpel\u012f.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"disableDownload")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": ar pasl\u0117pti mygtuk\u0105, skirt\u0105 duomenims atsisi\u0173sti CSV arba JSON failo pavidalu.. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"className")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": klas\u0117s pavadinimas. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": Objektas, leid\u017eiantis naudoti pasirinktin\u012f css stili\u0173. Numatytoji reik\u0161m\u0117 - tu\u0161\u010dias objektas. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,l.kt)("h2",{id:"pavyzd\u017eiai"},"Pavyzd\u017eiai"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<DataTable\n    showRemove\n    onClickRemove={( data ) => { console.log(data); }}\n    data={{ \n        firstName: [ 'Hans', 'Lotti', 'Fritz' ], \n        lastName: [ 'Bauer', 'M\xfcller', 'Schultz' ],\n        age: [ 37, 55, 62 ]\n    }}\n    style={{ width: 600 }}\n/>\n")))}k.isMDXComponent=!0}}]);