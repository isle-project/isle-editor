"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[748],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},765763:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(487462),i=n(263366),a=(n(202784),n(603905)),o=["components"],l={id:"unveil",title:"Unveil",sidebar_label:"Unveil"},s=void 0,u={unversionedId:"unveil",id:"unveil",title:"Unveil",description:"El componente de apariencia har\xe1 que todos sus hijos sean visibles despu\xe9s de un tiempo determinado.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/unveil.md",sourceDirName:".",slug:"/unveil",permalink:"/es/docs/unveil",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/unveil.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1614117783,formattedLastUpdatedAt:"23/2/2021",frontMatter:{id:"unveil",title:"Unveil",sidebar_label:"Unveil"},sidebar:"docs",previous:{title:"Timer",permalink:"/es/docs/timer"},next:{title:"Causality Diagram",permalink:"/es/docs/learn/causality-diagram"}},c={},p=[{value:"Opciones",id:"opciones",level:2},{value:"Ejemplos",id:"ejemplos",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"El componente de apariencia har\xe1 que todos sus hijos sean visibles despu\xe9s de un tiempo determinado."),(0,a.kt)("h2",{id:"opciones"},"Opciones"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"active")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": controla si el contador debe estar activo. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"delay")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": n\xfamero de milisegundos antes de que aparezca el componente. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"1000"),".")),(0,a.kt)("h2",{id:"ejemplos"},"Ejemplos"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Unveil delay={5000} >\n    <span>When active, I will appear after five seconds...</span>\n</Unveil>\n")))}m.isMDXComponent=!0}}]);