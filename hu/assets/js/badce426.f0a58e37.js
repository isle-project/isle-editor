"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6729],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,b=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},244384:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(487462),i=n(263366),a=(n(202784),n(603905)),o=["components"],l={id:"distribution-beta",title:"Beta Distribution",sidebar_label:"Beta Distribution"},u=void 0,s={unversionedId:"learn/distribution-beta",id:"learn/distribution-beta",title:"Beta Distribution",description:"Tanul\xe1si komponens a b\xe9ta-eloszl\xe1s val\xf3sz\xedn\u0171s\xe9geinek kisz\xe1m\xedt\xe1s\xe1hoz.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/learn/distribution-beta.md",sourceDirName:"learn",slug:"/learn/distribution-beta",permalink:"/hu/docs/learn/distribution-beta",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-beta.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021. 06. 01.",frontMatter:{id:"distribution-beta",title:"Beta Distribution",sidebar_label:"Beta Distribution"},sidebar:"docs",previous:{title:"Word Venn Diagram",permalink:"/hu/docs/learn/word-venn-diagram"},next:{title:"Binomial Distribution",permalink:"/hu/docs/learn/distribution-binomial"}},c=[{value:"Opci\xf3k",id:"opci\xf3k",children:[],level:2},{value:"P\xe9ld\xe1k",id:"p\xe9ld\xe1k",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Tanul\xe1si komponens a b\xe9ta-eloszl\xe1s val\xf3sz\xedn\u0171s\xe9geinek kisz\xe1m\xedt\xe1s\xe1hoz."),(0,a.kt)("h2",{id:"opci\xf3k"},"Opci\xf3k"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"domain")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),': az "x" \xe9s "y" t\xf6mb\xf6k objektuma a megfelel\u0151 tengely kezd\u0151- \xe9s v\xe9gpontjaival.. Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"step")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(number|string)"),": a g\xf6rget\xe9si bemenet l\xe9p\xe9sm\xe9rete. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"0.01"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"tabs")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array<string>"),': mely lapok jelenjenek meg (a "kisebb", a "nagyobb" vagy a "tartom\xe1ny" lapok).. Default: ',(0,a.kt)("inlineCode",{parentName:"li"},"[\n  'smaller',\n  'greater',\n  'range'\n]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline st\xedlusok. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,a.kt)("h2",{id:"p\xe9ld\xe1k"},"P\xe9ld\xe1k"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnBetaDistribution />\n")))}d.isMDXComponent=!0}}]);