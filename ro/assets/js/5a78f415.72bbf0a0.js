(self.webpackChunk=self.webpackChunk||[]).push([[1140],{603905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(202784);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},403695:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=r(722122),i=r(419756),a=(r(202784),r(603905)),o={id:"revealer",title:"Revealer",sidebar_label:"Revealer"},l={unversionedId:"revealer",id:"revealer",isDocsHomePage:!1,title:"Revealer",description:"O component\u0103 ISLE pe care instructorii o pot utiliza pentru a dezv\u0103lui sau a ascunde \xeen mod selectiv con\u021binutul copiilor pentru to\u021bi elevii \xeen timpul orei.",source:"@site/i18n/ro/docusaurus-plugin-content-docs/current/revealer.md",sourceDirName:".",slug:"/revealer",permalink:"/docs/revealer",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/revealer.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"01.06.2021",sidebar_label:"Revealer",frontMatter:{id:"revealer",title:"Revealer",sidebar_label:"Revealer"},sidebar:"docs",previous:{title:"Language",permalink:"/docs/language"},next:{title:"Runner",permalink:"/docs/runner"}},u=[{value:"Op\u021biuni",id:"op\u021biuni",children:[]},{value:"Exemple",id:"exemple",children:[]}],c={toc:u};function p(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"O component\u0103 ISLE pe care instructorii o pot utiliza pentru a dezv\u0103lui sau a ascunde \xeen mod selectiv con\u021binutul copiilor pentru to\u021bi elevii \xeen timpul orei."),(0,a.kt)("h2",{id:"op\u021biuni"},"Op\u021biuni"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"message")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|node)"),": mesajul care trebuie afi\u0219at atunci c\xe2nd con\u021binutul este ascuns. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"show")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": controleaz\u0103 dac\u0103 se afi\u0219eaz\u0103 ini\u021bial elementele copil. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,a.kt)("h2",{id:"exemple"},"Exemple"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Revealer\n        id="mudgelove"\n    >\n        <div>\n            <h3>Content that will be revealed.</h3>\n        </div>\n</Revealer>\n')))}p.isMDXComponent=!0}}]);