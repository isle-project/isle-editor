(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{206:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n(3),i=n(7),r=(n(0),n(410)),a={id:"editor-intro",title:"Introduction to the Editor",sidebar_label:"Editor Introduction"},l={unversionedId:"tutorials/editor-intro",id:"tutorials/editor-intro",isDocsHomePage:!1,title:"Introduction to the Editor",description:"The ISLE editor is where you will write and export lessons. This tutorial will familiarize you with the layout and components of the editor itself, and in subsequent tutorials you will learn the powerful tools the editor provides.",source:"@site/docs/tutorials/editor-intro.md",slug:"/tutorials/editor-intro",permalink:"/nl/docs/tutorials/editor-intro",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/tutorials/editor-intro.md",version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1598888897,formattedLastUpdatedAt:"31-8-2020",sidebar_label:"Editor Introduction",sidebar:"docs",previous:{title:"Setting Up an Account and Course",permalink:"/nl/docs/tutorials/getting-started"},next:{title:"Entering Text",permalink:"/nl/docs/tutorials/editor-text"}},s=[{value:"Creating and Opening ISLE Documents",id:"creating-and-opening-isle-documents",children:[]},{value:"Anatomy of the Editor",id:"anatomy-of-the-editor",children:[]},{value:"File Preamble",id:"file-preamble",children:[]},{value:"Linking to your ISLE Account",id:"linking-to-your-isle-account",children:[]},{value:"Exporting/Uploading the Lesson",id:"exportinguploading-the-lesson",children:[]},{value:"Your Turn",id:"your-turn",children:[]}],c={toc:s};function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ISLE editor is where you will write and export lessons. This tutorial will familiarize you with the layout and components of the editor itself, and in subsequent tutorials you will learn the powerful tools the editor provides."),Object(r.b)("h2",{id:"creating-and-opening-isle-documents"},"Creating and Opening ISLE Documents"),Object(r.b)("p",null,"When you open the editor for the first time, you will see an untitled example lesson, showing you some of the features that can be included, such as an R shell, LaTeX equations, widgets, and videos."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Unitled Lesson",src:n(4675).default})),Object(r.b)("p",null,"If you have previously used the ISLE editor, it will instead open the last document you worked on. To open a new blank document, use ",Object(r.b)("strong",{parentName:"p"},"File -> New File"),". To open an existing document, use ",Object(r.b)("strong",{parentName:"p"},"File -> Open File"),". And to save a new ISLE file, use ",Object(r.b)("strong",{parentName:"p"},"File -> Save File As"),"; you will notice that ISLE files have the .isle extension."),Object(r.b)("h2",{id:"anatomy-of-the-editor"},"Anatomy of the Editor"),Object(r.b)("p",null,"The editor is divided into two panes. On the left is the raw text that gets compiled into exportable ISLE lessons which you can upload to your course, and on the right is a live preview of the compiled lesson. Note that you can interact with the live preview just as you will with the exported ISLE lesson. "),Object(r.b)("p",null,"The syntax for writing in ISLE uses HTML and Markdown, and supports LaTeX equations. By default, all standard HTML tags are supported, but in addition it is also possible to insert custom ISLE tags which insert highly interactive and customizable elements into the lesson. An overview of writing text in ISLE can be found in the Text tutorial."),Object(r.b)("h2",{id:"file-preamble"},"File Preamble"),Object(r.b)("p",null,"At the top of an ISLE file is a ",Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/YAML"},"YAML")," preamble, bounded by lines of three hyphens at the top and bottom. The preamble contains a variety of meta-information on the lesson, as well as variables that can be manipulated. Basic meta-information includes the ",Object(r.b)("strong",{parentName:"p"},"title"),", ",Object(r.b)("strong",{parentName:"p"},"author"),", and ",Object(r.b)("strong",{parentName:"p"},"date")," of creation. These can be edited as desired. Other important components of the preamble, which we will cover in subsequent tutorials, include ",Object(r.b)("strong",{parentName:"p"},"state")," and ",Object(r.b)("strong",{parentName:"p"},"require"),"."),Object(r.b)("h2",{id:"linking-to-your-isle-account"},"Linking to your ISLE Account"),Object(r.b)("p",null,"Before you upload your first lesson, you need to link your local ISLE editor with your online ISLE account. "),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"In the top right of the ISLE editor, click ",Object(r.b)("strong",{parentName:"li"},"Settings")),Object(r.b)("li",{parentName:"ol"},"Under ",Object(r.b)("strong",{parentName:"li"},"Server Address"),", enter the url for the ISLE server on which you have an account. Unless you have specifically set up a different server, this will be ",Object(r.b)("inlineCode",{parentName:"li"},"https://isle.stat.cmu.edu")),Object(r.b)("li",{parentName:"ol"},"Under ",Object(r.b)("strong",{parentName:"li"},"Email")," enter the email you used to create your ISLE account."),Object(r.b)("li",{parentName:"ol"},"Under ",Object(r.b)("strong",{parentName:"li"},"Password"),", enter the password you use for your ISLE account."),Object(r.b)("li",{parentName:"ol"},"Click ",Object(r.b)("strong",{parentName:"li"},"Connect"),".")),Object(r.b)("p",null,Object(r.b)("img",{alt:"Connecting",src:n(4676).default})),Object(r.b)("p",null,"You've now linked your editor to the server to which you will upload ISLE lessons."),Object(r.b)("h2",{id:"exportinguploading-the-lesson"},"Exporting/Uploading the Lesson"),Object(r.b)("p",null,"Once you've written a lesson, you can export it. To upload the lesson to your course's ISLE dashboard:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Click ",Object(r.b)("strong",{parentName:"li"},"Export")," (in the top right of the editor window)."),Object(r.b)("li",{parentName:"ol"},"Under ",Object(r.b)("strong",{parentName:"li"},"Upload Lesson"),", select the course."),Object(r.b)("li",{parentName:"ol"},"Enter a name for the lesson."),Object(r.b)("li",{parentName:"ol"},"Decide whether to ",Object(r.b)("strong",{parentName:"li"},"minify")," code. The final version that students will use should have this option checked, as it will help the lesson load and run quickly. We recommend keeping this checked by default."),Object(r.b)("li",{parentName:"ol"},"Decide whether to ",Object(r.b)("strong",{parentName:"li"},"Load ISLE resources from CDN"),". This option should be kept checked so that resources may be shared across various lessons."),Object(r.b)("li",{parentName:"ol"},"Click ",Object(r.b)("strong",{parentName:"li"},"Upload"),".")),Object(r.b)("p",null,"Don't worry if it takes a little bit for the lesson to upload, and bigger lessons will take longer to upload. To return to editing the file, click ",Object(r.b)("strong",{parentName:"p"},"Return to Editor")," (in the top right)."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"Note on saving:")," it is possible to upload a lesson without saving the ISLE file. Remember to save your work as well as upload! "),Object(r.b)("p",{parentName:"div"},"In case the file contains unsaved changed, a grey circle will be displayed next to the filename in the upper-left corner of the editor."))),Object(r.b)("p",null,Object(r.b)("img",{alt:"Upload GIF",src:n(4677).default})),Object(r.b)("h2",{id:"your-turn"},"Your Turn"),Object(r.b)("p",null,"Here are some things to try in the editor:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'Create a new file and save it as "first_lesson.isle" in a desired directory.'),Object(r.b)("li",{parentName:"ul"},"Change the video link to a different video. For example, you might use ",Object(r.b)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=hVimVzgtD6w"},"this")," Hans Rosling TED talk."),Object(r.b)("li",{parentName:"ul"},'Change the text of the free text question, so that the question reads "Who was Hans Rosling?"'),Object(r.b)("li",{parentName:"ul"},"Change the solution to the free text question, so the solution answers the new question."),Object(r.b)("li",{parentName:"ul"},"Save your file, then upload the lesson to your ISLE course.")))}u.isMDXComponent=!0},410:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var o=n(0),i=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=o,h=d["".concat(a,".").concat(b)]||d[b]||p[b]||r;return n?i.a.createElement(h,l(l({ref:t},c),{},{components:n})):i.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},4675:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/untitled_lesson-b96cce41d685ba1ff9c31d99661ac52f.png"},4676:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/connecting_to_isle-6ddb05a9de1645dfaa731319590564ec.gif"},4677:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/upload-90b7e45e8184f456c6f7cba1befca399.gif"}}]);