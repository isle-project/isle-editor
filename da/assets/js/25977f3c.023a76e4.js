"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8314],{603905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,f=p["".concat(u,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},814125:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var r=n(487462),i=n(263366),o=(n(202784),n(603905)),l=["components"],a={id:"video-lecture",title:"Video Lecture",sidebar_label:"Video Lecture"},u=void 0,s={unversionedId:"video-lecture",id:"video-lecture",title:"Video Lecture",description:"En videoforel\xe6sningskomponent, der viser videoer med interaktive elementer.",source:"@site/i18n/da/docusaurus-plugin-content-docs/current/video-lecture.md",sourceDirName:".",slug:"/video-lecture",permalink:"/da/docs/video-lecture",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/video-lecture.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1622573195,formattedLastUpdatedAt:"1.6.2021",frontMatter:{id:"video-lecture",title:"Video Lecture",sidebar_label:"Video Lecture"},sidebar:"docs",previous:{title:"Lesson Submit",permalink:"/da/docs/lesson-submit"},next:{title:"Video Player",permalink:"/da/docs/video-player"}},d=[{value:"Indstillinger",id:"indstillinger",children:[],level:2},{value:"Eksempler",id:"eksempler",children:[],level:2}],c={toc:d};function p(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"En videoforel\xe6sningskomponent, der viser videoer med interaktive elementer."),(0,o.kt)("h2",{id:"indstillinger"},"Indstillinger"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"controls")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": angiver, om videoafspillernes kontrolelementer skal vises. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"instructorView")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": kontrollerer, om der skal medtages instrukt\xf8rvisning. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"linkToDashboard")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean"),": styrer, om der skal vises et link til instrumentbr\xe6ttet, n\xe5r videoforel\xe6sningen er afsluttet. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"steps")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"array (required)"),": array af video-URL'er og komponenter, der skal vises mellem dem. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"videoWidth")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(string|number)"),": videobredde. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"'100%'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"videoHeight")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"(string|number)"),": video h\xf8jde. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"'98vh'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"style")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"object"),": CSS inline-stil. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"{}"),".")),(0,o.kt)("h2",{id:"eksempler"},"Eksempler"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<VideoLecture steps={[\n    \'https://www.youtube.com/watch?v=Lkj8b25ppZo\',\n    <FreeTextQuestion id="video-lecture-brainstorming" question="Write down a few ideas of how one could enrich video lectures using other ISLE components" />\n]} />\n')))}p.isMDXComponent=!0}}]);