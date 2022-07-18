"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[89362],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},936370:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return b}});var r=n(603905),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&c(e,n,t[n]);return e};const d={id:"clt-continuous",title:"Continuous CLT",sidebar_label:"Continuous CLT"},m=void 0,f={unversionedId:"learn/clt-continuous",id:"learn/clt-continuous",title:"Continuous CLT",description:"\xd5ppekomponent, mis illustreerib valitud pideva jaotuse jaoks keskmist piirv\xe4\xe4rtuste teoreemi (CLT).",source:"@site/i18n/et/docusaurus-plugin-content-docs/current/learn/clt-continuous.md",sourceDirName:"learn",slug:"/learn/clt-continuous",permalink:"/et/docs/learn/clt-continuous",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/clt-continuous.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. juuni 2021",frontMatter:{id:"clt-continuous",title:"Continuous CLT",sidebar_label:"Continuous CLT"},sidebar:"docs",previous:{title:"Causality Diagram",permalink:"/et/docs/learn/causality-diagram"},next:{title:"Discrete CLT",permalink:"/et/docs/learn/clt-discrete"}},v={},b=[{value:"Valikud",id:"valikud",level:2},{value:"N\xe4ited",id:"n\xe4ited",level:2}],k={toc:b};function y(e){var t,n=e,{components:i}=n,c=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},k),c),a(t,o({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\xd5ppekomponent, mis illustreerib valitud pideva jaotuse jaoks keskmist piirv\xe4\xe4rtuste teoreemi (CLT)."),(0,r.kt)("h2",p({},{id:"valikud"}),"Valikud"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"distributions")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<string>"),': statistilised jaotused, mille vahel valida ("\xfchtlane", "eksponentsiaalne" ja/v\xf5i "normaalne").. Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"[\n  'uniform',\n  'exponential',\n  'normal'\n]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"samples")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(array<number>|number)"),": numbrite massiivi v\xf5i \xfcksikuid numbreid, mis t\xe4histavad valimi suurust, mida saab v\xf5tta.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"25"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hideFormulas")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollib, kas valemite peitmine komponendi tekstis on v\xf5imalik.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,r.kt)("h2",p({},{id:"n\xe4ited"}),"N\xe4ited"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LearnContinuousCLT />\n")))}y.isMDXComponent=!0}}]);