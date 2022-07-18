"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43300],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return y}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),y=a,f=d["".concat(c,".").concat(y)]||d[y]||p[y]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},111019:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return y},default:function(){return k},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return b}});var r=n(603905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&s(e,n,t[n]);return e};const d={id:"clt-continuous",title:"Continuous CLT",sidebar_label:"Continuous CLT"},y=void 0,f={unversionedId:"learn/clt-continuous",id:"learn/clt-continuous",title:"Continuous CLT",description:"Komponent edukacyjny ilustruj\u0105cy Twierdzenie Centralnej Granicy (CLT) dla wybranej dystrybucji ci\u0105g\u0142ej.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/learn/clt-continuous.md",sourceDirName:"learn",slug:"/learn/clt-continuous",permalink:"/pl/docs/learn/clt-continuous",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/clt-continuous.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1616648808,formattedLastUpdatedAt:"25 mar 2021",frontMatter:{id:"clt-continuous",title:"Continuous CLT",sidebar_label:"Continuous CLT"},sidebar:"docs",previous:{title:"Causality Diagram",permalink:"/pl/docs/learn/causality-diagram"},next:{title:"Discrete CLT",permalink:"/pl/docs/learn/clt-discrete"}},m={},b=[{value:"Opcje",id:"opcje",level:2},{value:"Przyk\u0142ady",id:"przyk\u0142ady",level:2}],j={toc:b};function k(e){var t,n=e,{components:a}=n,s=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},j),s),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Komponent edukacyjny ilustruj\u0105cy Twierdzenie Centralnej Granicy (CLT) dla wybranej dystrybucji ci\u0105g\u0142ej."),(0,r.kt)("h2",p({},{id:"opcje"}),"Opcje"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"distributions")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<string>"),': rozk\u0142ady statystyczne do wyboru ("jednolite", "wyk\u0142adnicze" i/lub "normalne"). Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"[\n  'uniform',\n  'exponential',\n  'normal'\n]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"samples")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(array<number>|number)"),": tablica liczb lub pojedyncza liczba oznaczaj\u0105ca liczebno\u015b\u0107 pr\xf3by, kt\xf3r\u0105 mo\u017cna wylosowa\u0107. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"25"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hideFormulas")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy nale\u017cy ukrywa\u0107 formu\u0142y w tek\u015bcie sk\u0142adnika. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,r.kt)("h2",p({},{id:"przyk\u0142ady"}),"Przyk\u0142ady"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LearnContinuousCLT />\n")))}k.isMDXComponent=!0}}]);