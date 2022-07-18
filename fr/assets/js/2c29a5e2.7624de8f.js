"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[54370],{603905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return c}});var r=t(202784);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(t),c=i,f=d["".concat(u,".").concat(c)]||d[c]||m[c]||a;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},216555:function(e,n,t){t.r(n),t.d(n,{assets:function(){return k},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return b}});var r=t(603905),i=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))u.call(n,t)&&s(e,t,n[t]);if(o)for(var t of o(n))p.call(n,t)&&s(e,t,n[t]);return e};const d={id:"number-input",title:"Number Input",sidebar_label:"Number Input"},c=void 0,f={unversionedId:"input/number-input",id:"input/number-input",title:"Number Input",description:'Un \xe9l\xe9ment de saisie de chiffres. Peut \xeatre utilis\xe9 dans le cadre d\'un tableau de bord ISLE ou de mani\xe8re autonome. Dans ce dernier cas, vous souhaitez g\xe9rer les modifications via l\'attribut "onChange" ou lier la valeur \xe0 une variable globale via l\'attribut "bind".',source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/input/number.md",sourceDirName:"input",slug:"/input/number-input",permalink:"/fr/docs/input/number-input",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/number.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1658117079,formattedLastUpdatedAt:"18 juil. 2022",frontMatter:{id:"number-input",title:"Number Input",sidebar_label:"Number Input"},sidebar:"docs",previous:{title:"Checkbox Input",permalink:"/fr/docs/input/checkbox-input"},next:{title:"Proportions Input",permalink:"/fr/docs/input/proportions-input"}},k={},b=[{value:"Options",id:"options",level:2},{value:"Exemples",id:"exemples",level:2}],N={toc:b};function g(e){var n,t=e,{components:i}=t,s=((e,n)=>{var t={};for(var r in e)u.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&o)for(var r of o(e))n.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=m(m({},N),s),a(n,l({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,'Un \xe9l\xe9ment de saisie de chiffres. Peut \xeatre utilis\xe9 dans le cadre d\'un tableau de bord ISLE ou de mani\xe8re autonome. Dans ce dernier cas, vous souhaitez g\xe9rer les modifications via l\'attribut "onChange" ou lier la valeur \xe0 une variable globale via l\'attribut "bind".'),(0,r.kt)("h2",m({},{id:"options"}),"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"bind")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": nom de la variable globale pour le num\xe9ro \xe0 attribuer. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": valeur indiquant la valeur par d\xe9faut de l'entr\xe9e au d\xe9marrage. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disabled")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": bool\xe9en indiquant si l'entr\xe9e est active ou non. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inline")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": indique si l'entr\xe9e est affich\xe9e en ligne. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legend")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": cha\xeene de caract\xe8res indiquant le texte affich\xe9 \xe0 c\xf4t\xe9 du num\xe9ro saisi. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"max")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": num\xe9ro indiquant la valeur maximale qui peut \xeatre ins\xe9r\xe9e. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"min")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": num\xe9ro indiquant la plus petite valeur possible qui peut \xeatre ins\xe9r\xe9e. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"numbersOnly")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": contr\xf4le si seuls les num\xe9ros sont accept\xe9s. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"placeholder")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": cha\xeene de caract\xe8res indiquant le texte affich\xe9 lorsque l'entr\xe9e est vide (n\xe9cessite que ",(0,r.kt)("inlineCode",{parentName:"li"},"defaultValue")," soit d\xe9fini \xe0 ",(0,r.kt)("inlineCode",{parentName:"li"},"null")," ou ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'0'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onBlur")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": fonction de rappel \xe0 invoquer en cas d'utilisation d'une m\xe9thode de flou. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onBlur() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChange")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": fonction de rappel \xe0 invoquer en cas de modification de la saisie du num\xe9ro. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onKeyDown")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": fonction de rappel \xe0 invoquer en appuyant sur n'importe quelle touche. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onKeyDown() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onKeyPress")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": fonction de rappel \xe0 invoquer lors de la saisie de toute cl\xe9. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onKeyPress() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onKeyUp")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": fonction de rappel \xe0 invoquer lorsque la cl\xe9 est lib\xe9r\xe9e. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onKeyUp() {}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"step")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(number|string)"),": num\xe9ro indiquant les changements progressifs lors de l'utilisation des fl\xe8ches d'augmentation. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": Styles CSS en ligne. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inputStyle")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": Styles CSS en ligne pour les \xe9l\xe9ments d'entr\xe9e. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"value")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": valeur num\xe9rique (pour les composants contr\xf4l\xe9s). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tooltip")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": cha\xeene d'info-bulle (si elle n'est pas d\xe9finie, l'info-bulle est automatiquement g\xe9n\xe9r\xe9e). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tooltipPlacement")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": direction de l'infobulle. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'left'"),".")),(0,r.kt)("h2",m({},{id:"exemples"}),"Exemples"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<NumberInput\n    legend="Number of observations"\n    defaultValue={20}\n    step={5}\n/>\n')))}g.isMDXComponent=!0}}]);