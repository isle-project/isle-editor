(self.webpackChunk=self.webpackChunk||[]).push([[9555],{603905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return h}});var o=n(202784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),h=i,m=c["".concat(s,".").concat(h)]||c[h]||p[h]||r;return n?o.createElement(m,a(a({ref:t},d),{},{components:n})):o.createElement(m,a({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<r;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},517186:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var o=n(722122),i=n(419756),r=(n(202784),n(603905)),a=["components"],l={id:"editor-intro",title:"Introduction to the Editor",sidebar_label:"Editor Introduction"},s=void 0,u={unversionedId:"tutorials/editor-intro",id:"tutorials/editor-intro",isDocsHomePage:!1,title:"Introduction to the Editor",description:"The ISLE editor is where you will write and export lessons. This tutorial will familiarize you with the layout and components of the editor itself, and in subsequent tutorials you will learn the powerful tools the editor provides.",source:"@site/docs/tutorials/editor-intro.md",sourceDirName:"tutorials",slug:"/tutorials/editor-intro",permalink:"/it/docs/tutorials/editor-intro",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tutorials/editor-intro.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1598888897,formattedLastUpdatedAt:"31/8/2020",frontMatter:{id:"editor-intro",title:"Introduction to the Editor",sidebar_label:"Editor Introduction"},sidebar:"docs",previous:{title:"Setting Up",permalink:"/it/docs/tutorials/getting-started"},next:{title:"Text",permalink:"/it/docs/tutorials/editor-text"}},d=[{value:"Creating and Opening ISLE Documents",id:"creating-and-opening-isle-documents",children:[]},{value:"Anatomy of the Editor",id:"anatomy-of-the-editor",children:[]},{value:"File Preamble",id:"file-preamble",children:[]},{value:"Linking to your ISLE Account",id:"linking-to-your-isle-account",children:[]},{value:"Exporting/Uploading the Lesson",id:"exportinguploading-the-lesson",children:[]},{value:"Your Turn",id:"your-turn",children:[]}],p={toc:d};function c(e){var t=e.components,l=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ISLE editor is where you will write and export lessons. This tutorial will familiarize you with the layout and components of the editor itself, and in subsequent tutorials you will learn the powerful tools the editor provides."),(0,r.kt)("h2",{id:"creating-and-opening-isle-documents"},"Creating and Opening ISLE Documents"),(0,r.kt)("p",null,"When you open the editor for the first time, you will see an untitled example lesson, showing you some of the features that can be included, such as an R shell, LaTeX equations, widgets, and videos."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Unitled Lesson",src:n(524413).default})),(0,r.kt)("p",null,"If you have previously used the ISLE editor, it will instead open the last document you worked on. To open a new blank document, use ",(0,r.kt)("strong",{parentName:"p"},"File -> New File"),". To open an existing document, use ",(0,r.kt)("strong",{parentName:"p"},"File -> Open File"),". And to save a new ISLE file, use ",(0,r.kt)("strong",{parentName:"p"},"File -> Save File As"),"; you will notice that ISLE files have the .isle extension."),(0,r.kt)("h2",{id:"anatomy-of-the-editor"},"Anatomy of the Editor"),(0,r.kt)("p",null,"The editor is divided into two panes. On the left is the raw text that gets compiled into exportable ISLE lessons which you can upload to your course, and on the right is a live preview of the compiled lesson. Note that you can interact with the live preview just as you will with the exported ISLE lesson. "),(0,r.kt)("p",null,"The syntax for writing in ISLE uses HTML and Markdown, and supports LaTeX equations. By default, all standard HTML tags are supported, but in addition it is also possible to insert custom ISLE tags which insert highly interactive and customizable elements into the lesson. An overview of writing text in ISLE can be found in the Text tutorial."),(0,r.kt)("h2",{id:"file-preamble"},"File Preamble"),(0,r.kt)("p",null,"At the top of an ISLE file is a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/YAML"},"YAML")," preamble, bounded by lines of three hyphens at the top and bottom. The preamble contains a variety of meta-information on the lesson, as well as variables that can be manipulated. Basic meta-information includes the ",(0,r.kt)("strong",{parentName:"p"},"title"),", ",(0,r.kt)("strong",{parentName:"p"},"author"),", and ",(0,r.kt)("strong",{parentName:"p"},"date")," of creation. These can be edited as desired. Other important components of the preamble, which we will cover in subsequent tutorials, include ",(0,r.kt)("strong",{parentName:"p"},"state")," and ",(0,r.kt)("strong",{parentName:"p"},"require"),"."),(0,r.kt)("h2",{id:"linking-to-your-isle-account"},"Linking to your ISLE Account"),(0,r.kt)("p",null,"Before you upload your first lesson, you need to link your local ISLE editor with your online ISLE account. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the top right of the ISLE editor, click ",(0,r.kt)("strong",{parentName:"li"},"Settings")),(0,r.kt)("li",{parentName:"ol"},"Under ",(0,r.kt)("strong",{parentName:"li"},"Server Address"),", enter the url for the ISLE server on which you have an account. Unless you have specifically set up a different server, this will be ",(0,r.kt)("inlineCode",{parentName:"li"},"https://isle.stat.cmu.edu")),(0,r.kt)("li",{parentName:"ol"},"Under ",(0,r.kt)("strong",{parentName:"li"},"Email")," enter the email you used to create your ISLE account."),(0,r.kt)("li",{parentName:"ol"},"Under ",(0,r.kt)("strong",{parentName:"li"},"Password"),", enter the password you use for your ISLE account."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Connect"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Connecting",src:n(37610).default})),(0,r.kt)("p",null,"You've now linked your editor to the server to which you will upload ISLE lessons."),(0,r.kt)("h2",{id:"exportinguploading-the-lesson"},"Exporting/Uploading the Lesson"),(0,r.kt)("p",null,"Once you've written a lesson, you can export it. To upload the lesson to your course's ISLE dashboard:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Export")," (in the top right of the editor window)."),(0,r.kt)("li",{parentName:"ol"},"Under ",(0,r.kt)("strong",{parentName:"li"},"Upload Lesson"),", select the course."),(0,r.kt)("li",{parentName:"ol"},"Enter a name for the lesson."),(0,r.kt)("li",{parentName:"ol"},"Decide whether to ",(0,r.kt)("strong",{parentName:"li"},"minify")," code. The final version that students will use should have this option checked, as it will help the lesson load and run quickly. We recommend keeping this checked by default."),(0,r.kt)("li",{parentName:"ol"},"Decide whether to ",(0,r.kt)("strong",{parentName:"li"},"Load ISLE resources from CDN"),". This option should be kept checked so that resources may be shared across various lessons."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Upload"),".")),(0,r.kt)("p",null,"Don't worry if it takes a little bit for the lesson to upload, and bigger lessons will take longer to upload. To return to editing the file, click ",(0,r.kt)("strong",{parentName:"p"},"Return to Editor")," (in the top right)."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Note on saving:")," it is possible to upload a lesson without saving the ISLE file. Remember to save your work as well as upload! "),(0,r.kt)("p",{parentName:"div"},"In case the file contains unsaved changed, a grey circle will be displayed next to the filename in the upper-left corner of the editor."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Upload GIF",src:n(611463).default})),(0,r.kt)("h2",{id:"your-turn"},"Your Turn"),(0,r.kt)("p",null,"Here are some things to try in the editor:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Create a new file and save it as "first_lesson.isle" in a desired directory.'),(0,r.kt)("li",{parentName:"ul"},"Change the video link to a different video. For example, you might use ",(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=hVimVzgtD6w"},"this")," Hans Rosling TED talk."),(0,r.kt)("li",{parentName:"ul"},'Change the text of the free text question, so that the question reads "Who was Hans Rosling?"'),(0,r.kt)("li",{parentName:"ul"},"Change the solution to the free text question, so the solution answers the new question."),(0,r.kt)("li",{parentName:"ul"},"Save your file, then upload the lesson to your ISLE course.")))}c.isMDXComponent=!0},37610:function(e,t,n){"use strict";e.exports=n.p+"092a9bd608a6421c8d0b.gif"},611463:function(e,t,n){"use strict";e.exports=n.p+"da49d19cef262c536687.gif"},524413:function(e,t,n){"use strict";e.exports=n.p+"5397dc3d1a6382661203.png"}}]);