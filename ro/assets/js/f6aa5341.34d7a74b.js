"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[32604],{603905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return m}});var t=n(202784);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=t.createContext({}),c=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},s=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||i;return n?t.createElement(f,o(o({ref:r},p),{},{components:n})):t.createElement(f,o({ref:r},p))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}s.displayName="MDXCreateElement"},36224:function(e,r,n){n.r(r),n.d(r,{assets:function(){return b},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return s},metadata:function(){return f},toc:function(){return g}});var t=n(603905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,r,n)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,d=(e,r)=>{for(var n in r||(r={}))u.call(r,n)&&p(e,n,r[n]);if(l)for(var n of l(r))c.call(r,n)&&p(e,n,r[n]);return e};const s={id:"venn-diagram-builder",title:"Venn Diagram Builder",sidebar_label:"Venn Diagram Builder"},m=void 0,f={unversionedId:"learn/venn-diagram-builder",id:"learn/venn-diagram-builder",title:"Venn Diagram Builder",description:"Un constructor de diagrame Venn.",source:"@site/i18n/ro/docusaurus-plugin-content-docs/current/learn/venn-diagram-builder.md",sourceDirName:"learn",slug:"/learn/venn-diagram-builder",permalink:"/ro/docs/learn/venn-diagram-builder",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/venn-diagram-builder.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1 iun. 2021",frontMatter:{id:"venn-diagram-builder",title:"Venn Diagram Builder",sidebar_label:"Venn Diagram Builder"},sidebar:"docs",previous:{title:"Statistical Models",permalink:"/ro/docs/learn/statistical-models"},next:{title:"Word Venn Diagram",permalink:"/ro/docs/learn/word-venn-diagram"}},b={},g=[{value:"Op\u021biuni",id:"op\u021biuni",level:2},{value:"Exemple",id:"exemple",level:2}],v={toc:g};function y(e){var r,n=e,{components:a}=n,p=((e,r)=>{var n={};for(var t in e)u.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&l)for(var t of l(e))r.indexOf(t)<0&&c.call(e,t)&&(n[t]=e[t]);return n})(n,["components"]);return(0,t.kt)("wrapper",(r=d(d({},v),p),i(r,o({components:a,mdxType:"MDXLayout"}))),(0,t.kt)("p",null,"Un constructor de diagrame Venn."),(0,t.kt)("h2",d({},{id:"op\u021biuni"}),"Op\u021biuni"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"nobs")," | ",(0,t.kt)("inlineCode",{parentName:"li"},"number"),": num\u0103rul total de observa\u021bii. Default: ",(0,t.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"three")," | ",(0,t.kt)("inlineCode",{parentName:"li"},"boolean"),": controleaz\u0103 dac\u0103 se afi\u0219eaz\u0103 sau nu trei cercuri. Default: ",(0,t.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,t.kt)("h2",d({},{id:"exemple"}),"Exemple"),(0,t.kt)("pre",null,(0,t.kt)("code",d({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LearnVennDiagramBuilder />\n")))}y.isMDXComponent=!0}}]);