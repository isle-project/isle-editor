"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9209],{603905:function(e,n,r){r.d(n,{Zo:function(){return d},kt:function(){return m}});var t=r(202784);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),c=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},d=function(e){var n=c(e.components);return t.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=c(r),m=a,f=s["".concat(u,".").concat(m)]||s[m]||p[m]||i;return r?t.createElement(f,l(l({ref:n},d),{},{components:r})):t.createElement(f,l({ref:n},d))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=s;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},927703:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return c},assets:function(){return d},toc:function(){return p},default:function(){return m}});var t=r(487462),a=r(263366),i=(r(202784),r(603905)),l=["components"],o={id:"venn-diagram-builder",title:"Venn Diagram Builder",sidebar_label:"Venn Diagram Builder"},u=void 0,c={unversionedId:"learn/venn-diagram-builder",id:"learn/venn-diagram-builder",title:"Venn Diagram Builder",description:"Budowniczy diagram\xf3w Venna.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/learn/venn-diagram-builder.md",sourceDirName:"learn",slug:"/learn/venn-diagram-builder",permalink:"/pl/docs/learn/venn-diagram-builder",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/venn-diagram-builder.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21.02.2021",frontMatter:{id:"venn-diagram-builder",title:"Venn Diagram Builder",sidebar_label:"Venn Diagram Builder"},sidebar:"docs",previous:{title:"Statistical Models",permalink:"/pl/docs/learn/statistical-models"},next:{title:"Word Venn Diagram",permalink:"/pl/docs/learn/word-venn-diagram"}},d={},p=[{value:"Opcje",id:"opcje",level:2},{value:"Przyk\u0142ady",id:"przyk\u0142ady",level:2}],s={toc:p};function m(e){var n=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Budowniczy diagram\xf3w Venna."),(0,i.kt)("h2",{id:"opcje"},"Opcje"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"nobs")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": ca\u0142kowita liczba obserwacji. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"three")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy maj\u0105 by\u0107 wy\u015bwietlane trzy k\xf3\u0142ka. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,i.kt)("h2",{id:"przyk\u0142ady"},"Przyk\u0142ady"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnVennDiagramBuilder />\n")))}m.isMDXComponent=!0}}]);