"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[45675],{603905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(202784);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(r),c=i,f=d["".concat(u,".").concat(c)]||d[c]||m[c]||a;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},847784:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return b}});var n=r(603905),i=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&s(e,r,t[r]);if(o)for(var r of o(t))p.call(t,r)&&s(e,r,t[r]);return e};const m={id:"timer",title:"Timer",sidebar_label:"Timer"},c=void 0,f={unversionedId:"timer",id:"timer",title:"Timer",description:"Viser en timer, der udl\xf8ser et foruddefineret callback, n\xe5r tiden er g\xe5et. Et eksempel p\xe5 et brugsscenarie er timingen af quizzer.",source:"@site/i18n/da/docusaurus-plugin-content-docs/current/timer.md",sourceDirName:".",slug:"/timer",permalink:"/da/docs/timer",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/timer.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. jun. 2021",frontMatter:{id:"timer",title:"Timer",sidebar_label:"Timer"},sidebar:"docs",previous:{title:"Runner",permalink:"/da/docs/runner"},next:{title:"Unveil",permalink:"/da/docs/unveil"}},k={},b=[{value:"Indstillinger",id:"indstillinger",level:2},{value:"Eksempler",id:"eksempler",level:2}],g={toc:b};function v(e){var t,r=e,{components:i}=r,s=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=d(d({},g),s),a(t,l({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Viser en timer, der udl\xf8ser et foruddefineret callback, n\xe5r tiden er g\xe5et. Et eksempel p\xe5 et brugsscenarie er timingen af quizzer."),(0,n.kt)("h2",d({},{id:"indstillinger"}),"Indstillinger"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"id")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": det unikke ",(0,n.kt)("inlineCode",{parentName:"li"},"string")," ID for timeren. Hvis der er angivet et ID, er timer-komponenten vedvarende i forbindelse med opdateringer af siden. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"active")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean (required)"),": flag, der kan skiftes til at starte eller s\xe6tte timeren p\xe5 pause. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"belowZero")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": styrer, om timeren forts\xe6tter med at t\xe6lle, n\xe5r varigheden er udl\xf8bet. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"duration")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number (required)"),": varighed i sekunder for timeren. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"invisible")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": styrer, om timeren skal v\xe6re skjult. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"legend")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),": tekst, der vises foran timeren. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"style")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline-stilarter. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"onTimeUp")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"function"),": callback, der p\xe5kaldes, n\xe5r timeren udl\xf8ber. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"onTimeUp() {}"),".")),(0,n.kt)("h2",d({},{id:"eksempler"}),"Eksempler"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Timer \n    id='test-quiz'\n    active={true} \n    duration={50} \n    onTimeUp={() => {\n      alert( 'done' );\n    }}\n/>\n")))}v.isMDXComponent=!0}}]);