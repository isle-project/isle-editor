"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2369],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var i=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=i.createContext({}),p=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=p(n),d=a,c=k["".concat(u,".").concat(d)]||k[d]||m[d]||r;return n?i.createElement(c,l(l({ref:t},s),{},{components:n})):i.createElement(c,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=k;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},543137:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return k}});var i=n(487462),a=n(263366),r=(n(202784),n(603905)),l=["components"],o={id:"number-input",title:"Number Input",sidebar_label:"Number Input"},u=void 0,p={unversionedId:"input/number-input",id:"input/number-input",title:"Number Input",description:"Skai\u010di\u0173 \u012fvesties komponentas. Gali b\u016bti naudojamas kaip ISLE prietais\u0173 skydelio dalis arba atskirai. Pastaruoju atveju norite apdoroti pakeitimus naudodami atribut\u0105 onChange arba susieti reik\u0161m\u0119 su pasauliniu kintamuoju naudodami atribut\u0105 bind.",source:"@site/i18n/lt/docusaurus-plugin-content-docs/current/input/number.md",sourceDirName:"input",slug:"/input/number-input",permalink:"/lt/docs/input/number-input",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/number.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021-06-01",frontMatter:{id:"number-input",title:"Number Input",sidebar_label:"Number Input"},sidebar:"docs",previous:{title:"Checkbox Input",permalink:"/lt/docs/input/checkbox-input"},next:{title:"Proportions Input",permalink:"/lt/docs/input/proportions-input"}},s=[{value:"Parinktys",id:"parinktys",children:[],level:2},{value:"Pavyzd\u017eiai",id:"pavyzd\u017eiai",children:[],level:2}],m={toc:s};function k(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Skai\u010di\u0173 \u012fvesties komponentas. Gali b\u016bti naudojamas kaip ISLE prietais\u0173 skydelio dalis arba atskirai. Pastaruoju atveju norite apdoroti pakeitimus naudodami atribut\u0105 ",(0,r.kt)("inlineCode",{parentName:"p"},"onChange")," arba susieti reik\u0161m\u0119 su pasauliniu kintamuoju naudodami atribut\u0105 ",(0,r.kt)("inlineCode",{parentName:"p"},"bind"),"."),(0,r.kt)("h2",{id:"parinktys"},"Parinktys"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"bind")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": pasaulinio kintamojo, kuriam priskiriamas skai\u010dius, pavadinimas. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": reik\u0161m\u0117, nurodanti numatyt\u0105j\u0105 \u012fvesties reik\u0161m\u0119 paleidimo metu.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disabled")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": loginis rodiklis, nurodantis, ar \u012fvestis aktyvi, ar ne.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inline")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": nurodo, ar \u012fvestis bus rodoma eilut\u0117je.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legend")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": eilut\u0117, nurodanti tekst\u0105, rodom\u0105 \u0161alia skai\u010diaus \u012fvesties.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"max")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": skai\u010dius, nurodantis did\u017eiausi\u0105 galim\u0105 \u012fterpti vert\u0119.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"min")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": skai\u010dius, nurodantis ma\u017eiausi\u0105 galim\u0105 \u012fterpti vert\u0119.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"numbersOnly")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroliuoja, ar priimami tik skai\u010diai.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onBlur")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": gr\u012f\u017etamojo ry\u0161io funkcija, kuri\u0105 reikia i\u0161kviesti, kai naudojamas suliejimo metodas. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onBlur() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChange")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": gr\u012f\u017etamojo ry\u0161io funkcija, kuri bus i\u0161kvie\u010diama, kai bus pakeistas \u012fvestas skai\u010dius.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onKeyDown")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": gr\u012f\u017etamojo ry\u0161io funkcija, kuri bus i\u0161kvie\u010diama, kai bus paspaustas bet kuris klavi\u0161as.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onKeyDown() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onKeyPress")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": gr\u012f\u017etamojo ry\u0161io funkcija, kuri bus i\u0161kvie\u010diama \u012fvedus bet kur\u012f klavi\u0161\u0105.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onKeyPress() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onKeyUp")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": gr\u012f\u017etamojo ry\u0161io funkcija, kuri bus inicijuojama atleidus klavi\u0161\u0105.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onKeyUp() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"step")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(number|string)"),": skai\u010dius, nurodantis laipsni\u0161kus poky\u010dius, kai naudojamos didinimo rodykl\u0117s.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS eilut\u0117s stiliai. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inputStyle")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": \u012evesties elemento CSS \u012fvesties stilius. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"value")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": skai\u010diaus reik\u0161m\u0117 (kontroliuojamam komponentui). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tooltip")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u012franki\u0173 u\u017euominos eilut\u0117 (jei nenustatyta, \u012franki\u0173 u\u017euomina generuojama automati\u0161kai). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tooltipPlacement")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": \u012franki\u0173 u\u017euominos kryptis. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'left'"),".")),(0,r.kt)("h2",{id:"pavyzd\u017eiai"},"Pavyzd\u017eiai"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<NumberInput\n    legend="Number of observations"\n    defaultValue={20}\n    step={5}\n/>\n')))}k.isMDXComponent=!0}}]);