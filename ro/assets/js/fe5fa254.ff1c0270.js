"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21887],{603905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(202784);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=i,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},979253:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return y}});var n=r(603905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&p(e,r,t[r]);return e};const m={id:"distribution-geometric",title:"Geometric Distribution",sidebar_label:"Geometric Distribution"},d=void 0,f={unversionedId:"learn/distribution-geometric",id:"learn/distribution-geometric",title:"Geometric Distribution",description:"O component\u0103 de \xeenv\u0103\u021bare pentru calcularea probabilit\u0103\u021bilor unei distribu\u021bii geometrice.",source:"@site/i18n/ro/docusaurus-plugin-content-docs/current/learn/distribution-geometric.md",sourceDirName:"learn",slug:"/learn/distribution-geometric",permalink:"/ro/docs/learn/distribution-geometric",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-geometric.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1 iun. 2021",frontMatter:{id:"distribution-geometric",title:"Geometric Distribution",sidebar_label:"Geometric Distribution"},sidebar:"docs",previous:{title:"Gamma Distribution",permalink:"/ro/docs/learn/distribution-gamma"},next:{title:"Hypergeometric Distribution",permalink:"/ro/docs/learn/distribution-hypergeometric"}},b={},y=[{value:"Op\u021biuni",id:"op\u021biuni",level:2},{value:"Exemple",id:"exemple",level:2}],g={toc:y};function v(e){var t,r=e,{components:i}=r,p=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},g),p),o(t,a({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"O component\u0103 de \xeenv\u0103\u021bare pentru calcularea probabilit\u0103\u021bilor unei distribu\u021bii geometrice."),(0,n.kt)("h2",s({},{id:"op\u021biuni"}),"Op\u021biuni"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"countTrials")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": se seteaz\u0103 la true dac\u0103, \xeen loc s\u0103 se numere num\u0103rul de e\u0219ecuri p\xe2n\u0103 la primul succes, trebuie definit\u0103 o variabil\u0103 aleatoare dintr-o distribu\u021bie geometric\u0103 ca fiind num\u0103rul de \xeencerc\u0103ri p\xe2n\u0103 la primul succes.. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"step")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"(number|string)"),": m\u0103rimea pasului de intrare a scroll-ului. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"0.01"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"style")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"object"),": Stiluri inline CSS. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,n.kt)("h2",s({},{id:"exemple"}),"Exemple"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LearnGeometricDistribution />\n")))}v.isMDXComponent=!0}}]);