"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[16552],{603905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(202784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},602756:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return b},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return w}});var n=r(603905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&p(e,r,t[r]);return e};const d={id:"networks",title:"Networks",sidebar_label:"Networks"},f=void 0,m={unversionedId:"learn/networks",id:"learn/networks",title:"Networks",description:"Generowanie sieci na podstawie modelu Erd\u0151s-R\xe9nyi.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/learn/networks.md",sourceDirName:"learn",slug:"/learn/networks",permalink:"/pl/docs/learn/networks",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/networks.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21.02.2021",frontMatter:{id:"networks",title:"Networks",sidebar_label:"Networks"},sidebar:"docs",previous:{title:"Mean vs. Median",permalink:"/pl/docs/learn/mean-vs-median"},next:{title:"State of the Union Speeches",permalink:"/pl/docs/learn/sotu"}},y={},w=[{value:"Opcje",id:"opcje",level:2},{value:"Przyk\u0142ady",id:"przyk\u0142ady",level:2}],k={toc:w};function b(e){var t,r=e,{components:a}=r,p=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},k),p),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Generowanie sieci na podstawie modelu Erd\u0151s-R\xe9nyi."),(0,n.kt)("h2",u({},{id:"opcje"}),"Opcje"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"maxNumNodes")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"number"),": maksymalna liczba w\u0119z\u0142\xf3w, kt\xf3re mog\u0105 by\u0107 wybrane do sieci. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"30"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"showEdgeChart")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy ma by\u0107 wy\u015bwietlany wykres pokazuj\u0105cy liczb\u0119 kraw\u0119dzi w ka\u017cdej generowanej sieci (reset przy zmianie liczby w\u0119z\u0142\xf3w). Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"showTransitivities")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean"),": czy zsumowa\u0107 wsp\xf3\u0142czynniki aktywno\u015bci tranzytowej / globalnego grupowania dla wygenerowanych sieci. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,n.kt)("h2",u({},{id:"przyk\u0142ady"}),"Przyk\u0142ady"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LearnNetworks />\n")))}b.isMDXComponent=!0}}]);