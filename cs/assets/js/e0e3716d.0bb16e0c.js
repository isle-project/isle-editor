"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65093],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),f=i,m=c["".concat(u,".").concat(f)]||c[f]||d[f]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},963103:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return v},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return y}});var r=n(603905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&p(e,n,t[n]);return e};const d={id:"distribution-f",title:"F Distribution",sidebar_label:"F Distribution"},f=void 0,m={unversionedId:"learn/distribution-f",id:"learn/distribution-f",title:"F Distribution",description:"V\xfdukov\xe1 komponenta pro v\xfdpo\u010det pravd\u011bpodobnost\xed rozd\u011blen\xed F.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/learn/distribution-f.md",sourceDirName:"learn",slug:"/learn/distribution-f",permalink:"/cs/docs/learn/distribution-f",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/distribution-f.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1624125153,formattedLastUpdatedAt:"19. 6. 2021",frontMatter:{id:"distribution-f",title:"F Distribution",sidebar_label:"F Distribution"},sidebar:"docs",previous:{title:"Exponential Distribution",permalink:"/cs/docs/learn/distribution-exponential"},next:{title:"Gamma Distribution",permalink:"/cs/docs/learn/distribution-gamma"}},b={},y=[{value:"Mo\u017enosti",id:"mo\u017enosti",level:2},{value:"P\u0159\xedklady",id:"p\u0159\xedklady",level:2}],k={toc:y};function v(e){var t,n=e,{components:i}=n,p=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},k),p),o(t,a({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"V\xfdukov\xe1 komponenta pro v\xfdpo\u010det pravd\u011bpodobnost\xed rozd\u011blen\xed F."),(0,r.kt)("h2",c({},{id:"mo\u017enosti"}),"Mo\u017enosti"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"domain")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": objekt pol\xed ",(0,r.kt)("inlineCode",{parentName:"li"},"x")," a ",(0,r.kt)("inlineCode",{parentName:"li"},"y")," s po\u010d\xe1te\u010dn\xedm a koncov\xfdm bodem p\u0159\xedslu\u0161n\xe9 osy.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"step")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(number|string)"),": velikost kroku posuvn\xe9ho vstupu. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0.01"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"tabs")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"array<string>"),": kter\xe9 karty se maj\xed zobrazit (bu\u010f ",(0,r.kt)("inlineCode",{parentName:"li"},"less"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"greater"),", nebo ",(0,r.kt)("inlineCode",{parentName:"li"},"rozsah"),").. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"[\n  'smaller',\n  'greater',\n  'range'\n]"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"style")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),": \u0158\xe1dkov\xe9 styly CSS. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,r.kt)("h2",c({},{id:"p\u0159\xedklady"}),"P\u0159\xedklady"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<LearnFDistribution />\n")))}v.isMDXComponent=!0}}]);