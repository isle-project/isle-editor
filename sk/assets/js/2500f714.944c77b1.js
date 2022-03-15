"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2067],{603905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(202784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},530710:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},assets:function(){return p},toc:function(){return s},default:function(){return m}});var r=t(487462),a=t(263366),o=(t(202784),t(603905)),i=["components"],l={id:"runner",title:"Runner",sidebar_label:"Runner"},u=void 0,c={unversionedId:"runner",id:"runner",title:"Runner",description:"Komponent runner vykon\xe1 dodan\xfa funkciu bu\u010f raz, alebo v danom intervale.",source:"@site/i18n/sk/docusaurus-plugin-content-docs/current/runner.md",sourceDirName:".",slug:"/runner",permalink:"/sk/docs/runner",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/runner.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. 6. 2021",frontMatter:{id:"runner",title:"Runner",sidebar_label:"Runner"},sidebar:"docs",previous:{title:"Revealer",permalink:"/sk/docs/revealer"},next:{title:"Timer",permalink:"/sk/docs/timer"}},p={},s=[{value:"Mo\u017enosti",id:"mo\u017enosti",level:2},{value:"Pr\xedklady",id:"pr\xedklady",level:2}],d={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Komponent runner vykon\xe1 dodan\xfa funkciu bu\u010f raz, alebo v danom intervale."),(0,o.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"active")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, \u010di m\xe1 by\u0165 be\u017eec akt\xedvny. Po aktiv\xe1cii sa v danom intervale (alebo raz) zavol\xe1 funkcia ",(0,o.kt)("inlineCode",{parentName:"li"},"onEvaluate"),".. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"interval")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),": po\u010det milisek\xfand medzi vyvolaniami pr\xedkazu ",(0,o.kt)("inlineCode",{parentName:"li"},"onEvaluate"),". Ak nie je nastaven\xfd \u017eiadny interval, funkcia sa vyvol\xe1 iba raz. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"onEvaluate")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"function"),": funkcia, ktor\xe1 sa m\xe1 vyvola\u0165. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"onEvaluate() {}"),".")),(0,o.kt)("h2",{id:"pr\xedklady"},"Pr\xedklady"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Runner\n    interval={2000}\n    onEvaluate={() => { console.log( 'Two seconds have passed...' ); }}\n/>\n")))}m.isMDXComponent=!0}}]);