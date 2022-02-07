"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2366],{603905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var i=t(202784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=i.createContext({}),u=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return i.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(t),m=r,k=c["".concat(d,".").concat(m)]||c[m]||s[m]||a;return t?i.createElement(k,l(l({ref:n},p),{},{components:t})):i.createElement(k,l({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=c;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<a;u++)l[u]=t[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},486800:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var i=t(487462),r=t(263366),a=(t(202784),t(603905)),l=["components"],o={id:"tex",title:"LaTeX Equations",sidebar_label:"LaTeX Equations"},d=void 0,u={unversionedId:"tex",id:"tex",title:"LaTeX Equations",description:'TeX" ist ein ISLE-Element, das zur Anzeige von LaTeX-Gleichungen verwendet werden kann.',source:"@site/i18n/de/docusaurus-plugin-content-docs/current/tex.md",sourceDirName:".",slug:"/tex",permalink:"/de/docs/tex",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tex.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1626034980,formattedLastUpdatedAt:"11.7.2021",frontMatter:{id:"tex",title:"LaTeX Equations",sidebar_label:"LaTeX Equations"},sidebar:"docs",previous:{title:"Link",permalink:"/de/docs/link"},next:{title:"blockquote",permalink:"/de/docs/html/blockquote"}},p=[{value:"Optionen",id:"optionen",children:[],level:2},{value:"Beispiele",id:"beispiele",children:[],level:2}],s={toc:p};function c(e){var n=e.components,t=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'TeX" ist ein ISLE-Element, das zur Anzeige von LaTeX-Gleichungen verwendet werden kann.'),(0,a.kt)("h2",{id:"optionen"},"Optionen"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"raw")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|number) (required)"),": Die w\xf6rtliche LaTeX-Zeichenkette, die wiedergegeben werden soll. Akzeptiert auch ",(0,a.kt)("inlineCode",{parentName:"li"},"Nummern"),". Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"displayMode")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),", das angibt, ob die Gleichung inline oder im Anzeigemodus angezeigt werden soll. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"numbered")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob eine Gleichungsnummer f\xfcr Gleichungen im Anzeigemodus angezeigt werden soll. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"Objekt")," mit CSS-Schl\xfcssel-Wert-Paaren, die auf den Gleichungs-Container angewendet werden sollen. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"tag")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": Benutzerdefinierte Zeichen, die f\xfcr Anzeigegleichungen auf der rechten Seite angezeigt werden. Standardm\xe4\xdfig wird die Nummer der Gleichung innerhalb der Lektion angezeigt. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"elems")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"Objekt"),", wobei ",(0,a.kt)("inlineCode",{parentName:"li"},"Schl\xfcssel")," LaTeX-Zeichen bezeichnen und die entsprechenden Werte Konfigurations-",(0,a.kt)("inlineCode",{parentName:"li"},"Objekte")," sind, um sie interaktiv zu machen. Das Setzen einer ",(0,a.kt)("inlineCode",{parentName:"li"},"tooltip"),"-Option zeigt einen Tooltip an, wenn der Mauszeiger \xfcber die LaTeX-Zeichen bewegt wird. Das Setzen einer ",(0,a.kt)("inlineCode",{parentName:"li"},"variable"),"-Eigenschaft zeigt einen Eingabeschieberegler zum \xc4ndern der jeweiligen Zustandsvariablen an; in diesem Fall werden zus\xe4tzlich die Eigenschaften ",(0,a.kt)("inlineCode",{parentName:"li"},"legend"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"min"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"max")," und ",(0,a.kt)("inlineCode",{parentName:"li"},"step")," unterst\xfctzt. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"popoverPlacement")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": Popover-Position f\xfcr die angegebenen ",(0,a.kt)("inlineCode",{parentName:"li"},"Elemente")," (entweder ",(0,a.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"right"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"bottom")," oder ",(0,a.kt)("inlineCode",{parentName:"li"},"left"),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onPopover")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": Callback ",(0,a.kt)("inlineCode",{parentName:"li"},"Funktion"),", wenn ein Control-Popover ein- oder ausgeschaltet wird; erh\xe4lt als einziges Argument den Anzeigestatus als Boolean. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onPopover() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onClick")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": Callback ",(0,a.kt)("inlineCode",{parentName:"li"},"Funktion"),", die aufgerufen wird, wenn ein Benutzer auf die Gleichung klickt. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),".")),(0,a.kt)("h2",{id:"beispiele"},"Beispiele"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<TeX\n    raw="2 + 3 = 5"\n    displayMode={true}\n/>\n')))}c.isMDXComponent=!0}}]);