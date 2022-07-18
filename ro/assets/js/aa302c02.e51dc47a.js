"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[64155],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var a=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),s=i,f=d["".concat(u,".").concat(s)]||d[s]||m[s]||r;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},162986:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return b}});var a=n(603905),i=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&c(e,n,t[n]);return e};const d={id:"number-input",title:"Number Input",sidebar_label:"Number Input"},s=void 0,f={unversionedId:"input/number-input",id:"input/number-input",title:"Number Input",description:"O component\u0103 de intrare a numerelor. Poate fi utilizat\u0103 ca parte a unui tablou de bord ISLE sau de sine st\u0103t\u0103tor. \xcen acest din urm\u0103 caz, dori\u021bi s\u0103 gestiona\u021bi modific\u0103rile prin atributul onChange sau s\u0103 lega\u021bi valoarea de o variabil\u0103 global\u0103 prin atributul bind.",source:"@site/i18n/ro/docusaurus-plugin-content-docs/current/input/number.md",sourceDirName:"input",slug:"/input/number-input",permalink:"/ro/docs/input/number-input",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/number.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1658117079,formattedLastUpdatedAt:"18 iul. 2022",frontMatter:{id:"number-input",title:"Number Input",sidebar_label:"Number Input"},sidebar:"docs",previous:{title:"Checkbox Input",permalink:"/ro/docs/input/checkbox-input"},next:{title:"Proportions Input",permalink:"/ro/docs/input/proportions-input"}},k={},b=[{value:"Op\u021biuni",id:"op\u021biuni",level:2},{value:"Exemple",id:"exemple",level:2}],N={toc:b};function g(e){var t,n=e,{components:i}=n,c=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},N),c),r(t,l({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"O component\u0103 de intrare a numerelor. Poate fi utilizat\u0103 ca parte a unui tablou de bord ISLE sau de sine st\u0103t\u0103tor. \xcen acest din urm\u0103 caz, dori\u021bi s\u0103 gestiona\u021bi modific\u0103rile prin atributul ",(0,a.kt)("inlineCode",{parentName:"p"},"onChange")," sau s\u0103 lega\u021bi valoarea de o variabil\u0103 global\u0103 prin atributul ",(0,a.kt)("inlineCode",{parentName:"p"},"bind"),"."),(0,a.kt)("h2",m({},{id:"op\u021biuni"}),"Op\u021biuni"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"bind")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": numele variabilei globale pentru num\u0103rul care urmeaz\u0103 a fi atribuit. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": valoare care indic\u0103 valoarea implicit\u0103 a intr\u0103rii la pornire. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"disabled")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": boolean care indic\u0103 dac\u0103 intrarea este activ\u0103 sau nu. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"inline")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": indic\u0103 dac\u0103 datele de intrare sunt afi\u0219ate \xeen linie. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"legend")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|node)"),": \u0219ir de caractere care indic\u0103 textul afi\u0219at l\xe2ng\u0103 num\u0103rul de intrare. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"max")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": num\u0103r care indic\u0103 valoarea maxim\u0103 care poate fi introdus\u0103. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"min")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": num\u0103r care indic\u0103 cea mai mic\u0103 valoare posibil\u0103 care poate fi introdus\u0103. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"numbersOnly")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": controleaz\u0103 dac\u0103 sunt acceptate numai numere. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"placeholder")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \u0219ir de caractere care indic\u0103 textul afi\u0219at atunci c\xe2nd intrarea este goal\u0103 (necesit\u0103 ca ",(0,a.kt)("inlineCode",{parentName:"li"},"defaultValue")," s\u0103 fie setat la ",(0,a.kt)("inlineCode",{parentName:"li"},"null")," sau ",(0,a.kt)("inlineCode",{parentName:"li"},"undefined"),"). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'0'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onBlur")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": func\u021bia de rechemare care trebuie invocat\u0103 atunci c\xe2nd se utilizeaz\u0103 o metod\u0103 de estompare. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onBlur() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onChange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": func\u021bia de callback care trebuie invocat\u0103 atunci c\xe2nd se modific\u0103 num\u0103rul introdus. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onKeyDown")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": func\u021bia de callback care trebuie invocat\u0103 atunci c\xe2nd este ap\u0103sat\u0103 orice tast\u0103. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onKeyDown() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onKeyPress")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": func\u021bia de callback care trebuie invocat\u0103 la introducerea oric\u0103rei taste. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onKeyPress() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onKeyUp")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": func\u021bia de apelare care trebuie invocat\u0103 atunci c\xe2nd se elibereaz\u0103 tastatura. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onKeyUp() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"step")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(number|string)"),": num\u0103rul care indic\u0103 modific\u0103rile incrementale atunci c\xe2nd se utilizeaz\u0103 s\u0103ge\u021bile de incrementare. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": Stiluri inline CSS. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"inputStyle")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": Stiluri CSS inline pentru elementul de intrare. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"value")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": valoarea numeric\u0103 (pentru componenta controlat\u0103). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"tooltip")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": \u0219ir de caractere pentru tooltip (dac\u0103 nu este setat, tooltip-ul este generat automat). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"tooltipPlacement")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": direc\u021bia indicatorului de instrumente. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'left'"),".")),(0,a.kt)("h2",m({},{id:"exemple"}),"Exemple"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<NumberInput\n    legend="Number of observations"\n    defaultValue={20}\n    step={5}\n/>\n')))}g.isMDXComponent=!0}}]);