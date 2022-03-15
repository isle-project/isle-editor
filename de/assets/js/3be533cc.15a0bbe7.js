"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6176],{603905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return c}});var a=t(202784);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(t),c=i,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||r;return t?a.createElement(k,l(l({ref:n},p),{},{components:t})):a.createElement(k,l({ref:n},p))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},992570:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},assets:function(){return p},toc:function(){return u},default:function(){return c}});var a=t(487462),i=t(263366),r=(t(202784),t(603905)),l=["components"],o={id:"sketchpad",title:"Sketchpad",sidebar_label:"Sketchpad"},s=void 0,d={unversionedId:"sketchpad",id:"sketchpad",title:"Sketchpad",description:"Ein Zeichnungsskizzenblock f\xfcr Notizen auf Vorlesungsfolien oder leeren Seiten.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/sketchpad.md",sourceDirName:".",slug:"/sketchpad",permalink:"/de/docs/sketchpad",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/sketchpad.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1633715852,formattedLastUpdatedAt:"8.10.2021",frontMatter:{id:"sketchpad",title:"Sketchpad",sidebar_label:"Sketchpad"},sidebar:"docs",previous:{title:"Text Editor",permalink:"/de/docs/text-editor"},next:{title:"Lesson Submit",permalink:"/de/docs/lesson-submit"}},p={},u=[{value:"Optionen",id:"optionen",level:2},{value:"Beispiele",id:"beispiele",level:2}],m={toc:u};function c(e){var n=e.components,t=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Ein Zeichnungsskizzenblock f\xfcr Notizen auf Vorlesungsfolien oder leeren Seiten."),(0,r.kt)("h2",{id:"optionen"},"Optionen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"autoSave")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob der Editor den aktuellen Text in einem bestimmten Zeitintervall in den lokalen Speicher des Browsers speichern soll. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"feedbackButtons")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob auf jeder Folie Feedback-Schaltfl\xe4chen angezeigt werden sollen. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"intervalTime")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": Zeit zwischen automatischen Speicherungen. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"10000"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hideInputButtons")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob Zeichen- und Texteingabetasten ausgeblendet werden sollen. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hideNavigationButtons")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob Schaltfl\xe4chen zum Navigieren zwischen Seiten ausgeblendet werden sollen. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hideSaveButtons")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob die Speichertasten ausgeblendet werden sollen. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hideTransmitButtons")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob Schaltfl\xe4chen zum \xdcbertragen von Benutzeraktionen ausgeblendet werden sollen. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"brushSize")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": Gr\xf6\xdfe des Pinsels, mit dem gemalt werden soll. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"4"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"color")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": Farbe des Pinsels und der Texte. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'#444444'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"canvasWidth")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": Breite des Canvas-Elements (in px). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1200"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"canvasHeight")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": H\xf6he des Canvas-Elements (in px). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"700"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fullscreen")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob die Gr\xf6\xdfe der Leinwand automatisch an die Breite und H\xf6he des Browserfensters angepasst werden soll. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fill")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": wenn ",(0,r.kt)("inlineCode",{parentName:"li"},"horizontal"),", wird beim Zeichnen einer PDF-Datei der gesamte verf\xfcgbare horizontale Raum gef\xfcllt; wenn ",(0,r.kt)("inlineCode",{parentName:"li"},"vertical"),", wird der gesamte vertikale Raum verwendet, um einen \xdcberlauf der y-Achse zu verhindern. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'vertical'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disabled")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": ob die Komponente schreibgesch\xfctzt werden soll und das Zeichnen auf dem Skizzenblock verboten werden soll. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fontFamily")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": Schriftfamilie. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'Arial'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fontSize")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": Schriftgr\xf6\xdfe. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"24"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"nodes")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": Komponenten, die \xfcber den angegebenen Folien gerendert werden sollen; ",(0,r.kt)("inlineCode",{parentName:"li"},"Schl\xfcssel")," sollte den Seitenzahlen entsprechen, ",(0,r.kt)("inlineCode",{parentName:"li"},"Werte")," den Komponenten. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"noPages")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": urspr\xfcngliche Seitenzahl. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"pdf")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": Link zur PDF-Datei f\xfcr eingebrannte Seitenhintergr\xfcnde. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"showTutorial")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": Tutorial f\xfcr den Skizzenblock beim Starten anzeigen. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"dynamicallyHideButtons")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob Schaltfl\xe4chen ausgeblendet werden sollen, wenn die Breite der Symbolleiste nicht ausreicht (andernfalls wird eine neue Zeile begonnen). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"transmitOwner")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": ob Besitzeraktionen in Echtzeit an andere Benutzer \xfcbertragen werden sollen. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"groupMode")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob alle Aktionen des Benutzers an alle anderen \xfcbertragen werden. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS-Inline-Stile. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChange")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": Callback, der immer dann aufgerufen wird, wenn ein neues Linienelement gezeichnet wird. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange() {}"),".")),(0,r.kt)("h2",{id:"beispiele"},"Beispiele"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Sketchpad canvasWidth={750} />\n")))}c.isMDXComponent=!0}}]);