"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4455],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(202784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||r;return n?i.createElement(f,l(l({ref:t},u),{},{components:n})):i.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7332:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return u},toc:function(){return s},default:function(){return d}});var i=n(487462),a=n(263366),r=(n(202784),n(603905)),l=["components"],o={id:"beacon-tooltip",title:"Beacon Tooltip",sidebar_label:"Beacon Tooltip"},p=void 0,c={unversionedId:"beacon-tooltip",id:"beacon-tooltip",title:"Beacon Tooltip",description:"Componenta care plaseaz\u0103 o baliz\u0103 \xeen lec\u021bie, fie independent, fie ata\u0219at la o \u021bint\u0103. La trecerea cu privirea sau la un clic pe baliz\u0103, se afi\u0219eaz\u0103 un tooltip.",source:"@site/i18n/ro/docusaurus-plugin-content-docs/current/beacon-tooltip.md",sourceDirName:".",slug:"/beacon-tooltip",permalink:"/ro/docs/beacon-tooltip",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/beacon-tooltip.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"01.06.2021",frontMatter:{id:"beacon-tooltip",title:"Beacon Tooltip",sidebar_label:"Beacon Tooltip"},sidebar:"docs",previous:{title:"Summary Statistics",permalink:"/ro/docs/summary-statistics"},next:{title:"Clock",permalink:"/ro/docs/clock"}},u={},s=[{value:"Op\u021biuni",id:"op\u021biuni",level:2},{value:"Exemple",id:"exemple",level:2}],m={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Componenta care plaseaz\u0103 o baliz\u0103 \xeen lec\u021bie, fie independent, fie ata\u0219at la o ",(0,r.kt)("inlineCode",{parentName:"p"},"\u021bint\u0103"),". La trecerea cu privirea sau la un clic pe baliz\u0103, se afi\u0219eaz\u0103 un tooltip."),(0,r.kt)("h2",{id:"op\u021biuni"},"Op\u021biuni"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"title")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": titlul care urmeaz\u0103 s\u0103 fie afi\u0219at \xeen partea de sus a tooltip-ului. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"content")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"(string|node)"),": con\u021binutul tooltip-ului. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'"),"content",(0,r.kt)("inlineCode",{parentName:"li"}," comes here...'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"event")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": dac\u0103 este setat la ",(0,r.kt)("inlineCode",{parentName:"li"},"click"),", tooltip-ul este activat atunci c\xe2nd se face clic pe baliz\u0103; dac\u0103 este setat la ",(0,r.kt)("inlineCode",{parentName:"li"},"hover"),", tooltip-ul este activat prin trecerea pe l\xe2ng\u0103 baliz\u0103. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'click'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"placement")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": plasarea tooltip-ului \xeen raport cu ",(0,r.kt)("inlineCode",{parentName:"li"},"target")," (fie ",(0,r.kt)("inlineCode",{parentName:"li"},"top"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"top-start"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"top-end"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"bottom"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"bottom-end"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"left"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"left-start"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"left-end"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"right"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"right-start"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"right-end"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"auto"),", sau ",(0,r.kt)("inlineCode",{parentName:"li"},"center"),"). Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"'left'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"target")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),": clas\u0103 sau selector ID pentru elementul la care se ata\u0219eaz\u0103 tooltip-ul. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"''"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"offset")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),": distan\u021ba dintre tooltip \u0219i ",(0,r.kt)("inlineCode",{parentName:"li"},"target")," \xeen pixeli. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"15"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"onChange")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function"),": callback invocat la schimbarea st\u0103rii tooltip-ului. Prime\u0219te dou\u0103 argumente: ",(0,r.kt)("inlineCode",{parentName:"li"},"action")," (",(0,r.kt)("inlineCode",{parentName:"li"},"open")," sau ",(0,r.kt)("inlineCode",{parentName:"li"},"close"),") \u0219i ",(0,r.kt)("inlineCode",{parentName:"li"},"props")," transmis.. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"onChange() {}"),".")),(0,r.kt)("h2",{id:"exemple"},"Exemple"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<BeaconTooltip\n    content="Body of the tooltip..."\n    title="Title comes here..."\n    event="hover"\n    placement="right"\n/>\n')))}d.isMDXComponent=!0}}]);