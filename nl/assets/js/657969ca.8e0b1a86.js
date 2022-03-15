"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8187],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(202784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},628029:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return f}});var r=n(487462),o=n(263366),a=(n(202784),n(603905)),i=["components"],l={id:"networks",title:"Networks",sidebar_label:"Networks"},s=void 0,u={unversionedId:"learn/networks",id:"learn/networks",title:"Networks",description:"Genereer netwerken van een Erd\u0151s-R\xe9nyi-model.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/learn/networks.md",sourceDirName:"learn",slug:"/learn/networks",permalink:"/nl/docs/learn/networks",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/networks.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21-2-2021",frontMatter:{id:"networks",title:"Networks",sidebar_label:"Networks"},sidebar:"docs",previous:{title:"Mean vs. Median",permalink:"/nl/docs/learn/mean-vs-median"},next:{title:"State of the Union Speeches",permalink:"/nl/docs/learn/sotu"}},c={},p=[{value:"Opties",id:"opties",level:2},{value:"Voorbeelden",id:"voorbeelden",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Genereer netwerken van een Erd\u0151s-R\xe9nyi-model."),(0,a.kt)("h2",{id:"opties"},"Opties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"maxNumNodes")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": maximumaantal knooppunten dat voor het netwerk kan worden geselecteerd. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"30"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"showEdgeChart")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": bepaalt of er een grafiek moet worden weergegeven met het aantal randen in elk gegenereerd netwerk (reset wanneer het aantal knooppunten wordt gewijzigd). Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"showTransitivities")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": de vraag of de transitiviteiten / de globale clusteringsco\xebffici\xebnten voor de gegenereerde netwerken moeten worden geteld. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,a.kt)("h2",{id:"voorbeelden"},"Voorbeelden"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnNetworks />\n")))}f.isMDXComponent=!0}}]);