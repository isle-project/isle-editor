"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[34252],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=p(n),d=i,c=k["".concat(u,".").concat(d)]||k[d]||m[d]||r;return n?a.createElement(c,l(l({ref:t},s),{},{components:n})):a.createElement(c,l({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=k;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},99575:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return k},metadata:function(){return c},toc:function(){return N}});var a=n(603905),i=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&s(e,n,t[n]);return e};const k={id:"number-input",title:"Number Input",sidebar_label:"Number Input"},d=void 0,c={unversionedId:"input/number-input",id:"input/number-input",title:"Number Input",description:"Numeron sy\xf6tt\xf6komponentti. Voidaan k\xe4ytt\xe4\xe4 osana ISLE-kojelautaa tai itsen\xe4isesti. J\xe4lkimm\xe4isess\xe4 tapauksessa haluat k\xe4sitell\xe4 muutokset onChange-attribuutilla tai sitoa arvon globaaliin muuttujaan bind-attribuutilla.",source:"@site/i18n/fi/docusaurus-plugin-content-docs/current/input/number.md",sourceDirName:"input",slug:"/input/number-input",permalink:"/fi/docs/input/number-input",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/number.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1658117079,formattedLastUpdatedAt:"18. hein\xe4k. 2022",frontMatter:{id:"number-input",title:"Number Input",sidebar_label:"Number Input"},sidebar:"docs",previous:{title:"Checkbox Input",permalink:"/fi/docs/input/checkbox-input"},next:{title:"Proportions Input",permalink:"/fi/docs/input/proportions-input"}},f={},N=[{value:"Vaihtoehdot",id:"vaihtoehdot",level:2},{value:"Esimerkkej\xe4",id:"esimerkkej\xe4",level:2}],b={toc:N};function y(e){var t,n=e,{components:i}=n,s=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},b),s),r(t,l({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Numeron sy\xf6tt\xf6komponentti. Voidaan k\xe4ytt\xe4\xe4 osana ISLE-kojelautaa tai itsen\xe4isesti. J\xe4lkimm\xe4isess\xe4 tapauksessa haluat k\xe4sitell\xe4 muutokset ",(0,a.kt)("inlineCode",{parentName:"p"},"onChange"),"-attribuutilla tai sitoa arvon globaaliin muuttujaan ",(0,a.kt)("inlineCode",{parentName:"p"},"bind"),"-attribuutilla."),(0,a.kt)("h2",m({},{id:"vaihtoehdot"}),"Vaihtoehdot"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"bind")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": sen globaalin muuttujan nimi, johon numero osoitetaan.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": arvo, joka ilmaisee sy\xf6tteen oletusarvon k\xe4ynnistyksen yhteydess\xe4.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"disabled")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": boolean, joka ilmaisee, onko tulo aktiivinen vai ei.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"inline")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": ilmaisee, n\xe4ytet\xe4\xe4nk\xf6 sy\xf6tt\xf6 riviss\xe4. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"legend")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|node)"),": merkkijono, joka ilmaisee numeron vieress\xe4 n\xe4kyv\xe4n tekstin.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"max")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": numero, joka osoittaa suurimman sallitun sy\xf6tett\xe4v\xe4n arvon.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"min")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": numero, joka osoittaa pienimm\xe4n mahdollisen arvon, joka voidaan lis\xe4t\xe4.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"numbersOnly")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": valvoo, hyv\xe4ksyt\xe4\xe4nk\xf6 vain numerot. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"placeholder")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": merkkijono, joka osoittaa tekstin, joka n\xe4ytet\xe4\xe4n, kun sy\xf6tt\xf6 on tyhj\xe4 (edellytt\xe4\xe4, ett\xe4 ",(0,a.kt)("inlineCode",{parentName:"li"},"defaultValue")," on asetettu arvoon ",(0,a.kt)("inlineCode",{parentName:"li"},"null")," tai ",(0,a.kt)("inlineCode",{parentName:"li"},"undefined"),").. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'0'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onBlur")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": callback-funktio, joka kutsutaan, kun k\xe4ytet\xe4\xe4n blur-menetelm\xe4\xe4. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onBlur() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onChange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": takaisinkutsufunktio, joka k\xe4ynnistet\xe4\xe4n, kun numeron sy\xf6tt\xf6\xe4 muutetaan.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onKeyDown")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": takaisinkutsufunktio, joka k\xe4ynnistet\xe4\xe4n, kun jokin n\xe4pp\xe4in painetaan alas.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onKeyDown() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onKeyPress")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": takaisinkutsufunktio, joka k\xe4ynnistet\xe4\xe4n, kun jokin n\xe4pp\xe4in sy\xf6tet\xe4\xe4n.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onKeyPress() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onKeyUp")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": takaisinkutsufunktio, joka k\xe4ynnistet\xe4\xe4n, kun n\xe4pp\xe4in vapautetaan.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onKeyUp() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"step")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(number|string)"),": numero, joka osoittaa asteittaiset muutokset, kun k\xe4ytet\xe4\xe4n lis\xe4ysnuolia.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS-inline-tyylit. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"inputStyle")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline-tyylit sy\xf6tt\xf6elementille. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"value")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": numeroarvo (valvottavan komponentin osalta). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"tooltip")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": tooltip-merkkijono (jos sit\xe4 ei ole asetettu, tooltip luodaan automaattisesti). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"tooltipPlacement")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": ty\xf6kaluvihjeen suunta. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'left'"),".")),(0,a.kt)("h2",m({},{id:"esimerkkej\xe4"}),"Esimerkkej\xe4"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<NumberInput\n    legend="Number of observations"\n    defaultValue={20}\n    step={5}\n/>\n')))}y.isMDXComponent=!0}}]);