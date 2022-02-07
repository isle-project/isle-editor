"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5703],{603905:function(e,r,n){n.d(r,{Zo:function(){return d},kt:function(){return m}});var t=n(202784);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=t.createContext({}),c=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},d=function(e){var r=c(e.components);return t.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(u,".").concat(m)]||p[m]||s[m]||i;return n?t.createElement(f,l(l({ref:r},d),{},{components:n})):t.createElement(f,l({ref:r},d))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var u in r)hasOwnProperty.call(r,u)&&(o[u]=r[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},248372:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var t=n(487462),a=n(263366),i=(n(202784),n(603905)),l=["components"],o={id:"venn-diagram-builder",title:"Venn Diagram Builder",sidebar_label:"Venn Diagram Builder"},u=void 0,c={unversionedId:"learn/venn-diagram-builder",id:"learn/venn-diagram-builder",title:"Venn Diagram Builder",description:"Venno diagramos k\u016br\u0117jas.",source:"@site/i18n/lt/docusaurus-plugin-content-docs/current/learn/venn-diagram-builder.md",sourceDirName:"learn",slug:"/learn/venn-diagram-builder",permalink:"/lt/docs/learn/venn-diagram-builder",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/venn-diagram-builder.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021-06-01",frontMatter:{id:"venn-diagram-builder",title:"Venn Diagram Builder",sidebar_label:"Venn Diagram Builder"},sidebar:"docs",previous:{title:"Statistical Models",permalink:"/lt/docs/learn/statistical-models"},next:{title:"Word Venn Diagram",permalink:"/lt/docs/learn/word-venn-diagram"}},d=[{value:"Parinktys",id:"parinktys",children:[],level:2},{value:"Pavyzd\u017eiai",id:"pavyzd\u017eiai",children:[],level:2}],s={toc:d};function p(e){var r=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Venno diagramos k\u016br\u0117jas."),(0,i.kt)("h2",{id:"parinktys"},"Parinktys"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"nobs")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": bendras steb\u0117jim\u0173 skai\u010dius. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"three")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroliuoja, ar rodyti tris apskritimus.. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,i.kt)("h2",{id:"pavyzd\u017eiai"},"Pavyzd\u017eiai"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnVennDiagramBuilder />\n")))}p.isMDXComponent=!0}}]);