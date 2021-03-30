(window.webpackJsonp=window.webpackJsonp||[]).push([[1205],{231:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return c}));var r=t(3),i=t(7),a=(t(0),t(410)),o={id:"proportions-input",title:"Proportions Input",sidebar_label:"Proportions Input"},l={unversionedId:"input/proportions-input",id:"input/proportions-input",isDocsHomePage:!1,title:"Proportions Input",description:"Een proportionele invoercomponent. Kan worden gebruikt als onderdeel van een ISLE-dashboard of stand-alone. In het laatste geval wilt u veranderingen verwerken via het on-Change attribuut of de waarde binden aan een globale variabele via het bind attribuut.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/input/proportions.md",slug:"/input/proportions-input",permalink:"/nl/docs/input/proportions-input",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/proportions.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21-2-2021",sidebar_label:"Proportions Input",sidebar:"docs",previous:{title:"Number Input",permalink:"/nl/docs/input/number-input"},next:{title:"Select Input",permalink:"/nl/docs/input/select-input"}},p=[{value:"Opties",id:"opties",children:[]},{value:"Voorbeelden",id:"voorbeelden",children:[]}],u={toc:p};function c(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Een proportionele invoercomponent. Kan worden gebruikt als onderdeel van een ISLE-dashboard of stand-alone. In het laatste geval wilt u veranderingen verwerken via het ",Object(a.b)("inlineCode",{parentName:"p"},"on-Change")," attribuut of de waarde binden aan een globale variabele via het ",Object(a.b)("inlineCode",{parentName:"p"},"bind")," attribuut."),Object(a.b)("h2",{id:"opties"},"Opties"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"colors")," | ",Object(a.b)("inlineCode",{parentName:"li"},"array<string>"),": reeks kleuren voor de taartdiagrammen. Indien niet gedefinieerd, zal een aangepaste kleurenschaal worden gebruikt. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"none"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"disabled")," | ",Object(a.b)("inlineCode",{parentName:"li"},"boolean"),": controleert of het invoerveld is gedeactiveerd. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"height")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": verhoudingen invoerhoogte (in px). Default: ",Object(a.b)("inlineCode",{parentName:"li"},"200"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"legends")," | ",Object(a.b)("inlineCode",{parentName:"li"},"array"),": groepslabels. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onChange")," | ",Object(a.b)("inlineCode",{parentName:"li"},"function"),": terugbelfunctie die moet worden ingeroepen wanneer een keuze wordt gemaakt. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"onChange(){}"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"precision")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": weergegeven nauwkeurigheid van de verhoudingen. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"1"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"step")," | ",Object(a.b)("inlineCode",{parentName:"li"},"number"),": de stap van de pijlen gezien bij het zweven met de cursor boven het invoerveld. Default: ",Object(a.b)("inlineCode",{parentName:"li"},"0.1"),".")),Object(a.b)("h2",{id:"voorbeelden"},"Voorbeelden"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<ProportionsInput\n    user\n    id="Survey"\n    question="Decide what is important"\n    group="Group decision"\n    nElements={3}\n    colors = {[ "red", "blue", "gold" ]}\n    personalHeight={300}\n    groupHeight={200}\n    margin="80px"\n    legends={[ "bitcoin", "old", "diamonds" ]}\n/>\n')))}c.isMDXComponent=!0},410:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=i.a.createContext({}),c=function(e){var n=i.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=c(e.components);return i.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},s=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),b=c(t),s=r,m=b["".concat(o,".").concat(s)]||b[s]||d[s]||a;return t?i.a.createElement(m,l(l({ref:n},u),{},{components:t})):i.a.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=s;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);