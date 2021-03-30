(window.webpackJsonp=window.webpackJsonp||[]).push([[1228],{254:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return d}));var i=t(3),r=t(7),a=(t(0),t(410)),l={id:"tex",title:"LaTeX Equations",sidebar_label:"LaTeX Equations"},o={unversionedId:"tex",id:"tex",isDocsHomePage:!1,title:"LaTeX Equations",description:'TeX" ist ein ISLE-Element, das zur Anzeige von LaTeX-Gleichungen verwendet werden kann. Unter der Haube verwendet die Komponente KaTeX f\xfcr rasend schnelles Rendering.',source:"@site/i18n/de/docusaurus-plugin-content-docs/current/tex.md",slug:"/tex",permalink:"/de/docs/tex",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tex.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613975495,formattedLastUpdatedAt:"22.2.2021",sidebar_label:"LaTeX Equations",sidebar:"docs",previous:{title:"Link",permalink:"/de/docs/link"},next:{title:"blockquote",permalink:"/de/docs/html/blockquote"}},c=[{value:"Optionen",id:"optionen",children:[]},{value:"Beispiele",id:"beispiele",children:[]}],b={toc:c};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,'TeX" ist ein ISLE-Element, das zur Anzeige von LaTeX-Gleichungen verwendet werden kann. Unter der Haube verwendet die Komponente ',Object(a.b)("a",{parentName:"p",href:"https://github.com/Khan/KaTeX"},"KaTeX")," f\xfcr rasend schnelles Rendering."),Object(a.b)("h2",{id:"optionen"},"Optionen"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"raw")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(string|number) (required)"),": Die w\xf6rtliche LaTeX-Zeichenkette, die wiedergegeben werden soll. Akzeptiert auch ",Object(a.b)("inlineCode",{parentName:"li"},"Nummern"),". Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"displayMode")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),", das angibt, ob die Gleichung inline oder im Anzeigemodus angezeigt werden soll. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"numbered")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob eine Gleichungsnummer f\xfcr Gleichungen im Anzeigemodus angezeigt werden soll. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"style")," | ",Object(a.b)("inlineCode",{parentName:"li"},"object"),": ",Object(a.b)("inlineCode",{parentName:"li"},"Objekt")," mit CSS-Schl\xfcssel-Wert-Paaren, die auf den Gleichungs-Container angewendet werden sollen. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"tag")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": Benutzerdefinierte Zeichen, die f\xfcr Anzeigegleichungen auf der rechten Seite angezeigt werden. Standardm\xe4\xdfig wird die Nummer der Gleichung innerhalb der Lektion angezeigt. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"elems")," | ",Object(a.b)("inlineCode",{parentName:"li"},"object"),": ",Object(a.b)("inlineCode",{parentName:"li"},"Objekt"),", wobei ",Object(a.b)("inlineCode",{parentName:"li"},"Schl\xfcssel")," LaTeX-Zeichen bezeichnen und die entsprechenden Werte Konfigurations-",Object(a.b)("inlineCode",{parentName:"li"},"Objekte")," sind, um sie interaktiv zu machen. Das Setzen einer ",Object(a.b)("inlineCode",{parentName:"li"},"tooltip"),"-Option zeigt einen Tooltip an, wenn der Mauszeiger \xfcber die LaTeX-Zeichen bewegt wird. Das Setzen einer ",Object(a.b)("inlineCode",{parentName:"li"},"variable"),"-Eigenschaft zeigt einen Eingabeschieberegler zum \xc4ndern der jeweiligen Zustandsvariablen an; in diesem Fall werden zus\xe4tzlich die Eigenschaften ",Object(a.b)("inlineCode",{parentName:"li"},"legend"),", ",Object(a.b)("inlineCode",{parentName:"li"},"min"),", ",Object(a.b)("inlineCode",{parentName:"li"},"max")," und ",Object(a.b)("inlineCode",{parentName:"li"},"step")," unterst\xfctzt. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"{}"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"popoverPlacement")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": Popover-Position f\xfcr die angegebenen ",Object(a.b)("inlineCode",{parentName:"li"},"Elemente")," (entweder ",Object(a.b)("inlineCode",{parentName:"li"},"top"),", ",Object(a.b)("inlineCode",{parentName:"li"},"right"),", ",Object(a.b)("inlineCode",{parentName:"li"},"bottom")," oder ",Object(a.b)("inlineCode",{parentName:"li"},"left"),"). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"'top'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onPopover")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": Callback ",Object(a.b)("inlineCode",{parentName:"li"},"Funktion"),", wenn ein Control-Popover ein- oder ausgeschaltet wird; erh\xe4lt als einziges Argument den Anzeigestatus als Boolean. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"onPopover() {}"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onClick")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": Callback ",Object(a.b)("inlineCode",{parentName:"li"},"Funktion"),", die aufgerufen wird, wenn ein Benutzer auf die Gleichung klickt. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),".")),Object(a.b)("h2",{id:"beispiele"},"Beispiele"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<TeX\n    raw="2 + 3 = 5"\n    displayMode={true}\n/>\n')))}d.isMDXComponent=!0},410:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var i=t(0),r=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),d=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=d(t),s=i,m=p["".concat(l,".").concat(s)]||p[s]||u[s]||a;return t?r.a.createElement(m,o(o({ref:n},b),{},{components:t})):r.a.createElement(m,o({ref:n},b))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=s;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var b=2;b<a;b++)l[b]=t[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);