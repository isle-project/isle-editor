"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4936],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},763216:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return m},metadata:function(){return k},toc:function(){return b}});var r=n(603905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&s(e,n,t[n]);return e};const m={id:"proportions-input",title:"Proportions Input",sidebar_label:"Proportions Input"},d=void 0,k={unversionedId:"input/proportions-input",id:"input/proportions-input",title:"Proportions Input",description:"Egy ar\xe1nyos bemeneti komponens. Haszn\xe1lhat\xf3 egy ISLE m\u0171szerfal r\xe9szek\xe9nt vagy \xf6n\xe1ll\xf3an. Az ut\xf3bbi esetben a v\xe1ltoz\xe1sokat az onChange attrib\xfatummal kell kezelni, vagy az \xe9rt\xe9ket a bind attrib\xfatummal egy glob\xe1lis v\xe1ltoz\xf3hoz kell k\xf6tni.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/input/proportions.md",sourceDirName:"input",slug:"/input/proportions-input",permalink:"/hu/docs/input/proportions-input",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/input/proportions.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021. j\xfan. 1.",frontMatter:{id:"proportions-input",title:"Proportions Input",sidebar_label:"Proportions Input"},sidebar:"docs",previous:{title:"Number Input",permalink:"/hu/docs/input/number-input"},next:{title:"Select Input",permalink:"/hu/docs/input/select-input"}},f={},b=[{value:"Opci\xf3k",id:"opci\xf3k",level:2},{value:"P\xe9ld\xe1k",id:"p\xe9ld\xe1k",level:2}],g={toc:b};function y(e){var t,n=e,{components:a}=n,s=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},g),s),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Egy ar\xe1nyos bemeneti komponens. Haszn\xe1lhat\xf3 egy ISLE m\u0171szerfal r\xe9szek\xe9nt vagy \xf6n\xe1ll\xf3an. Az ut\xf3bbi esetben a v\xe1ltoz\xe1sokat az ",(0,r.kt)("inlineCode",{parentName:"p"},"onChange")," attrib\xfatummal kell kezelni, vagy az \xe9rt\xe9ket a ",(0,r.kt)("inlineCode",{parentName:"p"},"bind")," attrib\xfatummal egy glob\xe1lis v\xe1ltoz\xf3hoz kell k\xf6tni."),(0,r.kt)("h2",c({},{id:"opci\xf3k"}),"Opci\xf3k"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"colors")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<string>"),": a k\xf6rdiagram \xf6sszetev\u0151inek sz\xednt\xf6mbje. Ha nincs megadva, akkor egy egy\xe9ni sz\xednsk\xe1la lesz haszn\xe1lva.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disabled")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": szab\xe1lyozza, hogy a beviteli mez\u0151 ki van-e kapcsolva. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"height")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": ar\xe1nyok bemeneti magass\xe1g (px-ben). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"200"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legends")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array"),": csoportc\xedmk\xe9k. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChange")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": callback f\xfcggv\xe9ny, amelyet a v\xe1laszt\xe1skor kell megh\xedvni.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange(){}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"precision")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": az ar\xe1ny\xe9rt\xe9kek megjelen\xedtett pontoss\xe1ga. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"step")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": a nyilak l\xe9p\xe9se, amikor a kurzort a beviteli mez\u0151 f\xf6l\xe9 helyezz\xfck.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0.1"),".")),(0,r.kt)("h2",c({},{id:"p\xe9ld\xe1k"}),"P\xe9ld\xe1k"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<ProportionsInput\n    user\n    id="Survey"\n    question="Decide what is important"\n    group="Group decision"\n    nElements={3}\n    colors = {[ "red", "blue", "gold" ]}\n    personalHeight={300}\n    groupHeight={200}\n    margin="80px"\n    legends={[ "bitcoin", "old", "diamonds" ]}\n/>\n')))}y.isMDXComponent=!0}}]);