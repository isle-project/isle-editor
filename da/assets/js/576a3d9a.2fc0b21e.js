"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2491],{603905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return c}});var r=t(202784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(t),c=a,f=u["".concat(d,".").concat(c)]||u[c]||m[c]||i;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},938279:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=t(487462),a=t(263366),i=(t(202784),t(603905)),l=["components"],o={id:"mean-vs-median",title:"Mean vs. Median",sidebar_label:"Mean vs. Median"},d=void 0,s={unversionedId:"learn/mean-vs-median",id:"learn/mean-vs-median",title:"Mean vs. Median",description:"Et interaktivt spil, der tester elevernes evne til at finde medianen og middelv\xe6rdien af en given fordeling.",source:"@site/i18n/da/docusaurus-plugin-content-docs/current/learn/mean-vs-median.md",sourceDirName:"learn",slug:"/learn/mean-vs-median",permalink:"/da/docs/learn/mean-vs-median",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/mean-vs-median.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1.6.2021",frontMatter:{id:"mean-vs-median",title:"Mean vs. Median",sidebar_label:"Mean vs. Median"},sidebar:"docs",previous:{title:"Image Pixel Picker",permalink:"/da/docs/learn/image-pixel-picker"},next:{title:"Networks",permalink:"/da/docs/learn/networks"}},p=[{value:"Indstillinger",id:"indstillinger",children:[],level:2},{value:"Eksempler",id:"eksempler",children:[],level:2}],m={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Et interaktivt spil, der tester elevernes evne til at finde medianen og middelv\xe6rdien af en given fordeling."),(0,i.kt)("h2",{id:"indstillinger"},"Indstillinger"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"feedback")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": styrer, om der skal vises feedback-knapper. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"header")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": titel p\xe5 det panel, hvor middelv\xe6rdien og medianen genereres. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"id")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),": komponent-id. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'mean_vs_median'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"intro")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"node"),": eventuelt indledende materiale, der m\xe5tte v\xe6re n\xf8dvendigt. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"seed")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),": fr\xf8 til initialisering af pseudorandomtalgenerator. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"showStatistics")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),": styrer, om der skal vises statistikker over elevers og gruppers pr\xe6stationer. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style")," | ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline-stilarter. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,i.kt)("h2",{id:"eksempler"},"Eksempler"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnMeanVSMedian />\n")))}u.isMDXComponent=!0}}]);