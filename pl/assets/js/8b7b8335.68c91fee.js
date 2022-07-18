"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[90707],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(202784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,h=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},590142:function(e,t,n){t.Z=n.p+"assets/images/export-20f7d98c9e9c9ac9f3268757d594d05c.gif"},677244:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return f},default:function(){return v},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return b}});var r=n(603905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&p(e,n,t[n]);return e};const d={id:"packaging",title:"Exporting lessons",sidebar_label:"Exporting lessons"},f=void 0,h={unversionedId:"overview/packaging",id:"overview/packaging",title:"Exporting lessons",description:'To bundle an ISLE lesson as a single-page application, go to the "Export" page inside the editor. Lessons can be uploaded to an ISLE course or exported locally by selecting an output directory. It is suggested to keep both the Minify and Load ISLE resources from CDN options checked as the reduction in file size due to minification is beneficial when the exported lesson is served over the Internet and using ISLE code via a CDN instead of including it in the exported bundle allows for multiple lessons to share code, further decreasing the amount of data viewers of the lessons have do download when accessing the page.',source:"@site/docs/overview/packaging.md",sourceDirName:"overview",slug:"/overview/packaging",permalink:"/pl/docs/overview/packaging",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/overview/packaging.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612555144,formattedLastUpdatedAt:"5 lut 2021",frontMatter:{id:"packaging",title:"Exporting lessons",sidebar_label:"Exporting lessons"},sidebar:"docs",previous:{title:"First Lesson",permalink:"/pl/docs/overview/first-lesson"},next:{title:"Components",permalink:"/pl/docs/overview/components"}},g={},b=[],m={toc:b};function v(e){var t,o=e,{components:p}=o,d=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(o,["components"]);return(0,r.kt)("wrapper",(t=u(u({},m),d),i(t,a({components:p,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,'To bundle an ISLE lesson as a single-page application, go to the "Export" page inside the editor. Lessons can be uploaded to an ISLE course or exported locally by selecting an output directory. It is suggested to keep both the ',(0,r.kt)("strong",{parentName:"p"},"Minify")," and ",(0,r.kt)("strong",{parentName:"p"},"Load ISLE resources from CDN")," options checked as the reduction in file size due to minification is beneficial when the exported lesson is served over the Internet and using ISLE code via a CDN instead of including it in the exported bundle allows for multiple lessons to share code, further decreasing the amount of data viewers of the lessons have do download when accessing the page."),(0,r.kt)("p",null,'When uploading your lesson, you may choose whether to make the lesson immediately available to students (by setting "Release to Students?" to ',(0,r.kt)("inlineCode",{parentName:"p"},"active"),") or whether it should remain hidden for students for now. In the latter case, you will need to activate the lesson later on from your ISLE dashboard."),(0,r.kt)("p",null,'The checkbox for "Show in Gallery?" allows you to either keep the lesson ',(0,r.kt)("inlineCode",{parentName:"p"},"private")," or make it available to other instructors on the lesson gallery of the dashboard (when set to ",(0,r.kt)("inlineCode",{parentName:"p"},"public"),")."),(0,r.kt)("p",null,"After the export process is finished, the lesson is either available online at the chosen location or can be found the chosen output directory. The exported lesson is viewable in any major and current web browser, and can be easily hosted on personal websites, GitHub pages or any other hosting service."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Export gif",src:n(590142).Z,width:"1296",height:"755"})))}v.isMDXComponent=!0}}]);