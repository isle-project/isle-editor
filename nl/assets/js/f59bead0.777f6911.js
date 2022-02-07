"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8504],{603905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var i=n(202784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(n),u=o,f=h["".concat(l,".").concat(u)]||h[u]||p[u]||r;return n?i.createElement(f,a(a({ref:t},d),{},{components:n})):i.createElement(f,a({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},578549:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var i=n(487462),o=n(263366),r=(n(202784),n(603905)),a=["components"],s={id:"editor",title:"ISLE Editor",sidebar_label:"ISLE Editor"},l=void 0,c={unversionedId:"overview/editor",id:"overview/editor",title:"ISLE Editor",description:"The editor is split into two panes: The left-hand side allows one to create ISLE lessons using HTML-like syntax and Markdown as well as LaTeX equations, whereas the right-hand side offers a live-preview of the created lesson. By default, all standard HTML tags are supported, but in addition it is also possible to insert custom ISLE tags which insert highly interactive and customizable elements into the lesson. The components section of this guide shows an overview of the available elements and their options.",source:"@site/docs/overview/editor.md",sourceDirName:"overview",slug:"/overview/editor",permalink:"/nl/docs/overview/editor",editUrl:"https://github.com/isle-project/isle-editor/edit/master/docusaurus/website/docs/overview/editor.md",tags:[],version:"current",lastUpdatedBy:"Planeshifter",lastUpdatedAt:1598888897,formattedLastUpdatedAt:"31-8-2020",frontMatter:{id:"editor",title:"ISLE Editor",sidebar_label:"ISLE Editor"},sidebar:"docs",previous:{title:"Installation",permalink:"/nl/docs/overview/install"},next:{title:"Lesson Structure",permalink:"/nl/docs/overview/structure"}},d=[{value:"Editor Features",id:"editor-features",children:[{value:"Live Preview",id:"live-preview",children:[],level:3},{value:"Markdown",id:"markdown",children:[],level:3},{value:"Auto-completion",id:"auto-completion",children:[],level:3},{value:"Snippets",id:"snippets",children:[],level:3}],level:2},{value:"Using the Context Menu to Insert Components",id:"using-the-context-menu-to-insert-components",children:[{value:"Collapsing",id:"collapsing",children:[],level:3},{value:"Error Messages",id:"error-messages",children:[],level:3},{value:"Search &amp; Replace",id:"search--replace",children:[],level:3}],level:2}],p={toc:d};function h(e){var t=e.components,s=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The editor is split into two panes: The left-hand side allows one to create ISLE lessons using HTML-like syntax and Markdown as well as LaTeX equations, whereas the right-hand side offers a live-preview of the created lesson. By default, all standard HTML tags are supported, but in addition it is also possible to insert custom ISLE tags which insert highly interactive and customizable elements into the lesson. The components section of this guide shows an overview of the available elements and their options."),(0,r.kt)("h2",{id:"editor-features"},"Editor Features"),(0,r.kt)("h3",{id:"live-preview"},"Live Preview"),(0,r.kt)("p",null,"The right-hand pane offers an interactive live-preview of the opened lesson. Whenever the content of the lesson is changed, this view will be re-rendered and all state variable are reset."),(0,r.kt)("h3",{id:"markdown"},"Markdown"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://daringfireball.net/projects/markdown/"},"Markdown")," can be used for writing sections of text. All text outside HTML and ISLE tags will be parsed as Markdown and rendered as HTML. See ",(0,r.kt)("a",{parentName:"p",href:"https://daringfireball.net/projects/markdown/syntax"},"this overview")," for an introduction to the Markdown syntax."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Markdown GIF",src:n(252219).Z,width:"1233",height:"541"})),(0,r.kt)("h3",{id:"auto-completion"},"Auto-completion"),(0,r.kt)("p",null,"While typing, live auto-completion offers suggestions of possible insertions. Hitting RETURN or TAB will insert the current selection. One can use the arrow keys to cycle through all available suggestions."),(0,r.kt)("h3",{id:"snippets"},"Snippets"),(0,r.kt)("p",null,"For the custom ISLE elements, the editor comes with snippets that allow you to quickly insert the respective elements with default settings, all the while offering a convenient way to change the default options. Using TAB, it is possible to cycle through and change the different options after the tag is inserted. CTRL-L will open up a list of all possible auto-completions, including the snippets that come with the ISLE editor."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Snippets GIF",src:n(176367).Z,width:"1268",height:"567"})),(0,r.kt)("h2",{id:"using-the-context-menu-to-insert-components"},"Using the Context Menu to Insert Components"),(0,r.kt)("p",null,"Right-clicking in the editor brings up a context menu, from which one may select a component from the list of available components to be inserted at the respective position by clicking on the respective name."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Contextmenu",src:n(200865).Z,width:"1254",height:"567"})),(0,r.kt)("p",null,"Clicking on the cogs icon to the right of a component will bring up the configuration wizard, which displays all the available attributes of the respective components and allows one to configure the component either through the synced table of attributes or the integrated code editor. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Configuration",src:n(335238).Z,width:"1100",height:"749"})),(0,r.kt)("h3",{id:"collapsing"},"Collapsing"),(0,r.kt)("p",null,"The contents in-between a tag can be collapsed when they span multiple lines. This can help one to maintain oversight of a larger lesson. To expand or collapse the contents of a tag, simply click on the arrows next to the line numbers on the left of the editor window."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Collapsing GIF",src:n(32659).Z,width:"1268",height:"567"})),(0,r.kt)("h3",{id:"error-messages"},"Error Messages"),(0,r.kt)("p",null,"The editor also displays error messages on the left next to the lines for which a problem is detected. Hovering over the red box will display the description of the identified problem."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Errors GIF",src:n(408221).Z,width:"939",height:"594"})),(0,r.kt)("h3",{id:"search--replace"},"Search & Replace"),(0,r.kt)("p",null,"Hitting CTRL-F will open a search window. The little icons in the lower right corner can be used to perform a case-sensitive search, a search using regular expressions or a whole word search. While the search window is open, another CTRL-F will open a tool bar allowing one to specify how found matches should be replaced."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Search GIF",src:n(535681).Z,width:"1294",height:"594"})))}h.isMDXComponent=!0},32659:function(e,t,n){t.Z=n.p+"assets/images/collapsing-0a2e4ae0a870dc216c7e71438cd1bae5.gif"},408221:function(e,t,n){t.Z=n.p+"assets/images/errors-fdce7237aa73c2166d2fc91757469ffa.gif"},252219:function(e,t,n){t.Z=n.p+"assets/images/markdown-4a575b144aa11c862e7f43a35a347a36.gif"},535681:function(e,t,n){t.Z=n.p+"assets/images/search-c7aec81b663ca917371a448dfd4f5f44.gif"},176367:function(e,t,n){t.Z=n.p+"assets/images/snippets-99b9ac430a622842dad64a8067aab8ae.gif"},335238:function(e,t,n){t.Z=n.p+"assets/images/configuration_wizard-701a72df4ea9a3eb3108ec83493ddf86.png"},200865:function(e,t,n){t.Z=n.p+"assets/images/contextmenu-02a8875c5b9cde582fbdd5d0ed7028ed.png"}}]);