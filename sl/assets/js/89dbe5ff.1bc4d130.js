"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4907],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,v=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(v,a(a({ref:t},s),{},{components:n})):r.createElement(v,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},125012:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},assets:function(){return s},toc:function(){return c},default:function(){return m}});var r=n(487462),i=n(263366),o=(n(202784),n(603905)),a=["components"],l={id:"video-lecture",title:"Video Lecture",sidebar_label:"Video Lecture"},u=void 0,p={unversionedId:"video-lecture",id:"video-lecture",title:"Video Lecture",description:"Komponenta video predavanja, ki prikazuje videoposnetke, prepletene z interaktivnimi elementi.",source:"@site/i18n/sl/docusaurus-plugin-content-docs/current/video-lecture.md",sourceDirName:".",slug:"/video-lecture",permalink:"/sl/docs/video-lecture",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/video-lecture.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1. 6. 2021",frontMatter:{id:"video-lecture",title:"Video Lecture",sidebar_label:"Video Lecture"},sidebar:"docs",previous:{title:"Lesson Submit",permalink:"/sl/docs/lesson-submit"},next:{title:"Video Player",permalink:"/sl/docs/video-player"}},s={},c=[{value:"Mo\u017enosti",id:"mo\u017enosti",level:2},{value:"Primeri",id:"primeri",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Komponenta video predavanja, ki prikazuje videoposnetke, prepletene z interaktivnimi elementi."),(0,o.kt)("h2",{id:"mo\u017enosti"},"Mo\u017enosti"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"controls")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": ozna\u010duje, ali naj se prika\u017eejo nadzorni elementi predvajalnikov videoposnetkov.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"instructorView")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": nadzoruje, ali naj se vklju\u010di pogled in\u0161truktorja.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"linkToDashboard")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": nadzoruje, ali se po kon\u010danem video predavanju prika\u017ee povezava do nadzorne plo\u0161\u010de.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"steps")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"array (required)"),": niz naslovov URL videoposnetkov in komponent, ki se prika\u017eejo med njimi.. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"videoWidth")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(string|number)"),": \u0161irina videoposnetka. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"'100%'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"videoHeight")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(string|number)"),": vi\u0161ina videoposnetka. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"'98vh'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"style")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object"),": Vnosni slog CSS. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,o.kt)("h2",{id:"primeri"},"Primeri"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<VideoLecture steps={[\n    \'https://www.youtube.com/watch?v=Lkj8b25ppZo\',\n    <FreeTextQuestion id="video-lecture-brainstorming" question="Write down a few ideas of how one could enrich video lectures using other ISLE components" />\n]} />\n')))}m.isMDXComponent=!0}}]);