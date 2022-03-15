"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7873],{603905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=i,k=s["".concat(u,".").concat(m)]||s[m]||p[m]||o;return n?r.createElement(k,a(a({ref:t},d),{},{components:n})):r.createElement(k,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},215051:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},assets:function(){return d},toc:function(){return p},default:function(){return m}});var r=n(487462),i=n(263366),o=(n(202784),n(603905)),a=["components"],l={id:"video-lecture",title:"Video Lecture",sidebar_label:"Video Lecture"},u=void 0,c={unversionedId:"video-lecture",id:"video-lecture",title:"Video Lecture",description:"Komponenta videop\u0159edn\xe1\u0161ky, kter\xe1 zobrazuje videa prokl\xe1dan\xe1 interaktivn\xedmi prvky.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/video-lecture.md",sourceDirName:".",slug:"/video-lecture",permalink:"/cs/docs/video-lecture",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/video-lecture.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. 6. 2021",frontMatter:{id:"video-lecture",title:"Video Lecture",sidebar_label:"Video Lecture"},sidebar:"docs",previous:{title:"Lesson Submit",permalink:"/cs/docs/lesson-submit"},next:{title:"Video Player",permalink:"/cs/docs/video-player"}},d={},p=[{value:"Mo\u017enosti",id:"mo\u017enosti",level:2},{value:"P\u0159\xedklady",id:"p\u0159\xedklady",level:2}],s={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Komponenta videop\u0159edn\xe1\u0161ky, kter\xe1 zobrazuje videa prokl\xe1dan\xe1 interaktivn\xedmi prvky."),(0,o.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"controls")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": ur\u010duje, zda se maj\xed zobrazit ovl\xe1dac\xed prvky p\u0159ehr\xe1va\u010d\u016f videa.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"instructorView")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": kontroluje, zda m\xe1 b\xfdt zahrnuto zobrazen\xed instruktora. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"linkToDashboard")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": \u0159\xedd\xed, zda se m\xe1 po dokon\u010den\xed videop\u0159edn\xe1\u0161ky zobrazit odkaz na ovl\xe1dac\xed panel.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"steps")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"array (required)"),": pole adres URL videa a komponent, kter\xe9 se maj\xed zobrazit mezi nimi.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"videoWidth")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(string|number)"),": \u0161\xed\u0159ka videa. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"'100%'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"videoHeight")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(string|number)"),": v\xfd\u0161ka videa. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"'98vh'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"style")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object"),": \u0158\xe1dkov\xfd styl CSS. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,o.kt)("h2",{id:"p\u0159\xedklady"},"P\u0159\xedklady"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<VideoLecture steps={[\n    \'https://www.youtube.com/watch?v=Lkj8b25ppZo\',\n    <FreeTextQuestion id="video-lecture-brainstorming" question="Write down a few ideas of how one could enrich video lectures using other ISLE components" />\n]} />\n')))}m.isMDXComponent=!0}}]);