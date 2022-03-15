"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6655],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},682139:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(487462),a=n(263366),o=(n(202784),n(603905)),l=["components"],i={id:"networks",title:"Networks",sidebar_label:"Networks"},s=void 0,u={unversionedId:"learn/networks",id:"learn/networks",title:"Networks",description:"H\xe1l\xf3zatok gener\xe1l\xe1sa Erd\u0151s-R\xe9nyi modellb\u0151l.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/learn/networks.md",sourceDirName:"learn",slug:"/learn/networks",permalink:"/hu/docs/learn/networks",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/networks.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021. 06. 01.",frontMatter:{id:"networks",title:"Networks",sidebar_label:"Networks"},sidebar:"docs",previous:{title:"Mean vs. Median",permalink:"/hu/docs/learn/mean-vs-median"},next:{title:"State of the Union Speeches",permalink:"/hu/docs/learn/sotu"}},c={},p=[{value:"Opci\xf3k",id:"opci\xf3k",level:2},{value:"P\xe9ld\xe1k",id:"p\xe9ld\xe1k",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"H\xe1l\xf3zatok gener\xe1l\xe1sa Erd\u0151s-R\xe9nyi modellb\u0151l."),(0,o.kt)("h2",{id:"opci\xf3k"},"Opci\xf3k"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"maxNumNodes")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"number"),": a h\xe1l\xf3zathoz kiv\xe1laszthat\xf3 csom\xf3pontok maxim\xe1lis sz\xe1ma. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"30"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"showEdgeChart")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": vez\xe9rli, hogy megjelenjen-e egy diagram, amely az \xe9lek sz\xe1m\xe1t mutatja minden egyes gener\xe1lt h\xe1l\xf3zatban (vissza\xe1ll, ha a csom\xf3pontok sz\xe1ma megv\xe1ltozik).. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"showTransitivities")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": a gener\xe1lt h\xe1l\xf3zatok tranzitivit\xe1sainak / glob\xe1lis klaszterez\xe9si egy\xfctthat\xf3inak \xf6sszesz\xe1ml\xe1l\xe1sa. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,o.kt)("h2",{id:"p\xe9ld\xe1k"},"P\xe9ld\xe1k"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnNetworks />\n")))}d.isMDXComponent=!0}}]);