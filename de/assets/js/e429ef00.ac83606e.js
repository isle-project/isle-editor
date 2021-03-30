(window.webpackJsonp=window.webpackJsonp||[]).push([[1270],{295:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),o=(n(0),n(410)),a={id:"video-lecture",title:"Video Lecture",sidebar_label:"Video Lecture"},l={unversionedId:"video-lecture",id:"video-lecture",isDocsHomePage:!1,title:"Video Lecture",description:"Eine Videovortragskomponente, die Videos anzeigt, die mit interaktiven Elementen durchsetzt sind.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/video-lecture.md",slug:"/video-lecture",permalink:"/de/docs/video-lecture",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/video-lecture.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1613960760,formattedLastUpdatedAt:"21.2.2021",sidebar_label:"Video Lecture",sidebar:"docs",previous:{title:"Lesson Submit",permalink:"/de/docs/lesson-submit"},next:{title:"Video Player",permalink:"/de/docs/video-player"}},c=[{value:"Optionen",id:"optionen",children:[]},{value:"Beispiele",id:"beispiele",children:[]}],d={toc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Eine Videovortragskomponente, die Videos anzeigt, die mit interaktiven Elementen durchsetzt sind."),Object(o.b)("h2",{id:"optionen"},"Optionen"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"controls")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": gibt an, ob Bedienelemente der Video-Player angezeigt werden sollen. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"true"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"instructorView")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob die Dozentenansicht einbezogen werden soll. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"true"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"linkToDashboard")," | ",Object(o.b)("inlineCode",{parentName:"li"},"boolean"),": steuert, ob nach Abschluss des Videovortrags ein Link zum Dashboard angezeigt werden soll. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"steps")," | ",Object(o.b)("inlineCode",{parentName:"li"},"array (required)"),": Array von Video-URLs und Komponenten, die zwischendurch angezeigt werden sollen. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"videoWidth")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(string|number)"),": Videobreite. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"'100%'"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"videoHeight")," | ",Object(o.b)("inlineCode",{parentName:"li"},"(string|number)"),": Video-H\xf6he. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"'98vh'"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"style")," | ",Object(o.b)("inlineCode",{parentName:"li"},"object"),": CSS-Inline-Stil. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"{}"),".")),Object(o.b)("h2",{id:"beispiele"},"Beispiele"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<VideoLecture steps={[\n    \'https://www.youtube.com/watch?v=Lkj8b25ppZo\',\n    <FreeTextQuestion id="video-lecture-brainstorming" question="Write down a few ideas of how one could enrich video lectures using other ISLE components" />\n]} />\n')))}u.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),u=function(e){var t=i.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),b=u(n),p=r,m=b["".concat(a,".").concat(p)]||b[p]||s[p]||o;return n?i.a.createElement(m,l(l({ref:t},d),{},{components:n})):i.a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);