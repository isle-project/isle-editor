"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[13815],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return b}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,b=m["".concat(u,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},403467:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return s},metadata:function(){return b},toc:function(){return y}});var r=n(603905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&c(e,n,t[n]);return e};const s={id:"distribution-gamma",title:"Gamma Distribution",sidebar_label:"Gamma Distribution"},d=void 0,b={unversionedId:"learn/distribution-gamma",id:"learn/distribution-gamma",title:"Gamma Distribution",description:"Komponent edukacyjny do obliczania prawdopodobie\u0144stwa rozk\u0142adu gamma.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/learn/distribution-gamma.md",sourceDirName:"learn",slug:"/learn/distribution-gamma",permalink:"/pl/docs/learn/distribution-gamma",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-gamma.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"22 lut 2021",frontMatter:{id:"distribution-gamma",title:"Gamma Distribution",sidebar_label:"Gamma Distribution"},sidebar:"docs",previous:{title:"F Distribution",permalink:"/pl/docs/learn/distribution-f"},next:{title:"Geometric Distribution",permalink:"/pl/docs/learn/distribution-geometric"}},f={},y=[{value:"Opcje",id:"opcje",level:2},{value:"Przyk\u0142ady",id:"przyk\u0142ady",level:2}],k={toc:y};function g(e){var t,n=e,{components:a}=n,c=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},k),c),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Komponent edukacyjny do obliczania prawdopodobie\u0144stwa rozk\u0142adu gamma."),(0,r.kt)("h2",m({},{id:"opcje"}),"Opcje"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"domain")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": obiekt tablicy ",(0,r.kt)("inlineCode",{parentName:"li"},"x")," i ",(0,r.kt)("inlineCode",{parentName:"li"},"y")," z punktem pocz\u0105tkowym i ko\u0144cowym dla danej osi. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"scaleParameterization")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, czy nale\u017cy stosowa\u0107 parametryzacj\u0119 obejmuj\u0105c\u0105 parametr kszta\u0142tu i skali zamiast kszta\u0142tu i pr\u0119dko\u015bci. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"step")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(number|string)"),": wielko\u015b\u0107 kroku wej\u015bcia przewijania. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0.01"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"symbols")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": czy wy\u015bwietla\u0107 greckie symbole dla parametr\xf3w. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tabs")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<string>"),": kt\xf3re zak\u0142adki maj\u0105 by\u0107 wy\u015bwietlane (albo ",(0,r.kt)("inlineCode",{parentName:"li"},"ma\u0142e"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"wi\u0119ksze"),", albo ",(0,r.kt)("inlineCode",{parentName:"li"},"zakresowe"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[\n  'smaller',\n  'greater',\n  'range'\n]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": Style CSS inline. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,r.kt)("h2",m({},{id:"przyk\u0142ady"}),"Przyk\u0142ady"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LearnGammaDistribution />\n")))}g.isMDXComponent=!0}}]);