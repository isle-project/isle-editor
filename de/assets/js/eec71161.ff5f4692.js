(window.webpackJsonp=window.webpackJsonp||[]).push([[1277],{302:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return d}));var r=t(3),i=t(7),a=(t(0),t(410)),l={id:"select-input",title:"Select Input",sidebar_label:"Select Input"},o={unversionedId:"input/select-input",id:"input/select-input",isDocsHomePage:!1,title:"Select Input",description:"Eine ausgew\xe4hlte Eingabekomponente. Kann als Teil eines ISLE Dashboards oder standalone verwendet werden. Im letzteren Fall wollen Sie \xc4nderungen \xfcber das Attribut onChange behandeln oder den Wert \xfcber das Attribut bind an eine globale Variable binden.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/input/select.md",slug:"/input/select-input",permalink:"/de/docs/input/select-input",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/select.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21.2.2021",sidebar_label:"Select Input",sidebar:"docs",previous:{title:"Proportions Input",permalink:"/de/docs/input/proportions-input"},next:{title:"Slider Input",permalink:"/de/docs/input/slider-input"}},b=[{value:"Optionen",id:"optionen",children:[]},{value:"Beispiele",id:"beispiele",children:[]}],c={toc:b};function d(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Eine ausgew\xe4hlte Eingabekomponente. Kann als Teil eines ISLE Dashboards oder standalone verwendet werden. Im letzteren Fall wollen Sie \xc4nderungen \xfcber das Attribut ",Object(a.b)("inlineCode",{parentName:"p"},"onChange")," behandeln oder den Wert \xfcber das Attribut ",Object(a.b)("inlineCode",{parentName:"p"},"bind")," an eine globale Variable binden."),Object(a.b)("h2",{id:"optionen"},"Optionen"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"bind")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": Name der globalen Variablen, der die Nummer zugewiesen werden soll. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"''"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"clearable")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": boolescher Wert, der angibt, ob man die getroffene(n) Auswahl(en) l\xf6schen darf. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"defaultValue")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(number|string|array|object)"),": Vorgabewert des Eingangs beim Starten. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"disabled")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob der Eingang aktiv ist oder nicht. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"inline")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": gibt an, ob die Eingabe inline angezeigt wird. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"legend")," | ",Object(a.b)("inlineCode",{parentName:"li"},"(string|node)"),": Text, der neben dem Eingang angezeigt wird. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"''"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"menuPlacement")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": Platzierung des Men\xfcs in Bezug auf das Steuerelement (entweder ",Object(a.b)("inlineCode",{parentName:"li"},"auto"),", ",Object(a.b)("inlineCode",{parentName:"li"},"top")," oder ",Object(a.b)("inlineCode",{parentName:"li"},"bottom"),"). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"'auto'"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"multi")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob man mehrere Antworten ausw\xe4hlen darf. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onChange")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": Callback-Funktion, die aufgerufen wird, wenn eine Auswahl getroffen wird. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"onChange() {}"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"options")," | ",Object(a.b)("inlineCode",{parentName:"li"},"array"),": Array, das die dem Benutzer zur Verf\xfcgung stehenden Auswahlm\xf6glichkeiten anzeigt. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"placeholder")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": Wert, der angezeigt werden soll, bevor eine erste Auswahl getroffen wird. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"tooltip")," | ",Object(a.b)("inlineCode",{parentName:"li"},"string"),": Text, der angezeigt wird, wenn der Mauszeiger \xfcber die Legende bewegt wird. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"style")," | ",Object(a.b)("inlineCode",{parentName:"li"},"object"),": CSS-Inline-Stile. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(a.b)("h2",{id:"beispiele"},"Beispiele"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<SelectInput\n    legend=\"Choose the test direction\"\n    defaultValue=\"two-sided\"\n    options={[\n        'left-sided',\n        'right-sided',\n        'two-sided'\n    ]}\n/>\n")))}d.isMDXComponent=!0},410:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),d=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},s=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=d(t),s=r,m=p["".concat(l,".").concat(s)]||p[s]||u[s]||a;return t?i.a.createElement(m,o(o({ref:n},c),{},{components:t})):i.a.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=s;var o={};for(var b in n)hasOwnProperty.call(n,b)&&(o[b]=n[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<a;c++)l[c]=t[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);