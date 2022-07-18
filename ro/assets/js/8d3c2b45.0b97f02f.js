"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[89555],{603905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var o=n(202784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),h=r,f=c["".concat(s,".").concat(h)]||c[h]||p[h]||i;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},257090:function(e,t,n){t.Z=n.p+"assets/images/connecting_to_isle-6ddb05a9de1645dfaa731319590564ec.gif"},706090:function(e,t,n){t.Z=n.p+"assets/images/upload-90b7e45e8184f456c6f7cba1befca399.gif"},537119:function(e,t,n){t.Z=n.p+"assets/images/untitled_lesson-b96cce41d685ba1ff9c31d99661ac52f.png"},964757:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return h},default:function(){return k},frontMatter:function(){return c},metadata:function(){return f},toc:function(){return g}});var o=n(603905),r=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&d(e,n,t[n]);return e};const c={id:"editor-intro",title:"Introduction to the Editor",sidebar_label:"Editor Introduction"},h=void 0,f={unversionedId:"tutorials/editor-intro",id:"tutorials/editor-intro",title:"Introduction to the Editor",description:"The ISLE editor is where you will write and export lessons. This tutorial will familiarize you with the layout and components of the editor itself, and in subsequent tutorials you will learn the powerful tools the editor provides.",source:"@site/docs/tutorials/editor-intro.md",sourceDirName:"tutorials",slug:"/tutorials/editor-intro",permalink:"/ro/docs/tutorials/editor-intro",draft:!1,editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tutorials/editor-intro.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1598888897,formattedLastUpdatedAt:"31 aug. 2020",frontMatter:{id:"editor-intro",title:"Introduction to the Editor",sidebar_label:"Editor Introduction"},sidebar:"docs",previous:{title:"Setting Up",permalink:"/ro/docs/tutorials/getting-started"},next:{title:"Text",permalink:"/ro/docs/tutorials/editor-text"}},m={},g=[{value:"Creating and Opening ISLE Documents",id:"creating-and-opening-isle-documents",level:2},{value:"Anatomy of the Editor",id:"anatomy-of-the-editor",level:2},{value:"File Preamble",id:"file-preamble",level:2},{value:"Linking to your ISLE Account",id:"linking-to-your-isle-account",level:2},{value:"Exporting/Uploading the Lesson",id:"exportinguploading-the-lesson",level:2},{value:"Your Turn",id:"your-turn",level:2}],y={toc:g};function k(e){var t,r=e,{components:d}=r,c=((e,t)=>{var n={};for(var o in e)s.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&l)for(var o of l(e))t.indexOf(o)<0&&u.call(e,o)&&(n[o]=e[o]);return n})(r,["components"]);return(0,o.kt)("wrapper",(t=p(p({},y),c),i(t,a({components:d,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,"The ISLE editor is where you will write and export lessons. This tutorial will familiarize you with the layout and components of the editor itself, and in subsequent tutorials you will learn the powerful tools the editor provides."),(0,o.kt)("h2",p({},{id:"creating-and-opening-isle-documents"}),"Creating and Opening ISLE Documents"),(0,o.kt)("p",null,"When you open the editor for the first time, you will see an untitled example lesson, showing you some of the features that can be included, such as an R shell, LaTeX equations, widgets, and videos."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Unitled Lesson",src:n(537119).Z,width:"1856",height:"1080"})),(0,o.kt)("p",null,"If you have previously used the ISLE editor, it will instead open the last document you worked on. To open a new blank document, use ",(0,o.kt)("strong",{parentName:"p"},"File -> New File"),". To open an existing document, use ",(0,o.kt)("strong",{parentName:"p"},"File -> Open File"),". And to save a new ISLE file, use ",(0,o.kt)("strong",{parentName:"p"},"File -> Save File As"),"; you will notice that ISLE files have the .isle extension."),(0,o.kt)("h2",p({},{id:"anatomy-of-the-editor"}),"Anatomy of the Editor"),(0,o.kt)("p",null,"The editor is divided into two panes. On the left is the raw text that gets compiled into exportable ISLE lessons which you can upload to your course, and on the right is a live preview of the compiled lesson. Note that you can interact with the live preview just as you will with the exported ISLE lesson. "),(0,o.kt)("p",null,"The syntax for writing in ISLE uses HTML and Markdown, and supports LaTeX equations. By default, all standard HTML tags are supported, but in addition it is also possible to insert custom ISLE tags which insert highly interactive and customizable elements into the lesson. An overview of writing text in ISLE can be found in the Text tutorial."),(0,o.kt)("h2",p({},{id:"file-preamble"}),"File Preamble"),(0,o.kt)("p",null,"At the top of an ISLE file is a ",(0,o.kt)("a",p({parentName:"p"},{href:"https://en.wikipedia.org/wiki/YAML"}),"YAML")," preamble, bounded by lines of three hyphens at the top and bottom. The preamble contains a variety of meta-information on the lesson, as well as variables that can be manipulated. Basic meta-information includes the ",(0,o.kt)("strong",{parentName:"p"},"title"),", ",(0,o.kt)("strong",{parentName:"p"},"author"),", and ",(0,o.kt)("strong",{parentName:"p"},"date")," of creation. These can be edited as desired. Other important components of the preamble, which we will cover in subsequent tutorials, include ",(0,o.kt)("strong",{parentName:"p"},"state")," and ",(0,o.kt)("strong",{parentName:"p"},"require"),"."),(0,o.kt)("h2",p({},{id:"linking-to-your-isle-account"}),"Linking to your ISLE Account"),(0,o.kt)("p",null,"Before you upload your first lesson, you need to link your local ISLE editor with your online ISLE account. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the top right of the ISLE editor, click ",(0,o.kt)("strong",{parentName:"li"},"Settings")),(0,o.kt)("li",{parentName:"ol"},"Under ",(0,o.kt)("strong",{parentName:"li"},"Server Address"),", enter the url for the ISLE server on which you have an account. Unless you have specifically set up a different server, this will be ",(0,o.kt)("inlineCode",{parentName:"li"},"https://isle.stat.cmu.edu")),(0,o.kt)("li",{parentName:"ol"},"Under ",(0,o.kt)("strong",{parentName:"li"},"Email")," enter the email you used to create your ISLE account."),(0,o.kt)("li",{parentName:"ol"},"Under ",(0,o.kt)("strong",{parentName:"li"},"Password"),", enter the password you use for your ISLE account."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Connect"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Connecting",src:n(257090).Z,width:"1846",height:"926"})),(0,o.kt)("p",null,"You've now linked your editor to the server to which you will upload ISLE lessons."),(0,o.kt)("h2",p({},{id:"exportinguploading-the-lesson"}),"Exporting/Uploading the Lesson"),(0,o.kt)("p",null,"Once you've written a lesson, you can export it. To upload the lesson to your course's ISLE dashboard:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Export")," (in the top right of the editor window)."),(0,o.kt)("li",{parentName:"ol"},"Under ",(0,o.kt)("strong",{parentName:"li"},"Upload Lesson"),", select the course."),(0,o.kt)("li",{parentName:"ol"},"Enter a name for the lesson."),(0,o.kt)("li",{parentName:"ol"},"Decide whether to ",(0,o.kt)("strong",{parentName:"li"},"minify")," code. The final version that students will use should have this option checked, as it will help the lesson load and run quickly. We recommend keeping this checked by default."),(0,o.kt)("li",{parentName:"ol"},"Decide whether to ",(0,o.kt)("strong",{parentName:"li"},"Load ISLE resources from CDN"),". This option should be kept checked so that resources may be shared across various lessons."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Upload"),".")),(0,o.kt)("p",null,"Don't worry if it takes a little bit for the lesson to upload, and bigger lessons will take longer to upload. To return to editing the file, click ",(0,o.kt)("strong",{parentName:"p"},"Return to Editor")," (in the top right)."),(0,o.kt)("admonition",p({},{type:"info"}),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Note on saving:")," it is possible to upload a lesson without saving the ISLE file. Remember to save your work as well as upload! "),(0,o.kt)("p",{parentName:"admonition"},"In case the file contains unsaved changed, a grey circle will be displayed next to the filename in the upper-left corner of the editor.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Upload GIF",src:n(706090).Z,width:"1750",height:"711"})),(0,o.kt)("h2",p({},{id:"your-turn"}),"Your Turn"),(0,o.kt)("p",null,"Here are some things to try in the editor:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Create a new file and save it as "first_lesson.isle" in a desired directory.'),(0,o.kt)("li",{parentName:"ul"},"Change the video link to a different video. For example, you might use ",(0,o.kt)("a",p({parentName:"li"},{href:"https://www.youtube.com/watch?v=hVimVzgtD6w"}),"this")," Hans Rosling TED talk."),(0,o.kt)("li",{parentName:"ul"},'Change the text of the free text question, so that the question reads "Who was Hans Rosling?"'),(0,o.kt)("li",{parentName:"ul"},"Change the solution to the free text question, so the solution answers the new question."),(0,o.kt)("li",{parentName:"ul"},"Save your file, then upload the lesson to your ISLE course.")))}k.isMDXComponent=!0}}]);