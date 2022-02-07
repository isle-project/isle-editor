"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5832],{603905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var i=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),c=r,k=p["".concat(s,".").concat(c)]||p[c]||m[c]||a;return n?i.createElement(k,o(o({ref:t},d),{},{components:n})):i.createElement(k,o({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},710965:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var i=n(487462),r=n(263366),a=(n(202784),n(603905)),o=["components"],l={id:"mean-vs-median",title:"Mean vs. Median",sidebar_label:"Mean vs. Median"},s=void 0,u={unversionedId:"learn/mean-vs-median",id:"learn/mean-vs-median",title:"Mean vs. Median",description:"Interaktyvus \u017eaidimas, kuriuo tikrinami mokini\u0173 geb\u0117jimai nustatyti duoto pasiskirstymo median\u0105 ir vidurk\u012f.",source:"@site/i18n/lt/docusaurus-plugin-content-docs/current/learn/mean-vs-median.md",sourceDirName:"learn",slug:"/learn/mean-vs-median",permalink:"/lt/docs/learn/mean-vs-median",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/learn/mean-vs-median.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"2021-06-01",frontMatter:{id:"mean-vs-median",title:"Mean vs. Median",sidebar_label:"Mean vs. Median"},sidebar:"docs",previous:{title:"Image Pixel Picker",permalink:"/lt/docs/learn/image-pixel-picker"},next:{title:"Networks",permalink:"/lt/docs/learn/networks"}},d=[{value:"Parinktys",id:"parinktys",children:[],level:2},{value:"Pavyzd\u017eiai",id:"pavyzd\u017eiai",children:[],level:2}],m={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Interaktyvus \u017eaidimas, kuriuo tikrinami mokini\u0173 geb\u0117jimai nustatyti duoto pasiskirstymo median\u0105 ir vidurk\u012f."),(0,a.kt)("h2",{id:"parinktys"},"Parinktys"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"feedback")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroliuoja, ar rodyti gr\u012f\u017etamojo ry\u0161io mygtukus.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"header")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": skydelio, kuriame bus generuojami vidurkis ir mediana, pavadinimas.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"id")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),": sudedamosios dalies identifikatorius. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'mean_vs_median'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"intro")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"node"),": bet kokia \u012fvadin\u0117 med\u017eiaga, kurios gali prireikti.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"seed")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),": s\u0117kla pseudorandom\u0173j\u0173 skai\u010di\u0173 generatoriui inicializuoti. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"showStatistics")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroliuoja, ar rodyti mokini\u0173 ir grupi\u0173 pasiekim\u0173 statistik\u0105.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS eilut\u0117s stiliai. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,a.kt)("h2",{id:"pavyzd\u017eiai"},"Pavyzd\u017eiai"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<LearnMeanVSMedian />\n")))}p.isMDXComponent=!0}}]);