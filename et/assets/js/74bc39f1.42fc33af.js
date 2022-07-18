"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[49611],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,b=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(b,a(a({ref:t},c),{},{components:n})):r.createElement(b,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},313902:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return d},metadata:function(){return b},toc:function(){return y}});var r=n(603905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&c(e,n,t[n]);return e};const d={id:"distribution-binomial",title:"Binomial Distribution",sidebar_label:"Binomial Distribution"},m=void 0,b={unversionedId:"learn/distribution-binomial",id:"learn/distribution-binomial",title:"Binomial Distribution",description:"\xd5ppekomponent binoomjaotuse t\xf5en\xe4osuste arvutamiseks.",source:"@site/i18n/et/docusaurus-plugin-content-docs/current/learn/distribution-binomial.md",sourceDirName:"learn",slug:"/learn/distribution-binomial",permalink:"/et/docs/learn/distribution-binomial",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-binomial.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. juuni 2021",frontMatter:{id:"distribution-binomial",title:"Binomial Distribution",sidebar_label:"Binomial Distribution"},sidebar:"docs",previous:{title:"Beta Distribution",permalink:"/et/docs/learn/distribution-beta"},next:{title:"Chi-squared Distribution",permalink:"/et/docs/learn/distribution-chisquare"}},f={},y=[{value:"Valikud",id:"valikud",level:2},{value:"N\xe4ited",id:"n\xe4ited",level:2}],v={toc:y};function k(e){var t,n=e,{components:i}=n,c=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},v),c),o(t,a({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\xd5ppekomponent binoomjaotuse t\xf5en\xe4osuste arvutamiseks."),(0,r.kt)("h2",p({},{id:"valikud"}),"Valikud"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hideCDF")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollib, kas CDFi kuvamine on peidetud. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"step")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(number|string)"),": kerimise sisendi sammu suurus. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0.01"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline stiilid. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,r.kt)("h2",p({},{id:"n\xe4ited"}),"N\xe4ited"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LearnBinomialDistribution />\n")))}k.isMDXComponent=!0}}]);