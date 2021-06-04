(self.webpackChunk=self.webpackChunk||[]).push([[176],{603905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return d},kt:function(){return m}});var t=n(202784);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=t.createContext({}),c=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},d=function(e){var r=c(e.components);return t.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(u,".").concat(m)]||p[m]||s[m]||i;return n?t.createElement(f,o(o({ref:r},d),{},{components:n})):t.createElement(f,o({ref:r},d))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},141349:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var t=n(722122),a=n(419756),i=(n(202784),n(603905)),o={id:"venn-diagram-builder",title:"Venn Diagram Builder",sidebar_label:"Venn Diagram Builder"},l={unversionedId:"learn/venn-diagram-builder",id:"learn/venn-diagram-builder",isDocsHomePage:!1,title:"Venn Diagram Builder",description:"Een Venn diagrambouwer.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/learn/venn-diagram-builder.md",sourceDirName:"learn",slug:"/learn/venn-diagram-builder",permalink:"/docs/learn/venn-diagram-builder",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/venn-diagram-builder.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21-2-2021",sidebar_label:"Venn Diagram Builder",frontMatter:{id:"venn-diagram-builder",title:"Venn Diagram Builder",sidebar_label:"Venn Diagram Builder"},sidebar:"docs",previous:{title:"Statistical Models",permalink:"/docs/learn/statistical-models"},next:{title:"Word Venn Diagram",permalink:"/docs/learn/word-venn-diagram"}},u=[{value:"Opties",id:"opties",children:[]},{value:"Voorbeelden",id:"voorbeelden",children:[]}],c={toc:u};function d(e){var r=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Een Venn diagrambouwer."),(0,i.kt)("h2",{id:"opties"},"Opties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"nobs")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": totaal aantal waarnemingen. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"three")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": controleert of er drie cirkels moeten worden weergegeven. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,i.kt)("h2",{id:"voorbeelden"},"Voorbeelden"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnVennDiagramBuilder />\n")))}d.isMDXComponent=!0}}]);