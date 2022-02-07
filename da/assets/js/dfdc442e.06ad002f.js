"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6585],{603905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return k}});var r=t(202784);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=u(t),k=i,c=m["".concat(p,".").concat(k)]||m[k]||s[k]||a;return t?r.createElement(c,l(l({ref:n},d),{},{components:t})):r.createElement(c,l({ref:n},d))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},627757:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var r=t(487462),i=t(263366),a=(t(202784),t(603905)),l=["components"],o={id:"number-input",title:"Number Input",sidebar_label:"Number Input"},p=void 0,u={unversionedId:"input/number-input",id:"input/number-input",title:"Number Input",description:"En talindgangskomponent. Kan bruges som en del af et ISLE-dashboard eller som en selvst\xe6ndig komponent. I sidstn\xe6vnte tilf\xe6lde skal du h\xe5ndtere \xe6ndringer via onChange-attributten eller binde v\xe6rdien til en global variabel via bind-attributten.",source:"@site/i18n/da/docusaurus-plugin-content-docs/current/input/number.md",sourceDirName:"input",slug:"/input/number-input",permalink:"/da/docs/input/number-input",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/number.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1.6.2021",frontMatter:{id:"number-input",title:"Number Input",sidebar_label:"Number Input"},sidebar:"docs",previous:{title:"Checkbox Input",permalink:"/da/docs/input/checkbox-input"},next:{title:"Proportions Input",permalink:"/da/docs/input/proportions-input"}},d=[{value:"Indstillinger",id:"indstillinger",children:[],level:2},{value:"Eksempler",id:"eksempler",children:[],level:2}],s={toc:d};function m(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"En talindgangskomponent. Kan bruges som en del af et ISLE-dashboard eller som en selvst\xe6ndig komponent. I sidstn\xe6vnte tilf\xe6lde skal du h\xe5ndtere \xe6ndringer via ",(0,a.kt)("inlineCode",{parentName:"p"},"onChange"),"-attributten eller binde v\xe6rdien til en global variabel via ",(0,a.kt)("inlineCode",{parentName:"p"},"bind"),"-attributten."),(0,a.kt)("h2",{id:"indstillinger"},"Indstillinger"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"bind")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": navnet p\xe5 den globale variabel for det nummer, der skal tildeles. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"defaultValue")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": v\xe6rdi, der angiver inputets standardv\xe6rdi ved opstart. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"disabled")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": boolean, der angiver, om indgangen er aktiv eller ej. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"inline")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": angiver, om input vises inline. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"legend")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|node)"),": streng, der angiver den tekst, der vises ved siden af talindtastningen. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"max")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": tal, der angiver den maksimale v\xe6rdi, der kan inds\xe6ttes. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"min")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": tal, der angiver den mindste mulige v\xe6rdi, der kan inds\xe6ttes. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"numbersOnly")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollerer, om kun tal accepteres. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onBlur")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": callback-funktion, der skal p\xe5kaldes, n\xe5r der anvendes en sl\xf8ringsmetode. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onBlur() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onChange")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": callback-funktion, der skal p\xe5kaldes, n\xe5r talindtastningen \xe6ndres. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onChange() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onKeyDown")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": callback-funktion, der skal p\xe5kaldes, n\xe5r en tast trykkes ned. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onKeyDown() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onKeyPress")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": callback-funktion, der skal p\xe5kaldes, n\xe5r en tast indtastes. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onKeyPress() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onKeyUp")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": callback-funktion, der skal p\xe5kaldes, n\xe5r tasten slippes. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onKeyUp() {}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"step")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(number|string)"),": tal, der angiver de trinvise \xe6ndringer ved brug af pilene til for\xf8gelse. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline-stilarter. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"inputStyle")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline-stilarter for indgangselement. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"value")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": talv\xe6rdi (for kontrolleret komponent). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"tooltip")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": tooltip-streng (hvis den ikke er indstillet, genereres tooltippet automatisk). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"tooltipPlacement")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": retning af v\xe6rkt\xf8jstip. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'left'"),".")),(0,a.kt)("h2",{id:"eksempler"},"Eksempler"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<NumberInput\n    legend="Number of observations"\n    defaultValue={20}\n    step={5}\n/>\n')))}m.isMDXComponent=!0}}]);