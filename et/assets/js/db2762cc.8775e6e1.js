"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5104],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var i=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),m=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return i.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=m(n),c=r,k=d["".concat(u,".").concat(c)]||d[c]||p[c]||a;return n?i.createElement(k,l(l({ref:t},s),{},{components:n})):i.createElement(k,l({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<a;m++)l[m]=n[m];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},532350:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return s},default:function(){return d}});var i=n(487462),r=n(263366),a=(n(202784),n(603905)),l=["components"],o={id:"timer",title:"Timer",sidebar_label:"Timer"},u=void 0,m={unversionedId:"timer",id:"timer",title:"Timer",description:"Kuvab taimer, mis k\xe4ivitab ettem\xe4\xe4ratud tagasil\xf6\xf6gi, kui aeg on m\xf6\xf6das. N\xe4ide kasutusjuhtumiks on viktoriinide ajastamine.",source:"@site/i18n/et/docusaurus-plugin-content-docs/current/timer.md",sourceDirName:".",slug:"/timer",permalink:"/et/docs/timer",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/timer.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1.6.2021",frontMatter:{id:"timer",title:"Timer",sidebar_label:"Timer"},sidebar:"docs",previous:{title:"Runner",permalink:"/et/docs/runner"},next:{title:"Unveil",permalink:"/et/docs/unveil"}},s=[{value:"Valikud",id:"valikud",children:[],level:2},{value:"N\xe4ited",id:"n\xe4ited",children:[],level:2}],p={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Kuvab taimer, mis k\xe4ivitab ettem\xe4\xe4ratud tagasil\xf6\xf6gi, kui aeg on m\xf6\xf6das. N\xe4ide kasutusjuhtumiks on viktoriinide ajastamine."),(0,a.kt)("h2",{id:"valikud"},"Valikud"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"id")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),': unikaalne "string"-tunnus taimerile. Kui ID on m\xe4\xe4ratud, on taimerikomponent p\xfcsiv ka p\xe4rast lehek\xfclje uuendamist.. Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"active")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean (required)"),": lipp, mida saab l\xfclitada, et k\xe4ivitada v\xf5i peatada taimer.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"belowZero")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollib, kas taimer j\xe4tkab loendamist p\xe4rast kestuse ammendumist. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"duration")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number (required)"),": ajaja kestus sekundites. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"invisible")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollib, kas taimer peaks olema peidetud. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"legend")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": tekst, mis kuvatakse taimeri ees. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline stiilid. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"onTimeUp")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),": tagasikutsumine, mis k\xe4ivitub, kui taimer l\xf5peb. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"onTimeUp() {}"),".")),(0,a.kt)("h2",{id:"n\xe4ited"},"N\xe4ited"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Timer \n    id='test-quiz'\n    active={true} \n    duration={50} \n    onTimeUp={() => {\n      alert( 'done' );\n    }}\n/>\n")))}d.isMDXComponent=!0}}]);