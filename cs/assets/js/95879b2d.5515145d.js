"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8074],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(202784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},682817:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(487462),o=n(263366),i=(n(202784),n(603905)),a=["components"],c={id:"reaction",title:"Reaction",sidebar_label:"Reaction"},l=void 0,u={unversionedId:"reaction",id:"reaction",title:"Reaction",description:"Zobrazuje r\u016fzn\xe9 komponenty v z\xe1vislosti na akc\xedch u\u017eivatele.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/reaction.md",sourceDirName:".",slug:"/reaction",permalink:"/cs/docs/reaction",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/reaction.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. 6. 2021",frontMatter:{id:"reaction",title:"Reaction",sidebar_label:"Reaction"}},s=[{value:"Mo\u017enosti",id:"mo\u017enosti",children:[],level:2},{value:"P\u0159\xedklady",id:"p\u0159\xedklady",children:[],level:2}],p={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Zobrazuje r\u016fzn\xe9 komponenty v z\xe1vislosti na akc\xedch u\u017eivatele."),(0,i.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"actionID")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string (required)"),": ID sledovan\xe9 sou\u010d\xe1sti. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"show")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"(object|function)"),": hashovac\xed tabulka komponent, kter\xe9 se maj\xed zobrazit vzhledem k r\u016fzn\xfdm odpov\u011bd\xedm (pokud odpov\u011bdi neodpov\xedd\xe1 \u017e\xe1dn\xfd ",(0,i.kt)("inlineCode",{parentName:"li"},"key"),", zobraz\xed se hodnota odpov\xeddaj\xedc\xed ",(0,i.kt)("inlineCode",{parentName:"li"},"default")," kl\xed\u010di, pokud je nastaven) nebo funkce, kter\xe1 vr\xe1t\xed komponentu, kter\xe1 se m\xe1 zobrazit (jedin\xfdm argumentem funkce je posledn\xed v\xfdsledek).. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,i.kt)("h2",{id:"p\u0159\xedklady"},"P\u0159\xedklady"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<div>\n    <NumberQuestion\n        question="What is the first prime number?"\n        id="question-with-reaction"\n    />\n    <Reaction actionID="question-with-reaction" show={( answer ) => {\n        if ( answer === 2 ) {\n            return <p>Awesome, that was correct.</p>\n        }\n        return <p>You might want to review the following video on prime numbers:\n            <VideoPlayer url="https://www.youtube.com/watch?v=mIStB5X4U8M" />\n        </p>;\n    }} />\n</div>\n')))}d.isMDXComponent=!0}}]);