"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7890],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},497365:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return c},toc:function(){return m},default:function(){return d}});var r=n(487462),i=n(263366),o=(n(202784),n(603905)),a=["components"],s={id:"distribution-geometric",title:"Geometric Distribution",sidebar_label:"Geometric Distribution"},l=void 0,u={unversionedId:"learn/distribution-geometric",id:"learn/distribution-geometric",title:"Geometric Distribution",description:"Oppimiskomponentti geometrisen jakauman todenn\xe4k\xf6isyyksien laskemiseen.",source:"@site/i18n/fi/docusaurus-plugin-content-docs/current/learn/distribution-geometric.md",sourceDirName:"learn",slug:"/learn/distribution-geometric",permalink:"/fi/docs/learn/distribution-geometric",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-geometric.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1.6.2021",frontMatter:{id:"distribution-geometric",title:"Geometric Distribution",sidebar_label:"Geometric Distribution"},sidebar:"docs",previous:{title:"Gamma Distribution",permalink:"/fi/docs/learn/distribution-gamma"},next:{title:"Hypergeometric Distribution",permalink:"/fi/docs/learn/distribution-hypergeometric"}},c={},m=[{value:"Vaihtoehdot",id:"vaihtoehdot",level:2},{value:"Esimerkkej\xe4",id:"esimerkkej\xe4",level:2}],p={toc:m};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Oppimiskomponentti geometrisen jakauman todenn\xe4k\xf6isyyksien laskemiseen."),(0,o.kt)("h2",{id:"vaihtoehdot"},"Vaihtoehdot"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"countTrials")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": asetetaan arvoksi true, jos sen sijaan, ett\xe4 lasketaan ep\xe4onnistumisten m\xe4\xe4r\xe4 ensimm\xe4iseen onnistumiseen asti, geometrisen jakauman satunnaismuuttuja m\xe4\xe4ritet\xe4\xe4n kokeiden m\xe4\xe4r\xe4ksi ensimm\xe4iseen onnistumiseen asti.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"step")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(number|string)"),": vierityssy\xf6tteen askelkoko. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"0.01"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"style")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object"),": CSS-inline-tyylit. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,o.kt)("h2",{id:"esimerkkej\xe4"},"Esimerkkej\xe4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnGeometricDistribution />\n")))}d.isMDXComponent=!0}}]);