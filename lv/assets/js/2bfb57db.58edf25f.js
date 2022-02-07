"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9459],{603905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,k=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},988298:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(487462),i=n(263366),a=(n(202784),n(603905)),o=["components"],l={id:"video-lecture",title:"Video Lecture",sidebar_label:"Video Lecture"},u=void 0,s={unversionedId:"video-lecture",id:"video-lecture",title:"Video Lecture",description:"Videolekcijas komponents, kur\u0101 tiek r\u0101d\u012bti videoklipi, kas mijas ar interakt\u012bviem elementiem.",source:"@site/i18n/lv/docusaurus-plugin-content-docs/current/video-lecture.md",sourceDirName:".",slug:"/video-lecture",permalink:"/lv/docs/video-lecture",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/video-lecture.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1.06.2021.",frontMatter:{id:"video-lecture",title:"Video Lecture",sidebar_label:"Video Lecture"},sidebar:"docs",previous:{title:"Lesson Submit",permalink:"/lv/docs/lesson-submit"},next:{title:"Video Player",permalink:"/lv/docs/video-player"}},c=[{value:"Iesp\u0113jas",id:"iesp\u0113jas",children:[],level:2},{value:"Piem\u0113ri",id:"piem\u0113ri",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Videolekcijas komponents, kur\u0101 tiek r\u0101d\u012bti videoklipi, kas mijas ar interakt\u012bviem elementiem."),(0,a.kt)("h2",{id:"iesp\u0113jas"},"Iesp\u0113jas"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"controls")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": nor\u0101da, vai tiek r\u0101d\u012bti video atska\u0146ot\u0101ju vad\u012bbas elementi.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"instructorView")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrol\u0113, vai iek\u013caut instruktora skats. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"linkToDashboard")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrol\u0113, vai p\u0113c video lekcijas pabeig\u0161anas tiek par\u0101d\u012bta saite uz paneli.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"steps")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"array (required)"),": videoklipu URL un to komponentu mas\u012bvs, kas tiks r\u0101d\u012bti starp tiem.. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"videoWidth")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|number)"),": video platums. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'100%'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"videoHeight")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"(string|number)"),": video augstums. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'98vh'"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"object"),": CSS ieb\u016bv\u0113tais stils. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,a.kt)("h2",{id:"piem\u0113ri"},"Piem\u0113ri"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<VideoLecture steps={[\n    \'https://www.youtube.com/watch?v=Lkj8b25ppZo\',\n    <FreeTextQuestion id="video-lecture-brainstorming" question="Write down a few ideas of how one could enrich video lectures using other ISLE components" />\n]} />\n')))}d.isMDXComponent=!0}}]);