"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[18518],{603905:function(e,t,a){a.d(t,{Zo:function(){return k},kt:function(){return d}});var n=a(202784);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},k=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),m=s(a),d=i,c=m["".concat(u,".").concat(d)]||m[d]||p[d]||r;return a?n.createElement(c,l(l({ref:t},k),{},{components:a})):n.createElement(c,l({ref:t},k))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},985405:function(e,t,a){a.r(t),a.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return j},frontMatter:function(){return m},metadata:function(){return c},toc:function(){return b}});var n=a(603905),i=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,k=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&k(e,a,t[a]);if(o)for(var a of o(t))s.call(t,a)&&k(e,a,t[a]);return e};const m={id:"data-table",title:"Data Table",sidebar_label:"Data Table"},d=void 0,c={unversionedId:"data-table",id:"data-table",title:"Data Table",description:"Komponents, kas att\u0113lo datus tabul\u0101raj\u0101 displej\u0101. Izstr\u0101d\u0101ts uz react-table.",source:"@site/i18n/lv/docusaurus-plugin-content-docs/current/data-table.md",sourceDirName:".",slug:"/data-table",permalink:"/lv/docs/data-table",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/data-table.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1650476171,formattedLastUpdatedAt:"2022. g. 20. apr.",frontMatter:{id:"data-table",title:"Data Table",sidebar_label:"Data Table"},sidebar:"docs",previous:{title:"Data Explorer",permalink:"/lv/docs/data-explorer"},next:{title:"Feedback Buttons",permalink:"/lv/docs/feedback"}},f={},b=[{value:"Iesp\u0113jas",id:"iesp\u0113jas",level:2},{value:"Piem\u0113ri",id:"piem\u0113ri",level:2}],N={toc:b};function j(e){var t,a=e,{components:i}=a,k=((e,t)=>{var a={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&s.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=p(p({},N),k),r(t,l({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Komponents, kas att\u0113lo datus tabul\u0101raj\u0101 displej\u0101. Izstr\u0101d\u0101ts uz ",(0,n.kt)("a",p({parentName:"p"},{href:"https://react-table.js.org/"}),"react-table"),"."),(0,n.kt)("h2",p({},{id:"iesp\u0113jas"}),"Iesp\u0113jas"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"data")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(array|object) (required)"),": P\u0101rskat\u0101mais datu objekts vai mas\u012bvs. Ja tas ir objekts, atsl\u0113gas atbilst kolonnu v\u0113rt\u012bb\u0101m, bet mas\u012bvs b\u016bs objektu mas\u012bvs ar nosauktu lauku, kas atbilst katrai kolonnai.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"dataInfo")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": objekts ar ",(0,n.kt)("inlineCode",{parentName:"li"},"info")," virk\u0146u mas\u012bvu, kas apraksta datu kopu, datu kopas ",(0,n.kt)("inlineCode",{parentName:"li"},"nosaukumu"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"main\u012bgo")," objektu ar main\u012bgo nosaukumu atsl\u0113g\u0101m un main\u012bgo aprakstu v\u0113rt\u012bb\u0101m, ",(0,n.kt)("inlineCode",{parentName:"li"},"showOnStartup")," boolean, kas kontrol\u0113, vai palai\u0161anas laik\u0101 tiek par\u0101d\u012bts inform\u0101cijas mod\u0101ls.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"{\n  'info': [],\n  'name': '',\n  'variables': null,\n  'showOnStartup': false\n}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deletable")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrol\u0113, vai kolonn\u0101m, kur\u0101m nav ",(0,n.kt)("inlineCode",{parentName:"li"},"info"),", ir poga, kas p\u0113c noklik\u0161\u0137in\u0101\u0161anas izsauc ",(0,n.kt)("inlineCode",{parentName:"li"},"onColumnDelete")," izsaukuma funkciju.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"undeletableVars")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array<string>"),": to kolonnu main\u012bgo nosaukumu mas\u012bvs, kuras nedr\u012bkst dz\u0113st.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"filterable")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrol\u0113, vai kolonnas ir filtr\u0113jamas.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"editable")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array"),": redi\u0123\u0113jamo kolonnu nosaukumu mas\u012bvs. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"getTrProps")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": atsauces funkcija, kas tiek izpild\u012bta katrai rindai, lai piel\u0101gotu t\u0101s stilu (nodota tabulas st\u0101voklis, rindas inform\u0101cija,\nsleja un tabulas instance). Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onColumnDrag")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": funkcija, kas tiek izsaukta, kad sleja ir p\u0101rvilkta uz citu poz\u012bciju.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onColumnDrag() {}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onColumnDelete")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": funkcija, kas tiek izsaukta ar kolonnas nosaukumu, kad ir noklik\u0161\u0137in\u0101ts uz attiec\u012bg\u0101s kolonnas dz\u0113\u0161anas pogas.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onColumnDelete() {}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onColumnNameChange")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": funkcija, kas tiek izsaukta, ja kolonnas nosaukums ir main\u012bts (tiek izsaukta ar veco nosaukumu k\u0101 pirmo un jauno nosaukumu k\u0101 otro argumentu).. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onColumnNameChange() {}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onClickRemove")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": funkcija, kas nor\u0101da darb\u012bbu, kas j\u0101veic attiec\u012bb\u0101 uz rind\u0101m, kuras iz\u0146emtas no datiem (noklus\u0113juma iestat\u012bjumi ir tuk\u0161a funkcija).. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onClickRemove() {}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onEdit")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": funkcija, kas tiek izsaukta ar atjaunin\u0101tu datu kopu p\u0113c tam, kad lietot\u0101js ir main\u012bjis \u0161\u016bnas v\u0113rt\u012bbu (attiecas tikai tad, ja tabula ir ",(0,n.kt)("inlineCode",{parentName:"li"},"redi\u0123\u0113jama"),").. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onEdit() {}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onTutorialCompletion")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": funkcija, kas tiek izsaukta, kad lietot\u0101js ir pabeidzis datu tabulas pam\u0101c\u012bbu.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onTutorialCompletion() {}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"filters")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"array"),": filtru mas\u012bvs. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onFilteredChange")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": funkcija, kas tiek izsaukta ar pa\u0161reiz\u0113jiem filtriem p\u0113c tam, kad datus ir filtr\u0113jis lietot\u0101js.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onFilteredChange() {}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"showRemove")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": nor\u0101da, vai att\u012br\u0101maj\u0101m rind\u0101m ir j\u0101nor\u0101da izv\u0113les r\u016bti\u0146as.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"showIdColumn")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrol\u0113, vai tiek r\u0101d\u012bta ID sleja.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"disableDownload")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": vai sl\u0113pt pogu, lai datus lejupiel\u0101d\u0113tu CSV vai JSON faila veid\u0101.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"className")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": klases nosaukums. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"style")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": Objekts, kas \u013cauj piel\u0101got css stilu. Noklus\u0113juma noklus\u0113juma v\u0113rt\u012bba ir tuk\u0161s objekts. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,n.kt)("h2",p({},{id:"piem\u0113ri"}),"Piem\u0113ri"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<DataTable\n    showRemove\n    onClickRemove={( data ) => { console.log(data); }}\n    data={{ \n        firstName: [ 'Hans', 'Lotti', 'Fritz' ], \n        lastName: [ 'Bauer', 'M\xfcller', 'Schultz' ],\n        age: [ 37, 55, 62 ]\n    }}\n    style={{ width: 600 }}\n/>\n")))}j.isMDXComponent=!0}}]);