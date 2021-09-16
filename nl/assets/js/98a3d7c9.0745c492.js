"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4817],{603905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(202784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(t),m=a,f=p["".concat(u,".").concat(m)]||p[m]||c[m]||l;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=p;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},358215:function(e,n,t){var r=t(202784);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},855064:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(202784),a=t(79443);var l=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(386010),o="tabItem_1uMI",u="tabItemActive_2DSg";var s=function(e){var n,t=e.lazy,a=e.block,s=e.defaultValue,d=e.values,c=e.groupId,p=e.className,m=r.Children.toArray(e.children),f=null!=d?d:m.map((function(e){return{value:e.props.value,label:e.props.label}})),g=null!=s?s:null==(n=m.find((function(e){return e.props.default})))?void 0:n.props.value,v=l(),k=v.tabGroupChoices,b=v.setTabGroupChoices,h=(0,r.useState)(g),N=h[0],y=h[1],C=[];if(null!=c){var w=k[c];null!=w&&w!==N&&f.some((function(e){return e.value===w}))&&y(w)}var O=function(e){var n=e.currentTarget,t=C.indexOf(n),r=f[t].value;y(r),null!=c&&(b(c,r),setTimeout((function(){var e,t,r,a,l,i,o,s;(e=n.getBoundingClientRect(),t=e.top,r=e.left,a=e.bottom,l=e.right,i=window,o=i.innerHeight,s=i.innerWidth,t>=0&&l<=s&&a<=o&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(u),setTimeout((function(){return n.classList.remove(u)}),2e3))}),150))},x=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=C.indexOf(e.target)+1;t=C[r]||C[0];break;case"ArrowLeft":var a=C.indexOf(e.target)-1;t=C[a]||C[C.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},p)},f.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":N===n}),key:n,ref:function(e){return C.push(e)},onKeyDown:x,onFocus:O,onClick:O},null!=t?t:n)}))),t?(0,r.cloneElement)(m.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==N})}))))}},79443:function(e,n,t){var r=(0,t(202784).createContext)(void 0);n.Z=r},712120:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var r=t(487462),a=t(263366),l=(t(202784),t(603905)),i=t(855064),o=t(358215),u=["components"],s={id:"r-shell",title:"R Shell",sidebar_label:"R Shell"},d=void 0,c={unversionedId:"r/r-shell",id:"r/r-shell",isDocsHomePage:!1,title:"R Shell",description:"Een interactieve R-Shell die gebruikt kan worden om R-commando's in de cloud uit te voeren met behulp van OpenCPU.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/r/shell.md",sourceDirName:"r",slug:"/r/r-shell",permalink:"/nl/docs/r/r-shell",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/r/shell.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1621312042,formattedLastUpdatedAt:"18-5-2021",frontMatter:{id:"r-shell",title:"R Shell",sidebar_label:"R Shell"},sidebar:"docs",previous:{title:"R Plot",permalink:"/nl/docs/r/r-plot"},next:{title:"R Table",permalink:"/nl/docs/r/r-table"}},p=[{value:"Opties",id:"opties",children:[]},{value:"Voorbeelden",id:"voorbeelden",children:[]}],m={toc:p};function f(e){var n=e.components,t=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Een interactieve R-Shell die gebruikt kan worden om R-commando's in de cloud uit te voeren met behulp van ",(0,l.kt)("a",{parentName:"p",href:"https://www.opencpu.org/"},"OpenCPU"),"."),(0,l.kt)("h2",{id:"opties"},"Opties"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"code")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": Te evalueren R-code. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"solution")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),": voor programmeervragen, R-code ",(0,l.kt)("inlineCode",{parentName:"li"},"string")," die de offici\xeble oplossing voor het probleem vertegenwoordigt. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hints")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array<(string|node)>"),": voor programmeervragen, een reeks hints die een leidraad bieden voor de aanpak van het probleem. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"addPreceding")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": indien ingesteld op true, zal de commandoregel alle code van de huidige component en alle vorige die in de les voorkomen, evalueren. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"libraries")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"array"),": R-bibliotheken die automatisch moeten worden geladen wanneer de invoer ",(0,l.kt)("inlineCode",{parentName:"li"},"code")," wordt uitgevoerd. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"precompute")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": controleert of de standaardcode moet worden uitgevoerd zodra het component is gemonteerd. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"prependCode")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"(string|array)"),": R-code ",(0,l.kt)("inlineCode",{parentName:"li"},"string")," (of ",(0,l.kt)("inlineCode",{parentName:"li"},"array")," van R-codeblokken) die bij de evaluatie moet worden voorgeprogrammeerd op de code die is opgeslagen in ",(0,l.kt)("inlineCode",{parentName:"li"},"code"),". Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"chat")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": bepaalt of de groeps-chatfunctie moet worden ingeschakeld. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"disabled")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": bepaalt of alle gebruikersinvoer moet worden uitgeschakeld en of de code moet worden geblokkeerd. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"lines")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),": aantal weer te geven regels. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"resettable")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),": regelt of er een resetknop moet worden weergegeven voor het herstellen van de standaardcode-invoer. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"style")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline-stijlen. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onChange")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": terugbellen wordt aangeroepen wanneer de invoer van het tekstveld verandert. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onEvaluate")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": terugbellen wordt aangeroepen wanneer op de ",(0,l.kt)("inlineCode",{parentName:"li"},"Evaluate"),"-knop wordt geklikt. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onEvaluate(){}"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onResult")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),": callback aangeroepen wanneer het resultaat van een code-uitvoering uit de cloud wordt verkregen. Het resultaat ",(0,l.kt)("inlineCode",{parentName:"li"},"string")," wordt als enige argument doorgegeven aan de callback-functie. Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"onResult() {}"),".")),(0,l.kt)("h2",{id:"voorbeelden"},"Voorbeelden"),(0,l.kt)(i.Z,{defaultValue:"minimal",values:[{label:"Minimal",value:"minimal"},{label:"Multiline",value:"multiline"},{label:"Precompute & Disabled",value:"precompute"},{label:"Using Libraries",value:"usingLibraries"},{label:"Add Preceding Code",value:"addPreceding"},{label:"Hints & Solution",value:"hintsAndSolution"}],lazy:!0,mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<RShell\n    code="abs(c(-2,3,-1))"\n/>\n'))),(0,l.kt)(o.Z,{value:"multiline",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RShell code={`x <- runif( 100 );\ny <- 3.0 * x + rnorm( 100 );\nfit <- lm( y ~ x );\nsummary( fit );\n`} resettable />\n"))),(0,l.kt)(o.Z,{value:"precompute",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<RShell\n    code="abs(c(-2,3,-1))"\n    precompute\n    disabled\n    lines={2}\n/>\n'))),(0,l.kt)(o.Z,{value:"usingLibraries",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RShell libraries={['dplyr']} code={'starwars %>% filter(species == \"Droid\")'} lines={2} />\n"))),(0,l.kt)(o.Z,{value:"addPreceding",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<RShell code="library(dplyr)" lines={2} disabled />\n\n<RShell code={\'starwars %>% filter(species == "Droid")\'} addPreceding lines={2} />\n'))),(0,l.kt)(o.Z,{value:"hintsAndSolution",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'**(a)** Use the lm() function to regress `Price` on: `EngineSize`, `Origin`, `MPG.highway`, `MPG.city` and `Horsepower`.\n\n<RShell \n    id="prob1a"\n    code="" \n    solution={`cars.lm <- lm(Price ~ EngineSize + Origin + MPG.highway + MPG.city + Horsepower,\ndata = Cars93)\nsummary(cars.lm)`} \n    lines={5} \n    hints={["Use the model formula syntax to specify your regression equation. Type ?formula if you don\'t remember how formulas work.","You can use the summary() function to retrieve a detailed regression output for a lm object"]}\n/>\n')))))}f.isMDXComponent=!0},386010:function(e,n,t){function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function a(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}t.d(n,{Z:function(){return a}})}}]);