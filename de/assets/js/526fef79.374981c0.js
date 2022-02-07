"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6799],{603905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(202784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=p;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},939337:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var r=t(487462),a=t(263366),i=(t(202784),t(603905)),l=["components"],o={id:"causality-diagram",title:"Causality Diagram",sidebar_label:"Causality Diagram"},u=void 0,c={unversionedId:"learn/causality-diagram",id:"learn/causality-diagram",title:"Causality Diagram",description:"Eine Lernkomponente zur Veranschaulichung des Einflusses einer Confounding-Variable bei der Beurteilung einer kausalen Beziehung zwischen zwei Variablen und der Randomisierung.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/learn/causality-diagram.md",sourceDirName:"learn",slug:"/learn/causality-diagram",permalink:"/de/docs/learn/causality-diagram",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/causality-diagram.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21.2.2021",frontMatter:{id:"causality-diagram",title:"Causality Diagram",sidebar_label:"Causality Diagram"},sidebar:"docs",previous:{title:"Unveil",permalink:"/de/docs/unveil"},next:{title:"Continuous CLT",permalink:"/de/docs/learn/clt-continuous"}},s=[{value:"Optionen",id:"optionen",children:[],level:2},{value:"Beispiele",id:"beispiele",children:[],level:2}],d={toc:s};function p(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Eine Lernkomponente zur Veranschaulichung des Einflusses einer Confounding-Variable bei der Beurteilung einer kausalen Beziehung zwischen zwei Variablen und der Randomisierung."),(0,i.kt)("h2",{id:"optionen"},"Optionen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"x")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),": Name der erkl\xe4renden Variable. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'Lights at Night'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"y")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),": Name der Antwortvariable. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'Child Myopia'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"z")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),": Name der st\xf6ranf\xe4lligen Variablen. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'Parental Myopia'"),".")),(0,i.kt)("h2",{id:"beispiele"},"Beispiele"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<LearnCausalityDiagram x="X" y="Y" z="Z" />\n')))}p.isMDXComponent=!0}}]);