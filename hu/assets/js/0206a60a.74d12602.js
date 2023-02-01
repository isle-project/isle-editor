"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[28322],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),f=a,d=s["".concat(c,".").concat(f)]||s[f]||m[f]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},385851:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return b}});var r=n(603905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&p(e,n,t[n]);return e};const m={id:"reaction",title:"Reaction",sidebar_label:"Reaction"},f=void 0,d={unversionedId:"reaction",id:"reaction",title:"Reaction",description:"A felhaszn\xe1l\xf3 m\u0171veleteit\u0151l f\xfcgg\u0151en k\xfcl\xf6nb\xf6z\u0151 komponenseket jelen\xedt meg.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/reaction.md",sourceDirName:".",slug:"/reaction",permalink:"/hu/docs/reaction",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/reaction.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1653765965,formattedLastUpdatedAt:"2022. m\xe1j. 28.",frontMatter:{id:"reaction",title:"Reaction",sidebar_label:"Reaction"}},g={},b=[{value:"Opci\xf3k",id:"opci\xf3k",level:2},{value:"P\xe9ld\xe1k",id:"p\xe9ld\xe1k",level:2}],k={toc:b};function y(e){var t,n=e,{components:a}=n,p=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},k),p),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"A felhaszn\xe1l\xf3 m\u0171veleteit\u0151l f\xfcgg\u0151en k\xfcl\xf6nb\xf6z\u0151 komponenseket jelen\xedt meg."),(0,r.kt)("h2",s({},{id:"opci\xf3k"}),"Opci\xf3k"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"actionID")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string (required)"),": A megfigyelend\u0151 komponens azonos\xedt\xf3ja. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"banner")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"node"),": egy\xe9ni \xfczenet jelenik meg, ha a felhaszn\xe1l\xf3 m\xe9g nem hajtotta v\xe9gre a m\u0171veletet. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"show")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(object|function)"),': a k\xfcl\xf6nb\xf6z\u0151 v\xe1laszok alapj\xe1n megjelen\xedtend\u0151 komponensek hash t\xe1bl\xe1zata (ha nincs a v\xe1lasznak megfelel\u0151 "kulcs", akkor az "alap\xe9rtelmezett" kulcsnak megfelel\u0151 \xe9rt\xe9k jelenik meg, ha be van \xe1ll\xedtva) vagy egy f\xfcggv\xe9ny, amely visszaadja a megjelen\xedtend\u0151 komponenst (a f\xfcggv\xe9ny egyetlen argumentuma a legut\xf3bbi eredm\xe9ny).. Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,r.kt)("h2",s({},{id:"p\xe9ld\xe1k"}),"P\xe9ld\xe1k"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<div>\n    <NumberQuestion\n        question="What is the first prime number?"\n        id="question-with-reaction"\n    />\n    <Reaction actionID="question-with-reaction" show={( answer ) => {\n        if ( answer === 2 ) {\n            return <p>Awesome, that was correct.</p>\n        }\n        return <p>You might want to review the following video on prime numbers:\n            <VideoPlayer url="https://www.youtube.com/watch?v=mIStB5X4U8M" />\n        </p>;\n    }} />\n</div>\n')))}y.isMDXComponent=!0}}]);