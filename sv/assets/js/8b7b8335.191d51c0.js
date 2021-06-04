(self.webpackChunk=self.webpackChunk||[]).push([[707],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var o=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,h=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},864841:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var o=n(722122),r=n(419756),i=(n(202784),n(603905)),a={id:"packaging",title:"Exporting lessons",sidebar_label:"Exporting lessons"},s={unversionedId:"overview/packaging",id:"overview/packaging",isDocsHomePage:!1,title:"Exporting lessons",description:'To bundle an ISLE lesson as a single-page application, go to the "Export" page inside the editor. Lessons can be uploaded to an ISLE course or exported locally by selecting an output directory. It is suggested to keep both the Minify and Load ISLE resources from CDN options checked as the reduction in file size due to minification is beneficial when the exported lesson is served over the Internet and using ISLE code via a CDN instead of including it in the exported bundle allows for multiple lessons to share code, further decreasing the amount of data viewers of the lessons have do download when accessing the page.',source:"@site/docs/overview/packaging.md",sourceDirName:"overview",slug:"/overview/packaging",permalink:"/docs/overview/packaging",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/overview/packaging.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1612555144,formattedLastUpdatedAt:"2021-02-05",sidebar_label:"Exporting lessons",frontMatter:{id:"packaging",title:"Exporting lessons",sidebar_label:"Exporting lessons"},sidebar:"docs",previous:{title:"Building a first ISLE lesson",permalink:"/docs/overview/first-lesson"},next:{title:"Components",permalink:"/docs/overview/components"}},l=[],c={toc:l};function p(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'To bundle an ISLE lesson as a single-page application, go to the "Export" page inside the editor. Lessons can be uploaded to an ISLE course or exported locally by selecting an output directory. It is suggested to keep both the ',(0,i.kt)("strong",{parentName:"p"},"Minify")," and ",(0,i.kt)("strong",{parentName:"p"},"Load ISLE resources from CDN")," options checked as the reduction in file size due to minification is beneficial when the exported lesson is served over the Internet and using ISLE code via a CDN instead of including it in the exported bundle allows for multiple lessons to share code, further decreasing the amount of data viewers of the lessons have do download when accessing the page."),(0,i.kt)("p",null,'When uploading your lesson, you may choose whether to make the lesson immediately available to students (by setting "Release to Students?" to ',(0,i.kt)("inlineCode",{parentName:"p"},"active"),") or whether it should remain hidden for students for now. In the latter case, you will need to activate the lesson later on from your ISLE dashboard."),(0,i.kt)("p",null,'The checkbox for "Show in Gallery?" allows you to either keep the lesson ',(0,i.kt)("inlineCode",{parentName:"p"},"private")," or make it available to other instructors on the lesson gallery of the dashboard (when set to ",(0,i.kt)("inlineCode",{parentName:"p"},"public"),")."),(0,i.kt)("p",null,"After the export process is finished, the lesson is either available online at the chosen location or can be found the chosen output directory. The exported lesson is viewable in any major and current web browser, and can be easily hosted on personal websites, GitHub pages or any other hosting service."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Export gif",src:n(464683).Z})))}p.isMDXComponent=!0},464683:function(e,t,n){"use strict";t.Z=n.p+"assets/images/export-20f7d98c9e9c9ac9f3268757d594d05c.gif"}}]);