"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91390],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,d=p["".concat(u,".").concat(m)]||p[m]||f[m]||i;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},130663:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return f},metadata:function(){return d},toc:function(){return k}});var r=n(603905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&s(e,n,t[n]);return e};const f={id:"runner",title:"Runner",sidebar_label:"Runner"},m=void 0,d={unversionedId:"runner",id:"runner",title:"Runner",description:"Runner-komponentti suorittaa toimitetun toiminnon joko kerran tai tietyn ajan v\xe4lein.",source:"@site/i18n/fi/docusaurus-plugin-content-docs/current/runner.md",sourceDirName:".",slug:"/runner",permalink:"/fi/docs/runner",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/runner.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. kes\xe4k. 2021",frontMatter:{id:"runner",title:"Runner",sidebar_label:"Runner"},sidebar:"docs",previous:{title:"Revealer",permalink:"/fi/docs/revealer"},next:{title:"Timer",permalink:"/fi/docs/timer"}},v={},k=[{value:"Vaihtoehdot",id:"vaihtoehdot",level:2},{value:"Esimerkkej\xe4",id:"esimerkkej\xe4",level:2}],b={toc:k};function y(e){var t,n=e,{components:a}=n,s=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},b),s),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Runner-komponentti suorittaa toimitetun toiminnon joko kerran tai tietyn ajan v\xe4lein."),(0,r.kt)("h2",p({},{id:"vaihtoehdot"}),"Vaihtoehdot"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"active")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": valvoo, onko juoksijan oltava aktiivinen. Aktivoinnin j\xe4lkeen funktiota ",(0,r.kt)("inlineCode",{parentName:"li"},"onEvaluate")," kutsutaan annetulla aikav\xe4lill\xe4 (tai kerran).. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"interval")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": onEvaluate-ohjelman kutsujen v\xe4linen millisekuntien m\xe4\xe4r\xe4. Jos v\xe4li\xe4 ei ole asetettu, funktiota kutsutaan vain kerran.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onEvaluate")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": kutsuttava toiminto. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onEvaluate() {}"),".")),(0,r.kt)("h2",p({},{id:"esimerkkej\xe4"}),"Esimerkkej\xe4"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Runner\n    interval={2000}\n    onEvaluate={() => { console.log( 'Two seconds have passed...' ); }}\n/>\n")))}y.isMDXComponent=!0}}]);