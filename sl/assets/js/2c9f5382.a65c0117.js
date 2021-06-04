(self.webpackChunk=self.webpackChunk||[]).push([[4124],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},987936:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var r=n(722122),a=n(419756),i=(n(202784),n(603905)),o={id:"causality-diagram",title:"Causality Diagram",sidebar_label:"Causality Diagram"},l={unversionedId:"learn/causality-diagram",id:"learn/causality-diagram",isDocsHomePage:!1,title:"Causality Diagram",description:"U\u010dna komponenta, ki ponazarja vpliv mote\u010de spremenljivke pri ocenjevanju vzro\u010dne zveze med dvema spremenljivkama in naklju\u010dnega izbora.",source:"@site/i18n/sl/docusaurus-plugin-content-docs/current/learn/causality-diagram.md",sourceDirName:"learn",slug:"/learn/causality-diagram",permalink:"/docs/learn/causality-diagram",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/causality-diagram.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. 6. 2021",sidebar_label:"Causality Diagram",frontMatter:{id:"causality-diagram",title:"Causality Diagram",sidebar_label:"Causality Diagram"},sidebar:"docs",previous:{title:"Unveil",permalink:"/docs/unveil"},next:{title:"Continuous CLT",permalink:"/docs/learn/clt-continuous"}},u=[{value:"Mo\u017enosti",id:"mo\u017enosti",children:[]},{value:"Primeri",id:"primeri",children:[]}],s={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"U\u010dna komponenta, ki ponazarja vpliv mote\u010de spremenljivke pri ocenjevanju vzro\u010dne zveze med dvema spremenljivkama in naklju\u010dnega izbora."),(0,i.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"x")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),": ime pojasnjevalne spremenljivke. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'Lights at Night'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"y")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),": ime spremenljivke odziva. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'Child Myopia'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"z")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(string|node)"),": ime spremenljivke, ki povzro\u010da zmedo. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'Parental Myopia'"),".")),(0,i.kt)("h2",{id:"primeri"},"Primeri"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<LearnCausalityDiagram x="X" y="Y" z="Z" />\n')))}c.isMDXComponent=!0}}]);