(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{169:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return b})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return s}));var a=t(3),i=t(7),r=(t(0),t(410)),l={id:"sketchpad",title:"Sketchpad",sidebar_label:"Sketchpad"},b={unversionedId:"sketchpad",id:"sketchpad",isDocsHomePage:!1,title:"Sketchpad",description:"Ein Zeichnungsskizzenblock f\xfcr Notizen auf Vorlesungsfolien oder leeren Seiten.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/sketchpad.md",slug:"/sketchpad",permalink:"/de/docs/sketchpad",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/sketchpad.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1616648808,formattedLastUpdatedAt:"25.3.2021",sidebar_label:"Sketchpad",sidebar:"docs",previous:{title:"Text Editor",permalink:"/de/docs/text-editor"},next:{title:"Lesson Submit",permalink:"/de/docs/lesson-submit"}},o=[{value:"Optionen",id:"optionen",children:[]},{value:"Beispiele",id:"beispiele",children:[]}],c={toc:o};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Ein Zeichnungsskizzenblock f\xfcr Notizen auf Vorlesungsfolien oder leeren Seiten."),Object(r.b)("h2",{id:"optionen"},"Optionen"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"autoSave")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob der Editor den aktuellen Text in einem bestimmten Zeitintervall in den lokalen Speicher des Browsers speichern soll. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"feedbackButtons")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob auf jeder Folie Feedback-Schaltfl\xe4chen angezeigt werden sollen. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"intervalTime")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": Zeit zwischen automatischen Speicherungen. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"10000"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"hideInputButtons")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob Zeichen- und Texteingabetasten ausgeblendet werden sollen. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"hideNavigationButtons")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob Schaltfl\xe4chen zum Navigieren zwischen Seiten ausgeblendet werden sollen. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"hideSaveButtons")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob die Speichertasten ausgeblendet werden sollen. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"hideTransmitButtons")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob Schaltfl\xe4chen zum \xdcbertragen von Benutzeraktionen ausgeblendet werden sollen. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"brushSize")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": Gr\xf6\xdfe des Pinsels, mit dem gemalt werden soll. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"4"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"color")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": Farbe des Pinsels und der Texte. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'#444444'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"canvasWidth")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": Breite des Canvas-Elements (in px). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"1200"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"canvasHeight")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": H\xf6he des Canvas-Elements (in px). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"700"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"fullscreen")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob die Gr\xf6\xdfe der Leinwand automatisch an die Breite und H\xf6he des Browserfensters angepasst werden soll. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"fill")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": wenn ",Object(r.b)("inlineCode",{parentName:"li"},"horizontal"),", wird beim Zeichnen einer PDF-Datei der gesamte verf\xfcgbare horizontale Raum gef\xfcllt; wenn ",Object(r.b)("inlineCode",{parentName:"li"},"vertical"),", wird der gesamte vertikale Raum verwendet, um einen \xdcberlauf der y-Achse zu verhindern. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'vertical'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"disabled")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": ob die Komponente schreibgesch\xfctzt werden soll und das Zeichnen auf dem Skizzenblock verboten werden soll. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"fontFamily")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": Schriftfamilie. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"'Arial'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"fontSize")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": Schriftgr\xf6\xdfe. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"24"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"nodes")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": Komponenten, die \xfcber den angegebenen Folien gerendert werden sollen; ",Object(r.b)("inlineCode",{parentName:"li"},"Schl\xfcssel")," sollte den Seitenzahlen entsprechen, ",Object(r.b)("inlineCode",{parentName:"li"},"Werte")," den Komponenten. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"noPages")," | ",Object(r.b)("inlineCode",{parentName:"li"},"number"),": urspr\xfcngliche Seitenzahl. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"1"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"pdf")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": Link zur PDF-Datei f\xfcr eingebrannte Seitenhintergr\xfcnde. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"showTutorial")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": Tutorial f\xfcr den Skizzenblock beim Starten anzeigen. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"dynamicallyHideButtons")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob Schaltfl\xe4chen ausgeblendet werden sollen, wenn die Breite der Symbolleiste nicht ausreicht (andernfalls wird eine neue Zeile begonnen). Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"transmitOwner")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": ob Besitzeraktionen in Echtzeit an andere Benutzer \xfcbertragen werden sollen. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"groupMode")," | ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob alle Aktionen des Benutzers an alle anderen \xfcbertragen werden. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"voiceID")," | ",Object(r.b)("inlineCode",{parentName:"li"},"string"),": Kennung der Sprachsteuerung. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"style")," | ",Object(r.b)("inlineCode",{parentName:"li"},"object"),": CSS-Inline-Stile. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"onChange")," | ",Object(r.b)("inlineCode",{parentName:"li"},"function"),": Callback, der immer dann aufgerufen wird, wenn ein neues Linienelement gezeichnet wird. Default: ",Object(r.b)("inlineCode",{parentName:"li"},"onChange() {}"),".")),Object(r.b)("h2",{id:"beispiele"},"Beispiele"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Sketchpad canvasWidth={750} />\n")))}s.isMDXComponent=!0},410:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),s=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},d=function(e){var n=s(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(t),u=a,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||r;return t?i.a.createElement(m,b(b({ref:n},c),{},{components:t})):i.a.createElement(m,b({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=u;var b={};for(var o in n)hasOwnProperty.call(n,o)&&(b[o]=n[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var c=2;c<r;c++)l[c]=t[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);