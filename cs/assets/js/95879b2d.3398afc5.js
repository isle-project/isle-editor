"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[98074],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(202784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},890966:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return b}});var r=n(603905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&p(e,n,t[n]);return e};const d={id:"reaction",title:"Reaction",sidebar_label:"Reaction"},f=void 0,m={unversionedId:"reaction",id:"reaction",title:"Reaction",description:"Zobrazuje r\u016fzn\xe9 komponenty v z\xe1vislosti na akc\xedch u\u017eivatele.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/reaction.md",sourceDirName:".",slug:"/reaction",permalink:"/cs/docs/reaction",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/reaction.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1653765965,formattedLastUpdatedAt:"28. 5. 2022",frontMatter:{id:"reaction",title:"Reaction",sidebar_label:"Reaction"}},v={},b=[{value:"Mo\u017enosti",id:"mo\u017enosti",level:2},{value:"P\u0159\xedklady",id:"p\u0159\xedklady",level:2}],k={toc:b};function y(e){var t,n=e,{components:o}=n,p=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},k),p),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Zobrazuje r\u016fzn\xe9 komponenty v z\xe1vislosti na akc\xedch u\u017eivatele."),(0,r.kt)("h2",s({},{id:"mo\u017enosti"}),"Mo\u017enosti"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"actionID")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string (required)"),": ID sledovan\xe9 sou\u010d\xe1sti. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"banner")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"node"),": vlastn\xed zpr\xe1va, kter\xe1 se zobraz\xed, pokud u\u017eivatel je\u0161t\u011b neprovedl akci.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"show")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(object|function)"),": hashovac\xed tabulka komponent, kter\xe9 se maj\xed zobrazit vzhledem k r\u016fzn\xfdm odpov\u011bd\xedm (pokud odpov\u011bdi neodpov\xedd\xe1 \u017e\xe1dn\xfd ",(0,r.kt)("inlineCode",{parentName:"li"},"key"),", zobraz\xed se hodnota odpov\xeddaj\xedc\xed ",(0,r.kt)("inlineCode",{parentName:"li"},"default")," kl\xed\u010di, pokud je nastaven) nebo funkce, kter\xe1 vr\xe1t\xed komponentu, kter\xe1 se m\xe1 zobrazit (jedin\xfdm argumentem funkce je posledn\xed v\xfdsledek).. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,r.kt)("h2",s({},{id:"p\u0159\xedklady"}),"P\u0159\xedklady"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<div>\n    <NumberQuestion\n        question="What is the first prime number?"\n        id="question-with-reaction"\n    />\n    <Reaction actionID="question-with-reaction" show={( answer ) => {\n        if ( answer === 2 ) {\n            return <p>Awesome, that was correct.</p>\n        }\n        return <p>You might want to review the following video on prime numbers:\n            <VideoPlayer url="https://www.youtube.com/watch?v=mIStB5X4U8M" />\n        </p>;\n    }} />\n</div>\n')))}y.isMDXComponent=!0}}]);